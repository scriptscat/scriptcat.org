---
title: Khối Siêu dữ liệu
---

Nội dung bên trong `==UserScript==` mô tả các quyền mà script cần, thông tin về script, v.v. Nó nằm ở đầu script.

```js
// ==UserScript==
// @name         Script Người dùng Mới
// @namespace    https://bbs.tampermonkey.net.cn/
// @version      0.1.0
// @description  cố gắng chinh phục thế giới!
// @author       You
// @crontab      * * once * *
// ==/UserScript==
```

## Các Giá trị Chính

### name

Tên script

### namespace

Không gian tên của script. `name + namespace` xác định tính duy nhất của script.

### version

Phiên bản của script. Khuyến nghị tuân theo [phiên bản hóa ngữ nghĩa](https://semver.org/), để khi phát hiện thay đổi phiên bản, người dùng được yêu cầu cập nhật.

### description

Mô tả chi tiết về script

### author

Tác giả script

### run-at

Khi nào script được chạy

| Giá trị | Thời điểm chạy | Hỗ trợ từ |
|---|---|---|
| document-start | Chèn script vào trang ngay khi URL khớp ở frontend | v0.3.0 |
| document-end | Chèn script sau khi DOM đã tải xong; script và hình ảnh của trang có thể vẫn đang tải | v0.3.0 |
| document-idle | Chèn script sau khi tất cả nội dung đã tải xong | v0.3.0 |
| document-body | Script chỉ được chèn khi trang có phần tử `body` | v0.6.2 |
| document-menu | Hiển thị menu khi nhấp chuột phải; chạy script sử dụng tên script làm tên menu | v0.3.4-v0.9.4 (🔥 đã xóa) |

Để biết biểu tượng menu, bạn có thể tham khảo [Ký hiệu Unicode](https://unicode-table.com/en/) và [emoji](https://www.emojiall.com/en-US/).

### run-in

Xác định môi trường mà script được chèn vào: `@run-in normal-tabs` cho tab thường, `@run-in incognito-tabs` cho tab ẩn danh.

### early-start (v1.1.0+)

Khi `run-at` là `document-start`, script chạy càng sớm càng tốt, nhưng không thể đảm bảo nó tải nhanh hơn trang.

Sau khi định nghĩa `@run-at document-start`, bạn có thể thêm `@early-start` để script tải nhanh hơn trang: [ví dụ](https://github.com/scriptscat/scriptcat/blob/main/example/early-start.js)

### inject-into

:::tip

Trong môi trường content-script (`content`), `unsafeWindow` chỉ trỏ đến `window` hiện tại của môi trường đó và không thể truy cập `window` của trang.

ScriptCat không hỗ trợ kiểm tra tự động các hạn chế CSP để quyết định chèn dưới dạng `content` hay `page` (tức là `@inject-into auto` của Tampermonkey).

:::

Xác định nơi script được chèn vào, hỗ trợ `page` và `content`, mặc định là `page`.

- `page`: script được chèn vào môi trường trang và có thể sử dụng `unsafeWindow` để truy cập `window` và `DOM` của trang
- `content`: script được chèn vào môi trường content-script, không thể truy cập trực tiếp đối tượng `window` của trang, nhưng có thể truy cập `DOM` của trang và không bị ràng buộc bởi `CSP`

### storageName 🧪

Không gian lưu trữ cho `Value`; dữ liệu dưới cùng `storageName` có thể được chia sẻ và giao tiếp giữa các script. Đặc thù của ScriptCat.

### background

Đánh dấu script này là script nền, cần chạy trong môi trường nền. Xem [Script Nền](./background.md#background-script-background) để biết chi tiết.

### crontab

Đánh dấu script là script được lên lịch, yêu cầu giá trị biểu thức cron. Chỉ có thể tồn tại một biểu thức cron và nó chạy theo lịch trình đó trong môi trường nền. Xem [Script Được Lên Lịch](./background.md#scheduled-script-crontab) để biết chi tiết.

### match

Chỉ các URL khớp với `match` mới chạy script, tuân theo [Mẫu Khớp](https://developer.chrome.com/docs/extensions/v3/match_patterns/). Trong `match`, `*` là ký tự đại diện, `tld` khớp với tên miền cấp cao nhất, và tên miền bắt đầu bằng `*.` cũng sẽ khớp với `xxx.com`:

| Giá trị | Ví dụ đúng | Ví dụ sai |
|---|---|---|
| `http://scriptcat.org/doc/match` | `http://scriptcat.org/doc/match` | `http://scriptcat.org/doc/runAt` |
| `*://*/param?*` | `https://scriptcat.org/param` \| `http://scriptcat.org/param?search=tampermonkey` | `https://scriptcat.org/test/param` |
| `http*://scriptcat.org/*` | `https://scriptcat.org/` \| `https://scriptcat.org/doc` | `https://doc.scriptcat.org/` |

### include

Hỗ trợ `*` để khớp mờ, cho phép URL không tiêu chuẩn

### exclude

URL không nên khớp; sử dụng cùng cú pháp biểu thức như `include`

### grant

Yêu cầu quyền API — một API chỉ có thể được gọi sau khi đã yêu cầu. Xem danh sách quyền tại: [Tài liệu API](./api.md) và [Tài liệu CAT API](./cat-api.md).

Hai giá trị đặc biệt:

- **none**: script không chạy trong môi trường sandbox mà chạy trực tiếp trong môi trường trang. Trong môi trường này, không có API GM nào khả dụng, nhưng đối tượng `window` của trang có thể được truy cập trực tiếp.
- **unsafeWindow**: trong môi trường sandbox, nếu bạn cần truy cập đối tượng `window` của trang, hãy sử dụng `unsafeWindow`. (Tampermonkey không yêu cầu khai báo điều này — nó chỉ được giữ lại vì tính tương thích.)

### connect

Yêu cầu quyền truy cập vào một trang web; xem `GM_cookie` và `GM_xmlhttpRequest`. `GM_download` ở chế độ `native` cũng nhận biết `@connect` (host chưa khai báo sẽ kích hoạt lời nhắc xác nhận).

### resource

Bao gồm một tệp tài nguyên. Sau khi khai báo `@resource`, bạn có thể sử dụng `GM_getResourceText`/`GM_getResourceURL` để lấy thông tin.

```js
// @resource icon https://bbs.tampermonkey.net.cn/favicon.ico
// @resource html https://bbs.tampermonkey.net.cn/
// @resource xml https://bbs.tampermonkey.net.cn/sitemap.xml
// Thêm kiểm tra toàn vẹn tài nguyên
// @resource icon https://bbs.tampermonkey.net.cn/favicon.ico#md5-xxx,sha256-xxx
```

### require

Bao gồm một tệp JS bên ngoài; hỗ trợ [kiểm tra toàn vẹn tài nguyên](#kiểm-tra-toàn-vẹn-tài-nguyên)

### require-css

Bao gồm một tệp CSS bên ngoài; hỗ trợ [kiểm tra toàn vẹn tài nguyên](#kiểm-tra-toàn-vẹn-tài-nguyên)

### noframes

Đánh dấu script không chạy bên trong `<frame>`

### definition

Địa chỉ tham chiếu của tệp `.d.ts`, kích hoạt gợi ý tự động hoàn thành của trình soạn thảo

### antifeature

Điều này liên quan đến thị trường script; các tính năng không mong muốn cần được gắn cờ với giá trị mô tả này:

```js
// @antifeature ads Script này có quảng cáo
// @antifeature referral-link Script này chỉnh sửa hoặc chuyển hướng đến liên kết giới thiệu của tác giả
```

## Các Giá trị Mô tả Bổ sung

### license

Giấy phép mã nguồn mở của script hiện tại

### updateURL

Kiểm tra cập nhật yêu cầu script từ xa có thẻ `@version`.

Liên kết mà script sử dụng để kiểm tra cập nhật; nếu không được đặt, mặc định là `user.js => meta.js` của liên kết, hoặc liên kết hiện tại nếu không có `user.js`.

Nếu `@updateURL` được cấu hình, `@downloadURL` cũng phải được cấu hình để `@updateURL` hoạt động.

### downloadURL

Địa chỉ tải xuống cho bản cập nhật script

### supportURL

Trang web hỗ trợ, trang báo lỗi

### homepage, homepageURL, website

Trang chủ script

### source

Trang mã nguồn script

### icon, iconURL, defaulticon

Biểu tượng script

### icon64, icon64URL

Biểu tượng script 64x64

### Ghi chú

### Kiểm tra Toàn vẹn Tài nguyên

- Sử dụng md5, sha1, sha256, sha384 hoặc sha512 để kiểm tra xem tài nguyên có bị thay đổi không. Nhiều phương pháp kiểm tra có thể phân tách bằng `;` hoặc `,`.
- Theo [khuyến nghị của W3C](https://w3c.github.io/webappsec-subresource-integrity/#hash-collision-attacks), md5 và sha1 không được khuyến nghị; hãy sử dụng sha384 hoặc thuật toán hash mạnh hơn.

Ví dụ:

```js
// @require https://cdn.jsdelivr.net/npm/darkmode-js@1.5.7/lib/darkmode-js.min.js#md5-d55836f30c097da753179f82fa6f108f,sha256-a476ab8560837a51938aa6e1720c8be87c2862b6221690e9de7ffac113811a90
```
