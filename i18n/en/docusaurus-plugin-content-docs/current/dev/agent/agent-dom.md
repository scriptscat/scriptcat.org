---
title: DOM API
---

`@grant CAT.agent.dom`

The DOM API provides complete browser page automation capabilities, including navigation, content reading, screenshots, form interaction, and DOM monitoring.

## Tab Management

### listTabs — List Tabs

```javascript
const tabs = await CAT.agent.dom.listTabs();
```

Returns information about every open tab.

**Return value, TabInfo[]:**

| Field | Type | Description |
|------|------|------|
| `tabId` | `number` | Tab ID |
| `url` | `string` | Current URL |
| `title` | `string` | Page title |
| `active` | `boolean` | Whether it's the currently active tab |
| `windowId` | `number` | The window ID it belongs to |
| `discarded` | `boolean` | Whether it has been discarded (suspended) |

## Navigation

### navigate — Navigate the Page

```javascript
const result = await CAT.agent.dom.navigate(url, options?);
```

**Parameters:**

| Parameter | Type | Default | Description |
|------|------|--------|------|
| `url` | `string` | — | Target URL (required) |
| `options.tabId` | `number` | currently active tab | Specify a tab |
| `options.waitUntil` | `boolean` | `true` | Whether to wait for the page to finish loading |
| `options.timeout` | `number` | `30000` | Timeout in milliseconds |

**Return value, NavigateResult:**

```typescript
{ tabId: number; url: string; title: string }
```

## Content Reading

### readPage — Read Page Content

```javascript
const page = await CAT.agent.dom.readPage(options?);
```

Converts the page DOM into structured text, automatically removing irrelevant elements like `<script>`, `<style>`, `<noscript>`, `<svg>`, and `<link[rel=stylesheet]>`.

**Parameters:**

| Parameter | Type | Default | Description |
|------|------|--------|------|
| `options.tabId` | `number` | currently active tab | Specify a tab |
| `options.selector` | `string` | — | CSS selector; only returns content from matching elements |
| `options.maxLength` | `number` | — | Maximum character count; truncated beyond this |
| `options.removeTags` | `string[]` | — | Additional tag names to remove |

**Return value, PageContent:**

| Field | Type | Description |
|------|------|------|
| `title` | `string` | Page title |
| `url` | `string` | Page URL |
| `html` | `string` | The processed page text content |
| `truncated` | `boolean` | Whether the content was truncated |
| `totalLength` | `number` | The original total content length |

### screenshot — Take a Screenshot

```javascript
const shot = await CAT.agent.dom.screenshot(options?);
```

**Parameters:**

| Parameter | Type | Default | Description |
|------|------|--------|------|
| `options.tabId` | `number` | currently active tab | Specify a tab |
| `options.quality` | `number` | `80` | JPEG quality (0-100) |
| `options.fullPage` | `boolean` | `false` | Capture the full page |
| `options.selector` | `string` | — | CSS selector; only captures the matching element's area |
| `options.saveTo` | `string` | — | Path to save to in the OPFS workspace |

**Return value, ScreenshotResult:**

| Field | Type | Description |
|------|------|------|
| `dataUrl` | `string` | A base64 data URL |
| `path` | `string` | The OPFS save path (when `saveTo` is used) |
| `size` | `number` | The file size (when `saveTo` is used) |

**Screenshot mode selection:**

| Scenario | Behavior |
|------|------|
| `selector` is used | Locates the element's bounds via CDP and crops the screenshot |
| Background tab | Tries a CDP screenshot; if it fails, activates the tab and uses `captureVisibleTab` |
| Foreground tab | Uses `captureVisibleTab` directly |

```javascript
// Save a screenshot to OPFS
const shot = await CAT.agent.dom.screenshot({
  saveTo: "screenshots/page.png",
  quality: 90
});
console.log(`Saved to ${shot.path}, size ${shot.size} bytes`);
```

## Page Interaction

### click — Click an Element

```javascript
const result = await CAT.agent.dom.click(selector, options?);
```

**Parameters:**

| Parameter | Type | Default | Description |
|------|------|--------|------|
| `selector` | `string` | — | CSS selector (required) |
| `options.tabId` | `number` | currently active tab | Specify a tab |
| `options.trusted` | `boolean` | `false` | Use CDP to fire a real mouse event |

**Return value, ActionResult:**

| Field | Type | Description |
|------|------|------|
| `success` | `boolean` | Whether it succeeded |
| `navigated` | `boolean` | Whether the click caused page navigation |
| `url` | `string` | The new URL after navigation |
| `newTab` | `boolean` | Whether a new tab was opened |

**trusted vs. regular click:**

- `trusted: false` (default) — simulates `element.click()` via injected JS; fast, but some sites may detect it as a non-genuine event
- `trusted: true` — sends a real mouse event via the Chrome DevTools Protocol, behaving identically to a real user action, but requires the debugger permission

### fill — Fill a Form

```javascript
const result = await CAT.agent.dom.fill(selector, value, options?);
```

**Parameters:**

| Parameter | Type | Description |
|------|------|------|
| `selector` | `string` | CSS selector (required) |
| `value` | `string` | The value to fill in (required) |
| `options.tabId` | `number` | Specify a tab |
| `options.trusted` | `boolean` | Use CDP to simulate keyboard input |

**Behavior:**
- Normal mode: sets `element.value` and dispatches an `input` event
- trusted mode: CDP focuses the element → types character by character

### scroll — Scroll the Page

```javascript
const result = await CAT.agent.dom.scroll(direction, options?);
```

**Parameters:**

| Parameter | Type | Description |
|------|------|------|
| `direction` | `"up" \| "down" \| "top" \| "bottom"` | Scroll direction (required) |
| `options.tabId` | `number` | Specify a tab |
| `options.selector` | `string` | Scroll a specific container instead of the whole page |

**Return value, ScrollResult:**

| Field | Type | Description |
|------|------|------|
| `scrollTop` | `number` | The scroll position after scrolling |
| `scrollHeight` | `number` | The total content height |
| `clientHeight` | `number` | The visible area height |
| `atBottom` | `boolean` | Whether it has scrolled to the bottom |

### waitFor — Wait for an Element

```javascript
const result = await CAT.agent.dom.waitFor(selector, options?);
```

Polls for the specified element to appear on the page (checking every 500ms).

**Parameters:**

| Parameter | Type | Default | Description |
|------|------|--------|------|
| `selector` | `string` | — | CSS selector (required) |
| `options.tabId` | `number` | currently active tab | Specify a tab |
| `options.timeout` | `number` | `10000` | Timeout in milliseconds |

**Return value, WaitForResult:**

| Field | Type | Description |
|------|------|------|
| `found` | `boolean` | Whether the element was found |
| `element` | `object` | Element info (only present when found=true) |
| `element.selector` | `string` | The matching selector |
| `element.tag` | `string` | Tag name |
| `element.text` | `string` | Text content |
| `element.role` | `string` | ARIA role |
| `element.type` | `string` | input type |
| `element.visible` | `boolean` | Whether it's visible |

## Script Execution

### executeScript — Execute JavaScript

```javascript
const result = await CAT.agent.dom.executeScript(code, options?);
```

**Parameters:**

| Parameter | Type | Default | Description |
|------|------|--------|------|
| `code` | `string` | — | JavaScript code (required) |
| `options.tabId` | `number` | currently active tab | Specify a tab |
| `options.world` | `"MAIN" \| "ISOLATED"` | `"ISOLATED"` | Execution environment |

**Two execution environments:**

| Environment | Description | Use case |
|------|------|---------|
| **ISOLATED** | The extension's isolated environment, separate from the page's JS | DOM manipulation, reading content, using the extension's blob URLs |
| **MAIN** | The page's own environment, sharing the `window` object | Calling the page's JS functions, reading page variables |

```javascript
// ISOLATED — safely read the DOM
const title = await CAT.agent.dom.executeScript(
  "return document.querySelector('h1')?.textContent",
  { world: "ISOLATED" }
);

// MAIN — call a JS function on the page
const data = await CAT.agent.dom.executeScript(
  "return window.__APP_STATE__",
  { world: "MAIN" }
);
```

> The code is wrapped in `new Function()` for execution, supporting a `return` value. The timeout is 30 seconds.

## DOM Monitoring

Monitors DOM changes and dialog events on the page via the Chrome DevTools Protocol.

### startMonitor — Start Monitoring

```javascript
await CAT.agent.dom.startMonitor(tabId);
```

Starts monitoring DOM changes and dialogs (alert/confirm/prompt) on the given tab.

### stopMonitor — Stop Monitoring

```javascript
const result = await CAT.agent.dom.stopMonitor(tabId);
```

Stops monitoring and returns the changes collected.

**Return value, MonitorResult:**

| Field | Type | Description |
|------|------|------|
| `dialogs` | `Array<{ type, message }>` | The list of dialogs |
| `addedNodes` | `Array<{ tag, id?, class?, role?, text }>` | A summary of newly added DOM nodes |

### peekMonitor — Check Monitoring Status

```javascript
const status = await CAT.agent.dom.peekMonitor(tabId);
```

Non-destructively checks the current monitoring status.

**Return value, MonitorStatus:**

| Field | Type | Description |
|------|------|------|
| `hasChanges` | `boolean` | Whether there are changes |
| `dialogCount` | `number` | The number of dialogs |
| `nodeCount` | `number` | The number of newly added nodes |

## Full Example

```javascript
// ==UserScript==
// @name        Automatic Form Filling
// @match       https://example.com/form
// @grant       CAT.agent.dom
// ==/UserScript==

// Wait for the form to load
await CAT.agent.dom.waitFor("form#signup", { timeout: 5000 });

// Fill in the form
await CAT.agent.dom.fill("input[name=username]", "test_user");
await CAT.agent.dom.fill("input[name=email]", "test@example.com");

// Check the agreement checkbox
await CAT.agent.dom.click("input[type=checkbox]#agree");

// Screenshot the filled-in result
await CAT.agent.dom.screenshot({
  selector: "form#signup",
  saveTo: "screenshots/form-filled.png"
});

// Click submit
const result = await CAT.agent.dom.click("button[type=submit]", { trusted: true });
if (result.navigated) {
  console.log("Form submitted successfully, navigated to:", result.url);
}
```
