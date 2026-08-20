---
title: 모델 쿼리 API
---

`@grant CAT.agent.model`

모델 쿼리 API는 사용자가 관리 페이지에서 구성한 모델에 대한 읽기 전용 액세스를 제공합니다. 보안상 API 키는 스크립트에 절대 노출되지 않습니다.

## list — 모든 모델 나열

```javascript
const models = await CAT.agent.model.list();
```

**`ModelSummary[]` 반환:**

| 필드 | 유형 | 설명 |
|------|------|------|
| `id` | `string` | 모델 구성 ID |
| `name` | `string` | 사용자 정의 표시 이름 (예: "GPT-4o", "Claude Sonnet") |
| `provider` | `"openai" \| "anthropic"` | 제공자 유형 |
| `apiBaseUrl` | `string` | API 기본 URL |
| `model` | `string` | 제공자 API로 전송되는 모델 식별자 (예: `gpt-4o`, `claude-sonnet-4-20250514`) |
| `maxTokens` | `number` | 최대 출력 토큰 수 (설정되지 않으면 생략) |

> 참고: 반환된 객체에는 **`apiKey` 필드가 포함되지 않습니다**.

## get — 특정 모델 가져오기

```javascript
const model = await CAT.agent.model.get(modelId);
```

모델이 없으면 `null`을 반환합니다.

## getDefault — 기본 모델 ID 가져오기

```javascript
const defaultId = await CAT.agent.model.getDefault();
```

사용자가 구성한 기본 모델 ID를 반환합니다. 설정되지 않으면 빈 문자열을 반환합니다.

## getSummary — 요약 모델 ID 가져오기

```javascript
const summaryModelId = await CAT.agent.model.getSummary();
```

사용자가 요약 작업(대화 기록 자동 압축 등)을 위해 특별히 구성한 경량 모델의 ID를 반환합니다. 별도로 구성되지 않으면 시스템이 기본 모델로 폴백하고 이 메서드는 빈 문자열을 반환합니다.

## 사용 시나리오

### 사용자가 모델을 선택하도록 하기

```javascript
// ==UserScript==
// @name        Model picker example
// @grant       CAT.agent.model
// @grant       CAT.agent.conversation
// ==/UserScript==

const models = await CAT.agent.model.list();
const defaultId = await CAT.agent.model.getDefault();

// 목록을 사용자에게 표시하고 선택하게 함
const selectedModel = models.find(m => m.id === defaultId) || models[0];

const conv = await CAT.agent.conversation.create({
  model: selectedModel.id
});
```

### 특정 모델의 세부 정보 가져오기

```javascript
const model = await CAT.agent.model.get("my-model-id");
if (model) {
  console.log(`${model.name} (${model.provider}), max output ${model.maxTokens ?? "unset"} tokens`);
}
```
