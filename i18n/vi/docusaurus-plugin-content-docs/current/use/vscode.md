---
title: Phát triển Script với VSCode
---

ScriptCat cung cấp tiện ích mở rộng VSCode giúp bạn viết script trong VSCode. Sau khi lưu, thay đổi được đồng bộ tự động với ScriptCat trong trình duyệt.

## Yêu cầu tiên quyết

Bạn cần cài đặt hai công cụ sau:

1. **Cài đặt tiện ích ScriptCat trong trình duyệt** — Làm theo hướng dẫn [Bắt đầu Nhanh](/docs/use/use/)
2. **Cài đặt tiện ích ScriptCat trong VSCode** — Tìm "[scriptcat-vscode](https://marketplace.visualstudio.com/items?itemName=CodFrm.scriptcat-vscode)" trong cửa hàng tiện ích VSCode

## Thiết lập Kết nối

Sau khi cài đặt, bạn cần kết nối tiện ích ScriptCat với VSCode:

1. Nhấp vào biểu tượng ScriptCat trong trình duyệt
2. Đi đến **Công cụ > Công cụ Phát triển**
3. Tìm **Tự động kết nối dịch vụ VSCode**, bật nó và nhấp **Kết nối**

## Đồng bộ Script

### Tùy chọn 1: Chế độ Tự động Phát hiện (Đề xuất)

1. Trong VSCode, nhấn `Ctrl + Shift + P`
2. Gõ và chọn `scriptcat.autoTarget`
3. Từ đó trở đi, mỗi khi bạn mở hoặc lưu tệp `.user.js`, nó sẽ được đồng bộ tự động

### Tùy chọn 2: Chế độ Chỉ định Script

1. Trong VSCode, nhấn `Ctrl + Shift + P`
2. Gõ và chọn `scriptcat.target`
3. Chỉ định đường dẫn tệp script cần đồng bộ

## Quy trình Phát triển

1. Viết hoặc chỉnh sửa script `.user.js` trong VSCode
2. Nhấn `Ctrl + S` để lưu
3. Script được đồng bộ tự động với ScriptCat
4. Chuyển sang trình duyệt và làm mới trang

## FAQ

### Nếu không kết nối được?

- Đảm bảo tiện ích ScriptCat đang chạy
- Đảm bảo tiện ích VSCode đã cài đặt và bật

### Script không cập nhật sau khi lưu?

- Đảm bảo tên tệp kết thúc bằng `.user.js`
- Đảm bảo bạn đã chạy lệnh `scriptcat.autoTarget` hoặc `scriptcat.target`

### Cần kết nối lại sau khi khởi động lại VSCode?

Nếu "Tự động kết nối dịch vụ VSCode" được bật, VSCode sẽ tự động kết nối lại sau khi khởi động lại.
