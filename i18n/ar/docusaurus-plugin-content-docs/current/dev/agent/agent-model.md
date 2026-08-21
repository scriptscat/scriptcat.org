---
title: واجهة برمجة الاستعلام عن النماذج
---

`@grant CAT.agent.model`

توفر واجهة برمجة الاستعلام عن النماذج وصولاً للقراءة فقط إلى النماذج التي قام المستخدم بتكوينها على صفحة الإدارة. لأسباب أمنية، لا يتم كشف مفتاح API للسكرپت أبداً.

## list — سرد جميع النماذج

```javascript
const models = await CAT.agent.model.list();
```

**يرجع `ModelSummary[]`:**

| الحقل | النوع | الوصف |
|------|------|------|
| `id` | `string` | معرف تكوين النموذج |
| `name` | `string` | اسم العرض المحدد من قبل المستخدم (مثل "GPT-4o", "Claude Sonnet") |
| `provider` | `"openai" \| "anthropic"` | نوع المزود |
| `apiBaseUrl` | `string` | الرابط الأساسي لواجهة البرمجة |
| `model` | `string` | معرف النموذج المرسل إلى واجهة برمجة المزود (مثل `gpt-4o`, `claude-sonnet-4-20250514`) |
| `maxTokens` | `number` | الحد الأقصى لرموز الإخراج (محذوف إذا لم يُضبط) |

> ملاحظة: الكائنات المرجعة **لا تتضمن** حقلاً `apiKey`.

## get — الحصول على نموذج محدد

```javascript
const model = await CAT.agent.model.get(modelId);
```

يرجع `null` إذا كان النموذج غير موجود.

## getDefault — الحصول على معرف النموذج الافتراضي

```javascript
const defaultId = await CAT.agent.model.getDefault();
```

يرجع معرف النموذج الافتراضي المكوّن من قبل المستخدم؛ يرجع سلسلة فارغة إذا لم يُضبط أي منها.

## getSummary — الحصول على معرف نموذج الملخص

```javascript
const summaryModelId = await CAT.agent.model.getSummary();
```

يرجع معرف النموذج الخفيف الذي كوّنه المستخدم خصيصاً لمهام التلخيص (مثل الضغط التلقائي لسجل الحوار). إذا لم يُكوَّن أي نموذج بشكل منفصل، يتراجع النظام إلى النموذج الافتراضي، وترجع هذه الطريقة سلسلة فارغة.

## سيناريوهات الاستخدام

### السماح للمستخدم باختيار نموذج

```javascript
// ==UserScript==
// @name        Model picker example
// @grant       CAT.agent.model
// @grant       CAT.agent.conversation
// ==/UserScript==

const models = await CAT.agent.model.list();
const defaultId = await CAT.agent.model.getDefault();

// Show the list to the user and let them pick
const selectedModel = models.find(m => m.id === defaultId) || models[0];

const conv = await CAT.agent.conversation.create({
  model: selectedModel.id
});
```

### الحصول على تفاصيل نموذج محدد

```javascript
const model = await CAT.agent.model.get("my-model-id");
if (model) {
  console.log(`${model.name} (${model.provider}), max output ${model.maxTokens ?? "unset"} tokens`);
}
```
