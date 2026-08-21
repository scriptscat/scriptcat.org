#!/usr/bin/env node
import { readFileSync } from 'fs';
import { join } from 'path';

const BASE = join(import.meta.dirname, '..');
const EN_PATH = join(BASE, 'i18n/en/code.json');
const en = JSON.parse(readFileSync(EN_PATH, 'utf8'));

// All locale code.json paths
const locales = ['fr','ar','de','es','it','ja','pt','vi','zh-Hant','ru','fa','nl','bn','id','hy','uk','tr','ko'];

// Known English-only phrases that should NOT appear in non-EN locales
const EN_MARKERS = [
  'The ', 'This ', 'A ', 'An ', 'It ', 'In ', 'On ', 'At ',
  'You ', 'We ', 'They ', 'Our ', 'Your ', 'The ',
  'is a ', 'are ', 'was ', 'will ', 'can ', 'has ', 'have ',
  'not ', 'the ', 'and ', 'for ', 'with ', 'from ',
  'click ', 'search ', 'clicking ',
];

function isLikelyEnglish(text) {
  if (!text || text.length < 15) return false;
  // Skip obvious non-text (URLs, code, single words)
  if (text.startsWith('http') || text.startsWith('/') || text.startsWith('@')) return false;
  if (text.length < 20) return false;
  
  // Count English words at start
  const words = text.split(/\s+/);
  if (words.length < 3) return false;
  
  // Check if first 3 words are all English
  const enWordCount = words.slice(0, 5).filter(w => /^[A-Z][a-z]+$/.test(w) || /^[a-z]+$/.test(w)).length;
  if (enWordCount >= 3 && !text.match(/[\u3000-\u9fff\uac00-\ud7af\u0600-\u06ff\u0400-\u04ff\u0e00-\u0e7f\u0980-\u09ff\u0f00-\u0fff\u1000-\u109f\u1200-\u137f\u13a0-\u13ff\u1400-\u167f\u1680-\u169f\u16a0-\u16ff\u1700-\u171f\u1720-\u173f\u1740-\u175f\u1760-\u177f\u1780-\u17ff\u1800-\u18af\u1900-\u197f\u1980-\u19df\u1a00-\u1a1f\u1b00-\u1b7f\u1b80-\u1bff\u1c00-\u1c4f\u1c50-\u1cff\u1d00-\u1dbf\u1e00-\u1eff\u1f00-\u1fff\u2000-\u206f\u2070-\u209f\u20a0-\u20cf\u20d0-\u20ff\u2100-\u214f\u2150-\u218f\u2190-\u21ff\u2200-\u22ff\u2300-\u23ff\u2400-\u243f\u2440-\u245f\u2460-\u24ff\u2500-\u257f\u2580-\u259f\u25a0-\u25ff\u2600-\u26ff\u2700-\u27bf\u27c0-\u27ef\u27f0-\u27ff\u2800-\u28ff\u2900-\u297f\u2980-\u29ff\u2a00-\u2aff\u2b00-\u2bff\u2c00-\u2c5f\u2c60-\u2c7f\u2c80-\u2cff\u2d00-\u2d2f\u2d30-\u2d7f\u2d80-\u2ddf\u2de0-\u2dff\u2e00-\u2e7f\u2e80-\u2eff\u2f00-\u2fdf\u2ff0-\u2fff\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3130-\u318f\u31a0-\u31bf\u31f0-\u31ff\u3200-\u32ff\u3300-\u33ff\u3400-\u4dbf\u4dc0-\u4dff\u4e00-\u9fff\ua000-\ua4cf\ua4d0-\ua4ff\ua500-\ua63f\ua640-\ua69f\ua6a0-\ua6ff\ua700-\ua71f\ua720-\ua7ff\ua800-\ua82f\ua840-\ua87f\ua880-\ua8df\ua900-\ua92f\ua930-\ua95f\ua960-\ua97f\ua980-\ua9df\uaa00-\uaa5f\uaa60-\uaa7f\uaa80-\uaadf\uab00-\uab2f\uabc0-\uabff\uf900-\ufaff\ufb00-\ufb4f\ufb50-\ufdff\ufe00-\ufe0f\ufe10-\ufe1f\ufe20-\ufe2f\ufe30-\ufe4f\ufe50-\ufe6f\ufe70-\ufeff\uff00-\uffef]/)) {
    return true;
  }
  return false;
}

console.log('=== Comprehensive code.json audit ===\n');

let totalIssues = 0;
for (const locale of locales) {
  try {
    const filePath = join(BASE, `i18n/${locale}/code.json`);
    const locData = JSON.parse(readFileSync(filePath, 'utf8'));
    const issues = [];
    
    for (const [key, enVal] of Object.entries(en)) {
      const locVal = locData[key];
      if (!locVal || !locVal.message) continue;
      
      // Skip theme.* keys (Docusaurus internal)
      if (key.startsWith('theme.')) continue;
      
      // Check if the locale value is identical to EN
      if (locVal.message === enVal.message && enVal.message.length > 30) {
        issues.push({ key, value: enVal.message.substring(0, 80), reason: 'IDENTICAL_TO_EN' });
      }
      
      // Check if value looks like untranslated English
      if (isLikelyEnglish(locVal.message)) {
        issues.push({ key, value: locVal.message.substring(0, 80), reason: 'LOOKS_ENGLISH' });
      }
    }
    
    if (issues.length > 0) {
      console.log(`${locale}: ${issues.length} issues`);
      issues.slice(0, 5).forEach(i => {
        console.log(`  ${i.reason}: ${i.key}`);
        console.log(`    "${i.value}..."`);
      });
      if (issues.length > 5) console.log(`  ... and ${issues.length - 5} more`);
      totalIssues += issues.length;
    } else {
      console.log(`${locale}: ✅ OK`);
    }
  } catch(e) {
    console.log(`${locale}: ❌ ERROR: ${e.message}`);
  }
}

console.log(`\nTotal issues: ${totalIssues}`);
