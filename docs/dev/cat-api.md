---
id: cat-api
---

# CatApi 文档

## 说明

本扩展特有的 API 将会以 CAT\_ 开头进行定义.

另外可以在[example](https://github.com/scriptscat/scriptcat/tree/main/example)查看相关示例

## 定义

### CAT_setProxy

> 0.9.1 正式版已废弃,未来可能加入 beta 版本

设置代理,请注意本功能会与 Proxy SwitchyOmega 类型的扩展冲突.可以多个脚本使用代理,不会产生冲突.(例如一个脚本提供 Google
访问,一个脚本提供推特访问)

请先了解[PAC](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file)和[PAC 中 Chromium 完整网址限制](https://github.com/FelisCatus/SwitchyOmega/wiki/Chromium-%E5%AE%8C%E6%95%B4%E7%BD%91%E5%9D%80%E9%99%90%E5%88%B6)

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

> 0.9.1 正式版已废弃,未来可能加入 beta 版本

清理代理

```typescript
declare function CAT_clearProxy(): void;
```

### CAT_click

> 0.9.1 正式版已废弃,未来可能加入 beta 版本

真实点击,此 API 是测试性的,可能会修改和移除

使用了[Input.dispatchMouseEvent](https://chromedevtools.github.io/devtools-protocol/tot/Input/#method-dispatchMouseEvent)实现,请确认元素在可视区域内,且坐标是相对于窗口的位置.

```ts
declare function CAT_click(x: number, y: number): void;
```

### CAT_userConfig

你可以调用此 API 打开脚本的[用户配置](./config.md)页面

```ts
declare function CAT_userConfig(): void;
```

### CAT_fileStorage

操控管理器设置的储存系统,将会在目录下创建一个app/uuid目录供此 API 使用,如果指定了baseDir参数,则会使用baseDir作为基础目录

```ts
/**
 * 操控管理器设置的储存系统,将会在目录下创建一个app/uuid目录供此 API 使用,如果指定了baseDir参数,则会使用baseDir作为基础目录
 * 上传时默认覆盖同名文件
 * @param action 操作类型 list 列出指定目录所有文件, upload 上传文件, download 下载文件, delete 删除文件, config 打开配置页, 暂时不提供move/mkdir等操作
 * @param details
 */
declare function CAT_fileStorage(
  action: "list",
  details: {
    // 文件路径
    path?: string;
    // 基础目录,如果未设置,则将脚本uuid作为目录
    baseDir?: string;
    onload?: (files: CATType.FileStorageFileInfo[]) => void;
    onerror?: (error: CATType.FileStorageError) => void;
  }
): void;
declare function CAT_fileStorage(
  action: "download",
  details: {
    file: CATType.FileStorageFileInfo; // 某些平台需要提供文件的hash值,所以需要传入文件信息
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
    // 基础目录,如果未设置,则将脚本uuid作为目录
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

当使用了 `early-start` 时，你可以使用此函数来判断脚本是否完全加载

```js
function CAT_ScriptLoaded(): Promise<void>;

CAT_scriptLoaded().then(() => {
  console.log("脚本完全加载完成");
});
```