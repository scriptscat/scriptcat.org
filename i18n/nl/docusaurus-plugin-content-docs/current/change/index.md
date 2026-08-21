---
title: Wijzigingslogboek
---

import GithubStar from '@site/src/components/GithubStar';

<GithubStar variant="bar" scene="changelog" />

Voor het wijzigingslogboek van de Beta-versie, zie [Beta-wijzigingslogboek](./beta-changelog.md)

⚠️ Let op: als u Windows 8/7/XP gebruikt, of de browserkernelversie lager is dan \<120, moet u de [legacy-versie van ScriptCat](https://github.com/scriptscat/scriptcat/releases) handmatig installeren. v0.16.x is de laatste versie die Manifest V2 ondersteunt. Installatiestappen vindt u hier: [Extensie installeren door uitgepakte map te laden](/use/use.md#load-unpacked-extension-installation).

<a name="1.4.0"></a>

## 1.4.0 (2026-06-26)

Deze release brengt laag-niveau refactoring ter voorbereiding op Firefox MV3, samen met editorervaringsverbeteringen (bewerkmenu, Ctrl+Shift+F opmaak, Monaco quick fix), selectie van zoekmachines op meerdere platforms voor het ontdekken van scripts, nieuwe mogelijkheden zoals `@unwrap` / `window.onurlchange` / `@run-at context-menu`, uitgebreide versteviging van de betrouwbaarheid van cloudopslagsynchronisatie, en een grote reeks GM API-, UI- en stabiliteitsfixes (waaronder een langlopend geheugenlek en beveiligingskwetsbaarheden door prototypevervuiling). De ScriptCat AI Agent is beschikbaar als preview in dev / Beta-builds en is nog niet ingeschakeld in de stabiele release.

### 🚀 Belangrijke nieuwe functies

- 🧪 ScriptCat AI Agent (**Preview — alleen beschikbaar in dev / Beta-builds, nog niet ingeschakeld in stabiel**) — AI-aangedreven agentsysteem met conversationele interactie, toolaanroepen, Skill-systeem, MCP-protocol en meer ([#1324](https://github.com/scriptscat/scriptcat/pull/1324)) (by @CodFrm)
- ✨ Ondersteuning voor de `@unwrap` metadatatag ([#1213](https://github.com/scriptscat/scriptcat/pull/1213)) (by @cyfung1031)
- ✨ Implementatie van TM's `window.onurlchange` via de Navigation API ([#1315](https://github.com/scriptscat/scriptcat/pull/1315)) (by @cyfung1031)
- ✨ Herstel van de ondersteuning voor `@run-at context-menu` ([#1442](https://github.com/scriptscat/scriptcat/pull/1442)) (by @cyfung1031)
- ✨ Het ontdekken van scripts ondersteunt selectie van zoekmachines op meerdere platforms ([#1295](https://github.com/scriptscat/scriptcat/pull/1295)) (by @CodFrm)
- ✨ Meer icoonserviceproviders toegevoegd ([#1333](https://github.com/scriptscat/scriptcat/pull/1333)) (by @cyfung1031)
- ✨ Een updatecontrole-icoon toegevoegd aan de kolom "laatst bijgewerkt" in de scriptlijst ([#1304](https://github.com/scriptscat/scriptcat/pull/1304)) (by @CodFrm)
- ✨ Verbeterde afhandeling van bewerkingsconflicten en scriptnaamconflicten ([#1223](https://github.com/scriptscat/scriptcat/pull/1223)) (by @cyfung1031)

### 🧑‍💻 Editor

- ✨ Bewerkmenu aan de editor toegevoegd (zoeken, vervangen, ongedaan maken, enz.) ([#1303](https://github.com/scriptscat/scriptcat/pull/1303)) (by @CodFrm)
- ✨ De editor ondersteunt Ctrl+Shift+F opmaak ([#1415](https://github.com/scriptscat/scriptcat/pull/1415)) (by @cyfung1031)
- ✨ Monaco quick fix en gebruikersscript-metadatatips verbeterd ([#1461](https://github.com/scriptscat/scriptcat/pull/1461)) (by @cyfung1031)
- 🐛 Ctrl-F / Ctrl-H sneltoetsen hersteld ([#1312](https://github.com/scriptscat/scriptcat/pull/1312)) (by @cyfung1031)
- 🐛 De ESLint-fixfunctie die niet werkte hersteld [#1079](https://github.com/scriptscat/scriptcat/issues/1079) ([#1184](https://github.com/scriptscat/scriptcat/pull/1184)) (by @cyfung1031)
- 🐛 CSS-lay-outproblemen van de editor hersteld ([#1460](https://github.com/scriptscat/scriptcat/pull/1460)) (by @cyfung1031)
- 🐛 Weergave van de ScriptEditor-scriptlijst in lichte thema hersteld ([#1288](https://github.com/scriptscat/scriptcat/pull/1288)) (by @CodFrm)
- 🐛 ScriptEditor-problemen hersteld en verbeterd ([#1258](https://github.com/scriptscat/scriptcat/pull/1258)) (by @cyfung1031)

### ⚡️ Prestatieverbeteringen

- 🚑 Een potentieel geheugenlek tijdens langlopende ScriptCat-sessies hersteld ([#1401](https://github.com/scriptscat/scriptcat/pull/1401)) (by @cyfung1031)
- ⚡️ Afhankelijkheid van het Baidu-bestandssysteem voor globale DNR-regels verwijderd, overgeschakeld naar per-verzoek cookiedeactivering ([#1377](https://github.com/scriptscat/scriptcat/pull/1377)) (by @cyfung1031)
- ⚡️ Selectie van zoekmachines op meerdere platforms voor het ontdekken van scripts geoptimaliseerd ([#1379](https://github.com/scriptscat/scriptcat/pull/1379)) (by @cyfung1031)
- ⚡️ Monospace-lettertype gebruikt voor loadingStatus van de installatiepagina om schokkerigheid te voorkomen ([#1381](https://github.com/scriptscat/scriptcat/pull/1381)) (by @cyfung1031)
- ⚡️ pushValue-verwerking geoptimaliseerd ([#1403](https://github.com/scriptscat/scriptcat/pull/1403)) (by @cyfung1031)
- ⚡️ Volledigere machtigingscontroles en betere gebruikersscript-machtigingstips ([#1251](https://github.com/scriptscat/scriptcat/pull/1251)) (by @cyfung1031)
- ⚡️ Geheugenbeheer en opruimmechanisme van MessageConnect verbeterd ([#1248](https://github.com/scriptscat/scriptcat/pull/1248)) (by @cyfung1031)

### 🐛 Bugfixes

- 🐛 Betrouwbaarheid van cloudopslagsynchronisatie verstevigd (authenticatie, padverwerking en herhaalpoging-logica voor Dropbox / WebDAV / Google Drive / OneDrive) ([#1374](https://github.com/scriptscat/scriptcat/pull/1374) ~ [#1395](https://github.com/scriptscat/scriptcat/pull/1395)) (by @cyfung1031)
- 🐛 Meerdere cloudsynchronisatieproblemen hersteld: OneDrive nul-byte upload, Google Drive / OneDrive foutnormalisatie, S3 aangepaste metadata modifiedDate ([#1405](https://github.com/scriptscat/scriptcat/pull/1405)) ([#1406](https://github.com/scriptscat/scriptcat/pull/1406)) ([#1408](https://github.com/scriptscat/scriptcat/pull/1408)) (by @cyfung1031)
- 🐛 De WebDAV-verificatie-schrijfprobe verwijderd om vals-negatieven te voorkomen bij services met een niet-schrijfbare root (bijv. Nutstore) ([#1445](https://github.com/scriptscat/scriptcat/pull/1445)) (by @CodFrm)
- 🐛 Mislukte cross-origin-aanvragen wanneer de sitetoegangsmachtiging ontbreekt hersteld ([#1477](https://github.com/scriptscat/scriptcat/pull/1477)) (by @cyfung1031)
- 🐛 Edge Android mobiele pop-up-aanpassing hersteld [#686](https://github.com/scriptscat/scriptcat/issues/686) ([#1507](https://github.com/scriptscat/scriptcat/pull/1507)) (by @CodFrm)
- 🐛 Witte achtergrondflits tijdens initieel laden hersteld [#1497](https://github.com/scriptscat/scriptcat/issues/1497) ([#1498](https://github.com/scriptscat/scriptcat/pull/1498)) (by @cyfung1031)
- 🐛 Berichtverbindingen (GM API / poorten) die niet correct werden opgeruimd hersteld ([#1474](https://github.com/scriptscat/scriptcat/pull/1474)) (by @cyfung1031)
- 🐛 `@match`-sjabloonafwijking hersteld wanneer zoeken ontbreekt ([#1466](https://github.com/scriptscat/scriptcat/pull/1466)) (by @cyfung1031)
- 🐛 `protoBaseDescs` toegevoegd om overerving van voorouderklassen in de Tampermonkey half-sandbox te herstellen ([#1463](https://github.com/scriptscat/scriptcat/pull/1463)) (by @cyfung1031)
- 🐛 Ontbrekende null-afhandeling voor msgConn van `GM_xmlhttpRequest` hersteld ([#1433](https://github.com/scriptscat/scriptcat/pull/1433)) (by @cyfung1031)
- 🐛 GM xhr die abnormale onloadend niet correct afhandelde hersteld ([#1412](https://github.com/scriptscat/scriptcat/pull/1412)) (by @cyfung1031)
- 🐛 Problemen met dynamische updates en weergave van de ScriptEditor-lijst hersteld ([#1414](https://github.com/scriptscat/scriptcat/pull/1414)) (by @cyfung1031)
- 🐛 Probleem met het aantal sessieregels bij gelijktijdige xhr hersteld ([#1353](https://github.com/scriptscat/scriptcat/pull/1353)) (by @cyfung1031)
- 🐛 Crash van de hele pagina veroorzaakt door een ongeldige cron-expressie hersteld ([#1327](https://github.com/scriptscat/scriptcat/pull/1327)) (by @cyfung1031)
- 🐛 Falen van alle scripts wanneer één script een time-out krijgt tijdens de batch-updatecontrole hersteld ([#1265](https://github.com/scriptscat/scriptcat/pull/1265)) (by @cyfung1031)
- 🐛 extensionEnv-afhandeling toegevoegd voor isIncognito, userAgent en run-in ([#1368](https://github.com/scriptscat/scriptcat/pull/1368)) (by @cyfung1031)
- 🐛 Gedeeltelijk verborgen onboardingknop hersteld [#1396](https://github.com/scriptscat/scriptcat/issues/1396) ([#1398](https://github.com/scriptscat/scriptcat/pull/1398)) (by @cyfung1031)
- 🐛 Verborgen tooltip op de scriptbeheerpagina hersteld [#1386](https://github.com/scriptscat/scriptcat/issues/1386) ([#1387](https://github.com/scriptscat/scriptcat/pull/1387)) (by @Xdy1579883916)
- 🐛 Zijbalk die abnormaal herschalen in kaartmodus veroorzaakte hersteld [#1179](https://github.com/scriptscat/scriptcat/issues/1179) ([#1373](https://github.com/scriptscat/scriptcat/pull/1373)) (by @cyfung1031)
- 🐛 Onjuiste origin ingesteld bij het installeren van lokale bestanden via slepen-en-neerzetten hersteld ([#1371](https://github.com/scriptscat/scriptcat/pull/1371)) (by @cyfung1031)
- 🐛 Taalwisselingsmelding hersteld ([#1380](https://github.com/scriptscat/scriptcat/pull/1380)) (by @cyfung1031)
- 🐛 Logweergave-UI verbeterd ([#1372](https://github.com/scriptscat/scriptcat/pull/1372)) (by @cyfung1031)
- 🐛 UserConfigPanel CSS hersteld ([#1361](https://github.com/scriptscat/scriptcat/pull/1361)) (by @cyfung1031)
- 🐛 `Object.create(null)` gebruikt voor het lege object in create_context ([#1397](https://github.com/scriptscat/scriptcat/pull/1397)) (by @cyfung1031)
- 🐛 Logica voor stille updates en verbindingsmachtigingen voor geabonneerde scripts hersteld ([#1201](https://github.com/scriptscat/scriptcat/pull/1201)) (by @cyfung1031)
- 🐛 Queryknop op de logpagina die de tijd niet ververste hersteld ([#1294](https://github.com/scriptscat/scriptcat/pull/1294)) (by @CodFrm)

### 🔒 Beveiligingsverbeteringen

- 🔒 Prototypevervuiling via onbetrouwbare YAML-gebruikersconfiguratiesleutels hersteld ([#1494](https://github.com/scriptscat/scriptcat/pull/1494)) (by @qdzsh)
- 🔒 Alle npm-afhankelijkheidsbeveiligingskwetsbaarheden hersteld ([#1350](https://github.com/scriptscat/scriptcat/pull/1350)) ([#1364](https://github.com/scriptscat/scriptcat/pull/1364)) ([#1365](https://github.com/scriptscat/scriptcat/pull/1365)) (by @cyfung1031)

### ♻️ Refactoring & Compatibiliteit

- ♻️ Laag-niveau refactoring ter voorbereiding op de Firefox MV3-aanpassing ([#1457](https://github.com/scriptscat/scriptcat/pull/1457)) ([#1480](https://github.com/scriptscat/scriptcat/pull/1480)) (by @cyfung1031)
- ♻️ Scriptresource-updatelogica (updateResource) en gelijktijdigheidscontrole gerefactored, resourcecache-compatibiliteit hersteld ([#1193](https://github.com/scriptscat/scriptcat/pull/1193)) (by @cyfung1031)
- ♻️ jszip vervangen door JSZipp voor ZIP-verwerking (back-up importeren / exporteren) en de ongebruikte jszip-afhankelijkheid verwijderd ([#1479](https://github.com/scriptscat/scriptcat/pull/1479)) (by @cyfung1031)
- ♻️ Offscreen ↔ ServiceWorker-communicatie via het postMessage-kanaal verenigd ([#1299](https://github.com/scriptscat/scriptcat/pull/1299)) (by @CodFrm)
- ♻️ VSCodeConnect-code gerefactored ([#1170](https://github.com/scriptscat/scriptcat/pull/1170)) (by @cyfung1031)
- ⚡️ ts.worker.js gecomprimeerd tot 4 MB om AMO-validatie te doorstaan, MV3-achtergrondmachtigingsfout hersteld ([#1221](https://github.com/scriptscat/scriptcat/pull/1221)) (by @cyfung1031)

### 🌐 Internationalisering

- 🌐 Meertalige terminologievertalingen hersteld (voornamelijk traditioneel Chinees verbeterd) en vertaalterminologierichtlijnen toegevoegd ([#1468](https://github.com/scriptscat/scriptcat/pull/1468)) (by @cyfung1031)

### Overig

- ✨ De fetchIconByDomain-icoondienst overgeschakeld naar scriptcat.org ([#1268](https://github.com/scriptscat/scriptcat/pull/1268)) (by @cyfung1031)
- 🔥 Crowdin- en ach-UG-pseudotaalgerelateerde inhoud verwijderd ([#1385](https://github.com/scriptscat/scriptcat/pull/1385)) (by @CodFrm)

<a name="0.16.15"></a>

## 0.16.15 (2026-05-19)

### 🐛 Bugfixes

- 🐛 Buildopdracht van het MV2-pakketteringsscript hersteld [#1423](https://github.com/scriptscat/scriptcat/issues/1423) (by @CodFrm)
- 🐛 Aangepast aan WebExtensions API-wijzigingen (Firefox 149-152), inclusief CSP-aanpassingen ([#1448](https://github.com/scriptscat/scriptcat/pull/1448)) (by @cyfung1031)

<a name="0.16.14"></a>

## 0.16.14 (2026-04-26)

### 🚀 Belangrijke nieuwe functies

- ✨ FirefoxMV2-synchronisatie met MV3-hoofdzaken: TypeScript geüpgraded naar 4.9, tsconfig geüpgraded naar es2022; scriptsjablonen (normal/crontab/background) uitgelijnd met MV3; cron verbeterd met ondersteuning voor de `once(...)`-expressie; meertalige ondersteuning voor Monaco Editor ([#1331](https://github.com/scriptscat/scriptcat/pull/1331)) (by @cyfung1031)

### ♻️ Refactoring & Compatibiliteit

- 🔥 axios-afhankelijkheid verwijderd om met MV3 uit te lijnen ([#1339](https://github.com/scriptscat/scriptcat/pull/1339)) (by @cyfung1031)

### 🐛 Bugfixes

- 🐛 Geneste iframe van window.parent dat geen postMessage-berichten ontving hersteld ([#1335](https://github.com/scriptscat/scriptcat/pull/1335)) (by @cyfung1031)

<a name="1.3.2"></a>

## 1.3.2 (2026-03-28)

### 🐛 Bugfixes

- 🐛 Accept-header uit fetchScriptBody verwijderd om fout 406 te voorkomen ([#1306](https://github.com/scriptscat/scriptcat/pull/1306)) (by @cyfung1031)
- 🐛 WebDAV-cookie-authenticatieconflict en authType-ondersteuning hersteld ([#1308](https://github.com/scriptscat/scriptcat/pull/1308)) (by @CodFrm)
- 🐛 Opmaakfouten correct weergegeven ([#1310](https://github.com/scriptscat/scriptcat/pull/1310)) (by @cyfung1031)
- 🐛 chrome.storage.local gebruikt voor apparaatspecifieke configuraties om cross-device-synchronisatie te voorkomen ([#1309](https://github.com/scriptscat/scriptcat/pull/1309)) (by @CodFrm)
- 🐛 Problemen met code-editor-tips hersteld ([#1301](https://github.com/scriptscat/scriptcat/pull/1301)) (by @cyfung1031)
- 🐛 Afgeknipte datumkiezer-pop-up op de logpagina hersteld ([#1292](https://github.com/scriptscat/scriptcat/pull/1292)) (by @cyfung1031)
- 🐛 Ontbindknop die verscheen wanneer geen clouddrive is gekoppeld hersteld ([#1291](https://github.com/scriptscat/scriptcat/pull/1291)) (by @CodFrm)
- 🐛 Verborgen pop-up hersteld ([#1290](https://github.com/scriptscat/scriptcat/pull/1290)) (by @cyfung1031)

<a name="1.3.1"></a>

## 1.3.1 (2026-03-13)

### 🐛 Bugfixes

- 🚑 Omgevingsdetectiefout veroorzaakt door andere extensies die chrome.runtime injecteren hersteld [#1280](https://github.com/scriptscat/scriptcat/issues/1280) ([#1281](https://github.com/scriptscat/scriptcat/pull/1281)) (by @CodFrm)

### Overig

- ✅ Playwright E2E-tests en functionele GM API-tests toegevoegd ([#1283](https://github.com/scriptscat/scriptcat/pull/1283)) (by @CodFrm)

<a name="1.3.0"></a>

## 1.3.0 (2026-03-10)

Deze update brengt Amazon S3-opslag, scriptruntime-opties, installatie zonder toegang tot externe websites en meer. Het optimaliseert het berichtensysteem en de React-prestaties aanzienlijk, herstelt talrijke GM API-, UI- en stabiliteitsproblemen en bevat uitgebreide kwaliteitsverbeteringen van de code.

### 🚀 Belangrijke nieuwe functies

- ✨ Amazon S3-opslag toegevoegd [#1146](https://github.com/scriptscat/scriptcat/issues/1146) ([#1189](https://github.com/scriptscat/scriptcat/pull/1189)) (by @CodFrm)
- ✨ Scriptruntime-opties ([#895](https://github.com/scriptscat/scriptcat/pull/895)) (by @CodFrm)
- ✨ Installatie zonder toegang tot externe website + lay-outaanpassingen van de installatiepagina ([#842](https://github.com/scriptscat/scriptcat/pull/842)) (by @cyfung1031)
- ✨ Grijze icoon weergeven wanneer de scriptfunctionaliteit is uitgeschakeld [#897](https://github.com/scriptscat/scriptcat/issues/897) (by @CodFrm)
- ✨ Interactie geoptimaliseerd wanneer het aantal uitgeklapte menuitems 0 is [#868](https://github.com/scriptscat/scriptcat/issues/868) (by @CodFrm)
- ✨ `@noframes` standaard in het sjabloon om veelvoorkomende fouten te voorkomen ([#900](https://github.com/scriptscat/scriptcat/pull/900)) (by @cyfung1031)
- ✨ Voorkomen dat een installatielink wordt aangezien voor een nieuwe installatie wanneer de scriptnaam verandert ([#824](https://github.com/scriptscat/scriptcat/pull/824)) (by @cyfung1031)
- ✨ `@grant`-conflictvalidatie hersteld, foutmelding voor dubbele metadataverklaring toegevoegd ([#902](https://github.com/scriptscat/scriptcat/pull/902)) (by @cyfung1031)
- ✨ `@version` zonder of met lege waarde geaccepteerd ([#1216](https://github.com/scriptscat/scriptcat/pull/1216)) (by @cyfung1031)
- ✨ Positie van de verborgen editorzijbalk aangepast [#1185](https://github.com/scriptscat/scriptcat/issues/1185) ([#1254](https://github.com/scriptscat/scriptcat/pull/1254)) (by @CodFrm)

### 🧩 GM API-wijzigingen

- 🐛 GM_addElement-probleem hersteld, bewerking naar de contentomgeving verplaatst ([#1233](https://github.com/scriptscat/scriptcat/pull/1233)) (by @cyfung1031)
- 🐛 `conflictAction`-parameter aan `GM_download` toegevoegd ([#1250](https://github.com/scriptscat/scriptcat/pull/1250)) (by @cyfung1031)
- 🐛 Async-declaraties van de GM API hersteld, Promise correct geretourneerd ([#1169](https://github.com/scriptscat/scriptcat/pull/1169)) (by @cyfung1031)
- ♻️ Firefox-compatibiliteit: GM_setClipboard ([#928](https://github.com/scriptscat/scriptcat/pull/928)) (by @cyfung1031)
- 🐛 GM_value-probleem hersteld [#1192](https://github.com/scriptscat/scriptcat/issues/1192) (by @CodFrm)
- 🐛 Downloadbestandsnaam die geen mappen ondersteunde hersteld ([#1203](https://github.com/scriptscat/scriptcat/pull/1203)) (by @cyfung1031)

### ⚡️ Prestatieverbeteringen

- ♻️ Berichtensysteem gerefactored: storage.local-broadcast + Firefox MV3 scripting-compliance + niet-traceerbare dynamische synchronisatie MessageFlag ([#1067](https://github.com/scriptscat/scriptcat/pull/1067)) (by @cyfung1031)
- ⚡️ React-herrenderingsproblemen hersteld (ScriptCard & ScriptTable) ([#1182](https://github.com/scriptscat/scriptcat/pull/1182)) (by @cyfung1031)
- ⚡️ React-herrenderingsproblemen hersteld (Popup) ([#1181](https://github.com/scriptscat/scriptcat/pull/1181)) (by @cyfung1031)
- ⚡️ Repo-prestaties geoptimaliseerd ([#1232](https://github.com/scriptscat/scriptcat/pull/1232)) (by @CodFrm)
- ⚡️ Metadata buiten chrome.storage.session verplaatst ([#1027](https://github.com/scriptscat/scriptcat/pull/1027)) (by @cyfung1031)
- ⚡️ Tekensetdetectie verbeterd ([#1140](https://github.com/scriptscat/scriptcat/pull/1140)) (by @cyfung1031)
- ⚡️ Iconen op URL opgeslagen om dubbele opslag tussen scripts te voorkomen ([#909](https://github.com/scriptscat/scriptcat/pull/909)) (by @cyfung1031)
- ⚡️ parseMetadata-code geoptimaliseerd ([#903](https://github.com/scriptscat/scriptcat/pull/903)) (by @cyfung1031)
- 🐛 Geheugenlekken en blootstelling van objecteigenschappen hersteld ([#1242](https://github.com/scriptscat/scriptcat/pull/1242)) (by @cyfung1031)
- ♻️ Redux verwijderd, statusbeheer vereenvoudigd ([#1206](https://github.com/scriptscat/scriptcat/pull/1206)) (by @cyfung1031)

### 🧑‍💻 Editor

- ✨ Monaco Editor-instellingen geoptimaliseerd, `/* global xxx */`-fix toegevoegd ([#1012](https://github.com/scriptscat/scriptcat/pull/1012)) (by @cyfung1031)
- ✨ Meertalige Monaco Editor-tips en `@require-css`-tip toegevoegd ([#960](https://github.com/scriptscat/scriptcat/pull/960)) (by @cyfung1031)

### 🐛 Bugfixes

- 🐛 Conflicterende machtigingscontrole van incognitovenster die herhaalde herstarts veroorzaakte hersteld (by @CodFrm)
- 🐛 Verwerking van include `*?*`-expressie hersteld [#1271](https://github.com/scriptscat/scriptcat/issues/1271) ([#1272](https://github.com/scriptscat/scriptcat/pull/1272)) (by @CodFrm)
- 🔒 HTML-inhoud van aankondigingsmeldingen gesaneerd met DOMPurify ([#1274](https://github.com/scriptscat/scriptcat/pull/1274)) (by @CodFrm)
- 🐛 Niet-werkende machtigingsbeheercontrole van scriptinstellingen hersteld ([#1267](https://github.com/scriptscat/scriptcat/pull/1267)) (by @CodFrm)
- 🐛 Pop-upinhoud die de schermscroll volgde hersteld [#1256](https://github.com/scriptscat/scriptcat/issues/1256) ([#1263](https://github.com/scriptscat/scriptcat/pull/1263)) (by @cyfung1031)
- 🐛 Parsingfout van installatielink hersteld [#1235](https://github.com/scriptscat/scriptcat/issues/1235) ([#1260](https://github.com/scriptscat/scriptcat/pull/1260)) (by @cyfung1031)
- 🐛 Sleepcomponent die focusin/focusout-vertraging veroorzaakte hersteld [#1224](https://github.com/scriptscat/scriptcat/issues/1224) ([#1243](https://github.com/scriptscat/scriptcat/pull/1243)) (by @CodFrm)
- 🐛 Niet-werkende externe extensie-API hersteld ([#1217](https://github.com/scriptscat/scriptcat/pull/1217)) (by @cyfung1031)
- 🐛 Grant-probleem hersteld ([#1199](https://github.com/scriptscat/scriptcat/pull/1199)) (by @CodFrm)
- 🐛 Ontbrekende UserAgentData in content.js hersteld ([#1183](https://github.com/scriptscat/scriptcat/pull/1183)) (by @cyfung1031)
- 🐛 Scriptcoderingsprobleem aangepakt [#1115](https://github.com/scriptscat/scriptcat/issues/1115) ([#1138](https://github.com/scriptscat/scriptcat/pull/1138)) (by @CodFrm)
- 🐛 Weergave van scripticonen hersteld [#1052](https://github.com/scriptscat/scriptcat/issues/1052) ([#1104](https://github.com/scriptscat/scriptcat/pull/1104)) (by @CodFrm)
- 🐛 UnoCSS-voorvoegsel toegevoegd om CSS-conflicten op te lossen, CSS-lay-out hersteld ([#1013](https://github.com/scriptscat/scriptcat/pull/1013)) (by @cyfung1031)
- 🐛 Bestaand Alarm gewist bij het kiezen van onregelmatige scriptupdatecontrole ([#996](https://github.com/scriptscat/scriptcat/pull/996)) (by @cyfung1031)
- 🐛 Importeren &amp; exporteren - onjuiste datum/tijd van laatste wijziging van scripts hersteld ([#951](https://github.com/scriptscat/scriptcat/pull/951)) (by @cyfung1031)
- 🐛 Weergave van scriptnaam en -beschrijving met i18n-taalvoorvoegsel hersteld [#1123](https://github.com/scriptscat/scriptcat/issues/1123) (by @CodFrm)
- 🐛 Unregister dat niet correct werd uitgevoerd hersteld ([#1231](https://github.com/scriptscat/scriptcat/pull/1231)) (by @cyfung1031)

### ♻️ Refactoring & Compatibiliteit

- ♻️ userScripts / scripting API-aanpassingen, compatibiliteit verbeterd (redo #704) ([#925](https://github.com/scriptscat/scriptcat/pull/925)) (by @cyfung1031)
- ♻️ Cron-gerelateerde wijzigingen: bugfixes, i18n, once-expressieverbetering, cron-bibliotheek geüpgraded ([#1126](https://github.com/scriptscat/scriptcat/pull/1126)) (by @cyfung1031)
- ♻️ Scripticonladen gerefactored en geoptimaliseerd ([#893](https://github.com/scriptscat/scriptcat/pull/893)) (by @CodFrm)
- ♻️ Tekstdecodering verbeterd ([#1166](https://github.com/scriptscat/scriptcat/pull/1166)) (by @cyfung1031)
- ⬆️ Swc-compatibele kernelversie geüpgraded ([#1186](https://github.com/scriptscat/scriptcat/pull/1186)) (by @cyfung1031)

### 🎨 UI-verbeteringen

- 🎨 Standaard extensiepictogrambadgenummer gewijzigd naar scriptaantal [#989](https://github.com/scriptscat/scriptcat/issues/989) (by @CodFrm)
- 🎨 Installatiepagina-URL mooier gemaakt ([#993](https://github.com/scriptscat/scriptcat/pull/993)) (by @cyfung1031)
- 🐛 DraggableEntry gerefactored, uitlijning van kaarthoogte hersteld ([#1245](https://github.com/scriptscat/scriptcat/pull/1245)) (by @cyfung1031)

### Diversen

- 🔒 Beveiligingsverbeteringen (DOMPurify, kwetsbaarheidsfixes voor npm-afhankelijkheden)
- 👷 Rspack-bundelingoptimalisatie, fixes voor de buildtoolketen
- ⬆️ Versie-updates van afhankelijkheden

**Volledig wijzigingslogboek:** [Vergelijk v1.2.6...v1.3.0](https://github.com/scriptscat/scriptcat/compare/v1.2.6...v1.3.0)

<a name="1.2.6"></a>

## 1.2.6 (2026-02-03)

### Hersteld

- 🐛 structuredClone-fout hersteld ([#1192](https://github.com/scriptscat/scriptcat/issues/1192)) [[265e122](https://github.com/scriptscat/scriptcat/commit/265e122342366b166d3122cc8da485cb1295b924)] (by @cyfung1031)

<a name="1.2.5"></a>

## 1.2.5 (2026-02-02)

### Hersteld

- 🐛 Verwijderingsprobleem van scriptsynchronisatie hersteld [#1158](https://github.com/scriptscat/scriptcat/issues/1158) [[5e91a31](https://github.com/scriptscat/scriptcat/commit/5e91a31e02761ba8061e3de1f4d15fc1d964346c)] (by @CodFrm)
- 🐛 Compatibel met TM &#x60;@match www.website.com/*&#x60; ([#1165](https://github.com/scriptscat/scriptcat/issues/1165)) [[da66ff7](https://github.com/scriptscat/scriptcat/commit/da66ff70d25c3087cb8405289dc8b14df9c15f05)] (by @cyfung1031)
- 🐛 Meest recente Edge-versie 144 voegt gebruikersscripts toe [#1157](https://github.com/scriptscat/scriptcat/issues/1157) [[f7c1c73](https://github.com/scriptscat/scriptcat/commit/f7c1c730cf39cae02a9e6f815e3113ea9d2a8a05)] (by @CodFrm)
- 🐛 Probleem met continue bewaking van FileSystemObserver hersteld ([#1160](https://github.com/scriptscat/scriptcat/issues/1160)) [[9556769](https://github.com/scriptscat/scriptcat/commit/95567690d1bf77bfe8bedfd6a94c88949a77e115)] (by @cyfung1031)
- 🐛 Kleine fixes in locales.ts ([#1154](https://github.com/scriptscat/scriptcat/issues/1154)) [[1c44b68](https://github.com/scriptscat/scriptcat/commit/1c44b680dab3a95a51eb73cf92531efd0a192dc9)] (by @cyfung1031)
- 🐛 Tijdprobleem van het pop-upupdatervenster hersteld ([#1155](https://github.com/scriptscat/scriptcat/issues/1155)) [[c17f761](https://github.com/scriptscat/scriptcat/commit/c17f761807fb9b14aff09b9b08d19e4cbe72b8a5)] (by @cyfung1031)
- 🐛 Weergave van scriptnaam en -beschrijving met i18n-taalvoorvoegsel hersteld [#1123](https://github.com/scriptscat/scriptcat/issues/1123) [[7ef7355](https://github.com/scriptscat/scriptcat/commit/7ef7355632fc989fa1cad44fd2069ff840bbd8df)] (by @CodFrm)
- 🐛 Waardereferentieprobleem aangepakt [#1141](https://github.com/scriptscat/scriptcat/issues/1141) ([#1147](https://github.com/scriptscat/scriptcat/issues/1147)) [[0892fcd](https://github.com/scriptscat/scriptcat/commit/0892fcd452758030553c33ddf14f1ce4bc6d3efc)] (by @cyfung1031)

<a name="1.2.4"></a>

## 1.2.4 (2026-01-07)

Synchronisatiefouten hersteld en versie-updates openen het wijzigingslogboek niet langer automatisch

### Toegevoegd

- ✨ Synchronisatieverwijdering is nu standaard uitgeschakeld ([#958](https://github.com/scriptscat/scriptcat/issues/958)) [[9c4c7dc](https://github.com/scriptscat/scriptcat/commit/9c4c7dc411357746db43a306d97ac41a71f2b49c)] (by @cyfung1031)
- ✨ Editor ondersteunt nu GM.\* ([#1129](https://github.com/scriptscat/scriptcat/issues/1129)) [[bea0192](https://github.com/scriptscat/scriptcat/commit/bea0192c6cc50eff2ed4e1cc5dcc25f36bbe10e7)] (by @cyfung1031)

### Gewijzigd

- ♻️ Logica voor het openen van de wijzigingslogboekpagina geoptimaliseerd [#1110](https://github.com/scriptscat/scriptcat/issues/1110) [[d3ffedc](https://github.com/scriptscat/scriptcat/commit/d3ffedcffe752ca548f87f1640072fcd871b8604)] (by @CodFrm)

### Hersteld

- 🐛 scriptcat.d.tpl &amp; typefixes ([#1130](https://github.com/scriptscat/scriptcat/issues/1130)) [[dd22ef5](https://github.com/scriptscat/scriptcat/commit/dd22ef544684d69e24a7aae098cb05cbab03daa8)] (by @cyfung1031)
- 🐛 Cloudsynchronisatieproblemen hersteld ([#1133](https://github.com/scriptscat/scriptcat/issues/1133)) [[a9383d2](https://github.com/scriptscat/scriptcat/commit/a9383d2012eb3953dc33c8886ce3891f404fa100)] (by @CodFrm)
- 🐛 &#x60;GM_addElement(&quot;tagName&quot;)&#x60;-fout hersteld ([#1120](https://github.com/scriptscat/scriptcat/issues/1120)) [[ad19de5](https://github.com/scriptscat/scriptcat/commit/ad19de5c1793c8c079bedbf1b11c7c2ae27a469e)] (by @cyfung1031)
- 🐛 Opruimlogica verwijderd en checkuserscript-logica geoptimaliseerd ([#1113](https://github.com/scriptscat/scriptcat/issues/1113)) [[e635911](https://github.com/scriptscat/scriptcat/commit/e635911a3c11c3cb8acd1cfd507cb777e5ee7236)] (by @CodFrm)

### Diversen

- 🏷️ TypeScript-revisies ([#1127](https://github.com/scriptscat/scriptcat/issues/1127)) [[b455724](https://github.com/scriptscat/scriptcat/commit/b4557244191018c18d5ce8ea8e8627bcfb7f7cdd)] (by @cyfung1031)
- 📝 Voorbeeldcommentaaraanvullingen ([#1131](https://github.com/scriptscat/scriptcat/issues/1131)) [[292549e](https://github.com/scriptscat/scriptcat/commit/292549ed0f65952fe9f269aace23eefc7d6a3a0f)] (by @cyfung1031)

<a name="1.2.3"></a>

## 1.2.3 (2025-12-20)

Enkele bugfixes

### Gewijzigd

- ⚡ Weergave van de volgende uitvoeringstijd geoptimaliseerd [#1093](https://github.com/scriptscat/scriptcat/issues/1093) [[324ce51](https://github.com/scriptscat/scriptcat/commit/324ce515c84699ca8d3bf1ee447fc6ef0656ae0d)] (by @CodFrm)

### Hersteld

- 🐛 URL-matchingprobleem voor vroege scripts hersteld ([#1096](https://github.com/scriptscat/scriptcat/issues/1096)) [[a77effb](https://github.com/scriptscat/scriptcat/commit/a77effbab5ab4d1752065ef943d9c050ff99c066)] (by @cyfung1031)
- 🐛 Probleem met te kort weergegeven updatervenster hersteld ([#1088](https://github.com/scriptscat/scriptcat/issues/1088)) [[b2b2d5c](https://github.com/scriptscat/scriptcat/commit/b2b2d5c41ff70ee5430f7d8d156f480ac8fc3a1a)] (by @cyfung1031)
- 🐛 Abnormale weergave hersteld wanneer gebruikersscriptmelding is ingeschakeld ([#1086](https://github.com/scriptscat/scriptcat/issues/1086)) ([959c4db](https://github.com/scriptscat/scriptcat/commit/959c4dbed92f7bfe22a2f8ebb775c4189b5ff076))
- 🐛 responseHeaders: &#x60;TM-compatibiliteit: \\r\\n&#x60; ([#1085](https://github.com/scriptscat/scriptcat/issues/1085)) [[15232c8](https://github.com/scriptscat/scriptcat/commit/15232c8543d93abfdafa1353d39d8a15d1dc385f)] (by @cyfung1031)
- 🐛 GM XHR-problemen hersteld ([#1082](https://github.com/scriptscat/scriptcat/issues/1082)) [[3d987c3](https://github.com/scriptscat/scriptcat/commit/3d987c300242a3c765146359c35ecd6d998f792c)] (by @CodFrm)

### Diversen

- 🌐 i18n-problemen op pop-uppagina's aangepakt [#1081](https://github.com/scriptscat/scriptcat/issues/1081) [[6b17d71](https://github.com/scriptscat/scriptcat/commit/6b17d7100e8572d72b3b7aaf8ea38be9cdf33f5f)] (by @CodFrm)

<a name="1.2.2"></a>

## 1.2.2 (2025-12-13)

Enkele bugfixes

### Hersteld

- 🐛 Frequente achtergrondsynchronisatieprobleem hersteld ([#1076](https://github.com/scriptscat/scriptcat/issues/1076)) [[45dc39b](https://github.com/scriptscat/scriptcat/commit/45dc39baa0f3326cf12e97312ab632dc46ba40f2)] (by @CodFrm)
- 🐛 Probleem met speciale tabbladverwerking hersteld [#1066](https://github.com/scriptscat/scriptcat/issues/1066) ([50904fb](https://github.com/scriptscat/scriptcat/commit/50904fb46efdea10fd57677bc2d28c770b47e861))
- 🐛 Scriptverwerking zonder matchregels hersteld [#1071](https://github.com/scriptscat/scriptcat/issues/1071) ([560cdc0](https://github.com/scriptscat/scriptcat/commit/560cdc01fc0fc27fb7d0e3b877c63ba431206668))
- 🐛 CI-pakketteringsprobleem dat optionele achtergrondmachtigingen verwijderde hersteld [[1f002f0](https://github.com/scriptscat/scriptcat/commit/1f002f0edf9892f023ae93b8522ff7c5e4a96559)] (by @CodFrm)
- 🐛 Genegeerd tabblad hersteld ([#1058](https://github.com/scriptscat/scriptcat/issues/1058)) [[6165bf4](https://github.com/scriptscat/scriptcat/commit/6165bf48eb1d53ede0561c85c30135446c2ff882)] (by @cyfung1031)

<a name="1.2.1"></a>

## 1.2.1 (2025-12-06)

Enkele bugfixes en afhandeling van opties voor achtergronduitvoering.

### Toegevoegd

- ✨ Optie voor achtergronduitvoering toegevoegd ([#1048](https://github.com/scriptscat/scriptcat/issues/1048)) [[626e84d](https://github.com/scriptscat/scriptcat/commit/626e84dbd4dda0731e0a5ffdbdf71ae10e884489)] (by @CodFrm)

### Hersteld

- 🐛 Probleem met het opnieuw instellen van de berichtlistener door document.write hersteld ([#1055](https://github.com/scriptscat/scriptcat/issues/1055)) [[1f3a3ec](https://github.com/scriptscat/scriptcat/commit/1f3a3ec335ed4b519599e9aa3036c66b6f0d10b2)] (by @cyfung1031)
- 🐛 Filterfunctionaliteit van de lijstweergave hersteld [[e272dc6](https://github.com/scriptscat/scriptcat/commit/e272dc6ed151c15a1ef785b70ae100cb9e74a5dd)] (by @CodFrm)
- 🐛 UserAgentData in vroege fase aangepakt ([#1045](https://github.com/scriptscat/scriptcat/issues/1045)) [[b4e08a8](https://github.com/scriptscat/scriptcat/commit/b4e08a812a08f42037837bbee54610ebc565063f)] (by @cyfung1031)
- 🐛 useOpen-optie voor GM_openInTab hersteld [#1043](https://github.com/scriptscat/scriptcat/issues/1043) ([#1044](https://github.com/scriptscat/scriptcat/issues/1044)) [[7f30198](https://github.com/scriptscat/scriptcat/commit/7f30198909824871e694d5ffbe7088e44a6d0b45)] (by @cyfung1031)
- 🐛 userScripts undefined-probleem hersteld ([#1041](https://github.com/scriptscat/scriptcat/issues/1041)) [[4f2deda](https://github.com/scriptscat/scriptcat/commit/4f2deda69aa6aae7f6e791be1cd965a440b80e33)] (by @cyfung1031)
- 🐛 Onjuiste verwijzing naar `"monaco-editor"` in `AppContext` hersteld ([#983](https://github.com/scriptscat/scriptcat/issues/983)) [[4b8dae1](https://github.com/scriptscat/scriptcat/commit/4b8dae1f49208d13c4d19c4c627762fc1b04ea5e)] (by @cyfung1031)

**Volledig wijzigingslogboek:** [Vergelijk v1.2.0...v1.2.1](https://github.com/scriptscat/scriptcat/compare/v1.2.0...v1.2.1)

<a name="1.2.0"></a>

## 1.2.0 (2025-11-29)

Deze update brengt een zijbalk voor de scriptlijst, kaartweergave, vriendelijkere updatecontrolelogica, editorconfiguratie en meer. Injectie- en runtimestabiliteit zijn aanzienlijk verbeterd, kritieke problemen met CSP, sandbox en GM API zijn hersteld, en er zijn ook prestatie- en structurele optimalisaties doorgevoerd.

Zie voor meer details het wijzigingslogboek van v1.2.0-beta.x en de [v1.2](https://docs.scriptcat.org/docs/change/v1.2/)-documentatie.

### 🚀 Belangrijke nieuwe functies

- ✨ Zijbalk voor scriptlijst [#794](https://github.com/scriptscat/scriptcat/issues/794) (by @CodFrm)
- ✨ Kaartweergave [#860](https://github.com/scriptscat/scriptcat/issues/860) (by @CodFrm)
- ✨ Vriendelijkere updatecontrolelogica [#755](https://github.com/scriptscat/scriptcat/issues/755) (by @cyfung1031)
- ✨ Editorconfiguratie en editortypedefinities toegevoegd [#708](https://github.com/scriptscat/scriptcat/pull/708) (by @CodFrm)
- ✨ Scriptaantal in pop-up weergegeven ([#973](https://github.com/scriptscat/scriptcat/issues/973)) [[1134586](https://github.com/scriptscat/scriptcat/commit/1134586ff040ffc0cdddd3538e9ec493950c948a)] (by @cyfung1031)
- ✨ Lay-outmenu toegevoegd om de codezijbalk te verbergen [#689](https://github.com/scriptscat/scriptcat/issues/689) [[dd64da7](https://github.com/scriptscat/scriptcat/commit/dd64da719c081acbf21645e2b1e1f38653ffae8c)]
- ✨ SC-versiecontroleknop toegevoegd ([#795](https://github.com/scriptscat/scriptcat/issues/795)) [[1680c66](https://github.com/scriptscat/scriptcat/commit/1680c66099120c0e497c1a1f5321f38fe0160ea0)] (by @cyfung1031)
- ✨ Enquêtepagina na verwijdering van de extensie toegevoegd [[6404c8f](https://github.com/scriptscat/scriptcat/commit/6404c8f74aff09b15725a92f8afdfc0d71ac188f)]

### 🧩 GM API-wijzigingen

- ✨ Injectie-into ondersteuning, scripts kunnen nu in de contentomgeving worden geïnjecteerd [#711](https://github.com/scriptscat/scriptcat/issues/711)
- ✨ GM_openInTab ondersteunt vastgezette vensters, openen in incognitovenster en andere parameters [#788](https://github.com/scriptscat/scriptcat/pull/788) (by @cyfung1031)
- ✨ GM_registerMenuCommand ondersteunt submenu en scheidingsteken [#831](https://github.com/scriptscat/scriptcat/pull/831) (by @cyfung1031)
- 🗑 useOpen-optie uit GM_openInTab verwijderd [#867](https://github.com/scriptscat/scriptcat/pull/867)
- ♻️ `@connect`-logica aangepast ([#969](https://github.com/scriptscat/scriptcat/issues/969)) [[67914d2](https://github.com/scriptscat/scriptcat/commit/67914d2b7d57fa9c69706ae57ee5d3400c2643f9)] (by @cyfung1031)
- ♻️ `GM_xmlhttpRequest` en gerelateerde code gerefactored ([#901](https://github.com/scriptscat/scriptcat/issues/901)) [[fabd2e9](https://github.com/scriptscat/scriptcat/commit/fabd2e944235b460bc73df346b79d23ee4540af7)] (by @cyfung1031)

### Overig

- ⚡️ Stabiliteits- en prestatieoptimalisaties
- 🐛 Diverse problemen hersteld
- ♻️ Codestructuuroptimalisatie
- 🌐 i18n-verbeteringen

**Volledig wijzigingslogboek:** [Vergelijk v1.1.2...v1.2.0](https://github.com/scriptscat/scriptcat/compare/v1.1.2...v1.2.0)

<a name="1.1.2"></a>

## 1.1.2 (2025-09-18)

Bugfixes

### Hersteld

- 🐛 Sandbox toString-probleem hersteld [#737](https://github.com/scriptscat/scriptcat/issues/737) [[6ca24c9](https://github.com/scriptscat/scriptcat/commit/6ca24c9b171792035803ac4e1c69e473629f9d18)]
- 🐛 Probleem met badge die 0 weergeeft hersteld [[026c1d2](https://github.com/scriptscat/scriptcat/commit/026c1d2071dd4cfb6291f005d36717bcdf0a51c3)]
- 🐛 CSP-probleem van scriptinjectie hersteld [#739](https://github.com/scriptscat/scriptcat/issues/739) [#728](https://github.com/scriptscat/scriptcat/issues/728) [[5da21b5](https://github.com/scriptscat/scriptcat/commit/5da21b5e3d0e7e86a1fd5dff57ba03ea641c19fa)]
- 🐛 Achtergrondscript dat niet uitklapte op de pop-uppagina hersteld [[66ab70f](https://github.com/scriptscat/scriptcat/commit/66ab70fb10c28aaf0c9260a9591aab7e1ae35615)]
- 🐛 Berichttypevalidatie versterkt [#676](https://github.com/scriptscat/scriptcat/issues/676) [[5073795](https://github.com/scriptscat/scriptcat/commit/50737957507ff9af3aa9ba9a6b7d444b643d1ff2)]
- 🐛 GM xhr document-probleem hersteld [#716](https://github.com/scriptscat/scriptcat/issues/716) [[1c46546](https://github.com/scriptscat/scriptcat/commit/1c465462f4e14ae461d54358710f5caf74208af3)]

<a name="1.1.1"></a>

## 1.1.1 (2025-09-07)

### Toegevoegd

- ✨ Aangepaste editorconfiguratie en editortypedefinities toegevoegd ([#708](https://github.com/scriptscat/scriptcat/issues/708)) [[49eb379](https://github.com/scriptscat/scriptcat/commit/49eb3794774790d61c3ef787c865a9ba6fe82841)]

### Hersteld

- 🐛 Compatibiliteitsproblemen met oudere browserversies hersteld [#715](https://github.com/scriptscat/scriptcat/issues/715) [[4da8068](https://github.com/scriptscat/scriptcat/commit/4da806879c2b170672814d02e6f8ed98c9fae35b)]
- 💄 Pop-upmenuweergave geoptimaliseerd wanneer het pop-upvenster te klein is ([288650e](https://github.com/scriptscat/scriptcat/commit/288650e5e4cbdc3fa8658f0754ce427a1b3dec5a))
- 🐛 Meerdere problemen hersteld ([#710](https://github.com/scriptscat/scriptcat/issues/710)) [[6a2027a](https://github.com/scriptscat/scriptcat/commit/6a2027ac0bb5e0ed625df570240d068a98a34b31)] (by @WhiteSevs)

### Diversen

- 🌐 i18n-problemen aangepakt [[2adf69d](https://github.com/scriptscat/scriptcat/commit/2adf69d6ec3c30186f2c2ef89f97e3cba9e15a66)]

<a name="1.1.0"></a>

## 1.1.0 (2025-09-07)

Talloze bugfixes en compatibiliteitsverbeteringen, Dropbox-ondersteuning toegevoegd, nieuwe @early-start-functie voor sneller laden dan het laden van de pagina. Zie voor meer details het wijzigingslogboek van v1.1.0-beta.x.

### Toegevoegd

- ✨ Instellingen voor de scriptruntimeomgeving toegevoegd [#628](https://github.com/scriptscat/scriptcat/issues/628) [[0d4a89e](https://github.com/scriptscat/scriptcat/commit/0d4a89efaecf0331dcc7fbb6df006b93a1525846)]
- ✨ Standaard ingeklapt wanneer er geen achtergrondscripts zijn [#626](https://github.com/scriptscat/scriptcat/issues/626) ([9d0aac6](https://github.com/scriptscat/scriptcat/commit/9d0aac6aae11b96707ca1f7c024a24e9d55f217b))
- ✨ Dropbox-ondersteuning [#575](https://github.com/scriptscat/scriptcat/issues/575) [[2c66f21](https://github.com/scriptscat/scriptcat/commit/2c66f21f5118bd83a0eaa0f1baa3a31f2233e5b2)]
- ✨ external.Tampermonkey geoptimaliseerd om de installatiestatus van SC te controleren wanneer TM niet is geïnstalleerd maar zowel TM als SC zijn ingeschakeld ([#703](https://github.com/scriptscat/scriptcat/issues/703)) [[d0115c3](https://github.com/scriptscat/scriptcat/commit/d0115c33657260d803b6091139601b1b20407d4e)] (by @cyfung1031)
- ✨ @early-start toegevoegd om sneller te laden dan de pagina ([#649](https://github.com/scriptscat/scriptcat/issues/649)) [[eb097dd](https://github.com/scriptscat/scriptcat/commit/eb097dd146dcd6f8ca712ed883571dbfb3d09f20])
- ✨ Globaal code zoeken ([#662](https://github.com/scriptscat/scriptcat/issues/662)) [[f8eafb7](https://github.com/scriptscat/scriptcat/commit/f8eafb7f955dad62c1b41ac477e929bf00c65982)] (by @RenjiYuusei)
- ✨ Enquêtepagina na verwijdering van de extensie toegevoegd [[6404c8f](https://github.com/scriptscat/scriptcat/commit/6404c8f74aff09b15725a92f8afdfc0d71ac188f)]
- 📝 Installatiepagina en naamruimte gewijzigd ([6f2f000](https://github.com/scriptscat/scriptcat/commit/6f2f000612908b7a88f6b70c2831092805c63bc7))
- ✨ QR-code voor mobiele installatie toegevoegd ([348237c](https://github.com/scriptscat/scriptcat/commit/348237c7ce9771c69025386926b1f73710cf6f42))

### Hersteld

- 🐛 Probleem hersteld waarbij installatie niet kon worden gestart wanneer het netwerk geen toegang had tot de tussenpagina voor installatie [#705](https://github.com/scriptscat/scriptcat/issues/705) [[5f1e292](https://github.com/scriptscat/scriptcat/commit/5f1e2929d79c470ba4427c3cce01f5cd184a839b)]
- 🐛 `@match *://*domain/*`-expressie aangepakt [[039b445](https://github.com/scriptscat/scriptcat/commit/039b4454148947cd3c74de82b87804ee9815e60c)]
- 🐛 Sandbox-doorbraakprobleem van de extensieomgeving hersteld [#700](https://github.com/scriptscat/scriptcat/issues/700) [[a1a868d](https://github.com/scriptscat/scriptcat/commit/a1a868dfe3199e666fe2bcb65cfb2ad0ad3d699b)]
- ✏️ backgroud -&gt; background ([#698](https://github.com/scriptscat/scriptcat/issues/698)) [[2594075](https://github.com/scriptscat/scriptcat/commit/2594075c4a50f4c79fa46bcda08d7b0cbcfe723c)] (by @cyfung1031)
- ✏️ CrhomeStorage -&gt; ChromeStorage ([#693](https://github.com/scriptscat/scriptcat/issues/693)) [[64c536d](https://github.com/scriptscat/scriptcat/commit/64c536dbd5fcb4c29eebc1109202bab69aaa3ee2)] (by @cyfung1031)
- 🐛 GM.getTab en GM.getTabs hersteld ([#683](https://github.com/scriptscat/scriptcat/issues/683)) [[31de256](https://github.com/scriptscat/scriptcat/commit/31de256f02b5b61e27f0eec9ea673248ba8faa32)] (by @WhiteSevs)
- 🐛 Ontbrekend domein in finalUrl hersteld ([#656](https://github.com/scriptscat/scriptcat/issues/656)) [[545d7c8](https://github.com/scriptscat/scriptcat/commit/545d7c8c0dd69c83bd2f0353518aafe6af81c0f4)] (by @cyfung1031)
- 🐛 Compatibiliteit met oudere browserkernels [#647](https://github.com/scriptscat/scriptcat/issues/647) ([bba12d2](https://github.com/scriptscat/scriptcat/commit/bba12d23f04759cb9b7fdb63f0d95ae515ee94a9))
- 🐛 Ontbrekend domein in finalUrl hersteld ([#656](https://github.com/scriptscat/scriptcat/issues/656)) [[3ed018a](https://github.com/scriptscat/scriptcat/commit/3ed018a7a54803fcf2e1791316e0166ed0b52007)] (by @cyfung1031)
- 💚 react/jsx-no-literals lint-probleem hersteld [[017b608](https://github.com/scriptscat/scriptcat/commit/017b60886be601e3e0e1719cf249da32d5686c30)]
- 🐛 Compatibiliteit met oudere browserkernels [#647](https://github.com/scriptscat/scriptcat/issues/647) [[0e2f817](https://github.com/scriptscat/scriptcat/commit/0e2f8173c8b44bd6ad44bdffc73fa302a96a058e)]
- 🐛 window.external-injectie geoptimaliseerd ([#646](https://github.com/scriptscat/scriptcat/issues/646)) [[0b2668a](https://github.com/scriptscat/scriptcat/commit/0b2668aadcab35a33ff9abc4bd030dffb87ea168)] (by @cyfung1031)
- 🐛 Probleem hersteld waarbij de authenticatiepagina van cloudopslag niet automatisch kon sluiten [[7748088](https://github.com/scriptscat/scriptcat/commit/7748088e63c1fc660b6a6ae5613cf04f9da99b8c)]
- 🐛 `@connect` \\*-probleem hersteld [#623](https://github.com/scriptscat/scriptcat/issues/623) [[76481c8](https://github.com/scriptscat/scriptcat/commit/76481c845b34414a7f15ed18ec61f7dff7eef091)]
- 🐛 Eenheidstests toegevoegd en `@exclude`-probleem hersteld ([#618](https://github.com/scriptscat/scriptcat/issues/618)) [[0046bb7](https://github.com/scriptscat/scriptcat/commit/0046bb78800a2c46edaac785b8e9592327772a3b)] (by @cyfung1031)
- 🐛 Probleem hersteld waarbij sommige .user.js-links geen scripts konden installeren [#599](https://github.com/scriptscat/scriptcat/issues/599) [[ccd2639](https://github.com/scriptscat/scriptcat/commit/ccd2639858f0f3cde28f284376fe8ed998d935ae)]
- 🐛 Mislukte creatie van nieuwe scripts hersteld [[d42d6e7](https://github.com/scriptscat/scriptcat/commit/d42d6e7d408a84674facf9ab0da6eac0e384502f)]
- 🐛 Metadata hersteld ([#610](https://github.com/scriptscat/scriptcat/issues/610)) [[4d98cce](https://github.com/scriptscat/scriptcat/commit/4d98cce0ca1281cc58f551ea4e6700e340780d3f)] (by @cyfung1031)
- 🐛 Pop-upbadge hersteld ([#605](https://github.com/scriptscat/scriptcat/issues/605)) [[eff9230](https://github.com/scriptscat/scriptcat/commit/eff92309de99abb0cf48ef4727afaa113bc2fbb6)] (by @cyfung1031)
- 🐛 ScriptEditor.tsx hersteld ([#603](https://github.com/scriptscat/scriptcat/issues/603)) [[a9aadba](https://github.com/scriptscat/scriptcat/commit/a9aadba372b813c16bdc5f0aeb07c68981f48c63)] (by @cyfung1031)
- 🐛 CSS van codeviewer &amp; editor hersteld ([#602](https://github.com/scriptscat/scriptcat/issues/602)) [[2e86785](https://github.com/scriptscat/scriptcat/commit/2e8678513efaccd42c8dc2aa89f8b76679aa8420)] (by @cyfung1031)
- 🐛 Concurrencyprobleem van getFaviconFromDomain hersteld ([#597](https://github.com/scriptscat/scriptcat/issues/597)) [[1872fe1](https://github.com/scriptscat/scriptcat/commit/1872fe165ab204b155a56f037c111d2d7776c2b9)] (by @cyfung1031)
- 🐛 Fout bij het openen van tabbladen in meerdere vensters hersteld [#586](https://github.com/scriptscat/scriptcat/issues/586) [[54c1da2](https://github.com/scriptscat/scriptcat/commit/54c1da29c2bd8bd8f5ef2d85b7aed8b334de296f)]
- 🐛 openerTabId-compatibiliteitsprobleem hersteld ([#586](https://github.com/scriptscat/scriptcat/issues/586)) [[b861fc8](https://github.com/scriptscat/scriptcat/commit/b861fc8620e53b885cad98db03f1dd10ec9d296c)] (by @cyfung1031)

### Diversen

- 📝 README_RU.md en CONTRIBUTING_RU.md gemaakt ([#678](https://github.com/scriptscat/scriptcat/issues/678)) [[597ab03](https://github.com/scriptscat/scriptcat/commit/597ab0378fe5ced01637cf411326ef7845b8ce2b)] (by @Ioann)
- 👷 Compatibiliteitsaanpassingen (pack.js-compatibiliteit) ([#669](https://github.com/scriptscat/scriptcat/issues/669)) [[fec45e6](https://github.com/scriptscat/scriptcat/commit/fec45e6606a609b10b79c58d2fcba02c2ce71e16)] (by @cyfung1031)
- 🌐 Vietnamese locale verfijnd en uitgebreid ([#661](https://github.com/scriptscat/scriptcat/issues/661)) [[6847a59](https://github.com/scriptscat/scriptcat/commit/6847a596c4b06c75e13594ef60e4b9dfa5718cf3)] (by @RenjiYuusei)
- 🌐 Vertaalfixes ([#635](https://github.com/scriptscat/scriptcat/issues/635)) [[19296de](https://github.com/scriptscat/scriptcat/commit/19296de6a3815e5965eb33401a55da9b2bd22bb4)] (by @cyfung1031)
- 🌐 i18n-probleem van de onboardinggids hersteld [#627](https://github.com/scriptscat/scriptcat/issues/627) [[9683f96](https://github.com/scriptscat/scriptcat/commit/9683f965400ab6a2bac15349aca4335911766eac)]
- 👷 pack.js-code geoptimaliseerd ([#615](https://github.com/scriptscat/scriptcat/issues/615)) [[870dd9b](https://github.com/scriptscat/scriptcat/commit/870dd9bc6b7eff3eceefa915452e773ec0565180)] (by @cyfung1031)
