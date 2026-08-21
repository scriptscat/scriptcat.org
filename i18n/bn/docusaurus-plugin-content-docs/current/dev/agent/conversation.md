---
title: কথোপকথন API
---

`@grant CAT.agent.conversation`

কথোপকথন API হল Agent সিস্টেমের মূল, যা একটি স্ক্রিপ্টকে AI কথোপকথন তৈরি, বার্তা পাঠানো এবং উত্তর গ্রহণ করতে দেয়।

## একটি কথোপকথন তৈরি করা

```javascript
const conv = await CAT.agent.conversation.create(options?);
```

### ConversationCreateOptions

| প্যারামিটার | ধরন | ডিফল্ট | বর্ণনা |
|------|------|--------|------|
| `id` | `string` | স্বয়ংক্রিয়-উত্পন্ন | কথোপকথন আইডি, একটি বিদ্যমান কথোপকথন পুনরায় শুরু করতে ব্যবহৃত হয় |
| `system` | `string` | — | কাস্টম সিস্টেম prompt, অন্তর্নির্মিত prompt-এর পরে যুক্ত হয় |
| `model` | `string` | ডিফল্ট মডেল | মডেল আইডি (ম্যানেজমেন্ট পেজে কনফিগার করার পরে প্রাপ্ত) |
| `maxIterations` | `number` | `20` | একক কথোপকথন টার্নের মধ্যে সর্বোচ্চ টুল-কল লুপ সংখ্যা |
| `skills` | `"auto" \| string[]` | — | `"auto"` স্বয়ংক্রিয়ভাবে সমস্ত Skill লোড করে, অথবা নির্দিষ্ট Skill নামের একটি অ্যারে |
| `tools` | `ToolDefinition[]` | — | কাস্টম টুল তালিকা (নীচে দেখুন) |
| `commands` | `Record<string, CommandHandler>` | — | কাস্টম কথোপকথন কমান্ড |
| `ephemeral` | `boolean` | `false` | একটি ক্ষণস্থায়ী কথোপকথন যা স্টোরেজে সংরক্ষিত হয় না |
| `cache` | `boolean` | `true` | prompt ক্যাশিং সক্রিয় করুন (টোকেন ব্যবহার হ্রাস করে) |

### কাস্টম টুল

একটি স্ক্রিপ্ট AI-এর কলের জন্য নিজস্ব টুল নিবন্ধন করতে পারে:

```javascript
const conv = await CAT.agent.conversation.create({
  tools: [{
    name: "get_weather",
    description: "নির্দিষ্ট শহরের আবহাওয়ার তথ্য পান",
    parameters: {
      type: "object",
      properties: {
        city: {
          type: "string",
          description: "শহরের নাম"
        },
        unit: {
          type: "string",
          enum: ["celsius", "fahrenheit"],
          description: "তাপমাত্রার একক"
        }
      },
      required: ["city"]
    },
    handler: async (args) => {
      // args = { city: "Beijing", unit: "celsius" }
      const data = await fetchWeather(args.city, args.unit);
      return { temperature: data.temp, condition: data.condition };
    }
  }]
});
```

একটি টুলের `parameters` [JSON Schema](https://json-schema.org/) স্পেক অনুসরণ করে। AI `description` ব্যবহার করে বুঝতে পারে কখন এবং কীভাবে টুলটি কল করতে হবে।

### কাস্টম কমান্ড

`/` দিয়ে শুরু হওয়া কাস্টম কমান্ড নিবন্ধন করা যায়:

```javascript
const conv = await CAT.agent.conversation.create({
  commands: {
    "/export": async (args) => {
      // ব্যবহারকারী "/export pdf" টাইপ করলে ট্রিগার হয়
      await exportToPdf(args);
      return "এক্সপোর্ট সম্পন্ন";
    }
  }
});
```

অন্তর্নির্মিত কমান্ড: `/new` (কথোপকথনের ইতিহাস সাফ করুন) — এটি একটি কাস্টম হ্যান্ডলার দ্বারা ওভাররাইড করা যায়।

## একটি বিদ্যমান কথোপকথন পাওয়া

```javascript
const conv = await CAT.agent.conversation.get(conversationId);
// কথোপকথন না থাকলে null ফিরিয়ে দেয়
```

## ConversationInstance পদ্ধতি

### chat — সিঙ্ক্রোনাস চ্যাট

```javascript
const reply = await conv.chat(content, options?);
```

একটি বার্তা পাঠায় এবং সম্পূর্ণ উত্তরের জন্য অপেক্ষা করে। AI উত্তর দেওয়ার সময় টুল কল করতে পারে; `chat` চূড়ান্ত ফলাফল ফিরিয়ে দেওয়ার আগে সমস্ত টুল নির্বাহ শেষ হওয়ার জন্য অপেক্ষা করে।

**প্যারামিটার:**

| প্যারামিটার | ধরন | বর্ণনা |
|------|------|------|
| `content` | `string \| ContentBlock[]` | বার্তা বিষয়বস্তু, টেক্সট বা মাল্টিমোডাল বিষয়বস্তু ব্লক |
| `options.tools` | `ToolDefinition[]` | শুধুমাত্র এই কলের জন্য যোগ করার অতিরিক্ত টুল (তৈরির সময় দেওয়া টুলের সাথে একীভূত হয়) |

**`ChatReply` ফিরিয়ে দেয়:**

| ফিল্ড | ধরন | বর্ণনা |
|------|------|------|
| `content` | `string \| ContentBlock[]` | AI-এর উত্তর বিষয়বস্তু |
| `thinking` | `string` | মডেলের চিন্তা প্রক্রিয়া (শুধুমাত্র কিছু মডেল এটি সমর্থন করে) |
| `toolCalls` | `ToolCall[]` | এই উত্তরের সময় করা টুল কলের রেকর্ড |
| `usage` | `{ inputTokens, outputTokens }` | টোকেন ব্যবহার |
| `command` | `boolean` | এই উত্তরটি একটি কমান্ড দ্বারা ট্রিগার হয়েছিল কিনা |

### chatStream — স্ট্রিমিং চ্যাট

```javascript
const stream = await conv.chatStream(content, options?);
for await (const chunk of stream) {
  // স্ট্রিমিং ইভেন্ট পরিচালনা
}
```

AI-এর উত্তর রিয়েল-টাইমে গ্রহণ করে — যখন আপনাকে ধীরে ধীরে আউটপুট প্রদর্শন করতে হয় তখন দরকারী।

**`StreamChunk` ইভেন্টের ধরন:**

| ধরন | ফিল্ড | বর্ণনা |
|------|------|------|
| `content_delta` | `content: string` | ক্রমবর্ধমান টেক্সট বিষয়বস্তু |
| `thinking_delta` | `thinking: string` | ক্রমবর্ধমান চিন্তা বিষয়বস্তু |
| `tool_call` | `toolCall: ToolCall` | টুল কল তথ্য (অবস্থা পরিবর্তনে ফায়ার হয়) |
| `content_block` | `block: ContentBlock` | একটি বিষয়বস্তু ব্লক (ছবি, ফাইল ইত্যাদি) |
| `done` | `usage: { inputTokens, outputTokens }` | কথোপকথন টার্ন সম্পন্ন |
| `error` | `error: string, errorCode?: string` | ত্রুটি |

**ত্রুটি কোড (`errorCode`):**

| কোড | বর্ণনা |
|--------|------|
| `rate_limit` | API রেট সীমা পৌঁছেছে; সাধারণত স্বয়ংক্রিয়ভাবে পুনরায় চেষ্টা করা হয় |
| `auth` | প্রমাণীকরণ ব্যর্থ হয়েছে; API কী পরীক্ষা করুন |
| `tool_timeout` | টুল নির্বাহের সময় শেষ হয়েছে |
| `max_iterations` | সর্বোচ্চ টুল-কল লুপ সংখ্যা পৌঁছেছে |
| `api_error` | অন্যান্য API ত্রুটি |

### getMessages — বার্তার ইতিহাস পান

```javascript
const messages = await conv.getMessages();
```

কথোপকথনের প্রতিটি বার্তা সম্বলিত একটি `ChatMessage[]` ফিরিয়ে দেয়।

**`ChatMessage` আকৃতি:**

| ফিল্ড | ধরন | বর্ণনা |
|------|------|------|
| `id` | `string` | বার্তা আইডি |
| `role` | `"user" \| "assistant" \| "system" \| "tool"` | বার্তার ভূমিকা |
| `content` | `string \| ContentBlock[]` | বার্তা বিষয়বস্তু |
| `thinking` | `{ content: string }` | চিন্তা প্রক্রিয়া (assistant বার্তা — লক্ষ্য করুন এটি একটি অবজেক্ট, সাধারণ স্ট্রিং নয়) |
| `error` | `string` | এই টার্নে ত্রুটি থাকলে ত্রুটি বার্তা |
| `modelId` | `string` | এই বার্তার জন্য ব্যবহৃত মডেল আইডি |
| `durationMs` | `number` | মোট উত্তর সময় ms-এ |
| `parentId` | `string` | প্যারেন্ট বার্তা আইডি (ব্রাঞ্চিংয়ের জন্য) |
| `toolCalls` | `ToolCall[]` | টুল কলের রেকর্ড (assistant বার্তা) |
| `toolCallId` | `string` | সংশ্লিষ্ট টুল কল আইডি (tool বার্তা) |
| `usage` | `{ inputTokens, outputTokens }` | টোকেন ব্যবহার |
| `createtime` | `number` | তৈরি টাইমস্ট্যাম্প |

### clear — কথোপকথন সাফ করুন

```javascript
await conv.clear();
```

কথোপকথনের সমস্ত বার্তার ইতিহাস সাফ করে।

### save — কথোপকথন সংরক্ষণ করুন

```javascript
await conv.save();
```

কথোপকথনের মেটাডেটা স্টোরেজে সংরক্ষণ করে। ক্ষণস্থায়ী কথোপকথন (`ephemeral: true`) ডিফল্টভাবে সংরক্ষিত হয় না; এই পদ্ধতিটি কল করলে এটি একটি সংরক্ষিত কথোপকথনে রূপান্তরিত হয়।


### ইনস্ট্যান্স বৈশিষ্ট্য

| বৈশিষ্ট্য | ধরন | বর্ণনা |
|------|------|------|
| `id` | `string` | কথোপকথন আইডি |
| `title` | `string` | কথোপকথনের শিরোনাম |
| `modelId` | `string` | ব্যবহৃত মডেল আইডি |

## মাল্টিমোডাল বিষয়বস্তু

বার্তা বিষয়বস্তু একটি সাধারণ টেক্সট স্ট্রিং বা মাল্টিমোডাল ইনপুট সমর্থন করতে একটি `ContentBlock[]` অ্যারে হতে পারে:

```javascript
// টেক্সট + একটি ছবি পাঠান
await conv.chat([
  { type: "text", text: "অনুগ্রহ করে বিশ্লেষণ করুন এই ছবিতে কী আছে" },
  { type: "image", attachmentId: "img-id", mimeType: "image/png" }
]);
```

### ContentBlock ধরন

| ধরন | প্রয়োজনীয় ফিল্ড | বর্ণনা |
|------|---------|------|
| `text` | `text: string` | টেক্সট বিষয়বস্তু |
| `image` | `attachmentId: string, mimeType: string` | ছবি; একটি দৃষ্টি-সক্ষম মডেল প্রয়োজন |
| `file` | `attachmentId: string, mimeType: string, name: string` | ফাইল |
| `audio` | `attachmentId: string, mimeType: string` | অডিও |

## ক্ষণস্থায়ী বনাম সংরক্ষিত কথোপকথন

| বৈশিষ্ট্য | সংরক্ষিত কথোপকথন (ডিফল্ট) | ক্ষণস্থায়ী কথোপকথন |
|------|-------------------|---------------------|
| বার্তা স্টোরেজ | OPFS-এ সংরক্ষিত | শুধুমাত্র মেমরিতে |
| অন্তর্নির্মিত টুল | সমস্ত উপলব্ধ | অন্তর্ভুক্ত নয়; `tools`-এর মাধ্যমে নিজের প্রদান করুন |
| কথোপকথন তালিকা | দৃশ্যমান | দৃশ্যমান নয় |
| prompt ক্যাশিং | সমর্থিত | নিষ্ক্রিয় করা যায় |
| ব্যবহারের ক্ষেত্রে | সাধারণ-উদ্দেশ্য কথোপকথন | হালকা, এককালীন কাজ এবং দ্রুত প্রশ্নোত্তর |

## প্রসঙ্গ ব্যবস্থাপনা

### স্বয়ংক্রিয়-কম্প্যাক্ট

কথোপকথনের প্রসঙ্গ ব্যবহার মডেলের প্রসঙ্গ উইন্ডোর **80%** অতিক্রম করলে, সিস্টেম স্বয়ংক্রিয়ভাবে ইতিহাসের একটি সারাংশ তৈরি করতে LLM-কে কল করে, স্থান খালি করতে পুরানো বার্তা প্রতিস্থাপন করে।

### prompt ক্যাশিং

ডিফল্টভাবে সক্রিয়। Anthropic মডেলগুলির জন্য, সিস্টেম prompt এবং বার্তার ইতিহাস ক্যাশ করা হয়, পুনরাবৃত্ত টার্নগুলির জন্য টোকেন ব্যবহার এবং লেটেন্সি উল্লেখযোগ্যভাবে হ্রাস করে।

`cache: false`-এর মাধ্যমে নিষ্ক্রিয় করা যায়:

```javascript
const conv = await CAT.agent.conversation.create({ cache: false });
```

## সম্পূর্ণ উদাহরণ

```javascript
// ==UserScript==
// @name        স্মার্ট অনুবাদ সহায়ক
// @match       *://*/*
// @grant       CAT.agent.conversation
// @grant       CAT.agent.dom
// ==/UserScript==

// একটি কাস্টম টুল দিয়ে কথোপকথন তৈরি করুন
const conv = await CAT.agent.conversation.create({
  system: "আপনি একটি অনুবাদ সহায়ক। ব্যবহারকারী আপনাকে ওয়েব পৃষ্ঠার বিষয়বস্তু দেবে — অনুগ্রহ করে এটি চীনা ভাষায় অনুবাদ করুন।",
  tools: [{
    name: "get_selection",
    description: "পৃষ্ঠায় ব্যবহারকারীর নির্বাচিত টেক্সট পান",
    parameters: { type: "object", properties: {} },
    handler: async () => {
      return { text: window.getSelection()?.toString() || "কোনো টেক্সট নির্বাচিত হয়নি" };
    }
  }]
});

// অনুবাদের ফলাফল স্ট্রিম করুন
const stream = await conv.chatStream("অনুগ্রহ করে নির্বাচিত টেক্সটটি পান এবং চীনা ভাষায় অনুবাদ করুন");
let result = "";
for await (const chunk of stream) {
  if (chunk.type === "content_delta") {
    result += chunk.content;
    // রিয়েল-টাইমে UI আপডেট করুন
    updateTranslationUI(result);
  }
}
```
