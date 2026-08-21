---
title: Tham chiếu Công cụ tích hợp sẵn
---

Agent đi kèm với một bộ công cụ tích hợp sẵn mà AI tự động gọi trong các cuộc trò chuyện. Các công cụ này có sẵn theo mặc định trong các cuộc trò chuyện liên tục; nhà phát triển script thường không cần gọi trực tiếp — AI chọn công cụ phù hợp dựa trên ý định người dùng.

Hiểu được các công cụ này có thể làm gì giúp bạn viết prompt hệ thống và công cụ tùy chỉnh tốt hơn.

## Lấy dữ liệu Web

### web_fetch

Lấy nội dung của URL, với hỗ trợ trích xuất HTML sang văn bản và tóm tắt LLM.

| Tham số | Kiểu | Bắt buộc | Mô tả |
|------|------|------|------|
| `url` | `string` | Có | URL mục tiêu (chỉ http/https) |
| `prompt` | `string` | Không | Prompt tóm tắt (khi được cung cấp, LLM được sử dụng để chưng cất nội dung) |
| `max_length` | `number` | Không | Số ký tự nội dung tối đa |

**Chi tiết hành vi:**
- Hết thời gian yêu cầu 30 giây
- Nội dung HTML tự động trích xuất văn bản chính (loại bỏ điều hướng, thanh bên, v.v.)
- Phản hồi JSON được phân tích tự động
- Văn bản thuần được trả về nguyên trạng
- Khi `prompt` được cung cấp, nội dung đã lấy được gửi đến LLM để tóm tắt

**Giá trị trả về:**
```json
{
  "url": "https://example.com",
  "content_type": "text/html",
  "content": "Nội dung chính đã trích xuất...",
  "truncated": false,
  "final_url": "https://example.com/redirected"
}
```

### web_search

Truy vấn công cụ tìm kiếm và trả về kết quả tìm kiếm có cấu trúc.

| Tham số | Kiểu | Bắt buộc | Mô tả |
|------|------|------|------|
| `query` | `string` | Có | Từ khóa tìm kiếm |
| `max_results` | `number` | Không | Số kết quả tối đa (mặc định 5, tối đa 10) |

**Công cụ tìm kiếm được hỗ trợ:**

| Công cụ | Mô tả | Cấu hình yêu cầu |
|------|------|---------|
| DuckDuckGo | Công cụ mặc định | Không |
| Bing | Microsoft Bing Search | Yêu cầu khóa API |
| Baidu | Baidu Search | Không yêu cầu khóa API |
| Google Custom Search | Google Custom Search | Yêu cầu khóa API + ID CSE |

Công cụ tìm kiếm được cấu hình trên trang quản lý → Agent → Cài đặt.

**Giá trị trả về:**
```json
[
  {
    "title": "Tiêu đề kết quả tìm kiếm",
    "url": "https://example.com/result",
    "snippet": "Văn bản tóm tắt kết quả..."
  }
]
```

### get_tab_content

Đọc nội dung trang đã render của một tab chỉ định, chuyển đổi thành Markdown có cấu trúc được chú thích bằng selector CSS.

| Tham số | Kiểu | Bắt buộc | Mô tả |
|------|------|------|------|
| `tab_id` | `number` | Có | ID tab |
| `selector` | `string` | Không | Selector CSS; chỉ trích xuất phần khớp |
| `prompt` | `string` | Không | Prompt tóm tắt |
| `max_length` | `number` | Không | Số ký tự nội dung tối đa |

Khác với `web_fetch`: `get_tab_content` đọc trang **như đã được render bởi trình duyệt** (bao gồm nội dung JS động), trong khi `web_fetch` thực hiện yêu cầu HTTP mới.

**Giá trị trả về:**
```json
{
  "tab_id": 123,
  "url": "https://example.com",
  "title": "Tiêu đề trang",
  "content": "Nội dung có cấu trúc...",
  "truncated": false,
  "used_selector": "main"
}
```

## Quản lý Tab

### list_tabs

Truy vấn các tab đang mở, hỗ trợ nhiều điều kiện lọc.

| Tham số | Kiểu | Bắt buộc | Mô tả |
|------|------|------|------|
| `url_pattern` | `string` | Không | Khớp regex URL |
| `title_pattern` | `string` | Không | Khớp regex tiêu đề |
| `active` | `boolean` | Không | Chỉ trả về tab đang hoạt động |
| `window_id` | `number` | Không | Cửa sổ được chỉ định |
| `audible` | `boolean` | Không | Chỉ trả về tab đang phát âm thanh |

### open_tab

Mở tab mới hoặc điều hướng tab hiện có.

| Tham số | Kiểu | Bắt buộc | Mô tả |
|------|------|------|------|
| `url` | `string` | Có | URL mục tiêu |
| `tab_id` | `number` | Không | ID tab hiện có (nếu được cung cấp, tab đó được điều hướng; nếu không mở tab mới) |
| `active` | `boolean` | Không | Có kích hoạt không (mặc định `true`) |
| `window_id` | `number` | Không | Cửa sổ được chỉ định |
| `wait_until_loaded` | `boolean` | Không | Có chờ trang tải xong không (mặc định `true`) |

### close_tab

Đóng tab.

| Tham số | Kiểu | Bắt buộc | Mô tả |
|------|------|------|------|
| `tab_id` | `number` | Có | ID tab |

### activate_tab

Kích hoạt tab và focusing cửa sổ chứa nó.

| Tham số | Kiểu | Bắt buộc | Mô tả |
|------|------|------|------|
| `tab_id` | `number` | Có | ID tab |

## Hệ thống tệp (OPFS)

### opfs_write

Ghi tệp vào không gian làm việc.

| Tham số | Kiểu | Bắt buộc | Mô tả |
|------|------|------|------|
| `path` | `string` | Có | Đường dẫn tệp |
| `content` | `string` | Có | Nội dung tệp (hỗ trợ nhị phân data URL) |

### opfs_read

Đọc tệp từ không gian làm việc. Theo mặc định, loại tệp được tự động phát hiện: tệp văn bản trả về nội dung, tệp nhị phân trả về URL blob.

| Tham số | Kiểu | Bắt buộc | Mô tả |
|------|------|------|------|
| `path` | `string` | Có | Đường dẫn tệp |
| `mode` | `string` | Không | `"text"` / `"blob"` / `"auto"` (mặc định) — buộc chế độ trả về cụ thể |
| `offset` | `number` | Không | Số dòng bắt đầu (index từ 1), chỉ chế độ văn bản |
| `limit` | `number` | Không | Số dòng cần đọc, chỉ chế độ văn bản (phân trang yêu cầu khi văn bản vượt quá 200 dòng) |

### opfs_list

Liệt kê nội dung thư mục.

| Tham số | Kiểu | Bắt buộc | Mô tả |
|------|------|------|------|
| `path` | `string` | Không | Đường dẫn thư mục (mặc định là thư mục gốc) |

### opfs_delete

Xóa tệp hoặc thư mục.

| Tham số | Kiểu | Bắt buộc | Mô tả |
|------|------|------|------|
| `path` | `string` | Có | Đường dẫn tệp/thư mục |

## Tương tác người dùng

### ask_user

Đặt câu hỏi cho người dùng, hỗ trợ nhập tự do hoặc lựa chọn có cấu trúc.

| Tham số | Kiểu | Bắt buộc | Mô tả |
|------|------|------|------|
| `question` | `string` | Có | Câu hỏi |
| `options` | `string[]` | Không | Danh sách tùy chọn (khi được cung cấp, trở thành câu hỏi trắc nghiệm) |
| `multiple` | `boolean` | Không | Có cho phép chọn nhiều không (mặc định `false`) |

**Hết thời gian:** trả về `{ answer: null, reason: "timeout" }` sau 5 phút không có phản hồi.

**Giá trị trả về:**
```json
{ "answer": "Văn bản câu trả lời của người dùng" }
```

### execute_script

Thực thi mã JavaScript trong trang hoặc sandbox.

| Tham số | Kiểu | Bắt buộc | Mô tả |
|------|------|------|------|
| `code` | `string` | Có | Mã JavaScript |
| `target` | `string` | Có | `"page"` hoặc `"sandbox"` |
| `tab_id` | `number` | Không | Tab nào để nhắm đến khi `target` là `page` (mặc định tab hoạt động hiện tại); bỏ qua cho sandbox |

**So sánh môi trường thực thi:**

| Môi trường | DOM | JS Trang | URL blob Extension | Phù hợp nhất cho |
|------|-----|---------|---------------|---------|
| `target: "page"` (luôn thế giới MAIN) | có | có | không | Đọc/thao tác DOM, gọi hàm trang, đọc biến trang |
| `target: "sandbox"` | không | không | không | Tính toán thuần túy |

> Chế độ `page` luôn chạy trong thế giới MAIN của trang, chia sẻ `window` với trang — vì vậy không thể truy cập URL blob của extension (ví dụ địa chỉ mà `opfs_read` trả về ở chế độ blob). Sử dụng SkillScript khi bạn cần làm việc với URL blob.

## Sub-agent

### agent

Tạo sub-agent độc lập để xử lý một tác vụ con phức tạp.

| Tham số | Kiểu | Bắt buộc | Mô tả |
|------|------|------|------|
| `prompt` | `string` | Có | Mô tả tác vụ con |
| `description` | `string` | Không | Nhãn ngắn (vài từ, hiển thị trên UI) |
| `type` | `string` | Không | Loại sub-agent (xem bên dưới), mặc định `"general"` |
| `tab_id` | `number` | Không | ID tab truyền cho sub-agent; sub-agent sẽ thao tác trên tab đó |

**Các loại sub-agent:**

| loại | Mô tả | Công cụ khả dụng |
|------|------|---------|
| `researcher` | Truy xuất thông tin (chỉ đọc) | web_search, web_fetch, đọc nội dung trang |
| `page_operator` | Tự động hóa trình duyệt | Quản lý tab, thao tác DOM, tương tác trang |
| `general` | Đa năng (mặc định) | Tất cả công cụ |

**Đặc điểm:**
- Sub-agent có ngữ cảnh cuộc trò chuyện độc lập riêng
- **Không thể** sử dụng `ask_user` hoặc `agent` (để ngăn đệ quy)
- Các sự kiện sub-agent được truyền đến cuộc trò chuyện cha qua `sub_agent_event`

## Quản lý tác vụ

Nhóm công cụ này quản lý danh sách tác vụ tạm thời trong cuộc trò chuyện (trong bộ nhớ, không lưu持久).

### create_task

| Tham số | Kiểu | Bắt buộc | Mô tả |
|------|------|------|------|
| `subject` | `string` | Có | Tiêu đề tác vụ |
| `description` | `string` | Không | Mô tả chi tiết |

### update_task

| Tham số | Kiểu | Bắt buộc | Mô tả |
|------|------|------|------|
| `task_id` | `string` | Có | ID tác vụ |
| `status` | `string` | Không | `"pending"` / `"in_progress"` / `"completed"` |
| `subject` | `string` | Không | Tiêu đề mới |
| `description` | `string` | Không | Mô tả mới |

### list_tasks

Không tham số; trả về danh sách ngắn gọn tất cả tác vụ.

> Các công cụ quản lý tác vụ chủ yếu để AI theo dõi tiến trình của riêng mình khi xử lý các tác vụ phức tạp nhiều bước; dữ liệu tác vụ không được lưu持久.
