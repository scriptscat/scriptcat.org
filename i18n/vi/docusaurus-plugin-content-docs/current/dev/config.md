---
title: UserConfig
---

Nội dung bên trong `==UserConfig==` đi sau `==UserScript==`, và mô tả một số tùy chọn có thể cấu hình bởi người dùng cho script. Cấu hình được viết theo định dạng [YAML](https://yaml.org/):

```js
/* ==UserConfig==
group1:
  configA:                                # khóa là group.config, ví dụ khóa này là group1.configA
    title: Config A                       # tiêu đề của cấu hình
    description: Đây là cấu hình kiểu văn bản # mô tả của cấu hình
    type: text                            # loại tùy chọn; tự phát hiện từ dữ liệu nếu bỏ qua
    default: giá trị mặc định              # giá trị mặc định của cấu hình
    min: 2                                # tối thiểu 2 ký tự
    max: 18                               # tối đa 18 ký tự
    password: true                        # đánh dấu là trường mật khẩu
  configB:
    title: Config B
    description: Đây là cấu hình hộp kiểm
    type: checkbox
    default: true
  configC:
    title: Config C
    description: Đây là cấu hình danh sách chọn
    type: select
    default: 1
    values: [1,2,3,4,5]
  configD:
    title: Config D
    description: Đây là cấu hình danh sách chọn động
    type: select
    bind: $cookies                       # giá trị được liên kết động; khóa bắt đầu bằng $, và giá trị phải là mảng
  configE:
    title: Config E
    description: Đây là cấu hình danh sách chọn đa
    type: mult-select
    default: [1]
    values: [1,2,3,4,5]
  configF:
    title: Config F
    description: Đây là cấu hình danh sách chọn đa động
    type: mult-select
    bind: $cookies
  configG:
    title: Config G
    description: Đây là cấu hình số
    type: number
    default: 1
    min: 10  # giá trị tối thiểu
    max: 16  # giá trị tối đa
    unit: min # nhãn đơn vị
  configH:
    title: Config H
    description: Đây là cấu hình văn bản dài
    type: textarea
    default: giá trị mặc định
  configI:
    title: Config I
    description: Đây là cấu hình kiểu thời gian
    type: time
    default: "12:00"
---
group2: # nhóm cấu hình thứ hai
  configX:
    title: Config X
    description: Đây là cấu hình kiểu văn bản
    default: giá trị mặc định
 ==/UserConfig== */
```

Khi đã định nghĩa ở đây, nút cấu hình xuất hiện trên bảng điều khiển để người dùng cấu hình. Nhà phát triển sử dụng `GM_getValue` để đọc giá trị cấu hình, với khóa được biểu diễn dưới dạng `group.config`.

![](@site/docs/dev/config.assets/image-20210621213013631.png)
