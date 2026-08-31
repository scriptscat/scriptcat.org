---
title: নির্ধারিত কাজের API
---

`@grant CAT.agent.task`

নির্ধারিত কাজের API একটি স্ক্রিপ্টকে Cron-এক্সপ্রেশন-ভিত্তিক নির্ধারিত কাজ তৈরি করতে দেয়, দুটি নির্বাহ মোড সহ।

## নির্বাহ মোড

### অভ্যন্তরীণ মোড

Agent সিস্টেম দ্বারা স্বয়ংক্রিয়ভাবে পরিচালিত:
- Cron সময়সূচী সক্রিয় হলে স্বয়ংক্রিয়ভাবে একটি কথোপকথন তৈরি বা পুনরায় শুরু করে
- কনফিগার করা `prompt` LLM-এ পাঠায়
- একটি মডেল এবং Skill নির্দিষ্ট করা যায়
- নির্বাহের ইতিহাস এবং টোকেন ব্যবহার স্বয়ংক্রিয়ভাবে রেকর্ড করা হয়

### ইভেন্ট মোড

স্ক্রিপ্ট নিজেই পরিচালিত:
- Cron সময়সূচী সক্রিয় হলে স্ক্রিপ্টে একটি ইভেন্ট বিজ্ঞপ্তি পাঠানো হয়
- স্ক্রিপ্টটি `addListener`-এর মাধ্যমে ইভেন্ট শোনে
- পরিচালনা লজিক সম্পূর্ণ কাস্টম

## create — একটি কাজ তৈরি করুন

```javascript
const task = await CAT.agent.task.create(options);
```

**প্যারামিটার (`AgentTaskCreateOptions`):**

| প্যারামিটার | ধরন | প্রয়োজনীয় | বর্ণনা |
|------|------|------|------|
| `name` | `string` | হ্যাঁ | কাজের নাম |
| `crontab` | `string` | হ্যাঁ | স্ট্যান্ডার্ড Cron এক্সপ্রেশন (৫ ফিল্ড: মিনিট ঘণ্টা দিন মাস সপ্তাহের দিন) |
| `mode` | `"internal" \| "event"` | হ্যাঁ | নির্বাহ মোড |
| `enabled` | `boolean` | না | এটি সক্রিয় কিনা, ডিফল্ট `true` |
| `notify` | `boolean` | না | এটি সক্রিয় হলে ব্রাউজার বিজ্ঞপ্তি পাঠাবে কিনা |
| `prompt` | `string` | না | অভ্যন্তরীণ মোডের জন্য prompt |
| `modelId` | `string` | না | অভ্যন্তরীণ মোডে ব্যবহার করার মডেল আইডি |
| `skills` | `string[]` | না | অভ্যন্তরীণ মোডে লোড করার Skill |
| `maxIterations` | `number` | না | অভ্যন্তরীণ মোডের জন্য সর্বোচ্চ টুল-কল রাউন্ড, ডিফল্ট `10` |

**`AgentTask` ফিরিয়ে দেয়:**

| ফিল্ড | ধরন | বর্ণনা |
|------|------|------|
| `id` | `string` | কাজের আইডি |
| `name` | `string` | কাজের নাম |
| `crontab` | `string` | Cron এক্সপ্রেশন |
| `mode` | `string` | নির্বাহ মোড |
| `enabled` | `boolean` | এটি সক্রিয় কিনা |
| `notify` | `boolean` | বিজ্ঞপ্তি পাঠানো হয় কিনা |
| `nextruntime` | `number` | পরবর্তী রান টাইমস্ট্যাম্প |
| `lastruntime` | `number` | শেষ রান টাইমস্ট্যাম্প |
| `conversationId` | `string` | অভ্যন্তরীণ মোডে সংশ্লিষ্ট কথোপকথন আইডি (ঐচ্ছিক) |
| `lastRunStatus` | `"success" \| "error"` | শেষ রানের অবস্থা |
| `lastRunError` | `string` | শেষ রানের ত্রুটি বার্তা |
| `createtime` | `number` | তৈরি টাইমস্ট্যাম্প |

**Cron এক্সপ্রেশন উদাহরণ:**

| এক্সপ্রেশন | বর্ণনা |
|--------|------|
| `* * * * *` | প্রতি মিনিটে |
| `0 9 * * *` | প্রতিদিন 09:00-এ |
| `0 */2 * * *` | প্রতি ২ ঘণ্টায় |
| `30 8 * * 1-5` | সপ্তাহের দিন 08:30-এ |
| `0 0 1 * *` | প্রতি মাসের ১ তারিখে 00:00 |

## list — সমস্ত কাজ তালিকা করুন

```javascript
const tasks = await CAT.agent.task.list();
```

বর্তমান স্ক্রিপ্ট দ্বারা তৈরি সমস্ত কাজ ফিরিয়ে দেয়।

## get — কাজের বিবরণ পান

```javascript
const task = await CAT.agent.task.get(taskId);
```

কাজটি না থাকলে `undefined` ফিরিয়ে দেয়।

## update — একটি কাজ আপডেট করুন

```javascript
const task = await CAT.agent.task.update(taskId, partial);
```

**আপডেটযোগ্য ফিল্ড:**

```javascript
await CAT.agent.task.update(task.id, {
  name: "নতুন নাম",
  crontab: "0 10 * * *",
  enabled: false,
  prompt: "নতুন prompt",
  notify: true
});
```

আপডেটের পরে `nextruntime` স্বয়ংক্রিয়ভাবে পুনরায় গণনা করা হয়।

## remove — একটি কাজ মুছুন

```javascript
const success = await CAT.agent.task.remove(taskId);
```

## runNow — অবিলম্বে চালান

```javascript
await CAT.agent.task.runNow(taskId);
```

কাজটিকে তার Cron সময়সূচীর জন্য অপেক্ষা না করে অবিলম্বে একবার চালাতে ট্রিগার করে (অ-ব্লকিং, পটভূমিতে চলে)।

## addListener — কাজের ট্রিগার শুনুন

```javascript
const listenerId = await CAT.agent.task.addListener(taskId, callback);
```

শুধুমাত্র **ইভেন্ট মোড** কাজের জন্য ব্যবহৃত হয়। Cron সময়সূচী সক্রিয় হলে কলব্যাক চলে।

**কলব্যাক প্যারামিটার (`AgentTaskTrigger`):**

| ফিল্ড | ধরন | বর্ণনা |
|------|------|------|
| `taskId` | `string` | কাজের আইডি |
| `name` | `string` | কাজের নাম |
| `crontab` | `string` | Cron এক্সপ্রেশন |
| `triggeredAt` | `number` | ট্রিগার টাইমস্ট্যাম্প |

## removeListener — একটি শ্রোতা অপসারণ করুন

```javascript
await CAT.agent.task.removeListener(listenerId);
```

## সম্পূর্ণ উদাহরণ

### অভ্যন্তরীণ মোড — AI স্বয়ংক্রিয়ভাবে চালায়

```javascript
// ==UserScript==
// @name        নির্ধারিত খবরের সারসংক্ষেপ
// @match       *://*/*
// @grant       CAT.agent.task
// ==/UserScript==

const task = await CAT.agent.task.create({
  name: "দৈনিক খবরের সারসংক্ষেপ",
  crontab: "0 9 * * *",       // প্রতিদিন 9টায়
  mode: "internal",
  prompt: "আজকের প্রযুক্তি খবর অনুসন্ধান করুন এবং OPFS-এ একটি সংক্ষিপ্ত সারসংক্ষেপ সংরক্ষণ করুন",
  skills: ["web-search"],
  maxIterations: 10,
  notify: true
});

console.log("কাজ তৈরি হয়েছে, পরবর্তী রান:", new Date(task.nextruntime));
```

### ইভেন্ট মোড — স্ক্রিপ্ট নিজেই পরিচালনা করে

```javascript
// ==UserScript==
// @name        নির্ধারিত ডেটা সংগ্রহ
// @match       *://*/*
// @grant       CAT.agent.task
// @grant       CAT.agent.dom
// ==/UserScript==

const task = await CAT.agent.task.create({
  name: "স্টক ডেটা সংগ্রহ",
  crontab: "*/30 9-15 * * 1-5", // প্রতি ৩০ মিনিটে, সপ্তাহের দিন 9-15
  mode: "event",
  enabled: true,
  notify: false
});

await CAT.agent.task.addListener(task.id, async (trigger) => {
  console.log(`কাজ ট্রিগার হয়েছে: ${trigger.name} এ ${new Date(trigger.triggeredAt)}`);

  // কাস্টম সংগ্রহ লজিক
  await CAT.agent.dom.navigate("https://finance.example.com/stock");
  const content = await CAT.agent.dom.readPage({ selector: ".stock-table" });

  // ডেটা প্রক্রিয়া করুন...
  console.log("সংগ্রহ সম্পন্ন");
});
```
