---
title: 대화 API
---

`@grant CAT.agent.conversation`

대화 API는 Agent 시스템의 핵심으로, 스크립트가 AI 대화를 만들고 메시지를 보내고 답변을 받을 수 있게 합니다.

## 대화 만들기

```javascript
const conv = await CAT.agent.conversation.create(options?);
```

### ConversationCreateOptions

| 매개변수 | 유형 | 기본값 | 설명 |
|------|------|--------|------|
| `id` | `string` | 자동 생성 | 대화 ID, 기존 대화를 재개하는 데 사용 |
| `system` | `string` | — | 사용자 지정 시스템 프롬프트, 기본 제공 프롬프트 뒤에 추가됨 |
| `model` | `string` | 기본 모델 | 모델 ID (관리 페이지에서 구성한 후 얻음) |
| `maxIterations` | `number` | `20` | 단일 대화 턴 내 최대 도구 호출 루프 수 |
| `skills` | `"auto" \| string[]` | — | `"auto"`는 모든 Skill을 자동으로 로드하거나 특정 Skill 이름 배열 |
| `tools` | `ToolDefinition[]` | — | 사용자 지정 도구 목록 (아래 참조) |
| `commands` | `Record<string, CommandHandler>` | — | 사용자 지정 대화 명령 |
| `ephemeral` | `boolean` | `false` | 저장소에 유지되지 않는 임시 대화 |
| `cache` | `boolean` | `true` | 프롬프트 캐싱 활성화 (토큰 사용량 감소) |

### 사용자 지정 도구

스크립트는 AI가 호출할 수 있는 자체 도구를 등록할 수 있습니다:

```javascript
const conv = await CAT.agent.conversation.create({
  tools: [{
    name: "get_weather",
    description: "Get weather information for the specified city",
    parameters: {
      type: "object",
      properties: {
        city: {
          type: "string",
          description: "City name"
        },
        unit: {
          type: "string",
          enum: ["celsius", "fahrenheit"],
          description: "Temperature unit"
        }
      },
      required: ["city"]
    },
    handler: async (args) => {
      // args = { city: "Beijing", unit: "celsius" }
      const data = await fetchWeather(args.city, args.unit);
      return { temperature: data.temp, condition: data.condition };
    }
  }]
});
```

도구의 `parameters`는 [JSON Schema](https://json-schema.org/) 사양을 따릅니다. AI는 `description`을 사용하여 도구를 언제 어떻게 호출할지 이해합니다.

### 사용자 지정 명령

`/`로 시작하는 사용자 지정 명령을 등록할 수 있습니다:

```javascript
const conv = await CAT.agent.conversation.create({
  commands: {
    "/export": async (args) => {
      // 사용자가 "/export pdf"를 입력할 때 트리거됨
      await exportToPdf(args);
      return "Export complete";
    }
  }
});
```

기본 제공 명령: `/new`(대화 기록 지우기) — 사용자 지정 처리기로 재정의할 수 있습니다.

## 기존 대화 가져오기

```javascript
const conv = await CAT.agent.conversation.get(conversationId);
// 대화가 없으면 null 반환
```

## ConversationInstance 메서드

### chat — 동기 대화

```javascript
const reply = await conv.chat(content, options?);
```

메시지를 보내고 완전한 답변을 기다립니다. AI는 답변하는 동안 도구를 호출할 수 있습니다. `chat`은 최종 결과를 반환하기 전에 모든 도구 실행이 끝날 때까지 기다립니다.

**매개변수:**

| 매개변수 | 유형 | 설명 |
|------|------|------|
| `content` | `string \| ContentBlock[]` | 메시지 내용, 텍스트 또는 멀티모달 콘텐츠 블록 |
| `options.tools` | `ToolDefinition[]` | 이 호출에만 추가할 추가 도구 (생성 시 전달된 도구와 병합) |

**`ChatReply` 반환:**

| 필드 | 유형 | 설명 |
|------|------|------|
| `content` | `string \| ContentBlock[]` | AI의 답변 내용 |
| `thinking` | `string` | 모델의 사고 과정 (일부 모델만 지원) |
| `toolCalls` | `ToolCall[]` | 이 답변 중 이루어진 도구 호출 기록 |
| `usage` | `{ inputTokens, outputTokens }` | 토큰 사용량 |
| `command` | `boolean` | 이 답변이 명령으로 트리거되었는지 여부 |

### chatStream — 스트리밍 대화

```javascript
const stream = await conv.chatStream(content, options?);
for await (const chunk of stream) {
  // 스트리밍 이벤트 처리
}
```

AI의 답변을 실시간으로 받습니다 — 출력을 점진적으로 표시해야 할 때 유용합니다.

**`StreamChunk` 이벤트 유형:**

| type | 필드 | 설명 |
|------|------|------|
| `content_delta` | `content: string` | 증분 텍스트 내용 |
| `thinking_delta` | `thinking: string` | 증분 사고 내용 |
| `tool_call` | `toolCall: ToolCall` | 도구 호출 정보 (상태 변경 시 트리거) |
| `content_block` | `block: ContentBlock` | 콘텐츠 블록 (이미지, 파일 등) |
| `done` | `usage: { inputTokens, outputTokens }` | 대화 턴 완료 |
| `error` | `error: string, errorCode?: string` | 오류 |

**오류 코드 (`errorCode`):**

| 코드 | 설명 |
|--------|------|
| `rate_limit` | API 속도 제한 도달, 일반적으로 자동 재시도 |
| `auth` | 인증 실패, API 키 확인 |
| `tool_timeout` | 도구 실행 시간 초과 |
| `max_iterations` | 최대 도구 호출 루프 수 도달 |
| `api_error` | 기타 API 오류 |

### getMessages — 메시지 기록 가져오기

```javascript
const messages = await conv.getMessages();
```

대화의 모든 메시지를 포함하는 `ChatMessage[]`를 반환합니다.

**`ChatMessage` 형태:**

| 필드 | 유형 | 설명 |
|------|------|------|
| `id` | `string` | 메시지 ID |
| `role` | `"user" \| "assistant" \| "system" \| "tool"` | 메시지 역할 |
| `content` | `string \| ContentBlock[]` | 메시지 내용 |
| `thinking` | `{ content: string }` | 사고 과정 (assistant 메시지 — 객체이며 일반 문자열이 아님을 참고) |
| `error` | `string` | 이 턴에서 오류가 발생한 경우 오류 메시지 |
| `modelId` | `string` | 이 메시지에 사용된 모델 ID |
| `durationMs` | `number` | 총 응답 시간 (ms) |
| `parentId` | `string` | 부모 메시지 ID (분기용) |
| `toolCalls` | `ToolCall[]` | 도구 호출 기록 (assistant 메시지) |
| `toolCallId` | `string` | 해당 도구 호출 ID (tool 메시지) |
| `usage` | `{ inputTokens, outputTokens }` | 토큰 사용량 |
| `createtime` | `number` | 생성 타임스탬프 |

### clear — 대화 지우기

```javascript
await conv.clear();
```

대화의 모든 메시지 기록을 지웁니다.

### save — 대화 유지

```javascript
await conv.save();
```

대화의 메타데이터를 저장소에 저장합니다. 임시 대화(`ephemeral: true`)는 기본적으로 저장되지 않습니다. 이 메서드를 호출하면 임시 대화가 유지 대화로 변환됩니다.


### 인스턴스 속성

| 속성 | 유형 | 설명 |
|------|------|------|
| `id` | `string` | 대화 ID |
| `title` | `string` | 대화 제목 |
| `modelId` | `string` | 사용 중인 모델 ID |

## 멀티모달 콘텐츠

메시지 내용은 일반 텍스트 문자열이거나 멀티모달 입력을 지원하는 `ContentBlock[]` 배열일 수 있습니다:

```javascript
// 텍스트 + 이미지 전송
await conv.chat([
  { type: "text", text: "Please analyze what's in this image" },
  { type: "image", attachmentId: "img-id", mimeType: "image/png" }
]);
```

### ContentBlock 유형

| type | 필수 필드 | 설명 |
|------|---------|------|
| `text` | `text: string` | 텍스트 내용 |
| `image` | `attachmentId: string, mimeType: string` | 이미지, 비전 지원 모델 필요 |
| `file` | `attachmentId: string, mimeType: string, name: string` | 파일 |
| `audio` | `attachmentId: string, mimeType: string` | 오디오 |

## 임시 대화 vs 유지 대화

| 기능 | 유지 대화 (기본값) | 임시 대화 |
|------|-------------------|---------------------|
| 메시지 저장 | OPFS에 유지 | 메모리에만 |
| 기본 제공 도구 | 모두 사용 가능 | 포함되지 않음, `tools`로 직접 제공 |
| 대화 목록 | 표시됨 | 표시되지 않음 |
| 프롬프트 캐싱 | 지원됨 | 비활성화 가능 |
| 사용 사례 | 일반 목적 대화 | 경량, 일회성 작업 및 빠른 Q&A |

## 컨텍스트 관리

### 자동 압축

대화의 컨텍스트 사용량이 모델 컨텍스트 창의 **80%를** 초과하면 시스템이 자동으로 LLM을 호출하여 기록 요약을 생성하고 이전 메시지를 교체하여 공간을 확보합니다.

### 프롬프트 캐싱

기본적으로 활성화되어 있습니다. Anthropic 모델의 경우 시스템 프롬프트와 메시지 기록이 캐시되어 반복 턴의 토큰 사용량과 대기 시간이 크게 줄어듭니다.

`cache: false`로 비활성화할 수 있습니다:

```javascript
const conv = await CAT.agent.conversation.create({ cache: false });
```

## 전체 예제

```javascript
// ==UserScript==
// @name        Smart translation assistant
// @match       *://*/*
// @grant       CAT.agent.conversation
// @grant       CAT.agent.dom
// ==/UserScript==

// 사용자 지정 도구로 대화 만들기
const conv = await CAT.agent.conversation.create({
  system: "You are a translation assistant. The user will give you web page content — please translate it into Chinese.",
  tools: [{
    name: "get_selection",
    description: "Get the text the user has selected on the page",
    parameters: { type: "object", properties: {} },
    handler: async () => {
      return { text: window.getSelection()?.toString() || "No text selected" };
    }
  }]
});

// 번역 결과 스트리밍
const stream = await conv.chatStream("Please get the selected text and translate it into Chinese");
let result = "";
for await (const chunk of stream) {
  if (chunk.type === "content_delta") {
    result += chunk.content;
    // UI 실시간 업데이트
    updateTranslationUI(result);
  }
}
```
