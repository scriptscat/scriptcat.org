#!/usr/bin/env node

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const I18N_DIR = join(ROOT, "i18n");
const EN_CODE_FILE = join(I18N_DIR, "en", "code.json");
const TERMINOLOGY_FILE = join(ROOT, "agents", "i18n-terminology.md");

function checkCodeJsonParity() {
  const sourceKeys = Object.keys(JSON.parse(readFileSync(EN_CODE_FILE, "utf8")));
  const sourceSet = new Set(sourceKeys);
  const issues = [];
  let checked = 0;

  for (const locale of readdirSync(I18N_DIR).sort()) {
    const localeDir = join(I18N_DIR, locale);
    if (locale === "zh-Hans" || !statSync(localeDir).isDirectory()) continue;
    const keys = Object.keys(JSON.parse(readFileSync(join(localeDir, "code.json"), "utf8")));
    const keySet = new Set(keys);
    const missing = sourceKeys.filter((key) => !keySet.has(key));
    const extra = keys.filter((key) => !sourceSet.has(key));
    if (missing.length || extra.length) {
      issues.push(
        `${locale}/code.json: missing [${missing.join(", ")}], extra [${extra.join(", ")}]`
      );
    }
    checked++;
  }

  return { checked, keyCount: sourceKeys.length, issues };
}

function checkTerminologyTables() {
  const lines = readFileSync(TERMINOLOGY_FILE, "utf8").split("\n");
  const issues = [];
  let expectedColumns = 0;
  let headerLine = 0;
  let checkedRows = 0;

  for (const [index, line] of lines.entries()) {
    if (!line.startsWith("|")) {
      expectedColumns = 0;
      continue;
    }
    const columns = line.split("|").slice(1, -1).length;
    if (line.includes("| English |")) {
      expectedColumns = columns;
      headerLine = index + 1;
      continue;
    }
    if (!expectedColumns || /^\|[-:| ]+\|?$/.test(line)) continue;
    checkedRows++;
    if (columns !== expectedColumns) {
      issues.push(
        `agents/i18n-terminology.md:${index + 1}: ${columns} columns; table header at line ${headerLine} has ${expectedColumns}`
      );
    }
  }

  return { checkedRows, issues };
}

const code = checkCodeJsonParity();
const terminology = checkTerminologyTables();
const issues = [...code.issues, ...terminology.issues];

if (issues.length) {
  console.error(`i18n UI structure check FAILED (${issues.length}):`);
  for (const issue of issues) console.error(`  - ${issue}`);
  process.exit(1);
}

console.log(
  `i18n UI structure check passed: ${code.checked} non-default code.json files match ${code.keyCount} English keys; ${terminology.checkedRows} terminology rows have valid column counts.`
);
