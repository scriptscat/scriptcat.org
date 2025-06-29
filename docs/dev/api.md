---
id: api
---

# API 文档

## 说明

本扩展 API 定义参考 [Tampermonkey 文档](https://www.tampermonkey.net/documentation.php)，由于时间和精力问题，只实现了部分 API，后续将继续迭代。本扩展进行扩充或者与原 GM 不同的 API 将在文档中特殊标注（使用 * 号）。对于某些 API 还提供了同步函数，同步函数规则：`GM.*`，具体请看文档内容。

API 的详细定义，请看 `scriptcat.d.ts` 或者内置编辑器提示，文档更新可能不会及时。对于本扩展特有的 API，请看 [CatApi 文档](cat-api.md)。

另外可以在 [example](https://github.com/scriptscat/scriptcat/tree/main/example) 查看相关示例。

## 定义

### GM_info

获取脚本相关信息，包括元数据和运行环境参数。常用字段有 `scriptHandler`、`version`、`scriptMetaStr`、`scriptUpdateURL`、`downloadMode` 等。详细定义请参考 `scriptcat.d.ts`（并不完全）。

```js
console.log(GM_info.scriptHandler);
console.log(GM_info.version);
console.log(GM_info.scriptMetaStr);
```

* `isIncognito`, `sandboxMode`, `runAt`, `userAgentData` 未支持

### GM_cookie \*

异步操作页面 Cookie，支持跨域、HttpOnly 和分区。

> v0.17.0-alpha 后删除 store 与 tabid 相关的参数，现在会根据当前所在的窗口来决定获取隐身窗口还是普通窗口的 cookie。  
> v5.2+ 支持 Promise 风格 API。

必须使用 `@connect` 声明操作的 host，且经过用户授权才可使用。虽然兼容 TM 的 `GM_cookie.list` 操作，但是为了统一，不建议这样。

* `sameSite` 未支持

```typescript
declare function GM_cookie(
  action: GMTypes.CookieAction,
  details: GMTypes.CookieDetails,
  ondone: (cookie: GMTypes.Cookie[], error: any | undefined) => void
): void;

declare namespace GMTypes {
  type CookieAction = "list" | "delete" | "set";
  interface CookieDetails {
    url?: string;
    name: string;
    value?: string;
    domain?: string;
    path?: string;
    secure?: boolean;
    session?: boolean;
    httpOnly?: boolean;
    expirationDate?: number;
  }
  interface Cookie {
    domain: string;
    name: string;
    value: string;
    session: boolean;
    hostOnly: boolean;
    expirationDate?: number;
    path: string;
    httpOnly: boolean;
    secure: boolean;
  }
}

// Promise 形式
const cookies = await GM.cookie.list({ url: "https://example.com" });
await GM.cookie.set({ name: "foo", value: "bar", domain: "example.com" });
await GM.cookie.delete("foo", { domain: "example.com" });
```

**注意**：需在元信息中以 `@connect example.com` 声明允许域。

### GM_notification \*

发送消息通知，提供了 `progress` 和 `buttons` 的能力（Firefox 不支持），可以显示进度条类型和按钮类型的通知，多提供了 `GM_closeNotification`、`GM_updateNotification`（Firefox 不支持）两个方法。

[demo](https://bbs.tampermonkey.net.cn/thread-403-1-1.html)

```typescript
declare function GM_notification(
  details: GMTypes.NotificationDetails,
  ondone?: GMTypes.NotificationOnDone
): void;
declare function GM_notification(
  text: string,
  title: string,
  image: string,
  onclick: GMTypes.NotificationOnClick
): void;
declare function GM_closeNotification(id: string): void;
declare function GM_updateNotification(id: string, details: GMTypes.NotificationDetails): void;

declare namespace GMTypes {
  type NotificationOnClick = (this: NotificationThis, event: NotificationOnClickEvent) => unknown;
  type NotificationOnDone = (this: NotificationThis, user?: boolean) => unknown;
  
  interface NotificationButton {
    title: string;
    iconUrl?: string;
  }
  
  interface NotificationDetails {
    text?: string;
    title?: string;
    image?: string;
    highlight?: boolean;
    silent?: boolean;
    timeout?: number;
    onclick?: NotificationOnClick;
    ondone?: NotificationOnDone;
    progress?: number;
    oncreate?: NotificationOnClick;
    // 只能存在2个
    buttons?: NotificationButton[];
  }
}

```

```js
GM_notification({ title: "进度", text: "加载中", progress: 50 });
```

### GM_xmlhttpRequest \*

跨域 HTTP 请求，绕过 CSP，支持 `@connect` 声明域。部分功能缺失，cookie 功能 Firefox 暂不支持。需要用户授权才可正常访问，使用 `@connect` 描述的 host 可跳过用户授权，其它需要进行 ajax 操作的 API 同理。

对于 anonymous 和 cookie 相比 TM 做了特殊处理，anonymous 为 true 且 cookie 存在时，发送的 cookie 为设置的 cookie 不会带上其他 cookie。

特殊 header 也是支持的：

- user-agent
- origin
- referer
- cookie
- host
- ...

```typescript
declare function GM_xmlhttpRequest(details: GMTypes.XHRDetails): GMTypes.AbortHandle<void>;

declare namespace GMTypes {
  interface XHRResponse {
    finalUrl?: string;
    readyState?: 0 | 1 | 2 | 3 | 4;
    responseHeaders?: string;
    status?: number;
    statusText?: string;
    response?: any;
    responseText?: string;
    responseXML?: Document | null;
  }

  interface XHRProgress extends XHRResponse {
    done: number;
    lengthComputable: boolean;
    loaded: number;
    position: number;
    total: number;
    totalSize: number;
  }

  type Listener<OBJ> = (event: OBJ) => any;

  interface XHRDetails {
    method?: "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS";
    url: string;
    headers?: { [key: string]: string };
    data?: string | FormData;
    cookie?: string;
    binary?: boolean;
    timeout?: number;
    responseType?: "text" | "arraybuffer" | "blob" | "json" | "document" | "stream"; // stream 在当前版本是一个较为简陋的实现
    overrideMimeType?: string;
    anonymous?: boolean;
    fetch?: boolean;
    user?: string;
    password?: string;
    nocache?: boolean;
    redirect?: "follow" | "error" | "manual"; // 为了与tm保持一致, 在v0.17.0后废弃maxRedirects, 使用redirect替代, 会强制使用fetch模式
    
    onload?: Listener<XHRResponse>;
    onloadstart?: Listener<XHRResponse>;
    onloadend?: Listener<XHRResponse>;
    onprogress?: Listener<XHRProgress>;
    onreadystatechange?: Listener<XHRResponse>;
    ontimeout?: () => void;
    onabort?: () => void;
    onerror?: (err: string) => void;
  }
}
```

```js
GM_xmlhttpRequest({
  method: "GET",
  url: "https://api.example.com/data",
  onload: res => console.log(res.responseText)
});
```

### GM_log \*

日志函数，后台脚本的日志将在控制面板的运行日志中看到（点击运行状态栏）。相比于 TM 增加了一个日志的 level。

```typescript
declare function GM_log(message: string, level?: GMTypes.LoggerLevel): any;

declare namespace GMTypes {
  type LoggerLevel = "debug" | "info" | "warn" | "error";
}
```

```js
GM_log("调试信息", "debug");
```

### GM_get/set/deleteValue

从储存中获取或者设置值，数据在同一 [**storageName**](meta.md#storagename-%F0%9F%A7%AA) 中可以共享，且可以实时的同步。

```typescript
// 添加数据，请注意数据只能为 bool;string;number;object 四种类型，不能存储对象实例
declare function GM_setValue(name: string, value: any): void;
// 获取数据
declare function GM_getValue<T>(name: string, defaultValue?: T): T | undefined;
// 删除数据，再获取会返回 undefined 或 defaultValue
declare function GM_deleteValue(name: string): void;
```

```js
GM_setValue("foo", 42);
const v = GM_getValue("foo", 0);
GM_deleteValue("foo");
```

### GM_listValues

列出所有 key。

```typescript
declare function GM_listValues(): string[];
```

```js
console.log(GM_listValues());
```

### GM_setValues / GM_getValues / GM_deleteValues \*

批量存取 API（扩展）。

```typescript
declare function GM_setValues(values: Record<string, any>): void;
declare function GM_getValues(keysOrDefaults: Record<string, any>): Record<string, any>;
declare function GM_deleteValues(keys: string[]): void;
```

```js
// 批量设置
GM_setValues({ a: 1, b: 2 });
// 批量获取（不存在时返回默认）
const { a, b, c = 3 } = GM_getValues({ a: 0, b: 0, c: 3 });
// 批量删除
GM_deleteValues(["a", "b"]);
```

### GM_add/removeValueChangeListener

> tabid 于 0.17.0-alpha 后删除，详情见 [GM_cookie](#gm_cookie)

对值的监听操作，add 会返回一个监听 id，使用 remove 可以取消监听。可以使用这个方法实现一个简单的通信，使用 [**storageName**](meta.md#storagename-%F0%9F%A7%AA) 可以实现跨脚本通信。

```typescript
// tabid 是只有后台脚本监听才有的参数
type ValueChangeListener = (
  name: string,
  oldValue: any,
  newValue: any,
  remote: boolean,
  tabid?: number
) => any;

declare function GM_addValueChangeListener(
  name: string,
  listener: GMTypes.ValueChangeListener
): number;

declare function GM_removeValueChangeListener(listenerId: number): void;
```

```js
const id = GM_addValueChangeListener("foo", (k, oldV, newV, remote) => {
  console.log(k, oldV, newV, remote);
});
GM_removeValueChangeListener(id);
```

### GM_openInTab \*

打开一个新窗口。

```typescript
declare function GM_openInTab(
  url: string,
  options?: GMTypes.OpenTabOptions
): { close: () => void; onclose: () => void; closed: boolean };
declare function GM_openInTab(
  url: string,
  loadInBackground: boolean
): { close: () => void; onclose: () => void; closed: boolean };
declare function GM_openInTab(url: string): { close: () => void; onclose: () => void; closed: boolean };

declare namespace GMTypes {
  interface OpenTabOptions {
    active?: boolean;
    insert?: boolean;
    setParent?: boolean;
    useOpen?: boolean; // 这是一个实验性/不兼容其他管理器/不兼容Firefox的功能 表示使用window.open打开新窗口 #178
  }
}
```

```js
const tab = GM_openInTab("https://example.com", { active: false });
tab.onclose = () => console.log("已关闭");
tab.close();
```

### GM_get/saveTab/GM_getTabs

类似 `GM_setValue` 的一个储存数据的方法，但是本方法的生命周期为一个浏览器页面窗口的打开->关闭，后台脚本中无法使用。

```typescript
// 获取tab数据
declare function GM_getTab(callback: (obj: object) => void): void;
// 保存tab数据
declare function GM_saveTab(obj: object, callback?: () => void): void;
// 获取所有tab数据
declare function GM_getTabs(callback: (objs: { [key: number]: object }) => void): void;
```

```js
GM_saveTab({ foo: 1 }, () => console.log("已保存"));
GM_getTab(tab => console.log(tab));
GM_getTabs(tabs => console.log(tabs));
```

### GM_setClipboard

设置剪辑板。

```typescript
declare function GM_setClipboard(
  data: string | Blob,
  info?: string | { type?: string; mimetype?: string },
  callback?: () => void
): void;
```

```js
GM_setClipboard("Hello World", "text", () => console.log("复制完成"));
```

### GM_addStyle

添加样式到页面中，返回样式 DOM。

```typescript
declare function GM_addStyle(css: string): HTMLElement;
```

```js
GM_addStyle(`
  body { background: #f0f0f0; }
  .btn { color: red; }
`);
```

### GM_registerMenuCommand

注册一个菜单选项到弹出页面中，点击时会调用 `listener` 方法，如果注册多个同名菜单，则只会第一个生效。

```typescript
declare function GM_registerMenuCommand(
  name: string,
  listener: () => void,
  optionsOrAccessKey?:
    | string
    | {
        id?: number | string;
        accessKey?: string;
        autoClose?: boolean;
        title?: string;
      }
): number;
```

```js
const cmdId = GM_registerMenuCommand("测试命令", () => alert("调用"));
```

### GM_unregisterMenuCommand

通过 id 删除一个已经注册了的菜单项。

```typescript
declare function GM_unregisterMenuCommand(id: number): void;
```

```js
GM_unregisterMenuCommand(cmdId);
```

### GM_getResourceText/GM_getResourceURL

获取 `@resource` 声明的资源信息。

```typescript
// GM_getResourceText 获取资源文本数据，image 等 byte 类型的数据会返回空文本，需要使用 GM_getResourceURL 获取
declare function GM_getResourceText(name: string): string | undefined;
// GM_getResourceURL 获取经过 base64 后的数据，也可以通过第二个参数获取 blob url
declare function GM_getResourceURL(name: string, isBlobUrl?: boolean): string | undefined;
```

```js
const css = GM_getResourceText("mystyle");
const imgUrl = GM_getResourceURL("logo");
```

### GM_download

下载文件，可设置 header 等内容，相比 TM 多了 cookie 和 anonymous 的功能。如果为 blob url，将会直接打开下载，只有 onload 事件，这是与 TM 不同的一个特性（为后台脚本无法创建下载而服务，可能会在一些生成报表的场景使用到）。

```typescript
declare function GM_download(details: GMTypes.DownloadDetails): GMTypes.AbortHandle<boolean>;
declare function GM_download(url: string, filename: string): GMTypes.AbortHandle<boolean>;

declare namespace GMTypes {
  interface DownloadError {
    error:
      | "not_enabled"
      | "not_whitelisted"
      | "not_permitted"
      | "not_supported"
      | "not_succeeded"
      | "unknown";
    details?: string;
  }

  interface DownloadDetails {
    method?: "GET" | "POST";
    url: string;
    name: string;
    headers?: { [key: string]: string };
    saveAs?: boolean;
    timeout?: number;
    cookie?: string;
    anonymous?: boolean;

    onerror?: Listener<DownloadError>;
    ontimeout?: () => void;
    onload?: Listener<object>;
    onprogress?: Listener<XHRProgress<void>>;
  }
}
```

```js
// 回调形式
const dl = GM_download({ url: "https://example.com/file.zip", name: "file.zip", onload: () => alert("完成") });
dl.abort();

// Promise 形式
await GM.download("https://example.com/img.png", "img.png");
```

### GM_addElement

在页面中插入元素，可以绕过 CSP 限制。

```typescript
declare function GM_addElement(tag: string, attributes: any): HTMLElement;
declare function GM_addElement(parentNode: Element, tag: string, attrs: any): HTMLElement;
```

```js
// 插入脚本
GM_addElement("script", { src: "https://example.com/app.js" });
// 插入样式
GM_addElement(document.head, "style", { textContent: ".foo{color:blue}" });
```
