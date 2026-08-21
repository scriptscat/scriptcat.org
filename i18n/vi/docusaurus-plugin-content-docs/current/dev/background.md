---
title: Script Nền
---

Script nền phù hợp với các script cần tiếp tục chạy liên tục. Script nền là loại script đặc thù của ScriptCat; chúng chạy trong sandbox và không thể truy cập DOM. Chúng có thể được phát triển sử dụng cùng GM API như Tampermonkey, và các ghi chú tương thích được chỉ ra trong tài liệu.

## Script Nền (`@background`) {#background-script-background}

Script nền được khai báo bằng thuộc tính `@background`. Nó cho phép script tiếp tục chạy nền sau khi script được kích hoạt hoặc trình duyệt khởi động.

## Script Được Lên Lịch (`@crontab`) {#scheduled-script-crontab}

> Script được lên lịch là một loại script nền phù hợp với các tác vụ cần **chạy lặp đi lặp lại theo chu kỳ thời gian**.

Script được lên lịch được khai báo bằng thuộc tính `@crontab`. Hỗ trợ lập lịch ở cấp độ phút và giây, và cung cấp cú pháp mở rộng của ScriptCat `once` / `once(...)` để tránh chạy nhiều hơn một lần trong cùng chu kỳ thời gian.

⚠️ Lưu ý:

* Trong một script, **chỉ `@crontab` đầu tiên có hiệu lực**
* Nên đảm bảo **thời gian chạy đơn lẻ + thời gian thử lại** không vượt quá khoảng cách cron, nếu không các lần chạy có thể chồng chéo

## Lưu ý về Biểu thức Cron

Triển khai cron của ScriptCat dựa trên [**node-cron**](https://github.com/kelektiv/node-cron/), với một phần mở rộng nhỏ trên cú pháp cron tiêu chuẩn.

### Định dạng Biểu thức

#### Định dạng 5 trường tiêu chuẩn (Khuyến nghị)

```text
phút giờ ngày tháng ngày_trong_tuần
```

#### Định dạng 6 trường mở rộng (Không khuyến nghị)

```text
giây phút giờ ngày tháng ngày_trong_tuần
```

> ⚠️ Định dạng 6 trường không được khuyến nghị
> Môi trường trình duyệt không thể đảm bảo độ chính xác đến giây và tăng tải hiệu suất.

### Cú pháp Khả dụng cho Mỗi Trường

| Cú pháp | Ý nghĩa | Ví dụ |
|---|---|---|
| `*` | Bất kỳ giá trị nào | `*` (mỗi phút/giờ) |
| number | Giá trị cụ thể | `5` (phút thứ 5) |
| `a,b,c` | Nhiều giá trị rời rạc | `1,15,30` |
| `a-b` | Phạm vi liên tục | `10-23` |
| `*/n` | Mỗi n đơn vị | `*/5` |
| `a-b/n` | Phạm vi với bước | `10-50/10` |

#### Quy tắc Ngày trong Tuần

* `1–6`: Thứ Hai đến Thứ Bảy
* `0` hoặc `7`: Chủ nhật

## Cú pháp Mở rộng `once`

### `once` có nghĩa gì

Sử dụng `once` trong biểu thức cron có nghĩa:

> **Trong chu kỳ thời gian hiện tại, chỉ cho phép một lần thực thi thành công**

Ngay cả các điểm thời gian sau đó trong cùng chu kỳ vẫn khớp với quy tắc cron, script sẽ không chạy lại.

### `once` so với `once(...)`

| Cú pháp | Giá trị cron cơ bản | Mô tả |
|---|---|---|
| `once` | `*` (bất kỳ giá trị) | Chạy khi khớp lần đầu trong chu kỳ, không có thời gian cụ thể |
| `once(expr)` | `expr` | Chỉ chạy tại các thời điểm khớp với `expr` trong chu kỳ, và chỉ một lần |

### Vị trí của `once` = Chu kỳ Thời gian bị Hạn chế

Bất kể `once` / `once(...)` được đặt ở đâu, nó có nghĩa "chạy chỉ một lần trong độ phân giải thời gian đó".

| Vị trí của `once` | Hành vi |
|---|---|
| Trường phút | Chỉ chạy một lần mỗi phút |
| Trường giờ | Chỉ chạy một lần mỗi giờ |
| Trường ngày | Chỉ chạy một lần mỗi ngày |
| Trường tháng | Chỉ chạy một lần mỗi tháng |
| Trường ngày tuần | Chỉ chạy một lần mỗi tuần |

## Ví dụ `@crontab`

### Phổ biến

```js
//@crontab * * * * *        // chạy một lần mỗi phút
//@crontab * * * * * *      // chạy một lần mỗi giây (không khuyến nghị)
//@crontab 0 */6 * * *      // mỗi 6 giờ tại phút 0
//@crontab 15 */6 * * *     // mỗi 6 giờ tại phút 15
//@crontab * once * * *     // tối đa một lần mỗi giờ
//@crontab * * once * *     // tối đa một lần mỗi ngày
//@crontab * 10 once * *    // chỉ một lần trong giờ 10:00 mỗi ngày
//@crontab * */4 once * *   // tối đa một lần mỗi 4 giờ mỗi ngày
```

### Nâng cao

```js
//@crontab * 1,3,5 once * *       // một lần lúc 1:00, 3:00 hoặc 5:00 mỗi ngày
//@crontab * 10-23 once * *       // một lần giữa 10:00 và 23:59 mỗi ngày
//@crontab * once 13 * *          // một lần mỗi giờ vào ngày 13 mỗi tháng
//@crontab * once(9-17) * * *     // một lần mỗi giờ giữa 9:00 và 17:00 mỗi ngày
//@crontab 0,30 once * * *        // phút 0 hoặc 30 được khớp trước mỗi giờ; không lặp lại giờ đó
//@crontab * 9-18 once * *        // chỉ một lần giữa 9:00 và 18:00 mỗi ngày
```

## Khuyến nghị Sử dụng

### Phù hợp cho `once`

* Các tác vụ chỉ cần chạy **một lần mỗi ngày/giờ**
* Script kiểm tra trạng thái, đồng bộ và báo cáo

### Không khuyến nghị cho `once`

* Các tác vụ phải chạy tại thời điểm chính xác
* Script có thời gian chạy có thể vượt quá đáng kể khoảng cách cron

## Kiểm tra Biểu thức Cron

Khi kiểm tra biểu thức cron, vui lòng **thay thế tạm thời `once` / `once(...)` bằng giá trị cơ bản**:

* `once` → `*`
* `once(expr)` → `expr`

Công cụ khuyến nghị:

* [crontab.guru](https://crontab.guru/)
* [tool.lu cron calculator](https://tool.lu/crontab/)

## Nhật ký

Trên trang danh sách script, di chuột qua `cột trạng thái chạy` hiển thị tooltip với trạng thái chạy của script;
nhấp vào hiển thị nội dung nhật ký in qua `GM_log`.

![](@site/docs/dev/background.assets/image-20210621214143661.png)

![](@site/docs/dev/background.assets/image-20210621214124685.png)

## Gỡ lỗi Script

Script nền có thể được gỡ lỗi trực tiếp từ trang chỉnh sửa script, nhưng có những hạn chế sau:

* `value` không đồng bộ đúng
* Menu `registerMenu` không được kích hoạt đúng

![](@site/docs/dev/background.assets/image-20210903141601057.png)

Để gỡ lỗi môi trường chạy thực, kích hoạt **Chế độ Phát triển** trong càiặt tiện ích mở rộng, sau đó mở trang `background.html` của tiện ích để gỡ lỗi.

Lỗi phát sinh trong quá trình chạy cũng có thể được xem trong nhật ký chạy.

![image-20210903144155450](@site/docs/dev/background.assets/image-20210903144155450.png)

## Promise

Cấu trúc sau được khuyến nghị mạnh mẽ, vì nó cũng cho phép trình quản lý script theo dõi việc thực thi.
Nếu script thực hiện bất kỳ thao tác không đồng bộ nào, **nó phải trả về `Promise`**.

```ts
// ==UserScript==
// @name         Script Nền
// @namespace    wyz
// @version      1.0.0
// @author       wyz
// @background
// ==/UserScript==
return new Promise((resolve, reject) => {
  if (Math.round((Math.random() * 10) % 2)) {
    resolve("ok");
  } else {
    reject("error");
  }
});
```

```js
// ==UserScript==
// @name         Script được lên lịch chạy một lần mỗi ngày
// @namespace    wyz
// @version      1.0.0
// @author       wyz
// @crontab      * * once * *
// ==/UserScript==
return new Promise((resolve, reject) => {
  if (Math.round((Math.random() * 10) % 2)) {
    resolve("ok");
  } else {
    reject("error");
  }
});
```

```js
// ==UserScript==
// @name         Gọi một API
// @namespace    wyz
// @version      1.0.0
// @author       wyz
// @crontab      * * once * *
// ==/UserScript==
return new Promise((resolve, reject) => {
  GM_xmlhttpRequest({
    url: "https://bbs.tampermonkey.net.cn/",
    onload() {
      resolve("ok");
    },
    onerror() {
      reject("error");
    },
  });
});
```

Hãy đảm bảo gọi `resolve` / `reject` chỉ sau khi logic của script thực sự hoàn thành.
Sau khi được gọi, trình quản lý coi việc thực thi script là hoàn tất, và bất kỳ thao tác GM nào tiếp theo sẽ không còn hiệu lực.

## Thử lại Lỗi

Script nền của ScriptCat hỗ trợ thử lại lỗi.
Khi script thất bại, nó có thể `reject` với `CATRetryError` để kích hoạt thử lại.

* Khoảng cách thử lại tối thiểu: 5 giây
* Tránh xung đột với thời gian chạy của chính script, nếu không việc chạy trùng lặp có thể xảy ra

```js
// ==UserScript==
// @name         Ví dụ thử lại
// @namespace    https://bbs.tampermonkey.net.cn/
// @version      0.1.0
// @description  cố gắng chinh phục thế giới!
// @author       You
// @crontab      * * once * *
// @grant        GM_notification
// ==/UserScript==

return new Promise((resolve, reject) => {
  GM_notification({
    title: "thử lại",
    text: "Thử lại sau 10 giây",
  });
  reject(new CATRetryError("xxx error", 10));
});
```
