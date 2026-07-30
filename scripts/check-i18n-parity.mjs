#!/usr/bin/env node
// Verifies every default-locale doc under docs/ has a mirror in every locale
// docs tree under i18n/ (and vice versa).
//
// Controlled by scripts/check-config.json: { "i18nParityStrict": boolean }.
// Intentional single-source fallbacks can be declared with:
//   { "i18nDocFallbacks": { "ru": {
//       "sourceLocale": "en", "paths": ["change/"]
//   } } }
// While false, mismatches are printed as warnings and the script exits 0.
// Once the translation backlog is cleared, flip it to true to hard-fail CI.

import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const DEFAULT_DIR = join(ROOT, "docs");
const I18N_DIR = join(ROOT, "i18n");
const DOCS_PLUGIN_PATH = "docusaurus-plugin-content-docs/current";
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
  const defaultLocale = config.defaultLocale;
  const fallbacks = config.i18nDocFallbacks ?? {};

  if (!defaultLocale) {
    console.error("scripts/check-config.json must define defaultLocale.");
    process.exit(1);
  }

  const defaultDocs = listDocs(DEFAULT_DIR);
  const defaultSet = new Set(defaultDocs);
  const localeDirs = readdirSync(I18N_DIR)
    .filter(
      (locale) =>
        locale !== defaultLocale && statSync(join(I18N_DIR, locale)).isDirectory()
    )
    .map((locale) => ({
      locale,
      dir: join(I18N_DIR, locale, DOCS_PLUGIN_PATH),
    }))
    .sort((a, b) => a.locale.localeCompare(b.locale));

  if (localeDirs.length === 0) {
    console.error("No localized docs trees found under i18n/.");
    process.exit(1);
  }

  let issueCount = 0;
  const summaries = [];

  for (const { locale, dir } of localeDirs) {
    const localeDocs = existsSync(dir) ? listDocs(dir) : [];
    const localeSet = new Set(localeDocs);
    const fallback = fallbacks[locale];
    const fallbackPaths = fallback?.paths ?? [];
    const fallbackDir = fallback?.sourceLocale
      ? join(I18N_DIR, fallback.sourceLocale, DOCS_PLUGIN_PATH)
      : undefined;
    const fallbackSet =
      fallbackDir && existsSync(fallbackDir) ? new Set(listDocs(fallbackDir)) : new Set();

    const missing = defaultDocs.filter((doc) => !localeSet.has(doc));
    const fallbackDocs = missing.filter(
      (doc) => fallbackPaths.some((prefix) => doc.startsWith(prefix)) && fallbackSet.has(doc)
    );
    const fallbackDocSet = new Set(fallbackDocs);
    const unexpectedMissing = missing.filter((doc) => !fallbackDocSet.has(doc));
    const orphans = localeDocs.filter((doc) => !defaultSet.has(doc));

    if (unexpectedMissing.length > 0) {
      console.log(`Missing ${locale} translation (${unexpectedMissing.length}):`);
      for (const doc of unexpectedMissing) console.log(`  - ${doc}`);
    }
    if (orphans.length > 0) {
      console.log(`${locale} doc with no default-locale source (${orphans.length}):`);
      for (const doc of orphans) console.log(`  - ${doc}`);
    }
    if (fallbackDocs.length > 0) {
      console.log(
        `${locale}: ${fallbackDocs.length} docs intentionally fall back to ${fallback.sourceLocale}.`
      );
    }

    issueCount += unexpectedMissing.length + orphans.length;
    summaries.push(`${locale}: ${localeDocs.length} translated, ${fallbackDocs.length} fallback`);
  }

  if (issueCount === 0) {
    console.log(
      `i18n parity check passed: ${defaultDocs.length} default-locale docs; ${summaries.join("; ")}.`
    );
    return;
  }

  if (strict) {
    console.error("\ni18n parity check FAILED (strict mode enabled in scripts/check-config.json).");
    process.exit(1);
  }
  console.log("\ni18n parity check: warnings only (strict mode disabled in scripts/check-config.json).");
}

main();
