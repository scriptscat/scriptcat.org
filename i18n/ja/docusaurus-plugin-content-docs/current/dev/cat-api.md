---
title: CatApi ドキュメント
---

## 概要

この拡張機能固有の API はすべて `CAT_` で始まる名前で定義されています。

関連する例は [example ディレクトリ](https://github.com/scriptscat/scriptcat/tree/main/example) でも確認できます。

## 定義

### CAT_setProxy

> 0.9.1 正式リリース以降非推奨です。将来のベータ版で復帰する可能性があります。

プロキシを設定します。この機能は Proxy SwitchyOmega のような拡張機能と競合します。複数のスクリプトがプロキシを使用しても競合しません（例えば、あるスクリプトが Google アクセスを提供し、別のスクリプトが Twitter アクセスを提供する場合など）。

まず [PAC](https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) と [Chromium の PAC における完全 URL 制限](https://github.com/FelisCatus/SwitchyOmega/wiki/Chromium-Full-URL-Restriction) をお読みください。

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

> 0.9.1 正式リリース以降非推奨です。将来のベータ版で復帰する可能性があります。

プロキシをクリアします。

```typescript
declare function CAT_clearProxy(): void;
```

### CAT_click

> 0.9.1 正式リリース以降非推奨です。将来のベータ版で復帰する可能性があります。

実際のクリック操作です。この API は実験的であり、変更または削除される可能性があります。

[Input.dispatchMouseEvent](https://chromedevtools.github.io/devtools-protocol/tot/Input/#method-dispatchMouseEvent) を使用して実装されています。要素が表示区域内にあり、座標がウィンドウの位置を基準にしていることを確認してください。

```ts
declare function CAT_click(x: number, y: number): void;
```

### CAT_userConfig

この API を呼び出すと、スクリプトの [UserConfig](./config.md) ページを開けます。

```ts
declare function CAT_userConfig(): void;
```

### CAT_fileStorage

マネージャーが設定したストレージシステムを制御します。この API 用に `app/uuid` ディレクトリが作成されます。`baseDir` パラメータが指定された場合は、それがベースディレクトリとして使用されます。

```ts
/**
 * マネージャーが設定したストレージシステムを制御します。この API 用に app/uuid ディレクトリが作成されます。baseDir パラメータが指定された場合は、それがベースディレクトリとして使用されます。
 * アップロードはデフォルトで同じ名前のファイルを上書きします。
 * @param action 操作タイプ: list は指定ディレクトリ内のすべてのファイルを一覧表示、upload はファイルのアップロード、download はファイルのダウンロード、delete はファイルの削除、config は設定ページを開きます。move/mkdir などの操作はまだ提供されていません。
 * @param details
 */
declare function CAT_fileStorage(
  action: "list",
  details: {
    // ファイルパス
    path?: string;
    // ベースディレクトリ; 未設定の場合はスクリプトの uuid がディレクトリとして使用されます
    baseDir?: string;
    onload?: (files: CATType.FileStorageFileInfo[]) => void;
    onerror?: (error: CATType.FileStorageError) => void;
  }
): void;
declare function CAT_fileStorage(
  action: "download",
  details: {
    file: CATType.FileStorageFileInfo; // 一部のプラットフォームではファイルのハッシュが必要なため、ファイル情報を渡す必要があります
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
    // ベースディレクトリ; 未設定の場合はスクリプトの uuid がディレクトリとして使用されます
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

`early-start` を使用する場合、この関数を使用してスクリプトが完全に読み込まれたかどうかを判断できます。

```js
function CAT_ScriptLoaded(): Promise<void>;

CAT_scriptLoaded().then(() => {
  console.log("スクリプトが完全に読み込まれました");
});
```
