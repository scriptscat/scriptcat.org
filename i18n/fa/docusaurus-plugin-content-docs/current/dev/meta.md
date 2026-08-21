---
title: بلوک فراداده
---

محتوای داخل `==UserScript==` مجوزهای مورد نیاز اسکریپت، اطلاعات مربوط به اسکریپت و غیره را توصیف می‌کند. در ابتدای اسکریپت قرار دارد.

```js
// ==UserScript==
// @name         اسکریپت کاربری جدید
// @namespace    https://bbs.tampermonkey.net.cn/
// @version      0.1.0
// @description  تلاش برای تسخیر جهان!
// @author       شما
// @crontab      * * once * *
// ==/UserScript==
```

## مقادیر اصلی

### name

نام اسکریپت

### namespace

فضای نام اسکریپت. `name + namespace` منحصر‌به‌فرد بودن اسکریپت را تعیین می‌کند.

### version

نسخه اسکریپت. توصیه می‌شود از [نسخه‌بندی معنایی](https://semver.org/) پیروی کنید تا هنگام تشخیص تغییر نسخه، از کاربر خواسته شود به‌روزرسانی کند و غیره.

### description

شرح مفصل اسکریپت

### author

نویسنده اسکریپت

### run-at

زمان اجرای اسکریپت

| مقدار          | اجرا                                                              | پشتیبانی از        |
| -------------- | ------------------------------------------------------------------ | ---------------------- |
| document-start | اسکریپت را به محض تطبیق URL در سمت فرانت‌اند به صفحه تزریق می‌کند | v0.3.0          |
| document-end   | اسکریپت را پس از اتمام بارگذاری DOM تزریق می‌کند؛ اسکریپت‌ها و تصاویر صفحه ممکن است در این نقطه هنوز در حال بارگذاری باشند | v0.3.0 |
| document-idle  | اسکریپت را پس از اتمام بارگذاری همه محتوا تزریق می‌کند         | v0.3.0                  |
| document-body  | اسکریپت فقط پس از داشتن عنصر `body` در صفحه تزریق می‌شود     | v0.6.2                  |
| document-menu  | با کلیک راست یک منو نشان می‌دهد؛ اجرای اسکریپت از نام اسکریپت به عنوان نام منو استفاده می‌کند | v0.3.4-v0.9.4 (🔥 حذف شده) |

برای آیکون‌های منو، می‌توانید به [نمادهای یونیکد](https://unicode-table.com/en/) و [ایموجی](https://www.emojiall.com/en-US/) مراجعه کنید.

### run-in

محیطی را که اسکریپت در آن تزریق می‌شود مشخص می‌کند: `@run-in normal-tabs` برای تب‌های عادی، `@run-in incognito-tabs` برای تب‌های ناشناس.

### early-start (v1.1.0+)

وقتی `run-at` برابر `document-start` باشد، اسکریپت در سریع‌ترین زمان ممکن اجرا می‌شود، اما همچنان نمی‌تواند بارگذاری سریع‌تر از صفحه را تضمین کند.

پس از تعریف `@run-at document-start`، می‌توانید `@early-start` را اضافه کنید تا اسکریپت سریع‌تر از صفحه بارگذاری شود: [مثال](https://github.com/scriptscat/scriptcat/blob/main/example/early-start.js)

### inject-into

:::tip

در محیط content-script (`content`)، `unsafeWindow` فقط به `window` فعلی خود محیط اشاره می‌کند و نمی‌تواند به `window` صفحه دسترسی پیدا کند.

ScriptCat از بررسی خودکار محدودیت‌های CSP برای تصمیم‌گیری درباره تزریق به عنوان `content` یا `page` پشتیبانی نمی‌کند (یعنی `@inject-into auto` تامپرمانکی).

:::

مشخص می‌کند اسکریپت کجا تزریق شود، با پشتیبانی از `page` و `content`، پیش‌فرض `page`.

- `page`: اسکریپت در محیط صفحه تزریق می‌شود و می‌تواند از `unsafeWindow` برای دسترسی به `window` و `DOM` صفحه استفاده کند
- `content`: اسکریپت در محیط content-script تزریق می‌شود، نمی‌تواند مستقیماً به شیء `window` صفحه دسترسی پیدا کند، اما می‌تواند به `DOM` صفحه دسترسی پیدا کند و تابع `CSP` نیست

### storageName 🧪

فضای ذخیره‌سازی برای `Value`؛ داده‌های تحت همان `storageName` می‌توانند بین اسکریپت‌ها به اشتراک گذاشته و ارتباط برقرار شوند. این مخصوص ScriptCat است.

### background

این اسکریپت را به عنوان یک اسکریپت پس‌زمینه علامت‌گذاری می‌کند که باید در محیط پس‌زمینه اجرا شود. برای جزئیات به [اسکریپت پس‌زمینه](./background.md#background-script-background) مراجعه کنید.

### crontab

اسکریپت را به عنوان یک اسکریپت زمان‌بندی‌شده علامت‌گذاری می‌کند که به یک مقدار عبارت cron نیاز دارد. فقط یک عبارت cron می‌تواند وجود داشته باشد و بر اساس آن برنامه در محیط پس‌زمینه اجرا می‌شود. برای جزئیات به [اسکریپت زمان‌بندی‌شده](./background.md#scheduled-script-crontab) مراجعه کنید.

### match

فقط URLهایی که توسط `match` تطبیق داده شوند اسکریپت را اجرا می‌کنند، طبق [الگوهای تطبیق](https://developer.chrome.com/docs/extensions/mv3/match_patterns/). در `match`، `*` یک علامت عام است، `tld` با دامنه سطح بالا تطبیق می‌یابد و دامنه‌ای که با `*.` شروع می‌شود نیز با `xxx.com` تطبیق می‌یابد:

| مقدار                             | مثال‌های صحیح                                                                                                                          | مثال‌های نادرست                          |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| `http://scriptcat.org/doc/match`  | `http://scriptcat.org/doc/match`                                                                                                            | `http://scriptcat.org/doc/runAt`         |
| `*://*/param?*`                   | `https://scriptcat.org/param` \| `http://scriptcat.org/param?search=tampermonkey`                                                            | `https://scriptcat.org/test/param`       |
| `*://*/prefix*suffix`             | `http://scriptcat.org/prefix/suffix` \| `http://scriptcat.org/prefix/mid/suffix` \| `http://scriptcat.org/prefixsuffix`                      | `http://scriptcat.org/prefix/suffix/end` |
| `http*://scriptcat.org/*`         | `https://scriptcat.org/` \| `https://scriptcat.org/doc` \| `http://scriptcat.org/doc/match` \| `http://scriptcat.org/param?search=tampermonkey` | `https://doc.scriptcat.org/`            |
| `http*://scriptcat.org/doc/*`     | `https://scriptcat.org/doc` \| `http://scriptcat.org/doc/match`                                                                              | `http://scriptcat.org/param?search=tampermonkey` |
| `http*://scriptcat.tld/doc/*`     | `https://scriptcat.cn/doc` \| `http://scriptcat.net.cn/doc/match`                                                                            | `http://google.com/param?search=tampermonkey` |
| `http*://*.scriptcat.org/doc/*`   | `https://scriptcat.cn/doc` \| `http://www.scriptcat.net.cn/doc/match`                                                                        | `http://google.com/param?search=tampermonkey` |

### include

از `\*` برای تطبیق فازی پشتیبانی می‌کند و امکان URLهای غیراستاندارد را فراهم می‌کند

### exclude

URLهایی که نباید تطبیق داده شوند؛ از همان نحو عبارت `include` استفاده می‌کند

### grant

مجوز API را درخواست می‌کند — یک API فقط پس از درخواست قابل فراخوانی است. فهرست مجوزها را در: [مستندات API](./api.md) و [مستندات CAT API](./cat-api.md) ببینید.

دو مقدار ویژه:

- **none**: اسکریپت در محیط sandbox اجرا نمی‌شود، بلکه مستقیماً در محیط صفحه اجرا می‌شود. در این محیط هیچ API از GM در دسترس نیست، اما می‌توان مستقیماً به شیء `window` صفحه دسترسی پیدا کرد.
- **unsafeWindow**: در محیط sandbox، اگر نیاز به دسترسی به شیء `window` صفحه دارید، از `unsafeWindow` برای این کار استفاده کنید. (تامپرمانکی نیازی به اعلام این ندارد — فقط برای سازگاری نگه داشته شده است، که به اعتراف چندان تمیز نیست.)

### connect

مجوز دسترسی برای یک سایت را درخواست می‌کند؛ به `GM_cookie` و `GM_xmlhttpRequest` مراجعه کنید. `GM_download` در حالت `native` نیز `@connect` را رعایت می‌کند (میزبان‌های اعلام‌نشده یک درخواست تأیید را فعال می‌کنند، برخلاف تامپرمانکی)

### resource

یک فایل منبع را شامل می‌شود. پس از اعلام `@resource`، می‌توانید از `GM_getResourceText`/`GM_getResourceURL` برای بازیابی اطلاعات استفاده کنید.

```js
// @resource icon https://bbs.tampermonkey.net.cn/favicon.ico
// @resource html https://bbs.tampermonkey.net.cn/
// @resource xml https://bbs.tampermonkey.net.cn/sitemap.xml
// افزودن تأیید یکپارچگی منبع
// @resource icon https://bbs.tampermonkey.net.cn/favicon.ico#md5-xxx,sha256-xxx
```

### require

یک فایل JS خارجی را شامل می‌شود؛ از [تأیید یکپارچگی منبع](#resource-integrity-verification) پشتیبانی می‌کند

### require-css

یک فایل CSS خارجی را شامل می‌شود؛ از [تأیید یکپارچگی منبع](#resource-integrity-verification) پشتیبانی می‌کند

### noframes

اسکریپت را به عنوان اجرا نشدن در داخل یک `<frame>` علامت‌گذاری می‌کند

### definition

آدرس مرجع یک فایل `.d.ts` است که راهنمای تکمیل خودکار ویرایشگر را فعال می‌کند

### antifeature

این مربوط به بازار اسکریپت است؛ ویژگی‌های ناخواسته باید با این مقدار توصیفی علامت‌گذاری شوند، به عنوان مثال:

```js
// @antifeature ads این اسکریپت تبلیغات دارد
// @antifeature referral-link این اسکریپت لینک ارجاع نویسنده را تغییر می‌دهد یا به آن هدایت می‌کند
```

## مقادیر توصیفی اضافی

### license

مجوز متن‌باز اسکریپت فعلی

### updateURL

بررسی به‌روزرسانی مستلزم داشتن برچسب `@version` در اسکریپت راه دور برای اعمال این امر است.

لینکی که اسکریپت برای بررسی به‌روزرسانی‌ها استفاده می‌کند؛ اگر تنظیم نشده باشد، به طور پیش‌فرض `user.js => meta.js` لینک است، یا لینک فعلی اگر `user.js` وجود ندارد.

اگر `@updateURL` پیکربندی شده باشد، `@downloadURL` نیز باید برای اعمال `@updateURL` پیکربندی شود.

### downloadURL

آدرس دانلود برای به‌روزرسانی اسکریپت

### supportURL

سایت پشتیبانی، صفحه گزارش باگ

### homepage, homepageURL, website

صفحه اصلی اسکریپت

### source

صفحه کد منبع اسکریپت

### icon, iconURL, defaulticon

آیکون اسکریپت

### icon64, icon64URL

آیکون اسکریپت با اندازه 64x64

### copyright

اطلاعات کپی‌رایت اسکریپت

### tag

برچسب‌های اسکریپت، با کاما یا فاصله جدا می‌شوند

### compatible

اطلاعات سازگاری نمایش‌داده‌شده در GreasyFork

### scriptUrl

URL اسکریپت کاربری که توسط یک اسکریپت اشتراک به آن ارجاع می‌شود

### unwrap

به اسکریپت کاربری اجازه می‌دهد از بسته‌بندی sandbox عبور کند و مستقیماً در محدوده سراسری بومی صفحه تزریق و اجرا شود. اسکریپت می‌تواند مستقیماً به متغیرهای سراسری واقعی صفحه دسترسی پیدا کند و آن‌ها را تغییر دهد، اما نمی‌تواند از APIهای ممتاز اسکریپت کاربری مانند `GM.*` استفاده کند. معمولاً در سناریوهایی استفاده می‌شود که نیاز به تعامل عمیق با اسکریپت‌های بومی صفحه دارند، یا هنگام مهاجرت یک اسکریپت صفحه معمولی موجود.

### cloudCat

اسکریپت را به عنوان قابل صادرات به بسته اسکریپت ابری CloudCat علامت‌گذاری می‌کند (فقط SC)

### cloudServer

سرویس ابری CloudCat که توسط اسکریپت استفاده می‌شود

### exportValue

مقادیر ذخیره‌سازی اسکریپت برای صادرات هنگام صادرات به عنوان اسکریپت ابری

### exportCookie

کوکی‌هایی که هنگام صادرات به عنوان اسکریپت ابری باید صادر شوند

### یادداشت‌ها

### تأیید یکپارچگی منبع {#resource-integrity-verification}

- از md5، sha1، sha256، sha384 یا sha512 برای تأیید منابع در برابر دستکاری استفاده کنید. روش‌های تأیید متعدد را می‌توان با `;` یا `,` جدا کرد.
- طبق [توصیه‌های W3C](https://w3c.github.io/webappsec-subresource-integrity/#hash-collision-attacks)، md5 و sha1 توصیه نمی‌شوند؛ به جای آن از sha384 یا یک الگوریتم هش قوی‌تر استفاده کنید.

به عنوان مثال:

```js
// @require https://cdn.jsdelivr.net/npm/darkmode-js@1.5.7/lib/darkmode-js.min.js#md5-d55836f30c097da753179f82fa6f108f,sha256-a476ab8560837a51938aa6e1720c8be87c2862b6221690e9de7ffac113811a90
```
