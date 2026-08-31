---
title: OPFS Dosya API'si
---

`@grant CAT.agent.opfs`

OPFS (Origin Private File System) dosya API'si, bir betiğin Agent çalışma alanındaki dosyaları okumasını ve yazmasını sağlar. Tüm yollar `agents/workspace/` dizinine göredir.

## write — bir dosya yaz

```javascript
const result = await CAT.agent.opfs.write(path, content);
```

**Parametreler:**

| Parametre | Tür | Açıklama |
|------|------|------|
| `path` | `string` | Dosya yolu (zorunlu); iç içe dizinleri destekler |
| `content` | `string \| Blob` | Dosya içeriği |

**Desteklenen `content` biçimleri:**

| Biçim | Açıklama |
|------|------|
| Düz dize | UTF-8 metin dosyası olarak kaydedilir |
| Veri URL'si dizesi | Otomatik olarak çözülür ve ikili olarak kaydedilir (örn. `data:image/png;base64,...`) |
| `Blob` nesnesi | Doğrudan kaydedilen ikili veri |

**`WriteResult` döndürür:**

| Alan | Tür | Açıklama |
|------|------|------|
| `path` | `string` | Dosyanın kaydedildiği yol |
| `size` | `number` | Dosya boyutu (bayt) |

```javascript
// Bir metin dosyası yaz
await CAT.agent.opfs.write("data/config.json", JSON.stringify({ key: "value" }));

// Bir ikili dosya yaz (veri URL'si)
const canvas = document.createElement("canvas");
const dataUrl = canvas.toDataURL("image/png");
await CAT.agent.opfs.write("images/chart.png", dataUrl);
```

> Üst dizinler yoksa otomatik olarak oluşturulur. Dosya zaten varsa içeriği üzerine yazılır.

## read — bir dosyayı oku

```javascript
const result = await CAT.agent.opfs.read(path, format?);
```

**Parametreler:**

| Parametre | Tür | Varsayılan | Açıklama |
|------|------|--------|------|
| `path` | `string` | — | Dosya yolu (zorunlu) |
| `format` | `"text" \| "blob"` | `"text"` | Okuma biçimi |

**`ReadResult` döndürür:**

| Alan | Tür | Ne zaman var | Açıklama |
|------|------|------|------|
| `path` | `string` | her zaman | dosya yolu |
| `size` | `number` | her zaman | Dosya boyutu |
| `content` | `string` | format="text" | Dosya metin içeriği |
| `data` | `Blob` | format="blob" | Dosyanın Blob nesnesi (yapılandırılmış klonlama ile aktarılır) |
| `mimeType` | `string` | format="blob" | Otomatik algılanan MIME türü |

**İki okuma modu:**

```javascript
// Metin modu — JSON ve metin dosyaları için uygundur
const config = await CAT.agent.opfs.read("data/config.json");
const data = JSON.parse(config.content);

// Blob modu — görseller ve ikili dosyalar için uygundur
const image = await CAT.agent.opfs.read("images/chart.png", "blob");
// image.data gerçek bir Blob nesnesidir (kapsam kısıtlı bir blob: URL değil)
// İhtiyaç duyan herhangi bir bağlamda URL.createObjectURL(image.data)
// ile yerel bir URL oluşturun veya Blob'u kabul eden herhangi bir API'ye doğrudan verin
```

**Otomatik MIME türü algılama:**

| Uzantı | MIME türü |
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
| diğer | `application/octet-stream` |

## list — bir dizini listele

```javascript
const entries = await CAT.agent.opfs.list(path?);
```

**Parametreler:**

| Parametre | Tür | Varsayılan | Açıklama |
|------|------|--------|------|
| `path` | `string` | `""` | Dizin yolu; boş bir dize kök dizin anlamına gelir |

**`FileEntry[]` döndürür:**

| Alan | Tür | Açıklama |
|------|------|------|
| `name` | `string` | Dosya/dizin adı |
| `type` | `"file" \| "directory"` | Tür |
| `size` | `number` | Dosya boyutu (yalnızca `file` türü) |

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

## delete — bir dosyayı veya dizini sil

```javascript
const result = await CAT.agent.opfs.delete(path);
```

Bir dizini ve içindeki her şeyi yinelemeli olarak silmeyi destekler.

**Döndürür:**

```typescript
{ success: true }
```

## readAttachment — bir eki oku

```javascript
const result = await CAT.agent.opfs.readAttachment(attachmentId);
```

Bir sohbetten ek verilerini (görseller, dosyalar vb.) okur. Ek kimliği, bir mesajdaki `ContentBlock.attachmentId` değerinden gelir.

**Parametreler:**

| Parametre | Tür | Açıklama |
|------|------|------|
| `attachmentId` | `string` | Ek kimliği (zorunlu) |

**Döndürür:**

| Alan | Tür | Açıklama |
|------|------|------|
| `id` | `string` | Ek kimliği |
| `data` | `Blob` | Ek ikili verisi |
| `size` | `number` | Dosya boyutu (bayt) |
| `mimeType` | `string` | MIME türü |

```javascript
// AI'nın bir sohbette oluşturduğu bir görüntü ekini oku
const messages = await conv.getMessages();
const lastMsg = messages[messages.length - 1];
const imageBlock = lastMsg.content.find(b => b.type === "image");
if (imageBlock) {
  const attachment = await CAT.agent.opfs.readAttachment(imageBlock.attachmentId);
  console.log(`Attachment size: ${attachment.size}, type: ${attachment.mimeType}`);
}
```

## Blob verileriyle çalışma

- `read(path, "blob")`, [yapılandırılmış klonlama](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) ile aktarılan gerçek bir `Blob` nesnesi döndürür — eklentinin kaynağına kapsamlanmış bir `blob:` URL değil, bu nedenle bağlamlar arası erişim kısıtlaması konusunda endişelenmenize gerek yoktur
- Bir sayfada kullanılabilir geçici bir URL almak için `URL.createObjectURL(result.data)` çağrısı yapın; işiniz bittiğinde `URL.revokeObjectURL()` çağrısı yapın
- `Blob`'u kabul eden herhangi bir Web API'sine de doğrudan iletebilirsiniz (örn. `fetch`'in `body` değeri, `FormData.append`, `<input type="file">` için bir `DataTransfer`)
