---
title: API پرس‌وجوی مدل
---

`@grant CAT.agent.model`

API پرس‌وجوی مدل دسترسی فقط‌خواندنی به مدل‌هایی که کاربر در صفحه مدیریت پیکربندی کرده است فراهم می‌کند. به دلایل امنیتی، کلید API هرگز در معرض اسکریپت قرار نمی‌گیرد.

## list — فهرست همه مدل‌ها

```javascript
const models = await CAT.agent.model.list();
```

**بازگشت `ModelSummary[]`:**

| فیلد | نوع | توضیحات |
|------|------|------|
| `id` | `string` | شناسه پیکربندی مدل |
| `name` | `string` | نام نمایشی تعریف‌شده توسط کاربر (مثلاً "GPT-4o"، "Claude Sonnet") |
| `provider` | `"openai" \| "anthropic"` | نوع ارائه‌دهنده |
| `apiBaseUrl` | `string` | URL پایه API |
| `model` | `string` | شناسه مدلی که به API ارائه‌دهنده ارسال می‌شود (مثلاً `gpt-4o`، `claude-sonnet-4-20250514`) |
| `maxTokens` | `number` | حداکثر توکن‌های خروجی (در صورت عدم تنظیم حذف می‌شود) |

> توجه: اشیاء بازگشتی **شامل** فیلد `apiKey` **نیستند**.

## get — دریافت یک مدل خاص

```javascript
const model = await CAT.agent.model.get(modelId);
```

اگر مدل وجود نداشته باشد `null` برمی‌گرداند.

## getDefault — دریافت شناسه مدل پیش‌فرض

```javascript
const defaultId = await CAT.agent.model.getDefault();
```

شناسه مدل پیش‌فرض پیکربندی‌شده توسط کاربر را برمی‌گرداند؛ اگر تنظیم نشده باشد یک رشته خالی برمی‌گرداند.

## getSummary — دریافت شناسه مدل خلاصه‌سازی

```javascript
const summaryModelId = await CAT.agent.model.getSummary();
```

شناسه مدل سبک‌وزنی را که کاربر به طور خاص برای کارهای خلاصه‌سازی (مانند فشرده‌سازی خودکار تاریخچه گفتگو) پیکربندی کرده است برمی‌گرداند. اگر جداگانه پیکربندی نشده باشد، سیستم به مدل پیش‌فرض برمی‌گردد و این روش یک رشته خالی برمی‌گرداند.

## سناریوهای استفاده

### اجازه دادن به کاربر برای انتخاب مدل

```javascript
// ==UserScript==
// @name        مثال انتخاب‌گر مدل
// @grant       CAT.agent.model
// @grant       CAT.agent.conversation
// ==/UserScript==

const models = await CAT.agent.model.list();
const defaultId = await CAT.agent.model.getDefault();

// فهرست را به کاربر نشان دهید و بگذارید انتخاب کند
const selectedModel = models.find(m => m.id === defaultId) || models[0];

const conv = await CAT.agent.conversation.create({
  model: selectedModel.id
});
```

### دریافت جزئیات یک مدل خاص

```javascript
const model = await CAT.agent.model.get("my-model-id");
if (model) {
  console.log(`${model.name} (${model.provider}), max output ${model.maxTokens ?? "unset"} tokens`);
}
```
