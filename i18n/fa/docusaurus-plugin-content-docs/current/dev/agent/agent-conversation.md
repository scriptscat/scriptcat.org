---
title: API گفتگو
---

`@grant CAT.agent.conversation`

API گفتگو هسته سیستم Agent است و به یک اسکریپت اجازه می‌دهد گفتگوهای هوش مصنوعی ایجاد کند، پیام ارسال کند و پاسخ دریافت کند.

## ایجاد یک گفتگو

```javascript
const conv = await CAT.agent.conversation.create(options?);
```

### ConversationCreateOptions

| پارامتر | نوع | پیش‌فرض | توضیحات |
|------|------|--------|------|
| `id` | `string` | تولید خودکار | شناسه گفتگو، برای از سرگیری یک گفتگوی موجود استفاده می‌شود |
| `system` | `string` | — | prompt سیستم سفارشی، پس از prompt داخلی اضافه می‌شود |
| `model` | `string` | مدل پیش‌فرض | شناسه مدل (پس از پیکربندی در صفحه مدیریت به دست می‌آید) |
| `maxIterations` | `number` | `20` | حداکثر تعداد حلقه فراخوانی ابزار در یک نوبت گفتگو |
| `skills` | `"auto" \| string[]` | — | `"auto"` همه Skillها را به طور خودکار بارگذاری می‌کند، یا آرایه‌ای از نام Skillهای خاص |
| `tools` | `ToolDefinition[]` | — | فهرست ابزار سفارشی (به زیر مراجعه کنید) |
| `commands` | `Record<string, CommandHandler>` | — | دستورات گفتگوی سفارشی |
| `ephemeral` | `boolean` | `false` | گفتگوی موقتی که در ذخیره‌سازی ماندگار نمی‌شود |
| `cache` | `boolean` | `true` | فعال‌سازی کش prompt (مصرف توکن را کاهش می‌دهد) |

### ابزارهای سفارشی

یک اسکریپت می‌تواند ابزارهای خود را برای فراخوانی هوش مصنوعی ثبت کند:

```javascript
const conv = await CAT.agent.conversation.create({
  tools: [{
    name: "get_weather",
    description: "دریافت اطلاعات آب‌وهوا برای شهر مشخص‌شده",
    parameters: {
      type: "object",
      properties: {
        city: {
          type: "string",
          description: "نام شهر"
        },
        unit: {
          type: "string",
          enum: ["celsius", "fahrenheit"],
          description: "واحد دما"
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

`parameters` یک ابزار از مشخصات [JSON Schema](https://json-schema.org/) پیروی می‌کند. هوش مصنوعی از `description` برای درک زمان و نحوه فراخوانی ابزار استفاده می‌کند.

### دستورات سفارشی

دستورات سفارشی که با `/` شروع می‌شوند قابل ثبت هستند:

```javascript
const conv = await CAT.agent.conversation.create({
  commands: {
    "/export": async (args) => {
      // زمانی که کاربر "/export pdf" را تایپ می‌کند فعال می‌شود
      await exportToPdf(args);
      return "صادرات کامل شد";
    }
  }
});
```

دستورات داخلی: `/new` (پاک کردن تاریخچه گفتگو) — این می‌تواند توسط یک handler سفارشی بازنویسی شود.

## دریافت یک گفتگوی موجود

```javascript
const conv = await CAT.agent.conversation.get(conversationId);
// اگر گفتگو وجود نداشته باشد null برمی‌گرداند
```

## روش‌های ConversationInstance

### chat — چت همزمان

```javascript
const reply = await conv.chat(content, options?);
```

یک پیام ارسال می‌کند و منتظر پاسخ کامل می‌ماند. هوش مصنوعی ممکن است هنگام پاسخ‌دادن ابزارهایی را فراخوانی کند؛ `chat` منتظر پایان همه اجراهای ابزار قبل از بازگرداندن نتیجه نهایی می‌ماند.

**پارامترها:**

| پارامتر | نوع | توضیحات |
|------|------|------|
| `content` | `string \| ContentBlock[]` | محتوای پیام، متن یا بلوک‌های محتوای چندوجهی |
| `options.tools` | `ToolDefinition[]` | ابزارهای اضافی برای افزودن فقط برای این فراخوانی (با ابزارهای داده‌شده هنگام ایجاد ادغام می‌شود) |

**بازگشت `ChatReply`:**

| فیلد | نوع | توضیحات |
|------|------|------|
| `content` | `string \| ContentBlock[]` | محتوای پاسخ هوش مصنوعی |
| `thinking` | `string` | فرآیند تفکر مدل (فقط برخی مدل‌ها این را پشتیبانی می‌کنند) |
| `toolCalls` | `ToolCall[]` | ثبت فراخوانی‌های ابزار انجام‌شده در طول این پاسخ |
| `usage` | `{ inputTokens, outputTokens }` | مصرف توکن |
| `command` | `boolean` | آیا این پاسخ توسط یک دستور فعال شده است |

### chatStream — چت جریانی

```javascript
const stream = await conv.chatStream(content, options?);
for await (const chunk of stream) {
  // مدیریت رویدادهای جریان
}
```

پاسخ هوش مصنوعی را به صورت بلادرنگ دریافت می‌کند — زمانی مفید است که نیاز به نمایش تدریجی خروجی دارید.

**انواع رویداد `StreamChunk`:**

| نوع | فیلدها | توضیحات |
|------|------|------|
| `content_delta` | `content: string` | محتوای متنی افزایشی |
| `thinking_delta` | `thinking: string` | محتوای تفکر افزایشی |
| `tool_call` | `toolCall: ToolCall` | اطلاعات فراخوانی ابزار (با تغییر وضعیت فعال می‌شود) |
| `content_block` | `block: ContentBlock` | یک بلوک محتوا (تصویر، فایل و غیره) |
| `done` | `usage: { inputTokens, outputTokens }` | نوبت گفتگو کامل شد |
| `error` | `error: string, errorCode?: string` | خطا |

**کدهای خطا (`errorCode`):**

| کد | توضیحات |
|--------|------|
| `rate_limit` | محدودیت نرخ API رسید؛ معمولاً به طور خودکار دوباره تلاش می‌شود |
| `auth` | احراز هویت ناموفق بود؛ کلید API را بررسی کنید |
| `tool_timeout` | مهلت اجرای ابزار به پایان رسید |
| `max_iterations` | به حداکثر تعداد حلقه فراخوانی ابزار رسید |
| `api_error` | خطای API دیگر |

### getMessages — دریافت تاریخچه پیام

```javascript
const messages = await conv.getMessages();
```

یک `ChatMessage[]` شامل هر پیام در گفتگو برمی‌گرداند.

**شکل `ChatMessage`:**

| فیلد | نوع | توضیحات |
|------|------|------|
| `id` | `string` | شناسه پیام |
| `role` | `"user" \| "assistant" \| "system" \| "tool"` | نقش پیام |
| `content` | `string \| ContentBlock[]` | محتوای پیام |
| `thinking` | `{ content: string }` | فرآیند تفکر (پیام‌های assistant — توجه کنید این یک شیء است، نه یک رشته ساده) |
| `error` | `string` | پیام خطا اگر این نوبت خطا داشت |
| `modelId` | `string` | شناسه مدل استفاده‌شده برای این پیام |
| `durationMs` | `number` | مدت کل پاسخ در میلی‌ثانیه |
| `parentId` | `string` | شناسه پیام والد (برای انشعاب) |
| `toolCalls` | `ToolCall[]` | ثبت فراخوانی‌های ابزار (پیام‌های assistant) |
| `toolCallId` | `string` | شناسه فراخوانی ابزار مربوطه (پیام‌های tool) |
| `usage` | `{ inputTokens, outputTokens }` | مصرف توکن |
| `createtime` | `number` | زمان‌سنج ایجاد |

### clear — پاک کردن گفتگو

```javascript
await conv.clear();
```

تمام تاریخچه پیام در گفتگو را پاک می‌کند.

### save — ماندگار کردن گفتگو

```javascript
await conv.save();
```

فراداده گفتگو را در ذخیره‌سازی ذخیره می‌کند. گفتگوهای موقتی (`ephemeral: true`) به طور پیش‌فرض ذخیره نمی‌شوند؛ فراخوانی این روش آن را به یک گفتگوی ماندگار تبدیل می‌کند.


### ویژگی‌های نمونه

| ویژگی | نوع | توضیحات |
|------|------|------|
| `id` | `string` | شناسه گفتگو |
| `title` | `string` | عنوان گفتگو |
| `modelId` | `string` | شناسه مدل در حال استفاده |

## محتوای چندوجهی

محتوای پیام می‌تواند یک رشته متنی ساده یا یک آرایه `ContentBlock[]` برای پشتیبانی از ورودی چندوجهی باشد:

```javascript
// ارسال متن + یک تصویر
await conv.chat([
  { type: "text", text: "لطفاً تحلیل کنید چه چیزی در این تصویر است" },
  { type: "image", attachmentId: "img-id", mimeType: "image/png" }
]);
```

### انواع ContentBlock

| نوع | فیلدهای الزامی | توضیحات |
|------|---------|------|
| `text` | `text: string` | محتوای متنی |
| `image` | `attachmentId: string, mimeType: string` | تصویر؛ نیاز به مدل با قابلیت بینایی دارد |
| `file` | `attachmentId: string, mimeType: string, name: string` | فایل |
| `audio` | `attachmentId: string, mimeType: string` | صدا |

## گفتگوهای موقتی در برابر ماندگار

| ویژگی | گفتگوی ماندگار (پیش‌فرض) | گفتگوی موقتی |
|------|-------------------|---------------------|
| ذخیره پیام | در OPFS ماندگار می‌شود | فقط در حافظه |
| ابزارهای داخلی | همه در دسترس | شامل نمی‌شوند؛ خودتان از طریق `tools` ارائه دهید |
| فهرست گفتگوها | قابل مشاهده | قابل مشاهده نیست |
| کش prompt | پشتیبانی می‌شود | می‌تواند غیرفعال شود |
| مورد استفاده | گفتگوهای عمومی | کارهای سبک‌وزن، یک‌باره و پرسش‌وپاسخ سریع |

## مدیریت زمینه

### فشرده‌سازی خودکار

هنگامی که مصرف زمینه گفتگو از **80%** پنجره زمینه مدل تجاوز کند، سیستم به طور خودکار LLM را برای تولید خلاصه تاریخچه فراخوانی می‌کند و پیام‌های قدیمی‌تر را برای آزادکردن فضا جایگزین می‌کند.

### کش prompt

به طور پیش‌فرض فعال است. برای مدل‌های Anthropic، prompt سیستم و تاریخچه پیام در کش ذخیره می‌شوند و مصرف توکن و تأخیر برای نوبت‌های تکراری را به طور قابل توجهی کاهش می‌دهند.

می‌تواند از طریق `cache: false` غیرفعال شود:

```javascript
const conv = await CAT.agent.conversation.create({ cache: false });
```

## مثال کامل

```javascript
// ==UserScript==
// @name        دستیار ترجمه هوشمند
// @match       *://*/*
// @grant       CAT.agent.conversation
// @grant       CAT.agent.dom
// ==/UserScript==

// ایجاد یک گفتگو با یک ابزار سفارشی
const conv = await CAT.agent.conversation.create({
  system: "شما یک دستیار ترجمه هستید. کاربر محتوای صفحه وب را به شما می‌دهد — لطفاً آن را به چینی ترجمه کنید.",
  tools: [{
    name: "get_selection",
    description: "متن انتخاب‌شده توسط کاربر در صفحه را دریافت کنید",
    parameters: { type: "object", properties: {} },
    handler: async () => {
      return { text: window.getSelection()?.toString() || "هیچ متنی انتخاب نشده است" };
    }
  }]
});

// پخش نتیجه ترجمه
const stream = await conv.chatStream("لطفاً متن انتخاب‌شده را دریافت کنید و به چینی ترجمه کنید");
let result = "";
for await (const chunk of stream) {
  if (chunk.type === "content_delta") {
    result += chunk.content;
    // به‌روزرسانی رابط کاربری در زمان واقعی
    updateTranslationUI(result);
  }
}
```
