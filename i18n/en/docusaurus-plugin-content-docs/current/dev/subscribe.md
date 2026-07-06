---
title: Subscription Mode
---

The file must start with `UserSubscribe` instead of `UserScript`. The installation link should use the `user.sub.js` extension, and must be an `https` link.

A subscription script only shows the installation dialog for the user to confirm the subscription at install time; subsequent updates are silent, and the update dialog is only shown again if the `connect` permission changes.

A single subscription script can describe the installation links for multiple scripts. Scripts installed via subscription mode are installed silently, without a confirmation dialog, and the installed scripts still appear in the script list — but their `connect` permission uses the `connect` declared in the subscription rather than the script's own `connect` permission.

```js
// ==UserSubscribe==
// @name         xxx
// @description  Subscribe to the xxx script series
// @version      0.1.0
// @author       You
// @connect      www.baidu.com
// @scriptUrl    https://script.tampermonkey.net.cn/48.user.js
// @scriptUrl    https://script.tampermonkey.net.cn/49.user.js
// ==/UserSubscribe==
```

## Subscription Updates and Script Updates

According to the user's configured `update interval`, ScriptCat periodically checks the subscription link for updates; `version` must be configured for this to take effect.

Each subscription update or change compares the script links against the currently installed scripts: scripts no longer in the new subscription are removed, and newly added scripts are installed silently. Script updates follow the script's own `version`, using the same update logic as a normally installed script.

## Silent Install and Update

Subscribed scripts are installed and updated silently — adding, removing, or updating a script from a subscription only shows a notification, without requiring user confirmation again. Because of this silent-update mechanism, please only subscribe to sources you trust.


## metadata

The meaning of certain metadata fields changes within a subscription script.

### name

The subscription name (can also be edited directly in the subscription list)

### description

The subscription description, describing what the subscription is for

### version

The subscription version. If omitted, updates are instead triggered by whether the subscription script's content has changed.

### connect

Requests access permission for a site; see `GM_cookie` and `GM_xmlhttpRequest`. For scripts installed via subscription mode, `connect` is overridden by the subscription's `connect`.

### scriptUrl

The script installation links required by the subscription
