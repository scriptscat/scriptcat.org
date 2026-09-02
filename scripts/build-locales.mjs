#!/usr/bin/env node
// Builds a slice of the site's locales, so CI can spread them over parallel
// jobs.
//
// Why this exists: `docusaurus build` loops over every locale strictly
// sequentially inside one Node process (mapAsyncSequential in
// @docusaurus/core/lib/commands/build/build.js -- upstream tried worker threads
// and reverted it). Each locale is its own full rspack compile + SSG pass and is
// almost entirely single-threaded, so with 20 locales the build takes 20x one
// locale while using about one core. Splitting the locale list across CI jobs is
// the only way to use more than that.
//
// The locales come from scripts/check-config.json, the same source
// docusaurus.config.js reads, so a new locale never needs a matching edit here
// or in the workflow files.
//
// Two rules this relies on, both easy to break:
//   1. Shards must be built by *one* `docusaurus build` process each. A process
//      per locale costs ~2s of startup apiece (measured: 139s vs 95s for the
//      full 20 locales) and buys nothing.
//   2. The default locale writes to build/ itself and clears it first, while
//      every other locale writes only to build/<locale>/. So the default locale
//      must come first inside its own shard, and shards must never be merged
//      into one directory with the default-locale shard applied last.
//
// Usage:
//   node scripts/build-locales.mjs                # every locale, one process
//   node scripts/build-locales.mjs --shard 2/4    # locales 2, 6, 10, 14, 18
//   node scripts/build-locales.mjs --list --shard 2/4   # print, don't build

import { spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const CONFIG_FILE = join(ROOT, "scripts", "check-config.json");

function parseArgs(argv) {
  const args = { shard: null, shardCount: null, list: false };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    // `pnpm run build:shard -- --shard 2/4` forwards the separator itself.
    if (arg === "--") {
      continue;
    }
    if (arg === "--list") {
      args.list = true;
    } else if (arg === "--shard") {
      const value = argv[i + 1];
      i += 1;
      const match = /^(\d+)\/(\d+)$/.exec(value ?? "");
      if (!match) {
        throw new Error(`--shard expects "<index>/<total>", e.g. --shard 2/4 (got ${value ?? "nothing"})`);
      }
      args.shard = Number(match[1]);
      args.shardCount = Number(match[2]);
      if (args.shard < 1 || args.shard > args.shardCount) {
        throw new Error(`--shard index ${args.shard} is out of range for ${args.shardCount} shards`);
      }
    } else {
      throw new Error(`Unknown argument: ${arg}`);
    }
  }
  return args;
}

// The default locale must be built before the others in its shard: its outDir is
// build/ itself and Docusaurus clears that directory at the start of the build,
// which would wipe any build/<locale>/ already written next to it. This mirrors
// orderLocales() in @docusaurus/core.
function orderLocales(locales, defaultLocale) {
  if (!locales.includes(defaultLocale)) {
    return locales;
  }
  return [defaultLocale, ...locales.filter((locale) => locale !== defaultLocale)];
}

// Stride rather than contiguous chunks: locales cost roughly the same, but a
// stride keeps the shards balanced when the count doesn't divide evenly.
function selectShard(locales, shard, shardCount) {
  if (shard === null) {
    return locales;
  }
  return locales.filter((_, index) => index % shardCount === shard - 1);
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const { defaultLocale, locales } = JSON.parse(readFileSync(CONFIG_FILE, "utf8"));

  if (!Array.isArray(locales) || locales.length === 0) {
    throw new Error(`No "locales" array in ${CONFIG_FILE}`);
  }
  if (!locales.includes(defaultLocale)) {
    throw new Error(`defaultLocale "${defaultLocale}" is missing from the "locales" array in ${CONFIG_FILE}`);
  }

  const selected = selectShard(orderLocales(locales, defaultLocale), args.shard, args.shardCount);

  if (args.list) {
    console.log(selected.join(" "));
    return;
  }

  // More shards than locales: nothing to do, but the job must still succeed so
  // the workflow's merge step doesn't block on it.
  if (selected.length === 0) {
    console.log(`Shard ${args.shard}/${args.shardCount} has no locales to build.`);
    return;
  }

  const label = args.shard === null ? "all locales" : `shard ${args.shard}/${args.shardCount}`;
  console.log(`Building ${label}: ${selected.join(", ")}`);

  const result = spawnSync(
    process.execPath,
    [
      join(ROOT, "node_modules", "@docusaurus", "core", "bin", "docusaurus.mjs"),
      "build",
      ...selected.flatMap((locale) => ["--locale", locale]),
    ],
    { cwd: ROOT, stdio: "inherit" }
  );

  if (result.error) {
    throw result.error;
  }
  process.exit(result.status ?? 1);
}

try {
  main();
} catch (error) {
  console.error(`✗ ${error.message}`);
  process.exit(1);
}
