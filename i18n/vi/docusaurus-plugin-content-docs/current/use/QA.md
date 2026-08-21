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
