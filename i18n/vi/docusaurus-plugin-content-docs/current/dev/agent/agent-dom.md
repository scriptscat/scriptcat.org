---
title: API Thao tác DOM
---

`@grant CAT.agent.dom`

API thao tác DOM cung cấp tự động hóa trình duyệt hoàn chỉnh: điều hướng, đọc nội dung, chụp ảnh màn hình, tương tác biểu mẫu và giám sát DOM.

## Quản lý tab

### listTabs — liệt kê tab

```javascript
const tabs = await CAT.agent.dom.listTabs();
```

Trả về thông tin về mỗi tab đang mở.

**Trả về `TabInfo[]`:**

| Trường | Kiểu | Mô tả |
|------|------|------|
| `tabId` | `number` | ID tab |
| `url` | `string` | URL hiện tại |
| `title` | `string` | Tiêu đề trang |
| `active` | `boolean` | Có phải tab hoạt động hiện tại |
| `windowId` | `number` | ID cửa sổ chứa nó |
| `discarded` | `boolean` | Có bị loại bỏ (đình chỉ) |

## Điều hướng

### navigate — điều hướng trang

```javascript
const result = await CAT.agent.dom.navigate(url, options?);
```

**Tham số:**

| Tham số | Kiểu | Mặc định | Mô tả |
|------|------|--------|------|
| `url` | `string` | — | URL mục tiêu (bắt buộc) |
| `options.tabId` | `number` | tab hoạt động hiện tại | Tab nào sử dụng |
| `options.waitUntil` | `boolean` | `true` | Có chờ trang tải xong |
| `options.timeout` | `number` | `30000` | Hết thời gian chờ (milisecond) |

**Trả về `NavigateResult`:**

```typescript
{ tabId: number; url: string; title: string }
```

## Đọc nội dung

### readPage — đọc nội dung trang

```javascript
const page = await CAT.agent.dom.readPage(options?);
```

Chuyển đổi DOM trang thành văn bản có cấu trúc, tự động loại bỏ các phần tử không liên quan như `<script>`, `<style>`, `<noscript>`, `<svg>` và `<link[rel=stylesheet]>`.

**Tham số:**

| Tham số | Kiểu | Mặc định | Mô tả |
|------|------|--------|------|
| `options.tabId` | `number` | tab hoạt động hiện tại | Tab nào sử dụng |
| `options.selector` | `string` | — | CSS selector; chỉ trả về nội dung phần tử khớp |
| `options.maxLength` | `number` | — | Số ký tự tối đa; bị cắt sau đó |
| `options.removeTags` | `string[]` | — | Tên tag bổ sung cần xóa |

**Trả về `PageContent`:**

| Trường | Kiểu | Mô tả |
|------|------|------|
| `title` | `string` | Tiêu đề trang |
| `url` | `string` | URL trang |
| `html` | `string` | Nội dung văn bản trang đã xử lý |
| `truncated` | `boolean` | Nội dung có bị cắt không |
| `totalLength` | `number` | Độ dài tổng của nội dung gốc |

### screenshot — chụp ảnh màn hình

```javascript
const shot = await CAT.agent.dom.screenshot(options?);
```

**Tham số:**

| Tham số | Kiểu | Mặc định | Mô tả |
|------|------|--------|------|
| `options.tabId` | `number` | tab hoạt động hiện tại | Tab nào sử dụng |
| `options.quality` | `number` | `80` | Chất lượng JPEG (0-100) |
| `options.fullPage` | `boolean` | `false` | Chụp toàn bộ trang |
| `options.selector` | `string` | — | CSS selector; chỉ chụp vùng phần tử khớp |
| `options.saveTo` | `string` | — | Đường dẫn lưu trong không gian làm việc OPFS |

**Trả về `ScreenshotResult`:**

| Trường | Kiểu | Mô tả |
|------|------|------|
| `dataUrl` | `string` | URL dữ liệu base64 |
| `path` | `string` | Đường dẫn lưu OPFS (khi dùng `saveTo`) |
| `size` | `number` | Kích thước tệp (khi dùng `saveTo`) |

```javascript
// Lưu ảnh chụp màn hình vào OPFS
const shot = await CAT.agent.dom.screenshot({
  saveTo: "screenshots/page.png",
  quality: 90
});
console.log(`Đã lưu tại ${shot.path}, kích thước ${shot.size} byte`);
```

## Tương tác trang

### click — nhấp vào phần tử

```javascript
const result = await CAT.agent.dom.click(selector, options?);
```

**Tham số:**

| Tham số | Kiểu | Mặc định | Mô tả |
|------|------|--------|------|
| `selector` | `string` | — | CSS selector (bắt buộc) |
| `options.tabId` | `number` | tab hoạt động hiện tại | Tab nào sử dụng |
| `options.trusted` | `boolean` | `false` | Dùng CDP gửi sự kiện chuột thực |

**Trả về `ActionResult`:**

| Trường | Kiểu | Mô tả |
|------|------|------|
| `success` | `boolean` | Có thành công |
| `navigated` | `boolean` | Nhấp có kích hoạt điều hướng trang |
| `url` | `string` | URL mới sau điều hướng |
| `newTab` | `boolean` | Có mở tab mới |

**`trusted` vs. nhấp thông thường:**

- `trusted: false` (mặc định) — mô phỏng `element.click()` qua JS.injected; nhanh, nhưng một số trang có thể phát hiện là sự kiện không chính thức
- `trusted: true` — gửi sự kiện chuột thực qua Chrome DevTools Protocol, không thể phân biệt với tương tác thực của người dùng, nhưng cần quyền debugger

### fill — điền trường biểu mẫu

```javascript
const result = await CAT.agent.dom.fill(selector, value, options?);
```

**Tham số:**

| Tham số | Kiểu | Mô tả |
|------|------|------|
| `selector` | `string` | CSS selector (bắt buộc) |
| `value` | `string` | Giá trị cần điền (bắt buộc) |
| `options.tabId` | `number` | Tab nào sử dụng |
| `options.trusted` | `boolean` | Dùng CDP mô phỏng nhập từ bàn phím |

**Hành vi:**
- Chế độ thường: đặt `element.value` và gửi sự kiện `input`
- Chế độ trusted: CDP focus phần tử → gõ từng ký tự

### scroll — cuộn trang

```javascript
const result = await CAT.agent.dom.scroll(direction, options?);
```

**Tham số:**

| Tham số | Kiểu | Mô tả |
|------|------|------|
| `direction` | `"up" \| "down" \| "top" \| "bottom"` | Hướng cuộn (bắt buộc) |
| `options.tabId` | `number` | Tab nào sử dụng |
| `options.selector` | `string` | Cuộn container cụ thể thay vì toàn bộ trang |

**Trả về `ScrollResult`:**

| Trường | Kiểu | Mô tả |
|------|------|------|
| `scrollTop` | `number` | Vị trí cuộn sau khi cuộn |
| `scrollHeight` | `number` | Tổng chiều cao nội dung |
| `clientHeight` | `number` | Chiều cao viewport |
| `atBottom` | `boolean` | Có đang ở cuối trang |

### waitFor — chờ phần tử

```javascript
const result = await CAT.agent.dom.waitFor(selector, options?);
```

Kiểm tra định kỳ phần tử được chỉ định xuất hiện trên trang (kiểm tra mỗi 500ms).

**Tham số:**

| Tham số | Kiểu | Mặc định | Mô tả |
|------|------|--------|------|
| `selector` | `string` | — | CSS selector (bắt buộc) |
| `options.tabId` | `number` | tab hoạt động hiện tại | Tab nào sử dụng |
| `options.timeout` | `number` | `10000` | Hết thời gian chờ (milisecond) |

**Trả về `WaitForResult`:**

| Trường | Kiểu | Mô tả |
|------|------|------|
| `found` | `boolean` | Có tìm thấy phần tử |
| `element` | `object` | Thông tin phần tử (chỉ khi `found=true`) |
| `element.selector` | `string` | Selector đã khớp |
| `element.tag` | `string` | Tên tag |
| `element.text` | `string` | Nội dung văn bản |
| `element.role` | `string` | Vai trò ARIA |
| `element.type` | `string` | Loại input |
| `element.visible` | `boolean` | Có hiển thị |

## Thực thi script

### executeScript — chạy JavaScript

```javascript
const result = await CAT.agent.dom.executeScript(code, options?);
```

**Tham số:**

| Tham số | Kiểu | Mặc định | Mô tả |
|------|------|--------|------|
| `code` | `string` | — | Mã JavaScript (bắt buộc) |
| `options.tabId` | `number` | tab hoạt động hiện tại | Tab nào sử dụng |

> Mã luôn chạy trong **thế giới MAIN** của trang (chia sẻ cùng đối tượng `window` với JS của trang), nên có thể gọi hàm của trang và đọc biến trực tiếp — nhưng vì lý do tương tự **không thể truy cập URL blob của extension** (ví dụ URL `blob:` tạo qua `URL.createObjectURL()` từ `Blob` trả về bởi `CAT.agent.opfs.read` ở chế độ `"blob"`), vì URL blob bị giới hạn trong gốc của extension. Nếu cần làm việc với URL blob trong ngữ cảnh cô lập, hãy dùng SkillScript (xem [Phát triển Skill](../agent-skill-dev)).

```javascript
// Gọi hàm JS của trang / đọc biến trang
const data = await CAT.agent.dom.executeScript(
  "return window.__APP_STATE__"
);

// Đọc nội dung DOM
const title = await CAT.agent.dom.executeScript(
  "return document.querySelector('h1')?.textContent"
);
```

> Mã được bọc trong `new Function()` để thực thi và hỗ trợ giá trị `return`. Hết thời gian chờ là 30 giây.

## Giám sát DOM

Sử dụng Chrome DevTools Protocol để giám sát thay đổi DOM và sự kiện hộp thoại trên trang.

### startMonitor — bắt đầu giám sát

```javascript
await CAT.agent.dom.startMonitor(tabId);
```

Bắt đầu giám sát thay đổi DOM và hộp thoại (alert/confirm/prompt) trên tab được chỉ định.

### stopMonitor — dừng giám sát

```javascript
const result = await CAT.agent.dom.stopMonitor(tabId);
```

Dừng giám sát và trả về các thay đổi đã thu thập.

**Trả về `MonitorResult`:**

| Trường | Kiểu | Mô tả |
|------|------|------|
| `dialogs` | `Array<{ type, message }>` | Danh sách hộp thoại |
| `addedNodes` | `Array<{ tag, id?, class?, role?, text }>` | Tổng quan các nút DOM mới thêm |

### peekMonitor — kiểm tra trạng thái giám sát

```javascript
const status = await CAT.agent.dom.peekMonitor(tabId);
```

Kiểm tra trạng thái giám sát hiện tại không phá hủy.

**Trả về `MonitorStatus`:**

| Trường | Kiểu | Mô tả |
|------|------|------|
| `hasChanges` | `boolean` | Có thay đổi |
| `dialogCount` | `number` | Số hộp thoại |
| `nodeCount` | `number` | Số nút mới thêm |

## Ví dụ đầy đủ

```javascript
// ==UserScript==
// @name        Tự động điền biểu mẫu
// @match       https://example.com/form
// @grant       CAT.agent.dom
// ==/UserScript==

// Chờ biểu mẫu tải
await CAT.agent.dom.waitFor("form#signup", { timeout: 5000 });

// Điền biểu mẫu
await CAT.agent.dom.fill("input[name=username]", "test_user");
await CAT.agent.dom.fill("input[name=email]", "test@example.com");

// Đánh dấu ô đồng ý
await CAT.agent.dom.click("input[type=checkbox]#agree");

// Chụp ảnh biểu mẫu đã điền
await CAT.agent.dom.screenshot({
  selector: "form#signup",
  saveTo: "screenshots/form-filled.png"
});

// Nhấp gửi
const result = await CAT.agent.dom.click("button[type=submit]", { trusted: true });
if (result.navigated) {
  console.log("Gửi biểu mẫu thành công, điều hướng đến:", result.url);
}
```
