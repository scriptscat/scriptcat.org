---
title: API File OPFS
---

`@grant CAT.agent.opfs`

L'API file OPFS (Origin Private File System) permette a uno script di leggere e scrivere file nello spazio di lavoro di Agent. Tutti i percorsi sono relativi alla directory `agents/workspace/`.

## write — scrivere un file

```javascript
const result = await CAT.agent.opfs.write(path, content);
```

**Parametri:**

| Parametro | Tipo | Descrizione |
|------|------|------|
| `path` | `string` | Percorso del file (obbligatorio); supporta directory annidate |
| `content` | `string \| Blob` | Contenuto del file |

**Formati `content` supportati:**

| Formato | Descrizione |
|------|------|
| Stringa di testo puro | Salvato come file di testo UTF-8 |
| Stringa Data URL | Decodificato automaticamente e salvato come binario (es. `data:image/png;base64,...`) |
| Oggetto `Blob` | Dati binari salvati direttamente |

**Restituisce `WriteResult`:**

| Campo | Tipo | Descrizione |
|------|------|------|
| `path` | `string` | Percorso dove il file è stato salvato |
| `size` | `number` | Dimensione del file (byte) |

```javascript
// Scrivere un file di testo
await CAT.agent.opfs.write("data/config.json", JSON.stringify({ key: "value" }));

// Scrivere un file binario (Data URL)
const canvas = document.createElement("canvas");
const dataUrl = canvas.toDataURL("image/png");
await CAT.agent.opfs.write("images/chart.png", dataUrl);
```

> Le directory padre vengono create automaticamente se non esistono. Se il file esiste già, il suo contenuto viene sovrascritto.

## read — leggere un file

```javascript
const result = await CAT.agent.opfs.read(path, format?);
```

**Parametri:**

| Parametro | Tipo | Predefinito | Descrizione |
|------|------|--------|------|
| `path` | `string` | — | Percorso del file (obbligatorio) |
| `format` | `"text" \| "blob"` | `"text"` | Formato di lettura |

**Restituisce `ReadResult`:**

| Campo | Tipo | Quando presente | Descrizione |
|------|------|------|------|
| `path` | `string` | sempre | percorso del file |
| `size` | `number` | sempre | Dimensione del file |
| `content` | `string` | format="text" | Contenuto testuale del file |
| `data` | `Blob` | format="blob" | L'oggetto Blob del file (trasferito tramite clonazione strutturata) |
| `mimeType` | `string` | format="blob" | Tipo MIME rilevato automaticamente |

**Due modalità di lettura:**

```javascript
// Modalità testo — adatta per file JSON e di testo
const config = await CAT.agent.opfs.read("data/config.json");
const data = JSON.parse(config.content);

// Modalità Blob — adatta per immagini e file binari
const image = await CAT.agent.opfs.read("images/chart.png", "blob");
// image.data è un vero oggetto Blob (non una URL blob: limitata allo scope)
// Crea una URL locale con URL.createObjectURL(image.data) in qualsiasi
// contesto ne abbia bisogno, oppure passa il Blob direttamente a qualsiasi API che lo accetti
```

**Rilevamento automatico del tipo MIME:**

| Estensione | Tipo MIME |
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
| altro | `application/octet-stream` |

## list — elencare una directory

```javascript
const entries = await CAT.agent.opfs.list(path?);
```

**Parametri:**

| Parametro | Tipo | Predefinito | Descrizione |
|------|------|--------|------|
| `path` | `string` | `""` | Percorso della directory; una stringa vuota significa la directory radice |

**Restituisce `FileEntry[]`:**

| Campo | Tipo | Descrizione |
|------|------|------|
| `name` | `string` | Nome del file/directory |
| `type` | `"file" \| "directory"` | Tipo |
| `size` | `number` | Dimensione del file (solo tipo `file`) |

```javascript
const entries = await CAT.agent.opfs.list("data/");
for (const entry of entries) {
  if (entry.type === "file") {
    console.log(`${entry.name} (${entry.size} byte)`);
  } else {
    console.log(`${entry.name}/`);
  }
}
```

## delete — eliminare un file o directory

```javascript
const result = await CAT.agent.opfs.delete(path);
```

Supporta l'eliminazione ricorsiva di una directory e di tutto il suo contenuto.

**Restituisce:**

```typescript
{ success: true }
```

## readAttachment — leggere un allegato

```javascript
const result = await CAT.agent.opfs.readAttachment(attachmentId);
```

Legge i dati degli allegati (immagini, file, ecc.) da una conversazione. L'ID dell'allegato proviene da `ContentBlock.attachmentId` in un messaggio.

**Parametri:**

| Parametro | Tipo | Descrizione |
|------|------|------|
| `attachmentId` | `string` | ID dell'allegato (obbligatorio) |

**Restituisce:**

| Campo | Tipo | Descrizione |
|------|------|------|
| `id` | `string` | ID dell'allegato |
| `data` | `Blob` | Dati binari dell'allegato |
| `size` | `number` | Dimensione del file (byte) |
| `mimeType` | `string` | Tipo MIME |

```javascript
// Leggere un allegato immagine che l'AI ha generato in una conversazione
const messages = await conv.getMessages();
const lastMsg = messages[messages.length - 1];
const imageBlock = lastMsg.content.find(b => b.type === "image");
if (imageBlock) {
  const attachment = await CAT.agent.opfs.readAttachment(imageBlock.attachmentId);
  console.log(`Dimensione allegato: ${attachment.size}, tipo: ${attachment.mimeType}`);
}
```

## Lavorare con dati Blob

- `read(path, "blob")` restituisce un vero oggetto `Blob` trasferito tramite [clonazione strutturata](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) — non è un URL `blob:` limitato allo scope dell'estensione, quindi non ci sono restrizioni di accesso tra contesti
- Per ottenere un URL temporaneo utilizzabile in una pagina, chiamare `URL.createObjectURL(result.data)`; chiamare `URL.revokeObjectURL()` quando si è finito
- È possibile passare il `Blob` direttamente a qualsiasi API Web che accetti un `Blob`/`File` (ad es. il `body` di `fetch`, `FormData.append`, un `DataTransfer` per `<input type="file">`)
