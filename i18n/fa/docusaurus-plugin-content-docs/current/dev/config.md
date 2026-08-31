---
title: UserConfig
---

محتوای داخل `==UserConfig==` بعد از `==UserScript==` می‌آید و برخی گزینه‌های قابل پیکربندی توسط کاربر برای اسکریپت را توصیف می‌کند. پیکربندی در قالب [YAML](https://yaml.org/) نوشته می‌شود:

```js
/* ==UserConfig==
group1:
  configA:                                # کلید group.config است، ب.ظ. این کلید group1.configA است
    title: پیکربندی A                     # عنوان پیکربندی
    description: این یک پیکربندی از نوع متنی است # توضیحات پیکربندی
    type: text                            # نوع گزینه؛ در صورت حذف از داده‌ها به طور خودکار تشخیص داده می‌شود
    default: مقدار پیش‌فرض                # مقدار پیش‌فرض پیکربندی
    min: 2                                # حداقل ۲ کاراکتر
    max: 18                               # حداکثر ۱۸ کاراکتر
    password: true                        # علامت‌گذاری به عنوان فیلد رمز عبور
  configB:
    title: پیکربندی B
    description: این یک پیکربندی چک‌باکس است
    type: checkbox
    default: true
  configC:
    title: پیکربندی C
    description: این یک پیکربندی فهرست انتخابی است
    type: select
    default: 1
    values: [1,2,3,4,5]
  configD:
    title: پیکربندی D
    description: این یک پیکربندی فهرست انتخابی پویا است
    type: select
    bind: $cookies                       # مقادیر به صورت پویا متصل؛ کلید با $ شروع می‌شود و مقدار باید یک آرایه باشد
  configE:
    title: پیکربندی E
    description: این یک پیکربندی فهرست چندانتخابی است
    type: mult-select
    default: [1]
    values: [1,2,3,4,5]
  configF:
    title: پیکربندی F
    description: این یک پیکربندی فهرست چندانتخابی پویا است
    type: mult-select
    bind: $cookies
  configG:
    title: پیکربندی G
    description: این یک پیکربندی عددی است
    type: number
    default: 1
    min: 10  # حداقل مقدار
    max: 16  # حداکثر مقدار
    unit: min # برچسب واحد
  configH:
    title: پیکربندی H
    description: این یک پیکربندی متن طولانی است
    type: textarea
    default: مقدار پیش‌فرض
  configI:
    title: پیکربندی I
    description: این یک پیکربندی از نوع زمان است
    type: time
    default: "12:00"
---
group2: # گروه پیکربندی دوم
  configX:
    title: پیکربندی X
    description: این یک پیکربندی از نوع متنی است
    default: مقدار پیش‌فرض
 ==/UserConfig== */
```

پس از تعریف در اینجا، یک دکمه پیکربندی در داشبورد ظاهر می‌شود تا کاربر پیکربندی کند. توسعه‌دهندگان از `GM_getValue` برای خواندن مقدار پیکربندی استفاده می‌کنند، با کلید بیان‌شده به صورت `group.config`.

![](@site/docs/dev/config.assets/image-20210621213013631.png)
