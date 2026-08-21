#!/usr/bin/env node
import { readFileSync } from 'fs';
import { join } from 'path';

const BASE = join(import.meta.dirname, '..');

// All locale code.json paths
const LOCALES = ['fr','ar','de','es','it','ja','pt','vi','zh-Hant','ru','fa','nl','bn','id','hy','uk','tr','ko'];
const EN_LOCALE = 'en';

// JSON files to audit
const JSON_FILES = [
  { name: 'code.json', path: (l) => `i18n/${l}/code.json`, enPath: `i18n/en/code.json` },
  { name: 'current.json', path: (l) => `i18n/${l}/docusaurus-plugin-content-docs/current.json`, enPath: null },
  { name: 'footer.json', path: (l) => `i18n/${l}/docusaurus-theme-classic/footer.json`, enPath: `i18n/en/docusaurus-theme-classic/footer.json` },
  { name: 'navbar.json', path: (l) => `i18n/${l}/docusaurus-theme-classic/navbar.json`, enPath: `i18n/en/docusaurus-theme-classic/navbar.json` },
];

// Keys to skip (brand names, URLs, etc.)
const SKIP_PATTERNS = [
  'homepage.download.chrome', 'homepage.download.edge', 'homepage.download.firefox',
  'homepage.download.github',
];

function loadJson(filePath) {
  try {
    return JSON.parse(readFileSync(join(BASE, filePath), 'utf8'));
  } catch(e) {
    return null;
  }
}

// Deep comparison: check if two objects are structurally identical (same keys)
function structurallyIdentical(obj1, obj2) {
  if (typeof obj1 !== typeof obj2) return false;
  if (typeof obj1 !== 'object' || obj1 === null) return obj1 === obj2;
  const keys1 = Object.keys(obj1).sort();
  const keys2 = Object.keys(obj2).sort();
  if (keys1.length !== keys2.length) return false;
  return keys1.every((k, i) => k === keys2[i]);
}

// Check if a value is untranslated (same as EN)
function isUntranslated(locVal, enVal) {
  if (!locVal || !enVal) return false;
  if (typeof locVal === 'object' && typeof enVal === 'object') {
    if (locVal.message && enVal.message) {
      if (locVal.message === enVal.message && enVal.message.length > 15) return true;
    }
    // Check nested objects
    for (const key of Object.keys(enVal)) {
      if (isUntranslated(locVal[key], enVal[key])) return true;
    }
  }
  return false;
}

console.log('=== Comprehensive JSON Audit ===\n');

let totalIssues = 0;

for (const jsonFile of JSON_FILES) {
  console.log(`\n--- ${jsonFile.name} ---`);
  
  const enData = jsonFile.enPath ? loadJson(jsonFile.enPath) : null;
  
  for (const locale of LOCALES) {
    const locPath = jsonFile.path(locale);
    const locData = loadJson(locPath);
    
    if (!locData) {
      console.log(`  ${locale}: ❌ FILE MISSING`);
      continue;
    }
    
    let issues = 0;
    const issueList = [];
    
    if (enData && jsonFile.name === 'code.json') {
      // For code.json, check against EN
      for (const [key, enVal] of Object.entries(enData)) {
        if (SKIP_PATTERNS.some(p => key.startsWith(p))) continue;
        const locVal = locData[key];
        if (!locVal) continue;
        if (isUntranslated(locVal, enVal)) {
          issues++;
          issueList.push(key);
        }
      }
    } else if (jsonFile.name === 'footer.json' || jsonFile.name === 'navbar.json') {
      // For footer/navbar, check if all values are in target language
      const enD = enData || {};
      for (const [key, enVal] of Object.entries(enD)) {
        const locVal = locData[key];
        if (!locVal) continue;
        if (typeof locVal === 'object' && typeof enVal === 'object') {
          for (const [subKey, enSubVal] of Object.entries(enVal)) {
            if (typeof enSubVal === 'string' && typeof locVal[subKey] === 'string') {
              if (locVal[subKey] === enSubVal && enSubVal.length > 5) {
                issues++;
                issueList.push(`${key}.${subKey}`);
              }
            }
          }
        }
      }
    } else if (jsonFile.name === 'current.json') {
      // For current.json, check sidebar labels
      // These are usually short labels, just check structure matches
      const enD = enData || {};
      const enKeys = flattenKeys(enD);
      const locKeys = flattenKeys(locData);
      const missing = enKeys.filter(k => !locKeys.includes(k));
      if (missing.length > 0) {
        issues += missing.length;
        issueList.push(...missing.map(k => `MISSING: ${k}`));
      }
    }
    
    if (issues > 0) {
      console.log(`  ${locale}: ⚠️  ${issues} issues`);
      issueList.slice(0, 3).forEach(i => console.log(`    - ${i}`));
      if (issueList.length > 3) console.log(`    ... and ${issueList.length - 3} more`);
      totalIssues += issues;
    } else {
      console.log(`  ${locale}: ✅ OK`);
    }
  }
}

function flattenKeys(obj, prefix = '') {
  const keys = [];
  for (const [k, v] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${k}` : k;
    if (typeof v === 'object' && v !== null && !v.message) {
      keys.push(...flattenKeys(v, fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  return keys;
}

console.log(`\n=== Total: ${totalIssues} issues ===`);
