---
title: API Hội thoại
---

`@grant CAT.agent.conversation`

API Hội thoại là cốt lõi của hệ thống Agent, cho phép script tạo cuộc trò chuyện AI, gửi tin nhắn và nhận phản hồi.

## Tạo cuộc trò chuyện

```javascript
const conv = await CAT.agent.conversation.create(options?);
```

### ConversationCreateOptions

| Tham số | Kiểu | Mặc định | Mô tả |
|------|------|--------|------|
| `id` | `string` | tự động tạo | ID cuộc trò chuyện, dùng để tiếp tục cuộc trò chuyện hiện có |
| `system` | `string` | — | Prompt hệ thống tùy chỉnh, được thêm sau prompt tích hợp sẵn |
| `model` | `string` | mô hình mặc định | ID mô hình (được lấy sau khi cấu hình trên trang quản lý) |
| `maxIterations` | `number` | `20` | Số vòng lặp gọi công cụ tối đa trong một lượt hội thoại |
| `skills` | `"auto" \| string[]` | — | `"auto"` tự động tải tất cả Skills, hoặc mảng tên Skills cụ thể |
| `tools` | `ToolDefinition[]` | — | Danh sách công cụ tùy chỉnh (xem bên dưới) |
| `commands` | `Record<string, CommandHandler>` | — | Lệnh hội thoại tùy chỉnh |
| `ephemeral` | `boolean` | `false` | Cuộc trò chuyện tạm thời không được lưu持久 |
| `cache` | `boolean` | `true` | Bật bộ nhớ đệm prompt (giảm sử dụng token) |

### Công cụ tùy chỉnh

Script có thể đăng ký công cụ riêng để AI gọi:

```javascript
const conv = await CAT.agent.conversation.create({
  tools: [{
    name: "get_weather",
    description: "Lấy thông tin thời tiết cho thành phố được chỉ định",
    parameters: {
      type: "object",
      properties: {
        city: {
          type: "string",
          description: "Tên thành phố"
        },
        unit: {
          type: "string",
          enum: ["celsius", "fahrenheit"],
          description: "Đơn vị nhiệt độ"
        }
      },
      required: ["city"]
    },
    handler: async (args) => {
      // args = { city: "Hà Nội", unit: "celsius" }
      const data = await fetchWeather(args.city, args.unit);
      return { temperature: data.temp, condition: data.condition };
    }
  }]
});
```

`parameters` của công cụ tuân theo đặc tả [JSON Schema](https://json-schema.org/). AI sử dụng `description` để hiểu khi nào và cách gọi công cụ.

### Lệnh tùy chỉnh

Có thể đăng ký lệnh tùy chỉnh bắt đầu bằng `/`:

```javascript
const conv = await CAT.agent.conversation.create({
  commands: {
    "/export": async (args) => {
      // Kích hoạt khi người dùng nhập "/export pdf"
      await exportToPdf(args);
      return "Xuất hoàn tất";
    }
  }
});
```

Lệnh tích hợp sẵn: `/new` (xóa lịch sử hội thoại) — có thể bị ghi đè bởi trình xử lý tùy chỉnh.

## Lấy cuộc trò chuyện hiện có

```javascript
const conv = await CAT.agent.conversation.get(conversationId);
// Trả về null nếu cuộc trò chuyện không tồn tại
```

## Các phương thức ConversationInstance

### chat — chat đồng bộ

```javascript
const reply = await conv.chat(content, options?);
```

Gửi tin nhắn và đợi phản hồi hoàn chỉnh. AI có thể gọi công cụ trong khi phản hồi; `chat` đợi tất cả việc thực thi công cụ hoàn thành trước khi trả về kết quả cuối cùng.

**Tham số:**

| Tham số | Kiểu | Mô tả |
|------|------|------|
| `content` | `string \| ContentBlock[]` | Nội dung tin nhắn, văn bản hoặc nội dung đa phương thức |
| `options.tools` | `ToolDefinition[]` | Công cụ bổ sung chỉ cho lần gọi này (được kết hợp với công cụ khi tạo) |

**Trả về `ChatReply`:**

| Trường | Kiểu | Mô tả |
|------|------|------|
| `content` | `string \| ContentBlock[]` | Nội dung phản hồi của AI |
| `thinking` | `string` | Quá trình suy luận của mô hình (chỉ một số mô hình hỗ trợ) |
| `toolCalls` | `ToolCall[]` | Ghi lại các lần gọi công cụ trong phản hồi này |
| `usage` | `{ inputTokens, outputTokens }` | Sử dụng token |
| `command` | `boolean` | Phản hồi này có được kích hoạt bởi lệnh không |

### chatStream — chat trực tuyến

```javascript
const stream = await conv.chatStream(content, options?);
for await (const chunk of stream) {
  // Xử lý sự kiện trực tuyến
}
```

Nhận phản hồi của AI theo thời gian thực — hữu ích khi bạn cần hiển thị đầu ra dần dần.

**Các loại sự kiện `StreamChunk`:**

| loại | Trường | Mô tả |
|------|------|------|
| `content_delta` | `content: string` | Nội dung văn bản dần dần |
| `thinking_delta` | `thinking: string` | Nội dung suy luận dần dần |
| `tool_call` | `toolCall: ToolCall` | Thông tin gọi công cụ (kích hoạt khi trạng thái thay đổi) |
| `content_block` | `block: ContentBlock` | Khối nội dung (hình ảnh, tệp, v.v.) |
| `done` | `usage: { inputTokens, outputTokens }` | Lượt hội thoại hoàn tất |
| `error` | `error: string, errorCode?: string` | Lỗi |

**Mã lỗi (`errorCode`):**

| Mã | Mô tả |
|--------|------|
| `rate_limit` | Đã chạm giới hạn tốc độ API; thường được tự động thử lại |
| `auth` | Xác thực thất bại; kiểm tra khóa API |
| `tool_timeout` | Hết thời gian thực thi công cụ |
| `max_iterations` | Đã chạm số vòng lặp gọi công cụ tối đa |
| `api_error` | Lỗi API khác |

### getMessages — lấy lịch sử tin nhắn

```javascript
const messages = await conv.getMessages();
```

Trả về `ChatMessage[]` chứa mọi tin nhắn trong cuộc trò chuyện.

**Cấu trúc `ChatMessage`:**

| Trường | Kiểu | Mô tả |
|------|------|------|
| `id` | `string` | ID tin nhắn |
| `role` | `"user" \| "assistant" \| "system" \| "tool"` | Vai trò tin nhắn |
| `content` | `string \| ContentBlock[]` | Nội dung tin nhắn |
| `thinking` | `{ content: string }` | Quá trình suy luận (tin nhắn trợ lý — lưu ý đây là đối tượng, không phải chuỗi đơn giản) |
| `error` | `string` | Thông báo lỗi nếu lượt này gặp lỗi |
| `modelId` | `string` | ID mô hình được sử dụng cho tin nhắn này |
| `durationMs` | `number` | Tổng thời gian phản hồi bằng ms |
| `parentId` | `string` | ID tin nhắn cha (để phân nhánh) |
| `toolCalls` | `ToolCall[]` | Ghi lại các lần gọi công cụ (tin nhắn trợ lý) |
| `toolCallId` | `string` | ID gọi công cụ tương ứng (tin nhắn công cụ) |
| `usage` | `{ inputTokens, outputTokens }` | Sử dụng token |
| `createtime` | `number` | Thời gian tạo |

### clear — xóa cuộc trò chuyện

```javascript
await conv.clear();
```

Xóa toàn bộ lịch sử tin nhắn trong cuộc trò chuyện.

### save — lưu持久 cuộc trò chuyện

```javascript
await conv.save();
```

Lưu metadata cuộc trò chuyện vào bộ nhớ. Cuộc trò chuyện tạm thời (`ephemeral: true`) không được lưu theo mặc định; gọi phương thức này chuyển đổi thành cuộc trò chuyện được lưu持久.

### Thuộc tính instance

| Thuộc tính | Kiểu | Mô tả |
|------|------|------|
| `id` | `string` | ID cuộc trò chuyện |
| `title` | `string` | Tiêu đề cuộc trò chuyện |
| `modelId` | `string` | ID mô hình đang sử dụng |

## Nội dung đa phương thức

Nội dung tin nhắn có thể là chuỗi văn bản đơn giản, hoặc mảng `ContentBlock[]` để hỗ trợ đầu vào đa phương thức:

```javascript
// Gửi văn bản + hình ảnh
await conv.chat([
  { type: "text", text: "Vui lòng phân tích nội dung trong hình ảnh này" },
  { type: "image", attachmentId: "img-id", mimeType: "image/png" }
]);
```

### Các loại ContentBlock

| loại | Trường bắt buộc | Mô tả |
|------|---------|------|
| `text` | `text: string` | Nội dung văn bản |
| `image` | `attachmentId: string, mimeType: string` | Hình ảnh; yêu cầu mô hình có khả năng nhìn |
| `file` | `attachmentId: string, mimeType: string, name: string` | Tệp |
| `audio` | `attachmentId: string, mimeType: string` | Âm thanh |

## Cuộc trò chuyện tạm thời vs. được lưu持久

| Tính năng | Cuộc trò chuyện được lưu持久 (mặc định) | Cuộc trò chuyện tạm thời |
|------|-------------------|---------------------|
| Lưu trữ tin nhắn | Lưu持久 vào OPFS | Chỉ trong bộ nhớ |
| Công cụ tích hợp sẵn | Tất cả khả dụng | Không bao gồm; cung cấp của bạn qua `tools` |
| Danh sách cuộc trò chuyện | Hiển thị | Không hiển thị |
| Bộ nhớ đệm prompt | Hỗ trợ | Có thể tắt |
| Trường hợp sử dụng | Cuộc trò chuyện đa năng | Tác vụ nhẹ, một lần và câu hỏi nhanh |

## Quản lý ngữ cảnh

### Tự động nén

Khi mức sử dụng ngữ cảnh của cuộc trò chuyện vượt quá **80%** cửa sổ ngữ cảnh của mô hình, hệ thống tự động gọi LLM để tạo tóm tắt lịch sử, thay thế các tin nhắn cũ hơn để giải phóng không gian.

### Bộ nhớ đệm prompt

Bật theo mặc định. Đối với các mô hình Anthropic, prompt hệ thống và lịch sử tin nhắn được bộ nhớ đệm, giảm đáng kể sử dụng token và độ trễ cho các lượt lặp lại.

Có thể tắt qua `cache: false`:

```javascript
const conv = await CAT.agent.conversation.create({ cache: false });
```

## Ví dụ đầy đủ

```javascript
// ==UserScript==
// @name        Trợ lý dịch thuật thông minh
// @match       *://*/*
// @grant       CAT.agent.conversation
// @grant       CAT.agent.dom
// ==/UserScript==

// Tạo cuộc trò chuyện với công cụ tùy chỉnh
const conv = await CAT.agent.conversation.create({
  system: "Bạn là trợ lý dịch thuật. Người dùng sẽ cung cấp nội dung trang web — vui lòng dịch nó sang tiếng Việt.",
  tools: [{
    name: "get_selection",
    description: "Lấy văn bản người dùng đã chọn trên trang",
    parameters: { type: "object", properties: {} },
    handler: async () => {
      return { text: window.getSelection()?.toString() || "Không có văn bản được chọn" };
    }
  }]
});

// Truyền kết quả dịch thuật trực tuyến
const stream = await conv.chatStream("Vui lòng lấy văn bản đã chọn và dịch sang tiếng Việt");
let result = "";
for await (const chunk of stream) {
  if (chunk.type === "content_delta") {
    result += chunk.content;
    // Cập nhật giao diện theo thời gian thực
    updateTranslationUI(result);
  }
}
```
