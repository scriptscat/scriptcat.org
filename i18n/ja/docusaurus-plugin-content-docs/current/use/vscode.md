---
title: VSCode でスクリプトを開発する
---

ScriptCat は VSCode でユーザースクリプトを書ける VSCode 拡張機能を提供しています。保存後、変更は自動的にブラウザの ScriptCat に同期されます。手動のコピー＆ペーストは不要で、開発効率が大幅に向上します。

## 前提条件

以下の2つのツールをインストールする必要があります：

1. **ブラウザに ScriptCat 拡張機能をインストール** — まだインストールしていない場合は、[クイックスタート](/docs/use/use/) ガイドに従ってインストールしてください
2. **VSCode に ScriptCat 拡張機能をインストール** — VSCode 拡張マーケットプレイスで「[scriptcat-vscode](https://marketplace.visualstudio.com/items?itemName=CodFrm.scriptcat-vscode)」を検索するか、[GitHub リポジトリ](https://github.com/scriptscat/scriptcat-vscode) からダウンロードしてください

## 接続を確立

インストール後、ブラウザの ScriptCat 拡張機能と VSCode を接続する必要があります：

1. ブラウザの ScriptCat アイコンをクリックして管理パネルを開く
2. **ツール > 開発者ツール** に移動
3. **VSCode サービスに自動接続** を見つけ、有効にして **接続** をクリック

接続が確立されると、VSCode と ScriptCat の間でリアルタイムチャネルが確立されます。

## スクリプトの同期

接続が確立された後、2つの方法から選んでスクリプトを同期できます：

### オプション 1：自動検出モード（推奨）

1. VSCode で `Ctrl + Shift + P`（Mac では `Cmd + Shift + P`）を押してコマンドパレットを開く
2. `scriptcat.autoTarget` と入力して選択
3. それ以降、`.user.js` ファイルを開くたびに保存するたびに、自動的に ScriptCat に同期されます

### オプション 2：指定スクリプトモード

1. VSCode で `Ctrl + Shift + P`（Mac では `Cmd + Shift + P`）を押してコマンドパレットを開く
2. `scriptcat.target` と入力して選択
3. 同期するスクリプトファイルのパスを指定

## 開発ワークフロー

設定が完了すると、開発ワークフローは非常にシンプルです：

1. VSCode で `.user.js` スクリプトを書くか編集
2. `Ctrl + S` を押してファイルを保存
3. スクリプトが自動的にブラウザの ScriptCat に同期される
4. ブラウザに切り替えてページを更新して結果を確認

 entire process requires no manual steps — saving takes effect immediately.

## よくある質問

### 接続できない場合怎么办？

- ブラウザの ScriptCat 拡張機能が実行中であることを確認
- VSCode の ScriptCat 拡張機能がインストールされ有効であることを確認
- ScriptCat 管理パネルの「開発者ツール」ページで接続状態を確認

### 保存後にスクリプトが更新されない？

- ファイル名が `.user.js` で終わることを確認
- `scriptcat.autoTarget` または `scriptcat.target` コマンドを実行したことを確認
- VSCode の出力パネルでエラーメッセージを確認

### VSCode を再起動した後、再接続が必要ですか？

「VSCode サービスに自動接続」が有効になっている場合、VSCode は再起動後に自動的に再接続します — 手動の手順は不要です。
