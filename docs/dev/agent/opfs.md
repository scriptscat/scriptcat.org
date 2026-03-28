---
id: agent-opfs
sidebar_position: 7
---

# OPFS 文件 API

`@grant CAT.agent.opfs`

OPFS（Origin Private File System）文件 API 允许脚本在 Agent 工作区中读写文件。所有路径相对于 `agents/workspace/` 目录。

## write — 写入文件

```javascript
const result = await CAT.agent.opfs.write(path, content);
```

**参数：**

| 参数 | 类型 | 说明 |
|------|------|------|
| `path` | `string` | 文件路径（必填），支持多级目录 |
| `content` | `string \| Blob` | 文件内容 |

**content 支持的格式：**

| 格式 | 说明 |
|------|------|
| 普通字符串 | 保存为 UTF-8 文本文件 |
| data URL 字符串 | 自动解码为二进制保存（如 `data:image/png;base64,...`） |
| `Blob` 对象 | 直接保存二进制数据 |

**返回值 WriteResult：**

| 字段 | 类型 | 说明 |
|------|------|------|
| `path` | `string` | 文件保存路径 |
| `size` | `number` | 文件大小（字节） |

```javascript
// 写入文本文件
await CAT.agent.opfs.write("data/config.json", JSON.stringify({ key: "value" }));

// 写入二进制文件（data URL）
const canvas = document.createElement("canvas");
const dataUrl = canvas.toDataURL("image/png");
await CAT.agent.opfs.write("images/chart.png", dataUrl);
```

> 如果路径中的父目录不存在，会自动创建。如果文件已存在，内容会被覆盖。

## read — 读取文件

```javascript
const result = await CAT.agent.opfs.read(path, format?);
```

**参数：**

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `path` | `string` | — | 文件路径（必填） |
| `format` | `"text" \| "bloburl"` | `"text"` | 读取格式 |

**返回值 ReadResult：**

| 字段 | 类型 | 条件 | 说明 |
|------|------|------|------|
| `path` | `string` | 始终 | 文件路径 |
| `size` | `number` | 始终 | 文件大小 |
| `content` | `string` | format="text" | 文件文本内容 |
| `blobUrl` | `string` | format="bloburl" | blob URL |
| `mimeType` | `string` | format="bloburl" | MIME 类型 |

**两种读取模式：**

```javascript
// 文本模式 — 适合 JSON、文本文件
const config = await CAT.agent.opfs.read("data/config.json");
const data = JSON.parse(config.content);

// Blob URL 模式 — 适合图片、二进制文件
const image = await CAT.agent.opfs.read("images/chart.png", "bloburl");
// image.blobUrl = "blob:chrome-extension://xxx/yyy"
// 可以在 ISOLATED world 的 executeScript 中使用这个 URL
```

**支持的 MIME 类型自动识别：**

| 扩展名 | MIME 类型 |
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

## list — 列出目录

```javascript
const entries = await CAT.agent.opfs.list(path?);
```

**参数：**

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `path` | `string` | `""` | 目录路径，空字符串为根目录 |

**返回值 FileEntry[]：**

| 字段 | 类型 | 说明 |
|------|------|------|
| `name` | `string` | 文件/目录名 |
| `type` | `"file" \| "directory"` | 类型 |
| `size` | `number` | 文件大小（仅 file 类型） |

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

## delete — 删除文件或目录

```javascript
const result = await CAT.agent.opfs.delete(path);
```

支持递归删除目录及其所有内容。

**返回值：**

```typescript
{ success: true }
```

## Blob URL 使用注意事项

- Blob URL 格式为 `blob:chrome-extension://xxx/yyy`
- **只能在 ISOLATED world 中使用**（`executeScript` 的默认环境）
- 在 MAIN world（页面环境）中无法访问扩展的 blob URL
- Blob URL 的生命周期与扩展 session 绑定

```javascript
// 正确：在 ISOLATED world 中使用 blob URL
const img = await CAT.agent.opfs.read("images/photo.png", "bloburl");
await CAT.agent.dom.executeScript(`
  const img = document.createElement("img");
  img.src = "${img.blobUrl}";
  document.body.appendChild(img);
`, { world: "ISOLATED" });

// 错误：MAIN world 无法访问
await CAT.agent.dom.executeScript(`
  fetch("${img.blobUrl}") // 会失败！
`, { world: "MAIN" });
```
