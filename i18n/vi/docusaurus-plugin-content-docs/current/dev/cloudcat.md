---
title: Thực thi trên đám mây
---

> Có nhiều cách để chạy trên đám mây; xem [Môi trường thực thi](#running-environments) để biết chi tiết. Ngoài ra, [CloudCat](https://github.com/scriptscat/cloudcat) là một dịch vụ để chạy script nền trên đám mây — một nền tảng FAAS vẫn đang được phát triển.

⚠ Vui lòng lưu ý ⚠, một khi đã tải lên đám mây, ý nghĩa của `once` trong biểu thức script theo lịch trình thay đổi: thời gian trước `once` sẽ được thay thế bằng giá trị nhỏ nhất khi thực thi.

Ví dụ:

* `* * once * *` => `0 0 * * *`: chạy một lần mỗi ngày, trở thành chạy lúc 00:00 mỗi ngày
* `* 1-23 once * *` => `0 1 * * *`: chạy một lần trong khoảng 1:00 đến 23:00 mỗi ngày, trở thành chạy lúc 01:00 mỗi ngày
* `* 1,3,5 once * *` => `0 1 * * *`: chạy một lần lúc 1:00, 3:00 hoặc 5:00 mỗi ngày, trở thành chạy lúc 01:00 mỗi ngày
* `* */4 once * *` => `0 0 * * *`: chạy một lần mỗi 4 giờ mỗi ngày, trở thành chạy lúc 00:00 mỗi ngày
* `* 1-23/4 once * *` => `0 1 * * *`: chạy một lần mỗi 4 giờ trong khoảng 1:00 đến 23:00 mỗi ngày, trở thành chạy lúc 01:00 mỗi ngày
* `* 10 once * *` => `0 10 * * *`: chạy một lần lúc 10:00 mỗi ngày, trở thành chạy tại phút 00 của giờ 10 mỗi ngày
* `* * * once *` => `0 0 1 * *`: chạy một lần mỗi tháng, trở thành chạy lúc 00:00 ngày 1 mỗi tháng

## Các giá trị mô tả CloudCat bổ sung

Script tham khảo: [Bilibili Auto Check-in](https://scriptcat.org/script-show-page/48)

### cloudCat

Khai báo thuộc tính này cho phép script chạy thông qua `CloudCat`. Khi một script có tùy chọn này, nút thực thi đám mây xuất hiện trong danh sách script; nhấp vào cho phép bạn chọn phương thức thực thi — xem [Môi trường thực thi](#running-environments).

![image-20220203225847694](@site/docs/dev/cloudcat.assets/image-20220203225847694.png)

### cloudServer

> Liên quan đến cloudCat, chưa được triển khai

Địa chỉ server cloudCat mặc định

### exportValue

Mô tả các Values xuất ra đám mây; cho phép nhiều khai báo.

```ts
// @exportValue key1,key2,key3
// @exportValue key4,key5,key6
```

### exportCookie

Mô tả các cookie xuất ra đám mây; cho phép nhiều khai báo. Tham số được mô tả bằng `CookieDetails` của `GM_cookie`, ví dụ:

```ts
// Dưới đây xuất cookie tên cookie1 từ https://docs.scriptcat.org/docs/use/
// @exportCookie url=https://docs.scriptcat.org/docs/use;name=cookie1

// Đây xuất tất cả cookie của miền scriptcat.org
// @exportCookie domain=scriptcat.org

// Tất cả các tham số khả dụng:
// @exportCookie domain=scriptcat.org;url=https://docs.scriptcat.org/docs/use;name=cookie1;path=/docs/use;secure=true;session=true
```

## Thay đổi hỗ trợ API
> Hiện tại chỉ hỗ trợ các API sau; nếu không được ghi chú khác, chúng hoạt động giống như API gốc.

### GM_xmlhttpRequest


### GM_notification


### GM_log

### GM_getValue

Hiện tại chỉ hỗ trợ lấy Values được xuất qua `@exportValue`; các phương thức set/delete/list và các phương thức khác không được hỗ trợ.

## Môi trường thực thi {#running-environments}

### Local

Xuất một gói zip; sau khi giải nén vào một thư mục, chạy các lệnh sau để thực thi cục bộ (yêu cầu môi trường Node.js cục bộ):

```bash
npm i
node index.js
```


### Tencent Cloud

Đầu tiên tạo khóa Tencent Cloud tại [**Access Keys**](https://console.cloud.tencent.com/cam/capi) — nếu sử dụng tài khoản phụ, hãy đảm cấp cho nó quyền Cloud Function. Sau đó kích hoạt dịch vụ tại [**Function Service**](https://console.cloud.tencent.com/scf/list), đi kèm một lượng sử dụng miễn phí nhất định mỗi tháng. Vùng mặc định là Thượng Hải; điều chỉnh nếu cần. Sau khi nhấp tải lên, bộ kích hoạt theo lịch trình tự động được tạo dựa trên `@crontab` để chạy hàm theo lịch.

![image-20220203224956248](@site/docs/dev/cloudcat.assets/image-20220203224956248.png)
