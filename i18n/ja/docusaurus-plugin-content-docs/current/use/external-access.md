---
title: 外部アクセス（CLI と AI クライアント）
sidebar_label: 外部アクセス
---

**外部アクセス** を使用すると、ローカルのコマンドラインプログラムや [MCP](https://modelcontextprotocol.io/) 対応の AI クライアントが [sctl](https://github.com/scriptscat/sctl) を通じて ScriptCat のスクリプトを管理できます。

```text
AI client ── stdio MCP ──▶ sctl mcp ── local control API ──▶ sctl serve ── WebSocket ──▶ ScriptCat
CLI ────────────────────────────────────────────────────────▲
```

`sctl serve` は明示的に開始する必要がある別のローカルデーモンです。`sctl mcp` とリクエストコマンドは自動的に開始しません。ScriptCat のポリシーとブラウザの確認 UI が常にソース開示または書き込みが許可されるかどうかを決定します。外部プログラムが自分のリクエストを承認することはできません。

:::warning リスナーはデフォルトでローカルです
sctl はデフォルトで `127.0.0.1` でリッスンします。`--listen-address` を明示的に渡した場合のみ別のインターフェースでリッスンします。`ws://` はビジネストラフィックを暗号化せず、リモートクライアントごとの分離がないため、信頼できるネットワークでのみ非デフォルトアドレスを使用してください。拡張機能とデーモンは、ワンタイムペアリングコードを通じて長期鍵を確立し、以降の接続で相互認証を使用します。
:::

## 1. sctl のインストール

1コマンドで最新リリースをインストール — macOS と Linux：

```bash
curl -fsSL https://raw.githubusercontent.com/scriptscat/sctl/main/scripts/install.sh | sh
```

または Windows PowerShell：

```powershell
irm https://raw.githubusercontent.com/scriptscat/sctl/main/scripts/install.ps1 | iex
```

インストーラーはプラットフォームに合った `sctl-<version>-<os>-<arch>.<ext>` リリースアーカイブをダウンロードし、同じリリースの `checksums.txt` で sha256 を検証し、`sctl` を `~/.local/bin`（macOS/Linux）または `%LOCALAPPDATA%\sctl\bin`（Windows）にインストールします。`SCTL_VERSION` で特定のバージョンを固定できます。`SCTL_INSTALL_DIR` でインストールディレクトリを上書きできます。

sctl は単一の実行ファイルです。[GitHub Releases](https://github.com/scriptscat/sctl/releases) にプラットフォーム用のアーカイブがある場合は、ダウンロードして展開し、`sctl`（Windows では `sctl.exe`）を `PATH` に置くこともできます。

```bash
sctl version
```

## 2. デーモンの開始と登録

登録はワンタイムの手順です。その後、CLI とすべての MCP クライアントが信頼された拡張機能からデーモンへのチャネルを共有します。個別にペアリングしません。

### 2.1 データディレクトリの選択

デーモン、CLI、MCP プロセスは同じデータディレクトリを使用する必要があります。長期ペアリングキー、ローカル制御トークン、ログを保存します。現在のユーザーに固有の絶対パスを選択してください：

```text
/absolute/path/to/sctl-data
```

すべての sctl プロセスに同じ環境変数を設定してください：

```bash
export SCTL_DATA_DIR=/absolute/path/to/sctl-data
sctl serve
sctl status
sctl mcp
```

### 2.2 デーモンの開始

ターミナルでこのコマンドを実行し、プロセスを維持してください：

```bash
sctl serve
```

デフォルトアドレスは `ws://127.0.0.1:8643` です。デーモンは `connect`、`status`、他の CLI コマンド、`sctl mcp` によって自動的に開始されることはありません。

### 2.3 ScriptCat で有効化とペアリング

1. ScriptCat の**設定 → ツール → 外部アクセス**を開き、スイッチをオンにします。
2. **sctl アドレス**がデーモンと一致することを確認します。デフォルトの `ws://127.0.0.1:8643` をそのまま使用してください。
3. `sctl serve` を実行したまま、別のターミナルで以下を実行：

   ```bash
   sctl connect
   ```

4. 「sctl 登録」ダイアログで8文字のターミナルコードを入力。
5. 接続を確認：

   ```bash
   sctl status
   ```

:::warning ペアリングコードはターミナルのみ
コードは `A1B2-C3D4` のような形式で、2分後に期限切れとなり、1回のみ有効です。WebSocket で拡張機能に送信されることはありません。AI チャット、Issue、ログ、MCP 設定に貼り付けないでください。期限切れの場合は `connect` を再実行してください。
:::

## 3. 権限と確認 {#permissions}

| ケパビリティ | デフォルトの動作 |
|---|---|
| スクリプトの一覧取得とメタデータの読み取り | 直接返す |
| スクリプトソースの読み取りまたは検索 | **ソース読み取り**ポリシーに従う |
| スクリプトのインストール、編集、有効化、無効化、削除 | **書き込み**ポリシーに従う |

両方のポリシーは「承認を要求」（デフォルト）と「直接許可」を提供します。

「承認を要求」の場合、リクエストはブラウザの確認ページを開きます。拒否、1回許可、または「このセッションで許可」を選択できます。セッション許可はスクリプトと操作の種類別にキー付けされ、ブラウザの再起動、拡張機能の再読み込み、または外部アクセスの停止時にクリアされます。

「直接許可」は、そのクラスの操作について確認ページをスキップします。ソースに API キー、クッキー、その他の機密情報が含まれる可能性があるため、リスクを受け入れた場合のみ有効にしてください。

## 4. コマンドラインの使用方法

```bash
sctl get                         # List scripts
sctl get <uuid>                  # Read metadata
sctl get <uuid> -o source        # Print full source
sctl get <uuid> -o source --lines 20-80
sctl grep <uuid> "fetch("         # Literal source search
sctl grep <uuid> "pattern" -E    # Regular expression
sctl install <url|file>
sctl edit <uuid> --replace OLD --with NEW
sctl enable <uuid>
sctl disable <uuid>
sctl delete <uuid>
sctl status
```

## 5. AI クライアントの接続（MCP）

まず `sctl serve` が実行中で `status` が接続された拡張機能を報告していることを確認してください。次に、MCP クライアントが別の `sctl mcp` プロセスを起動するように設定します。

```json
{
  "mcpServers": {
    "scriptcat": {
      "command": "/absolute/path/to/sctl",
      "env": {
        "SCTL_DATA_DIR": "/absolute/path/to/sctl-data"
      },
      "args": [
        "mcp",
        "--name",
        "my-ai-client"
      ]
    }
  }
}
```

現在のツール：

| ツール | 目的 | 確認ポリシー |
|---|---|---|
| `scripts_list` | スクリプトサマリーの一覧 | なし |
| `scripts_metadata_get` | 1つのスクリプトのメタデータ読み取り | なし |
| `scripts_source_get` | uuid とオプションの行範囲でソースを読み取り | ソース読み取りポリシー |
| `scripts_source_grep` | ソースを検索し一致する行を返す | ソース読み取りポリシー |
| `scripts_install_request` | スクリプトインストールをリクエスト | 書き込みポリシー |
| `scripts_edit_request` | コンテンツ固定の編集をリクエスト | 書き込みポリシー |
| `scripts_toggle_request` | 有効化または無効化をリクエスト | 書き込みポリシー |
| `scripts_delete_request` | 削除をリクエスト | 書き込みポリシー |

## 6. 監査と取り消し

- 外部アクセスカードの「監査ログを表示」で、このソースにフィルタリングされたログページが開きます。
- `sctl status` はデーモンバージョン、拡張機能の接続状態、最近のセキュリティイベントを表示します。
- 「外部アクセスを停止」で切断し、拡張機能側のペアリング状態を削除し、セッション許可をクリアします。その後、再登録が必要です。

## 7. トラブルシューティング {#troubleshooting}

**デーモンに到達できない**

まず `sctl serve` を実行してください。リクエストコマンドはデーモンを自動的に開始しません。

**制御チャネル認証が失敗する**

`serve`、CLI コマンド、MCP プロセスが同じ絶対データディレクトリを解決していることを確認してください。

**ステータスが「接続失敗」と表示される**

デーモンが実行中で、拡張機能アドレスが一致し、ローカルセキュリティソフトウェアが `127.0.0.1:8643` をブロックしていないことを確認してください。

**コマンドが返されない**

ブラウザでソース開示または書き込みの確認ページがないか確認してください。`Ctrl-C` でリクエストを無効化できます。

**ログの場所**

ログは `<data-dir>/logs/` にあります。

| プラットフォーム | ログディレクトリ |
|---|---|
| macOS | `~/Library/Application Support/sctl/logs/` |
| Windows | `%LOCALAPPDATA%\sctl\logs\` |
| Linux | `~/.config/sctl/logs/` |
