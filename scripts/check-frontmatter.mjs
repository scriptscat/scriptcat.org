#!/usr/bin/env node
// Enforces the docs frontmatter/title conventions from REFACTOR_PROPOSAL.md §2.1/§2.4:
//   - every doc has a frontmatter `title`
//   - no body H1 (title alone drives the page heading), unless `hide_title: true`
//   - no leftover `id:` / `sidebar_position:` overrides
//   - no number-prefixed filenames (e.g. "2.sync.md")
//
// Controlled by scripts/check-config.json: { "frontmatterStrict": boolean }.
// While false, violations are printed as warnings and the script exits 0.

import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep, basename } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const I18N_DIR = join(ROOT, "i18n");
const DOCS_PLUGIN_PATH = "docusaurus-plugin-content-docs/current";
const DOC_DIRS = [
  join(ROOT, "docs"),
  ...readdirSync(I18N_DIR)
    .map((locale) => join(I18N_DIR, locale, DOCS_PLUGIN_PATH))
    .filter((dir) => existsSync(dir) && statSync(dir).isDirectory()),
];
const CONFIG_FILE = join(ROOT, "scripts", "check-config.json");
const NUMBER_PREFIX = /^\d+\.[^/]/;

function listDocs(dir) {
  const results = [];
  function recurse(current) {
    for (const entry of readdirSync(current)) {
      const full = join(current, entry);
      const stat = statSync(full);
      if (stat.isDirectory()) {
        recurse(full);
      } else if (/\.mdx?$/.test(entry)) {
        results.push(full);
      }
    }
  }
  if (existsSync(dir)) recurse(dir);
  return results;
}

function parseFrontmatter(text) {
  const match = /^---\n([\s\S]*?)\n---\n?/.exec(text);
  if (!match) return { fm: {}, body: text };
  const fm = {};
  for (const line of match[1].split("\n")) {
    const m = /^([\w-]+):\s*(.*)$/.exec(line);
    if (m) fm[m[1]] = m[2].trim();
  }
  return { fm, body: text.slice(match[0].length) };
}

function checkFile(file) {
  const issues = [];
  const rel = relative(ROOT, file);
  const text = readFileSync(file, "utf8");
  const { fm, body } = parseFrontmatter(text);

  if (!fm.title) issues.push("missing frontmatter `title`");
  if (fm.id) issues.push(`leftover \`id: ${fm.id}\` override`);
  if (fm.sidebar_position) issues.push(`leftover \`sidebar_position: ${fm.sidebar_position}\` override`);
  if (NUMBER_PREFIX.test(basename(file))) issues.push("number-prefixed filename");

  const hideTitle = fm.hide_title === "true";
  // Strip fenced code blocks first: sample "# Heading" lines inside example
  // markdown/file snippets aren't real page headings.
  const bodyWithoutCodeFences = body.replace(/```[\s\S]*?```/g, "");
  if (!hideTitle && /^#\s+.+$/m.test(bodyWithoutCodeFences)) {
    issues.push("body contains an H1 (title should come from frontmatter `title` only)");
  }

  return issues.map((issue) => `${rel}: ${issue}`);
}

function main() {
  const config = JSON.parse(readFileSync(CONFIG_FILE, "utf8"));
  const strict = Boolean(config.frontmatterStrict);

  const allIssues = DOC_DIRS.flatMap(listDocs).flatMap(checkFile);

  if (allIssues.length === 0) {
    console.log("Frontmatter check passed: no violations.");
    return;
  }

  console.log(`Frontmatter violations (${allIssues.length}):`);
  for (const issue of allIssues) console.log(`  - ${issue}`);

  if (strict) {
    console.error("\nFrontmatter check FAILED (strict mode enabled in scripts/check-config.json).");
    process.exit(1);
  }
  console.log("\nFrontmatter check: warnings only (strict mode disabled in scripts/check-config.json).");
}

main();
