#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const BASE = join(import.meta.dirname, '..');

// Step 1: Fix EN source - some keys have French text
const enPath = join(BASE, 'i18n/en/code.json');
const en = JSON.parse(readFileSync(enPath, 'utf8'));

// Fix broken EN keys
en['homepage.hero.subtitle'] = { message: 'A browser extension for executing userscripts, everything can be scripted, make your browser do more!' };
en['homepage.features.compatibility.description'] = { message: 'Fully compatible with Tampermonkey and Violentmonkey scripts, migrate seamlessly at zero cost.' };
en['homepage.features.easy.description'] = { message: 'Built-in editor with smart autocompletion, syntax checking, making development easier and more efficient.' };
en['homepage.features.powerful.description'] = { message: 'Fully compatible with Tampermonkey, background scripts, scheduled scripts, powerful APIs for developers.' };
en['homepage.features.secure.description'] = { message: 'Sandbox execution mechanism, permission management, guaranteed secure script execution environment.' };
en['homepage.meta.keywords'] = { message: 'ScriptCat,user scripts,browser extension,userscript,Tampermonkey,Violentmonkey,background scripts,scheduled scripts' };
writeFileSync(enPath, JSON.stringify(en, null, 2) + '\n', 'utf-8');
console.log('✅ EN source fixed');

// Step 2: Define translations for ALL 13 untranslated keys
const T = {
  fr: {
    'homepage.download.popup.text': '3 scripts sont en cours d\'exécution sur la page actuelle',
    'homepage.download.subtitle': 'Installez ScriptCat maintenant et débloquez des possibilités infinies pour la navigation web',
    'homepage.download.title.enhance': 'Améliorez votre expérience de navigation',
    'homepage.features.compatibility.description': 'Entièrement compatible avec les scripts Tampermonkey et Violentmonkey, migrez sans coût supplémentaire.',
    'homepage.features.tampermonkey.description': 'Entièrement compatible avec le format de script Tampermonkey, migrez vos scripts existants sans interruption.',
    'homepage.hero.browser.crx': 'Télécharger le paquet d\'installation pour l\'installation manuelle',
    'homepage.hero.subtitle.highlight': 'Une extension de navigateur pour exécuter des',
    'homepage.hero.subtitle.possibilities': ', activant des possibilités infinies pour votre navigateur !',
    'homepage.hero.trustBadges.title': 'Approuvé et soutenu par la communauté technique',
    'homepage.scenario.shopping.subtitle': 'Rendez l\'expérience shopping plus facile',
    'homepage.scenario.subtitle': 'Voyez comment ScriptCat peut transformer votre expérience de navigation',
    'homepage.scenario.video.subtitle': 'Optimisez l\'expérience de visionnage vidéo',
    'homepage.twitter.description': 'Un moteur de scripts de navigateur open-source qui rend votre navigateur plus puissant',
    'homepage.twitter.title': 'ScriptCat - Puissant moteur de scripts de navigateur',
    'homepage.comments.oraer.content': 'Première rencontre avec Tampermonkey ! J\'apprends Tampermonkey ! Je dépasse Tampermonkey !',
    'homepage.comments.wwwwwllllk.content': 'Utiliser ScriptCat pour améliorer mon expérience internet, rencontrer des personnes partageant les mêmes centres d\'intérêt dans la communauté.',
    'homepage.features.easy.description': 'Éditeur intégré, autocomplétion intelligente, vérification de syntaxe, rendant le développement plus facile et plus efficace.',
    'homepage.features.powerful.description': 'Entièrement compatible avec Tampermonkey, scripts en arrière-plan, scripts planifiés, API puissantes pour les développeurs.',
    'homepage.features.secure.description': 'Mécanisme de bac à sable d\'exécution, gestion des permissions, garantissant un environnement d\'exécution sécurisé des scripts.',
    'homepage.hero.subtitle': 'Une extension de navigateur qui peut exécuter des scripts utilisateur, tout peut être scripté, permettez à votre navigateur de faire plus !',
    'homepage.meta.keywords': 'ScriptCat,scripts utilisateur,extension de navigateur,userscript,Tampermonkey,Violentmonkey,scripts en arrière-plan,scripts planifiés',
  },
  de: {
    'homepage.download.popup.text': '3 Skripte werden auf der aktuellen Seite ausgeführt',
    'homepage.download.subtitle': 'Installieren Sie jetzt ScriptCat und schalten Sie unbegrenzte Möglichkeiten für das Surfen frei',
    'homepage.download.title.enhance': 'Verbessern Sie Ihr Browsererlebnis',
    'homepage.features.compatibility.description': 'Vollständig kompatibel mit Tampermonkey- und Violentmonkey-Skripten, nahtlose Migration ohne Kosten.',
    'homepage.features.tampermonkey.description': 'Vollständig kompatibel mit dem Tampermonkey-Skriptformat, migrieren Sie Ihre bestehenden Skripte nahtlos.',
    'homepage.hero.browser.crx': 'Installationspaket für manuelle Installation herunterladen',
    'homepage.hero.subtitle.highlight': 'Eine Browser-Erweiterung zum Ausführen von',
    'homepage.hero.subtitle.possibilities': ', aktiviert unbegrenzte Möglichkeiten für Ihren Browser!',
    'homepage.hero.trustBadges.title': 'Vertrauenswürdig und unterstützt von der Tech-Community',
    'homepage.scenario.shopping.subtitle': 'Einkaufen leicht gemacht',
    'homepage.scenario.subtitle': 'Entdecken Sie, wie ScriptCat Ihr Browsererlebnis verändern kann',
    'homepage.scenario.video.subtitle': 'Optimieren Sie das Videoerlebnis',
    'homepage.twitter.description': 'Ein leistungsstarke Open-Source-Browser-Skript-Engine, die Ihren Browser mehr kann',
    'homepage.twitter.title': 'ScriptCat - Leistungsstarke Browser-Skript-Engine',
    'homepage.comments.oraer.content': 'Erster Kontakt mit Tampermonkey! Tampermonkey lernen! Tampermonkey übertreffen!',
    'homepage.comments.wwwwwllllk.content': 'ScriptCat nutzen, um mein Internet-Erlebnis zu verbessern, Gleichgesinnte in der Community treffen.',
    'homepage.meta.keywords': 'ScriptCat,Benutzerskripte,Browser-Erweiterung,userscript,Tampermonkey,Violentmonkey,Hintergrundskripte,geplante Skripte',
  },
  es: {
    'homepage.download.popup.text': '3 scripts se están ejecutando en la página actual',
    'homepage.download.subtitle': 'Instala ScriptCat ahora y desbloquea posibilidades infinitas para la navegación web',
    'homepage.download.title.enhance': 'Mejora tu experiencia de navegación',
    'homepage.features.compatibility.description': 'Totalmente compatible con scripts de Tampermonkey y Violentmonkey, migra sin costo adicional.',
    'homepage.features.tampermonkey.description': 'Totalmente compatible con el formato de script de Tampermonkey, migra tus scripts existentes sin interrupciones.',
    'homepage.hero.browser.crx': 'Descargar paquete de instalación para instalación manual',
    'homepage.hero.subtitle.highlight': 'Una extensión de navegador para ejecutar',
    'homepage.hero.subtitle.possibilities': ', activando posibilidades infinitas para tu navegador!',
    'homepage.hero.trustBadges.title': 'Avalado y apoyado por la comunidad tecnológica',
    'homepage.scenario.shopping.subtitle': 'Haz la experiencia de compra más fácil',
    'homepage.scenario.subtitle': 'Descubre cómo ScriptCat puede transformar tu experiencia de navegación',
    'homepage.scenario.video.subtitle': 'Optimiza la experiencia de visualización de video',
    'homepage.twitter.description': 'Un potente motor de scripts de navegador open-source que hace que tu navegador haga más',
    'homepage.twitter.title': 'ScriptCat - Potente motor de scripts de navegador',
    'homepage.comments.oraer.content': '¡Primer encuentro con Tampermonkey! ¡Aprendiendo Tampermonkey! ¡Superando Tampermonkey!',
    'homepage.comments.wwwwwllllk.content': 'Usar ScriptCat para mejorar mi experiencia de internet, conocer personas afines en la comunidad.',
    'homepage.meta.keywords': 'ScriptCat,scripts de usuario,extensión de navegador,userscript,Tampermonkey,Violentmonkey,scripts de fondo,scripts programados',
  },
  it: {
    'homepage.download.popup.text': '3 script sono in esecuzione nella pagina corrente',
    'homepage.download.subtitle': 'Installa ScriptCat ora e sblocca possibilità infinite per la navigazione web',
    'homepage.download.title.enhance': 'Migliora la tua esperienza di navigazione',
    'homepage.features.compatibility.description': 'Completamente compatibile con script di Tampermonkey e Violentmonkey, migrazione senza costi aggiuntivi.',
    'homepage.features.tampermonkey.description': 'Completamente compatibile con il formato script di Tampermonkey, migra i tuoi script esistenti senza interruzioni.',
    'homepage.hero.browser.crx': 'Scarica il pacchetto di installazione per l\'installazione manuale',
    'homepage.hero.subtitle.highlight': 'Un\'estensione del browser per eseguire',
    'homepage.hero.subtitle.possibilities': ', attivando possibilità infinite per il tuo browser!',
    'homepage.hero.trustBadges.title': 'Affidabile e supportato dalla comunità tecnologica',
    'homepage.scenario.shopping.subtitle': 'Rendi l\'esperienza di shopping più facile',
    'homepage.scenario.subtitle': 'Scopri come ScriptCat può trasformare la tua esperienza di navigazione',
    'homepage.scenario.video.subtitle': 'Ottimizza l\'esperienza di visualizzazione video',
    'homepage.twitter.description': 'Un potente motore di script per browser open-source che rende il tuo browser più performante',
    'homepage.twitter.title': 'ScriptCat - Potente motore di script per browser',
    'homepage.comments.oraer.content': 'Primo incontro con Tampermonkey! Imparo Tampermonkey! Supero Tampermonkey!',
    'homepage.comments.wwwwwllllk.content': 'Usare ScriptCat per migliorare la mia esperienza internet, incontrare persone con gli stessi interessi nella comunità.',
    'homepage.meta.keywords': 'ScriptCat,script utente,estensione del browser,userscript,Tampermonkey,Violentmonkey,script di background,script pianificati',
  },
  ja: {
    'homepage.download.popup.text': '現在のページで3つのスクリプトが実行されています',
    'homepage.download.subtitle': '今すぐScriptCatをインストールして、ウェブ閲覧の無限の可能性を解放しましょう',
    'homepage.download.title.enhance': 'ブラウジング体験を向上させましょう',
    'homepage.features.compatibility.description': 'TampermonkeyやViolentmonkeyのスクリプトと完全に互換性があり、コストなしでシームレスに移行できます。',
    'homepage.features.tampermonkey.description': 'Tampermonkeyのスクリプト形式と完全に互換性があり、既存のスクリプトを中断なしに移行できます。',
    'homepage.hero.browser.crx': '手動インストール用のインストールパッケージをダウンロード',
    'homepage.hero.subtitle.highlight': '実行するためのブラウザ拡張機能',
    'homepage.hero.subtitle.possibilities': '、ブラウザに無限の可能性をもたらします！',
    'homepage.hero.trustBadges.title': '技術コミュニティから信頼和支持されています',
    'homepage.scenario.shopping.subtitle': 'ショッピング体験をもっと簡単に',
    'homepage.scenario.subtitle': 'ScriptCatがどのようにブラウジング体験を変えるか見てみましょう',
    'homepage.scenario.video.subtitle': '動画視聴体験を最適化',
    'homepage.twitter.description': 'ブラウザに強力な機能を与えるオープンソースブラウザスクリプトエンジン',
    'homepage.twitter.title': 'ScriptCat - 強力なブラウザスクリプトエンジン',
    'homepage.comments.oraer.content': 'Tampermonkeyとの初めての出会い！Tampermonkeyを学んでいます！Tampermonkeyを超えています！',
    'homepage.comments.wwwwwllllk.content': 'ScriptCatを使ってインターネット体験を向上させ、コミュニティで志を同じくする人々と出会う。',
    'homepage.meta.keywords': 'ScriptCat,ユーザースクリプト,ブラウザ拡張機能,userscript,Tampermonkey,Violentmonkey,バックグラウンドスクリプト,スケジュールスクリプト',
  },
  pt: {
    'homepage.download.popup.text': '3 scripts estão sendo executados na página atual',
    'homepage.download.subtitle': 'Instale o ScriptCat agora e desbloqueie possibilidades infinitas para a navegação web',
    'homepage.download.title.enhance': 'Melhore sua experiência de navegação',
    'homepage.features.compatibility.description': 'Totalmente compatível com scripts do Tampermonkey e Violentmonkey, migre sem custos adicionais.',
    'homepage.features.tampermonkey.description': 'Totalmente compatível com o formato de script do Tampermonkey, migre seus scripts existentes sem interrupções.',
    'homepage.hero.browser.crx': 'Baixar pacote de instalação para instalação manual',
    'homepage.hero.subtitle.highlight': 'Uma extensão do navegador para executar',
    'homepage.hero.subtitle.possibilities': ', ativando possibilidades infinitas para o seu navegador!',
    'homepage.hero.trustBadges.title': 'Apoiado e confiado pela comunidade de tecnologia',
    'homepage.scenario.shopping.subtitle': 'Torne a experiência de compras mais fácil',
    'homepage.scenario.subtitle': 'Veja como o ScriptCat pode transformar sua experiência de navegação',
    'homepage.scenario.video.subtitle': 'Otimize a experiência de visualização de vídeo',
    'homepage.twitter.description': 'Um poderoso motor de scripts de navegador open-source que faz seu navegador fazer mais',
    'homepage.twitter.title': 'ScriptCat - Poderoso motor de scripts de navegador',
    'homepage.comments.oraer.content': 'Primeiro encontro com o Tampermonkey! Aprendendo Tampermonkey! Superando Tampermonkey!',
    'homepage.comments.wwwwwllllk.content': 'Usar o ScriptCat para melhorar minha experiência na internet, conhecer pessoas com interesses semelhantes na comunidade.',
    'homepage.meta.keywords': 'ScriptCat,scripts de usuário,extensão do navegador,userscript,Tampermonkey,Violentmonkey,scripts de fundo,scripts agendados',
  },
  vi: {
    'homepage.download.popup.text': '3 script đang chạy trên trang hiện tại',
    'homepage.download.subtitle': 'Cài đặt ScriptCat ngay và mở khóa khả năng vô hạn cho việc duyệt web',
    'homepage.download.title.enhance': 'Nâng cao trải nghiệm duyệt web của bạn',
    'homepage.features.compatibility.description': 'Hoàn toàn tương thích với script của Tampermonkey và Violentmonkey, di chuyển mà không tốn kém.',
    'homepage.features.tampermonkey.description': 'Hoàn toàn tương thích với định dạng script Tampermonkey, di chuyển script hiện có mà không bị gián đoạn.',
    'homepage.hero.browser.crx': 'Tải xuống gói cài đặt để cài đặt thủ công',
    'homepage.hero.subtitle.highlight': 'Tiện ích mở rộng trình duyệt để thực thi',
    'homepage.hero.subtitle.possibilities': ', kích hoạt khả năng vô hạn cho trình duyệt của bạn!',
    'homepage.hero.trustBadges.title': 'Được tin cậy và hỗ trợ bởi cộng đồng công nghệ',
    'homepage.scenario.shopping.subtitle': 'Làm cho trải nghiệm mua sắm dễ dàng hơn',
    'homepage.scenario.subtitle': 'Xem ScriptCat có thể biến đổi trải nghiệm duyệt web của bạn như thế nào',
    'homepage.scenario.video.subtitle': 'Tối ưu hóa trải nghiệm xem video',
    'homepage.twitter.description': 'Công cụ script trình duyệt mã nguồn mở mạnh mẽ giúp trình duyệt của bạn làm được nhiều hơn',
    'homepage.twitter.title': 'ScriptCat - Công cụ script trình duyệt mạnh mẽ',
    'homepage.comments.oraer.content': 'Lần đầu gặp gỡ Tampermonkey! Đang học Tampermonkey! Vượt qua Tampermonkey!',
    'homepage.comments.wwwwwllllk.content': 'Sử dụng ScriptCat để cải thiện trải nghiệm internet, gặp gỡ những người cùng chí hướng trong cộng đồng.',
    'homepage.meta.keywords': 'ScriptCat,script người dùng,tiện ích mở rộng trình duyệt,userscript,Tampermonkey,Violentmonkey,script nền,script theo lịch trình',
  },
  'zh-Hant': {
    'homepage.download.popup.text': '目前頁面上有 3 個腳本正在運行',
    'homepage.download.subtitle': '立即安裝 ScriptCat 並解鎖網頁瀏覽的無限可能',
    'homepage.download.title.enhance': '提升您的瀏覽體驗',
    'homepage.features.compatibility.description': '與 Tampermonkey 和 Violentmonkey 腳本完全相容，零成本無縫遷移。',
    'homepage.features.tampermonkey.description': '與 Tampermonkey 腳本格式完全相容，無縫遷移您現有的腳本。',
    'homepage.hero.browser.crx': '下載手動安裝的安裝套件',
    'homepage.hero.subtitle.highlight': '一個用於執行',
    'homepage.hero.subtitle.possibilities': '的瀏覽器擴充套件，為您的瀏覽器啟用無限可能！',
    'homepage.hero.trustBadges.title': '獲得技術社群的信任與支持',
    'homepage.scenario.shopping.subtitle': '讓購物體驗更輕鬆',
    'homepage.scenario.subtitle': '看看 ScriptCat 如何改變您的瀏覽體驗',
    'homepage.scenario.video.subtitle': '優化影片觀看體驗',
    'homepage.twitter.description': '強大的開源瀏覽器腳本引擎，讓您的瀏覽器做更多',
    'homepage.twitter.title': 'ScriptCat - 強大的瀏覽器腳本引擎',
    'homepage.comments.oraer.content': '與 Tampermonkey 的初次相遇！學習 Tampermonkey！超越 Tampermonkey！',
    'homepage.comments.wwwwwllllk.content': '使用 ScriptCat 改善我的上網體驗，在社群中遇見志同道合的人。',
    'homepage.meta.keywords': 'ScriptCat,使用者腳本,瀏覽器擴充套件,userscript,Tampermonkey,Violentmonkey,背景腳本,排程腳本',
  },
  ru: {
    'homepage.download.popup.text': 'На текущей странице работают 3 скрипта',
    'homepage.download.subtitle': 'Установите ScriptCat сейчас и откройте безграничные возможности для просмотра веб-страниц',
    'homepage.download.title.enhance': 'Улучшите свой опыт просмотра',
    'homepage.features.compatibility.description': 'Полная совместимость со скриптами Tampermonkey и Violentmonkey, без стоимости миграции.',
    'homepage.features.tampermonkey.description': 'Полная совместимость с форматом скриптов Tampermonkey, бесшовная миграция существующих скриптов.',
    'homepage.hero.browser.crx': 'Скачать установочный пакет для ручной установки',
    'homepage.hero.subtitle.highlight': 'Расширение браузера для выполнения',
    'homepage.hero.subtitle.possibilities': ', активирующее безграничные возможности для вашего браузера!',
    'homepage.hero.trustBadges.title': 'Проверено и поддерживается техническим сообществом',
    'homepage.scenario.shopping.subtitle': 'Сделайте покупки проще',
    'homepage.scenario.subtitle': 'Узнайте, как ScriptCat может изменить ваш опыт просмотра',
    'homepage.scenario.video.subtitle': 'Оптимизируйте просмотр видео',
    'homepage.twitter.description': 'Мощный движок скриптов браузера с открытым кодом, который расширяет возможности вашего браузера',
    'homepage.twitter.title': 'ScriptCat — Мощный движок скриптов браузера',
    'homepage.comments.oraer.content': 'Первая встреча с Tampermonkey! Изучаю Tampermonkey! Превосхожу Tampermonkey!',
    'homepage.comments.wwwwwllllk.content': 'Использую ScriptCat для улучшения моего опыта в интернете, встречаю единомышленников в сообществе.',
    'homepage.meta.keywords': 'ScriptCat,пользовательские скрипты,расширение браузера,userscript,Tampermonkey,Violentmonkey,фоновые скрипты,запланированные скрипты',
  },
  ar: {
    'homepage.download.popup.text': '3 سكريبتات تعمل على الصفحة الحالية',
    'homepage.download.subtitle': 'قم بتثبيت ScriptCat الآن وافتح إمكانيات لا محدودة لتصفح الويب',
    'homepage.download.title.enhance': 'حسّن تجربة التصفح الخاصة بك',
    'homepage.features.compatibility.description': 'متوافق تمامًا مع سكريبتات Tampermonkey و Violentmonkey، انتقل دون تكلفة إضافية.',
    'homepage.features.tampermonkey.description': 'متوافق تمامًا مع تنسيق سكريبتات Tampermonkey، انتقل بسلاسة إلى سكريبتاتك الحالية.',
    'homepage.hero.browser.crx': 'تنزيل حزمة التثبيت للتثبيت اليدوي',
    'homepage.hero.subtitle.highlight': 'إضافة متصفح لتنفيذ',
    'homepage.hero.subtitle.possibilities': '، تفعيل إمكانيات لا محدودة لمتصفحك!',
    'homepage.hero.trustBadges.title': 'موثوق ويدعمه مجتمع التقنية',
    'homepage.scenario.shopping.subtitle': 'اجعل تجربة التسوق أسهل',
    'homepage.scenario.subtitle': 'شاهد كيف يمكن لـ ScriptCat تغيير تجربة التصفح الخاصة بك',
    'homepage.scenario.video.subtitle': 'حسّن تجربة مشاهدة الفيديو',
    'homepage.twitter.description': 'محرك سكريبتات متصفح مفتوح المصدر يجعل متصفحك يفعل المزيد',
    'homepage.twitter.title': 'ScriptCat - محرك سكريبتات متصفح قوي',
    'homepage.comments.oraer.content': 'أول لقاء مع Tampermonkey! أتعلم Tampermonkey! أتفوق على Tampermonkey!',
    'homepage.comments.wwwwwllllk.content': 'استخدام ScriptCat لتحسين تجربتي على الإنترنت، تلبية أشخاص يشاركونني الاهتمامات في المجتمع.',
    'homepage.meta.keywords': 'ScriptCat,سكريبتات المستخدم,إضافة المتصفح,userscript,Tampermonkey,Violentmonkey,سكريبتات الخلفية,سكريبتات مجدولة',
  },
};

let totalFixed = 0;
for (const [locale, translations] of Object.entries(T)) {
  const filePath = join(BASE, `i18n/${locale}/code.json`);
  try {
    const j = JSON.parse(readFileSync(filePath, 'utf-8'));
    let fixed = 0;
    for (const [key, value] of Object.entries(translations)) {
      if (j[key]) {
        if (j[key].message !== value) {
          j[key].message = value;
          fixed++;
        }
      }
    }
    if (fixed > 0) {
      writeFileSync(filePath, JSON.stringify(j, null, 2) + '\n', 'utf-8');
      console.log(`✅ ${locale}: fixed ${fixed} keys`);
      totalFixed += fixed;
    } else {
      console.log(`  ${locale}: already OK`);
    }
  } catch(e) {
    console.log(`❌ ${locale}: ${e.message}`);
  }
}

console.log(`\nTotal: ${totalFixed} keys fixed across all locales.`);
