---
title: API de Archivos OPFS
---

`@grant CAT.agent.opfs`

La API de archivos OPFS (Origin Private File System) permite a un script leer y escribir archivos en el espacio de trabajo de Agent. Todas las rutas son relativas al directorio `agents/workspace/`.

## write — escribir un archivo

```javascript
const result = await CAT.agent.opfs.write(path, content);
```

**Parámetros:**

| Parámetro | Tipo | Descripción |
|------|------|------|
| `path` | `string` | Ruta del archivo (obligatoria); soporta directorios anidados |
| `content` | `string \| Blob` | Contenido del archivo |

**Formatos de `content` soportados:**

| Formato | Descripción |
|------|------|
| Cadena de texto plano | Guardado como archivo de texto UTF-8 |
| Cadena Data URL | Decodificado automáticamente y guardado como binario (ej. `data:image/png;base64,...`) |
| Objeto `Blob` | Datos binarios guardados directamente |

**Devuelve `WriteResult`:**

| Campo | Tipo | Descripción |
|------|------|------|
| `path` | `string` | Ruta donde se guardó el archivo |
| `size` | `number` | Tamaño del archivo (bytes) |

```javascript
// Escribir un archivo de texto
await CAT.agent.opfs.write("data/config.json", JSON.stringify({ key: "value" }));

// Escribir un archivo binario (Data URL)
const canvas = document.createElement("canvas");
const dataUrl = canvas.toDataURL("image/png");
await CAT.agent.opfs.write("images/chart.png", dataUrl);
```

> Los directorios padre se crean automáticamente si no existen. Si el archivo ya existe, su contenido se sobrescribe.

## read — leer un archivo

```javascript
const result = await CAT.agent.opfs.read(path, format?);
```

**Parámetros:**

| Parámetro | Tipo | Predeterminado | Descripción |
|------|------|--------|------|
| `path` | `string` | — | Ruta del archivo (obligatoria) |
| `format` | `"text" \| "blob"` | `"text"` | Formato de lectura |

**Devuelve `ReadResult`:**

| Campo | Tipo | Cuando está presente | Descripción |
|------|------|------|------|
| `path` | `string` | siempre | ruta del archivo |
| `size` | `number` | siempre | Tamaño del archivo |
| `content` | `string` | format="text" | Contenido de texto del archivo |
| `data` | `Blob` | format="blob" | El objeto Blob del archivo (transferido por clonación estructurada) |
| `mimeType` | `string` | format="blob" | Tipo MIME detectado automáticamente |

**Dos modos de lectura:**

```javascript
// Modo texto — adecuado para archivos JSON y de texto
const config = await CAT.agent.opfs.read("data/config.json");
const data = JSON.parse(config.content);

// Modo Blob — adecuado para imágenes y archivos binarios
const image = await CAT.agent.opfs.read("images/chart.png", "blob");
// image.data es un objeto Blob real (no una URL blob: restringida por ámbito)
// Cree una URL local con URL.createObjectURL(image.data) en cualquier
// contexto que la necesite, o pase el Blob directamente a cualquier API que lo acepte
```

**Detección automática de tipo MIME:**

| Extensión | Tipo MIME |
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
| otro | `application/octet-stream` |

## list — listar un directorio

```javascript
const entries = await CAT.agent.opfs.list(path?);
```

**Parámetros:**

| Parámetro | Tipo | Predeterminado | Descripción |
|------|------|--------|------|
| `path` | `string` | `""` | Ruta del directorio; una cadena vacía significa el directorio raíz |

**Devuelve `FileEntry[]`:**

| Campo | Tipo | Descripción |
|------|------|------|
| `name` | `string` | Nombre del archivo/directorio |
| `type` | `"file" \| "directory"` | Tipo |
| `size` | `number` | Tamaño del archivo (solo tipo `file`) |

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

## delete — eliminar un archivo o directorio

```javascript
const result = await CAT.agent.opfs.delete(path);
```

Soporta eliminación recursiva de un directorio y todo su contenido.

**Devuelve:**

```typescript
{ success: true }
```

## readAttachment — leer un archivo adjunto

```javascript
const result = await CAT.agent.opfs.readAttachment(attachmentId);
```

Lee datos de archivos adjuntos (imágenes, archivos, etc.) de una conversación. El ID del archivo adjunto proviene de `ContentBlock.attachmentId` en un mensaje.

**Parámetros:**

| Parámetro | Tipo | Descripción |
|------|------|------|
| `attachmentId` | `string` | ID del archivo adjunto (obligatorio) |

**Devuelve:**

| Campo | Tipo | Descripción |
|------|------|------|
| `id` | `string` | ID del archivo adjunto |
| `data` | `Blob` | Datos binarios del archivo adjunto |
| `size` | `number` | Tamaño del archivo (bytes) |
| `mimeType` | `string` | Tipo MIME |

```javascript
// Leer un archivo adjunto de imagen que la IA generó en una conversación
const messages = await conv.getMessages();
const lastMsg = messages[messages.length - 1];
const imageBlock = lastMsg.content.find(b => b.type === "image");
if (imageBlock) {
  const attachment = await CAT.agent.opfs.readAttachment(imageBlock.attachmentId);
  console.log(`Tamaño del adjunto: ${attachment.size}, tipo: ${attachment.mimeType}`);
}
```

## Trabajar con datos Blob

- `read(path, "blob")` devuelve un objeto `Blob` real transferido por [clonación estructurada](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) — no es una URL `blob:` restringida al ámbito de la extensión, por lo que no hay restricciones de acceso entre contextos
- Para obtener una URL temporal usable en una página, llame a `URL.createObjectURL(result.data)`; llame a `URL.revokeObjectURL()` cuando termine
- También puede pasar el `Blob` directamente a cualquier API web que acepte un `Blob`/`File` (por ejemplo, el `body` de `fetch`, `FormData.append`, un `DataTransfer` para `<input type="file">`)
