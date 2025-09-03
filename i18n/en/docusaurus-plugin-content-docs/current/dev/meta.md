---
id: meta
---

# Metadata Documentation

Content in `==UserScript==` describes the permissions required by the script and script information, located at the very beginning of the script.

```js
// ==UserScript==
// @name         New Userscript
// @namespace    https://bbs.tampermonkey.net.cn/
// @version      0.1.0
// @description  try to take over the world!
// @author       You
// @crontab      * * once * *
// ==/UserScript==
```

## Main Values

### name

Script name

### namespace

Script namespace. `name + namespace` determines script uniqueness.

### version

Script version. It's recommended to follow [Semantic Versioning](https://semver.org/). When script version changes are detected, users will be prompted to update.

### description

Detailed description of the script

### author

Script author

### run-at

Script execution timing

| Value | Execution Time | Support |
|-------|----------------|---------|
| document-start | Inject script into page as quickly as possible after frontend matches URL | v0.3.0 |
| document-body | Execute when document body is available | v0.3.0 |
| document-end | Execute when DOM is ready (default) | v0.3.0 |
| document-idle | Execute when page is completely loaded | v0.3.0 |
| context-menu | Execute when context menu is triggered | v0.3.0 |

### match

URL patterns where the script should run

```js
// @match        https://example.com/*
// @match        https://*.example.com/*
// @match        *://example.com/*
```

### include

Alternative URL matching (supports regular expressions)

```js
// @include      https://example.com/*
// @include      /^https://example\.com/.*$/
```

### exclude

URL patterns where the script should NOT run

```js
// @exclude      https://example.com/admin/*
// @exclude      https://example.com/private/*
```

### grant

Permissions required by the script

```js
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_xmlhttpRequest
// @grant        GM_notification
// @grant        unsafeWindow
```

Common grants:
- `GM_setValue` / `GM_getValue` - Data storage
- `GM_xmlhttpRequest` - Cross-origin requests
- `GM_notification` - Desktop notifications
- `GM_addStyle` - Add CSS styles
- `GM_openInTab` - Open new tabs
- `GM_setClipboard` - Clipboard access
- `unsafeWindow` - Access to page's window object

### connect

Domains that the script can connect to via GM_xmlhttpRequest

```js
// @connect      example.com
// @connect      api.example.com
// @connect      *
```

### require

External JavaScript libraries to load

```js
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @require      https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
```

### resource

External resources (CSS, images, etc.) to load

```js
// @resource     myCSS https://example.com/style.css
// @resource     myImage https://example.com/image.png
```

Access resources in script:
```js
const cssText = GM_getResourceText("myCSS");
const imageUrl = GM_getResourceURL("myImage");
```

### updateURL / downloadURL

URLs for script updates

```js
// @updateURL    https://example.com/script.meta.js
// @downloadURL  https://example.com/script.user.js
```

### supportURL / homepageURL

Support and homepage URLs

```js
// @supportURL   https://github.com/user/repo/issues
// @homepageURL  https://github.com/user/repo
```

## ScriptCat Specific Metadata

### background

Declare script as background script

```js
// @background
```

Background scripts run continuously in the background, even when no web pages are open.

### crontab

Schedule script execution using cron expressions

```js
// @crontab      * * * * * *    // Every second
// @crontab      0 */5 * * * *  // Every 5 minutes
// @crontab      0 0 * * * *    // Every hour
// @crontab      0 0 0 * * *    // Every day at midnight
// @crontab      * once * * * * // Once per hour
```

Cron format: `second minute hour day month dayOfWeek`

Special keyword `once` means execute only once within the time period.

### antifeature

Declare potentially problematic features

```js
// @antifeature  ads           // Script shows ads
// @antifeature  tracking      // Script tracks users
// @antifeature  miner         // Script mines cryptocurrency
```

### license

Script license

```js
// @license      MIT
// @license      GPL-3.0
// @license      Apache-2.0
```

### icon / iconURL

Script icon

```js
// @icon         https://example.com/icon.png
// @iconURL      https://example.com/icon.png
// @icon64       https://example.com/icon64.png
// @icon64URL    https://example.com/icon64.png
```

## Advanced Features

### Conditional Execution

Use multiple match patterns for complex conditions:

```js
// @match        https://example.com/*
// @match        https://test.example.com/*
// @exclude      https://example.com/admin/*
// @exclude      https://example.com/api/*
```

### Multi-language Support

Provide translations for metadata:

```js
// @name         English Name
// @name:zh-CN   中文名称
// @name:ja      日本語名
// @description  English description
// @description:zh-CN  中文描述
// @description:ja     日本語の説明
```

### Version Management

Use semantic versioning for better update management:

```js
// @version      1.0.0    // Major.Minor.Patch
// @version      1.2.3-beta.1  // Pre-release
// @version      2.0.0-alpha.1 // Alpha version
```

## Complete Example

```js
// ==UserScript==
// @name         Advanced Example Script
// @name:zh-CN   高级示例脚本
// @namespace    https://scriptcat.org/
// @version      1.2.3
// @description  An advanced example demonstrating various metadata features
// @description:zh-CN  展示各种元数据功能的高级示例
// @author       ScriptCat Team
// @license      MIT
// @icon         https://scriptcat.org/favicon.ico
// @homepageURL  https://github.com/scriptscat/example
// @supportURL   https://github.com/scriptscat/example/issues
// @updateURL    https://raw.githubusercontent.com/scriptscat/example/main/script.meta.js
// @downloadURL  https://raw.githubusercontent.com/scriptscat/example/main/script.user.js
// @match        https://example.com/*
// @match        https://*.example.com/*
// @exclude      https://example.com/admin/*
// @run-at       document-end
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_xmlhttpRequest
// @grant        GM_notification
// @grant        GM_addStyle
// @connect      api.example.com
// @connect      cdn.example.com
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @resource     mainCSS https://example.com/styles/main.css
// @resource     logo https://example.com/images/logo.png
// @antifeature  ads
// ==/UserScript==

(function() {
    'use strict';
    
    // Your script code here
    console.log('Advanced example script loaded');
    
    // Use required library
    $('body').append('<div>jQuery is available</div>');
    
    // Use resources
    const css = GM_getResourceText('mainCSS');
    GM_addStyle(css);
    
    const logoUrl = GM_getResourceURL('logo');
    console.log('Logo URL:', logoUrl);
})();
```

## Best Practices

### 1. Use Descriptive Names
Choose clear, descriptive names for your scripts:

```js
// Good
// @name         GitHub Issue Tracker Enhancement

// Avoid
// @name         GH Tool
```

### 2. Follow Semantic Versioning
Use proper version numbering:

```js
// @version      1.0.0    // Initial release
// @version      1.1.0    // New features
// @version      1.1.1    // Bug fixes
// @version      2.0.0    // Breaking changes
```

### 3. Specify Minimal Permissions
Only request permissions you actually need:

```js
// Only grant what you use
// @grant        GM_setValue
// @grant        GM_getValue
// Don't grant everything unnecessarily
```

### 4. Use Specific Match Patterns
Be as specific as possible with URL matching:

```js
// Good - specific
// @match        https://github.com/*/issues/*

// Avoid - too broad
// @match        https://*/*
```

### 5. Provide Support Information
Always include support and homepage URLs:

```js
// @homepageURL  https://github.com/user/repo
// @supportURL   https://github.com/user/repo/issues
```

### 6. Document Antifeatures
Be transparent about potentially problematic features:

```js
// @antifeature  ads  This script displays advertisements
// @antifeature  tracking  This script tracks user behavior for analytics
```

This metadata system provides comprehensive control over script behavior and permissions while maintaining compatibility with other userscript managers.
