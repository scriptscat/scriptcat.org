---
title: 外部存取（CLI 和 AI 客戶端）
sidebar_label: 外部存取
---

**外部存取** 讓本地命令列程式和支援 [MCP](https://modelcontextprotocol.io/) 的 AI 客戶端透過 [sctl](https://github.com/scriptscat/sctl) 管理 ScriptCat 中的腳本。

```text
AI client ── stdio MCP ──▶ sctl mcp ── local control API ──▶ sctl serve ── WebSocket ──▶ ScriptCat
CLI ────────────────────────────────────────────────────────▲
```

`sctl serve` 是一個單獨的本地守護進程，必須明確啟動。`sctl mcp` 和請求命令永遠不會自動啟動它。

:::warning 監聽器預設為本地
sctl 預設監聽 `127.0.0.1`。只有在明確傳遞 `--listen-address` 時才監聽其他介面。`ws://` 不加密業務流量，僅在受信任的網路上使用非預設位址。
:::

## 1. 安裝 sctl

```bash
curl -fsSL https://raw.githubusercontent.com/scriptscat/sctl/main/scripts/install.sh | sh
```

或 Windows PowerShell：

```powershell
irm https://raw.githubusercontent.com/scriptscat/sctl/main/scripts/install.ps1 | iex
```

```bash
sctl version
```

## 2. 啟動守護進程並註冊

### 2.1 選擇資料目錄

```bash
export SCTL_DATA_DIR=/absolute/path/to/sctl-data
sctl serve
sctl status
sctl mcp
```

### 2.2 啟動守護進程

```bash
sctl serve
```

### 2.3 在 ScriptCat 中啟用並配對

1. 在 ScriptCat 中開啟**設定 → 工具 → 外部存取**並開啟開關。
2. 確認 **sctl 位址**與守護進程匹配。
3. 在另一個終端中執行：

   ```bash
   sctl connect
   ```

4. 在「註冊 sctl」對話框中輸入 8 字元的終端代碼。
5. 驗證連線：

   ```bash
   sctl status
   ```

:::warning 配對代碼僅限終端
代碼類似 `A1B2-C3D4`，2 分鐘後過期，僅使用一次。永遠不要將其貼到 AI 聊天、Issue、日誌或 MCP 配置中。
:::

## 4. 命令列用法

```bash
sctl get                         # 列出腳本
sctl get <uuid>                  # 讀取元資料
sctl get <uuid> -o source        # 印出完整原始碼
sctl get <uuid> -o source --lines 20-80
sctl grep <uuid> "fetch("         # 文字搜尋原始碼
sctl grep <uuid> "pattern" -E    # 正則表達式
sctl install <url|file>
sctl edit <uuid> --replace OLD --with NEW
sctl enable <uuid>
sctl disable <uuid>
sctl delete <uuid>
sctl status
```

## 5. 連接 AI 客戶端（MCP）

```json
{
  "mcpServers": {
    "scriptcat": {
      "command": "/absolute/path/to/sctl",
      "env": {
        "SCTL_DATA_DIR": "/absolute/path/to/sctl-data"
      },
      "args": ["mcp", "--name", "my-ai-client"]
    }
  }
}
```

## 6. 審計和撤銷

- `sctl status` 顯示守護進程版本、擴充功能連線狀態和最近的安全事件。
- 「停止外部存取」會斷開連線、刪除配對狀態並清除工作階段許可。

## 7. 疑難排解 {#troubleshooting}

**守護進程無法連線** — 先執行 `sctl serve`。

**控制通道認證失敗** — 確認 `serve`、CLI 命令和 MCP 進程解析到相同的絕對資料目錄。

**狀態顯示「連線失敗」** — 確認守護進程正在執行且位址匹配。

**命令沒有回傳** — 檢查瀏覽器是否有原始碼洩露或寫入確認頁面。

**尋找日誌** — 日誌位於 `<data-dir>/logs/`。

| 平台 | 日誌目錄 |
|---|---|
| macOS | `~/Library/Application Support/sctl/logs/` |
| Windows | `%LOCALAPPDATA%\sctl\logs\` |
| Linux | `~/.config/sctl/logs/` |
