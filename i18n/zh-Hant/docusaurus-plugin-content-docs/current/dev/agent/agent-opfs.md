---
title: OPFS 檔案 API
---

`@grant CAT.agent.opfs`

OPFS（Origin Private File System）檔案 API 讓腳本可以在 Agent 工作區中讀寫檔案。所有路徑都是相對於 `agents/workspace/` 目錄。

## write — 寫入檔案

```javascript
const result = await CAT.agent.opfs.write(path, content);
```

**參數：**

| 參數 | 型別 | 說明 |
|------|------|------|
| `path` | `string` | 檔案路徑（必填）；支援巢狀目錄 |
| `content` | `string \| Blob` | 檔案內容 |

**支援的 `content` 格式：**

| 格式 | 說明 |
|------|------|
| 純文字字串 | 儲存為 UTF-8 文字檔 |
| Data URL 字串 | 自動解碼並儲存為二進位（例如 `data:image/png;base64,...`） |
| `Blob` 物件 | 直接儲存二進位資料 |

**回傳 `WriteResult`：**

| 欄位 | 型別 | 說明 |
|------|------|------|
| `path` | `string` | 檔案儲存的路徑 |
| `size` | `number` | 檔案大小（位元組） |

```javascript
// 寫入文字檔
await CAT.agent.opfs.write("data/config.json", JSON.stringify({ key: "value" }));

// 寫入二進位檔（Data URL）
const canvas = document.createElement("canvas");
const dataUrl = canvas.toDataURL("image/png");
await CAT.agent.opfs.write("images/chart.png", dataUrl);
```

> 如果父目錄不存在會自動建立。如果檔案已存在，內容會被覆寫。

## read — 讀取檔案

```javascript
const result = await CAT.agent.opfs.read(path, format?);
```

**參數：**

| 參數 | 型別 | 預設值 | 說明 |
|------|------|--------|------|
| `path` | `string` | — | 檔案路徑（必填） |
| `format` | `"text" \| "blob"` | `"text"` | 讀取格式 |

**回傳 `ReadResult`：**

| 欄位 | 型別 | 存在時 | 說明 |
|------|------|------|------|
| `path` | `string` | 常時 | 檔案路徑 |
| `size` | `number` | 常時 | 檔案大小 |
| `content` | `string` | format="text" | 檔案文字內容 |
| `data` | `Blob` | format="blob" | 檔案的 Blob 物件（透過結構化克隆傳輸） |
| `mimeType` | `string` | format="blob" | 自動偵測的 MIME 類型 |

**兩種讀取模式：**

```javascript
// 文字模式 — 適用於 JSON 和文字檔
const config = await CAT.agent.opfs.read("data/config.json");
const data = JSON.parse(config.content);

// Blob 模式 — 適用於圖片和二進位檔
const image = await CAT.agent.opfs.read("images/chart.png", "blob");
// image.data 是真實的 Blob 物件（不是受範圍限制的 blob: URL）
// 在需要的任何上下文中使用 URL.createObjectURL(image.data) 建立本地 URL
// 或直接將 Blob 傳給任何接受 Blob 的 API
```

**自動 MIME 類型偵測：**

| 副檔名 | MIME 類型 |
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
| 其他 | `application/octet-stream` |

## list — 列出目錄

```javascript
const entries = await CAT.agent.opfs.list(path?);
```

**參數：**

| 參數 | 型別 | 預設值 | 說明 |
|------|------|--------|------|
| `path` | `string` | `""` | 目錄路徑；空字串表示根目錄 |

**回傳 `FileEntry[]`：**

| 欄位 | 型別 | 說明 |
|------|------|------|
| `name` | `string` | 檔案/目錄名稱 |
| `type` | `"file" \| "directory"` | 類型 |
| `size` | `number` | 檔案大小（僅 `file` 類型） |

```javascript
const entries = await CAT.agent.opfs.list("data/");
for (const entry of entries) {
  if (entry.type === "file") {
    console.log(`${entry.name} (${entry.size} 位元組)`);
  } else {
    console.log(`${entry.name}/`);
  }
}
```

## delete — 刪除檔案或目錄

```javascript
const result = await CAT.agent.opfs.delete(path);
```

支援遞迴刪除目錄及其所有內容。

**回傳：**

```typescript
{ success: true }
```

## readAttachment — 讀取附件

```javascript
const result = await CAT.agent.opfs.readAttachment(attachmentId);
```

從對話中讀取附件資料（圖片、檔案等）。附件 ID 來自訊息中的 `ContentBlock.attachmentId`。

**參數：**

| 參數 | 型別 | 說明 |
|------|------|------|
| `attachmentId` | `string` | 附件 ID（必填） |

**回傳：**

| 欄位 | 型別 | 說明 |
|------|------|------|
| `id` | `string` | 附件 ID |
| `data` | `Blob` | 附件二進位資料 |
| `size` | `number` | 檔案大小（位元組） |
| `mimeType` | `string` | MIME 類型 |

```javascript
// 讀取 AI 在對話中產生的圖片附件
const messages = await conv.getMessages();
const lastMsg = messages[messages.length - 1];
const imageBlock = lastMsg.content.find(b => b.type === "image");
if (imageBlock) {
  const attachment = await CAT.agent.opfs.readAttachment(imageBlock.attachmentId);
  console.log(`附件大小：${attachment.size}，類型：${attachment.mimeType}`);
}
```

## 使用 Blob 資料

- `read(path, "blob")` 回傳透過[結構化克隆](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)傳輸的真實 `Blob` 物件 — 不是受範圍限制的 `blob:` URL，因此沒有跨上下文存取限制
- 要取得可在頁面中使用的暫時 URL，請呼叫 `URL.createObjectURL(result.data)`；使用完畢後呼叫 `URL.revokeObjectURL()`
- 您也可以直接將 `Blob` 傳給任何接受 `Blob`/`File` 的 Web API（例如 `fetch` 的 `body`、`FormData.append`、`<input type="file">` 的 `DataTransfer`）
