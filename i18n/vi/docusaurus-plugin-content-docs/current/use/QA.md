---
title: Câu hỏi Thường gặp
---

## Chế độ Nhà phát triển / Quyền Script Người dùng

#### Q: ScriptCat hiển thị "Chế độ nhà phát triển chưa được bật" và script không chạy?

Từ Chrome 120+ và các phiên bản Edge mới hơn, trình duyệt yêu cầu người dùng bật quyền thủ công. Vui lòng tham khảo [Bật hỗ trợ Script Người dùng](/docs/use/open-dev/).

Nếu đã bật nhưng cảnh báo vẫn xuất hiện, hãy thử khởi động lại trình duyệt hoặc tải lại tiện ích.

## Script Không Hoạt động

#### Q: Đã cài đặt script nhưng không có hiệu quả?

1. **"Cho phép Script Người dùng" chưa bật** — Xem [Bật hỗ trợ Script Người dùng](/docs/use/open-dev/)
2. **Khởi động lạnh** — Script có thể không tải ngay khi trình duyệt lần đầu mở. Thử làm mới trang
3. **Xung đột tiện ích** — Trình chặn quảng cáo (ví dụ: uBlock Origin) có thể gây lỗi script

#### Q: Script hoạt động trên Tampermonkey nhưng không trên ScriptCat?

ScriptCat và Tampermonkey có một số khác biệt trong triển khai API. Vui lòng cập nhật lên phiên bản mới nhất. Nếu sự cố vẫn tiếp diễn, gửi Issue trên [GitHub](https://github.com/scriptscat/scriptcat/issues).

## Giới hạn CSP / Trusted Types {#csp-trusted-types}

#### Q: Tôi nên làm gì nếu CSP của trang web chặn script hoạt động?

Trong ScriptCat, mở **Network Rules (Quy tắc mạng)** rồi chọn **Công cụ → Quy tắc mạng → Quy tắc mới → Xóa CSP**. Ở mục **Phạm vi áp dụng**, chỉ nhập trang web gặp sự cố, chẳng hạn `example.com`. Lưu quy tắc rồi tải lại các trang đang mở.

Mẫu **Remove CSP** xóa các header phản hồi CSP khỏi phản hồi tài liệu của khung chính và khung con. Bạn cũng có thể chọn xóa `X-Frame-Options`.

#### Q: `This document requires 'TrustedHTML' assignment.` có nghĩa là gì?

Thông thường, trình duyệt đã từ chối một thao tác DOM vì trang web áp dụng Trusted Types. Trang web có thể bật Trusted Types bằng chỉ thị CSP `require-trusted-types-for 'script'`; userscript có thể gây lỗi này nếu thực hiện thao tác không được chính sách cho phép. Trình duyệt đang thực thi chính sách bảo mật của trang web, nên riêng thông báo này không chứng minh ScriptCat gây ra sự cố.

Nếu giới hạn được áp dụng bằng header phản hồi CSP trong phản hồi tài liệu, quy tắc **Remove CSP** chỉ dành cho trang web đó có thể hữu ích. Quy tắc không đảm bảo khắc phục lỗi nếu nguyên nhân không phải header phản hồi CSP có thể xóa.

#### Q: Vì sao ScriptCat không xóa CSP trên mọi trang web theo mặc định?

CSP và Trusted Types giúp giảm rủi ro như tấn công chèn mã chéo trang (XSS). Xóa CSP làm suy yếu các biện pháp bảo vệ sẵn có của trang web khớp với quy tắc. Chỉ tạo quy tắc cho trang web thực sự cần. Phạm vi **Tất cả trang web** vẫn có thể chọn, nhưng ScriptCat sẽ yêu cầu xác nhận trước khi lưu.

:::warning Cảnh báo bảo mật

Tránh phạm vi **Tất cả trang web** trừ khi bạn hiểu và chấp nhận tác động bảo mật.

:::

:::info Về vấn đề tương thích Trusted Types của ScriptCat

[ScriptCat #1239](https://github.com/scriptscat/scriptcat/issues/1239) cũng có một vấn đề tương thích riêng của `GM_xmlhttpRequest`, đã được sửa trong [ScriptCat #1242](https://github.com/scriptscat/scriptcat/pull/1242). Bản sửa này không tắt hoặc vượt qua Trusted Types và không thay đổi CSP của trang web. Hãy cập nhật ScriptCat nếu bạn đang dùng phiên bản cũ.

:::

## Sự cố Đồng bộ Đám mây

> Để sử dụng đồng bộ cơ bản, xem [Đồng bộ và Sao lưu](/docs/use/sync/).

#### Q: Sự cố với OneDrive / Google Drive / WebDAV?

1. **Script đã xóa xuất hiện lại** — Đảm bảo "đồng bộ xóa" được bật trên tất cả thiết bị

## Sự cố Cài đặt Script

> Để cài đặt script, xem [Cài đặt Script](/docs/use/script_installation/).

## Sự cố Xác thực Cookie

#### Q: GM_cookie không lấy được cookie?

1. **Popup xác thực không xuất hiện** — Đảm bảo `GM_cookie` được khai báo đúng trong `@grant` của script, và sử dụng `@connect` để khai báo các miền cần truy cập

## Mất Dữ liệu Script

#### Q: Tất cả script biến mất sau khi mở trình duyệt?

1. **Trì hoãn khởi tạo** — ScriptCat có thể vẫn đang tải dữ liệu khi trình duyệt khởi động. Đợi vài giây hoặc khởi động lại trình duyệt
2. **Phần mềm dọn dẹp** — Các công cụ như 360 Security Guard hoặc CCleaner có thể xóa dữ liệu tiện ích. Loại trừ dữ liệu tiện ích trình duyệt trong cài đặt dọn dẹp
3. **Khuyến nghị sao lưu định kỳ** — Sử dụng tính năng xuất hoặc [đồng bộ đám mây](/docs/use/sync/) để sao lưu thường xuyên
