---
title: واجهة برمجة الحوار
---

`@grant CAT.agent.conversation`

واجهة برمجة الحوار هي قلب نظام Agent، حيث تتيح للسكرپت إنشاء حوارات ذكاء اصطناعي وإرسال الرسائل وتلقي الردود.

## إنشاء حوار

```javascript
const conv = await CAT.agent.conversation.create(options?);
```

### ConversationCreateOptions

| المعامل | النوع | الافتراضي | الوصف |
|------|------|--------|------|
| `id` | `string` | مُنشأ تلقائياً | معرف الحوار، يُستخدم لاستئناف حوار موجود |
| `system` | `string` | — | مطالبة نظام مخصصة، تُلحق بعد المطالبة المدمجة |
| `model` | `string` | النموذج الافتراضي | معرف النموذج (يُحصل عليه بعد تكوينه على صفحة الإدارة) |
| `maxIterations` | `number` | `20` | الحد الأقصى لعدد حلقات استدعاء الأدوات ضمن جولة حوار واحدة |
| `skills` | `"auto" \| string[]` | — | `"auto"` يحمّل جميع Skills تلقائياً، أو مصفوفة من أسماء Skills محددة |
| `tools` | `ToolDefinition[]` | — | قائمة الأدوات المخصصة (انظر أدناه) |
| `commands` | `Record<string, CommandHandler>` | — | أوامر حوار مخصصة |
| `ephemeral` | `boolean` | `false` | حوار مؤقت غير محفوظ في التخزين |
| `cache` | `boolean` | `true` | تفعيل تخزين المطالبات مؤقتاً (يقلل استهلاك الرموز) |

### أدوات مخصصة

يمكن للسكرپت تسجيل أدواته الخاصة ليستدعيها الذكاء الاصطناعي:

```javascript
const conv = await CAT.agent.conversation.create({
  tools: [{
    name: "get_weather",
    description: "Get weather information for the specified city",
    parameters: {
      type: "object",
      properties: {
        city: {
          type: "string",
          description: "City name"
        },
        unit: {
          type: "string",
          enum: ["celsius", "fahrenheit"],
          description: "Temperature unit"
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

تتبع `parameters` الخاصة بالأداة مواصفات [JSON Schema](https://json-schema.org/). يستخدم الذكاء الاصطناعي `description` لفهم متى وكيف يستدعي الأداة.

### أوامر مخصصة

يمكن تسجيل أوامر مخصصة تبدأ بـ `/`:

```javascript
const conv = await CAT.agent.conversation.create({
  commands: {
    "/export": async (args) => {
      // Triggered when the user types "/export pdf"
      await exportToPdf(args);
      return "Export complete";
    }
  }
});
```

الأوامر المدمجة: `/new` (مسح سجل الحوار) — يمكن استبدالها بمعالج مخصص.

## الحصول على حوار موجود

```javascript
const conv = await CAT.agent.conversation.get(conversationId);
// Returns null if the conversation doesn't exist
```

## طرق ConversationInstance

### chat — حوار متزامن

```javascript
const reply = await conv.chat(content, options?);
```

يرسل رسالة وينتظر الرد الكامل. قد يستدعي الذكاء الاصطناعي أدوات أثناء الرد؛ ينتظر `chat` انتهاء جميع عمليات تنفيذ الأدوات قبل إرجاع النتيجة النهائية.

**المعلمات:**

| المعامل | النوع | الوصف |
|------|------|------|
| `content` | `string \| ContentBlock[]` | محتوى الرسالة، نص أو كتل محتوى متعددة الوسائط |
| `options.tools` | `ToolDefinition[]` | أدوات إضافية تُلحق لهذا الاستدعاء فقط (مدمجة مع الأدوات الممررة عند الإنشاء) |

**يرجع `ChatReply`:**

| الحقل | النوع | الوصف |
|------|------|------|
| `content` | `string \| ContentBlock[]` | محتوى رد الذكاء الاصطناعي |
| `thinking` | `string` | عملية تفكير النموذج (تدعمها بعض النماذج فقط) |
| `toolCalls` | `ToolCall[]` | سجل استدعاءات الأدوات التي تمت خلال هذا الرد |
| `usage` | `{ inputTokens, outputTokens }` | استهلاك الرموز |
| `command` | `boolean` | يحدد ما إذا كان هذا الرد قد تم بسببه أمر ما |

### chatStream — حوار متدفق

```javascript
const stream = await conv.chatStream(content, options?);
for await (const chunk of stream) {
  // Handle streaming events
}
```

يستقبل رد الذكاء الاصطناعي في الوقت الفعلي — مفيد عندما تحتاج إلى عرض المخرجات تدريجياً.

**أنواع أحداث `StreamChunk`:**

| النوع | الحقول | الوصف |
|------|------|------|
| `content_delta` | `content: string` | محتوى نصي تدريجي |
| `thinking_delta` | `thinking: string` | محتوى تفكير تدريجي |
| `tool_call` | `toolCall: ToolCall` | معلومات استدعاء الأداة (يُطلق عند تغييرات الحالة) |
| `content_block` | `block: ContentBlock` | كتلة محتوى (صورة، ملف، إلخ) |
| `done` | `usage: { inputTokens, outputTokens }` | اكتمل جولة الحوار |
| `error` | `error: string, errorCode?: string` | خطأ |

**أكواد الخطأ (`errorCode`):**

| الكود | الوصف |
|--------|------|
| `rate_limit` | الوصول إلى حد معدل واجهة البرمجة؛ يُعاد عادةً تلقائياً |
| `auth` | فشل المصادقة؛ تحقق من مفتاح API |
| `tool_timeout` | انتهت مهلة تنفيذ الأداة |
| `max_iterations` | الوصول إلى الحد الأقصى لعدد حلقات استدعاء الأدوات |
| `api_error` | خطأ واجهة برمجة آخر |

### getMessages — الحصول على سجل الرسائل

```javascript
const messages = await conv.getMessages();
```

يرجع `ChatMessage[]` يحتوي على جميع رسائل الحوار.

**شكل `ChatMessage`:**

| الحقل | النوع | الوصف |
|------|------|------|
| `id` | `string` | معرف الرسالة |
| `role` | `"user" \| "assistant" \| "system" \| "tool"` | دور الرسالة |
| `content` | `string \| ContentBlock[]` | محتوى الرسالة |
| `thinking` | `{ content: string }` | عملية التفكير (رسائل المساعد — لاحظ أنها كائن وليست سلسلة نصية عادية) |
| `error` | `string` | رسالة الخطأ إذا فشل هذا الدور |
| `modelId` | `string` | معرف النموذج المستخدم لهذه الرسالة |
| `durationMs` | `number` | إجمالي مدة الاستجابة بالمللي ثانية |
| `parentId` | `string` | معرف الرسالة الأصل (للتفرع) |
| `toolCalls` | `ToolCall[]` | سجل استدعاءات الأدوات (رسائل المساعد) |
| `toolCallId` | `string` | معرف استدعاء الأداة المقابل (رسائل الأداة) |
| `usage` | `{ inputTokens, outputTokens }` | استهلاك الرموز |
| `createtime` | `number` | طابع وقت الإنشاء |

### clear — مسح الحوار

```javascript
await conv.clear();
```

يمسح جميع سجل الرسائل في الحوار.

### save — حفظ الحوار

```javascript
await conv.save();
```

يحفظ بيانات الحوار الوصفية في التخزين. لا تُحفظ الحوارات المؤقتة (`ephemeral: true`) افتراضياً؛ استدعاء هذه الطريقة يحولها إلى حوار محفوظ.


### خصائص المثيل

| الخاصية | النوع | الوصف |
|------|------|------|
| `id` | `string` | معرف الحوار |
| `title` | `string` | عنوان الحوار |
| `modelId` | `string` | معرف النموذج المستخدم |

## محتوى متعدد الوسائط

يمكن أن يكون محتوى الرسالة سلسلة نصية عادية، أو مصفوفة `ContentBlock[]` لدعم الإدخال متعدد الوسائط:

```javascript
// Send text + an image
await conv.chat([
  { type: "text", text: "Please analyze what's in this image" },
  { type: "image", attachmentId: "img-id", mimeType: "image/png" }
]);
```

### أنواع ContentBlock

| النوع | الحقول الإلزامية | الوصف |
|------|---------|------|
| `text` | `text: string` | محتوى نصي |
| `image` | `attachmentId: string, mimeType: string` | صورة؛ يتطلب نموذجاً بقدرات بصرية |
| `file` | `attachmentId: string, mimeType: string, name: string` | ملف |
| `audio` | `attachmentId: string, mimeType: string` | صوت |

## الحوارات المؤقتة مقابل المحفوظة

| الميزة | حوار محفوظ (الافتراضي) | حوار مؤقت |
|------|-------------------|---------------------|
| تخزين الرسائل | محفوظ في OPFS | في الذاكرة فقط |
| الأدوات المدمجة | جميعها متاحة | غير مشمولة؛ وفر أدواتك الخاصة عبر `tools` |
| قائمة الحوارات | مرئية | غير مرئية |
| تخزين المطالبات مؤقتاً | مدعوم | يمكن تعطيله |
| حالة الاستخدام | حوارات للأغراض العامة | مهام خفيفة لمرة واحدة وأسئلة وأجوبة سريعة |

## إدارة السياق

### الضغط التلقائي

عندما يتجاوز استخدام سياق الحوار **80%** من نافذة سياق النموذج، يستدعي النظام تلقائياً LLM لإنشاء ملخص للسجل، مع استبدال الرسائل الأقدم لتحرير مساحة.

### تخزين المطالبات مؤقتاً

مفعّل افتراضياً. لنماذج Anthropic، يتم تخزين المطالبة النظامية وسجل الرسائل مؤقتاً، مما يقلل بشكل كبير من استهلاك الرموز وزمن الاستجابة للجولات المتكررة.

يمكن تعطيله عبر `cache: false`:

```javascript
const conv = await CAT.agent.conversation.create({ cache: false });
```

## مثال كامل

```javascript
// ==UserScript==
// @name        Smart translation assistant
// @match       *://*/*
// @grant       CAT.agent.conversation
// @grant       CAT.agent.dom
// ==/UserScript==

// Create a conversation with a custom tool
const conv = await CAT.agent.conversation.create({
  system: "You are a translation assistant. The user will give you web page content — please translate it into Chinese.",
  tools: [{
    name: "get_selection",
    description: "Get the text the user has selected on the page",
    parameters: { type: "object", properties: {} },
    handler: async () => {
      return { text: window.getSelection()?.toString() || "No text selected" };
    }
  }]
});

// Stream the translation result
const stream = await conv.chatStream("Please get the selected text and translate it into Chinese");
let result = "";
for await (const chunk of stream) {
  if (chunk.type === "content_delta") {
    result += chunk.content;
    // Update the UI in real time
    updateTranslationUI(result);
  }
}
```
