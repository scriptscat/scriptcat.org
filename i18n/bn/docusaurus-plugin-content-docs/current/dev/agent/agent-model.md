---
title: মডেল কুয়েরি API
---

`@grant CAT.agent.model`

মডেল কুয়েরি API ব্যবহারকারী ম্যানেজমেন্ট পেজে যে মডেলগুলি কনফিগার করেছেন সেগুলিতে শুধুমাত্র-পঠন অ্যাক্সেস প্রদান করে। নিরাপত্তার জন্য, API কী কখনই স্ক্রিপ্টের কাছে প্রকাশ করা হয় না।

## list — সমস্ত মডেল তালিকা করুন

```javascript
const models = await CAT.agent.model.list();
```

**`ModelSummary[]` ফিরিয়ে দেয়:**

| ফিল্ড | ধরন | বর্ণনা |
|------|------|------|
| `id` | `string` | মডেল কনফিগ আইডি |
| `name` | `string` | ব্যবহারকারী-সংজ্ঞায়িত প্রদর্শনের নাম (যেমন "GPT-4o", "Claude Sonnet") |
| `provider` | `"openai" \| "anthropic"` | প্রদানকারীর ধরন |
| `apiBaseUrl` | `string` | API বেস URL |
| `model` | `string` | প্রদানকারী API-তে পাঠানো মডেল শনাক্তকারী (যেমন `gpt-4o`, `claude-sonnet-4-20250514`) |
| `maxTokens` | `number` | সর্বোচ্চ আউটপুট টোকেন (সেট না থাকলে বাদ দেওয়া হয়) |

> নোট: ফিরিয়ে দেওয়া অবজেক্টগুলিতে একটি `apiKey` ফিল্ড **অন্তর্ভুক্ত নয়**।

## get — একটি নির্দিষ্ট মডেল পান

```javascript
const model = await CAT.agent.model.get(modelId);
```

মডেলটি না থাকলে `null` ফিরিয়ে দেয়।

## getDefault — ডিফল্ট মডেল আইডি পান

```javascript
const defaultId = await CAT.agent.model.getDefault();
```

ব্যবহারকারীর কনফিগার করা ডিফল্ট মডেল আইডি ফিরিয়ে দেয়; কিছু সেট না থাকলে একটি খালি স্ট্রিং ফিরিয়ে দেয়।

## getSummary — সারাংশ মডেল আইডি পান

```javascript
const summaryModelId = await CAT.agent.model.getSummary();
```

ব্যবহারকারী বিশেষভাবে সারাংশকরণ কাজের জন্য (যেমন কথোপকথনের ইতিহাস স্বয়ংক্রিয়-কম্প্যাক্ট করা) যে লাইটওয়েট মডেলটি কনফিগার করেছেন তার আইডি ফিরিয়ে দেয়। আলাদাভাবে কনফিগার না করা হলে, সিস্টেম ডিফল্ট মডেলে ফিরে যায় এবং এই পদ্ধতিটি একটি খালি স্ট্রিং ফিরিয়ে দেয়।

## ব্যবহারের পরিস্থিতি

### ব্যবহারকারীকে একটি মডেল বেছে নিতে দেওয়া

```javascript
// ==UserScript==
// @name        মডেল পিকার উদাহরণ
// @grant       CAT.agent.model
// @grant       CAT.agent.conversation
// ==/UserScript==

const models = await CAT.agent.model.list();
const defaultId = await CAT.agent.model.getDefault();

// তালিকাটি ব্যবহারকারীকে দেখান এবং তাকে বেছে নিতে দিন
const selectedModel = models.find(m => m.id === defaultId) || models[0];

const conv = await CAT.agent.conversation.create({
  model: selectedModel.id
});
```

### একটি নির্দিষ্ট মডেলের বিবরণ পাওয়া

```javascript
const model = await CAT.agent.model.get("my-model-id");
if (model) {
  console.log(`${model.name} (${model.provider}), max output ${model.maxTokens ?? "unset"} tokens`);
}
```
