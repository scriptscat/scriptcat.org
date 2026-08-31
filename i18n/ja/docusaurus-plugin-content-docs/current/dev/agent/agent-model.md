---
title: モデルクエリAPI
---

`@grant CAT.agent.model`

モデルクエリAPIは、ユーザーが管理ページで設定したモデルへの読み取り専用アクセスを提供します。セキュリティ上、APIキーはスクリプトに公開されることはありません。

## list — すべてのモデルを一覧表示

```javascript
const models = await CAT.agent.model.list();
```

**`ModelSummary[]` を返します：**

| フィールド | 型 | 説明 |
|------|------|------|
| `id` | `string` | モデル設定ID |
| `name` | `string` | ユーザー定義の表示名（例：「GPT-4o」、「Claude Sonnet」） |
| `provider` | `"openai" \| "anthropic"` | プロバイダータイプ |
| `apiBaseUrl` | `string` | APIベースURL |
| `model` | `string` | プロバイダーAPIに送信されるモデル識別子（例：`gpt-4o`、`claude-sonnet-4-20250514`） |
| `maxTokens` | `number` | 最大出力トークン（未設定の場合は省略） |

> 注意：返されるオブジェクトには `apiKey` フィールドは **含まれません**。

## get — 特定のモデルを取得

```javascript
const model = await CAT.agent.model.get(modelId);
```

モデルが存在しない場合は `null` を返します。

## getDefault — デフォルトモデルIDを取得

```javascript
const defaultId = await CAT.agent.model.getDefault();
```

ユーザーが設定したデフォルトモデルIDを返します。設定されていない場合は空の文字列を返します。

## getSummary — 要約モデルIDを取得

```javascript
const summaryModelId = await CAT.agent.model.getSummary();
```

ユーザーが要約タスク（会話履歴の自動圧縮など）用に特別に設定した軽量モデルのIDを返します。別途設定されていない場合、システムはデフォルトモデルにフォールバックし、このメソッドは空の文字列を返します。

## 使用シナリオ

### ユーザーにモデルを選択させる

```javascript
// ==UserScript==
// @name        Model picker example
// @grant       CAT.agent.model
// @grant       CAT.agent.conversation
// ==/UserScript==

const models = await CAT.agent.model.list();
const defaultId = await CAT.agent.model.getDefault();

// リストをユーザーに表示して選択させる
const selectedModel = models.find(m => m.id === defaultId) || models[0];

const conv = await CAT.agent.conversation.create({
  model: selectedModel.id
});
```

### 特定のモデルの詳細を取得

```javascript
const model = await CAT.agent.model.get("my-model-id");
if (model) {
  console.log(`${model.name} (${model.provider}), max output ${model.maxTokens ?? "unset"} tokens`);
}
```
