#!/usr/bin/env node
// Scrapes the four landing-page vanity metrics (GitHub stars, community script
// count, install/user count across the three web stores, and the aggregated
// contributor list) and writes them to src/data/landing-stats.json so the
// homepage can import them at build time.
//
// Robustness contract: this script must NEVER regress a number to 0. It reads
// the previously committed src/data/landing-stats.json first; if any single
// metric fails, times out, or returns an implausible value, the previous
// committed value for that metric is kept. The script always exits 0 unless it
// literally cannot write the output file.
//
// Usage:
//   node scripts/fetch-landing-stats.mjs
//   GITHUB_TOKEN=<pat> node scripts/fetch-landing-stats.mjs   # avoids the 60/hr
//                                                             # unauthenticated
//                                                             # GitHub rate limit

import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join, dirname, relative } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const OUT_FILE = join(ROOT, "src", "data", "landing-stats.json");

// Repos whose contributor lists get aggregated (deduped) into one number/list.
// Edit this array to add or remove repos.
const CONTRIBUTOR_REPOS = [
  "scriptscat/scriptcat",
  "scriptscat/scriptcat.org",
  "scriptscat/scriptlist-frontend",
  "scriptscat/tampermonkey-learn-guide",
];

// Logins (exact, lowercased) that are bots/AI helpers and must be excluded from
// the human contributor list. `user.type === "Bot"`, a `[bot]` suffix, and a
// trailing "-bot" are also filtered separately.
const BOT_DENYLIST = new Set([
  "actions-user",
  "github-actions",
  "dependabot",
  "renovate",
  "renovate-bot",
  "crowdin-bot",
  "weblate",
  "imgbot",
  "codecov",
  "codecov-commenter",
  "snyk-bot",
  "semantic-release-bot",
  "greenkeeper",
  "allcontributors",
  "fossabot",
  "claude",
  "claude-bot",
  "copilot",
  "github-copilot",
  "cursor",
  "cursoragent",
  "devin-ai-integration",
]);

// Store detail pages block obvious bots, so pretend to be a real browser.
const BROWSER_UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
  "(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

const REQUEST_TIMEOUT_MS = 15000;

// Fallback used only when no committed src/data/landing-stats.json exists yet.
// Real-ish seeds so the first build has a valid file; CI overwrites it.
const DEFAULT_STATS = {
  updatedAt: null,
  stars: 4836,
  scripts: 3150,
  users: 100000,
  usersByStore: { chrome: null, edge: null, firefox: null },
  contributors: { count: 210, list: [] },
};

async function fetchWithTimeout(url, options = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

// Coerce a value to an integer, tolerating comma-grouped strings ("100,000").
function toInt(value) {
  if (typeof value === "number") {
    return Number.isFinite(value) ? Math.trunc(value) : NaN;
  }
  if (typeof value === "string") {
    const n = parseInt(value.replace(/[,\s]/g, ""), 10);
    return Number.isFinite(n) ? n : NaN;
  }
  return NaN;
}

function isPlausible(n) {
  return Number.isInteger(n) && n > 0;
}

// ---- Metric 1: GitHub stars --------------------------------------------------

async function fetchStars(previous) {
  try {
    const res = await fetchWithTimeout("https://scriptcat.org/api/v2/github-stats");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    const stars = toInt(json?.data?.stars);
    if (!isPlausible(stars)) throw new Error(`implausible value: ${json?.data?.stars}`);
    console.log(`[stars] fetched ${stars}`);
    return stars;
  } catch (err) {
    console.warn(`[stars] failed (${err.message}); keeping previous ${previous}`);
    return previous;
  }
}

// ---- Metric 2: community script count ---------------------------------------

async function fetchScripts(previous) {
  try {
    const res = await fetchWithTimeout("https://scriptcat.org/api/v2/scripts?size=1");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    const total = toInt(json?.data?.total);
    if (!isPlausible(total)) throw new Error(`implausible value: ${json?.data?.total}`);
    console.log(`[scripts] fetched ${total}`);
    return total;
  } catch (err) {
    console.warn(`[scripts] failed (${err.message}); keeping previous ${previous}`);
    return previous;
  }
}

// ---- Metric 3: install/user count per store ---------------------------------

async function fetchFirefoxUsers() {
  const res = await fetchWithTimeout(
    "https://addons.mozilla.org/api/v5/addons/addon/scriptcat/",
    { headers: { "User-Agent": BROWSER_UA, Accept: "application/json" } }
  );
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const json = await res.json();
  const n = toInt(json?.average_daily_users);
  if (!isPlausible(n)) throw new Error(`implausible value: ${json?.average_daily_users}`);
  return n;
}

async function fetchEdgeUsers() {
  const res = await fetchWithTimeout(
    "https://microsoftedge.microsoft.com/addons/getproductdetailsbycrxid/liilgpjgabokdklappibcjfablkpcekh",
    { headers: { "User-Agent": BROWSER_UA, Accept: "application/json" } }
  );
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const json = await res.json();
  const n = toInt(json?.activeInstallCount);
  if (!isPlausible(n)) throw new Error(`implausible value: ${json?.activeInstallCount}`);
  return n;
}

async function fetchChromeUsers() {
  const urls = [
    "https://chromewebstore.google.com/detail/ndcooeababalnlpkfedmmbbbgkljhpjf",
    "https://chrome.google.com/webstore/detail/ndcooeababalnlpkfedmmbbbgkljhpjf",
  ];
  for (const url of urls) {
    try {
      const res = await fetchWithTimeout(url, {
        headers: { "User-Agent": BROWSER_UA, "Accept-Language": "en-US,en;q=0.9" },
        redirect: "follow",
      });
      if (!res.ok) continue;
      const html = await res.text();
      // The store renders e.g. `100,000 users</div>` in the badge row.
      const match =
        html.match(/([\d,]+)\+?\s*users\s*<\/div>/i) ||
        html.match(/>\s*([\d,]+)\+?\s*users\s*</i);
      if (match) {
        const n = toInt(match[1]);
        if (isPlausible(n)) return n;
      }
    } catch {
      // try the next URL
    }
  }
  throw new Error("could not parse user count from any Chrome store URL");
}

async function fetchUsers(prevByStore) {
  const stores = [
    ["chrome", fetchChromeUsers],
    ["edge", fetchEdgeUsers],
    ["firefox", fetchFirefoxUsers],
  ];
  const usersByStore = { chrome: null, edge: null, firefox: null, ...prevByStore };

  for (const [key, fn] of stores) {
    try {
      const n = await fn();
      usersByStore[key] = n;
      console.log(`[users:${key}] fetched ${n}`);
    } catch (err) {
      const kept = prevByStore?.[key] ?? null;
      usersByStore[key] = kept;
      console.warn(`[users:${key}] failed (${err.message}); keeping previous ${kept}`);
    }
  }

  // Sum the three stores. null (no fetch, no previous) counts as 0 but stays
  // null in usersByStore.
  const users = ["chrome", "edge", "firefox"].reduce((sum, key) => {
    const v = usersByStore[key];
    return sum + (Number.isInteger(v) && v > 0 ? v : 0);
  }, 0);

  console.log(
    `[users] total = ${users} (chrome=${usersByStore.chrome}, edge=${usersByStore.edge}, firefox=${usersByStore.firefox})`
  );
  return { users, usersByStore };
}

// ---- Metric 4: aggregated contributors --------------------------------------

function parseNextLink(linkHeader) {
  if (!linkHeader) return null;
  for (const part of linkHeader.split(",")) {
    const m = part.match(/<([^>]+)>\s*;\s*rel="next"/);
    if (m) return m[1];
  }
  return null;
}

function githubHeaders() {
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
  const headers = {
    Accept: "application/vnd.github+json",
    "User-Agent": "scriptcat-landing-stats",
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
    headers["X-GitHub-Api-Version"] = "2022-11-28";
  }
  return headers;
}

function isBot(user) {
  if (!user || typeof user.login !== "string") return true;
  if (user.type === "Bot") return true;
  if (/\[bot\]$/i.test(user.login)) return true;
  const login = user.login.toLowerCase();
  if (login.endsWith("-bot")) return true;
  if (BOT_DENYLIST.has(login)) return true;
  return false;
}

// Returns { status: "ok" | "notfound", contributors: [...] } or throws on a
// non-404 network/HTTP error (rate limit, timeout, etc.).
async function fetchRepoContributors(repo, headers) {
  let url = `https://api.github.com/repos/${repo}/contributors?per_page=100&anon=0`;
  const collected = [];
  while (url) {
    const res = await fetchWithTimeout(url, { headers });
    if (res.status === 404) {
      return { status: "notfound", contributors: [] };
    }
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const page = await res.json();
    if (!Array.isArray(page)) throw new Error("unexpected response shape");
    collected.push(...page);
    url = parseNextLink(res.headers.get("link"));
  }
  return { status: "ok", contributors: collected };
}

async function fetchContributors(previous) {
  const headers = githubHeaders();
  const hasToken = Boolean(process.env.GITHUB_TOKEN || process.env.GH_TOKEN);
  console.log(
    `[contributors] auth: ${hasToken ? "token present" : "UNAUTHENTICATED (60 req/hr limit)"}`
  );

  const merged = new Map(); // lowercased login -> { login, avatar, url, contributions }
  let errorCount = 0;
  let okCount = 0;

  for (const repo of CONTRIBUTOR_REPOS) {
    try {
      const { status, contributors } = await fetchRepoContributors(repo, headers);
      if (status === "notfound") {
        console.warn(`[contributors] ${repo}: 404, skipping`);
        continue;
      }
      okCount++;
      for (const user of contributors) {
        if (isBot(user)) continue;
        const key = user.login.toLowerCase();
        const contributions = toInt(user.contributions) || 0;
        const existing = merged.get(key);
        if (existing) {
          existing.contributions += contributions;
        } else {
          merged.set(key, {
            login: user.login,
            avatar: user.avatar_url,
            url: user.html_url,
            contributions,
          });
        }
      }
      console.log(`[contributors] ${repo}: ${contributors.length} raw`);
    } catch (err) {
      errorCount++;
      console.warn(`[contributors] ${repo}: failed (${err.message}); skipping`);
    }
  }

  const list = [...merged.values()].sort((a, b) => b.contributions - a.contributions);
  const count = list.length;
  const prevCount = toInt(previous?.count) || 0;
  const prevList = Array.isArray(previous?.list) ? previous.list : [];

  // Never regress. Accept the fresh result only if we got real data AND either
  // nothing errored, or the new count is at least the previous (a partial fetch
  // that would shrink the number is discarded in favour of the committed value).
  if (count > 0 && (errorCount === 0 || count >= prevCount)) {
    console.log(
      `[contributors] aggregated ${count} unique human contributors from ${okCount} repo(s)`
    );
    return { count, list };
  }

  console.warn(
    `[contributors] incomplete (got ${count}, ${errorCount} repo error(s)); keeping previous count=${prevCount}, list=${prevList.length}`
  );
  return { count: prevCount, list: prevList };
}

// ---- main -------------------------------------------------------------------

function loadPrevious() {
  if (existsSync(OUT_FILE)) {
    try {
      return JSON.parse(readFileSync(OUT_FILE, "utf8"));
    } catch (err) {
      console.warn(
        `[init] could not parse existing ${relative(ROOT, OUT_FILE)} (${err.message}); using seed defaults`
      );
    }
  } else {
    console.log(`[init] no existing ${relative(ROOT, OUT_FILE)}; using seed defaults`);
  }
  return structuredClone(DEFAULT_STATS);
}

async function main() {
  const previous = loadPrevious();
  const prevUsersByStore = previous.usersByStore ?? {
    chrome: null,
    edge: null,
    firefox: null,
  };
  const prevContributors = previous.contributors ?? { count: 0, list: [] };

  const [stars, scripts, usersResult, contributors] = await Promise.all([
    fetchStars(previous.stars ?? DEFAULT_STATS.stars),
    fetchScripts(previous.scripts ?? DEFAULT_STATS.scripts),
    fetchUsers(prevUsersByStore),
    fetchContributors(prevContributors),
  ]);

  const output = {
    updatedAt: new Date().toISOString(),
    stars,
    scripts,
    users: usersResult.users,
    usersByStore: usersResult.usersByStore,
    contributors,
  };

  try {
    mkdirSync(dirname(OUT_FILE), { recursive: true });
    writeFileSync(OUT_FILE, JSON.stringify(output, null, 2) + "\n");
    console.log(`\n[done] wrote ${relative(ROOT, OUT_FILE)}`);
  } catch (err) {
    console.error(`[fatal] could not write ${relative(ROOT, OUT_FILE)}: ${err.message}`);
    process.exit(1);
  }
}

main().catch((err) => {
  // All metric fetches are individually guarded, so reaching here is unexpected.
  // We could not produce a file, so surface a failure exit code.
  console.error(`[fatal] unexpected error: ${err.stack || err.message}`);
  process.exit(1);
});
