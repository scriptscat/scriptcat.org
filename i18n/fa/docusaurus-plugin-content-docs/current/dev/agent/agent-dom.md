---
title: API دستکاری DOM
---

`@grant CAT.agent.dom`

API دستکاری DOM اتوماسیون کامل صفحه مرورگر را فراهم می‌کند: ناوبری، خواندن محتوا، اسکرین‌شات، تعامل با فرم و نظارت DOM.

## مدیریت تب

### listTabs — فهرست تب‌ها

```javascript
const tabs = await CAT.agent.dom.listTabs();
```

اطلاعات مربوط به هر تب باز را برمی‌گرداند.

**بازگشت `TabInfo[]`:**

| فیلد | نوع | توضیحات |
|------|------|------|
| `tabId` | `number` | شناسه تب |
| `url` | `string` | URL فعلی |
| `title` | `string` | عنوان صفحه |
| `active` | `boolean` | آیا این تب فعال فعلی است |
| `windowId` | `number` | شناسه پنجره‌ای که به آن تعلق دارد |
| `discarded` | `boolean` | آیا کنار گذاشته شده (به حالت تعلیق درآمده) |

## ناوبری

### navigate — ناوبری یک صفحه

```javascript
const result = await CAT.agent.dom.navigate(url, options?);
```

**پارامترها:**

| پارامتر | نوع | پیش‌فرض | توضیحات |
|------|------|--------|------|
| `url` | `string` | — | URL هدف (الزامی) |
| `options.tabId` | `number` | تب فعال فعلی | از کدام تب استفاده شود |
| `options.waitUntil` | `boolean` | `true` | آیا منتظر پایان بارگذاری صفحه بماند |
| `options.timeout` | `number` | `30000` | مهلت زمانی در میلی‌ثانیه |

**بازگشت `NavigateResult`:**

```typescript
{ tabId: number; url: string; title: string }
```

## خواندن محتوا

### readPage — خواندن محتوای صفحه

```javascript
const page = await CAT.agent.dom.readPage(options?);
```

DOM صفحه را به متن ساختاریافته تبدیل می‌کند و به طور خودکار عناصر نامربوط مانند `<script>`، `<style>`، `<noscript>`، `<svg>` و `<link[rel=stylesheet]>` را حذف می‌کند.

**پارامترها:**

| پارامتر | نوع | پیش‌فرض | توضیحات |
|------|------|--------|------|
| `options.tabId` | `number` | تب فعال فعلی | از کدام تب استفاده شود |
| `options.selector` | `string` | — | انتخابگر CSS؛ فقط محتوای عنصر مطابق برگردانده می‌شود |
| `options.maxLength` | `number` | — | حداکثر کاراکترهای محتوا؛ فراتر از این بریده می‌شود |
| `options.removeTags` | `string[]` | — | نام تگ‌های اضافی برای حذف |

**بازگشت `PageContent`:**

| فیلد | نوع | توضیحات |
|------|------|------|
| `title` | `string` | عنوان صفحه |
| `url` | `string` | URL صفحه |
| `html` | `string` | محتوای متنی پردازش‌شده صفحه |
| `truncated` | `boolean` | آیا محتوا بریده شده است |
| `totalLength` | `number` | طول کل محتوای اصلی |

### screenshot — گرفتن اسکرین‌شات

```javascript
const shot = await CAT.agent.dom.screenshot(options?);
```

**پارامترها:**

| پارامتر | نوع | پیش‌فرض | توضیحات |
|------|------|--------|------|
| `options.tabId` | `number` | تب فعال فعلی | از کدام تب استفاده شود |
| `options.quality` | `number` | `80` | کیفیت JPEG (0-100) |
| `options.fullPage` | `boolean` | `false` | کل صفحه را ضبط کنید |
| `options.selector` | `string` | — | انتخابگر CSS؛ فقط ناحیه عنصر مطابق را ضبط کنید |
| `options.saveTo` | `string` | — | مسیر ذخیره در فضای کار OPFS |

**بازگشت `ScreenshotResult`:**

| فیلد | نوع | توضیحات |
|------|------|------|
| `dataUrl` | `string` | URL داده base64 |
| `path` | `string` | مسیر ذخیره OPFS (زمانی که `saveTo` استفاده می‌شود) |
| `size` | `number` | اندازه فایل (زمانی که `saveTo` استفاده می‌شود) |

**نحوه انتخاب حالت ضبط:**

| سناریو | رفتار |
|------|------|
| `selector` داده شده | مرزهای عنصر را از طریق CDP پیدا می‌کند و اسکرین‌شات را برش می‌دهد |
| تب پس‌زمینه | اسکرین‌شات CDP را امتحان می‌کند؛ اگر ناموفق بود، تب را فعال می‌کند و از `captureVisibleTab` استفاده می‌کند |
| تب پیش‌زمینه | مستقیماً از `captureVisibleTab` استفاده می‌کند |

```javascript
// ذخیره یک اسکرین‌شات در OPFS
const shot = await CAT.agent.dom.screenshot({
  saveTo: "screenshots/page.png",
  quality: 90
});
console.log(`ذخیره شد در ${shot.path}, اندازه ${shot.size} bytes`);
```

## تعامل با صفحه

### click — کلیک روی یک عنصر

```javascript
const result = await CAT.agent.dom.click(selector, options?);
```

**پارامترها:**

| پارامتر | نوع | پیش‌فرض | توضیحات |
|------|------|--------|------|
| `selector` | `string` | — | انتخابگر CSS (الزامی) |
| `options.tabId` | `number` | تب فعال فعلی | از کدام تب استفاده شود |
| `options.trusted` | `boolean` | `false` | از CDP برای ارسال یک رویداد واقعی ماوس استفاده کنید |

**بازگشت `ActionResult`:**

| فیلد | نوع | توضیحات |
|------|------|------|
| `success` | `boolean` | آیا موفق بود |
| `navigated` | `boolean` | آیا کلیک ناوبری صفحه را فعال کرد |
| `url` | `string` | URL جدید پس از ناوبری |
| `newTab` | `boolean` | آیا تب جدیدی باز شد |

**`trusted` در برابر کلیک معمولی:**

- `trusted: false` (پیش‌فرض) — `element.click()` را از طریق JS تزریق‌شده شبیه‌سازی می‌کند؛ سریع، اما برخی سایت‌ها ممکن است آن را به عنوان رویداد غیرواقعی تشخیص دهند
- `trusted: true` — یک رویداد واقعی ماوس از طریق Chrome DevTools Protocol ارسال می‌کند، غیرقابل تشخیص از تعامل واقعی کاربر، اما نیاز به مجوز debugger دارد

### fill — پر کردن فیلد فرم

```javascript
const result = await CAT.agent.dom.fill(selector, value, options?);
```

**پارامترها:**

| پارامتر | نوع | توضیحات |
|------|------|------|
| `selector` | `string` | انتخابگر CSS (الزامی) |
| `value` | `string` | مقدار برای پر کردن (الزامی) |
| `options.tabId` | `number` | از کدام تب استفاده شود |
| `options.trusted` | `boolean` | از CDP برای شبیه‌سازی ورودی صفحه‌کلید استفاده کنید |

**رفتار:**
- حالت عادی: `element.value` را تنظیم می‌کند و یک رویداد `input` ارسال می‌کند
- حالت قابل اعتماد: CDP عنصر را فوکوس می‌کند → کاراکتر به کاراکتر تایپ می‌کند

### scroll — اسکرول صفحه

```javascript
const result = await CAT.agent.dom.scroll(direction, options?);
```

**پارامترها:**

| پارامتر | نوع | توضیحات |
|------|------|------|
| `direction` | `"up" \| "down" \| "top" \| "bottom"` | جهت اسکرول (الزامی) |
| `options.tabId` | `number` | از کدام تب استفاده شود |
| `options.selector` | `string` | به جای کل صفحه، یک ظرف خاص را اسکرول کنید |

**بازگشت `ScrollResult`:**

| فیلد | نوع | توضیحات |
|------|------|------|
| `scrollTop` | `number` | موقعیت اسکرول پس از اسکرول |
| `scrollHeight` | `number` | ارتفاع کل محتوا |
| `clientHeight` | `number` | ارتفاع viewport |
| `atBottom` | `boolean` | آیا اکنون به پایین اسکرول شده است |

### waitFor — انتظار برای یک عنصر

```javascript
const result = await CAT.agent.dom.waitFor(selector, options?);
```

برای ظاهر شدن عنصر مشخص‌شده در صفحه نظرسنجی می‌کند (هر ۵۰۰ میلی‌ثانیه بررسی).

**پارامترها:**

| پارامتر | نوع | پیش‌فرض | توضیحات |
|------|------|--------|------|
| `selector` | `string` | — | انتخابگر CSS (الزامی) |
| `options.tabId` | `number` | تب فعال فعلی | از کدام تب استفاده شود |
| `options.timeout` | `number` | `10000` | مهلت زمانی در میلی‌ثانیه |

**بازگشت `WaitForResult`:**

| فیلد | نوع | توضیحات |
|------|------|------|
| `found` | `boolean` | آیا عنصر پیدا شد |
| `element` | `object` | اطلاعات عنصر (فقط زمانی که `found=true`) |
| `element.selector` | `string` | انتخابگر مطابق |
| `element.tag` | `string` | نام تگ |
| `element.text` | `string` | محتوای متنی |
| `element.role` | `string` | نقش ARIA |
| `element.type` | `string` | نوع ورودی |
| `element.visible` | `boolean` | آیا قابل مشاهده است |

## اجرای اسکریپت

### executeScript — اجرای جاوااسکریپت

```javascript
const result = await CAT.agent.dom.executeScript(code, options?);
```

**پارامترها:**

| پارامتر | نوع | پیش‌فرض | توضیحات |
|------|------|--------|------|
| `code` | `string` | — | کد جاوااسکریپت (الزامی) |
| `options.tabId` | `number` | تب فعال فعلی | از کدام تب استفاده شود |

> کد همیشه در **دنیای MAIN** صفحه اجرا می‌شود (همان شیء `window` را با JS خود صفحه به اشتراک می‌گذارد)، بنابراین می‌تواند توابع خود صفحه را فراخوانی کند و متغیرهای صفحه را مستقیماً بخواند — اما به همین دلیل **نمی‌تواند به URLهای blob افزونه دسترسی پیدا کند** (مثلاً یک URL `blob:` که از طریق `URL.createObjectURL()` از `Blob` برگردانده‌شده توسط `CAT.agent.opfs.read` در حالت `"blob"` ایجاد می‌کنید)، زیرا URLهای blob محدود به مبدأ خود افزونه هستند. اگر نیاز به کار با یک URL blob در یک زمینه ایزوله دارید، به جای آن از یک SkillScript استفاده کنید (به [توسعه Skill](../agent-skill-dev) مراجعه کنید).

```javascript
// فراخوانی یک تابع JS خود صفحه / خواندن یک متغیر صفحه
const data = await CAT.agent.dom.executeScript(
  "return window.__APP_STATE__"
);

// خواندن محتوای DOM
const title = await CAT.agent.dom.executeScript(
  "return document.querySelector('h1')?.textContent"
);
```

> کد برای اجرا در `new Function()` پیچیده می‌شود و از یک مقدار `return` پشتیبانی می‌کند. مهلت زمانی ۳۰ ثانیه است.

## نظارت DOM

از Chrome DevTools Protocol برای نظارت بر تغییرات DOM و رویدادهای گفتگو در یک صفحه استفاده می‌کند.

### startMonitor — شروع نظارت

```javascript
await CAT.agent.dom.startMonitor(tabId);
```

نظارت بر تب مشخص‌شده را برای تغییرات DOM و گفتگوها (alert/confirm/prompt) شروع می‌کند.

### stopMonitor — توقف نظارت

```javascript
const result = await CAT.agent.dom.stopMonitor(tabId);
```

نظارت را متوقف می‌کند و تغییرات جمع‌آوری‌شده را برمی‌گرداند.

**بازگشت `MonitorResult`:**

| فیلد | نوع | توضیحات |
|------|------|------|
| `dialogs` | `Array<{ type, message }>` | فهرست گفتگوها |
| `addedNodes` | `Array<{ tag, id?, class?, role?, text }>` | خلاصه گره‌های DOM تازه اضافه‌شده |

> `addedNodes` بر اساس شناسه گره حذف تکراری می‌شود و به ۵۰ ورودی محدود می‌شود؛ گره‌هایی که از آن زمان از صفحه حذف شده‌اند یا قابل مشاهده نیستند به طور خودکار رد می‌شوند. `text` متن ساده استخراج‌شده از `outerHTML` گره است که به ۳۰۰ کاراکتر بریده شده است.

### peekMonitor — بررسی وضعیت نظارت

```javascript
const status = await CAT.agent.dom.peekMonitor(tabId);
```

به صورت غیرمخرب وضعیت نظارت فعلی را بررسی می‌کند.

**بازگشت `MonitorStatus`:**

| فیلد | نوع | توضیحات |
|------|------|------|
| `hasChanges` | `boolean` | آیا تغییری وجود دارد |
| `dialogCount` | `number` | تعداد گفتگوها |
| `nodeCount` | `number` | تعداد گره‌های تازه اضافه‌شده |

## مثال کامل

```javascript
// ==UserScript==
// @name        پرکننده خودکار فرم
// @match       https://example.com/form
// @grant       CAT.agent.dom
// ==/UserScript==

// منتظر بارگذاری فرم بمانید
await CAT.agent.dom.waitFor("form#signup", { timeout: 5000 });

// فرم را پر کنید
await CAT.agent.dom.fill("input[name=username]", "test_user");
await CAT.agent.dom.fill("input[name=email]", "test@example.com");

// کادر توافق را علامت بزنید
await CAT.agent.dom.click("input[type=checkbox]#agree");

// از فرم پر شده اسکرین‌شات بگیرید
await CAT.agent.dom.screenshot({
  selector: "form#signup",
  saveTo: "screenshots/form-filled.png"
});

// روی ارسال کلیک کنید
const result = await CAT.agent.dom.click("button[type=submit]", { trusted: true });
if (result.navigated) {
  console.log("فرم با موفقیت ارسال شد، به موارد زیر هدایت شد:", result.url);
}
```
