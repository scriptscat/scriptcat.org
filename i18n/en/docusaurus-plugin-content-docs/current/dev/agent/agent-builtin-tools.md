---
title: Built-in Tools Reference
---

The Agent has a set of built-in tools that the AI can call automatically during a conversation. These tools are available by default in persistent conversations, and script developers usually don't need to call them directly — the AI automatically picks the right tool based on the user's intent.

Understanding what these tools can do helps you write better system prompts and custom tools.

## Web Data Fetching

### web_fetch

Fetches the content of a URL, supporting HTML-to-text extraction and LLM summarization.

| Parameter | Type | Required | Description |
|------|------|------|------|
| `url` | `string` | Yes | Target URL (http/https only) |
| `prompt` | `string` | No | Summarization prompt (when provided, the LLM is used to distill the content) |
| `max_length` | `number` | No | Maximum character count for the content |

**Behavior details:**
- 30-second request timeout
- HTML content automatically extracts the main body (removing navigation, sidebars, etc.)
- JSON responses are automatically parsed
- Plain text is returned as-is
- When `prompt` is provided, the fetched content is sent to the LLM for summarization

**Return value:**
```json
{
  "url": "https://example.com",
  "content_type": "text/html",
  "content": "The extracted body content...",
  "truncated": false,
  "final_url": "https://example.com/redirected"
}
```

### web_search

Queries a search engine and returns structured search results.

| Parameter | Type | Required | Description |
|------|------|------|------|
| `query` | `string` | Yes | The search keywords |
| `max_results` | `number` | No | Maximum number of results (defaults to 5, capped at 10) |

**Supported search engines:**

| Engine | Description | Configuration required |
|------|------|---------|
| DuckDuckGo | The default engine | No configuration needed |
| Bing | Microsoft Bing Search | Requires an API Key |
| Baidu | Baidu Search | No API Key needed |
| Google Custom Search | Google Custom Search | Requires an API Key + CSE ID |

Search engines are configured in the dashboard under Agent → Settings.

**Return value:**
```json
[
  {
    "title": "Search result title",
    "url": "https://example.com/result",
    "snippet": "Result snippet text..."
  }
]
```

### get_tab_content

Reads the rendered page content of a given tab, converting it into structured Markdown with CSS-selector annotations.

| Parameter | Type | Required | Description |
|------|------|------|------|
| `tab_id` | `number` | Yes | Tab ID |
| `selector` | `string` | No | A CSS selector; only extracts the matching part |
| `prompt` | `string` | No | Summarization prompt |
| `max_length` | `number` | No | Maximum character count for the content |

Difference from `web_fetch`: `get_tab_content` reads the page **as already rendered by the browser** (including dynamic JS content), while `web_fetch` makes a new HTTP request.

**Return value:**
```json
{
  "tab_id": 123,
  "url": "https://example.com",
  "title": "Page title",
  "content": "Structured content...",
  "truncated": false,
  "used_selector": "main"
}
```

## Tab Management

### list_tabs

Queries open tabs, supporting several filter conditions.

| Parameter | Type | Required | Description |
|------|------|------|------|
| `url_pattern` | `string` | No | A regex to match the URL |
| `title_pattern` | `string` | No | A regex to match the title |
| `active` | `boolean` | No | Only return the active tab |
| `window_id` | `number` | No | A specific window |
| `audible` | `boolean` | No | Only return tabs currently playing audio |

### open_tab

Opens a new tab or navigates an existing one.

| Parameter | Type | Required | Description |
|------|------|------|------|
| `url` | `string` | Yes | Target URL |
| `tab_id` | `number` | No | An existing tab ID (when provided, navigates that tab; otherwise a new tab is opened) |
| `active` | `boolean` | No | Whether to activate it (defaults to `true`) |
| `window_id` | `number` | No | A specific window |
| `wait_until_loaded` | `boolean` | No | Whether to wait for the page to finish loading (defaults to `true`) |

### close_tab

Closes a tab.

| Parameter | Type | Required | Description |
|------|------|------|------|
| `tab_id` | `number` | Yes | Tab ID |

### activate_tab

Activates a tab and focuses its window.

| Parameter | Type | Required | Description |
|------|------|------|------|
| `tab_id` | `number` | Yes | Tab ID |

## File System (OPFS)

### opfs_write

Writes a file to the workspace.

| Parameter | Type | Required | Description |
|------|------|------|------|
| `path` | `string` | Yes | File path |
| `content` | `string` | Yes | File content (supports binary via a data URL) |

### opfs_read

Reads a file from the workspace. By default it auto-detects the file type: text files return their content, binary files return a blob URL.

| Parameter | Type | Required | Description |
|------|------|------|------|
| `path` | `string` | Yes | File path |
| `mode` | `string` | No | `"text"` / `"blob"` / `"auto"` (default), forces the return mode |
| `offset` | `number` | No | Starting line number (1-based), text mode only |
| `limit` | `number` | No | Number of lines to read, text mode only (pagination is required once text exceeds 200 lines) |

### opfs_list

Lists the contents of a directory.

| Parameter | Type | Required | Description |
|------|------|------|------|
| `path` | `string` | No | Directory path (defaults to the root directory) |

### opfs_delete

Deletes a file or directory.

| Parameter | Type | Required | Description |
|------|------|------|------|
| `path` | `string` | Yes | File/directory path |

## User Interaction

### ask_user

Asks the user a question, supporting either free-form input or a structured choice.

| Parameter | Type | Required | Description |
|------|------|------|------|
| `question` | `string` | Yes | The question content |
| `options` | `string[]` | No | A list of choices (when provided, this becomes a multiple-choice question) |
| `multiple` | `boolean` | No | Whether multiple selection is allowed (defaults to `false`) |

**Timeout:** returns `{ answer: null, reason: "timeout" }` after 5 minutes without a response.

**Return value:**
```json
{ "answer": "The user's answer text" }
```

### execute_script

Executes JavaScript code on the page or in the sandbox.

| Parameter | Type | Required | Description |
|------|------|------|------|
| `code` | `string` | Yes | The JavaScript code |
| `target` | `string` | Yes | `"page"` or `"sandbox"` |
| `tab_id` | `number` | No | The target tab when `target` is page (defaults to the current active tab) |
| `world` | `string` | No | `"MAIN"` or `"ISOLATED"` (default), page mode only |

**Execution environment comparison:**

| Environment | DOM | Page JS | Extension blob URLs | Use case |
|------|-----|---------|---------------|---------|
| page + ISOLATED | Yes | No | Yes | Reading the DOM, extracting content |
| page + MAIN | Yes | Yes | No | Calling page functions |
| sandbox | No | No | No | Pure computation |

## Sub-agents

### agent

Spawns an independent sub-agent to handle a complex sub-task.

| Parameter | Type | Required | Description |
|------|------|------|------|
| `prompt` | `string` | Yes | The sub-task description |
| `description` | `string` | No | A short label (3-5 words, used in the UI) |
| `type` | `string` | No | The sub-agent type (see below); defaults to `"general"` |
| `tab_id` | `number` | No | A tab ID passed to the sub-agent, which will operate on that tab |

**Sub-agent types:**

| type | Description | Available tools |
|------|------|---------|
| `researcher` | Information retrieval (read-only) | web_search, web_fetch, reading page content |
| `page_operator` | Browser automation | Tab management, DOM operations, page interaction |
| `general` | General-purpose (default) | All tools |

**Characteristics:**
- A sub-agent has its own independent conversation context
- It **cannot** use `ask_user` or `agent` (to prevent recursion)
- The sub-agent's events are passed to the parent conversation via `sub_agent_event`

## Task Management

This group of tools manages a temporary task list within a conversation (in-memory, not persisted).

### create_task

| Parameter | Type | Required | Description |
|------|------|------|------|
| `subject` | `string` | Yes | Task title |
| `description` | `string` | No | Detailed description |

### get_task

| Parameter | Type | Required |
|------|------|------|
| `task_id` | `string` | Yes |

### update_task

| Parameter | Type | Required | Description |
|------|------|------|------|
| `task_id` | `string` | Yes | Task ID |
| `status` | `string` | No | `"pending"` / `"in_progress"` / `"completed"` |
| `subject` | `string` | No | New title |
| `description` | `string` | No | New description |

### list_tasks

Takes no parameters; returns a brief list of all tasks.

### delete_task

| Parameter | Type | Required |
|------|------|------|
| `task_id` | `string` | Yes |

> The task management tools mainly let the AI track its own progress while working through complex, multi-step tasks; task data is not persisted.
