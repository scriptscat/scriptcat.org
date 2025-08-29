---
id: cat-api
---

# CatApi Documentation

## Description

APIs unique to this extension are defined with the CAT_ prefix.

You can also view related examples in [example](https://github.com/scriptscat/scriptcat/tree/main/example).

## Definitions

### CAT_setProxy

> Deprecated in v0.9.1 stable release, may be added to beta versions in the future

Set proxy configuration. Please note that this feature may conflict with extensions like Proxy SwitchyOmega. Multiple scripts can use proxies without conflicts (e.g., one script provides Google access, another provides Twitter access).

Please first understand [PAC](https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) and [Chromium complete URL restrictions in PAC](https://github.com/FelisCatus/SwitchyOmega/wiki/Chromium-%E5%AE%8C%E6%95%B4%E7%BD%91%E5%9D%80%E9%99%90%E5%88%B6).

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

#### Example

```javascript
// Set HTTP proxy for specific URLs
CAT_setProxy([
  {
    proxyServer: {
      scheme: "http",
      host: "proxy.example.com",
      port: 8080
    },
    matchUrl: ["*://google.com/*", "*://*.google.com/*"]
  }
]);

// Set SOCKS5 proxy
CAT_setProxy([
  {
    proxyServer: {
      scheme: "socks5", 
      host: "127.0.0.1",
      port: 1080
    },
    matchUrl: ["*://twitter.com/*", "*://*.twitter.com/*"]
  }
]);
```

### CAT_clearProxy

> Deprecated in v0.9.1 stable release, may be added to beta versions in the future

Clear proxy configuration.

```typescript
declare function CAT_clearProxy(): void;
```

#### Example

```javascript
// Clear all proxy settings
CAT_clearProxy();
```

### CAT_createTab

Create new browser tabs with enhanced options.

```typescript
declare function CAT_createTab(options: CAT_Types.CreateTabOptions): Promise<number>;

declare namespace CAT_Types {
  interface CreateTabOptions {
    url: string;
    active?: boolean;
    pinned?: boolean;
    index?: number;
    windowId?: number;
  }
}
```

#### Example

```javascript
// Create new tab
const tabId = await CAT_createTab({
  url: "https://scriptcat.org",
  active: true
});

// Create pinned tab
await CAT_createTab({
  url: "https://scriptcat.org",
  active: false,
  pinned: true
});
```

### CAT_closeTab

Close browser tabs by ID.

```typescript
declare function CAT_closeTab(tabId: number): Promise<void>;
```

#### Example

```javascript
// Close specific tab
await CAT_closeTab(123);
```

### CAT_getUserConfig

Get user configuration for the current script.

```typescript
declare function CAT_getUserConfig(): Promise<CAT_Types.UserConfig>;

declare namespace CAT_Types {
  interface UserConfig {
    [key: string]: any;
  }
}
```

#### Example

```javascript
// Get user configuration
const config = await CAT_getUserConfig();
console.log("User settings:", config);
```

### CAT_setUserConfig

Set user configuration for the current script.

```typescript
declare function CAT_setUserConfig(config: CAT_Types.UserConfig): Promise<void>;
```

#### Example

```javascript
// Set user configuration
await CAT_setUserConfig({
  theme: "dark",
  autoUpdate: true,
  refreshInterval: 5000
});
```

### CAT_registerMenuInput

Register input menu items in the extension popup.

```typescript
declare function CAT_registerMenuInput(options: CAT_Types.MenuInputOptions): string;

declare namespace CAT_Types {
  interface MenuInputOptions {
    title: string;
    type: "text" | "number" | "password" | "select";
    value?: any;
    options?: string[] | { [key: string]: string };
    placeholder?: string;
    onchange?: (value: any) => void;
  }
}
```

#### Example

```javascript
// Register text input
const inputId = CAT_registerMenuInput({
  title: "API Key",
  type: "text",
  placeholder: "Enter your API key",
  onchange: (value) => {
    GM_setValue("apiKey", value);
  }
});

// Register select input
CAT_registerMenuInput({
  title: "Theme",
  type: "select",
  options: {
    "light": "Light Theme",
    "dark": "Dark Theme",
    "auto": "Auto"
  },
  value: "auto",
  onchange: (value) => {
    GM_setValue("theme", value);
  }
});
```

### CAT_unregisterMenuInput

Unregister previously registered menu input.

```typescript
declare function CAT_unregisterMenuInput(inputId: string): void;
```

#### Example

```javascript
// Unregister menu input
CAT_unregisterMenuInput(inputId);
```

### CAT_fetch

Enhanced fetch API with additional ScriptCat features.

```typescript
declare function CAT_fetch(url: string, options?: CAT_Types.FetchOptions): Promise<Response>;

declare namespace CAT_Types {
  interface FetchOptions extends RequestInit {
    timeout?: number;
    retry?: number;
    retryDelay?: number;
  }
}
```

#### Example

```javascript
// Basic fetch
const response = await CAT_fetch("https://api.example.com/data");
const data = await response.json();

// Fetch with timeout and retry
const response2 = await CAT_fetch("https://api.example.com/data", {
  timeout: 5000,
  retry: 3,
  retryDelay: 1000,
  headers: {
    "Authorization": "Bearer token"
  }
});
```

## Best Practices

### Error Handling

Always implement proper error handling when using CAT APIs:

```javascript
try {
  const result = await CAT_createTab({
    url: "https://example.com"
  });
  console.log("Tab created:", result);
} catch (error) {
  console.error("Failed to create tab:", error);
}
```

### Permission Management

Ensure your script declares the necessary permissions:

```javascript
// ==UserScript==
// @name         CAT API Example
// @grant        CAT_createTab
// @grant        CAT_getUserConfig
// @grant        CAT_setUserConfig
// ==/UserScript==
```

### Configuration Management

Use CAT_getUserConfig and CAT_setUserConfig for persistent settings:

```javascript
// Load configuration on script start
const config = await CAT_getUserConfig();
const theme = config.theme || "light";

// Save configuration when changed
function updateTheme(newTheme) {
  CAT_setUserConfig({
    ...config,
    theme: newTheme
  });
}
```

## Migration Notes

### From Deprecated APIs

If you're using deprecated APIs like CAT_setProxy, consider alternative approaches:

1. Use browser's built-in proxy settings
2. Implement proxy logic at the application level
3. Use GM_xmlhttpRequest with custom routing

### Version Compatibility

Always check the ScriptCat version before using newer CAT APIs:

```javascript
if (GM_info.version >= "1.0.0") {
  // Use newer CAT APIs
  await CAT_createTab({url: "https://example.com"});
} else {
  // Fallback for older versions
  GM_openInTab("https://example.com");
}
```

For more examples and detailed usage, please refer to the [example repository](https://github.com/scriptscat/scriptcat/tree/main/example).
