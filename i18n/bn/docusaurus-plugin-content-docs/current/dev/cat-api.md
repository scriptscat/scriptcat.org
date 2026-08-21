---
title: CatApi ডকুমেন্টেশন
---

## ওভারভিউ

এই এক্সটেনশনের জন্য নির্দিষ্ট API-গুলো সব `CAT_` দিয়ে শুরু হয়ে সংজ্ঞায়িত।

আপনি [উদাহরণ ডিরেক্টরিতে](https://github.com/scriptscat/scriptcat/tree/main/example) সম্পর্কিত উদাহরণও খুঁজে পেতে পারেন।

## সংজ্ঞা

### CAT_setProxy

> 0.9.1 স্থিতিশীল রিলিজ থেকে অবচিত; ভবিষ্যতে একটি বিটা সংস্করণে ফিরে আসতে পারে।

একটি প্রক্সি সেট করে। মনে রাখবেন এই ফিচারটি Proxy SwitchyOmega-এর মতো এক্সটেনশনের সাথে সংঘর্ষ করবে। একাধিক স্ক্রিপ্ট দ্বন্দ্ব ছাড়াই একটি প্রক্সি ব্যবহার করতে পারে (উদাহরণস্বরূপ, একটি স্ক্রিপ্ট Google অ্যাক্সেস প্রদান করে এবং অন্যটি Twitter অ্যাক্সেস প্রদান করে)।

আগে দয়া করে [PAC](https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) এবং [Chromium-এর PAC-এ সম্পূর্ণ URL বিধিনিষেধ](https://github.com/FelisCatus/SwitchyOmega/wiki/Chromium-Full-URL-Restriction) সম্পর্কে পড়ুন।

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

> 0.9.1 স্থিতিশীল রিলিজ থেকে অবচিত; ভবিষ্যতে একটি বিটা সংস্করণে ফিরে আসতে পারে।

প্রক্সি মুছে দেয়।

```typescript
declare function CAT_clearProxy(): void;
```

### CAT_click

> 0.9.1 স্থিতিশীল রিলিজ থেকে অবচিত; ভবিষ্যতে একটি বিটা সংস্করণে ফিরে আসতে পারে।

একটি প্রকৃত ক্লিক। এই API টি পরীক্ষামূলক এবং পরিবর্তন বা অপসারণ হতে পারে।

[Input.dispatchMouseEvent](https://chromedevtools.github.io/devtools-protocol/tot/Input/#method-dispatchMouseEvent) ব্যবহার করে বাস্তবায়িত। নিশ্চিত করুন যে এলিমেন্টটি দৃশ্যমান এলাকার মধ্যে আছে, এবং স্থানাঙ্কগুলো উইন্ডোর অবস্থানের সাপেক্ষে।

```ts
declare function CAT_click(x: number, y: number): void;
```

### CAT_userConfig

আপনি এই API কল করে স্ক্রিপ্টের [UserConfig](./config.md) পেজ খুলতে পারেন।

```ts
declare function CAT_userConfig(): void;
```

### CAT_fileStorage

ম্যানেজার দ্বারা কনফিগার করা স্টোরেজ সিস্টেম নিয়ন্ত্রণ করে। এই API ব্যবহারের জন্য একটি `app/uuid` ডিরেক্টরি তৈরি করা হবে; `baseDir` প্যারামিটার নির্দিষ্ট করা থাকলে, সেটির পরিবর্তে সেটি বেস ডিরেক্টরি হিসেবে ব্যবহৃত হবে।

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

`early-start` ব্যবহার করার সময়, স্ক্রিপ্টটি সম্পূর্ণরূপে লোড হয়েছে কিনা তা নির্ধারণ করতে আপনি এই ফাংশনটি ব্যবহার করতে পারেন।

```js
function CAT_scriptLoaded(): Promise<void>;

CAT_scriptLoaded().then(() => {
  console.log("Script has fully loaded");
});
```

### CAT_createBlobUrl

একটি Blob অবজেক্ট থেকে একটি ব্লব URL তৈরি করুন। ScriptCat URL-এর লাইফসাইকেল পরিচালনা করে।

```typescript
declare function CAT_createBlobUrl(blob: Blob): Promise<string>;
```

### CAT_fetchBlob

একটি ব্লব URL ফেচ করুন এবং Blob ডেটা ফেরত দিন। `GM_xmlhttpRequest` স্ট্রিম রেসপন্সের জন্য হেল্পার।

```typescript
declare function CAT_fetchBlob(url: string): Promise<Blob>;
```

### CAT_fetchDocument

একটি URL ফেচ করুন এবং এটি একটি Document হিসেবে পার্স করুন (উপলব্ধ থাকলে কনটেন্ট পেজ কনটেক্সটে)।

```typescript
declare function CAT_fetchDocument(url: string): Promise<Document | undefined>;
```

### CAT_registerMenuInput

একটি ইনপুট ফিল্ডসহ একটি মেনু আইটেম নিবন্ধন করুন, যা ব্যবহারকারীকে একটি মান প্রবেশ করতে দেয়। কলব্যাক ব্যবহারকারীর ইনপুট গ্রহণ করে।

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
        /** Input widget type. */
        inputType?: "text" | "number" | "boolean";
        /** Dialog title (for the input popup). */
        title?: string;
        /** Label shown next to the input. */
        inputLabel?: string;
        /** Default value for the input. */
        inputDefaultValue?: string | number | boolean;
        /** Placeholder text. */
        inputPlaceholder?: string;
      }
    | string
): number;

/** Unregister a menu input (alias of `GM_unregisterMenuCommand`). */
declare const CAT_unregisterMenuInput: typeof GM_unregisterMenuCommand;
```
