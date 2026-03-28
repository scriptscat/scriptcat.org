---
id: agent-builtin-tools
sidebar_position: 10
---

# 内置工具参考

Agent 内置了一系列工具供 AI 在对话中自动调用。这些工具在持久化对话中默认可用，脚本开发者通常不需要直接调用它们——AI 会根据用户意图自动选择合适的工具。

了解这些工具的能力有助于编写更好的系统提示词和自定义工具。

## 网页数据获取

### web_fetch

抓取 URL 内容，支持 HTML 转文本提取和 LLM 摘要。

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `url` | `string` | 是 | 目标 URL（仅 http/https） |
| `prompt` | `string` | 否 | 摘要提示词（提供时会用 LLM 提炼内容） |
| `max_length` | `number` | 否 | 内容最大字符数 |

**行为细节：**
- 30 秒请求超时
- HTML 内容自动提取正文（去除导航、侧边栏等）
- JSON 响应自动解析
- 纯文本直接返回
- 提供 `prompt` 时，会将抓取的内容发送给 LLM 进行摘要

**返回值：**
```json
{
  "url": "https://example.com",
  "content_type": "text/html",
  "content": "提取后的正文内容...",
  "truncated": false,
  "final_url": "https://example.com/redirected"
}
```

### web_search

搜索引擎查询，返回结构化搜索结果。

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `query` | `string` | 是 | 搜索关键词 |
| `max_results` | `number` | 否 | 最大结果数（默认 5，上限 10） |

**支持的搜索引擎：**

| 引擎 | 说明 | 配置要求 |
|------|------|---------|
| DuckDuckGo | 默认引擎 | 无需配置 |
| Bing | 微软 Bing 搜索 | 需要 API Key |
| 百度 | 百度搜索 | 无需 API Key |
| Google Custom Search | Google 自定义搜索 | 需要 API Key + CSE ID |

搜索引擎在管理页面 → Agent → 设置中配置。

**返回值：**
```json
[
  {
    "title": "搜索结果标题",
    "url": "https://example.com/result",
    "snippet": "结果摘要文本..."
  }
]
```

### get_tab_content

读取指定标签页的渲染后页面内容，转为带 CSS 选择器注释的结构化 Markdown。

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `tab_id` | `number` | 是 | 标签页 ID |
| `selector` | `string` | 否 | CSS 选择器，只提取匹配部分 |
| `prompt` | `string` | 否 | 摘要提示词 |
| `max_length` | `number` | 否 | 内容最大字符数 |

与 `web_fetch` 的区别：`get_tab_content` 读取的是**浏览器已渲染**的页面（包括 JS 动态内容），而 `web_fetch` 是发起新的 HTTP 请求。

**返回值：**
```json
{
  "tab_id": 123,
  "url": "https://example.com",
  "title": "页面标题",
  "content": "结构化内容...",
  "truncated": false,
  "used_selector": "main"
}
```

## 标签页管理

### list_tabs

查询已打开的标签页，支持多种过滤条件。

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `url_pattern` | `string` | 否 | URL 正则匹配 |
| `title_pattern` | `string` | 否 | 标题正则匹配 |
| `active` | `boolean` | 否 | 仅返回活动标签页 |
| `window_id` | `number` | 否 | 指定窗口 |
| `audible` | `boolean` | 否 | 仅返回正在播放音频的标签页 |

### open_tab

打开新标签页。

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `url` | `string` | 是 | 目标 URL |
| `active` | `boolean` | 否 | 是否激活（默认 `true`） |
| `window_id` | `number` | 否 | 指定窗口 |

### close_tab

关闭标签页。

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `tab_id` | `number` | 是 | 标签页 ID |

### activate_tab

激活标签页并聚焦所在窗口。

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `tab_id` | `number` | 是 | 标签页 ID |

## 文件系统（OPFS）

### opfs_write

写入文件到工作区。

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `path` | `string` | 是 | 文件路径 |
| `content` | `string` | 是 | 文件内容（支持 data URL 二进制） |

### opfs_read

读取工作区文件。

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `path` | `string` | 是 | 文件路径 |
| `format` | `string` | 否 | `"text"`（默认）或 `"bloburl"` |

### opfs_list

列出目录内容。

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `path` | `string` | 否 | 目录路径（默认根目录） |

### opfs_delete

删除文件或目录。

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `path` | `string` | 是 | 文件/目录路径 |

## 用户交互

### ask_user

向用户发起提问，支持自由输入或结构化选择。

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `question` | `string` | 是 | 问题内容 |
| `options` | `string[]` | 否 | 可选项列表（提供时为选择题） |
| `multiple` | `boolean` | 否 | 是否允许多选（默认 `false`） |

**超时：** 5 分钟无响应返回 `{ answer: null, reason: "timeout" }`。

**返回值：**
```json
{ "answer": "用户的回答文本" }
```

### execute_script

在页面或沙箱中执行 JavaScript 代码。

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `code` | `string` | 是 | JavaScript 代码 |
| `target` | `string` | 是 | `"page"` 或 `"sandbox"` |
| `tab_id` | `number` | 否 | 页面目标时指定标签页（默认当前活动标签） |
| `world` | `string` | 否 | `"MAIN"` 或 `"ISOLATED"`（默认），仅 page 模式 |

**执行环境对比：**

| 环境 | DOM | 页面 JS | 扩展 blob URL | 适用场景 |
|------|-----|---------|---------------|---------|
| page + ISOLATED | 可 | 不可 | 可 | DOM 读取、内容提取 |
| page + MAIN | 可 | 可 | 不可 | 调用页面函数 |
| sandbox | 不可 | 不可 | 不可 | 纯计算 |

## 子代理

### agent

生成独立的子代理处理复杂子任务。

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `prompt` | `string` | 是 | 子任务描述 |
| `description` | `string` | 是 | 简短标签（3-5 个字，UI 展示用） |

**特性：**
- 子代理拥有独立的对话上下文
- 可以使用 web_fetch、web_search、OPFS 等工具
- **不能**使用 `ask_user` 和 `agent`（防止递归）
- 子代理的事件会通过 `sub_agent_event` 传递给父对话

## 任务管理

这组工具用于在对话中管理临时任务列表（内存中，不持久化）。

### create_task

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `subject` | `string` | 是 | 任务标题 |
| `description` | `string` | 否 | 详细描述 |

### get_task

| 参数 | 类型 | 必填 |
|------|------|------|
| `task_id` | `string` | 是 |

### update_task

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `task_id` | `string` | 是 | 任务 ID |
| `status` | `string` | 否 | `"pending"` / `"in_progress"` / `"completed"` |
| `subject` | `string` | 否 | 新标题 |
| `description` | `string` | 否 | 新描述 |

### list_tasks

无参数，返回所有任务的简要列表。

### delete_task

| 参数 | 类型 | 必填 |
|------|------|------|
| `task_id` | `string` | 是 |

> 任务管理工具主要供 AI 在处理复杂多步骤任务时自行跟踪进度，任务数据不持久化。
