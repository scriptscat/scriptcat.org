---
title: 会話API
---

`@grant CAT.agent.conversation`

会話APIはAgentシステムの中核であり、スクリプトがAI会話の作成、メッセージの送信、返信の受信を可能にします。

## 会話を作成

```javascript
const conv = await CAT.agent.conversation.create(options?);
```

### ConversationCreateOptions

| パラメータ | 型 | デフォルト | 説明 |
|------|------|--------|------|
| `id` | `string` | 自動生成 | 会話ID、既存の会話の再開に使用 |
| `system` | `string` | — | カスタムシステムプロンプト、組み込みプロンプトの後に追加 |
| `model` | `string` | デフォルトモデル | モデルID（管理ページで設定後に取得） |
| `maxIterations` | `number` | `20` | 単一の会話ターン内の最大ツール呼び出しループ数 |
| `skills` | `"auto" \| string[]` | — | `"auto"`はすべてのSkillを自動的に読み込み、または特定のSkill名の配列 |
| `tools` | `ToolDefinition[]` | — | カスタムツールリスト（以下参照） |
| `commands` | `Record<string, CommandHandler>` | — | カスタム会話コマンド |
| `ephemeral` | `boolean` | `false` | ストレージに永続化されない一時的な会話 |
| `cache` | `boolean` | `true` | プロンプトキャッシュを有効にする（トークン使用量を削減） |

### カスタムツール

スクリプトはAIが呼び出す独自のツールを登録できます：

```javascript
const conv = await CAT.agent.conversation.create({
  tools: [{
    name: "get_weather",
    description: "指定された都市の天気情報を取得",
    parameters: {
      type: "object",
      properties: {
        city: {
          type: "string",
          description: "都市名"
        },
        unit: {
          type: "string",
          enum: ["celsius", "fahrenheit"],
          description: "温度単位"
        }
      },
      required: ["city"]
    },
    handler: async (args) => {
      // args = { city: "北京", unit: "celsius" }
      const data = await fetchWeather(args.city, args.unit);
      return { temperature: data.temp, condition: data.condition };
    }
  }]
});
```

ツールの`parameters`は[JSON Schema](https://json-schema.org/)仕様に従います。AIは`description`を使用して、ツールをいつ、どのように呼び出すかを判断します。

### カスタムコマンド

`/`で始まるカスタムコマンドを登録できます：

```javascript
const conv = await CAT.agent.conversation.create({
  commands: {
    "/export": async (args) => {
      // ユーザーが"/export pdf"と入力したときにトリガー
      await exportToPdf(args);
      return "エクスポート完了";
    }
  }
});
```

組み込みコマンド：`/new`（会話履歴をクリア）— カスタムハンドラで上書きできます。

## 既存の会話を取得

```javascript
const conv = await CAT.agent.conversation.get(conversationId);
// 会話が存在しない場合はnullを返す
```

## ConversationInstanceのメソッド

### chat — 同期チャット

```javascript
const reply = await conv.chat(content, options?);
```

メッセージを送信し、完全な返信を待ちます。AIは返信中にツールを呼び出す場合があります。`chat`はすべてのツール実行が完了するまで待ってから最終結果を返します。

**パラメータ：**

| パラメータ | 型 | 説明 |
|------|------|------|
| `content` | `string \| ContentBlock[]` | メッセージ内容、テキストまたはマルチモーダルコンテンツブロック |
| `options.tools` | `ToolDefinition[]` | この呼び出しのみで追加する追加ツール（作成時に渡されたツールとマージ） |

**`ChatReply`を返します：**

| フィールド | 型 | 説明 |
|------|------|------|
| `content` | `string \| ContentBlock[]` | AIの返信内容 |
| `thinking` | `string` | モデルの思考プロセス（一部のモデルのみサポート） |
| `toolCalls` | `ToolCall[]` | この返信中に行われたツール呼び出しの記録 |
| `usage` | `{ inputTokens, outputTokens }` | トークン使用量 |
| `command` | `boolean` | この返信がコマンドによってトリガーされたかどうか |

### chatStream — ストリーミングチャット

```javascript
const stream = await conv.chatStream(content, options?);
for await (const chunk of stream) {
  // ストリーミングイベントを処理
}
```

AIの返信をリアルタイムで受け取ります — 出力を段階的に表示する場合に便利です。

**`StreamChunk`イベントタイプ：**

| タイプ | フィールド | 説明 |
|------|------|------|
| `content_delta` | `content: string` | 増分テキスト内容 |
| `thinking_delta` | `thinking: string` | 増分思考内容 |
| `tool_call` | `toolCall: ToolCall` | ツール呼び出し情報（状態変化時に発火） |
| `content_block` | `block: ContentBlock` | コンテンツブロック（画像、ファイルなど） |
| `done` | `usage: { inputTokens, outputTokens }` | 会話ターン完了 |
| `error` | `error: string, errorCode?: string` | エラー |

**エラーコード（`errorCode`）：**

| コード | 説明 |
|--------|------|
| `rate_limit` | APIレート制限に達しました；通常は自動的にリトライされます |
| `auth` | 認証に失敗しました；APIキーを確認してください |
| `tool_timeout` | ツール実行がタイムアウトしました |
| `max_iterations` | 最大ツール呼び出しループ数に達しました |
| `api_error` | その他のAPIエラー |

### getMessages — メッセージ履歴を取得

```javascript
const messages = await conv.getMessages();
```

会話内のすべてのメッセージを含む`ChatMessage[]`を返します。

**`ChatMessage`の構造：**

| フィールド | 型 | 説明 |
|------|------|------|
| `id` | `string` | メッセージID |
| `role` | `"user" \| "assistant" \| "system" \| "tool"` | メッセージロール |
| `content` | `string \| ContentBlock[]` | メッセージ内容 |
| `thinking` | `{ content: string }` | 思考プロセス（アシスタントメッセージ — これはオブジェクトであり、プレーン文字列ではないことに注意） |
| `error` | `string` | このターンでエラーが発生した場合のエラーメッセージ |
| `modelId` | `string` | このメッセージに使用されたモデルID |
| `durationMs` | `number` | 総応答時間（ミリ秒） |
| `parentId` | `string` | 親メッセージID（ブランチ用） |
| `toolCalls` | `ToolCall[]` | ツール呼び出しの記録（アシスタントメッセージ） |
| `toolCallId` | `string` | 対応するツール呼び出しID（ツールメッセージ） |
| `usage` | `{ inputTokens, outputTokens }` | トークン使用量 |
| `createtime` | `number` | 作成タイムスタンプ |

### clear — 会話をクリア

```javascript
await conv.clear();
```

会話内のすべてのメッセージ履歴をクリアします。

### save — 会話を永続化

```javascript
await conv.save();
```

会話のメタデータをストレージに保存します。一時的な会話（`ephemeral: true`）はデフォルトでは保存されません。このメソッドを呼び出すことで永続化された会話に変換されます。

### インスタンスプロパティ

| プロパティ | 型 | 説明 |
|------|------|------|
| `id` | `string` | 会話ID |
| `title` | `string` | 会話タイトル |
| `modelId` | `string` | 使用中のモデルID |

## マルチモーダルコンテンツ

メッセージ内容はプレーン文字列、またはマルチモーダル入力をサポートする`ContentBlock[]`配列にすることができます：

```javascript
// テキスト + 画像を送信
await conv.chat([
  { type: "text", text: "この画像の内容を分析してください" },
  { type: "image", attachmentId: "img-id", mimeType: "image/png" }
]);
```

### ContentBlockタイプ

| タイプ | 必須フィールド | 説明 |
|------|---------|------|
| `text` | `text: string` | テキスト内容 |
| `image` | `attachmentId: string, mimeType: string` | 画像；ビジョン対応モデルが必要 |
| `file` | `attachmentId: string, mimeType: string, name: string` | ファイル |
| `audio` | `attachmentId: string, mimeType: string` | オーディオ |

## 一時的会話 vs. 永続化会話

| 機能 | 永続化会話（デフォルト） | 一時的会話 |
|------|-------------------|---------------------|
| メッセージ保存 | OPFSに永続化 | メモリ内のみ |
| 組み込みツール | すべて利用可能 | 含まれません；`tools`で提供してください |
| 会話リスト | 表示される | 表示されない |
| プロンプトキャッシュ | サポート | 無効にできる |
| ユースケース | 汎用会話 | 軽量な一時タスクと簡単なQ&A |

## コンテキスト管理

### 自動コンパクト

会話のコンテキスト使用量がモデルのコンテキストウィンドウの**80%**を超えると、システムは自動的にLLMを呼び出して履歴の要約を生成し、古いメッセージを置き換えてスペースを解放します。

### プロンプトキャッシュ

デフォルトで有効です。Anthropicモデルの場合、システムプロンプトとメッセージ履歴がキャッシュされ、繰り返しのターンでトークン使用量とレイテンシが大幅に削減されます。

`cache: false`で無効にできます：

```javascript
const conv = await CAT.agent.conversation.create({ cache: false });
```

## 完全な例

```javascript
// ==UserScript==
// @name        スマート翻訳アシスタント
// @match       *://*/*
// @grant       CAT.agent.conversation
// @grant       CAT.agent.dom
// ==/UserScript==

// カスタムツールで会話を作成
const conv = await CAT.agent.conversation.create({
  system: "あなたは翻訳アシスタントです。ユーザーはウェブページの内容を提供します — それを中国語に翻訳してください。",
  tools: [{
    name: "get_selection",
    description: "ページでユーザーが選択したテキストを取得",
    parameters: { type: "object", properties: {} },
    handler: async () => {
      return { text: window.getSelection()?.toString() || "テキストが選択されていません" };
    }
  }]
});

// 翻訳結果をストリーミング
const stream = await conv.chatStream("選択されたテキストを取得して中国語に翻訳してください");
let result = "";
for await (const chunk of stream) {
  if (chunk.type === "content_delta") {
    result += chunk.content;
    // UIをリアルタイムで更新
    updateTranslationUI(result);
  }
}
```
