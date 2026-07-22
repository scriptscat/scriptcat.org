---
title: Журнал изменений
---

import GithubStar from '@site/src/components/GithubStar';
import SponsorBlock from '@site/src/components/SponsorBlock/en.mdx';


<GithubStar variant="bar" scene="changelog" />

<SponsorBlock />

Журнал изменений бета-версий: [Beta Changelog](./beta-changelog.md)

⚠️ Обратите внимание: если вы используете Windows 8/7/XP или версия ядра браузера ниже 120, нужно вручную установить [устаревшую версию ScriptCat](https://github.com/scriptscat/scriptcat/releases). v0.16.x — последняя версия с поддержкой Manifest V2. Шаги установки: [Установка расширения через загрузку распакованного](/docs/use/use/#load-unpacked-extension-installation).

<a name="1.4.0"></a>

## 1.4.0 (2026-06-26)

В этом релизе — низкоуровневый рефакторинг в подготовке к Firefox MV3, улучшения редактора (меню правки, форматирование Ctrl+Shift+F, Monaco quick fix), выбор многоплатформенных поисковых систем для поиска скриптов, новые возможности `@unwrap` / `window.onurlchange` / `@run-at context-menu`, комплексное укрепление надёжности синхронизации с облачными хранилищами и большой пакет исправлений GM API, UI и стабильности (включая утечку памяти при длительной работе и уязвимости prototype pollution). ScriptCat AI Agent доступен как превью в dev / Beta-сборках и пока не включён в стабильный релиз.

### 🚀 Крупные новые функции

- 🧪 ScriptCat AI Agent (**Превью — только в dev / Beta-сборках, в стабильной пока не включён**) — ИИ-агент с диалогом, вызовом инструментов, системой Skill, протоколом MCP и др. ([#1324](https://github.com/scriptscat/scriptcat/pull/1324)) (by @CodFrm)
- ✨ Поддержка метатега `@unwrap` ([#1213](https://github.com/scriptscat/scriptcat/pull/1213)) (by @cyfung1031)
- ✨ Реализация TM `window.onurlchange` через Navigation API ([#1315](https://github.com/scriptscat/scriptcat/pull/1315)) (by @cyfung1031)
- ✨ Восстановлена поддержка `@run-at context-menu` ([#1442](https://github.com/scriptscat/scriptcat/pull/1442)) (by @cyfung1031)
- ✨ Поиск скриптов поддерживает выбор многоплатформенных поисковых систем ([#1295](https://github.com/scriptscat/scriptcat/pull/1295)) (by @CodFrm)
- ✨ Добавлены дополнительные провайдеры сервисов иконок ([#1333](https://github.com/scriptscat/scriptcat/pull/1333)) (by @cyfung1031)
- ✨ Иконка проверки обновлений в столбце «последнее обновление» списка скриптов ([#1304](https://github.com/scriptscat/scriptcat/pull/1304)) (by @CodFrm)
- ✨ Улучшена обработка конфликтов правки и конфликтов имён скриптов ([#1223](https://github.com/scriptscat/scriptcat/pull/1223)) (by @cyfung1031)

### 🧑‍💻 Редактор

- ✨ Меню правки в редакторе (поиск, замена, отмена и т.д.) ([#1303](https://github.com/scriptscat/scriptcat/pull/1303)) (by @CodFrm)
- ✨ Редактор поддерживает форматирование Ctrl+Shift+F ([#1415](https://github.com/scriptscat/scriptcat/pull/1415)) (by @cyfung1031)
- ✨ Улучшены Monaco quick fix и подсказки по метаданным userscript ([#1461](https://github.com/scriptscat/scriptcat/pull/1461)) (by @cyfung1031)
- 🐛 Исправлены сочетания Ctrl-F / Ctrl-H ([#1312](https://github.com/scriptscat/scriptcat/pull/1312)) (by @cyfung1031)
- 🐛 Исправлено: функция ESLint fix не работала [#1079](https://github.com/scriptscat/scriptcat/issues/1079) ([#1184](https://github.com/scriptscat/scriptcat/pull/1184)) (by @cyfung1031)
- 🐛 Исправлены проблемы вёрстки CSS редактора ([#1460](https://github.com/scriptscat/scriptcat/pull/1460)) (by @cyfung1031)
- 🐛 Исправлено отображение списка скриптов ScriptEditor в светлой теме ([#1288](https://github.com/scriptscat/scriptcat/pull/1288)) (by @CodFrm)
- 🐛 Исправлены и улучшены проблемы ScriptEditor ([#1258](https://github.com/scriptscat/scriptcat/pull/1258)) (by @cyfung1031)

### ⚡️ Улучшения производительности

- 🚑 Исправлена потенциальная утечка памяти при длительной работе ScriptCat ([#1401](https://github.com/scriptscat/scriptcat/pull/1401)) (by @cyfung1031)
- ⚡️ Убрана зависимость файловой системы Baidu от глобальных DNR-правил, переход на отключение cookie на запрос ([#1377](https://github.com/scriptscat/scriptcat/pull/1377)) (by @cyfung1031)
- ⚡️ Оптимизирован выбор многоплатформенных поисковых систем для поиска скриптов ([#1379](https://github.com/scriptscat/scriptcat/pull/1379)) (by @cyfung1031)
- ⚡️ Моноширинный шрифт для loadingStatus на странице установки, чтобы избежать «дёрганья» ([#1381](https://github.com/scriptscat/scriptcat/pull/1381)) (by @cyfung1031)
- ⚡️ Оптимизирована обработка pushValue ([#1403](https://github.com/scriptscat/scriptcat/pull/1403)) (by @cyfung1031)
- ⚡️ Более полные проверки разрешений и лучшие подсказки по разрешениям userScript ([#1251](https://github.com/scriptscat/scriptcat/pull/1251)) (by @cyfung1031)
- ⚡️ Улучшено управление памятью MessageConnect и механизм очистки ([#1248](https://github.com/scriptscat/scriptcat/pull/1248)) (by @cyfung1031)

### 🐛 Исправления ошибок

- 🐛 Укреплена надёжность облачной синхронизации (аутентификация Dropbox / WebDAV / Google Drive / OneDrive, пути и логика повторов) ([#1374](https://github.com/scriptscat/scriptcat/pull/1374) ~ [#1395](https://github.com/scriptscat/scriptcat/pull/1395)) (by @cyfung1031)
- 🐛 Исправлены несколько проблем облачной синхронизации: загрузка нулевого размера OneDrive, нормализация ошибок Google Drive / OneDrive, S3 custom metadata modifiedDate ([#1405](https://github.com/scriptscat/scriptcat/pull/1405)) ([#1406](https://github.com/scriptscat/scriptcat/pull/1406)) ([#1408](https://github.com/scriptscat/scriptcat/pull/1408)) (by @cyfung1031)
- 🐛 Убран write-probe при проверке WebDAV, чтобы не было ложных отказов на сервисах с незаписываемым корнем (например, Nutstore) ([#1445](https://github.com/scriptscat/scriptcat/pull/1445)) (by @CodFrm)
- 🐛 Исправлена ошибка cross-origin запроса при отсутствии разрешения доступа к сайту ([#1477](https://github.com/scriptscat/scriptcat/pull/1477)) (by @cyfung1031)
- 🐛 Исправлена адаптация popup на Edge Android [#686](https://github.com/scriptscat/scriptcat/issues/686) ([#1507](https://github.com/scriptscat/scriptcat/pull/1507)) (by @CodFrm)
- 🐛 Исправлена вспышка белого фона при начальной загрузке [#1497](https://github.com/scriptscat/scriptcat/issues/1497) ([#1498](https://github.com/scriptscat/scriptcat/pull/1498)) (by @cyfung1031)
- 🐛 Исправлена неполная очистка соединений сообщений (GM API / ports) ([#1474](https://github.com/scriptscat/scriptcat/pull/1474)) (by @cyfung1031)
- 🐛 Исправлено несовпадение шаблона `@match` при отсутствии search ([#1466](https://github.com/scriptscat/scriptcat/pull/1466)) (by @cyfung1031)
- 🐛 Добавлен `protoBaseDescs` для исправления наследования классов-предков в полу-песочнице Tampermonkey ([#1463](https://github.com/scriptscat/scriptcat/pull/1463)) (by @cyfung1031)
- 🐛 Исправлена отсутствующая обработка null для msgConn `GM_xmlhttpRequest` ([#1433](https://github.com/scriptscat/scriptcat/pull/1433)) (by @cyfung1031)
- 🐛 Исправлена некорректная обработка аномального onloadend в GM xhr ([#1412](https://github.com/scriptscat/scriptcat/pull/1412)) (by @cyfung1031)
- 🐛 Исправлены динамическое обновление и отображение списка ScriptEditor ([#1414](https://github.com/scriptscat/scriptcat/pull/1414)) (by @cyfung1031)
- 🐛 Исправлена проблема счётчика session rules при concurrent xhr ([#1353](https://github.com/scriptscat/scriptcat/pull/1353)) (by @cyfung1031)
- 🐛 Исправлено падение всей страницы из‑за некорректного cron-выражения ([#1327](https://github.com/scriptscat/scriptcat/pull/1327)) (by @cyfung1031)
- 🐛 Исправлено: при таймауте одного скрипта при пакетной проверке обновлений падали все ([#1265](https://github.com/scriptscat/scriptcat/pull/1265)) (by @cyfung1031)
- 🐛 Добавлена обработка extensionEnv для isIncognito, userAgent и run-in ([#1368](https://github.com/scriptscat/scriptcat/pull/1368)) (by @cyfung1031)
- 🐛 Исправлена частично скрытая кнопка онбординг-гида [#1396](https://github.com/scriptscat/scriptcat/issues/1396) ([#1398](https://github.com/scriptscat/scriptcat/pull/1398)) (by @cyfung1031)
- 🐛 Исправлен перекрытый tooltip на странице управления скриптами [#1386](https://github.com/scriptscat/scriptcat/issues/1386) ([#1387](https://github.com/scriptscat/scriptcat/pull/1387)) (by @Xdy1579883916)
- 🐛 Исправлено: Sidebar вызывал некорректный ресайз в карточном режиме [#1179](https://github.com/scriptscat/scriptcat/issues/1179) ([#1373](https://github.com/scriptscat/scriptcat/pull/1373)) (by @cyfung1031)
- 🐛 Исправлен некорректный origin при установке локальных файлов перетаскиванием ([#1371](https://github.com/scriptscat/scriptcat/pull/1371)) (by @cyfung1031)
- 🐛 Исправлено сообщение при переключении языка ([#1380](https://github.com/scriptscat/scriptcat/pull/1380)) (by @cyfung1031)
- 🐛 Улучшен UI отображения логов ([#1372](https://github.com/scriptscat/scriptcat/pull/1372)) (by @cyfung1031)
- 🐛 Исправлен CSS UserConfigPanel ([#1361](https://github.com/scriptscat/scriptcat/pull/1361)) (by @cyfung1031)
- 🐛 Использован `Object.create(null)` для пустого объекта в create_context ([#1397](https://github.com/scriptscat/scriptcat/pull/1397)) (by @cyfung1031)
- 🐛 Исправлена логика тихого обновления и разрешений connect для подписанных скриптов ([#1201](https://github.com/scriptscat/scriptcat/pull/1201)) (by @cyfung1031)
- 🐛 Исправлено: кнопка запроса на странице логов не обновляла время ([#1294](https://github.com/scriptscat/scriptcat/pull/1294)) (by @CodFrm)

### 🔒 Улучшения безопасности

- 🔒 Исправлено prototype pollution через недоверенные ключи YAML user-config ([#1494](https://github.com/scriptscat/scriptcat/pull/1494)) (by @qdzsh)
- 🔒 Исправлены все уязвимости безопасности npm-зависимостей ([#1350](https://github.com/scriptscat/scriptcat/pull/1350)) ([#1364](https://github.com/scriptscat/scriptcat/pull/1364)) ([#1365](https://github.com/scriptscat/scriptcat/pull/1365)) (by @cyfung1031)

### ♻️ Рефакторинг и совместимость

- ♻️ Низкоуровневый рефакторинг в подготовке к адаптации Firefox MV3 ([#1457](https://github.com/scriptscat/scriptcat/pull/1457)) ([#1480](https://github.com/scriptscat/scriptcat/pull/1480)) (by @cyfung1031)
- ♻️ Рефакторинг логики обновления ресурсов скрипта (updateResource) и контроля конкурентности, восстановлена совместимость кэша ресурсов ([#1193](https://github.com/scriptscat/scriptcat/pull/1193)) (by @cyfung1031)
- ♻️ jszip заменён на JSZipp для работы с ZIP (импорт / экспорт резервных копий), удалена неиспользуемая зависимость jszip ([#1479](https://github.com/scriptscat/scriptcat/pull/1479)) (by @cyfung1031)
- ♻️ Унифицирована связь Offscreen ↔ ServiceWorker через канал postMessage ([#1299](https://github.com/scriptscat/scriptcat/pull/1299)) (by @CodFrm)
- ♻️ Рефакторинг кода VSCodeConnect ([#1170](https://github.com/scriptscat/scriptcat/pull/1170)) (by @cyfung1031)
- ⚡️ ts.worker.js сжат до 4MB для прохождения проверки AMO, исправлена ошибка разрешений background MV3 ([#1221](https://github.com/scriptscat/scriptcat/pull/1221)) (by @cyfung1031)

### 🌐 Интернационализация

- 🌐 Исправлены переводы терминологии (в основном улучшен традиционный китайский) и добавлены руководства по терминологии перевода ([#1468](https://github.com/scriptscat/scriptcat/pull/1468)) (by @cyfung1031)

### Прочее

- ✨ Сервис иконок fetchIconByDomain переключён на scriptcat.org ([#1268](https://github.com/scriptscat/scriptcat/pull/1268)) (by @cyfung1031)
- 🔥 Удалены Crowdin и связанный с псевдоязыком ach-UG контент ([#1385](https://github.com/scriptscat/scriptcat/pull/1385)) (by @CodFrm)

<a name="0.16.15"></a>

## 0.16.15 (2026-05-19)

### 🐛 Исправления ошибок

- 🐛 Исправлена команда сборки скрипта упаковки MV2 [#1423](https://github.com/scriptscat/scriptcat/issues/1423) (by @CodFrm)
- 🐛 Адаптация к изменениям WebExtensions API (Firefox 149-152), включая правки CSP ([#1448](https://github.com/scriptscat/scriptcat/pull/1448)) (by @cyfung1031)

<a name="0.16.14"></a>

## 0.16.14 (2026-04-26)

### 🚀 Крупные новые функции

- ✨ FirefoxMV2 синхронизирован с основными пунктами MV3: TypeScript обновлён до 4.9, tsconfig — до es2022; шаблоны скриптов (normal/crontab/background) выровнены с MV3; cron обновлён с поддержкой выражений `once(...)`; многоязычная поддержка Monaco Editor ([#1331](https://github.com/scriptscat/scriptcat/pull/1331)) (by @cyfung1031)

### ♻️ Рефакторинг и совместимость

- 🔥 Удалена зависимость axios для выравнивания с MV3 ([#1339](https://github.com/scriptscat/scriptcat/pull/1339)) (by @cyfung1031)

### 🐛 Исправления ошибок

- 🐛 Исправлено: вложенный iframe window.parent не получал сообщения postMessage ([#1335](https://github.com/scriptscat/scriptcat/pull/1335)) (by @cyfung1031)

<a name="1.3.2"></a>

## 1.3.2 (2026-03-28)

### 🐛 Исправления ошибок

- 🐛 Убран заголовок Accept из fetchScriptBody, чтобы избежать Error 406 ([#1306](https://github.com/scriptscat/scriptcat/pull/1306)) (by @cyfung1031)
- 🐛 Исправлен конфликт аутентификации WebDAV cookies и поддержка authType ([#1308](https://github.com/scriptscat/scriptcat/pull/1308)) (by @CodFrm)
- 🐛 Корректное отображение ошибок форматирования ([#1310](https://github.com/scriptscat/scriptcat/pull/1310)) (by @cyfung1031)
- 🐛 device-specific настройки в chrome.storage.local, чтобы не синхронизировать между устройствами ([#1309](https://github.com/scriptscat/scriptcat/pull/1309)) (by @CodFrm)
- 🐛 Исправлены проблемы подсказок редактора кода ([#1301](https://github.com/scriptscat/scriptcat/pull/1301)) (by @cyfung1031)
- 🐛 Исправлено обрезание popup date picker на странице логов ([#1292](https://github.com/scriptscat/scriptcat/pull/1292)) (by @cyfung1031)
- 🐛 Исправлено: кнопка отвязки показывалась, когда облачный диск не привязан ([#1291](https://github.com/scriptscat/scriptcat/pull/1291)) (by @CodFrm)
- 🐛 Исправлено перекрытие popup ([#1290](https://github.com/scriptscat/scriptcat/pull/1290)) (by @cyfung1031)

<a name="1.3.1"></a>

## 1.3.1 (2026-03-13)

### 🐛 Исправления ошибок

- 🚑 Исправлена ошибка определения окружения из‑за инъекции chrome.runtime другими расширениями [#1280](https://github.com/scriptscat/scriptcat/issues/1280) ([#1281](https://github.com/scriptscat/scriptcat/pull/1281)) (by @CodFrm)

### Прочее

- ✅ Добавлены Playwright E2E-тесты и функциональные тесты GM API ([#1283](https://github.com/scriptscat/scriptcat/pull/1283)) (by @CodFrm)

<a name="1.3.0"></a>

## 1.3.0 (2026-03-10)

В этом обновлении — хранилище Amazon S3, параметры runtime скрипта, установка без доступа к внешним сайтам и др. Значительно оптимизированы система сообщений и производительность React, исправлены многочисленные проблемы GM API, UI и стабильности, а также улучшено качество кода.

### 🚀 Крупные новые функции

- ✨ Добавлено хранилище Amazon S3 [#1146](https://github.com/scriptscat/scriptcat/issues/1146) ([#1189](https://github.com/scriptscat/scriptcat/pull/1189)) (by @CodFrm)
- ✨ Параметры runtime скрипта ([#895](https://github.com/scriptscat/scriptcat/pull/895)) (by @CodFrm)
- ✨ Установка без доступа к внешним сайтам + правки макета страницы установки ([#842](https://github.com/scriptscat/scriptcat/pull/842)) (by @cyfung1031)
- ✨ Серая иконка, когда функциональность скриптов отключена [#897](https://github.com/scriptscat/scriptcat/issues/897) (by @CodFrm)
- ✨ Оптимизировано взаимодействие, когда число раскрытых пунктов меню равно 0 [#868](https://github.com/scriptscat/scriptcat/issues/868) (by @CodFrm)
- ✨ По умолчанию `@noframes` в шаблоне, чтобы реже совершать типичные ошибки ([#900](https://github.com/scriptscat/scriptcat/pull/900)) (by @cyfung1031)
- ✨ Ссылка установки не ошибочно считается новой установкой при смене имени скрипта ([#824](https://github.com/scriptscat/scriptcat/pull/824)) (by @cyfung1031)
- ✨ Исправлена валидация конфликтов `@grant`, добавлено сообщение об ошибке дублирующих meta-объявлений ([#902](https://github.com/scriptscat/scriptcat/pull/902)) (by @cyfung1031)
- ✨ Принимается `@version` без значения или с пустым значением ([#1216](https://github.com/scriptscat/scriptcat/pull/1216)) (by @cyfung1031)
- ✨ Скорректирована позиция скрытой боковой панели редактора [#1185](https://github.com/scriptscat/scriptcat/issues/1185) ([#1254](https://github.com/scriptscat/scriptcat/pull/1254)) (by @CodFrm)

### 🧩 Изменения GM API

- 🐛 Исправлена проблема GM_addElement, операция перенесена в content-окружение ([#1233](https://github.com/scriptscat/scriptcat/pull/1233)) (by @cyfung1031)
- 🐛 Добавлен параметр `conflictAction` в `GM_download` ([#1250](https://github.com/scriptscat/scriptcat/pull/1250)) (by @cyfung1031)
- 🐛 Исправлены async-объявления GM API, корректный возврат Promise ([#1169](https://github.com/scriptscat/scriptcat/pull/1169)) (by @cyfung1031)
- ♻️ Совместимость с Firefox: GM_setClipboard ([#928](https://github.com/scriptscat/scriptcat/pull/928)) (by @cyfung1031)
- 🐛 Исправлена проблема GM_value [#1192](https://github.com/scriptscat/scriptcat/issues/1192) (by @CodFrm)
- 🐛 Исправлено: имя файла загрузки не поддерживало папки ([#1203](https://github.com/scriptscat/scriptcat/pull/1203)) (by @cyfung1031)

### ⚡️ Улучшения производительности

- ♻️ Рефакторинг системы сообщений: broadcast storage.local + соответствие Firefox MV3 scripting + untraceable dynamic sync MessageFlag ([#1067](https://github.com/scriptscat/scriptcat/pull/1067)) (by @cyfung1031)
- ⚡️ Исправлены лишние React re-render (ScriptCard & ScriptTable) ([#1182](https://github.com/scriptscat/scriptcat/pull/1182)) (by @cyfung1031)
- ⚡️ Исправлены лишние React re-render (Popup) ([#1181](https://github.com/scriptscat/scriptcat/pull/1181)) (by @cyfung1031)
- ⚡️ Оптимизирована производительность Repo ([#1232](https://github.com/scriptscat/scriptcat/pull/1232)) (by @CodFrm)
- ⚡️ Метаданные вынесены из chrome.storage.session ([#1027](https://github.com/scriptscat/scriptcat/pull/1027)) (by @cyfung1031)
- ⚡️ Улучшено определение charset ([#1140](https://github.com/scriptscat/scriptcat/pull/1140)) (by @cyfung1031)
- ⚡️ Иконки хранятся по URL, чтобы не дублировать между скриптами ([#909](https://github.com/scriptscat/scriptcat/pull/909)) (by @cyfung1031)
- ⚡️ Оптимизирован код parseMetadata ([#903](https://github.com/scriptscat/scriptcat/pull/903)) (by @cyfung1031)
- 🐛 Исправлены утечки памяти и раскрытие свойств объектов ([#1242](https://github.com/scriptscat/scriptcat/pull/1242)) (by @cyfung1031)
- ♻️ Удалён Redux, упрощено управление состоянием ([#1206](https://github.com/scriptscat/scriptcat/pull/1206)) (by @cyfung1031)

### 🧑‍💻 Редактор

- ✨ Оптимизированы настройки Monaco Editor, добавлен fix `/* global xxx */` ([#1012](https://github.com/scriptscat/scriptcat/pull/1012)) (by @cyfung1031)
- ✨ Многоязычные подсказки Monaco Editor и подсказка `@require-css` ([#960](https://github.com/scriptscat/scriptcat/pull/960)) (by @cyfung1031)

### 🐛 Исправления ошибок

- 🐛 Исправлен конфликт проверки разрешений окна инкогнито, вызывавший повторные перезапуски (by @CodFrm)
- 🐛 Исправлена обработка выражения include `*?*` [#1271](https://github.com/scriptscat/scriptcat/issues/1271) ([#1272](https://github.com/scriptscat/scriptcat/pull/1272)) (by @CodFrm)
- 🔒 HTML уведомлений-анонсов санитизируется через DOMPurify ([#1274](https://github.com/scriptscat/scriptcat/pull/1274)) (by @CodFrm)
- 🐛 Исправлено: управление разрешениями в настройках скрипта не работало ([#1267](https://github.com/scriptscat/scriptcat/pull/1267)) (by @CodFrm)
- 🐛 Исправлено: содержимое popup следовало за прокруткой экрана [#1256](https://github.com/scriptscat/scriptcat/issues/1256) ([#1263](https://github.com/scriptscat/scriptcat/pull/1263)) (by @cyfung1031)
- 🐛 Исправлен сбой разбора ссылки установки [#1235](https://github.com/scriptscat/scriptcat/issues/1235) ([#1260](https://github.com/scriptscat/scriptcat/pull/1260)) (by @cyfung1031)
- 🐛 Исправлена задержка focusin/focusout из‑за drag-компонента [#1224](https://github.com/scriptscat/scriptcat/issues/1224) ([#1243](https://github.com/scriptscat/scriptcat/pull/1243)) (by @CodFrm)
- 🐛 Исправлен неработающий external extension API ([#1217](https://github.com/scriptscat/scriptcat/pull/1217)) (by @cyfung1031)
- 🐛 Исправлена проблема grant ([#1199](https://github.com/scriptscat/scriptcat/pull/1199)) (by @CodFrm)
- 🐛 Исправлено отсутствие UserAgentData в content.js ([#1183](https://github.com/scriptscat/scriptcat/pull/1183)) (by @cyfung1031)
- 🐛 Обработка кодировки скрипта [#1115](https://github.com/scriptscat/scriptcat/issues/1115) ([#1138](https://github.com/scriptscat/scriptcat/pull/1138)) (by @CodFrm)
- 🐛 Исправлено отображение иконки скрипта [#1052](https://github.com/scriptscat/scriptcat/issues/1052) ([#1104](https://github.com/scriptscat/scriptcat/pull/1104)) (by @CodFrm)
- 🐛 Добавлен префикс UnoCSS для разрешения CSS-конфликтов, исправлена вёрстка CSS ([#1013](https://github.com/scriptscat/scriptcat/pull/1013)) (by @cyfung1031)
- 🐛 Очистка существующего Alarm при выборе нерегулярной проверки обновлений скрипта ([#996](https://github.com/scriptscat/scriptcat/pull/996)) (by @cyfung1031)
- 🐛 Импорт и экспорт — исправлена некорректная дата/время последнего изменения скрипта ([#951](https://github.com/scriptscat/scriptcat/pull/951)) (by @cyfung1031)
- 🐛 Исправлено отображение имени и описания скрипта с i18n-префиксом языка [#1123](https://github.com/scriptscat/scriptcat/issues/1123) (by @CodFrm)
- 🐛 Исправлено: unregister выполнялся некорректно ([#1231](https://github.com/scriptscat/scriptcat/pull/1231)) (by @cyfung1031)

### ♻️ Рефакторинг и совместимость

- ♻️ Правки userScripts / scripting API, улучшена совместимость (redo #704) ([#925](https://github.com/scriptscat/scriptcat/pull/925)) (by @cyfung1031)
- ♻️ Изменения, связанные с Cron: исправления, i18n, усиление once-выражений, обновление библиотеки cron ([#1126](https://github.com/scriptscat/scriptcat/pull/1126)) (by @cyfung1031)
- ♻️ Рефакторинг и оптимизация загрузки иконок скриптов ([#893](https://github.com/scriptscat/scriptcat/pull/893)) (by @CodFrm)
- ♻️ Улучшено декодирование текста ([#1166](https://github.com/scriptscat/scriptcat/pull/1166)) (by @cyfung1031)
- ⬆️ Обновлена совместимая версия ядра swc ([#1186](https://github.com/scriptscat/scriptcat/pull/1186)) (by @cyfung1031)

### 🎨 Улучшения UI

- 🎨 Число на badge иконки расширения по умолчанию — число скриптов [#989](https://github.com/scriptscat/scriptcat/issues/989) (by @CodFrm)
- 🎨 Более красивый URL страницы установки ([#993](https://github.com/scriptscat/scriptcat/pull/993)) (by @cyfung1031)
- 🐛 Рефакторинг DraggableEntry, выравнивание высоты карточек ([#1245](https://github.com/scriptscat/scriptcat/pull/1245)) (by @cyfung1031)

### Разное

- 🔒 Улучшения безопасности (DOMPurify, исправления уязвимостей npm-зависимостей)
- 👷 Оптимизация сборки Rspack, исправления toolchain
- ⬆️ Обновления версий зависимостей

**Полный журнал изменений:** [Compare v1.2.6...v1.3.0](https://github.com/scriptscat/scriptcat/compare/v1.2.6...v1.3.0)

<a name="1.2.6"></a>

## 1.2.6 (2026-02-03)

### Исправлено

- 🐛 Исправлена ошибка structuredClone ([#1192](https://github.com/scriptscat/scriptcat/issues/1192)) [[265e122](https://github.com/scriptscat/scriptcat/commit/265e122342366b166d3122cc8da485cb1295b924)] (by @cyfung1031)

<a name="1.2.5"></a>

## 1.2.5 (2026-02-02)

### Исправлено

- 🐛 Исправлена проблема удаления при синхронизации скриптов [#1158](https://github.com/scriptscat/scriptcat/issues/1158) [[5e91a31](https://github.com/scriptscat/scriptcat/commit/5e91a31e02761ba8061e3de1f4d15fc1d964346c)] (by @CodFrm)
- 🐛 Совместимость с TM &#x60;@match www.website.com/*&#x60; ([#1165](https://github.com/scriptscat/scriptcat/issues/1165)) [[da66ff7](https://github.com/scriptscat/scriptcat/commit/da66ff70d25c3087cb8405289dc8b14df9c15f05)] (by @cyfung1031)
- 🐛 Edge 144 добавляет allow user scripts [#1157](https://github.com/scriptscat/scriptcat/issues/1157) [[f7c1c73](https://github.com/scriptscat/scriptcat/commit/f7c1c730cf39cae02a9e6f815e3113ea9d2a8a05)] (by @CodFrm)
- 🐛 Исправлена проблема непрерывного мониторинга FileSystemObserver ([#1160](https://github.com/scriptscat/scriptcat/issues/1160)) [[9556769](https://github.com/scriptscat/scriptcat/commit/95567690d1bf77bfe8bedfd6a94c88949a77e115)] (by @cyfung1031)
- 🐛 Мелкие исправления locales.ts ([#1154](https://github.com/scriptscat/scriptcat/issues/1154)) [[1c44b68](https://github.com/scriptscat/scriptcat/commit/1c44b680dab3a95a51eb73cf92531efd0a192dc9)] (by @cyfung1031)
- 🐛 Исправлена проблема времени в окне обновления popup ([#1155](https://github.com/scriptscat/scriptcat/issues/1155)) [[c17f761](https://github.com/scriptscat/scriptcat/commit/c17f761807fb9b14aff09b9b08d19e4cbe72b8a5)] (by @cyfung1031)
- 🐛 Исправлено отображение имени и описания скрипта с i18n-префиксом языка [#1123](https://github.com/scriptscat/scriptcat/issues/1123) [[7ef7355](https://github.com/scriptscat/scriptcat/commit/7ef7355632fc989fa1cad44fd2069ff840bbd8df)] (by @CodFrm)
- 🐛 Обработка проблемы ссылок на значения [#1141](https://github.com/scriptscat/scriptcat/issues/1141) ([#1147](https://github.com/scriptscat/scriptcat/issues/1147)) [[0892fcd](https://github.com/scriptscat/scriptcat/commit/0892fcd452758030553c33ddf14f1ce4bc6d3efc)] (by @CodFrm)

<a name="1.2.4"></a>

## 1.2.4 (2026-01-07)

Исправлены ошибки синхронизации; обновления версии больше не открывают страницу журнала изменений автоматически

### Добавлено

- ✨ Синхронное удаление по умолчанию отключено ([#958](https://github.com/scriptscat/scriptcat/issues/958)) [[9c4c7dc](https://github.com/scriptscat/scriptcat/commit/9c4c7dc411357746db43a306d97ac41a71f2b49c)] (by @cyfung1031)
- ✨ Редактор теперь поддерживает GM.\* ([#1129](https://github.com/scriptscat/scriptcat/issues/1129)) [[bea0192](https://github.com/scriptscat/scriptcat/commit/bea0192c6cc50eff2ed4e1cc5dcc25f36bbe10e7)] (by @cyfung1031)

### Изменено

- ♻️ Оптимизирована логика открытия страницы журнала изменений [#1110](https://github.com/scriptscat/scriptcat/issues/1110) [[d3ffedc](https://github.com/scriptscat/scriptcat/commit/d3ffedcffe752ca548f87f1640072fcd871b8604)] (by @CodFrm)

### Исправлено

- 🐛 scriptcat.d.tpl и исправления типов ([#1130](https://github.com/scriptscat/scriptcat/issues/1130)) [[dd22ef5](https://github.com/scriptscat/scriptcat/commit/dd22ef544684d69e24a7aae098cb05cbab03daa8)] (by @cyfung1031)
- 🐛 Исправлены проблемы облачной синхронизации ([#1133](https://github.com/scriptscat/scriptcat/issues/1133)) [[a9383d2](https://github.com/scriptscat/scriptcat/commit/a9383d2012eb3953dc33c8886ce3891f404fa100)] (by @CodFrm)
- 🐛 Исправлена ошибка &#x60;GM_addElement(&quot;tagName&quot;)&#x60; ([#1120](https://github.com/scriptscat/scriptcat/issues/1120)) [[ad19de5](https://github.com/scriptscat/scriptcat/commit/ad19de5c1793c8c079bedbf1b11c7c2ae27a469e)] (by @cyfung1031)
- 🐛 Убрана логика cleanup и оптимизирована логика checkuserscript ([#1113](https://github.com/scriptscat/scriptcat/issues/1113)) [[e635911](https://github.com/scriptscat/scriptcat/commit/e635911a3c11c3cb8acd1cfd507cb777e5ee7236)] (by @CodFrm)

### Разное

- 🏷️ Правки TypeScript ([#1127](https://github.com/scriptscat/scriptcat/issues/1127)) [[b455724](https://github.com/scriptscat/scriptcat/commit/b4557244191018c18d5ce8ea8e8627bcfb7f7cdd)] (by @cyfung1031)
- 📝 Дополнены комментарии в примерах ([#1131](https://github.com/scriptscat/scriptcat/issues/1131)) [[292549e](https://github.com/scriptscat/scriptcat/commit/292549ed0f65952fe9f269aace23eefc7d6a3a0f)] (by @cyfung1031)

<a name="1.2.3"></a>

## 1.2.3 (2025-12-20)

Некоторые исправления ошибок

### Изменено

- ⚡ Оптимизировано отображение времени следующего запуска [#1093](https://github.com/scriptscat/scriptcat/issues/1093) [[324ce51](https://github.com/scriptscat/scriptcat/commit/324ce515c84699ca8d3bf1ee447fc6ef0656ae0d)] (by @CodFrm)

### Исправлено

- 🐛 Исправлена проблема сопоставления URL для early-скриптов ([#1096](https://github.com/scriptscat/scriptcat/issues/1096)) [[a77effb](https://github.com/scriptscat/scriptcat/commit/a77effbab5ab4d1752065ef943d9c050ff99c066)] (by @CodFrm)
- 🐛 Исправлено: окно обновления отображалось слишком коротко ([#1088](https://github.com/scriptscat/scriptcat/issues/1088)) [[b2b2d5c](https://github.com/scriptscat/scriptcat/commit/b2b2d5c41ff70ee5430f7d8d156f480ac8fc3a1a)] (by @cyfung1031)
- 🐛 Исправлено некорректное отображение при включённых уведомлениях userscript ([#1086](https://github.com/scriptscat/scriptcat/issues/1086)) ([959c4db](https://github.com/scriptscat/scriptcat/commit/959c4dbed92f7bfe22a2f8ebb775c4189b5ff076))
- 🐛 responseHeaders: &#x60;TM compatibility: \r\n&#x60; ([#1085](https://github.com/scriptscat/scriptcat/issues/1085)) [[15232c8](https://github.com/scriptscat/scriptcat/commit/15232c8543d93abfdafa1353d39d8a15d1dc385f)] (by @cyfung1031)
- 🐛 Исправлены проблемы GM XHR ([#1082](https://github.com/scriptscat/scriptcat/issues/1082)) [[3d987c3](https://github.com/scriptscat/scriptcat/commit/3d987c300242a3c765146359c35ecd6d998f792c)] (by @CodFrm)

### Разное

- 🌐 Обработка проблем i18n на страницах popup [#1081](https://github.com/scriptscat/scriptcat/issues/1081) [[6b17d71](https://github.com/scriptscat/scriptcat/commit/6b17d7100e8572d72b3b7aaf8ea38be9cdf33f5f)] (by @CodFrm)

<a name="1.2.2"></a>

## 1.2.2 (2025-12-13)

Некоторые исправления ошибок

### Исправлено

- 🐛 Исправлена частая фоновая синхронизация ([#1076](https://github.com/scriptscat/scriptcat/issues/1076)) [[45dc39b](https://github.com/scriptscat/scriptcat/commit/45dc39baa0f3326cf12e97312ab632dc46ba40f2)] (by @CodFrm)
- 🐛 Исправлена обработка специальных вкладок [#1066](https://github.com/scriptscat/scriptcat/issues/1066) ([50904fb](https://github.com/scriptscat/scriptcat/commit/50904fb46efdea10fd57677bc2d28c770b47e861))
- 🐛 Исправлена обработка скриптов без правил match [#1071](https://github.com/scriptscat/scriptcat/issues/1071) ([560cdc0](https://github.com/scriptscat/scriptcat/commit/560cdc01fc0fc27fb7d0e3b877c63ba431206668))
- 🐛 Исправлена проблема CI-упаковки, удалявшая optional permissions background [[1f002f0](https://github.com/scriptscat/scriptcat/commit/1f002f0edf9892f023ae93b8522ff7c5e4a96559)] (by @CodFrm)
- 🐛 Исправлено игнорирование discarded tab ([#1058](https://github.com/scriptscat/scriptcat/issues/1058)) [[6165bf4](https://github.com/scriptscat/scriptcat/commit/6165bf48eb1d53ede0561c85c30135446c2ff882)] (by @cyfung1031)

<a name="1.2.1"></a>

## 1.2.1 (2025-12-06)

Некоторые исправления ошибок и обработка опции фонового запуска.

### Добавлено

- ✨ Добавлена опция фонового запуска ([#1048](https://github.com/scriptscat/scriptcat/issues/1048)) [[626e84d](https://github.com/scriptscat/scriptcat/commit/626e84dbd4dda0731e0a5ffdbdf71ae10e884489)] (by @CodFrm)

### Исправлено

- 🐛 Исправлена проблема сброса message listener из‑за document.write ([#1055](https://github.com/scriptscat/scriptcat/issues/1055)) [[1f3a3ec](https://github.com/scriptscat/scriptcat/commit/1f3a3ec335ed4b519599e9aa3036c66b6f0d10b2)] (by @CodFrm)
- 🐛 Исправлена фильтрация в list view [[e272dc6](https://github.com/scriptscat/scriptcat/commit/e272dc6ed151c15a1ef785b70ae100cb9e74a5dd)] (by @CodFrm)
- 🐛 Обработка UserAgentData на early-фазе ([#1045](https://github.com/scriptscat/scriptcat/issues/1045)) [[b4e08a8](https://github.com/scriptscat/scriptcat/commit/b4e08a812a08f42037837bbee54610ebc565063f)] (by @CodFrm)
- 🐛 Восстановлена опция useOpen для GM_openInTab [#1043](https://github.com/scriptscat/scriptcat/issues/1043) ([#1044](https://github.com/scriptscat/scriptcat/issues/1044)) [[7f30198](https://github.com/scriptscat/scriptcat/commit/7f30198909824871e694d5ffbe7088e44a6d0b45)] (by @cyfung1031)
- 🐛 Исправлена проблема userScripts undefined ([#1041](https://github.com/scriptscat/scriptcat/issues/1041)) [[4f2deda](https://github.com/scriptscat/scriptcat/commit/4f2deda69aa6aae7f6e791be1cd965a440b80e33)] (by @cyfung1031)
- 🐛 Исправлена некорректная ссылка на `"monaco-editor"` в `AppContext` ([#983](https://github.com/scriptscat/scriptcat/issues/983)) [[4b8dae1](https://github.com/scriptscat/scriptcat/commit/4b8dae1f49208d13c4d19c4c627762fc1b04ea5e)] (by @cyfung1031)

**Полный журнал изменений:** [Compare v1.2.0...v1.2.1](https://github.com/scriptscat/scriptcat/compare/v1.2.0...v1.2.1)

<a name="1.2.0"></a>

## 1.2.0 (2025-11-29)

В этом обновлении — боковая панель списка скриптов, карточный вид, более удобная логика проверки обновлений, настройки редактора и др. Значительно улучшены стабильность инъекции и runtime, исправлены критические проблемы CSP, sandbox, GM API, а также оптимизации производительности и структуры.

Подробнее см. журнал v1.2.0-beta.x и документацию [v1.2](https://docs.scriptcat.org/docs/change/v1.2/).

### 🚀 Крупные новые функции

- ✨ Боковая панель списка скриптов [#794](https://github.com/scriptscat/scriptcat/issues/794) (by @CodFrm)
- ✨ Карточный вид [#860](https://github.com/scriptscat/scriptcat/issues/860) (by @CodFrm)
- ✨ Более удобная логика проверки обновлений [#755](https://github.com/scriptscat/scriptcat/issues/755) (by @cyfung1031)
- ✨ Добавлены настройки редактора и определения типов редактора [#708](https://github.com/scriptscat/scriptcat/pull/708) (by @CodFrm)
- ✨ Отображение числа скриптов в popup ([#973](https://github.com/scriptscat/scriptcat/issues/973)) [[1134586](https://github.com/scriptscat/scriptcat/commit/1134586ff040ffc0cdddd3538e9ec493950c948a)] (by @cyfung1031)
- ✨ Меню макета для скрытия боковой панели кода [#689](https://github.com/scriptscat/scriptcat/issues/689) [[dd64da7](https://github.com/scriptscat/scriptcat/commit/dd64da719c081acbf21645e2b1e1f38653ffae8c)]
- ✨ Кнопка проверки версии SC ([#795](https://github.com/scriptscat/scriptcat/issues/795)) [[1680c66](https://github.com/scriptscat/scriptcat/commit/1680c66099120c0e497c1a1f5321f38fe0160ea0)] (by @cyfung1031)
- ✨ Страница опроса после удаления расширения [[6404c8f](https://github.com/scriptscat/scriptcat/commit/6404c8f74aff09b15725a92f8afdfc0d71ac188f)]

### 🧩 Изменения GM API

- ✨ Поддержка inject into: скрипты можно внедрять в content-окружение [#711](https://github.com/scriptscat/scriptcat/issues/711)
- ✨ GM_openInTab поддерживает закреплённое окно, открытие в инкогнито и другие параметры [#788](https://github.com/scriptscat/scriptcat/pull/788) (by @cyfung1031)
- ✨ GM_registerMenuCommand поддерживает подменю и разделители [#831](https://github.com/scriptscat/scriptcat/pull/831) (by @cyfung1031)
- 🗑 Удалена опция useOpen из GM_openInTab [#867](https://github.com/scriptscat/scriptcat/pull/867)
- ♻️ Скорректирована логика `@connect` ([#969](https://github.com/scriptscat/scriptcat/issues/969)) [[67914d2](https://github.com/scriptscat/scriptcat/commit/67914d2b7d57fa9c69706ae57ee5d3400c2643f9)] (by @cyfung1031)
- ♻️ Рефакторинг `GM_xmlhttpRequest` и связанного кода ([#901](https://github.com/scriptscat/scriptcat/issues/901)) [[fabd2e9](https://github.com/scriptscat/scriptcat/commit/fabd2e944235b460bc73df346b79d23ee4540af7)] (by @cyfung1031)

### Прочее

- ⚡️ Оптимизации стабильности и производительности
- 🐛 Исправлены различные проблемы
- ♻️ Оптимизация структуры кода
- 🌐 Улучшения i18n

**Полный журнал изменений:** [Compare v1.1.2...v1.2.0](https://github.com/scriptscat/scriptcat/compare/v1.1.2...v1.2.0)

<a name="1.1.2"></a>

## 1.1.2 (2025-09-18)

Исправления ошибок

### Исправлено

- 🐛 Исправлена проблема toString в sandbox [#737](https://github.com/scriptscat/scriptcat/issues/737) [[6ca24c9](https://github.com/scriptscat/scriptcat/commit/6ca24c9b171792035803ac4e1c69e473629f9d18)]
- 🐛 Исправлено отображение badge 0 [[026c1d2](https://github.com/scriptscat/scriptcat/commit/026c1d2071dd4cfb6291f005d36717bcdf0a51c3)]
- 🐛 Исправлена проблема CSP при инъекции скриптов [#739](https://github.com/scriptscat/scriptcat/issues/739) [#728](https://github.com/scriptscat/scriptcat/issues/728) [[5da21b5](https://github.com/scriptscat/scriptcat/commit/5da21b5e3d0e7e86a1fd5dff57ba03ea641c19fa)]
- 🐛 Исправлено: фоновый скрипт не раскрывался на странице popup [[66ab70f](https://github.com/scriptscat/scriptcat/commit/66ab70fb10c28aaf0c9260a9591aab7e1ae35615)]
- 🐛 Усилена валидация типов сообщений [#676](https://github.com/scriptscat/scriptcat/issues/676) [[5073795](https://github.com/scriptscat/scriptcat/commit/50737957507ff9af3aa9ba9a6b7d444b643d1ff2)]
- 🐛 Исправлена проблема document в GM xhr [#716](https://github.com/scriptscat/scriptcat/issues/716) [[1c46546](https://github.com/scriptscat/scriptcat/commit/1c465462f4e14ae461d54358710f5caf74208af3)]

<a name="1.1.1"></a>

## 1.1.1 (2025-09-07)

### Добавлено

- ✨ Добавлены пользовательские настройки редактора и определения типов редактора ([#708](https://github.com/scriptscat/scriptcat/issues/708)) [[49eb379](https://github.com/scriptscat/scriptcat/commit/49eb3794774790d61c3ef787c865a9ba6fe82841)]

### Исправлено

- 🐛 Исправлены проблемы совместимости со старыми версиями браузеров [#715](https://github.com/scriptscat/scriptcat/issues/715) [[4da8068](https://github.com/scriptscat/scriptcat/commit/4da806879c2b170672814d02e6f8ed98c9fae35b)]
- 💄 Оптимизировано отображение меню popup при слишком маленьком окне ([288650e](https://github.com/scriptscat/scriptcat/commit/288650e5e4cbdc3fa8658f0754ce427a1b3dec5a))
- 🐛 Исправлены несколько проблем ([#710](https://github.com/scriptscat/scriptcat/issues/710)) [[6a2027a](https://github.com/scriptscat/scriptcat/commit/6a2027ac0bb5e0ed625df570240d068a98a34b31)] (by @WhiteSevs)

### Разное

- 🌐 Обработка проблем i18n [[2adf69d](https://github.com/scriptscat/scriptcat/commit/2adf69d6ec3c30186f2c2ef89f97e3cba9e15a66)]

<a name="1.1.0"></a>

## 1.1.0 (2025-09-07)

Множество исправлений ошибок и улучшений совместимости, добавлена поддержка Dropbox, новая функция @early-start для более раннего запуска, чем загрузка страницы. Подробнее см. журнал v1.1.0-beta.x.

### Добавлено

- ✨ Настройки среды выполнения скрипта [#628](https://github.com/scriptscat/scriptcat/issues/628) [[0d4a89e](https://github.com/scriptscat/scriptcat/commit/0d4a89efaecf0331dcc7fbb6df006b93a1525846)]
- ✨ Свёртка по умолчанию, когда нет фоновых скриптов [#626](https://github.com/scriptscat/scriptcat/issues/626) ([9d0aac6](https://github.com/scriptscat/scriptcat/commit/9d0aac6aae11b96707ca1f7c024a24e9d55f217b))
- ✨ Поддержка Dropbox [#575](https://github.com/scriptscat/scriptcat/issues/575) [[2c66f21](https://github.com/scriptscat/scriptcat/commit/2c66f21f5118bd83a0eaa0f1baa3a31f2233e5b2)]
- ✨ Оптимизация external.Tampermonkey: проверка установки SC, когда TM не установлен, но оба TM и SC включены ([#703](https://github.com/scriptscat/scriptcat/issues/703)) [[d0115c3](https://github.com/scriptscat/scriptcat/commit/d0115c33657260d803b6091139601b1b20407d4e)] (by @cyfung1031)
- ✨ Добавлен @early-start для загрузки раньше страницы ([#649](https://github.com/scriptscat/scriptcat/issues/649)) [[eb097dd](https://github.com/scriptscat/scriptcat/commit/eb097dd146dcd6f8ca712ed883571dbfb3d09f20)]
- ✨ Глобальный поиск по коду ([#662](https://github.com/scriptscat/scriptcat/issues/662)) [[f8eafb7](https://github.com/scriptscat/scriptcat/commit/f8eafb7f955dad62c1b41ac477e929bf00c65982)] (by @RenjiYuusei)
- ✨ Страница опроса после удаления расширения [[6404c8f](https://github.com/scriptscat/scriptcat/commit/6404c8f74aff09b15725a92f8afdfc0d71ac188f)]
- 📝 Изменены страница установки и namespace ([6f2f000](https://github.com/scriptscat/scriptcat/commit/6f2f000612908b7a88f6b70c2831092805c63bc7))
- ✨ QR-код для мобильной установки ([348237c](https://github.com/scriptscat/scriptcat/commit/348237c7ce9771c69025386926b1f73710cf6f42))

### Исправлено

- 🐛 Исправлено: установка не запускалась, когда сеть не могла открыть промежуточную страницу установки [#705](https://github.com/scriptscat/scriptcat/issues/705) [[5f1e292](https://github.com/scriptscat/scriptcat/commit/5f1e2929d79c470ba4427c3cce01f5cd184a839b)]
- 🐛 Обработка выражения `@match *://*domain/*` [[039b445](https://github.com/scriptscat/scriptcat/commit/039b4454148947cd3c74de82b87804ee9815e60c)]
- 🐛 Исправлена проблема проникновения sandbox окружения расширения [#700](https://github.com/scriptscat/scriptcat/issues/700) [[a1a868d](https://github.com/scriptscat/scriptcat/commit/a1a868dfe3199e666fe2bcb65cfb2ad0ad3d699b)]
- ✏️ backgroud -&gt; background ([#698](https://github.com/scriptscat/scriptcat/issues/698)) [[2594075](https://github.com/scriptscat/scriptcat/commit/2594075c4a50f4c79fa46bcda08d7b0cbcfe723c)] (by @cyfung1031)
- ✏️ CrhomeStorage -&gt; ChromeStorage ([#693](https://github.com/scriptscat/scriptcat/issues/693)) [[64c536d](https://github.com/scriptscat/scriptcat/commit/64c536dbd5fcb4c29eebc1109202bab69aaa3ee2)] (by @cyfung1031)
- 🐛 Исправлены GM.getTab и GM.getTabs ([#683](https://github.com/scriptscat/scriptcat/issues/683)) [[31de256](https://github.com/scriptscat/scriptcat/commit/31de256f02b5b61e27f0eec9ea673248ba8faa32)] (by @WhiteSevs)
- 🐛 Исправлено отсутствие домена в finalUrl ([#656](https://github.com/scriptscat/scriptcat/issues/656)) [[545d7c8](https://github.com/scriptscat/scriptcat/commit/545d7c8c0dd69c83bd2f0353518aafe6af81c0f4)] (by @cyfung1031)
- 🐛 Совместимость с более низкими ядрами браузера [#647](https://github.com/scriptscat/scriptcat/issues/647) ([bba12d2](https://github.com/scriptscat/scriptcat/commit/bba12d23f04759cb9b7fdb63f0d95ae515ee94a9))
- 🐛 Исправлено отсутствие домена в finalUrl ([#656](https://github.com/scriptscat/scriptcat/issues/656)) [[3ed018a](https://github.com/scriptscat/scriptcat/commit/3ed018a7a54803fcf2e1791316e0166ed0b52007)] (by @cyfung1031)
- 💚 Исправлена проблема lint react/jsx-no-literals [[017b608](https://github.com/scriptscat/scriptcat/commit/017b60886be601e3e0a1719cf249da32d5686c30)]
- 🐛 Совместимость с более низкими ядрами браузера [#647](https://github.com/scriptscat/scriptcat/issues/647) [[0e2f817](https://github.com/scriptscat/scriptcat/commit/0e2f8173c8b44bd6ad44bdffc73fa302a96a058e)]
- 🐛 Оптимизирована инъекция window.external ([#646](https://github.com/scriptscat/scriptcat/issues/646)) [[0b2668a](https://github.com/scriptscat/scriptcat/commit/0b2668aadcab35a33ff9abc4bd030dffb87ea168)] (by @cyfung1031)
- 🐛 Исправлено: страница аутентификации облачного хранилища не закрывалась автоматически [[7748088](https://github.com/scriptscat/scriptcat/commit/7748088e63c1fc660b6a6ae5613cf04f9da99b8c)]
- 🐛 Исправлено: `@connect` \* не работал [#623](https://github.com/scriptscat/scriptcat/issues/623) [[76481c8](https://github.com/scriptscat/scriptcat/commit/76481c845b34414a7f15ed18ec61f7dff7eef091)]
- 🐛 Добавлены unit-тесты и исправлена проблема `@exclude` ([#618](https://github.com/scriptscat/scriptcat/issues/618)) [[0046bb7](https://github.com/scriptscat/scriptcat/commit/0046bb78800a2c46edaac785b8e9592327772a3b)] (by @cyfung1031)
- 🐛 Исправлено: некоторые ссылки .user.js не устанавливали скрипты [#599](https://github.com/scriptscat/scriptcat/issues/599) [[ccd2639](https://github.com/scriptscat/scriptcat/commit/ccd2639858f0f3cde28f284376fe8ed998d935ae)]
- 🐛 Исправлена ошибка создания нового скрипта [[d42d6e7](https://github.com/scriptscat/scriptcat/commit/d42d6e7d408a84674facf9ab0da6eac0e384502f)]
- 🐛 Исправления metadata ([#610](https://github.com/scriptscat/scriptcat/issues/610)) [[4d98cce](https://github.com/scriptscat/scriptcat/commit/4d98cce0ca1281cc58f551ea4e6700e340780d3f)] (by @cyfung1031)
- 🐛 Исправление Popup Badge ([#605](https://github.com/scriptscat/scriptcat/issues/605)) [[eff9230](https://github.com/scriptscat/scriptcat/commit/eff92309de99abb0cf48ef4727afaa113bc2fbb6)] (by @cyfung1031)
- 🐛 Исправление ScriptEditor.tsx ([#603](https://github.com/scriptscat/scriptcat/issues/603)) [[a9aadba](https://github.com/scriptscat/scriptcat/commit/a9aadba372b813c16bdc5f0aeb07c68981f48c63)] (by @cyfung1031)
- 🐛 Исправление CSS code viewer &amp; editor ([#602](https://github.com/scriptscat/scriptcat/issues/602)) [[2e86785](https://github.com/scriptscat/scriptcat/commit/2e8678513efaccd42c8dc2aa89f8b76679aa8420)] (by @cyfung1031)
- 🐛 Исправлена проблема конкурентности getFaviconFromDomain ([#597](https://github.com/scriptscat/scriptcat/issues/597)) [[1872fe1](https://github.com/scriptscat/scriptcat/commit/1872fe165ab204b155a56f037c111d2d7776c2b9)] (by @cyfung1031)
- 🐛 Исправлена ошибка открытия вкладки в нескольких окнах [#586](https://github.com/scriptscat/scriptcat/issues/586) [[54c1da2](https://github.com/scriptscat/scriptcat/commit/54c1da29c2bd8bd8f5ef2d85b7aed8b334de296f)]
- 🐛 Исправлена проблема совместимости openerTabId ([#586](https://github.com/scriptscat/scriptcat/issues/586)) [[b861fc8](https://github.com/scriptscat/scriptcat/commit/b861fc8620e53b885cad98db03f1dd10ec9d296c)] (by @cyfung1031)

### Разное

- 📝 Созданы README_RU.md и CONTRIBUTING_RU.md ([#678](https://github.com/scriptscat/scriptcat/issues/678)) [[597ab03](https://github.com/scriptscat/scriptcat/commit/597ab0378fe5ced01637cf411326ef7845b8ce2b)] (by @Ioann)
- 👷 Правки совместимости (совместимость pack.js) ([#669](https://github.com/scriptscat/scriptcat/issues/669)) [[fec45e6](https://github.com/scriptscat/scriptcat/commit/fec45e6606a609b10b79c58d2fcba02c2ce71e16)] (by @cyfung1031)
- 🌐 Уточнена и расширена вьетнамская локаль ([#661](https://github.com/scriptscat/scriptcat/issues/661)) [[6847a59](https://github.com/scriptscat/scriptcat/commit/6847a596c4b06c75e13594ef60e4b9dfa5718cf3)] (by @RenjiYuusei)
- 🌐 Исправления переводов ([#635](https://github.com/scriptscat/scriptcat/issues/635)) [[19296de](https://github.com/scriptscat/scriptcat/commit/19296de6a3815e5965eb33401a55da9b2bd22bb4)] (by @cyfung1031)
- 🌐 Исправлена проблема i18n онбординг-гида [#627](https://github.com/scriptscat/scriptcat/issues/627) [[9683f96](https://github.com/scriptscat/scriptcat/commit/9683f965400ab6a2bac15349aca4335911766eac)]
- 👷 Оптимизация кода pack.js ([#615](https://github.com/scriptscat/scriptcat/issues/615)) [[870dd9b](https://github.com/scriptscat/scriptcat/commit/870dd9bc6b7eff3eceefa915452e773ec0565180)] (by @cyfung1031)
