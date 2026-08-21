---
title: Bètawijzigingslogboek
---

import GithubStar from '@site/src/components/GithubStar';

<GithubStar variant="bar" scene="changelog" />

De versie-uitgaven van ScriptCat zijn onderverdeeld in twee hoofdtakken: stabiele releases en voorlopige versies. Zie het [wijzigingslogboek](./index.md) voor het wijzigingslogboek van stabiele releases.

Voorlopige versies worden vóór de officiële stabiele versie uitgebracht. Ze worden doorgaans gebruikt om nieuwe functies te testen. Versienummers van voorlopige versies bevatten een voorlopige-versie-identificatie, bijvoorbeeld:
`1.0.0-beta.1`.

U kunt voorlopige versies verkrijgen via de [Release](https://github.com/scriptscat/scriptcat/releases)-pagina of via de onderstaande pagina's van de extensiewinkels:

- [Chrome](https://chromewebstore.google.com/detail/%E8%84%9A%E6%9C%AC%E7%8C%AB-beta/jaehimmlecjmebpekkipmpmbpfhdacom?authuser=0&hl=zh-CN)
- [Edge](https://microsoftedge.microsoft.com/addons/detail/%E8%84%9A%E6%9C%AC%E7%8C%AB-beta/nimmbghgpcjmeniofmpdfkofcedcjpfi)
- [Firefox](https://addons.mozilla.org/zh-CN/firefox/addon/scriptcat-pre/)

Daarnaast bouwt ScriptCat de extensie, naast de voorlopige versies, op [Github Action](https://github.com/scriptscat/scriptcat/actions/workflows/build.yaml) telkens wanneer een codecommit in de hoofdtak wordt gemerged. Als u de nieuwste functies of fixes wilt ervaren, kunt u deze downloaden via de [Github Action](https://github.com/scriptscat/scriptcat/actions/workflows/build.yaml)-pagina.

<a name="1.5.0-beta.1"></a>

## 1.5.0-beta.1 (2026-08-06)

Deze voorlopige versie belicht twee grote functies — **Externe toegang (MCP-brug)** en een **prullenbak voor scripts** — ondersteunt officieel Firefox MV3, voegt Koreaans, Turks en Braziliaans-Portugees toe en lost een aantal GM API-, cloud-sync- en editorproblemen op.

### 🚀 Belangrijke nieuwe functies

- 💥 Nieuwe "Externe toegang (MCP-brug)": een lokale `sctl`-daemon verenigt CLI- en MCP-clienttoegang; elke lees-/schrijfactie van een script wordt beveiligd door gelaagde autorisatie en een pagina voor menselijke bevestiging met drie niveaus — Weigeren / Toestaan / Toestaan voor deze sessie — en elke handeling wordt gecontroleerd ([#1573](https://github.com/scriptscat/scriptcat/pull/1573)) (by @cyfung1031)
- 💥 Prullenbak voor scripts: verwijderde scripts gaan eerst naar de prullenbak, met herstellen (met behoud van de originele gegevens en machtigingen), permanent verwijderen en automatische opschoning op basis van vervaldatum; de bewaartermijn is configureerbaar (standaard 30 dagen, of nooit) ([#1585](https://github.com/scriptscat/scriptcat/pull/1585)) (by @CodFrm)
- 💥 Officiële Firefox MV3-ondersteuning, met verbeterde sandbox/offscreen-communicatie ([#1561](https://github.com/scriptscat/scriptcat/pull/1561)) (by @cyfung1031)
- ✨ Snelle sitebereik-acties toevoegen aan de popup ([#1646](https://github.com/scriptscat/scriptcat/pull/1646)) (by @CodFrm)
- ✨ Het uitklapaantal van de scriptlijst in de popup is nu configureerbaar, los van het menu-uitklapaantal ([#1645](https://github.com/scriptscat/scriptcat/pull/1645)) (by @CodFrm)
- ✨ De pictogramdienst krijgt een "uitgeschakeld"-niveau om het ophalen van favicons volledig uit te schakelen ([#1637](https://github.com/scriptscat/scriptcat/pull/1637)) (by @CodFrm)
- ✨ Ongedefinieerde metadatatags tonen nu een waarschuwing in de editor ([#1608](https://github.com/scriptscat/scriptcat/pull/1608)) (by @cyfung1031)
- ✨ Volledigheid van back-up/herstel/importeren: eigen configuratie van ScriptCat/Tampermonkey/Violentmonkey + back-up van instellingen + herstel van bronnen ([#1554](https://github.com/scriptscat/scriptcat/pull/1554)) (by @CodFrm)

### ♻️ Refactoring & Compatibiliteit

- ♻️ De client refactoren naar de officiële MCP SDK ([#1643](https://github.com/scriptscat/scriptcat/pull/1643)) (by @CodFrm)

### 🐛 Bugfixes

- 🐛 Aangepaste cookies van GM_xmlhttpRequest worden nu overschreven in plaats van toegevoegd aan gelijknamige cookies ([#1604](https://github.com/scriptscat/scriptcat/pull/1604)) (by @cyfung1031)
- 🐛 Consistentie van de script-sync-status en providerveilige conflictbehandeling hersteld ([#1504](https://github.com/scriptscat/scriptcat/pull/1504)) (by @cyfung1031)
- 🐛 Geplande logboekopschoning die niet meer werkte, hersteld ([#1599](https://github.com/scriptscat/scriptcat/pull/1599)) (by @CodFrm)
- 🐛 Ontbrekende contextmenu-uitvoeringstijd in scriptinstellingen hersteld ([#1652](https://github.com/scriptscat/scriptcat/pull/1652)) (by @CodFrm)
- 🐛 Logica voor teruggaan/tabblad sluiten op de installatiepagina hersteld ([#1594](https://github.com/scriptscat/scriptcat/pull/1594)) (by @cyfung1031)
- 🐛 Browsertabblad-titel die niet bijwerkte na hernoemen van een opgeslagen script, hersteld ([#1607](https://github.com/scriptscat/scriptcat/pull/1607)) (by @cyfung1031)
- 🐛 window.focus-focusgedrag hersteld en windowId-validatie aangescherpt ([#1577](https://github.com/scriptscat/scriptcat/pull/1577)) (by @cyfung1031)
- 🐛 Verborgen knop voor sluiten van actief tabblad in de editor hersteld [#1556](https://github.com/scriptscat/scriptcat/issues/1556) (by @CodFrm)
- 🐛 Navigatiebeveiliging voor niet-opgeslagen editorinhoud hersteld ([#1656](https://github.com/scriptscat/scriptcat/pull/1656)) (by @CodFrm)
- 🐛 Formulering van de bevestiging voor het opslaan van een script met dezelfde naam in de prullenbak hersteld ([#1622](https://github.com/scriptscat/scriptcat/pull/1622)) (by @CodFrm)
- 🐛 selfMetadata ondersteunt lege overschrijvingen: match/exclude/tag/run-at "verwijderen en dan herleven" hersteld ([#1579](https://github.com/scriptscat/scriptcat/pull/1579)) (by @CodFrm)

### 🎨 UI-verbeteringen

- 💄 Android-UI-aanpassing hersteld: dynamische viewport-hoogte + herindeling van tabellen/instellingsrijen/logstatistiekbalk op smalle schermen ([#1636](https://github.com/scriptscat/scriptcat/pull/1636)) (by @RenjiYuusei)
- 💄 Compacte lay-outoptie toegevoegd aan de popup ([#1551](https://github.com/scriptscat/scriptcat/pull/1551)) (by @cyfung1031)

### 🌐 Internationalisering

- 🌐 Koreaanse (ko-KR) vertaling toegevoegd ([#1568](https://github.com/scriptscat/scriptcat/pull/1568)) (by @moduvoice)
- 🌐 Turkse (tr-TR) vertaling toegevoegd ([#1557](https://github.com/scriptscat/scriptcat/pull/1557)) (by @azizaktas)
- 🌐 Braziliaans-Portugese (pt-BR) vertaling toegevoegd ([#1587](https://github.com/scriptscat/scriptcat/pull/1587)) (by @Lucas559-noob)
- 🌐 chrome.i18n messages.json en Monaco-editor-talen voor pt-BR / tr-TR aangevuld ([#1605](https://github.com/scriptscat/scriptcat/pull/1605)) (by @CodFrm)

### Overig

- ⬆️ Afhankelijkheden bijgewerkt (incl. TypeScript 6.0) en pnpm-auditwaarschuwingen verholpen ([#1576](https://github.com/scriptscat/scriptcat/pull/1576), [#1567](https://github.com/scriptscat/scriptcat/pull/1567)) (by @cyfung1031)
- Script-sync-instellingen worden nu direct opgeslagen ([#1615](https://github.com/scriptscat/scriptcat/pull/1615)) (by @CodFrm)
- 📝 Winkelbeschrijving en README-tagline verbeterd voor betere vindbaarheid van "user script" ([#1553](https://github.com/scriptscat/scriptcat/pull/1553)) (by @CodFrm)

<a name="1.5.0-beta"></a>

## 1.5.0-beta (2026-07-08)

Deze voorlopige versie brengt een **gloednieuwe UI** met een schonere, consistentere interface en een soepelere algehele ervaring, plus specifieke ontwerpoptimalisaties voor mobiel, zodat ook mobiele gebruikers een geweldige ervaring krijgen. Daarnaast voegt het selectie van het nieuwe scripttype in de editor toe, een handmatige downloadlink voor lokale back-ups en meer, terwijl problemen met ongeldige tijdzones bij geplande taken en native GM_download cross-origin-problemen worden opgelost. Als u suggesties heeft over de nieuwe UI/UX, sluit u zich dan aan bij de discussie op [GitHub](https://github.com/scriptscat/scriptcat/discussions).

### 🎨 UI-verbeteringen

- ♻️ Gloednieuwe UI: een volledige herschrijving van de interface, met verbeterde mobiele aanpassing voor een betere ervaring op zowel desktop als mobiel ([#1514](https://github.com/scriptscat/scriptcat/pull/1514)) (by @CodFrm)

### 🚀 Belangrijke nieuwe functies

- ✨ De "＋" van de tabbladbalk van de editor ondersteunt nu het kiezen van het nieuwe scripttype ([#1544](https://github.com/scriptscat/scriptcat/pull/1544)) (by @cyfung1031)
- ✨ Handmatige downloadlink voor lokale back-ups toegevoegd ([#1543](https://github.com/scriptscat/scriptcat/pull/1543)) (by @cyfung1031)
- ✨ structured_clone-serialisatie ingeschakeld voor extensie-messaging op Chromium 148+ ([#1534](https://github.com/scriptscat/scriptcat/pull/1534)) (by @cyfung1031)
- ✨ Voorlopige (beta) versies openen nu automatisch de wijzigingslogboekpagina na een update (by @CodFrm)

### 🧩 GM API-wijzigingen

- 🐛 Native GM_download laat @connect nu respecteren, net als GM_xmlhttpRequest ([#1506](https://github.com/scriptscat/scriptcat/pull/1506)) (by @DudeAint)

### ⚡️ Prestatieverbeteringen

- ⚡️ Laadcache van scripts geoptimaliseerd en resterende popup-menuitems hersteld ([#1511](https://github.com/scriptscat/scriptcat/pull/1511)) (by @cyfung1031)

### 🧑‍💻 Editor

- ♻️ Regels van `eslint-plugin-userscripts` aangepast ([#1510](https://github.com/scriptscat/scriptcat/pull/1510)) (by @cyfung1031)

### 🐛 Bugfixes

- 🐛 Fouten bij geplande taken voorkomen die worden veroorzaakt doordat cron automatisch een ongeldige tijdzone detecteert ([#1531](https://github.com/scriptscat/scriptcat/pull/1531)) (by @cyfung1031)
- 🐛 De niet-beschikbare demo-API in het crontab-voorbeeld hersteld ([#1542](https://github.com/scriptscat/scriptcat/pull/1542)) (by @cyfung1031)

### 🌐 Lokalisatie

- 🌐 Turkse taal toegevoegd (by @azizaktas)

<a name="1.4.0-beta.4"></a>

## 1.4.0-beta.4 (2026-06-13)

Deze release lost de lay-out van de Edge Android mobiele popup op, de witte achtergrondflits tijdens het eerste laden en cross-origin-verzoekfouten wanneer toegangsmachtiging voor de site ontbreekt; herstelt een prototype-vervuilingskwetsbaarheid die via onbetrouwbare YAML-gebruikersconfiguratiesleutels wordt getriggerd; refactort het bijwerken van scriptbronnen en ZIP-verwerking (jszip vervangen door JSZipp); en blijft de Firefox MV3-compatibiliteit en lokalisatie verbeteren.

### 🧑‍💻 Editor

- ✨ Monaco-snelfix en userscript-metadatahints verbeterd ([#1461](https://github.com/scriptscat/scriptcat/pull/1461)) (by @cyfung1031)
- 🐛 CSS-lay-outproblemen in de editor hersteld ([#1460](https://github.com/scriptscat/scriptcat/pull/1460)) (by @cyfung1031)

### 🐛 Bugfixes

- 🐛 Lay-out van Edge Android mobiele popup hersteld ([#686](https://github.com/scriptscat/scriptcat/issues/686)) ([#1507](https://github.com/scriptscat/scriptcat/pull/1507)) (by @CodFrm)
- 🐛 Witte achtergrondflits tijdens eerste laden hersteld ([#1497](https://github.com/scriptscat/scriptcat/issues/1497)) ([#1498](https://github.com/scriptscat/scriptcat/pull/1498)) (by @cyfung1031)
- 🐛 Cross-origin-verzoekfout hersteld wanneer toegangsmachtiging voor de site ontbreekt ([#1477](https://github.com/scriptscat/scriptcat/pull/1477)) (by @cyfung1031)
- 🐛 Berichtverbinding (GM API / port) die niet goed werd opgeruimd, hersteld ([#1474](https://github.com/scriptscat/scriptcat/pull/1474)) (by @cyfung1031)
- 🐛 @match-sjabloonafwijking hersteld wanneer zoeken ontbreekt ([#1466](https://github.com/scriptscat/scriptcat/pull/1466)) (by @cyfung1031)
- 🐛 `protoBaseDescs` toegevoegd om overerving van voorouderklassen in de Tampermonkey-halve sandbox te herstellen ([#1463](https://github.com/scriptscat/scriptcat/pull/1463)) (by @cyfung1031)

### 🔒 Beveiligingsverbeteringen

- 🔒 Prototype-vervuiling via onbetrouwbare YAML-gebruikersconfiguratiesleutels hersteld ([#1494](https://github.com/scriptscat/scriptcat/pull/1494)) (by @qdzsh)

### ♻️ Refactoring & Compatibiliteit

- ♻️ Update van scriptbronnen (updateResource) en gelijktijdigheidscontrole gerefactord, en compatibiliteit van de broncache hersteld ([#1193](https://github.com/scriptscat/scriptcat/pull/1193)) (by @cyfung1031)
- ♻️ jszip vervangen door JSZipp voor ZIP-verwerking (back-up importeren/exporteren) en de ongebruikte jszip-afhankelijkheid verwijderd ([#1479](https://github.com/scriptscat/scriptcat/pull/1479)) (by @cyfung1031)
- ♻️ Firefox MV3-compatibiliteit verbeterd ([#1457](https://github.com/scriptscat/scriptcat/pull/1457), [#1480](https://github.com/scriptscat/scriptcat/pull/1480)) (by @cyfung1031)

### 🌐 Lokalisatie

- 🌐 Meertalige terminologievertalingen hersteld (vooral Traditioneel Chinees verbeterd) en richtlijnen voor vertaalterminologie toegevoegd ([#1468](https://github.com/scriptscat/scriptcat/pull/1468)) (by @cyfung1031)

<a name="1.4.0-beta.3"></a>

## 1.4.0-beta.3 (2026-05-19)

In het verlengde van de richting die in beta.2 is ingezet, versterkt deze release de betrouwbaarheid van cloud-sync verder (foutafhandeling en uploadstromen voor OneDrive/Google Drive/WebDAV), lost een aantal ScriptEditor- en GM xhr-uitzonderingsafhandelingsproblemen op en voegt Ctrl+Shift+F-formattering en de terugkeer van `@run-at context-menu` toe.

### 🚀 Belangrijke nieuwe functies

- ✨ Editor: Ctrl+Shift+F om code te formatteren ([#1415](https://github.com/scriptscat/scriptcat/pull/1415)) (by @cyfung1031)
- ✨ Ondersteuning voor `@run-at context-menu` teruggebracht ([#1442](https://github.com/scriptscat/scriptcat/pull/1442)) (by @cyfung1031)

### ⚡️ Prestatieverbeteringen

- ⚡️ pushValue-verwerking geoptimaliseerd ([#1403](https://github.com/scriptscat/scriptcat/pull/1403)) (by @cyfung1031)

### 🐛 Bugfixes

- 🐛 Cloud-sync-fixes: OneDrive-upload van nul bytes, normalisatie van Google Drive/OneDrive-fouten, aangepaste S3-metadata modifiedDate ([#1405](https://github.com/scriptscat/scriptcat/pull/1405)) ([#1406](https://github.com/scriptscat/scriptcat/pull/1406)) ([#1408](https://github.com/scriptscat/scriptcat/pull/1408)) (by @cyfung1031)
- 🐛 WebDAV-verificatie: de schrijfprobe verwijderd zodat services zoals Jianguoyun met een niet-beschrijfbare root de verificatie niet langer laten mislukken ([#1445](https://github.com/scriptscat/scriptcat/pull/1445)) (by @CodFrm)
- 🐛 Ontbrekende null-afhandeling voor `GM_xmlhttpRequest` msgConn hersteld ([#1433](https://github.com/scriptscat/scriptcat/pull/1433)) (by @cyfung1031)
- 🐛 Onjuiste afhandeling van abnormale onloadend door GM xhr hersteld ([#1412](https://github.com/scriptscat/scriptcat/pull/1412)) (by @cyfung1031)
- 🐛 Problemen met dynamische update en weergave van de ScriptEditor-lijst hersteld ([#1414](https://github.com/scriptscat/scriptcat/pull/1414)) (by @cyfung1031)
- 🐛 Interactieproblemen met bewerkingsgerelateerde acties in de ScriptEditor-werkbalk hersteld ([#1417](https://github.com/scriptscat/scriptcat/pull/1417)) (by @cyfung1031)
- 🐛 `chrome.downloads.download`-code en Mock hersteld ([#1410](https://github.com/scriptscat/scriptcat/pull/1410)) (by @cyfung1031)
- 🐛 closeWindow in src/pages/install/App.tsx hersteld ([#1435](https://github.com/scriptscat/scriptcat/pull/1435)) (by @cyfung1031)
- 🐛 Wielgebeurtenisgrens toegevoegd aan de rootlay-out om te voorkomen dat interne scrollen browserswipe-navigatie triggert ([#1431](https://github.com/scriptscat/scriptcat/pull/1431)) (by @cyfung1031)
- 🐛 Gelijktijdige initiële verificatierequests gededupliceerd ([#1437](https://github.com/scriptscat/scriptcat/pull/1437)) (by @cyfung1031)
- 🐛 encoding.ts gerefactord om detectie te consolideren en te verbeteren ([#1426](https://github.com/scriptscat/scriptcat/pull/1426)) (by @cyfung1031)
- 🐛 Tooltip toegevoegd zodat het menu zichtbaar is ([#1429](https://github.com/scriptscat/scriptcat/pull/1429)) (by @cyfung1031)
- 🐛 overscroll-behavior-fix ([#1413](https://github.com/scriptscat/scriptcat/pull/1413)) (by @cyfung1031)
- 🐛 Updateknop niet langer tonen voor scripts die geen updates ondersteunen ([#1418](https://github.com/scriptscat/scriptcat/pull/1418)) (by @cyfung1031)
- 🐛 Ontbrekende i18n-sleutelverwijzingen hersteld ([#1422](https://github.com/scriptscat/scriptcat/pull/1422)) (by @cyfung1031)
- 🐛 `frames` toegevoegd aan sandbox createContext, fix voor [#1427](https://github.com/scriptscat/scriptcat/issues/1427) ([#1428](https://github.com/scriptscat/scriptcat/pull/1428)) (by @cyfung1031)
- 🐛 SkillScript-compilatiefout door ontbrekend isContextMenu-veld hersteld (5fdc8e39) (by @CodFrm)

### ♻️ Refactoring & Compatibiliteit

- ♻️ Installatiebronnen verplaatst naar `chrome.storage.local` tempStorage; het codedeeel bevindt zich in `OPFS/temp_install_codes` ([#1318](https://github.com/scriptscat/scriptcat/pull/1318)) (by @cyfung1031)
- 🐛 Dubbele schuine streep door padkoppelingslogica hersteld ([#1432](https://github.com/scriptscat/scriptcat/pull/1432)) (by @tomaioo)

### 🌐 Internationalisering

- 🌐 Japanse UI-vertalingen verbeterd met bijbehorende fixes voor andere talen ([#1419](https://github.com/scriptscat/scriptcat/pull/1419)) ([#1421](https://github.com/scriptscat/scriptcat/pull/1421)) (by @GoodLight999, @cyfung1031)

<a name="1.4.0-beta.2"></a>

## 1.4.0-beta.2 (2026-05-06)

Deze update richt zich op **uitgebreide versterking van de betrouwbaarheid van cloud-opslagsynchronisatie** (auth, padverwerking en retry-fixes voor Dropbox/WebDAV/Google Drive/OneDrive-backends), **stabiliteitsverbeteringen voor Agent-toolcalls** en een groot aantal UI- en scriptruntime-bugfixes, waaronder een langlopend geheugenlek.

### ⚡️ Prestatieverbeteringen

- ⚡️ Afhankelijkheid van het Baidu-bestandssysteem van globale DNR-regels verwijderd; cookies worden in plaats daarvan per verzoek uitgeschakeld ([#1377](https://github.com/scriptscat/scriptcat/pull/1377)) (by @cyfung1031)
- ⚡️ Selectie van multi-platform zoekmachines voor het ophalen van scripts geoptimaliseerd ([#1379](https://github.com/scriptscat/scriptcat/pull/1379)) (by @cyfung1031)
- ⚡️ Monospace gebruikt voor loadingStatus van de installatiepagina om trillen te voorkomen ([#1381](https://github.com/scriptscat/scriptcat/pull/1381)) (by @cyfung1031)
- ⚡️ Betrouwbaarheid van Agent-prompts versterkt — resultaatverificatie, budgetsemantiek, veiligheidsgrenzen ([#1354](https://github.com/scriptscat/scriptcat/pull/1354)) (by @cyfung1031)

### 🐛 Bugfixes

- 🚑 Potentieel geheugenlek hersteld wanneer ScriptCat langdurig draait ([#1401](https://github.com/scriptscat/scriptcat/pull/1401)) (by @cyfung1031)
- 🐛 Betrouwbaarheid van cloud-sync over backends versterkt (Dropbox/WebDAV/Google Drive/OneDrive auth, padverwerking, retry-logica) ([#1374](https://github.com/scriptscat/scriptcat/pull/1374)) ([#1375](https://github.com/scriptscat/scriptcat/pull/1375)) ([#1376](https://github.com/scriptscat/scriptcat/pull/1376)) ([#1390](https://github.com/scriptscat/scriptcat/pull/1390)) ([#1391](https://github.com/scriptscat/scriptcat/pull/1391)) ([#1392](https://github.com/scriptscat/scriptcat/pull/1392)) ([#1393](https://github.com/scriptscat/scriptcat/pull/1393)) ([#1394](https://github.com/scriptscat/scriptcat/pull/1394)) ([#1395](https://github.com/scriptscat/scriptcat/pull/1395)) (by @cyfung1031)
- 🐛 extensionEnv correct gevuld met isIncognito (early-start & bgScript), userAgent en run-in voor bgScript ([#1368](https://github.com/scriptscat/scriptcat/pull/1368)) (by @cyfung1031)
- 🐛 Afgeknipte knop van de onboardinggids hersteld [#1396](https://github.com/scriptscat/scriptcat/issues/1396) ([#1398](https://github.com/scriptscat/scriptcat/pull/1398)) (by @cyfung1031)
- 🐛 Tooltip-occlusie op de scriptbeheerpagina hersteld [#1386](https://github.com/scriptscat/scriptcat/issues/1386) ([#1387](https://github.com/scriptscat/scriptcat/pull/1387)) (by @Xdy1579883916)
- 🐛 Zijbalk die lay-outgrootteproblemen in kaartmodus veroorzaakt, hersteld [#1179](https://github.com/scriptscat/scriptcat/issues/1179) ([#1373](https://github.com/scriptscat/scriptcat/pull/1373)) (by @cyfung1031)
- 🐛 Onjuiste oorsprong voor lokale installaties via slepen en neerzetten hersteld ([#1371](https://github.com/scriptscat/scriptcat/pull/1371)) (by @cyfung1031)
- 🐛 Berichtenuitwisseling bij taalwissel hersteld ([#1380](https://github.com/scriptscat/scriptcat/pull/1380)) (by @cyfung1031)
- 🐛 Logweergave-UI verbeterd ([#1372](https://github.com/scriptscat/scriptcat/pull/1372)) (by @cyfung1031)
- 🐛 Problemen met sessieregeltelling bij gelijktijdige xhr opgelost ([#1353](https://github.com/scriptscat/scriptcat/pull/1353)) (by @cyfung1031)
- 🐛 UserConfigPanel CSS hersteld ([#1361](https://github.com/scriptscat/scriptcat/pull/1361)) (by @cyfung1031)
- 🐛 Object.create(null) gebruikt voor lege objecten in create_context ([#1397](https://github.com/scriptscat/scriptcat/pull/1397)) (by @cyfung1031)
- 🐛 Fouten bij het samenvoegen van streamende tool_call-argumenten van Agent en overspraak tussen parallelle tool-calls hersteld ([#1355](https://github.com/scriptscat/scriptcat/pull/1355)) (by @cyfung1031)
- 🐛 Compatibiliteit van Agent met redeneermodellen hersteld ([#1357](https://github.com/scriptscat/scriptcat/pull/1357)) (by @cyfung1031)
- 🐛 Contractinconsistentie van Agent web_fetch/web_search hersteld (7bbd6d18) (by @CodFrm)
- 🐛 Ontbrekende extensieomgeving in de Agent-skillscriptruntime hersteld (e143c4a7) (by @CodFrm)

### 🔒 Beveiligingsverbeteringen

- 🔒 Alle npm-kwetsbaarheden hersteld ([#1350](https://github.com/scriptscat/scriptcat/pull/1350)) ([#1364](https://github.com/scriptscat/scriptcat/pull/1364)) ([#1365](https://github.com/scriptscat/scriptcat/pull/1365)) (by @cyfung1031)

### Overig

- 🔥 Crowdin- en ach-UG-pseudolokalisatie-inhoud verwijderd ([#1385](https://github.com/scriptscat/scriptcat/pull/1385)) (by @CodFrm)

<a name="1.4.0-beta.1"></a>

## 1.4.0-beta.1 (2026-04-07)

Het hoogtepunt van deze release is **ScriptCat AI Agent**, een ingebouwd AI-gestuurd agentsysteem dat via conversationele interactie tools uit het userscript-ecosysteem kan aanroepen. Deze update voegt ook ondersteuning voor de `@unwrap`-tag toe, de `window.onurlchange`-gebeurtenis, verbeteringen aan het editormenu en talrijke bugfixes.

### 🚀 Belangrijke nieuwe functies

- 💥 ScriptCat AI Agent — AI-gestuurd intelligent agentsysteem met conversationele interactie, toolcalling, Skill-systeem, MCP-protocolondersteuning en meer ([#1324](https://github.com/scriptscat/scriptcat/pull/1324)) (by @CodFrm)
- ✨ Ondersteuning voor de `@unwrap`-metadatatag ([#1213](https://github.com/scriptscat/scriptcat/pull/1213)) (by @cyfung1031)
- ✨ `window.onurlchange` van TM geïmplementeerd via de Navigation API ([#1315](https://github.com/scriptscat/scriptcat/pull/1315)) (by @cyfung1031)

### 🧑‍💻 Editor

- ✨ Editormenu toegevoegd (zoeken, vervangen, ongedaan maken, enz.) ([#1303](https://github.com/scriptscat/scriptcat/pull/1303)) (by @CodFrm)
- 🐛 Ctrl-F / Ctrl-H-sneltoetsen hersteld ([#1312](https://github.com/scriptscat/scriptcat/pull/1312)) (by @cyfung1031)
- 🐛 ESLint-autofix die niet werkte, hersteld [#1079](https://github.com/scriptscat/scriptcat/issues/1079) ([#1184](https://github.com/scriptscat/scriptcat/pull/1184)) (by @cyfung1031)
- 🐛 Opmaakfouten nu correct weergegeven ([#1310](https://github.com/scriptscat/scriptcat/pull/1310)) (by @cyfung1031)
- 🐛 Tooltipproblemen van de code-editor hersteld ([#1301](https://github.com/scriptscat/scriptcat/pull/1301)) (by @cyfung1031)

### ✨ Functieverbeteringen

- ✨ Ondersteuning voor selectie van multi-platform zoekmachines voor scriptzoekopdracht ([#1295](https://github.com/scriptscat/scriptcat/pull/1295)) (by @CodFrm)
- ✨ Meer providers voor de pictogramdienst toegevoegd ([#1333](https://github.com/scriptscat/scriptcat/pull/1333)) (by @cyfung1031)
- ✨ Updatecontrolepictogram toegevoegd in de kolom laatst bijgewerkt van de scriptlijst ([#1304](https://github.com/scriptscat/scriptcat/pull/1304)) (by @CodFrm)
- ✨ Afhandeling van bewerkingsconflicten en scriptnaamconflicten verbeterd ([#1223](https://github.com/scriptscat/scriptcat/pull/1223)) (by @cyfung1031)

### 🐛 Bugfixes

- 🐛 Crashing van de hele pagina door cron-expressiefouten hersteld ([#1327](https://github.com/scriptscat/scriptcat/pull/1327)) (by @cyfung1031)
- 🐛 Fout 406 bij scriptinstallatie hersteld ([#1306](https://github.com/scriptscat/scriptcat/pull/1306)) (by @cyfung1031)
- 🐛 WebDAV-cookieverificatieconflict en authType-ondersteuning hersteld ([#1308](https://github.com/scriptscat/scriptcat/pull/1308)) (by @CodFrm)
- 🐛 chrome.storage.local gebruikt voor apparaatspecifieke instellingen om cross-device sync te voorkomen ([#1309](https://github.com/scriptscat/scriptcat/pull/1309)) (by @CodFrm)
- 🐛 Logica voor stille updates van abonnementsscripts en connect-machtigingen hersteld ([#1201](https://github.com/scriptscat/scriptcat/pull/1201)) (by @cyfung1031)
- 🐛 Volledig falen van batch-updatecontrole wanneer één script een time-out heeft, hersteld ([#1265](https://github.com/scriptscat/scriptcat/pull/1265)) (by @cyfung1031)
- 🐛 Queryknop van de loggerpagina die de tijd niet ververste, hersteld ([#1294](https://github.com/scriptscat/scriptcat/pull/1294)) (by @CodFrm)
- 🐛 Afgeknipte datumkiezerpopup van de loggerpagina hersteld ([#1292](https://github.com/scriptscat/scriptcat/pull/1292)) (by @cyfung1031)
- 🐛 Ontkoppelknop die werd getoond wanneer geen clouddrive is gekoppeld, hersteld ([#1291](https://github.com/scriptscat/scriptcat/pull/1291)) (by @CodFrm)
- 🐛 Lichtthema-weergaveprobleem van de ScriptEditor-scriptlijst hersteld ([#1288](https://github.com/scriptscat/scriptcat/pull/1288)) (by @CodFrm)
- 🐛 Verduisterde popup hersteld ([#1290](https://github.com/scriptscat/scriptcat/pull/1290)) (by @cyfung1031)

## 1.4.0-beta (2026-03-13)

### 🐛 Bugfixes

- 🚑 Omgevingsdetectiefout veroorzaakt door andere extensies die chrome.runtime injecteren, hersteld [#1280](https://github.com/scriptscat/scriptcat/issues/1280) ([#1281](https://github.com/scriptscat/scriptcat/pull/1281)) (by @CodFrm)
- 🐛 ScriptEditor-problemen hersteld en geoptimaliseerd ([#1258](https://github.com/scriptscat/scriptcat/pull/1258)) (by @cyfung1031)
- 🐛 Herhaalde herstart door conflict in de machtigingscontrole van het incognitovenster hersteld (6c308f60) (by @CodFrm)
- 🐛 Bevestigingspagina-problemen hersteld ([#1275](https://github.com/scriptscat/scriptcat/pull/1275)) (by @cyfung1031)
- 🐛 Probleem met verwerking van include *?* expressie hersteld [#1271](https://github.com/scriptscat/scriptcat/issues/1271) ([#1272](https://github.com/scriptscat/scriptcat/pull/1272)) (by @CodFrm)
- 🐛 Besturing van machtigingsbeheer in scriptinstellingen die niet werkte, hersteld ([#1267](https://github.com/scriptscat/scriptcat/pull/1267)) (by @CodFrm)

### 🔒 Beveiligingsverbeteringen

- 🔒 DOMPurify gebruikt om HTML-inhoud van aankondigingsmeldingen te saneren ([#1274](https://github.com/scriptscat/scriptcat/pull/1274)) (by @CodFrm)

### Overig

- ✅ Playwright E2E-tests en GM API-functionele tests toegevoegd ([#1283](https://github.com/scriptscat/scriptcat/pull/1283)) (by @CodFrm)
- 📄 docs: Chrome Web Store-URL's bijgewerkt naar nieuw domein ([#1279](https://github.com/scriptscat/scriptcat/pull/1279)) (by @theluckystrike)

## 1.3.0-beta.4 (2026-02-19)

### Toegevoegd

- ✨ Amazon S3-opslag toegevoegd [#1146](https://github.com/scriptscat/scriptcat/issues/1146) ([#1189](https://github.com/scriptscat/scriptcat/pull/1189)) (by @CodFrm)
- ✨ Positie van verborgen editorzijbalk aangepast [#1185](https://github.com/scriptscat/scriptcat/issues/1185) ([#1254](https://github.com/scriptscat/scriptcat/pull/1254)) (by @CodFrm)
- ✨ `@version` met geen of lege waarde accepteren ([#1216](https://github.com/scriptscat/scriptcat/pull/1216)) (by @cyfung1031)

### Hersteld

- 🐛 Probleem van wijzigingslogboekmelding die pagina opent, hersteld ([#1266](https://github.com/scriptscat/scriptcat/pull/1266)) (by @CodFrm)
- 🐛 unregister dat niet correct werd uitgevoerd, hersteld ([#1231](https://github.com/scriptscat/scriptcat/pull/1231)) (by @cyfung1031)
- 🐛 GM_addElement-probleem hersteld, bewerking naar contentomgeving verplaatst ([#1233](https://github.com/scriptscat/scriptcat/pull/1233)) (by @cyfung1031)
- 🐛 DraggableEntry gerefactord, kaarthoogte-uitlijning hersteld ([#1245](https://github.com/scriptscat/scriptcat/pull/1245)) (by @cyfung1031)
- 🐛 Popupinhoud die met het scherm meescrolde, hersteld ([#1263](https://github.com/scriptscat/scriptcat/pull/1263)) (by @cyfung1031) ([#1259](https://github.com/scriptscat/scriptcat/pull/1259)) (by @cyfung1031)
- 🐛 Geheugenlek en blootstelling van objecteigenschappen hersteld, en TTP-XML-parsing die naar null terugvalt ([#1242](https://github.com/scriptscat/scriptcat/pull/1242)) (by @cyfung1031) ([#1260](https://github.com/scriptscat/scriptcat/pull/1260)) (by @cyfung1031)
- 🐛 `conflictAction`-parameter toegevoegd aan `GM_download` ([#1250](https://github.com/scriptscat/scriptcat/pull/1250)) (by @cyfung1031)
- 🐛 Mislukte parsing van installatielink hersteld [#1235](https://github.com/scriptscat/scriptcat/issues/1235) ([#1238](https://github.com/scriptscat/scriptcat/pull/1238)) (by @cyfung1031)
- 🐛 focusin/focusout-vertraging door sleepcomponent hersteld [#1224](https://github.com/scriptscat/scriptcat/issues/1224) ([#1243](https://github.com/scriptscat/scriptcat/pull/1243)) (by @CodFrm)
- 🐛 Oorspronggerelateerde delen van subscribeUrl in installScript hersteld ([#1218](https://github.com/scriptscat/scriptcat/pull/1218)) (by @cyfung1031)
- 🐛 ScriptCard-animatieprobleem hersteld ([#1234](https://github.com/scriptscat/scriptcat/pull/1234)) (by @cyfung1031)
- 🐛 hide_sidebar naar show_main_sidebar & hide_main_sidebar hersteld ([#1225](https://github.com/scriptscat/scriptcat/pull/1225)) (by @cyfung1031)
- 🐛 Externe extensie-API die niet werkte, hersteld ([#1217](https://github.com/scriptscat/scriptcat/pull/1217)) (by @cyfung1031)
- 🐛 Downloadbestandsnaam die mappen niet ondersteunde, hersteld ([#1203](https://github.com/scriptscat/scriptcat/pull/1203)) (by @cyfung1031)

<a name="1.3.0-beta.3"></a>

## 1.3.0-beta.3 (2026-02-07)

### Toegevoegd

- ✨ Cron-gerelateerde wijzigingen: bugfixes, i18n, verbeteringen aan once-expressies, upgrade van cron-bibliotheek ([#1126](https://github.com/scriptscat/scriptcat/issues/1126)) (by @cyfung1031)

### Gewijzigd

- ♻️ Communicatiemechanisme gerefactord: storage.local broadcast + Firefox MV3 scripting-compatibel + niet-traceerbare dynamische sync MessageFlag toegepast ([#1067](https://github.com/scriptscat/scriptcat/issues/1067)) (by @cyfung1031)
- ⚡ Tekstdecodering verbeterd ([#1166](https://github.com/scriptscat/scriptcat/issues/1166)) (by @cyfung1031)
- 🎨 Codeaanpassingen (klein) - locatie van variabele `isContent` ([#1171](https://github.com/scriptscat/scriptcat/issues/1171)) (by @cyfung1031)
- 🎨 Codeaanpassingen - Value-gerelateerde klasse- en variabelenamen ([#1175](https://github.com/scriptscat/scriptcat/issues/1175)) (by @cyfung1031)
- 🎨 Codeaanpassingen (klein) - ScriptClient ([#1172](https://github.com/scriptscat/scriptcat/issues/1172)) (by @cyfung1031)
- 🎨 (TypeScript) Aanpassing eigen klassenaam: File -> FileInfo ([#1174](https://github.com/scriptscat/scriptcat/issues/1174)) (by @cyfung1031)
- ⬆️ `jsc.target` van rspack naar es2020 hersteld / core-versie bijgewerkt ([#1186](https://github.com/scriptscat/scriptcat/issues/1186)) (by @cyfung1031)
- 🎨 Karaktersetdetectie verbeterd ([#1140](https://github.com/scriptscat/scriptcat/issues/1140)) (by @cyfung1031)
- 🎨 Weergavetijd van popupvenster bijgewerkt ([#1155](https://github.com/scriptscat/scriptcat/issues/1155)) (by @cyfung1031)
- 🎨 Kleine correcties in locales.ts ([#1154](https://github.com/scriptscat/scriptcat/issues/1154)) (by @cyfung1031)
- 🎨 Logo 128x128 ([#1176](https://github.com/scriptscat/scriptcat/issues/1176)) (by @cyfung1031)
- 🎨 Afbeeldingsverwerking ([#1177](https://github.com/scriptscat/scriptcat/issues/1177)) (by @cyfung1031)

### Verwijderd

- 🔥 package.json: pako verwijderd ([#1188](https://github.com/scriptscat/scriptcat/issues/1188)) (by @cyfung1031)

### Hersteld

- 🐛 Problemen met scriptcodering verwerkt [#1115](https://github.com/scriptscat/scriptcat/issues/1115) ([#1138](https://github.com/scriptscat/scriptcat/issues/1138)) (by @CodFrm)
- 🐛 Problemen met waarde-referenties verwerkt [#1141](https://github.com/scriptscat/scriptcat/issues/1141) ([#1147](https://github.com/scriptscat/scriptcat/issues/1147)) (by @CodFrm)
- 🐛 Knoprenderlogica hersteld, bijwerkingen van renderfase vermeden, JSX conditioneel renderen en benoemde slots gebruikt ([#1153](https://github.com/scriptscat/scriptcat/issues/1153)) (by @cyfung1031)
- 🐛 Probleem van FileSystemObserver dat niet continu kon monitoren, hersteld ([#1160](https://github.com/scriptscat/scriptcat/issues/1160)) (by @cyfung1031)
- 🐛 fix: TM-compatibiliteit `@match www.website.com/*` ([#1165](https://github.com/scriptscat/scriptcat/issues/1165)) (by @cyfung1031)
- 🐛 Asynchrone declaraties van GM API hersteld, Promise correct geretourneerd ([#1169](https://github.com/scriptscat/scriptcat/issues/1169)) (by @cyfung1031)
- 🐛 Ontbrekend UserAgentData in content.js hersteld ([#1183](https://github.com/scriptscat/scriptcat/issues/1183)) (by @cyfung1031)
- 🐛 structuredClone-fout van 1.2.5 hersteld ([#1192](https://github.com/scriptscat/scriptcat/issues/1192)) (by @cyfung1031)
- 🐛 Wijziging 9343f2d6e49aec78d208d0e3ba3d96ec2a4d5a1c hersteld ([#1195](https://github.com/scriptscat/scriptcat/issues/1195)) (by @cyfung1031)
- 🐛 grant-problemen hersteld ([#1199](https://github.com/scriptscat/scriptcat/issues/1199)) (by @CodFrm)

<a name="1.3.0-beta.2"></a>

## 1.3.0-beta.2 (2026-01-07)

### Toegevoegd

- ✨ Synchrone verwijdering is nu standaard uitgeschakeld ([#958](https://github.com/scriptscat/scriptcat/issues/958)) [[9c4c7dc](https://github.com/scriptscat/scriptcat/commit/9c4c7dc411357746db43a306d97ac41a71f2b49c)] (by @cyfung1031)
- ✨ Editor ondersteunt nu GM.\* ([#1129](https://github.com/scriptscat/scriptcat/issues/1129)) [[bea0192](https://github.com/scriptscat/scriptcat/commit/bea0192c6cc50eff2ed4e1cc5dcc25f36bbe10e7)] (by @cyfung1031)

### Gewijzigd

- ♻️ Logica voor het openen van de wijzigingslogboekpagina geoptimaliseerd [#1110](https://github.com/scriptscat/scriptcat/issues/1110) [[d3ffedc](https://github.com/scriptscat/scriptcat/commit/d3ffedcffe752ca548f87f1640072fcd871b8604)] (by @CodFrm)

### Hersteld

- 🐛 Weergave van scriptpictogram hersteld [#1052](https://github.com/scriptscat/scriptcat/issues/1052) ([#1104](https://github.com/scriptscat/scriptcat/issues/1104)) [[2e5c601](https://github.com/scriptscat/scriptcat/commit/2e5c601274fa27aa67b49ef9d352e3a1c3975979)] (by @CodFrm)
- 🐛 scriptcat.d.tpl & typecorrecties hersteld ([#1130](https://github.com/scriptscat/scriptcat/issues/1130)) [[dd22ef5](https://github.com/scriptscat/scriptcat/commit/dd22ef544684d69e24a7aae098cb05cbab03daa8)] (by @cyfung1031)
- 🐛 Cloud-sync-problemen hersteld ([#1133](https://github.com/scriptscat/scriptcat/issues/1133)) [[a9383d2](https://github.com/scriptscat/scriptcat/commit/a9383d2012eb3953dc33c8886ce3891f404fa100)] (by @CodFrm)
- 🐛 Fout van `GM_addElement("tagName")` hersteld ([#1120](https://github.com/scriptscat/scriptcat/issues/1120)) [[ad19de5](https://github.com/scriptscat/scriptcat/commit/ad19de5c1793c8c079bedbf1b11c7c2ae27a469e)] (by @cyfung1031)
- 🐛 Opschoonlogica verwijderd en checkuserscript-logica geoptimaliseerd ([#1113](https://github.com/scriptscat/scriptcat/issues/1113)) [[e635911](https://github.com/scriptscat/scriptcat/commit/e635911a3c11c3cb8acd1cfd507cb777e5ee7236)] (by @CodFrm)

### Diversen

- 🏷️ TypeScript-revisies ([#1127](https://github.com/scriptscat/scriptcat/issues/1127)) [[b455724](https://github.com/scriptscat/scriptcat/commit/b4557244191018c18d5ce8ea8e8627bcfb7f7cdd)] (by @cyfung1031)
- 📝 Extra voorbeeldcommentaar ([#1131](https://github.com/scriptscat/scriptcat/issues/1131)) [[292549e](https://github.com/scriptscat/scriptcat/commit/292549ed0f65952fe9f269aace23eefc7d6a3a0f)] (by @cyfung1031)

<a name="1.3.0-beta.1"></a>

## 1.3.0-beta.1 (2025-12-21)

### Toegevoegd

- ✨ Monaco Editor-instellingen geoptimaliseerd, fix voor `/* global xxx */` toegevoegd ([#1012](https://github.com/scriptscat/scriptcat/issues/1012)) [[b1a738d](https://github.com/scriptscat/scriptcat/commit/b1a738d98b5e852993da322d56dbfa20f68d20e3)] (by @cyfung1031)

### Gewijzigd

- ⚡ Metadata uit chrome.storage.session verplaatst ([#1027](https://github.com/scriptscat/scriptcat/issues/1027)) [[9c81f6c](https://github.com/scriptscat/scriptcat/commit/9c81f6c42b087411669adef35df30714e184ee93)] (by @cyfung1031)
- ⚡ Weergave van volgende uitvoeringstijd geoptimaliseerd [#1093](https://github.com/scriptscat/scriptcat/issues/1093) [[324ce51](https://github.com/scriptscat/scriptcat/commit/324ce515c84699ca8d3bf1ee447fc6ef0656ae0d)] (by @CodFrm)

### Hersteld

- 🐛 Popup-pagina-problemen hersteld ([#1100](https://github.com/scriptscat/scriptcat/issues/1100)) [[9c67e4a](https://github.com/scriptscat/scriptcat/commit/9c67e4a2c609f8c1ef82c493bb1ed68da6396d2e)] (by @CodFrm)
- 🐛 Typefout hersteld [[f5a73c7](https://github.com/scriptscat/scriptcat/commit/f5a73c71649621e519b32630ae7717411732aa50)] (by @CodFrm)
- 🐛 Engels logboek met volledige-breedtetekens hersteld ([#1095](https://github.com/scriptscat/scriptcat/issues/1095)) [[a68b100](https://github.com/scriptscat/scriptcat/commit/a68b10048cb01a8e26fe8d524102bfb23ed4e179)] (by @cyfung1031)
- 🐛 UnoCSS-prefix toegevoegd om CSS-conflicten op te lossen, CSS-lay-out hersteld ([#1013](https://github.com/scriptscat/scriptcat/issues/1013)) [[723e64c](https://github.com/scriptscat/scriptcat/commit/723e64cc0c23763dfed322e907c0a960c4f9060e)] (by @cyfung1031)
- 🐛 Probleem met URL-matching van vroege scripts hersteld ([#1096](https://github.com/scriptscat/scriptcat/issues/1096)) [[a77effb](https://github.com/scriptscat/scriptcat/commit/a77effbab5ab4d1752065ef943d9c050ff99c066)] (by @CodFrm)
- 🐛 Updatepopup die te kort werd weergegeven, hersteld ([#1088](https://github.com/scriptscat/scriptcat/issues/1088)) [[b2b2d5c](https://github.com/scriptscat/scriptcat/commit/b2b2d5c41ff70ee5430f7d8d156f480ac8fc3a1a)] (by @cyfung1031)
- 🐛 Abnormale weergave bij ingeschakelde gebruikersscriptmeldingen hersteld ([#1086](https://github.com/scriptscat/scriptcat/issues/1086)) ([959c4db](https://github.com/scriptscat/scriptcat/commit/959c4dbed92f7bfe22a2f8ebb775c4189b5ff076))
- 🐛 responseHeaders: `TM-compatibiliteit: \r\n` ([#1085](https://github.com/scriptscat/scriptcat/issues/1085)) [[15232c8](https://github.com/scriptscat/scriptcat/commit/15232c8543d93abfdafa1353d39d8a15d1dc385f)] (by @cyfung1031)
- 🐛 GM xhr-problemen hersteld ([#1082](https://github.com/scriptscat/scriptcat/issues/1082)) [[3d987c3](https://github.com/scriptscat/scriptcat/commit/3d987c300242a3c765146359c35ecd6d998f792c)] (by @CodFrm)
- 🐛 Probleem met frequente achtergrondsync hersteld ([#1076](https://github.com/scriptscat/scriptcat/issues/1076)) [[45dc39b](https://github.com/scriptscat/scriptcat/commit/45dc39baa0f3326cf12e97312ab632dc46ba40f2)] (by @CodFrm)
- 🐛 Probleem met speciale tabbladverwerking hersteld [#1066](https://github.com/scriptscat/scriptcat/issues/1066) ([50904fb](https://github.com/scriptscat/scriptcat/commit/50904fb46efdea10fd57677bc2d28c770b47e861))
- 🐛 Scriptverwerking zonder matchregels hersteld [#1071](https://github.com/scriptscat/scriptcat/issues/1071) ([560cdc0](https://github.com/scriptscat/scriptcat/commit/560cdc01fc0fc27fb7d0e3b877c63ba431206668))
- 🐛 CI-pakketprobleem dat optionele achtergrondmachtigingen verwijderde, hersteld [[1f002f0](https://github.com/scriptscat/scriptcat/commit/1f002f0edf9892f023ae93b8522ff7c5e4a96559)] (by @CodFrm)
- 🐛 Genegeerde verwijderde tabbladen hersteld ([#1058](https://github.com/scriptscat/scriptcat/issues/1058)) [[6165bf4](https://github.com/scriptscat/scriptcat/commit/6165bf48eb1d53ede0561c85c30135446c2ff882)] (by @cyfung1031)

<a name="1.3.0-beta"></a>

## 1.3.0-beta (2025-12-13)

### Toegevoegd

- ✨ Nieuwe scriptinstallatielogica ([#842](https://github.com/scriptscat/scriptcat/issues/842)) ([80d342e](https://github.com/scriptscat/scriptcat/commit/80d342e80c9c1b36f88b7dcd4c65c663bb1d9185))
- ✨ Monaco-editorhints geïnternationaliseerd en `@require-css`-hint toegevoegd ([#960](https://github.com/scriptscat/scriptcat/issues/960)) [[51a6f94](https://github.com/scriptscat/scriptcat/commit/51a6f94be3a430691f73057eae61a3814560a5b3)] (by @cyfung1031)
- ✨ Validatie van `@grant`-conflicten hersteld, foutmelding voor dubbele metadeclaratie toegevoegd ([#902](https://github.com/scriptscat/scriptcat/issues/902)) [[8fbd0f1](https://github.com/scriptscat/scriptcat/commit/8fbd0f1041f5c5dcdb5a515348a5f54934acfdc7)] (by @cyfung1031)
- ✨ Sjabloon met vooraf ingesteld `@noframes` om beginners te behoeden voor valkuilen ([#900](https://github.com/scriptscat/scriptcat/issues/900)) [[c9d5840](https://github.com/scriptscat/scriptcat/commit/c9d584066ff2395112b9a930aaa409cda764a5e6)] (by @cyfung1031)
- ✨ Voorkomen dat installatielink als installeren in plaats van bijwerken wordt beoordeeld wanneer de scriptnaam verandert ([#824](https://github.com/scriptscat/scriptcat/issues/824)) [[5c7a5dd](https://github.com/scriptscat/scriptcat/commit/5c7a5ddc81e3bd1dd0a71cc80460a5239178c1de)] (by @cyfung1031)
- ✨ Opties voor script run-at ([#895](https://github.com/scriptscat/scriptcat/issues/895)) [[b0ea187](https://github.com/scriptscat/scriptcat/commit/b0ea187c2e6d69b60c981aa9b4d068fed7c2c2a2)] (by @CodFrm)
- ✨ Grijze pictogram weergeven wanneer scriptfunctionaliteit is uitgeschakeld [#897](https://github.com/scriptscat/scriptcat/issues/897) ([3e406dc](https://github.com/scriptscat/scriptcat/commit/3e406dc4562adf7d7f3b79b52623b87e87ef1ad3))
- ✨ Menu-interactielogica geoptimaliseerd wanneer er 0 uitklapbare items zijn [#868](https://github.com/scriptscat/scriptcat/issues/868) ([da24ac2](https://github.com/scriptscat/scriptcat/commit/da24ac234f0eeae0159dce6c2b346d06fb72eaa5))

### Gewijzigd

- 🎨 Typography-referentie hersteld ([#984](https://github.com/scriptscat/scriptcat/issues/984)) [[a70400c](https://github.com/scriptscat/scriptcat/commit/a70400cdca8a5b64cffaca85017513d4e5e7171c)] (by @cyfung1031)
- ♻️ Firefox-compatibiliteit: GM_setClipboard ([#928](https://github.com/scriptscat/scriptcat/issues/928)) [[d1a5cb1](https://github.com/scriptscat/scriptcat/commit/d1a5cb19dc4e05fac838258d15c48cc6f876d416)] (by @cyfung1031)
- ♻️ userScripts / scripting API aangepast, compatibiliteit verbeterd (opnieuw [#704](https://github.com/scriptscat/scriptcat/issues/704)) ([#925](https://github.com/scriptscat/scriptcat/issues/925)) [[43bc40f](https://github.com/scriptscat/scriptcat/commit/43bc40ff5da5ef36a13564504293f1928138cf12)] (by @cyfung1031)
- ♻️ Laden van scriptpictogrammen gerefactord en geoptimaliseerd ([#893](https://github.com/scriptscat/scriptcat/issues/893)) ([ab36c86](https://github.com/scriptscat/scriptcat/commit/ab36c86b5d031b88e71fbf9151696a42acba86fa))
- ⚡ parseMetadata-code geoptimaliseerd ([#903](https://github.com/scriptscat/scriptcat/issues/903)) [[0efc648](https://github.com/scriptscat/scriptcat/commit/0efc648257f74591765869dedee5d98f8a1dc610)] (by @cyfung1031)
- 🎨 Standaard weergave van het extensiepictogramnummer gewijzigd naar scripttelling [#989](https://github.com/scriptscat/scriptcat/issues/989) [[70f67b6](https://github.com/scriptscat/scriptcat/commit/70f67b6bd8cf803d7a18bf26fdccdfa6f8a92893)] (by @CodFrm)
- 🐛 Importeren & exporteren - probleem hersteld dat de laatste wijzigingsdatum van scripts niet werd gevolgd ([#951](https://github.com/scriptscat/scriptcat/issues/951)) ([6e7272f](https://github.com/scriptscat/scriptcat/commit/6e7272f52ef2d49d9fceb3e30babfee1cbd72e75))
- 🎨 sourceURL aangepast voor eenvoudiger debuggen ([#987](https://github.com/scriptscat/scriptcat/issues/987)) [[ed741e7](https://github.com/scriptscat/scriptcat/commit/ed741e7d0188fa5e95eae87bcd3a28e82ee008e1)] (by @cyfung1031)
- ⬆️ Pakketversies bijgewerkt ([#922](https://github.com/scriptscat/scriptcat/issues/922)) [[9b1df8d](https://github.com/scriptscat/scriptcat/commit/9b1df8dda794e5e95ecc12cef37ed66712ae561e)] (by @cyfung1031)
- ⚡ Waarden-gerelateerde gemeenschappelijke aanpassingen ([#949](https://github.com/scriptscat/scriptcat/issues/949)) [[b258fb2](https://github.com/scriptscat/scriptcat/commit/b258fb2c73d790f7f277a9a31d07e2931a7d680d)] (by @cyfung1031)
- ⚡ URL.createObjectURL gemeenschappelijk gemaakt, Firefox-compatibiliteit ([#929](https://github.com/scriptscat/scriptcat/issues/929)) [[54ad4de](https://github.com/scriptscat/scriptcat/commit/54ad4de48b81170b90283fb6ce3b4d6e7c908cdf)] (by @cyfung1031)
- ⚡ Pictogrammen op basis van URL opgeslagen om te voorkomen dat meerdere scripts hetzelfde pictogram opslaan ([#909](https://github.com/scriptscat/scriptcat/issues/909)) [[c6e8efb](https://github.com/scriptscat/scriptcat/commit/c6e8efbe8d11719034a9aaa3fd871519025671ff)] (by @cyfung1031)
- ♻️ updateIcon-code aangepast ([#908](https://github.com/scriptscat/scriptcat/issues/908)) [[642e3b9](https://github.com/scriptscat/scriptcat/commit/642e3b9e57f01f2b008990cc7cb1461f5dccd256)] (by @cyfung1031)

### Hersteld

- 🐛 Bestaande Alarm gewist bij selecteren van onregelmatige scriptupdatecontroles ([#996](https://github.com/scriptscat/scriptcat/issues/996)) [[8bb9a2d](https://github.com/scriptscat/scriptcat/commit/8bb9a2d5741acb7d547e743c7bef8a2139f1401a)] (by @cyfung1031)
- 🐛 Overbodige witruimte bovenaan de back-uppagina verwijderd ([#995](https://github.com/scriptscat/scriptcat/issues/995)) ([9c149ce](https://github.com/scriptscat/scriptcat/commit/9c149ce5999b7a70375a41c6604c8e8dbd19e9df))
- ✨ Installatie zonder afhankelijkheid van externe websitetoegang + aanpassing van de lay-out van de installatiepagina ([#842](https://github.com/scriptscat/scriptcat/issues/842)) ([80d342e](https://github.com/scriptscat/scriptcat/commit/80d342e80c9c1b36f88b7dcd4c65c663bb1d9185))
- 🐛 UnoCSS-prefix toegevoegd om CSS-conflicten op te lossen, CSS-lay-out hersteld ([#1013](https://github.com/scriptscat/scriptcat/issues/1013)) [[723e64c](https://github.com/scriptscat/scriptcat/commit/723e64cc0c23763dfed322e907c0a960c4f9060e)] (by @cyfung1031)
- 🐛 systemconfig geoptimaliseerd en i18n-problemen in SW hersteld ([#976](https://github.com/scriptscat/scriptcat/issues/976)) [[c50fcf7](https://github.com/scriptscat/scriptcat/commit/c50fcf7770df633462c2f25f8cf22d302002ec57)] (by @CodFrm)
- 🐛 Typefouten hersteld ([#975](https://github.com/scriptscat/scriptcat/issues/975)) [[7d85856](https://github.com/scriptscat/scriptcat/commit/7d8585687c71cde1c2793d742abb7c22d9d358f0)] (by @cyfung1031)

<a name="1.2.0-beta.5"></a>

## 1.2.0-beta.5 (2025-11-17)

### Toegevoegd

- ✨ Scripttelling weergeven in popup ([#973](https://github.com/scriptscat/scriptcat/issues/973)) [[1134586](https://github.com/scriptscat/scriptcat/commit/1134586ff040ffc0cdddd3538e9ec493950c948a)] (by @cyfung1031)

### Gewijzigd

- ⚡ `check_script_update_cycle` verwerkt ([#906](https://github.com/scriptscat/scriptcat/issues/906)) [[760562f](https://github.com/scriptscat/scriptcat/commit/760562f92ad64bc538873b2ca61dfafe067c3f6e)] (by @cyfung1031)
- ♻️ inject & content georganiseerd, pageLoad-informatieoverdracht gewijzigd ([#952](https://github.com/scriptscat/scriptcat/issues/952)) [[0554159](https://github.com/scriptscat/scriptcat/commit/0554159c105606192d48e1153194e09314d43bc9)] (by @cyfung1031)
- 🎨 messageFlag vereenvoudigd, herzien volgens naamgevingsnormen voor gebeurtenissen ([#926](https://github.com/scriptscat/scriptcat/issues/926)) [[d725d85](https://github.com/scriptscat/scriptcat/commit/d725d85a2f4917c08f6d3daa035a45fd15d12451)] (by @cyfung1031)
- ♻️ `GM_xmlhttpRequest` en gerelateerde code gerefactord ([#901](https://github.com/scriptscat/scriptcat/issues/901)) [[fabd2e9](https://github.com/scriptscat/scriptcat/commit/fabd2e944235b460bc73df346b79d23ee4540af7)] (by @cyfung1031)
- ⚡ toCamelCase micro-geoptimaliseerd ([#930](https://github.com/scriptscat/scriptcat/issues/930)) [[88d8bdf](https://github.com/scriptscat/scriptcat/commit/88d8bdfc726f1a4ed63bd3cf81ebad88426273e8)] (by @cyfung1031)

### Hersteld

- 🐛 Beschadigde sandbox hersteld ([#966](https://github.com/scriptscat/scriptcat/issues/966)) [[dd80386](https://github.com/scriptscat/scriptcat/commit/dd8038666481d1319dd0f8ab80f79f1b13c1730d)] (by @cyfung1031)
- 🐛 Ongedefinieerde `valueChangeListener.clear` in setInvalidContext hersteld ([#970](https://github.com/scriptscat/scriptcat/issues/970)) [[2a399e9](https://github.com/scriptscat/scriptcat/commit/2a399e96a1e848f2f569566479b48dcee280f543)] (by @cyfung1031)
- 🐛 `@connect`-logica aangepast ([#969](https://github.com/scriptscat/scriptcat/issues/969)) [[67914d2](https://github.com/scriptscat/scriptcat/commit/67914d2b7d57fa9c69706ae57ee5d3400c2643f9)] (by @cyfung1031)
- 🐛 i18n-verwerking van service worker hersteld [#956](https://github.com/scriptscat/scriptcat/issues/956) [[843e618](https://github.com/scriptscat/scriptcat/commit/843e618daf13ec659cc16759c5de13dacf23c534)] (by @CodFrm)
- 🐛 Uitvoeringsprobleem van deleteValue/deleteValues hersteld ([#943](https://github.com/scriptscat/scriptcat/issues/943)) [[3d92bfb](https://github.com/scriptscat/scriptcat/commit/3d92bfb4a0334ffd2c279a1e6d33e98eed0a1a81)] (by @cyfung1031)
- 🐛 Onvermogen om scripts via GitHub-link te installeren hersteld ([#877](https://github.com/scriptscat/scriptcat/issues/877)) [[b9268e7](https://github.com/scriptscat/scriptcat/commit/b9268e7207081fcaa4591c9e1385f98446ade04a)] (by @cyfung1031)
- 🐛 `@connect *` dat geen effect had, hersteld ([#967](https://github.com/scriptscat/scriptcat/issues/967)) [[6bcb93c](https://github.com/scriptscat/scriptcat/commit/6bcb93c20c9690a2ce4f50d0978948e20ba407b8)] (by @cyfung1031)

### Diversen

- 🌐 Vertaalupdates ([#920](https://github.com/scriptscat/scriptcat/issues/920)) [[ede013b](https://github.com/scriptscat/scriptcat/commit/ede013b8e725ddefa626e3e432cbaee756535259)] (by @cyfung1031)

<a name="1.2.0-beta.4"></a>

## 1.2.0-beta.4 (2025-11-07)

### Toegevoegd

- ✨ Handleiding voor kaartmodus ([#894](https://github.com/scriptscat/scriptcat/issues/894)) [[0627a0f](https://github.com/scriptscat/scriptcat/commit/0627a0faacf3a41645e985ec6f6960568427d5a4)] (by @CodFrm)

### Gewijzigd

- ♻️ EarlyStart-implementatie gerefactord ([#882](https://github.com/scriptscat/scriptcat/issues/882)) [[cca11e0](https://github.com/scriptscat/scriptcat/commit/cca11e02b98de285423b04ec0d95eab995cee378)] (by @CodFrm)
- 💄 Lay-out van kaartweergave verfijnd ([#872](https://github.com/scriptscat/scriptcat/issues/872)) [[5aa21b8](https://github.com/scriptscat/scriptcat/commit/5aa21b88bf423d5d03f7df70b654249bac4b7a88)] (by @Coxxs)

### Hersteld

- 🐛 Fout door ontbrekende puntkomma tussen twee `@require` hersteld [#917](https://github.com/scriptscat/scriptcat/issues/917) ([#921](https://github.com/scriptscat/scriptcat/issues/921)) [[2769a24](https://github.com/scriptscat/scriptcat/commit/2769a24e129da79926816886fe42bbc4d9a97875)] (by @cyfung1031)
- 🐛 Uitzonderingsprobleem op de pagina Controleer update hersteld ([#912](https://github.com/scriptscat/scriptcat/issues/912)) [[12272e1](https://github.com/scriptscat/scriptcat/commit/12272e1ad4787cc6768f2f157d272faff5782f37)] (by @cyfung1031)
- 🐛 GM_openInTab die niet werkte in achtergrondscripts, hersteld [#873](https://github.com/scriptscat/scriptcat/issues/873) [[a526664](https://github.com/scriptscat/scriptcat/commit/a52666429710e150d81cac33af5511401b697355)] (by @CodFrm)
- 🐛 Laadstatusprobleem van tabel lijst hersteld [#874](https://github.com/scriptscat/scriptcat/issues/874) [[0b53cb0](https://github.com/scriptscat/scriptcat/commit/0b53cb07cf1ca1d3e42b15fd9c104c83031502d5)] (by @CodFrm)
- 🐛 Mislukte scriptinjectie na verwijdering van `@early-start` hersteld ([#871](https://github.com/scriptscat/scriptcat/issues/871)) [[426e878](https://github.com/scriptscat/scriptcat/commit/426e8788d9b934ee96cf5ec22b432a08681a9e8c)] (by @cyfung1031)

<a name="1.2.0-beta.3"></a>

## 1.2.0-beta.3 (2025-10-23)

### Toegevoegd

- ✨ Kaartweergave ([#860](https://github.com/scriptscat/scriptcat/issues/860)) [[c9f2350](https://github.com/scriptscat/scriptcat/commit/c9f23509648a41b06f82e79da2bc1fc05a783e06)] (by @CodFrm)

### Gewijzigd

- ♻️ Null-codeaanpassing ([#852](https://github.com/scriptscat/scriptcat/issues/852)) [[fa1031d](https://github.com/scriptscat/scriptcat/commit/fa1031df9c3e8bc2550f429e7cf8d1c3869a1ea3)] (by @cyfung1031)
- ♻️ GMApiRequest-codeaanpassing, GM_log-codefix, @connect-oordeelsfix ([#849](https://github.com/scriptscat/scriptcat/issues/849)) [[ee4a8b2](https://github.com/scriptscat/scriptcat/commit/ee4a8b28715fb48fa627f5231c8dc30e55c006ed)] (by @cyfung1031)

### Verwijderd

- 🔥 `GM_openInTab({ useOpen: true })` verwijderd ([#867](https://github.com/scriptscat/scriptcat/issues/867)) [[aa61335](https://github.com/scriptscat/scriptcat/commit/aa613354c7b7c84d461000ed0362cf9916c8aa39)] (by @cyfung1031)

### Hersteld

- 🐛 Compatibiliteit van checkUserScriptsAvailable met Vivaldi ([#859](https://github.com/scriptscat/scriptcat/issues/859)) [[014d62d](https://github.com/scriptscat/scriptcat/commit/014d62de6b731bfda82babf5db5aa5ae909908f1)] (by @cyfung1031)
- 🚑 Kritieke fix: GM.delete/setValue Promise die niet werd nagekomen ([#865](https://github.com/scriptscat/scriptcat/issues/865)) [[43572a3](https://github.com/scriptscat/scriptcat/commit/43572a3110b8b083f840b472a231400223da7751)] (by @cyfung1031)
- 🐛 GM xhr fetch-probleem hersteld [#847](https://github.com/scriptscat/scriptcat/issues/847) [[c6e95c2](https://github.com/scriptscat/scriptcat/commit/c6e95c210748d091ff9f610f3801eaa055d9d6de)]

### Diversen

- 📝 `@compatible`-commentaar toegevoegd aan monaco-editor ([#853](https://github.com/scriptscat/scriptcat/issues/853)) [[752b951](https://github.com/scriptscat/scriptcat/commit/752b95122ab324df358e45ec468194cc8466f8bb)] (by @cyfung1031)
- 🌐 subscribe_source_tooltip-vertaling toegevoegd [#850](https://github.com/scriptscat/scriptcat/issues/850) [[8d675bd](https://github.com/scriptscat/scriptcat/commit/8d675bd5398d403dfc8e7ee2016fbaffd821da64)]

<a name="1.2.0-beta.2"></a>

## 1.2.0-beta.2 (2025-10-15)

Scriptupdatelogica geoptimaliseerd, zijbalk voor scriptlijst toegevoegd, GM_registerMenuCommand- en GM_openInTab-functionaliteit verbeterd en veel bugs verholpen

### Toegevoegd

- ✨ Uniform update-meldingsmechanisme ([#755](https://github.com/scriptscat/scriptcat/issues/755)) ([741b0bd](https://github.com/scriptscat/scriptcat/commit/741b0bd2ec2f75a7e84c62fbe02654ce6bc41543))
- ✨ GM_registerMenuCommand-tweedemenu &amp; scheidingsteken ([#831](https://github.com/scriptscat/scriptcat/issues/831)) [[bd08959](https://github.com/scriptscat/scriptcat/commit/bd089595c922aa63af0fb6d41fa9f6dc2587e096)] (by @cyfung1031)
- ✨ Parameters toegevoegd aan GM_openInTab ([#788](https://github.com/scriptscat/scriptcat/issues/788)) [[eb33d61](https://github.com/scriptscat/scriptcat/commit/eb33d613473815b12017e34f46ed9eb292a9dcba)] (by @cyfung1031)
- ✨ SC-versiecontroleknop toegevoegd ([#795](https://github.com/scriptscat/scriptcat/issues/795)) [[1680c66](https://github.com/scriptscat/scriptcat/commit/1680c66099120c0e497c1a1f5321f38fe0160ea0)] (by @cyfung1031)
- ✨ Filter- en tagfunctionaliteit van de scriptlijstzijbalk toegevoegd ([#794](https://github.com/scriptscat/scriptcat/issues/794)) [[6aabf59](https://github.com/scriptscat/scriptcat/commit/6aabf594cd62fa7358ba34c1c69060dc9e24919c)]
- ✨ window.showOpenFilePicker gebruikt om bestanden te openen, waardoor lokale bestandsbewaking mogelijk wordt [#749](https://github.com/scriptscat/scriptcat/issues/749) [[7dcfbf1](https://github.com/scriptscat/scriptcat/commit/7dcfbf1309fff28c3d806d4ccb36bd0ef51050f5)]

### Gewijzigd

- ♻️ Migratielogica van indexeddb en chrome.storage gescheiden ([#844](https://github.com/scriptscat/scriptcat/issues/844)) [[b8389fb](https://github.com/scriptscat/scriptcat/commit/b8389fbc21932dbbe9394b576fbd8605a3b820c8)]
- ♻️ registerMenuCommand &amp; unregisterMenuCommand hersteld ([#826](https://github.com/scriptscat/scriptcat/issues/826)) [[3ecde9e](https://github.com/scriptscat/scriptcat/commit/3ecde9e0125089744c2d81f759b043deb5440be6)] (by @cyfung1031)
- ⚡ Runtime-opstartladen geoptimaliseerd ([#775](https://github.com/scriptscat/scriptcat/issues/775)) [[3e69401](https://github.com/scriptscat/scriptcat/commit/3e69401feb98bd789a85dbda7d9e690f71bae696)] (by @cyfung1031)

### Hersteld

- 🐛 Ontwerp van `GM_registerMenuCommand`-gerelateerde code herzien ([#790](https://github.com/scriptscat/scriptcat/issues/790)) ([a71cfe4](https://github.com/scriptscat/scriptcat/commit/a71cfe496fcb2457109dd97742a795585860a6d7))
- 🐛 Opschoning van popupgegevens verwerkt [#784](https://github.com/scriptscat/scriptcat/issues/784) [[7bd9b16](https://github.com/scriptscat/scriptcat/commit/7bd9b162b178a534a8be31aca210af2106f110b7)]
- 🐛 CAT_fileStorage-downloadprobleem hersteld [#829](https://github.com/scriptscat/scriptcat/issues/829) [[81d4e49](https://github.com/scriptscat/scriptcat/commit/81d4e496df8abd3715348fe979758a63311b54c3)]
- 🐛 Volgordeprobleem van userconfig-groepen hersteld [#818](https://github.com/scriptscat/scriptcat/issues/818) [[74881c0](https://github.com/scriptscat/scriptcat/commit/74881c0a05d599ad13300c3c69b33b01a5a7b552)]
- 🐛 Compatibiliteits- en verwerkingsproblemen van installatiebron gegevens hersteld [[574b3c6](https://github.com/scriptscat/scriptcat/commit/574b3c6506a21e1b8ebd891fd91fcd8b19774b96)]
- 🐛 Statussync-probleem van achtergrondscripts in popup hersteld [#838](https://github.com/scriptscat/scriptcat/issues/838) ([edd13c6](https://github.com/scriptscat/scriptcat/commit/edd13c65c9643dece7c38665f58146c9e59c802c))
- 🐛 Inconsistentie tussen contextmenu en scriptmenu hersteld [#768](https://github.com/scriptscat/scriptcat/issues/768) ([191ffcd](https://github.com/scriptscat/scriptcat/commit/191ffcd1e55d842acabbc44fdf1f1098f0b0093d))
- 🐛 Fout bij handmatig importeren van lokaal bestand hersteld [#745](https://github.com/scriptscat/scriptcat/issues/745) ([fe14991](https://github.com/scriptscat/scriptcat/commit/fe149914e6eef99761ca44681abd95919613adb3))
- 🐛 Fout bij handmatig importeren van lokaal bestand hersteld [#745](https://github.com/scriptscat/scriptcat/issues/745) ([52950a2](https://github.com/scriptscat/scriptcat/commit/52950a2ad04c79aecaa530a6eb615e9c54bba884))
- 🐛 Ondersteuning voor herkenning van lokale \*.user.js [#812](https://github.com/scriptscat/scriptcat/issues/812) [[cec8ffc](https://github.com/scriptscat/scriptcat/commit/cec8ffc5f6947a54b7a59365928a1ccf47b336a2)]
- 🐛 Onvermogen van vroeg-startscript om GM_addElement te gebruiken, hersteld [#801](https://github.com/scriptscat/scriptcat/issues/801) [[4d17645](https://github.com/scriptscat/scriptcat/commit/4d17645c0659d8ecd283473cbdd88b6eda065758)]
- 🐛 GM_info.scriptMetaStr-probleem van vroeg script hersteld [#801](https://github.com/scriptscat/scriptcat/issues/801) [[a9a4333](https://github.com/scriptscat/scriptcat/commit/a9a433393ceb259aecc4fe9c1d32a0c9a8333160)]
- 🐛 Documentatie van metadatablok en kleine codefixes ([#832](https://github.com/scriptscat/scriptcat/issues/832)) [[c40822b](https://github.com/scriptscat/scriptcat/commit/c40822b293f1283d420797a0cbe549153541f3c8)] (by @cyfung1031)
- 🐛 menuCommand-update na tabbladverwijdering voorkomen ([#828](https://github.com/scriptscat/scriptcat/issues/828)) [[c64f6d9](https://github.com/scriptscat/scriptcat/commit/c64f6d9a4e087f7788f5b160b91c2b808161e58e)] (by @cyfung1031)
- 🐛 Modali18n-probleem hersteld ([#825](https://github.com/scriptscat/scriptcat/issues/825)) [[03da1ba](https://github.com/scriptscat/scriptcat/commit/03da1ba07c0fd212627bf3c18dbb3afa6affed78)] (by @cyfung1031)
- 🐛 i18n-probleem van Modal.confirm hersteld [#821](https://github.com/scriptscat/scriptcat/issues/821) [[b3c30f5](https://github.com/scriptscat/scriptcat/commit/b3c30f55db8b37ccbfa7278b83af21159c72f2cb)]
- ✏️ &quot;minetype&quot; moet &quot;mimetype&quot; zijn in parametertype ([#823](https://github.com/scriptscat/scriptcat/issues/823)) [[fb3d132](https://github.com/scriptscat/scriptcat/commit/fb3d132ece659cb18082e383dfb925a5cc242c4c)] (by @cyfung1031)
- 🐛 Bewerkingen afgebroken &amp; bronnen vrijgegeven bij ongeldige Extension Context-fout ([#800](https://github.com/scriptscat/scriptcat/issues/800)) [[c110e74](https://github.com/scriptscat/scriptcat/commit/c110e746336e63fc1266bb4cacc056e126d919e0)] (by @cyfung1031)
- 🐛 Probleem van batchUpdate-pagina die updates opnieuw ophaalt + niet bijwerken na installatie, hersteld ([#803](https://github.com/scriptscat/scriptcat/issues/803)) [[73f1f32](https://github.com/scriptscat/scriptcat/commit/73f1f329388c07588f2a532b71e5318bf3a92392)] (by @cyfung1031)
- 🐛 Standaard jsconfig aangepast [#813](https://github.com/scriptscat/scriptcat/issues/813) [[06f0e1c](https://github.com/scriptscat/scriptcat/commit/06f0e1c7f0974b954d7ab546ce86f22f830dc28f)]
- 🐛 UI-renderprobleem ([#806](https://github.com/scriptscat/scriptcat/issues/806)) [[5c75c8b](https://github.com/scriptscat/scriptcat/commit/5c75c8b8e8fc92fcd830db094b34a7ad16fb4c9f)] (by @cyfung1031)
- 🐛 Ambiguïteitswaarschuwingen van unicode onderdrukt [#747](https://github.com/scriptscat/scriptcat/issues/747) [[5e7c077](https://github.com/scriptscat/scriptcat/commit/5e7c077ef250e1b8eef5662bc416b82d62927b52)]
- 🐛 ScriptList-kolomnamen en -inhoud die niet werden bijgewerkt na taalwissel ([#792](https://github.com/scriptscat/scriptcat/issues/792)) [[3ad58b8](https://github.com/scriptscat/scriptcat/commit/3ad58b82bf1d4955cddd3e50b570c601f7e90143)] (by @cyfung1031)
- 🐛 chrome.tabs.query hersteld ([#786](https://github.com/scriptscat/scriptcat/issues/786)) [[de607fd](https://github.com/scriptscat/scriptcat/commit/de607fd8eca841748a3e422fe5e84f84f84619d5)] (by @cyfung1031)
- 🐛 [UI-fix] useCallback-probleem opgelost ([#769](https://github.com/scriptscat/scriptcat/issues/769)) [[511de96](https://github.com/scriptscat/scriptcat/commit/511de96d2b271142244f9874f87bb23ec75f626a)] (by @cyfung1031)
- 🐛 Achtergrondmachtiging toegevoegd om onvermogen om op de achtergrond te draaien te herstellen [#762](https://github.com/scriptscat/scriptcat/issues/762) [[4205837](https://github.com/scriptscat/scriptcat/commit/42058379ab6d0e29003cc1f63d5df48dbe601f4e)]
- 🐛 Onvermogen van GM_download om bestanden met ongeldige tekens in de bestandsnaam te downloaden, hersteld ([#758](https://github.com/scriptscat/scriptcat/issues/758)) [[2518722](https://github.com/scriptscat/scriptcat/commit/2518722c8bc14b9f52e8720624dd835b1fbdfb1b)] (by @WhiteSevs)
- 🐛 toString-probleem van sandbox hersteld [#737](https://github.com/scriptscat/scriptcat/issues/737) [[6ca24c9](https://github.com/scriptscat/scriptcat/commit/6ca24c9b171792035803ac4e1c69e473629f9d18)]
- 🐛 Badge die 0 toont, hersteld [[026c1d2](https://github.com/scriptscat/scriptcat/commit/026c1d2071dd4cfb6291f005d36717bcdf0a51c3)]
- 🐛 CSP-probleem van scriptinjectie hersteld [#739](https://github.com/scriptscat/scriptcat/issues/739) [#728](https://github.com/scriptscat/scriptcat/issues/728) [[5da21b5](https://github.com/scriptscat/scriptcat/commit/5da21b5e3d0e7e86a1fd5dff57ba03ea641c19fa)]

### Diversen

- 📝 TypeScript-commentaarfixes ([#839](https://github.com/scriptscat/scriptcat/issues/839)) [[6b575ca](https://github.com/scriptscat/scriptcat/commit/6b575cac4841bdf86de70e4b0e702e342a00ca76)] (by @cyfung1031)
- 🌐 Vertaalproblemen voor meldingen en fouten verwerkt, `@grant`-conflictvalidatie toegevoegd ([#819](https://github.com/scriptscat/scriptcat/issues/819)) [[ef3482d](https://github.com/scriptscat/scriptcat/commit/ef3482d2c6406927a72835067f66a28cdb0f3b79)] (by @cyfung1031)
- 🌐 i18n-verwerking van "Geen berichtinhoud" ([#811](https://github.com/scriptscat/scriptcat/issues/811)) [[f9486d6](https://github.com/scriptscat/scriptcat/commit/f9486d6e53d68c085625ac370dc717daf8af232e)] (by @cyfung1031)
- 🌐 Weergave van bronformaat in UI gewijzigd ([#783](https://github.com/scriptscat/scriptcat/issues/783)) [[9242b95](https://github.com/scriptscat/scriptcat/commit/9242b957cf5f90f6d186a0b1f07bfce8d6ed1cd7)] (by @cyfung1031)
- 🌐 updatepage-vertaling ([#777](https://github.com/scriptscat/scriptcat/issues/777)) [[757c954](https://github.com/scriptscat/scriptcat/commit/757c954768be8fc94e05200822a23efef5e6bc01)] (by @cyfung1031)
- 🌐 translation.json bijgewerkt ([#746](https://github.com/scriptscat/scriptcat/issues/746)) [[85b48e2](https://github.com/scriptscat/scriptcat/commit/85b48e2982e0c81f82622528a3aa600c3c88ce8d)] (by @cyfung1031)

<a name="1.2.0-beta.1"></a>

## 1.2.0-beta.1 (2025-09-18)

### Toegevoegd

- ✨ Indelingsmenu toegevoegd om zijbalk te verbergen [#689](https://github.com/scriptscat/scriptcat/issues/689) [[dd64da7](https://github.com/scriptscat/scriptcat/commit/dd64da719c081acbf21645e2b1e1f38653ffae8c)]
- ✨ inject into geïmplementeerd ([#711](https://github.com/scriptscat/scriptcat/issues/711)) [[4c708c2](https://github.com/scriptscat/scriptcat/commit/4c708c2c5a0f7cea6daa2f32f51e182a4f83c50c)]
- ✨ : sneltoets toegevoegd om de werkbalkknop te activeren voor Firefox mv3 ([#718](https://github.com/scriptscat/scriptcat/issues/718)) [[06a9040](https://github.com/scriptscat/scriptcat/commit/06a904046034aad59564ea07d8ec441f4def5278)] (by @xymoryn)

### Gewijzigd

- ⚡ Inklapprobleem na herrenderen van de popup door klikken op de achtergrondscriptuitvoerknop, geoptimaliseerd [[d83ad0d](https://github.com/scriptscat/scriptcat/commit/d83ad0dda600db59adf70f9db2304381db7ab80f)]
- ⚡ Scriptlijst geoptimaliseerd, herrendering verminderd [[610fba0](https://github.com/scriptscat/scriptcat/commit/610fba08bbac5c01791aac756eed60a75bc1d483)]
- ♻️ Taakcontrole van achtergrondscripts verbeterd, fouten verminderd [#714](https://github.com/scriptscat/scriptcat/issues/714) [[3850af2](https://github.com/scriptscat/scriptcat/commit/3850af22abefced1f2ec6c773c92599a18bb0f8a)]
- 🐛 Achtergrondscripts die niet uitklapten in popup, hersteld ([66ab70f](https://github.com/scriptscat/scriptcat/commit/66ab70fb10c28aaf0c9260a9591aab7e1ae35615))
- ✨ Popup sluit niet automatisch na uitsluiten van websites [#725](https://github.com/scriptscat/scriptcat/issues/725) ([e432210](https://github.com/scriptscat/scriptcat/commit/e43221051d52d7394a579442519e99d258df872a))
- ♻️ ReduxStore en broadcastmechanisme geoptimaliseerd ([#729](https://github.com/scriptscat/scriptcat/issues/729)) [[b62781e](https://github.com/scriptscat/scriptcat/commit/b62781e11f0f4771094e42cb3479a70b8134cdf6)] (by @cyfung1031)
- ⚡ React.forwardRef-code geoptimaliseerd ([#734](https://github.com/scriptscat/scriptcat/issues/734)) [[a7faa48](https://github.com/scriptscat/scriptcat/commit/a7faa48f9a4615318104fa5d501184a4faec73cd)] (by @cyfung1031)
- ♻️ systemConfig gerefactord en geoptimaliseerd [[3acd3f3](https://github.com/scriptscat/scriptcat/commit/3acd3f3890031a7e90bd57eb63320007164ed4ff)]

### Hersteld

- 🐛 Statusupdatefout hersteld [[94fd65b](https://github.com/scriptscat/scriptcat/commit/94fd65bfb765a9511e0efb2dc6fb2bfd216e570f)]
- ✏️ Typo hersteld ([#738](https://github.com/scriptscat/scriptcat/issues/738)) ([4e55c06](https://github.com/scriptscat/scriptcat/commit/4e55c06212336bd3356e6d1ead3b75cf97f3b9d8))
- 🐛 Badge die 0 toont, hersteld ([6edad14](https://github.com/scriptscat/scriptcat/commit/6edad1491820665fad8cd6ee5c85e93c57aa0d42))
- 🐛 Berichttypecontrole verbeterd [#676](https://github.com/scriptscat/scriptcat/issues/676) ([5073795](https://github.com/scriptscat/scriptcat/commit/50737957507ff9af3aa9ba9a6b7d444b643d1ff2))
- 🐛 toString-probleem van sandbox hersteld [#737](https://github.com/scriptscat/scriptcat/issues/737) [[a4cefbc](https://github.com/scriptscat/scriptcat/commit/a4cefbc791fc2c2e53f3e934e0e4725023f49f72)]
- ✏️ Typo hersteld [[35b6f58](https://github.com/scriptscat/scriptcat/commit/35b6f581c6421a6db001eebadaa8ae216f5b8575)]
- 🐛 GM xhr-documentprobleem hersteld [#716](https://github.com/scriptscat/scriptcat/issues/716) [[1c46546](https://github.com/scriptscat/scriptcat/commit/1c465462f4e14ae461d54358710f5caf74208af3)]

<a name="1.2.0-beta"></a>

## 1.2.0-beta (2025-09-07)

### Toegevoegd

- ✨ Eigen editorconfiguratie en editortype-definities toegevoegd ([#708](https://github.com/scriptscat/scriptcat/issues/708)) [[49eb379](https://github.com/scriptscat/scriptcat/commit/49eb3794774790d61c3ef787c865a9ba6fe82841)]
- ✨ Verwijderingsenquêtepagina toegevoegd [[6404c8f](https://github.com/scriptscat/scriptcat/commit/6404c8f74aff09b15725a92f8afdfc0d71ac188f)]
- 📝 Installatie-openingspagina en naamruimte gewijzigd ([6f2f000](https://github.com/scriptscat/scriptcat/commit/6f2f000612908b7a88f6b70c2831092805c63bc7))
- ✨ Mobiele installatie-QR-code toegevoegd ([348237c](https://github.com/scriptscat/scriptcat/commit/348237c7ce9771c69025386926b1f73710cf6f42))

### Hersteld

- 🐛 Compatibiliteitsproblemen met oudere browserversies hersteld [#715](https://github.com/scriptscat/scriptcat/issues/715) [[4da8068](https://github.com/scriptscat/scriptcat/commit/4da806879c2b170672814d02e6f8ed98c9fae35b)]
- 💄 Popupmenuweergave geoptimaliseerd wanneer het venster te klein is ([288650e](https://github.com/scriptscat/scriptcat/commit/288650e5e4cbdc3fa8658f0754ce427a1b3dec5a))
- 🐛 N-problemen hersteld ([#710](https://github.com/scriptscat/scriptcat/issues/710)) [[6a2027a](https://github.com/scriptscat/scriptcat/commit/6a2027ac0bb5e0ed625df570240d068a98a34b31)] (by @WhiteSevs)
- 🐛 GM XHR-omleiding die headers verloor, hersteld [#664](https://github.com/scriptscat/scriptcat/issues/664) close [#664](https://github.com/scriptscat/scriptcat/issues/664) [[1f29e69](https://github.com/scriptscat/scriptcat/commit/1f29e699ded25ec5270844c1fb54001b5bbf5038)]

### Diversen

- 🌐 i18n-problemen verwerkt [[2adf69d](https://github.com/scriptscat/scriptcat/commit/2adf69d6ec3c30186f2c2ef89f97e3cba9e15a66)]
- 🌐 Vertaalproblemen verwerkt [[55223dd](https://github.com/scriptscat/scriptcat/commit/55223dde8c545e974d19dd8126756aaae407e1fd)]

<a name="1.1.0-beta.2"></a>

## 1.1.0-beta.2 (2025-09-03)

Dropbox-ondersteuning toegevoegd, compatibiliteitsverbeteringen aangebracht, @early-start toegevoegd voor sneller dan pagina laden

### Toegevoegd

- ✨ Instellingen voor scriptruntime-omgeving toegevoegd [#628](https://github.com/scriptscat/scriptcat/issues/628) [[0d4a89e](https://github.com/scriptscat/scriptcat/commit/0d4a89efaecf0331dcc7fbb6df006b93a1525846)]
- ✨ Standaard ingeklapt wanneer er geen achtergrondscripts zijn [#626](https://github.com/scriptscat/scriptcat/issues/626) ([9d0aac6](https://github.com/scriptscat/scriptcat/commit/9d0aac6aae11b96707ca1f7c024a24e9d55f217b))
- ✨ Dropbox-ondersteuning [#575](https://github.com/scriptscat/scriptcat/issues/575) [[2c66f21](https://github.com/scriptscat/scriptcat/commit/2c66f21f5118bd83a0eaa0f1baa3a31f2233e5b2)]
- ✨ external.Tampermonkey geoptimaliseerd wanneer TM en SC samen starten, SC-installatiestatus gecontroleerd als TM niet is geïnstalleerd ([#703](https://github.com/scriptscat/scriptcat/issues/703)) [[d0115c3](https://github.com/scriptscat/scriptcat/commit/d0115c33657260d803b6091139601b1b20407d4e)] (by @cyfung1031)
- ✨ @early-start toegevoegd voor sneller dan pagina laden ([#649](https://github.com/scriptscat/scriptcat/issues/649)) [[eb097dd](https://github.com/scriptscat/scriptcat/commit/eb097dd146dcd6f8ca712ed883571dbfb3d09f20)]

### Gewijzigd

- ♻️ Compatibel met FF: `chrome.scripting.registerContentScripts` ([#704](https://github.com/scriptscat/scriptcat/issues/704)) [[a9ad0ea](https://github.com/scriptscat/scriptcat/commit/a9ad0ea2b34744dbd4488bda0a16d73bd6a1cc2b)] (by @cyfung1031)
- ♻️ url_matcher-code geoptimaliseerd ([#702](https://github.com/scriptscat/scriptcat/issues/702)) [[27b8baa](https://github.com/scriptscat/scriptcat/commit/27b8baa90372f75cbf428dd32ef02d842688cf33)] (by @cyfung1031)
- ⚡ const now = Date.now(); ([#695](https://github.com/scriptscat/scriptcat/issues/695)) [[400b45c](https://github.com/scriptscat/scriptcat/commit/400b45cc487da4cc8a7b866916855acdc18a8023)] (by @cyfung1031)
- ⚡ forEach -> for of ([#694](https://github.com/scriptscat/scriptcat/issues/694)) [[70927b6](https://github.com/scriptscat/scriptcat/commit/70927b6f0ddcf4a60d5838597d1df5acaaa7ca94)] (by @cyfung1031)
- ⚡ Gemeenschappelijke code geoptimaliseerd ([#692](https://github.com/scriptscat/scriptcat/issues/692)) [[cf05973](https://github.com/scriptscat/scriptcat/commit/cf0597305a158fd8ba8489f30906d7bbbd7a4b0b)] (by @cyfung1031)
- ⚡ Code geoptimaliseerd: globaal zoeken ([#697](https://github.com/scriptscat/scriptcat/issues/697)) [[a5c12bd](https://github.com/scriptscat/scriptcat/commit/a5c12bd94f249ea194bececf2ecb39a0dea3c7dc)] (by @cyfung1031)
- ♻️ Middleware gebruikt om initReady te verwerken [[758e926](https://github.com/scriptscat/scriptcat/commit/758e92690194462982282dca25041c825d0b05e2)]
- ♻️ Server- en MessageQueue-componenten geoptimaliseerd [[0932edc](https://github.com/scriptscat/scriptcat/commit/0932edc49722226cac97403dcd14dbaef01b5528)]
- ♻️ Compatibiliteitsaanpassing: optional_permission-verwerking ([#679](https://github.com/scriptscat/scriptcat/issues/679)) [[bfc558a](https://github.com/scriptscat/scriptcat/commit/bfc558a0dfd167234100d95b9180ee6db4ab4c04)] (by @cyfung1031)
- ♻️ Compatibiliteitsaanpassing: `content.js` moet fout geven als er geen `chrome.runtime.onMessage` is ([#675](https://github.com/scriptscat/scriptcat/issues/675)) [[4e9adc0](https://github.com/scriptscat/scriptcat/commit/4e9adc00562981aa9d930d8a3f199e9418bdff30)] (by @cyfung1031)
- ♻️ Compatibiliteitsaanpassing (offscreen) en code geoptimaliseerd ([#674](https://github.com/scriptscat/scriptcat/issues/674)) [[a3e56dd](https://github.com/scriptscat/scriptcat/commit/a3e56dd9d76cad73c8c8ec75c71fdbcfb9ca40e0)] (by @cyfung1031)
- 🎨 Compatibiliteitsaanpassing: notificationsUpdate ([#673](https://github.com/scriptscat/scriptcat/issues/673)) [[a345d93](https://github.com/scriptscat/scriptcat/commit/a345d93187e26efe99cc331072ffc854b3fe7b4d)] (by @cyfung1031)
- 🎨 chrome.tabs.create-compatibiliteit verbeterd ([#639](https://github.com/scriptscat/scriptcat/issues/639)) [[ac0d7de](https://github.com/scriptscat/scriptcat/commit/ac0d7deb5957ea71579ef7a44594a75300e1cca6)] (by @cyfung1031)

### Hersteld

- 🐛 Onvermogen om installatie te starten wanneer de installatie-tussenpagina onbereikbaar was, hersteld [#705](https://github.com/scriptscat/scriptcat/issues/705) [[5f1e292](https://github.com/scriptscat/scriptcat/commit/5f1e2929d79c470ba4427c3cce01f5cd184a839b)]
- 🐛 `@match *://*domain/*`-expressie verwerkt [[039b445](https://github.com/scriptscat/scriptcat/commit/039b4454148947cd3c74de82b87804ee9815e60c)]
- 🐛 Sandbox-ontsnappingsprobleem in de extensieomgeving hersteld [#700](https://github.com/scriptscat/scriptcat/issues/700) [[a1a868d](https://github.com/scriptscat/scriptcat/commit/a1a868dfe3199e666fe2bcb65cfb2ad0ad3d699b)]
- ✏️ backgroud -> background ([#698](https://github.com/scriptscat/scriptcat/issues/698)) [[2594075](https://github.com/scriptscat/scriptcat/commit/2594075c4a50f4c79fa46bcda08d7b0cbcfe723c)] (by @cyfung1031)
- ✏️ CrhomeStorage -> ChromeStorage ([#693](https://github.com/scriptscat/scriptcat/issues/693)) [[64c536d](https://github.com/scriptscat/scriptcat/commit/64c536dbd5fcb4c29eebc1109202bab69aaa3ee2)] (by @cyfung1031)
- 🐛 GM.getTab en GM.getTabs hersteld ([#683](https://github.com/scriptscat/scriptcat/issues/683)) [[31de256](https://github.com/scriptscat/scriptcat/commit/31de256f02b5b61e27f0eec9ea673248ba8faa32)] (by @WhiteSevs)
- 🐛 Ontbrekend domein in finalUrl hersteld ([#656](https://github.com/scriptscat/scriptcat/issues/656)) [[545d7c8](https://github.com/scriptscat/scriptcat/commit/545d7c8c0dd69c83bd2f0353518aafe6af81c0f4)] (by @cyfung1031)
- 🐛 Compatibel met oudere browserkernels [#647](https://github.com/scriptscat/scriptcat/issues/647) ([bba12d2](https://github.com/scriptscat/scriptcat/commit/bba12d23f04759cb9b7fdb63f0d95ae515ee94a9))

### Diversen

- 📝 README_RU.md en CONTRIBUTING_RU.md gemaakt ([#678](https://github.com/scriptscat/scriptcat/issues/678)) [[597ab03](https://github.com/scriptscat/scriptcat/commit/597ab0378fe5ced01637cf411326ef7845b8ce2b)] (by @Ioann)
- 👷 Compatibiliteitsaanpassing (pack.js-compatibiliteit) ([#669](https://github.com/scriptscat/scriptcat/issues/669)) [[fec45e6](https://github.com/scriptscat/scriptcat/commit/fec45e6606a609b10b79c58d2fcba02c2ce71e16)] (by @cyfung1031)

**Volledige changelog**: https://github.com/scriptscat/scriptcat/compare/v1.1.0-beta.1...v1.1.0-beta.2

<a name="1.1.0-beta.1"></a>

## 1.1.0-beta.1 (2025-08-29)

### Toegevoegd

- ✅ Eenheidstests gewijzigd ([#690](https://github.com/scriptscat/scriptcat/issues/690)) [[71f9d70](https://github.com/scriptscat/scriptcat/commit/71f9d709868b96352494889ea864c22c0b2ce197)] (by @cyfung1031)
- 🎨 Async-code geoptimaliseerd ([#651](https://github.com/scriptscat/scriptcat/issues/651)) ([55440e7](https://github.com/scriptscat/scriptcat/commit/55440e725a706e4358f08bc430ebea77bcb25335))
- ✨ Globaal code zoeken ([#662](https://github.com/scriptscat/scriptcat/issues/662)) [[f8eafb7](https://github.com/scriptscat/scriptcat/commit/f8eafb7f955dad62c1b41ac477e929bf00c65982)] (by @RenjiYuusei)
- ✅ nextTime-eenheidstest aangepast [[0a6ed8c](https://github.com/scriptscat/scriptcat/commit/0a6ed8c72b8ee6dc15b66f8053ae3bf3ee95584d)]

### Gewijzigd

- ♻️ ScriptMatchInfo-gerelateerde code geoptimaliseerd ([#653](https://github.com/scriptscat/scriptcat/issues/653)) [[556c493](https://github.com/scriptscat/scriptcat/commit/556c493f027fbfa7299ee68c3a9d927de6f41f08)] (by @cyfung1031)
- 🎨 Vensteropeningslogica geoptimaliseerd [[0de44bf](https://github.com/scriptscat/scriptcat/commit/0de44bfc90eeee003d9708ba0678e6c23f859579)]
- 🌐 Vertaalproblemen verwerkt ([cbe880e](https://github.com/scriptscat/scriptcat/commit/cbe880efcf3a148301dce4ffa90aa29a14407a26))
- 🎨 `@scriptURL` ([#654](https://github.com/scriptscat/scriptcat/issues/654)) [[4b1a5de](https://github.com/scriptscat/scriptcat/commit/4b1a5de9ed3b328091f582925b8a442535953a9e)] (by @cyfung1031)
- ♻️ UrlMatch herschreven ([#637](https://github.com/scriptscat/scriptcat/issues/637)) [[5b01c10](https://github.com/scriptscat/scriptcat/commit/5b01c10859b80890456a44a66d78204b42040870)] (by @cyfung1031)
- 🎨 getEnableScript geoptimaliseerd ([#645](https://github.com/scriptscat/scriptcat/issues/645)) [[04910cf](https://github.com/scriptscat/scriptcat/commit/04910cf6213fe90fc8cbca28f2826414855dd7b1)] (by @cyfung1031)
- ⚡ runtime.ts-code geoptimaliseerd ([#642](https://github.com/scriptscat/scriptcat/issues/642)) [[641cc1d](https://github.com/scriptscat/scriptcat/commit/641cc1d1ec0ec2dff5d32689ba46d27d30f7b45f)] (by @cyfung1031)
- 🎨 chrome.tabs.create-compatibiliteit verbeterd ([#639](https://github.com/scriptscat/scriptcat/issues/639)) [[601b933](https://github.com/scriptscat/scriptcat/commit/601b933bd5cec1405ac6169a6160a57dfe0dbcfc)] (by @cyfung1031)
- 🎨 `@match` `@icon` van nieuwe scripts hersteld ([#636](https://github.com/scriptscat/scriptcat/issues/636)) [[aec08a3](https://github.com/scriptscat/scriptcat/commit/aec08a331f868defee6279eb420f6b90aba39cfe)] (by @cyfung1031)

### Verwijderd

- 🔥 Crowdin-documentatie van de scriptsite verwijderd [[695f4d1](https://github.com/scriptscat/scriptcat/commit/695f4d1ba2d039508415235dd8e606d238be8035)]

### Hersteld

- 🐛 Ontbrekend domein in finalUrl hersteld ([#656](https://github.com/scriptscat/scriptcat/issues/656)) [[3ed018a](https://github.com/scriptscat/scriptcat/commit/3ed018a7a54803fcf2e1791316e0166ed0b52007)] (by @cyfung1031)
- 💚 react/jsx-no-literals lint-probleem hersteld [[017b608](https://github.com/scriptscat/scriptcat/commit/017b60886be601e3e0e1719cf249da32d5686c30)]
- 🐛 Compatibel met oudere browserkernels [#647](https://github.com/scriptscat/scriptcat/issues/647) [[0e2f817](https://github.com/scriptscat/scriptcat/commit/0e2f8173c8b44bd6ad44bdffc73fa302a96a058e)]
- 🐛 window.external-injectie geoptimaliseerd ([#646](https://github.com/scriptscat/scriptcat/issues/646)) [[0b2668a](https://github.com/scriptscat/scriptcat/commit/0b2668aadcab35a33ff9abc4bd030dffb87ea168)] (by @cyfung1031)
- 🐛 Onvermogen van de cloudopslagverificatiepagina om automatisch te sluiten, hersteld [[7748088](https://github.com/scriptscat/scriptcat/commit/7748088e63c1fc660b6a6ae5613cf04f9da99b8c)]

### Diversen

- 🌐 Vietnamese locale verfijnd en uitgebreid ([#661](https://github.com/scriptscat/scriptcat/issues/661)) [[6847a59](https://github.com/scriptscat/scriptcat/commit/6847a596c4b06c75e13594ef60e4b9dfa5718cf3)] (by @RenjiYuusei)
- 🌐 Vertaalfixes ([#635](https://github.com/scriptscat/scriptcat/issues/635)) [[19296de](https://github.com/scriptscat/scriptcat/commit/19296de6a3815e5965eb33401a55da9b2bd22bb4)] (by @cyfung1031)
- 🌐 i18n-probleem van de onboardinggids hersteld [#627](https://github.com/scriptscat/scriptcat/issues/627) [[9683f96](https://github.com/scriptscat/scriptcat/commit/9683f965400ab6a2bac15349aca4335911766eac)]

<a name="1.1.0-beta"></a>

## 1.1.0-beta (2025-08-18)

### Gewijzigd

- ⚡ .reduce-syntaxis niet gebruiken ([#619](https://github.com/scriptscat/scriptcat/issues/619)) [[71e97d5](https://github.com/scriptscat/scriptcat/commit/71e97d53fe152d5a8e479378366d077589df3d27)] (by @cyfung1031)
- ⚡ Problemen met laden van scriptbronnen geoptimaliseerd [#612](https://github.com/scriptscat/scriptcat/issues/612) [[e206562](https://github.com/scriptscat/scriptcat/commit/e2065622c2a544579bc84f25f178d118d902ccba)]
- 🎨 Installatiepagina van scripts geoptimaliseerd ([#611](https://github.com/scriptscat/scriptcat/issues/611)) ([bbc76b1](https://github.com/scriptscat/scriptcat/commit/bbc76b1110d417a445b3cc065488fe11b7f2ddc2))
- 🐛 Open-in-huidig-venster-methode hersteld ([70be8a3](https://github.com/scriptscat/scriptcat/commit/70be8a303b98b73885dac950dc1b24aa8cbbe773))
- 🎨 utils.ts geoptimaliseerd ([#608](https://github.com/scriptscat/scriptcat/issues/608)) [[37bb763](https://github.com/scriptscat/scriptcat/commit/37bb763306c7e06df085022c2cb2fa9cc2788204)] (by @cyfung1031)
- 🎨 doThrow en TypeScript-organisatie ([#606](https://github.com/scriptscat/scriptcat/issues/606)) [[4362802](https://github.com/scriptscat/scriptcat/commit/4362802fe3ba4482a283996cae9a424b23c69407)] (by @cyfung1031)
- ⚡ popup.ts en runtime.ts verbeterd (code-optimalisatie) ([#607](https://github.com/scriptscat/scriptcat/issues/607)) [[e48ca66](https://github.com/scriptscat/scriptcat/commit/e48ca66cc4f56ef981543c1f56b5e7eb0c2fa14a)] (by @cyfung1031)
- 🎨 getCurrentTab-gerelateerde updates ([#604](https://github.com/scriptscat/scriptcat/issues/604)) [[b4a9f2e](https://github.com/scriptscat/scriptcat/commit/b4a9f2efd48ee8cbacac6872ddb25c7d630bfd8a)] (by @cyfung1031)
- 🎨 TMessage TS-definitie ([#596](https://github.com/scriptscat/scriptcat/issues/596)) [[6aeb61d](https://github.com/scriptscat/scriptcat/commit/6aeb61da8ae7efdd718facacf90e4ed40ddb4caf)] (by @cyfung1031)
- 🎨 Service Worker gebruikt om favicon te verkrijgen ([#594](https://github.com/scriptscat/scriptcat/issues/594)) [[727872d](https://github.com/scriptscat/scriptcat/commit/727872d47552e4c53b09be33b526f7f69baad4ec)] (by @cyfung1031)
- 🎨 Berichtstandaardisatie ([#595](https://github.com/scriptscat/scriptcat/issues/595)) [[791608b](https://github.com/scriptscat/scriptcat/commit/791608b31855b1415f9ad496ef6c52fe1809984d)] (by @cyfung1031)
- 🎨 SystemConfigChange-code geoptimaliseerd ([#593](https://github.com/scriptscat/scriptcat/issues/593)) [[041d985](https://github.com/scriptscat/scriptcat/commit/041d98523902319c88efdee3fa2ae40eab80aba8)] (by @cyfung1031)
- 🎨 EventEmitter-code geoptimaliseerd ([#592](https://github.com/scriptscat/scriptcat/issues/592)) [[67543c4](https://github.com/scriptscat/scriptcat/commit/67543c473b303a1708ea83ca00e49d5d687d6a34)] (by @cyfung1031)
- 🎨 Cache-code geoptimaliseerd ([#591](https://github.com/scriptscat/scriptcat/issues/591)) [[34e42ac](https://github.com/scriptscat/scriptcat/commit/34e42ac5f9ee504a90636d32c53def356c7d4495)] (by @cyfung1031)
- 🎨 Nieuwe scriptsjabloon gebruikt standaard `@grant none`, zoals TM ([#589](https://github.com/scriptscat/scriptcat/issues/589)) [[e5a2d5d](https://github.com/scriptscat/scriptcat/commit/e5a2d5d3adafdcac2cf95b865550e395ba8443c7)] (by @cyfung1031)
- ⚡ new Date().getTime() → Date.now() ([#587](https://github.com/scriptscat/scriptcat/issues/587)) [[245ecbf](https://github.com/scriptscat/scriptcat/commit/245ecbfc23f1811aeee5671e48151e94b0ebc128)] (by @cyfung1031)

### Hersteld

- 🐛 Probleem van `@connect` \* dat geen effect had, hersteld [#623](https://github.com/scriptscat/scriptcat/issues/623) [[76481c8](https://github.com/scriptscat/scriptcat/commit/76481c845b34414a7f15ed18ec61f7dff7eef091)]
- 🐛 Eenheidstests toegevoegd en `@exclude`-probleem hersteld ([#618](https://github.com/scriptscat/scriptcat/issues/618)) [[0046bb7](https://github.com/scriptscat/scriptcat/commit/0046bb78800a2c46edaac785b8e9592327772a3b)] (by @cyfung1031)
- 🐛 Onvermogen om scripts via sommige .user.js-links te installeren, hersteld [#599](https://github.com/scriptscat/scriptcat/issues/599) [[ccd2639](https://github.com/scriptscat/scriptcat/commit/ccd2639858f0f3cde28f284376fe8ed998d935ae)]
- 🐛 Mislukt maken van nieuw script hersteld [[d42d6e7](https://github.com/scriptscat/scriptcat/commit/d42d6e7d408a84674facf9ab0da6eac0e384502f)]
- 🐛 Metadatafixes ([#610](https://github.com/scriptscat/scriptcat/issues/610)) [[4d98cce](https://github.com/scriptscat/scriptcat/commit/4d98cce0ca1281cc58f551ea4e6700e340780d3f)] (by @cyfung1031)
- 🐛 Popup-badgefixes ([#605](https://github.com/scriptscat/scriptcat/issues/605)) [[eff9230](https://github.com/scriptscat/scriptcat/commit/eff92309de99abb0cf48ef4727afaa113bc2fbb6)] (by @cyfung1031)
- 🐛 ScriptEditor.tsx-fixes ([#603](https://github.com/scriptscat/scriptcat/issues/603)) [[a9aadba](https://github.com/scriptscat/scriptcat/commit/a9aadba372b813c16bdc5f0aeb07c68981f48c63)] (by @cyfung1031)
- 🐛 CSS-fixes voor codeviewer &amp; editor ([#602](https://github.com/scriptscat/scriptcat/issues/602)) [[2e86785](https://github.com/scriptscat/scriptcat/commit/2e8678513efaccd42c8dc2aa89f8b76679aa8420)] (by @cyfung1031)
- 🐛 Gelijktijdigheidsprobleem van getFaviconFromDomain hersteld ([#597](https://github.com/scriptscat/scriptcat/issues/597)) [[1872fe1](https://github.com/scriptscat/scriptcat/commit/1872fe165ab204b155a56f037c111d2d7776c2b9)] (by @cyfung1031)
- 🐛 Tabbladopenfout in scenario's met meerdere vensters hersteld [#586](https://github.com/scriptscat/scriptcat/issues/586) [[54c1da2](https://github.com/scriptscat/scriptcat/commit/54c1da29c2bd8bd8f5ef2d85b7aed8b334de296f)]
- 🐛 openerTabId-compatibiliteitsprobleem hersteld ([#586](https://github.com/scriptscat/scriptcat/issues/586)) [[b861fc8](https://github.com/scriptscat/scriptcat/commit/b861fc8620e53b885cad98db03f1dd10ec9d296c)] (by @cyfung1031)

### Diversen

- 👷 pack.js-code geoptimaliseerd ([#615](https://github.com/scriptscat/scriptcat/issues/615)) [[870dd9b](https://github.com/scriptscat/scriptcat/commit/870dd9bc6b7eff3eceefa915452e773ec0565180)] (by @cyfung1031)
