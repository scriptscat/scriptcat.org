---
title: OPFSファイルAPI
---

`@grant CAT.agent.opfs`

OPFS（Origin Private File System）ファイルAPIにより、スクリプトはAgentワークスペース内のファイルの読み書きができます。すべてのパスは`agents/workspace/`ディレクトリからの相対パスです。

## write — ファイルを書き込み

```javascript
const result = await CAT.agent.opfs.write(path, content);
```

**パラメータ：**

| パラメータ | 型 | 説明 |
|------|------|------|
| `path` | `string` | ファイルパス（必須）；ネストされたディレクトリをサポート |
| `content` | `string \| Blob` | ファイルの内容 |

**サポートする`content`の形式：**

| 形式 | 説明 |
|------|------|
| プレーン文字列 | UTF-8テキストファイルとして保存 |
| Data URL文字列 | 自動的にデコードされバイナリとして保存（例：`data:image/png;base64,...`） |
| `Blob`オブジェクト | バイナリデータとして直接保存 |

**`WriteResult`を返します：**

| フィールド | 型 | 説明 |
|------|------|------|
| `path` | `string` | ファイルが保存されたパス |
| `size` | `number` | ファイルサイズ（バイト） |

```javascript
// テキストファイルを書き込み
await CAT.agent.opfs.write("data/config.json", JSON.stringify({ key: "value" }));

// バイナリファイルを書き込み（Data URL）
const canvas = document.createElement("canvas");
const dataUrl = canvas.toDataURL("image/png");
await CAT.agent.opfs.write("images/chart.png", dataUrl);
```

> 親ディレクトリが存在しない場合は自動的に作成されます。ファイルが既に存在する場合、内容は上書きされます。

## read — ファイルを読み込み

```javascript
const result = await CAT.agent.opfs.read(path, format?);
```

**パラメータ：**

| パラメータ | 型 | デフォルト | 説明 |
|------|------|--------|------|
| `path` | `string` | — | ファイルパス（必須） |
| `format` | `"text" \| "blob"` | `"text"` | 読み込み形式 |

**`ReadResult`を返します：**

| フィールド | 型 | 存在する場合 | 説明 |
|------|------|------|------|
| `path` | `string` | 常に | ファイルパス |
| `size` | `number` | 常に | ファイルサイズ |
| `content` | `string` | format="text" | テキスト内容 |
| `data` | `Blob` | format="blob" | ファイルのBlobオブジェクト（構造化クローンで転送） |
| `mimeType` | `string` | format="blob" | 自動検出されたMIMEタイプ |

**2つの読み込みモード：**

```javascript
// テキストモード — JSONやテキストファイルに適している
const config = await CAT.agent.opfs.read("data/config.json");
const data = JSON.parse(config.content);

// Blobモード — 画像やバイナリファイルに適している
const image = await CAT.agent.opfs.read("images/chart.png", "blob");
// image.dataは実際のBlobオブジェクト（スコープ制限されたblob: URLではない）
// 必要なコンテキストでURL.createObjectURL(image.data)を使用してローカルURLを作成
// またはBlobを直接受け取るAPIに渡す
```

**自動MIMEタイプ検出：**

| 拡張子 | MIMEタイプ |
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
| その他 | `application/octet-stream` |

## list — ディレクトリを一覧

```javascript
const entries = await CAT.agent.opfs.list(path?);
```

**パラメータ：**

| パラメータ | 型 | デフォルト | 説明 |
|------|------|--------|------|
| `path` | `string` | `""` | ディレクトリパス；空文字列はルートディレクトリを意味する |

**`FileEntry[]`を返します：**

| フィールド | 型 | 説明 |
|------|------|------|
| `name` | `string` | ファイル/ディレクトリ名 |
| `type` | `"file" \| "directory"` | タイプ |
| `size` | `number` | ファイルサイズ（`file`タイプのみ） |

```javascript
const entries = await CAT.agent.opfs.list("data/");
for (const entry of entries) {
  if (entry.type === "file") {
    console.log(`${entry.name} (${entry.size} バイト)`);
  } else {
    console.log(`${entry.name}/`);
  }
}
```

## delete — ファイルまたはディレクトリを削除

```javascript
const result = await CAT.agent.opfs.delete(path);
```

ディレクトリとその中のすべてを再帰的に削除することをサポートしています。

**返り値：**

```typescript
{ success: true }
```

## readAttachment — 添付ファイルを読み込み

```javascript
const result = await CAT.agent.opfs.readAttachment(attachmentId);
```

会話から添付ファイルデータ（画像、ファイルなど）を読み込みます。添付ファイルIDはメッセージの`ContentBlock.attachmentId`から取得します。

**パラメータ：**

| パラメータ | 型 | 説明 |
|------|------|------|
| `attachmentId` | `string` | 添付ファイルID（必須） |

**返り値：**

| フィールド | 型 | 説明 |
|------|------|------|
| `id` | `string` | 添付ファイルID |
| `data` | `Blob` | 添付ファイルのバイナリデータ |
| `size` | `number` | ファイルサイズ（バイト） |
| `mimeType` | `string` | MIMEタイプ |

```javascript
// AIが会話で生成した画像添付ファイルを読み込み
const messages = await conv.getMessages();
const lastMsg = messages[messages.length - 1];
const imageBlock = lastMsg.content.find(b => b.type === "image");
if (imageBlock) {
  const attachment = await CAT.agent.opfs.readAttachment(imageBlock.attachmentId);
  console.log(`添付ファイルサイズ: ${attachment.size}, タイプ: ${attachment.mimeType}`);
}
```

## Blobデータの操作

- `read(path, "blob")`は[構造化クローン](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)で転送された実際の`Blob`オブジェクトを返します — 拡張機能のオリジンにスコープされた`blob:` URLではないため、クロスコンテキストアクセス制限を気にする必要はありません
- ページで使用できる一時URLを取得するには、`URL.createObjectURL(result.data)`を呼び出し、使用完了後に`URL.revokeObjectURL()`を呼び出します
- `Blob`を直接`Blob`/`File`を受け取るWeb APIに渡すこともできます（例：`fetch`の`body`、`FormData.append`、`<input type="file">`の`DataTransfer`）
