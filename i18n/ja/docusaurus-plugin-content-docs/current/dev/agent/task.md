---
title: スケジュールタスクAPI
---

`@grant CAT.agent.task`

スケジュールタスクAPIにより、スクリプトはCron式ベースのスケジュールタスクを作成でき、2つの実行モードがあります。

## 実行モード

### 内部モード

Agentシステムにより自動的に処理：
- Cronスケジュールが発火したとき、自動的に会話を作成または再開
- 設定された`prompt`をLLMに送信
- モデルとSkillsを指定可能
- 実行履歴とトークン使用量が自動的に記録

### イベントモード

スクリプト自体により処理：
- Cronスケジュールが発火したとき、スクリプトにイベント通知が送信
- スクリプトは`addListener`でイベントをリッスン
- 処理ロジックは完全にカスタマイズ可能

## create — タスクを作成

```javascript
const task = await CAT.agent.task.create(options);
```

**パラメータ（`AgentTaskCreateOptions`）：**

| パラメータ | 型 | 必須 | 説明 |
|------|------|------|------|
| `name` | `string` | はい | タスク名 |
| `crontab` | `string` | はい | 標準Cron式（5フィールド：分 時 日 月 曜日） |
| `mode` | `"internal" \| "event"` | はい | 実行モード |
| `enabled` | `boolean` | いいえ | 有効かどうか、デフォルトは`true` |
| `notify` | `boolean` | いいえ | 発火時にブラウザ通知を送るかどうか |
| `prompt` | `string` | いいえ | 内部モードのプロンプト |
| `modelId` | `string` | いいえ | 内部モードで使用するモデルID |
| `skills` | `string[]` | いいえ | 内部モードで読み込むSkills |
| `maxIterations` | `number` | いいえ | 内部モードの最大ツール呼び出し回数、デフォルトは`10` |

**`AgentTask`を返します：**

| フィールド | 型 | 説明 |
|------|------|------|
| `id` | `string` | タスクID |
| `name` | `string` | タスク名 |
| `crontab` | `string` | Cron式 |
| `mode` | `string` | 実行モード |
| `enabled` | `boolean` | 有効かどうか |
| `notify` | `boolean` | 通知を送るかどうか |
| `nextruntime` | `number` | 次回実行タイムスタンプ |
| `lastruntime` | `number` | 前回実行タイムスタンプ |
| `conversationId` | `string` | 内部モードの関連会話ID（オプション） |
| `lastRunStatus` | `"success" \| "error"` | 前回の実行ステータス |
| `lastRunError` | `string` | 前回の実行エラーメッセージ |
| `createtime` | `number` | 作成タイムスタンプ |

**Cron式の例：**

| 式 | 説明 |
|--------|------|
| `* * * * *` | 毎分 |
| `0 9 * * *` | 毎日09:00 |
| `0 */2 * * *` | 2時間ごと |
| `30 8 * * 1-5` | 平日08:30 |
| `0 0 1 * *` | 毎月1日00:00 |

## list — すべてのタスクを一覧

```javascript
const tasks = await CAT.agent.task.list();
```

現在のスクリプトが作成したすべてのタスクを返します。

## get — タスクの詳細を取得

```javascript
const task = await CAT.agent.task.get(taskId);
```

タスクが存在しない場合は`undefined`を返します。

## update — タスクを更新

```javascript
const task = await CAT.agent.task.update(taskId, partial);
```

**更新可能なフィールド：**

```javascript
await CAT.agent.task.update(task.id, {
  name: "新しい名前",
  crontab: "0 10 * * *",
  enabled: false,
  prompt: "新しいプロンプト",
  notify: true
});
```

更新後、`nextruntime`が自動的に再計算されます。

## remove — タスクを削除

```javascript
const success = await CAT.agent.task.remove(taskId);
```

## runNow — 即座に実行

```javascript
await CAT.agent.task.runNow(taskId);
```

Cronスケジュールを待たずに、タスクを1回即座に実行します（ノンブロッキング、バックグラウンドで実行）。

## addListener — タスクのトリガーをリッスン

```javascript
const listenerId = await CAT.agent.task.addListener(taskId, callback);
```

**イベントモード**のタスクでのみ使用。Cronスケジュールが発火したときにコールバックが実行されます。

**コールバックパラメータ（`AgentTaskTrigger`）：**

| フィールド | 型 | 説明 |
|------|------|------|
| `taskId` | `string` | タスクID |
| `name` | `string` | タスク名 |
| `crontab` | `string` | Cron式 |
| `triggeredAt` | `number` | トリガータイムスタンプ |

## removeListener — リスナーを削除

```javascript
await CAT.agent.task.removeListener(listenerId);
```

## 完全な例

### 内部モード — AIが自動的に実行

```javascript
// ==UserScript==
// @name        スケジュールニュースダイジェスト
// @match       *://*/*
// @grant       CAT.agent.task
// ==/UserScript==

const task = await CAT.agent.task.create({
  name: "毎日のニュースダイジェスト",
  crontab: "0 9 * * *",       // 毎日9時
  mode: "internal",
  prompt: "今日のテックニュースを検索し、簡潔な要約をOPFSに保存してください",
  skills: ["web-search"],
  maxIterations: 10,
  notify: true
});

console.log("タスク作成完了、次回実行:", new Date(task.nextruntime));
```

### イベントモード — スクリプト自体が処理

```javascript
// ==UserScript==
// @name        スケジュールデータ収集
// @match       *://*/*
// @grant       CAT.agent.task
// @grant       CAT.agent.dom
// ==/UserScript==

const task = await CAT.agent.task.create({
  name: "株式データ収集",
  crontab: "*/30 9-15 * * 1-5", // 平日9-15時、30分ごと
  mode: "event",
  enabled: true,
  notify: false
});

await CAT.agent.task.addListener(task.id, async (trigger) => {
  console.log(`タスクトリガー: ${trigger.name} at ${new Date(trigger.triggeredAt)}`);

  // カスタム収集ロジック
  await CAT.agent.dom.navigate("https://finance.example.com/stock");
  const content = await CAT.agent.dom.readPage({ selector: ".stock-table" });

  // データを処理...
  console.log("収集完了");
});
```
