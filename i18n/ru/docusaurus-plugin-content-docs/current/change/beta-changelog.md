---
title: Бета-журнал
---

import GithubStar from '@site/src/components/GithubStar';

<GithubStar variant="bar" scene="changelog" />

Версии ScriptCat делятся на две основные ветки: стабильные релизы и предрелизные версии. Для журнала стабильных релизов см.: [Журнал изменений](./index.md)

Предрелизные версии выпускаются до официальной стабильной версии. Обычно они используются для тестирования новых функций. Номера предрелизных версий содержат идентификатор предрелиза, например: `1.0.0-beta.1`.

Предрелизные версии можно получить со страницы [Release](https://github.com/scriptscat/scriptcat/releases) или из магазинов расширений ниже:

- [Chrome](https://chromewebstore.google.com/detail/%E8%84%9A%E6%9C%AC%E7%8C%AB-beta/jaehimmlecjmebpekkipmpmbpfhdacom?authuser=0&hl=zh-CN)
- [Edge](https://microsoftedge.microsoft.com/addons/detail/%E8%84%9A%E6%9C%AC%E7%8C%AB-beta/nimmbghgpcjmeniofmpdfkofcedcjpfi)
- [Firefox](https://addons.mozilla.org/zh-CN/firefox/addon/scriptcat-pre/)

Кроме того, помимо предрелизов, ScriptCat собирает расширение на [Github Action](https://github.com/scriptscat/scriptcat/actions/workflows/build.yaml) после каждого слияния коммита в основную ветку. Если вы хотите опробовать последние функции или исправления, скачайте их со страницы [Github Action](https://github.com/scriptscat/scriptcat/actions/workflows/build.yaml).

<a name="1.5.0-beta.1"></a>

## 1.5.0-beta.1 (2026-08-06)

Данный предрелиз выделяет две основные функции — **Внешний доступ (MCP-мост)** и **корзину скриптов** — официально поддерживает Firefox MV3, добавляет корейский, турецкий и бразильский португальский, а также исправляет множество проблем GM API, облачной синхронизации и редактора.

### 🚀 Основные новые функции

- 💥 Новая «Внешний доступ (MCP-мост)»: локальный демон `sctl` объединяет доступ CLI и MCP-клиентов; каждое чтение/запись скрипта защищена многоуровневой авторизацией и страницей подтверждения с тремя уровнями — Запретить / Разрешить / Разрешить на эту сессию — и каждая операция записывается в журнал аудита ([#1573](https://github.com/scriptscat/scriptcat/pull/1573)) (автор @cyfung1031)
- 💥 Корзина скриптов: удалённые скрипты сначала попадают в корзину с поддержкой восстановления (сохраняя исходные данные и разрешения), окончательного удаления и автоматической очистки по истечении срока; настройка срока хранения (по умолчанию 30 дней, или никогда) ([#1585](https://github.com/scriptscat/scriptcat/pull/1585)) (автор @CodFrm)
- 💥 Официальная поддержка Firefox MV3 с улучшенной коммуникацией песочницы/внеконтекстного пространства ([#1561](https://github.com/scriptscat/scriptcat/pull/1561)) (автор @cyfung1031)
- ✨ Быстрые действия по сайту во всплывающем окне ([#1646](https://github.com/scriptscat/scriptcat/pull/1646)) (автор @CodFrm)
- ✨ Расширяемое количество скриптов во всплывающем окне, отдельное от количества пунктов меню ([#1645](https://github.com/scriptscat/scriptcat/pull/1645)) (автор @CodFrm)
- ✨ Сервис иконок с уровнем «отключено» для полного отключения запросов favicon ([#1637](https://github.com/scriptscat/scriptcat/pull/1637)) (автор @CodFrm)
- ✨ Предупреждение о неопределённых мета-тегах в редакторе ([#1608](https://github.com/scriptscat/scriptcat/pull/1608)) (автор @cyfung1031)
- ✨ Полноценный бэкап/восстановление/импорт: конфиг ScriptCat/Tampermonkey/Violentmonkey + настройки + восстановление ресурсов ([#1554](https://github.com/scriptscat/scriptcat/pull/1554)) (автор @CodFrm)

### ♻️ Рефакторинг и совместимость

- ♻️ Рефакторинг клиента на официальном MCP SDK ([#1643](https://github.com/scriptscat/scriptcat/pull/1643)) (автор @CodFrm)

### 🐛 Исправления ошибок

- 🐛 Исправлено добавление пользовательских кук GM_xmlhttpRequest вместо перезаписи кук с тем же именем ([#1604](https://github.com/scriptscat/scriptcat/pull/1604)) (автор @cyfung1031)
- 🐛 Исправлена согласованность состояния синхронизации скриптов и безопасная обработка конфликтов провайдеров ([#1504](https://github.com/scriptscat/scriptcat/pull/1504)) (автор @cyfung1031)
- 🐛 Исправлена неработоспособность запланированной очистки логов ([#1599](https://github.com/scriptscat/scriptcat/pull/1599)) (автор @CodFrm)
- 🐛 Исправлено отсутствие времени выполнения context-menu в настройках скрипта ([#1652](https://github.com/scriptscat/scriptcat/pull/1652)) (автор @CodFrm)
- 🐛 Исправлена логика кнопки назад/закрытия вкладки на странице установки ([#1594](https://github.com/scriptscat/scriptcat/pull/1594)) (автор @cyfung1031)
- 🐛 Исправлено необновление заголовка вкладки после переименования сохранённого скрипта ([#1607](https://github.com/scriptscat/scriptcat/pull/1607)) (автор @cyfung1031)
- 🐛 Исправлено поведение focus window.focus и усилена проверка windowId ([#1577](https://github.com/scriptscat/scriptcat/pull/1577)) (автор @cyfung1031)
- 🐛 Исправлено скрытие кнопки закрытия активной вкладки редактора [#1556](https://github.com/scriptscat/scriptcat/issues/1556) (автор @CodFrm)
- 🐛 Исправлена навигационная защита для несохранённого контента редактора ([#1656](https://github.com/scriptscat/scriptcat/pull/1656)) (автор @CodFrm)
- 🐛 Исправлена формулировка подтверждения сохранения скрипта с таким же именем в корзине ([#1622](https://github.com/scriptscat/scriptcat/pull/1622)) (автор @CodFrm)
- 🐛 selfMetadata поддерживает пустые перезаписи: исправлены match/exclude/tag/run-at «удаление и восстановление» ([#1579](https://github.com/scriptscat/scriptcat/pull/1579)) (автор @CodFrm)

### 🎨 Улучшения интерфейса

- 💄 Исправлена адаптация Android: динамическая высота viewport + рефлоу таблиц/настроек/логов на узких экранах ([#1636](https://github.com/scriptscat/scriptcat/pull/1636)) (автор @RenjiYuusei)
- 💄 Добавлена компактная опция макета для всплывающего окна ([#1551](https://github.com/scriptscat/scriptcat/pull/1551)) (автор @cyfung1031)

### 🌐 Интернационализация

- 🌐 Добавлен корейский (ko-KR) перевод ([#1568](https://github.com/scriptscat/scriptcat/pull/1568)) (автор @moduvoice)
- 🌐 Добавлен турецкий (tr-TR) перевод ([#1557](https://github.com/scriptscat/scriptcat/pull/1557)) (автор @azizaktas)
- 🌐 Добавлен бразильский португальский (pt-BR) перевод ([#1587](https://github.com/scriptscat/scriptcat/pull/1587)) (автор @Lucas559-noob)
- 🌐 Заполнение chrome.i18n messages.json и языков редактора Monaco для pt-BR / tr-TR ([#1605](https://github.com/scriptscat/scriptcat/pull/1605)) (автор @CodFrm)

### Прочее

- ⬆️ Обновление зависимостей (включая TypeScript 6.0) и исправление предупреждений pnpm audit ([#1576](https://github.com/scriptscat/scriptcat/pull/1576), [#1567](https://github.com/scriptscat/scriptcat/pull/1567)) (автор @cyfung1031)
- Настройки синхронизации скриптов теперь сохраняются мгновенно ([#1615](https://github.com/scriptscat/scriptcat/pull/1615)) (автор @CodFrm)
- 📝 Улучшение описания магазина и слогана README для лучшей «поисковой видимости» скриптов ([#1553](https://github.com/scriptscat/scriptcat/pull/1553)) (автор @CodFrm)

<a name="1.5.0-beta"></a>

## 1.5.0-beta (2026-07-08)

Этот предрелиз представляет **полностью новый интерфейс** с более чистым, единообразным интерфейсом и более плавным общим опытом, а также специальные оптимизации для мобильных устройств. Кроме того, добавлен выбор типа скрипта из редактора, ручное скачивание для локальных резервных копий и другое, исправлены проблемы с невалидным часовым поясом запланированных задач и кросс-доменными проблемами нативного GM_download. Если у вас есть предложения по новому интерфейсу, присоединяйтесь к обсуждению на [GitHub](https://github.com/scriptscat/scriptcat/discussions).

### 🎨 Улучшения интерфейса

- ♻️ Полностью новый интерфейс: полная переработка интерфейса с улучшенной мобильной адаптацией ([#1514](https://github.com/scriptscat/scriptcat/pull/1514)) (автор @CodFrm)

### 🚀 Основные новые функции

- ✨ Кнопка «＋» на панели вкладок редактора поддерживает выбор типа нового скрипта ([#1544](https://github.com/scriptscat/scriptcat/pull/1544)) (автор @cyfung1031)
- ✨ Ссылка для ручного скачивания локальных резервных копий ([#1543](https://github.com/scriptscat/scriptcat/pull/1543)) (автор @cyfung1031)
- ✨ Включение сериализации structured_clone для сообщений расширения на Chromium 148+ ([#1534](https://github.com/scriptscat/scriptcat/pull/1534)) (автор @cyfung1031)
- ✨ Предрелизные (beta) версии теперь автоматически открывают страницу журнала изменений после обновления (автор @CodFrm)

### 🧩 Изменения GM API

- 🐛 Нативный GM_download теперь учитывает @connect, как и GM_xmlhttpRequest ([#1506](https://github.com/scriptscat/scriptcat/pull/1506)) (автор @DudeAint)

### ⚡️ Улучшения производительности

- ⚡️ Оптимизация кэша загрузки скриптов и исправление остаточных пунктов меню Popup ([#1511](https://github.com/scriptscat/scriptcat/pull/1511)) (автор @cyfung1031)

### 🧑‍💻 Редактор

- ♻️ Корректировка правил `eslint-plugin-userscripts` ([#1510](https://github.com/scriptscat/scriptcat/pull/1510)) (автор @cyfung1031)

### 🐛 Исправления ошибок

- 🐛 Устранение ошибок запланированных задач, вызванных автоопределением невалидного часового пояса в cron ([#1531](https://github.com/scriptscat/scriptcat/pull/1531)) (автор @cyfung1031)
- 🐛 Исправление недоступного демо API в примере crontab ([#1542](https://github.com/scriptscat/scriptcat/pull/1542)) (автор @cyfung1031)

### 🌐 Локализация

- 🌐 Добавлен турецкий язык (автор @azizaktas)

<a name="1.4.0-beta.4"></a>

## 1.4.0-beta.4 (2026-06-13)

Данный релиз исправляет макет всплывающего окна Edge Android, вспышку белого фона при начальной загрузке и ошибки кросс-доменных запросов при отсутствии разрешения на доступ к сайту; исправляет уязвимость загрязнения прототипов через недоверенные ключи YAML; рефакторинг обновления ресурсов и обработки ZIP; а также продолжает улучшать совместимость Firefox MV3 и локализацию.

### 🧑‍💻 Редактор

- ✨ Улучшены быстрые исправления Monaco и подсказки метаданных скриптов ([#1461](https://github.com/scriptscat/scriptcat/pull/1461)) (автор @cyfung1031)
- 🐛 Исправлены проблемы CSS-макета редактора ([#1460](https://github.com/scriptscat/scriptcat/pull/1460)) (автор @cyfung1031)

### 🐛 Исправления ошибок

- 🐛 Исправлен макет всплывающего окна Edge Android ([#686](https://github.com/scriptscat/scriptcat/issues/686)) ([#1507](https://github.com/scriptscat/scriptcat/pull/1507)) (автор @CodFrm)
- 🐛 Исправлена вспышка белого фона при начальной загрузке ([#1497](https://github.com/scriptscat/scriptcat/issues/1497)) ([#1498](https://github.com/scriptscat/scriptcat/pull/1498)) (автор @cyfung1031)
- 🐛 Исправлена ошибка кросс-доменных запросов при отсутствии разрешения ([#1477](https://github.com/scriptscat/scriptcat/pull/1477)) (автор @cyfung1031)
- 🐛 Исправлена некорректная очистка соединений сообщений (GM API / порты) ([#1474](https://github.com/scriptscat/scriptcat/pull/1474)) (автор @cyfung1031)
- 🐛 Исправлено несовпадение шаблонов @match при отсутствии search ([#1466](https://github.com/scriptscat/scriptcat/pull/1466)) (автор @cyfung1031)
- 🐛 Добавлены protoBaseDescs для исправления наследования классов в полусреде Tampermonkey ([#1463](https://github.com/scriptscat/scriptcat/pull/1463)) (автор @cyfung1031)

### 🔒 Улучшения безопасности

- 🔒 Исправлено загрязнение прототипов через недоверенные ключи YAML ([#1494](https://github.com/scriptscat/scriptcat/pull/1494)) (автор @qdzsh)

### ♻️ Рефакторинг и совместимость

- ♻️ Рефакторинг обновления ресурсов скриптов и управления параллельностью ([#1193](https://github.com/scriptscat/scriptcat/pull/1193)) (автор @cyfung1031)
- ♻️ Замена jszip на JSZipp для обработки ZIP ([#1479](https://github.com/scriptscat/scriptcat/pull/1479)) (автор @cyfung1031)
- ♻️ Улучшение совместимости Firefox MV3 ([#1457](https://github.com/scriptscat/scriptcat/pull/1457), [#1480](https://github.com/scriptscat/scriptcat/pull/1480)) (автор @cyfung1031)

### 🌐 Локализация

- 🌐 Исправлены многоязычные терминологические переводы ([#1468](https://github.com/scriptscat/scriptcat/pull/1468)) (автор @cyfung1031)

<a name="1.4.0-beta.3"></a>

## 1.4.0-beta.3 (2026-05-19)

Продолжая направление beta.2, этот релиз进一步 повышает надёжность облачной синхронизации, исправляет множество проблем ScriptEditor и GM xhr, а также добавляет форматирование Ctrl+Shift+F и возврат `@run-at context-menu`.

### 🚀 Основные новые функции

- ✨ Редактор: Ctrl+Shift+F для форматирования кода ([#1415](https://github.com/scriptscat/scriptcat/pull/1415)) (автор @cyfung1031)
- ✨ Возврат поддержки `@run-at context-menu` ([#1442](https://github.com/scriptscat/scriptcat/pull/1442)) (автор @cyfung1031)

### ⚡️ Улучшения производительности

- ⚡️ Оптимизация обработки pushValue ([#1403](https://github.com/scriptscat/scriptcat/pull/1403)) (автор @cyfung1031)

### 🐛 Исправления ошибок

- 🐛 Облачная синхронизация: загрузка нулевого размера OneDrive, нормализация ошибок Google Drive/OneDrive, пользовательские метаданные modifiedDate для S3 ([#1405](https://github.com/scriptscat/scriptcat/pull/1405)) ([#1406](https://github.com/scriptscat/scriptcat/pull/1406)) ([#1408](https://github.com/scriptscat/scriptcat/pull/1408)) (автор @cyfung1031)
- 🐛 WebDAV verify: удалена проверка записи для сервисов с недоступной корневой директорией ([#1445](https://github.com/scriptscat/scriptcat/pull/1445)) (автор @CodFrm)
- 🐛 Исправлена обработка null для msgConn в GM_xmlhttpRequest ([#1433](https://github.com/scriptscat/scriptcat/pull/1433)) (автор @cyfung1031)
- 🐛 Исправлена некорректная обработка onloadend в GM xhr ([#1412](https://github.com/scriptscat/scriptcat/pull/1412)) (автор @cyfung1031)
- 🐛 Исправлены динамическое обновление и отображение списка ScriptEditor ([#1414](https://github.com/scriptscat/scriptcat/pull/1414)) (автор @cyfung1031)
- 🐛 Исправлены проблемы взаимодействия в панели инструментов ScriptEditor ([#1417](https://github.com/scriptscat/scriptcat/pull/1417)) (автор @cyfung1031)
- 🐛 Исправлен код и Mock chrome.downloads.download ([#1410](https://github.com/scriptscat/scriptcat/pull/1410)) (автор @cyfung1031)
- 🐛 Исправлен closeWindow в src/pages/install/App.tsx ([#1435](https://github.com/scriptscat/scriptcat/pull/1435)) (автор @cyfung1031)
- 🐛 Добавлена граница события wheel в корневом макете ([#1431](https://github.com/scriptscat/scriptcat/pull/1431)) (автор @cyfung1031)
- 🐛 Дедупликация параллельных запросов начальной аутентификации ([#1437](https://github.com/scriptscat/scriptcat/pull/1437)) (автор @cyfung1031)
- 🐛 Рефакторинг encoding.ts для объединения и улучшения определения ([#1426](https://github.com/scriptscat/scriptcat/pull/1426)) (автор @cyfung1031)
- 🐛 Добавлена подсказка, чтобы меню было видно ([#1429](https://github.com/scriptscat/scriptcat/pull/1429)) (автор @cyfung1031)
- 🐛 Исправление overscroll-behavior ([#1413](https://github.com/scriptscat/scriptcat/pull/1413)) (автор @cyfung1031)
- 🐛 Скрытие кнопки обновления для скриптов без поддержки обновлений ([#1418](https://github.com/scriptscat/scriptcat/pull/1418)) (автор @cyfung1031)
- 🐛 Исправлены отсутствующие ссылки на ключи i18n ([#1422](https://github.com/scriptscat/scriptcat/pull/1422)) (автор @cyfung1031)
- 🐛 Добавлены `frames` в createContext песочницы ([#1428](https://github.com/scriptscat/scriptcat/pull/1428)) (автор @cyfung1031)
- 🐛 Исправлена ошибка компиляции SkillScript из-за отсутствующего поля isContextMenu (5fdc8e39) (автор @CodFrm)

### ♻️ Рефакторинг и совместимость

- ♻️ Перенос ресурсов установки в tempStorage chrome.storage.local; код в OPFS/temp_install_codes ([#1318](https://github.com/scriptscat/scriptcat/pull/1318)) (автор @cyfung1031)
- ♻️ Исправление двойного слеша от логики объединения путей ([#1432](https://github.com/scriptscat/scriptcat/pull/1432)) (автор @tomaioo)

### 🌐 Интернационализация

- 🌐 Улучшение японского перевода интерфейса с сопутствующими исправлениями для других языков ([#1419](https://github.com/scriptscat/scriptcat/pull/1419)) ([#1421](https://github.com/scriptscat/scriptcat/pull/1421)) (автор @GoodLight999, @cyfung1031)

<a name="1.4.0-beta.2"></a>

## 1.4.0-beta.2 (2026-05-06)

Данное обновление сосредоточено на **комплексном повышении надёжности облачной синхронизации**, **улучшении стабильности вызовов инструментов Агента** и многочисленных исправлениях интерфейса и выполнения скриптов, включая длительную утечку памяти.

### ⚡️ Улучшения производительности

- ⚡️ Удалена зависимость Baidu filesystem от глобальных правил DNR ([#1377](https://github.com/scriptscat/scriptcat/pull/1377)) (автор @cyfung1031)
- ⚡️ Оптимизация много платформенных поисковых систем ([#1379](https://github.com/scriptscat/scriptcat/pull/1379)) (автор @cyfung1031)
- ⚡️ Моноширинный шрифт для loadingStatus на странице установки ([#1381](https://github.com/scriptscat/scriptcat/pull/1381)) (автор @cyfung1031)
- ⚡️ Улучшение надёжности промптов Агента — проверка результатов, семантика бюджета, границы безопасности ([#1354](https://github.com/scriptscat/scriptcat/pull/1354)) (автор @cyfung1031)

### 🐛 Исправления ошибок

- 🚑 Исправлена потенциальная утечка памяти при длительной работе ScriptCat ([#1401](https://github.com/scriptscat/scriptcat/pull/1401)) (автор @cyfung1031)
- 🐛 Повышение надёжности облачной синхронизации ([#1374](https://github.com/scriptscat/scriptcat/pull/1374)) ([#1375](https://github.com/scriptscat/scriptcat/pull/1375)) ([#1376](https://github.com/scriptscat/scriptcat/pull/1376)) ([#1390](https://github.com/scriptscat/scriptcat/pull/1390)) ([#1391](https://github.com/scriptscat/scriptcat/pull/1391)) ([#1392](https://github.com/scriptscat/scriptcat/pull/1392)) ([#1393](https://github.com/scriptscat/scriptcat/pull/1393)) ([#1394](https://github.com/scriptscat/scriptcat/pull/1394)) ([#1395](https://github.com/scriptscat/scriptcat/pull/1395)) (автор @cyfung1031)
- 🐛 Корректное заполнение extensionEnv для isIncognito, userAgent и run-in ([#1368](https://github.com/scriptscat/scriptcat/pull/1368)) (автор @cyfung1031)
- 🐛 Исправлено частичное перекрытие кнопки руководства [#1396](https://github.com/scriptscat/scriptcat/issues/1396) ([#1398](https://github.com/scriptscat/scriptcat/pull/1398)) (автор @cyfung1031)
- 🐛 Исправлено перекрытие всплывающих подсказок [#1386](https://github.com/scriptscat/scriptcat/issues/1386) ([#1387](https://github.com/scriptscat/scriptcat/pull/1387)) (автор @Xdy1579883916)
- 🐛 Исправлены проблемы макета из-за боковой панели в карточном режиме [#1179](https://github.com/scriptscat/scriptcat/issues/1179) ([#1373](https://github.com/scriptscat/scriptcat/pull/1373)) (автор @cyfung1031)
- 🐛 Исправлен некорректный origin при установке перетаскиванием локальных файлов ([#1371](https://github.com/scriptscat/scriptcat/pull/1371)) (автор @cyfung1031)
- 🐛 Исправлено сообщение о переключении языка ([#1380](https://github.com/scriptscat/scriptcat/pull/1380)) (автор @cyfung1031)
- 🐛 Улучшен интерфейс отображения логов ([#1372](https://github.com/scriptscat/scriptcat/pull/1372)) (автор @cyfung1031)
- 🐛 Исправлена проблема количества session rules при параллельных xhr ([#1353](https://github.com/scriptscat/scriptcat/pull/1353)) (автор @cyfung1031)
- 🐛 Исправлена CSS панель UserConfigPanel ([#1361](https://github.com/scriptscat/scriptcat/pull/1361)) (автор @cyfung1031)
- 🐛 Использование Object.create(null) для пустых объектов ([#1397](https://github.com/scriptscat/scriptcat/pull/1397)) (автор @cyfung1031)
- 🐛 Исправлены ошибки конкатенации аргументов tool_call и перекрёстные помехи параллельных tool-call ([#1355](https://github.com/scriptscat/scriptcat/pull/1355)) (автор @cyfung1031)
- 🐛 Исправлена совместимость Агента с моделями рассуждений ([#1357](https://github.com/scriptscat/scriptcat/pull/1357)) (автор @cyfung1031)
- 🐛 Исправлена несогласованность контрактов web_fetch/web_search Агента (7bbd6d18) (автор @CodFrm)
- 🐛 Исправлено отсутствие расширенной среды в рантайме навыков Агента (e143c4a7) (автор @CodFrm)

### 🔒 Улучшения безопасности

- 🔒 Исправлены все уязвимости npm ([#1350](https://github.com/scriptscat/scriptcat/pull/1350)) ([#1364](https://github.com/scriptscat/scriptcat/pull/1364)) ([#1365](https://github.com/scriptscat/scriptcat/pull/1365)) (автор @cyfung1031)

### Прочее

- 🔥 Удалены Crowdin и данные псевдо-языка ach-UG ([#1385](https://github.com/scriptscat/scriptcat/pull/1385)) (автор @CodFrm)

<a name="1.4.0-beta.1"></a>

## 1.4.0-beta.1 (2026-04-07)

Главной особенностью этого релиза является **ScriptCat AI Agent** — встроенная система агентов на основе ИИ, которая может вызывать инструменты из экосистемы пользовательских скриптов через разговорное взаимодействие. Это обновление также добавляет поддержку тега `@unwrap`, событие `window.onurlchange`, улучшения меню редактора и множество исправлений ошибок.

### 🚀 Основные новые функции

- 💥 ScriptCat AI Agent — система агентов на основе ИИ с разговорным взаимодействием, вызовом инструментов, системой навыков, поддержкой протокола MCP и другим ([#1324](https://github.com/scriptscat/scriptcat/pull/1324)) (автор @CodFrm)
- ✨ Поддержка мета-тега `@unwrap` ([#1213](https://github.com/scriptscat/scriptcat/pull/1213)) (автор @cyfung1031)
- ✨ Реализация `window.onurlchange` TM через Navigation API ([#1315](https://github.com/scriptscat/scriptcat/pull/1315)) (автор @cyfung1031)

### 🧑‍💻 Редактор

- ✨ Контекстное меню редактора ([#1303](https://github.com/scriptscat/scriptcat/pull/1303)) (автор @CodFrm)
- 🐛 Исправлены сочетания клавиш Ctrl-F / Ctrl-H ([#1312](https://github.com/scriptscat/scriptcat/pull/1312)) (автор @cyfung1031)
- 🐛 Исправлена автоисправление ESLint [#1079](https://github.com/scriptscat/scriptcat/issues/1079) ([#1184](https://github.com/scriptscat/scriptcat/pull/1184)) (автор @cyfung1031)
- 🐛 Корректное отображение ошибок форматирования ([#1310](https://github.com/scriptscat/scriptcat/pull/1310)) (автор @cyfung1031)
- 🐛 Исправлены проблемы подсказок редактора кода ([#1301](https://github.com/scriptscat/scriptcat/pull/1301)) (автор @cyfung1031)

### ✨ Улучшения функциональности

- ✨ Много платформенные поисковые системы для поиска скриптов ([#1295](https://github.com/scriptscat/scriptcat/pull/1295)) (автор @CodFrm)
- ✨ Новые поставщики сервисов иконок ([#1333](https://github.com/scriptscat/scriptcat/pull/1333)) (автор @cyfung1031)
- ✨ Иконка проверки обновлений в столбце «последнее обновление» ([#1304](https://github.com/scriptscat/scriptcat/pull/1304)) (автор @CodFrm)
- ✨ Улучшена обработка конфликтов редактирования и имён ([#1223](https://github.com/scriptscat/scriptcat/pull/1223)) (автор @cyfung1031)

### 🐛 Исправления ошибок

- 🐛 Исправлен крах страницы из-за невалидного cron-выражения ([#1327](https://github.com/scriptscat/scriptcat/pull/1327)) (автор @cyfung1031)
- 🐛 Исправлена ошибка 406 при установке скриптов ([#1306](https://github.com/scriptscat/scriptcat/pull/1306)) (автор @cyfung1031)
- 🐛 Исправлен конфликт аутентификации cookie WebDAV ([#1308](https://github.com/scriptscat/scriptcat/pull/1308)) (автор @CodFrm)
- 🐛 Устройно-зависимые настройки в chrome.storage.local ([#1309](https://github.com/scriptscat/scriptcat/pull/1309)) (автор @CodFrm)
- 🐛 Исправлена логика тихого обновления и connect для подписанных скриптов ([#1201](https://github.com/scriptscat/scriptcat/pull/1201)) (автор @cyfung1031)
- 🐛 Исправлена массовая проверка обновлений скриптов ([#1265](https://github.com/scriptscat/scriptcat/pull/1265)) (автор @cyfung1031)
- 🐛 Исправлено необновление времени в кнопке запроса логов ([#1294](https://github.com/scriptscat/scriptcat/pull/1294)) (автор @CodFrm)
- 🐛 Исправлено обрезание всплывающего окна выбора даты ([#1292](https://github.com/scriptscat/scriptcat/pull/1292)) (автор @cyfung1031)
- 🐛 Исправлено отображение кнопки отключения ([#1291](https://github.com/scriptscat/scriptcat/pull/1291)) (автор @CodFrm)
- 🐛 Исправлено отображение списка скриптов ScriptEditor в светлой теме ([#1288](https://github.com/scriptscat/scriptcat/pull/1288)) (автор @CodFrm)
- 🐛 Исправлено перекрытие всплывающего окна ([#1290](https://github.com/scriptscat/scriptcat/pull/1290)) (автор @cyfung1031)

## 1.4.0-beta (2026-03-13)

### 🐛 Исправления ошибок

- 🚑 Исправлена ошибка определения среды [#1280](https://github.com/scriptscat/scriptcat/issues/1280) ([#1281](https://github.com/scriptscat/scriptcat/pull/1281)) (автор @CodFrm)
- 🐛 Исправлены и улучшены проблемы ScriptEditor ([#1258](https://github.com/scriptscat/scriptcat/pull/1258)) (автор @cyfung1031)
- 🐛 Исправлены повторные перезапуски из-за конфликта проверки разрешений инкогнито (6c308f60) (автор @CodFrm)
- 🐛 Исправлены проблемы страницы подтверждения ([#1275](https://github.com/scriptscat/scriptcat/pull/1275)) (автор @cyfung1031)
- 🐛 Исправлена обработка `*?*` [#1271](https://github.com/scriptscat/scriptcat/issues/1271) ([#1272](https://github.com/scriptscat/scriptcat/pull/1272)) (автор @CodFrm)
- 🐛 Исправлена неработающая панель управления разрешениями ([#1267](https://github.com/scriptscat/scriptcat/pull/1267)) (автор @CodFrm)

### 🔒 Улучшения безопасности

- 🔒 Очистка HTML-содержимого уведомлений с помощью DOMPurify ([#1274](https://github.com/scriptscat/scriptcat/pull/1274)) (автор @CodFrm)

### Прочее

- ✅ Добавлены E2E-тесты Playwright и функциональные тесты GM API ([#1283](https://github.com/scriptscat/scriptcat/pull/1283)) (автор @CodFrm)
- 📄 Обновление URL Chrome Web Store ([#1279](https://github.com/scriptscat/scriptcat/pull/1279)) (автор @theluckystrike)

## 1.3.0-beta.4 (2026-02-19)

### Добавлено

- ✨ Добавлено хранилище Amazon S3 [#1146](https://github.com/scriptscat/scriptcat/issues/1146) ([#1189](https://github.com/scriptscat/scriptcat/pull/1189)) (автор @CodFrm)
- ✨ Корректировка позиции скрытой панели редактора [#1185](https://github.com/scriptscat/scriptcat/issues/1185) ([#1254](https://github.com/scriptscat/scriptcat/pull/1254)) (автор @CodFrm)
- ✨ Принятие пустого `@version` ([#1216](https://github.com/scriptscat/scriptcat/pull/1216)) (автор @cyfung1031)

### Исправлено

- 🐛 Исправлено открытие страницы уведомления о журнале ([#1266](https://github.com/scriptscat/scriptcat/pull/1266)) (автор @CodFrm)
- 🐛 Исправлена неработоспособность unregister ([#1231](https://github.com/scriptscat/scriptcat/pull/1231)) (автор @cyfung1031)
- 🐛 Исправлена проблема GM_addElement ([#1233](https://github.com/scriptscat/scriptcat/pull/1233)) (автор @cyfung1031)
- 🐛 Рефакторинг DraggableEntry, исправление выравнивания карточек ([#1245](https://github.com/scriptscat/scriptcat/pull/1245)) (автор @cyfung1031)
- 🐛 Исправлено следование всплывающего окна за прокруткой ([#1263](https://github.com/scriptscat/scriptcat/pull/1263)) (автор @cyfung1031) ([#1259](https://github.com/scriptscat/scriptcat/pull/1259)) (автор @cyfung1031)
- 🐛 Исправлены утечка памяти и утечка свойств ([#1242](https://github.com/scriptscat/scriptcat/pull/1242)) (автор @cyfung1031) ([#1260](https://github.com/scriptscat/scriptcat/pull/1260)) (автор @cyfung1031)
- 🐛 Добавлен параметр conflictAction в GM_download ([#1250](https://github.com/scriptscat/scriptcat/pull/1250)) (автор @cyfung1031)
- 🐛 Исправлен парсинг ссылки установки [#1235](https://github.com/scriptscat/scriptcat/issues/1235) ([#1238](https://github.com/scriptscat/scriptcat/pull/1238)) (автор @cyfung1031)
- 🐛 Исправлена задержка при перетаскивании [#1224](https://github.com/scriptscat/scriptcat/issues/1224) ([#1243](https://github.com/scriptscat/scriptcat/pull/1243)) (автор @CodFrm)
- 🐛 Исправлены проблемы с subscribeUrl в installScript ([#1218](https://github.com/scriptscat/scriptcat/pull/1218)) (автор @cyfung1031)
- 🐛 Исправлена проблема анимации ScriptCard ([#1234](https://github.com/scriptscat/scriptcat/pull/1234)) (автор @cyfung1031)
- 🐛 Исправлены hide_sidebar и show_main_sidebar ([#1225](https://github.com/scriptscat/scriptcat/pull/1225)) (автор @cyfung1031)
- 🐛 Исправлена неработоспособность внешнего API ([#1217](https://github.com/scriptscat/scriptcat/pull/1217)) (автор @cyfung1031)
- 🐛 Исправлена поддержка папок в имени файла скачивания ([#1203](https://github.com/scriptscat/scriptcat/pull/1203)) (автор @cyfung1031)

<a name="1.3.0-beta.3"></a>

## 1.3.0-beta.3 (2026-02-07)

### Добавлено

- ✨ Изменения, связанные с Cron: исправление ошибок, i18n, улучшение выражений once, обновление библиотеки ([#1126](https://github.com/scriptscat/scriptcat/issues/1126)) (автор @cyfung1031)

### Изменено

- ♻️ Рефакторинг системы сообщений ([#1067](https://github.com/scriptscat/scriptcat/issues/1067)) (автор @cyfung1031)
- ⚡ Улучшение декодирования текста ([#1166](https://github.com/scriptscat/scriptcat/issues/1166)) (автор @cyfung1031)
- ⬆️ Обновление совместимой версии ядра swc ([#1186](https://github.com/scriptscat/scriptcat/issues/1186)) (автор @cyfung1031)
- 🎨 Улучшение определения кодировки ([#1140](https://github.com/scriptscat/scriptcat/issues/1140)) (автор @cyfung1031)

### Удалено

- 🔥 Удалена зависимость pako из package.json ([#1188](https://github.com/scriptscat/scriptcat/issues/1188)) (автор @cyfung1031)

### Исправлено

- 🐛 Обработка кодировки скриптов [#1115](https://github.com/scriptscat/scriptcat/issues/1115) ([#1138](https://github.com/scriptscat/scriptcat/issues/1138)) (автор @CodFrm)
- 🐛 Обработка ссылок на значения [#1141](https://github.com/scriptscat/scriptcat/issues/1141) ([#1147](https://github.com/scriptscat/scriptcat/issues/1147)) (автор @CodFrm)
- 🐛 Исправлена логика отрисовки кнопок ([#1153](https://github.com/scriptscat/scriptcat/issues/1153)) (автор @cyfung1031)
- 🐛 Исправлена невозможность непрерывного мониторинга FileSystemObserver ([#1160](https://github.com/scriptscat/scriptcat/issues/1160)) (автор @cyfung1031)
- 🐛 Совместимость с TM `@match www.website.com/*` ([#1165](https://github.com/scriptscat/scriptcat/issues/1165)) (автор @cyfung1031)
- 🐛 Исправлены асинхронные объявления GM API ([#1169](https://github.com/scriptscat/scriptcat/issues/1169)) (автор @cyfung1031)
- 🐛 Исправлено отсутствие UserAgentData в content.js ([#1183](https://github.com/scriptscat/scriptcat/issues/1183)) (автор @cyfung1031)
- 🐛 Исправлена ошибка structuredClone в 1.2.5 ([#1192](https://github.com/scriptscat/scriptcat/issues/1192)) (автор @cyfung1031)
- 🐛 Исправлены проблемы grant ([#1199](https://github.com/scriptscat/scriptcat/issues/1199)) (автор @CodFrm)

<a name="1.3.0-beta.2"></a>

## 1.3.0-beta.2 (2026-01-07)

### Добавлено

- ✨ Синхронизация удаления теперь отключена по умолчанию ([#958](https://github.com/scriptscat/scriptcat/issues/958)) [[9c4c7dc](https://github.com/scriptscat/scriptcat/commit/9c4c7dc411357746db43a306d97ac41a71f2b49c)] (автор @cyfung1031)
- ✨ Редактор поддерживает GM.* ([#1129](https://github.com/scriptscat/scriptcat/issues/1129)) [[bea0192](https://github.com/scriptscat/scriptcat/commit/bea0192c6cc50eff2ed4e1cc5dcc25f36bbe10e7)] (автор @cyfung1031)

### Изменено

- ♻️ Оптимизация логики открытия журнала [#1110](https://github.com/scriptscat/scriptcat/issues/1110) [[d3ffedc](https://github.com/scriptscat/scriptcat/commit/d3ffedcffe752ca548f87f1640072fcd871b8604)] (автор @CodFrm)

### Исправлено

- 🐛 Исправлено отображение иконки скрипта [#1052](https://github.com/scriptscat/scriptcat/issues/1052) ([#1104](https://github.com/scriptscat/scriptcat/issues/1104)) [[2e5c601](https://github.com/scriptscat/scriptcat/commit/2e5c601274fa27aa67b49ef9d352e3a1c3975979)] (автор @CodFrm)
- 🐛 Исправления scriptcat.d.tpl и типов ([#1130](https://github.com/scriptscat/scriptcat/issues/1130)) [[dd22ef5](https://github.com/scriptscat/scriptcat/commit/dd22ef544684d69e24a7aae098cb05cbab03daa8)] (автор @cyfung1031)
- 🐛 Исправлена облачная синхронизация ([#1133](https://github.com/scriptscat/scriptcat/issues/1133)) [[a9383d2](https://github.com/scriptscat/scriptcat/commit/a9383d2012eb3953dc33c8886ce3891f404fa100)] (автор @CodFrm)
- 🐛 Исправлена ошибка GM_addElement("tagName") ([#1120](https://github.com/scriptscat/scriptcat/issues/1120)) [[ad19de5](https://github.com/scriptscat/scriptcat/commit/ad19de5c1793c8c079bedbf1b11c7c2ae27a469e)] (автор @cyfung1031)
- 🐛 Удалена логика очистки и оптимизирован checkuserscript ([#1113](https://github.com/scriptscat/scriptcat/issues/1113)) [[e635911](https://github.com/scriptscat/scriptcat/commit/e635911a3c11c3cb8acd1cfd507cb777e5ee7236)] (автор @CodFrm)

### Прочее

- 🏷️ Правки TypeScript ([#1127](https://github.com/scriptscat/scriptcat/issues/1127)) [[b455724](https://github.com/scriptscat/scriptcat/commit/b4557244191018c18d5ce8ea8e8627bcfb7f7cdd)] (автор @cyfung1031)
- 📝 Примеры комментариев ([#1131](https://github.com/scriptscat/scriptcat/issues/1131)) [[292549e](https://github.com/scriptscat/scriptcat/commit/292549ed0f65952fe9f269aace23eefc7d6a3a0f)] (автор @cyfung1031)

<a name="1.3.0-beta.1"></a>

## 1.3.0-beta.1 (2025-12-21)

### Добавлено

- ✨ Оптимизация настроек Monaco Editor, добавление исправления `/* global xxx */` ([#1012](https://github.com/scriptscat/scriptcat/issues/1012)) [[b1a738d](https://github.com/scriptscat/scriptcat/commit/b1a738d98b5e852993da322d56dbfa20f68d20e3)] (автор @cyfung1031)

### Изменено

- ⚡ Перенос метаданных из chrome.storage.session ([#1027](https://github.com/scriptscat/scriptcat/issues/1027)) [[9c81f6c](https://github.com/scriptscat/scriptcat/commit/9c81f6c42b087411669adef35df30714e184ee93)] (автор @cyfung1031)
- ⚡ Оптимизация отображения времени следующего запуска [#1093](https://github.com/scriptscat/scriptcat/issues/1093) [[324ce51](https://github.com/scriptscat/scriptcat/commit/324ce515c84699ca8d3bf1ee447fc6ef0656ae0d)] (автор @CodFrm)

### Исправлено

- 🐛 Исправлены проблемы всплывающего окна ([#1100](https://github.com/scriptscat/scriptcat/issues/1100)) [[9c67e4a](https://github.com/scriptscat/scriptcat/commit/9c67e4a2c609f8c1ef82c493bb1ed68da6396d2e)] (автор @CodFrm)
- 🐛 Исправлена ошибка типа [[f5a73c7](https://github.com/scriptscat/scriptcat/commit/f5a73c71649621e519b32630ae7717411732aa50)] (автор @CodFrm)
- 🐛 Исправлена проблема широких символов в английских логах ([#1095](https://github.com/scriptscat/scriptcat/issues/1095)) [[a68b100](https://github.com/scriptscat/scriptcat/commit/a68b10048cb01a8e26fe8d524102bfb23ed4e179)] (автор @cyfung1031)
- 🐛 Добавлен UnoCSS-префикс ([#1013](https://github.com/scriptscat/scriptcat/issues/1013)) [[723e64c](https://github.com/scriptscat/scriptcat/commit/723e64cc0c23763dfed322e907c0a960c4f9060e)] (автор @cyfung1031)
- 🐛 Исправлена проблема сопоставления URL ранних скриптов ([#1096](https://github.com/scriptscat/scriptcat/issues/1096)) [[a77effb](https://github.com/scriptscat/scriptcat/commit/a77effbab5ab4d1752065ef943d9c050ff99c066)] (автор @CodFrm)
- 🐛 Исправлено слишком кратковременное отображение окна обновления ([#1088](https://github.com/scriptscat/scriptcat/issues/1088)) [[b2b2d5c](https://github.com/scriptscat/scriptcat/commit/b2b2d5c41ff70ee5430f7d8d156f480ac8fc3a1a)] (автор @cyfung1031)
- 🐛 Исправлено аномальное отображение при уведомлениях ([#1086](https://github.com/scriptscat/scriptcat/issues/1086)) ([959c4db](https://github.com/scriptscat/scriptcat/commit/959c4dbed92f7bfe22a2f8ebb775c4189b5ff076))
- 🐛 responseHeaders: `TM compatibility: \r\n` ([#1085](https://github.com/scriptscat/scriptcat/issues/1085)) [[15232c8](https://github.com/scriptscat/scriptcat/commit/15232c8543d93abfdafa1353d39d8a15d1dc385f)] (автор @cyfung1031)
- 🐛 Исправлены GM xhr ([#1082](https://github.com/scriptscat/scriptcat/issues/1082)) [[3d987c3](https://github.com/scriptscat/scriptcat/commit/3d987c300242a3c765146359c35ecd6d998f792c)] (автор @CodFrm)
- 🐛 Исправлена частая фоновая синхронизация ([#1076](https://github.com/scriptscat/scriptcat/issues/1076)) [[45dc39b](https://github.com/scriptscat/scriptcat/commit/45dc39baa0f3326cf12e97312ab632dc46ba40f2)] (автор @CodFrm)
- 🐛 Исправлена обработка специальных вкладок [#1066](https://github.com/scriptscat/scriptcat/issues/1066) ([50904fb](https://github.com/scriptscat/scriptcat/commit/50904fb46efdea10fd57677bc2d28c770b47e861))
- 🐛 Исправлена обработка скриптов без match [#1071](https://github.com/scriptscat/scriptcat/issues/1071) ([560cdc0](https://github.com/scriptscat/scriptcat/commit/560cdc01fc0fc27fb7d0e3b877c63ba431206668))
- 🐛 Исправлена проблема CI упаковки [[1f002f0](https://github.com/scriptscat/scriptcat/commit/1f002f0edf9892f023ae93b8522ff7c5e4a96559)] (автор @CodFrm)
- 🐛 Исправлена обработка отброшенных вкладок ([#1058](https://github.com/scriptscat/scriptcat/issues/1058)) [[6165bf4](https://github.com/scriptscat/scriptcat/commit/6165bf48eb1d53ede0561c85c30135446c2ff882)] (автор @cyfung1031)

<a name="1.3.0-beta"></a>

## 1.3.0-beta (2025-12-13)

### Добавлено

- ✨ Новая логика установки скриптов ([#842](https://github.com/scriptscat/scriptcat/issues/842)) ([80d342e](https://github.com/scriptscat/scriptcat/commit/80d342e80c9c1b36f88b7dcd4c65c663bb1d9185))
- ✨ Многоязычные подсказки Monaco и добавление подсказки `@require-css` ([#960](https://github.com/scriptscat/scriptcat/issues/960)) [[51a6f94](https://github.com/scriptscat/scriptcat/commit/51a6f94be3a430691f73057eae61a3814560a5b3)] (автор @cyfung1031)
- ✨ Исправлена проверка конфликтов @grant ([#902](https://github.com/scriptscat/scriptcat/issues/902)) [[8fbd0f1](https://github.com/scriptscat/scriptcat/commit/8fbd0f1041f5c5dcdb5a515348a5f54934acfdc7)] (автор @cyfung1031)
- ✨ @noframes по умолчанию в шаблоне ([#900](https://github.com/scriptscat/scriptcat/issues/900)) [[c9d5840](https://github.com/scriptscat/scriptcat/commit/c9d584066ff2395112b9a930aaa409cda764a5e6)] (автор @cyfung1031)
- ✨ Предотвращение неверного определения ссылки установки ([#824](https://github.com/scriptscat/scriptcat/issues/824)) [[5c7a5dd](https://github.com/scriptscat/scriptcat/commit/5c7a5ddc81e3bd1dd0a71cc80460a5239178c1de)] (автор @cyfung1031)
- ✨ Параметры времени выполнения скрипта ([#895](https://github.com/scriptscat/scriptcat/issues/895)) [[b0ea187](https://github.com/scriptscat/scriptcat/commit/b0ea187c2e6d69b60c981aa9b4d068fed7c2c2a2)] (автор @CodFrm)
- ✨ Серый значок при отключённом скрипте [#897](https://github.com/scriptscat/scriptcat/issues/897) ([3e406dc](https://github.com/scriptscat/scriptcat/commit/3e406dc4562adf7d7f3b79b52623b87e87ef1ad3))
- ✨ Оптимизация взаимодействия при нулевом количестве пунктов меню [#868](https://github.com/scriptscat/scriptcat/issues/868) ([da24ac2](https://github.com/scriptscat/scriptcat/commit/da24ac234f0eeae0159dce6c2b346d06fb72eaa5))

### Изменено

- ♻️ Совместимость Firefox: GM_setClipboard ([#928](https://github.com/scriptscat/scriptcat/issues/928)) [[d1a5cb1](https://github.com/scriptscat/scriptcat/commit/d1a5cb19dc4e05fac838258d15c48cc6f876d416)] (автор @cyfung1031)
- ♻️ Корректировка userScripts / scripting API ([#925](https://github.com/scriptscat/scriptcat/issues/925)) [[43bc40f](https://github.com/scriptscat/scriptcat/commit/43bc40ff5da5ef36a13564504293f1928138cf12)] (автор @cyfung1031)
- ♻️ Рефакторинг загрузки иконок скриптов ([#893](https://github.com/scriptscat/scriptcat/issues/893)) ([ab36c86](https://github.com/scriptscat/scriptcat/commit/ab36c86b5d031b88e71fbf9151696a42acba86fa))
- ⚡ Оптимизация parseMetadata ([#903](https://github.com/scriptscat/scriptcat/issues/903)) [[0efc648](https://github.com/scriptscat/scriptcat/commit/0efc648257f74591765869dedee5d98f8a1dc610)] (автор @cyfung1031)
- 🎨 Число на значке расширения — количество скриптов [#989](https://github.com/scriptscat/scriptcat/issues/989) [[70f67b6](https://github.com/scriptscat/scriptcat/commit/70f67b6bd8cf803d7a18bf26fdccdfa6f8a92893)] (автор @CodFrm)
- 🐛 Импорт и экспорт — исправлена дата последнего изменения ([#951](https://github.com/scriptscat/scriptcat/issues/951)) ([6e7272f](https://github.com/scriptscat/scriptcat/commit/6e7272f52ef2d49d9fceb3e30babfee1cbd72e75))

### Исправлено

- 🐛 Очистка Alarm при нерегулярных проверках ([#996](https://github.com/scriptscat/scriptcat/issues/996)) [[8bb9a2d](https://github.com/scriptscat/scriptcat/commit/8bb9a2d5741acb7d547e743c7bef8a2139f1401a)] (автор @cyfung1031)
- ✨ Установка без доступа к внешним сайтам ([#842](https://github.com/scriptscat/scriptcat/issues/842)) ([80d342e](https://github.com/scriptscat/scriptcat/commit/80d342e80c9c1b36f88b7dcd4c65c663bb1d9185))
- 🐛 Добавлен UnoCSS-префикс ([#1013](https://github.com/scriptscat/scriptcat/issues/1013)) [[723e64c](https://github.com/scriptscat/scriptcat/commit/723e64cc0c23763dfed322e907c0a960c4f9060e)] (автор @cyfung1031)
- 🐛 Оптимизация systemconfig и исправление i18n в SW ([#976](https://github.com/scriptscat/scriptcat/issues/976)) [[c50fcf7](https://github.com/scriptscat/scriptcat/commit/c50fcf7770df633462c2f25f8cf22d302002ec57)] (автор @CodFrm)
- 🐛 Исправлены ошибки типов ([#975](https://github.com/scriptscat/scriptcat/issues/975)) [[7d85856](https://github.com/scriptscat/scriptcat/commit/7d8585687c71cde1c2793d742abb7c22d9d358f0)] (автор @cyfung1031)

<a name="1.2.0-beta.5"></a>

## 1.2.0-beta.5 (2025-11-17)

### Добавлено

- ✨ Количество скриптов во всплывающем окне ([#973](https://github.com/scriptscat/scriptcat/issues/973)) [[1134586](https://github.com/scriptscat/scriptcat/commit/1134586ff040ffc0cdddd3538e9ec493950c948a)] (автор @cyfung1031)

### Изменено

- ⚡ Обработка check_script_update_cycle ([#906](https://github.com/scriptscat/scriptcat/issues/906)) [[760562f](https://github.com/scriptscat/scriptcat/commit/760562f92ad64bc538873b2ca61dfafe067c3f6e)] (автор @cyfung1031)
- ♻️ Рефакторинг inject & content ([#952](https://github.com/scriptscat/scriptcat/issues/952)) [[0554159](https://github.com/scriptscat/scriptcat/commit/0554159c105606192d48e1153194e09314d43bc9)] (автор @cyfung1031)
- 🎨 Упрощение messageFlag ([#926](https://github.com/scriptscat/scriptcat/issues/926)) [[d725d85](https://github.com/scriptscat/scriptcat/commit/d725d85a2f4917c08f6d3daa035a45fd15d12451)] (автор @cyfung1031)
- ♻️ Рефакторинг GM_xmlhttpRequest ([#901](https://github.com/scriptscat/scriptcat/issues/901)) [[fabd2e9](https://github.com/scriptscat/scriptcat/commit/fabd2e944235b460bc73df346b79d23ee4540af7)] (автор @cyfung1031)

### Исправлено

- 🐛 Исправлена повреждённая песочница ([#966](https://github.com/scriptscat/scriptcat/issues/966)) [[dd80386](https://github.com/scriptscat/scriptcat/commit/dd8038666481d1319dd0f8ab80f79f1b13c1730d)] (автор @cyfung1031)
- 🐛 Исправлена неопределённость valueChangeListener.clear ([#970](https://github.com/scriptscat/scriptcat/issues/970)) [[2a399e9](https://github.com/scriptscat/scriptcat/commit/2a399e96a1e848f2f569566479b48dcee280f543)] (автор @cyfung1031)
- 🐛 Корректировка логики @connect ([#969](https://github.com/scriptscat/scriptcat/issues/969)) [[67914d2](https://github.com/scriptscat/scriptcat/commit/67914d2b7d57fa9c69706ae57ee5d3400c2643f9)] (автор @cyfung1031)
- 🐛 Исправлена обработка i18n в service worker [#956](https://github.com/scriptscat/scriptcat/issues/956) [[843e618](https://github.com/scriptscat/scriptcat/commit/843e618daf13ec659cc16759c5de13dacf23c534)] (автор @CodFrm)
- 🐛 Исправлена проблема deleteValue/deleteValues ([#943](https://github.com/scriptscat/scriptcat/issues/943)) [[3d92bfb](https://github.com/scriptscat/scriptcat/commit/3d92bfb4a0334ffd2c279a1e6d33e98eed0a1a81)] (автор @cyfung1031)
- 🐛 Исправлена невозможность установки скриптов по ссылке GitHub ([#877](https://github.com/scriptscat/scriptcat/issues/877)) [[b9268e7](https://github.com/scriptscat/scriptcat/commit/b9268e7207081fcaa4591c9e1385f98446ade04a)] (автор @cyfung1031)
- 🐛 Исправлена неработоспособность @connect * ([#967](https://github.com/scriptscat/scriptcat/issues/967)) [[6bcb93c](https://github.com/scriptscat/scriptcat/commit/6bcb93c20c9690a2ce4f50d0978948e20ba407b8)] (автор @cyfung1031)

### Прочее

- 🌐 Обновления переводов ([#920](https://github.com/scriptscat/scriptcat/issues/920)) [[ede013b](https://github.com/scriptscat/scriptcat/commit/ede013b8e725ddefa626e3e432cbaee756535259)] (автор @cyfung1031)

<a name="1.2.0-beta.4"></a>

## 1.2.0-beta.4 (2025-11-07)

### Добавлено

- ✨ Подсказка для карточного режима ([#894](https://github.com/scriptscat/scriptcat/issues/894)) [[0627a0f](https://github.com/scriptscat/scriptcat/commit/0627a0faacf3a41645e985ec6f6960568427d5a4)] (автор @CodFrm)

### Изменено

- ♻️ Рефакторинг EarlyStart ([#882](https://github.com/scriptscat/scriptcat/issues/882)) [[cca11e0](https://github.com/scriptscat/scriptcat/commit/cca11e02b98de285423b04ec0d95eab995cee378)] (автор @CodFrm)
- 💄 Тонкая настройка макета карточного вида ([#872](https://github.com/scriptscat/scriptcat/issues/872)) [[5aa21b8](https://github.com/scriptscat/scriptcat/commit/5aa21b88bf423d5d03f7df70b654249bac4b7a88)] (автор @Coxxs)

### Исправлено

- 🐛 Исправлена ошибка из-за отсутствующей точки с запятой между двумя `@require` [#917](https://github.com/scriptscat/scriptcat/issues/917) ([#921](https://github.com/scriptscat/scriptcat/issues/921)) [[2769a24](https://github.com/scriptscat/scriptcat/commit/2769a24e129da79926816886fe42bbc4d9a97875)] (автор @cyfung1031)
- 🐛 Исправлена проблема отображения карточек и скриптов [#912](https://github.com/scriptscat/scriptcat/issues/912) (by @CodFrm)
- 🐛 Исправлена проблема скрытия боковой панели редактора и карточного вида ([#870](https://github.com/scriptscat/scriptcat/issues/870)) [[8e6e9c9](https://github.com/scriptscat/scriptcat/commit/8e6e9c93fca7bb8ec399938395fa74573c82632d)] (автор @CodFrm)
- 🐛 Исправлена проблема ResizableBox и DragDropEntry [#845](https://github.com/scriptscat/scriptcat/issues/845) [[672f8c7](https://github.com/scriptscat/scriptcat/commit/672f8c7dd9b99c9d93c73978c7b014d2c5eb60b4)] (автор @CodFrm)

### Прочее

- 📝 Обновление URL Chrome Web Store [[b50c82c](https://github.com/scriptscat/scriptcat/commit/b50c82c803c1da16e52af4991f21f891a3e56fa8)]
