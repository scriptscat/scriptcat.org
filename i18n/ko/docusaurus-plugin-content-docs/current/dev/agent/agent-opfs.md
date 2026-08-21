---
title: OPFS 파일 API
---

`@grant CAT.agent.opfs`

OPFS(Origin Private File System) 파일 API를 사용하면 스크립트가 Agent 작업 영역의 파일을 읽고 쓸 수 있습니다. 모든 경로는 `agents/workspace/` 디렉터리를 기준으로 합니다.

## write — 파일 쓰기

```javascript
const result = await CAT.agent.opfs.write(path, content);
```

**매개변수:**

| 매개변수 | 유형 | 설명 |
|------|------|------|
| `path` | `string` | 파일 경로 (필수); 중첩 디렉터리 지원 |
| `content` | `string \| Blob` | 파일 내용 |

**지원되는 `content` 형식:**

| 형식 | 설명 |
|------|------|
| 일반 문자열 | UTF-8 텍스트 파일로 저장 |
| 데이터 URL 문자열 | 자동으로 디코딩되어 바이너리로 저장 (예: `data:image/png;base64,...`) |
| `Blob` 객체 | 직접 저장되는 바이너리 데이터 |

**`WriteResult` 반환:**

| 필드 | 유형 | 설명 |
|------|------|------|
| `path` | `string` | 파일이 저장된 경로 |
| `size` | `number` | 파일 크기 (바이트) |

```javascript
// 텍스트 파일 쓰기
await CAT.agent.opfs.write("data/config.json", JSON.stringify({ key: "value" }));

// 바이너리 파일 쓰기 (데이터 URL)
const canvas = document.createElement("canvas");
const dataUrl = canvas.toDataURL("image/png");
await CAT.agent.opfs.write("images/chart.png", dataUrl);
```

> 상위 디렉터리가 없으면 자동으로 생성됩니다. 파일이 이미 있으면 내용이 덮어써집니다.

## read — 파일 읽기

```javascript
const result = await CAT.agent.opfs.read(path, format?);
```

**매개변수:**

| 매개변수 | 유형 | 기본값 | 설명 |
|------|------|--------|------|
| `path` | `string` | — | 파일 경로 (필수) |
| `format` | `"text" \| "blob"` | `"text"` | 읽기 형식 |

**`ReadResult` 반환:**

| 필드 | 유형 | 존재 시점 | 설명 |
|------|------|------|------|
| `path` | `string` | 항상 | 파일 경로 |
| `size` | `number` | 항상 | 파일 크기 |
| `content` | `string` | format="text" | 파일 텍스트 내용 |
| `data` | `Blob` | format="blob" | 파일의 Blob 객체 (구조적 클론으로 전송) |
| `mimeType` | `string` | format="blob" | 자동 감지된 MIME 유형 |

**두 가지 읽기 모드:**

```javascript
// 텍스트 모드 — JSON 및 텍스트 파일에 적합
const config = await CAT.agent.opfs.read("data/config.json");
const data = JSON.parse(config.content);

// Blob 모드 — 이미지 및 바이너리 파일에 적합
const image = await CAT.agent.opfs.read("images/chart.png", "blob");
// image.data는 실제 Blob 객체입니다 (범위 제한 blob: URL 아님)
// 필요한 컨텍스트에서 URL.createObjectURL(image.data)로 로컬 URL을
// 만들거나 Blob을 허용하는 모든 API에 직접 전달하세요
```

**자동 MIME 유형 감지:**

| 확장자 | MIME 유형 |
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
| 기타 | `application/octet-stream` |

## list — 디렉터리 나열

```javascript
const entries = await CAT.agent.opfs.list(path?);
```

**매개변수:**

| 매개변수 | 유형 | 기본값 | 설명 |
|------|------|--------|------|
| `path` | `string` | `""` | 디렉터리 경로; 빈 문자열은 루트 디렉터리를 의미 |

**`FileEntry[]` 반환:**

| 필드 | 유형 | 설명 |
|------|------|------|
| `name` | `string` | 파일/디렉터리 이름 |
| `type` | `"file" \| "directory"` | 유형 |
| `size` | `number` | 파일 크기 (`file` 유형만) |

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

## delete — 파일 또는 디렉터리 삭제

```javascript
const result = await CAT.agent.opfs.delete(path);
```

디렉터리와 그 안의 모든 것을 재귀적으로 삭제하는 것을 지원합니다.

**반환:**

```typescript
{ success: true }
```

## readAttachment — 첨부 파일 읽기

```javascript
const result = await CAT.agent.opfs.readAttachment(attachmentId);
```

대화에서 첨부 데이터(이미지, 파일 등)를 읽습니다. 첨부 ID는 메시지의 `ContentBlock.attachmentId`에서 가져옵니다.

**매개변수:**

| 매개변수 | 유형 | 설명 |
|------|------|------|
| `attachmentId` | `string` | 첨부 ID (필수) |

**반환:**

| 필드 | 유형 | 설명 |
|------|------|------|
| `id` | `string` | 첨부 ID |
| `data` | `Blob` | 첨부 바이너리 데이터 |
| `size` | `number` | 파일 크기 (바이트) |
| `mimeType` | `string` | MIME 유형 |

```javascript
// AI가 대화에서 생성한 이미지 첨부 파일 읽기
const messages = await conv.getMessages();
const lastMsg = messages[messages.length - 1];
const imageBlock = lastMsg.content.find(b => b.type === "image");
if (imageBlock) {
  const attachment = await CAT.agent.opfs.readAttachment(imageBlock.attachmentId);
  console.log(`Attachment size: ${attachment.size}, type: ${attachment.mimeType}`);
}
```

## Blob 데이터 작업

- `read(path, "blob")`은 [구조적 클론](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)으로 전송된 실제 `Blob` 객체를 반환합니다 — 확장 프로그램의 출처에 범위가 제한된 `blob:` URL이 아니므로 컨텍스트 간 액세스 제한에 대해 걱정할 필요가 없습니다
- 페이지에서 사용할 수 있는 임시 URL을 얻으려면 `URL.createObjectURL(result.data)`를 호출하세요. 사용이 끝나면 `URL.revokeObjectURL()`을 호출하세요
- `Blob`을 허용하는 모든 Web API(예: `fetch`의 `body`, `FormData.append`, `<input type="file">`용 `DataTransfer`)에 직접 전달할 수도 있습니다
