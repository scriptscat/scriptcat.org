---
title: وثائق CatApi
---

## مقدمة

يتم تعريف واجهات البرمجة (APIs) الخاصة بهذه الإضافة بالبدء بـ `CAT_`.

يمكنك أيضاً الاطلاع على أمثلة ذات صلة في [دليل الأمثلة](https://github.com/scriptscat/scriptcat/tree/main/example).

## التعريفات

### CAT_setProxy

> تم إهماله منذ الإصدار المستقر 0.9.1؛ قد يعود في إصدار تجريبي في المستقبل.

يضبط وكيل (Proxy). لاحظ أن هذه الميزة قد تتعارض مع إضافات مثل Proxy SwitchyOmega. يمكن لعدة سكرپتات استخدام وكيل دون تعارض (مثلاً، سكرپت يوفر الوصول إلى Google وآخر يوفر الوصول إلى Twitter).

يرجى أولاً قراءة [PAC](https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) و[قيود Chromium على عناوين URL الكاملة في PAC](https://github.com/FelisCatus/SwitchyOmega/wiki/Chromium-Full-URL-Restriction).

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

> تم إهماله منذ الإصدار المستقر 0.9.1؛ قد يعود في إصدار تجريبي في المستقبل.

يمسح الوكيل.

```typescript
declare function CAT_clearProxy(): void;
```

### CAT_click

> تم إهماله منذ الإصدار المستقر 0.9.1؛ قد يعود في إصدار تجريبي في المستقبل.

نقرة حقيقية. هذه الواجهة تجريبية وقد تتغير أو تُزال.

تم تنفيذها باستخدام [Input.dispatchMouseEvent](https://chromedevtools.github.io/devtools-protocol/tot/Input/#method-dispatchMouseEvent). تأكد من أن العنصر ضمن المنطقة المرئية وأن الإحداثيات نسبية لموضع النافذة.

```ts
declare function CAT_click(x: number, y: number): void;
```

### CAT_userConfig

يمكنك استدعاء هذه الواجهة لفتح صفحة [UserConfig](./config.md) الخاصة بالسكرپت.

```ts
declare function CAT_userConfig(): void;
```

### CAT_fileStorage

يتحكم في نظام التخزين الذي تم إعداده في المدير. سيتم إنشاء دليل `app/uuid` لاستخدام هذه الواجهة؛ إذا تم تحديد معامل `baseDir`، فسيُستخدم كدليل أساسي بدلاً من ذلك.

```ts
/**
 * Controls the storage system configured by the manager. An app/uuid directory will be created for this API to use; if the baseDir parameter is specified, it will be used as the base directory instead.
 * Uploads overwrite files with the same name by default.
 * @param action Operation type: list lists all files in the given directory, upload uploads a file, download downloads a file, delete deletes a file, config opens the config page. move/mkdir and similar operations are not yet provided.
 * @param details
 */
declare function CAT_fileStorage(
  action: "list",
  details: {
    // File path
    path?: string;
    // Base directory; if not set, the script's uuid is used as the directory
    baseDir?: string;
    onload?: (files: CATType.FileStorageFileInfo[]) => void;
    onerror?: (error: CATType.FileStorageError) => void;
  }
): void;
declare function CAT_fileStorage(
  action: "download",
  details: {
    file: CATType.FileStorageFileInfo; // Some platforms require the file's hash, so the file info must be passed in
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
    // Base directory; if not set, the script's uuid is used as the directory
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

عند استخدام `early-start`، يمكنك استخدام هذه الدالة لتحديد ما إذا كان السكرپت قد تم تحميله بالكامل.

```js
function CAT_scriptLoaded(): Promise<void>;

CAT_scriptLoaded().then(() => {
  console.log("Script has fully loaded");
});
```

### CAT_createBlobUrl

ينشئ عنوان blob URL من كائن Blob. تدير ScriptCat دورة حياة العنوان.

```typescript
declare function CAT_createBlobUrl(blob: Blob): Promise<string>;
```

### CAT_fetchBlob

يجلب عنوان blob URL ويعيد بيانات Blob. دالة مساعدة لاستجابات `GM_xmlhttpRequest` المتدفقة.

```typescript
declare function CAT_fetchBlob(url: string): Promise<Blob>;
```

### CAT_fetchDocument

يجلب عنوان URL ويحلله كمستند Document (في سياق صفحة المحتوى إذا كان متاحاً).

```typescript
declare function CAT_fetchDocument(url: string): Promise<Document | undefined>;
```

### CAT_registerMenuInput

تسجيل مربع إدخال في القائمة، مما يسمح للمستخدمين بإدخال القيم وتنفيذ وظيفة استدعاء (callback).

```typescript
declare function CAT_registerMenuInput(
  name: string,
  listener?: (inputValue?: any) => void,
  options_or_accessKey?: {
        id?: number | string;
        title?: string;
        accessKey?: string;
        autoClose?: boolean;
        type?: "text" | "password" | "number";
        defaultValue?: string;
      }
    | string
): number;
```
