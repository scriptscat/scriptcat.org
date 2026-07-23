#!/usr/bin/env node
// Verifies configured single-source doc fallbacks in the production build.
// The localized page's edit URL must point to the configured source locale,
// proving that Docusaurus compiled that source instead of its default locale.

import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { extname, join, relative, sep } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const BUILD_DIR = join(ROOT, "build");
const I18N_DIR = join(ROOT, "i18n");
const DOCS_PLUGIN_PATH = "docusaurus-plugin-content-docs/current";
const CONFIG_FILE = join(ROOT, "scripts", "check-config.json");

function listFiles(dir, predicate) {
  const results = [];
  function recurse(current) {
    for (const entry of readdirSync(current)) {
      const full = join(current, entry);
      if (statSync(full).isDirectory()) recurse(full);
      else if (predicate(full)) results.push(full);
    }
  }
  if (existsSync(dir)) recurse(dir);
  return results;
}

function relativePath(base, file) {
  return relative(base, file).split(sep).join("/");
}

function main() {
  if (!existsSync(BUILD_DIR)) {
    console.error("build/ not found — run `pnpm run build` first.");
    process.exit(1);
  }

  const config = JSON.parse(readFileSync(CONFIG_FILE, "utf8"));
  const fallbacks = config.i18nDocFallbacks ?? {};
  let checked = 0;
  const issues = [];

  for (const [locale, fallback] of Object.entries(fallbacks)) {
    const sourceRoot = join(I18N_DIR, fallback.sourceLocale, DOCS_PLUGIN_PATH);
    const localeRoot = join(I18N_DIR, locale, DOCS_PLUGIN_PATH);
    const builtDocsRoot = join(BUILD_DIR, locale, "docs");
    const builtPages = listFiles(builtDocsRoot, (file) => file.endsWith("index.html")).map(
      (file) => ({ file, html: readFileSync(file, "utf8") })
    );

    if (!existsSync(sourceRoot)) {
      issues.push(`${locale}: fallback source locale ${fallback.sourceLocale} has no docs tree`);
      continue;
    }

    const fallbackDocs = listFiles(sourceRoot, (file) => [".md", ".mdx"].includes(extname(file)))
      .map((file) => relativePath(sourceRoot, file))
      .filter(
        (doc) =>
          fallback.paths.some((prefix) => doc.startsWith(prefix)) &&
          !existsSync(join(localeRoot, doc))
      );

    for (const doc of fallbackDocs) {
      const editPath =
        `edit/main/i18n/${fallback.sourceLocale}/${DOCS_PLUGIN_PATH}/${doc}`;
      const matches = builtPages.filter(({ html }) => html.includes(editPath));
      if (matches.length !== 1) {
        issues.push(
          `${locale}:${doc}: expected one built page sourced from ${fallback.sourceLocale}, found ${matches.length}`
        );
      } else {
        checked += 1;
      }
    }
  }

  if (issues.length > 0) {
    console.error(`i18n fallback build check FAILED (${issues.length}):`);
    for (const issue of issues) console.error(`  - ${issue}`);
    process.exit(1);
  }

  console.log(`i18n fallback build check passed: ${checked} localized pages use configured sources.`);
}

main();
