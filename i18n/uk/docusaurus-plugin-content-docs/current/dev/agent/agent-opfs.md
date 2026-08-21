---
title: Файловий API OPFS
---

`@grant CAT.agent.opfs`

Файловий API OPFS (Origin Private File System) дозволяє скрипту читати та записувати файли в робочому просторі Agent. Усі шляхи відносні до каталогу `agents/workspace/`.

## write — запис файлу

```javascript
const result = await CAT.agent.opfs.write(path, content);
```

**Параметри:**

| Параметр | Тип | Опис |
|------|------|------|
| `path` | `string` | Шлях до файлу (обов'язково); підтримує вкладені каталоги |
| `content` | `string \| Blob` | Вміст файлу |

**Підтримувані формати `content`:**

| Формат | Опис |
|------|------|
| Звичайний рядок | Зберігається як текстовий файл UTF-8 |
| Рядок data URL | Автоматично декодується та зберігається як бінарний файл (напр. `data:image/png;base64,...`) |
| Об'єкт `Blob` | Бінарні дані, що зберігаються безпосередньо |

**Повертає `WriteResult`:**

| Поле | Тип | Опис |
|------|------|------|
| `path` | `string` | Шлях, за яким збережено файл |
| `size` | `number` | Розмір файлу (байти) |

```javascript
// Запис текстового файлу
await CAT.agent.opfs.write("data/config.json", JSON.stringify({ key: "value" }));

// Запис бінарного файлу (data URL)
const canvas = document.createElement("canvas");
const dataUrl = canvas.toDataURL("image/png");
await CAT.agent.opfs.write("images/chart.png", dataUrl);
```

> Батьківські каталоги створюються автоматично, якщо їх немає. Якщо файл уже існує, його вміст перезаписується.

## read — читання файлу

```javascript
const result = await CAT.agent.opfs.read(path, format?);
```

**Параметри:**

| Параметр | Тип | За замовчуванням | Опис |
|------|------|--------|------|
| `path` | `string` | — | Шлях до файлу (обов'язково) |
| `format` | `"text" \| "blob"` | `"text"` | Формат читання |

**Повертає `ReadResult`:**

| Поле | Тип | Коли присутнє | Опис |
|------|------|------|------|
| `path` | `string` | завжди | шлях до файлу |
| `size` | `number` | завжди | Розмір файлу |
| `content` | `string` | format="text" | Текстовий вміст файлу |
| `data` | `Blob` | format="blob" | Об'єкт Blob файлу (передається через структуроване клонування) |
| `mimeType` | `string` | format="blob" | Автоматично визначений тип MIME |

**Два режими читання:**

```javascript
// Текстовий режим — підходить для JSON і текстових файлів
const config = await CAT.agent.opfs.read("data/config.json");
const data = JSON.parse(config.content);

// Режим Blob — підходить для зображень і бінарних файлів
const image = await CAT.agent.opfs.read("images/chart.png", "blob");
// image.data — це справжній об'єкт Blob (не blob: URL з обмеженням області)
// Створіть локальний URL за допомогою URL.createObjectURL(image.data) у будь-якому
// контексті, якому він потрібен, або передайте Blob безпосередньо в будь-який API, що його приймає
```

**Автоматичне визначення типу MIME:**

| Розширення | Тип MIME |
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
| інше | `application/octet-stream` |

## list — список каталогу

```javascript
const entries = await CAT.agent.opfs.list(path?);
```

**Параметри:**

| Параметр | Тип | За замовчуванням | Опис |
|------|------|--------|------|
| `path` | `string` | `""` | Шлях до каталогу; порожній рядок означає кореневий каталог |

**Повертає `FileEntry[]`:**

| Поле | Тип | Опис |
|------|------|------|
| `name` | `string` | Назва файлу/каталогу |
| `type` | `"file" \| "directory"` | Тип |
| `size` | `number` | Розмір файлу (лише для типу `file`) |

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

## delete — видалення файлу або каталогу

```javascript
const result = await CAT.agent.opfs.delete(path);
```

Підтримує рекурсивне видалення каталогу та всього всередині нього.

**Повертає:**

```typescript
{ success: true }
```

## readAttachment — читання вкладення

```javascript
const result = await CAT.agent.opfs.readAttachment(attachmentId);
```

Читає дані вкладень (зображення, файли тощо) з розмови. ID вкладення береться з `ContentBlock.attachmentId` у повідомленні.

**Параметри:**

| Параметр | Тип | Опис |
|------|------|------|
| `attachmentId` | `string` | ID вкладення (обов'язково) |

**Повертає:**

| Поле | Тип | Опис |
|------|------|------|
| `id` | `string` | ID вкладення |
| `data` | `Blob` | Бінарні дані вкладення |
| `size` | `number` | Розмір файлу (байти) |
| `mimeType` | `string` | Тип MIME |

```javascript
// Читання зображення-вкладення, створеного AI у розмові
const messages = await conv.getMessages();
const lastMsg = messages[messages.length - 1];
const imageBlock = lastMsg.content.find(b => b.type === "image");
if (imageBlock) {
  const attachment = await CAT.agent.opfs.readAttachment(imageBlock.attachmentId);
  console.log(`Attachment size: ${attachment.size}, type: ${attachment.mimeType}`);
}
```

## Робота з даними Blob

- `read(path, "blob")` повертає справжній об'єкт `Blob`, переданий через [структуроване клонування](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) — не `blob:` URL з обмеженням походження розширення, тому немає обмежень доступу між контекстами
- Щоб отримати тимчасовий URL, придатний для використання на сторінці, викличте `URL.createObjectURL(result.data)`; коли закінчите, викличте `URL.revokeObjectURL()`
- Ви також можете передати `Blob` безпосередньо в будь-який веб-API, який приймає `Blob`/`File` (напр. `body` у `fetch`, `FormData.append`, `DataTransfer` для `<input type="file">`)
