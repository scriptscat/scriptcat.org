---
title: DOM ম্যানিপুলেশন API
---

`@grant CAT.agent.dom`

DOM ম্যানিপুলেশন API সম্পূর্ণ ব্রাউজার পৃষ্ঠা অটোমেশন প্রদান করে: নেভিগেশন, বিষয়বস্তু পড়া, স্ক্রিনশট, ফর্ম ইন্টারঅ্যাকশন এবং DOM পর্যবেক্ষণ।

## ট্যাব ব্যবস্থাপনা

### listTabs — ট্যাব তালিকা করুন

```javascript
const tabs = await CAT.agent.dom.listTabs();
```

প্রতিটি খোলা ট্যাব সম্পর্কে তথ্য ফিরিয়ে দেয়।

**`TabInfo[]` ফিরিয়ে দেয়:**

| ফিল্ড | ধরন | বর্ণনা |
|------|------|------|
| `tabId` | `number` | ট্যাব আইডি |
| `url` | `string` | বর্তমান URL |
| `title` | `string` | পৃষ্ঠার শিরোনাম |
| `active` | `boolean` | এটি বর্তমানে সক্রিয় ট্যাব কিনা |
| `windowId` | `number` | এটি যে উইন্ডোর অন্তর্গত তার আইডি |
| `discarded` | `boolean` | এটি বাতিল (সাসপেন্ডেড) হয়েছে কিনা |

## নেভিগেশন

### navigate — একটি পৃষ্ঠা নেভিগেট করুন

```javascript
const result = await CAT.agent.dom.navigate(url, options?);
```

**প্যারামিটার:**

| প্যারামিটার | ধরন | ডিফল্ট | বর্ণনা |
|------|------|--------|------|
| `url` | `string` | — | লক্ষ্য URL (প্রয়োজনীয়) |
| `options.tabId` | `number` | বর্তমান সক্রিয় ট্যাব | কোন ট্যাব ব্যবহার করবেন |
| `options.waitUntil` | `boolean` | `true` | পৃষ্ঠা লোড শেষ হওয়ার জন্য অপেক্ষা করবেন কিনা |
| `options.timeout` | `number` | `30000` | মিলিসেকেন্ডে টাইমআউট |

**`NavigateResult` ফিরিয়ে দেয়:**

```typescript
{ tabId: number; url: string; title: string }
```

## বিষয়বস্তু পড়া

### readPage — পৃষ্ঠার বিষয়বস্তু পড়ুন

```javascript
const page = await CAT.agent.dom.readPage(options?);
```

পৃষ্ঠার DOM-কে কাঠামোবদ্ধ টেক্সটে রূপান্তর করে, স্বয়ংক্রিয়ভাবে `<script>`, `<style>`, `<noscript>`, `<svg>` এবং `<link[rel=stylesheet]>`-এর মতো অপ্রাসঙ্গিক উপাদান সরিয়ে দেয়।

**প্যারামিটার:**

| প্যারামিটার | ধরন | ডিফল্ট | বর্ণনা |
|------|------|--------|------|
| `options.tabId` | `number` | বর্তমান সক্রিয় ট্যাব | কোন ট্যাব ব্যবহার করবেন |
| `options.selector` | `string` | — | CSS সিলেক্টর; শুধুমাত্র ম্যাচ করা উপাদানের বিষয়বস্তু ফিরিয়ে দেওয়া হয় |
| `options.maxLength` | `number` | — | সর্বোচ্চ বিষয়বস্তু অক্ষর; এর বাইরে ছাঁটাই হয় |
| `options.removeTags` | `string[]` | — | অপসারণের জন্য অতিরিক্ত ট্যাগ নাম |

**`PageContent` ফিরিয়ে দেয়:**

| ফিল্ড | ধরন | বর্ণনা |
|------|------|------|
| `title` | `string` | পৃষ্ঠার শিরোনাম |
| `url` | `string` | পৃষ্ঠার URL |
| `html` | `string` | প্রক্রিয়াকৃত পৃষ্ঠার টেক্সট বিষয়বস্তু |
| `truncated` | `boolean` | বিষয়বস্তু ছাঁটাই করা হয়েছে কিনা |
| `totalLength` | `number` | মূল বিষয়বস্তুর মোট দৈর্ঘ্য |

### screenshot — স্ক্রিনশট নিন

```javascript
const shot = await CAT.agent.dom.screenshot(options?);
```

**প্যারামিটার:**

| প্যারামিটার | ধরন | ডিফল্ট | বর্ণনা |
|------|------|--------|------|
| `options.tabId` | `number` | বর্তমান সক্রিয় ট্যাব | কোন ট্যাব ব্যবহার করবেন |
| `options.quality` | `number` | `80` | JPEG গুণমান (0-100) |
| `options.fullPage` | `boolean` | `false` | পুরো পৃষ্ঠাটি ক্যাপচার করুন |
| `options.selector` | `string` | — | CSS সিলেক্টর; শুধুমাত্র ম্যাচ করা উপাদানের এলাকা ক্যাপচার করুন |
| `options.saveTo` | `string` | — | OPFS ওয়ার্কস্পেসে সংরক্ষণের পথ |

**`ScreenshotResult` ফিরিয়ে দেয়:**

| ফিল্ড | ধরন | বর্ণনা |
|------|------|------|
| `dataUrl` | `string` | base64 ডেটা URL |
| `path` | `string` | OPFS সংরক্ষণের পথ (যখন `saveTo` ব্যবহার করা হয়) |
| `size` | `number` | ফাইলের আকার (যখন `saveTo` ব্যবহার করা হয়) |

**ক্যাপচার মোড কীভাবে বেছে নেওয়া হয়:**

| পরিস্থিতি | আচরণ |
|------|------|
| `selector` দেওয়া আছে | CDP-এর মাধ্যমে উপাদানের সীমানা খুঁজে স্ক্রিনশট ক্রপ করে |
| পটভূমি ট্যাব | CDP স্ক্রিনশট চেষ্টা করে; ব্যর্থ হলে, ট্যাব সক্রিয় করে এবং `captureVisibleTab` ব্যবহার করে |
| অগ্রভাগ ট্যাব | সরাসরি `captureVisibleTab` ব্যবহার করে |

```javascript
// একটি স্ক্রিনশট OPFS-এ সংরক্ষণ করুন
const shot = await CAT.agent.dom.screenshot({
  saveTo: "screenshots/page.png",
  quality: 90
});
console.log(`সংরক্ষিত হয়েছে ${shot.path}, আকার ${shot.size} bytes`);
```

## পৃষ্ঠা ইন্টারঅ্যাকশন

### click — একটি উপাদানে ক্লিক করুন

```javascript
const result = await CAT.agent.dom.click(selector, options?);
```

**প্যারামিটার:**

| প্যারামিটার | ধরন | ডিফল্ট | বর্ণনা |
|------|------|--------|------|
| `selector` | `string` | — | CSS সিলেক্টর (প্রয়োজনীয়) |
| `options.tabId` | `number` | বর্তমান সক্রিয় ট্যাব | কোন ট্যাব ব্যবহার করবেন |
| `options.trusted` | `boolean` | `false` | একটি প্রকৃত মাউস ইভেন্ট প্রেরণ করতে CDP ব্যবহার করুন |

**`ActionResult` ফিরিয়ে দেয়:**

| ফিল্ড | ধরন | বর্ণনা |
|------|------|------|
| `success` | `boolean` | এটি সফল হয়েছে কিনা |
| `navigated` | `boolean` | ক্লিকটি পৃষ্ঠা নেভিগেশন ট্রিগার করেছে কিনা |
| `url` | `string` | নেভিগেশনের পরে নতুন URL |
| `newTab` | `boolean` | একটি নতুন ট্যাব খোলা হয়েছে কিনা |

**`trusted` বনাম সাধারণ ক্লিক:**

- `trusted: false` (ডিফল্ট) — ইনজেক্ট করা JS-এর মাধ্যমে `element.click()` সিমুলেট করে; দ্রুত, তবে কিছু সাইট এটি প্রকৃত ইভেন্ট নয় হিসাবে সনাক্ত করতে পারে
- `trusted: true` — Chrome DevTools Protocol-এর মাধ্যমে একটি প্রকৃত মাউস ইভেন্ট পাঠায়, প্রকৃত ব্যবহারকারীর ইন্টারঅ্যাকশন থেকে আলাদা করা যায় না, তবে ডিবাগার অনুমতি প্রয়োজন

### fill — একটি ফর্ম ফিল্ড পূরণ করুন

```javascript
const result = await CAT.agent.dom.fill(selector, value, options?);
```

**প্যারামিটার:**

| প্যারামিটার | ধরন | বর্ণনা |
|------|------|------|
| `selector` | `string` | CSS সিলেক্টর (প্রয়োজনীয়) |
| `value` | `string` | পূরণ করার মান (প্রয়োজনীয়) |
| `options.tabId` | `number` | কোন ট্যাব ব্যবহার করবেন |
| `options.trusted` | `boolean` | কীবোর্ড ইনপুট সিমুলেট করতে CDP ব্যবহার করুন |

**আচরণ:**
- সাধারণ মোড: `element.value` সেট করে এবং একটি `input` ইভেন্ট প্রেরণ করে
- বিশ্বস্ত মোড: CDP উপাদানটি ফোকাস করে → অক্ষর দ্বারা অক্ষর টাইপ করে

### scroll — পৃষ্ঠা স্ক্রল করুন

```javascript
const result = await CAT.agent.dom.scroll(direction, options?);
```

**প্যারামিটার:**

| প্যারামিটার | ধরন | বর্ণনা |
|------|------|------|
| `direction` | `"up" \| "down" \| "top" \| "bottom"` | স্ক্রল দিক (প্রয়োজনীয়) |
| `options.tabId` | `number` | কোন ট্যাব ব্যবহার করবেন |
| `options.selector` | `string` | পুরো পৃষ্ঠার পরিবর্তে একটি নির্দিষ্ট কন্টেইনার স্ক্রল করুন |

**`ScrollResult` ফিরিয়ে দেয়:**

| ফিল্ড | ধরন | বর্ণনা |
|------|------|------|
| `scrollTop` | `number` | স্ক্রল করার পরে স্ক্রল অবস্থান |
| `scrollHeight` | `number` | মোট বিষয়বস্তু উচ্চতা |
| `clientHeight` | `number` | ভিউপোর্ট উচ্চতা |
| `atBottom` | `boolean` | এটি এখন নীচে স্ক্রোল করা হয়েছে কিনা |

### waitFor — একটি উপাদানের জন্য অপেক্ষা করুন

```javascript
const result = await CAT.agent.dom.waitFor(selector, options?);
```

নির্দিষ্ট উপাদানটি পৃষ্ঠায় উপস্থিত হওয়ার জন্য পোল করে (প্রতি 500ms পরীক্ষা করে)।

**প্যারামিটার:**

| প্যারামিটার | ধরন | ডিফল্ট | বর্ণনা |
|------|------|--------|------|
| `selector` | `string` | — | CSS সিলেক্টর (প্রয়োজনীয়) |
| `options.tabId` | `number` | বর্তমান সক্রিয় ট্যাব | কোন ট্যাব ব্যবহার করবেন |
| `options.timeout` | `number` | `10000` | মিলিসেকেন্ডে টাইমআউট |

**`WaitForResult` ফিরিয়ে দেয়:**

| ফিল্ড | ধরন | বর্ণনা |
|------|------|------|
| `found` | `boolean` | উপাদানটি পাওয়া গেছে কিনা |
| `element` | `object` | উপাদান তথ্য (শুধুমাত্র যখন `found=true`) |
| `element.selector` | `string` | ম্যাচ করা সিলেক্টর |
| `element.tag` | `string` | ট্যাগ নাম |
| `element.text` | `string` | টেক্সট বিষয়বস্তু |
| `element.role` | `string` | ARIA ভূমিকা |
| `element.type` | `string` | ইনপুট ধরন |
| `element.visible` | `boolean` | এটি দৃশ্যমান কিনা |

## স্ক্রিপ্ট নির্বাহ

### executeScript — জাভাস্ক্রিপ্ট চালান

```javascript
const result = await CAT.agent.dom.executeScript(code, options?);
```

**প্যারামিটার:**

| প্যারামিটার | ধরন | ডিফল্ট | বর্ণনা |
|------|------|--------|------|
| `code` | `string` | — | জাভাস্ক্রিপ্ট কোড (প্রয়োজনীয়) |
| `options.tabId` | `number` | বর্তমান সক্রিয় ট্যাব | কোন ট্যাব ব্যবহার করবেন |

> কোডটি সর্বদা পৃষ্ঠার **MAIN বিশ্বে** চলে (পৃষ্ঠার নিজস্ব JS-এর সাথে একই `window` অবজেক্ট শেয়ার করে), তাই এটি পৃষ্ঠার নিজস্ব ফাংশন কল করতে পারে এবং পৃষ্ঠার ভেরিয়েবল সরাসরি পড়তে পারে — কিন্তু একই কারণে এটি **এক্সটেনশনের blob URL-এ অ্যাক্সেস করতে পারে না** (যেমন একটি `blob:` URL যা আপনি `"blob"` মোডে `CAT.agent.opfs.read` দ্বারা ফিরিয়ে দেওয়া `Blob` থেকে `URL.createObjectURL()`-এর মাধ্যমে তৈরি করেন), কারণ blob URLগুলি এক্সটেনশনের নিজস্ব উৎসে সীমাবদ্ধ। বিচ্ছিন্ন প্রসঙ্গে blob URL নিয়ে কাজ করার প্রয়োজন হলে, পরিবর্তে একটি SkillScript ব্যবহার করুন ([Skill উন্নয়ন](../skill-dev) দেখুন)।

```javascript
// পৃষ্ঠার নিজস্ব JS ফাংশন কল করুন / একটি পৃষ্ঠা ভেরিয়েবল পড়ুন
const data = await CAT.agent.dom.executeScript(
  "return window.__APP_STATE__"
);

// DOM বিষয়বস্তু পড়ুন
const title = await CAT.agent.dom.executeScript(
  "return document.querySelector('h1')?.textContent"
);
```

> কোডটি নির্বাহের জন্য `new Function()`-এ মোড়ানো হয় এবং একটি `return` মান সমর্থন করে। টাইমআউট ৩০ সেকেন্ড।

## DOM পর্যবেক্ষণ

পৃষ্ঠায় DOM পরিবর্তন এবং ডায়ালগ ইভেন্ট পর্যবেক্ষণ করতে Chrome DevTools Protocol ব্যবহার করে।

### startMonitor — পর্যবেক্ষণ শুরু করুন

```javascript
await CAT.agent.dom.startMonitor(tabId);
```

নির্দিষ্ট ট্যাবের DOM পরিবর্তন এবং ডায়ালগ (alert/confirm/prompt) পর্যবেক্ষণ শুরু করে।

### stopMonitor — পর্যবেক্ষণ বন্ধ করুন

```javascript
const result = await CAT.agent.dom.stopMonitor(tabId);
```

পর্যবেক্ষণ বন্ধ করে এবং সংগ্রহ করা পরিবর্তন ফিরিয়ে দেয়।

**`MonitorResult` ফিরিয়ে দেয়:**

| ফিল্ড | ধরন | বর্ণনা |
|------|------|------|
| `dialogs` | `Array<{ type, message }>` | ডায়ালগের তালিকা |
| `addedNodes` | `Array<{ tag, id?, class?, role?, text }>` | নতুন যোগ করা DOM নোডের সারাংশ |

> `addedNodes` নোড আইডি দ্বারা ডিডুপ্লিকেট হয় এবং ৫০টি এন্ট্রিতে সীমাবদ্ধ; তারপর থেকে পৃষ্ঠা থেকে সরানো বা দৃশ্যমান নয় এমন নোড স্বয়ংক্রিয়ভাবে এড়িয়ে যায়। `text` হল নোডের `outerHTML` থেকে বের করা সাধারণ টেক্সট, ৩০০ অক্ষরে ছাঁটাই করা।

### peekMonitor — পর্যবেক্ষণের অবস্থা পরীক্ষা করুন

```javascript
const status = await CAT.agent.dom.peekMonitor(tabId);
```

অ-ধ্বংসাত্মকভাবে বর্তমান পর্যবেক্ষণের অবস্থা পরীক্ষা করে।

**`MonitorStatus` ফিরিয়ে দেয়:**

| ফিল্ড | ধরন | বর্ণনা |
|------|------|------|
| `hasChanges` | `boolean` | কোনো পরিবর্তন আছে কিনা |
| `dialogCount` | `number` | ডায়ালগের সংখ্যা |
| `nodeCount` | `number` | নতুন যোগ করা নোডের সংখ্যা |

## সম্পূর্ণ উদাহরণ

```javascript
// ==UserScript==
// @name        অটো ফর্ম পূরণকারী
// @match       https://example.com/form
// @grant       CAT.agent.dom
// ==/UserScript==

// ফর্ম লোড হওয়ার জন্য অপেক্ষা করুন
await CAT.agent.dom.waitFor("form#signup", { timeout: 5000 });

// ফর্মটি পূরণ করুন
await CAT.agent.dom.fill("input[name=username]", "test_user");
await CAT.agent.dom.fill("input[name=email]", "test@example.com");

// সম্মতি বক্সটি চেক করুন
await CAT.agent.dom.click("input[type=checkbox]#agree");

// পূরণ করা ফর্মের স্ক্রিনশট নিন
await CAT.agent.dom.screenshot({
  selector: "form#signup",
  saveTo: "screenshots/form-filled.png"
});

// জমা দিতে ক্লিক করুন
const result = await CAT.agent.dom.click("button[type=submit]", { trusted: true });
if (result.navigated) {
  console.log("ফর্ম সফলভাবে জমা হয়েছে, নেভিগেট হয়েছে:", result.url);
}
```
