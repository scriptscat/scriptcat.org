---
id: api
---

# API Documentation

## Description

This extension's API definition references [Tampermonkey documentation](https://www.tampermonkey.net/documentation.php). Due to time and resource constraints, only some APIs have been implemented, with continued iteration planned. APIs that are extended by this extension or differ from the original GM will be specially marked in the documentation (using * symbol). For some APIs, synchronous functions are also provided, following the rule: `GM.*`. Please see the documentation content for details.

For detailed API definitions, please refer to `scriptcat.d.ts` or the built-in editor hints, as documentation updates may not be timely. For APIs unique to this extension, please see [CatApi Documentation](cat-api.md).

You can also view related examples in [example](https://github.com/scriptscat/scriptcat/tree/main/example).

## Definitions

### GM_info

Get script-related information, including metadata and runtime environment parameters. Common fields include `scriptHandler`, `version`, `scriptMetaStr`, `scriptUpdateURL`, `downloadMode`, etc. For detailed definitions, please refer to `scriptcat.d.ts` (not completely comprehensive).

```js
console.log(GM_info.scriptHandler);
console.log(GM_info.version);
console.log(GM_info.scriptMetaStr);
```

* `isIncognito`, `sandboxMode`, `runAt`, `userAgentData` are not supported

### GM_cookie \*

Asynchronously operate page cookies, supporting cross-domain, HttpOnly, and partitioned cookies.

> After v0.17.0-alpha, store and tabid related parameters were removed. Now it determines whether to get cookies from incognito or normal windows based on the current window.

Must use `@connect` to declare the host to operate on and requires user authorization. Although compatible with TM's `GM_cookie.list` operation, it's not recommended for consistency.

* `sameSite` is not supported

```typescript
// name and domain cannot both be empty
declare function GM_cookie(
  action: GMTypes.CookieAction,
  details: GMTypes.CookieDetails,
  ondone: (cookie: GMTypes.Cookie[], error: unknown | undefined) => void
): void;

declare namespace GMTypes {
  type CookieAction = "list" | "delete" | "set";
  interface CookieDetails {
    url?: string;
    name?: string;
    value?: string;
    domain?: string;
    path?: string;
    secure?: boolean;
    httpOnly?: boolean;
    expirationDate?: number;
  }
  interface Cookie {
    domain: string;
    hostOnly: boolean;
    httpOnly: boolean;
    name: string;
    path: string;
    sameSite: string;
    secure: boolean;
    session: boolean;
    value: string;
    expirationDate?: number;
  }
}
```

#### Examples

```js
// List cookies
GM_cookie("list", {domain: ".scriptcat.org"}, (cookies, error) => {
    console.log(cookies);
});

// Set cookie
GM_cookie("set", {
    url: "https://scriptcat.org",
    name: "test",
    value: "cookie_value"
}, (cookies, error) => {
    console.log("Cookie set");
});

// Delete cookie
GM_cookie("delete", {
    url: "https://scriptcat.org", 
    name: "test"
}, (cookies, error) => {
    console.log("Cookie deleted");
});
```

### GM.cookie \*

Synchronous version of GM_cookie, returns a Promise.

```js
// List cookies
const cookies = await GM.cookie("list", {domain: ".scriptcat.org"});
console.log(cookies);

// Set cookie
await GM.cookie("set", {
    url: "https://scriptcat.org",
    name: "test", 
    value: "cookie_value"
});

// Delete cookie
await GM.cookie("delete", {
    url: "https://scriptcat.org",
    name: "test"
});
```

### GM_xmlhttpRequest

Make HTTP requests with cross-origin capabilities.

```js
GM_xmlhttpRequest({
    method: "GET",
    url: "https://api.example.com/data",
    headers: {
        "User-Agent": "ScriptCat"
    },
    onload: function(response) {
        console.log(response.responseText);
    },
    onerror: function(error) {
        console.error("Request failed:", error);
    }
});
```

### GM.xmlHttpRequest

Promise-based version of GM_xmlhttpRequest.

```js
try {
    const response = await GM.xmlHttpRequest({
        method: "GET",
        url: "https://api.example.com/data",
        headers: {
            "User-Agent": "ScriptCat"
        }
    });
    console.log(response.responseText);
} catch (error) {
    console.error("Request failed:", error);
}
```

### GM_setValue / GM_getValue

Store and retrieve persistent data.

```js
// Set value
GM_setValue("myKey", "myValue");

// Get value
const value = GM_getValue("myKey", "defaultValue");
console.log(value);
```

### GM.setValue / GM.getValue

Promise-based versions of the storage functions.

```js
// Set value
await GM.setValue("myKey", "myValue");

// Get value
const value = await GM.getValue("myKey", "defaultValue");
console.log(value);
```

### GM_deleteValue / GM_listValues

Delete stored values and list all keys.

```js
// Delete value
GM_deleteValue("myKey");

// List all keys
const keys = GM_listValues();
console.log(keys);
```

### GM.deleteValue / GM.listValues

Promise-based versions.

```js
// Delete value
await GM.deleteValue("myKey");

// List all keys
const keys = await GM.listValues();
console.log(keys);
```

### GM_addStyle

Add CSS styles to the page.

```js
GM_addStyle(`
    .my-custom-style {
        color: red;
        font-weight: bold;
    }
`);
```

### GM_getResourceText / GM_getResourceURL

Access resources defined in script metadata.

```js
// Get resource as text
const cssText = GM_getResourceText("myCss");

// Get resource URL
const imageUrl = GM_getResourceURL("myImage");
```

### GM_registerMenuCommand

Register menu commands in the extension popup.

```js
GM_registerMenuCommand("My Command", function() {
    alert("Menu command clicked!");
}, "m");
```

### GM_unregisterMenuCommand

Unregister previously registered menu commands.

```js
const menuId = GM_registerMenuCommand("Temp Command", () => {});
GM_unregisterMenuCommand(menuId);
```

### GM_notification

Display desktop notifications.

```js
GM_notification({
    title: "ScriptCat Notification",
    text: "This is a test notification",
    image: "https://scriptcat.org/favicon.ico",
    onclick: function() {
        console.log("Notification clicked");
    }
});
```

### GM_openInTab

Open URLs in new tabs.

```js
// Open in new tab
GM_openInTab("https://scriptcat.org");

// Open in background tab
GM_openInTab("https://scriptcat.org", {active: false});
```

### GM_setClipboard

Set clipboard content.

```js
GM_setClipboard("Text to copy", "text");
```

For more detailed API documentation and examples, please refer to the complete API reference and the built-in TypeScript definitions.
