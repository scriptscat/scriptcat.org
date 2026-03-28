---
id: agent-dom
sidebar_position: 3
---

# DOM 操作 API

`@grant CAT.agent.dom`

DOM 操作 API 提供完整的浏览器页面自动化能力，包括导航、内容读取、截图、表单交互和 DOM 监控。

## 标签页管理

### listTabs — 列出标签页

```javascript
const tabs = await CAT.agent.dom.listTabs();
```

返回所有打开的标签页信息。

**返回值 TabInfo[]：**

| 字段 | 类型 | 说明 |
|------|------|------|
| `tabId` | `number` | 标签页 ID |
| `url` | `string` | 当前 URL |
| `title` | `string` | 页面标题 |
| `active` | `boolean` | 是否为当前激活标签页 |
| `windowId` | `number` | 所在窗口 ID |
| `discarded` | `boolean` | 是否已被丢弃（休眠） |

## 导航

### navigate — 页面导航

```javascript
const result = await CAT.agent.dom.navigate(url, options?);
```

**参数：**

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `url` | `string` | — | 目标 URL（必填） |
| `options.tabId` | `number` | 当前激活标签 | 指定标签页 |
| `options.waitUntil` | `boolean` | `true` | 是否等待页面加载完成 |
| `options.timeout` | `number` | `30000` | 超时毫秒数 |

**返回值 NavigateResult：**

```typescript
{ tabId: number; url: string; title: string }
```

## 内容读取

### readPage — 读取页面内容

```javascript
const page = await CAT.agent.dom.readPage(options?);
```

将页面 DOM 转换为结构化文本返回，自动移除 `<script>`、`<style>`、`<noscript>`、`<svg>`、`<link[rel=stylesheet]>` 等无关元素。

**参数：**

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `options.tabId` | `number` | 当前激活标签 | 指定标签页 |
| `options.selector` | `string` | — | CSS 选择器，只返回匹配元素的内容 |
| `options.maxLength` | `number` | — | 内容最大字符数，超出截断 |
| `options.removeTags` | `string[]` | — | 额外需要移除的标签名 |

**返回值 PageContent：**

| 字段 | 类型 | 说明 |
|------|------|------|
| `title` | `string` | 页面标题 |
| `url` | `string` | 页面 URL |
| `html` | `string` | 处理后的页面文本内容 |
| `truncated` | `boolean` | 是否被截断 |
| `totalLength` | `number` | 原始内容总长度 |

### screenshot — 截图

```javascript
const shot = await CAT.agent.dom.screenshot(options?);
```

**参数：**

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `options.tabId` | `number` | 当前激活标签 | 指定标签页 |
| `options.quality` | `number` | `80` | JPEG 质量（0-100） |
| `options.fullPage` | `boolean` | `false` | 全页截图 |
| `options.selector` | `string` | — | CSS 选择器，只截取匹配元素区域 |
| `options.saveTo` | `string` | — | 保存到 OPFS 工作区的路径 |

**返回值 ScreenshotResult：**

| 字段 | 类型 | 说明 |
|------|------|------|
| `dataUrl` | `string` | base64 data URL |
| `path` | `string` | OPFS 保存路径（使用 `saveTo` 时） |
| `size` | `number` | 文件大小（使用 `saveTo` 时） |

**截图模式选择：**

| 场景 | 行为 |
|------|------|
| 使用 `selector` | 通过 CDP 定位元素边界并裁剪截图 |
| 后台标签页 | 尝试 CDP 截图，失败则激活标签后使用 `captureVisibleTab` |
| 前台标签页 | 直接使用 `captureVisibleTab` |

```javascript
// 保存截图到 OPFS
const shot = await CAT.agent.dom.screenshot({
  saveTo: "screenshots/page.png",
  quality: 90
});
console.log(`已保存到 ${shot.path}，大小 ${shot.size} 字节`);
```

## 页面交互

### click — 点击元素

```javascript
const result = await CAT.agent.dom.click(selector, options?);
```

**参数：**

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `selector` | `string` | — | CSS 选择器（必填） |
| `options.tabId` | `number` | 当前激活标签 | 指定标签页 |
| `options.trusted` | `boolean` | `false` | 使用 CDP 触发真实鼠标事件 |

**返回值 ActionResult：**

| 字段 | 类型 | 说明 |
|------|------|------|
| `success` | `boolean` | 是否成功 |
| `navigated` | `boolean` | 点击后是否发生了页面跳转 |
| `url` | `string` | 跳转后的新 URL |
| `newTab` | `boolean` | 是否打开了新标签页 |

**trusted vs 普通点击：**

- `trusted: false`（默认）— 通过注入 JS 模拟 `element.click()`，速度快但部分网站可能检测到非真实事件
- `trusted: true` — 通过 Chrome DevTools Protocol 发送真实鼠标事件，行为与用户操作一致，但需要 debugger 权限

### fill — 填充表单

```javascript
const result = await CAT.agent.dom.fill(selector, value, options?);
```

**参数：**

| 参数 | 类型 | 说明 |
|------|------|------|
| `selector` | `string` | CSS 选择器（必填） |
| `value` | `string` | 要填入的值（必填） |
| `options.tabId` | `number` | 指定标签页 |
| `options.trusted` | `boolean` | 使用 CDP 模拟键盘输入 |

**行为：**
- 普通模式：设置 `element.value` 并派发 `input` 事件
- trusted 模式：CDP 聚焦元素 → 逐字符输入

### scroll — 滚动页面

```javascript
const result = await CAT.agent.dom.scroll(direction, options?);
```

**参数：**

| 参数 | 类型 | 说明 |
|------|------|------|
| `direction` | `"up" \| "down" \| "top" \| "bottom"` | 滚动方向（必填） |
| `options.tabId` | `number` | 指定标签页 |
| `options.selector` | `string` | 滚动指定容器而非整个页面 |

**返回值 ScrollResult：**

| 字段 | 类型 | 说明 |
|------|------|------|
| `scrollTop` | `number` | 滚动后的位置 |
| `scrollHeight` | `number` | 内容总高度 |
| `clientHeight` | `number` | 可视区域高度 |
| `atBottom` | `boolean` | 是否已滚动到底部 |

### waitFor — 等待元素

```javascript
const result = await CAT.agent.dom.waitFor(selector, options?);
```

轮询等待指定元素出现在页面中（每 500ms 检查一次）。

**参数：**

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `selector` | `string` | — | CSS 选择器（必填） |
| `options.tabId` | `number` | 当前激活标签 | 指定标签页 |
| `options.timeout` | `number` | `10000` | 超时毫秒数 |

**返回值 WaitForResult：**

| 字段 | 类型 | 说明 |
|------|------|------|
| `found` | `boolean` | 是否找到元素 |
| `element` | `object` | 元素信息（仅 found=true 时） |
| `element.selector` | `string` | 匹配的选择器 |
| `element.tag` | `string` | 标签名 |
| `element.text` | `string` | 文本内容 |
| `element.role` | `string` | ARIA role |
| `element.type` | `string` | input type |
| `element.visible` | `boolean` | 是否可见 |

## 脚本执行

### executeScript — 执行 JavaScript

```javascript
const result = await CAT.agent.dom.executeScript(code, options?);
```

**参数：**

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `code` | `string` | — | JavaScript 代码（必填） |
| `options.tabId` | `number` | 当前激活标签 | 指定标签页 |
| `options.world` | `"MAIN" \| "ISOLATED"` | `"ISOLATED"` | 执行环境 |

**两种执行环境：**

| 环境 | 说明 | 适用场景 |
|------|------|---------|
| **ISOLATED** | 扩展隔离环境，与页面 JS 隔离 | DOM 操作、读取内容、使用扩展 blob URL |
| **MAIN** | 页面原始环境，共享 `window` 对象 | 调用页面 JS 函数、读取页面变量 |

```javascript
// ISOLATED — 安全地读取 DOM
const title = await CAT.agent.dom.executeScript(
  "return document.querySelector('h1')?.textContent",
  { world: "ISOLATED" }
);

// MAIN — 调用页面上的 JS 函数
const data = await CAT.agent.dom.executeScript(
  "return window.__APP_STATE__",
  { world: "MAIN" }
);
```

> 代码会被包装为 `new Function()` 执行，支持 `return` 返回值。超时时间为 30 秒。

## DOM 监控

通过 Chrome DevTools Protocol 监控页面 DOM 变化和弹窗事件。

### startMonitor — 开始监控

```javascript
await CAT.agent.dom.startMonitor(tabId);
```

开始监控指定标签页的 DOM 变化和弹窗（alert/confirm/prompt）。

### stopMonitor — 停止监控

```javascript
const result = await CAT.agent.dom.stopMonitor(tabId);
```

停止监控并返回收集到的变化。

**返回值 MonitorResult：**

| 字段 | 类型 | 说明 |
|------|------|------|
| `dialogs` | `Array<{ type, message }>` | 弹窗列表 |
| `addedNodes` | `Array<{ tag, id?, class?, role?, text }>` | 新增的 DOM 节点摘要 |

### peekMonitor — 查看监控状态

```javascript
const status = await CAT.agent.dom.peekMonitor(tabId);
```

非破坏性地查看当前监控状态。

**返回值 MonitorStatus：**

| 字段 | 类型 | 说明 |
|------|------|------|
| `hasChanges` | `boolean` | 是否有变化 |
| `dialogCount` | `number` | 弹窗数量 |
| `nodeCount` | `number` | 新增节点数量 |

## 完整示例

```javascript
// ==UserScript==
// @name        自动表单填写
// @match       https://example.com/form
// @grant       CAT.agent.dom
// ==/UserScript==

// 等待表单加载
await CAT.agent.dom.waitFor("form#signup", { timeout: 5000 });

// 填写表单
await CAT.agent.dom.fill("input[name=username]", "test_user");
await CAT.agent.dom.fill("input[name=email]", "test@example.com");

// 勾选协议
await CAT.agent.dom.click("input[type=checkbox]#agree");

// 截图保存填写结果
await CAT.agent.dom.screenshot({
  selector: "form#signup",
  saveTo: "screenshots/form-filled.png"
});

// 点击提交
const result = await CAT.agent.dom.click("button[type=submit]", { trusted: true });
if (result.navigated) {
  console.log("表单提交成功，跳转到:", result.url);
}
```
