---
title: DOM 조작 API
---

`@grant CAT.agent.dom`

DOM 조작 API는 완전한 브라우저 페이지 자동화를 제공합니다: 탐색, 콘텐츠 읽기, 스크린샷, 양식 상호 작용 및 DOM 모니터링.

## 탭 관리

### listTabs — 탭 나열

```javascript
const tabs = await CAT.agent.dom.listTabs();
```

열려 있는 모든 탭에 대한 정보를 반환합니다.

**`TabInfo[]` 반환:**

| 필드 | 유형 | 설명 |
|------|------|------|
| `tabId` | `number` | 탭 ID |
| `url` | `string` | 현재 URL |
| `title` | `string` | 페이지 제목 |
| `active` | `boolean` | 현재 활성 탭인지 여부 |
| `windowId` | `number` | 속한 창의 ID |
| `discarded` | `boolean` | 폐기되었는지(일시 중단) 여부 |

## 탐색

### navigate — 페이지 탐색

```javascript
const result = await CAT.agent.dom.navigate(url, options?);
```

**매개변수:**

| 매개변수 | 유형 | 기본값 | 설명 |
|------|------|--------|------|
| `url` | `string` | — | 대상 URL (필수) |
| `options.tabId` | `number` | 현재 활성 탭 | 사용할 탭 |
| `options.waitUntil` | `boolean` | `true` | 페이지 로딩 완료를 기다릴지 여부 |
| `options.timeout` | `number` | `30000` | 밀리초 단위 시간 초과 |

**`NavigateResult` 반환:**

```typescript
{ tabId: number; url: string; title: string }
```

## 콘텐츠 읽기

### readPage — 페이지 콘텐츠 읽기

```javascript
const page = await CAT.agent.dom.readPage(options?);
```

페이지 DOM을 구조화된 텍스트로 변환하고 `<script>`, `<style>`, `<noscript>`, `<svg>`, `<link[rel=stylesheet]>` 같은 관련 없는 요소를 자동으로 제거합니다.

**매개변수:**

| 매개변수 | 유형 | 기본값 | 설명 |
|------|------|--------|------|
| `options.tabId` | `number` | 현재 활성 탭 | 사용할 탭 |
| `options.selector` | `string` | — | CSS 선택자, 일치하는 요소의 콘텐츠만 반환 |
| `options.maxLength` | `number` | — | 최대 콘텐츠 문자 수, 초과 시 잘림 |
| `options.removeTags` | `string[]` | — | 제거할 추가 태그 이름 |

**`PageContent` 반환:**

| 필드 | 유형 | 설명 |
|------|------|------|
| `title` | `string` | 페이지 제목 |
| `url` | `string` | 페이지 URL |
| `html` | `string` | 처리된 페이지 텍스트 콘텐츠 |
| `truncated` | `boolean` | 콘텐츠가 잘렸는지 여부 |
| `totalLength` | `number` | 원본 콘텐츠의 총 길이 |

### screenshot — 스크린샷 찍기

```javascript
const shot = await CAT.agent.dom.screenshot(options?);
```

**매개변수:**

| 매개변수 | 유형 | 기본값 | 설명 |
|------|------|--------|------|
| `options.tabId` | `number` | 현재 활성 탭 | 사용할 탭 |
| `options.quality` | `number` | `80` | JPEG 품질 (0-100) |
| `options.fullPage` | `boolean` | `false` | 전체 페이지 캡처 |
| `options.selector` | `string` | — | CSS 선택자, 일치하는 요소 영역만 캡처 |
| `options.saveTo` | `string` | — | OPFS 작업 영역에 저장할 경로 |

**`ScreenshotResult` 반환:**

| 필드 | 유형 | 설명 |
|------|------|------|
| `dataUrl` | `string` | base64 데이터 URL |
| `path` | `string` | OPFS 저장 경로 (`saveTo` 사용 시) |
| `size` | `number` | 파일 크기 (`saveTo` 사용 시) |

**캡처 모드 선택 방법:**

| 시나리오 | 동작 |
|------|------|
| `selector` 제공 | CDP로 요소 경계를 찾아 스크린샷을 자름 |
| 백그라운드 탭 | CDP 스크린샷 시도, 실패 시 탭 활성화 후 `captureVisibleTab` 사용 |
| 전경 탭 | `captureVisibleTab` 직접 사용 |

```javascript
// OPFS에 스크린샷 저장
const shot = await CAT.agent.dom.screenshot({
  saveTo: "screenshots/page.png",
  quality: 90
});
console.log(`Saved to ${shot.path}, size ${shot.size} bytes`);
```

## 페이지 상호 작용

### click — 요소 클릭

```javascript
const result = await CAT.agent.dom.click(selector, options?);
```

**매개변수:**

| 매개변수 | 유형 | 기본값 | 설명 |
|------|------|--------|------|
| `selector` | `string` | — | CSS 선택자 (필수) |
| `options.tabId` | `number` | 현재 활성 탭 | 사용할 탭 |
| `options.trusted` | `boolean` | `false` | 실제 마우스 이벤트를 보내기 위해 CDP 사용 |

**`ActionResult` 반환:**

| 필드 | 유형 | 설명 |
|------|------|------|
| `success` | `boolean` | 성공 여부 |
| `navigated` | `boolean` | 클릭이 페이지 탐색을 트리거했는지 여부 |
| `url` | `string` | 탐색 후 새 URL |
| `newTab` | `boolean` | 새 탭이 열렸는지 여부 |

**`trusted` vs 일반 클릭:**

- `trusted: false`(기본값) — 주입된 JS로 `element.click()` 시뮬레이션, 빠르지만 일부 사이트에서 진짜가 아닌 이벤트로 감지할 수 있음
- `trusted: true` — Chrome DevTools Protocol을 통해 실제 마우스 이벤트 전송, 실제 사용자 상호 작용과 구분할 수 없지만 디버거 권한 필요

### fill — 양식 필드 채우기

```javascript
const result = await CAT.agent.dom.fill(selector, value, options?);
```

**매개변수:**

| 매개변수 | 유형 | 설명 |
|------|------|------|
| `selector` | `string` | CSS 선택자 (필수) |
| `value` | `string` | 채울 값 (필수) |
| `options.tabId` | `number` | 사용할 탭 |
| `options.trusted` | `boolean` | 키보드 입력을 시뮬레이션하기 위해 CDP 사용 |

**동작:**
- 일반 모드: `element.value` 설정 및 `input` 이벤트 디스패치
- 신뢰 모드: CDP가 요소에 초점 → 문자별 입력

### scroll — 페이지 스크롤

```javascript
const result = await CAT.agent.dom.scroll(direction, options?);
```

**매개변수:**

| 매개변수 | 유형 | 설명 |
|------|------|------|
| `direction` | `"up" \| "down" \| "top" \| "bottom"` | 스크롤 방향 (필수) |
| `options.tabId` | `number` | 사용할 탭 |
| `options.selector` | `string` | 전체 페이지 대신 특정 컨테이너 스크롤 |

**`ScrollResult` 반환:**

| 필드 | 유형 | 설명 |
|------|------|------|
| `scrollTop` | `number` | 스크롤 후 스크롤 위치 |
| `scrollHeight` | `number` | 전체 콘텐츠 높이 |
| `clientHeight` | `number` | 뷰포트 높이 |
| `atBottom` | `boolean` | 맨 아래로 스크롤되었는지 여부 |

### waitFor — 요소 대기

```javascript
const result = await CAT.agent.dom.waitFor(selector, options?);
```

지정된 요소가 페이지에 나타날 때까지 폴링합니다 (500ms마다 확인).

**매개변수:**

| 매개변수 | 유형 | 기본값 | 설명 |
|------|------|--------|------|
| `selector` | `string` | — | CSS 선택자 (필수) |
| `options.tabId` | `number` | 현재 활성 탭 | 사용할 탭 |
| `options.timeout` | `number` | `10000` | 밀리초 단위 시간 초과 |

**`WaitForResult` 반환:**

| 필드 | 유형 | 설명 |
|------|------|------|
| `found` | `boolean` | 요소가 발견되었는지 여부 |
| `element` | `object` | 요소 정보 (`found=true`일 때만) |
| `element.selector` | `string` | 일치한 선택자 |
| `element.tag` | `string` | 태그 이름 |
| `element.text` | `string` | 텍스트 콘텐츠 |
| `element.role` | `string` | ARIA 역할 |
| `element.type` | `string` | input 유형 |
| `element.visible` | `boolean` | 표시 여부 |

## 스크립트 실행

### executeScript — JavaScript 실행

```javascript
const result = await CAT.agent.dom.executeScript(code, options?);
```

**매개변수:**

| 매개변수 | 유형 | 기본값 | 설명 |
|------|------|--------|------|
| `code` | `string` | — | JavaScript 코드 (필수) |
| `options.tabId` | `number` | 현재 활성 탭 | 사용할 탭 |

> 코드는 항상 페이지의 **MAIN 세계에서** 실행됩니다(페이지 자체 JS와 동일한 `window` 객체 공유). 따라서 페이지의 자체 함수를 호출하고 페이지 변수를 직접 읽을 수 있습니다 — 그러나 같은 이유로 **확장 프로그램의 blob URL에 액세스할 수 없습니다**(예: `CAT.agent.opfs.read`가 `"blob"` 모드에서 반환한 `Blob`으로 `URL.createObjectURL()`을 통해 만든 `blob:` URL). blob URL은 확장 프로그램 자체의 출처에 범위가 제한되기 때문입니다. 격리된 컨텍스트에서 blob URL로 작업해야 하는 경우 SkillScript를 대신 사용하세요 ([Skill 개발](../agent-skill-dev) 참조).

```javascript
// 페이지 자체 JS 함수 호출 / 페이지 변수 읽기
const data = await CAT.agent.dom.executeScript(
  "return window.__APP_STATE__"
);

// DOM 콘텐츠 읽기
const title = await CAT.agent.dom.executeScript(
  "return document.querySelector('h1')?.textContent"
);
```

> 코드는 실행을 위해 `new Function()`으로 래핑되며 `return` 값을 지원합니다. 시간 초과는 30초입니다.

## DOM 모니터링

Chrome DevTools Protocol을 사용하여 페이지의 DOM 변경 및 대화 상자 이벤트를 모니터링합니다.

### startMonitor — 모니터링 시작

```javascript
await CAT.agent.dom.startMonitor(tabId);
```

지정된 탭의 DOM 변경 및 대화 상자(alert/confirm/prompt) 모니터링을 시작합니다.

### stopMonitor — 모니터링 중지

```javascript
const result = await CAT.agent.dom.stopMonitor(tabId);
```

모니터링을 중지하고 수집된 변경 사항을 반환합니다.

**`MonitorResult` 반환:**

| 필드 | 유형 | 설명 |
|------|------|------|
| `dialogs` | `Array<{ type, message }>` | 대화 상자 목록 |
| `addedNodes` | `Array<{ tag, id?, class?, role?, text }>` | 새로 추가된 DOM 노드 요약 |

> `addedNodes`는 노드 ID로 중복 제거되고 50개 항목으로 제한됩니다. 페이지에서 제거되었거나 표시되지 않는 노드는 자동으로 건너뜁니다. `text`는 노드의 `outerHTML`에서 추출된 일반 텍스트로 300자로 잘립니다.

### peekMonitor — 모니터링 상태 확인

```javascript
const status = await CAT.agent.dom.peekMonitor(tabId);
```

현재 모니터링 상태를 비파괴적으로 확인합니다.

**`MonitorStatus` 반환:**

| 필드 | 유형 | 설명 |
|------|------|------|
| `hasChanges` | `boolean` | 변경 사항이 있는지 여부 |
| `dialogCount` | `number` | 대화 상자 수 |
| `nodeCount` | `number` | 새로 추가된 노드 수 |

## 전체 예제

```javascript
// ==UserScript==
// @name        Auto form filler
// @match       https://example.com/form
// @grant       CAT.agent.dom
// ==/UserScript==

// 양식 로딩 대기
await CAT.agent.dom.waitFor("form#signup", { timeout: 5000 });

// 양식 채우기
await CAT.agent.dom.fill("input[name=username]", "test_user");
await CAT.agent.dom.fill("input[name=email]", "test@example.com");

// 동의 확인란 선택
await CAT.agent.dom.click("input[type=checkbox]#agree");

// 채워진 양식 스크린샷
await CAT.agent.dom.screenshot({
  selector: "form#signup",
  saveTo: "screenshots/form-filled.png"
});

// 제출 클릭
const result = await CAT.agent.dom.click("button[type=submit]", { trusted: true });
if (result.navigated) {
  console.log("Form submitted successfully, navigated to:", result.url);
}
```
