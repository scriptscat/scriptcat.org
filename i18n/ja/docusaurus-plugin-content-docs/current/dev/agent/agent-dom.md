---
title: DOM操作API
---

`@grant CAT.agent.dom`

DOM操作APIは、ブラウザページの完全な自動化を提供します：ナビゲーション、コンテンツ読み取り、スクリーンショット、フォームインタラクション、DOM監視。

## タブ管理

### listTabs — タブの一覧

```javascript
const tabs = await CAT.agent.dom.listTabs();
```

すべての開いたタブの情報を返します。

**`TabInfo[]`を返します：**

| フィールド | 型 | 説明 |
|------|------|------|
| `tabId` | `number` | タブID |
| `url` | `string` | 現在のURL |
| `title` | `string` | ページタイトル |
| `active` | `boolean` | 現在のアクティブタブかどうか |
| `windowId` | `number` | 所属するウィンドウのID |
| `discarded` | `boolean` | 破棄（サスペンド）されたかどうか |

## ナビゲーション

### navigate — ページをナビゲート

```javascript
const result = await CAT.agent.dom.navigate(url, options?);
```

**パラメータ：**

| パラメータ | 型 | デフォルト | 説明 |
|------|------|--------|------|
| `url` | `string` | — | 対象URL（必須） |
| `options.tabId` | `number` | 現在のアクティブタブ | 使用するタブ |
| `options.waitUntil` | `boolean` | `true` | ページの読み込み完了を待つかどうか |
| `options.timeout` | `number` | `30000` | タイムアウト（ミリ秒） |

**`NavigateResult`を返します：**

```typescript
{ tabId: number; url: string; title: string }
```

## コンテンツの読み取り

### readPage — ページコンテンツを読み取り

```javascript
const page = await CAT.agent.dom.readPage(options?);
```

ページDOMを構造化テキストに変換し、`<script>`、`<style>`、`<noscript>`、`<svg>`、`<link[rel=stylesheet]>`など関連のない要素を自動的に除去します。

**パラメータ：**

| パラメータ | 型 | デフォルト | 説明 |
|------|------|--------|------|
| `options.tabId` | `number` | 現在のアクティブタブ | 使用するタブ |
| `options.selector` | `string` | — | CSSセレクタ；一致する要素のコンテンツのみ返す |
| `options.maxLength` | `number` | — | 最大文字数；これを超えると切り捨て |
| `options.removeTags` | `string[]` | — | 追加で除去するタグ名 |

**`PageContent`を返します：**

| フィールド | 型 | 説明 |
|------|------|------|
| `title` | `string` | ページタイトル |
| `url` | `string` | ページURL |
| `html` | `string` | 処理されたページテキストコンテンツ |
| `truncated` | `boolean` | コンテンツが切り捨てられたかどうか |
| `totalLength` | `number` | 元のコンテンツの総長 |

### screenshot — スクリーンショットを撮る

```javascript
const shot = await CAT.agent.dom.screenshot(options?);
```

**パラメータ：**

| パラメータ | 型 | デフォルト | 説明 |
|------|------|--------|------|
| `options.tabId` | `number` | 現在のアクティブタブ | 使用するタブ |
| `options.quality` | `number` | `80` | JPEG品質（0-100） |
| `options.fullPage` | `boolean` | `false` | フルページをキャプチャ |
| `options.selector` | `string` | — | CSSセレクタ；一致する要素の領域のみキャプチャ |
| `options.saveTo` | `string` | — | OPFSワークスペースに保存するパス |

**`ScreenshotResult`を返します：**

| フィールド | 型 | 説明 |
|------|------|------|
| `dataUrl` | `string` | base64データURL |
| `path` | `string` | OPFS保存パス（`saveTo`使用時） |
| `size` | `number` | ファイルサイズ（`saveTo`使用時） |

**キャプチャモードの選択方法：**

| シナリオ | 動作 |
|------|------|
| `selector`指定あり | CDPで要素の境界を特定し、スクリーンショットをクロップ |
| バックグラウンドタブ | CDPスクリーンショットを試行；失敗した場合、タブを有効にして`captureVisibleTab`を使用 |
| フォアグラウンドタブ | `captureVisibleTab`を直接使用 |

```javascript
// スクリーンショットをOPFSに保存
const shot = await CAT.agent.dom.screenshot({
  saveTo: "screenshots/page.png",
  quality: 90
});
console.log(`${shot.path}に保存、サイズ ${shot.size} バイト`);
```

## ページインタラクション

### click — 要素をクリック

```javascript
const result = await CAT.agent.dom.click(selector, options?);
```

**パラメータ：**

| パラメータ | 型 | デフォルト | 説明 |
|------|------|--------|------|
| `selector` | `string` | — | CSSセレクタ（必須） |
| `options.tabId` | `number` | 現在のアクティブタブ | 使用するタブ |
| `options.trusted` | `boolean` | `false` | CDPを使用して実際のマウスイベントをディスパッチ |

**`ActionResult`を返します：**

| フィールド | 型 | 説明 |
|------|------|------|
| `success` | `boolean` | 成功したかどうか |
| `navigated` | `boolean` | クリックがページナビゲーションをトリガーしたかどうか |
| `url` | `string` | ナビゲーション後の新しいURL |
| `newTab` | `boolean` | 新しいタブが開かれたかどうか |

**`trusted` vs. 通常のクリック：**

- `trusted: false`（デフォルト）— 注入されたJS経由で`element.click()`をシミュレート；高速だが、一部のサイトでは非正規イベントとして検出される可能性がある
- `trusted: true` — Chrome DevTools Protocol経由で実際のマウスイベントを送信；実際のユーザーインタラクションと区別がつかないが、デバッガー権限が必要

### fill — フォームフィールドに入力

```javascript
const result = await CAT.agent.dom.fill(selector, value, options?);
```

**パラメータ：**

| パラメータ | 型 | 説明 |
|------|------|------|
| `selector` | `string` | CSSセレクタ（必須） |
| `value` | `string` | 入力する値（必須） |
| `options.tabId` | `number` | 使用するタブ |
| `options.trusted` | `boolean` | CDPを使用してキーボード入力をシミュレート |

**動作：**
- 通常モード：`element.value`を設定し、`input`イベントをディスパッチ
- 信頼モード：CDPで要素にフォーカス → 1文字ずつ入力

### scroll — ページをスクロール

```javascript
const result = await CAT.agent.dom.scroll(direction, options?);
```

**パラメータ：**

| パラメータ | 型 | 説明 |
|------|------|------|
| `direction` | `"up" \| "down" \| "top" \| "bottom"` | スクロール方向（必須） |
| `options.tabId` | `number` | 使用するタブ |
| `options.selector` | `string` | ページ全体ではなく特定のコンテナをスクロール |

**`ScrollResult`を返します：**

| フィールド | 型 | 説明 |
|------|------|------|
| `scrollTop` | `number` | スクロール後の位置 |
| `scrollHeight` | `number` | 総コンテンツ高さ |
| `clientHeight` | `number` | ビューポートの高さ |
| `atBottom` | `boolean` | 画面下部にスクロールしたかどうか |

### waitFor — 要素を待機

```javascript
const result = await CAT.agent.dom.waitFor(selector, options?);
```

指定された要素がページに表示されるまでポーリングします（500msごとにチェック）。

**パラメータ：**

| パラメータ | 型 | デフォルト | 説明 |
|------|------|--------|------|
| `selector` | `string` | — | CSSセレクタ（必須） |
| `options.tabId` | `number` | 現在のアクティブタブ | 使用するタブ |
| `options.timeout` | `number` | `10000` | タイムアウト（ミリ秒） |

**`WaitForResult`を返します：**

| フィールド | 型 | 説明 |
|------|------|------|
| `found` | `boolean` | 要素が見つかったかどうか |
| `element` | `object` | 要素情報（`found=true`の場合のみ） |
| `element.selector` | `string` | 一致したセレクタ |
| `element.tag` | `string` | タグ名 |
| `element.text` | `string` | テキストコンテンツ |
| `element.role` | `string` | ARIAロール |
| `element.type` | `string` | inputタイプ |
| `element.visible` | `boolean` | 表示されているかどうか |

## スクリプト実行

### executeScript — JavaScriptを実行

```javascript
const result = await CAT.agent.dom.executeScript(code, options?);
```

**パラメータ：**

| パラメータ | 型 | デフォルト | 説明 |
|------|------|--------|------|
| `code` | `string` | — | JavaScriptコード（必須） |
| `options.tabId` | `number` | 現在のアクティブタブ | 使用するタブ |

> コードは常にページの**MAIN世界**で実行されます（ページのJSと同じ`window`オブジェクトを共有）、したがってページの関数を直接呼び出し、ページ変数を直接読み取ることができます — しかし同じ理由で**拡張機能のblob URLにはアクセスできません**（例：`CAT.agent.opfs.read`の`"blob"`モードで返された`Blob`から`URL.createObjectURL()`で作成した`blob:` URL）。分離されたコンテキストでblob URLで作業する必要がある場合は、SkillScriptを使用してください（[Skill開発](../agent-skill-dev)を参照）。

```javascript
// ページ自身のJS関数を呼び出し / ページ変数を読み取り
const data = await CAT.agent.dom.executeScript(
  "return window.__APP_STATE__"
);

// DOMコンテンツを読み取り
const title = await CAT.agent.dom.executeScript(
  "return document.querySelector('h1')?.textContent"
);
```

> コードは実行のために`new Function()`でラップされ、`return`値をサポートします。タイムアウトは30秒です。

## DOM監視

Chrome DevTools Protocolを使用して、ページのDOM変更とダイアログイベントを監視します。

### startMonitor — 監視を開始

```javascript
await CAT.agent.dom.startMonitor(tabId);
```

指定されたタブのDOM変更とダイアログ（alert/confirm/prompt）の監視を開始します。

### stopMonitor — 監視を停止

```javascript
const result = await CAT.agent.dom.stopMonitor(tabId);
```

監視を停止し、収集された変更を返します。

**`MonitorResult`を返します：**

| フィールド | 型 | 説明 |
|------|------|------|
| `dialogs` | `Array<{ type, message }>` | ダイアログのリスト |
| `addedNodes` | `Array<{ tag, id?, class?, role?, text }>` | 新しく追加されたDOMノードの概要 |

> `addedNodes`はノードIDで重複が排除され、50エントリに制限されます。ページから削除されたか表示されないノードは自動的にスキップされます。`text`はノードの`outerHTML`から抽出されたプレーンテキストで、300文字に切り捨てられます。

### peekMonitor — 監視状態を確認

```javascript
const status = await CAT.agent.dom.peekMonitor(tabId);
```

破壊的でない方法で現在の監視状態を確認します。

**`MonitorStatus`を返します：**

| フィールド | 型 | 説明 |
|------|------|------|
| `hasChanges` | `boolean` | 変更があるかどうか |
| `dialogCount` | `number` | ダイアログの数 |
| `nodeCount` | `number` | 新しく追加されたノードの数 |

## 完全な例

```javascript
// ==UserScript==
// @name        自動フォーム入力
// @match       https://example.com/form
// @grant       CAT.agent.dom
// ==/UserScript==

// フォームの読み込みを待機
await CAT.agent.dom.waitFor("form#signup", { timeout: 5000 });

// フォームに入力
await CAT.agent.dom.fill("input[name=username]", "test_user");
await CAT.agent.dom.fill("input[name=email]", "test@example.com");

// 同意チェックボックスをクリック
await CAT.agent.dom.click("input[type=checkbox]#agree");

// 入力済みフォームのスクリーンショット
await CAT.agent.dom.screenshot({
  selector: "form#signup",
  saveTo: "screenshots/form-filled.png"
});

// 送信ボタンをクリック
const result = await CAT.agent.dom.click("button[type=submit]", { trusted: true });
if (result.navigated) {
  console.log("フォーム送信成功、ナビゲート先:", result.url);
}
```
