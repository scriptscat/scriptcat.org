---
title: API truy vấn mô hình
---

`@grant CAT.agent.model`

API truy vấn mô hình cung cấp quyền chỉ đọc đối với các mô hình mà người dùng đã cấu hình trên trang quản lý. Vì lý do bảo mật, khóa API không bao giờ được hiển thị cho script.

## list — liệt kê tất cả mô hình

```javascript
const models = await CAT.agent.model.list();
```

**Trả về `ModelSummary[]`:**

| Trường | Kiểu | Mô tả |
|------|------|------|
| `id` | `string` | ID cấu hình mô hình |
| `name` | `string` | Tên hiển thị do người dùng xác định (ví dụ: "GPT-4o", "Claude Sonnet") |
| `provider` | `"openai" \| "anthropic"` | Loại nhà cung cấp |
| `apiBaseUrl` | `string` | URL cơ sở API |
| `model` | `string` | Định danh mô hình được gửi đến API nhà cung cấp (ví dụ: `gpt-4o`, `claude-sonnet-4-20250514`) |
| `maxTokens` | `number` | Tokens đầu ra tối đa (bỏ qua nếu chưa thiết lập) |

> Lưu ý: các đối tượng trả về **không bao gồm** trường `apiKey`.

## get — lấy một mô hình cụ thể

```javascript
const model = await CAT.agent.model.get(modelId);
```

Trả về `null` nếu mô hình không tồn tại.

## getDefault — lấy ID mô hình mặc định

```javascript
const defaultId = await CAT.agent.model.getDefault();
```

Trả về ID mô hình mặc định đã được người dùng cấu hình; trả về chuỗi rỗng nếu chưa thiết lập.

## getSummary — lấy ID mô hình tóm tắt

```javascript
const summaryModelId = await CAT.agent.model.getSummary();
```

Trả về ID của mô hình nhẹ mà người dùng đã cấu hình đặc biệt cho các tác vụ tóm tắt (như tự động nén lịch sử trò chuyện). Nếu không có mô hình riêng nào được cấu hình, hệ thống sẽ quay lại mô hình mặc định và phương thức này trả về chuỗi rỗng.

## Kịch bản sử dụng

### Để người dùng chọn mô hình

```javascript
// ==UserScript==
// @name        Ví dụ bộ chọn mô hình
// @grant       CAT.agent.model
// @grant       CAT.agent.conversation
// ==/UserScript==

const models = await CAT.agent.model.list();
const defaultId = await CAT.agent.model.getDefault();

// Hiển thị danh sách cho người dùng và để họ chọn
const selectedModel = models.find(m => m.id === defaultId) || models[0];

const conv = await CAT.agent.conversation.create({
  model: selectedModel.id
});
```

### Lấy chi tiết cho một mô hình cụ thể

```javascript
const model = await CAT.agent.model.get("my-model-id");
if (model) {
  console.log(`${model.name} (${model.provider}), đầu ra tối đa ${model.maxTokens ?? "chưa thiết lập"} tokens`);
}
```
