---
title: Журнал изменений
---

import GithubStar from '@site/src/components/GithubStar';

<GithubStar variant="bar" scene="changelog" />

Для журнала изменений бета-версий см. [Бета-журнал](./beta-changelog.md)

⚠️ Обратите внимание: если вы используете Windows 8/7/XP или версию ядра браузера ниже 120, необходимо вручную установить [устаревшую версию ScriptCat](https://github.com/scriptscat/scriptcat/releases). v0.16.x — последняя версия с поддержкой Manifest V2. Инструкции по установке: [Установка расширения загрузкой распакованных файлов](/use/use.md#load-unpacked-extension-installation).

<a name="1.4.0"></a>

## 1.4.0 (2026-06-26)

Данный релиз включает рефакторинг нижнего уровня для подготовки к Firefox MV3, улучшения редактора (меню редактирования, форматирование Ctrl+Shift+F, быстрое исправление Monaco), выбор многоплатформенных поисковых систем для поиска скриптов, новые возможности: `@unwrap` / `window.onurlchange` / `@run-at context-menu`,全面提升 надёжности облачной синхронизации, а также массовые исправления GM API, интерфейса и стабильности (включая длительную утечку памяти и уязвимости загрязнения прототипов). ScriptCat AI Agent доступен как предпросмотр в dev / Beta сборках и пока не включён в стабильную версию.

### 🚀 Основные новые функции

- 🧪 ScriptCat AI Agent (**Предпросмотр — доступен только в dev / Beta сборках, не включён в стабильную версию**) — система агентов на основе ИИ с разговорным взаимодействием, вызовом инструментов, системой навыков, протоколом MCP и другим ([#1324](https://github.com/scriptscat/scriptcat/pull/1324)) (автор @CodFrm)
- ✨ Поддержка мета-тега `@unwrap` ([#1213](https://github.com/scriptscat/scriptcat/pull/1213)) (автор @cyfung1031)
- ✨ Реализация `window.onurlchange` TM через Navigation API ([#1315](https://github.com/scriptscat/scriptcat/pull/1315)) (автор @cyfung1031)
- ✨ Восстановлена поддержка `@run-at context-menu` ([#1442](https://github.com/scriptscat/scriptcat/pull/1442)) (автор @cyfung1031)
- ✨ Поиск скриптов поддерживает выбор много платформенных поисковых систем ([#1295](https://github.com/scriptscat/scriptcat/pull/1295)) (автор @CodFrm)
- ✨ Добавлены новые поставщики сервисов иконок ([#1333](https://github.com/scriptscat/scriptcat/pull/1333)) (автор @cyfung1031)
- ✨ Добавлена иконка проверки обновлений в столбец «последнее обновление» в списке скриптов ([#1304](https://github.com/scriptscat/scriptcat/pull/1304)) (автор @CodFrm)
- ✨ Улучшена обработка конфликтов редактирования и имён скриптов ([#1223](https://github.com/scriptscat/scriptcat/pull/1223)) (автор @cyfung1031)

### 🧑‍💻 Редактор

- ✨ Добавлено контекстное меню редактора (поиск, замена, отмена и т.д.) ([#1303](https://github.com/scriptscat/scriptcat/pull/1303)) (автор @CodFrm)
- ✨ Редактор поддерживает форматирование Ctrl+Shift+F ([#1415](https://github.com/scriptscat/scriptcat/pull/1415)) (автор @cyfung1031)
- ✨ Улучшены быстрые исправления Monaco и подсказки метаданных скриптов ([#1461](https://github.com/scriptscat/scriptcat/pull/1461)) (автор @cyfung1031)
- 🐛 Исправлены сочетания клавиш Ctrl-F / Ctrl-H ([#1312](https://github.com/scriptscat/scriptcat/pull/1312)) (автор @cyfung1031)
- 🐛 Исправлена функция автоисправления ESLint [#1079](https://github.com/scriptscat/scriptcat/issues/1079) ([#1184](https://github.com/scriptscat/scriptcat/pull/1184)) (автор @cyfung1031)
- 🐛 Исправлены проблемы CSS-макета редактора ([#1460](https://github.com/scriptscat/scriptcat/pull/1460)) (автор @cyfung1031)
- 🐛 Исправлено отображение списка скриптов ScriptEditor в светлой теме ([#1288](https://github.com/scriptscat/scriptcat/pull/1288)) (автор @CodFrm)
- 🐛 Исправлены и улучшены проблемы ScriptEditor ([#1258](https://github.com/scriptscat/scriptcat/pull/1258)) (автор @cyfung1031)

### ⚡️ Улучшения производительности

- 🚑 Исправлена потенциальная утечка памяти при длительной работе ScriptCat ([#1401](https://github.com/scriptscat/scriptcat/pull/1401)) (автор @cyfung1031)
- ⚡️ Удалена зависимость Baidu filesystem от глобальных правил DNR, переход на отключение cookie для каждого запроса ([#1377](https://github.com/scriptscat/scriptcat/pull/1377)) (автор @cyfung1031)
- ⚡️ Оптимизирован выбор много платформенных поисковых систем ([#1379](https://github.com/scriptscat/scriptcat/pull/1379)) (автор @cyfung1031)
- ⚡️ Использование моноширинного шрифта для loadingStatus на странице установки ([#1381](https://github.com/scriptscat/scriptcat/pull/1381)) (автор @cyfung1031)
- ⚡️ Оптимизация обработки pushValue ([#1403](https://github.com/scriptscat/scriptcat/pull/1403)) (автор @cyfung1031)
- ⚡️ Более полные проверки разрешений и улучшенные подсказки для userScript ([#1251](https://github.com/scriptscat/scriptcat/pull/1251)) (автор @cyfung1031)
- ⚡️ Улучшено управление памятью и очистка MessageConnect ([#1248](https://github.com/scriptscat/scriptcat/pull/1248)) (автор @cyfung1031)

### 🐛 Исправления ошибок

- 🐛 Повышена надёжность облачной синхронизации (аутентификация Dropbox / WebDAV / Google Drive / OneDrive, обработка путей и повторные попытки) ([#1374](https://github.com/scriptscat/scriptcat/pull/1374) ~ [#1395](https://github.com/scriptscat/scriptcat/pull/1395)) (автор @cyfung1031)
- 🐛 Исправлены множественные проблемы облачной синхронизации: загрузка нулевого размера в OneDrive, нормализация ошибок Google Drive / OneDrive, пользовательские метаданные modifiedDate для S3 ([#1405](https://github.com/scriptscat/scriptcat/pull/1405)) ([#1406](https://github.com/scriptscat/scriptcat/pull/1406)) ([#1408](https://github.com/scriptscat/scriptcat/pull/1408)) (автор @cyfung1031)
- 🐛 Удалена проверка записи WebDAV verify для избежания ложных срабатываний на сервисах с недоступной корневой директорией (например, Nutstore) ([#1445](https://github.com/scriptscat/scriptcat/pull/1445)) (автор @CodFrm)
- 🐛 Исправлена ошибка кросс-доменных запросов при отсутствии разрешения на доступ к сайту ([#1477](https://github.com/scriptscat/scriptcat/pull/1477)) (автор @cyfung1031)
- 🐛 Исправлена адаптация всплывающего окна Edge Android [#686](https://github.com/scriptscat/scriptcat/issues/686) ([#1507](https://github.com/scriptscat/scriptcat/pull/1507)) (автор @CodFrm)
- 🐛 Исправлено вспышка белого фона при начальной загрузке [#1497](https://github.com/scriptscat/scriptcat/issues/1497) ([#1498](https://github.com/scriptscat/scriptcat/pull/1498)) (автор @cyfung1031)
- 🐛 Исправлена некорректная очистка соединений сообщений (GM API / порты) ([#1474](https://github.com/scriptscat/scriptcat/pull/1474)) (автор @cyfung1031)
- 🐛 Исправлена несовпадение шаблонов `@match` при отсутствии search ([#1466](https://github.com/scriptscat/scriptcat/pull/1466)) (автор @cyfung1031)
- 🐛 Добавлены `protoBaseDescs` для исправления наследования классов в полусреде Tampermonkey ([#1463](https://github.com/scriptscat/scriptcat/pull/1463)) (автор @cyfung1031)
- 🐛 Исправлена обработка null для msgConn в `GM_xmlhttpRequest` ([#1433](https://github.com/scriptscat/scriptcat/pull/1433)) (автор @cyfung1031)
- 🐛 Исправлена некорректная обработка.onloadend в GM xhr ([#1412](https://github.com/scriptscat/scriptcat/pull/1412)) (автор @cyfung1031)
- 🐛 Исправлены динамическое обновление и отображение списка ScriptEditor ([#1414](https://github.com/scriptscat/scriptcat/pull/1414)) (автор @cyfung1031)
- 🐛 Исправлена проблема количества session rules при параллельных xhr ([#1353](https://github.com/scriptscat/scriptcat/pull/1353)) (автор @cyfung1031)
- 🐛 Исправлен крах страницы из-за невалидного cron-выражения ([#1327](https://github.com/scriptscat/scriptcat/pull/1327)) (автор @cyfung1031)
- 🐛 Исправлена ошибка, при которой один скрипт таймаути приводил к сбою всех при массовой проверке обновлений ([#1265](https://github.com/scriptscat/scriptcat/pull/1265)) (автор @cyfung1031)
- 🐛 Добавлена обработка extensionEnv для isIncognito, userAgent и run-in ([#1368](https://github.com/scriptscat/scriptcat/pull/1368)) (автор @cyfung1031)
- 🐛 Исправлено частичное перекрытие кнопки руководства по началу работы [#1396](https://github.com/scriptscat/scriptcat/issues/1396) ([#1398](https://github.com/scriptscat/scriptcat/pull/1398)) (автор @cyfung1031)
- 🐛 Исправлено перекрытие всплывающих подсказок на странице управления скриптами [#1386](https://github.com/scriptscat/scriptcat/issues/1386) ([#1387](https://github.com/scriptscat/scriptcat/pull/1387)) (автор @Xdy1579883916)
- 🐛 Исправлено аномальное изменение размеров в карточном режиме из-за боковой панели [#1179](https://github.com/scriptscat/scriptcat/issues/1179) ([#1373](https://github.com/scriptscat/scriptcat/pull/1373)) (автор @cyfung1031)
- 🐛 Исправлена некорректная установка origin при перетаскивании локальных файлов ([#1371](https://github.com/scriptscat/scriptcat/pull/1371)) (автор @cyfung1031)
- 🐛 Исправлено сообщение о переключении языка ([#1380](https://github.com/scriptscat/scriptcat/pull/1380)) (автор @cyfung1031)
- 🐛 Улучшён интерфейс отображения логов ([#1372](https://github.com/scriptscat/scriptcat/pull/1372)) (автор @cyfung1031)
- 🐛 Исправлена CSS панель UserConfigPanel ([#1361](https://github.com/scriptscat/scriptcat/pull/1361)) (автор @cyfung1031)
- 🐛 Использован `Object.create(null)` для пустого объекта в create_context ([#1397](https://github.com/scriptscat/scriptcat/pull/1397)) (автор @cyfung1031)
- 🐛 Исправлена логика тихого обновления и разрешений connect для подписанных скриптов ([#1201](https://github.com/scriptscat/scriptcat/pull/1201)) (автор @cyfung1031)
- 🐛 Исправлено необновление времени в кнопке запроса на странице логов ([#1294](https://github.com/scriptscat/scriptcat/pull/1294)) (автор @CodFrm)

### 🔒 Улучшения безопасности

- 🔒 Исправлено загрязнение прототипов через недоверенные ключи YAML в пользовательских настройках ([#1494](https://github.com/scriptscat/scriptcat/pull/1494)) (автор @qdzsh)
- 🔒 Исправлены все уязвимости зависимостей npm ([#1350](https://github.com/scriptscat/scriptcat/pull/1350)) ([#1364](https://github.com/scriptscat/scriptcat/pull/1364)) ([#1365](https://github.com/scriptscat/scriptcat/pull/1365)) (автор @cyfung1031)

### ♻️ Рефакторинг и совместимость

- ♻️ Рефакторинг нижнего уровня для подготовки к адаптации Firefox MV3 ([#1457](https://github.com/scriptscat/scriptcat/pull/1457)) ([#1480](https://github.com/scriptscat/scriptcat/pull/1480)) (автор @cyfung1031)
- ♻️ Рефакторинг логики обновления ресурсов скриптов (updateResource) и управления параллельностью, восстановление совместимости кэша ресурсов ([#1193](https://github.com/scriptscat/scriptcat/pull/1193)) (автор @cyfung1031)
- ♻️ Замена jszip на JSZipp для обработки ZIP (импорт/экспорт резервных копий), удаление неиспользуемой зависимости jszip ([#1479](https://github.com/scriptscat/scriptcat/pull/1479)) (автор @cyfung1031)
- ♻️ Единый канал postMessage для связи Offscreen ↔ ServiceWorker ([#1299](https://github.com/scriptscat/scriptcat/pull/1299)) (автор @CodFrm)
- ♻️ Рефакторинг кода VSCodeConnect ([#1170](https://github.com/scriptscat/scriptcat/pull/1170)) (автор @cyfung1031)
- ⚡️ Сжатие ts.worker.js до 4MB для прохождения проверки AMO, исправление ошибки разрешений MV3 background ([#1221](https://github.com/scriptscat/scriptcat/pull/1221)) (автор @cyfung1031)

### 🌐 Интернационализация

- 🌐 Исправлены многоязычные терминологические переводы (главным образом улучшен Traditional Chinese) и добавлены руководства по терминологии переводов ([#1468](https://github.com/scriptscat/scriptcat/pull/1468)) (автор @cyfung1031)

### Прочее

- ✨ Сервис иконок fetchIconByDomain переключён на scriptcat.org ([#1268](https://github.com/scriptscat/scriptcat/pull/1268)) (автор @cyfung1031)
- 🔥 Удалены Crowdin и связанные с ach-UG псевдо-язык данные ([#1385](https://github.com/scriptscat/scriptcat/pull/1385)) (автор @CodFrm)

<a name="0.16.15"></a>

## 0.16.15 (2026-05-19)

### 🐛 Исправления ошибок

- 🐛 Исправлена команда сборки скрипта упаковки MV2 [#1423](https://github.com/scriptscat/scriptcat/issues/1423) (автор @CodFrm)
- 🐛 Адаптация к изменениям WebExtensions API (Firefox 149-152), включая корректировки CSP ([#1448](https://github.com/scriptscat/scriptcat/pull/1448)) (автор @cyfung1031)

<a name="0.16.14"></a>

## 0.16.14 (2026-04-26)

### 🚀 Основные новые функции

- ✨ FirefoxMV2 синхронизация с основными элементами MV3: TypeScript обновлён до 4.9, tsconfig обновлён до es2022; шаблоны скриптов (normal/crontab/background) выровнены с MV3; cron обновлён с поддержкой выражения `once(...)`; поддержка нескольких языков Monaco Editor ([#1331](https://github.com/scriptscat/scriptcat/pull/1331)) (автор @cyfung1031)

### ♻️ Рефакторинг и совместимость

- 🔥 Удалена зависимость axios для согласованности с MV3 ([#1339](https://github.com/scriptscat/scriptcat/pull/1339)) (автор @cyfung1031)

### 🐛 Исправления ошибок

- 🐛 Исправлена проблема, при которой вложенный iframe window.parent не получал сообщения postMessage ([#1335](https://github.com/scriptscat/scriptcat/pull/1335)) (автор @cyfung1031)

<a name="1.3.2"></a>

## 1.3.2 (2026-03-28)

### 🐛 Исправления ошибок

- 🐛 Удалён заголовок Accept из fetchScriptBody для избежания ошибки 406 ([#1306](https://github.com/scriptscat/scriptcat/pull/1306)) (автор @cyfung1031)
- 🐛 Исправлен конфликт аутентификации cookie WebDAV и поддержка authType ([#1308](https://github.com/scriptscat/scriptcat/pull/1308)) (автор @CodFrm)
- 🐛 Корректное отображение ошибок форматирования ([#1310](https://github.com/scriptscat/scriptcat/pull/1310)) (автор @cyfung1031)
- 🐛 Использование chrome.storage.local для устройно-зависимых настроек во избежание меж-device-синхронизации ([#1309](https://github.com/scriptscat/scriptcat/pull/1309)) (автор @CodFrm)
- 🐛 Исправлены проблемы с подсказками редактора кода ([#1301](https://github.com/scriptscat/scriptcat/pull/1301)) (автор @cyfung1031)
- 🐛 Исправлено обрезание всплывающего окна выбора даты на странице логов ([#1292](https://github.com/scriptscat/scriptcat/pull/1292)) (автор @cyfung1031)
- 🐛 Исправлено отображение кнопки отключения при отсутствии привязанного облачного хранилища ([#1291](https://github.com/scriptscat/scriptcat/pull/1291)) (автор @CodFrm)
- 🐛 Исправлено перекрытие всплывающего окна ([#1290](https://github.com/scriptscat/scriptcat/pull/1290)) (автор @cyfung1031)

<a name="1.3.1"></a>

## 1.3.1 (2026-03-13)

### 🐛 Исправления ошибок

- 🚑 Исправлена ошибка определения среды, вызванная инъекцией chrome.runtime другими расширениями [#1280](https://github.com/scriptscat/scriptcat/issues/1280) ([#1281](https://github.com/scriptscat/scriptcat/pull/1281)) (автор @CodFrm)

### Прочее

- ✅ Добавлены E2E-тесты Playwright и функциональные тесты GM API ([#1283](https://github.com/scriptscat/scriptcat/pull/1283)) (автор @CodFrm)

<a name="1.3.0"></a>

## 1.3.0 (2026-03-10)

Это обновление включает хранилище Amazon S3, параметры времени выполнения скриптов, установку без доступа к внешним сайтам и многое другое. Значительно оптимизирована система сообщений и производительность React, исправлены многочисленные проблемы GM API, интерфейса и стабильности, проведены обширные улучшения качества кода.

### 🚀 Основные новые функции

- ✨ Добавлено хранилище Amazon S3 [#1146](https://github.com/scriptscat/scriptcat/issues/1146) ([#1189](https://github.com/scriptscat/scriptcat/pull/1189)) (автор @CodFrm)
- ✨ Параметры времени выполнения скриптов ([#895](https://github.com/scriptscat/scriptcat/pull/895)) (автор @CodFrm)
- ✨ Установка без доступа к внешним сайтам + корректировка макета страницы установки ([#842](https://github.com/scriptscat/scriptcat/pull/842)) (автор @cyfung1031)
- ✨ Серый значок при отключённой функциональности скрипта [#897](https://github.com/scriptscat/scriptcat/issues/897) (автор @CodFrm)
- ✨ Оптимизация взаимодействия при нулевом количестве раскрытых пунктов меню [#868](https://github.com/scriptscat/scriptcat/issues/868) (автор @CodFrm)
- ✨ `@noframes` по умолчанию в шаблоне для предотвращения типичных ошибок ([#900](https://github.com/scriptscat/scriptcat/pull/900)) (автор @cyfung1031)
- ✨ Предотвращение неверного определения ссылки установки как новой установки при смене имени скрипта ([#824](https://github.com/scriptscat/scriptcat/pull/824)) (автор @cyfung1031)
- ✨ Исправлена проверка конфликтов `@grant`, добавлено уведомление об ошибке повторного объявления meta ([#902](https://github.com/scriptscat/scriptcat/pull/902)) (автор @cyfung1031)
- ✨ Принятие `@version` с пустым или отсутствующим значением ([#1216](https://github.com/scriptscat/scriptcat/pull/1216)) (автор @cyfung1031)
- ✨ Корректировка позиции скрытой боковой панели редактора [#1185](https://github.com/scriptscat/scriptcat/issues/1185) ([#1254](https://github.com/scriptscat/scriptcat/pull/1254)) (автор @CodFrm)

### 🧩 Изменения GM API

- 🐛 Исправлена проблема GM_addElement, перенос операции в среду контента ([#1233](https://github.com/scriptscat/scriptcat/pull/1233)) (автор @cyfung1031)
- 🐛 Добавлен параметр `conflictAction` в `GM_download` ([#1250](https://github.com/scriptscat/scriptcat/pull/1250)) (автор @cyfung1031)
- 🐛 Исправлены асинхронные объявления GM API, корректный возврат Promise ([#1169](https://github.com/scriptscat/scriptcat/pull/1169)) (автор @cyfung1031)
- ♻️ Совместимость Firefox: GM_setClipboard ([#928](https://github.com/scriptscat/scriptcat/pull/928)) (автор @cyfung1031)
- 🐛 Исправлена проблема GM_value [#1192](https://github.com/scriptscat/scriptcat/issues/1192) (автор @CodFrm)
- 🐛 Исправлена поддержка папок в имени файла скачивания ([#1203](https://github.com/scriptscat/scriptcat/pull/1203)) (автор @cyfung1031)

### ⚡️ Улучшения производительности

- ♻️ Рефакторинг системы сообщений: использование storage.local + соответствие Firefox MV3 scripting + неотслеживаемая динамическая синхронизация MessageFlag ([#1067](https://github.com/scriptscat/scriptcat/pull/1067)) (автор @cyfung1031)
- ⚡️ Исправлены проблемы перерисовки React (ScriptCard & ScriptTable) ([#1182](https://github.com/scriptscat/scriptcat/pull/1182)) (автор @cyfung1031)
- ⚡️ Исправлены проблемы перерисовки React (Popup) ([#1181](https://github.com/scriptscat/scriptcat/pull/1181)) (автор @cyfung1031)
- ⚡️ Оптимизирована производительность Repo ([#1232](https://github.com/scriptscat/scriptcat/pull/1232)) (автор @CodFrm)
- ⚡️ Перенос метаданных из chrome.storage.session ([#1027](https://github.com/scriptscat/scriptcat/pull/1027)) (автор @cyfung1031)
- ⚡️ Улучшено определение кодировки ([#1140](https://github.com/scriptscat/scriptcat/pull/1140)) (автор @cyfung1031)
- ⚡️ Хранение иконок по URL для избежания дублирования ([#909](https://github.com/scriptscat/scriptcat/pull/909)) (автор @cyfung1031)
- ⚡️ Оптимизация кода parseMetadata ([#903](https://github.com/scriptscat/scriptcat/pull/903)) (автор @cyfung1031)
- 🐛 Исправлены утечки памяти и утечка свойств объектов ([#1242](https://github.com/scriptscat/scriptcat/pull/1242)) (автор @cyfung1031)
- ♻️ Удалён Redux, упрощено управление состоянием ([#1206](https://github.com/scriptscat/scriptcat/pull/1206)) (автор @cyfung1031)

### 🧑‍💻 Редактор

- ✨ Оптимизация настроек Monaco Editor, добавление исправления `/* global xxx */` ([#1012](https://github.com/scriptscat/scriptcat/pull/1012)) (автор @cyfung1031)
- ✨ Многоязычные подсказки Monaco Editor и добавление подсказки `@require-css` ([#960](https://github.com/scriptscat/scriptcat/pull/960)) (автор @cyfung1031)

### 🐛 Исправления ошибок

- 🐛 Исправлен конфликт проверки разрешений окна инкогнито, вызывающий повторные перезапуски (автор @CodFrm)
- 🐛 Исправлена обработка выражения `*?*` [#1271](https://github.com/scriptscat/scriptcat/issues/1271) ([#1272](https://github.com/scriptscat/scriptcat/pull/1272)) (автор @CodFrm)
- 🔒 Очистка HTML-содержимого уведомлений с помощью DOMPurify ([#1274](https://github.com/scriptscat/scriptcat/pull/1274)) (автор @CodFrm)
- 🐛 Исправлена неработающая панель управления разрешениями в настройках скрипта ([#1267](https://github.com/scriptscat/scriptcat/pull/1267)) (автор @CodFrm)
- 🐛 Исправлено следование всплывающего окна за прокруткой экрана [#1256](https://github.com/scriptscat/scriptcat/issues/1256) ([#1263](https://github.com/scriptscat/scriptcat/pull/1263)) (автор @cyfung1031)
- 🐛 Исправлен парсинг ссылки установки [#1235](https://github.com/scriptscat/scriptcat/issues/1235) ([#1260](https://github.com/scriptscat/scriptcat/pull/1260)) (автор @cyfung1031)
- 🐛 Исправлена задержка focusin/focusout при перетаскивании [#1224](https://github.com/scriptscat/scriptcat/issues/1224) ([#1243](https://github.com/scriptscat/scriptcat/pull/1243)) (автор @CodFrm)
- 🐛 Исправлена неработоспособность внешнего API расширения ([#1217](https://github.com/scriptscat/scriptcat/pull/1217)) (автор @cyfung1031)
- 🐛 Исправлена проблема grant ([#1199](https://github.com/scriptscat/scriptcat/pull/1199)) (автор @CodFrm)
- 🐛 Исправлено отсутствие UserAgentData в content.js ([#1183](https://github.com/scriptscat/scriptcat/pull/1183)) (автор @cyfung1031)
- 🐛 Обработка проблемы кодировки скриптов [#1115](https://github.com/scriptscat/scriptcat/issues/1115) ([#1138](https://github.com/scriptscat/scriptcat/pull/1138)) (автор @CodFrm)
- 🐛 Исправлено отображение иконки скрипта [#1052](https://github.com/scriptscat/scriptcat/issues/1052) ([#1104](https://github.com/scriptscat/scriptcat/pull/1104)) (автор @CodFrm)
- 🐛 Добавлен UnoCSS-префикс для разрешения конфликтов CSS, исправлен CSS-макет ([#1013](https://github.com/scriptscat/scriptcat/pull/1013)) (автор @cyfung1031)
- 🐛 Очистка существующего Alarm при выборе нерегулярной проверки обновлений скриптов ([#996](https://github.com/scriptscat/scriptcat/pull/996)) (автор @cyfung1031)
- 🐛 Импорт и экспорт — исправлена дата последнего изменения скрипта ([#951](https://github.com/scriptscat/scriptcat/pull/951)) (автор @cyfung1031)
- 🐛 Исправлено отображение имени и описания скрипта с префиксом i18n [#1123](https://github.com/scriptscat/scriptcat/issues/1123) (автор @CodFrm)
- 🐛 Исправлена некорректная работа unregister ([#1231](https://github.com/scriptscat/scriptcat/pull/1231)) (автор @cyfung1031)

### ♻️ Рефакторинг и совместимость

- ♻️ Корректировка userScripts / scripting API, улучшение совместимости (пересмотр #704) ([#925](https://github.com/scriptscat/scriptcat/pull/925)) (автор @cyfung1031)
- ♻️ Изменения, связанные с Cron: исправление ошибок, i18n, улучшение выражений once, обновление библиотеки cron ([#1126](https://github.com/scriptscat/scriptcat/pull/1126)) (автор @cyfung1031)
- ♻️ Рефакторинг и оптимизация загрузки иконок скриптов ([#893](https://github.com/scriptscat/scriptcat/pull/893)) (автор @CodFrm)
- ♻️ Улучшение декодирования текста ([#1166](https://github.com/scriptscat/scriptcat/pull/1166)) (автор @cyfung1031)
- ⬆️ Обновление совместимой версии ядра swc ([#1186](https://github.com/scriptscat/scriptcat/pull/1186)) (автор @cyfung1031)

### 🎨 Улучшения интерфейса

- 🎨 Изменение отображения номера значка расширения на количество скриптов [#989](https://github.com/scriptscat/scriptcat/issues/989) (автор @CodFrm)
- 🎨 Улучшение URL страницы установки ([#993](https://github.com/scriptscat/scriptcat/pull/993)) (автор @cyfung1031)
- 🐛 Рефакторинг DraggableEntry, исправление выравнивания высоты карточек ([#1245](https://github.com/scriptscat/scriptcat/pull/1245)) (автор @cyfung1031)

### Прочее

- 🔒 Улучшения безопасности (DOMPurify, исправления уязвимостей npm зависимостей)
- 👷 Оптимизация сборки Rspack, исправления цепочки инструментов сборки
- ⬆️ Обновление версий зависимостей

**Полный журнал изменений:** [Сравнение v1.2.6...v1.3.0](https://github.com/scriptscat/scriptcat/compare/v1.2.6...v1.3.0)

<a name="1.2.6"></a>

## 1.2.6 (2026-02-03)

### Исправлено

- 🐛 Исправлена ошибка structuredClone ([#1192](https://github.com/scriptscat/scriptcat/issues/1192)) [[265e122](https://github.com/scriptscat/scriptcat/commit/265e122342366b166d3122cc8da485cb1295b924)] (автор @cyfung1031)

<a name="1.2.5"></a>

## 1.2.5 (2026-02-02)

### Исправлено

- 🐛 Исправлена проблема синхронизации удаления скриптов [#1158](https://github.com/scriptscat/scriptcat/issues/1158) [[5e91a31](https://github.com/scriptscat/scriptcat/commit/5e91a31e02761ba8061e3de1f4d15fc1d964346c)] (автор @CodFrm)
- 🐛 Совместимость с TM `@match www.website.com/*` ([#1165](https://github.com/scriptscat/scriptcat/issues/1165)) [[da66ff7](https://github.com/scriptscat/scriptcat/commit/da66ff70d25c3087cb8405289dc8b14df9c15f05)] (автор @cyfung1031)
- 🐛 Edge последней версии 144 добавляет разрешение пользовательских скриптов [#1157](https://github.com/scriptscat/scriptcat/issues/1157) [[f7c1c73](https://github.com/scriptscat/scriptcat/commit/f7c1c730cf39cae02a9e6f815e3113ea9d2a8a05)] (автор @CodFrm)
- 🐛 Исправлена проблема непрерывного мониторинга FileSystemObserver ([#1160](https://github.com/scriptscat/scriptcat/issues/1160)) [[9556769](https://github.com/scriptscat/scriptcat/commit/95567690d1bf77bfe8bedfd6a94c88949a77e115)] (автор @cyfung1031)
- 🐛 Мелкие исправления locales.ts ([#1154](https://github.com/scriptscat/scriptcat/issues/1154)) [[1c44b68](https://github.com/scriptscat/scriptcat/commit/1c44b680dab3a95a51eb73cf92531efd0a192dc9)] (автор @cyfung1031)
- 🐛 Исправлена проблема времени во всплывающем окне обновления ([#1155](https://github.com/scriptscat/scriptcat/issues/1155)) [[c17f761](https://github.com/scriptscat/scriptcat/commit/c17f761807fb9b14aff09b9b08d19e4cbe72b8a5)] (автор @cyfung1031)
- 🐛 Исправлено отображение имени и описания скрипта с префиксом i18n [#1123](https://github.com/scriptscat/scriptcat/issues/1123) [[7ef7355](https://github.com/scriptscat/scriptcat/commit/7ef7355632fc989fa1cad44fd2069ff840bbd8df)] (автор @CodFrm)
- 🐛 Обработка проблемы ссылки на значение [#1141](https://github.com/scriptscat/scriptcat/issues/1141) ([#1147](https://github.com/scriptscat/scriptcat/issues/1147)) [[0892fcd](https://github.com/scriptscat/scriptcat/commit/0892fcd452758030553c33ddf14f1ce4bc6d3efc)] (автор @CodFrm)

<a name="1.2.4"></a>

## 1.2.4 (2026-01-07)

Исправлены ошибки синхронизации, обновление версии больше не автоматически открывает страницу журнала изменений

### Добавлено

- ✨ Синхронизация удаления теперь отключена по умолчанию ([#958](https://github.com/scriptscat/scriptcat/issues/958)) [[9c4c7dc](https://github.com/scriptscat/scriptcat/commit/9c4c7dc411357746db43a306d97ac41a71f2b49c)] (автор @cyfung1031)
- ✨ Редактор теперь поддерживает GM.* ([#1129](https://github.com/scriptscat/scriptcat/issues/1129)) [[bea0192](https://github.com/scriptscat/scriptcat/commit/bea0192c6cc50eff2ed4e1cc5dcc25f36bbe10e7)] (автор @cyfung1031)

### Изменено

- ♻️ Оптимизация логики открытия журнала изменений [#1110](https://github.com/scriptscat/scriptcat/issues/1110) [[d3ffedc](https://github.com/scriptscat/scriptcat/commit/d3ffedcffe752ca548f87f1640072fcd871b8604)] (автор @CodFrm)

### Исправлено

- 🐛 Исправления scriptcat.d.tpl и типов ([#1130](https://github.com/scriptscat/scriptcat/issues/1130)) [[dd22ef5](https://github.com/scriptscat/scriptcat/commit/dd22ef544684d69e24a7aae098cb05cbab03daa8)] (автор @cyfung1031)
- 🐛 Исправлены проблемы облачной синхронизации ([#1133](https://github.com/scriptscat/scriptcat/issues/1133)) [[a9383d2](https://github.com/scriptscat/scriptcat/commit/a9383d2012eb3953dc33c8886ce3891f404fa100)] (автор @CodFrm)
- 🐛 Исправлена ошибка `GM_addElement("tagName")` ([#1120](https://github.com/scriptscat/scriptcat/issues/1120)) [[ad19de5](https://github.com/scriptscat/scriptcat/commit/ad19de5c1793c8c079bedbf1b11c7c2ae27a469e)] (автор @cyfung1031)
- 🐛 Удалена логика очистки и оптимизирована логика checkuserscript ([#1113](https://github.com/scriptscat/scriptcat/issues/1113)) [[e635911](https://github.com/scriptscat/scriptcat/commit/e635911a3c11c3cb8acd1cfd507cb777e5ee7236)] (автор @CodFrm)

### Прочее

- 🏷️ Правки TypeScript ([#1127](https://github.com/scriptscat/scriptcat/issues/1127)) [[b455724](https://github.com/scriptscat/scriptcat/commit/b4557244191018c18d5ce8ea8e8627bcfb7f7cdd)] (автор @cyfung1031)
- 📝 Примеры комментариев ([#1131](https://github.com/scriptscat/scriptcat/issues/1131)) [[292549e](https://github.com/scriptscat/scriptcat/commit/292549ed0f65952fe9f269aace23eefc7d6a3a0f)] (автор @cyfung1031)

<a name="1.2.3"></a>

## 1.2.3 (2025-12-20)

Некоторые исправления ошибок

### Изменено

- ⚡ Оптимизация отображения времени следующего запуска [#1093](https://github.com/scriptscat/scriptcat/issues/1093) [[324ce51](https://github.com/scriptscat/scriptcat/commit/324ce515c84699ca8d3bf1ee447fc6ef0656ae0d)] (автор @CodFrm)

### Исправлено

- 🐛 Исправлена проблема сопоставления URL для ранних скриптов ([#1096](https://github.com/scriptscat/scriptcat/issues/1096)) [[a77effb](https://github.com/scriptscat/scriptcat/commit/a77effbab5ab4d1752065ef943d9c050ff99c066)] (автор @CodFrm)
- 🐛 Исправлена проблема слишком кратковременного отображения всплывающего окна обновления ([#1088](https://github.com/scriptscat/scriptcat/issues/1088)) [[b2b2d5c](https://github.com/scriptscat/scriptcat/commit/b2b2d5c41ff70ee5430f7d8d156f480ac8fc3a1a)] (автор @cyfung1031)
- 🐛 Исправлено аномальное отображение при включённых уведомлениях скриптов ([#1086](https://github.com/scriptscat/scriptcat/issues/1086)) ([959c4db](https://github.com/scriptscat/scriptcat/commit/959c4dbed92f7bfe22a2f8ebb775c4189b5ff076))
- 🐛 responseHeaders: `TM compatibility: \r\n` ([#1085](https://github.com/scriptscat/scriptcat/issues/1085)) [[15232c8](https://github.com/scriptscat/scriptcat/commit/15232c8543d93abfdafa1353d39d8a15d1dc385f)] (автор @cyfung1031)
- 🐛 Исправлены проблемы GM xhr ([#1082](https://github.com/scriptscat/scriptcat/issues/1082)) [[3d987c3](https://github.com/scriptscat/scriptcat/commit/3d987c300242a3c765146359c35ecd6d998f792c)] (автор @CodFrm)

### Прочее

- 🌐 Обработка i18n на страницах всплывающих окон [#1081](https://github.com/scriptscat/scriptcat/issues/1081) [[6b17d71](https://github.com/scriptscat/scriptcat/commit/6b17d7100e8572d72b3b7aaf8ea38be9cdf33f5f)] (автор @CodFrm)

<a name="1.2.2"></a>

## 1.2.2 (2025-12-13)

Некоторые исправления ошибок

### Исправлено

- 🐛 Исправлена частая фоновая синхронизация ([#1076](https://github.com/scriptscat/scriptcat/issues/1076)) [[45dc39b](https://github.com/scriptscat/scriptcat/commit/45dc39baa0f3326cf12e97312ab632dc46ba40f2)] (автор @CodFrm)
- 🐛 Исправлена обработка специальных вкладок [#1066](https://github.com/scriptscat/scriptcat/issues/1066) ([50904fb](https://github.com/scriptscat/scriptcat/commit/50904fb46efdea10fd57677bc2d28c770b47e861))
- 🐛 Исправлена обработка скриптов без правил match [#1071](https://github.com/scriptscat/scriptcat/issues/1071) ([560cdc0](https://github.com/scriptscat/scriptcat/commit/560cdc01fc0fc27fb7d0e3b877c63ba431206668))
- 🐛 Исправлена проблема упаковки CI, удалявшей фоновые дополнительные разрешения [[1f002f0](https://github.com/scriptscat/scriptcat/commit/1f002f0edf9892f023ae93b8522ff7c5e4a96559)] (автор @CodFrm)
- 🐛 Исправлена обработка отброшенных вкладок ([#1058](https://github.com/scriptscat/scriptcat/issues/1058)) [[6165bf4](https://github.com/scriptscat/scriptcat/commit/6165bf48eb1d53ede0561c85c30135446c2ff882)] (автор @cyfung1031)

<a name="1.2.1"></a>

## 1.2.1 (2025-12-06)

Некоторые исправления ошибок и обработка параметров фонового выполнения.

### Добавлено

- ✨ Добавлен параметр фонового выполнения ([#1048](https://github.com/scriptscat/scriptcat/issues/1048)) [[626e84d](https://github.com/scriptscat/scriptcat/commit/626e84dbd4dda0731e0a5ffdbdf71ae10e884489)] (автор @CodFrm)

### Исправлено

- 🐛 Исправлена проблема сброса слушателя сообщений, вызванная document.write ([#1055](https://github.com/scriptscat/scriptcat/issues/1055)) [[1f3a3ec](https://github.com/scriptscat/scriptcat/commit/1f3a3ec335ed4b519599e9aa3036c66b6f0d10b2)] (автор @CodFrm)
- 🐛 Исправлена функциональность фильтрации в табличном виде [[e272dc6](https://github.com/scriptscat/scriptcat/commit/e272dc6ed151c15a1ef785b70ae100cb9e74a5dd)] (автор @CodFrm)
- 🐛 Обработка UserAgentData на ранней стадии ([#1045](https://github.com/scriptscat/scriptcat/issues/1045)) [[b4e08a8](https://github.com/scriptscat/scriptcat/commit/b4e08a812a08f42037837bbee54610ebc565063f)] (автор @CodFrm)
- 🐛 Восстановление параметра useOpen для GM_openInTab [#1043](https://github.com/scriptscat/scriptcat/issues/1043) ([#1044](https://github.com/scriptscat/scriptcat/issues/1044)) [[7f30198](https://github.com/scriptscat/scriptcat/commit/7f30198909824871e694d5ffbe7088e44a6d0b45)] (автор @cyfung1031)
- 🐛 Исправлена проблема неопределённости userScripts ([#1041](https://github.com/scriptscat/scriptcat/issues/1041)) [[4f2deda](https://github.com/scriptscat/scriptcat/commit/4f2deda69aa6aae7f6e791be1cd965a440b80e33)] (автор @cyfung1031)
- 🐛 Исправлена некорректная ссылка на `"monaco-editor"` в `AppContext` ([#983](https://github.com/scriptscat/scriptcat/issues/983)) [[4b8dae1](https://github.com/scriptscat/scriptcat/commit/4b8dae1f49208d13c4d19c4c627762fc1b04ea5e)] (автор @cyfung1031)

**Полный журнал изменений:** [Сравнение v1.2.0...v1.2.1](https://github.com/scriptscat/scriptcat/compare/v1.2.0...v1.2.1)

<a name="1.2.0"></a>

## 1.2.0 (2025-11-29)

Это обновление включает боковую панель списка скриптов, карточный вид, улучшенную логику проверки обновлений, настройки редактора и многое другое. Значительно улучшена стабильность инжектирования и выполнения, исправлены критические проблемы CSP, песочницы, GM API, а также проведены оптимизации производительности и структуры.

Подробнее см. в журнале изменений v1.2.0-beta.x и документации [v1.2](https://docs.scriptcat.org/docs/change/v1.2/).

### 🚀 Основные новые функции

- ✨ Боковая панель списка скриптов [#794](https://github.com/scriptscat/scriptcat/issues/794) (автор @CodFrm)
- ✨ Карточный вид [#860](https://github.com/scriptscat/scriptcat/issues/860) (автор @CodFrm)
- ✨ Улучшенная логика проверки обновлений [#755](https://github.com/scriptscat/scriptcat/issues/755) (автор @cyfung1031)
- ✨ Настройки редактора и определения типов [#708](https://github.com/scriptscat/scriptcat/pull/708) (автор @CodFrm)
- ✨ Отображение количества скриптов во всплывающем окне ([#973](https://github.com/scriptscat/scriptcat/issues/973)) [[1134586](https://github.com/scriptscat/scriptcat/commit/1134586ff040ffc0cdddd3538e9ec493950c948a)] (автор @cyfung1031)
- ✨ Меню макета для скрытия боковой панели кода [#689](https://github.com/scriptscat/scriptcat/issues/689) [[dd64da7](https://github.com/scriptscat/scriptcat/commit/dd64da719c081acbf21645e2b1e1f38653ffae8c)]
- ✨ Кнопка проверки версии SC ([#795](https://github.com/scriptscat/scriptcat/issues/795)) [[1680c66](https://github.com/scriptscat/scriptcat/commit/1680c66099120c0e497c1a1f5321f38fe0160ea0)] (автор @cyfung1031)
- ✨ Страница опроса после удаления расширения [[6404c8f](https://github.com/scriptscat/scriptcat/commit/6404c8f74aff09b15725a92f8afdfc0d71ac188f)]

### 🧩 Изменения GM API

- ✨ Поддержка inject into, скрипты теперь могут инжектироваться в среду контента [#711](https://github.com/scriptscat/scriptcat/issues/711)
- ✨ GM_openInTab поддерживает фиксацию вкладки, открытие в окне инкогнито и другие параметры [#788](https://github.com/scriptscat/scriptcat/pull/788) (автор @cyfung1031)
- ✨ GM_registerMenuCommand поддерживает подменю и разделители [#831](https://github.com/scriptscat/scriptcat/pull/831) (автор @cyfung1031)
- 🗑 Удалён параметр useOpen из GM_openInTab [#867](https://github.com/scriptscat/scriptcat/pull/867)
- ♻️ Корректировка логики `@connect` ([#969](https://github.com/scriptscat/scriptcat/issues/969)) [[67914d2](https://github.com/scriptscat/scriptcat/commit/67914d2b7d57fa9c69706ae57ee5d3400c2643f9)] (автор @cyfung1031)
- ♻️ Рефакторинг `GM_xmlhttpRequest` и связанного кода ([#901](https://github.com/scriptscat/scriptcat/issues/901)) [[fabd2e9](https://github.com/scriptscat/scriptcat/commit/fabd2e944235b460bc73df346b79d23ee4540af7)] (автор @cyfung1031)

### Прочее

- ⚡️ Оптимизации стабильности и производительности
- 🐛 Исправлены различные проблемы
- ♻️ Оптимизация структуры кода
- 🌐 Улучшения интернационализации

**Полный журнал изменений:** [Сравнение v1.1.2...v1.2.0](https://github.com/scriptscat/scriptcat/compare/v1.1.2...v1.2.0)

<a name="1.1.2"></a>

## 1.1.2 (2025-09-18)

Исправления ошибок

### Исправлено

- 🐛 Исправлена проблема toString в песочнице [#737](https://github.com/scriptscat/scriptcat/issues/737) [[6ca24c9](https://github.com/scriptscat/scriptcat/commit/6ca24c9b171792035803ac4e1c69e473629f9d18)]
- 🐛 Исправлено отображение 0 на значке [[026c1d2](https://github.com/scriptscat/scriptcat/commit/026c1d2071dd4cfb6291f005d36717bcdf0a51c3)]
- 🐛 Исправлена проблема CSP при инжектировании скриптов [#739](https://github.com/scriptscat/scriptcat/issues/739) [#728](https://github.com/scriptscat/scriptcat/issues/728) [[5da21b5](https://github.com/scriptscat/scriptcat/commit/5da21b5e3d0e7e86a1fd5dff57ba03ea641c19fa)]
- 🐛 Исправлено не разворачивание фонового скрипта на странице всплывающего окна [[66ab70f](https://github.com/scriptscat/scriptcat/commit/66ab70fb10c28aaf0c9260a9591aab7e1ae35615)]
- 🐛 Улучшена проверка типов сообщений [#676](https://github.com/scriptscat/scriptcat/issues/676) [[5073795](https://github.com/scriptscat/scriptcat/commit/50737957507ff9af3aa9ba9a6b7d444b643d1ff2)]
- 🐛 Исправлена проблема GM xhr document [#716](https://github.com/scriptscat/scriptcat/issues/716) [[1c46546](https://github.com/scriptscat/scriptcat/commit/1c465462f4e14ae461d54358710f5caf74208af3)]

<a name="1.1.1"></a>

## 1.1.1 (2025-09-07)

### Добавлено

- ✨ Добавлены пользовательские настройки редактора и определения типов ([#708](https://github.com/scriptscat/scriptcat/issues/708)) [[49eb379](https://github.com/scriptscat/scriptcat/commit/49eb3794774790d61c3ef787c865a9ba6fe82841)]

### Исправлено

- 🐛 Исправлены проблемы совместимости со старыми версиями браузеров [#715](https://github.com/scriptscat/scriptcat/issues/715) [[4da8068](https://github.com/scriptscat/scriptcat/commit/4da806879c2b170672814d02e6f8ed98c9fae35b)]
- 💄 Оптимизация отображения всплывающего меню при маленьком размере окна ([288650e](https://github.com/scriptscat/scriptcat/commit/288650e5e4cbdc3fa8658f0754ce427a1b3dec5a))
- 🐛 Исправлены множественные проблемы ([#710](https://github.com/scriptscat/scriptcat/issues/710)) [[6a2027a](https://github.com/scriptscat/scriptcat/commit/6a2027ac0bb5e0ed625df570240d068a98a34b31)] (автор @WhiteSevs)

### Прочее

- 🌐 Обработка i18n [[2adf69d](https://github.com/scriptscat/scriptcat/commit/2adf69d6ec3c30186f2c2ef89f97e3cba9e15a66)]

<a name="1.1.0"></a>

## 1.1.0 (2025-09-07)

Множественные исправления ошибок и улучшения совместимости, добавлена поддержка Dropbox, новая функция @early-start для более быстрой загрузки. Подробнее см. в журнале изменений v1.1.0-beta.x.

### Добавлено

- ✨ Добавлены настройки среды выполнения скрипта [#628](https://github.com/scriptscat/scriptcat/issues/628) [[0d4a89e](https://github.com/scriptscat/scriptcat/commit/0d4a89efaecf0331dcc7fbb6df006b93a1525846)]
- ✨ Свёртывание по умолчанию при отсутствии фоновых скриптов [#626](https://github.com/scriptscat/scriptcat/issues/626) ([9d0aac6](https://github.com/scriptscat/scriptcat/commit/9d0aac6aae11b96707ca1f7c024a24e9d55f217b))
- ✨ Поддержка Dropbox [#575](https://github.com/scriptscat/scriptcat/issues/575) [[2c66f21](https://github.com/scriptscat/scriptcat/commit/2c66f21f5118bd83a0eaa0f1baa3a31f2233e5b2)]
- ✨ Оптимизация external.Tampermonkey для проверки установки SC [#703](https://github.com/scriptscat/scriptcat/issues/703) [[d0115c3](https://github.com/scriptscat/scriptcat/commit/d0115c33657260d803b6091139601b1b20407d4e)] (автор @cyfung1031)
- ✨ Добавлен @early-start для более быстрой загрузки [#649](https://github.com/scriptscat/scriptcat/issues/649) [[eb097dd](https://github.com/scriptscat/scriptcat/commit/eb097dd146dcd6f8ca712ed883571dbfb3d09f20)]
- ✨ Глобальный поиск в коде [#662](https://github.com/scriptscat/scriptcat/issues/662) [[f8eafb7](https://github.com/scriptscat/scriptcat/commit/f8eafb7f955dad62c1b41ac477e929bf00c65982)] (автор @RenjiYuusei)
- ✨ Страница опроса после удаления расширения [[6404c8f](https://github.com/scriptscat/scriptcat/commit/6404c8f74aff09b15725a92f8afdfc0d71ac188f)]
- 📝 Изменение страницы установки и пространства имён ([6f2f000](https://github.com/scriptscat/scriptcat/commit/6f2f000612908b7a88f6b70c2831092805c63bc7))
- ✨ QR-код для мобильной установки ([348237c](https://github.com/scriptscat/scriptcat/commit/348237c7ce9771c69025386926b1f73710cf6f42))

### Исправлено

- 🐛 Исправлена невозможность запуска установки без доступа к промежуточной странице [#705](https://github.com/scriptscat/scriptcat/issues/705) [[5f1e292](https://github.com/scriptscat/scriptcat/commit/5f1e2929d79c470ba4427c3cce01f5cd184a839b)]
- 🐛 Обработка `@match *://*domain/*` [[039b445](https://github.com/scriptscat/scriptcat/commit/039b4454148947cd3c74de82b87804ee9815e60c)]
- 🐛 Исправлена проблема проникновения из песочницы расширения [#700](https://github.com/scriptscat/scriptcat/issues/700) [[a1a868d](https://github.com/scriptscat/scriptcat/commit/a1a868dfe3199e666fe2bcb65cfb2ad0ad3d699b)]
- ✏️ backgroud → background ([#698](https://github.com/scriptscat/scriptcat/issues/698)) [[2594075](https://github.com/scriptscat/scriptcat/commit/2594075c4a50f4c79fa46bcda08d7b0cbcfe723c)] (автор @cyfung1031)
- ✏️ CrhomeStorage → ChromeStorage ([#693](https://github.com/scriptscat/scriptcat/issues/693)) [[64c536d](https://github.com/scriptscat/scriptcat/commit/64c536dbd5fcb4c29eebc1109202bab69aaa3ee2)] (автор @cyfung1031)
- 🐛 Исправлены GM.getTab и GM.getTabs ([#683](https://github.com/scriptscat/scriptcat/issues/683)) [[31de256](https://github.com/scriptscat/scriptcat/commit/31de256f02b5b61e27f0eec9ea673248ba8faa32)] (автор @WhiteSevs)
- 🐛 Исправлено отсутствие домена в finalUrl ([#656](https://github.com/scriptscat/scriptcat/issues/656)) [[545d7c8](https://github.com/scriptscat/scriptcat/commit/545d7c8c0dd69c83bd2f0353518aafe6af81c0f4)] (автор @cyfung1031)
- 🐛 Совместимость со старыми ядрами браузеров [#647](https://github.com/scriptscat/scriptcat/issues/647) [[0e2f817](https://github.com/scriptscat/scriptcat/commit/0e2f8173c8b44bd6ad44bdffc73fa302a96a058e)]
- 🐛 Оптимизация инъекции window.external ([#646](https://github.com/scriptscat/scriptcat/issues/646)) [[0b2668a](https://github.com/scriptscat/scriptcat/commit/0b2668aadcab35a33ff9abc4bd030dffb87ea168)] (автор @cyfung1031)
- 🐛 Исправлена невозможность автоматического закрытия страницы аутентификации облачного хранилища [[7748088](https://github.com/scriptscat/scriptcat/commit/7748088e63c1fc660b6a6ae5613cf04f9da99b8c)]
- 🐛 Исправлена неработоспособность `@connect *` [#623](https://github.com/scriptscat/scriptcat/issues/623) [[76481c8](https://github.com/scriptscat/scriptcat/commit/76481c845b34414a7f15ed18ec61f7dff7eef091)]
- 🐛 Добавлены юнит-тесты и исправлена проблема `@exclude` ([#618](https://github.com/scriptscat/scriptcat/issues/618)) [[0046bb7](https://github.com/scriptscat/scriptcat/commit/0046bb78800a2c46edaac785b8e9592327772a3b)] (автор @cyfung1031)
- 🐛 Исправлена невозможность установки скриптов по некоторым ссылкам .user.js [#599](https://github.com/scriptscat/scriptcat/issues/599) [[ccd2639](https://github.com/scriptscat/scriptcat/commit/ccd2639858f0f3cde28f284376fe8ed998d935ae)]
- 🐛 Исправлена ошибка создания нового скрипта [[d42d6e7](https://github.com/scriptscat/scriptcat/commit/d42d6e7d408a84674facf9ab0da6eac0e384502f)]
- 🐛 Исправлены метаданные ([#610](https://github.com/scriptscat/scriptcat/issues/610)) [[4d98cce](https://github.com/scriptscat/scriptcat/commit/4d98cce0ca1281cc58f551ea4e6700e340780d3f)] (автор @cyfung1031)
- 🐛 Исправлен Popup Badge ([#605](https://github.com/scriptscat/scriptcat/issues/605)) [[eff9230](https://github.com/scriptscat/scriptcat/commit/eff92309de99abb0cf48ef4727afaa113bc2fbb6)] (автор @cyfung1031)
- 🐛 Исправлен ScriptEditor.tsx ([#603](https://github.com/scriptscat/scriptcat/issues/603)) [[a9aadba](https://github.com/scriptscat/scriptcat/commit/a9aadba372b813c16bdc5f0aeb07c68981f48c63)] (автор @cyfung1031)
- 🐛 Исправлены CSS просмотрщика и редактора кода ([#602](https://github.com/scriptscat/scriptcat/issues/602)) [[2e86785](https://github.com/scriptscat/scriptcat/commit/2e8678513efaccd42c8dc2aa89f8b76679aa8420)] (автор @cyfung1031)
- 🐛 Исправлена проблема конкурентности getFaviconFromDomain ([#597](https://github.com/scriptscat/scriptcat/issues/597)) [[1872fe1](https://github.com/scriptscat/scriptcat/commit/1872fe165ab204b155a56f037c111d2d7776c2b9)] (автор @cyfung1031)
- 🐛 Исправлена ошибка открытия вкладки в нескольких окнах [#586](https://github.com/scriptscat/scriptcat/issues/586) [[54c1da2](https://github.com/scriptscat/scriptcat/commit/54c1da29c2bd8bd8f5ef2d85b7aed8b334de296f)]
- 🐛 Исправлена проблема совместимости openerTabId ([#586](https://github.com/scriptscat/scriptcat/issues/586)) [[b861fc8](https://github.com/scriptscat/scriptcat/commit/b861fc8620e53b885cad98db03f1dd10ec9d296c)] (автор @cyfung1031)

### Прочее

- 📝 Создание README_RU.md и CONTRIBUTING_RU.md ([#678](https://github.com/scriptscat/scriptcat/issues/678)) [[597ab03](https://github.com/scriptscat/scriptcat/commit/597ab0378fe5ced01637cf411326ef7845b8ce2b)] (автор @Ioann)
- 👷 Корректировки совместимости (совместимость pack.js) ([#669](https://github.com/scriptscat/scriptcat/issues/669)) [[fec45e6](https://github.com/scriptscat/scriptcat/commit/fec45e6606a609b10b79c58d2fcba02c2ce71e16)] (автор @cyfung1031)
- 🌐 Улучшение и расширение вьетнамского перевода ([#661](https://github.com/scriptscat/scriptcat/issues/661)) [[6847a59](https://github.com/scriptscat/scriptcat/commit/6847a596c4b06c75e13594ef60e4b9dfa5718cf3)] (автор @RenjiYuusei)
- 🌐 Исправления перевода ([#635](https://github.com/scriptscat/scriptcat/issues/635)) [[19296de](https://github.com/scriptscat/scriptcat/commit/19296de6a3815e5965eb33401a55da9b2bd22bb4)] (автор @cyfung1031)
- 🌐 Исправление i18n руководства по началу работы [#627](https://github.com/scriptscat/scriptcat/issues/627) [[9683f96](https://github.com/scriptscat/scriptcat/commit/9683f965400ab6a2bac15349aca4335911766eac)]
- 👷 Оптимизация кода pack.js ([#615](https://github.com/scriptscat/scriptcat/issues/615)) [[870dd9b](https://github.com/scriptscat/scriptcat/commit/870dd9bc6b7eff3eceefa915452e773ec0565180)] (автор @cyfung1031)
