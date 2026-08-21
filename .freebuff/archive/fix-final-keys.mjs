#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE = join(__dirname, '..');

function loadJson(relPath) {
  try { return JSON.parse(readFileSync(join(BASE, relPath), 'utf8')); }
  catch { return null; }
}
function saveJson(relPath, data) {
  writeFileSync(join(BASE, relPath), JSON.stringify(data, null, 2) + '\n', 'utf-8');
}

// Fix EN source — these have French text
const en = loadJson('i18n/en/code.json');
en['homepage.features.title.features'].message = 'Features';
en['homepage.hero.button.getStarted'].message = 'Get Started';
saveJson('i18n/en/code.json', en);
console.log('✅ EN source fixed');

// Final remaining translations
const T = {
  fr: {
    'homepage.comments.oraer.description': 'Utilisateur Chrome',
  },
  de: {
    'homepage.comments.oraer.description': 'Chrome-Benutzer',
  },
  es: {
    'homepage.comments.oraer.description': 'Usuario de Chrome',
  },
  it: {
    'homepage.comments.oraer.description': 'Utente Chrome',
  },
  ja: {
    'homepage.comments.oraer.description': 'Chromeユーザー',
  },
  pt: {
    'homepage.comments.oraer.description': 'Usuário do Chrome',
  },
  vi: {
    'homepage.comments.oraer.description': 'Người dùng Chrome',
  },
  'zh-Hant': {
    'homepage.comments.oraer.description': 'Chrome使用者',
  },
  ru: {
    'homepage.comments.oraer.description': 'Пользователь Chrome',
  },
  ar: {
    'homepage.comments.oraer.description': 'مستخدم Chrome',
  },
  nl: {
    'homepage.comments.oraer.description': 'Chrome-gebruiker',
  },
  bn: {
    'homepage.comments.oraer.description': 'Chrome ব্যবহারকারী',
  },
  id: {
    'homepage.comments.oraer.description': 'Pengguna Chrome',
  },
  hy: {
    'homepage.comments.oraer.description': 'Chrome օգտագործող',
  },
  uk: {
    'homepage.comments.oraer.description': 'Користувач Chrome',
  },
  tr: {
    'homepage.comments.oraer.description': 'Chrome Kullanıcısı',
  },
  ko: {
    'homepage.comments.oraer.description': 'Chrome 사용자',
  },
};

let totalFixed = 0;
for (const [locale, translations] of Object.entries(T)) {
  const relPath = `i18n/${locale}/code.json`;
  const data = loadJson(relPath);
  if (!data) continue;
  
  let fixed = 0;
  for (const [key, value] of Object.entries(translations)) {
    if (data[key] && data[key].message !== value) {
      data[key].message = value;
      fixed++;
    }
  }
  if (fixed > 0) {
    saveJson(relPath, data);
    console.log(`✅ ${locale}: fixed ${fixed} keys`);
    totalFixed += fixed;
  }
}

console.log(`\nTotal: ${totalFixed} keys fixed.`);
