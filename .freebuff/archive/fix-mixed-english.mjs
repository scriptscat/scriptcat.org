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

// Additional keys that were missed in the first pass — mixed English in landing page
const T = {
  fr: {
    'homepage.hero.subtitle.userScript': 'scripts utilisateur',
    'homepage.comparison.label.efficient': 'Efficace',
    'homepage.comparison.label.multiplatform': 'Multi-plateforme',
    'homepage.scenario.title.problems': 'problèmes réels',
    'homepage.scenario.video.tag': 'Applications populaires',
    'homepage.scenario.video.feature.adblock': 'Saut automatique des publicités',
    'homepage.scenario.video.sites': 'Sites pris en charge',
    'homepage.scenario.video.getScript': 'Obtenir le script →',
    'homepage.scenario.shopping.tag': 'Outils pratiques',
    'homepage.scenario.sites.more': '+Plus',
    'homepage.download.title.ready': 'Prêt à',
    'homepage.download.github': 'Téléchargement GitHub',
  },
  de: {
    'homepage.hero.subtitle.userScript': 'Benutzerskripte',
    'homepage.comparison.label.efficient': 'Effizient',
    'homepage.comparison.label.multiplatform': 'Plattformübergreifend',
    'homepage.scenario.title.problems': 'echte Probleme',
    'homepage.scenario.video.tag': 'Beliebte Apps',
    'homepage.scenario.video.feature.adblock': 'Automatisches Überspringen von Werbung',
    'homepage.scenario.video.sites': 'Unterstützte Websites',
    'homepage.scenario.video.getScript': 'Skript abrufen →',
    'homepage.scenario.shopping.tag': 'Praktische Werkzeuge',
    'homepage.scenario.sites.more': '+Mehr',
    'homepage.download.title.ready': 'Bereit für',
    'homepage.download.github': 'GitHub-Download',
  },
  es: {
    'homepage.hero.subtitle.userScript': 'scripts de usuario',
    'homepage.comparison.label.efficient': 'Eficiente',
    'homepage.comparison.label.multiplatform': 'Multiplataforma',
    'homepage.scenario.title.problems': 'problemas reales',
    'homepage.scenario.video.tag': 'Aplicaciones populares',
    'homepage.scenario.video.feature.adblock': 'Omisión automática de anuncios',
    'homepage.scenario.video.sites': 'Sitios compatibles',
    'homepage.scenario.video.getScript': 'Obtener script →',
    'homepage.scenario.shopping.tag': 'Herramientas prácticas',
    'homepage.scenario.sites.more': '+Más',
    'homepage.download.title.ready': 'Listo para',
    'homepage.download.github': 'Descarga de GitHub',
  },
  it: {
    'homepage.hero.subtitle.userScript': 'script utente',
    'homepage.comparison.label.efficient': 'Efficiente',
    'homepage.comparison.label.multiplatform': 'Multipiattaforma',
    'homepage.scenario.title.problems': 'problemi reali',
    'homepage.scenario.video.tag': 'App popolari',
    'homepage.scenario.video.feature.adblock': 'Salto automatico degli annunci',
    'homepage.scenario.video.sites': 'Siti supportati',
    'homepage.scenario.video.getScript': 'Ottieni script →',
    'homepage.scenario.shopping.tag': 'Strumenti pratici',
    'homepage.scenario.sites.more': '+Altro',
    'homepage.download.title.ready': 'Pronto per',
    'homepage.download.github': 'Download GitHub',
  },
  ja: {
    'homepage.hero.subtitle.userScript': 'ユーザースクリプト',
    'homepage.comparison.label.efficient': '高効率',
    'homepage.comparison.label.multiplatform': 'マルチプラットフォーム',
    'homepage.scenario.title.problems': '実際の問題',
    'homepage.scenario.video.tag': '人気アプリ',
    'homepage.scenario.video.feature.adblock': '広告自動スキップ',
    'homepage.scenario.video.sites': '対応サイト',
    'homepage.scenario.video.getScript': 'スクリプトを取得 →',
    'homepage.scenario.shopping.tag': '便利なツール',
    'homepage.scenario.sites.more': '+もっと見る',
    'homepage.download.title.ready': '始めましょう',
    'homepage.download.github': 'GitHubダウンロード',
  },
  pt: {
    'homepage.hero.subtitle.userScript': 'scripts de usuário',
    'homepage.comparison.label.efficient': 'Eficiente',
    'homepage.comparison.label.multiplatform': 'Multiplataforma',
    'homepage.scenario.title.problems': 'problemas reais',
    'homepage.scenario.video.tag': 'Apps populares',
    'homepage.scenario.video.feature.adblock': 'Pulo automático de anúncios',
    'homepage.scenario.video.sites': 'Sites compatíveis',
    'homepage.scenario.video.getScript': 'Obter script →',
    'homepage.scenario.shopping.tag': 'Ferramentas práticas',
    'homepage.scenario.sites.more': '+Mais',
    'homepage.download.title.ready': 'Pronto para',
    'homepage.download.github': 'Download do GitHub',
  },
  vi: {
    'homepage.hero.subtitle.userScript': 'script người dùng',
    'homepage.comparison.label.efficient': 'Hiệu quả',
    'homepage.comparison.label.multiplatform': 'Đa nền tảng',
    'homepage.scenario.title.problems': 'vấn đề thực tế',
    'homepage.scenario.video.tag': 'Ứng dụng phổ biến',
    'homepage.scenario.video.feature.adblock': 'Tự động bỏ qua quảng cáo',
    'homepage.scenario.video.sites': 'Trang web được hỗ trợ',
    'homepage.scenario.video.getScript': 'Lấy script →',
    'homepage.scenario.shopping.tag': 'Công cụ thực tế',
    'homepage.scenario.sites.more': '+Thêm',
    'homepage.download.title.ready': 'Sẵn sàng',
    'homepage.download.github': 'Tải xuống GitHub',
  },
  'zh-Hant': {
    'homepage.hero.subtitle.userScript': '使用者腳本',
    'homepage.comparison.label.efficient': '高效',
    'homepage.comparison.label.multiplatform': '跨平台',
    'homepage.scenario.title.problems': '實際問題',
    'homepage.scenario.video.tag': '熱門應用',
    'homepage.scenario.video.feature.adblock': '自動跳過廣告',
    'homepage.scenario.video.sites': '支援的網站',
    'homepage.scenario.video.getScript': '取得腳本 →',
    'homepage.scenario.shopping.tag': '實用工具',
    'homepage.scenario.sites.more': '+更多',
    'homepage.download.title.ready': '準備好',
    'homepage.download.github': 'GitHub 下載',
  },
  ru: {
    'homepage.hero.subtitle.userScript': 'пользовательские скрипты',
    'homepage.comparison.label.efficient': 'Эффективно',
    'homepage.comparison.label.multiplatform': 'Кроссплатформенно',
    'homepage.scenario.title.problems': 'реальные проблемы',
    'homepage.scenario.video.tag': 'Популярные приложения',
    'homepage.scenario.video.feature.adblock': 'Автопропуск рекламы',
    'homepage.scenario.video.sites': 'Поддерживаемые сайты',
    'homepage.scenario.video.getScript': 'Получить скрипт →',
    'homepage.scenario.shopping.tag': 'Практичные инструменты',
    'homepage.scenario.sites.more': '+Ещё',
    'homepage.download.title.ready': 'Готовы к',
    'homepage.download.github': 'Скачать с GitHub',
  },
  ar: {
    'homepage.hero.subtitle.userScript': 'سكريبتات المستخدم',
    'homepage.comparison.label.efficient': 'فعال',
    'homepage.comparison.label.multiplatform': 'متعدد المنصات',
    'homepage.scenario.title.problems': 'مشاكل حقيقية',
    'homepage.scenario.video.tag': 'تطبيقات شائعة',
    'homepage.scenario.video.feature.adblock': 'تخطي الإعلانات تلقائياً',
    'homepage.scenario.video.sites': 'المواقع المدعومة',
    'homepage.scenario.video.getScript': 'احصل على السكريبت →',
    'homepage.scenario.shopping.tag': 'أدوات عملية',
    'homepage.scenario.sites.more': '+المزيد',
    'homepage.download.title.ready': 'مستعد لـ',
    'homepage.download.github': 'تنزيل من GitHub',
  },
  fa: {
    'homepage.comments.enncy.username': 'Yan Xiaoxi (enncy)',
    'homepage.comments.student.username': 'دانشجو',
  },
  nl: {
    'homepage.hero.subtitle.userScript': 'gebruikerscripts',
    'homepage.comparison.label.efficient': 'Efficiënt',
    'homepage.comparison.label.multiplatform': 'Multiplatform',
    'homepage.scenario.title.problems': 'echte problemen',
    'homepage.scenario.video.tag': 'Populaire apps',
    'homepage.scenario.video.feature.adblock': 'Automatisch advertenties overslaan',
    'homepage.scenario.video.sites': 'Ondersteunde sites',
    'homepage.scenario.video.getScript': 'Script ophalen →',
    'homepage.scenario.shopping.tag': 'Praktische tools',
    'homepage.scenario.sites.more': '+Meer',
    'homepage.download.title.ready': 'Klaar om',
    'homepage.download.github': 'GitHub-download',
  },
  bn: {
    'homepage.hero.subtitle.userScript': 'ব্যবহারকারী স্ক্রিপ্ট',
    'homepage.comparison.label.efficient': 'দক্ষ',
    'homepage.comparison.label.multiplatform': 'মাল্টিপ্ল্যাটফর্ম',
    'homepage.scenario.title.problems': 'প্রকৃত সমস্যা',
    'homepage.scenario.video.tag': 'জনপ্রিয় অ্যাপ',
    'homepage.scenario.video.feature.adblock': 'বিজ্ঞাপন স্বয়ংক্রিয় বাদ',
    'homepage.scenario.video.sites': 'সমর্থিত সাইট',
    'homepage.scenario.video.getScript': 'স্ক্রিপ্ট পান →',
    'homepage.scenario.shopping.tag': 'ব্যবহারিক টুল',
    'homepage.scenario.sites.more': '+আরও',
    'homepage.download.title.ready': 'প্রস্তুত',
    'homepage.download.github': 'GitHub ডাউনলোড',
  },
  id: {
    'homepage.hero.subtitle.userScript': 'skrip pengguna',
    'homepage.comparison.label.efficient': 'Efisien',
    'homepage.comparison.label.multiplatform': 'Multiplatform',
    'homepage.scenario.title.problems': 'masalah nyata',
    'homepage.scenario.video.tag': 'Aplikasi populer',
    'homepage.scenario.video.feature.adblock': 'Lewati iklan otomatis',
    'homepage.scenario.video.sites': 'Situs yang didukung',
    'homepage.scenario.video.getScript': 'Dapatkan skrip →',
    'homepage.scenario.shopping.tag': 'Alat praktis',
    'homepage.scenario.sites.more': '+Lainnya',
    'homepage.download.title.ready': 'Siap untuk',
    'homepage.download.github': 'Unduhan GitHub',
  },
  hy: {
    'homepage.hero.subtitle.userScript': 'օգտագործողի սկրիպտներ',
    'homepage.comparison.label.efficient': 'Արդյունավետ',
    'homepage.comparison.label.multiplatform': 'Բազմապլատֆորմ',
    'homepage.scenario.title.problems': 'իրական խնդիրներ',
    'homepage.scenario.video.tag': 'Հայտնի հավելվածներ',
    'homepage.scenario.video.feature.adblock': 'Գովազդների ավտոմատ բաց թողնում',
    'homepage.scenario.video.sites': 'Աջակցվող կայքեր',
    'homepage.scenario.video.getScript': 'Ստանալ սկրիպտ →',
    'homepage.scenario.shopping.tag': 'Գործնական գործիքներ',
    'homepage.scenario.sites.more': '+Ավելին',
    'homepage.download.title.ready': 'Պատրաստ է',
    'homepage.download.github': 'GitHub ներբեռնում',
  },
  uk: {
    'homepage.hero.subtitle.userScript': 'користувацькі скрипти',
    'homepage.comparison.label.efficient': 'Ефективно',
    'homepage.comparison.label.multiplatform': 'Кросплатформенно',
    'homepage.scenario.title.problems': 'реальні проблеми',
    'homepage.scenario.video.tag': 'Популярні додатки',
    'homepage.scenario.video.feature.adblock': 'Автопропуск реклами',
    'homepage.scenario.video.sites': 'Підтримувані сайти',
    'homepage.scenario.video.getScript': 'Отримати скрипт →',
    'homepage.scenario.shopping.tag': 'Практичні інструменти',
    'homepage.scenario.sites.more': '+Більше',
    'homepage.download.title.ready': 'Готові до',
    'homepage.download.github': 'Завантажити з GitHub',
  },
  tr: {
    'homepage.hero.subtitle.userScript': 'kullanıcı betikleri',
    'homepage.comparison.label.efficient': 'Verimli',
    'homepage.comparison.label.multiplatform': 'Çoklu platform',
    'homepage.scenario.title.problems': 'gerçek sorunlar',
    'homepage.scenario.video.tag': 'Popüler uygulamalar',
    'homepage.scenario.video.feature.adblock': 'Reklamları otomatik atlama',
    'homepage.scenario.video.sites': 'Desteklenen siteler',
    'homepage.scenario.video.getScript': 'Betik al →',
    'homepage.scenario.shopping.tag': 'Pratik araçlar',
    'homepage.scenario.sites.more': '+Daha fazla',
    'homepage.download.title.ready': 'Hazır',
    'homepage.download.github': 'GitHub indirme',
  },
  ko: {
    'homepage.hero.subtitle.userScript': '사용자 스크립트',
    'homepage.comparison.label.efficient': '효율적',
    'homepage.comparison.label.multiplatform': '멀티플랫폼',
    'homepage.scenario.title.problems': '실제 문제',
    'homepage.scenario.video.tag': '인기 앱',
    'homepage.scenario.video.feature.adblock': '광고 자동 건너뛰기',
    'homepage.scenario.video.sites': '지원되는 사이트',
    'homepage.scenario.video.getScript': '스크립트 받기 →',
    'homepage.scenario.shopping.tag': '실용적인 도구',
    'homepage.scenario.sites.more': '+더보기',
    'homepage.download.title.ready': '준비하세요',
    'homepage.download.github': 'GitHub 다운로드',
  },
};

let totalFixed = 0;
for (const [locale, translations] of Object.entries(T)) {
  const relPath = `i18n/${locale}/code.json`;
  const data = loadJson(relPath);
  if (!data) { console.log(`❌ ${locale}: file not found`); continue; }
  
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
  } else {
    console.log(`  ${locale}: already OK`);
  }
}

console.log(`\nTotal: ${totalFixed} keys fixed across all locales.`);
