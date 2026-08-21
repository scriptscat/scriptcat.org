---
title: API فایل OPFS
---

`@grant CAT.agent.opfs`

API فایل OPFS (سیستم فایل خصوصی مبدأ) به یک اسکریپت اجازه می‌دهد فایل‌های فضای کار Agent را بخواند و بنویسد. همه مسیرها نسبت به دایرکتوری `agents/workspace/` هستند.

## write — نوشتن یک فایل

```javascript
const result = await CAT.agent.opfs.write(path, content);
```

**پارامترها:**

| پارامتر | نوع | توضیحات |
|------|------|------|
| `path` | `string` | مسیر فایل (الزامی)؛ از دایرکتوری‌های تودرتو پشتیبانی می‌کند |
| `content` | `string \| Blob` | محتوای فایل |

**قالب‌های پشتیبانی‌شده `content`:**

| قالب | توضیحات |
|------|------|
| رشته ساده | به عنوان فایل متنی UTF-8 ذخیره می‌شود |
| رشته URL داده | به طور خودکار رمزگشایی و به صورت دودویی ذخیره می‌شود (مثلاً `data:image/png;base64,...`) |
| شیء `Blob` | داده دودویی مستقیماً ذخیره می‌شود |

**بازگشت `WriteResult`:**

| فیلد | نوع | توضیحات |
|------|------|------|
| `path` | `string` | مسیری که فایل در آن ذخیره شد |
| `size` | `number` | اندازه فایل (بایت) |

```javascript
// نوشتن یک فایل متنی
await CAT.agent.opfs.write("data/config.json", JSON.stringify({ key: "value" }));

// نوشتن یک فایل دودویی (URL داده)
const canvas = document.createElement("canvas");
const dataUrl = canvas.toDataURL("image/png");
await CAT.agent.opfs.write("images/chart.png", dataUrl);
```

> اگر دایرکتوری‌های والد وجود نداشته باشند به طور خودکار ایجاد می‌شوند. اگر فایل از قبل وجود داشته باشد، محتوای آن بازنویسی می‌شود.

## read — خواندن یک فایل

```javascript
const result = await CAT.agent.opfs.read(path, format?);
```

**پارامترها:**

| پارامتر | نوع | پیش‌فرض | توضیحات |
|------|------|--------|------|
| `path` | `string` | — | مسیر فایل (الزامی) |
| `format` | `"text" \| "blob"` | `"text"` | قالب خواندن |

**بازگشت `ReadResult`:**

| فیلد | نوع | زمان حضور | توضیحات |
|------|------|------|------|
| `path` | `string` | همیشه | مسیر فایل |
| `size` | `number` | همیشه | اندازه فایل |
| `content` | `string` | format="text" | محتوای متنی فایل |
| `data` | `Blob` | format="blob" | شیء Blob فایل (انتقال‌یافته از طریق structured clone) |
| `mimeType` | `string` | format="blob" | نوع MIME تشخیص‌داده‌شده خودکار |

**دو حالت خواندن:**

```javascript
// حالت متنی — مناسب برای فایل‌های JSON و متنی
const config = await CAT.agent.opfs.read("data/config.json");
const data = JSON.parse(config.content);

// حالت Blob — مناسب برای تصاویر و فایل‌های دودویی
const image = await CAT.agent.opfs.read("images/chart.png", "blob");
// image.data یک شیء Blob واقعی است (نه URL blob محدود به scope)
// با URL.createObjectURL(image.data) در هر
// زمینه‌ای که به آن نیاز دارد یک URL محلی ایجاد کنید، یا Blob را مستقیماً به هر API که آن را می‌پذیرد بدهید
```

**تشخیص خودکار نوع MIME:**

| پسوند | نوع MIME |
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
| سایر | `application/octet-stream` |

## list — فهرست یک دایرکتوری

```javascript
const entries = await CAT.agent.opfs.list(path?);
```

**پارامترها:**

| پارامتر | نوع | پیش‌فرض | توضیحات |
|------|------|--------|------|
| `path` | `string` | `""` | مسیر دایرکتوری؛ رشته خالی به معنای دایرکتوری ریشه است |

**بازگشت `FileEntry[]`:**

| فیلد | نوع | توضیحات |
|------|------|------|
| `name` | `string` | نام فایل/دایرکتوری |
| `type` | `"file" \| "directory"` | نوع |
| `size` | `number` | اندازه فایل (فقط نوع `file`) |

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

## delete — حذف یک فایل یا دایرکتوری

```javascript
const result = await CAT.agent.opfs.delete(path);
```

از حذف بازگشتی یک دایرکتوری و همه چیز درون آن پشتیبانی می‌کند.

**بازگشت:**

```typescript
{ success: true }
```

## readAttachment — خواندن یک پیوست

```javascript
const result = await CAT.agent.opfs.readAttachment(attachmentId);
```

داده‌های پیوست (تصاویر، فایل‌ها و غیره) را از یک گفتگو می‌خواند. شناسه پیوست از `ContentBlock.attachmentId` در یک پیام می‌آید.

**پارامترها:**

| پارامتر | نوع | توضیحات |
|------|------|------|
| `attachmentId` | `string` | شناسه پیوست (الزامی) |

**بازگشت:**

| فیلد | نوع | توضیحات |
|------|------|------|
| `id` | `string` | شناسه پیوست |
| `data` | `Blob` | داده دودویی پیوست |
| `size` | `number` | اندازه فایل (بایت) |
| `mimeType` | `string` | نوع MIME |

```javascript
// خواندن یک پیوست تصویری که هوش مصنوعی در یک گفتگو تولید کرده است
const messages = await conv.getMessages();
const lastMsg = messages[messages.length - 1];
const imageBlock = lastMsg.content.find(b => b.type === "image");
if (imageBlock) {
  const attachment = await CAT.agent.opfs.readAttachment(imageBlock.attachmentId);
  console.log(`اندازه پیوست: ${attachment.size}, نوع: ${attachment.mimeType}`);
}
```

## کار با داده Blob

- `read(path, "blob")` یک شیء `Blob` واقعی را برمی‌گرداند که از طریق [structured clone](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) انتقال یافته است — نه یک URL `blob:` محدود به مبدأ افزونه، بنابراین هیچ محدودیت دسترسی بین زمینه‌ای برای نگرانی وجود ندارد
- برای دریافت یک URL موقت قابل استفاده در یک صفحه، `URL.createObjectURL(result.data)` را فراخوانی کنید؛ وقتی کارتان تمام شد `URL.revokeObjectURL()` را فراخوانی کنید
- همچنین می‌توانید `Blob` را مستقیماً به هر Web API که `Blob`/`File` می‌پذیرد بدهید (مثلاً `body` از `fetch`، `FormData.append`، یک `DataTransfer` برای `<input type="file">`)
