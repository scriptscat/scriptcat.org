# API 文档
## 说明

本扩展api定义参考[tampermonkey文档](https://www.tampermonkey.net/documentation.php),由于时间和精力问题,只实现了部分API,后续将继续迭代,本扩展进行扩充或者与原GM不同的API将在文档中特殊标注(使用\*号).对于某些API还提供了同步函数,同步函数规则:GM.*,具体请看文档内容.

API的详细定义,请看`tempermonkey.d.ts`或者内置编辑器提示,文档更新可能不会及时.对于本扩展特有的API请看[CatApi文档](cat-api.md)

## 定义


### GM_cookie *

> 部分功能缺失,暂只支持list操作,本扩展特供,只能在后台脚本中使用,必须使用`@connect`声明操作的host,且经过用户授权才可使用.

```typescript
declare function GM_cookie(action: GM_Types.CookieAction, details: GM_Types.CookieDetails, ondone: (cookie: GM_Types.Cookie[] | any, error: any | undefined) => void): void;

declare namespace GM_Types {
    type CookieAction = "list" | "delete" | "set";
    interface CookieDetails {
        url?: string
        name?: string
        value?: string
        domain?: string
        path?: string
        secure?: boolean
        httpOnly?: boolean
        expirationDate?: number
    }
    interface Cookie {
        domain: string;
        name: string;
        storeId: string;
        value: string;
        session: boolean;
        hostOnly: boolean;
        expirationDate?: number;
        path: string;
        httpOnly: boolean;
        secure: boolean;
    }
}
```

### GM_notification *

> 发送消息通知,提供了`progress`和`buttons`的能力(Firefox不支持),可以显示进度条类型和按钮类型的通知,多提供了`GM_closeNotification`,`GM_updateNotification`(Firefox不支持)两个方法.
>
> [demo](https://bbs.tampermonkey.net.cn/thread-403-1-1.html)



```typescript
declare function GM_notification(details: GM_Types.NotificationDetails, ondone: Function): void;
declare function GM_notification(text: string, title: string, image: string, onclick: Function): void;
declare function GM_closeNotification(id: string): void;
declare function GM_updateNotification(id: string, details: GM_Types.NotificationDetails): void;

declare namespace GM_Types {

    type NotificationOnClick = (this: NotificationThis, id: string, index?: number) => any;
    type NotificationOnDone = (this: NotificationThis, clicked: boolean, id: string) => any;

    interface NotificationButton {
        title: string
        iconUrl?: string
    }

    interface NotificationDetails {
        text?: string
        title?: string
        image?: string
        highlight?: boolean
        silent?: boolean
        timeout?: number
        onclick?: NotificationOnClick
        ondone?: NotificationOnDone
        progress?: number
        oncreate?: NotificationOnClick
        // 只能存在2个
        buttons?: NotificationButton[]
    }

}
```

### GM_xmlhttpRequest

> 部分功能缺失,cookie功能firefox暂不支持,需要用户授权才可正常访问,使用`@connect`描述的host可跳过用户授权,其它需要进行ajax操作的API同理.

```typescript
declare function GM_xmlhttpRequest(details: GM_Types.XHRDetails): GM_Types.AbortHandle<void>;

declare namespace GM_Types {
    interface XHRResponse {
        finalUrl?: string,
        readyState?: 0 | 1 | 2 | 3 | 4,
        responseHeaders?: string,
        status?: number,
        statusText?: string,
        response?: any,
        responseText?: string,
        responseXML?: Document | null
    }

    interface XHRProgress extends XHRResponse {
        done: number,
        lengthComputable: boolean,
        loaded: number,
        position: number,
        total: number,
        totalSize: number
    }

    type Listener<OBJ> = (event: OBJ) => any;

    interface XHRDetails {
        method?: "GET" | "HEAD" | "POST",
        url?: string,
        headers?: { readonly [key: string]: string },
        data?: string,
        binary?: boolean,
        timeout?: number,
        context?: CONTEXT_TYPE,
        responseType?: "arraybuffer" | "blob" | "json",
        overrideMimeType?: string,
        anonymous?: boolean,
        fetch?: boolean,
        username?: string,
        password?: string,

        onload?: Listener<XHRResponse>,
        onloadstart?: Listener<XHRResponse>,
        onloadend?: Listener<XHRResponse>,
        onprogress?: Listener<XHRProgress>,
        onreadystatechange?: Listener<XHRResponse>,
        ontimeout?: Function,
        onabort?: Function,
        onerror?: Function
    }
}
```

### GM_log *
> 日志函数,后台脚本的日志将在控制面板的运行日志中看到(点击运行状态栏).相比于tm增加了一个日志的level.

```typescript
declare function GM_log(message: string, level?: GM_Types.LOGGER_LEVEL): any;
declare namespace GM_Types {
    type LOGGER_LEVEL = 'debug' | 'info' | 'warn' | 'error';
}
```

### GM_get/set/deleteValue
> 从储存中获取或者设置值,数据在同一`namespace`中可以共享,且可以实时的同步.

```ts
declare function GM_setValue(name: string, value: any): void;

declare function GM_getValue(name: string, defaultValue?: any): any;

declare function GM_deleteValue(name: string): void;
```

### GM_add/removeValueChangeListener
> 对值的监听操作,add会返回一个监听id,使用remove可以取消监听

```ts
declare function GM_addValueChangeListener(name: string, listener: GM_Types.ValueChangeListener): number;

declare function GM_removeValueChangeListener(listenerId: number): void;
```

### GM_openInTab
> 打开一个新窗口

```ts
declare function GM_openInTab(url: string, options: GM_Types.OpenTabOptions): void;
declare function GM_openInTab(url: string, loadInBackground: boolean): void;
declare function GM_openInTab(url: string): void

declare namespace GM_Types {
    interface OpenTabOptions {
        active?: boolean,
        insert?: boolean,
        setParent?: boolean
    }
}
```

### GM_setClipboard
> 设置剪辑板

```ts
declare function GM_setClipboard(data: string, info?: string | { type?: string, minetype?: string }): void;
```

### GM_addStyle
> 添加样式到页面中,返回样式DOM

```ts
declare function GM_addStyle(css: string): HTMLElement;
```

### GM_registerMenuCommand
> 注册一个菜单选项到弹出页面中,点击时会调用`listener`方法

```ts
declare function GM_registerMenuCommand(name: string, listener: Function, accessKey?: string): number;
```

### GM_unregisterMenuCommand
> 通过id删除一个已经注册了的菜单项

```ts
declare function GM_unregisterMenuCommand(id: number): void;
```

