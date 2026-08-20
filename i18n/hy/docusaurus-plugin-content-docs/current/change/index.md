---
title: Փոփոխությունների մատյան
---

import GithubStar from '@site/src/components/GithubStar';

<GithubStar variant="bar" scene="changelog" />

Բետա տարբերակի փոփոխությունների մատյանի համար տե՛ս [Բետա փոփոխությունների մատյան](./beta-changelog.md)

⚠️ Խնդրում ենք նկատի ունենալ, որ եթե օգտագործում եք Windows 8/7/XP, կամ ձեր բրաուզերի միջուկի տարբերակը \<120-ից ցածր է, պետք է ձեռքով տեղադրեք [ScriptCat-ի հին տարբերակը](https://github.com/scriptscat/scriptcat/releases): v0.16.x-ը Manifest V2-ն աջակցող վերջին տարբերակն է: Տեղադրման քայլերը կարող եք գտնել այստեղ. [Ընդլայնման տեղադրում՝ չփաթեթավորված թղթապանակը բեռնելու միջոցով](/use/use.md#load-unpacked-extension-installation):

<a name="1.4.0"></a>

## 1.4.0 (2026-06-26)

Այս թողարկումը բերում է ցածր մակարդակի վերակառուցում՝ Firefox MV3-ին նախապատրաստվելու համար, ինչպես նաև խմբագրիչի փորձի բարելավումներ (խմբագրման ընտրացանկ, Ctrl+Shift+F ֆորմատավորում, Monaco արագ ուղղում), բազմահարթակ որոնման համակարգի ընտրություն սկրիպտների հայտնաբերման համար, նոր հնարավորություններ, ինչպիսիք են `@unwrap` / `window.onurlchange` / `@run-at context-menu`, ամպային պահեստավորման սինխրոնիզացիայի հուսալիության համապարփակ ամրապնդում և GM API-ի, UI-ի ու կայունության մեծ խմբաքանակ ուղղումներ (ներառյալ երկարատև հիշողության արտահոսքը և նախատիպերի աղտոտման անվտանգության խոցելիությունները): ScriptCat AI Agent-ը հասանելի է որպես նախադիտում dev / Beta կառուցվածքներում և դեռ միացված չէ կայուն թողարկումում:

### 🚀 Հիմնական նոր գործառույթներ

- 🧪 ScriptCat AI Agent (**Նախադիտում — հասանելի է միայն dev / Beta կառուցվածքներում, դեռ միացված չէ կայունում**) — արհեստական բանականությամբ աշխատող խելացի գործակալ համակարգ՝ զրույցի փոխազդեցությամբ, գործիքների կանչերով, Skill համակարգով, MCP արձանագրությամբ և այլն ([#1324](https://github.com/scriptscat/scriptcat/pull/1324)) (by @CodFrm)
- ✨ `@unwrap` մետատվյալների պիտակի աջակցություն ([#1213](https://github.com/scriptscat/scriptcat/pull/1213)) (by @cyfung1031)
- ✨ TM-ի `window.onurlchange`-ի ներդրում Navigation API-ի միջոցով ([#1315](https://github.com/scriptscat/scriptcat/pull/1315)) (by @cyfung1031)
- ✨ `@run-at context-menu` աջակցության վերականգնում ([#1442](https://github.com/scriptscat/scriptcat/pull/1442)) (by @cyfung1031)
- ✨ Սկրիպտների հայտնաբերումն աջակցում է բազմահարթակ որոնման համակարգի ընտրություն ([#1295](https://github.com/scriptscat/scriptcat/pull/1295)) (by @CodFrm)
- ✨ Ավելացվել են պատկերակների ավելի շատ ծառայություններ մատուցողներ ([#1333](https://github.com/scriptscat/scriptcat/pull/1333)) (by @cyfung1031)
- ✨ Սկրիպտների ցուցակի «վերջին թարմացում» սյունակում ավելացվել է թարմացման ստուգման պատկերակ ([#1304](https://github.com/scriptscat/scriptcat/pull/1304)) (by @CodFrm)
- ✨ Բարելավվել է խմբագրման կոնֆլիկտների և սկրիպտի անվան կոնֆլիկտների մշակումը ([#1223](https://github.com/scriptscat/scriptcat/pull/1223)) (by @cyfung1031)

### 🧑‍💻 Խմբագրիչ

- ✨ Խմբագրիչին ավելացվել է խմբագրման ընտրացանկ (որոնում, փոխարինում, չեղարկում և այլն) ([#1303](https://github.com/scriptscat/scriptcat/pull/1303)) (by @CodFrm)
- ✨ Խմբագրիչն աջակցում է Ctrl+Shift+F ֆորմատավորում ([#1415](https://github.com/scriptscat/scriptcat/pull/1415)) (by @cyfung1031)
- ✨ Բարելավվել են Monaco արագ ուղղումը և օգտագործողի սկրիպտների մետատվյալների հուշումները ([#1461](https://github.com/scriptscat/scriptcat/pull/1461)) (by @cyfung1031)
- 🐛 Ուղղվել են Ctrl-F / Ctrl-H դյուրանցումները ([#1312](https://github.com/scriptscat/scriptcat/pull/1312)) (by @cyfung1031)
- 🐛 Ուղղվել է չաշխատող ESLint ուղղման գործառույթը [#1079](https://github.com/scriptscat/scriptcat/issues/1079) ([#1184](https://github.com/scriptscat/scriptcat/pull/1184)) (by @cyfung1031)
- 🐛 Ուղղվել են խմբագրիչի CSS դասավորության խնդիրները ([#1460](https://github.com/scriptscat/scriptcat/pull/1460)) (by @cyfung1031)
- 🐛 Ուղղվել է ScriptEditor սկրիպտների ցուցակի ցուցադրումը բաց թեմայում ([#1288](https://github.com/scriptscat/scriptcat/pull/1288)) (by @CodFrm)
- 🐛 Ուղղվել և բարելավվել են ScriptEditor-ի խնդիրները ([#1258](https://github.com/scriptscat/scriptcat/pull/1258)) (by @cyfung1031)

### ⚡️ Կատարողականի բարելավումներ

- 🚑 Ուղղվել է հիշողության հնարավոր արտահոսքը երկարատև ScriptCat նիստերի ընթացքում ([#1401](https://github.com/scriptscat/scriptcat/pull/1401)) (by @cyfung1031)
- ⚡️ Հեռացվել է Baidu ֆայլային համակարգի կախվածությունը գլոբալ DNR կանոններից, անցում կատարվել է յուրաքանչյուր հարցման համար թխուկների անջատմանը ([#1377](https://github.com/scriptscat/scriptcat/pull/1377)) (by @cyfung1031)
- ⚡️ Օպտիմիզացվել է բազմահարթակ որոնման համակարգի ընտրությունը սկրիպտների հայտնաբերման համար ([#1379](https://github.com/scriptscat/scriptcat/pull/1379)) (by @cyfung1031)
- ⚡️ Տեղադրման էջի loadingStatus-ի համար օգտագործվել է միատառ տառատեսակ՝ տատանումներից խուսափելու համար ([#1381](https://github.com/scriptscat/scriptcat/pull/1381)) (by @cyfung1031)
- ⚡️ Օպտիմիզացվել է pushValue-ի մշակումը ([#1403](https://github.com/scriptscat/scriptcat/pull/1403)) (by @cyfung1031)
- ⚡️ Ավելի ամբողջական թույլտվությունների ստուգումներ և օգտագործողի սկրիպտների թույլտվությունների ավելի լավ հուշումներ ([#1251](https://github.com/scriptscat/scriptcat/pull/1251)) (by @cyfung1031)
- ⚡️ Բարելավվել են MessageConnect-ի հիշողության կառավարումը և մաքրման մեխանիզմը ([#1248](https://github.com/scriptscat/scriptcat/pull/1248)) (by @cyfung1031)

### 🐛 Սխալների ուղղումներ

- 🐛 Ամրապնդվել է ամպային պահեստավորման սինխրոնիզացիայի հուսալիությունը (Dropbox / WebDAV / Google Drive / OneDrive նույնականացում, ուղիների մշակում և կրկնափորձերի տրամաբանություն) ([#1374](https://github.com/scriptscat/scriptcat/pull/1374) ~ [#1395](https://github.com/scriptscat/scriptcat/pull/1395)) (by @cyfung1031)
- 🐛 Ուղղվել են ամպային սինխրոնիզացիայի մի քանի խնդիրներ. OneDrive զրոյական բայթ վերբեռնում, Google Drive / OneDrive սխալների նորմալացում, S3 հատուկ մետատվյալների modifiedDate ([#1405](https://github.com/scriptscat/scriptcat/pull/1405)) ([#1406](https://github.com/scriptscat/scriptcat/pull/1406)) ([#1408](https://github.com/scriptscat/scriptcat/pull/1408)) (by @cyfung1031)
- 🐛 Հեռացվել է WebDAV ստուգման գրման զոնդը՝ չգրելու ենթակա արմատով ծառայություններում (օրինակ՝ Nutstore) կեղծ բացասական արդյունքներից խուսափելու համար ([#1445](https://github.com/scriptscat/scriptcat/pull/1445)) (by @CodFrm)
- 🐛 Ուղղվել է միջծագման հարցումների ձախողումը, երբ կայքի մուտքի թույլտվությունը բացակայում է ([#1477](https://github.com/scriptscat/scriptcat/pull/1477)) (by @cyfung1031)
- 🐛 Ուղղվել է Edge Android բջջային թռուցիկի հարմարեցումը [#686](https://github.com/scriptscat/scriptcat/issues/686) ([#1507](https://github.com/scriptscat/scriptcat/pull/1507)) (by @CodFrm)
- 🐛 Ուղղվել է սպիտակ ֆոնի առկայծումը սկզբնական բեռնման ժամանակ [#1497](https://github.com/scriptscat/scriptcat/issues/1497) ([#1498](https://github.com/scriptscat/scriptcat/pull/1498)) (by @cyfung1031)
- 🐛 Ուղղվել է հաղորդագրությունների կապերի (GM API / պորտեր) ոչ ճիշտ մաքրումը ([#1474](https://github.com/scriptscat/scriptcat/pull/1474)) (by @cyfung1031)
- 🐛 Ուղղվել է `@match` ձևանմուշի անհամապատասխանությունը, երբ որոնումը բացակայում է ([#1466](https://github.com/scriptscat/scriptcat/pull/1466)) (by @cyfung1031)
- 🐛 Ավելացվել է `protoBaseDescs`՝ Tampermonkey կիսաավազատուփում նախնիների դասերի ժառանգումն ուղղելու համար ([#1463](https://github.com/scriptscat/scriptcat/pull/1463)) (by @cyfung1031)
- 🐛 Ուղղվել է `GM_xmlhttpRequest`-ի msgConn-ի բացակայող null մշակումը ([#1433](https://github.com/scriptscat/scriptcat/pull/1433)) (by @cyfung1031)
- 🐛 Ուղղվել է GM xhr-ի կողմից աննորմալ onloadend-ի սխալ մշակումը ([#1412](https://github.com/scriptscat/scriptcat/pull/1412)) (by @cyfung1031)
- 🐛 Ուղղվել են ScriptEditor ցուցակի դինամիկ թարմացման և ցուցադրման խնդիրները ([#1414](https://github.com/scriptscat/scriptcat/pull/1414)) (by @cyfung1031)
- 🐛 Ուղղվել է նիստի կանոնների քանակի խնդիրը զուգահեռ xhr-ի դեպքում ([#1353](https://github.com/scriptscat/scriptcat/pull/1353)) (by @cyfung1031)
- 🐛 Ուղղվել է ամբողջ էջի վթարը, որը պայմանավորված է անվավեր cron արտահայտությամբ ([#1327](https://github.com/scriptscat/scriptcat/pull/1327)) (by @cyfung1031)
- 🐛 Ուղղվել է բոլոր սկրիպտների ձախողումը, երբ մեկ սկրիպտի ժամանակը սպառվում է խմբաքանակային թարմացման ստուգման ժամանակ ([#1265](https://github.com/scriptscat/scriptcat/pull/1265)) (by @cyfung1031)
- 🐛 Ավելացվել է extensionEnv-ի մշակում isIncognito-ի, userAgent-ի և run-in-ի համար ([#1368](https://github.com/scriptscat/scriptcat/pull/1368)) (by @cyfung1031)
- 🐛 Ուղղվել է մասամբ թաքնված նախնական ուղեցույցի կոճակը [#1396](https://github.com/scriptscat/scriptcat/issues/1396) ([#1398](https://github.com/scriptscat/scriptcat/pull/1398)) (by @cyfung1031)
- 🐛 Ուղղվել է սկրիպտների կառավարման էջում ծածկված գործիքի հուշումը [#1386](https://github.com/scriptscat/scriptcat/issues/1386) ([#1387](https://github.com/scriptscat/scriptcat/pull/1387)) (by @Xdy1579883916)
- 🐛 Ուղղվել է Sidebar-ի աննորմալ չափափոխումը քարտի ռեժիմում [#1179](https://github.com/scriptscat/scriptcat/issues/1179) ([#1373](https://github.com/scriptscat/scriptcat/pull/1373)) (by @cyfung1031)
- 🐛 Ուղղվել է սխալ ծագումը տեղական ֆայլերը քաշել-գցելով տեղադրելիս ([#1371](https://github.com/scriptscat/scriptcat/pull/1371)) (by @cyfung1031)
- 🐛 Ուղղվել է լեզվի փոխարկման հաղորդագրությունը ([#1380](https://github.com/scriptscat/scriptcat/pull/1380)) (by @cyfung1031)
- 🐛 Բարելավվել է մատյանների ցուցադրման միջերեսը ([#1372](https://github.com/scriptscat/scriptcat/pull/1372)) (by @cyfung1031)
- 🐛 Ուղղվել է UserConfigPanel-ի CSS-ը ([#1361](https://github.com/scriptscat/scriptcat/pull/1361)) (by @cyfung1031)
- 🐛 create_context-ում դատարկ օբյեկտի համար օգտագործվել է `Object.create(null)` ([#1397](https://github.com/scriptscat/scriptcat/pull/1397)) (by @cyfung1031)
- 🐛 Ուղղվել է բաժանորդագրված սկրիպտների լուռ թարմացման և միացման թույլտվության տրամաբանությունը ([#1201](https://github.com/scriptscat/scriptcat/pull/1201)) (by @cyfung1031)
- 🐛 Ուղղվել է մատյանների էջի հարցման կոճակը, որը չէր թարմացնում ժամը ([#1294](https://github.com/scriptscat/scriptcat/pull/1294)) (by @CodFrm)

### 🔒 Անվտանգության բարելավումներ

- 🔒 Ուղղվել է նախատիպերի աղտոտումը՝ անվստահելի YAML օգտագործողի կազմաձևման բանալիների միջոցով ([#1494](https://github.com/scriptscat/scriptcat/pull/1494)) (by @qdzsh)
- 🔒 Ուղղվել են npm կախվածությունների անվտանգության բոլոր խոցելիությունները ([#1350](https://github.com/scriptscat/scriptcat/pull/1350)) ([#1364](https://github.com/scriptscat/scriptcat/pull/1364)) ([#1365](https://github.com/scriptscat/scriptcat/pull/1365)) (by @cyfung1031)

### ♻️ Վերակառուցում և համատեղելիություն

- ♻️ Ցածր մակարդակի վերակառուցում՝ Firefox MV3-ին հարմարեցման նախապատրաստվելու համար ([#1457](https://github.com/scriptscat/scriptcat/pull/1457)) ([#1480](https://github.com/scriptscat/scriptcat/pull/1480)) (by @cyfung1031)
- ♻️ Վերակառուցվել է սկրիպտների ռեսուրսների թարմացման տրամաբանությունը (updateResource) և զուգահեռության վերահսկումը, վերականգնվել է ռեսուրսների քեշի համատեղելիությունը ([#1193](https://github.com/scriptscat/scriptcat/pull/1193)) (by @cyfung1031)
- ♻️ ZIP մշակման համար jszip-ը փոխարինվել է JSZipp-ով (պահուստավորման ներմուծում / արտահանում) և հեռացվել է չօգտագործվող jszip կախվածությունը ([#1479](https://github.com/scriptscat/scriptcat/pull/1479)) (by @cyfung1031)
- ♻️ Offscreen ↔ ServiceWorker կապը միավորվել է postMessage կապուղու միջոցով ([#1299](https://github.com/scriptscat/scriptcat/pull/1299)) (by @CodFrm)
- ♻️ Վերակառուցվել է VSCodeConnect կոդը ([#1170](https://github.com/scriptscat/scriptcat/pull/1170)) (by @cyfung1031)
- ⚡️ ts.worker.js-ը սեղմվել է մինչև 4 ՄԲ՝ AMO ստուգումն անցնելու համար, ուղղվել է MV3 ֆոնային թույլտվության սխալը ([#1221](https://github.com/scriptscat/scriptcat/pull/1221)) (by @cyfung1031)

### 🌐 Միջազգայնացում

- 🌐 Ուղղվել են բազմալեզու տերմինաբանության թարգմանությունները (հիմնականում բարելավվել է ավանդական չինարենը) և ավելացվել են թարգմանության տերմինաբանության ուղեցույցներ ([#1468](https://github.com/scriptscat/scriptcat/pull/1468)) (by @cyfung1031)

### Այլ

- ✨ fetchIconByDomain պատկերակի ծառայությունը փոխանցվել է scriptcat.org-ին ([#1268](https://github.com/scriptscat/scriptcat/pull/1268)) (by @cyfung1031)
- 🔥 Հեռացվել է Crowdin-ի և ach-UG կեղծ լեզվի հետ կապված բովանդակությունը ([#1385](https://github.com/scriptscat/scriptcat/pull/1385)) (by @CodFrm)

<a name="0.16.15"></a>

## 0.16.15 (2026-05-19)

### 🐛 Սխալների ուղղումներ

- 🐛 Ուղղվել է MV2 փաթեթավորման սկրիպտի կառուցման հրամանը [#1423](https://github.com/scriptscat/scriptcat/issues/1423) (by @CodFrm)
- 🐛 Հարմարեցում WebExtensions API փոփոխություններին (Firefox 149-152), ներառյալ CSP ճշգրտումները ([#1448](https://github.com/scriptscat/scriptcat/pull/1448)) (by @cyfung1031)

<a name="0.16.14"></a>

## 0.16.14 (2026-04-26)

### 🚀 Հիմնական նոր գործառույթներ

- ✨ FirefoxMV2 սինխրոնիզացիա MV3 հիմնական տարրերի հետ. TypeScript-ը թարմացվել է մինչև 4.9, tsconfig-ը՝ es2022; սկրիպտների ձևանմուշները (normal/crontab/background) համապատասխանեցվել են MV3-ին; cron-ը բարելավվել է `once(...)` արտահայտության աջակցությամբ; Monaco Editor-ի բազմալեզու աջակցություն ([#1331](https://github.com/scriptscat/scriptcat/pull/1331)) (by @cyfung1031)

### ♻️ Վերակառուցում և համատեղելիություն

- 🔥 Հեռացվել է axios կախվածությունը՝ MV3-ին համապատասխանեցնելու համար ([#1339](https://github.com/scriptscat/scriptcat/pull/1339)) (by @cyfung1031)

### 🐛 Սխալների ուղղումներ

- 🐛 Ուղղվել է window.parent-ի տեղադրված iframe-ի կողմից postMessage հաղորդագրություններ չստանալու խնդիրը ([#1335](https://github.com/scriptscat/scriptcat/pull/1335)) (by @cyfung1031)

<a name="1.3.2"></a>

## 1.3.2 (2026-03-28)

### 🐛 Սխալների ուղղումներ

- 🐛 Հեռացվել է Accept վերնագիրը fetchScriptBody-ից՝ 406 սխալից խուսափելու համար ([#1306](https://github.com/scriptscat/scriptcat/pull/1306)) (by @cyfung1031)
- 🐛 Ուղղվել է WebDAV թխուկների նույնականացման կոնֆլիկտը և authType աջակցությունը ([#1308](https://github.com/scriptscat/scriptcat/pull/1308)) (by @CodFrm)
- 🐛 Ճիշտ ցուցադրվել են ֆորմատավորման սխալները ([#1310](https://github.com/scriptscat/scriptcat/pull/1310)) (by @cyfung1031)
- 🐛 Սարքին հատուկ կազմաձևումների համար օգտագործվել է chrome.storage.local՝ սարքերի միջև սինխրոնիզացիայից խուսափելու համար ([#1309](https://github.com/scriptscat/scriptcat/pull/1309)) (by @CodFrm)
- 🐛 Ուղղվել են կոդի խմբագրիչի հուշումների խնդիրները ([#1301](https://github.com/scriptscat/scriptcat/pull/1301)) (by @cyfung1031)
- 🐛 Ուղղվել է մատյանների էջում ամսաթվի ընտրիչի թռուցիկի կտրվելը ([#1292](https://github.com/scriptscat/scriptcat/pull/1292)) (by @cyfung1031)
- 🐛 Ուղղվել է կապը հանելու կոճակի ցուցադրումը, երբ ոչ մի ամպային սկավառակ կապված չէ ([#1291](https://github.com/scriptscat/scriptcat/pull/1291)) (by @CodFrm)
- 🐛 Ուղղվել է ծածկված թռուցիկը ([#1290](https://github.com/scriptscat/scriptcat/pull/1290)) (by @cyfung1031)

<a name="1.3.1"></a>

## 1.3.1 (2026-03-13)

### 🐛 Սխալների ուղղումներ

- 🚑 Ուղղվել է միջավայրի հայտնաբերման սխալը, որը պայմանավորված է այլ ընդլայնումների կողմից chrome.runtime-ի ներարկմամբ [#1280](https://github.com/scriptscat/scriptcat/issues/1280) ([#1281](https://github.com/scriptscat/scriptcat/pull/1281)) (by @CodFrm)

### Այլ

- ✅ Ավելացվել են Playwright E2E թեստեր և GM API ֆունկցիոնալ թեստեր ([#1283](https://github.com/scriptscat/scriptcat/pull/1283)) (by @CodFrm)

<a name="1.3.0"></a>

## 1.3.0 (2026-03-10)

Այս թարմացումը բերում է Amazon S3 պահեստավորում, սկրիպտների գործարկման ռեժիմի ընտրանքներ, տեղադրում առանց արտաքին կայք մուտք գործելու և այլն: Այն զգալիորեն օպտիմիզացնում է հաղորդագրությունների համակարգը և React կատարողականը, ուղղում է GM API-ի, UI-ի և կայունության բազմաթիվ խնդիրներ և ներառում է կոդի որակի լայնածավալ բարելավումներ:

### 🚀 Հիմնական նոր գործառույթներ

- ✨ Ավելացվել է Amazon S3 պահեստավորում [#1146](https://github.com/scriptscat/scriptcat/issues/1146) ([#1189](https://github.com/scriptscat/scriptcat/pull/1189)) (by @CodFrm)
- ✨ Սկրիպտների գործարկման ռեժիմի ընտրանքներ ([#895](https://github.com/scriptscat/scriptcat/pull/895)) (by @CodFrm)
- ✨ Տեղադրում առանց արտաքին կայք մուտք գործելու + տեղադրման էջի դասավորության ճշգրտումներ ([#842](https://github.com/scriptscat/scriptcat/pull/842)) (by @cyfung1031)
- ✨ Մոխրագույն պատկերակի ցուցադրում, երբ սկրիպտի գործառույթն անջատված է [#897](https://github.com/scriptscat/scriptcat/issues/897) (by @CodFrm)
- ✨ Օպտիմիզացվել է փոխազդեցությունը, երբ ընտրացանկի բացված տարրերի քանակը 0 է [#868](https://github.com/scriptscat/scriptcat/issues/868) (by @CodFrm)
- ✨ `@noframes` լռելյայն ձևանմուշում՝ տարածված սխալները կանխելու համար ([#900](https://github.com/scriptscat/scriptcat/pull/900)) (by @cyfung1031)
- ✨ Կանխվել է տեղադրման հղման՝ նոր տեղադրման հետ շփոթումը, երբ սկրիպտի անունը փոխվում է ([#824](https://github.com/scriptscat/scriptcat/pull/824)) (by @cyfung1031)
- ✨ Ուղղվել է `@grant` կոնֆլիկտի ստուգումը, ավելացվել է կրկնօրինակ մետա հայտարարության սխալի հուշում ([#902](https://github.com/scriptscat/scriptcat/pull/902)) (by @cyfung1031)
- ✨ Ընդունվում է `@version`՝ առանց արժեքի կամ դատարկ արժեքով ([#1216](https://github.com/scriptscat/scriptcat/pull/1216)) (by @cyfung1031)
- ✨ Ճշգրտվել է թաքնված խմբագրիչի կողային վահանակի դիրքը [#1185](https://github.com/scriptscat/scriptcat/issues/1185) ([#1254](https://github.com/scriptscat/scriptcat/pull/1254)) (by @CodFrm)

### 🧩 GM API փոփոխություններ

- 🐛 Ուղղվել է GM_addElement-ի խնդիրը, գործողությունը տեղափոխվել է բովանդակության միջավայր ([#1233](https://github.com/scriptscat/scriptcat/pull/1233)) (by @cyfung1031)
- 🐛 `GM_download`-ին ավելացվել է `conflictAction` պարամետրը ([#1250](https://github.com/scriptscat/scriptcat/pull/1250)) (by @cyfung1031)
- 🐛 Ուղղվել են GM API-ի ասինխրոն հայտարարությունները, ճիշտ վերադարձվում է Promise ([#1169](https://github.com/scriptscat/scriptcat/pull/1169)) (by @cyfung1031)
- ♻️ Firefox համատեղելիություն. GM_setClipboard ([#928](https://github.com/scriptscat/scriptcat/pull/928)) (by @cyfung1031)
- 🐛 Ուղղվել է GM_value-ի խնդիրը [#1192](https://github.com/scriptscat/scriptcat/issues/1192) (by @CodFrm)
- 🐛 Ուղղվել է ներբեռնվող ֆայլի անվան՝ թղթապանակներ չաջակցելը ([#1203](https://github.com/scriptscat/scriptcat/pull/1203)) (by @cyfung1031)

### ⚡️ Կատարողականի բարելավումներ

- ♻️ Վերակառուցվել է հաղորդագրությունների համակարգը. storage.local հեռարձակում + Firefox MV3 scripting համապատասխանություն + չհետագծվող դինամիկ սինխրոն MessageFlag ([#1067](https://github.com/scriptscat/scriptcat/pull/1067)) (by @cyfung1031)
- ⚡️ Ուղղվել են React վերարտադրման խնդիրները (ScriptCard & ScriptTable) ([#1182](https://github.com/scriptscat/scriptcat/pull/1182)) (by @cyfung1031)
- ⚡️ Ուղղվել են React վերարտադրման խնդիրները (Popup) ([#1181](https://github.com/scriptscat/scriptcat/pull/1181)) (by @cyfung1031)
- ⚡️ Օպտիմիզացվել է Repo-ի կատարողականը ([#1232](https://github.com/scriptscat/scriptcat/pull/1232)) (by @CodFrm)
- ⚡️ Մետատվյալները տեղափոխվել են chrome.storage.session-ից դուրս ([#1027](https://github.com/scriptscat/scriptcat/pull/1027)) (by @cyfung1031)
- ⚡️ Բարելավվել է կոդավորման հայտնաբերումը ([#1140](https://github.com/scriptscat/scriptcat/pull/1140)) (by @cyfung1031)
- ⚡️ Պատկերակները պահվում են URL-ով՝ սկրիպտների միջև կրկնօրինակ պահեստավորումից խուսափելու համար ([#909](https://github.com/scriptscat/scriptcat/pull/909)) (by @cyfung1031)
- ⚡️ Օպտիմիզացվել է parseMetadata կոդը ([#903](https://github.com/scriptscat/scriptcat/pull/903)) (by @cyfung1031)
- 🐛 Ուղղվել են հիշողության արտահոսքերը և օբյեկտի հատկությունների բացահայտումը ([#1242](https://github.com/scriptscat/scriptcat/pull/1242)) (by @cyfung1031)
- ♻️ Հեռացվել է Redux-ը, պարզեցվել է վիճակի կառավարումը ([#1206](https://github.com/scriptscat/scriptcat/pull/1206)) (by @cyfung1031)

### 🧑‍💻 Խմբագրիչ

- ✨ Օպտիմիզացվել են Monaco Editor կարգավորումները, ավելացվել է `/* global xxx */` ուղղում ([#1012](https://github.com/scriptscat/scriptcat/pull/1012)) (by @cyfung1031)
- ✨ Monaco Editor հուշումների բազմալեզու աջակցություն և `@require-css` հուշման ավելացում ([#960](https://github.com/scriptscat/scriptcat/pull/960)) (by @cyfung1031)

### 🐛 Սխալների ուղղումներ

- 🐛 Ուղղվել է ինկոգնիտո պատուհանի թույլտվության ստուգման կոնֆլիկտը, որը կրկնվող վերագործարկումներ էր առաջացնում (by @CodFrm)
- 🐛 Ուղղվել է include `*?*` արտահայտության մշակումը [#1271](https://github.com/scriptscat/scriptcat/issues/1271) ([#1272](https://github.com/scriptscat/scriptcat/pull/1272)) (by @CodFrm)
- 🔒 Ծանուցումների HTML բովանդակությունը մաքրվել է DOMPurify-ով ([#1274](https://github.com/scriptscat/scriptcat/pull/1274)) (by @CodFrm)
- 🐛 Ուղղվել է չաշխատող սկրիպտի կարգավորումների թույլտվությունների կառավարման վերահսկիչը ([#1267](https://github.com/scriptscat/scriptcat/pull/1267)) (by @CodFrm)
- 🐛 Ուղղվել է թռուցիկի բովանդակության՝ էկրանի ոլորմանը հետևելը [#1256](https://github.com/scriptscat/scriptcat/issues/1256) ([#1263](https://github.com/scriptscat/scriptcat/pull/1263)) (by @cyfung1031)
- 🐛 Ուղղվել է տեղադրման հղման վերլուծության ձախողումը [#1235](https://github.com/scriptscat/scriptcat/issues/1235) ([#1260](https://github.com/scriptscat/scriptcat/pull/1260)) (by @cyfung1031)
- 🐛 Ուղղվել է քաշելու բաղադրիչը, որը focusin/focusout ուշացում էր առաջացնում [#1224](https://github.com/scriptscat/scriptcat/issues/1224) ([#1243](https://github.com/scriptscat/scriptcat/pull/1243)) (by @CodFrm)
- 🐛 Ուղղվել է չաշխատող արտաքին ընդլայնման API-ն ([#1217](https://github.com/scriptscat/scriptcat/pull/1217)) (by @cyfung1031)
- 🐛 Ուղղվել է grant-ի խնդիրը ([#1199](https://github.com/scriptscat/scriptcat/pull/1199)) (by @CodFrm)
- 🐛 Ուղղվել է content.js-ում UserAgentData-ի բացակայությունը ([#1183](https://github.com/scriptscat/scriptcat/pull/1183)) (by @cyfung1031)
- 🐛 Մշակվել է սկրիպտների կոդավորման խնդիրը [#1115](https://github.com/scriptscat/scriptcat/issues/1115) ([#1138](https://github.com/scriptscat/scriptcat/pull/1138)) (by @CodFrm)
- 🐛 Ուղղվել է սկրիպտների պատկերակների ցուցադրումը [#1052](https://github.com/scriptscat/scriptcat/issues/1052) ([#1104](https://github.com/scriptscat/scriptcat/pull/1104)) (by @CodFrm)
- 🐛 CSS կոնֆլիկտները լուծելու համար ավելացվել է UnoCSS նախածանց, ուղղվել է CSS դասավորությունը ([#1013](https://github.com/scriptscat/scriptcat/pull/1013)) (by @cyfung1031)
- 🐛 Մաքրվում է առկա Alarm-ը անկանոն սկրիպտի թարմացման ստուգում ընտրելիս ([#996](https://github.com/scriptscat/scriptcat/pull/996)) (by @cyfung1031)
- 🐛 Ներմուծում և արտահանում — ուղղվել է սկրիպտների վերջին փոփոխության սխալ ամսաթիվը/ժամը ([#951](https://github.com/scriptscat/scriptcat/pull/951)) (by @cyfung1031)
- 🐛 Ուղղվել է i18n նախածանց լեզվի սկրիպտի անվան և նկարագրության ցուցադրումը [#1123](https://github.com/scriptscat/scriptcat/issues/1123) (by @CodFrm)
- 🐛 Ուղղվել է unregister-ի ոչ ճիշտ կատարումը ([#1231](https://github.com/scriptscat/scriptcat/pull/1231)) (by @cyfung1031)

### ♻️ Վերակառուցում և համատեղելիություն

- ♻️ userScripts / scripting API ճշգրտումներ, համատեղելիության բարելավում (կրկին #704) ([#925](https://github.com/scriptscat/scriptcat/pull/925)) (by @cyfung1031)
- ♻️ Cron-ի հետ կապված փոփոխություններ. սխալների ուղղումներ, i18n, once արտահայտության բարելավում, cron գրադարանի թարմացում ([#1126](https://github.com/scriptscat/scriptcat/pull/1126)) (by @cyfung1031)
- ♻️ Վերակառուցվել և օպտիմիզացվել է սկրիպտի պատկերակների բեռնումը ([#893](https://github.com/scriptscat/scriptcat/pull/893)) (by @CodFrm)
- ♻️ Բարելավվել է տեքստի վերծանումը ([#1166](https://github.com/scriptscat/scriptcat/pull/1166)) (by @cyfung1031)
- ⬆️ Թարմացվել է swc-համատեղելի միջուկի տարբերակը ([#1186](https://github.com/scriptscat/scriptcat/pull/1186)) (by @cyfung1031)

### 🎨 UI բարելավումներ

- 🎨 Լռելյայն ընդլայնման պատկերակի կրծքանշանի թիվը փոխվել է սկրիպտների քանակով [#989](https://github.com/scriptscat/scriptcat/issues/989) (by @CodFrm)
- 🎨 Տեղադրման էջի URL-ը դարձվել է ավելի գեղեցիկ ([#993](https://github.com/scriptscat/scriptcat/pull/993)) (by @cyfung1031)
- 🐛 Վերակառուցվել է DraggableEntry-ը, ուղղվել է քարտերի բարձրության հավասարեցումը ([#1245](https://github.com/scriptscat/scriptcat/pull/1245)) (by @cyfung1031)

### Տարաբնույթ

- 🔒 Անվտանգության բարելավումներ (DOMPurify, npm կախվածությունների խոցելիությունների ուղղումներ)
- 👷 Rspack կապակցման օպտիմիզացում, կառուցման գործիքների շղթայի ուղղումներ
- ⬆️ Կախվածությունների տարբերակների թարմացումներ

**Ամբողջական փոփոխությունների մատյան.** [Համեմատել v1.2.6...v1.3.0](https://github.com/scriptscat/scriptcat/compare/v1.2.6...v1.3.0)

<a name="1.2.6"></a>

## 1.2.6 (2026-02-03)

### Ուղղված

- 🐛 Ուղղվել է structuredClone սխալը ([#1192](https://github.com/scriptscat/scriptcat/issues/1192)) [[265e122](https://github.com/scriptscat/scriptcat/commit/265e122342366b166d3122cc8da485cb1295b924)] (by @cyfung1031)

<a name="1.2.5"></a>

## 1.2.5 (2026-02-02)

### Ուղղված

- 🐛 Ուղղվել է սկրիպտների սինխրոն ջնջման խնդիրը [#1158](https://github.com/scriptscat/scriptcat/issues/1158) [[5e91a31](https://github.com/scriptscat/scriptcat/commit/5e91a31e02761ba8061e3de1f4d15fc1d964346c)] (by @CodFrm)
- 🐛 Համատեղելի է TM &#x60;@match www.website.com/*&#x60;-ի հետ ([#1165](https://github.com/scriptscat/scriptcat/issues/1165)) [[da66ff7](https://github.com/scriptscat/scriptcat/commit/da66ff70d25c3087cb8405289dc8b14df9c15f05)] (by @cyfung1031)
- 🐛 Edge-ի վերջին 144 տարբերակն ավելացնում է օգտագործողի սկրիպտներ [#1157](https://github.com/scriptscat/scriptcat/issues/1157) [[f7c1c73](https://github.com/scriptscat/scriptcat/commit/f7c1c730cf39cae02a9e6f815e3113ea9d2a8a05)] (by @CodFrm)
- 🐛 Ուղղվել է FileSystemObserver-ի շարունակական մոնիտորինգի խնդիրը ([#1160](https://github.com/scriptscat/scriptcat/issues/1160)) [[9556769](https://github.com/scriptscat/scriptcat/commit/95567690d1bf77bfe8bedfd6a94c88949a77e115)] (by @cyfung1031)
- 🐛 locales.ts-ի մանր ուղղումներ ([#1154](https://github.com/scriptscat/scriptcat/issues/1154)) [[1c44b68](https://github.com/scriptscat/scriptcat/commit/1c44b680dab3a95a51eb73cf92531efd0a192dc9)] (by @cyfung1031)
- 🐛 Ուղղվել է թռուցիկի թարմացման պատուհանի ժամանակի խնդիրը ([#1155](https://github.com/scriptscat/scriptcat/issues/1155)) [[c17f761](https://github.com/scriptscat/scriptcat/commit/c17f761807fb9b14aff09b9b08d19e4cbe72b8a5)] (by @cyfung1031)
- 🐛 Ուղղվել է i18n նախածանց լեզվի սկրիպտի անվան և նկարագրության ցուցադրումը [#1123](https://github.com/scriptscat/scriptcat/issues/1123) [[7ef7355](https://github.com/scriptscat/scriptcat/commit/7ef7355632fc989fa1cad44fd2069ff840bbd8df)] (by @CodFrm)
- 🐛 Մշակվել է արժեքի հղման խնդիրը [#1141](https://github.com/scriptscat/scriptcat/issues/1141) ([#1147](https://github.com/scriptscat/scriptcat/issues/1147)) [[0892fcd](https://github.com/scriptscat/scriptcat/commit/0892fcd452758030553c33ddf14f1ce4bc6d3efc)] (by @cyfung1031)

<a name="1.2.4"></a>

## 1.2.4 (2026-01-07)

Ուղղվել են սինխրոնիզացիայի սխալները, և տարբերակի թարմացումներն այլևս ավտոմատ չեն բացելու փոփոխությունների մատյանի էջը

### Ավելացված

- ✨ Սինխրոն ջնջումն այժմ լռելյայն անջատված է ([#958](https://github.com/scriptscat/scriptcat/issues/958)) [[9c4c7dc](https://github.com/scriptscat/scriptcat/commit/9c4c7dc411357746db43a306d97ac41a71f2b49c)] (by @cyfung1031)
- ✨ Խմբագրիչն այժմ աջակցում է GM.\* ([#1129](https://github.com/scriptscat/scriptcat/issues/1129)) [[bea0192](https://github.com/scriptscat/scriptcat/commit/bea0192c6cc50eff2ed4e1cc5dcc25f36bbe10e7)] (by @cyfung1031)

### Փոփոխված

- ♻️ Օպտիմիզացվել է փոփոխությունների մատյանի էջը բացելու տրամաբանությունը [#1110](https://github.com/scriptscat/scriptcat/issues/1110) [[d3ffedc](https://github.com/scriptscat/scriptcat/commit/d3ffedcffe752ca548f87f1640072fcd871b8604)] (by @CodFrm)

### Ուղղված

- 🐛 scriptcat.d.tpl &amp; տիպերի ուղղումներ ([#1130](https://github.com/scriptscat/scriptcat/issues/1130)) [[dd22ef5](https://github.com/scriptscat/scriptcat/commit/dd22ef544684d69e24a7aae098cb05cbab03daa8)] (by @cyfung1031)
- 🐛 Ուղղվել են ամպային սինխրոնիզացիայի խնդիրները ([#1133](https://github.com/scriptscat/scriptcat/issues/1133)) [[a9383d2](https://github.com/scriptscat/scriptcat/commit/a9383d2012eb3953dc33c8886ce3891f404fa100)] (by @CodFrm)
- 🐛 Ուղղվել է &#x60;GM_addElement(&quot;tagName&quot;)&#x60; սխալը ([#1120](https://github.com/scriptscat/scriptcat/issues/1120)) [[ad19de5](https://github.com/scriptscat/scriptcat/commit/ad19de5c1793c8c079bedbf1b11c7c2ae27a469e)] (by @cyfung1031)
- 🐛 Հեռացվել է մաքրման տրամաբանությունը և օպտիմիզացվել է checkuserscript տրամաբանությունը ([#1113](https://github.com/scriptscat/scriptcat/issues/1113)) [[e635911](https://github.com/scriptscat/scriptcat/commit/e635911a3c11c3cb8acd1cfd507cb777e5ee7236)] (by @CodFrm)

### Տարաբնույթ

- 🏷️ TypeScript վերանայումներ ([#1127](https://github.com/scriptscat/scriptcat/issues/1127)) [[b455724](https://github.com/scriptscat/scriptcat/commit/b4557244191018c18d5ce8ea8e8627bcfb7f7cdd)] (by @cyfung1031)
- 📝 Օրինակների մեկնաբանությունների լրացում ([#1131](https://github.com/scriptscat/scriptcat/issues/1131)) [[292549e](https://github.com/scriptscat/scriptcat/commit/292549ed0f65952fe9f269aace23eefc7d6a3a0f)] (by @cyfung1031)

<a name="1.2.3"></a>

## 1.2.3 (2025-12-20)

Որոշ սխալների ուղղումներ

### Փոփոխված

- ⚡ Օպտիմիզացվել է հաջորդ գործարկման ժամի ցուցադրումը [#1093](https://github.com/scriptscat/scriptcat/issues/1093) [[324ce51](https://github.com/scriptscat/scriptcat/commit/324ce515c84699ca8d3bf1ee447fc6ef0656ae0d)] (by @CodFrm)

### Ուղղված

- 🐛 Ուղղվել է վաղ սկրիպտների URL համապատասխանեցման խնդիրը ([#1096](https://github.com/scriptscat/scriptcat/issues/1096)) [[a77effb](https://github.com/scriptscat/scriptcat/commit/a77effbab5ab4d1752065ef943d9c050ff99c066)] (by @cyfung1031)
- 🐛 Ուղղվել է թարմացման պատուհանի չափազանց կարճ ցուցադրման խնդիրը ([#1088](https://github.com/scriptscat/scriptcat/issues/1088)) [[b2b2d5c](https://github.com/scriptscat/scriptcat/commit/b2b2d5c41ff70ee5430f7d8d156f480ac8fc3a1a)] (by @cyfung1031)
- 🐛 Ուղղվել է աննորմալ ցուցադրումը, երբ օգտագործողի սկրիպտի ծանուցումը միացված է ([#1086](https://github.com/scriptscat/scriptcat/issues/1086)) ([959c4db](https://github.com/scriptscat/scriptcat/commit/959c4dbed92f7bfe22a2f8ebb775c4189b5ff076))
- 🐛 responseHeaders. &#x60;TM համատեղելիություն. \\r\\n&#x60; ([#1085](https://github.com/scriptscat/scriptcat/issues/1085)) [[15232c8](https://github.com/scriptscat/scriptcat/commit/15232c8543d93abfdafa1353d39d8a15d1dc385f)] (by @cyfung1031)
- 🐛 Ուղղվել են GM XHR-ի խնդիրները ([#1082](https://github.com/scriptscat/scriptcat/issues/1082)) [[3d987c3](https://github.com/scriptscat/scriptcat/commit/3d987c300242a3c765146359c35ecd6d998f792c)] (by @CodFrm)

### Տարաբնույթ

- 🌐 Թռուցիկ էջերում i18n խնդիրների մշակում [#1081](https://github.com/scriptscat/scriptcat/issues/1081) [[6b17d71](https://github.com/scriptscat/scriptcat/commit/6b17d7100e8572d72b3b7aaf8ea38be9cdf33f5f)] (by @CodFrm)

<a name="1.2.2"></a>

## 1.2.2 (2025-12-13)

Որոշ սխալների ուղղումներ

### Ուղղված

- 🐛 Ուղղվել է հաճախակի ֆոնային սինխրոնիզացիայի խնդիրը ([#1076](https://github.com/scriptscat/scriptcat/issues/1076)) [[45dc39b](https://github.com/scriptscat/scriptcat/commit/45dc39baa0f3326cf12e97312ab632dc46ba40f2)] (by @CodFrm)
- 🐛 Ուղղվել է հատուկ ներդիրների մշակման խնդիրը [#1066](https://github.com/scriptscat/scriptcat/issues/1066) ([50904fb](https://github.com/scriptscat/scriptcat/commit/50904fb46efdea10fd57677bc2d28c770b47e861))
- 🐛 Ուղղվել է համապատասխանեցման կանոններ չունեցող սկրիպտների մշակումը [#1071](https://github.com/scriptscat/scriptcat/issues/1071) ([560cdc0](https://github.com/scriptscat/scriptcat/commit/560cdc01fc0fc27fb7d0e3b877c63ba431206668))
- 🐛 Ուղղվել է CI փաթեթավորման խնդիրը, որը հեռացնում էր ֆոնային ընտրովի թույլտվությունները [[1f002f0](https://github.com/scriptscat/scriptcat/commit/1f002f0edf9892f023ae93b8522ff7c5e4a96559)] (by @CodFrm)
- 🐛 Ուղղվել է մերժված ներդիրի անտեսումը ([#1058](https://github.com/scriptscat/scriptcat/issues/1058)) [[6165bf4](https://github.com/scriptscat/scriptcat/commit/6165bf48eb1d53ede0561c85c30135446c2ff882)] (by @cyfung1031)

<a name="1.2.1"></a>

## 1.2.1 (2025-12-06)

Որոշ սխալների ուղղումներ և ֆոնային գործարկման ընտրանքների մշակում:

### Ավելացված

- ✨ Ավելացվել է ֆոնային գործարկման ընտրանք ([#1048](https://github.com/scriptscat/scriptcat/issues/1048)) [[626e84d](https://github.com/scriptscat/scriptcat/commit/626e84dbd4dda0731e0a5ffdbdf71ae10e884489)] (by @CodFrm)

### Ուղղված

- 🐛 Ուղղվել է document.write-ի պատճառած հաղորդագրությունների ունկնդրի վերակայման խնդիրը ([#1055](https://github.com/scriptscat/scriptcat/issues/1055)) [[1f3a3ec](https://github.com/scriptscat/scriptcat/commit/1f3a3ec335ed4b519599e9aa3036c66b6f0d10b2)] (by @cyfung1031)
- 🐛 Ուղղվել է ցուցակի դիտման զտման գործառույթը [[e272dc6](https://github.com/scriptscat/scriptcat/commit/e272dc6ed151c15a1ef785b70ae100cb9e74a5dd)] (by @CodFrm)
- 🐛 Վաղ փուլում UserAgentData-ի մշակում ([#1045](https://github.com/scriptscat/scriptcat/issues/1045)) [[b4e08a8](https://github.com/scriptscat/scriptcat/commit/b4e08a812a08f42037837bbee54610ebc565063f)] (by @cyfung1031)
- 🐛 Վերականգնվել է GM_openInTab-ի useOpen ընտրանքը [#1043](https://github.com/scriptscat/scriptcat/issues/1043) ([#1044](https://github.com/scriptscat/scriptcat/issues/1044)) [[7f30198](https://github.com/scriptscat/scriptcat/commit/7f30198909824871e694d5ffbe7088e44a6d0b45)] (by @cyfung1031)
- 🐛 Ուղղվել է userScripts undefined խնդիրը ([#1041](https://github.com/scriptscat/scriptcat/issues/1041)) [[4f2deda](https://github.com/scriptscat/scriptcat/commit/4f2deda69aa6aae7f6e791be1cd965a440b80e33)] (by @cyfung1031)
- 🐛 Ուղղվել է `AppContext`-ում `"monaco-editor"`-ի սխալ հղումը ([#983](https://github.com/scriptscat/scriptcat/issues/983)) [[4b8dae1](https://github.com/scriptscat/scriptcat/commit/4b8dae1f49208d13c4d19c4c627762fc1b04ea5e)] (by @cyfung1031)

**Ամբողջական փոփոխությունների մատյան.** [Համեմատել v1.2.0...v1.2.1](https://github.com/scriptscat/scriptcat/compare/v1.2.0...v1.2.1)

<a name="1.2.0"></a>

## 1.2.0 (2025-11-29)

Այս թարմացումը բերում է սկրիպտների ցուցակի կողային վահանակ, քարտերի դիտում, ավելի բարեկամական թարմացման ստուգման տրամաբանություն, խմբագրիչի կազմաձևում և այլն: Ներարկման և գործարկման ժամանակի կայունությունը զգալիորեն բարելավվել է, ուղղվել են CSP-ի, ավազատուփի և GM API-ի հետ կապված կարևոր խնդիրներ, ինչպես նաև կատարվել են կատարողականի և կառուցվածքային օպտիմիզացումներ:

Լրացուցիչ մանրամասների համար տե՛ս v1.2.0-beta.x փոփոխությունների մատյանը և [v1.2](https://docs.scriptcat.org/docs/change/v1.2/) փաստաթղթերը:

### 🚀 Հիմնական նոր գործառույթներ

- ✨ Սկրիպտների ցուցակի կողային վահանակ [#794](https://github.com/scriptscat/scriptcat/issues/794) (by @CodFrm)
- ✨ Քարտերի դիտում [#860](https://github.com/scriptscat/scriptcat/issues/860) (by @CodFrm)
- ✨ Ավելի բարեկամական թարմացման ստուգման տրամաբանություն [#755](https://github.com/scriptscat/scriptcat/issues/755) (by @cyfung1031)
- ✨ Ավելացվել են խմբագրիչի կազմաձևում և խմբագրիչի տիպերի սահմանումներ [#708](https://github.com/scriptscat/scriptcat/pull/708) (by @CodFrm)
- ✨ Թռուցիկում սկրիպտների քանակի ցուցադրում ([#973](https://github.com/scriptscat/scriptcat/issues/973)) [[1134586](https://github.com/scriptscat/scriptcat/commit/1134586ff040ffc0cdddd3538e9ec493950c948a)] (by @cyfung1031)
- ✨ Կոդի կողային վահանակը թաքցնելու համար ավելացվել է դասավորության ընտրացանկ [#689](https://github.com/scriptscat/scriptcat/issues/689) [[dd64da7](https://github.com/scriptscat/scriptcat/commit/dd64da719c081acbf21645e2b1e1f38653ffae8c)]
- ✨ Ավելացվել է SC տարբերակի ստուգման կոճակ ([#795](https://github.com/scriptscat/scriptcat/issues/795)) [[1680c66](https://github.com/scriptscat/scriptcat/commit/1680c66099120c0e497c1a1f5321f38fe0160ea0)] (by @cyfung1031)
- ✨ Ընդլայնման հեռացումից հետո ավելացվել է հարցման էջ [[6404c8f](https://github.com/scriptscat/scriptcat/commit/6404c8f74aff09b15725a92f8afdfc0d71ac188f)]

### 🧩 GM API փոփոխություններ

- ✨ Ներարկման-մեջ աջակցություն, սկրիպտներն այժմ կարող են ներարկվել բովանդակության միջավայր [#711](https://github.com/scriptscat/scriptcat/issues/711)
- ✨ GM_openInTab-ն աջակցում է ամրացված պատուհան, ինկոգնիտո պատուհանում բացում և այլ պարամետրեր [#788](https://github.com/scriptscat/scriptcat/pull/788) (by @cyfung1031)
- ✨ GM_registerMenuCommand-ն աջակցում է ենթացանկ և բաժանարար [#831](https://github.com/scriptscat/scriptcat/pull/831) (by @cyfung1031)
- 🗑 GM_openInTab-ից հեռացվել է useOpen ընտրանքը [#867](https://github.com/scriptscat/scriptcat/pull/867)
- ♻️ Ճշգրտվել է `@connect` տրամաբանությունը ([#969](https://github.com/scriptscat/scriptcat/issues/969)) [[67914d2](https://github.com/scriptscat/scriptcat/commit/67914d2b7d57fa9c69706ae57ee5d3400c2643f9)] (by @cyfung1031)
- ♻️ Վերակառուցվել են `GM_xmlhttpRequest`-ը և հարակից կոդը ([#901](https://github.com/scriptscat/scriptcat/issues/901)) [[fabd2e9](https://github.com/scriptscat/scriptcat/commit/fabd2e944235b460bc73df346b79d23ee4540af7)] (by @cyfung1031)

### Այլ

- ⚡️ Կայունության և կատարողականի օպտիմիզացումներ
- 🐛 Ուղղվել են տարբեր խնդիրներ
- ♻️ Կոդի կառուցվածքի օպտիմիզացում
- 🌐 i18n բարելավումներ

**Ամբողջական փոփոխությունների մատյան.** [Համեմատել v1.1.2...v1.2.0](https://github.com/scriptscat/scriptcat/compare/v1.1.2...v1.2.0)

<a name="1.1.2"></a>

## 1.1.2 (2025-09-18)

Սխալների ուղղումներ

### Ուղղված

- 🐛 Ուղղվել է ավազատուփի toString խնդիրը [#737](https://github.com/scriptscat/scriptcat/issues/737) [[6ca24c9](https://github.com/scriptscat/scriptcat/commit/6ca24c9b171792035803ac4e1c69e473629f9d18)]
- 🐛 Ուղղվել է կրծքանշանի 0 ցուցադրման խնդիրը [[026c1d2](https://github.com/scriptscat/scriptcat/commit/026c1d2071dd4cfb6291f005d36717bcdf0a51c3)]
- 🐛 Ուղղվել է սկրիպտների ներարկման CSP խնդիրը [#739](https://github.com/scriptscat/scriptcat/issues/739) [#728](https://github.com/scriptscat/scriptcat/issues/728) [[5da21b5](https://github.com/scriptscat/scriptcat/commit/5da21b5e3d0e7e86a1fd5dff57ba03ea641c19fa)]
- 🐛 Ուղղվել է թռուցիկ էջում ֆոնային սկրիպտի չբացվելը [[66ab70f](https://github.com/scriptscat/scriptcat/commit/66ab70fb10c28aaf0c9260a9591aab7e1ae35615)]
- 🐛 Ուժեղացվել է հաղորդագրությունների տիպերի ստուգումը [#676](https://github.com/scriptscat/scriptcat/issues/676) [[5073795](https://github.com/scriptscat/scriptcat/commit/50737957507ff9af3aa9ba9a6b7d444b643d1ff2)]
- 🐛 Ուղղվել է GM xhr-ի document խնդիրը [#716](https://github.com/scriptscat/scriptcat/issues/716) [[1c46546](https://github.com/scriptscat/scriptcat/commit/1c465462f4e14ae461d54358710f5caf74208af3)]

<a name="1.1.1"></a>

## 1.1.1 (2025-09-07)

### Ավելացված

- ✨ Ավելացվել են խմբագրիչի հատուկ կազմաձևում և խմբագրիչի տիպերի սահմանումներ ([#708](https://github.com/scriptscat/scriptcat/issues/708)) [[49eb379](https://github.com/scriptscat/scriptcat/commit/49eb3794774790d61c3ef787c865a9ba6fe82841)]

### Ուղղված

- 🐛 Ուղղվել են ավելի հին բրաուզերի տարբերակների հետ համատեղելիության խնդիրները [#715](https://github.com/scriptscat/scriptcat/issues/715) [[4da8068](https://github.com/scriptscat/scriptcat/commit/4da806879c2b170672814d02e6f8ed98c9fae35b)]
- 💄 Օպտիմիզացվել է թռուցիկ ընտրացանկի ցուցադրումը, երբ թռուցիկ պատուհանը չափազանց փոքր է ([288650e](https://github.com/scriptscat/scriptcat/commit/288650e5e4cbdc3fa8658f0754ce427a1b3dec5a))
- 🐛 Ուղղվել են մի քանի խնդիրներ ([#710](https://github.com/scriptscat/scriptcat/issues/710)) [[6a2027a](https://github.com/scriptscat/scriptcat/commit/6a2027ac0bb5e0ed625df570240d068a98a34b31)] (by @WhiteSevs)

### Տարաբնույթ

- 🌐 i18n խնդիրների մշակում [[2adf69d](https://github.com/scriptscat/scriptcat/commit/2adf69d6ec3c30186f2c2ef89f97e3cba9e15a66)]

<a name="1.1.0"></a>

## 1.1.0 (2025-09-07)

Բազմաթիվ սխալների ուղղումներ և համատեղելիության բարելավումներ, ավելացվել է Dropbox աջակցությունը, նոր @early-start գործառույթ՝ էջի բեռնումից ավելի արագ բեռնման համար: Լրացուցիչ մանրամասների համար տե՛ս v1.1.0-beta.x փոփոխությունների մատյանը:

### Ավելացված

- ✨ Ավելացվել են սկրիպտի գործարկման միջավայրի կարգավորումներ [#628](https://github.com/scriptscat/scriptcat/issues/628) [[0d4a89e](https://github.com/scriptscat/scriptcat/commit/0d4a89efaecf0331dcc7fbb6df006b93a1525846)]
- ✨ Լռելյայն ծալում, երբ ֆոնային սկրիպտներ չկան [#626](https://github.com/scriptscat/scriptcat/issues/626) ([9d0aac6](https://github.com/scriptscat/scriptcat/commit/9d0aac6aae11b96707ca1f7c024a24e9d55f217b))
- ✨ Dropbox աջակցություն [#575](https://github.com/scriptscat/scriptcat/issues/575) [[2c66f21](https://github.com/scriptscat/scriptcat/commit/2c66f21f5118bd83a0eaa0f1baa3a31f2233e5b2)]
- ✨ Օպտիմիզացվել է external.Tampermonkey-ը՝ SC-ի տեղադրման կարգավիճակը ստուգելու համար, երբ TM-ն տեղադրված չէ, բայց և՛ TM-ն, և՛ SC-ն միացված են ([#703](https://github.com/scriptscat/scriptcat/issues/703)) [[d0115c3](https://github.com/scriptscat/scriptcat/commit/d0115c33657260d803b6091139601b1b20407d4e)] (by @cyfung1031)
- ✨ Ավելացվել է @early-start՝ էջից ավելի արագ բեռնելու համար ([#649](https://github.com/scriptscat/scriptcat/issues/649)) [[eb097dd](https://github.com/scriptscat/scriptcat/commit/eb097dd146dcd6f8ca712ed883571dbfb3d09f20])
- ✨ Համընդհանուր կոդի որոնում ([#662](https://github.com/scriptscat/scriptcat/issues/662)) [[f8eafb7](https://github.com/scriptscat/scriptcat/commit/f8eafb7f955dad62c1b41ac477e929bf00c65982)] (by @RenjiYuusei)
- ✨ Ընդլայնման հեռացումից հետո ավելացվել է հարցման էջ [[6404c8f](https://github.com/scriptscat/scriptcat/commit/6404c8f74aff09b15725a92f8afdfc0d71ac188f))
- 📝 Փոփոխվել են տեղադրման էջը և namespace-ը ([6f2f000](https://github.com/scriptscat/scriptcat/commit/6f2f000612908b7a88f6b70c2831092805c63bc7))
- ✨ Բջջային տեղադրման համար ավելացվել է QR կոդ ([348237c](https://github.com/scriptscat/scriptcat/commit/348237c7ce9771c69025386926b1f73710cf6f42))

### Ուղղված

- 🐛 Ուղղվել է այն խնդիրը, երբ տեղադրումը հնարավոր չէր սկսել, եթե ցանցը չի կարողանում մուտք գործել տեղադրման միջանկյալ էջ [#705](https://github.com/scriptscat/scriptcat/issues/705) [[5f1e292](https://github.com/scriptscat/scriptcat/commit/5f1e2929d79c470ba4427c3cce01f5cd184a839b)]
- 🐛 Մշակվել է `@match *://*domain/*` արտահայտությունը [[039b445](https://github.com/scriptscat/scriptcat/commit/039b4454148947cd3c74de82b87804ee9815e60c)]
- 🐛 Ուղղվել է ընդլայնման միջավայրի ավազատուփի ներթափանցման խնդիրը [#700](https://github.com/scriptscat/scriptcat/issues/700) [[a1a868d](https://github.com/scriptscat/scriptcat/commit/a1a868dfe3199e666fe2bcb65cfb2ad0ad3d699b)]
- ✏️ backgroud -&gt; background ([#698](https://github.com/scriptscat/scriptcat/issues/698)) [[2594075](https://github.com/scriptscat/scriptcat/commit/2594075c4a50f4c79fa46bcda08d7b0cbcfe723c)] (by @cyfung1031)
- ✏️ CrhomeStorage -&gt; ChromeStorage ([#693](https://github.com/scriptscat/scriptcat/issues/693)) [[64c536d](https://github.com/scriptscat/scriptcat/commit/64c536dbd5fcb4c29eebc1109202bab69aaa3ee2)] (by @cyfung1031)
- 🐛 Ուղղվել են GM.getTab-ը և GM.getTabs-ը ([#683](https://github.com/scriptscat/scriptcat/issues/683)) [[31de256](https://github.com/scriptscat/scriptcat/commit/31de256f02b5b61e27f0eec9ea673248ba8faa32)] (by @WhiteSevs)
- 🐛 Ուղղվել է finalUrl-ում բացակայող դոմենը ([#656](https://github.com/scriptscat/scriptcat/issues/656)) [[545d7c8](https://github.com/scriptscat/scriptcat/commit/545d7c8c0dd69c83bd2f0353518aafe6af81c0f4)] (by @cyfung1031)
- 🐛 Համատեղելիություն ավելի հին բրաուզերի միջուկների հետ [#647](https://github.com/scriptscat/scriptcat/issues/647) ([bba12d2](https://github.com/scriptscat/scriptcat/commit/bba12d23f04759cb9b7fdb63f0d95ae515ee94a9))
- 🐛 Ուղղվել է finalUrl-ում բացակայող դոմենը ([#656](https://github.com/scriptscat/scriptcat/issues/656)) [[3ed018a](https://github.com/scriptscat/scriptcat/commit/3ed018a7a54803fcf2e1791316e0166ed0b52007)] (by @cyfung1031)
- 💚 Ուղղվել է react/jsx-no-literals lint խնդիրը [[017b608](https://github.com/scriptscat/scriptcat/commit/017b60886be601e3e0e1719cf249da32d5686c30)]
- 🐛 Համատեղելիություն ավելի հին բրաուզերի միջուկների հետ [#647](https://github.com/scriptscat/scriptcat/issues/647) [[0e2f817](https://github.com/scriptscat/scriptcat/commit/0e2f8173c8b44bd6ad44bdffc73fa302a96a058e)]
- 🐛 Օպտիմիզացվել է window.external ներարկումը ([#646](https://github.com/scriptscat/scriptcat/issues/646)) [[0b2668a](https://github.com/scriptscat/scriptcat/commit/0b2668aadcab35a33ff9abc4bd030dffb87ea168)] (by @cyfung1031)
- 🐛 Ուղղվել է ամպային պահեստավորման նույնականացման էջի ինքնուրույն չփակվելու խնդիրը [[7748088](https://github.com/scriptscat/scriptcat/commit/7748088e63c1fc660b6a6ae5613cf04f9da99b8c]]
- 🐛 Ուղղվել է չաշխատող `@connect` \\* խնդիրը [#623](https://github.com/scriptscat/scriptcat/issues/623) [[76481c8](https://github.com/scriptscat/scriptcat/commit/76481c845b34414a7f15ed18ec61f7dff7eef091)]
- 🐛 Ավելացվել են միավոր թեստեր և ուղղվել է `@exclude` խնդիրը ([#618](https://github.com/scriptscat/scriptcat/issues/618)) [[0046bb7](https://github.com/scriptscat/scriptcat/commit/0046bb78800a2c46edaac785b8e9592327772a3b]] (by @cyfung1031)
- 🐛 Ուղղվել է այն խնդիրը, երբ որոշ .user.js հղումներ չեն կարող տեղադրել սկրիպտներ [#599](https://github.com/scriptscat/scriptcat/issues/599) [[ccd2639](https://github.com/scriptscat/scriptcat/commit/ccd2639858f0f3cde28f284376fe8ed998d935ae]]
- 🐛 Ուղղվել է նոր սկրիպտների ստեղծման ձախողումը [[d42d6e7](https://github.com/scriptscat/scriptcat/commit/d42d6e7d408a84674facf9ab0da6eac0e384502f]]
- 🐛 Ուղղվել են մետատվյալները ([#610](https://github.com/scriptscat/scriptcat/issues/610)) [[4d98cce](https://github.com/scriptscat/scriptcat/commit/4d98cce0ca1281cc58f551ea4e6700e340780d3f]] (by @cyfung1031)
- 🐛 Ուղղվել է թռուցիկի կրծքանշանը ([#605](https://github.com/scriptscat/scriptcat/issues/605)) [[eff9230](https://github.com/scriptscat/scriptcat/commit/eff92309de99abb0cf48ef4727afaa113bc2fbb6]] (by @cyfung1031)
- 🐛 Ուղղվել է ScriptEditor.tsx-ը ([#603](https://github.com/scriptscat/scriptcat/issues/603)) [[a9aadba](https://github.com/scriptscat/scriptcat/commit/a9aadba372b813c16bdc5f0aeb07c68981f48c63]] (by @cyfung1031)
- 🐛 Ուղղվել են կոդի դիտիչի և խմբագրիչի CSS-երը ([#602](https://github.com/scriptscat/scriptcat/issues/602)) [[2e86785](https://github.com/scriptscat/scriptcat/commit/2e8678513efaccd42c8dc2aa89f8b76679aa8420]] (by @cyfung1031)
- 🐛 Ուղղվել է getFaviconFromDomain-ի զուգահեռության խնդիրը ([#597](https://github.com/scriptscat/scriptcat/issues/597)) [[1872fe1](https://github.com/scriptscat/scriptcat/commit/1872fe165ab204b155a56f037c111d2d7776c2b9]] (by @cyfung1031)
- 🐛 Ուղղվել է մի քանի պատուհաններում ներդիր բացելու սխալը [#586](https://github.com/scriptscat/scriptcat/issues/586) [[54c1da2](https://github.com/scriptscat/scriptcat/commit/54c1da29c2bd8bd8f5ef2d85b7aed8b334de296f]]
- 🐛 Ուղղվել է openerTabId-ի համատեղելիության խնդիրը ([#586](https://github.com/scriptscat/scriptcat/issues/586)) [[b861fc8](https://github.com/scriptscat/scriptcat/commit/b861fc8620e53b885cad98db03f1dd10ec9d296c]] (by @cyfung1031)

### Տարաբնույթ

- 📝 Ստեղծվել են README_RU.md և CONTRIBUTING_RU.md ([#678](https://github.com/scriptscat/scriptcat/issues/678)) [[597ab03](https://github.com/scriptscat/scriptcat/commit/597ab0378fe5ced01637cf411326ef7845b8ce2b]] (by @Ioann)
- 👷 Համատեղելիության ճշգրտումներ (pack.js համատեղելիություն) ([#669](https://github.com/scriptscat/scriptcat/issues/669)) [[fec45e6](https://github.com/scriptscat/scriptcat/commit/fec45e6606a609b10b79c58d2fcba02c2ce71e16]] (by @cyfung1031)
- 🌐 Վիետնամերեն լոկալը կատարելագործվել և ընդլայնվել է ([#661](https://github.com/scriptscat/scriptcat/issues/661)) [[6847a59](https://github.com/scriptscat/scriptcat/commit/6847a596c4b06c75e13594ef60e4b9dfa5718cf3]] (by @RenjiYuusei)
- 🌐 Թարգմանությունների ուղղումներ ([#635](https://github.com/scriptscat/scriptcat/issues/635)) [[19296de](https://github.com/scriptscat/scriptcat/commit/19296de6a3815e5965eb33401a55da9b2bd22bb4]] (by @cyfung1031)
- 🌐 Ուղղվել է նախնական ուղեցույցի i18n խնդիրը [#627](https://github.com/scriptscat/scriptcat/issues/627) [[9683f96](https://github.com/scriptscat/scriptcat/commit/9683f965400ab6a2bac15349aca4335911766eac]]
- 👷 Օպտիմիզացվել է pack.js կոդը ([#615](https://github.com/scriptscat/scriptcat/issues/615)) [[870dd9b](https://github.com/scriptscat/scriptcat/commit/870dd9bc6b7eff3eceefa915452e773ec0565180]] (by @cyfung1031)
