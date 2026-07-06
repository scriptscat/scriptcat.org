#!/usr/bin/env node
// Verifies every zh-Hans doc under docs/ has an English mirror under
// i18n/en/docusaurus-plugin-content-docs/current/ (and vice versa).
//
// Controlled by scripts/check-config.json: { "i18nParityStrict": boolean }.
// While false, mismatches are printed as warnings and the script exits 0.
// Once the translation backlog is cleared, flip it to true to hard-fail CI.

import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const ZH_DIR = join(ROOT, "docs");
const EN_DIR = join(ROOT, "i18n/en/docusaurus-plugin-content-docs/current");
const CONFIG_FILE = join(ROOT, "scripts", "check-config.json");

// Node 18/20 (the CI runtime) lack fs.globSync (added in Node 22), so walk manually.
function listDocs(dir) {
  const results = [];
  function recurse(current) {
    for (const entry of readdirSync(current)) {
      const full = join(current, entry);
      const stat = statSync(full);
      if (stat.isDirectory()) {
        recurse(full);
      } else if (/\.mdx?$/.test(entry)) {
        results.push(relative(dir, full).split(sep).join("/"));
      }
    }
  }
  recurse(dir);
  return results.sort();
}

function main() {
  const config = JSON.parse(readFileSync(CONFIG_FILE, "utf8"));
  const strict = Boolean(config.i18nParityStrict);

  const zhDocs = listDocs(ZH_DIR);
  const enDocs = existsSync(EN_DIR) ? listDocs(EN_DIR) : [];
  const enSet = new Set(enDocs);
  const zhSet = new Set(zhDocs);

  const missing = zhDocs.filter((d) => !enSet.has(d));
  const orphans = enDocs.filter((d) => !zhSet.has(d));

  if (missing.length === 0 && orphans.length === 0) {
    console.log(`i18n parity check passed: ${zhDocs.length} docs, all translated.`);
    return;
  }

  if (missing.length > 0) {
    console.log(`Missing English translation (${missing.length}):`);
    for (const m of missing) console.log(`  - ${m}`);
  }
  if (orphans.length > 0) {
    console.log(`English doc with no zh-Hans source (${orphans.length}):`);
    for (const o of orphans) console.log(`  - ${o}`);
  }

  if (strict) {
    console.error("\ni18n parity check FAILED (strict mode enabled in scripts/check-config.json).");
    process.exit(1);
  }
  console.log("\ni18n parity check: warnings only (strict mode disabled in scripts/check-config.json).");
}

main();
