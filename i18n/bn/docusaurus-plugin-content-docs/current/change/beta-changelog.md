---
title: বিটা পরিবর্তনের লগ
---

import GithubStar from '@site/src/components/GithubStar';

<GithubStar variant="bar" scene="changelog" />

ScriptCat-এর সংস্করণ প্রকাশ দুটি প্রধান শাখায় বিভক্ত: স্থিতিশীল রিলিজ এবং প্রি-রিলিজ সংস্করণ। স্থিতিশীল রিলিজের পরিবর্তনের লগের জন্য দেখুন: [পরিবর্তনের লগ](./index.md)

প্রি-রিলিজ সংস্করণ অফিসিয়াল স্থিতিশীল সংস্করণের আগে প্রকাশিত হয়। এগুলো সাধারণত নতুন ফিচার পরীক্ষা করতে ব্যবহৃত হয়। প্রি-রিলিজ সংস্করণ সংখ্যায় একটি প্রি-রিলিজ সনাক্তকারী থাকে, উদাহরণস্বরূপ:
`1.0.0-beta.1`.

আপনি [Release](https://github.com/scriptscat/scriptcat/releases) পেজ থেকে বা নিচের এক্সটেনশন স্টোর পেজগুলো থেকে প্রি-রিলিজ সংস্করণ পেতে পারেন:

- [Chrome](https://chromewebstore.google.com/detail/%E8%84%9A%E6%9C%AC%E7%8C%AB-beta/jaehimmlecjmebpekkipmpmbpfhdacom?authuser=0&hl=zh-CN)
- [Edge](https://microsoftedge.microsoft.com/addons/detail/%E8%84%9A%E6%9C%AC%E7%8C%AB-beta/nimmbghgpcjmeniofmpdfkofcedcjpfi)
- [Firefox](https://addons.mozilla.org/zh-CN/firefox/addon/scriptcat-pre/)

অতিরিক্তভাবে, প্রি-রিলিজ ছাড়াও, প্রতিটি কোড কমিট মূল শাখায় মার্জ হওয়ার পর ScriptCat [Github Action](https://github.com/scriptscat/scriptcat/actions/workflows/build.yaml)-এ এক্সটেনশনটি বিল্ড করে। আপনি যদি সর্বশেষ ফিচার বা ফিক্সগুলো অনুভব করতে চান, তাহলে [Github Action](https://github.com/scriptscat/scriptcat/actions/workflows/build.yaml) পেজ থেকে সেগুলো ডাউনলোড করতে পারেন।

<a name="1.5.0-beta.1"></a>

## 1.5.0-beta.1 (2026-08-06)

এই প্রি-রিলিজ দুটি বড় ফিচার হাইলাইট করে — **বাহ্যিক অ্যাক্সেস (MCP ব্রিজ)** এবং **স্ক্রিপ্ট রিসাইকেল বিন** — অফিসিয়ালি Firefox MV3 সমর্থন করে, কোরিয়ান, তুর্কি এবং ব্রাজিলিয়ান পর্তুগিজ যোগ করে এবং বেশ কয়েকটি GM API, ক্লাউড-সিঙ্ক এবং এডিটর সমস্যা সমাধান করে।

### 🚀 প্রধান নতুন ফিচার

- 💥 নতুন "বাহ্যিক অ্যাক্সেস (MCP ব্রিজ)": একটি লোকাল `sctl` ডেমন CLI এবং MCP-ক্লায়েন্ট অ্যাক্সেস একীভূত করে; প্রতিটি স্ক্রিপ্ট পড়া/লেখা স্তরভিত্তিক অনুমোদন এবং তিনটি স্তরের একটি মানব নিশ্চিতকরণ পেজ — অস্বীকার / অনুমতি / এই সেশনে অনুমতি — দ্বারা নিয়ন্ত্রিত হয় এবং প্রতিটি অপারেশন নিরীক্ষিত হয় ([#1573](https://github.com/scriptscat/scriptcat/pull/1573)) (by @cyfung1031)
- 💥 স্ক্রিপ্ট রিসাইকেল বিন: মুছে ফেলা স্ক্রিপ্ট প্রথমে রিসাইকেল বিনে যায়, পুনরুদ্ধার (মূল ডেটা এবং অনুমতি সংরক্ষণ সহ), স্থায়ী মুছে ফেলা এবং মেয়াদ-ভিত্তিক স্বয়ংক্রিয় পরিষ্কারের সাথে; ধারণের সময়কাল কনফিগারযোগ্য (ডিফল্ট ৩০ দিন, বা কখনই না) ([#1585](https://github.com/scriptscat/scriptcat/pull/1585)) (by @CodFrm)
- 💥 অফিসিয়াল Firefox MV3 সমর্থন, উন্নত sandbox/offscreen যোগাযোগ সহ ([#1561](https://github.com/scriptscat/scriptcat/pull/1561)) (by @cyfung1031)
- ✨ পপআপে দ্রুত সাইট-স্কোপ অ্যাকশন যোগ করুন ([#1646](https://github.com/scriptscat/scriptcat/pull/1646)) (by @CodFrm)
- ✨ পপআপ স্ক্রিপ্ট-লিস্ট সম্প্রসারণ সংখ্যা এখন মেনু সম্প্রসারণ সংখ্যা থেকে আলাদাভাবে কনফিগারযোগ্য ([#1645](https://github.com/scriptscat/scriptcat/pull/1645)) (by @CodFrm)
- ✨ আইকন সার্ভিস favicon ফেচিং সম্পূর্ণ বন্ধ করার জন্য একটি "নিষ্ক্রিয়" স্তর অর্জন করে ([#1637](https://github.com/scriptscat/scriptcat/pull/1637)) (by @CodFrm)
- ✨ অনির্ধারিত মেটাডেটা ট্যাগ এখন এডিটরে একটি সতর্কতা দেখায় ([#1608](https://github.com/scriptscat/scriptcat/pull/1608)) (by @cyfung1031)
- ✨ ব্যাকআপ/পুনরুদ্ধার/ইমপোর্ট সম্পূর্ণতা: ScriptCat/Tampermonkey/Violentmonkey কাস্টম কনফিগ + সেটিংস ব্যাকআপ + রিসোর্স মেরামত ([#1554](https://github.com/scriptscat/scriptcat/pull/1554)) (by @CodFrm)

### ♻️ রিফ্যাক্টরিং ও সামঞ্জস্য

- ♻️ ক্লায়েন্টকে অফিসিয়াল MCP SDK-তে রিফ্যাক্টর করুন ([#1643](https://github.com/scriptscat/scriptcat/pull/1643)) (by @CodFrm)

### 🐛 বাগ ফিক্স

- 🐛 GM_xmlhttpRequest কাস্টম কুকি একই-নামের কুকি ওভাররাইড করার পরিবর্তে যোগ হওয়া ফিক্স করুন ([#1604](https://github.com/scriptscat/scriptcat/pull/1604)) (by @cyfung1031)
- 🐛 স্ক্রিপ্ট-সিঙ্ক স্টেট সামঞ্জস্য এবং প্রোভাইডার-নিরাপদ কনফ্লিক্ট হ্যান্ডলিং ফিক্স করুন ([#1504](https://github.com/scriptscat/scriptcat/pull/1504)) (by @cyfung1031)
- 🐛 নির্ধারিত লগ ক্লিনআপ আর কাজ না করা ফিক্স করুন ([#1599](https://github.com/scriptscat/scriptcat/pull/1599)) (by @CodFrm)
- 🐛 স্ক্রিপ্ট সেটিংসে অনুপস্থিত কনটেক্সট-মেনু রান টাইমিং ফিক্স করুন ([#1652](https://github.com/scriptscat/scriptcat/pull/1652)) (by @CodFrm)
- 🐛 ইনস্টল-পেজ ব্যাক/ক্লোজ-ট্যাব লজিক ফিক্স করুন ([#1594](https://github.com/scriptscat/scriptcat/pull/1594)) (by @cyfung1031)
- 🐛 সংরক্ষিত স্ক্রিপ্টের নাম পরিবর্তনের পর ব্রাউজার ট্যাব টাইটেল আপডেট না হওয়া ফিক্স করুন ([#1607](https://github.com/scriptscat/scriptcat/pull/1607)) (by @cyfung1031)
- 🐛 window.focus ফোকাস আচরণ ফিক্স করুন এবং windowId ভ্যালিডেশন শক্ত করুন ([#1577](https://github.com/scriptscat/scriptcat/pull/1577)) (by @cyfung1031)
- 🐛 এডিটরের সক্রিয়-ট্যাব ক্লোজ বাটন লুকানো থাকা ফিক্স করুন [#1556](https://github.com/scriptscat/scriptcat/issues/1556) (by @CodFrm)
- 🐛 অসংরক্ষিত এডিটর কনটেন্টের নেভিগেশন গার্ড ফিক্স করুন ([#1656](https://github.com/scriptscat/scriptcat/pull/1656)) (by @CodFrm)
- 🐛 রিসাইকেল-বিনের একই-নামের স্ক্রিপ্ট সেভ নিশ্চিতকরণ শব্দচয়ন ফিক্স করুন ([#1622](https://github.com/scriptscat/scriptcat/pull/1622)) (by @CodFrm)
- 🐛 selfMetadata খালি ওভাররাইড সমর্থন করে: match/exclude/tag/run-at "মুছে ফেলা তারপর পুনরুজ্জীবিত" ফিক্স করুন ([#1579](https://github.com/scriptscat/scriptcat/pull/1579)) (by @CodFrm)

### 🎨 UI উন্নতি

- 💄 Android UI অভিযোজন ফিক্স করুন: ডাইনামিক ভিউপোর্ট উচ্চতা + সরু-স্ক্রিন টেবিল/সেটিংস-রো/লগ-স্ট্যাট-বার রিফ্লো ([#1636](https://github.com/scriptscat/scriptcat/pull/1636)) (by @RenjiYuusei)
- 💄 পপআপে একটি কমপ্যাক্ট লেআউট বিকল্প যোগ করুন ([#1551](https://github.com/scriptscat/scriptcat/pull/1551)) (by @cyfung1031)

### 🌐 আন্তর্জাতিকীকরণ

- 🌐 কোরিয়ান (ko-KR) অনুবাদ যোগ করুন ([#1568](https://github.com/scriptscat/scriptcat/pull/1568)) (by @moduvoice)
- 🌐 তুর্কি (tr-TR) অনুবাদ যোগ করুন ([#1557](https://github.com/scriptscat/scriptcat/pull/1557)) (by @azizaktas)
- 🌐 ব্রাজিলিয়ান পর্তুগিজ (pt-BR) অনুবাদ যোগ করুন ([#1587](https://github.com/scriptscat/scriptcat/pull/1587)) (by @Lucas559-noob)
- 🌐 pt-BR / tr-TR-এর জন্য chrome.i18n messages.json এবং Monaco এডিটর ভাষা পূরণ করুন ([#1605](https://github.com/scriptscat/scriptcat/pull/1605)) (by @CodFrm)

### অন্যান্য

- ⬆️ ডিপেন্ডেন্সি আপগ্রেড করুন (TypeScript 6.0 সহ) এবং pnpm audit সতর্কতা ফিক্স করুন ([#1576](https://github.com/scriptscat/scriptcat/pull/1576), [#1567](https://github.com/scriptscat/scriptcat/pull/1567)) (by @cyfung1031)
- স্ক্রিপ্ট-সিঙ্ক সেটিংস এখন তাৎক্ষণিকভাবে সংরক্ষিত হয় ([#1615](https://github.com/scriptscat/scriptcat/pull/1615)) (by @CodFrm)
- 📝 "user script" আবিষ্কারযোগ্যতার জন্য স্টোর বিবরণ এবং README ট্যাগলাইন উন্নত করুন ([#1553](https://github.com/scriptscat/scriptcat/pull/1553)) (by @CodFrm)

<a name="1.5.0-beta"></a>

## 1.5.0-beta (2026-07-08)

এই প্রি-রিলিজ একটি **সম্পূর্ণ নতুন UI** নিয়ে আসে — একটি পরিষ্কার, আরও সামঞ্জস্যপূর্ণ ইন্টারফেস এবং একটি মসৃণ সামগ্রিক অভিজ্ঞতা সহ — পাশাপাশি মোবাইলের জন্য ডেডিকেটেড ডিজাইন অপ্টিমাইজেশন, যাতে মোবাইল ব্যবহারকারীরাও একটি দুর্দান্ত অভিজ্ঞতা পান। অতিরিক্তভাবে, এটি এডিটরে নতুন-স্ক্রিপ্ট-টাইপ নির্বাচন, লোকাল ব্যাকআপের জন্য ম্যানুয়াল ডাউনলোড লিংক এবং আরও কিছু যোগ করে, পাশাপাশি নির্ধারিত-টাস্ক অবৈধ-টাইমজোন এবং নেটিভ GM_download ক্রস-অরিজিন সমস্যা সমাধান করে। নতুন UI/UX সম্পর্কে আপনার কোনো পরামর্শ থাকলে, [GitHub](https://github.com/scriptscat/scriptcat/discussions)-এ আলোচনায় যোগ দিন।

### 🎨 UI উন্নতি

- ♻️ সম্পূর্ণ নতুন UI: সম্পূর্ণ ইন্টারফেস পুনর্লিখন, ডেস্কটপ এবং মোবাইল উভয় ক্ষেত্রেই উন্নত মোবাইল অভিযোজন সহ ([#1514](https://github.com/scriptscat/scriptcat/pull/1514)) (by @CodFrm)

### 🚀 প্রধান নতুন ফিচার

- ✨ এডিটর ট্যাব-বারের "＋" এখন নতুন স্ক্রিপ্ট টাইপ নির্বাচন সমর্থন করে ([#1544](https://github.com/scriptscat/scriptcat/pull/1544)) (by @cyfung1031)
- ✨ লোকাল ব্যাকআপের জন্য একটি ম্যানুয়াল ডাউনলোড লিংক যোগ করুন ([#1543](https://github.com/scriptscat/scriptcat/pull/1543)) (by @cyfung1031)
- ✨ Chromium 148+-এ এক্সটেনশন মেসেজিংয়ের জন্য structured_clone সিরিয়ালাইজেশন সক্ষম করুন ([#1534](https://github.com/scriptscat/scriptcat/pull/1534)) (by @cyfung1031)
- ✨ প্রি-রিলিজ (বিটা) সংস্করণ এখন আপডেটের পরে স্বয়ংক্রিয়ভাবে পরিবর্তনের লগ পেজ খোলে (by @CodFrm)

### 🧩 GM API পরিবর্তন

- 🐛 নেটিভ GM_download GM_xmlhttpRequest-এর মতো @connect সম্মান করে ([#1506](https://github.com/scriptscat/scriptcat/pull/1506)) (by @DudeAint)

### ⚡️ পারফরম্যান্স উন্নতি

- ⚡️ স্ক্রিপ্ট লোডিং ক্যাশ অপ্টিমাইজ করুন এবং অবশিষ্ট Popup মেনু আইটেম ফিক্স করুন ([#1511](https://github.com/scriptscat/scriptcat/pull/1511)) (by @cyfung1031)

### 🧑‍💻 এডিটর

- ♻️ `eslint-plugin-userscripts` নিয়ম সামঞ্জস্য করুন ([#1510](https://github.com/scriptscat/scriptcat/pull/1510)) (by @cyfung1031)

### 🐛 বাগ ফিক্স

- 🐛 cron স্বয়ংক্রিয়ভাবে একটি অবৈধ টাইমজোন সনাক্ত করার কারণে সৃষ্ট নির্ধারিত-টাস্ক ত্রুটি এড়ান ([#1531](https://github.com/scriptscat/scriptcat/pull/1531)) (by @cyfung1031)
- 🐛 crontab উদাহরণে অনুপলব্ধ ডেমো API ফিক্স করুন ([#1542](https://github.com/scriptscat/scriptcat/pull/1542)) (by @cyfung1031)

### 🌐 স্থানীয়করণ

- 🌐 তুর্কি ভাষা যোগ করুন (by @azizaktas)

<a name="1.4.0-beta.4"></a>

## 1.4.0-beta.4 (2026-06-13)

এই রিলিজ Edge Android মোবাইল পপআপ লেআউট, প্রাথমিক লোডের সময় সাদা ব্যাকগ্রাউন্ড ফ্ল্যাশ এবং সাইট অ্যাক্সেস অনুমতি অনুপস্থিত থাকলে ক্রস-অরিজিন রিকোয়েস্ট ব্যর্থতা সমাধান করে; অবিশ্বস্ত YAML ব্যবহারকারী-কনফিগ কীগুলির মাধ্যমে ট্রিগার হওয়া একটি প্রোটোটাইপ দূষণ দুর্বলতা প্যাচ করে; স্ক্রিপ্ট রিসোর্স আপডেটিং এবং ZIP হ্যান্ডলিং রিফ্যাক্টর করে (jszip-এর পরিবর্তে JSZipp); এবং Firefox MV3 সামঞ্জস্য ও স্থানীয়করণ উন্নত করতে থাকে।

### 🧑‍💻 এডিটর

- ✨ Monaco কুইক ফিক্স এবং userscript মেটাডেটা হিন্ট উন্নত করুন ([#1461](https://github.com/scriptscat/scriptcat/pull/1461)) (by @cyfung1031)
- 🐛 এডিটর CSS লেআউট সমস্যা ফিক্স করুন ([#1460](https://github.com/scriptscat/scriptcat/pull/1460)) (by @cyfung1031)

### 🐛 বাগ ফিক্স

- 🐛 Edge Android মোবাইল পপআপ লেআউট ফিক্স করুন ([#686](https://github.com/scriptscat/scriptcat/issues/686)) ([#1507](https://github.com/scriptscat/scriptcat/pull/1507)) (by @CodFrm)
- 🐛 প্রাথমিক লোডের সময় সাদা ব্যাকগ্রাউন্ড ফ্ল্যাশ ফিক্স করুন ([#1497](https://github.com/scriptscat/scriptcat/issues/1497)) ([#1498](https://github.com/scriptscat/scriptcat/pull/1498)) (by @cyfung1031)
- 🐛 সাইট অ্যাক্সেস অনুমতি অনুপস্থিত থাকলে ক্রস-অরিজিন রিকোয়েস্ট ব্যর্থতা ফিক্স করুন ([#1477](https://github.com/scriptscat/scriptcat/pull/1477)) (by @cyfung1031)
- 🐛 মেসেজ কানেকশন (GM API / port) সঠিকভাবে পরিষ্কার না হওয়া ফিক্স করুন ([#1474](https://github.com/scriptscat/scriptcat/pull/1474)) (by @cyfung1031)
- 🐛 সার্চ অনুপস্থিত থাকলে @match টেমপ্লেট অসামঞ্জস্য ফিক্স করুন ([#1466](https://github.com/scriptscat/scriptcat/pull/1466)) (by @cyfung1031)
- 🐛 Tampermonkey আধা-স্যান্ডবক্সে পূর্বপুরুষ ক্লাস ইনহেরিটেন্স ফিক্স করতে `protoBaseDescs` যোগ করুন ([#1463](https://github.com/scriptscat/scriptcat/pull/1463)) (by @cyfung1031)

### 🔒 নিরাপত্তা উন্নতি

- 🔒 অবিশ্বস্ত YAML ব্যবহারকারী-কনফিগ কীগুলির মাধ্যমে প্রোটোটাইপ দূষণ ফিক্স করুন ([#1494](https://github.com/scriptscat/scriptcat/pull/1494)) (by @qdzsh)

### ♻️ রিফ্যাক্টরিং ও সামঞ্জস্য

- ♻️ স্ক্রিপ্ট রিসোর্স আপডেটিং (updateResource) এবং কনকারেন্সি নিয়ন্ত্রণ রিফ্যাক্টর করুন এবং রিসোর্স ক্যাশ সামঞ্জস্য পুনরুদ্ধার করুন ([#1193](https://github.com/scriptscat/scriptcat/pull/1193)) (by @cyfung1031)
- ♻️ ZIP হ্যান্ডলিং (ব্যাকআপ ইমপোর্ট/এক্সপোর্ট) এর জন্য jszip-এর পরিবর্তে JSZipp ব্যবহার করুন এবং অব্যবহৃত jszip ডিপেন্ডেন্সি সরান ([#1479](https://github.com/scriptscat/scriptcat/pull/1479)) (by @cyfung1031)
- ♻️ Firefox MV3 সামঞ্জস্য উন্নত করুন ([#1457](https://github.com/scriptscat/scriptcat/pull/1457), [#1480](https://github.com/scriptscat/scriptcat/pull/1480)) (by @cyfung1031)

### 🌐 স্থানীয়করণ

- 🌐 বহুভাষিক পরিভাষা অনুবাদ ফিক্স করুন (বিশেষত ঐতিহ্যবাহী চীনা উন্নত) এবং অনুবাদ পরিভাষা নির্দেশিকা যোগ করুন ([#1468](https://github.com/scriptscat/scriptcat/pull/1468)) (by @cyfung1031)

<a name="1.4.0-beta.3"></a>

## 1.4.0-beta.3 (2026-05-19)

beta.2-এ নির্ধারিত দিক অব্যাহত রেখে, এই রিলিজ ক্লাউড সিঙ্ক নির্ভরযোগ্যতা (OneDrive/Google Drive/WebDAV ত্রুটি হ্যান্ডলিং এবং আপলোড ফ্লো) আরও শক্ত করে, বেশ কয়েকটি ScriptEditor এবং GM xhr ব্যতিক্রম-হ্যান্ডলিং সমস্যা সমাধান করে এবং Ctrl+Shift+F ফরম্যাটিং এবং `@run-at context-menu`-এর প্রত্যাবর্তন যোগ করে।

### 🚀 প্রধান নতুন ফিচার

- ✨ এডিটর: কোড ফরম্যাট করার জন্য Ctrl+Shift+F ([#1415](https://github.com/scriptscat/scriptcat/pull/1415)) (by @cyfung1031)
- ✨ `@run-at context-menu` সমর্থন ফিরিয়ে আনুন ([#1442](https://github.com/scriptscat/scriptcat/pull/1442)) (by @cyfung1031)

### ⚡️ পারফরম্যান্স উন্নতি

- ⚡️ pushValue হ্যান্ডলিং অপ্টিমাইজ করুন ([#1403](https://github.com/scriptscat/scriptcat/pull/1403)) (by @cyfung1031)

### 🐛 বাগ ফিক্স

- 🐛 ক্লাউড সিঙ্ক ফিক্স: OneDrive শূন্য-বাইট আপলোড, Google Drive/OneDrive ত্রুটি নরমালাইজেশন, S3 কাস্টম মেটাডেটা modifiedDate ([#1405](https://github.com/scriptscat/scriptcat/pull/1405)) ([#1406](https://github.com/scriptscat/scriptcat/pull/1406)) ([#1408](https://github.com/scriptscat/scriptcat/pull/1408)) (by @cyfung1031)
- 🐛 WebDAV ভেরিফাই: লেখা প্রোব ড্রপ করুন যাতে অ-লেখযোগ্য রুট বিশিষ্ট Jianguoyun-এর মতো পরিষেবাগুলি আর ভেরিফিকেশনে ব্যর্থ না হয় ([#1445](https://github.com/scriptscat/scriptcat/pull/1445)) (by @CodFrm)
- 🐛 `GM_xmlhttpRequest` msgConn-এর জন্য অনুপস্থিত null হ্যান্ডলিং ফিক্স করুন ([#1433](https://github.com/scriptscat/scriptcat/pull/1433)) (by @cyfung1031)
- 🐛 GM xhr অস্বাভাবিক onloadend ভুলভাবে হ্যান্ডল করা ফিক্স করুন ([#1412](https://github.com/scriptscat/scriptcat/pull/1412)) (by @cyfung1031)
- 🐛 ScriptEditor তালিকা ডাইনামিক আপডেট এবং ডিসপ্লে সমস্যা ফিক্স করুন ([#1414](https://github.com/scriptscat/scriptcat/pull/1414)) (by @cyfung1031)
- 🐛 ScriptEditor টুলবারে এডিট-সম্পর্কিত অ্যাকশনের সাথে ইন্টারঅ্যাকশন সমস্যা ফিক্স করুন ([#1417](https://github.com/scriptscat/scriptcat/pull/1417)) (by @cyfung1031)
- 🐛 `chrome.downloads.download` কোড এবং Mock ফিক্স করুন ([#1410](https://github.com/scriptscat/scriptcat/pull/1410)) (by @cyfung1031)
- 🐛 src/pages/install/App.tsx-এ closeWindow ফিক্স করুন ([#1435](https://github.com/scriptscat/scriptcat/pull/1435)) (by @cyfung1031)
- 🐛 ব্রাউজার সোয়াইপ-নেভিগেশন ট্রিগার করা থেকে অভ্যন্তরীণ স্ক্রলিং প্রতিরোধ করতে রুট লেআউটে হুইল ইভেন্ট সীমানা যোগ করুন ([#1431](https://github.com/scriptscat/scriptcat/pull/1431)) (by @cyfung1031)
- 🐛 সমকালীন প্রাথমিক auth রিকোয়েস্ট ডিডুপ করুন ([#1437](https://github.com/scriptscat/scriptcat/pull/1437)) (by @cyfung1031)
- 🐛 ডিটেকশন একত্রিত ও উন্নত করতে encoding.ts রিফ্যাক্টর করুন ([#1426](https://github.com/scriptscat/scriptcat/pull/1426)) (by @cyfung1031)
- 🐛 মেনু দৃশ্যমান হওয়ার জন্য Tooltip যোগ করুন ([#1429](https://github.com/scriptscat/scriptcat/pull/1429)) (by @cyfung1031)
- 🐛 overscroll-behavior ফিক্স ([#1413](https://github.com/scriptscat/scriptcat/pull/1413)) (by @cyfung1031)
- 🐛 আপডেট সমর্থন করে না এমন স্ক্রিপ্টগুলির জন্য আপডেট বাটন দেখানো বন্ধ করুন ([#1418](https://github.com/scriptscat/scriptcat/pull/1418)) (by @cyfung1031)
- 🐛 অনুপস্থিত i18n কী রেফারেন্স ফিক্স করুন ([#1422](https://github.com/scriptscat/scriptcat/pull/1422)) (by @cyfung1031)
- 🐛 sandbox createContext-এ `frames` যোগ করুন, [#1427](https://github.com/scriptscat/scriptcat/issues/1427) ফিক্স করুন ([#1428](https://github.com/scriptscat/scriptcat/pull/1428)) (by @cyfung1031)
- 🐛 অনুপস্থিত isContextMenu ফিল্ড থেকে সৃষ্ট SkillScript কম্পাইলেশন ত্রুটি ফিক্স করুন (5fdc8e39) (by @CodFrm)

### ♻️ রিফ্যাক্টরিং ও সামঞ্জস্য

- ♻️ ইনস্টল রিসোর্স `chrome.storage.local` tempStorage-এ সরান; কোড অংশ `OPFS/temp_install_codes`-এ থাকে ([#1318](https://github.com/scriptscat/scriptcat/pull/1318)) (by @cyfung1031)
- 🐛 পাথ-জয়েনিং লজিক দ্বারা সৃষ্ট ডাবল-স্ল্যাশ ফিক্স করুন ([#1432](https://github.com/scriptscat/scriptcat/pull/1432)) (by @tomaioo)

### 🌐 আন্তর্জাতিকীকরণ

- 🌐 অন্যান্য ভাষার জন্য সহচর ফিক্স সহ জাপানি UI অনুবাদ উন্নত করুন ([#1419](https://github.com/scriptscat/scriptcat/pull/1419)) ([#1421](https://github.com/scriptscat/scriptcat/pull/1421)) (by @GoodLight999, @cyfung1031)

<a name="1.4.0-beta.2"></a>

## 1.4.0-beta.2 (2026-05-06)

এই আপডেট **ব্যাপক ক্লাউড স্টোরেজ সিঙ্ক নির্ভরযোগ্যতা শক্তিশালীকরণ** (Dropbox/WebDAV/Google Drive/OneDrive ব্যাকএন্ডের জন্য auth, পাথ হ্যান্ডলিং এবং রিট্রাই ফিক্স), **Agent টুল-কল স্থিতিশীলতা উন্নতি** এবং দীর্ঘ-চলমান মেমরি লিক সহ বিপুল সংখ্যক UI এবং স্ক্রিপ্ট রানটাইম বাগ ফিক্সের উপর ফোকাস করে।

### ⚡️ পারফরম্যান্স উন্নতি

- ⚡️ গ্লোবাল DNR নিয়মের উপর Baidu ফাইলসিস্টেম নির্ভরতা সরান; পরিবর্তে প্রতি-রিকোয়েস্ট কুকি নিষ্ক্রিয় করুন ([#1377](https://github.com/scriptscat/scriptcat/pull/1377)) (by @cyfung1031)
- ⚡️ স্ক্রিপ্ট ফেচ করার জন্য মাল্টি-প্ল্যাটফর্ম সার্চ ইঞ্জিন নির্বাচন অপ্টিমাইজ করুন ([#1379](https://github.com/scriptscat/scriptcat/pull/1379)) (by @cyfung1031)
- ⚡️ ঝাঁকুনি এড়াতে ইনস্টল পেজ loadingStatus-এর জন্য monospace ব্যবহার করুন ([#1381](https://github.com/scriptscat/scriptcat/pull/1381)) (by @cyfung1031)
- ⚡️ Agent প্রম্পট নির্ভরযোগ্যতা শক্তিশালী করুন — ফলাফল যাচাই, বাজেট শব্দার্থবিদ্যা, নিরাপত্তা সীমানা ([#1354](https://github.com/scriptscat/scriptcat/pull/1354)) (by @cyfung1031)

### 🐛 বাগ ফিক্স

- 🚑 ScriptCat দীর্ঘ সময় ধরে চললে সম্ভাব্য মেমরি লিক ফিক্স করুন ([#1401](https://github.com/scriptscat/scriptcat/pull/1401)) (by @cyfung1031)
- 🐛 ব্যাকএন্ড জুড়ে ক্লাউড সিঙ্ক নির্ভরযোগ্যতা শক্ত করুন (Dropbox/WebDAV/Google Drive/OneDrive auth, পাথ হ্যান্ডলিং, রিট্রাই লজিক) ([#1374](https://github.com/scriptscat/scriptcat/pull/1374)) ([#1375](https://github.com/scriptscat/scriptcat/pull/1375)) ([#1376](https://github.com/scriptscat/scriptcat/pull/1376)) ([#1390](https://github.com/scriptscat/scriptcat/pull/1390)) ([#1391](https://github.com/scriptscat/scriptcat/pull/1391)) ([#1392](https://github.com/scriptscat/scriptcat/pull/1392)) ([#1393](https://github.com/scriptscat/scriptcat/pull/1393)) ([#1394](https://github.com/scriptscat/scriptcat/pull/1394)) ([#1395](https://github.com/scriptscat/scriptcat/pull/1395)) (by @cyfung1031)
- 🐛 isIncognito (early-start & bgScript), userAgent এবং bgScript-এর জন্য run-in দিয়ে extensionEnv সঠিকভাবে পপুলেট করুন ([#1368](https://github.com/scriptscat/scriptcat/pull/1368)) (by @cyfung1031)
- 🐛 অনবোর্ডিং গাইড বাটন ক্লিপ হওয়া ফিক্স করুন [#1396](https://github.com/scriptscat/scriptcat/issues/1396) ([#1398](https://github.com/scriptscat/scriptcat/pull/1398)) (by @cyfung1031)
- 🐛 স্ক্রিপ্ট ম্যানেজমেন্ট পেজে টুলটিপ অস্পষ্টতা ফিক্স করুন [#1386](https://github.com/scriptscat/scriptcat/issues/1386) ([#1387](https://github.com/scriptscat/scriptcat/pull/1387)) (by @Xdy1579883916)
- 🐛 কার্ড মোডে Sidebar লেআউট সাইজিং সমস্যা সৃষ্টি করা ফিক্স করুন [#1179](https://github.com/scriptscat/scriptcat/issues/1179) ([#1373](https://github.com/scriptscat/scriptcat/pull/1373)) (by @cyfung1031)
- 🐛 লোকাল ফাইল ড্র্যাগ-অ্যান্ড-ড্রপ ইনস্টলের জন্য ভুল অরিজিন ফিক্স করুন ([#1371](https://github.com/scriptscat/scriptcat/pull/1371)) (by @cyfung1031)
- 🐛 ভাষা-সুইচ মেসেজিং ফিক্স করুন ([#1380](https://github.com/scriptscat/scriptcat/pull/1380)) (by @cyfung1031)
- 🐛 লগ ডিসপ্লে UI উন্নত করুন ([#1372](https://github.com/scriptscat/scriptcat/pull/1372)) (by @cyfung1031)
- 🐛 সমকালীন xhr-এর সাথে সেশন রুল কাউন্ট সমস্যা সমাধান করুন ([#1353](https://github.com/scriptscat/scriptcat/pull/1353)) (by @cyfung1031)
- 🐛 UserConfigPanel CSS ফিক্স করুন ([#1361](https://github.com/scriptscat/scriptcat/pull/1361)) (by @cyfung1031)
- 🐛 create_context-এ খালি অবজেক্টের জন্য Object.create(null) ব্যবহার করুন ([#1397](https://github.com/scriptscat/scriptcat/pull/1397)) (by @cyfung1031)
- 🐛 Agent স্ট্রিমিং tool_call আর্গুমেন্ট কনক্যাটেনেশন ত্রুটি এবং সমান্তরাল tool-call ক্রস-টক ফিক্স করুন ([#1355](https://github.com/scriptscat/scriptcat/pull/1355)) (by @cyfung1031)
- 🐛 রিজনিং মডেলগুলির সাথে Agent সামঞ্জস্য ফিক্স করুন ([#1357](https://github.com/scriptscat/scriptcat/pull/1357)) (by @cyfung1031)
- 🐛 Agent web_fetch/web_search চুক্তি অসামঞ্জস্য ফিক্স করুন (7bbd6d18) (by @CodFrm)
- 🐛 Agent Skill স্ক্রিপ্ট রানটাইমে অনুপস্থিত এক্সটেনশন এনভি ফিক্স করুন (e143c4a7) (by @CodFrm)

### 🔒 নিরাপত্তা উন্নতি

- 🔒 সমস্ত npm দুর্বলতা ফিক্স করুন ([#1350](https://github.com/scriptscat/scriptcat/pull/1350)) ([#1364](https://github.com/scriptscat/scriptcat/pull/1364)) ([#1365](https://github.com/scriptscat/scriptcat/pull/1365)) (by @cyfung1031)

### অন্যান্য

- 🔥 Crowdin এবং ach-UG সিউডো-লোকেল কনটেন্ট সরান ([#1385](https://github.com/scriptscat/scriptcat/pull/1385)) (by @CodFrm)

<a name="1.4.0-beta.1"></a>

## 1.4.0-beta.1 (2026-04-07)

এই রিলিজের হাইলাইট **ScriptCat AI Agent** — একটি বিল্ট-ইন AI-চালিত এজেন্ট সিস্টেম যা কথোপকথনমূলক মিথস্ক্রিয়ার মাধ্যমে userscript ইকোসিস্টেম থেকে টুল আহ্বান করতে পারে। এই আপডেটটি `@unwrap` ট্যাগ সমর্থন, `window.onurlchange` ইভেন্ট, এডিটর মেনু উন্নতি এবং অসংখ্য বাগ ফিক্সও যোগ করে।

### 🚀 প্রধান নতুন ফিচার

- 💥 ScriptCat AI Agent — কথোপকথনমূলক মিথস্ক্রিয়া, টুল কলিং, Skill সিস্টেম, MCP প্রোটোকল সমর্থন এবং আরও অনেক কিছু সহ AI-চালিত বুদ্ধিমান এজেন্ট সিস্টেম ([#1324](https://github.com/scriptscat/scriptcat/pull/1324)) (by @CodFrm)
- ✨ `@unwrap` মেটাডেটা ট্যাগ সমর্থন করুন ([#1213](https://github.com/scriptscat/scriptcat/pull/1213)) (by @cyfung1031)
- ✨ Navigation API ব্যবহার করে TM-এর `window.onurlchange` বাস্তবায়ন করুন ([#1315](https://github.com/scriptscat/scriptcat/pull/1315)) (by @cyfung1031)

### 🧑‍💻 এডিটর

- ✨ এডিটর মেনু যোগ করুন (খুঁজুন, প্রতিস্থাপন, পূর্বাবস্থা ইত্যাদি) ([#1303](https://github.com/scriptscat/scriptcat/pull/1303)) (by @CodFrm)
- 🐛 Ctrl-F / Ctrl-H শর্টকাট ফিক্স করুন ([#1312](https://github.com/scriptscat/scriptcat/pull/1312)) (by @cyfung1031)
- 🐛 ESLint অটো-ফিক্স কাজ না করা ফিক্স করুন [#1079](https://github.com/scriptscat/scriptcat/issues/1079) ([#1184](https://github.com/scriptscat/scriptcat/pull/1184)) (by @cyfung1031)
- 🐛 ফরম্যাটিং ত্রুটি সঠিকভাবে প্রদর্শন করুন ([#1310](https://github.com/scriptscat/scriptcat/pull/1310)) (by @cyfung1031)
- 🐛 কোড এডিটর টুলটিপ সমস্যা ফিক্স করুন ([#1301](https://github.com/scriptscat/scriptcat/pull/1301)) (by @cyfung1031)

### ✨ ফিচার উন্নতি

- ✨ স্ক্রিপ্ট সার্চের জন্য মাল্টি-প্ল্যাটফর্ম সার্চ ইঞ্জিন নির্বাচন সমর্থন করুন ([#1295](https://github.com/scriptscat/scriptcat/pull/1295)) (by @CodFrm)
- ✨ আরও আইকন সার্ভিস প্রোভাইডার যোগ করুন ([#1333](https://github.com/scriptscat/scriptcat/pull/1333)) (by @cyfung1031)
- ✨ স্ক্রিপ্ট তালিকার শেষ আপডেট কলামে আপডেট চেক আইকন যোগ করুন ([#1304](https://github.com/scriptscat/scriptcat/pull/1304)) (by @CodFrm)
- ✨ এডিট কনফ্লিক্ট এবং স্ক্রিপ্ট নাম কনফ্লিক্ট হ্যান্ডলিং উন্নত করুন ([#1223](https://github.com/scriptscat/scriptcat/pull/1223)) (by @cyfung1031)

### 🐛 বাগ ফিক্স

- 🐛 cron এক্সপ্রেশন ত্রুটি পুরো পেজ ক্র্যাশ করা ফিক্স করুন ([#1327](https://github.com/scriptscat/scriptcat/pull/1327)) (by @cyfung1031)
- 🐛 স্ক্রিপ্ট ইনস্টলেশন Error 406 ট্রিগার করা ফিক্স করুন ([#1306](https://github.com/scriptscat/scriptcat/pull/1306)) (by @cyfung1031)
- 🐛 WebDAV কুকিজ auth কনফ্লিক্ট এবং authType সমর্থন ফিক্স করুন ([#1308](https://github.com/scriptscat/scriptcat/pull/1308)) (by @CodFrm)
- 🐛 ক্রস-ডিভাইস সিঙ্ক এড়াতে ডিভাইস-নির্দিষ্ট সেটিংসের জন্য chrome.storage.local ব্যবহার করুন ([#1309](https://github.com/scriptscat/scriptcat/pull/1309)) (by @CodFrm)
- 🐛 সাবস্ক্রিপশন স্ক্রিপ্ট নীরব আপডেট এবং connect অনুমতি লজিক ফিক্স করুন ([#1201](https://github.com/scriptscat/scriptcat/pull/1201)) (by @cyfung1031)
- 🐛 একটি স্ক্রিপ্ট টাইমআউট হলে ব্যাচ স্ক্রিপ্ট আপডেট চেক সম্পূর্ণরূপে ব্যর্থ হওয়া ফিক্স করুন ([#1265](https://github.com/scriptscat/scriptcat/pull/1265)) (by @cyfung1031)
- 🐛 লগার পেজ কুয়েরি বাটন সময় রিফ্রেশ না করা ফিক্স করুন ([#1294](https://github.com/scriptscat/scriptcat/pull/1294)) (by @CodFrm)
- 🐛 লগার পেজ ডেট পিকার পপআপ ক্লিপ হওয়া ফিক্স করুন ([#1292](https://github.com/scriptscat/scriptcat/pull/1292)) (by @cyfung1031)
- 🐛 কোনো ক্লাউড ড্রাইভ বাইন্ড না থাকলে আনবাইন্ড বাটন দেখানো ফিক্স করুন ([#1291](https://github.com/scriptscat/scriptcat/pull/1291)) (by @CodFrm)
- 🐛 ScriptEditor স্ক্রিপ্ট তালিকা লাইট থিম ডিসপ্লে সমস্যা ফিক্স করুন ([#1288](https://github.com/scriptscat/scriptcat/pull/1288)) (by @CodFrm)
- 🐛 পপআপ অস্পষ্ট হওয়া ফিক্স করুন ([#1290](https://github.com/scriptscat/scriptcat/pull/1290)) (by @cyfung1031)

## 1.4.0-beta (2026-03-13)

### 🐛 বাগ ফিক্স

- 🚑 অন্যান্য এক্সটেনশন chrome.runtime ইনজেক্ট করার কারণে সৃষ্ট পরিবেশ সনাক্তকরণ ত্রুটি ফিক্স করুন [#1280](https://github.com/scriptscat/scriptcat/issues/1280) ([#1281](https://github.com/scriptscat/scriptcat/pull/1281)) (by @CodFrm)
- 🐛 ScriptEditor সমস্যা ফিক্স ও অপ্টিমাইজ করুন ([#1258](https://github.com/scriptscat/scriptcat/pull/1258)) (by @cyfung1031)
- 🐛 ইনকগনিটো উইন্ডো অনুমতি চেক কনফ্লিক্টের কারণে বারবার রিস্টার্ট ফিক্স করুন (6c308f60) (by @CodFrm)
- 🐛 নিশ্চিতকরণ পেজ সমস্যা ফিক্স করুন ([#1275](https://github.com/scriptscat/scriptcat/pull/1275)) (by @cyfung1031)
- 🐛 include *?* এক্সপ্রেশন হ্যান্ডলিং সমস্যা ফিক্স করুন [#1271](https://github.com/scriptscat/scriptcat/issues/1271) ([#1272](https://github.com/scriptscat/scriptcat/pull/1272)) (by @CodFrm)
- 🐛 স্ক্রিপ্ট সেটিংস - অনুমতি ব্যবস্থাপনা নিয়ন্ত্রণ কাজ না করা ফিক্স করুন ([#1267](https://github.com/scriptscat/scriptcat/pull/1267)) (by @CodFrm)

### 🔒 নিরাপত্তা উন্নতি

- 🔒 ঘোষণা বিজ্ঞপ্তি HTML কনটেন্ট স্যানিটাইজ করতে DOMPurify ব্যবহার করুন ([#1274](https://github.com/scriptscat/scriptcat/pull/1274)) (by @CodFrm)

### অন্যান্য

- ✅ Playwright E2E টেস্ট এবং GM API ফাংশনাল টেস্ট যোগ করুন ([#1283](https://github.com/scriptscat/scriptcat/pull/1283)) (by @CodFrm)
- 📄 docs: Chrome Web Store URL নতুন ডোমেনে আপডেট করুন ([#1279](https://github.com/scriptscat/scriptcat/pull/1279)) (by @theluckystrike)

## 1.3.0-beta.4 (2026-02-19)

### যোগ করা হয়েছে

- ✨ Amazon S3 স্টোরেজ যোগ করুন [#1146](https://github.com/scriptscat/scriptcat/issues/1146) ([#1189](https://github.com/scriptscat/scriptcat/pull/1189)) (by @CodFrm)
- ✨ লুকানো এডিটর সাইডবার অবস্থান সামঞ্জস্য করুন [#1185](https://github.com/scriptscat/scriptcat/issues/1185) ([#1254](https://github.com/scriptscat/scriptcat/pull/1254)) (by @CodFrm)
- ✨ নেই বা খালি মান সহ `@version` গ্রহণ করুন ([#1216](https://github.com/scriptscat/scriptcat/pull/1216)) (by @cyfung1031)

### ফিক্সড

- 🐛 পরিবর্তনের লগ বিজ্ঞপ্তি পেজ খোলার সমস্যা ফিক্স করুন ([#1266](https://github.com/scriptscat/scriptcat/pull/1266)) (by @CodFrm)
- 🐛 unregister সঠিকভাবে কার্যকর না হওয়া ফিক্স করুন ([#1231](https://github.com/scriptscat/scriptcat/pull/1231)) (by @cyfung1031)
- 🐛 GM_addElement সমস্যা ফিক্স করুন, অপারেশন কনটেন্ট পরিবেশে সরান ([#1233](https://github.com/scriptscat/scriptcat/pull/1233)) (by @cyfung1031)
- 🐛 DraggableEntry রিফ্যাক্টর করুন, কার্ড উচ্চতা প্রান্তিককরণ ফিক্স করুন ([#1245](https://github.com/scriptscat/scriptcat/pull/1245)) (by @cyfung1031)
- 🐛 পপআপ কনটেন্ট স্ক্রিন স্ক্রল অনুসরণ করা ফিক্স করুন ([#1263](https://github.com/scriptscat/scriptcat/pull/1263)) (by @cyfung1031) ([#1259](https://github.com/scriptscat/scriptcat/pull/1259)) (by @cyfung1031)
- 🐛 মেমরি লিক এবং অবজেক্ট প্রপার্টি এক্সপোজার ফিক্স করুন এবং TTP XML পার্সিং null-এ ফ্যালব্যাক ([#1242](https://github.com/scriptscat/scriptcat/pull/1242)) (by @cyfung1031) ([#1260](https://github.com/scriptscat/scriptcat/pull/1260)) (by @cyfung1031)
- 🐛 `GM_download`-এ `conflictAction` প্যারামিটার যোগ করুন ([#1250](https://github.com/scriptscat/scriptcat/pull/1250)) (by @cyfung1031)
- 🐛 ইনস্টল লিংক পার্সিং ব্যর্থতা ফিক্স করুন [#1235](https://github.com/scriptscat/scriptcat/issues/1235) ([#1238](https://github.com/scriptscat/scriptcat/pull/1238)) (by @cyfung1031)
- 🐛 ড্র্যাগ কম্পোনেন্টের কারণে focusin/focusout ল্যাগ ফিক্স করুন [#1224](https://github.com/scriptscat/scriptcat/issues/1224) ([#1243](https://github.com/scriptscat/scriptcat/pull/1243)) (by @CodFrm)
- 🐛 installScript-এ subscribeUrl অরিজিন-সম্পর্কিত অংশ ফিক্স করুন ([#1218](https://github.com/scriptscat/scriptcat/pull/1218)) (by @cyfung1031)
- 🐛 ScriptCard অ্যানিমেশন সমস্যা ফিক্স করুন ([#1234](https://github.com/scriptscat/scriptcat/pull/1234)) (by @cyfung1031)
- 🐛 hide_sidebar-কে show_main_sidebar & hide_main_sidebar ফিক্স করুন ([#1225](https://github.com/scriptscat/scriptcat/pull/1225)) (by @cyfung1031)
- 🐛 বাহ্যিক এক্সটেনশন API কাজ না করা ফিক্স করুন ([#1217](https://github.com/scriptscat/scriptcat/pull/1217)) (by @cyfung1031)
- 🐛 ডাউনলোড ফাইলনাম ফোল্ডার সমর্থন না করা ফিক্স করুন ([#1203](https://github.com/scriptscat/scriptcat/pull/1203)) (by @cyfung1031)

<a name="1.3.0-beta.3"></a>

## 1.3.0-beta.3 (2026-02-07)

### যোগ করা হয়েছে

- ✨ Cron-সম্পর্কিত পরিবর্তন: বাগ ফিক্স, i18n, once এক্সপ্রেশন উন্নতি, cron লাইব্রেরি আপগ্রেড ([#1126](https://github.com/scriptscat/scriptcat/issues/1126)) (by @cyfung1031)

### পরিবর্তিত হয়েছে

- ♻️ যোগাযোগ প্রক্রিয়া রিফ্যাক্টর করুন: storage.local ব্রডকাস্ট + Firefox MV3 স্ক্রিপ্টিং কমপ্লায়েন্ট + অ-ট্রেসেবল ডাইনামিক সিঙ্ক MessageFlag গ্রহণ করুন ([#1067](https://github.com/scriptscat/scriptcat/issues/1067)) (by @cyfung1031)
- ⚡ টেক্সট ডিকোডিং উন্নত করুন ([#1166](https://github.com/scriptscat/scriptcat/issues/1166)) (by @cyfung1031)
- 🎨 কোড সমন্বয় (ছোট) - `isContent` ভেরিয়েবল অবস্থান ([#1171](https://github.com/scriptscat/scriptcat/issues/1171)) (by @cyfung1031)
- 🎨 কোড সমন্বয় - Value-সম্পর্কিত ক্লাস ও ভেরিয়েবল নাম ([#1175](https://github.com/scriptscat/scriptcat/issues/1175)) (by @cyfung1031)
- 🎨 কোড সমন্বয় (ছোট) - ScriptClient ([#1172](https://github.com/scriptscat/scriptcat/issues/1172)) (by @cyfung1031)
- 🎨 (TypeScript) কাস্টম ক্লাস নাম সংশোধন: File -> FileInfo ([#1174](https://github.com/scriptscat/scriptcat/issues/1174)) (by @cyfung1031)
- ⬆️ rspack-এর `jsc.target`-কে es2020 ফিক্স করুন / মূল সংস্করণ আপগ্রেড করুন ([#1186](https://github.com/scriptscat/scriptcat/issues/1186)) (by @cyfung1031)
- 🎨 ক্যারেক্টার সেট সনাক্তকরণ উন্নত করুন ([#1140](https://github.com/scriptscat/scriptcat/issues/1140)) (by @cyfung1031)
- 🎨 পপআপ উইন্ডো ডিসপ্লে সময় আপডেট করুন ([#1155](https://github.com/scriptscat/scriptcat/issues/1155)) (by @cyfung1031)
- 🎨 locales.ts ছোট সংশোধন ([#1154](https://github.com/scriptscat/scriptcat/issues/1154)) (by @cyfung1031)
- 🎨 লোগো 128x128 ([#1176](https://github.com/scriptscat/scriptcat/issues/1176)) (by @cyfung1031)
- 🎨 ইমেজ প্রসেসিং ([#1177](https://github.com/scriptscat/scriptcat/issues/1177)) (by @cyfung1031)

### সরানো হয়েছে

- 🔥 package.json: pako ড্রপ করুন ([#1188](https://github.com/scriptscat/scriptcat/issues/1188)) (by @cyfung1031)

### ফিক্সড

- 🐛 স্ক্রিপ্ট এনকোডিং সমস্যা হ্যান্ডল করুন [#1115](https://github.com/scriptscat/scriptcat/issues/1115) ([#1138](https://github.com/scriptscat/scriptcat/issues/1138)) (by @CodFrm)
- 🐛 মান রেফারেন্স সমস্যা হ্যান্ডল করুন [#1141](https://github.com/scriptscat/scriptcat/issues/1141) ([#1147](https://github.com/scriptscat/scriptcat/issues/1147)) (by @CodFrm)
- 🐛 বাটন রেন্ডারিং লজিক ফিক্স করুন, রেন্ডার ফেজ পার্শ্ব-প্রতিক্রিয়া এড়ান, JSX কন্ডিশনাল রেন্ডারিং এবং নামযুক্ত স্লট ব্যবহার করুন ([#1153](https://github.com/scriptscat/scriptcat/issues/1153)) (by @cyfung1031)
- 🐛 FileSystemObserver ক্রমাগত মনিটর করতে অক্ষম হওয়া ফিক্স করুন ([#1160](https://github.com/scriptscat/scriptcat/issues/1160)) (by @cyfung1031)
- 🐛 fix: TM সামঞ্জস্য `@match www.website.com/*` ([#1165](https://github.com/scriptscat/scriptcat/issues/1165)) (by @cyfung1031)
- 🐛 GM API async ঘোষণা ফিক্স করুন, সঠিকভাবে Promise ফেরত দিন ([#1169](https://github.com/scriptscat/scriptcat/issues/1169)) (by @cyfung1031)
- 🐛 content.js-এ UserAgentData অনুপস্থিত হওয়া ফিক্স করুন ([#1183](https://github.com/scriptscat/scriptcat/issues/1183)) (by @cyfung1031)
- 🐛 1.2.5 structuredClone ত্রুটি ফিক্স করুন ([#1192](https://github.com/scriptscat/scriptcat/issues/1192)) (by @cyfung1031)
- 🐛 পরিবর্তন 9343f2d6e49aec78d208d0e3ba3d96ec2a4d5a1c ফিক্স করুন ([#1195](https://github.com/scriptscat/scriptcat/issues/1195)) (by @cyfung1031)
- 🐛 grant সমস্যা ফিক্স করুন ([#1199](https://github.com/scriptscat/scriptcat/issues/1199)) (by @CodFrm)

<a name="1.3.0-beta.2"></a>

## 1.3.0-beta.2 (2026-01-07)

### যোগ করা হয়েছে

- ✨ সিঙ্ক্রোনাস মুছে ফেলা এখন ডিফল্টভাবে বন্ধ ([#958](https://github.com/scriptscat/scriptcat/issues/958)) [[9c4c7dc](https://github.com/scriptscat/scriptcat/commit/9c4c7dc411357746db43a306d97ac41a71f2b49c)] (by @cyfung1031)
- ✨ এডিটর এখন GM.\* সমর্থন করে ([#1129](https://github.com/scriptscat/scriptcat/issues/1129)) [[bea0192](https://github.com/scriptscat/scriptcat/commit/bea0192c6cc50eff2ed4e1cc5dcc25f36bbe10e7)] (by @cyfung1031)

### পরিবর্তিত হয়েছে

- ♻️ পরিবর্তনের লগ পেজ খোলার লজিক অপ্টিমাইজ করুন [#1110](https://github.com/scriptscat/scriptcat/issues/1110) [[d3ffedc](https://github.com/scriptscat/scriptcat/commit/d3ffedcffe752ca548f87f1640072fcd871b8604)] (by @CodFrm)

### ফিক্সড

- 🐛 স্ক্রিপ্ট আইকন ডিসপ্লে ফিক্স করুন [#1052](https://github.com/scriptscat/scriptcat/issues/1052) ([#1104](https://github.com/scriptscat/scriptcat/issues/1104)) [[2e5c601](https://github.com/scriptscat/scriptcat/commit/2e5c601274fa27aa67b49ef9d352e3a1c3975979)] (by @CodFrm)
- 🐛 scriptcat.d.tpl & টাইপ সংশোধন ফিক্স করুন ([#1130](https://github.com/scriptscat/scriptcat/issues/1130)) [[dd22ef5](https://github.com/scriptscat/scriptcat/commit/dd22ef544684d69e24a7aae098cb05cbab03daa8)] (by @cyfung1031)
- 🐛 ক্লাউড সিঙ্ক সমস্যা ফিক্স করুন ([#1133](https://github.com/scriptscat/scriptcat/issues/1133)) [[a9383d2](https://github.com/scriptscat/scriptcat/commit/a9383d2012eb3953dc33c8886ce3891f404fa100)] (by @CodFrm)
- 🐛 `GM_addElement("tagName")` ত্রুটি ফিক্স করুন ([#1120](https://github.com/scriptscat/scriptcat/issues/1120)) [[ad19de5](https://github.com/scriptscat/scriptcat/commit/ad19de5c1793c8c079bedbf1b11c7c2ae27a469e)] (by @cyfung1031)
- 🐛 ক্লিনআপ লজিক সরান এবং checkuserscript লজিক অপ্টিমাইজ করুন ([#1113](https://github.com/scriptscat/scriptcat/issues/1113)) [[e635911](https://github.com/scriptscat/scriptcat/commit/e635911a3c11c3cb8acd1cfd507cb777e5ee7236)] (by @CodFrm)

### বিবিধ

- 🏷️ TypeScript সংশোধন ([#1127](https://github.com/scriptscat/scriptcat/issues/1127)) [[b455724](https://github.com/scriptscat/scriptcat/commit/b4557244191018c18d5ce8ea8e8627bcfb7f7cdd)] (by @cyfung1031)
- 📝 অতিরিক্ত উদাহরণ কমেন্ট ([#1131](https://github.com/scriptscat/scriptcat/issues/1131)) [[292549e](https://github.com/scriptscat/scriptcat/commit/292549ed0f65952fe9f269aace23eefc7d6a3a0f)] (by @cyfung1031)

<a name="1.3.0-beta.1"></a>

## 1.3.0-beta.1 (2025-12-21)

### যোগ করা হয়েছে

- ✨ Monaco Editor সেটিংস অপ্টিমাইজ করুন, `/* global xxx */` ফিক্স যোগ করুন ([#1012](https://github.com/scriptscat/scriptcat/issues/1012)) [[b1a738d](https://github.com/scriptscat/scriptcat/commit/b1a738d98b5e852993da322d56dbfa20f68d20e3)] (by @cyfung1031)

### পরিবর্তিত হয়েছে

- ⚡ মেটাডেটা chrome.storage.session থেকে সরান ([#1027](https://github.com/scriptscat/scriptcat/issues/1027)) [[9c81f6c](https://github.com/scriptscat/scriptcat/commit/9c81f6c42b087411669adef35df30714e184ee93)] (by @cyfung1031)
- ⚡ পরবর্তী রান সময় ডিসপ্লে অপ্টিমাইজ করুন [#1093](https://github.com/scriptscat/scriptcat/issues/1093) [[324ce51](https://github.com/scriptscat/scriptcat/commit/324ce515c84699ca8d3bf1ee447fc6ef0656ae0d)] (by @CodFrm)

### ফিক্সড

- 🐛 পপআপ পেজ সমস্যা ফিক্স করুন ([#1100](https://github.com/scriptscat/scriptcat/issues/1100)) [[9c67e4a](https://github.com/scriptscat/scriptcat/commit/9c67e4a2c609f8c1ef82c493bb1ed68da6396d2e)] (by @CodFrm)
- 🐛 টাইপ ত্রুটি ফিক্স করুন [[f5a73c7](https://github.com/scriptscat/scriptcat/commit/f5a73c71649621e519b32630ae7717411732aa50)] (by @CodFrm)
- 🐛 ফুল-উইডথ অক্ষরযুক্ত ইংরেজি লগ সমস্যা ফিক্স করুন ([#1095](https://github.com/scriptscat/scriptcat/issues/1095)) [[a68b100](https://github.com/scriptscat/scriptcat/commit/a68b10048cb01a8e26fe8d524102bfb23ed4e179)] (by @cyfung1031)
- 🐛 CSS কনফ্লিক্ট সমাধান করতে UnoCSS প্রিফিক্স যোগ করুন, CSS লেআউট ফিক্স করুন ([#1013](https://github.com/scriptscat/scriptcat/issues/1013)) [[723e64c](https://github.com/scriptscat/scriptcat/commit/723e64cc0c23763dfed322e907c0a960c4f9060e)] (by @cyfung1031)
- 🐛 প্রাথমিক স্ক্রিপ্ট URL ম্যাচিং সমস্যা ফিক্স করুন ([#1096](https://github.com/scriptscat/scriptcat/issues/1096)) [[a77effb](https://github.com/scriptscat/scriptcat/commit/a77effbab5ab4d1752065ef943d9c050ff99c066)] (by @CodFrm)
- 🐛 আপডেট পপআপ উইন্ডো খুব অল্প সময়ের জন্য প্রদর্শিত হওয়া ফিক্স করুন ([#1088](https://github.com/scriptscat/scriptcat/issues/1088)) [[b2b2d5c](https://github.com/scriptscat/scriptcat/commit/b2b2d5c41ff70ee5430f7d8d156f480ac8fc3a1a)] (by @cyfung1031)
- 🐛 ব্যবহারকারী স্ক্রিপ্ট বিজ্ঞপ্তি সক্রিয় থাকলে অস্বাভাবিক ডিসপ্লে সমস্যা ফিক্স করুন ([#1086](https://github.com/scriptscat/scriptcat/issues/1086)) ([959c4db](https://github.com/scriptscat/scriptcat/commit/959c4dbed92f7bfe22a2f8ebb775c4189b5ff076))
- 🐛 responseHeaders: `TM সামঞ্জস্য: \r\n` ([#1085](https://github.com/scriptscat/scriptcat/issues/1085)) [[15232c8](https://github.com/scriptscat/scriptcat/commit/15232c8543d93abfdafa1353d39d8a15d1dc385f)] (by @cyfung1031)
- 🐛 GM xhr সমস্যা ফিক্স করুন ([#1082](https://github.com/scriptscat/scriptcat/issues/1082)) [[3d987c3](https://github.com/scriptscat/scriptcat/commit/3d987c300242a3c765146359c35ecd6d998f792c)] (by @CodFrm)
- 🐛 ঘন ঘন ব্যাকগ্রাউন্ড সিঙ্ক সমস্যা ফিক্স করুন ([#1076](https://github.com/scriptscat/scriptcat/issues/1076)) [[45dc39b](https://github.com/scriptscat/scriptcat/commit/45dc39baa0f3326cf12e97312ab632dc46ba40f2)] (by @CodFrm)
- 🐛 বিশেষ ট্যাব হ্যান্ডলিং সমস্যা ফিক্স করুন [#1066](https://github.com/scriptscat/scriptcat/issues/1066) ([50904fb](https://github.com/scriptscat/scriptcat/commit/50904fb46efdea10fd57677bc2d28c770b47e861))
- 🐛 ম্যাচ রুল ছাড়া স্ক্রিপ্ট হ্যান্ডলিং ফিক্স করুন [#1071](https://github.com/scriptscat/scriptcat/issues/1071) ([560cdc0](https://github.com/scriptscat/scriptcat/commit/560cdc01fc0fc27fb7d0e3b877c63ba431206668))
- 🐛 ব্যাকগ্রাউন্ড অপশনাল অনুমতি অপসারণকারী CI প্যাকেজিং সমস্যা ফিক্স করুন [[1f002f0](https://github.com/scriptscat/scriptcat/commit/1f002f0edf9892f023ae93b8522ff7c5e4a96559)] (by @CodFrm)
- 🐛 বাতিল ট্যাব উপেক্ষা ফিক্স করুন ([#1058](https://github.com/scriptscat/scriptcat/issues/1058)) [[6165bf4](https://github.com/scriptscat/scriptcat/commit/6165bf48eb1d53ede0561c85c30135446c2ff882)] (by @cyfung1031)

<a name="1.3.0-beta"></a>

## 1.3.0-beta (2025-12-13)

### যোগ করা হয়েছে

- ✨ নতুন স্ক্রিপ্ট ইনস্টলেশন লজিক ([#842](https://github.com/scriptscat/scriptcat/issues/842)) ([80d342e](https://github.com/scriptscat/scriptcat/commit/80d342e80c9c1b36f88b7dcd4c65c663bb1d9185))
- ✨ monaco এডিটর হিন্ট আন্তর্জাতিকীকরণ করুন এবং `@require-css` হিন্ট যোগ করুন ([#960](https://github.com/scriptscat/scriptcat/issues/960)) [[51a6f94](https://github.com/scriptscat/scriptcat/commit/51a6f94be3a430691f73057eae61a3814560a5b3)] (by @cyfung1031)
- ✨ `@grant` কনফ্লিক্ট ভ্যালিডেশন ফিক্স করুন, মেটা ডুপ্লিকেট ডিক্লারেশন ত্রুটি প্রম্পট যোগ করুন ([#902](https://github.com/scriptscat/scriptcat/issues/902)) [[8fbd0f1](https://github.com/scriptscat/scriptcat/commit/8fbd0f1041f5c5dcdb5a515348a5f54934acfdc7)] (by @cyfung1031)
- ✨ নতুনদের ফাঁদ থেকে রক্ষা করতে টেমপ্লেটে `@noframes` প্রিসেট করুন ([#900](https://github.com/scriptscat/scriptcat/issues/900)) [[c9d5840](https://github.com/scriptscat/scriptcat/commit/c9d584066ff2395112b9a930aaa409cda764a5e6)] (by @cyfung1031)
- ✨ স্ক্রিপ্ট নাম পরিবর্তিত হলে ইনস্টল লিংককে আপডেটের পরিবর্তে ইনস্টল হিসাবে ভুলভাবে বিচার করা থেকে প্রতিরোধ করুন ([#824](https://github.com/scriptscat/scriptcat/issues/824)) [[5c7a5dd](https://github.com/scriptscat/scriptcat/commit/5c7a5ddc81e3bd1dd0a71cc80460a5239178c1de)] (by @cyfung1031)
- ✨ স্ক্রিপ্ট run-at বিকল্প ([#895](https://github.com/scriptscat/scriptcat/issues/895)) [[b0ea187](https://github.com/scriptscat/scriptcat/commit/b0ea187c2e6d69b60c981aa9b4d068fed7c2c2a2)] (by @CodFrm)
- ✨ স্ক্রিপ্ট কার্যকারিতা অক্ষম থাকলে ধূসর আইকন প্রদর্শন করুন [#897](https://github.com/scriptscat/scriptcat/issues/897) ([3e406dc](https://github.com/scriptscat/scriptcat/commit/3e406dc4562adf7d7f3b79b52623b87e87ef1ad3))
- ✨ প্রসারণযোগ্য আইটেম ০ হলে মেনু ইন্টারঅ্যাকশন লজিক অপ্টিমাইজ করুন [#868](https://github.com/scriptscat/scriptcat/issues/868) ([da24ac2](https://github.com/scriptscat/scriptcat/commit/da24ac234f0eeae0159dce6c2b346d06fb72eaa5))

### পরিবর্তিত হয়েছে

- 🎨 Typography রেফারেন্স ফিক্স করুন ([#984](https://github.com/scriptscat/scriptcat/issues/984)) [[a70400c](https://github.com/scriptscat/scriptcat/commit/a70400cdca8a5b64cffaca85017513d4e5e7171c)] (by @cyfung1031)
- ♻️ Firefox সামঞ্জস্য: GM_setClipboard ([#928](https://github.com/scriptscat/scriptcat/issues/928)) [[d1a5cb1](https://github.com/scriptscat/scriptcat/commit/d1a5cb19dc4e05fac838258d15c48cc6f876d416)] (by @cyfung1031)
- ♻️ userScripts / scripting API সামঞ্জস্য করুন, সামঞ্জস্য উন্নত করুন ([#704](https://github.com/scriptscat/scriptcat/issues/704) পুনরায়) ([#925](https://github.com/scriptscat/scriptcat/issues/925)) [[43bc40f](https://github.com/scriptscat/scriptcat/commit/43bc40ff5da5ef36a13564504293f1928138cf12)] (by @cyfung1031)
- ♻️ স্ক্রিপ্ট আইকন লোডিং রিফ্যাক্টর ও অপ্টিমাইজ করুন ([#893](https://github.com/scriptscat/scriptcat/issues/893)) ([ab36c86](https://github.com/scriptscat/scriptcat/commit/ab36c86b5d031b88e71fbf9151696a42acba86fa))
- ⚡ parseMetadata কোড অপ্টিমাইজেশন ([#903](https://github.com/scriptscat/scriptcat/issues/903)) [[0efc648](https://github.com/scriptscat/scriptcat/commit/0efc648257f74591765869dedee5d98f8a1dc610)] (by @cyfung1031)
- 🎨 ডিফল্ট এক্সটেনশন আইকন নম্বর ডিসপ্লে স্ক্রিপ্ট গণনায় পরিবর্তন করুন [#989](https://github.com/scriptscat/scriptcat/issues/989) [[70f67b6](https://github.com/scriptscat/scriptcat/commit/70f67b6bd8cf803d7a18bf26fdccdfa6f8a92893)] (by @CodFrm)
- 🐛 ইমপোর্ট ও এক্সপোর্ট - স্ক্রিপ্টের শেষ পরিবর্তিত তারিখ সময় অনুসরণ না করা সমস্যা ফিক্স করুন ([#951](https://github.com/scriptscat/scriptcat/issues/951)) ([6e7272f](https://github.com/scriptscat/scriptcat/commit/6e7272f52ef2d49d9fceb3e30babfee1cbd72e75))
- 🎨 সহজ ডিবাগিংয়ের জন্য sourceURL সামঞ্জস্য করুন ([#987](https://github.com/scriptscat/scriptcat/issues/987)) [[ed741e7](https://github.com/scriptscat/scriptcat/commit/ed741e7d0188fa5e95eae87bcd3a28e82ee008e1)] (by @cyfung1031)
- ⬆️ প্যাকেজ সংস্করণ আপডেট ([#922](https://github.com/scriptscat/scriptcat/issues/922)) [[9b1df8d](https://github.com/scriptscat/scriptcat/commit/9b1df8dda794e5e95ecc12cef37ed66712ae561e)] (by @cyfung1031)
- ⚡ Values-সম্পর্কিত সাধারণ সমন্বয় ([#949](https://github.com/scriptscat/scriptcat/issues/949)) [[b258fb2](https://github.com/scriptscat/scriptcat/commit/b258fb2c73d790f7f277a9a31d07e2931a7d680d)] (by @cyfung1031)
- ⚡ URL.createObjectURL সাধারণীকরণ, Firefox সামঞ্জস্য ([#929](https://github.com/scriptscat/scriptcat/issues/929)) [[54ad4de](https://github.com/scriptscat/scriptcat/commit/54ad4de48b81170b90283fb6ce3b4d6e7c908cdf)] (by @cyfung1031)
- ⚡ একাধিক স্ক্রিপ্ট একই আইকন সংরক্ষণ এড়াতে URL-ভিত্তিক আইকন সংরক্ষণ ([#909](https://github.com/scriptscat/scriptcat/issues/909)) [[c6e8efb](https://github.com/scriptscat/scriptcat/commit/c6e8efbe8d11719034a9aaa3fd871519025671ff)] (by @cyfung1031)
- ♻️ updateIcon কোড সামঞ্জস্য করুন ([#908](https://github.com/scriptscat/scriptcat/issues/908)) [[642e3b9](https://github.com/scriptscat/scriptcat/commit/642e3b9e57f01f2b008990cc7cb1461f5dccd256)] (by @cyfung1031)

### ফিক্সড

- 🐛 অনিয়মিত স্ক্রিপ্ট আপডেট চেক নির্বাচন করার সময় বিদ্যমান Alarm মুছে ফেলুন ([#996](https://github.com/scriptscat/scriptcat/issues/996)) [[8bb9a2d](https://github.com/scriptscat/scriptcat/commit/8bb9a2d5741acb7d547e743c7bef8a2139f1401a)] (by @cyfung1031)
- 🐛 ব্যাকআপ পেজের শীর্ষে অতিরিক্ত সাদা স্থান সরান ([#995](https://github.com/scriptscat/scriptcat/issues/995)) ([9c149ce](https://github.com/scriptscat/scriptcat/commit/9c149ce5999b7a70375a41c6604c8e8dbd19e9df))
- ✨ বাহ্যিক ওয়েবসাইট অ্যাক্সেসের উপর নির্ভর না করে ইনস্টলেশন + ইনস্টলেশন পেজ লেআউট সমন্বয় ([#842](https://github.com/scriptscat/scriptcat/issues/842)) ([80d342e](https://github.com/scriptscat/scriptcat/commit/80d342e80c9c1b36f88b7dcd4c65c663bb1d9185))
- 🐛 CSS কনফ্লিক্ট সমাধান করতে UnoCSS প্রিফিক্স যোগ করুন, CSS লেআউট ফিক্স করুন ([#1013](https://github.com/scriptscat/scriptcat/issues/1013)) [[723e64c](https://github.com/scriptscat/scriptcat/commit/723e64cc0c23763dfed322e907c0a960c4f9060e)] (by @cyfung1031)
- 🐛 systemconfig অপ্টিমাইজ করুন এবং SW-তে i18n সমস্যা ফিক্স করুন ([#976](https://github.com/scriptscat/scriptcat/issues/976)) [[c50fcf7](https://github.com/scriptscat/scriptcat/commit/c50fcf7770df633462c2f25f8cf22d302002ec57)] (by @CodFrm)
- 🐛 টাইপ ত্রুটি ফিক্স করুন ([#975](https://github.com/scriptscat/scriptcat/issues/975)) [[7d85856](https://github.com/scriptscat/scriptcat/commit/7d8585687c71cde1c2793d742abb7c22d9d358f0)] (by @cyfung1031)

<a name="1.2.0-beta.5"></a>

## 1.2.0-beta.5 (2025-11-17)

### যোগ করা হয়েছে

- ✨ পপআপে স্ক্রিপ্ট গণনা প্রদর্শন করুন ([#973](https://github.com/scriptscat/scriptcat/issues/973)) [[1134586](https://github.com/scriptscat/scriptcat/commit/1134586ff040ffc0cdddd3538e9ec493950c948a)] (by @cyfung1031)

### পরিবর্তিত হয়েছে

- ⚡ `check_script_update_cycle` হ্যান্ডল করুন ([#906](https://github.com/scriptscat/scriptcat/issues/906)) [[760562f](https://github.com/scriptscat/scriptcat/commit/760562f92ad64bc538873b2ca61dfafe067c3f6e)] (by @cyfung1031)
- ♻️ inject & content সংগঠিত করুন, pageLoad তথ্য স্থানান্তর পরিবর্তন করুন ([#952](https://github.com/scriptscat/scriptcat/issues/952)) [[0554159](https://github.com/scriptscat/scriptcat/commit/0554159c105606192d48e1153194e09314d43bc9)] (by @cyfung1031)
- 🎨 messageFlag সরলীকরণ করুন, ইভেন্ট নামকরণ মান অনুযায়ী সংশোধন করুন ([#926](https://github.com/scriptscat/scriptcat/issues/926)) [[d725d85](https://github.com/scriptscat/scriptcat/commit/d725d85a2f4917c08f6d3daa035a45fd15d12451)] (by @cyfung1031)
- ♻️ `GM_xmlhttpRequest` এবং সম্পর্কিত কোড রিফ্যাক্টর করুন ([#901](https://github.com/scriptscat/scriptcat/issues/901)) [[fabd2e9](https://github.com/scriptscat/scriptcat/commit/fabd2e944235b460bc73df346b79d23ee4540af7)] (by @cyfung1031)
- ⚡ toCamelCase মাইক্রো-অপ্টিমাইজ করুন ([#930](https://github.com/scriptscat/scriptcat/issues/930)) [[88d8bdf](https://github.com/scriptscat/scriptcat/commit/88d8bdfc726f1a4ed63bd3cf81ebad88426273e8)] (by @cyfung1031)

### ফিক্সড

- 🐛 দূষিত স্যান্ডবক্স ফিক্স করুন ([#966](https://github.com/scriptscat/scriptcat/issues/966)) [[dd80386](https://github.com/scriptscat/scriptcat/commit/dd8038666481d1319dd0f8ab80f79f1b13c1730d)] (by @cyfung1031)
- 🐛 setInvalidContext-এ অনির্ধারিত `valueChangeListener.clear` ফিক্স করুন ([#970](https://github.com/scriptscat/scriptcat/issues/970)) [[2a399e9](https://github.com/scriptscat/scriptcat/commit/2a399e96a1e848f2f569566479b48dcee280f543)] (by @cyfung1031)
- 🐛 `@connect` লজিক সামঞ্জস্য করুন ([#969](https://github.com/scriptscat/scriptcat/issues/969)) [[67914d2](https://github.com/scriptscat/scriptcat/commit/67914d2b7d57fa9c69706ae57ee5d3400c2643f9)] (by @cyfung1031)
- 🐛 সার্ভিস ওয়ার্কার i18n হ্যান্ডলিং ফিক্স করুন [#956](https://github.com/scriptscat/scriptcat/issues/956) [[843e618](https://github.com/scriptscat/scriptcat/commit/843e618daf13ec659cc16759c5de13dacf23c534)] (by @CodFrm)
- 🐛 deleteValue/deleteValues এক্সিকিউশন সমস্যা ফিক্স করুন ([#943](https://github.com/scriptscat/scriptcat/issues/943)) [[3d92bfb](https://github.com/scriptscat/scriptcat/commit/3d92bfb4a0334ffd2c279a1e6d33e98eed0a1a81)] (by @cyfung1031)
- 🐛 GitHub লিংকের মাধ্যমে স্ক্রিপ্ট ইনস্টল করতে অক্ষম হওয়া ফিক্স করুন ([#877](https://github.com/scriptscat/scriptcat/issues/877)) [[b9268e7](https://github.com/scriptscat/scriptcat/commit/b9268e7207081fcaa4591c9e1385f98446ade04a)] (by @cyfung1031)
- 🐛 `@connect *` কার্যকর না হওয়া ফিক্স করুন ([#967](https://github.com/scriptscat/scriptcat/issues/967)) [[6bcb93c](https://github.com/scriptscat/scriptcat/commit/6bcb93c20c9690a2ce4f50d0978948e20ba407b8)] (by @cyfung1031)

### বিবিধ

- 🌐 অনুবাদ আপডেট ([#920](https://github.com/scriptscat/scriptcat/issues/920)) [[ede013b](https://github.com/scriptscat/scriptcat/commit/ede013b8e725ddefa626e3e432cbaee756535259)] (by @cyfung1031)

<a name="1.2.0-beta.4"></a>

## 1.2.0-beta.4 (2025-11-07)

### যোগ করা হয়েছে

- ✨ কার্ড মোড গাইড ([#894](https://github.com/scriptscat/scriptcat/issues/894)) [[0627a0f](https://github.com/scriptscat/scriptcat/commit/0627a0faacf3a41645e985ec6f6960568427d5a4)] (by @CodFrm)

### পরিবর্তিত হয়েছে

- ♻️ EarlyStart বাস্তবায়ন রিফ্যাক্টর করুন ([#882](https://github.com/scriptscat/scriptcat/issues/882)) [[cca11e0](https://github.com/scriptscat/scriptcat/commit/cca11e02b98de285423b04ec0d95eab995cee378)] (by @CodFrm)
- 💄 কার্ড ভিউ লেআউট ফাইন-টিউন করুন ([#872](https://github.com/scriptscat/scriptcat/issues/872)) [[5aa21b8](https://github.com/scriptscat/scriptcat/commit/5aa21b88bf423d5d03f7df70b654249bac4b7a88)] (by @Coxxs)

### ফিক্সড

- 🐛 দুটি `@require`-এর মধ্যে সেমিকোলন অনুপস্থিত থাকার কারণে সৃষ্ট ত্রুটি ফিক্স করুন [#917](https://github.com/scriptscat/scriptcat/issues/917) ([#921](https://github.com/scriptscat/scriptcat/issues/921)) [[2769a24](https://github.com/scriptscat/scriptcat/commit/2769a24e129da79926816886fe42bbc4d9a97875)] (by @cyfung1031)
- 🐛 আপডেট চেক পেজ এক্সসেপশন সমস্যা ফিক্স করুন ([#912](https://github.com/scriptscat/scriptcat/issues/912)) [[12272e1](https://github.com/scriptscat/scriptcat/commit/12272e1ad4787cc6768f2f157d272faff5782f37)] (by @cyfung1031)
- 🐛 ব্যাকগ্রাউন্ড স্ক্রিপ্টে GM_openInTab কাজ না করা ফিক্স করুন [#873](https://github.com/scriptscat/scriptcat/issues/873) [[a526664](https://github.com/scriptscat/scriptcat/commit/a52666429710e150d81cac33af5511401b697355)] (by @CodFrm)
- 🐛 টেবিল তালিকা লোডিং স্টেট সমস্যা ফিক্স করুন [#874](https://github.com/scriptscat/scriptcat/issues/874) [[0b53cb0](https://github.com/scriptscat/scriptcat/commit/0b53cb07cf1ca1d3e42b15fd9c104c83031502d5)] (by @CodFrm)
- 🐛 `@early-start` অপসারণের পরে স্ক্রিপ্ট ইনজেকশন ব্যর্থতা ফিক্স করুন ([#871](https://github.com/scriptscat/scriptcat/issues/871)) [[426e878](https://github.com/scriptscat/scriptcat/commit/426e8788d9b934ee96cf5ec22b432a08681a9e8c)] (by @cyfung1031)

<a name="1.2.0-beta.3"></a>

## 1.2.0-beta.3 (2025-10-23)

### যোগ করা হয়েছে

- ✨ কার্ড ভিউ ([#860](https://github.com/scriptscat/scriptcat/issues/860)) [[c9f2350](https://github.com/scriptscat/scriptcat/commit/c9f23509648a41b06f82e79da2bc1fc05a783e06)] (by @CodFrm)

### পরিবর্তিত হয়েছে

- ♻️ Null কোড সমন্বয় ([#852](https://github.com/scriptscat/scriptcat/issues/852)) [[fa1031d](https://github.com/scriptscat/scriptcat/commit/fa1031df9c3e8bc2550f429e7cf8d1c3869a1ea3)] (by @cyfung1031)
- ♻️ GMApiRequest কোড সমন্বয়, GM_log কোড ফিক্স, @connect বিচার ফিক্স ([#849](https://github.com/scriptscat/scriptcat/issues/849)) [[ee4a8b2](https://github.com/scriptscat/scriptcat/commit/ee4a8b28715fb48fa627f5231c8dc30e55c006ed)] (by @cyfung1031)

### সরানো হয়েছে

- 🔥 `GM_openInTab({ useOpen: true })` সরান ([#867](https://github.com/scriptscat/scriptcat/issues/867)) [[aa61335](https://github.com/scriptscat/scriptcat/commit/aa613354c7b7c84d461000ed0362cf9916c8aa39)] (by @cyfung1031)

### ফিক্সড

- 🐛 Vivaldi-এর সাথে checkUserScriptsAvailable সামঞ্জস্য ([#859](https://github.com/scriptscat/scriptcat/issues/859)) [[014d62d](https://github.com/scriptscat/scriptcat/commit/014d62de6b731bfda82babf5db5aa5ae909908f1)] (by @cyfung1031)
- 🚑 গুরুতর ফিক্স: GM.delete/setValue Promise পূর্ণ না হওয়া ([#865](https://github.com/scriptscat/scriptcat/issues/865)) [[43572a3](https://github.com/scriptscat/scriptcat/commit/43572a3110b8b083f840b472a231400223da7751)] (by @cyfung1031)
- 🐛 GM xhr fetch সমস্যা ফিক্স করুন [#847](https://github.com/scriptscat/scriptcat/issues/847) [[c6e95c2](https://github.com/scriptscat/scriptcat/commit/c6e95c210748d091ff9f610f3801eaa055d9d6de)]

### বিবিধ

- 📝 monaco-editor-এ `@compatible` কমেন্ট যোগ করুন ([#853](https://github.com/scriptscat/scriptcat/issues/853)) [[752b951](https://github.com/scriptscat/scriptcat/commit/752b95122ab324df358e45ec468194cc8466f8bb)] (by @cyfung1031)
- 🌐 subscribe_source_tooltip অনুবাদ যোগ করুন [#850](https://github.com/scriptscat/scriptcat/issues/850) [[8d675bd](https://github.com/scriptscat/scriptcat/commit/8d675bd5398d403dfc8e7ee2016fbaffd821da64)]

<a name="1.2.0-beta.2"></a>

## 1.2.0-beta.2 (2025-10-15)

স্ক্রিপ্ট আপডেট লজিক অপ্টিমাইজ করা হয়েছে, স্ক্রিপ্ট তালিকা সাইডবার যোগ করা হয়েছে, GM_registerMenuCommand এবং GM_openInTab কার্যকারিতা উন্নত করা হয়েছে এবং অনেক বাগ ফিক্স করা হয়েছে

### যোগ করা হয়েছে

- ✨ ইউনিফাইড আপডেট বিজ্ঞপ্তি প্রক্রিয়া ([#755](https://github.com/scriptscat/scriptcat/issues/755)) ([741b0bd](https://github.com/scriptscat/scriptcat/commit/741b0bd2ec2f75a7e84c62fbe02654ce6bc41543))
- ✨ GM_registerMenuCommand দ্বিতীয়-স্তরের মেনু এবং বিভাজক ([#831](https://github.com/scriptscat/scriptcat/issues/831)) [[bd08959](https://github.com/scriptscat/scriptcat/commit/bd089595c922aa63af0fb6d41fa9f6dc2587e096)] (by @cyfung1031)
- ✨ GM_openInTab-এ প্যারামিটার যোগ করুন ([#788](https://github.com/scriptscat/scriptcat/issues/788)) [[eb33d61](https://github.com/scriptscat/scriptcat/commit/eb33d613473815b12017e34f46ed9eb292a9dcba)] (by @cyfung1031)
- ✨ SC সংস্করণ চেক বাটন যোগ করুন ([#795](https://github.com/scriptscat/scriptcat/issues/795)) [[1680c66](https://github.com/scriptscat/scriptcat/commit/1680c66099120c0e497c1a1f5321f38fe0160ea0)] (by @cyfung1031)
- ✨ স্ক্রিপ্ট তালিকা সাইডবার ফিল্টারিং এবং ট্যাগিং কার্যকারিতা যোগ করুন ([#794](https://github.com/scriptscat/scriptcat/issues/794)) [[6aabf59](https://github.com/scriptscat/scriptcat/commit/6aabf594cd62fa7358ba34c1c69060dc9e24919c)]
- ✨ লোকাল ফাইল মনিটরিং সক্ষম করতে window.showOpenFilePicker দিয়ে ফাইল খুলুন [#749](https://github.com/scriptscat/scriptcat/issues/749) [[7dcfbf1](https://github.com/scriptscat/scriptcat/commit/7dcfbf1309fff28c3d806d4ccb36bd0ef51050f5)]

### পরিবর্তিত হয়েছে

- ♻️ indexeddb এবং chrome.storage মাইগ্রেশন লজিক আলাদা করুন ([#844](https://github.com/scriptscat/scriptcat/issues/844)) [[b8389fb](https://github.com/scriptscat/scriptcat/commit/b8389fbc21932dbbe9394b576fbd8605a3b820c8)]
- ♻️ registerMenuCommand এবং unregisterMenuCommand ফিক্স করুন ([#826](https://github.com/scriptscat/scriptcat/issues/826)) [[3ecde9e](https://github.com/scriptscat/scriptcat/commit/3ecde9e0125089744c2d81f759b043deb5440be6)] (by @cyfung1031)
- ⚡ Runtime স্টার্টআপ লোডিং অপ্টিমাইজ করুন ([#775](https://github.com/scriptscat/scriptcat/issues/775)) [[3e69401](https://github.com/scriptscat/scriptcat/commit/3e69401feb98bd789a85dbda7d9e690f71bae696)] (by @cyfung1031)

### ফিক্সড

- 🐛 `GM_registerMenuCommand` সম্পর্কিত কোড ডিজাইন সংশোধন করুন ([#790](https://github.com/scriptscat/scriptcat/issues/790)) ([a71cfe4](https://github.com/scriptscat/scriptcat/commit/a71cfe496fcb2457109dd97742a795585860a6d7))
- 🐛 পপআপ ডেটা ক্লিনআপ হ্যান্ডল করুন [#784](https://github.com/scriptscat/scriptcat/issues/784) [[7bd9b16](https://github.com/scriptscat/scriptcat/commit/7bd9b162b178a534a8be31aca210af2106f110b7)]
- 🐛 CAT_fileStorage ডাউনলোড সমস্যা ফিক্স করুন [#829](https://github.com/scriptscat/scriptcat/issues/829) [[81d4e49](https://github.com/scriptscat/scriptcat/commit/81d4e496df8abd3715348fe979758a63311b54c3)]
- 🐛 userconfig গ্রুপ অর্ডার সমস্যা ফিক্স করুন [#818](https://github.com/scriptscat/scriptcat/issues/818) [[74881c0](https://github.com/scriptscat/scriptcat/commit/74881c0a05d599ad13300c3c69b33b01a5a7b552)]
- 🐛 ইনস্টলেশন সোর্স ডেটা সামঞ্জস্য এবং হ্যান্ডলিং সমস্যা ফিক্স করুন [[574b3c6](https://github.com/scriptscat/scriptcat/commit/574b3c6506a21e1b8ebd891fd91fcd8b19774b96)]
- 🐛 পপআপ পেজে ব্যাকগ্রাউন্ড স্ক্রিপ্ট স্টেট সিঙ্ক সমস্যা ফিক্স করুন [#838](https://github.com/scriptscat/scriptcat/issues/838) ([edd13c6](https://github.com/scriptscat/scriptcat/commit/edd13c65c9643dece7c38665f58146c9e59c802c))
- 🐛 কনটেক্সট মেনু এবং স্ক্রিপ্ট মেনুর মধ্যে অসামঞ্জস্য ফিক্স করুন [#768](https://github.com/scriptscat/scriptcat/issues/768) ([191ffcd](https://github.com/scriptscat/scriptcat/commit/191ffcd1e55d842acabbc44fdf1f1098f0b0093d))
- 🐛 ম্যানুয়াল ইমপোর্ট লোকাল ফাইল ত্রুটি ফিক্স করুন [#745](https://github.com/scriptscat/scriptcat/issues/745) ([fe14991](https://github.com/scriptscat/scriptcat/commit/fe149914e6eef99761ca44681abd95919613adb3))
- 🐛 ম্যানুয়াল ইমপোর্ট লোকাল ফাইল ত্রুটি ফিক্স করুন [#745](https://github.com/scriptscat/scriptcat/issues/745) ([52950a2](https://github.com/scriptscat/scriptcat/commit/52950a2ad04c79aecaa530a6eb615e9c54bba884))
- 🐛 লোকাল \*.user.js স্বীকৃতি সমর্থন করুন [#812](https://github.com/scriptscat/scriptcat/issues/812) [[cec8ffc](https://github.com/scriptscat/scriptcat/commit/cec8ffc5f6947a54b7a59365928a1ccf47b336a2)]
- 🐛 প্রাথমিক স্টার্ট স্ক্রিপ্ট GM_addElement ব্যবহার করতে অক্ষম হওয়া ফিক্স করুন [#801](https://github.com/scriptscat/scriptcat/issues/801) [[4d17645](https://github.com/scriptscat/scriptcat/commit/4d17645c0659d8ecd283473cbdd88b6eda065758)]
- 🐛 প্রাথমিক স্ক্রিপ্ট GM_info.scriptMetaStr সমস্যা ফিক্স করুন [#801](https://github.com/scriptscat/scriptcat/issues/801) [[a9a4333](https://github.com/scriptscat/scriptcat/commit/a9a433393ceb259aecc4fe9c1d32a0c9a8333160)]
- 🐛 মেটাডেটা ব্লক ডকুমেন্টেশন এবং ছোট কোড ফিক্স ([#832](https://github.com/scriptscat/scriptcat/issues/832)) [[c40822b](https://github.com/scriptscat/scriptcat/commit/c40822b293f1283d420797a0cbe549153541f3c8)] (by @cyfung1031)
- 🐛 ট্যাব অপসারণের পরে menuCommand আপডেট ট্রিগার হওয়া এড়ান ([#828](https://github.com/scriptscat/scriptcat/issues/828)) [[c64f6d9](https://github.com/scriptscat/scriptcat/commit/c64f6d9a4e087f7788f5b160b91c2b808161e58e)] (by @cyfung1031)
- 🐛 Modali18n সমস্যা ফিক্স করুন ([#825](https://github.com/scriptscat/scriptcat/issues/825)) [[03da1ba](https://github.com/scriptscat/scriptcat/commit/03da1ba07c0fd212627bf3c18dbb3afa6affed78)] (by @cyfung1031)
- 🐛 Modal.confirm i18n সমস্যা ফিক্স করুন [#821](https://github.com/scriptscat/scriptcat/issues/821) [[b3c30f5](https://github.com/scriptscat/scriptcat/commit/b3c30f55db8b37ccbfa7278b83af21159c72f2cb)]
- ✏️ প্যারামিটার টাইপে &quot;minetype&quot; এর পরিবর্তে &quot;mimetype&quot; হওয়া উচিত ([#823](https://github.com/scriptscat/scriptcat/issues/823)) [[fb3d132](https://github.com/scriptscat/scriptcat/commit/fb3d132ece659cb18082e383dfb925a5cc242c4c)] (by @cyfung1031)
- 🐛 অবৈধ Extension Context ত্রুটি হলে অপারেশন বাতিল করুন এবং রিসোর্স মুক্ত করুন ([#800](https://github.com/scriptscat/scriptcat/issues/800)) [[c110e74](https://github.com/scriptscat/scriptcat/commit/c110e746336e63fc1266bb4cacc056e126d919e0)] (by @cyfung1031)
- 🐛 batchUpdate পেজ আপডেট পুনরায় ফেচ করা + ইনস্টলেশনের পরে আপডেট না হওয়া সমস্যা ফিক্স করুন ([#803](https://github.com/scriptscat/scriptcat/issues/803)) [[73f1f32](https://github.com/scriptscat/scriptcat/commit/73f1f329388c07588f2a532b71e5318bf3a92392)] (by @cyfung1031)
- 🐛 ডিফল্ট jsconfig সামঞ্জস্য করুন [#813](https://github.com/scriptscat/scriptcat/issues/813) [[06f0e1c](https://github.com/scriptscat/scriptcat/commit/06f0e1c7f0974b954d7ab546ce86f22f830dc28f)]
- 🐛 UI রেন্ডার সমস্যা ([#806](https://github.com/scriptscat/scriptcat/issues/806)) [[5c75c8b](https://github.com/scriptscat/scriptcat/commit/5c75c8b8e8fc92fcd830db094b34a7ad16fb4c9f)] (by @cyfung1031)
- 🐛 অস্পষ্ট unicode সতর্কতা দমন করুন [#747](https://github.com/scriptscat/scriptcat/issues/747) [[5e7c077](https://github.com/scriptscat/scriptcat/commit/5e7c077ef250e1b8eef5662bc416b82d62927b52)]
- 🐛 ভাষা পরিবর্তনের পরে ScriptList কলামের নাম এবং কনটেন্ট আপডেট না হওয়া ([#792](https://github.com/scriptscat/scriptcat/issues/792)) [[3ad58b8](https://github.com/scriptscat/scriptcat/commit/3ad58b82bf1d4955cddd3e50b570c601f7e90143)] (by @cyfung1031)
- 🐛 chrome.tabs.query ফিক্স করুন ([#786](https://github.com/scriptscat/scriptcat/issues/786)) [[de607fd](https://github.com/scriptscat/scriptcat/commit/de607fd8eca841748a3e422fe5e84f84f84619d5)] (by @cyfung1031)
- 🐛 [UI ফিক্স] useCallback সমস্যা সমাধান করুন ([#769](https://github.com/scriptscat/scriptcat/issues/769)) [[511de96](https://github.com/scriptscat/scriptcat/commit/511de96d2b271142244f9874f87bb23ec75f626a)] (by @cyfung1031)
- 🐛 ব্যাকগ্রাউন্ডে চালাতে অক্ষম হওয়া সমস্যা ফিক্স করতে ব্যাকগ্রাউন্ড অনুমতি যোগ করুন [#762](https://github.com/scriptscat/scriptcat/issues/762) [[4205837](https://github.com/scriptscat/scriptcat/commit/42058379ab6d0e29003cc1f63d5df48dbe601f4e)]
- 🐛 ফাইলনামে অবৈধ অক্ষরযুক্ত ফাইল ডাউনলোড করতে GM_download অক্ষম হওয়া ফিক্স করুন ([#758](https://github.com/scriptscat/scriptcat/issues/758)) [[2518722](https://github.com/scriptscat/scriptcat/commit/2518722c8bc14b9f52e8720624dd835b1fbdfb1b)] (by @WhiteSevs)
- 🐛 স্যান্ডবক্স toString সমস্যা ফিক্স করুন [#737](https://github.com/scriptscat/scriptcat/issues/737) [[6ca24c9](https://github.com/scriptscat/scriptcat/commit/6ca24c9b171792035803ac4e1c69e473629f9d18)]
- 🐛 ব্যাজ 0 দেখানো সমস্যা ফিক্স করুন [[026c1d2](https://github.com/scriptscat/scriptcat/commit/026c1d2071dd4cfb6291f005d36717bcdf0a51c3)]
- 🐛 স্ক্রিপ্ট ইনজেকশন CSP সমস্যা ফিক্স করুন [#739](https://github.com/scriptscat/scriptcat/issues/739) [#728](https://github.com/scriptscat/scriptcat/issues/728) [[5da21b5](https://github.com/scriptscat/scriptcat/commit/5da21b5e3d0e7e86a1fd5dff57ba03ea641c19fa)]

### বিবিধ

- 📝 TypeScript কমেন্ট ফিক্স ([#839](https://github.com/scriptscat/scriptcat/issues/839)) [[6b575ca](https://github.com/scriptscat/scriptcat/commit/6b575cac4841bdf86de70e4b0e702e342a00ca76)] (by @cyfung1031)
- 🌐 বিজ্ঞপ্তি এবং ত্রুটির জন্য অনুবাদ সমস্যা হ্যান্ডল করুন, `@grant` কনফ্লিক্ট ভ্যালিডেশন যোগ করুন ([#819](https://github.com/scriptscat/scriptcat/issues/819)) [[ef3482d](https://github.com/scriptscat/scriptcat/commit/ef3482d2c6406927a72835067f66a28cdb0f3b79)] (by @cyfung1031)
- 🌐 "কোনো বার্তা কনটেন্ট নেই" i18n হ্যান্ডলিং ([#811](https://github.com/scriptscat/scriptcat/issues/811)) [[f9486d6](https://github.com/scriptscat/scriptcat/commit/f9486d6e53d68c085625ac370dc717daf8af232e)] (by @cyfung1031)
- 🌐 UI উৎস ফরম্যাট ডিসপ্লে পরিবর্তন করুন ([#783](https://github.com/scriptscat/scriptcat/issues/783)) [[9242b95](https://github.com/scriptscat/scriptcat/commit/9242b957cf5f90f6d186a0b1f07bfce8d6ed1cd7)] (by @cyfung1031)
- 🌐 updatepage অনুবাদ ([#777](https://github.com/scriptscat/scriptcat/issues/777)) [[757c954](https://github.com/scriptscat/scriptcat/commit/757c954768be8fc94e05200822a23efef5e6bc01)] (by @cyfung1031)
- 🌐 translation.json আপডেট করুন ([#746](https://github.com/scriptscat/scriptcat/issues/746)) [[85b48e2](https://github.com/scriptscat/scriptcat/commit/85b48e2982e0c81f82622528a3aa600c3c88ce8d)] (by @cyfung1031)

<a name="1.2.0-beta.1"></a>

## 1.2.0-beta.1 (2025-09-18)

### যোগ করা হয়েছে

- ✨ সাইডবার লুকানোর জন্য লেআউট মেনু যোগ করুন [#689](https://github.com/scriptscat/scriptcat/issues/689) [[dd64da7](https://github.com/scriptscat/scriptcat/commit/dd64da719c081acbf21645e2b1e1f38653ffae8c)]
- ✨ inject into বাস্তবায়ন করুন ([#711](https://github.com/scriptscat/scriptcat/issues/711)) [[4c708c2](https://github.com/scriptscat/scriptcat/commit/4c708c2c5a0f7cea6daa2f32f51e182a4f83c50c)]
- ✨ : Firefox mv3-এর জন্য টুলবার বাটন সক্রিয় করতে একটি শর্টকাট যোগ করুন ([#718](https://github.com/scriptscat/scriptcat/issues/718)) [[06a9040](https://github.com/scriptscat/scriptcat/commit/06a904046034aad59564ea07d8ec441f4def5278)] (by @xymoryn)

### পরিবর্তিত হয়েছে

- ⚡ ব্যাকগ্রাউন্ড স্ক্রিপ্ট রান বাটন ক্লিক করার পরে পপআপ পেজ পুনরায় রেন্ডারিংয়ের কারণে সৃষ্ট ভেঙে পড়া সমস্যা অপ্টিমাইজ করুন [[d83ad0d](https://github.com/scriptscat/scriptcat/commit/d83ad0dda600db59adf70f9db2304381db7ab80f)]
- ⚡ স্ক্রিপ্ট তালিকা অপ্টিমাইজ করুন, পুনরায় রেন্ডার হ্রাস করুন [[610fba0](https://github.com/scriptscat/scriptcat/commit/610fba08bbac5c01791aac756eed60a75bc1d483)]
- ♻️ ব্যাকগ্রাউন্ড স্ক্রিপ্ট টাস্ক চেকিং উন্নত করুন, ত্রুটি হ্রাস করুন [#714](https://github.com/scriptscat/scriptcat/issues/714) [[3850af2](https://github.com/scriptscat/scriptcat/commit/3850af22abefced1f2ec6c773c92599a18bb0f8a)]
- 🐛 পপআপ পেজে ব্যাকগ্রাউন্ড স্ক্রিপ্ট প্রসারিত না হওয়া ফিক্স করুন ([66ab70f](https://github.com/scriptscat/scriptcat/commit/66ab70fb10c28aaf0c9260a9591aab7e1ae35615))
- ✨ ওয়েবসাইট বাদ দেওয়ার পরে পপআপ পেজ স্বয়ংক্রিয়ভাবে বন্ধ হয় না [#725](https://github.com/scriptscat/scriptcat/issues/725) ([e432210](https://github.com/scriptscat/scriptcat/commit/e43221051d52d7394a579442519e99d258df872a))
- ♻️ ReduxStore এবং ব্রডকাস্ট প্রক্রিয়া অপ্টিমাইজ করুন ([#729](https://github.com/scriptscat/scriptcat/issues/729)) [[b62781e](https://github.com/scriptscat/scriptcat/commit/b62781e11f0f4771094e42cb3479a70b8134cdf6)] (by @cyfung1031)
- ⚡ React.forwardRef কোড অপ্টিমাইজেশন ([#734](https://github.com/scriptscat/scriptcat/issues/734)) [[a7faa48](https://github.com/scriptscat/scriptcat/commit/a7faa48f9a4615318104fa5d501184a4faec73cd)] (by @cyfung1031)
- ♻️ systemConfig রিফ্যাক্টর ও অপ্টিমাইজ করুন [[3acd3f3](https://github.com/scriptscat/scriptcat/commit/3acd3f3890031a7e90bd57eb63320007164ed4ff)]

### ফিক্সড

- 🐛 স্টেট আপডেট ত্রুটি ফিক্স করুন [[94fd65b](https://github.com/scriptscat/scriptcat/commit/94fd65bfb765a9511e0efb2dc6fb2bfd216e570f)]
- ✏️ টাইপো ফিক্স করুন ([#738](https://github.com/scriptscat/scriptcat/issues/738)) ([4e55c06](https://github.com/scriptscat/scriptcat/commit/4e55c06212336bd3356e6d1ead3b75cf97f3b9d8))
- 🐛 ব্যাজ 0 দেখানো সমস্যা ফিক্স করুন ([6edad14](https://github.com/scriptscat/scriptcat/commit/6edad1491820665fad8cd6ee5c85e93c57aa0d42))
- 🐛 বার্তা টাইপ চেকিং উন্নত করুন [#676](https://github.com/scriptscat/scriptcat/issues/676) ([5073795](https://github.com/scriptscat/scriptcat/commit/50737957507ff9af3aa9ba9a6b7d444b643d1ff2))
- 🐛 স্যান্ডবক্স toString সমস্যা ফিক্স করুন [#737](https://github.com/scriptscat/scriptcat/issues/737) [[a4cefbc](https://github.com/scriptscat/scriptcat/commit/a4cefbc791fc2c2e53f3e934e0e4725023f49f72)]
- ✏️ টাইপো ফিক্স করুন [[35b6f58](https://github.com/scriptscat/scriptcat/commit/35b6f581c6421a6db001eebadaa8ae216f5b8575)]
- 🐛 GM xhr ডকুমেন্ট সমস্যা ফিক্স করুন [#716](https://github.com/scriptscat/scriptcat/issues/716) [[1c46546](https://github.com/scriptscat/scriptcat/commit/1c465462f4e14ae461d54358710f5caf74208af3)]

<a name="1.2.0-beta"></a>

## 1.2.0-beta (2025-09-07)

### যোগ করা হয়েছে

- ✨ কাস্টম এডিটর কনফিগারেশন এবং এডিটর টাইপ সংজ্ঞা যোগ করুন ([#708](https://github.com/scriptscat/scriptcat/issues/708)) [[49eb379](https://github.com/scriptscat/scriptcat/commit/49eb3794774790d61c3ef787c865a9ba6fe82841)]
- ✨ আনইনস্টল সার্ভে পেজ যোগ করুন [[6404c8f](https://github.com/scriptscat/scriptcat/commit/6404c8f74aff09b15725a92f8afdfc0d71ac188f)]
- 📝 ইনস্টলেশন ওপেনিং পেজ এবং নামস্থান পরিবর্তন করুন ([6f2f000](https://github.com/scriptscat/scriptcat/commit/6f2f000612908b7a88f6b70c2831092805c63bc7))
- ✨ মোবাইল ইনস্টলেশন QR কোড যোগ করুন ([348237c](https://github.com/scriptscat/scriptcat/commit/348237c7ce9771c69025386926b1f73710cf6f42))

### ফিক্সড

- 🐛 পুরানো ব্রাউজার সংস্করণ সামঞ্জস্য সমস্যা ফিক্স করুন [#715](https://github.com/scriptscat/scriptcat/issues/715) [[4da8068](https://github.com/scriptscat/scriptcat/commit/4da806879c2b170672814d02e6f8ed98c9fae35b)]
- 💄 উইন্ডো খুব ছোট হলে পপআপ মেনু ডিসপ্লে অপ্টিমাইজ করুন ([288650e](https://github.com/scriptscat/scriptcat/commit/288650e5e4cbdc3fa8658f0754ce427a1b3dec5a))
- 🐛 N সমস্যা ফিক্স করুন ([#710](https://github.com/scriptscat/scriptcat/issues/710)) [[6a2027a](https://github.com/scriptscat/scriptcat/commit/6a2027ac0bb5e0ed625df570240d068a98a34b31)] (by @WhiteSevs)
- 🐛 GM XHR পুনঃনির্দেশ হেডার হারানো সমস্যা ফিক্স করুন [#664](https://github.com/scriptscat/scriptcat/issues/664) close [#664](https://github.com/scriptscat/scriptcat/issues/664) [[1f29e69](https://github.com/scriptscat/scriptcat/commit/1f29e699ded25ec5270844c1fb54001b5bbf5038)]

### বিবিধ

- 🌐 i18n সমস্যা হ্যান্ডল করুন [[2adf69d](https://github.com/scriptscat/scriptcat/commit/2adf69d6ec3c30186f2c2ef89f97e3cba9e15a66)]
- 🌐 অনুবাদ সমস্যা হ্যান্ডল করুন [[55223dd](https://github.com/scriptscat/scriptcat/commit/55223dde8c545e974d19dd8126756aaae407e1fd)]

<a name="1.1.0-beta.2"></a>

## 1.1.0-beta.2 (2025-09-03)

Dropbox সমর্থন যোগ করা হয়েছে, সামঞ্জস্য উন্নতি করা হয়েছে, পেজ লোডিংয়ের চেয়ে দ্রুত @early-start যোগ করা হয়েছে

### যোগ করা হয়েছে

- ✨ স্ক্রিপ্ট রানটাইম পরিবেশ সেটিংস যোগ করুন [#628](https://github.com/scriptscat/scriptcat/issues/628) [[0d4a89e](https://github.com/scriptscat/scriptcat/commit/0d4a89efaecf0331dcc7fbb6df006b93a1525846)]
- ✨ ব্যাকগ্রাউন্ড স্ক্রিপ্ট না থাকলে ডিফল্টভাবে ভেঙে পড়ুন [#626](https://github.com/scriptscat/scriptcat/issues/626) ([9d0aac6](https://github.com/scriptscat/scriptcat/commit/9d0aac6aae11b96707ca1f7c024a24e9d55f217b))
- ✨ Dropbox সমর্থন [#575](https://github.com/scriptscat/scriptcat/issues/575) [[2c66f21](https://github.com/scriptscat/scriptcat/commit/2c66f21f5118bd83a0eaa0f1baa3a31f2233e5b2)]
- ✨ TM এবং SC একসাথে চালু হলে external.Tampermonkey অপ্টিমাইজ করুন, TM ইনস্টল না থাকলে SC ইনস্টলেশন স্ট্যাটাস চেক করুন ([#703](https://github.com/scriptscat/scriptcat/issues/703)) [[d0115c3](https://github.com/scriptscat/scriptcat/commit/d0115c33657260d803b6091139601b1b20407d4e)] (by @cyfung1031)
- ✨ পেজ লোডিংয়ের চেয়ে দ্রুত @early-start যোগ করুন ([#649](https://github.com/scriptscat/scriptcat/issues/649)) [[eb097dd](https://github.com/scriptscat/scriptcat/commit/eb097dd146dcd6f8ca712ed883571dbfb3d09f20)]

### পরিবর্তিত হয়েছে

- ♻️ FF-এর সাথে সামঞ্জস্যপূর্ণ: `chrome.scripting.registerContentScripts` ([#704](https://github.com/scriptscat/scriptcat/issues/704)) [[a9ad0ea](https://github.com/scriptscat/scriptcat/commit/a9ad0ea2b34744dbd4488bda0a16d73bd6a1cc2b)] (by @cyfung1031)
- ♻️ url_matcher কোড অপ্টিমাইজেশন ([#702](https://github.com/scriptscat/scriptcat/issues/702)) [[27b8baa](https://github.com/scriptscat/scriptcat/commit/27b8baa90372f75cbf428dd32ef02d842688cf33)] (by @cyfung1031)
- ⚡ const now = Date.now(); ([#695](https://github.com/scriptscat/scriptcat/issues/695)) [[400b45c](https://github.com/scriptscat/scriptcat/commit/400b45cc487da4cc8a7b866916855acdc18a8023)] (by @cyfung1031)
- ⚡ forEach -> for of ([#694](https://github.com/scriptscat/scriptcat/issues/694)) [[70927b6](https://github.com/scriptscat/scriptcat/commit/70927b6f0ddcf4a60d5838597d1df5acaaa7ca94)] (by @cyfung1031)
- ⚡ সাধারণ কোড অপ্টিমাইজেশন ([#692](https://github.com/scriptscat/scriptcat/issues/692)) [[cf05973](https://github.com/scriptscat/scriptcat/commit/cf0597305a158fd8ba8489f30906d7bbbd7a4b0b)] (by @cyfung1031)
- ⚡ কোড অপ্টিমাইজেশন: গ্লোবাল সার্চ ([#697](https://github.com/scriptscat/scriptcat/issues/697)) [[a5c12bd](https://github.com/scriptscat/scriptcat/commit/a5c12bd94f249ea194bececf2ecb39a0dea3c7dc)] (by @cyfung1031)
- ♻️ initReady হ্যান্ডল করতে মিডলওয়্যার ব্যবহার করুন [[758e926](https://github.com/scriptscat/scriptcat/commit/758e92690194462982282dca25041c825d0b05e2)]
- ♻️ Server এবং MessageQueue কম্পোনেন্ট অপ্টিমাইজ করুন [[0932edc](https://github.com/scriptscat/scriptcat/commit/0932edc49722226cac97403dcd14dbaef01b5528)]
- ♻️ সামঞ্জস্য সমন্বয়: optional_permission হ্যান্ডলিং ([#679](https://github.com/scriptscat/scriptcat/issues/679)) [[bfc558a](https://github.com/scriptscat/scriptcat/commit/bfc558a0dfd167234100d95b9180ee6db4ab4c04)] (by @cyfung1031)
- ♻️ সামঞ্জস্য সমন্বয়: `chrome.runtime.onMessage` না থাকলে `content.js`-এর ত্রুটি দেওয়া উচিত ([#675](https://github.com/scriptscat/scriptcat/issues/675)) [[4e9adc0](https://github.com/scriptscat/scriptcat/commit/4e9adc00562981aa9d930d8a3f199e9418bdff30)] (by @cyfung1031)
- ♻️ সামঞ্জস্য সমন্বয় (offscreen) এবং কোড অপ্টিমাইজেশন ([#674](https://github.com/scriptscat/scriptcat/issues/674)) [[a3e56dd](https://github.com/scriptscat/scriptcat/commit/a3e56dd9d76cad73c8c8ec75c71fdbcfb9ca40e0)] (by @cyfung1031)
- 🎨 সামঞ্জস্য সমন্বয়: notificationsUpdate ([#673](https://github.com/scriptscat/scriptcat/issues/673)) [[a345d93](https://github.com/scriptscat/scriptcat/commit/a345d93187e26efe99cc331072ffc854b3fe7b4d)] (by @cyfung1031)
- 🎨 chrome.tabs.create সামঞ্জস্য উন্নত করুন ([#639](https://github.com/scriptscat/scriptcat/issues/639)) [[ac0d7de](https://github.com/scriptscat/scriptcat/commit/ac0d7deb5957ea71579ef7a44594a75300e1cca6)] (by @cyfung1031)

### ফিক্সড

- 🐛 ইনস্টলেশন মধ্যবর্তী পেজ অপ্রাপ্য হলে ইনস্টলেশন ট্রিগার করতে অক্ষম হওয়া ফিক্স করুন [#705](https://github.com/scriptscat/scriptcat/issues/705) [[5f1e292](https://github.com/scriptscat/scriptcat/commit/5f1e2929d79c470ba4427c3cce01f5cd184a839b)]
- 🐛 `@match *://*domain/*` এক্সপ্রেশন হ্যান্ডল করুন [[039b445](https://github.com/scriptscat/scriptcat/commit/039b4454148947cd3c74de82b87804ee9815e60c)]
- 🐛 এক্সটেনশন পরিবেশে স্যান্ডবক্স পালানো সমস্যা ফিক্স করুন [#700](https://github.com/scriptscat/scriptcat/issues/700) [[a1a868d](https://github.com/scriptscat/scriptcat/commit/a1a868dfe3199e666fe2bcb65cfb2ad0ad3d699b)]
- ✏️ backgroud -> background ([#698](https://github.com/scriptscat/scriptcat/issues/698)) [[2594075](https://github.com/scriptscat/scriptcat/commit/2594075c4a50f4c79fa46bcda08d7b0cbcfe723c)] (by @cyfung1031)
- ✏️ CrhomeStorage -> ChromeStorage ([#693](https://github.com/scriptscat/scriptcat/issues/693)) [[64c536d](https://github.com/scriptscat/scriptcat/commit/64c536dbd5fcb4c29eebc1109202bab69aaa3ee2)] (by @cyfung1031)
- 🐛 GM.getTab এবং GM.getTabs ফিক্স করুন ([#683](https://github.com/scriptscat/scriptcat/issues/683)) [[31de256](https://github.com/scriptscat/scriptcat/commit/31de256f02b5b61e27f0eec9ea673248ba8faa32)] (by @WhiteSevs)
- 🐛 finalUrl-এ ডোমেইন অনুপস্থিত থাকা ফিক্স করুন ([#656](https://github.com/scriptscat/scriptcat/issues/656)) [[545d7c8](https://github.com/scriptscat/scriptcat/commit/545d7c8c0dd69c83bd2f0353518aafe6af81c0f4)] (by @cyfung1031)
- 🐛 পুরানো ব্রাউজার কার্নেলের সাথে সামঞ্জস্যপূর্ণ [#647](https://github.com/scriptscat/scriptcat/issues/647) ([bba12d2](https://github.com/scriptscat/scriptcat/commit/bba12d23f04759cb9b7fdb63f0d95ae515ee94a9))

### বিবিধ

- 📝 README_RU.md এবং CONTRIBUTING_RU.md তৈরি করুন ([#678](https://github.com/scriptscat/scriptcat/issues/678)) [[597ab03](https://github.com/scriptscat/scriptcat/commit/597ab0378fe5ced01637cf411326ef7845b8ce2b)] (by @Ioann)
- 👷 সামঞ্জস্য সমন্বয় (pack.js সামঞ্জস্য) ([#669](https://github.com/scriptscat/scriptcat/issues/669)) [[fec45e6](https://github.com/scriptscat/scriptcat/commit/fec45e6606a609b10b79c58d2fcba02c2ce71e16)] (by @cyfung1031)

**সম্পূর্ণ পরিবর্তনের লগ**: https://github.com/scriptscat/scriptcat/compare/v1.1.0-beta.1...v1.1.0-beta.2

<a name="1.1.0-beta.1"></a>

## 1.1.0-beta.1 (2025-08-29)

### যোগ করা হয়েছে

- ✅ ইউনিট টেস্ট পরিবর্তন করুন ([#690](https://github.com/scriptscat/scriptcat/issues/690)) [[71f9d70](https://github.com/scriptscat/scriptcat/commit/71f9d709868b96352494889ea864c22c0b2ce197)] (by @cyfung1031)
- 🎨 Async কোড অপ্টিমাইজেশন ([#651](https://github.com/scriptscat/scriptcat/issues/651)) ([55440e7](https://github.com/scriptscat/scriptcat/commit/55440e725a706e4358f08bc430ebea77bcb25335))
- ✨ গ্লোবাল কোড সার্চ ([#662](https://github.com/scriptscat/scriptcat/issues/662)) [[f8eafb7](https://github.com/scriptscat/scriptcat/commit/f8eafb7f955dad62c1b41ac477e929bf00c65982)] (by @RenjiYuusei)
- ✅ nextTime ইউনিট টেস্ট সামঞ্জস্য করুন [[0a6ed8c](https://github.com/scriptscat/scriptcat/commit/0a6ed8c72b8ee6dc15b66f8053ae3bf3ee95584d)]

### পরিবর্তিত হয়েছে

- ♻️ ScriptMatchInfo সম্পর্কিত কোড অপ্টিমাইজেশন ([#653](https://github.com/scriptscat/scriptcat/issues/653)) [[556c493](https://github.com/scriptscat/scriptcat/commit/556c493f027fbfa7299ee68c3a9d927de6f41f08)] (by @cyfung1031)
- 🎨 উইন্ডো খোলার লজিক অপ্টিমাইজ করুন [[0de44bf](https://github.com/scriptscat/scriptcat/commit/0de44bfc90eeee003d9708ba0678e6c23f859579)]
- 🌐 অনুবাদ সমস্যা হ্যান্ডল করুন ([cbe880e](https://github.com/scriptscat/scriptcat/commit/cbe880efcf3a148301dce4ffa90aa29a14407a26))
- 🎨 `@scriptURL` ([#654](https://github.com/scriptscat/scriptcat/issues/654)) [[4b1a5de](https://github.com/scriptscat/scriptcat/commit/4b1a5de9ed3b328091f582925b8a442535953a9e)] (by @cyfung1031)
- ♻️ UrlMatch পুনরায় লিখুন ([#637](https://github.com/scriptscat/scriptcat/issues/637)) [[5b01c10](https://github.com/scriptscat/scriptcat/commit/5b01c10859b80890456a44a66d78204b42040870)] (by @cyfung1031)
- 🎨 getEnableScript অপ্টিমাইজেশন ([#645](https://github.com/scriptscat/scriptcat/issues/645)) [[04910cf](https://github.com/scriptscat/scriptcat/commit/04910cf6213fe90fc8cbca28f2826414855dd7b1)] (by @cyfung1031)
- ⚡ runtime.ts কোড অপ্টিমাইজেশন ([#642](https://github.com/scriptscat/scriptcat/issues/642)) [[641cc1d](https://github.com/scriptscat/scriptcat/commit/641cc1d1ec0ec2dff5d32689ba46d27d30f7b45f)] (by @cyfung1031)
- 🎨 chrome.tabs.create সামঞ্জস্য উন্নত করুন ([#639](https://github.com/scriptscat/scriptcat/issues/639)) [[601b933](https://github.com/scriptscat/scriptcat/commit/601b933bd5cec1405ac6169a6160a57dfe0dbcfc)] (by @cyfung1031)
- 🎨 নতুন স্ক্রিপ্ট `@match` `@icon` ফিক্স করুন ([#636](https://github.com/scriptscat/scriptcat/issues/636)) [[aec08a3](https://github.com/scriptscat/scriptcat/commit/aec08a331f868defee6279eb420f6b90aba39cfe)] (by @cyfung1031)

### সরানো হয়েছে

- 🔥 স্ক্রিপ্ট সাইট crowdin ডকুমেন্টেশন সরান [[695f4d1](https://github.com/scriptscat/scriptcat/commit/695f4d1ba2d039508415235dd8e606d238be8035)]

### ফিক্সড

- 🐛 finalUrl-এ ডোমেইন অনুপস্থিত থাকা ফিক্স করুন ([#656](https://github.com/scriptscat/scriptcat/issues/656)) [[3ed018a](https://github.com/scriptscat/scriptcat/commit/3ed018a7a54803fcf2e1791316e0166ed0b52007)] (by @cyfung1031)
- 💚 react/jsx-no-literals lint সমস্যা ফিক্স করুন [[017b608](https://github.com/scriptscat/scriptcat/commit/017b60886be601e3e0e1719cf249da32d5686c30)]
- 🐛 পুরানো ব্রাউজার কার্নেলের সাথে সামঞ্জস্যপূর্ণ [#647](https://github.com/scriptscat/scriptcat/issues/647) [[0e2f817](https://github.com/scriptscat/scriptcat/commit/0e2f8173c8b44bd6ad44bdffc73fa302a96a058e)]
- 🐛 window.external ইনজেকশন অপ্টিমাইজ করুন ([#646](https://github.com/scriptscat/scriptcat/issues/646)) [[0b2668a](https://github.com/scriptscat/scriptcat/commit/0b2668aadcab35a33ff9abc4bd030dffb87ea168)] (by @cyfung1031)
- 🐛 ক্লাউড স্টোরেজ auth পেজ স্বয়ংক্রিয়ভাবে বন্ধ করতে অক্ষম হওয়া ফিক্স করুন [[7748088](https://github.com/scriptscat/scriptcat/commit/7748088e63c1fc660b6a6ae5613cf04f9da99b8c)]

### বিবিধ

- 🌐 ভিয়েতনামী লোকেল পরিমার্জন ও প্রসারিত করুন ([#661](https://github.com/scriptscat/scriptcat/issues/661)) [[6847a59](https://github.com/scriptscat/scriptcat/commit/6847a596c4b06c75e13594ef60e4b9dfa5718cf3)] (by @RenjiYuusei)
- 🌐 অনুবাদ ফিক্স ([#635](https://github.com/scriptscat/scriptcat/issues/635)) [[19296de](https://github.com/scriptscat/scriptcat/commit/19296de6a3815e5965eb33401a55da9b2bd22bb4)] (by @cyfung1031)
- 🌐 অনবোর্ডিং গাইড i18n সমস্যা ফিক্স করুন [#627](https://github.com/scriptscat/scriptcat/issues/627) [[9683f96](https://github.com/scriptscat/scriptcat/commit/9683f965400ab6a2bac15349aca4335911766eac)]

<a name="1.1.0-beta"></a>

## 1.1.0-beta (2025-08-18)

### পরিবর্তিত হয়েছে

- ⚡ .reduce সিনট্যাক্স ব্যবহার করবেন না ([#619](https://github.com/scriptscat/scriptcat/issues/619)) [[71e97d5](https://github.com/scriptscat/scriptcat/commit/71e97d53fe152d5a8e479378366d077589df3d27)] (by @cyfung1031)
- ⚡ স্ক্রিপ্ট রিসোর্স লোডিং সমস্যা অপ্টিমাইজ করুন [#612](https://github.com/scriptscat/scriptcat/issues/612) [[e206562](https://github.com/scriptscat/scriptcat/commit/e2065622c2a544579bc84f25f178d118d902ccba)]
- 🎨 স্ক্রিপ্ট ইনস্টলেশন পেজ অপ্টিমাইজ করুন ([#611](https://github.com/scriptscat/scriptcat/issues/611)) ([bbc76b1](https://github.com/scriptscat/scriptcat/commit/bbc76b1110d417a445b3cc065488fe11b7f2ddc2))
- 🐛 বর্তমান উইন্ডোতে খোলার পদ্ধতি ফিক্স করুন ([70be8a3](https://github.com/scriptscat/scriptcat/commit/70be8a303b98b73885dac950dc1b24aa8cbbe773))
- 🎨 utils.ts অপ্টিমাইজ করুন ([#608](https://github.com/scriptscat/scriptcat/issues/608)) [[37bb763](https://github.com/scriptscat/scriptcat/commit/37bb763306c7e06df085022c2cb2fa9cc2788204)] (by @cyfung1031)
- 🎨 doThrow এবং TypeScript সংগঠন ([#606](https://github.com/scriptscat/scriptcat/issues/606)) [[4362802](https://github.com/scriptscat/scriptcat/commit/4362802fe3ba4482a283996cae9a424b23c69407)] (by @cyfung1031)
- ⚡ popup.ts এবং runtime.ts উন্নত করুন (কোড অপ্টিমাইজেশন) ([#607](https://github.com/scriptscat/scriptcat/issues/607)) [[e48ca66](https://github.com/scriptscat/scriptcat/commit/e48ca66cc4f56ef981543c1f56b5e7eb0c2fa14a)] (by @cyfung1031)
- 🎨 getCurrentTab সম্পর্কিত আপডেট ([#604](https://github.com/scriptscat/scriptcat/issues/604)) [[b4a9f2e](https://github.com/scriptscat/scriptcat/commit/b4a9f2efd48ee8cbacac6872ddb25c7d630bfd8a)] (by @cyfung1031)
- 🎨 TMessage TS সংজ্ঞা ([#596](https://github.com/scriptscat/scriptcat/issues/596)) [[6aeb61d](https://github.com/scriptscat/scriptcat/commit/6aeb61da8ae7efdd718facacf90e4ed40ddb4caf)] (by @cyfung1031)
- 🎨 ফেভিকন পেতে Service Worker ব্যবহার করুন ([#594](https://github.com/scriptscat/scriptcat/issues/594)) [[727872d](https://github.com/scriptscat/scriptcat/commit/727872d47552e4c53b09be33b526f7f69baad4ec)] (by @cyfung1031)
- 🎨 মেসেজ স্ট্যান্ডার্ডাইজেশন ([#595](https://github.com/scriptscat/scriptcat/issues/595)) [[791608b](https://github.com/scriptscat/scriptcat/commit/791608b31855b1415f9ad496ef6c52fe1809984d)] (by @cyfung1031)
- 🎨 SystemConfigChange কোড অপ্টিমাইজ করুন ([#593](https://github.com/scriptscat/scriptcat/issues/593)) [[041d985](https://github.com/scriptscat/scriptcat/commit/041d98523902319c88efdee3fa2ae40eab80aba8)] (by @cyfung1031)
- 🎨 EventEmitter কোড অপ্টিমাইজ করুন ([#592](https://github.com/scriptscat/scriptcat/issues/592)) [[67543c4](https://github.com/scriptscat/scriptcat/commit/67543c473b303a1708ea83ca00e49d5d687d6a34)] (by @cyfung1031)
- 🎨 Cache কোড অপ্টিমাইজ করুন ([#591](https://github.com/scriptscat/scriptcat/issues/591)) [[34e42ac](https://github.com/scriptscat/scriptcat/commit/34e42ac5f9ee504a90636d32c53def356c7d4495)] (by @cyfung1031)
- 🎨 নতুন স্ক্রিপ্ট টেমপ্লেট ডিফল্টভাবে `@grant none` ব্যবহার করে, TM-এর মতো ([#589](https://github.com/scriptscat/scriptcat/issues/589)) [[e5a2d5d](https://github.com/scriptscat/scriptcat/commit/e5a2d5d3adafdcac2cf95b865550e395ba8443c7)] (by @cyfung1031)
- ⚡ new Date().getTime() → Date.now() ([#587](https://github.com/scriptscat/scriptcat/issues/587)) [[245ecbf](https://github.com/scriptscat/scriptcat/commit/245ecbfc23f1811aeee5671e48151e94b0ebc128)] (by @cyfung1031)

### ফিক্সড

- 🐛 `@connect` \* কার্যকর না হওয়া সমস্যা ফিক্স করুন [#623](https://github.com/scriptscat/scriptcat/issues/623) [[76481c8](https://github.com/scriptscat/scriptcat/commit/76481c845b34414a7f15ed18ec61f7dff7eef091)]
- 🐛 ইউনিট টেস্ট যোগ করুন এবং `@exclude` সমস্যা ফিক্স করুন ([#618](https://github.com/scriptscat/scriptcat/issues/618)) [[0046bb7](https://github.com/scriptscat/scriptcat/commit/0046bb78800a2c46edaac785b8e9592327772a3b)] (by @cyfung1031)
- 🐛 কিছু .user.js লিংক স্ক্রিপ্ট ইনস্টল করতে অক্ষম হওয়া ফিক্স করুন [#599](https://github.com/scriptscat/scriptcat/issues/599) [[ccd2639](https://github.com/scriptscat/scriptcat/commit/ccd2639858f0f3cde28f284376fe8ed998d935ae)]
- 🐛 নতুন স্ক্রিপ্ট তৈরি ব্যর্থতা ফিক্স করুন [[d42d6e7](https://github.com/scriptscat/scriptcat/commit/d42d6e7d408a84674facf9ab0da6eac0e384502f)]
- 🐛 মেটাডেটা ফিক্স ([#610](https://github.com/scriptscat/scriptcat/issues/610)) [[4d98cce](https://github.com/scriptscat/scriptcat/commit/4d98cce0ca1281cc58f551ea4e6700e340780d3f)] (by @cyfung1031)
- 🐛 পপআপ ব্যাজ ফিক্স ([#605](https://github.com/scriptscat/scriptcat/issues/605)) [[eff9230](https://github.com/scriptscat/scriptcat/commit/eff92309de99abb0cf48ef4727afaa113bc2fbb6)] (by @cyfung1031)
- 🐛 ScriptEditor.tsx ফিক্স ([#603](https://github.com/scriptscat/scriptcat/issues/603)) [[a9aadba](https://github.com/scriptscat/scriptcat/commit/a9aadba372b813c16bdc5f0aeb07c68981f48c63)] (by @cyfung1031)
- 🐛 কোড ভিউয়ার এবং এডিটর CSS ফিক্স ([#602](https://github.com/scriptscat/scriptcat/issues/602)) [[2e86785](https://github.com/scriptscat/scriptcat/commit/2e8678513efaccd42c8dc2aa89f8b76679aa8420)] (by @cyfung1031)
- 🐛 getFaviconFromDomain কনকারেন্সি সমস্যা ফিক্স করুন ([#597](https://github.com/scriptscat/scriptcat/issues/597)) [[1872fe1](https://github.com/scriptscat/scriptcat/commit/1872fe165ab204b155a56f037c111d2d7776c2b9)] (by @cyfung1031)
- 🐛 মাল্টি-উইন্ডো পরিস্থিতিতে ট্যাব খোলার ত্রুটি ফিক্স করুন [#586](https://github.com/scriptscat/scriptcat/issues/586) [[54c1da2](https://github.com/scriptscat/scriptcat/commit/54c1da29c2bd8bd8f5ef2d85b7aed8b334de296f)]
- 🐛 openerTabId সামঞ্জস্য সমস্যা ফিক্স করুন ([#586](https://github.com/scriptscat/scriptcat/issues/586)) [[b861fc8](https://github.com/scriptscat/scriptcat/commit/b861fc8620e53b885cad98db03f1dd10ec9d296c)] (by @cyfung1031)

### বিবিধ

- 👷 pack.js কোড অপ্টিমাইজেশন ([#615](https://github.com/scriptscat/scriptcat/issues/615)) [[870dd9b](https://github.com/scriptscat/scriptcat/commit/870dd9bc6b7eff3eceefa915452e773ec0565180)] (by @cyfung1031)
