---
title: OPFS ֆայլի API
---

`@grant CAT.agent.opfs`

OPFS (Origin Private File System) ֆայլի API-ն թույլ է տալիս սկրիպտին կարդալ և գրել ֆայլեր Agent աշխատանքային տարածքում: Բոլոր ուղիները հարաբերական են `agents/workspace/` դիրեկտորիային:

## write — ֆայլի գրառում

```javascript
const result = await CAT.agent.opfs.write(path, content);
```

**Պարամետրեր՝**

| Պարամետր | Տիպ | Նկարագրություն |
|------|------|------|
| `path` | `string` | Ֆայլի ուղի (պարտադիր); աջակցում է բնադրված դիրեկտորիաներին |
| `content` | `string \| Blob` | Ֆայլի բովանդակություն |

**Աջակցվող `content` ձևաչափեր՝**

| Ձևաչափ | Նկարագրություն |
|------|------|
| Սովորական տող | Պահվում է որպես UTF-8 տեքստային ֆայլ |
| Data URL տող | Ավտոմատ կերպով վերծանվում և պահվում է որպես երկուական (օր.՝ `data:image/png;base64,...`) |
| `Blob` օբյեկտ | Երկուական տվյալներ՝ պահված ուղղակիորեն |

**Վերադարձնում է `WriteResult`՝**

| Դաշտ | Տիպ | Նկարագրություն |
|------|------|------|
| `path` | `string` | Ուղին, որտեղ պահվել է ֆայլը |
| `size` | `number` | Ֆայլի չափը (բայթ) |

```javascript
// Write a text file
await CAT.agent.opfs.write("data/config.json", JSON.stringify({ key: "value" }));

// Write a binary file (data URL)
const canvas = document.createElement("canvas");
const dataUrl = canvas.toDataURL("image/png");
await CAT.agent.opfs.write("images/chart.png", dataUrl);
```

> Ծնող դիրեկտորիաները ստեղծվում են ավտոմատ կերպով, եթե դրանք գոյություն չունեն: Եթե ֆայլն արդեն գոյություն ունի, դրա բովանդակությունը վերագրվում է:

## read — ֆայլի ընթերցում

```javascript
const result = await CAT.agent.opfs.read(path, format?);
```

**Պարամետրեր՝**

| Պարամետր | Տիպ | Լռելյայն | Նկարագրություն |
|------|------|--------|------|
| `path` | `string` | — | Ֆայլի ուղի (պարտադիր) |
| `format` | `"text" \| "blob"` | `"text"` | Ընթերցման ձևաչափ |

**Վերադարձնում է `ReadResult`՝**

| Դաշտ | Տիպ | Երբ կա | Նկարագրություն |
|------|------|------|------|
| `path` | `string` | միշտ | ֆայլի ուղի |
| `size` | `number` | միշտ | Ֆայլի չափ |
| `content` | `string` | format="text" | Ֆայլի տեքստային բովանդակություն |
| `data` | `Blob` | format="blob" | Ֆայլի Blob օբյեկտ (փոխանցված կառուցվածքային կլոնի միջոցով) |
| `mimeType` | `string` | format="blob" | Ավտոմատ հայտնաբերված MIME տիպ |

**Ընթերցման երկու ռեժիմ՝**

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

**Ավտոմատ MIME տիպի հայտնաբերում՝**

| Ընդլայնում | MIME տիպ |
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
| այլ | `application/octet-stream` |

## list — դիրեկտորիայի ցուցակագրում

```javascript
const entries = await CAT.agent.opfs.list(path?);
```

**Պարամետրեր՝**

| Պարամետր | Տիպ | Լռելյայն | Նկարագրություն |
|------|------|--------|------|
| `path` | `string` | `""` | Դիրեկտորիայի ուղի. դատարկ տողը նշանակում է արմատային դիրեկտորիա |

**Վերադարձնում է `FileEntry[]`՝**

| Դաշտ | Տիպ | Նկարագրություն |
|------|------|------|
| `name` | `string` | Ֆայլի/դիրեկտորիայի անուն |
| `type` | `"file" \| "directory"` | Տիպ |
| `size` | `number` | Ֆայլի չափ (միայն `file` տիպ) |

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

## delete — ֆայլի կամ դիրեկտորիայի ջնջում

```javascript
const result = await CAT.agent.opfs.delete(path);
```

Աջակցում է դիրեկտորիայի և դրա ներսում ամեն ինչի ռեկուրսիվ ջնջմանը:

**Վերադարձնում է՝**

```typescript
{ success: true }
```

## readAttachment — կցորդի ընթերցում

```javascript
const result = await CAT.agent.opfs.readAttachment(attachmentId);
```

Կարդում է կցորդի տվյալները (նկարներ, ֆայլեր և այլն) զրույցից: Կցորդի ID-ն գալիս է հաղորդագրության մեջ `ContentBlock.attachmentId`-ից:

**Պարամետրեր՝**

| Պարամետր | Տիպ | Նկարագրություն |
|------|------|------|
| `attachmentId` | `string` | Կցորդի ID (պարտադիր) |

**Վերադարձնում է՝**

| Դաշտ | Տիպ | Նկարագրություն |
|------|------|------|
| `id` | `string` | Կցորդի ID |
| `data` | `Blob` | Կցորդի երկուական տվյալներ |
| `size` | `number` | Ֆայլի չափ (բայթ) |
| `mimeType` | `string` | MIME տիպ |

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

## Blob տվյալների հետ աշխատանք

- `read(path, "blob")`-ը վերադարձնում է իրական `Blob` օբյեկտ, որը փոխանցվել է [կառուցվածքային կլոնի](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) միջոցով — ոչ թե ընդլայնման ծագմանը սահմանափակված `blob:` URL, ուստի խաչ-կոնտեքստ հասանելիության սահմանափակման մասին անհանգստանալու կարիք չկա
- Էջում օգտագործելի ժամանակավոր URL ստանալու համար կանչեք `URL.createObjectURL(result.data)`; կանչեք `URL.revokeObjectURL()`, երբ ավարտեք դրա հետ
- Կարող եք նաև `Blob`-ը ուղղակիորեն փոխանցել ցանկացած Web API-ին, որն ընդունում է `Blob`/`File` (օր.՝ `fetch`-ի `body`, `FormData.append`, `DataTransfer`՝ `<input type="file">`-ի համար)
