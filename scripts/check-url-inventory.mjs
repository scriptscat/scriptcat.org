#!/usr/bin/env node
// Verifies the built site exposes the exact same set of routes as the
// committed baseline in scripts/url-inventory.txt. Run after `pnpm run build`.
//
// Usage:
//   node scripts/check-url-inventory.mjs           # compare build/ against the baseline
//   node scripts/check-url-inventory.mjs --write    # regenerate the baseline from build/

import { readdirSync, statSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { join, relative, sep } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const BUILD_DIR = join(ROOT, "build");
const BASELINE_FILE = join(ROOT, "scripts", "url-inventory.txt");
const PAGE_FILES = new Set(["index.html", "404.html", "opensearch.xml"]);

function walkRoutes(dir) {
  const routes = [];
  function recurse(current) {
    for (const entry of readdirSync(current)) {
      const full = join(current, entry);
      const stat = statSync(full);
      if (stat.isDirectory()) {
        recurse(full);
      } else if (PAGE_FILES.has(entry)) {
        const rel = relative(BUILD_DIR, full).split(sep).join("/");
        routes.push("/" + rel);
      }
    }
  }
  recurse(dir);
  return routes;
}

function main() {
  if (!existsSync(BUILD_DIR)) {
    console.error("build/ not found — run `pnpm run build` first.");
    process.exit(1);
  }

  const routes = walkRoutes(BUILD_DIR).sort();
  const content = routes.join("\n") + "\n";

  if (process.argv.includes("--write")) {
    writeFileSync(BASELINE_FILE, content);
    console.log(`Wrote ${routes.length} routes to ${relative(ROOT, BASELINE_FILE)}`);
    return;
  }

  if (!existsSync(BASELINE_FILE)) {
    console.error(
      `No baseline at ${relative(ROOT, BASELINE_FILE)}. Run with --write once to create it.`
    );
    process.exit(1);
  }

  const baseline = readFileSync(BASELINE_FILE, "utf8").split("\n").filter(Boolean).sort();
  const baselineSet = new Set(baseline);
  const currentSet = new Set(routes);

  const removed = baseline.filter((r) => !currentSet.has(r));
  const added = routes.filter((r) => !baselineSet.has(r));

  if (removed.length === 0 && added.length === 0) {
    console.log(`URL inventory check passed: ${routes.length} routes match the baseline.`);
    return;
  }

  if (removed.length > 0) {
    console.error("Routes REMOVED from the site (URL contract violation):");
    for (const r of removed) console.error(`  - ${r}`);
  }
  if (added.length > 0) {
    console.error("Routes ADDED to the site (confirm this is intentional and update the baseline with --write):");
    for (const r of added) console.error(`  + ${r}`);
  }
  process.exit(1);
}

main();
