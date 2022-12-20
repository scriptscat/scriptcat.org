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

> 0.11.0-beta 加入

你可以调用此 API 打开脚本的[用户配置](./config.md)页面

```ts
declare function CAT_userConfig(): void;
```

### CAT_fileStorage🧪

> 0.11.0加入

操控脚本同步配置的文件储存源,将会在同步目录下创建一个app/uuid目录供此 API 使用,上传时默认覆盖同名文件.
请注意这是一个试验性质的 API, 后续可能会改变

```ts
declare function CAT_fileStorage(
  action: "list"|"upload"|"donwload"|"delete",
  details: {
    path?: string; 
    onload?: (files: CATType.FileStorageFileInfo[]) => void;
    onerror?: (error: CATType.FileStorageError) => void;
  }
): void;
```
