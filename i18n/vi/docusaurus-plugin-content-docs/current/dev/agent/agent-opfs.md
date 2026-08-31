---
title: API Tệp OPFS
---

`@grant CAT.agent.opfs`

API tệp OPFS (Origin Private File System) cho phép script đọc và ghi tệp trong không gian làm việc của Agent. Tất cả đường dẫn đều tương đối so với thư mục `agents/workspace/`.

## write — ghi tệp

```javascript
const result = await CAT.agent.opfs.write(path, content);
```

**Tham số:**

| Tham số | Kiểu | Mô tả |
|------|------|------|
| `path` | `string` | Đường dẫn tệp (bắt buộc); hỗ trợ thư mục lồng nhau |
| `content` | `string \| Blob` | Nội dung tệp |

**Các định dạng `content` được hỗ trợ:**

| Định dạng | Mô tả |
|------|------|
| Chuỗi văn bản thuần | Lưu dưới dạng tệp văn bản UTF-8 |
| Chuỗi Data URL | Tự động giải mã và lưu dưới dạng nhị phân (ví dụ: `data:image/png;base64,...`) |
| Đối tượng `Blob` | Dữ liệu nhị phân được lưu trực tiếp |

**Trả về `WriteResult`:**

| Trường | Kiểu | Mô tả |
|------|------|------|
| `path` | `string` | Đường dẫn nơi tệp đã được lưu |
| `size` | `number` | Kích thước tệp (byte) |

```javascript
// Ghi tệp văn bản
await CAT.agent.opfs.write("data/config.json", JSON.stringify({ key: "value" }));

// Ghi tệp nhị phân (Data URL)
const canvas = document.createElement("canvas");
const dataUrl = canvas.toDataURL("image/png");
await CAT.agent.opfs.write("images/chart.png", dataUrl);
```

> Các thư mục cha được tạo tự động nếu chưa tồn tại. Nếu tệp đã tồn tại, nội dung sẽ bị ghi đè.

## read — đọc tệp

```javascript
const result = await CAT.agent.opfs.read(path, format?);
```

**Tham số:**

| Tham số | Kiểu | Mặc định | Mô tả |
|------|------|--------|------|
| `path` | `string` | — | Đường dẫn tệp (bắt buộc) |
| `format` | `"text" \| "blob"` | `"text"` | Định dạng đọc |

**Trả về `ReadResult`:**

| Trường | Kiểu | Khi có | Mô tả |
|------|------|------|------|
| `path` | `string` | luôn | đường dẫn tệp |
| `size` | `number` | luôn | Kích thước tệp |
| `content` | `string` | format="text" | Nội dung văn bản của tệp |
| `data` | `Blob` | format="blob" | Đối tượng Blob của tệp (được truyền qua sao chép có cấu trúc) |
| `mimeType` | `string` | format="blob" | Loại MIME được tự động phát hiện |

**Hai chế độ đọc:**

```javascript
// Chế độ văn bản — phù hợp cho tệp JSON và văn bản
const config = await CAT.agent.opfs.read("data/config.json");
const data = JSON.parse(config.content);

// Chế độ Blob — phù hợp cho hình ảnh và tệp nhị phân
const image = await CAT.agent.opfs.read("images/chart.png", "blob");
// image.data là đối tượng Blob thực (không phải URL blob: bị giới hạn scope)
// Tạo URL tạm thời bằng URL.createObjectURL(image.data) trong bất kỳ
// ngữ cảnh nào cần nó, hoặc truyền Blob trực tiếp cho bất kỳ API nào chấp nhận Blob
```

**Tự động phát hiện loại MIME:**

| Phần mở rộng | Loại MIME |
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
| khác | `application/octet-stream` |

## list — liệt kê thư mục

```javascript
const entries = await CAT.agent.opfs.list(path?);
```

**Tham số:**

| Tham số | Kiểu | Mặc định | Mô tả |
|------|------|--------|------|
| `path` | `string` | `""` | Đường dẫn thư mục; chuỗi rỗng nghĩa là thư mục gốc |

**Trả về `FileEntry[]`:**

| Trường | Kiểu | Mô tả |
|------|------|------|
| `name` | `string` | Tên tệp/thư mục |
| `type` | `"file" \| "directory"` | Loại |
| `size` | `number` | Kích thước tệp (chỉ loại `file`) |

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

## delete — xóa tệp hoặc thư mục

```javascript
const result = await CAT.agent.opfs.delete(path);
```

Hỗ trợ xóa đệ quy thư mục và tất cả nội dung bên trong.

**Trả về:**

```typescript
{ success: true }
```

## readAttachment — đọc tệp đính kèm

```javascript
const result = await CAT.agent.opfs.readAttachment(attachmentId);
```

Đọc dữ liệu tệp đính kèm (hình ảnh, tệp, v.v.) từ cuộc trò chuyện. ID tệp đính kèm đến từ `ContentBlock.attachmentId` trong tin nhắn.

**Tham số:**

| Tham số | Kiểu | Mô tả |
|------|------|------|
| `attachmentId` | `string` | ID tệp đính kèm (bắt buộc) |

**Trả về:**

| Trường | Kiểu | Mô tả |
|------|------|------|
| `id` | `string` | ID tệp đính kèm |
| `data` | `Blob` | Dữ liệu nhị phân tệp đính kèm |
| `size` | `number` | Kích thước tệp (byte) |
| `mimeType` | `string` | Loại MIME |

```javascript
// Đọc tệp đính kèm hình ảnh mà AI đã tạo trong cuộc trò chuyện
const messages = await conv.getMessages();
const lastMsg = messages[messages.length - 1];
const imageBlock = lastMsg.content.find(b => b.type === "image");
if (imageBlock) {
  const attachment = await CAT.agent.opfs.readAttachment(imageBlock.attachmentId);
  console.log(`Kích thước đính kèm: ${attachment.size}, loại: ${attachment.mimeType}`);
}
```

## Làm việc với dữ liệu Blob

- `read(path, "blob")` trả về đối tượng `Blob` thực được truyền qua [sao chép có cấu trúc](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) — không phải URL `blob:` bị giới hạn scope của tiện ích mở rộng, nên không có hạn chế truy cập liên ngữ cảnh
- Để lấy URL tạm thời có thể sử dụng trong trang, gọi `URL.createObjectURL(result.data)`; gọi `URL.revokeObjectURL()` khi hoàn thành
- Bạn cũng có thể truyền `Blob` trực tiếp cho bất kỳ API web nào chấp nhận `Blob`/`File` (ví dụ: `body` của `fetch`, `FormData.append`, `DataTransfer` cho `<input type="file">`)
