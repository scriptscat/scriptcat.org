---
title: OPFS ফাইল API
---

`@grant CAT.agent.opfs`

OPFS (Origin Private File System) ফাইল API একটি স্ক্রিপ্টকে Agent ওয়ার্কস্পেসে ফাইল পড়তে ও লিখতে দেয়। সমস্ত পথ `agents/workspace/` ডিরেক্টরির সাপেক্ষে।

## write — একটি ফাইল লিখুন

```javascript
const result = await CAT.agent.opfs.write(path, content);
```

**প্যারামিটার:**

| প্যারামিটার | ধরন | বর্ণনা |
|------|------|------|
| `path` | `string` | ফাইলের পথ (প্রয়োজনীয়); নেস্টেড ডিরেক্টরি সমর্থন করে |
| `content` | `string \| Blob` | ফাইলের বিষয়বস্তু |

**সমর্থিত `content` ফরম্যাট:**

| ফরম্যাট | বর্ণনা |
|------|------|
| সাধারণ স্ট্রিং | UTF-8 টেক্সট ফাইল হিসাবে সংরক্ষিত |
| ডেটা URL স্ট্রিং | স্বয়ংক্রিয়ভাবে ডিকোড হয়ে বাইনারি হিসাবে সংরক্ষিত (যেমন `data:image/png;base64,...`) |
| `Blob` অবজেক্ট | বাইনারি ডেটা সরাসরি সংরক্ষিত |

**`WriteResult` ফিরিয়ে দেয়:**

| ফিল্ড | ধরন | বর্ণনা |
|------|------|------|
| `path` | `string` | ফাইলটি যে পথে সংরক্ষিত হয়েছে |
| `size` | `number` | ফাইলের আকার (বাইট) |

```javascript
// একটি টেক্সট ফাইল লিখুন
await CAT.agent.opfs.write("data/config.json", JSON.stringify({ key: "value" }));

// একটি বাইনারি ফাইল লিখুন (ডেটা URL)
const canvas = document.createElement("canvas");
const dataUrl = canvas.toDataURL("image/png");
await CAT.agent.opfs.write("images/chart.png", dataUrl);
```

> প্যারেন্ট ডিরেক্টরি না থাকলে স্বয়ংক্রিয়ভাবে তৈরি হয়। ফাইলটি ইতিমধ্যে থাকলে, এর বিষয়বস্তু ওভাররাইট হয়।

## read — একটি ফাইল পড়ুন

```javascript
const result = await CAT.agent.opfs.read(path, format?);
```

**প্যারামিটার:**

| প্যারামিটার | ধরন | ডিফল্ট | বর্ণনা |
|------|------|--------|------|
| `path` | `string` | — | ফাইলের পথ (প্রয়োজনীয়) |
| `format` | `"text" \| "blob"` | `"text"` | পঠন ফরম্যাট |

**`ReadResult` ফিরিয়ে দেয়:**

| ফিল্ড | ধরন | কখন উপস্থিত | বর্ণনা |
|------|------|------|------|
| `path` | `string` | সর্বদা | ফাইলের পথ |
| `size` | `number` | সর্বদা | ফাইলের আকার |
| `content` | `string` | format="text" | ফাইলের টেক্সট বিষয়বস্তু |
| `data` | `Blob` | format="blob" | ফাইলের Blob অবজেক্ট (structured clone-এর মাধ্যমে স্থানান্তরিত) |
| `mimeType` | `string` | format="blob" | স্বয়ংক্রিয়-সনাক্ত MIME ধরন |

**দুটি পঠন মোড:**

```javascript
// টেক্সট মোড — JSON এবং টেক্সট ফাইলের জন্য উপযুক্ত
const config = await CAT.agent.opfs.read("data/config.json");
const data = JSON.parse(config.content);

// Blob মোড — ছবি এবং বাইনারি ফাইলের জন্য উপযুক্ত
const image = await CAT.agent.opfs.read("images/chart.png", "blob");
// image.data একটি প্রকৃত Blob অবজেক্ট (স্কোপ-সীমাবদ্ধ blob: URL নয়)
// যে প্রসঙ্গে প্রয়োজন সেখানে URL.createObjectURL(image.data) দিয়ে একটি লোকাল URL তৈরি করুন,
// অথবা Blob-টি সরাসরি যেকোনো API-তে দিন যা এটি গ্রহণ করে
```

**স্বয়ংক্রিয় MIME ধরন সনাক্তকরণ:**

| এক্সটেনশন | MIME ধরন |
|--------|----------|
| `.jpg` / `.jpeg` | `image/jpeg` |
| `.png` | `image/png` |
| `.gif` | `image/gif` |
| `.webp` | `image/webp` |
| `.svg` | `image/svg+xml` |
| `.mp3` | `audio/mpeg` |
| `.wav` | `audio/wav` |
| `.mp4` | `video/mp4` |
| `.pdf` | `application/pdf` |
| `.json` | `application/json` |
| `.txt` | `text/plain` |
| `.html` | `text/html` |
| `.css` | `text/css` |
| `.js` | `application/javascript` |
| অন্যান্য | `application/octet-stream` |

## list — একটি ডিরেক্টরি তালিকা করুন

```javascript
const entries = await CAT.agent.opfs.list(path?);
```

**প্যারামিটার:**

| প্যারামিটার | ধরন | ডিফল্ট | বর্ণনা |
|------|------|--------|------|
| `path` | `string` | `""` | ডিরেক্টরি পথ; খালি স্ট্রিং মানে রুট ডিরেক্টরি |

**`FileEntry[]` ফিরিয়ে দেয়:**

| ফিল্ড | ধরন | বর্ণনা |
|------|------|------|
| `name` | `string` | ফাইল/ডিরেক্টরির নাম |
| `type` | `"file" \| "directory"` | ধরন |
| `size` | `number` | ফাইলের আকার (শুধুমাত্র `file` ধরন) |

```javascript
const entries = await CAT.agent.opfs.list("data/");
for (const entry of entries) {
  if (entry.type === "file") {
    console.log(`${entry.name} (${entry.size} bytes)`);
  } else {
    console.log(`${entry.name}/`);
  }
}
```

## delete — একটি ফাইল বা ডিরেক্টরি মুছুন

```javascript
const result = await CAT.agent.opfs.delete(path);
```

একটি ডিরেক্টরি এবং এর ভিতরের সবকিছু পুনরাবৃত্তভাবে মুছে ফেলা সমর্থন করে।

**ফিরিয়ে দেয়:**

```typescript
{ success: true }
```

## readAttachment — একটি সংযুক্তি পড়ুন

```javascript
const result = await CAT.agent.opfs.readAttachment(attachmentId);
```

একটি কথোপকথন থেকে সংযুক্তি ডেটা (ছবি, ফাইল ইত্যাদি) পড়ে। সংযুক্তি আইডি একটি বার্তায় `ContentBlock.attachmentId` থেকে আসে।

**প্যারামিটার:**

| প্যারামিটার | ধরন | বর্ণনা |
|------|------|------|
| `attachmentId` | `string` | সংযুক্তি আইডি (প্রয়োজনীয়) |

**ফিরিয়ে দেয়:**

| ফিল্ড | ধরন | বর্ণনা |
|------|------|------|
| `id` | `string` | সংযুক্তি আইডি |
| `data` | `Blob` | সংযুক্তি বাইনারি ডেটা |
| `size` | `number` | ফাইলের আকার (বাইট) |
| `mimeType` | `string` | MIME ধরন |

```javascript
// কথোপকথনে AI-এর তৈরি একটি ছবির সংযুক্তি পড়ুন
const messages = await conv.getMessages();
const lastMsg = messages[messages.length - 1];
const imageBlock = lastMsg.content.find(b => b.type === "image");
if (imageBlock) {
  const attachment = await CAT.agent.opfs.readAttachment(imageBlock.attachmentId);
  console.log(`সংযুক্তির আকার: ${attachment.size}, ধরন: ${attachment.mimeType}`);
}
```

## Blob ডেটার সাথে কাজ

- `read(path, "blob")` একটি প্রকৃত `Blob` অবজেক্ট ফিরিয়ে দেয় যা [structured clone](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)-এর মাধ্যমে স্থানান্তরিত হয় — এক্সটেনশনের উৎসে সীমাবদ্ধ `blob:` URL নয়, তাই নিয়ে চিন্তা করার কোনো ক্রস-প্রসঙ্গ অ্যাক্সেস সীমাবদ্ধতা নেই
- একটি পৃষ্ঠায় ব্যবহারযোগ্য অস্থায়ী URL পেতে, `URL.createObjectURL(result.data)` কল করুন; কাজ শেষ হলে `URL.revokeObjectURL()` কল করুন
- আপনি `Blob`-টি সরাসরি যেকোনো Web API-তে দিতে পারেন যা একটি `Blob`/`File` গ্রহণ করে (যেমন `fetch`-এর `body`, `FormData.append`, `<input type="file">`-এর জন্য একটি `DataTransfer`)
