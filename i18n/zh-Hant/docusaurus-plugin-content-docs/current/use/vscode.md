---
title: 使用 VSCode 開發腳本
---

ScriptCat 提供一個 VSCode 擴充功能，讓您可以在 VSCode 中撰寫使用者腳本。儲存後，變更會自動同步到瀏覽器中的 ScriptCat — 不需要手動複製貼上，大幅提升開發效率。

## 前置條件

您需要安裝以下兩個工具：

1. **在瀏覽器中安裝 ScriptCat 擴充功能** — 如果尚未安裝，請依照[快速入門](/docs/use/use/)指南安裝
2. **在 VSCode 中安裝 ScriptCat 擴充功能** — 在 VSCode 擴充功能市集中搜尋「[scriptcat-vscode](https://marketplace.visualstudio.com/items?itemName=CodFrm.scriptcat-vscode)」，或從 [GitHub 儲存庫](https://github.com/scriptscat/scriptcat-vscode) 下載

## 建立連線

安裝後，您需要將瀏覽器中的 ScriptCat 擴充功能與 VSCode 連接：

1. 點擊瀏覽器中的 ScriptCat 圖示開啟管理面板
2. 前往**工具 > 開發者工具**
3. 找到**自動連線到 VSCode 服務**，啟用它並點擊**連線**

## 同步腳本

建立連線後，您可以選擇以下兩種方式之一來同步腳本：

### 選項 1：自動偵測模式（建議）

1. 在 VSCode 中，按 `Ctrl + Shift + P`（Mac 為 `Cmd + Shift + P`）開啟命令面板
2. 輸入並選擇 `scriptcat.autoTarget`
3. 之後每次開啟或儲存 `.user.js` 檔案時，都會自動同步到 ScriptCat

### 選項 2：指定腳本模式

1. 在 VSCode 中，按 `Ctrl + Shift + P`（Mac 為 `Cmd + Shift + P`）開啟命令面板
2. 輸入並選擇 `scriptcat.target`
3. 指定要同步的腳本檔案路徑

## 開發工作流程

設定完成後，開發工作流程非常簡單：

1. 在 VSCode 中撰寫或編輯您的 `.user.js` 腳本
2. 按 `Ctrl + S` 儲存檔案
3. 腳本自動同步到瀏覽器中的 ScriptCat
4. 切換到瀏覽器並重新整理頁面以查看結果

整個過程不需要手動步驟 — 儲存立即生效。

## 常見問題

### 如果無法連線怎麼辦？

- 確保瀏覽器中的 ScriptCat 擴充功能正在執行
- 確保 VSCode 中的 ScriptCat 擴充功能已安裝並啟用
- 在 ScriptCat 管理面板的「開發者工具」頁面檢查連線狀態

### 儲存後腳本沒有更新？

- 確保檔案名稱以 `.user.js` 結尾
- 確保您已執行 `scriptcat.autoTarget` 或 `scriptcat.target` 命令
- 檢查 VSCode 輸出面板是否有錯誤訊息

### 重新啟動 VSCode 後需要重新連線嗎？

如果「自動連線到 VSCode 服務」已啟用，VSCode 會在重新啟動後自動重新連線 — 不需要手動步驟。
