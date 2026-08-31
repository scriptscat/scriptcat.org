---
title: مستندات CatApi
---

## نمای کلی

APIهای مخصوص این افزونه همگی با `CAT_` تعریف می‌شوند.

همچنین می‌توانید مثال‌های مرتبط را در [دایرکتوری مثال](https://github.com/scriptscat/scriptcat/tree/main/example) بیابید.

## تعاریف

### CAT_setProxy

> از انتشار پایدار 0.9.1 منسوخ شده است؛ ممکن است در آینده در یک نسخه بتا بازگردد.

یک پروکسی تنظیم می‌کند. توجه داشته باشید که این ویژگی با افزونه‌هایی مانند Proxy SwitchyOmega تداخل خواهد داشت. چند اسکریپت می‌توانند بدون تداخل از یک پروکسی استفاده کنند (مثلاً یک اسکریپت که دسترسی گوگل را فراهم می‌کند و اسکریپت دیگر که دسترسی توییتر را فراهم می‌کند).

لطفاً ابتدا درباره [PAC](https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) و [محدودیت‌های URL کامل کرومیوم در PAC](https://github.com/FelisCatus/SwitchyOmega/wiki/Chromium-Full-URL-Restriction) مطالعه کنید.

```typescript
declare function CAT_setProxy(rule: CATType.ProxyRule[] | string): void;

declare namespace CATType {
  interface ProxyRule {
    proxyServer: ProxyServer;
    matchUrl: string[];
  }
  type ProxyScheme = "http" | "https" | "quic" | "socks4" | "socks5";
  interface ProxyServer {
    scheme?: ProxyScheme;
    host: string;
    port?: number;
  }
}
```

### CAT_clearProxy

> از انتشار پایدار 0.9.1 منسوخ شده است؛ ممکن است در آینده در یک نسخه بتا بازگردد.

پروکسی را پاک می‌کند.

```typescript
declare function CAT_clearProxy(): void;
```

### CAT_click

> از انتشار پایدار 0.9.1 منسوخ شده است؛ ممکن است در آینده در یک نسخه بتا بازگردد.

یک کلیک واقعی. این API آزمایشی است و ممکن است تغییر یا حذف شود.

با استفاده از [Input.dispatchMouseEvent](https://chromedevtools.github.io/devtools-protocol/tot/Input/#method-dispatchMouseEvent) پیاده‌سازی شده است. مطمئن شوید عنصر در ناحیه قابل مشاهده است و مختصات نسبت به موقعیت پنجره هستند.

```ts
declare function CAT_click(x: number, y: number): void;
```

### CAT_userConfig

می‌توانید این API را برای باز کردن صفحه [UserConfig](./config.md) اسکریپت فراخوانی کنید.

```ts
declare function CAT_userConfig(): void;
```

### CAT_fileStorage

سیستم ذخیره‌سازی پیکربندی‌شده توسط مدیر را کنترل می‌کند. یک دایرکتوری `app/uuid` برای استفاده این API ایجاد می‌شود؛ اگر پارامتر `baseDir` مشخص شده باشد، به جای آن به عنوان دایرکتوری پایه استفاده می‌شود.

```ts
/**
 * سیستم ذخیره‌سازی پیکربندی‌شده توسط مدیر را کنترل می‌کند. یک دایرکتوری app/uuid برای استفاده این API ایجاد می‌شود؛ اگر پارامتر baseDir مشخص شده باشد، به جای آن به عنوان دایرکتوری پایه استفاده می‌شود.
 * آپلودها به طور پیش‌فرض فایل‌های با همان نام را بازنویسی می‌کنند.
 * @param action نوع عملیات: list همه فایل‌های دایرکتوری داده‌شده را فهرست می‌کند، upload یک فایل را آپلود می‌کند، download یک فایل را دانلود می‌کند، delete یک فایل را حذف می‌کند، config صفحه پیکربندی را باز می‌کند. عملیات move/mkdir و مشابه هنوز ارائه نشده‌اند.
 * @param details
 */
declare function CAT_fileStorage(
  action: "list",
  details: {
    // مسیر فایل
    path?: string;
    // دایرکتوری پایه؛ اگر تنظیم نشده باشد، uuid اسکریپت به عنوان دایرکتوری استفاده می‌شود
    baseDir?: string;
    onload?: (files: CATType.FileStorageFileInfo[]) => void;
    onerror?: (error: CATType.FileStorageError) => void;
  }
): void;
declare function CAT_fileStorage(
  action: "download",
  details: {
    file: CATType.FileStorageFileInfo; // برخی پلتفرم‌ها هش فایل را نیاز دارند، بنابراین اطلاعات فایل باید داده شود
    onload: (data: Blob) => void;
    // onprogress?: (progress: number) => void;
    onerror?: (error: CATType.FileStorageError) => void;
    // public?: boolean;
  }
): void;
declare function CAT_fileStorage(
  action: "delete",
  details: {
    path: string;
    onload?: () => void;
    onerror?: (error: CATType.FileStorageError) => void;
    // public?: boolean;
  }
): void;
declare function CAT_fileStorage(
  action: "upload",
  details: {
    path: string;
    // دایرکتوری پایه؛ اگر تنظیم نشده باشد، uuid اسکریپت به عنوان دایرکتوری استفاده می‌شود
    baseDir?: string;
    data: Blob;
    onload?: () => void;
    // onprogress?: (progress: number) => void;
    onerror?: (error: CATType.FileStorageError) => void;
    // public?: boolean;
  }
): void;
declare function CAT_fileStorage(action: "config"): void;
```

### CAT_scriptLoaded

هنگام استفاده از `early-start`، می‌توانید از این تابع برای تعیین اینکه آیا اسکریپت به طور کامل بارگذاری شده است استفاده کنید.

```js
function CAT_scriptLoaded(): Promise<void>;

CAT_scriptLoaded().then(() => {
  console.log("اسکریپت به طور کامل بارگذاری شده است");
});
```

### CAT_createBlobUrl

یک URL blob از یک شیء Blob ایجاد کنید. ScriptCat چرخه عمر URL را مدیریت می‌کند.

```typescript
declare function CAT_createBlobUrl(blob: Blob): Promise<string>;
```

### CAT_fetchBlob

یک URL blob را دریافت کنید و داده Blob را برگردانید. کمکی برای پاسخ‌های جریانی `GM_xmlhttpRequest`.

```typescript
declare function CAT_fetchBlob(url: string): Promise<Blob>;
```

### CAT_fetchDocument

یک URL را دریافت کنید و آن را به عنوان یک Document تجزیه کنید (در زمینه صفحه محتوا اگر در دسترس باشد).

```typescript
declare function CAT_fetchDocument(url: string): Promise<Document | undefined>;
```

### CAT_registerMenuInput

یک آیتم منو با یک فیلد ورودی ثبت کنید که به کاربر اجازه می‌دهد مقداری وارد کند. بازخوانی ورودی کاربر را دریافت می‌کند.

```typescript
declare function CAT_registerMenuInput(
  name: string,
  listener?: (inputValue?: any) => void,
  options_or_accessKey?:
    | {
        id?: number | string;
        accessKey?: string;
        autoClose?: boolean;
        nested?: boolean;
        individual?: boolean;
        /** نوع ویجت ورودی. */
        inputType?: "text" | "number" | "boolean";
        /** عنوان گفتگو (برای پنجره بازشوی ورودی). */
        title?: string;
        /** برچسب نشان‌داده‌شده کنار ورودی. */
        inputLabel?: string;
        /** مقدار پیش‌فرض برای ورودی. */
        inputDefaultValue?: string | number | boolean;
        /** متن مکان‌نما. */
        inputPlaceholder?: string;
      }
    | string
): number;

/** لغو ثبت یک ورودی منو (نام مستعار `GM_unregisterMenuCommand`). */
declare const CAT_unregisterMenuInput: typeof GM_unregisterMenuCommand;
```
