---
title: CatApi Documentation
---

## Overview

APIs specific to this extension are all defined starting with `CAT_`.

You can also find related examples in the [example directory](https://github.com/scriptscat/scriptcat/tree/main/example).

## Definitions

### CAT_setProxy

> Deprecated as of the 0.9.1 stable release; may return in a beta version in the future.

Sets a proxy. Note that this feature will conflict with extensions like Proxy SwitchyOmega. Multiple scripts can use a proxy without conflicting (for example, one script providing Google access and another providing Twitter access).

Please first read up on [PAC](https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) and [Chromium's full URL restrictions in PAC](https://github.com/FelisCatus/SwitchyOmega/wiki/Chromium-Full-URL-Restriction).

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

> Deprecated as of the 0.9.1 stable release; may return in a beta version in the future.

Clears the proxy.

```typescript
declare function CAT_clearProxy(): void;
```

### CAT_click

> Deprecated as of the 0.9.1 stable release; may return in a beta version in the future.

A real click. This API is experimental and may change or be removed.

Implemented using [Input.dispatchMouseEvent](https://chromedevtools.github.io/devtools-protocol/tot/Input/#method-dispatchMouseEvent). Make sure the element is within the visible area, and that the coordinates are relative to the window's position.

```ts
declare function CAT_click(x: number, y: number): void;
```

### CAT_userConfig

You can call this API to open the script's [UserConfig](./config.md) page.

```ts
declare function CAT_userConfig(): void;
```

### CAT_fileStorage

Controls the storage system configured by the manager. An `app/uuid` directory will be created for this API to use; if the `baseDir` parameter is specified, it will be used as the base directory instead.

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

When using `early-start`, you can use this function to determine whether the script has fully loaded.

```js
function CAT_scriptLoaded(): Promise<void>;

CAT_scriptLoaded().then(() => {
  console.log("Script has fully loaded");
});
```

### CAT_createBlobUrl

Create a blob URL from a Blob object. ScriptCat manages the URL lifecycle.

```typescript
declare function CAT_createBlobUrl(blob: Blob): Promise<string>;
```

### CAT_fetchBlob

Fetch a blob URL and return the Blob data. Helper for `GM_xmlhttpRequest` stream responses.

```typescript
declare function CAT_fetchBlob(url: string): Promise<Blob>;
```

### CAT_fetchDocument

Fetch a URL and parse it as a Document (in the content page context if available).

```typescript
declare function CAT_fetchDocument(url: string): Promise<Document | undefined>;
```

### CAT_registerMenuInput

Register a menu item with an input field, allowing the user to enter a value. The callback receives the user's input.

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

