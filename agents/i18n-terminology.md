# i18n Terminology Glossary / 多语言术语对照表

EN summary: This document provides terminology and content-ownership rules for all 20 supported locales. Changelogs have Chinese and English sources only; Traditional Chinese renders the Chinese source, while other translated locales render the English source and reuse its images.

本文档为所有 20 个支持的语言区域提供统一的术语参考。翻译者和 AI 工具应使用这些术语作为规范翻译，以确保整个文档站点的一致性。

## Changelog and image ownership

- Changelogs under `change/`, including `change/index.md` and `change/beta-changelog.md`, are maintained only in Chinese (`docs/change/`) and English (`i18n/en/.../change/`). Traditional Chinese (`zh-Hant`) falls back to the Chinese source; every other translated locale falls back to English. Declare the source in `scripts/check-config.json` and do not add translated changelog copies.
- A non-English document that displays the same screenshot as the English document must reference the English asset with `@site/i18n/en/docusaurus-plugin-content-docs/current/<path>` instead of copying the binary into its locale tree.
- Keep a locale-specific image only when its visible content is genuinely localized. Do not treat a renamed, recompressed, or relocated English screenshot as a translation.

更新日志（包括 `change/index.md` 和 `change/beta-changelog.md`）只维护中文与英文版本；繁体中文通过 `scripts/check-config.json` 复用中文源，其他翻译语言回退到英文。与英文版内容相同的图片必须直接引用英文资源；只有画面内容确实完成本地化时，才保留该语言自己的图片文件。

---

## How to Use This Document

When translating documentation or UI strings:

1. **Look up the English source term** in the table below
2. **Use the translation listed for your locale** — do not invent alternative translations
3. **Keep code identifiers, API names, and proper nouns untranslated** (e.g., `GM_setValue`, `Tampermonkey`, `ScriptCat`)
4. **Brand names are never translated**: ScriptCat, Tampermonkey, GreasyFork, Chrome, Edge, Firefox

---

## Core Product Terms

| English | zh-Hans | zh-Hant | ja | ko | ru | de | fr | es | it | pt | ar | fa | nl | bn | uk | tr | vi | id | hy |
|---------|---------|---------|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| Userscript / User script | 用户脚本 | 使用者腳本 | ユーザースクリプト | 사용자 스크립트 | Юзерскрипт | Benutzer-Skript | Script utilisateur | Script de usuario | Script utente | Script de usuário | سكربت المستخدم | اسکریپت کاربر | Gebruikersscript | ব্যবহারকারী স্ক্রিপ্ট | Юзерскрипт | Kullanıcı betiği | Script người dùng | Skrip pengguna | Օգտագործողի սկրիպտ |
| Browser extension | 浏览器扩展 | 瀏覽器擴充套件 | ブラウザ拡張 | 브라우저 확장 프로그램 | Расширение браузера | Browser-Erweiterung | Extension de navigateur | Extensión de navegador | Estensione del browser | Extensão do navegador | إضافة متصفح | افزونه مرورگر | Browserextensie | ব্রাউজার এক্সটেনশন | Розширення браузера | Tarayıcı eklentisi | Phần mở rộng trình duyệt | Ekstensi browser | Բրաուզերի հավելում |
| Background script | 后台脚本 | 背景腳本 | バックグラウンドスクリプト | 백그라운드 스크립트 | Фоновый скрипт | Hintergrundskript | Script d'arrière-plan | Script en segundo plano | Script in background | Script em segundo plano | سكربت الخلفية | اسکریپت پس‌زمینه | Achtergrondscript | ব্যাকগ্রাউন্ড স্ক্রিপ্ট | Фоновий скрипт | Arka plan betiği | Script chạy nền | Skrip latar belakang | Խորհրդապահեստ սկրիպտ |
| Scheduled script (crontab) | 定时脚本 | 排程腳本 | スケジュールスクリプト | 예약 스크립트 | Запланированный скрипт | Geplantes Skript | Script planifié | Script programado | Script pianificato | Script agendado | سكربت مجدول | اسکریپت زمان‌بندی | Gepland script | শিডিউল স্ক্রিপ্ট | Запланований скript | Zamanlanmış betik | Script lên lịch | Skrip terjadwal | Ժամանակացույցով սկրիպտ |
| Foreground script | 前台脚本 | 前景腳本 | フォアグラウンドスクリプト | 포그라운드 스크립트 | Скрипт foreground | Vordergrundskript | Script au premier plan | Script en primer plano | Script in primo piano | Script em primeiro plano | سكربت الأمام | اسکریپت پیش‌زمینه | Voorgrondscript | ফোরগ্রাউন্ড স্ক্রিপ্ট | Скрипт foreground | Ön plan betiği | Script chạy trước | Skrip latar depan | Առջևի պլանի սկript |

## Technical API Terms

| English | zh-Hans | zh-Hant | ja | ko | ru | de | fr | es | it | pt | ar | fa | nl | bn | uk | tr | vi | id | hy |
|---------|---------|---------|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| API Reference | API 参考 | API 參考 | APIリファレンス | API 레퍼런스 | Справочник API | API-Referenz | Référence API | Referencia API | Riferimento API | Referência API | مرجع واجهة برمجة التطبيقات | مرجع API | API-referentie | API রেফারেン্স | Посилання API | API Referansı | Tham chiếu API | Referensi API | API մատյան |
| Metadata block | 元数据块 | 元資料區塊 | メタデータブロック | 메타데이터 블록 | Метаданные | Metadaten-Block | Bloc de métadonnées | Bloque de metadatos | Blocco di metadati | Bloco de metadados | كتلة البيانات الوصفية | بلوک متادیتا | Metagegevensblok | মেটাডেটা ব্লক | Блок метаданих | Meta veri bloğu | Khối siêu dữ liệu | Blok metadata | Մետատվյալների բլոկ | 메타데이터 블록 |
| UserConfig | UserConfig | UserConfig | UserConfig | UserConfig | UserConfig | UserConfig | UserConfig | UserConfig | UserConfig | UserConfig | UserConfig | UserConfig | UserConfig | UserConfig | UserConfig | UserConfig | UserConfig | UserConfig | UserConfig |
| Cloud sync | 云端同步 | 雲端同步 | クラウド同期 | 클라우드 동기화 | Облачная синхронизация | Cloud-Sync | Synchronisation cloud | Sincronización en la nube | Sincronizzazione cloud | Sincronização na nuvem | مزامنة السحابة | همگام‌سازی ابری | Cloudsync | ক্লাউড সিঙ্ক | Хмарна синхронізація | Bulut senkronizasyonu | Đồng bộ đám mây | Sinkronisasi cloud | Ամպային սինքրոնիզացիա | 클라우드 동기화 |
| Script store / Script library | 脚本库 | 腳本庫 | スクリプトストア | 스크립트 스토어 | Библиотека скриптов | Skript-Bibliothek | Bibliothèque de scripts | Biblioteca de scripts | Libreria degli script | Biblioteca de scripts | متجر السكرپتات | فروشگاه اسکریپت | Scriptbibliotheek | স্ক্রিপ্ট লাইব্রেরি | Бібліотека скриптів | Betik kütüpthanesi | Thư viện script | Perpustakaan skrip | Սկriptների գրադարան | 스크립트 스토어 |
| Tampermonkey-compatible | 兼容油猴 | 兼容 Tampermonkey | Tampermonkey互換 | Tampermonkey 호환 | Tampermonkey-совместимый | Tampermonkey-kompatibel | Compatible Tampermonkey | Compatible con Tampermonkey | Compatibile con Tampermonkey | Compatível com Tampermonkey | متوافق مع Tampermonkey | سازگار با Tampermonkey | Tampermonkey-compatibel | টেম্পারমанকি সমতুল্য | Tampermonkey-сумісний | Tampermonkey uyumlu | Tương thích Tampermonkey | Kompatibel dengan Tampermonkey | Tampermonkey-համատեղելի | Tampermonkey 호환 |

## UI / Navigation Terms

| English | zh-Hans | zh-Hant | ja | ko | ru | de | fr | es | it | pt | ar | fa | nl | bn | uk | tr | vi | id | hy |
|---------|---------|---------|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| Quick Start | 快速开始 | 快速開始 | クイックスタート | 빠른 시작 | Быстрый старт | Schnellstart | Démarrage rapide | Inicio rápido | Início rápido | Início rápido | البداية السريعة | شروع سریع | Snelle start | দ্রুত শুরু | Швидкий старт | Hızlı başlangıç | Bắt đầu nhanh | Mulai cepat | Արագ մեկնարկ | 빠른 시작 |
| Developer docs | 开发文档 | 開發文件 | 開発者向けドキュメント | 개발자 문서 | Документация разработчика | Entwicklerdokumentation | Docs développeur | Docs de desarrollador | Documentazione sviluppatore | Documentação do desenvolvedor | وثائق المطوّر | مستندات توسعه‌دهنده | Ontwikkelaarsdocumentatie | ডেভেলপার ডকুমেন্ট | Документація розробника | Geliştirici belgeleri | Tài liệu phát triển | Dokumentasi pengembang | Մշակողի փաստաթղթեր | 개발자 문서 |
| User Guide | 使用文档 | 使用文件 | 使用ドキュメント | 사용자 가이드 | Руководство пользователя | Benutzerhandbuch | Guide d'utilisation | Guía de usuario | Guida utente | Guía do usuário | دليل المستخدم | راهنمای کاربر | Gebruikershandleiding | ব্যবহারকারী গাইড | Посібник користувача | Kullanıcı kılavuzu | Hướng dẫn sử dụng | Panduan pengguna | Օգտագործման ուղեցույց | 사용자 가이드 |
| Changelog | 更新日志 | 更新日誌 | 変更履歴 | 변경 로그 | Журнал изменений | Änderungsprotokoll | Journal des modifications | Registro de cambios | Registro delle modifiche | Registro de alterações | سجل التغييرات | تغییرات | Changelog | চেঞ্জলগ | Журнал змін | Değişiklik günlüğü | Nhật ký thay đổi | Log perubahan | Փոփոխությունների մատյան | 변경 로그 |
| FAQ | 常见问题 | 常見問題 | よくある質問 | 자주 묻는 질문 | Часто задаваемые вопросы | FAQ | FAQ | Preguntas frecuentes | Domande frequentes | Perguntas frequentes | الأسئلة الشائعة | سؤالات متداول | Veelgestelde vragen | সচরাচর জিজ্ঞাসা | Поширені запитання | SSS | Câu hỏi thường gặp | Pertanyaan umum | Հաճախ տրվող հարցեր | 자주 묻는 질문 |
| Contributing Guide | 贡献指南 | 貢獻指南 | コントリビューションガイド | 기여 가이드 | Руководство по внесению вклада | Mitwirkungsleitfaden | Guide de contribution | Guía de contribución | Guida al contributo | Guia de contribuição | دليل المساهمة | راهنمای مشارکت | Bijdragegids | কন্ট্রিবিউশন গাইড | Посібник контриб'ютора | Katkı rehberi | Hướng dẫn đóng góp | Panduan kontribusi | Ներդրումների ուղեցույց | 기여 가이드 |

## Feature Terms (Landing Page)

| English | zh-Hans | ja | ko | ru | de | fr | ar | fa | nl |
|---------|---------|----|----|----|----|----|----|----|----|
| Ad-block | 广告拦截 | 広告ブロック | 광고 차단 | Блокировка рекламы | Werbeblocker | Bloqueur de publicités | حجب الإعلانات | مسدودسازی تبلیغات | Adblocker |
| Video enhancement | 视频增强 | 動画強化 | 비디오 향상 | Улучшение видео | Videoverbesserung | Amélioration vidéo | تحسين الفيديو | بهبود ویدیو | Videoverbetering |
| Price comparison | 价格比较 | 価格比較 | 가격 비교 | Сравнение цен | Preisvergleich | Comparaison de prix | مقارنة الأسعار | مقایسه قیمت | Prijsvergelijking |
| Cloud sync | 云端同步 | クラウド同期 | 클라우드 동기화 | Облачная синхронизация | Cloud-Sync | Synchronisation cloud | مزامنة السحابة | همگام‌سازی ابری | Cloudsync |
| Dark mode | 暗色模式 | ダークモード | 다크 모드 | Тёмная тема | Dunkelmodus | Mode sombre | الوضع الداكن | حالت تاریک | Donkere modus |
| Built-in editor | 内置编辑器 | 内蔵エディタ | 내장 에디터 | Встроенный редактор | Integrierter Editor | Éditeur intégré | محرر مدمج | ویرایشگر داخلی | Ingebouwde editor |
| Live debugging | 实时调试 | ライブデバッグ | 라이브 디버깅 | Отладка в реальном времени | Live-Debugging | Débogage en direct | تصحيح مباشر | اشکال‌زدایی زنده | Live debugging |

## Pages / Sections

| English | zh-Hans | ja | ko | ru | de | fr | ar | fa |
|---------|---------|----|----|----|----|----|----|----|
| About | 关于 | 概要 | 소개 | О нас | Über uns | À propos | حول | درباره |
| Sponsor | 赞助 | スポンサー | 스폰서 | Спонсоры | Sponsor | Sponsors | الرعاة | حامیان |
| Script installation | 脚本安装 | スクリプトインストール | 스크립트 설치 | Установка скриптов | Skript-Installation | Installation de scripts | تثبيت السكرپتات | نصب اسکریپت |
| Sync & Backup | 同步与备份 | 同期とバックアップ | 동기화 및 백업 | Синхронизация и резервное копierung | Synchronisation & Backup | Synchronisation et sauvegarde | المزامنة والنسخ الاحتياطي | همگام‌سازی و پشتیبان‌گیری |
| VSCode development | VSCode 开发 | VSCode開発 | VSCode 개발 | Разработка в VSCode | VSCode-Entwicklung | Développement VSCode | تطوير VSCode | توسعه VSCode |

## Code-Specific Terms (Keep Untranslated)

These terms should **never** be translated in any locale:

| Term | Reason |
|------|--------|
| `GM_setValue` / `GM_getValue` | API function names |
| `GM_notification` | API function name |
| `GM_xmlhttpRequest` | API function name |
| `GM_addStyle` | API function name |
| `GM_setClipboard` | API function name |
| `@match` / `@include` / `@grant` | Metadata block directives |
| `@background` / `@crontab` | ScriptCat-specific directives |
| `UserScript` / `==UserScript==` | Metadata block markers |
| `CAT_*` | ScriptCat-specific API prefix |
| `ScriptCat` | Brand name |
| `Tampermonkey` | Brand name |
| `Violentmonkey` | Brand name |
| `GreasyFork` | Brand name |
| `Chrome` / `Edge` / `Firefox` | Brand names |
| `MV2` / `MV3` (Manifest V2/V3) | Technical standard names |
| `npm` / `pnpm` / `node` | Tool names |
| `TypeScript` / `JavaScript` | Language names |
| `API` | Universal acronym |
| `FAQ` | Universal acronym |
| `VSCode` | Brand name |
| `Discord` | Brand name |
| `GitHub` | Brand name |

## Translation Conventions

1. **Technical code blocks**: Always keep code in the original language. Only translate comments within code if they are user-facing.
2. **Headings with IDs**: When a heading has a custom ID like `{#load-unpacked-extension-installation}`, keep the ID unchanged even if the heading text is translated.
3. **Links to anchors**: Cross-language links should use the English anchor ID (e.g., `#scheduled-script-crontab`), not the translated heading text.
4. **Brand names in UI**: "ScriptCat" appears in the navbar and should not be translated.
5. **Formal vs informal**: Use formal/polite register for all languages (e.g., "vous" not "tu" in French, 您 not 你 in Chinese).
6. **Date formats**: Follow each locale's convention (e.g., MM/DD/YYYY for en, DD/MM/YYYY for fr/de, YYYY-MM-DD for ja/ko).

---

*This document should be updated whenever new terminology is introduced or when translations are proofread and corrected.*

*Last updated: August 2026*
