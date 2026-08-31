---
title: Chế độ đăng ký
---

Tệp phải bắt đầu bằng `UserSubscribe` thay vì `UserScript`. Liên kết cài đặt phải sử dụng phần mở rộng `user.sub.js` và phải là liên kết `https`.

Script đăng ký chỉ hiển thị hộp thoại cài đặt để người dùng xác nhận đăng ký tại thời điểm cài đặt; các cập nhật sau đó diễn ra im lặng, và hộp thoại cập nhật chỉ hiển thị lại nếu quyền `connect` thay đổi.

Một script đăng ký duy nhất có thể mô tả các liên kết cài đặt cho nhiều script. Script được cài đặt thông qua chế độ đăng ký được cài đặt im lặng, không có hộp thoại xác nhận, và script đã cài đặt vẫn xuất hiện trong danh sách script — nhưng quyền `connect` của chúng sử dụng `connect` được khai báo trong đăng ký chứ không phải quyền `connect` của script đó.

```js
// ==UserSubscribe==
// @name         xxx
// @description  Đăng ký chuỗi script xxx
// @version      0.1.0
// @author       You
// @connect      www.baidu.com
// @scriptUrl    https://script.tampermonkey.net.cn/48.user.js
// @scriptUrl    https://script.tampermonkey.net.cn/49.user.js
// ==/UserSubscribe==
```

## Cập nhật đăng ký và cập nhật script

Theo `khoảng thời gian cập nhật` được người dùng cấu hình, ScriptCat kiểm tra định kỳ liên kết đăng ký để tìm bản cập nhật; phải cấu hình `version` để chức năng này hoạt động.

Mỗi lần cập nhật hoặc thay đổi đăng ký sẽ so sánh các liên kết script với script hiện đã cài đặt: script không còn trong đăng ký mới sẽ bị xóa, và script mới thêm vào sẽ được cài đặt im lặng. Cập nhật script tuân theo `version` của script đó, sử dụng cùng logic cập nhật như script cài đặt thông thường.

## Cài đặt và cập nhật im lặng

Script đã đăng ký được cài đặt và cập nhật im lặng — thêm, xóa hoặc cập nhật script từ đăng ký chỉ hiển thị thông báo, không yêu cầu xác nhận của người dùng lại. Vì cơ chế cập nhật im lặng này, vui lòng chỉ đăng ký từ các nguồn bạn tin tưởng.

## metadata

Ý nghĩa của một số trường metadata thay đổi trong script đăng ký.

### name

Tên đăng ký (cũng có thể chỉnh sửa trực tiếp trong danh sách đăng ký)

### description

Mô tả đăng ký, mô tả mục đích của đăng ký

### version

Phiên bản đăng ký. Nếu bỏ qua, cập nhật sẽ được kích hoạt dựa trên việc nội dung script đăng ký có thay đổi hay không.

### connect

Yêu cầu quyền truy cập vào một trang web; xem `GM_cookie` và `GM_xmlhttpRequest`. Đối với script được cài đặt thông qua chế độ đăng ký, `connect` sẽ bị ghi đè bởi `connect` của đăng ký.

### scriptUrl

Các liên kết cài đặt script cần thiết bởi đăng ký
