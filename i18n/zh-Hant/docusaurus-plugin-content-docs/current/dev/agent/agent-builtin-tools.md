---
title: 內建工具參考
---

Agent 附帶一組內建工具，AI 會在對話期間自動呼叫。這些工具在持續性對話中預設可用；腳本開發者通常不需要直接呼叫它們 — AI 會根據使用者意圖選擇正確的工具。

了解這些工具的功能有助於您撰寫更好的系統提示詞和自訂工具。

## Web 資料取得

### web_fetch

取得 URL 的內容，支援 HTML 轉文字擷取和 LLM 摘要。

| 參數 | 型別 | 必填 | 說明 |
|------|------|------|------|
| `url` | `string` | 是 | 目標 URL（僅限 http/https） |
| `prompt` | `string` | 否 | 摘要提示詞（提供時，使用 LLM 蒸餾內容） |
| `max_length` | `number` | 否 | 內容最大字元數 |

**行為細節：**
- 30 秒請求逾時
- HTML 內容自動擷取主要本文文字（移除導航、側邊欄等）
- JSON 回應自動解析
- 純文字原樣返回
- 提供 `prompt` 時，取得的內容會送至 LLM 進行摘要

**回傳值：**
```json
{
  "url": "https://example.com",
  "content_type": "text/html",
  "content": "擷取的內文...",
  "truncated": false,
  "final_url": "https://example.com/redirected"
}
```

### web_search

查詢搜尋引擎並回傳結構化的搜尋結果。

| 參數 | 型別 | 必填 | 說明 |
|------|------|------|------|
| `query` | `string` | 是 | 搜尋關鍵字 |
| `max_results` | `number` | 否 | 最大結果數（預設 5，上限 10） |

**支援的搜尋引擎：**

| 引擎 | 說明 | 所需設定 |
|------|------|---------|
| DuckDuckGo | 預設引擎 | 無 |
| Bing | Microsoft Bing 搜尋 | 需要 API 金鑰 |
| Baidu | 百度搜尋 | 無需 API 金鑰 |
| Google 自訂搜尋 | Google 自訂搜尋 | 需要 API 金鑰 + CSE ID |

搜尋引擎在管理頁面 → Agent → 設定中設定。

**回傳值：**
```json
[
  {
    "title": "搜尋結果標題",
    "url": "https://example.com/result",
    "snippet": "結果摘要文字..."
  }
]
```

### get_tab_content

讀取指定分頁的已渲染頁面內容，轉換為帶有 CSS 選擇器註解的結構化 Markdown。

| 參數 | 型別 | 必填 | 說明 |
|------|------|------|------|
| `tab_id` | `number` | 是 | 分頁 ID |
| `selector` | `string` | 否 | CSS 選擇器；僅擷取符合的部分 |
| `prompt` | `string` | 否 | 摘要提示詞 |
| `max_length` | `number` | 否 | 內容最大字元數 |

與 `web_fetch` 的差異：`get_tab_content` 讀取頁面**如瀏覽器已渲染的狀態**（包括動態 JS 內容），而 `web_fetch` 進行新的 HTTP 請求。

**回傳值：**
```json
{
  "tab_id": 123,
  "url": "https://example.com",
  "title": "頁面標題",
  "content": "結構化內容...",
  "truncated": false,
  "used_selector": "main"
}
```

## 分頁管理

### list_tabs

查詢開啟的分頁，支援多種篩選條件。

| 參數 | 型別 | 必填 | 說明 |
|------|------|------|------|
| `url_pattern` | `string` | 否 | URL 正規表示式匹配 |
| `title_pattern` | `string` | 否 | 標題正規表示式匹配 |
| `active` | `boolean` | 否 | 僅回傳活動分頁 |
| `window_id` | `number` | 否 | 指定的視窗 |
| `audible` | `boolean` | 否 | 僅回傳目前播放音訊的分頁 |

### open_tab

開啟新分頁或導覽現有分頁。

| 參數 | 型別 | 必填 | 說明 |
|------|------|------|------|
| `url` | `string` | 是 | 目標 URL |
| `tab_id` | `number` | 否 | 現有分頁的 ID（提供時導覽該分頁；否則開啟新分頁） |
| `active` | `boolean` | 否 | 是否啟用（預設 `true`） |
| `window_id` | `number` | 否 | 指定的視窗 |
| `wait_until_loaded` | `boolean` | 否 | 是否等待頁面載入完成（預設 `true`） |

### close_tab

關閉分頁。

| 參數 | 型別 | 必填 | 說明 |
|------|------|------|------|
| `tab_id` | `number` | 是 | 分頁 ID |

### activate_tab

啟用分頁並聚焦其所在的視窗。

| 參數 | 型別 | 必填 | 說明 |
|------|------|------|------|
| `tab_id` | `number` | 是 | 分頁 ID |

## 檔案系統（OPFS）

### opfs_write

將檔案寫入工作區。

| 參數 | 型別 | 必填 | 說明 |
|------|------|------|------|
| `path` | `string` | 是 | 檔案路徑 |
| `content` | `string` | 是 | 檔案內容（支援二進位 data URL） |

### opfs_read

從工作區讀取檔案。預設會自動偵測檔案類型：文字檔回傳其內容，二進位檔回傳 blob URL。

| 參數 | 型別 | 必填 | 說明 |
|------|------|------|------|
| `path` | `string` | 是 | 檔案路徑 |
| `mode` | `string` | 否 | `"text"` / `"blob"` / `"auto"`（預設）— 強制指定回傳模式 |
| `offset` | `number` | 否 | 起始行號（從 1 開始），僅文字模式 |
| `limit` | `number` | 否 | 要讀取的行數，僅文字模式（文字超過 200 行時需要分頁） |

### opfs_list

列出目錄內容。

| 參數 | 型別 | 必填 | 說明 |
|------|------|------|------|
| `path` | `string` | 否 | 目錄路徑（預設為根目錄） |

### opfs_delete

刪除檔案或目錄。

| 參數 | 型別 | 必填 | 說明 |
|------|------|------|------|
| `path` | `string` | 是 | 檔案/目錄路徑 |

## 使用者互動

### ask_user

向使用者提問，支援自由輸入或結構化選擇。

| 參數 | 型別 | 必填 | 說明 |
|------|------|------|------|
| `question` | `string` | 是 | 問題 |
| `options` | `string[]` | 否 | 選項清單（提供時變為多選題） |
| `multiple` | `boolean` | 否 | 是否允許多選（預設 `false`） |

**逾時：** 5 分鐘無回應後回傳 `{ answer: null, reason: "timeout" }`。

**回傳值：**
```json
{ "answer": "使用者的回答文字" }
```

### execute_script

在頁面或沙箱中執行 JavaScript 程式碼。

| 參數 | 型別 | 必填 | 說明 |
|------|------|------|------|
| `code` | `string` | 是 | JavaScript 程式碼 |
| `target` | `string` | 是 | `"page"` 或 `"sandbox"` |
| `tab_id` | `number` | 否 | `target` 為 `page` 時要導向的分頁（預設為目前活動分頁）；沙箱模式忽略 |

**執行環境比較：**

| 環境 | DOM | 頁面 JS | 擴充套件 blob URL | 最適用於 |
|------|-----|---------|---------------|---------|
| `target: "page"`（始終為 MAIN 世界） | 是 | 是 | 否 | 讀取/操作 DOM、呼叫頁面函數、讀取頁面變數 |
| `target: "sandbox"` | 否 | 否 | 否 | 純計算 |

> `page` 模式始終在頁面的 MAIN 世界中執行，與頁面共享 `window` — 因此無法存取擴充套件自身的 blob URL（例如 `opfs_read` 在 blob 模式下回傳的位址）。需要處理 blob URL 時請改用 SkillScript。

## 子代理

### agent

產生獨立的子代理來處理複雜的子任務。

| 參數 | 型別 | 必填 | 說明 |
|------|------|------|------|
| `prompt` | `string` | 是 | 子任務描述 |
| `description` | `string` | 否 | 簡短標籤（幾個字，用於 UI 顯示） |
| `type` | `string` | 否 | 子代理類型（見下表），預設 `"general"` |
| `tab_id` | `number` | 否 | 傳給子代理的分頁 ID；子代理將在該分頁上操作 |

**子代理類型：**

| 類型 | 說明 | 可用工具 |
|------|------|---------|
| `researcher` | 資訊檢索（唯讀） | web_search、web_fetch、頁面內容讀取 |
| `page_operator` | 瀏覽器自動化 | 分頁管理、DOM 操作、頁面互動 |
| `general` | 通用（預設） | 所有工具 |

**特點：**
- 子代理有自己獨立的對話上下文
- **無法**使用 `ask_user` 或 `agent`（防止遞迴）
- 子代理的事件透過 `sub_agent_event` 傳遞給父對話

## 任務管理

這組工具管理對話中的暫時任務清單（在記憶體中，不會持久化）。

### create_task

| 參數 | 型別 | 必填 | 說明 |
|------|------|------|------|
| `subject` | `string` | 是 | 任務標題 |
| `description` | `string` | 否 | 詳細描述 |

### update_task

| 參數 | 型別 | 必填 | 說明 |
|------|------|------|------|
| `task_id` | `string` | 是 | 任務 ID |
| `status` | `string` | 否 | `"pending"` / `"in_progress"` / `"completed"` |
| `subject` | `string` | 否 | 新標題 |
| `description` | `string` | 否 | 新描述 |

### list_tasks

無參數；回傳所有任務的簡要清單。

> 任務管理工具主要供 AI 在處理複雜多步驟任務時追蹤自身進度；任務資料不會持久化。
