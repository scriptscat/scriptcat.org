---
title: メタデータブロック
---

`==UserScript==` 内のコンテンツは、スクリプトが必要とする権限やスクリプトに関する情報を記述します。スクリプトの最初に配置します。

```js
// ==UserScript==
// @name         新しいユーザースクリプト
// @namespace    https://bbs.tampermonkey.net.cn/
// @version      0.1.0
// @description  try to take over the world!
// @author       You
// @crontab      * * once * *
// ==/UserScript==
```

## 主要な値

### name

スクリプト名

### namespace

スクリプトの名前空間。`name + namespace` でスクリプトのユニーク性を決定します。

### version

スクリプトのバージョン。[セマンティックバージョニング](https://semver.org/) に従うことをお勧めします。バージョンの変更が検出されると、ユーザーに更新が促されます。

### description

スクリプトの詳細な説明

### author

スクリプトの作者

### run-at

スクリプトの実行タイミング

| 値 | 実行タイミング | サポート開始バージョン |
|---|---|---|
| document-start | フロントエンドで URL が一致するとすぐにページにスクリプトを注入 | v0.3.0 |
| document-end | DOM の読み込み完了後にスクリプトを注入。ページスクリプトや画像がまだ読み込み中の場合がある | v0.3.0 |
| document-idle | すべてのコンテンツの読み込み完了後にスクリプトを注入 | v0.3.0 |
| document-body | ページに `body` 要素が存在する場合のみスクリプトを注入 | v0.6.2 |
| document-menu | 右クリック時にメニューを表示。スクリプト名をメニュー名として使用 | v0.3.4-v0.9.4 (🔥 削除済み) |

メニューのアイコンについては、[Unicode シンボル](https://unicode-table.com/en/) や [絵文字](https://www.emojiall.com/en-US/) を参照してください。

### run-in

スクリプトを注入する環境を指定します：`@run-in normal-tabs` は通常のタブ、`@run-in incognito-tabs` はプライベートタブです。

### early-start (v1.1.0+)

`run-at` が `document-start` の場合、スクリプトはできるだけ早く実行されますが、ページより早く読み込まれることは保証されません。

`@run-at document-start` を定義した後に `@early-start` を追加すると、スクリプトがページより早く読み込まれます：[例](https://github.com/scriptscat/scriptcat/blob/main/example/early-start.js)

### inject-into

:::tip

コンテンツスクリプト環境（`content`）では、`unsafeWindow` はその環境自体の現在の `window` を指し、ページの `window` にはアクセスできません。

ScriptCat は CSP の制限を自動的にチェックして `content` または `page` として注入するかどうかを判断する機能（Tampermonkey の `@inject-into auto`）をサポートしていません。

:::

スクリプトの注入先を指定します。`page` と `content` をサポートし、デフォルトは `page` です。

- `page`：スクリプトはページ環境に注入され、`unsafeWindow` を使用してページの `window` と `DOM` にアクセスできます
- `content`：スクリプトはコンテンツスクリプト環境に注入され、ページの `window` オブジェクトには直接アクセスできませんが、ページ `DOM` にアクセスでき、`CSP` の制限を受けません

### storageName 🧪

`Value` の保存スペース。同じ `storageName` 下のデータはスクリプト間で共有および通信できます。ScriptCat 固有の機能です。

### background

このスクリプトをバックグラウンドスクリプトとしてマークします。詳細は [バックグラウンドスクリプト](./background.md#background-script-background) を参照してください。

### crontab

スクリプトをスケジュールスクリプトとしてマークします。cron 式の値が必要です。cron 式は1つだけ存在でき、バックグラウンド環境でそのスケジュールで実行されます。詳細は [スケジュールスクリプト](./background.md#scheduled-script-crontab) を参照してください。

### match

`match` に一致する URL のみでスクリプトを実行します。[マッチパターン](https://developer.chrome.com/docs/extensions/v3/match_patterns/) に従います。`match` では `*` がワイルドカード、`tld` がトップレベルドメインに一致し、`*.` で始まるドメインは `xxx.com` にも一致します：

| 値 | 正しい例 | 正しくない例 |
|---|---|---|
| `http://scriptcat.org/doc/match` | `http://scriptcat.org/doc/match` | `http://scriptcat.org/doc/runAt` |
| `*://*/param?*` | `https://scriptcat.org/param` \| `http://scriptcat.org/param?search=tampermonkey` | `https://scriptcat.org/test/param` |
| `http*://scriptcat.org/*` | `https://scriptcat.org/` \| `https://scriptcat.org/doc` | `https://doc.scriptcat.org/` |

### include

`*` を使用したあいまい一致をサポートし、非標準 URL を許可します

### exclude

一致すべきでない URL。`include` と同じ式構文を使用します

### grant

API 権限をリクエストします。API はリクエストされた後にのみ呼び出できます。権限リストは：[API ドキュメント](./api.md) および [CAT API ドキュメント](./cat-api.md) を参照してください。

2つの特殊な値：

- **none**：スクリプトはサンドボックス環境で実行されず、ページ環境で直接実行されます。この環境では GM API は使用できませんが、ページの `window` オブジェクトに直接アクセスできます。
- **unsafeWindow**：サンドボックス環境でページの `window` オブジェクトにアクセスする必要がある場合は、`unsafeWindow` を使用します。（Tampermonkey はこれを宣言する必要はありません。互換性のためのみ残されています。）

### connect

サイトへのアクセス権限をリクエストします。`GM_cookie` と `GM_xmlhttpRequest` を参照してください。`native` モードの `GM_download` も `@connect` を認識します（未宣言のホストは確認プロンプトを表示します）。

### resource

リソースファイルを含めます。`@resource` を宣言した後、`GM_getResourceText`/`GM_getResourceURL` を使用して情報を取得できます。

```js
// @resource icon https://bbs.tampermonkey.net.cn/favicon.ico
// @resource html https://bbs.tampermonkey.net.cn/
// @resource xml https://bbs.tampermonkey.net.cn/sitemap.xml
// リソース整合性検証を追加
// @resource icon https://bbs.tampermonkey.net.cn/favicon.ico#md5-xxx,sha256-xxx
```

### require

外部 JS ファイルを含めます。[リソース整合性検証](#リソース整合性検証) をサポートします

### require-css

外部 CSS ファイルを含めます。[リソース整合性検証](#リソース整合性検証) をサポートします

### noframes

スクリプトが `<frame>` 内で実行されないことをマークします

### definition

`.d.ts` ファイルの参照アドレス。エディタの自動補完ヒントを有効にします

### antifeature

スクリプトマーケットプレイスに関連します。歓迎されない機能にはこの説明値でフラグを付ける必要があります：

```js
// @antifeature ads このスクリプトには広告が含まれています
// @antifeature referral-link このスクリプトは著者のリファラルリンクに変更またはリダイレクトします
```

## 追加の説明値

### license

現在のスクリプトのオープンソースライセンス

### updateURL

更新チェックには、リモートスクリプトに `@version` タグが必要です。

スクリプトが更新をチェックするリンク。設定されていない場合、デフォルトではリンクの `user.js => meta.js`、`user.js` がない場合は現在のリンクです。

`@updateURL` が設定されている場合、`@updateURL` が機能するには `@downloadURL` も設定する必要があります。

### downloadURL

スクリプト更新のダウンロードアドレス

### supportURL

サポートサイト、バグ報告ページ

### homepage, homepageURL, website

スクリプトホームページ

### source

スクリプトソースコードページ

### icon, iconURL, defaulticon

スクリプトアイコン

### icon64, icon64URL

64x64 サイズのスクリプトアイコン

### Notes

### リソース整合性検証

- md5、sha1、sha256、sha384、または sha512 を使用してリソースの改ざんを検証します。複数の検証方法を `;` または `,` で区切ることができます。
- [W3C の推奨](https://w3c.github.io/webappsec-subresource-integrity/#hash-collision-attacks) により、md5 と sha1 は推奨されません。sha384 以上のハッシュアルゴリズムを使用してください。

例：

```js
// @require https://cdn.jsdelivr.net/npm/darkmode-js@1.5.7/lib/darkmode-js.min.js#md5-d55836f30c097da753179f82fa6f108f,sha256-a476ab8560837a51938aa6e1720c8be87c2862b6221690e9de7ffac113811a90
```
