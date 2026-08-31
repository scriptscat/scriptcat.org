---
title: API Tác vụ theo lịch trình
---

`@grant CAT.agent.task`

API tác vụ theo lịch trình cho phép script tạo tác vụ dựa trên biểu thức Cron, với hai chế độ thực thi.

## Chế độ thực thi

### Chế độ nội bộ

Được xử lý tự động bởi hệ thống Agent:
- Tự động tạo hoặc tiếp tục cuộc trò khiển khi Cron kích hoạt
- Gửi `prompt` đã cấu hình đến LLM
- Có thể chỉ định mô hình và Skills
- Lịch sử thực thi và sử dụng token được ghi lại tự động

### Chế độ sự kiện

Được xử lý bởi chính script:
- Thông báo sự kiện được gửi đến script khi Cron kích hoạt
- Script lắng nghe sự kiện qua `addListener`
- Logic xử lý hoàn toàn tùy chỉnh

## create — tạo tác vụ

```javascript
const task = await CAT.agent.task.create(options);
```

**Tham số (`AgentTaskCreateOptions`):**

| Tham số | Kiểu | Bắt buộc | Mô tả |
|------|------|------|------|
| `name` | `string` | Có | Tên tác vụ |
| `crontab` | `string` | Có | Biểu thức Cron tiêu chuẩn (5 trường: phút giờ ngày tháng ngày_tuần) |
| `mode` | `"internal" \| "event"` | Có | Chế độ thực thi |
| `enabled` | `boolean` | Không | Có được bật không, mặc định `true` |
| `notify` | `boolean` | Không | Có gửi thông báo trình duyệt khi kích hoạt không |
| `prompt` | `string` | Không | Prompt cho chế độ nội bộ |
| `modelId` | `string` | Không | ID mô hình sử dụng trong chế độ nội bộ |
| `skills` | `string[]` | Không | Skills cần tải trong chế độ nội bộ |
| `maxIterations` | `number` | Không | Số vòng gọi công cụ tối đa cho chế độ nội bộ, mặc định `10` |

**Trả về `AgentTask`:**

| Trường | Kiểu | Mô tả |
|------|------|------|
| `id` | `string` | ID tác vụ |
| `name` | `string` | Tên tác vụ |
| `crontab` | `string` | Biểu thức Cron |
| `mode` | `string` | Chế độ thực thi |
| `enabled` | `boolean` | Có được bật không |
| `notify` | `boolean` | Có gửi thông báo không |
| `nextruntime` | `number` | Thời gian thực thi tiếp theo |
| `lastruntime` | `number` | Thời gian thực thi gần nhất |
| `conversationId` | `string` | ID cuộc trò chuyện liên quan trong chế độ nội bộ (tùy chọn) |
| `lastRunStatus` | `"success" \| "error"` | Trạng thái lần chạy cuối |
| `lastRunError` | `string` | Thông báo lỗi lần chạy cuối |
| `createtime` | `number` | Thời gian tạo |

**Ví dụ biểu thức Cron:**

| Biểu thức | Mô tả |
|--------|------|
| `* * * * *` | Mỗi phút |
| `0 9 * * *` | Mỗi ngày lúc 09:00 |
| `0 */2 * * *` | Mỗi 2 giờ |
| `30 8 * * 1-5` | Ngày làm việc lúc 08:30 |
| `0 0 1 * *` | 00:00 ngày 1 mỗi tháng |

## list — liệt kê tất cả tác vụ

```javascript
const tasks = await CAT.agent.task.list();
```

Trả về tất cả tác vụ được tạo bởi script hiện tại.

## get — lấy chi tiết tác vụ

```javascript
const task = await CAT.agent.task.get(taskId);
```

Trả về `undefined` nếu tác vụ không tồn tại.

## update — cập nhật tác vụ

```javascript
const task = await CAT.agent.task.update(taskId, partial);
```

**Các trường có thể cập nhật:**

```javascript
await CAT.agent.task.update(task.id, {
  name: "Tên mới",
  crontab: "0 10 * * *",
  enabled: false,
  prompt: "Prompt mới",
  notify: true
});
```

`nextruntime` được tự động tính lại sau khi cập nhật.

## remove — xóa tác vụ

```javascript
const success = await CAT.agent.task.remove(taskId);
```

## runNow — chạy ngay lập tức

```javascript
await CAT.agent.task.runNow(taskId);
```

Kích hoạt tác vụ chạy một lần ngay lập tức, không chờ Cron (không chặn, chạy nền).

## addListener — lắng nghe kích hoạt tác vụ

```javascript
const listenerId = await CAT.agent.task.addListener(taskId, callback);
```

Chỉ sử dụng cho tác vụ **chế độ sự kiện**. Callback chạy khi Cron kích hoạt.

**Tham số callback (`AgentTaskTrigger`):**

| Trường | Kiểu | Mô tả |
|------|------|------|
| `taskId` | `string` | ID tác vụ |
| `name` | `string` | Tên tác vụ |
| `crontab` | `string` | Biểu thức Cron |
| `triggeredAt` | `number` | Thời gian kích hoạt |

## removeListener — xóa listener

```javascript
await CAT.agent.task.removeListener(listenerId);
```

## Ví dụ đầy đủ

### Chế độ nội bộ — AI tự động chạy

```javascript
// ==UserScript==
// @name        Tổng hợp tin tức theo lịch trình
// @match       *://*/*
// @grant       CAT.agent.task
// ==/UserScript==

const task = await CAT.agent.task.create({
  name: "Tổng hợp tin tức hàng ngày",
  crontab: "0 9 * * *",       // Mỗi ngày lúc 9 giờ
  mode: "internal",
  prompt: "Vui lòng tìm kiếm tin tức công nghệ hôm nay và lưu bản tóm tắt ngắn vào OPFS",
  skills: ["web-search"],
  maxIterations: 10,
  notify: true
});

console.log("Đã tạo tác vụ, lần chạy tiếp theo:", new Date(task.nextruntime));
```

### Chế độ sự kiện — script tự xử lý

```javascript
// ==UserScript==
// @name        Thu thập dữ liệu theo lịch trình
// @match       *://*/*
// @grant       CAT.agent.task
// @grant       CAT.agent.dom
// ==/UserScript==

const task = await CAT.agent.task.create({
  name: "Thu thập dữ liệu chứng khoán",
  crontab: "*/30 9-15 * * 1-5", // Mỗi 30 phút, 9-15 ngày làm việc
  mode: "event",
  enabled: true,
  notify: false
});

await CAT.agent.task.addListener(task.id, async (trigger) => {
  console.log(`Tác vụ được kích hoạt: ${trigger.name} lúc ${new Date(trigger.triggeredAt)}`);

  // Logic thu thập tùy chỉnh
  await CAT.agent.dom.navigate("https://finance.example.com/stock");
  const content = await CAT.agent.dom.readPage({ selector: ".stock-table" });

  // Xử lý dữ liệu...
  console.log("Hoàn tất thu thập");
});
```
