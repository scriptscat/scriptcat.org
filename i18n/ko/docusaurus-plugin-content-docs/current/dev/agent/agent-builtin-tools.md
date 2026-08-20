---
title: 기본 제공 도구 참조
---

Agent는 대화 중에 AI가 자동으로 호출하는 기본 제공 도구 세트와 함께 제공됩니다. 이러한 도구는 유지 대화에서 기본적으로 사용할 수 있습니다. 스크립트 개발자는 일반적으로 직접 호출할 필요가 없습니다 — AI는 사용자 의도에 따라 올바른 도구를 선택합니다.

이러한 도구가 무엇을 할 수 있는지 이해하면 더 나은 시스템 프롬프트와 사용자 지정 도구를 작성하는 데 도움이 됩니다.

## 웹 데이터 가져오기

### web_fetch

URL의 콘텐츠를 가져오며 HTML-텍스트 추출 및 LLM 요약 지원이 포함됩니다.

| 매개변수 | 유형 | 필수 | 설명 |
|------|------|------|------|
| `url` | `string` | 예 | 대상 URL (http/https 전용) |
| `prompt` | `string` | 아니요 | 요약 프롬프트 (제공 시 LLM을 사용하여 콘텐츠를 요약) |
| `max_length` | `number` | 아니요 | 최대 콘텐츠 문자 수 |

**동작 세부 사항:**
- 30초 요청 시간 초과
- HTML 콘텐츠는 기본 본문 텍스트를 자동으로 추출 (탐색, 사이드바 등 제거)
- JSON 응답은 자동으로 구문 분석됨
- 일반 텍스트는 그대로 반환됨
- `prompt`가 제공되면 가져온 콘텐츠가 요약을 위해 LLM으로 전송됨

**반환 값:**
```json
{
  "url": "https://example.com",
  "content_type": "text/html",
  "content": "Extracted body content...",
  "truncated": false,
  "final_url": "https://example.com/redirected"
}
```

### web_search

검색 엔진을 쿼리하고 구조화된 검색 결과를 반환합니다.

| 매개변수 | 유형 | 필수 | 설명 |
|------|------|------|------|
| `query` | `string` | 예 | 검색 키워드 |
| `max_results` | `number` | 아니요 | 최대 결과 수 (기본 5, 상한 10) |

**지원되는 검색 엔진:**

| 엔진 | 설명 | 구성 필요 |
|------|------|---------|
| DuckDuckGo | 기본 엔진 | 없음 |
| Bing | Microsoft Bing 검색 | API 키 필요 |
| Baidu | 바이두 검색 | API 키 불필요 |
| Google Custom Search | Google 맞춤 검색 | API 키 + CSE ID 필요 |

검색 엔진은 관리 페이지 → Agent → 설정에서 구성합니다.

**반환 값:**
```json
[
  {
    "title": "Search result title",
    "url": "https://example.com/result",
    "snippet": "Result summary text..."
  }
]
```

### get_tab_content

지정된 탭의 렌더링된 페이지 콘텐츠를 읽고 CSS 선택자로 주석이 달린 구조화된 Markdown으로 변환합니다.

| 매개변수 | 유형 | 필수 | 설명 |
|------|------|------|------|
| `tab_id` | `number` | 예 | 탭 ID |
| `selector` | `string` | 아니요 | CSS 선택자, 일치하는 부분만 추출 |
| `prompt` | `string` | 아니요 | 요약 프롬프트 |
| `max_length` | `number` | 아니요 | 최대 콘텐츠 문자 수 |

`web_fetch`와의 차이: `get_tab_content`는 페이지를 **브라우저가 이미 렌더링한 대로** 읽는 반면(동적 JS 콘텐츠 포함), `web_fetch`는 새 HTTP 요청을 만듭니다.

**반환 값:**
```json
{
  "tab_id": 123,
  "url": "https://example.com",
  "title": "Page title",
  "content": "Structured content...",
  "truncated": false,
  "used_selector": "main"
}
```

## 탭 관리

### list_tabs

열려 있는 탭을 쿼리하며 여러 필터 조건을 지원합니다.

| 매개변수 | 유형 | 필수 | 설명 |
|------|------|------|------|
| `url_pattern` | `string` | 아니요 | URL 정규식 일치 |
| `title_pattern` | `string` | 아니요 | 제목 정규식 일치 |
| `active` | `boolean` | 아니요 | 활성 탭만 반환 |
| `window_id` | `number` | 아니요 | 지정된 창 |
| `audible` | `boolean` | 아니요 | 오디오를 재생 중인 탭만 반환 |

### open_tab

새 탭을 열거나 기존 탭을 탐색합니다.

| 매개변수 | 유형 | 필수 | 설명 |
|------|------|------|------|
| `url` | `string` | 예 | 대상 URL |
| `tab_id` | `number` | 아니요 | 기존 탭의 ID (제공 시 해당 탭 탐색, 그렇지 않으면 새 탭 열기) |
| `active` | `boolean` | 아니요 | 활성화 여부 (기본값 `true`) |
| `window_id` | `number` | 아니요 | 지정된 창 |
| `wait_until_loaded` | `boolean` | 아니요 | 페이지 로딩 완료 대기 여부 (기본값 `true`) |

### close_tab

탭을 닫습니다.

| 매개변수 | 유형 | 필수 | 설명 |
|------|------|------|------|
| `tab_id` | `number` | 예 | 탭 ID |

### activate_tab

탭을 활성화하고 해당 창에 초점을 맞춥니다.

| 매개변수 | 유형 | 필수 | 설명 |
|------|------|------|------|
| `tab_id` | `number` | 예 | 탭 ID |

## 파일 시스템 (OPFS)

### opfs_write

작업 영역에 파일을 씁니다.

| 매개변수 | 유형 | 필수 | 설명 |
|------|------|------|------|
| `path` | `string` | 예 | 파일 경로 |
| `content` | `string` | 예 | 파일 내용 (데이터 URL 바이너리 지원) |

### opfs_read

작업 영역에서 파일을 읽습니다. 기본적으로 파일 유형이 자동 감지됩니다: 텍스트 파일은 내용을 반환하고 바이너리 파일은 blob URL을 반환합니다.

| 매개변수 | 유형 | 필수 | 설명 |
|------|------|------|------|
| `path` | `string` | 예 | 파일 경로 |
| `mode` | `string` | 아니요 | `"text"` / `"blob"` / `"auto"`(기본값) — 특정 반환 모드 강제 |
| `offset` | `number` | 아니요 | 시작 줄 번호 (1부터 시작), 텍스트 모드 전용 |
| `limit` | `number` | 아니요 | 읽을 줄 수, 텍스트 모드 전용 (텍스트가 200줄을 초과하면 페이지 매김 필요) |

### opfs_list

디렉터리 내용을 나열합니다.

| 매개변수 | 유형 | 필수 | 설명 |
|------|------|------|------|
| `path` | `string` | 아니요 | 디렉터리 경로 (기본값은 루트 디렉터리) |

### opfs_delete

파일 또는 디렉터리를 삭제합니다.

| 매개변수 | 유형 | 필수 | 설명 |
|------|------|------|------|
| `path` | `string` | 예 | 파일/디렉터리 경로 |

## 사용자 상호 작용

### ask_user

사용자에게 질문하며 자유 형식 입력 또는 구조화된 선택을 지원합니다.

| 매개변수 | 유형 | 필수 | 설명 |
|------|------|------|------|
| `question` | `string` | 예 | 질문 |
| `options` | `string[]` | 아니요 | 선택 목록 (제공 시 객관식 질문이 됨) |
| `multiple` | `boolean` | 아니요 | 다중 선택 허용 여부 (기본값 `false`) |

**시간 초과:** 응답 없이 5분 후 `{ answer: null, reason: "timeout" }` 반환.

**반환 값:**
```json
{ "answer": "The user's answer text" }
```

### execute_script

페이지 또는 샌드박스에서 JavaScript 코드를 실행합니다.

| 매개변수 | 유형 | 필수 | 설명 |
|------|------|------|------|
| `code` | `string` | 예 | JavaScript 코드 |
| `target` | `string` | 예 | `"page"` 또는 `"sandbox"` |
| `tab_id` | `number` | 아니요 | `target`이 `page`일 때 대상 탭 (기본값은 현재 활성 탭); 샌드박스에서는 무시됨 |

**실행 환경 비교:**

| 환경 | DOM | 페이지 JS | 확장 프로그램 blob URL | 가장 적합한 용도 |
|------|-----|---------|---------------|---------|
| `target: "page"` (항상 MAIN 세계) | 예 | 예 | 아니요 | DOM 읽기/조작, 페이지 함수 호출, 페이지 변수 읽기 |
| `target: "sandbox"` | 아니요 | 아니요 | 아니요 | 순수 계산 |

> `page` 모드는 항상 페이지의 MAIN 세계에서 실행되어 페이지와 `window`를 공유합니다 — 따라서 확장 프로그램 자체의 blob URL에 액세스할 수 없습니다(예: `opfs_read`가 blob 모드에서 반환하는 주소). blob URL로 작업해야 하는 경우 SkillScript를 대신 사용하세요.

## 하위 에이전트

### agent

복잡한 하위 작업을 처리하기 위해 독립적인 하위 에이전트를 생성합니다.

| 매개변수 | 유형 | 필수 | 설명 |
|------|------|------|------|
| `prompt` | `string` | 예 | 하위 작업 설명 |
| `description` | `string` | 아니요 | 짧은 라벨 (몇 단어, UI 표시용) |
| `type` | `string` | 아니요 | 하위 에이전트 유형 (아래 참조), 기본값 `"general"` |
| `tab_id` | `number` | 아니요 | 하위 에이전트에 전달할 탭 ID, 하위 에이전트가 해당 탭에서 작동 |

**하위 에이전트 유형:**

| type | 설명 | 사용 가능한 도구 |
|------|------|---------|
| `researcher` | 정보 검색 (읽기 전용) | web_search, web_fetch, 페이지 콘텐츠 읽기 |
| `page_operator` | 브라우저 자동화 | 탭 관리, DOM 조작, 페이지 상호 작용 |
| `general` | 일반 목적 (기본값) | 모든 도구 |

**특징:**
- 하위 에이전트는 자체 독립적인 대화 컨텍스트를 가짐
- `ask_user` 또는 `agent`를 사용할 수 없음 (재귀 방지)
- 하위 에이전트의 이벤트는 `sub_agent_event`를 통해 부모 대화로 전달됨

## 작업 관리

이 도구 그룹은 대화 내에서 임시 작업 목록을 관리합니다 (메모리 내, 유지되지 않음).

### create_task

| 매개변수 | 유형 | 필수 | 설명 |
|------|------|------|------|
| `subject` | `string` | 예 | 작업 제목 |
| `description` | `string` | 아니요 | 자세한 설명 |

### update_task

| 매개변수 | 유형 | 필수 | 설명 |
|------|------|------|------|
| `task_id` | `string` | 예 | 작업 ID |
| `status` | `string` | 아니요 | `"pending"` / `"in_progress"` / `"completed"` |
| `subject` | `string` | 아니요 | 새 제목 |
| `description` | `string` | 아니요 | 새 설명 |

### list_tasks

매개변수 없음, 모든 작업의 간단한 목록을 반환합니다.

> 작업 관리 도구는 주로 AI가 복잡한 다단계 작업을 처리하는 동안 자체 진행 상황을 추적하기 위한 것입니다. 작업 데이터는 유지되지 않습니다.
