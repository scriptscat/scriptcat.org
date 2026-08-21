#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const BASE = join(import.meta.dirname, '..');

const TRANSLATIONS = {
  fr: "ScriptCat est un moteur de scripts open-source puissant qui vous permet de personnaliser facilement les fonctionnalités web, bloquer les publicités, automatiser les tâches et améliorer votre expérience de navigation. Compatible avec Tampermonkey et offre plus de fonctionnalités et d'optimisations.",
  ar: "ScriptCat هو محرك سكريبتات مفتوح المصدر قوي يتيح لك بسهولة تخصيص وظائف الويب، وإزالة الإعلانات، وأتمتة المهام، وتحسين تجربة التصفح. متوافق مع Tampermonkey ويوفر ميزات وتحسينات إضافية.",
  de: "ScriptCat ist eine leistungsstarke Open-Source-Browser-Skript-Engine, mit der Sie Web-Funktionen einfach anpassen, Werbung eliminieren, Aufgaben automatisieren und Ihr Browsererlebnis verbessern können. Kompatibel mit Tampermonkey und bietet weitere Funktionen und Optimierungen.",
  es: "ScriptCat es un potente motor de scripts de navegador de código abierto que le permite personalizar fácilmente las funcionalidades web, eliminar anuncios, automatizar tareas y mejorar su experiencia de navegación. Compatible con Tampermonkey y ofrece más funcionalidades y optimizaciones.",
  it: "ScriptCat è un potente motore di script per browser open-source che ti permette di personalizzare facilmente le funzionalità web, eliminare le pubblicità, automatizzare le attività e migliorare la tua esperienza di navigazione. Compatibile con Tampermonkey e offre più funzionalità e ottimizzazioni.",
  ja: "ScriptCatは、Web機能のカスタマイズ、広告の排除、タスクの自動化、ブラウジング体験の向上を簡単にできる強力なオープンソースブラウザスクリプトエンジンです。Tampermonkeyと互換性があり、より多くの機能と最適化を提供します。",
  pt: "ScriptCat é um poderoso motor de scripts de navegador de código aberto que permite personalizar facilmente funcionalidades da web, eliminar anúncios, automatizar tarefas e melhorar sua experiência de navegação. Compatível com o Tampermonkey e oferece mais funcionalidades e otimizações.",
  vi: "ScriptCat là một công cụ script trình duyệt mã nguồn mở mạnh mẽ giúp bạn dễ dàng tùy chỉnh chức năng web, chặn quảng cáo, tự động hóa tác vụ và nâng cao trải nghiệm duyệt web. Tương thích với Tampermonkey và cung cấp nhiều tính năng và tối ưu hóa hơn.",
  "zh-Hant": "ScriptCat 是一個強大的開源瀏覽器腳本引擎，讓您輕鬆自訂網頁功能、消除廣告、自動化任務並提升瀏覽體驗。相容於 Tampermonkey 並提供更多功能和優化。",
  ru: "ScriptCat — это мощный движок скриптов браузера с открытым исходным кодом, который позволяет легко настраивать функциональность веб-сайтов, удалять рекламу, автоматизировать задачи и улучшать ваш опыт просмотра. Совместим с Tampermonkey и предоставляет дополнительные функции и оптимизации.",
  fa: "ScriptCat یک موتور اسکریپت قدرتمند متن‌باز مرورگر است که به شما امکان می‌دهد به راحتی عملکرد وب را سفارشی کنید، تبلیغات را حذف کنید، وظایف را خودکار کنید و تجربه مرور خود را بهبود بخشید. سازگار با Tampermonkey و ویژگی‌ها و بهینه‌سازی‌های بیشتری ارائه می‌دهد.",
  nl: "ScriptCat is een krachtige open-source browserscript-engine waarmee je eenvoudig webfunctionaliteit kunt aanpassen, advertenties kunt verwijderen, taken kunt automatiseren en je browse-ervaring kunt verbeteren. Compatibel met Tampermonkey en biedt meer functies en optimalisaties.",
  bn: "ScriptCat একটি শক্তিশালী ওপেন-সোর্স ব্রাউজার স্ক্রিপ্ট ইঞ্জিন যা আপনাকে সহজেই ওয়েব ফাংশনালিটি কাস্টমাইজ করতে, বিজ্ঞাপন বাদ দিতে, কাজ স্বয়ংক্রিয় করতে এবং আপনার ব্রাউজিং অভিজ্ঞতা বাড়াতে দেয়। Tampermonkey-এর সাথে সামঞ্জস্যপূর্ণ এবং আরও বৈশিষ্ট্য ও অপ্টিমাইজেশন প্রদান করে।",
  id: "ScriptCat adalah mesin skrip browser open-source yang kuat yang memungkinkan Anda dengan mudah menyesuaikan fungsionalitas web, menghilangkan iklan, mengotomatiskan tugas, dan meningkatkan pengalaman menjelajah Anda. Kompatibel dengan Tampermonkey dan menyediakan lebih banyak fitur dan optimasi.",
  hy: "ScriptCat-ը հզոր բաց կոդով բրաուզերի սկրիպտների շարժիչ է, որը թույլ է տալիս հեշտությամբ հարմարեցնել վեբ գործառույթները, վերացնել գովազդները, ավտոմատացնել խնդիրները և բարելավել ձեր դիտարկմի փորձը: Համատեղելի է Tampermonkey-ի հետ և տրամադրում է ավելի շատ հնարավորություններ և օպտիմիզացիա:",
  uk: "ScriptCat — це потужний движок скриптів браузера з відкритим кодом, який дозволяє легко налаштовувати функціональність веб-сайтів, видаляти рекламу, автоматизувати завдання та покращувати ваш досвід перегляду. Сумісний з Tampermonkey та надає додаткові функції та оптимізації.",
  tr: "ScriptCat, web işlevlerini kolayca özelleştirmenizi, reklamları kaldırmanızı, görevleri otomatikleştirmenizi ve tarama deneyiminizi geliştirmenizi sağlayan güçlü bir açık kaynak tarayıcı betik motorudur. Tampermonkey ile uyumludur ve daha fazla özellik ve optimizasyon sunar.",
  ko: "ScriptCat은 웹 기능을 쉽게 사용자 정의하고, 광고를 제거하고, 작업을 자동화하고, 브라우징 경험을 향상시킬 수 있는 강력한 오픈 소스 브라우저 스크립트 엔진입니다. Tampermonkey와 호환되며 더 많은 기능과 최적화를 제공합니다.",
};

let fixed = 0;
for (const [locale, translation] of Object.entries(TRANSLATIONS)) {
  const filePath = join(BASE, `i18n/${locale}/code.json`);
  try {
    const content = readFileSync(filePath, 'utf-8');
    const j = JSON.parse(content);
    
    if (j['homepage.hero.subtitle.main']) {
      j['homepage.hero.subtitle.main'].message = translation;
      writeFileSync(filePath, JSON.stringify(j, null, 2) + '\n', 'utf-8');
      console.log(`✅ ${locale}: fixed homepage.hero.subtitle.main`);
      fixed++;
    } else {
      console.log(`⚠️  ${locale}: key not found`);
    }
  } catch(e) {
    console.log(`❌ ${locale}: ${e.message}`);
  }
}

console.log(`\nFixed ${fixed} locales.`);
