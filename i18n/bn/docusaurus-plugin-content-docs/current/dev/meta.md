---
title: মেটাডেটা ব্লক
---

`==UserScript==`-এর ভিতরের বিষয়বস্তু একটি স্ক্রিপ্টের প্রয়োজনীয় অনুমতি, স্ক্রিপ্ট সম্পর্কে তথ্য ইত্যাদি বর্ণনা করে। এটি স্ক্রিপ্টের একেবারে শুরুতে অবস্থিত।

```js
// ==UserScript==
// @name         নতুন ইউজারস্ক্রিপ্ট
// @namespace    https://bbs.tampermonkey.net.cn/
// @version      0.1.0
// @description  বিশ্ব দখল করার চেষ্টা করুন!
// @author       আপনি
// @crontab      * * once * *
// ==/UserScript==
```

## প্রধান মান

### name

স্ক্রিপ্টের নাম

### namespace

স্ক্রিপ্ট নেমস্পেস। `name + namespace` স্ক্রিপ্টের স্বতন্ত্রতা নির্ধারণ করে।

### version

স্ক্রিপ্টের সংস্করণ। [সেমান্টিক ভার্সনিং](https://semver.org/) অনুসরণ করার পরামর্শ দেওয়া হয়, যাতে সংস্করণ পরিবর্তন সনাক্ত হলে ব্যবহারকারীকে আপডেট করতে বলা হয় এবং আরও কিছু।

### description

স্ক্রিপ্টের বিস্তারিত বর্ণনা

### author

স্ক্রিপ্ট লেখক

### run-at

স্ক্রিপ্ট কখন চলে

| মান          | নির্বাহ                                                              | থেকে সমর্থিত        |
| -------------- | ------------------------------------------------------------------ | ---------------------- |
| document-start | ফ্রন্টএন্ডে URL মিললে সাথে সাথে স্ক্রিপ্টটিকে পৃষ্ঠায় ইনজেক্ট করে | v0.3.0          |
| document-end   | DOM লোড শেষ হওয়ার পরে স্ক্রিপ্ট ইনজেক্ট করে; এই সময়ে পৃষ্ঠা স্ক্রিপ্ট ও ছবি এখনও লোড হতে পারে | v0.3.0 |
| document-idle  | সমস্ত বিষয়বস্তু লোড শেষ হওয়ার পরে স্ক্রিপ্ট ইনজেক্ট করে         | v0.3.0                  |
| document-body  | পৃষ্ঠায় `body` এলিমেন্ট থাকলে স্ক্রিপ্টটি ইনজেক্ট হয়     | v0.6.2                  |
| document-menu  | ডান-ক্লিকে একটি মেনু দেখায়; স্ক্রিপ্ট চালালে স্ক্রিপ্টের নাম মেনু নাম হিসাবে ব্যবহৃত হয় | v0.3.4-v0.9.4 (🔥 সরানো হয়েছে) |

মেনু আইকনের জন্য, আপনি [ইউনিকোড সিম্বল](https://unicode-table.com/en/) এবং [ইমোজি](https://www.emojiall.com/en-US/) উল্লেখ করতে পারেন।

### run-in

স্ক্রিপ্টটি যে পরিবেশে ইনজেক্ট হয় তা নির্দিষ্ট করে: নিয়মিত ট্যাবের জন্য `@run-in normal-tabs`, ইনকগনিটো ট্যাবের জন্য `@run-in incognito-tabs`।

### early-start (v1.1.0+)

যখন `run-at` হয় `document-start`, স্ক্রিপ্টটি যতটা সম্ভব তাড়াতাড়ি চলে, কিন্তু এটি পৃষ্ঠার চেয়ে দ্রুত লোড হওয়ার নিশ্চয়তা দিতে পারে না।

একবার `@run-at document-start` সংজ্ঞায়িত করলে, আপনি স্ক্রিপ্টটিকে পৃষ্ঠার চেয়ে দ্রুত লোড করতে `@early-start` যোগ করতে পারেন: [উদাহরণ](https://github.com/scriptscat/scriptcat/blob/main/example/early-start.js)

### inject-into

:::tip

কনটেন্ট-স্ক্রিপ্ট পরিবেশে (`content`), `unsafeWindow` শুধুমাত্র পরিবেশের নিজস্ব বর্তমান `window`-কে নির্দেশ করে এবং পৃষ্ঠার `window`-এ অ্যাক্সেস করতে পারে না।

ScriptCat `content` বা `page` হিসাবে ইনজেক্ট করার সিদ্ধান্ত নিতে CSP সীমাবদ্ধতা স্বয়ংক্রিয়ভাবে পরীক্ষা করা সমর্থন করে না (অর্থাৎ Tampermonkey-এর `@inject-into auto`)।

:::

স্ক্রিপ্টটি কোথায় ইনজেক্ট হয় তা নির্দিষ্ট করে, `page` এবং `content` সমর্থন করে, ডিফল্ট `page`।

- `page`: স্ক্রিপ্টটি পৃষ্ঠা পরিবেশে ইনজেক্ট হয় এবং পৃষ্ঠার `window` ও `DOM` অ্যাক্সেস করতে `unsafeWindow` ব্যবহার করতে পারে
- `content`: স্ক্রিপ্টটি কনটেন্ট-স্ক্রিপ্ট পরিবেশে ইনজেক্ট হয়, সরাসরি পৃষ্ঠার `window` অবজেক্ট অ্যাক্সেস করতে পারে না, তবে পৃষ্ঠার `DOM` অ্যাক্সেস করতে পারে এবং `CSP`-এর অধীন নয়

### storageName 🧪

`Value`-এর জন্য স্টোরেজ স্পেস; একই `storageName`-এর অধীনে ডেটা স্ক্রিপ্টগুলির মধ্যে ভাগ ও যোগাযোগ করা যায়। এটি ScriptCat-নির্দিষ্ট।

### background

এই স্ক্রিপ্টটিকে ব্যাকগ্রাউন্ড স্ক্রিপ্ট হিসাবে চিহ্নিত করে, যা ব্যাকগ্রাউন্ড পরিবেশে চালানো প্রয়োজন। বিস্তারিত জানতে [ব্যাকগ্রাউন্ড স্ক্রিপ্ট](./background.md#background-script-background) দেখুন।

### crontab

স্ক্রিপ্টটিকে নির্ধারিত স্ক্রিপ্ট হিসাবে চিহ্নিত করে, যার জন্য একটি cron এক্সপ্রেশন মান প্রয়োজন। শুধুমাত্র একটি cron এক্সপ্রেশন থাকতে পারে এবং এটি ব্যাকগ্রাউন্ড পরিবেশে সেই সময়সূচীতে চলে। বিস্তারিত জানতে [নির্ধারিত স্ক্রিপ্ট](./background.md#scheduled-script-crontab) দেখুন।

### match

`match`-এর সাথে মিলে যাওয়া URL গুলিই স্ক্রিপ্ট চালাবে, [ম্যাচ প্যাটার্ন](https://developer.chrome.com/docs/extensions/mv3/match_patterns/) অনুসরণ করে। `match`-এ, `*` একটি ওয়াইল্ডকার্ড, `tld` টপ-লেভেল ডোমেইনের সাথে মেলে এবং `*.` দিয়ে শুরু হওয়া একটি ডোমেইনও `xxx.com`-এর সাথে মেলে:

| মান                             | সঠিক উদাহরণ                                                                                                                          | ভুল উদাহরণ                          |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| `http://scriptcat.org/doc/match`  | `http://scriptcat.org/doc/match`                                                                                                            | `http://scriptcat.org/doc/runAt`         |
| `*://*/param?*`                   | `https://scriptcat.org/param` \| `http://scriptcat.org/param?search=tampermonkey`                                                            | `https://scriptcat.org/test/param`       |
| `*://*/prefix*suffix`             | `http://scriptcat.org/prefix/suffix` \| `http://scriptcat.org/prefix/mid/suffix` \| `http://scriptcat.org/prefixsuffix`                      | `http://scriptcat.org/prefix/suffix/end` |
| `http*://scriptcat.org/*`         | `https://scriptcat.org/` \| `https://scriptcat.org/doc` \| `http://scriptcat.org/doc/match` \| `http://scriptcat.org/param?search=tampermonkey` | `https://doc.scriptcat.org/`            |
| `http*://scriptcat.org/doc/*`     | `https://scriptcat.org/doc` \| `http://scriptcat.org/doc/match`                                                                              | `http://scriptcat.org/param?search=tampermonkey` |
| `http*://scriptcat.tld/doc/*`     | `https://scriptcat.cn/doc` \| `http://scriptcat.net.cn/doc/match`                                                                            | `http://google.com/param?search=tampermonkey` |
| `http*://*.scriptcat.org/doc/*`   | `https://scriptcat.cn/doc` \| `http://www.scriptcat.net.cn/doc/match`                                                                        | `http://google.com/param?search=tampermonkey` |

### include

ফাজি ম্যাচিংয়ের জন্য `\*` সমর্থন করে, অ-মানক URL অনুমতি দেয়

### exclude

যে URL গুলির সাথে মিলে না; `include`-এর মতো একই এক্সপ্রেশন সিনট্যাক্স ব্যবহার করে

### grant

API অনুমতি অনুরোধ করে — অনুরোধ করার পরেই একটি API কল করা যায়। অনুমতি তালিকা দেখুন: [API ডকুমেন্টেশন](./api.md) এবং [CAT API ডকুমেন্টেশন](./cat-api.md)।

দুটি বিশেষ মান:

- **none**: স্ক্রিপ্টটি স্যান্ডবক্স পরিবেশে চলে না, বরং সরাসরি পৃষ্ঠা পরিবেশে চলে। এই পরিবেশে, কোনো GM API উপলব্ধ নেই, তবে পৃষ্ঠার `window` অবজেক্ট সরাসরি অ্যাক্সেস করা যায়।
- **unsafeWindow**: স্যান্ডবক্স পরিবেশে, পৃষ্ঠার `window` অবজেক্ট অ্যাক্সেস করার প্রয়োজন হলে, এটি করতে `unsafeWindow` ব্যবহার করুন। (Tampermonkey-এর এটি ঘোষণার প্রয়োজন নেই — এটি শুধুমাত্র সামঞ্জস্যের জন্য রাখা হয়েছে, যা সত্যি বলতে খুব পরিষ্কার নয়।)

### connect

একটি সাইটের জন্য অ্যাক্সেস অনুমতি অনুরোধ করে; `GM_cookie` এবং `GM_xmlhttpRequest` দেখুন। `native` মোডে `GM_download`-ও `@connect` সম্মান করে (ঘোষণাবিহীন হোস্ট একটি নিশ্চিতকরণ প্রম্পট ট্রিগার করে, Tampermonkey-এর বিপরীতে)

### resource

একটি রিসোর্স ফাইল অন্তর্ভুক্ত করে। `@resource` ঘোষণার পরে, তথ্য পুনরুদ্ধার করতে `GM_getResourceText`/`GM_getResourceURL` ব্যবহার করতে পারেন।

```js
// @resource icon https://bbs.tampermonkey.net.cn/favicon.ico
// @resource html https://bbs.tampermonkey.net.cn/
// @resource xml https://bbs.tampermonkey.net.cn/sitemap.xml
// রিসোর্স অখণ্ডতা যাচাই যোগ করা
// @resource icon https://bbs.tampermonkey.net.cn/favicon.ico#md5-xxx,sha256-xxx
```

### require

একটি বাহ্যিক JS ফাইল অন্তর্ভুক্ত করে; [রিসোর্স অখণ্ডতা যাচাই](#resource-integrity-verification) সমর্থন করে

### require-css

একটি বাহ্যিক CSS ফাইল অন্তর্ভুক্ত করে; [রিসোর্স অখণ্ডতা যাচাই](#resource-integrity-verification) সমর্থন করে

### noframes

স্ক্রিপ্টটিকে একটি `<frame>`-এর ভিতরে চলে না হিসাবে চিহ্নিত করে

### definition

একটি `.d.ts` ফাইলের রেফারেন্স ঠিকানা, যা এডিটর অটো-সম্প্লিশন ইঙ্গিত সক্রিয় করে

### antifeature

এটি স্ক্রিপ্ট মার্কেটপ্লেসের সাথে সম্পর্কিত; অবাঞ্ছিত বৈশিষ্ট্যগুলিকে এই বর্ণনার মান দিয়ে চিহ্নিত করতে হবে, উদাহরণস্বরূপ:

```js
// @antifeature ads এই স্ক্রিপ্টে বিজ্ঞাপন আছে
// @antifeature referral-link এই স্ক্রিপ্ট লেখকের রেফারেল লিংক পরিবর্তন করে বা রিডাইরেক্ট করে
```

## অতিরিক্ত বর্ণনার মান

### license

বর্তমান স্ক্রিপ্টের ওপেন-সোর্স লাইসেন্স

### updateURL

আপডেট পরীক্ষার জন্য এইটি কার্যকর হওয়ার জন্য রিমোট স্ক্রিপ্টে একটি `@version` ট্যাগ থাকা প্রয়োজন।

স্ক্রিপ্টটি আপডেট পরীক্ষা করতে যে লিংক ব্যবহার করে; সেট না থাকলে, লিংকের `user.js => meta.js` ডিফল্ট হয়, বা `user.js` না থাকলে বর্তমান লিংক।

যদি `@updateURL` কনফিগার করা থাকে, `@updateURL` কার্যকর হওয়ার জন্য `@downloadURL`-ও কনফিগার করতে হবে।

### downloadURL

স্ক্রিপ্ট আপডেটের ডাউনলোড ঠিকানা

### supportURL

সাপোর্ট সাইট, বাগ রিপোর্ট পৃষ্ঠা

### homepage, homepageURL, website

স্ক্রিপ্ট হোমপেজ

### source

স্ক্রিপ্ট সোর্স কোড পৃষ্ঠা

### icon, iconURL, defaulticon

স্ক্রিপ্ট আইকন

### icon64, icon64URL

64x64 সাইজের স্ক্রিপ্ট আইকন

### copyright

স্ক্রিপ্ট কপিরাইট তথ্য

### tag

স্ক্রিপ্ট ট্যাগ, কমা বা স্পেস দ্বারা পৃথক

### compatible

GreasyFork-এ দেখানো সামঞ্জস্য তথ্য

### scriptUrl

একটি সাবস্ক্রিপশন স্ক্রিপ্ট দ্বারা উল্লেখিত ইউজার স্ক্রিপ্ট URL

### unwrap

ইউজার স্ক্রিপ্টকে স্যান্ডবক্স মোড়ানো বাইপাস করে পৃষ্ঠার নেটিভ গ্লোবাল স্কোপে সরাসরি ইনজেক্ট ও নির্বাহ করতে দেয়। স্ক্রিপ্টটি পৃষ্ঠার প্রকৃত গ্লোবাল ভেরিয়েবল সরাসরি অ্যাক্সেস ও পরিবর্তন করতে পারে, কিন্তু `GM.*`-এর মতো ইউজার স্ক্রিপ্ট সুবিধাপ্রাপ্ত API ব্যবহার করতে পারবে না। সাধারণত নেটিভ পৃষ্ঠা স্ক্রিপ্টগুলির সাথে গভীর মিথস্ক্রিয়া প্রয়োজন এমন পরিস্থিতিতে বা একটি বিদ্যমান নিয়মিত পৃষ্ঠা স্ক্রিপ্ট স্থানান্তর করার সময় ব্যবহৃত হয়।

### cloudCat

স্ক্রিপ্টটিকে একটি CloudCat ক্লাউড স্ক্রিপ্ট প্যাকেজে রপ্তানি করা যায় হিসাবে চিহ্নিত করে (শুধুমাত্র SC)

### cloudServer

স্ক্রিপ্ট দ্বারা ব্যবহৃত CloudCat ক্লাউড পরিষেবা

### exportValue

ক্লাউড স্ক্রিপ্ট হিসাবে রপ্তানি করার সময় রপ্তানি করার স্ক্রিপ্ট স্টোরেজ মান

### exportCookie

ক্লাউড স্ক্রিপ্ট হিসাবে রপ্তানি করার সময় রপ্তানি করার কুকি

### নোট

### রিসোর্স অখণ্ডতা যাচাই {#resource-integrity-verification}

- টেম্পারিংয়ের বিরুদ্ধে রিসোর্স যাচাই করতে md5, sha1, sha256, sha384 বা sha512 ব্যবহার করুন। একাধিক যাচাই পদ্ধতি `;` বা `,` দিয়ে পৃথক করা যায়।
- [W3C সুপারিশ](https://w3c.github.io/webappsec-subresource-integrity/#hash-collision-attacks) অনুসারে, md5 এবং sha1 সুপারিশ করা হয় না; পরিবর্তে sha384 বা একটি শক্তিশালী হ্যাশ অ্যালগরিদম ব্যবহার করুন।

উদাহরণস্বরূপ:

```js
// @require https://cdn.jsdelivr.net/npm/darkmode-js@1.5.7/lib/darkmode-js.min.js#md5-d55836f30c097da753179f82fa6f108f,sha256-a476ab8560837a51938aa6e1720c8be87c2862b6221690e9de7ffac113811a90
```
