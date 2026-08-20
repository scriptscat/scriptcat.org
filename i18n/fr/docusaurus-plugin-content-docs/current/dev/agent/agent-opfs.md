---
title: API de fichiers OPFS
---

`@grant CAT.agent.opfs`

L'API de fichiers OPFS (Origin Private File System) permet à un script de lire et d'écrire des fichiers dans l'espace de travail de l'Agent. Tous les chemins sont relatifs au répertoire `agents/workspace/`.

## write — écrire un fichier

```javascript
const result = await CAT.agent.opfs.write(path, content);
```

**Paramètres :**

| Paramètre | Type | Description |
|------|------|------|
| `path` | `string` | Chemin du fichier (obligatoire) ; prend en charge les répertoires imbriqués |
| `content` | `string \| Blob` | Contenu du fichier |

**Formats `content` pris en charge :**

| Format | Description |
|------|------|
| Chaîne de texte simple | Enregistrée comme fichier texte UTF-8 |
| Chaîne d'URL de données | Décodée automatiquement et enregistrée en binaire (ex. `data:image/png;base64,...`) |
| Objet `Blob` | Données binaires enregistrées directement |

**Retourne `WriteResult` :**

| Champ | Type | Description |
|------|------|------|
| `path` | `string` | Chemin où le fichier a été enregistré |
| `size` | `number` | Taille du fichier (octets) |

```javascript
// Write a text file
await CAT.agent.opfs.write("data/config.json", JSON.stringify({ key: "value" }));

// Write a binary file (data URL)
const canvas = document.createElement("canvas");
const dataUrl = canvas.toDataURL("image/png");
await CAT.agent.opfs.write("images/chart.png", dataUrl);
```

> Les répertoires parents sont créés automatiquement s'ils n'existent pas. Si le fichier existe déjà, son contenu est écrasé.

## read — lire un fichier

```javascript
const result = await CAT.agent.opfs.read(path, format?);
```

**Paramètres :**

| Paramètre | Type | Défaut | Description |
|------|------|--------|------|
| `path` | `string` | — | Chemin du fichier (obligatoire) |
| `format` | `"text" \| "blob"` | `"text"` | Format de lecture |

**Retourne `ReadResult` :**

| Champ | Type | Présent quand | Description |
|------|------|------|------|
| `path` | `string` | toujours | chemin du fichier |
| `size` | `number` | toujours | Taille du fichier |
| `content` | `string` | format="text" | Contenu texte du fichier |
| `data` | `Blob` | format="blob" | L'objet Blob du fichier (transféré via un clone structuré) |
| `mimeType` | `string` | format="blob" | Type MIME détecté automatiquement |

**Deux modes de lecture :**

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

**Détection automatique du type MIME :**

| Extension | Type MIME |
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
| autre | `application/octet-stream` |

## list — lister un répertoire

```javascript
const entries = await CAT.agent.opfs.list(path?);
```

**Paramètres :**

| Paramètre | Type | Défaut | Description |
|------|------|--------|------|
| `path` | `string` | `""` | Chemin du répertoire ; une chaîne vide signifie le répertoire racine |

**Retourne `FileEntry[]` :**

| Champ | Type | Description |
|------|------|------|
| `name` | `string` | Nom du fichier/répertoire |
| `type` | `"file" \| "directory"` | Type |
| `size` | `number` | Taille du fichier (type `file` uniquement) |

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

## delete — supprimer un fichier ou un répertoire

```javascript
const result = await CAT.agent.opfs.delete(path);
```

Prend en charge la suppression récursive d'un répertoire et de tout ce qu'il contient.

**Retourne :**

```typescript
{ success: true }
```

## readAttachment — lire une pièce jointe

```javascript
const result = await CAT.agent.opfs.readAttachment(attachmentId);
```

Lit les données d'une pièce jointe (images, fichiers, etc.) d'une conversation. L'ID de la pièce jointe provient de `ContentBlock.attachmentId` dans un message.

**Paramètres :**

| Paramètre | Type | Description |
|------|------|------|
| `attachmentId` | `string` | ID de la pièce jointe (obligatoire) |

**Retourne :**

| Champ | Type | Description |
|------|------|------|
| `id` | `string` | ID de la pièce jointe |
| `data` | `Blob` | Données binaires de la pièce jointe |
| `size` | `number` | Taille du fichier (octets) |
| `mimeType` | `string` | Type MIME |

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

## Travailler avec des données Blob

- `read(path, "blob")` retourne un vrai objet `Blob` transféré via [clone structuré](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) — et non une URL `blob:` limitée à l'origine de l'extension, donc aucune restriction d'accès entre contextes à craindre
- Pour obtenir une URL temporaire utilisable dans une page, appelez `URL.createObjectURL(result.data)` ; appelez `URL.revokeObjectURL()` lorsque vous en avez terminé
- Vous pouvez aussi passer le `Blob` directement à toute API Web qui accepte un `Blob`/`File` (par ex. `body` de `fetch`, `FormData.append`, un `DataTransfer` pour `<input type="file">`)
