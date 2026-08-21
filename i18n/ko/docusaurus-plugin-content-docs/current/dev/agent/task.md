---
title: 예약 작업 API
---

`@grant CAT.agent.task`

예약 작업 API를 사용하면 스크립트가 Cron 표현식 기반 예약 작업을 만들 수 있으며 두 가지 실행 모드가 있습니다.

## 실행 모드

### 내부 모드

Agent 시스템이 자동으로 처리합니다:
- Cron 일정이 실행될 때 대화를 자동으로 생성하거나 재개합니다
- 구성된 `prompt`를 LLM에 전송합니다
- 모델과 Skill을 지정할 수 있습니다
- 실행 기록과 토큰 사용량이 자동으로 기록됩니다

### 이벤트 모드

스크립트 자체가 처리합니다:
- Cron 일정이 실행될 때 스크립트에 이벤트 알림이 전송됩니다
- 스크립트는 `addListener`를 통해 이벤트를 수신합니다
- 처리 로직은 완전히 사용자 지정됩니다

## create — 작업 만들기

```javascript
const task = await CAT.agent.task.create(options);
```

**매개변수 (`AgentTaskCreateOptions`):**

| 매개변수 | 유형 | 필수 | 설명 |
|------|------|------|------|
| `name` | `string` | 예 | 작업 이름 |
| `crontab` | `string` | 예 | 표준 Cron 표현식 (5필드: 분 시 일 월 요일) |
| `mode` | `"internal" \| "event"` | 예 | 실행 모드 |
| `enabled` | `boolean` | 아니요 | 활성화 여부, 기본값 `true` |
| `notify` | `boolean` | 아니요 | 실행될 때 브라우저 알림을 보낼지 여부 |
| `prompt` | `string` | 아니요 | 내부 모드용 프롬프트 |
| `modelId` | `string` | 아니요 | 내부 모드에서 사용할 모델 ID |
| `skills` | `string[]` | 아니요 | 내부 모드에서 로드할 Skill |
| `maxIterations` | `number` | 아니요 | 내부 모드의 최대 도구 호출 라운드, 기본값 `10` |

**`AgentTask` 반환:**

| 필드 | 유형 | 설명 |
|------|------|------|
| `id` | `string` | 작업 ID |
| `name` | `string` | 작업 이름 |
| `crontab` | `string` | Cron 표현식 |
| `mode` | `string` | 실행 모드 |
| `enabled` | `boolean` | 활성화 여부 |
| `notify` | `boolean` | 알림 전송 여부 |
| `nextruntime` | `number` | 다음 실행 타임스탬프 |
| `lastruntime` | `number` | 마지막 실행 타임스탬프 |
| `conversationId` | `string` | 내부 모드의 연결된 대화 ID (선택 사항) |
| `lastRunStatus` | `"success" \| "error"` | 마지막 실행 상태 |
| `lastRunError` | `string` | 마지막 실행의 오류 메시지 |
| `createtime` | `number` | 생성 타임스탬프 |

**Cron 표현식 예:**

| 표현식 | 설명 |
|--------|------|
| `* * * * *` | 매분 |
| `0 9 * * *` | 매일 09:00 |
| `0 */2 * * *` | 2시간마다 |
| `30 8 * * 1-5` | 평일 08:30 |
| `0 0 1 * *` | 매월 1일 00:00 |

## list — 모든 작업 나열

```javascript
const tasks = await CAT.agent.task.list();
```

현재 스크립트가 만든 모든 작업을 반환합니다.

## get — 작업 세부 정보 가져오기

```javascript
const task = await CAT.agent.task.get(taskId);
```

작업이 없으면 `undefined`를 반환합니다.

## update — 작업 업데이트

```javascript
const task = await CAT.agent.task.update(taskId, partial);
```

**업데이트 가능한 필드:**

```javascript
await CAT.agent.task.update(task.id, {
  name: "New name",
  crontab: "0 10 * * *",
  enabled: false,
  prompt: "New prompt",
  notify: true
});
```

업데이트 후 `nextruntime`이 자동으로 다시 계산됩니다.

## remove — 작업 삭제

```javascript
const success = await CAT.agent.task.remove(taskId);
```

## runNow — 즉시 실행

```javascript
await CAT.agent.task.runNow(taskId);
```

Cron 일정을 기다리지 않고 작업이 즉시 한 번 실행되도록 트리거합니다 (비차단, 백그라운드에서 실행).

## addListener — 작업 트리거 수신

```javascript
const listenerId = await CAT.agent.task.addListener(taskId, callback);
```

**이벤트 모드** 작업에만 사용됩니다. 콜백은 Cron 일정이 실행될 때 실행됩니다.

**콜백 매개변수 (`AgentTaskTrigger`):**

| 필드 | 유형 | 설명 |
|------|------|------|
| `taskId` | `string` | 작업 ID |
| `name` | `string` | 작업 이름 |
| `crontab` | `string` | Cron 표현식 |
| `triggeredAt` | `number` | 트리거 타임스탬프 |

## removeListener — 수신기 제거

```javascript
await CAT.agent.task.removeListener(listenerId);
```

## 전체 예제

### 내부 모드 — AI가 자동으로 실행

```javascript
// ==UserScript==
// @name        Scheduled news digest
// @match       *://*/*
// @grant       CAT.agent.task
// ==/UserScript==

const task = await CAT.agent.task.create({
  name: "Daily news digest",
  crontab: "0 9 * * *",       // 매일 9시
  mode: "internal",
  prompt: "Please search today's tech news and save a short summary to OPFS",
  skills: ["web-search"],
  maxIterations: 10,
  notify: true
});

console.log("Task created, next run:", new Date(task.nextruntime));
```

### 이벤트 모드 — 스크립트가 직접 처리

```javascript
// ==UserScript==
// @name        Scheduled data collection
// @match       *://*/*
// @grant       CAT.agent.task
// @grant       CAT.agent.dom
// ==/UserScript==

const task = await CAT.agent.task.create({
  name: "Stock data collection",
  crontab: "*/30 9-15 * * 1-5", // 평일 9-15시 사이 30분마다
  mode: "event",
  enabled: true,
  notify: false
});

await CAT.agent.task.addListener(task.id, async (trigger) => {
  console.log(`Task triggered: ${trigger.name} at ${new Date(trigger.triggeredAt)}`);

  // 사용자 지정 수집 로직
  await CAT.agent.dom.navigate("https://finance.example.com/stock");
  const content = await CAT.agent.dom.readPage({ selector: ".stock-table" });

  // 데이터 처리...
  console.log("Collection complete");
});
```
