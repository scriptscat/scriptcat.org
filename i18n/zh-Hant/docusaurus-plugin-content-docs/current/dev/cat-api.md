---
title: CatApi 文件
---

## 概覽

此擴充功能特有的 API 全部以 `CAT_` 開頭定義。

您也可以在 [example 目錄](https://github.com/scriptscat/scriptcat/tree/main/example) 找到相關範例。

## 定義

### CAT_setProxy

> 自 0.9.1 穩定版起已棄用；可能在測試版中回歸。

設定代理。請注意此功能會與 Proxy SwitchyOmega 等擴充功能衝突。多個腳本可以使用代理而不會衝突。

請先閱讀 [PAC](https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) 和 [Chromium 在 PAC 中的完整 URL 限制](https://github.com/FelisCatus/SwitchyOmega/wiki/Chromium-Full-URL-Restriction)。

```typescript
declare function CAT_setProxy(rule: CAT_Types.ProxyRule[] | string): void;

declare namespace CAT_Types {
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

> 自 0.9.1 穩定版起已棄用；可能在測試版中回歸。

清除代理。

```typescript
declare function CAT_clearProxy(): void;
```

### CAT_click

> 自 0.9.1 穩定版起已棄用；可能在測試版中回歸。

真實點擊。此 API 為實驗性，可能會變更或被移除。

使用 [Input.dispatchMouseEvent](https://chromedevtools.github.io/devtools-protocol/tot/Input/#method-dispatchMouseEvent) 實作。請確保元素位於可見區域內，且座標相對於視窗位置。

```ts
declare function CAT_click(x: number, y: number): void;
```

### CAT_userConfig

您可以呼叫此 API 來開啟腳本的 [UserConfig](./config.md) 頁面。

```ts
declare function CAT_userConfig(): void;
```

### CAT_fileStorage

控制管理器設定的儲存系統。此 API 會建立 `app/uuid` 目錄。

```ts
/**
 * 控制管理器設定的儲存系統。
 * @param action 操作類型：list、upload、download、delete、config
 * @param details
 */
declare function CAT_fileStorage(
  action: "list",
  details: {
    path?: string;
    baseDir?: string;
    onload?: (files: CATType.FileStorageFileInfo[]) => void;
    onerror?: (error: CATType.FileStorageError) => void;
  }
): void;
declare function CAT_fileStorage(
  action: "download",
  details: {
    file: CATType.FileStorageFileInfo;
    onload: (data: Blob) => void;
    onerror?: (error: CATType.FileStorageError) => void;
  }
): void;
declare function CAT_fileStorage(
  action: "delete",
  details: {
    path: string;
    onload?: () => void;
    onerror?: (error: CATType.FileStorageError) => void;
  }
): void;
declare function CAT_fileStorage(
  action: "upload",
  details: {
    path: string;
    baseDir?: string;
    data: Blob;
    onload?: () => void;
    onerror?: (error: CATType.FileStorageError) => void;
  }
): void;
declare function CAT_fileStorage(action: "config"): void;
```

### CAT_scriptLoaded

使用 `early-start` 時，您可以使用此函數來判斷腳本是否已完全載入。

```js
function CAT_ScriptLoaded(): Promise<void>;

CAT_scriptLoaded().then(() => {
  console.log("腳本已完全載入");
});
```
