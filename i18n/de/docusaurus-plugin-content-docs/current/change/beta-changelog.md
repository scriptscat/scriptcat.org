---
title: Beta-Änderungsprotokoll
---

import GithubStar from '@site/src/components/GithubStar';

<GithubStar variant="bar" scene="changelog" />

ScriptCat-Versionen werden in zwei Hauptzweige unterteilt: stabile Releases und Vorab-Versionen. Für das stabile Änderungsprotokoll siehe: [Änderungsprotokoll](./index.md)

Vorab-Versionen werden vor dem offiziellen stabilen Release veröffentlicht. Sie dienen typischerweise zum Testen neuer Funktionen. Vorab-Versionsnummern enthalten einen Vorab-Bezeichner, z.B.: `1.0.0-beta.1`.

Vorab-Versionen können von der [Release](https://github.com/scriptscat/scriptcat/releases)-Seite oder aus den folgenden Erweiterungsmagazinen bezogen werden:

- [Chrome](https://chromewebstore.google.com/detail/%E8%84%9A%E6%9C%AC%E7%8C%AB-beta/jaehimmlecjmebpekkipmpmbpfhdacom?authuser=0&hl=zh-CN)
- [Edge](https://microsoftedge.microsoft.com/addons/detail/%E8%84%9A%E6%9C%AC%E7%8C%AB-beta/nimmbghgpcjmeniofmpdfkofcedcjpfi)
- [Firefox](https://addons.mozilla.org/zh-CN/firefox/addon/scriptcat-pre/)

Zusätzlich zu Vorab-Versionen erstellt ScriptCat die Erweiterung auf [Github Action](https://github.com/scriptscat/scriptcat/actions/workflows/build.yaml) nach jedem Code-Commit in den Hauptzweig. Wenn Sie die neuesten Funktionen oder Fehlerbehebungen ausprobieren möchten, können Sie sie von der [Github Action](https://github.com/scriptscat/scriptcat/actions/workflows/build.yaml)-Seite herunterladen.

<a name="1.5.0-beta.1"></a>

## 1.5.0-beta.1 (2026-08-06)

Dieses Release hebt zwei Hauptfunktionen hervor — **Externer Zugriff (MCP-Bridge)** und einen **Skript-Papierkorb** — unterstützt offiziell Firefox MV3, fügt Koreanisch, Türkisch und Brasilianisches Portugiesisch hinzu und behebt mehrere GM-API-, Cloud-Sync- und Editor-Probleme.

### 🚀 Wichtige neue Funktionen

- 💥 Neue „Externer Zugriff (MCP-Bridge)": lokaler `sctl`-Daemon vereint CLI- und MCP-Client-Zugriff ([#1573](https://github.com/scriptscat/scriptcat/pull/1573)) (von @cyfung1031)
- 💥 Skript-Papierkorb: gelöschte Skripte gehen zuerst in den Papierkorb mit Wiederherstellung, dauerhaftem Löschen und automatischer Bereinigung ([#1585](https://github.com/scriptscat/scriptcat/pull/1585)) (von @CodFrm)
- 💥 Offizielle Firefox MV3-Unterstützung ([#1561](https://github.com/scriptscat/scriptcat/pull/1561)) (von @cyfung1031)
- ✨ Schnelle Website-Aktionen im Popup ([#1646](https://github.com/scriptscat/scriptcat/pull/1646)) (von @CodFrm)
- ✨ Icon-Dienst mit „deaktiviert"-Stufe ([#1637](https://github.com/scriptscat/scriptcat/pull/1637)) (von @CodFrm)
- ✨ Warnung bei undefinierten Metadaten-Tags im Editor ([#1608](https://github.com/scriptscat/scriptcat/pull/1608)) (von @cyfung1031)
- ✨ Vollständige Sicherung/Wiederherstellung/Import ([#1554](https://github.com/scriptscat/scriptcat/pull/1554)) (von @CodFrm)

### ♻️ Refactoring & Kompatibilität

- ♻️ Client auf offizielles MCP SDK refaktorisiert ([#1643](https://github.com/scriptscat/scriptcat/pull/1643)) (von @CodFrm)

### 🐛 Fehlerbehebungen

- 🐛 GM_xmlhttpRequest benutzerdefinierte Cookies werden angehängt statt überschrieben ([#1604](https://github.com/scriptscat/scriptcat/pull/1604)) (von @cyfung1031)
- 🐛 Skript-Sync-Zustandskonsistenz und Anbieter-sichere Konfliktbehandlung ([#1504](https://github.com/scriptscat/scriptcat/pull/1504)) (von @cyfung1031)
- 🐛 Geplante Protokollbereinigung funktioniert nicht mehr ([#1599](https://github.com/scriptscat/scriptcat/pull/1599)) (von @CodFrm)
- 🐛 Installationsseite Zurück/Schließen-Logik ([#1594](https://github.com/scriptscat/scriptcat/pull/1594)) (von @cyfung1031)
- 🐛 Browser-Tab-Titel wird nach Umbenennung nicht aktualisiert ([#1607](https://github.com/scriptscat/scriptcat/pull/1607)) (von @cyfung1031)
- 🐛 window.focus Fokusverhalten und windowId-Validierung ([#1577](https://github.com/scriptscat/scriptcat/pull/1577)) (von @cyfung1031)

### 🎨 UI-Verbesserungen

- 💄 Android-UI-Anpassung: dynamische Viewport-Höhe ([#1636](https://github.com/scriptscat/scriptcat/pull/1636)) (von @RenjiYuusei)
- 💄 Kompakte Layout-Option für Popup ([#1551](https://github.com/scriptscat/scriptcat/pull/1551)) (von @cyfung1031)

### 🌐 Internationalisierung

- 🌐 Koreanisch (ko-KR) hinzugefügt ([#1568](https://github.com/scriptscat/scriptcat/pull/1568)) (von @moduvoice)
- 🌐 Türkisch (tr-TR) hinzugefügt ([#1557](https://github.com/scriptscat/scriptcat/pull/1557)) (von @azizaktas)
- 🌐 Brasilianisches Portugiesisch (pt-BR) hinzugefügt ([#1587](https://github.com/scriptscat/scriptcat/pull/1587)) (von @Lucas559-noob)

<a name="1.5.0-beta"></a>

## 1.5.0-beta (2026-07-08)

Dieses Release bringt eine **brandneue UI** mit saubererer, konsistenterer Oberfläche und flüssigerer Gesamterfahrung, sowie spezielle Design-Optimierungen für Mobilgeräte.

### 🎨 UI-Verbesserungen

- ♻️ Brandneue UI: vollständige Oberflächen-Neuentwicklung mit verbesserter Mobilanpassung ([#1514](https://github.com/scriptscat/scriptcat/pull/1514)) (von @CodFrm)

### 🚀 Wichtige neue Funktionen

- ✨ Editor-Registerkartenleiste „＋" unterstützt Skripttypauswahl ([#1544](https://github.com/scriptscat/scriptcat/pull/1544)) (von @cyfung1031)
- ✨ Manuelles Herunterladen für lokale Sicherungen ([#1543](https://github.com/scriptscat/scriptcat/pull/1543)) (von @cyfung1031)
- ✨ structured_clone-Serialisierung für Chromium 148+ ([#1534](https://github.com/scriptscat/scriptcat/pull/1534)) (von @cyfung1031)

### 🧩 GM-API-Änderungen

- 🐛 Nativer GM_download berücksichtigt nun @connect ([#1506](https://github.com/scriptscat/scriptcat/pull/1506)) (von @DudeAint)

### ⚡️ Leistungsverbesserungen

- ⚡️ Skript-Lade-Cache optimiert ([#1511](https://github.com/scriptscat/scriptcat/pull/1511)) (von @cyfung1031)

### 🐛 Fehlerbehebungen

- 🐛 Zeitzone-Problem bei geplanten Aufgaben vermieden ([#1531](https://github.com/scriptscat/scriptcat/pull/1531)) (von @cyfung1031)
- 🐛 Nicht verfügbare Demo-API im Crontab-Beispiel ersetzt ([#1542](https://github.com/scriptscat/scriptcat/pull/1542)) (von @cyfung1031)

<a name="1.4.0-beta.4"></a>

## 1.4.0-beta.4 (2026-06-13)

### 🧑‍💻 Editor

- ✨ Monaco Quick Fix und Metadaten-Hinweise verbessert ([#1461](https://github.com/scriptscat/scriptcat/pull/1461)) (von @cyfung1031)
- 🐛 Editor-CSS-Layout behoben ([#1460](https://github.com/scriptscat/scriptcat/pull/1460)) (von @cyfung1031)

### 🐛 Fehlerbehebungen

- 🐛 Edge Android Mobile-Popup-Layout [#686](https://github.com/scriptscat/scriptcat/issues/686) ([#1507](https://github.com/scriptscat/scriptcat/pull/1507)) (von @CodFrm)
- 🐛 Weiße Hintergrundblitze beim Laden [#1497](https://github.com/scriptscat/scriptcat/issues/1497) ([#1498](https://github.com/scriptscat/scriptcat/pull/1498)) (von @cyfung1031)
- 🐛 Cross-Origin-Anfragefehler bei fehlender Berechtigung ([#1477](https://github.com/scriptscat/scriptcat/pull/1477)) (von @cyfung1031)
- 🐛 Nachrichtenverbindungen nicht bereinigt ([#1474](https://github.com/scriptscat/scriptcat/pull/1474)) (von @cyfung1031)
- 🐛 @match-Schablonen-Fehlpassung ([#1466](https://github.com/scriptscat/scriptcat/pull/1466)) (von @cyfung1031)
- 🐛 protoBaseDescs für Klassenerbenvererbung ([#1463](https://github.com/scriptscat/scriptcat/pull/1463)) (von @cyfung1031)

### 🔒 Sicherheit

- 🔒 Prototyp-Verunreinigung über YAML-Schlüssel behoben ([#1494](https://github.com/scriptscat/scriptcat/pull/1494)) (von @qdzsh)

### ♻️ Refactoring

- ♻️ Skriptressource-Aktualisierung refaktorisiert ([#1193](https://github.com/scriptscat/scriptcat/pull/1193)) (von @cyfung1031)
- ♻️ jszip durch JSZipp ersetzt ([#1479](https://github.com/scriptscat/scriptcat/pull/1479)) (von @cyfung1031)
- ♻️ Firefox MV3-Kompatibilität verbessert ([#1457](https://github.com/scriptscat/scriptcat/pull/1457), [#1480](https://github.com/scriptscat/scriptcat/pull/1480)) (von @cyfung1031)

<a name="1.4.0-beta.3"></a>

## 1.4.0-beta.3 (2026-05-19)

### 🚀 Wichtige neue Funktionen

- ✨ Editor: Ctrl+Shift+F zur Code-Formatierung ([#1415](https://github.com/scriptscat/scriptcat/pull/1415)) (von @cyfung1031)
- ✨ `@run-at context-menu`-Unterstützung wiederhergestellt ([#1442](https://github.com/scriptscat/scriptcat/pull/1442)) (von @cyfung1031)

### ⚡️ Leistungsverbesserungen

- ⚡️ pushValue-Verarbeitung optimiert ([#1403](https://github.com/scriptscat/scriptcat/pull/1403)) (von @cyfung1031)

### 🐛 Fehlerbehebungen

- 🐛 Cloud-Sync-Fehlerbehoben ([#1405](https://github.com/scriptscat/scriptcat/pull/1405)) ([#1406](https://github.com/scriptscat/scriptcat/pull/1406)) ([#1408](https://github.com/scriptscat/scriptcat/pull/1408)) (von @cyfung1031)
- 🐛 WebDAV verify: Schreibsonde entfernt ([#1445](https://github.com/scriptscat/scriptcat/pull/1445)) (von @CodFrm)
- 🐛 GM_xmlhttpRequest msgConn Null-Verarbeitung ([#1433](https://github.com/scriptscat/scriptcat/pull/1433)) (von @cyfung1031)
- 🐛 GM xhr onloadend-Verarbeitung ([#1412](https://github.com/scriptscat/scriptcat/pull/1412)) (von @cyfung1031)
- 🐛 ScriptEditor-Listen-Update ([#1414](https://github.com/scriptscat/scriptcat/pull/1414)) (von @cyfung1031)

<a name="1.4.0-beta.2"></a>

## 1.4.0-beta.2 (2026-05-06)

### ⚡️ Leistungsverbesserungen

- ⚡️ Baidu-Abhängigkeit entfernt ([#1377](https://github.com/scriptscat/scriptcat/pull/1377)) (von @cyfung1031)
- ⚡️ Multi-Plattform-Suchmaschinen optimiert ([#1379](https://github.com/scriptscat/scriptcat/pull/1379)) (von @cyfung1031)
- ⚡️ Monospace für LoadingStatus ([#1381](https://github.com/scriptscat/scriptcat/pull/1381)) (von @cyfung1031)

### 🐛 Fehlerbehebungen

- 🚑 Speicherleck bei länger laufendem ScriptCat ([#1401](https://github.com/scriptscat/scriptcat/pull/1401)) (von @cyfung1031)
- 🐛 Cloud-Sync-Zuverlässigkeit gestärkt ([#1374](https://github.com/scriptscat/scriptcat/pull/1374)) ([#1375](https://github.com/scriptscat/scriptcat/pull/1375)) ([#1376](https://github.com/scriptscat/scriptcat/pull/1376)) (von @cyfung1031)
- 🐛 extensionEnv korrekt gefüllt ([#1368](https://github.com/scriptscat/scriptcat/pull/1368)) (von @cyfung1031)
- 🐛 Onboarding-Button verdeckt [#1396](https://github.com/scriptscat/scriptcat/issues/1396) ([#1398](https://github.com/scriptscat/scriptcat/pull/1398)) (von @cyfung1031)
- 🐛 Tooltip-Verdeckung [#1386](https://github.com/scriptscat/scriptcat/issues/1386) ([#1387](https://github.com/scriptscat/scriptcat/pull/1387)) (von @Xdy1579883916)
- 🐛 Seitenleiste-Layout im Kartenmodus [#1179](https://github.com/scriptscat/scriptcat/issues/1179) ([#1373](https://github.com/scriptscat/scriptcat/pull/1373)) (von @cyfung1031)

### 🔒 Sicherheit

- 🔒 Alle npm-Schwachstellen behoben ([#1350](https://github.com/scriptscat/scriptcat/pull/1350)) ([#1364](https://github.com/scriptscat/scriptcat/pull/1364)) ([#1365](https://github.com/scriptscat/scriptcat/pull/1365)) (von @cyfung1031)

<a name="1.4.0-beta.1"></a>

## 1.4.0-beta.1 (2026-04-07)

### 🚀 Wichtige neue Funktionen

- 💥 ScriptCat AI Agent — KI-gestütztes Agent-System ([#1324](https://github.com/scriptscat/scriptcat/pull/1324)) (von @CodFrm)
- ✨ `@unwrap`-Metadaten-Tag unterstützt ([#1213](https://github.com/scriptscat/scriptcat/pull/1213)) (von @cyfung1031)
- ✨ `window.onurlchange` über Navigation API implementiert ([#1315](https://github.com/scriptscat/scriptcat/pull/1315)) (von @cyfung1031)

### 🧑‍💻 Editor

- ✨ Bearbeitungsmenü hinzugefügt ([#1303](https://github.com/scriptscat/scriptcat/pull/1303)) (von @CodFrm)
- 🐛 Ctrl-F / Ctrl-H-Tastaturkürzel behoben ([#1312](https://github.com/scriptscat/scriptcat/pull/1312)) (von @cyfung1031)
- 🐛 ESLint-Fix behoben [#1079](https://github.com/scriptscat/scriptcat/issues/1079) ([#1184](https://github.com/scriptscat/scriptcat/pull/1184)) (von @cyfung1031)

### ✨ Funktionsverbesserungen

- ✨ Multi-Plattform-Suchmaschinen ([#1295](https://github.com/scriptscat/scriptcat/pull/1295)) (von @CodFrm)
- ✨ Mehrere Icon-Dienstanbieter ([#1333](https://github.com/scriptscat/scriptcat/pull/1333)) (von @cyfung1031)

### 🐛 Fehlerbehebungen

- 🐛 Cron-Ausdruck crashed die Seite ([#1327](https://github.com/scriptscat/scriptcat/pull/1327)) (von @cyfung1031)
- 🐛 Error 406 bei Installation ([#1306](https://github.com/scriptscat/scriptcat/pull/1306)) (von @cyfung1031)
- 🐛 WebDAV-Cookie-Konflikt ([#1308](https://github.com/scriptscat/scriptcat/pull/1308)) (von @CodFrm)
- 🐛 Geräteabhängige Einstellungen ([#1309](https://github.com/scriptscat/scriptcat/pull/1309)) (von @CodFrm)

## 1.4.0-beta (2026-03-13)

### 🐛 Fehlerbehebungen

- 🚑 Umgebungserkennungsfehler [#1280](https://github.com/scriptscat/scriptcat/issues/1280) ([#1281](https://github.com/scriptscat/scriptcat/pull/1281)) (von @CodFrm)
- 🐛 ScriptEditor-Probleme ([#1258](https://github.com/scriptscat/scriptcat/pull/1258)) (von @cyfung1031)

### 🔒 Sicherheit

- 🔒 DOMPurify für HTML-Sanitisierung ([#1274](https://github.com/scriptscat/scriptcat/pull/1274)) (von @CodFrm)

## 1.3.0-beta.4 (2026-02-19)

### Hinzugefügt

- ✨ Amazon S3-Speicher [#1146](https://github.com/scriptscat/scriptcat/issues/1146) ([#1189](https://github.com/scriptscat/scriptcat/pull/1189)) (von @CodFrm)
- ✨ Leere @version akzeptiert ([#1216](https://github.com/scriptscat/scriptcat/pull/1216)) (von @cyfung1031)

### Behoben

- 🐛 Registerkarten-Nachricht 【#1266](https://github.com/scriptscat/scriptcat/pull/1266)) (von @CodFrm)
- 🐛 unregister führt nicht korrekt aus ([#1231](https://github.com/scriptscat/scriptcat/pull/1231)) (von @cyfung1031)
- 🐛 GM_addElement-Problem ([#1233](https://github.com/scriptscat/scriptcat/pull/1233)) (von @cyfung1031)

## 1.3.0-beta.3 (2026-02-07)

### Hinzugefügt

- ✨ Cron-Änderungen: Fehlerbehebungen, i18n, once-Verbesserungen ([#1126](https://github.com/scriptscat/scriptcat/issues/1126)) (von @cyfung1031)

### Geändert

- ♻️ Nachrichtensystem refaktorisiert ([#1067](https://github.com/scriptscat/scriptcat/issues/1067)) (von @cyfung1031)
- ⚡ Textdekodierung verbessert ([#1166](https://github.com/scriptscat/scriptcat/issues/1166)) (von @cyfung1031)
- ⬆️ swc-Kernel-Version aktualisiert ([#1186](https://github.com/scriptscat/scriptcat/issues/1186)) (von @cyfung1031)

### Behoben

- 🐛 Skriptkodierung [#1115](https://github.com/scriptscat/scriptcat/issues/1115) ([#1138](https://github.com/scriptscat/scriptcat/issues/1138)) (von @CodFrm)
- 🐛 Wertreferenzen [#1141](https://github.com/scriptscat/scriptcat/issues/1141) ([#1147](https://github.com/scriptscat/scriptcat/issues/1147)) (von @CodFrm)
- 🐛 GM API asynchron deklariert ([#1169](https://github.com/scriptscat/scriptcat/issues/1169)) (von @cyfung1031)

## 1.3.0-beta.2 (2026-01-07)

### Hinzugefügt

- ✨ Sync-Löschung standardmäßig deaktiviert ([#958](https://github.com/scriptscat/scriptcat/issues/958)) [[9c4c7dc](https://github.com/scriptscat/scriptcat/commit/9c4c7dc411357746db43a306d97ac41a71f2b49c)] (von @cyfung1031)
- ✨ Editor unterstützt GM.* ([#1129](https://github.com/scriptscat/scriptcat/issues/1129)) [[bea0192](https://github.com/scriptscat/scriptcat/commit/bea0192c6cc50eff2ed4e1cc5dcc25f36bbe10e7)] (von @cyfung1031)

### Geändert

- ♻️ Changelog-Öffnungslogik optimiert [#1110](https://github.com/scriptscat/scriptcat/issues/1110) [[d3ffedc](https://github.com/scriptscat/scriptcat/commit/d3ffedcffe752ca548f87f1640072fcd871b8604)] (von @CodFrm)

### Behoben

- 🐛 Skript-Icon-Anzeige [#1052](https://github.com/scriptscat/scriptcat/issues/1052) ([#1104](https://github.com/scriptscat/scriptcat/issues/1104)) [[2e5c601](https://github.com/scriptscat/scriptcat/commit/2e5c601274fa27aa67b49ef9d352e3a1c3975979)] (von @CodFrm)
- 🐛 scriptcat.d.tpl & Typkorrekturen ([#1130](https://github.com/scriptscat/scriptcat/issues/1130)) [[dd22ef5](https://github.com/scriptscat/scriptcat/commit/dd22ef544684d69e24a7aae098cb05cbab03daa8)] (von @cyfung1031)
- 🐛 Cloud-Sync-Probleme ([#1133](https://github.com/scriptscat/scriptcat/issues/1133)) [[a9383d2](https://github.com/scriptscat/scriptcat/commit/a9383d2012eb3953dc33c8886ce3891f404fa100)] (von @CodFrm)
- 🐛 `GM_addElement("tagName")`-Fehler ([#1120](https://github.com/scriptscat/scriptcat/issues/1120)) [[ad19de5](https://github.com/scriptscat/scriptcat/commit/ad19de5c1793c8c079bedbf1b11c7c2ae27a469e)] (von @cyfung1031)

## 1.3.0-beta.1 (2025-12-21)

### Hinzugefügt

- ✨ Monaco Editor-Einstellungen optimiert ([#1012](https://github.com/scriptscat/scriptcat/issues/1012)) [[b1a738d](https://github.com/scriptscat/scriptcat/commit/b1a738d98b5e852993da322d56dbfa20f68d20e3)] (von @cyfung1031)

### Geändert

- ⚡ Metadaten aus chrome.storage.session verschoben ([#1027](https://github.com/scriptscat/scriptcat/issues/1027)) [[9c81f6c](https://github.com/scriptscat/scriptcat/commit/9c81f6c42b087411669adef35df30714e184ee93)] (von @cyfung1031)
- ⚡ Nächste Ausführungszeit optimiert [#1093](https://github.com/scriptscat/scriptcat/issues/1093) [[324ce51](https://github.com/scriptscat/scriptcat/commit/324ce515c84699ca8d3bf1ee447fc6ef0656ae0d)] (von @CodFrm)

### Behoben

- 🐛 Popup-Seiten-Probleme ([#1100](https://github.com/scriptscat/scriptcat/issues/1100)) [[9c67e4a](https://github.com/scriptscat/scriptcat/commit/9c67e4a2c609f8c1ef82c493bb1ed68da6396d2e)] (von @CodFrm)
- 🐛 Breitzeichensymbole in englischen Logs ([#1095](https://github.com/scriptscat/scriptcat/issues/1095)) [[a68b100](https://github.com/scriptscat/scriptcat/commit/a68b10048cb01a8e26fe8d524102bfb23ed4e179)] (von @cyfung1031)
- 🐛 UnoCSS-Präfix für CSS-Konflikte ([#1013](https://github.com/scriptscat/scriptcat/issues/1013)) [[723e64c](https://github.com/scriptscat/scriptcat/commit/723e64cc0c23763dfed322e907c0a960c4f9060e)] (von @cyfung1031)

## 1.3.0-beta (2025-12-13)

### Hinzugefügt

- ✨ Neuer Skriptinstallationsablauf ([#842](https://github.com/scriptscat/scriptcat/issues/842))
- ✨ Monaco-Hints mehrsprachig ([#960](https://github.com/scriptscat/scriptcat/issues/960)) [[51a6f94](https://github.com/scriptscat/scriptcat/commit/51a6f94be3a430691f73057eae61a3814560a5b3)] (von @cyfung1031)
- ✨ @grant-Konfliktprüfung ([#902](https://github.com/scriptscat/scriptcat/issues/902)) [[8fbd0f1](https://github.com/scriptscat/scriptcat/commit/8fbd0f1041f5c5dcdb5a515348a5f54934acfdc7)] (von @cyfung1031)
- ✨ @noframes standardmäßig im Template ([#900](https://github.com/scriptscat/scriptcat/issues/900)) [[c9d5840](https://github.com/scriptscat/scriptcat/commit/c9d584066ff2395112b9a930aaa409cda764a5e6)] (von @cyfung1031)
- ✨ Skript-Laufzeitoptionen ([#895](https://github.com/scriptscat/scriptcat/issues/895)) [[b0ea187](https://github.com/scriptscat/scriptcat/commit/b0ea187c2e6d69b60c981aa9b4d068fed7c2c2a2)] (von @CodFrm)

### Geändert

- ♻️ Firefox-Kompatibilität: GM_setClipboard ([#928](https://github.com/scriptscat/scriptcat/issues/928)) [[d1a5cb1](https://github.com/scriptscat/scriptcat/commit/d1a5cb19dc4e05fac838258d15c48cc6f876d416)] (von @cyfung1031)
- ♻️ userScripts / scripting API angepasst ([#925](https://github.com/scriptscat/scriptcat/issues/925)) [[43bc40f](https://github.com/scriptscat/scriptcat/commit/43bc40ff5da5ef36a13564504293f1928138cf12)] (von @cyfung1031)
- ♻️ Skript-Icon-Laden refaktorisiert ([#893](https://github.com/scriptscat/scriptcat/issues/893))
- ⚡ parseMetadata-Optimierung ([#903](https://github.com/scriptscat/scriptcat/issues/903)) [[0efc648](https://github.com/scriptscat/scriptcat/commit/0efc648257f74591765869dedee5d98f8a1dc610)] (von @cyfung1031)

### Behoben

- 🐛 Alarm bei unregelmäßigen Skriptprüfungen ([#996](https://github.com/scriptscat/scriptcat/issues/996)) [[8bb9a2d](https://github.com/scriptscat/scriptcat/commit/8bb9a2d5741acb7d547e743c7bef8a2139f1401a)] (von @cyfung1031)
- 🐛 UnoCSS-Präfix ([#1013](https://github.com/scriptscat/scriptcat/issues/1013)) [[723e64c](https://github.com/scriptscat/scriptcat/commit/723e64cc0c23763dfed322e907c0a960c4f9060e)] (von @cyfung1031)
- 🐛 Typfehler ([#975](https://github.com/scriptscat/scriptcat/issues/975)) [[7d85856](https://github.com/scriptscat/scriptcat/commit/7d8585687c71cde1c2793d742abb7c22d9d358f0)] (von @cyfung1031)

<a name="1.2.0-beta.5"></a>

## 1.2.0-beta.5 (2025-11-17)

### Hinzugefügt

- ✨ Skriptanzahl im Popup ([#973](https://github.com/scriptscat/scriptcat/issues/973)) [[1134586](https://github.com/scriptscat/scriptcat/commit/1134586ff040ffc0cdddd3538e9ec493950c948a)] (von @cyfung1031)

### Geändert

- ⚡ check_script_update_cycle ([#906](https://github.com/scriptscat/scriptcat/issues/906)) [[760562f](https://github.com/scriptscat/scriptcat/commit/760562f92ad64bc538873b2ca61dfafe067c3f6e)] (von @cyfung1031)
- ♻️ Inject & content refaktorisiert ([#952](https://github.com/scriptscat/scriptcat/issues/952)) [[0554159](https://github.com/scriptscat/scriptcat/commit/0554159c105606192d48e1153194e09314d43bc9)] (von @cyfung1031)
- ♻️ GM_xmlhttpRequest refaktorisiert ([#901](https://github.com/scriptscat/scriptcat/issues/901)) [[fabd2e9](https://github.com/scriptscat/scriptcat/commit/fabd2e944235b460bc73df346b79d23ee4540af7)] (von @cyfung1031)

### Behoben

- 🐛 Beschädigte Sandbox ([#966](https://github.com/scriptscat/scriptcat/issues/966)) [[dd80386](https://github.com/scriptscat/scriptcat/commit/dd8038666481d1319dd0f8ab80f79f1b13c1730d)] (von @cyfung1031)
- 🐛 @connect-Logik angepasst ([#969](https://github.com/scriptscat/scriptcat/issues/969)) [[67914d2](https://github.com/scriptscat/scriptcat/commit/67914d2b7d57fa9c69706ae57ee5d3400c2643f9)] (von @cyfung1031)
- 🐛 Service-Worker-i18n [#956](https://github.com/scriptscat/scriptcat/issues/956) [[843e618](https://github.com/scriptscat/scriptcat/commit/843e618daf13ec659cc16759c5de13dacf23c534)] (von @CodFrm)

<a name="1.2.0-beta.4"></a>

## 1.2.0-beta.4 (2025-11-07)

### Hinzugefügt

- ✨ Kartenmodus-Leitfaden ([#894](https://github.com/scriptscat/scriptcat/issues/894)) [[0627a0f](https://github.com/scriptscat/scriptcat/commit/0627a0faacf3a41645e985ec6f6960568427d5a4)] (von @CodFrm)

### Geändert

- ♻️ EarlyStart-Implementierung refaktorisiert ([#882](https://github.com/scriptscat/scriptcat/issues/882)) [[cca11e0](https://github.com/scriptscat/scriptcat/commit/cca11e02b98de285423b04ec0d95eab995cee378)] (von @CodFrm)

### Behoben

- 🐛 Fehler durch fehlenden Semikolon zwischen `@require` [#917](https://github.com/scriptscat/scriptcat/issues/917) ([#921](https://github.com/scriptscat/scriptcat/issues/921)) [[2769a24](https://github.com/scriptscat/scriptcat/commit/2769a24e129da79926816886fe42bbc4d9a97875)] (von @cyfung1031)
