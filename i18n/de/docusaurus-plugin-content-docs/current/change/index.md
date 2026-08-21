---
title: Änderungsprotokoll
---

import GithubStar from '@site/src/components/GithubStar';

<GithubStar variant="bar" scene="changelog" />

Für das Beta-Version-Änderungsprotokoll siehe [Beta-Änderungsprotokoll](./beta-changelog.md)

⚠️ Bitte beachten Sie, dass Sie bei Verwendung von Windows 8/7/XP oder einer Browserversion unter 120 die [alte Version von ScriptCat](https://github.com/scriptscat/scriptcat/releases) manuell installieren müssen. v0.16.x ist die letzte Version mit Manifest V2-Unterstützung. Installationsanleitung: [Erweiterung durch Laden entpackter Dateien installieren](/use/use.md#load-unpacked-extension-installation).

<a name="1.4.0"></a>

## 1.4.0 (2026-06-26)

Dieses Release bringt Low-Level-Refactoring zur Vorbereitung auf Firefox MV3, Editor-Erfahrungsverbesserungen (Bearbeitungsmenü, Ctrl+Shift+F-Formatierung, Monaco Quick Fix), Multi-Plattform-Suchmaschinenauswahl für die Skriptsuche, neue Funktionen wie `@unwrap` / `window.onurlchange` / `@run-at context-menu`, umfassende Stärkung der Cloud-Speicher-Synchronisierung und eine große Reihe von GM-API-, UI- und Stabilitätsfehlerbehebungen (einschließlich eines langfristigen Speicherlecks und Prototyp-Verunreinigungssicherheitslücken). Das ScriptCat AI Agent ist als Vorschau in Dev/Beta-Builds verfügbar und noch nicht in der stabilen Version aktiviert.

### 🚀 Wichtige neue Funktionen

- 🧪 ScriptCat AI Agent (**Vorschau — nur in Dev/Beta-Builds verfügbar, nicht in der stabilen Version aktiviert**) — KI-gestütztes Agent-System mit Konversationsinteraktion, Werkzeugaufrufen, Skill-System, MCP-Protokoll und mehr ([#1324](https://github.com/scriptscat/scriptcat/pull/1324)) (von @CodFrm)
- ✨ Unterstützung des `@unwrap`-Metadaten-Tags ([#1213](https://github.com/scriptscat/scriptcat/pull/1213)) (von @cyfung1031)
- ✨ TM's `window.onurlchange` über die Navigation API implementiert ([#1315](https://github.com/scriptscat/scriptcat/pull/1315)) (von @cyfung1031)
- ✨ `@run-at context-menu`-Unterstützung wiederhergestellt ([#1442](https://github.com/scriptscat/scriptcat/pull/1442)) (von @cyfung1031)
- ✨ Skriptsuche unterstützt Multi-Plattform-Suchmaschinenauswahl ([#1295](https://github.com/scriptscat/scriptcat/pull/1295)) (von @CodFrm)
- ✨ Mehrere Icon-Dienstanbieter hinzugefügt ([#1333](https://github.com/scriptscat/scriptcat/pull/1333)) (von @cyfung1031)
- ✨ Aktualisierungsprüfungs-Icon in der Spalte „Zuletzt aktualisiert" in der Skriptliste ([#1304](https://github.com/scriptscat/scriptcat/pull/1304)) (von @CodFrm)
- ✨ Bearbeitungs- und Skriptnamenskonfliktbehandlung verbessert ([#1223](https://github.com/scriptscat/scriptcat/pull/1223)) (von @cyfung1031)

### 🧑‍💻 Editor

- ✨ Bearbeitungsmenü zum Editor hinzugefügt (Suchen, Ersetzen, Rückgängig usw.) ([#1303](https://github.com/scriptscat/scriptcat/pull/1303)) (von @CodFrm)
- ✨ Editor unterstützt Ctrl+Shift+F-Formatierung ([#1415](https://github.com/scriptscat/scriptcat/pull/1415)) (von @cyfung1031)
- ✨ Monaco Quick Fix und Skriptmetadaten-Hinweise verbessert ([#1461](https://github.com/scriptscat/scriptcat/pull/1461)) (von @cyfung1031)
- 🐛 Ctrl-F / Ctrl-H-Tastaturkürzel behoben ([#1312](https://github.com/scriptscat/scriptcat/pull/1312)) (von @cyfung1031)
- 🐛 ESLint-Fix-Funktion funktioniert nicht [#1079](https://github.com/scriptscat/scriptcat/issues/1079) ([#1184](https://github.com/scriptscat/scriptcat/pull/1184)) (von @cyfung1031)
- 🐛 Editor-CSS-Layout-Probleme behoben ([#1460](https://github.com/scriptscat/scriptcat/pull/1460)) (von @cyfung1031)
- 🐛 ScriptEditor-Skriptlisten-Anzeige im hellen Thema behoben ([#1288](https://github.com/scriptscat/scriptcat/pull/1288)) (von @CodFrm)
- 🐛 ScriptEditor-Probleme behoben und verbessert ([#1258](https://github.com/scriptscat/scriptcat/pull/1258)) (von @cyfung1031)

### ⚡️ Leistungsverbesserungen

- 🚑 Potenzielles Speicherleck bei länger laufendem ScriptCat behoben ([#1401](https://github.com/scriptscat/scriptcat/pull/1401)) (von @cyfung1031)
- ⚡️ Baidu-Dateisystem-Abhängigkeit von globalen DNR-Regeln entfernt, Wechsel zur deaktivierung pro Anfrage ([#1377](https://github.com/scriptscat/scriptcat/pull/1377)) (von @cyfung1031)
- ⚡️ Multi-Plattform-Suchmaschinenauswahl optimiert ([#1379](https://github.com/scriptscat/scriptcat/pull/1379)) (von @cyfung1031)
- ⚡️ Monospace-Schriftart für Installationsseite-LoadingStatus zur Vermeidung von Zittern ([#1381](https://github.com/scriptscat/scriptcat/pull/1381)) (von @cyfung1031)
- ⚡️ pushValue-Verarbeitung optimiert ([#1403](https://github.com/scriptscat/scriptcat/pull/1403)) (von @cyfung1031)
- ⚡️ Vollständigere Berechtigungsprüfungen und bessere BenutzerSkript-Berechtigungshinweise ([#1251](https://github.com/scriptscat/scriptcat/pull/1251)) (von @cyfung1031)
- ⚡️ MessageConnect-Speicherverwaltung und Bereinigungsmechanismus verbessert ([#1248](https://github.com/scriptscat/scriptcat/pull/1248)) (von @cyfung1031)

### 🐛 Fehlerbehebungen

- 🐛 Cloud-Speicher-Synchronisierungszuverlässigkeit gestärkt ([#1374](https://github.com/scriptscat/scriptcat/pull/1374) ~ [#1395](https://github.com/scriptscat/scriptcat/pull/1395)) (von @cyfung1031)
- 🐛 Mehrere Cloud-Sync-Probleme behoben: OneDrive-Null-Byte-Upload, Google Drive/OneDrive-Fehler-normalisierung ([#1405](https://github.com/scriptscat/scriptcat/pull/1405)) ([#1406](https://github.com/scriptscat/scriptcat/pull/1406)) ([#1408](https://github.com/scriptscat/scriptcat/pull/1408)) (von @cyfung1031)
- 🐛 WebDAV-Verify-Schreibsonde entfernt ([#1445](https://github.com/scriptscat/scriptcat/pull/1445)) (von @CodFrm)
- 🐛 Cross-Origin-Anfragefehler bei fehlender Zugriffsberechtigung behoben ([#1477](https://github.com/scriptscat/scriptcat/pull/1477)) (von @cyfung1031)
- 🐛 Edge Android Mobile-Popup-Anpassung [#686](https://github.com/scriptscat/scriptcat/issues/686) ([#1507](https://github.com/scriptscat/scriptcat/pull/1507)) (von @CodFrm)
- 🐛 Weiße Hintergrundblitze beim Laden [#1497](https://github.com/scriptscat/scriptcat/issues/1497) ([#1498](https://github.com/scriptscat/scriptcat/pull/1498)) (von @cyfung1031)
- 🐛 Nachrichtenverbindungen werden nicht korrekt bereinigt ([#1474](https://github.com/scriptscat/scriptcat/pull/1474)) (von @cyfung1031)
- 🐛 `@match`-Schablonen-Fehlpassung bei fehlendem search ([#1466](https://github.com/scriptscat/scriptcat/pull/1466)) (von @cyfung1031)
- 🐛 `protoBaseDescs` für Klassenerbenvererbung in der Tampermonkey-Semi-Sandbox hinzugefügt ([#1463](https://github.com/scriptscat/scriptcat/pull/1463)) (von @cyfung1031)
- 🐛 Fehlende Null-Verarbeitung für `GM_xmlhttpRequest` msgConn ([#1433](https://github.com/scriptscat/scriptcat/pull/1433)) (von @cyfung1031)
- 🐛 GM xhr verarbeitet anomale onloadend nicht korrekt ([#1412](https://github.com/scriptscat/scriptcat/pull/1412)) (von @cyfung1031)
- 🐛 ScriptEditor-Listen-Dynamik-Update und Anzeigeprobleme behoben ([#1414](https://github.com/scriptscat/scriptcat/pull/1414)) (von @cyfung1031)
- 🐛 Session-Rule-Anzahl-Problem bei parallelen xhr ([#1353](https://github.com/scriptscat/scriptcat/pull/1353)) (von @cyfung1031)
- 🐛 Gesamter Seitencrash durch ungültigen Cron-Ausdruck ([#1327](https://github.com/scriptscat/scriptcat/pull/1327)) (von @cyfung1031)
- 🐛 Alle Skripte schlagen fehl, wenn eines beim Batch-Check timed out ([#1265](https://github.com/scriptscat/scriptcat/pull/1265)) (von @cyfung1031)
- 🐛 extensionEnv-Verarbeitung für isIncognito, userAgent und run-in ([#1368](https://github.com/scriptscat/scriptcat/pull/1368)) (von @cyfung1031)
- 🐛 Onboarding-Leitfaden-Button teilweise verdeckt [#1396](https://github.com/scriptscat/scriptcat/issues/1396) ([#1398](https://github.com/scriptscat/scriptcat/pull/1398)) (von @cyfung1031)
- 🐛 Tooltip auf der Skriptverwaltungsseite verdeckt [#1386](https://github.com/scriptscat/scriptcat/issues/1386) ([#1387](https://github.com/scriptscat/scriptcat/pull/1387)) (von @Xdy1579883916)
- 🐛 Seitenleiste verursacht anormale Größenänderung im Kartenmodus [#1179](https://github.com/scriptscat/scriptcat/issues/1179) ([#1373](https://github.com/scriptscat/scriptcat/pull/1373)) (von @cyfung1031)
- 🐛 Falscher Origin bei Drag-and-Drop-Installation lokaler Dateien ([#1371](https://github.com/scriptscat/scriptcat/pull/1371)) (von @cyfung1031)
- 🐛 Sprachwechsel-Meldung behoben ([#1380](https://github.com/scriptscat/scriptcat/pull/1380)) (von @cyfung1031)
- 🐛 Protokollanzeige-UI verbessert ([#1372](https://github.com/scriptscat/scriptcat/pull/1372)) (von @cyfung1031)
- 🐛 UserConfigPanel-CSS behoben ([#1361](https://github.com/scriptscat/scriptcat/pull/1361)) (von @cyfung1031)
- 🐛 `Object.create(null)` für leere Objekte in create_context ([#1397](https://github.com/scriptscat/scriptcat/pull/1397)) (von @cyfung1031)
- 🐛 Stille Aktualisierung und Connect-Berechtigungslogik für abonnierte Skripte ([#1201](https://github.com/scriptscat/scriptcat/pull/1201)) (von @cyfung1031)
- 🐛 Log-Seiten-Abfrage-Button aktualisiert Zeit nicht ([#1294](https://github.com/scriptscat/scriptcat/pull/1294)) (von @CodFrm)

### 🔒 Sicherheitsverbesserungen

- 🔒 Prototyp-Verunreinigung über unzuverlässige YAML-Benutzerkonfigurationsschlüssel behoben ([#1494](https://github.com/scriptscat/scriptcat/pull/1494)) (von @qdzsh)
- 🔒 Alle npm-Abhängigkeitssicherheitslücken behoben ([#1350](https://github.com/scriptscat/scriptcat/pull/1350)) ([#1364](https://github.com/scriptscat/scriptcat/pull/1364)) ([#1365](https://github.com/scriptscat/scriptcat/pull/1365)) (von @cyfung1031)

### ♻️ Refactoring & Kompatibilität

- ♻️ Low-Level-Refactoring zur Vorbereitung auf Firefox MV3 ([#1457](https://github.com/scriptscat/scriptcat/pull/1457)) ([#1480](https://github.com/scriptscat/scriptcat/pull/1480)) (von @cyfung1031)
- ♻️ Skriptressource-Aktualisierungslogik refaktorisiert und Parallelitätskontrolle wiederhergestellt ([#1193](https://github.com/scriptscat/scriptcat/pull/1193)) (von @cyfung1031)
- ♻️ jszip durch JSZipp für ZIP-Verarbeitung ersetzt ([#1479](https://github.com/scriptscat/scriptcat/pull/1479)) (von @cyfung1031)
- ♻️ Offscreen ↔ ServiceWorker-Kommunikation über postMessage-Kanal vereinheitlicht ([#1299](https://github.com/scriptscat/scriptcat/pull/1299)) (von @CodFrm)
- ♻️ VSCodeConnect-Code refaktorisiert ([#1170](https://github.com/scriptscat/scriptcat/pull/1170)) (von @cyfung1031)
- ⚡️ ts.worker.js auf 4MB komprimiert für AMO-Validierung ([#1221](https://github.com/scriptscat/scriptcat/pull/1221)) (von @cyfung1031)

### 🌐 Internationalisierung

- 🌐 Mehrsprachige Terminologie-Übersetzungen korrigiert (hauptsächlich Traditional Chinese verbessert) ([#1468](https://github.com/scriptscat/scriptcat/pull/1468)) (von @cyfung1031)

### Sonstiges

- ✨ Icon-Dienst fetchIconByDomain auf scriptcat.org umgeschaltet ([#1268](https://github.com/scriptscat/scriptcat/pull/1268)) (von @cyfung1031)
- 🔥 Crowdin und ach-UG-Pseudosprache-Inhalte entfernt ([#1385](https://github.com/scriptscat/scriptcat/pull/1385)) (von @CodFrm)
