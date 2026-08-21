---
slug: /use/use
title: クイックスタート
---

ScriptCat はユーザースクリプトを実行できるブラウザ拡張機能で、Tampermonkey スクリプトと互換性があり、さらに多くの機能を提供しています。バグや提案がある場合は、[GitHub リポジトリ](https://github.com/scriptscat/scriptcat) からフィードバックできます。

## 拡張機能のインストール

以下の拡張ストアからインストールできます：

| ブラウザ | ストアリンク | ステータス |
| --- | --- | --- |
| Chrome | [安定版](https://chrome.google.com/webstore/detail/scriptcat/ndcooeababalnlpkfedmmbbbgkljhpjf) [ベータ版](https://chromewebstore.google.com/detail/%E8%84%9A%E6%9C%AC%E7%8C%AB-beta/jaehimmlecjmebpekkipmpmbpfhdacom?authuser=0&hl=zh-CN) | ✅ 利用可能 |
| Edge | [安定版](https://microsoftedge.microsoft.com/addons/detail/scriptcat/liilgpjgabokdklappibcjfablkpcekh) [ベータ版](https://microsoftedge.microsoft.com/addons/detail/scriptcat-beta/nimmbghgpcjmeniofmpdfkofcedcjpfi) | ✅ 利用可能 |
| Firefox | [安定版](https://addons.mozilla.org/zh-CN/firefox/addon/scriptcat/) [ベータ版](https://addons.mozilla.org/zh-CN/firefox/addon/scriptcat-pre/) | ✅ MV2 |

### その他のブラウザ

上記リストにないブラウザの場合、[Github Release](https://github.com/scriptscat/scriptcat/releases) ページから `zip`/`crx` ファイルをダウンロードして手動でインストールできます。

### パックされていない拡張機能の読み込みインストール {#load-unpacked-extension-installation}

① [Github Release](https://github.com/scriptscat/scriptcat/releases) または[コミュニティダウンロード](https://bbs.tampermonkey.net.cn/thread-3068-1-1.html) ページから `zip` ファイルをダウンロード。`crx` ファイルの場合は、拡張子を `zip` に変更。

② プラグインを保存するフォルダを準備し、上記の zip ファイルをそのフォルダに展開。展開後は以下のようになります（**注意：このフォルダは削除または移動しないでください。否則、拡張機能が正しく動作しません**）![download-zip](./use.assets/download-zip.webp)

③ ブラウザの拡張機能管理インターフェースを開き、パックされていない拡張機能を読み込み（[開発者モードを有効にして Manifest v3 ScriptCat をサポート](/docs/use/open-dev/) を参照して先に開発者モードを有効にしてください）

- 1. **Edge** ![edge-load-unpacked](./use.assets/edge-load-unpacked.webp)
- 2. **Chrome** ![chrome-load-unpacked](./use.assets/chrome-load-unpacked.webp)

④ ステップ ② で作成したフォルダを選択（読み込み完了後、ScriptCat アイコンが拡張機能管理インターフェースの拡張機能リストに表示され、ブラウザのアドレスバーの右上の拡張機能ボタンをクリックしても確認できます）

- 1. **Edge** ![edge-load-unpacked-img](./use.assets/edge-load-unpacked-img.webp)
- 2. **Chrome** ![chrome-load-unpacked-img](./use.assets/chrome-load-unpacked-img.webp)

⑤ 右上の ScriptCat アイコンをクリックし、出現するインターフェースの右上の `┆` > スクリプトを取得をクリックすると、スクリプトサイトでスクリプトを検索してインストールできます。

注意：この方法でインストールされた拡張機能は自動的に更新されません。更新が必要な場合は、上記の手順を繰り返して拡張機能を更新してください（ファイルを置き換え、一度再読み込み）。


## スクリプトの取得

> スクリプトの他に、[Tampermonkey 中国語フォーラム](https://bbs.tampermonkey.net.cn/) や[スクリプト開発ガイド](https://learn.scriptcat.org/) からもスクリプト情報やチュートリアルを取得できます。

### ScriptCat スクリプトサイト

[ScriptCat スクリプトサイト](https://scriptcat.org/) はこの拡張機能のスクリプトサイトで、自分で書いたスクリプトを公開できます。

- 新しいスクリプトサイト
- バックグラウンドスクリプト/スケジュールスクリプト
- ユーザーフレンドリーなインターフェース

### Userscript.Zone 検索

[Userscript.Zone 検索](https://www.userscript.zone/?utm_source=tm.net&utm_medium=scripts) は、適切な URL やドメインを入力してユーザースクリプトを検索できる新しいサイトです。

- 大量のスクリプトリソース
- 適切なユーザースクリプトが簡単に見つかる
- レビュー済みのユーザースクリプトページまたは少なくともコメント機能があるページのスクリプトのみ表示

### GreasyFork

[GreasyFork](https://greasyfork.org/) は、ユーザースクリプトのホスティングと共有に広く使用されるプラットフォームです。Jason Barnabe によって作成され、セキュリティとオープンソースの透明性を重視しています。

- 大量のスクリプトリソース
- Github からスクリプトを同期する機能がある
- 非常に活発な[オープンソース開発モデル](https://github.com/JasonBarnabe/greasyfork)

### GitHub/Gist

[Github と Gist でスクリプトリソースを検索できます。](https://gist.github.com/search?l=JavaScript&o=desc&q="%3D%3DUserScript%3D%3D"&s=updated)

## オンボーディングツアー

ScriptCat をインストールすると、ダッシュボードを開くと自動的にオンボーディングツアーが開始されます（左側バーの「ヘルプセンター」からいつでも再開できます）。ツアーの内容：

- [スクリプトのインストール](/en/docs/use/script_installation/)：スクリプトマーケットプレイスからのインストール、[バックグラウンドスクリプト](/en/docs/dev/background/) のサポートを含む
- 管理と操作：編集、実行/停止、[UserConfig](/en/docs/dev/config/)
- [バックアップ](/en/docs/use/sync/) と[他のマネージャーからの移行](/en/docs/use/from-other/migrate-from-tampermonkey/)
- [スクリプト同期](/en/docs/use/sync/)
- [サブスクリプション](/en/docs/dev/subscribe/)
