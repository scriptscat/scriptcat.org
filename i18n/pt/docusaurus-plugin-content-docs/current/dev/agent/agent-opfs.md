---
title: API de Arquivos OPFS
---

`@grant CAT.agent.opfs`

A API de arquivos OPFS (Origin Private File System) permite que um script leia e escreva arquivos no espaço de trabalho do Agent. Todos os caminhos são relativos ao diretório `agents/workspace/`.

## write — escrever um arquivo

```javascript
const result = await CAT.agent.opfs.write(path, content);
```

**Parâmetros:**

| Parâmetro | Tipo | Descrição |
|------|------|------|
| `path` | `string` | Caminho do arquivo (obrigatório); suporta diretórios aninhados |
| `content` | `string \| Blob` | Conteúdo do arquivo |

**Formatos de `content` suportados:**

| Formato | Descrição |
|------|------|
| String de texto puro | Salvo como arquivo de texto UTF-8 |
| String Data URL | Decodificado automaticamente e salvo como binário (ex. `data:image/png;base64,...`) |
| Objeto `Blob` | Dados binários salvos diretamente |

**Retorna `WriteResult`:**

| Campo | Tipo | Descrição |
|------|------|------|
| `path` | `string` | Caminho onde o arquivo foi salvo |
| `size` | `number` | Tamanho do arquivo (bytes) |

```javascript
// Escrever um arquivo de texto
await CAT.agent.opfs.write("data/config.json", JSON.stringify({ key: "value" }));

// Escrever um arquivo binário (Data URL)
const canvas = document.createElement("canvas");
const dataUrl = canvas.toDataURL("image/png");
await CAT.agent.opfs.write("images/chart.png", dataUrl);
```

> Os diretórios pais são criados automaticamente se não existirem. Se o arquivo já existir, seu conteúdo será sobrescrito.

## read — ler um arquivo

```javascript
const result = await CAT.agent.opfs.read(path, format?);
```

**Parâmetros:**

| Parâmetro | Tipo | Padrão | Descrição |
|------|------|--------|------|
| `path` | `string` | — | Caminho do arquivo (obrigatório) |
| `format` | `"text" \| "blob"` | `"text"` | Formato de leitura |

**Retorna `ReadResult`:**

| Campo | Tipo | Quando presente | Descrição |
|------|------|------|------|
| `path` | `string` | sempre | caminho do arquivo |
| `size` | `number` | sempre | Tamanho do arquivo |
| `content` | `string` | format="text" | Conteúdo de texto do arquivo |
| `data` | `Blob` | format="blob" | O objeto Blob do arquivo (transferido via clonagem estruturada) |
| `mimeType` | `string` | format="blob" | Tipo MIME detectado automaticamente |

**Dois modos de leitura:**

```javascript
// Modo texto — adequado para arquivos JSON e de texto
const config = await CAT.agent.opfs.read("data/config.json");
const data = JSON.parse(config.content);

// Modo Blob — adequado para imagens e arquivos binários
const image = await CAT.agent.opfs.read("images/chart.png", "blob");
// image.data é um objeto Blob real (não uma URL blob: restrita ao escopo)
// Crie uma URL local com URL.createObjectURL(result.data) em qualquer
// contexto que precise, ou passe o Blob diretamente para qualquer API que aceite um
```

**Detecção automática de tipo MIME:**

| Extensão | Tipo MIME |
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
| outro | `application/octet-stream` |

## list — listar um diretório

```javascript
const entries = await CAT.agent.opfs.list(path?);
```

**Parâmetros:**

| Parâmetro | Tipo | Padrão | Descrição |
|------|------|--------|------|
| `path` | `string` | `""` | Caminho do diretório; uma string vazia significa o diretório raiz |

**Retorna `FileEntry[]`:**

| Campo | Tipo | Descrição |
|------|------|------|
| `name` | `string` | Nome do arquivo/diretório |
| `type` | `"file" \| "directory"` | Tipo |
| `size` | `number` | Tamanho do arquivo (apenas tipo `file`) |

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

## delete — excluir um arquivo ou diretório

```javascript
const result = await CAT.agent.opfs.delete(path);
```

Suporta exclusão recursiva de um diretório e tudo dentro dele.

**Retorna:**

```typescript
{ success: true }
```

## readAttachment — ler um anexo

```javascript
const result = await CAT.agent.opfs.readAttachment(attachmentId);
```

Lê dados de anexos (imagens, arquivos, etc.) de uma conversa. O ID do anexo vem de `ContentBlock.attachmentId` em uma mensagem.

**Parâmetros:**

| Parâmetro | Tipo | Descrição |
|------|------|------|
| `attachmentId` | `string` | ID do anexo (obrigatório) |

**Retorna:**

| Campo | Tipo | Descrição |
|------|------|------|
| `id` | `string` | ID do anexo |
| `data` | `Blob` | Dados binários do anexo |
| `size` | `number` | Tamanho do arquivo (bytes) |
| `mimeType` | `string` | Tipo MIME |

```javascript
// Ler um anexo de imagem que a IA gerou em uma conversa
const messages = await conv.getMessages();
const lastMsg = messages[messages.length - 1];
const imageBlock = lastMsg.content.find(b => b.type === "image");
if (imageBlock) {
  const attachment = await CAT.agent.opfs.readAttachment(imageBlock.attachmentId);
  console.log(`Tamanho do anexo: ${attachment.size}, tipo: ${attachment.mimeType}`);
}
```

## Trabalhando com dados Blob

- `read(path, "blob")` retorna um objeto `Blob` real transferido via [clonagem estruturada](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) — não é uma URL `blob:` restrita ao escopo da extensão, então não há restrições de acesso entre contextos
- Para obter uma URL temporária utilizável em uma página, chame `URL.createObjectURL(result.data)`; chame `URL.revokeObjectURL()` quando terminar
- Você também pode passar o `Blob` diretamente para qualquer API web que aceite um `Blob`/`File` (ex. o `body` de `fetch`, `FormData.append`, um `DataTransfer` para `<input type="file">`)
