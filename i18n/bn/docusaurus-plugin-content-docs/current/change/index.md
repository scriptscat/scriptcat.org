---
title: পরিবর্তনের লগ
---

import GithubStar from '@site/src/components/GithubStar';

<GithubStar variant="bar" scene="changelog" />

বিটা সংস্করণের পরিবর্তনের লগের জন্য, [বিটা পরিবর্তনের লগ](./beta-changelog.md) দেখুন

⚠️ দয়া করে মনে রাখবেন: আপনি যদি Windows 8/7/XP ব্যবহার করেন, অথবা আপনার ব্রাউজার কার্নেলের সংস্করণ \<120-এর কম হয়, তাহলে আপনাকে [ScriptCat-এর পুরনো সংস্করণ](https://github.com/scriptscat/scriptcat/releases) ম্যানুয়ালি ইনস্টল করতে হবে। v0.16.x হল সর্বশেষ সংস্করণ যা Manifest V2 সমর্থন করে। ইনস্টলেশনের ধাপগুলো এখানে পাওয়া যাবে: [আনজিপ করা ফোল্ডার লোড করে এক্সটেনশন ইনস্টল করা](/use/use.md#load-unpacked-extension-installation)।

<a name="1.4.0"></a>

## 1.4.0 (2026-06-26)

এই রিলিজটি Firefox MV3-এর প্রস্তুতির জন্য নিম্ন-স্তরের রিফ্যাক্টরিং নিয়ে আসে, সাথে এডিটর অভিজ্ঞতার উন্নতি (এডিট মেনু, Ctrl+Shift+F ফরম্যাটিং, Monaco দ্রুত ফিক্স), স্ক্রিপ্ট আবিষ্কারের জন্য মাল্টি-প্ল্যাটফর্ম সার্চ ইঞ্জিন নির্বাচন, `@unwrap` / `window.onurlchange` / `@run-at context-menu`-এর মতো নতুন ক্ষমতা, ক্লাউড স্টোরেজ সিঙ্ক নির্ভরযোগ্যতার ব্যাপক শক্তিশালীকরণ, এবং GM API, UI ও স্থিতিশীলতার বড় একটি ব্যাচ ফিক্স (দীর্ঘমেয়াদী মেমরি লিক এবং প্রোটোটাইপ দূষণ নিরাপত্তা দুর্বলতা সহ)। ScriptCat AI Agent dev / Beta বিল্ডে প্রিভিউ হিসেবে উপলব্ধ এবং স্থিতিশীল রিলিজে এখনও সক্রিয় করা হয়নি।

### 🚀 প্রধান নতুন ফিচার

- 🧪 ScriptCat AI Agent (**প্রিভিউ — শুধুমাত্র dev / Beta বিল্ডে উপলব্ধ, স্থিতিশীল রিলিজে এখনও সক্রিয় নয়**) — কথোপকথনমূলক ইন্টারঅ্যাকশন, টুল কলিং, Skill সিস্টেম, MCP প্রোটোকল এবং আরও অনেক কিছুসহ AI-চালিত এজেন্ট সিস্টেম ([#1324](https://github.com/scriptscat/scriptcat/pull/1324)) (by @CodFrm)
- ✨ `@unwrap` মেটাডেটা ট্যাগের সমর্থন ([#1213](https://github.com/scriptscat/scriptcat/pull/1213)) (by @cyfung1031)
- ✨ Navigation API-এর মাধ্যমে TM-এর `window.onurlchange` বাস্তবায়ন ([#1315](https://github.com/scriptscat/scriptcat/pull/1315)) (by @cyfung1031)
- ✨ `@run-at context-menu` সমর্থন পুনরুদ্ধার ([#1442](https://github.com/scriptscat/scriptcat/pull/1442)) (by @cyfung1031)
- ✨ স্ক্রিপ্ট আবিষ্কার মাল্টি-প্ল্যাটফর্ম সার্চ ইঞ্জিন নির্বাচন সমর্থন করে ([#1295](https://github.com/scriptscat/scriptcat/pull/1295)) (by @CodFrm)
- ✨ আরও আইকন সার্ভিস প্রদানকারী যোগ করা হয়েছে ([#1333](https://github.com/scriptscat/scriptcat/pull/1333)) (by @cyfung1031)
- ✨ স্ক্রিপ্ট তালিকার "সর্বশেষ আপডেট" কলামে আপডেট-চেক আইকন যোগ করা হয়েছে ([#1304](https://github.com/scriptscat/scriptcat/pull/1304)) (by @CodFrm)
- ✨ এডিট কনফ্লিক্ট এবং স্ক্রিপ্ট-নাম কনফ্লিক্ট হ্যান্ডলিং উন্নত করা হয়েছে ([#1223](https://github.com/scriptscat/scriptcat/pull/1223)) (by @cyfung1031)

### 🧑‍💻 এডিটর

- ✨ এডিটরে এডিট মেনু যোগ করা হয়েছে (খুঁজুন, প্রতিস্থাপন, আবার ফেরান ইত্যাদি) ([#1303](https://github.com/scriptscat/scriptcat/pull/1303)) (by @CodFrm)
- ✨ এডিটর Ctrl+Shift+F ফরম্যাটিং সমর্থন করে ([#1415](https://github.com/scriptscat/scriptcat/pull/1415)) (by @cyfung1031)
- ✨ Monaco দ্রুত ফিক্স এবং ব্যবহারকারী স্ক্রিপ্ট মেটাডেটা হিন্ট উন্নত করা হয়েছে ([#1461](https://github.com/scriptscat/scriptcat/pull/1461)) (by @cyfung1031)
- 🐛 Ctrl-F / Ctrl-H শর্টকাট ফিক্স করা হয়েছে ([#1312](https://github.com/scriptscat/scriptcat/pull/1312)) (by @cyfung1031)
- 🐛 কাজ না করা ESLint ফিক্স ফিচার ঠিক করা হয়েছে [#1079](https://github.com/scriptscat/scriptcat/issues/1079) ([#1184](https://github.com/scriptscat/scriptcat/pull/1184)) (by @cyfung1031)
- 🐛 এডিটরের CSS লেআউট সমস্যা ঠিক করা হয়েছে ([#1460](https://github.com/scriptscat/scriptcat/pull/1460)) (by @cyfung1031)
- 🐛 হালকা থিমে ScriptEditor স্ক্রিপ্ট তালিকার প্রদর্শন ঠিক করা হয়েছে ([#1288](https://github.com/scriptscat/scriptcat/pull/1288)) (by @CodFrm)
- 🐛 ScriptEditor সমস্যাগুলো ঠিক ও উন্নত করা হয়েছে ([#1258](https://github.com/scriptscat/scriptcat/pull/1258)) (by @cyfung1031)

### ⚡️ পারফরম্যান্স উন্নতি

- 🚑 দীর্ঘমেয়াদী ScriptCat সেশনের সময় সম্ভাব্য মেমরি লিক ঠিক করা হয়েছে ([#1401](https://github.com/scriptscat/scriptcat/pull/1401)) (by @cyfung1031)
- ⚡️ গ্লোবাল DNR নিয়মে Baidu ফাইল সিস্টেম নির্ভরতা সরানো হয়েছে, প্রতি-অনুরোধ কুকি নিষ্ক্রিয়করণে পরিবর্তন হয়েছে ([#1377](https://github.com/scriptscat/scriptcat/pull/1377)) (by @cyfung1031)
- ⚡️ স্ক্রিপ্ট আবিষ্কারের জন্য মাল্টি-প্ল্যাটফর্ম সার্চ ইঞ্জিন নির্বাচন অপ্টিমাইজ করা হয়েছে ([#1379](https://github.com/scriptscat/scriptcat/pull/1379)) (by @cyfung1031)
- ⚡️ ঝাঁকুনি এড়াতে ইনস্টল পৃষ্ঠার loadingStatus-এ মনোস্পেস ফন্ট ব্যবহার করা হয়েছে ([#1381](https://github.com/scriptscat/scriptcat/pull/1381)) (by @cyfung1031)
- ⚡️ pushValue হ্যান্ডলিং অপ্টিমাইজ করা হয়েছে ([#1403](https://github.com/scriptscat/scriptcat/pull/1403)) (by @cyfung1031)
- ⚡️ আরও সম্পূর্ণ অনুমতি পরীক্ষা এবং আরও ভালো ব্যবহারকারী স্ক্রিপ্ট অনুমতি হিন্ট ([#1251](https://github.com/scriptscat/scriptcat/pull/1251)) (by @cyfung1031)
- ⚡️ MessageConnect মেমরি ম্যানেজমেন্ট এবং ক্লিনআপ মেকানিজম উন্নত করা হয়েছে ([#1248](https://github.com/scriptscat/scriptcat/pull/1248)) (by @cyfung1031)

### 🐛 বাগ ফিক্স

- 🐛 ক্লাউড স্টোরেজ সিঙ্ক নির্ভরযোগ্যতা শক্তিশালী করা হয়েছে (Dropbox / WebDAV / Google Drive / OneDrive অথেনটিকেশন, পাথ হ্যান্ডলিং এবং রিট্রাই লজিক) ([#1374](https://github.com/scriptscat/scriptcat/pull/1374) ~ [#1395](https://github.com/scriptscat/scriptcat/pull/1395)) (by @cyfung1031)
- 🐛 একাধিক ক্লাউড সিঙ্ক সমস্যা ঠিক করা হয়েছে: OneDrive জিরো-বাইট আপলোড, Google Drive / OneDrive এরর নরমালাইজেশন, S3 কাস্টম মেটাডেটা modifiedDate ([#1405](https://github.com/scriptscat/scriptcat/pull/1405)) ([#1406](https://github.com/scriptscat/scriptcat/pull/1406)) ([#1408](https://github.com/scriptscat/scriptcat/pull/1408)) (by @cyfung1031)
- 🐛 নন-রাইটেবল রুটযুক্ত পরিষেবাগুলিতে (যেমন Nutstore) ভুল নেতিবাচক এড়াতে WebDAV ভেরিফিকেশন রাইট-প্রোব সরানো হয়েছে ([#1445](https://github.com/scriptscat/scriptcat/pull/1445)) (by @CodFrm)
- 🐛 সাইট অ্যাক্সেস অনুমতি অনুপস্থিত থাকলে ক্রস-অরিজিন রিকোয়েস্ট ব্যর্থতা ঠিক করা হয়েছে ([#1477](https://github.com/scriptscat/scriptcat/pull/1477)) (by @cyfung1031)
- 🐛 Edge Android মোবাইল পপআপ অভিযোজন ঠিক করা হয়েছে [#686](https://github.com/scriptscat/scriptcat/issues/686) ([#1507](https://github.com/scriptscat/scriptcat/pull/1507)) (by @CodFrm)
- 🐛 প্রাথমিক লোডের সময় সাদা ব্যাকগ্রাউন্ড ফ্ল্যাশ ঠিক করা হয়েছে [#1497](https://github.com/scriptscat/scriptcat/issues/1497) ([#1498](https://github.com/scriptscat/scriptcat/pull/1498)) (by @cyfung1031)
- 🐛 মেসেজ কানেকশন (GM API / পোর্ট) সঠিকভাবে পরিষ্কার না হওয়া ঠিক করা হয়েছে ([#1474](https://github.com/scriptscat/scriptcat/pull/1474)) (by @cyfung1031)
- 🐛 সার্চ অনুপস্থিত থাকলে `@match` টেমপ্লেট অমিল ঠিক করা হয়েছে ([#1466](https://github.com/scriptscat/scriptcat/pull/1466)) (by @cyfung1031)
- 🐛 Tampermonkey আধা-স্যান্ডবক্সে পূর্বপুরুষ ক্লাস উত্তরাধিকার ঠিক করতে `protoBaseDescs` যোগ করা হয়েছে ([#1463](https://github.com/scriptscat/scriptcat/pull/1463)) (by @cyfung1031)
- 🐛 `GM_xmlhttpRequest` msgConn-এর জন্য অনুপস্থিত null হ্যান্ডলিং ঠিক করা হয়েছে ([#1433](https://github.com/scriptscat/scriptcat/pull/1433)) (by @cyfung1031)
- 🐛 GM xhr অস্বাভাবিক onloadend সঠিকভাবে হ্যান্ডেল না করা ঠিক করা হয়েছে ([#1412](https://github.com/scriptscat/scriptcat/pull/1412)) (by @cyfung1031)
- 🐛 ScriptEditor তালিকার ডাইনামিক আপডেট এবং প্রদর্শন সমস্যা ঠিক করা হয়েছে ([#1414](https://github.com/scriptscat/scriptcat/pull/1414)) (by @cyfung1031)
- 🐛 সমকালীন xhr-এর সাথে সেশন নিয়ম সংখ্যা সমস্যা ঠিক করা হয়েছে ([#1353](https://github.com/scriptscat/scriptcat/pull/1353)) (by @cyfung1031)
- 🐛 অবৈধ cron এক্সপ্রেশনের কারণে পুরো পৃষ্ঠা ক্র্যাশ হওয়া ঠিক করা হয়েছে ([#1327](https://github.com/scriptscat/scriptcat/pull/1327)) (by @cyfung1031)
- 🐛 ব্যাচ আপডেট চেকের সময় একটি স্ক্রিপ্ট টাইমআউট হলে সব স্ক্রিপ্ট ব্যর্থ হওয়া ঠিক করা হয়েছে ([#1265](https://github.com/scriptscat/scriptcat/pull/1265)) (by @cyfung1031)
- 🐛 isIncognito, userAgent এবং run-in-এর জন্য extensionEnv হ্যান্ডলিং যোগ করা হয়েছে ([#1368](https://github.com/scriptscat/scriptcat/pull/1368)) (by @cyfung1031)
- 🐛 আংশিকভাবে লুকানো অনবোর্ডিং গাইড বোতাম ঠিক করা হয়েছে [#1396](https://github.com/scriptscat/scriptcat/issues/1396) ([#1398](https://github.com/scriptscat/scriptcat/pull/1398)) (by @cyfung1031)
- 🐛 স্ক্রিপ্ট ম্যানেজমেন্ট পৃষ্ঠায় ঢাকা টুলটিপ ঠিক করা হয়েছে [#1386](https://github.com/scriptscat/scriptcat/issues/1386) ([#1387](https://github.com/scriptscat/scriptcat/pull/1387)) (by @Xdy1579883916)
- 🐛 কার্ড মোডে Sidebar অস্বাভাবিক রিসাইজিং ঘটানো ঠিক করা হয়েছে [#1179](https://github.com/scriptscat/scriptcat/issues/1179) ([#1373](https://github.com/scriptscat/scriptcat/pull/1373)) (by @cyfung1031)
- 🐛 ড্র্যাগ-এন্ড-ড্রপের মাধ্যমে লোকাল ফাইল ইনস্টল করার সময় ভুল origin সেট করা ঠিক করা হয়েছে ([#1371](https://github.com/scriptscat/scriptcat/pull/1371)) (by @cyfung1031)
- 🐛 ভাষা পরিবর্তনের বার্তা ঠিক করা হয়েছে ([#1380](https://github.com/scriptscat/scriptcat/pull/1380)) (by @cyfung1031)
- 🐛 লগ প্রদর্শন UI উন্নত করা হয়েছে ([#1372](https://github.com/scriptscat/scriptcat/pull/1372)) (by @cyfung1031)
- 🐛 UserConfigPanel CSS ঠিক করা হয়েছে ([#1361](https://github.com/scriptscat/scriptcat/pull/1361)) (by @cyfung1031)
- 🐛 create_context-এ খালি অবজেক্টের জন্য `Object.create(null)` ব্যবহার করা হয়েছে ([#1397](https://github.com/scriptscat/scriptcat/pull/1397)) (by @cyfung1031)
- 🐛 সাবস্ক্রাইবড স্ক্রিপ্টের জন্য নীরব আপডেট এবং সংযোগ অনুমতি লজিক ঠিক করা হয়েছে ([#1201](https://github.com/scriptscat/scriptcat/pull/1201)) (by @cyfung1031)
- 🐛 লগ পৃষ্ঠার কুয়েরি বোতাম সময় রিফ্রেশ না করা ঠিক করা হয়েছে ([#1294](https://github.com/scriptscat/scriptcat/pull/1294)) (by @CodFrm)

### 🔒 নিরাপত্তা উন্নতি

- 🔒 অবিশ্বস্ত YAML ব্যবহারকারী-কনফিগ কীগুলির মাধ্যমে প্রোটোটাইপ দূষণ ঠিক করা হয়েছে ([#1494](https://github.com/scriptscat/scriptcat/pull/1494)) (by @qdzsh)
- 🔒 সব npm নির্ভরতা নিরাপত্তা দুর্বলতা ঠিক করা হয়েছে ([#1350](https://github.com/scriptscat/scriptcat/pull/1350)) ([#1364](https://github.com/scriptscat/scriptcat/pull/1364)) ([#1365](https://github.com/scriptscat/scriptcat/pull/1365)) (by @cyfung1031)

### ♻️ রিফ্যাক্টরিং ও সামঞ্জস্য

- ♻️ Firefox MV3 অভিযোজনের প্রস্তুতির জন্য নিম্ন-স্তরের রিফ্যাক্টরিং ([#1457](https://github.com/scriptscat/scriptcat/pull/1457)) ([#1480](https://github.com/scriptscat/scriptcat/pull/1480)) (by @cyfung1031)
- ♻️ স্ক্রিপ্ট রিসোর্স আপডেট লজিক (updateResource) এবং সমকালীনতা নিয়ন্ত্রণ রিফ্যাক্টর করা হয়েছে, রিসোর্স ক্যাশ সামঞ্জস্য পুনরুদ্ধার করা হয়েছে ([#1193](https://github.com/scriptscat/scriptcat/pull/1193)) (by @cyfung1031)
- ♻️ ZIP হ্যান্ডলিংয়ের জন্য jszip-এর পরিবর্তে JSZipp ব্যবহার করা হয়েছে (ব্যাকআপ ইমপোর্ট / এক্সপোর্ট) এবং অব্যবহৃত jszip নির্ভরতা সরানো হয়েছে ([#1479](https://github.com/scriptscat/scriptcat/pull/1479)) (by @cyfung1031)
- ♻️ postMessage চ্যানেলের মাধ্যমে Offscreen ↔ ServiceWorker যোগাযোগ একীভূত করা হয়েছে ([#1299](https://github.com/scriptscat/scriptcat/pull/1299)) (by @CodFrm)
- ♻️ VSCodeConnect কোড রিফ্যাক্টর করা হয়েছে ([#1170](https://github.com/scriptscat/scriptcat/pull/1170)) (by @cyfung1031)
- ⚡️ AMO ভ্যালিডেশন পাস করার জন্য ts.worker.js 4MB-তে কম্প্রেস করা হয়েছে, MV3 ব্যাকগ্রাউন্ড অনুমতি ত্রুটি ঠিক করা হয়েছে ([#1221](https://github.com/scriptscat/scriptcat/pull/1221)) (by @cyfung1031)

### 🌐 আন্তর্জাতিকীকরণ

- 🌐 বহু-ভাষা পরিভাষা অনুবাদ ঠিক করা হয়েছে (মূলত ঐতিহ্যবাহী চীনা উন্নত) এবং অনুবাদ পরিভাষা নির্দেশিকা যোগ করা হয়েছে ([#1468](https://github.com/scriptscat/scriptcat/pull/1468)) (by @cyfung1031)

### অন্যান্য

- ✨ fetchIconByDomain আইকন সার্ভিস scriptcat.org-এ স্থানান্তরিত করা হয়েছে ([#1268](https://github.com/scriptscat/scriptcat/pull/1268)) (by @cyfung1031)
- 🔥 Crowdin এবং ach-UG ছদ্ম-ভাষা সম্পর্কিত বিষয়বস্তু সরানো হয়েছে ([#1385](https://github.com/scriptscat/scriptcat/pull/1385)) (by @CodFrm)

<a name="0.16.15"></a>

## 0.16.15 (2026-05-19)

### 🐛 বাগ ফিক্স

- 🐛 MV2 প্যাকেজিং স্ক্রিপ্ট বিল্ড কমান্ড ঠিক করা হয়েছে [#1423](https://github.com/scriptscat/scriptcat/issues/1423) (by @CodFrm)
- 🐛 WebExtensions API পরিবর্তনের সাথে অভিযোজন (Firefox 149-152), CSP সমন্বয় সহ ([#1448](https://github.com/scriptscat/scriptcat/pull/1448)) (by @cyfung1031)

<a name="0.16.14"></a>

## 0.16.14 (2026-04-26)

### 🚀 প্রধান নতুন ফিচার

- ✨ FirefoxMV2 সিঙ্ক MV3 প্রধান বিষয়গুলির সাথে: TypeScript 4.9-এ আপগ্রেড, tsconfig es2022-এ আপগ্রেড; স্ক্রিপ্ট টেমপ্লেট (normal/crontab/background) MV3-এর সাথে সারিবদ্ধ; `once(...)` এক্সপ্রেশন সমর্থনসহ cron আপগ্রেড; Monaco Editor বহু-ভাষা সমর্থন ([#1331](https://github.com/scriptscat/scriptcat/pull/1331)) (by @cyfung1031)

### ♻️ রিফ্যাক্টরিং ও সামঞ্জস্য

- 🔥 MV3-এর সাথে সারিবদ্ধ করতে axios নির্ভরতা সরানো হয়েছে ([#1339](https://github.com/scriptscat/scriptcat/pull/1339)) (by @cyfung1031)

### 🐛 বাগ ফিক্স

- 🐛 window.parent নেস্টেড iframe postMessage বার্তা না পাওয়া ঠিক করা হয়েছে ([#1335](https://github.com/scriptscat/scriptcat/pull/1335)) (by @cyfung1031)

<a name="1.3.2"></a>

## 1.3.2 (2026-03-28)

### 🐛 বাগ ফিক্স

- 🐛 এরর 406 এড়াতে fetchScriptBody থেকে Accept হেডার সরানো হয়েছে ([#1306](https://github.com/scriptscat/scriptcat/pull/1306)) (by @cyfung1031)
- 🐛 WebDAV কুকি অথেনটিকেশন কনফ্লিক্ট এবং authType সমর্থন ঠিক করা হয়েছে ([#1308](https://github.com/scriptscat/scriptcat/pull/1308)) (by @CodFrm)
- 🐛 ফরম্যাটিং ত্রুটি সঠিকভাবে প্রদর্শন করা হয়েছে ([#1310](https://github.com/scriptscat/scriptcat/pull/1310)) (by @cyfung1031)
- 🐛 ক্রস-ডিভাইস সিঙ্ক এড়াতে ডিভাইস-নির্দিষ্ট কনফিগারেশনের জন্য chrome.storage.local ব্যবহার করা হয়েছে ([#1309](https://github.com/scriptscat/scriptcat/pull/1309)) (by @CodFrm)
- 🐛 কোড এডিটর হিন্ট সমস্যা ঠিক করা হয়েছে ([#1301](https://github.com/scriptscat/scriptcat/pull/1301)) (by @cyfung1031)
- 🐛 লগ পৃষ্ঠায় ডেট পিকার পপআপ কাটা পড়া ঠিক করা হয়েছে ([#1292](https://github.com/scriptscat/scriptcat/pull/1292)) (by @cyfung1031)
- 🐛 কোনো ক্লাউড ড্রাইভ বাঁধা না থাকলে আনবাইন্ড বোতাম প্রদর্শিত হওয়া ঠিক করা হয়েছে ([#1291](https://github.com/scriptscat/scriptcat/pull/1291)) (by @CodFrm)
- 🐛 ঢাকা পপআপ ঠিক করা হয়েছে ([#1290](https://github.com/scriptscat/scriptcat/pull/1290)) (by @cyfung1031)

<a name="1.3.1"></a>

## 1.3.1 (2026-03-13)

### 🐛 বাগ ফিক্স

- 🚑 অন্যান্য এক্সটেনশন chrome.runtime ইনজেক্ট করার কারণে পরিবেশ শনাক্তকরণ ত্রুটি ঠিক করা হয়েছে [#1280](https://github.com/scriptscat/scriptcat/issues/1280) ([#1281](https://github.com/scriptscat/scriptcat/pull/1281)) (by @CodFrm)

### অন্যান্য

- ✅ Playwright E2E পরীক্ষা এবং GM API কার্যকরী পরীক্ষা যোগ করা হয়েছে ([#1283](https://github.com/scriptscat/scriptcat/pull/1283)) (by @CodFrm)

<a name="1.3.0"></a>

## 1.3.0 (2026-03-10)

এই আপডেটটি Amazon S3 স্টোরেজ, স্ক্রিপ্ট রানটাইম বিকল্প, বাহ্যিক ওয়েবসাইট অ্যাক্সেস ছাড়া ইনস্টলেশন এবং আরও অনেক কিছু নিয়ে আসে। এটি মেসেজিং সিস্টেম এবং React পারফরম্যান্স উল্লেখযোগ্যভাবে অপ্টিমাইজ করে, অসংখ্য GM API, UI এবং স্থিতিশীলতা সমস্যা ঠিক করে এবং ব্যাপক কোড মান উন্নতি অন্তর্ভুক্ত করে।

### 🚀 প্রধান নতুন ফিচার

- ✨ Amazon S3 স্টোরেজ যোগ করা হয়েছে [#1146](https://github.com/scriptscat/scriptcat/issues/1146) ([#1189](https://github.com/scriptscat/scriptcat/pull/1189)) (by @CodFrm)
- ✨ স্ক্রিপ্ট রানটাইম বিকল্প ([#895](https://github.com/scriptscat/scriptcat/pull/895)) (by @CodFrm)
- ✨ বাহ্যিক ওয়েবসাইট অ্যাক্সেস ছাড়া ইনস্টলেশন + ইনস্টল পৃষ্ঠা লেআউট সমন্বয় ([#842](https://github.com/scriptscat/scriptcat/pull/842)) (by @cyfung1031)
- ✨ স্ক্রিপ্ট কার্যকারিতা নিষ্ক্রিয় হলে ধূসর আইকন দেখানো [#897](https://github.com/scriptscat/scriptcat/issues/897) (by @CodFrm)
- ✨ মেনু প্রসারিত আইটেম সংখ্যা 0 হলে ইন্টারঅ্যাকশন অপ্টিমাইজ করা হয়েছে [#868](https://github.com/scriptscat/scriptcat/issues/868) (by @CodFrm)
- ✨ সাধারণ ভুল রোধ করতে টেমপ্লেটে ডিফল্ট `@noframes` ([#900](https://github.com/scriptscat/scriptcat/pull/900)) (by @cyfung1031)
- ✨ স্ক্রিপ্ট নাম পরিবর্তন হলে ইনস্টল লিংককে নতুন ইনস্টল বলে ভুল বিচার হওয়া রোধ করা হয়েছে ([#824](https://github.com/scriptscat/scriptcat/pull/824)) (by @cyfung1031)
- ✨ `@grant` কনফ্লিক্ট ভ্যালিডেশন ঠিক করা হয়েছে, ডুপ্লিকেট মেটা ডিক্লারেশন এরর প্রম্পট যোগ করা হয়েছে ([#902](https://github.com/scriptscat/scriptcat/pull/902)) (by @cyfung1031)
- ✨ মানবিহীন বা খালি মানের `@version` গ্রহণ করা হয়েছে ([#1216](https://github.com/scriptscat/scriptcat/pull/1216)) (by @cyfung1031)
- ✨ লুকানো এডিটর সাইডবার অবস্থান সমন্বয় করা হয়েছে [#1185](https://github.com/scriptscat/scriptcat/issues/1185) ([#1254](https://github.com/scriptscat/scriptcat/pull/1254)) (by @CodFrm)

### 🧩 GM API পরিবর্তন

- 🐛 GM_addElement সমস্যা ঠিক করা হয়েছে, অপারেশন কনটেন্ট পরিবেশে স্থানান্তরিত হয়েছে ([#1233](https://github.com/scriptscat/scriptcat/pull/1233)) (by @cyfung1031)
- 🐛 `GM_download`-এ `conflictAction` প্যারামিটার যোগ করা হয়েছে ([#1250](https://github.com/scriptscat/scriptcat/pull/1250)) (by @cyfung1031)
- 🐛 GM API অ্যাসিঙ্ক ডিক্লারেশন ঠিক করা হয়েছে, Promise সঠিকভাবে ফেরত দেওয়া হয়েছে ([#1169](https://github.com/scriptscat/scriptcat/pull/1169)) (by @cyfung1031)
- ♻️ Firefox সামঞ্জস্য: GM_setClipboard ([#928](https://github.com/scriptscat/scriptcat/pull/928)) (by @cyfung1031)
- 🐛 GM_value সমস্যা ঠিক করা হয়েছে [#1192](https://github.com/scriptscat/scriptcat/issues/1192) (by @CodFrm)
- 🐛 ডাউনলোড ফাইলের নাম ফোল্ডার সমর্থন না করা ঠিক করা হয়েছে ([#1203](https://github.com/scriptscat/scriptcat/pull/1203)) (by @cyfung1031)

### ⚡️ পারফরম্যান্স উন্নতি

- ♻️ মেসেজিং সিস্টেম রিফ্যাক্টর করা হয়েছে: storage.local ব্রডকাস্ট + Firefox MV3 scripting সম্মতি + অ-ট্রেসযোগ্য ডাইনামিক সিঙ্ক MessageFlag ([#1067](https://github.com/scriptscat/scriptcat/pull/1067)) (by @cyfung1031)
- ⚡️ React পুনরায়-রেন্ডার সমস্যা ঠিক করা হয়েছে (ScriptCard & ScriptTable) ([#1182](https://github.com/scriptscat/scriptcat/pull/1182)) (by @cyfung1031)
- ⚡️ React পুনরায়-রেন্ডার সমস্যা ঠিক করা হয়েছে (Popup) ([#1181](https://github.com/scriptscat/scriptcat/pull/1181)) (by @cyfung1031)
- ⚡️ Repo পারফরম্যান্স অপ্টিমাইজ করা হয়েছে ([#1232](https://github.com/scriptscat/scriptcat/pull/1232)) (by @CodFrm)
- ⚡️ chrome.storage.session থেকে মেটাডেটা সরানো হয়েছে ([#1027](https://github.com/scriptscat/scriptcat/pull/1027)) (by @cyfung1031)
- ⚡️ চারসেট শনাক্তকরণ উন্নত করা হয়েছে ([#1140](https://github.com/scriptscat/scriptcat/pull/1140)) (by @cyfung1031)
- ⚡️ স্ক্রিপ্টগুলোর মধ্যে ডুপ্লিকেট স্টোরেজ এড়াতে URL অনুযায়ী আইকন সংরক্ষণ করা হয়েছে ([#909](https://github.com/scriptscat/scriptcat/pull/909)) (by @cyfung1031)
- ⚡️ parseMetadata কোড অপ্টিমাইজ করা হয়েছে ([#903](https://github.com/scriptscat/scriptcat/pull/903)) (by @cyfung1031)
- 🐛 মেমরি লিক এবং অবজেক্ট সম্পত্তি প্রকাশ ঠিক করা হয়েছে ([#1242](https://github.com/scriptscat/scriptcat/pull/1242)) (by @cyfung1031)
- ♻️ Redux সরানো হয়েছে, স্টেট ম্যানেজমেন্ট সরলীকৃত হয়েছে ([#1206](https://github.com/scriptscat/scriptcat/pull/1206)) (by @cyfung1031)

### 🧑‍💻 এডিটর

- ✨ Monaco Editor সেটিংস অপ্টিমাইজ করা হয়েছে, `/* global xxx */` ফিক্স যোগ করা হয়েছে ([#1012](https://github.com/scriptscat/scriptcat/pull/1012)) (by @cyfung1031)
- ✨ Monaco Editor হিন্ট বহু-ভাষা সমর্থন এবং `@require-css` হিন্ট যোগ করা হয়েছে ([#960](https://github.com/scriptscat/scriptcat/pull/960)) (by @cyfung1031)

### 🐛 বাগ ফিক্স

- 🐛 ইনকগনিটো উইন্ডো অনুমতি পরীক্ষার কনফ্লিক্টের কারণে বারবার রিস্টার্ট হওয়া ঠিক করা হয়েছে (by @CodFrm)
- 🐛 include `*?*` এক্সপ্রেশন হ্যান্ডলিং ঠিক করা হয়েছে [#1271](https://github.com/scriptscat/scriptcat/issues/1271) ([#1272](https://github.com/scriptscat/scriptcat/pull/1272)) (by @CodFrm)
- 🔒 DOMPurify দিয়ে ঘোষণা নোটিফিকেশন HTML বিষয়বস্তু স্যানিটাইজ করা হয়েছে ([#1274](https://github.com/scriptscat/scriptcat/pull/1274)) (by @CodFrm)
- 🐛 কাজ না করা স্ক্রিপ্ট সেটিংস - অনুমতি ব্যবস্থাপনা নিয়ন্ত্রণ ঠিক করা হয়েছে ([#1267](https://github.com/scriptscat/scriptcat/pull/1267)) (by @CodFrm)
- 🐛 পপআপ বিষয়বস্তু স্ক্রিন স্ক্রল অনুসরণ করা ঠিক করা হয়েছে [#1256](https://github.com/scriptscat/scriptcat/issues/1256) ([#1263](https://github.com/scriptscat/scriptcat/pull/1263)) (by @cyfung1031)
- 🐛 ইনস্টল লিংক পার্স ব্যর্থতা ঠিক করা হয়েছে [#1235](https://github.com/scriptscat/scriptcat/issues/1235) ([#1260](https://github.com/scriptscat/scriptcat/pull/1260)) (by @cyfung1031)
- 🐛 focusin/focusout ল্যাগ ঘটানো ড্র্যাগ কম্পোনেন্ট ঠিক করা হয়েছে [#1224](https://github.com/scriptscat/scriptcat/issues/1224) ([#1243](https://github.com/scriptscat/scriptcat/pull/1243)) (by @CodFrm)
- 🐛 বাহ্যিক এক্সটেনশন API কাজ না করা ঠিক করা হয়েছে ([#1217](https://github.com/scriptscat/scriptcat/pull/1217)) (by @cyfung1031)
- 🐛 grant সমস্যা ঠিক করা হয়েছে ([#1199](https://github.com/scriptscat/scriptcat/pull/1199)) (by @CodFrm)
- 🐛 content.js-এ UserAgentData অনুপস্থিত থাকা ঠিক করা হয়েছে ([#1183](https://github.com/scriptscat/scriptcat/pull/1183)) (by @cyfung1031)
- 🐛 স্ক্রিপ্ট এনকোডিং সমস্যা হ্যান্ডেল করা হয়েছে [#1115](https://github.com/scriptscat/scriptcat/issues/1115) ([#1138](https://github.com/scriptscat/scriptcat/pull/1138)) (by @CodFrm)
- 🐛 স্ক্রিপ্ট আইকন প্রদর্শন ঠিক করা হয়েছে [#1052](https://github.com/scriptscat/scriptcat/issues/1052) ([#1104](https://github.com/scriptscat/scriptcat/pull/1104)) (by @CodFrm)
- 🐛 CSS কনফ্লিক্ট সমাধানে UnoCSS প্রিফিক্স যোগ করা হয়েছে, CSS লেআউট ঠিক করা হয়েছে ([#1013](https://github.com/scriptscat/scriptcat/pull/1013)) (by @cyfung1031)
- 🐛 অনিয়মিত স্ক্রিপ্ট আপডেট চেক নির্বাচন করার সময় বিদ্যমান Alarm পরিষ্কার করা হয়েছে ([#996](https://github.com/scriptscat/scriptcat/pull/996)) (by @cyfung1031)
- 🐛 ইমপোর্ট ও এক্সপোর্ট - স্ক্রিপ্টের ভুল শেষ-পরিবর্তন তারিখ/সময় ঠিক করা হয়েছে ([#951](https://github.com/scriptscat/scriptcat/pull/951)) (by @cyfung1031)
- 🐛 i18n প্রিফিক্স ভাষা স্ক্রিপ্ট নাম এবং বিবরণ প্রদর্শন ঠিক করা হয়েছে [#1123](https://github.com/scriptscat/scriptcat/issues/1123) (by @CodFrm)
- 🐛 unregister সঠিকভাবে কার্যকর না হওয়া ঠিক করা হয়েছে ([#1231](https://github.com/scriptscat/scriptcat/pull/1231)) (by @cyfung1031)

### ♻️ রিফ্যাক্টরিং ও সামঞ্জস্য

- ♻️ userScripts / scripting API সমন্বয়, সামঞ্জস্য উন্নত (রিডু #704) ([#925](https://github.com/scriptscat/scriptcat/pull/925)) (by @cyfung1031)
- ♻️ Cron-সম্পর্কিত পরিবর্তন: বাগ ফিক্স, i18n, once এক্সপ্রেশন উন্নতি, cron লাইব্রেরি আপগ্রেড ([#1126](https://github.com/scriptscat/scriptcat/pull/1126)) (by @cyfung1031)
- ♻️ স্ক্রিপ্ট আইকন লোডিং রিফ্যাক্টর ও অপ্টিমাইজ করা হয়েছে ([#893](https://github.com/scriptscat/scriptcat/pull/893)) (by @CodFrm)
- ♻️ টেক্সট ডিকোডিং উন্নত করা হয়েছে ([#1166](https://github.com/scriptscat/scriptcat/pull/1166)) (by @cyfung1031)
- ⬆️ swc-সামঞ্জস্যপূর্ণ কার্নেল সংস্করণ আপগ্রেড করা হয়েছে ([#1186](https://github.com/scriptscat/scriptcat/pull/1186)) (by @cyfung1031)

### 🎨 UI উন্নতি

- 🎨 ডিফল্ট এক্সটেনশন আইকন ব্যাজ সংখ্যা স্ক্রিপ্ট সংখ্যায় পরিবর্তন করা হয়েছে [#989](https://github.com/scriptscat/scriptcat/issues/989) (by @CodFrm)
- 🎨 ইনস্টল পৃষ্ঠা URL আরও সুন্দর করা হয়েছে ([#993](https://github.com/scriptscat/scriptcat/pull/993)) (by @cyfung1031)
- 🐛 DraggableEntry রিফ্যাক্টর করা হয়েছে, কার্ড উচ্চতা সারিবদ্ধকরণ ঠিক করা হয়েছে ([#1245](https://github.com/scriptscat/scriptcat/pull/1245)) (by @cyfung1031)

### বিবিধ

- 🔒 নিরাপত্তা উন্নতি (DOMPurify, npm নির্ভরতা দুর্বলতা ফিক্স)
- 👷 Rspack বান্ডলিং অপ্টিমাইজেশন, বিল্ড টুলচেইন ফিক্স
- ⬆️ নির্ভরতা সংস্করণ আপডেট

**সম্পূর্ণ পরিবর্তনের লগ:** [v1.2.6...v1.3.0 তুলনা](https://github.com/scriptscat/scriptcat/compare/v1.2.6...v1.3.0)

<a name="1.2.6"></a>

## 1.2.6 (2026-02-03)

### ফিক্সড

- 🐛 structuredClone ত্রুটি ঠিক করা হয়েছে ([#1192](https://github.com/scriptscat/scriptcat/issues/1192)) [[265e122](https://github.com/scriptscat/scriptcat/commit/265e122342366b166d3122cc8da485cb1295b924)] (by @cyfung1031)

<a name="1.2.5"></a>

## 1.2.5 (2026-02-02)

### ফিক্সড

- 🐛 স্ক্রিপ্ট সিঙ্ক ডিলিট সমস্যা ঠিক করা হয়েছে [#1158](https://github.com/scriptscat/scriptcat/issues/1158) [[5e91a31](https://github.com/scriptscat/scriptcat/commit/5e91a31e02761ba8061e3de1f4d15fc1d964346c)] (by @CodFrm)
- 🐛 TM &#x60;@match www.website.com/*&#x60;-এর সাথে সামঞ্জস্যপূর্ণ ([#1165](https://github.com/scriptscat/scriptcat/issues/1165)) [[da66ff7](https://github.com/scriptscat/scriptcat/commit/da66ff70d25c3087cb8405289dc8b14df9c15f05)] (by @cyfung1031)
- 🐛 Edge-এর সর্বশেষ সংস্করণ 144 ব্যবহারকারী স্ক্রিপ্ট যোগ করে [#1157](https://github.com/scriptscat/scriptcat/issues/1157) [[f7c1c73](https://github.com/scriptscat/scriptcat/commit/f7c1c730cf39cae02a9e6f815e3113ea9d2a8a05)] (by @CodFrm)
- 🐛 FileSystemObserver ধারাবাহিক মনিটরিং সমস্যা ঠিক করা হয়েছে ([#1160](https://github.com/scriptscat/scriptcat/issues/1160)) [[9556769](https://github.com/scriptscat/scriptcat/commit/95567690d1bf77bfe8bedfd6a94c88949a77e115)] (by @cyfung1031)
- 🐛 locales.ts ছোটখাট ফিক্স ([#1154](https://github.com/scriptscat/scriptcat/issues/1154)) [[1c44b68](https://github.com/scriptscat/scriptcat/commit/1c44b680dab3a95a51eb73cf92531efd0a192dc9)] (by @cyfung1031)
- 🐛 পপআপ আপডেট উইন্ডো সময় সমস্যা ঠিক করা হয়েছে ([#1155](https://github.com/scriptscat/scriptcat/issues/1155)) [[c17f761](https://github.com/scriptscat/scriptcat/commit/c17f761807fb9b14aff09b9b08d19e4cbe72b8a5)] (by @cyfung1031)
- 🐛 i18n প্রিফিক্স ভাষা স্ক্রিপ্ট নাম এবং বিবরণ প্রদর্শন ঠিক করা হয়েছে [#1123](https://github.com/scriptscat/scriptcat/issues/1123) [[7ef7355](https://github.com/scriptscat/scriptcat/commit/7ef7355632fc989fa1cad44fd2069ff840bbd8df)] (by @CodFrm)
- 🐛 মান রেফারেন্স সমস্যা হ্যান্ডেল করা হয়েছে [#1141](https://github.com/scriptscat/scriptcat/issues/1141) ([#1147](https://github.com/scriptscat/scriptcat/issues/1147)) [[0892fcd](https://github.com/scriptscat/scriptcat/commit/0892fcd452758030553c33ddf14f1ce4bc6d3efc)] (by @cyfung1031)

<a name="1.2.4"></a>

## 1.2.4 (2026-01-07)

সিঙ্ক্রোনাইজেশন বাগ ঠিক করা হয়েছে, এবং সংস্করণ আপডেট আর পরিবর্তনের লগ পৃষ্ঠা স্বয়ংক্রিয়ভাবে খুলবে না

### যোগ করা হয়েছে

- ✨ সিঙ্ক ডিলিট এখন ডিফল্টভাবে নিষ্ক্রিয় ([#958](https://github.com/scriptscat/scriptcat/issues/958)) [[9c4c7dc](https://github.com/scriptscat/scriptcat/commit/9c4c7dc411357746db43a306d97ac41a71f2b49c)] (by @cyfung1031)
- ✨ এডিটর এখন GM.\* সমর্থন করে ([#1129](https://github.com/scriptscat/scriptcat/issues/1129)) [[bea0192](https://github.com/scriptscat/scriptcat/commit/bea0192c6cc50eff2ed4e1cc5dcc25f36bbe10e7)] (by @cyfung1031)

### পরিবর্তিত হয়েছে

- ♻️ পরিবর্তনের লগ পৃষ্ঠা খোলার লজিক অপ্টিমাইজ করা হয়েছে [#1110](https://github.com/scriptscat/scriptcat/issues/1110) [[d3ffedc](https://github.com/scriptscat/scriptcat/commit/d3ffedcffe752ca548f87f1640072fcd871b8604)] (by @CodFrm)

### ফিক্সড

- 🐛 scriptcat.d.tpl &amp; টাইপ ফিক্স ([#1130](https://github.com/scriptscat/scriptcat/issues/1130)) [[dd22ef5](https://github.com/scriptscat/scriptcat/commit/dd22ef544684d69e24a7aae098cb05cbab03daa8)] (by @cyfung1031)
- 🐛 ক্লাউড সিঙ্ক সমস্যা ঠিক করা হয়েছে ([#1133](https://github.com/scriptscat/scriptcat/issues/1133)) [[a9383d2](https://github.com/scriptscat/scriptcat/commit/a9383d2012eb3953dc33c8886ce3891f404fa100)] (by @CodFrm)
- 🐛 &#x60;GM_addElement(&quot;tagName&quot;)&#x60; ত্রুটি ঠিক করা হয়েছে ([#1120](https://github.com/scriptscat/scriptcat/issues/1120)) [[ad19de5](https://github.com/scriptscat/scriptcat/commit/ad19de5c1793c8c079bedbf1b11c7c2ae27a469e)] (by @cyfung1031)
- 🐛 ক্লিনআপ লজিক সরানো হয়েছে এবং checkuserscript লজিক অপ্টিমাইজ করা হয়েছে ([#1113](https://github.com/scriptscat/scriptcat/issues/1113)) [[e635911](https://github.com/scriptscat/scriptcat/commit/e635911a3c11c3cb8acd1cfd507cb777e5ee7236)] (by @CodFrm)

### বিবিধ

- 🏷️ TypeScript সংশোধন ([#1127](https://github.com/scriptscat/scriptcat/issues/1127)) [[b455724](https://github.com/scriptscat/scriptcat/commit/b4557244191018c18d5ce8ea8e8627bcfb7f7cdd)] (by @cyfung1031)
- 📝 উদাহরণ মন্তব্য সম্পূরক ([#1131](https://github.com/scriptscat/scriptcat/issues/1131)) [[292549e](https://github.com/scriptscat/scriptcat/commit/292549ed0f65952fe9f269aace23eefc7d6a3a0f)] (by @cyfung1031)

<a name="1.2.3"></a>

## 1.2.3 (2025-12-20)

কিছু বাগ ফিক্স

### পরিবর্তিত হয়েছে

- ⚡ পরবর্তী রান সময় প্রদর্শন অপ্টিমাইজ করা হয়েছে [#1093](https://github.com/scriptscat/scriptcat/issues/1093) [[324ce51](https://github.com/scriptscat/scriptcat/commit/324ce515c84699ca8d3bf1ee447fc6ef0656ae0d)] (by @CodFrm)

### ফিক্সড

- 🐛 প্রাথমিক স্ক্রিপ্টের জন্য URL ম্যাচিং সমস্যা ঠিক করা হয়েছে ([#1096](https://github.com/scriptscat/scriptcat/issues/1096)) [[a77effb](https://github.com/scriptscat/scriptcat/commit/a77effbab5ab4d1752065ef943d9c050ff99c066)] (by @cyfung1031)
- 🐛 আপডেট পপআপ উইন্ডো খুব অল্প সময়ের জন্য প্রদর্শিত হওয়া ঠিক করা হয়েছে ([#1088](https://github.com/scriptscat/scriptcat/issues/1088)) [[b2b2d5c](https://github.com/scriptscat/scriptcat/commit/b2b2d5c41ff70ee5430f7d8d156f480ac8fc3a1a)] (by @cyfung1031)
- 🐛 ব্যবহারকারী স্ক্রিপ্ট নোটিফিকেশন সক্রিয় থাকলে অস্বাভাবিক প্রদর্শন ঠিক করা হয়েছে ([#1086](https://github.com/scriptscat/scriptcat/issues/1086)) ([959c4db](https://github.com/scriptscat/scriptcat/commit/959c4dbed92f7bfe22a2f8ebb775c4189b5ff076))
- 🐛 responseHeaders: &#x60;TM সামঞ্জস্য: \\r\\n&#x60; ([#1085](https://github.com/scriptscat/scriptcat/issues/1085)) [[15232c8](https://github.com/scriptscat/scriptcat/commit/15232c8543d93abfdafa1353d39d8a15d1dc385f)] (by @cyfung1031)
- 🐛 GM XHR সমস্যা ঠিক করা হয়েছে ([#1082](https://github.com/scriptscat/scriptcat/issues/1082)) [[3d987c3](https://github.com/scriptscat/scriptcat/commit/3d987c300242a3c765146359c35ecd6d998f792c)] (by @CodFrm)

### বিবিধ

- 🌐 পপআপ পৃষ্ঠাগুলিতে i18n সমস্যা হ্যান্ডল করা হয়েছে [#1081](https://github.com/scriptscat/scriptcat/issues/1081) [[6b17d71](https://github.com/scriptscat/scriptcat/commit/6b17d7100e8572d72b3b7aaf8ea38be9cdf33f5f)] (by @CodFrm)

<a name="1.2.2"></a>

## 1.2.2 (2025-12-13)

কিছু বাগ ফিক্স

### ফিক্সড

- 🐛 ঘন ঘন ব্যাকগ্রাউন্ড সিঙ্ক্রোনাইজেশন সমস্যা ঠিক করা হয়েছে ([#1076](https://github.com/scriptscat/scriptcat/issues/1076)) [[45dc39b](https://github.com/scriptscat/scriptcat/commit/45dc39baa0f3326cf12e97312ab632dc46ba40f2)] (by @CodFrm)
- 🐛 বিশেষ ট্যাব হ্যান্ডলিং সমস্যা ঠিক করা হয়েছে [#1066](https://github.com/scriptscat/scriptcat/issues/1066) ([50904fb](https://github.com/scriptscat/scriptcat/commit/50904fb46efdea10fd57677bc2d28c770b47e861))
- 🐛 ম্যাচ রুলবিহীন স্ক্রিপ্ট হ্যান্ডলিং ঠিক করা হয়েছে [#1071](https://github.com/scriptscat/scriptcat/issues/1071) ([560cdc0](https://github.com/scriptscat/scriptcat/commit/560cdc01fc0fc27fb7d0e3b877c63ba431206668))
- 🐛 ব্যাকগ্রাউন্ড ঐচ্ছিক অনুমতি সরিয়ে দেওয়া CI প্যাকেজিং সমস্যা ঠিক করা হয়েছে [[1f002f0](https://github.com/scriptscat/scriptcat/commit/1f002f0edf9892f023ae93b8522ff7c5e4a96559)] (by @CodFrm)
- 🐛 বাতিল ট্যাব উপেক্ষা করা ঠিক করা হয়েছে ([#1058](https://github.com/scriptscat/scriptcat/issues/1058)) [[6165bf4](https://github.com/scriptscat/scriptcat/commit/6165bf48eb1d53ede0561c85c30135446c2ff882)] (by @cyfung1031)

<a name="1.2.1"></a>

## 1.2.1 (2025-12-06)

কিছু বাগ ফিক্স এবং ব্যাকগ্রাউন্ড চলমান বিকল্পের হ্যান্ডলিং।

### যোগ করা হয়েছে

- ✨ ব্যাকগ্রাউন্ড চলমান বিকল্প যোগ করা হয়েছে ([#1048](https://github.com/scriptscat/scriptcat/issues/1048)) [[626e84d](https://github.com/scriptscat/scriptcat/commit/626e84dbd4dda0731e0a5ffdbdf71ae10e884489)] (by @CodFrm)

### ফিক্সড

- 🐛 document.write-এর কারণে মেসেজ লিসেনার রিসেট সমস্যা ঠিক করা হয়েছে ([#1055](https://github.com/scriptscat/scriptcat/issues/1055)) [[1f3a3ec](https://github.com/scriptscat/scriptcat/commit/1f3a3ec335ed4b519599e9aa3036c66b6f0d10b2)] (by @cyfung1031)
- 🐛 তালিকা দৃশ্য ফিল্টারিং কার্যকারিতা ঠিক করা হয়েছে [[e272dc6](https://github.com/scriptscat/scriptcat/commit/e272dc6ed151c15a1ef785b70ae100cb9e74a5dd)] (by @CodFrm)
- 🐛 প্রাথমিক পর্যায়ে UserAgentData হ্যান্ডেল করা হয়েছে ([#1045](https://github.com/scriptscat/scriptcat/issues/1045)) [[b4e08a8](https://github.com/scriptscat/scriptcat/commit/b4e08a812a08f42037837bbee54610ebc565063f)] (by @cyfung1031)
- 🐛 GM_openInTab-এর জন্য useOpen বিকল্প পুনরুদ্ধার করা হয়েছে [#1043](https://github.com/scriptscat/scriptcat/issues/1043) ([#1044](https://github.com/scriptscat/scriptcat/issues/1044)) [[7f30198](https://github.com/scriptscat/scriptcat/commit/7f30198909824871e694d5ffbe7088e44a6d0b45)] (by @cyfung1031)
- 🐛 userScripts undefined সমস্যা ঠিক করা হয়েছে ([#1041](https://github.com/scriptscat/scriptcat/issues/1041)) [[4f2deda](https://github.com/scriptscat/scriptcat/commit/4f2deda69aa6aae7f6e791be1cd965a440b80e33)] (by @cyfung1031)
- 🐛 `AppContext`-এ `"monaco-editor"`-এর ভুল রেফারেন্স ঠিক করা হয়েছে ([#983](https://github.com/scriptscat/scriptcat/issues/983)) [[4b8dae1](https://github.com/scriptscat/scriptcat/commit/4b8dae1f49208d13c4d19c4c627762fc1b04ea5e)] (by @cyfung1031)

**সম্পূর্ণ পরিবর্তনের লগ:** [v1.2.0...v1.2.1 তুলনা](https://github.com/scriptscat/scriptcat/compare/v1.2.0...v1.2.1)

<a name="1.2.0"></a>

## 1.2.0 (2025-11-29)

এই আপডেটটি স্ক্রিপ্ট তালিকা সাইডবার, কার্ড ভিউ, আরও বন্ধুত্বপূর্ণ আপডেট চেক লজিক, এডিটর কনফিগারেশন এবং আরও অনেক কিছু নিয়ে আসে। ইনজেকশন এবং রানটাইম স্থিতিশীলতা উল্লেখযোগ্যভাবে উন্নত হয়েছে, CSP, স্যান্ডবক্স, GM API-র গুরুতর সমস্যা ঠিক করা হয়েছে, সাথে পারফরম্যান্স এবং কাঠামোগত অপ্টিমাইজেশনও এসেছে।

আরও বিশদ বিবরণের জন্য, v1.2.0-beta.x পরিবর্তনের লগ এবং [v1.2](https://docs.scriptcat.org/docs/change/v1.2/) ডকুমেন্টেশন দেখুন।

### 🚀 প্রধান নতুন ফিচার

- ✨ স্ক্রিপ্ট তালিকা সাইডবার [#794](https://github.com/scriptscat/scriptcat/issues/794) (by @CodFrm)
- ✨ কার্ড ভিউ [#860](https://github.com/scriptscat/scriptcat/issues/860) (by @CodFrm)
- ✨ আরও বন্ধুত্বপূর্ণ আপডেট চেক লজিক [#755](https://github.com/scriptscat/scriptcat/issues/755) (by @cyfung1031)
- ✨ এডিটর কনফিগারেশন এবং এডিটর টাইপ ডেফিনিশন যোগ করা হয়েছে [#708](https://github.com/scriptscat/scriptcat/pull/708) (by @CodFrm)
- ✨ পপআপে স্ক্রিপ্ট সংখ্যা প্রদর্শন ([#973](https://github.com/scriptscat/scriptcat/issues/973)) [[1134586](https://github.com/scriptscat/scriptcat/commit/1134586ff040ffc0cdddd3538e9ec493950c948a)] (by @cyfung1031)
- ✨ কোড সাইডবার লুকানোর জন্য লেআউট মেনু যোগ করা হয়েছে [#689](https://github.com/scriptscat/scriptcat/issues/689) [[dd64da7](https://github.com/scriptscat/scriptcat/commit/dd64da719c081acbf21645e2b1e1f38653ffae8c)]
- ✨ SC সংস্করণ চেক বোতাম যোগ করা হয়েছে ([#795](https://github.com/scriptscat/scriptcat/issues/795)) [[1680c66](https://github.com/scriptscat/scriptcat/commit/1680c66099120c0e497c1a1f5321f38fe0160ea0)] (by @cyfung1031)
- ✨ এক্সটেনশন আনইনস্টলেশনের পরে সমীক্ষা পৃষ্ঠা যোগ করা হয়েছে [[6404c8f](https://github.com/scriptscat/scriptcat/commit/6404c8f74aff09b15725a92f8afdfc0d71ac188f)]

### 🧩 GM API পরিবর্তন

- ✨ ইনজেক্ট-ইনটু সমর্থন, স্ক্রিপ্ট এখন কনটেন্ট পরিবেশে ইনজেক্ট করা যেতে পারে [#711](https://github.com/scriptscat/scriptcat/issues/711)
- ✨ GM_openInTab পিন করা উইন্ডো, ইনকগনিটো উইন্ডোতে খোলা এবং অন্যান্য প্যারামিটার সমর্থন করে [#788](https://github.com/scriptscat/scriptcat/pull/788) (by @cyfung1031)
- ✨ GM_registerMenuCommand সাবমেনু এবং সেপারেটর সমর্থন করে [#831](https://github.com/scriptscat/scriptcat/pull/831) (by @cyfung1031)
- 🗑 GM_openInTab থেকে useOpen বিকল্প সরানো হয়েছে [#867](https://github.com/scriptscat/scriptcat/pull/867)
- ♻️ `@connect` লজিক সমন্বয় করা হয়েছে ([#969](https://github.com/scriptscat/scriptcat/issues/969)) [[67914d2](https://github.com/scriptscat/scriptcat/commit/67914d2b7d57fa9c69706ae57ee5d3400c2643f9)] (by @cyfung1031)
- ♻️ `GM_xmlhttpRequest` এবং সম্পর্কিত কোড রিফ্যাক্টর করা হয়েছে ([#901](https://github.com/scriptscat/scriptcat/issues/901)) [[fabd2e9](https://github.com/scriptscat/scriptcat/commit/fabd2e944235b460bc73df346b79d23ee4540af7)] (by @cyfung1031)

### অন্যান্য

- ⚡️ স্থিতিশীলতা এবং পারফরম্যান্স অপ্টিমাইজেশন
- 🐛 বিভিন্ন সমস্যা ঠিক করা হয়েছে
- ♻️ কোড কাঠামো অপ্টিমাইজেশন
- 🌐 i18n উন্নতি

**সম্পূর্ণ পরিবর্তনের লগ:** [v1.1.2...v1.2.0 তুলনা](https://github.com/scriptscat/scriptcat/compare/v1.1.2...v1.2.0)

<a name="1.1.2"></a>

## 1.1.2 (2025-09-18)

বাগ ফিক্স

### ফিক্সড

- 🐛 স্যান্ডবক্স toString সমস্যা ঠিক করা হয়েছে [#737](https://github.com/scriptscat/scriptcat/issues/737) [[6ca24c9](https://github.com/scriptscat/scriptcat/commit/6ca24c9b171792035803ac4e1c69e473629f9d18)]
- 🐛 ব্যাজ 0 প্রদর্শনের সমস্যা ঠিক করা হয়েছে [[026c1d2](https://github.com/scriptscat/scriptcat/commit/026c1d2071dd4cfb6291f005d36717bcdf0a51c3)]
- 🐛 স্ক্রিপ্ট ইনজেকশন CSP সমস্যা ঠিক করা হয়েছে [#739](https://github.com/scriptscat/scriptcat/issues/739) [#728](https://github.com/scriptscat/scriptcat/issues/728) [[5da21b5](https://github.com/scriptscat/scriptcat/commit/5da21b5e3d0e7e86a1fd5dff57ba03ea641c19fa)]
- 🐛 পপআপ পৃষ্ঠায় ব্যাকগ্রাউন্ড স্ক্রিপ্ট প্রসারিত না হওয়া ঠিক করা হয়েছে [[66ab70f](https://github.com/scriptscat/scriptcat/commit/66ab70fb10c28aaf0c9260a9591aab7e1ae35615)]
- 🐛 মেসেজ টাইপ ভ্যালিডেশন শক্তিশালী করা হয়েছে [#676](https://github.com/scriptscat/scriptcat/issues/676) [[5073795](https://github.com/scriptscat/scriptcat/commit/50737957507ff9af3aa9ba9a6b7d444b643d1ff2)]
- 🐛 GM xhr document সমস্যা ঠিক করা হয়েছে [#716](https://github.com/scriptscat/scriptcat/issues/716) [[1c46546](https://github.com/scriptscat/scriptcat/commit/1c465462f4e14ae461d54358710f5caf74208af3)]

<a name="1.1.1"></a>

## 1.1.1 (2025-09-07)

### যোগ করা হয়েছে

- ✨ কাস্টম এডিটর কনফিগারেশন এবং এডিটর টাইপ ডেফিনিশন যোগ করা হয়েছে ([#708](https://github.com/scriptscat/scriptcat/issues/708)) [[49eb379](https://github.com/scriptscat/scriptcat/commit/49eb3794774790d61c3ef787c865a9ba6fe82841)]

### ফিক্সড

- 🐛 পুরানো ব্রাউজার সংস্করণগুলির সাথে সামঞ্জস্য সমস্যা ঠিক করা হয়েছে [#715](https://github.com/scriptscat/scriptcat/issues/715) [[4da8068](https://github.com/scriptscat/scriptcat/commit/4da806879c2b170672814d02e6f8ed98c9fae35b)]
- 💄 পপআপ উইন্ডো খুব ছোট হলে পপআপ মেনু প্রদর্শন অপ্টিমাইজ করা হয়েছে ([288650e](https://github.com/scriptscat/scriptcat/commit/288650e5e4cbdc3fa8658f0754ce427a1b3dec5a))
- 🐛 একাধিক সমস্যা ঠিক করা হয়েছে ([#710](https://github.com/scriptscat/scriptcat/issues/710)) [[6a2027a](https://github.com/scriptscat/scriptcat/commit/6a2027ac0bb5e0ed625df570240d068a98a34b31)] (by @WhiteSevs)

### বিবিধ

- 🌐 i18n সমস্যা হ্যান্ডেল করা হয়েছে [[2adf69d](https://github.com/scriptscat/scriptcat/commit/2adf69d6ec3c30186f2c2ef89f97e3cba9e15a66)]

<a name="1.1.0"></a>

## 1.1.0 (2025-09-07)

অসংখ্য বাগ ফিক্স এবং সামঞ্জস্য উন্নতি, Dropbox সমর্থন যোগ করা হয়েছে, পৃষ্ঠা লোডের চেয়ে দ্রুত লোডিংয়ের জন্য নতুন @early-start ফিচার। আরও বিশদ বিবরণের জন্য, v1.1.0-beta.x পরিবর্তনের লগ দেখুন।

### যোগ করা হয়েছে

- ✨ স্ক্রিপ্ট রানটাইম পরিবেশ সেটিংস যোগ করা হয়েছে [#628](https://github.com/scriptscat/scriptcat/issues/628) [[0d4a89e](https://github.com/scriptscat/scriptcat/commit/0d4a89efaecf0331dcc7fbb6df006b93a1525846)]
- ✨ ব্যাকগ্রাউন্ড স্ক্রিপ্ট না থাকলে ডিফল্টভাবে ভাঁজ করা [#626](https://github.com/scriptscat/scriptcat/issues/626) ([9d0aac6](https://github.com/scriptscat/scriptcat/commit/9d0aac6aae11b96707ca1f7c024a24e9d55f217b))
- ✨ Dropbox সমর্থন [#575](https://github.com/scriptscat/scriptcat/issues/575) [[2c66f21](https://github.com/scriptscat/scriptcat/commit/2c66f21f5118bd83a0eaa0f1baa3a31f2233e5b2)]
- ✨ TM ইনস্টল না থাকলেও TM এবং SC উভয় সক্রিয় থাকলে SC ইনস্টলেশন অবস্থা পরীক্ষা করতে external.Tampermonkey অপ্টিমাইজ করা হয়েছে ([#703](https://github.com/scriptscat/scriptcat/issues/703)) [[d0115c3](https://github.com/scriptscat/scriptcat/commit/d0115c33657260d803b6091139601b1b20407d4e)] (by @cyfung1031)
- ✨ পৃষ্ঠার চেয়ে দ্রুত লোড করার জন্য @early-start যোগ করা হয়েছে ([#649](https://github.com/scriptscat/scriptcat/issues/649)) [[eb097dd](https://github.com/scriptscat/scriptcat/commit/eb097dd146dcd6f8ca712ed883571dbfb3d09f20])
- ✨ গ্লোবাল কোড সার্চ ([#662](https://github.com/scriptscat/scriptcat/issues/662)) [[f8eafb7](https://github.com/scriptscat/scriptcat/commit/f8eafb7f955dad62c1b41ac477e929bf00c65982)] (by @RenjiYuusei)
- ✨ এক্সটেনশন আনইনস্টলেশনের পরে সমীক্ষা পৃষ্ঠা যোগ করা হয়েছে [[6404c8f](https://github.com/scriptscat/scriptcat/commit/6404c8f74aff09b15725a92f8afdfc0d71ac188f)]
- 📝 ইনস্টল পৃষ্ঠা এবং namespace পরিবর্তন করা হয়েছে ([6f2f000](https://github.com/scriptscat/scriptcat/commit/6f2f000612908b7a88f6b70c2831092805c63bc7))
- ✨ মোবাইল ইনস্টলেশনের জন্য QR কোড যোগ করা হয়েছে ([348237c](https://github.com/scriptscat/scriptcat/commit/348237c7ce9771c69025386926b1f73710cf6f42))

### ফিক্সড

- 🐛 নেটওয়ার্ক ইনস্টল মধ্যবর্তী পৃষ্ঠায় অ্যাক্সেস করতে না পারলে ইনস্টলেশন ট্রিগার না হওয়া ঠিক করা হয়েছে [#705](https://github.com/scriptscat/scriptcat/issues/705) [[5f1e292](https://github.com/scriptscat/scriptcat/commit/5f1e2929d79c470ba4427c3cce01f5cd184a839b)]
- 🐛 `@match *://*domain/*` এক্সপ্রেশন হ্যান্ডেল করা হয়েছে [[039b445](https://github.com/scriptscat/scriptcat/commit/039b4454148947cd3c74de82b87804ee9815e60c)]
- 🐛 এক্সটেনশন পরিবেশ স্যান্ডবক্স অনুপ্রবেশ সমস্যা ঠিক করা হয়েছে [#700](https://github.com/scriptscat/scriptcat/issues/700) [[a1a868d](https://github.com/scriptscat/scriptcat/commit/a1a868dfe3199e666fe2bcb65cfb2ad0ad3d699b)]
- ✏️ backgroud -&gt; background ([#698](https://github.com/scriptscat/scriptcat/issues/698)) [[2594075](https://github.com/scriptscat/scriptcat/commit/2594075c4a50f4c79fa46bcda08d7b0cbcfe723c)] (by @cyfung1031)
- ✏️ CrhomeStorage -&gt; ChromeStorage ([#693](https://github.com/scriptscat/scriptcat/issues/693)) [[64c536d](https://github.com/scriptscat/scriptcat/commit/64c536dbd5fcb4c29eebc1109202bab69aaa3ee2)] (by @cyfung1031)
- 🐛 GM.getTab এবং GM.getTabs ঠিক করা হয়েছে ([#683](https://github.com/scriptscat/scriptcat/issues/683)) [[31de256](https://github.com/scriptscat/scriptcat/commit/31de256f02b5b61e27f0eec9ea673248ba8faa32)] (by @WhiteSevs)
- 🐛 finalUrl-এ ডোমেইন অনুপস্থিত থাকা ঠিক করা হয়েছে ([#656](https://github.com/scriptscat/scriptcat/issues/656)) [[545d7c8](https://github.com/scriptscat/scriptcat/commit/545d7c8c0dd69c83bd2f0353518aafe6af81c0f4)] (by @cyfung1031)
- 🐛 নিম্ন ব্রাউজার কার্নেলের সাথে সামঞ্জস্য [#647](https://github.com/scriptscat/scriptcat/issues/647) ([bba12d2](https://github.com/scriptscat/scriptcat/commit/bba12d23f04759cb9b7fdb63f0d95ae515ee94a9))
- 🐛 finalUrl-এ ডোমেইন অনুপস্থিত থাকা ঠিক করা হয়েছে ([#656](https://github.com/scriptscat/scriptcat/issues/656)) [[3ed018a](https://github.com/scriptscat/scriptcat/commit/3ed018a7a54803fcf2e1791316e0166ed0b52007)] (by @cyfung1031)
- 💚 react/jsx-no-literals lint সমস্যা ঠিক করা হয়েছে [[017b608](https://github.com/scriptscat/scriptcat/commit/017b60886be601e3e0e1719cf249da32d5686c30)]
- 🐛 নিম্ন ব্রাউজার কার্নেলের সাথে সামঞ্জস্য [#647](https://github.com/scriptscat/scriptcat/issues/647) [[0e2f817](https://github.com/scriptscat/scriptcat/commit/0e2f8173c8b44bd6ad44bdffc73fa302a96a058e)]
- 🐛 window.external ইনজেকশন অপ্টিমাইজ করা হয়েছে ([#646](https://github.com/scriptscat/scriptcat/issues/646)) [[0b2668a](https://github.com/scriptscat/scriptcat/commit/0b2668aadcab35a33ff9abc4bd030dffb87ea168)] (by @cyfung1031)
- 🐛 ক্লাউড স্টোরেজ অথেনটিকেশন পৃষ্ঠা স্বয়ংক্রিয়ভাবে বন্ধ না হওয়া ঠিক করা হয়েছে [[7748088](https://github.com/scriptscat/scriptcat/commit/7748088e63c1fc660b6a6ae5613cf04f9da99b8c)]
- 🐛 কাজ না করা `@connect` \\* সমস্যা ঠিক করা হয়েছে [#623](https://github.com/scriptscat/scriptcat/issues/623) [[76481c8](https://github.com/scriptscat/scriptcat/commit/76481c845b34414a7f15ed18ec61f7dff7eef091)]
- 🐛 ইউনিট পরীক্ষা যোগ করা হয়েছে এবং `@exclude` সমস্যা ঠিক করা হয়েছে ([#618](https://github.com/scriptscat/scriptcat/issues/618)) [[0046bb7](https://github.com/scriptscat/scriptcat/commit/0046bb78800a2c46edaac785b8e9592327772a3b)] (by @cyfung1031)
- 🐛 কিছু .user.js লিংক স্ক্রিপ্ট ইনস্টল করতে না পারা ঠিক করা হয়েছে [#599](https://github.com/scriptscat/scriptcat/issues/599) [[ccd2639](https://github.com/scriptscat/scriptcat/commit/ccd2639858f0f3cde28f284376fe8ed998d935ae)]
- 🐛 নতুন স্ক্রিপ্ট তৈরি ব্যর্থতা ঠিক করা হয়েছে [[d42d6e7](https://github.com/scriptscat/scriptcat/commit/d42d6e7d408a84674facf9ab0da6eac0e384502f)]
- 🐛 মেটাডেটা ঠিক করা হয়েছে ([#610](https://github.com/scriptscat/scriptcat/issues/610)) [[4d98cce](https://github.com/scriptscat/scriptcat/commit/4d98cce0ca1281cc58f551ea4e6700e340780d3f)] (by @cyfung1031)
- 🐛 পপআপ ব্যাজ ঠিক করা হয়েছে ([#605](https://github.com/scriptscat/scriptcat/issues/605)) [[eff9230](https://github.com/scriptscat/scriptcat/commit/eff92309de99abb0cf48ef4727afaa113bc2fbb6)] (by @cyfung1031)
- 🐛 ScriptEditor.tsx ঠিক করা হয়েছে ([#603](https://github.com/scriptscat/scriptcat/issues/603)) [[a9aadba](https://github.com/scriptscat/scriptcat/commit/a9aadba372b813c16bdc5f0aeb07c68981f48c63)] (by @cyfung1031)
- 🐛 কোড ভিউয়ার ও এডিটর CSS ঠিক করা হয়েছে ([#602](https://github.com/scriptscat/scriptcat/issues/602)) [[2e86785](https://github.com/scriptscat/scriptcat/commit/2e8678513efaccd42c8dc2aa89f8b76679aa8420)] (by @cyfung1031)
- 🐛 getFaviconFromDomain সমকালীনতা সমস্যা ঠিক করা হয়েছে ([#597](https://github.com/scriptscat/scriptcat/issues/597)) [[1872fe1](https://github.com/scriptscat/scriptcat/commit/1872fe165ab204b155a56f037c111d2d7776c2b9)] (by @cyfung1031)
- 🐛 একাধিক উইন্ডোতে ট্যাব খোলার ত্রুটি ঠিক করা হয়েছে [#586](https://github.com/scriptscat/scriptcat/issues/586) [[54c1da2](https://github.com/scriptscat/scriptcat/commit/54c1da29c2bd8bd8f5ef2d85b7aed8b334de296f)]
- 🐛 openerTabId সামঞ্জস্য সমস্যা ঠিক করা হয়েছে ([#586](https://github.com/scriptscat/scriptcat/issues/586)) [[b861fc8](https://github.com/scriptscat/scriptcat/commit/b861fc8620e53b885cad98db03f1dd10ec9d296c)] (by @cyfung1031)

### বিবিধ

- 📝 README_RU.md এবং CONTRIBUTING_RU.md তৈরি করা হয়েছে ([#678](https://github.com/scriptscat/scriptcat/issues/678)) [[597ab03](https://github.com/scriptscat/scriptcat/commit/597ab0378fe5ced01637cf411326ef7845b8ce2b)] (by @Ioann)
- 👷 সামঞ্জস্য সমন্বয় (pack.js সামঞ্জস্য) ([#669](https://github.com/scriptscat/scriptcat/issues/669)) [[fec45e6](https://github.com/scriptscat/scriptcat/commit/fec45e6606a609b10b79c58d2fcba02c2ce71e16)] (by @cyfung1031)
- 🌐 ভিয়েতনামী লোকেল পরিমার্জিত ও সম্প্রসারিত হয়েছে ([#661](https://github.com/scriptscat/scriptcat/issues/661)) [[6847a59](https://github.com/scriptscat/scriptcat/commit/6847a596c4b06c75e13594ef60e4b9dfa5718cf3)] (by @RenjiYuusei)
- 🌐 অনুবাদ ফিক্স ([#635](https://github.com/scriptscat/scriptcat/issues/635)) [[19296de](https://github.com/scriptscat/scriptcat/commit/19296de6a3815e5965eb33401a55da9b2bd22bb4)] (by @cyfung1031)
- 🌐 অনবোর্ডিং গাইড i18n সমস্যা ঠিক করা হয়েছে [#627](https://github.com/scriptscat/scriptcat/issues/627) [[9683f96](https://github.com/scriptscat/scriptcat/commit/9683f965400ab6a2bac15349aca4335911766eac)]
- 👷 pack.js কোড অপ্টিমাইজ করা হয়েছে ([#615](https://github.com/scriptscat/scriptcat/issues/615)) [[870dd9b](https://github.com/scriptscat/scriptcat/commit/870dd9bc6b7eff3eceefa915452e773ec0565180)] (by @cyfung1031)
