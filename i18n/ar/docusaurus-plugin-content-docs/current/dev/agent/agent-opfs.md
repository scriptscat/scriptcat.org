---
title: واجهة برمجة ملفات OPFS
---

`@grant CAT.agent.opfs`

تتيح واجهة برمجة ملفات OPFS (Origin Private File System) للسكرپت قراءة وكتابة الملفات في مساحة عمل Agent. جميع المسارات نسبية إلى دليل `agents/workspace/`.

## write — كتابة ملف

```javascript
const result = await CAT.agent.opfs.write(path, content);
```

**المعلمات:**

| المعامل | النوع | الوصف |
|------|------|------|
| `path` | `string` | مسار الملف (إلزامي)؛ يدعم الأدلة المتداخلة |
| `content` | `string \| Blob` | محتوى الملف |

**صيغ `content` المدعومة:**

| الصيغة | الوصف |
|------|------|
| سلسلة نصية عادية | تُحفظ كملف نصي UTF-8 |
| سلسلة عنوان بيانات | تُفك ترميزها تلقائياً وتُحفظ كثنائي (مثل `data:image/png;base64,...`) |
| كائن `Blob` | بيانات ثنائية تُحفظ مباشرة |

**يرجع `WriteResult`:**

| الحقل | النوع | الوصف |
|------|------|------|
| `path` | `string` | المسار الذي حُفظ فيه الملف |
| `size` | `number` | حجم الملف (بايت) |

```javascript
// Write a text file
await CAT.agent.opfs.write("data/config.json", JSON.stringify({ key: "value" }));

// Write a binary file (data URL)
const canvas = document.createElement("canvas");
const dataUrl = canvas.toDataURL("image/png");
await CAT.agent.opfs.write("images/chart.png", dataUrl);
```

> يتم إنشاء الأدلة الأصلية تلقائياً إذا لم تكن موجودة. إذا كان الملف موجوداً بالفعل، يتم استبدال محتواه.

## read — قراءة ملف

```javascript
const result = await CAT.agent.opfs.read(path, format?);
```

**المعلمات:**

| المعامل | النوع | الافتراضي | الوصف |
|------|------|--------|------|
| `path` | `string` | — | مسار الملف (إلزامي) |
| `format` | `"text" \| "blob"` | `"text"` | صيغة القراءة |

**يرجع `ReadResult`:**

| الحقل | النوع | حاضر عندما | الوصف |
|------|------|------|------|
| `path` | `string` | دائماً | مسار الملف |
| `size` | `number` | دائماً | حجم الملف |
| `content` | `string` | format="text" | محتوى الملف النصي |
| `data` | `Blob` | format="blob" | كائن Blob للملف (منقول عبر clone مهيكل) |
| `mimeType` | `string` | format="blob" | نوع MIME المكتشف تلقائياً |

**وضعا القراءة:**

```javascript
// Text mode — suited to JSON and text files
const config = await CAT.agent.opfs.read("data/config.json");
const data = JSON.parse(config.content);

// Blob mode — suited to images and binary files
const image = await CAT.agent.opfs.read("images/chart.png", "blob");
// image.data is a real Blob object (not a scope-restricted blob: URL)
// Create a local URL with URL.createObjectURL(image.data) in whatever
// context needs it, or hand the Blob directly to any API that accepts one
```

**الكشف التلقائي عن نوع MIME:**

| الامتداد | نوع MIME |
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
| غير ذلك | `application/octet-stream` |

## list — سرد دليل

```javascript
const entries = await CAT.agent.opfs.list(path?);
```

**المعلمات:**

| المعامل | النوع | الافتراضي | الوصف |
|------|------|--------|------|
| `path` | `string` | `""` | مسار الدليل؛ السلسلة الفارغة تعني الدليل الجذر |

**يرجع `FileEntry[]`:**

| الحقل | النوع | الوصف |
|------|------|------|
| `name` | `string` | اسم الملف/الدليل |
| `type` | `"file" \| "directory"` | النوع |
| `size` | `number` | حجم الملف (نوع `file` فقط) |

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

## delete — حذف ملف أو دليل

```javascript
const result = await CAT.agent.opfs.delete(path);
```

يدعم الحذف المتكرر لدليل وكل ما يحتويه.

**يرجع:**

```typescript
{ success: true }
```

## readAttachment — قراءة مرفق

```javascript
const result = await CAT.agent.opfs.readAttachment(attachmentId);
```

يقرأ بيانات المرفق (صور، ملفات، إلخ) من حوار. يأتي معرف المرفق من `ContentBlock.attachmentId` في رسالة.

**المعلمات:**

| المعامل | النوع | الوصف |
|------|------|------|
| `attachmentId` | `string` | معرف المرفق (إلزامي) |

**يرجع:**

| الحقل | النوع | الوصف |
|------|------|------|
| `id` | `string` | معرف المرفق |
| `data` | `Blob` | البيانات الثنائية للمرفق |
| `size` | `number` | حجم الملف (بايت) |
| `mimeType` | `string` | نوع MIME |

```javascript
// Read an image attachment the AI generated in a conversation
const messages = await conv.getMessages();
const lastMsg = messages[messages.length - 1];
const imageBlock = lastMsg.content.find(b => b.type === "image");
if (imageBlock) {
  const attachment = await CAT.agent.opfs.readAttachment(imageBlock.attachmentId);
  console.log(`Attachment size: ${attachment.size}, type: ${attachment.mimeType}`);
}
```

## العمل مع بيانات Blob

- `read(path, "blob")` يرجع كائن `Blob` حقيقياً منقولاً عبر [clone مهيكل](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) — وليس رابط `blob:` مقيداً بأصل الإضافة، فلا توجد قيود وصول بين السياقات للقلق بشأنها
- للحصول على رابط مؤقت قابل للاستخدام في صفحة، اتصل بـ `URL.createObjectURL(result.data)`؛ اتصل بـ `URL.revokeObjectURL()` عندما تنتهي منه
- يمكنك أيضاً تمرير `Blob` مباشرة إلى أي واجهة برمجة ويب تقبل `Blob`/`File` (مثل `body` في `fetch`, `FormData.append`, `DataTransfer` لـ `<input type="file">`)
