---
title: 변경 내역
---

import GithubStar from '@site/src/components/GithubStar';

<GithubStar variant="bar" scene="changelog" />

베타 버전의 변경 내역은 [베타 변경 내역](./beta-changelog.md)을 참조하세요

⚠️ Windows 8/7/XP를 사용 중이거나 브라우저 커널 버전이 \<120보다 낮은 경우 [구버전 ScriptCat](https://github.com/scriptscat/scriptcat/releases)을 수동으로 설치해야 합니다. v0.16.x는 Manifest V2를 지원하는 마지막 버전입니다. 설치 단계는 다음을 참조하세요: [압축 해제된 폴더를 로드하여 확장 프로그램 설치](/use/use.md#load-unpacked-extension-installation).

<a name="1.4.0"></a>

## 1.4.0 (2026-06-26)

이 릴리스는 Firefox MV3를 준비하기 위한 저수준 리팩터링과 함께 편집기 경험 개선(편집 메뉴, Ctrl+Shift+F 서식 지정, Monaco 빠른 수정), 스크립트 검색을 위한 다중 플랫폼 검색 엔진 선택, `@unwrap` / `window.onurlchange` / `@run-at context-menu`와 같은 새로운 기능, 클라우드 스토리지 동기화 신뢰성의 포괄적인 강화, 그리고 많은 GM API, UI 및 안정성 수정(장기 실행 메모리 누수 및 프로토타입 오염 보안 취약점 포함)을 제공합니다. ScriptCat AI Agent는 dev / Beta 빌드에서 미리 보기로 제공되며 안정 버전에서는 아직 활성화되지 않았습니다.

### 🚀 주요 신규 기능

- 🧪 ScriptCat AI Agent (**미리 보기 — dev / Beta 빌드에서만 사용 가능, 안정 버전에서는 아직 활성화되지 않음**) — 대화형 상호작용, 도구 호출, Skill 시스템, MCP 프로토콜 등을 갖춘 AI 기반 에이전트 시스템 ([#1324](https://github.com/scriptscat/scriptcat/pull/1324)) (by @CodFrm)
- ✨ `@unwrap` 메타데이터 태그 지원 ([#1213](https://github.com/scriptscat/scriptcat/pull/1213)) (by @cyfung1031)
- ✨ Navigation API를 통한 TM의 `window.onurlchange` 구현 ([#1315](https://github.com/scriptscat/scriptcat/pull/1315)) (by @cyfung1031)
- ✨ `@run-at context-menu` 지원 복원 ([#1442](https://github.com/scriptscat/scriptcat/pull/1442)) (by @cyfung1031)
- ✨ 스크립트 검색에서 다중 플랫폼 검색 엔진 선택 지원 ([#1295](https://github.com/scriptscat/scriptcat/pull/1295)) (by @CodFrm)
- ✨ 더 많은 아이콘 서비스 제공자 추가 ([#1333](https://github.com/scriptscat/scriptcat/pull/1333)) (by @cyfung1031)
- ✨ 스크립트 목록의 "마지막 업데이트" 열에 업데이트 확인 아이콘 추가 ([#1304](https://github.com/scriptscat/scriptcat/pull/1304)) (by @CodFrm)
- ✨ 편집 충돌 및 스크립트 이름 충돌 처리 개선 ([#1223](https://github.com/scriptscat/scriptcat/pull/1223)) (by @cyfung1031)

### 🧑‍💻 편집기

- ✨ 편집기에 편집 메뉴 추가(찾기, 바꾸기, 실행 취소 등) ([#1303](https://github.com/scriptscat/scriptcat/pull/1303)) (by @CodFrm)
- ✨ 편집기에서 Ctrl+Shift+F 서식 지정 지원 ([#1415](https://github.com/scriptscat/scriptcat/pull/1415)) (by @cyfung1031)
- ✨ Monaco 빠른 수정 및 사용자 스크립트 메타데이터 힌트 개선 ([#1461](https://github.com/scriptscat/scriptcat/pull/1461)) (by @cyfung1031)
- 🐛 Ctrl-F / Ctrl-H 단축키 수정 ([#1312](https://github.com/scriptscat/scriptcat/pull/1312)) (by @cyfung1031)
- 🐛 작동하지 않는 ESLint 수정 기능 수정 [#1079](https://github.com/scriptscat/scriptcat/issues/1079) ([#1184](https://github.com/scriptscat/scriptcat/pull/1184)) (by @cyfung1031)
- 🐛 편집기 CSS 레이아웃 문제 수정 ([#1460](https://github.com/scriptscat/scriptcat/pull/1460)) (by @cyfung1031)
- 🐛 밝은 테마에서 ScriptEditor 스크립트 목록 표시 수정 ([#1288](https://github.com/scriptscat/scriptcat/pull/1288)) (by @CodFrm)
- 🐛 ScriptEditor 문제 수정 및 개선 ([#1258](https://github.com/scriptscat/scriptcat/pull/1258)) (by @cyfung1031)

### ⚡️ 성능 개선

- 🚑 장기 실행 ScriptCat 세션 중 잠재적 메모리 누수 수정 ([#1401](https://github.com/scriptscat/scriptcat/pull/1401)) (by @cyfung1031)
- ⚡️ 전역 DNR 규칙에서 Baidu 파일 시스템 의존성 제거, 요청별 쿠키 비활성화로 전환 ([#1377](https://github.com/scriptscat/scriptcat/pull/1377)) (by @cyfung1031)
- ⚡️ 스크립트 검색을 위한 다중 플랫폼 검색 엔진 선택 최적화 ([#1379](https://github.com/scriptscat/scriptcat/pull/1379)) (by @cyfung1031)
- ⚡️ 떨림 방지를 위해 설치 페이지 loadingStatus에 고정 폭 글꼴 사용 ([#1381](https://github.com/scriptscat/scriptcat/pull/1381)) (by @cyfung1031)
- ⚡️ pushValue 처리 최적화 ([#1403](https://github.com/scriptscat/scriptcat/pull/1403)) (by @cyfung1031)
- ⚡️ 더 완전한 권한 검사 및 더 나은 사용자 스크립트 권한 힌트 ([#1251](https://github.com/scriptscat/scriptcat/pull/1251)) (by @cyfung1031)
- ⚡️ MessageConnect 메모리 관리 및 정리 메커니즘 개선 ([#1248](https://github.com/scriptscat/scriptcat/pull/1248)) (by @cyfung1031)

### 🐛 버그 수정

- 🐛 클라우드 스토리지 동기화 신뢰성 강화(Dropbox / WebDAV / Google Drive / OneDrive 인증, 경로 처리 및 재시도 로직) ([#1374](https://github.com/scriptscat/scriptcat/pull/1374) ~ [#1395](https://github.com/scriptscat/scriptcat/pull/1395)) (by @cyfung1031)
- 🐛 여러 클라우드 동기화 문제 수정: OneDrive 0바이트 업로드, Google Drive / OneDrive 오류 정규화, S3 사용자 지정 메타데이터 modifiedDate ([#1405](https://github.com/scriptscat/scriptcat/pull/1405)) ([#1406](https://github.com/scriptscat/scriptcat/pull/1406)) ([#1408](https://github.com/scriptscat/scriptcat/pull/1408)) (by @cyfung1031)
- 🐛 쓰기 가능한 루트가 없는 서비스(예: Nutstore)에서 오탐지를 피하기 위해 WebDAV 검증 쓰기 프로브 제거 ([#1445](https://github.com/scriptscat/scriptcat/pull/1445)) (by @CodFrm)
- 🐛 사이트 접근 권한이 없을 때 교차 출처 요청 실패 수정 ([#1477](https://github.com/scriptscat/scriptcat/pull/1477)) (by @cyfung1031)
- 🐛 Edge Android 모바일 팝업 적응 수정 [#686](https://github.com/scriptscat/scriptcat/issues/686) ([#1507](https://github.com/scriptscat/scriptcat/pull/1507)) (by @CodFrm)
- 🐛 초기 로드 중 흰색 배경 깜빡임 수정 [#1497](https://github.com/scriptscat/scriptcat/issues/1497) ([#1498](https://github.com/scriptscat/scriptcat/pull/1498)) (by @cyfung1031)
- 🐛 메시지 연결(GM API / 포트)이 제대로 정리되지 않는 문제 수정 ([#1474](https://github.com/scriptscat/scriptcat/pull/1474)) (by @cyfung1031)
- 🐛 검색이 없을 때 `@match` 템플릿 불일치 수정 ([#1466](https://github.com/scriptscat/scriptcat/pull/1466)) (by @cyfung1031)
- 🐛 Tampermonkey 반샌드박스에서 조상 클래스 상속을 수정하기 위해 `protoBaseDescs` 추가 ([#1463](https://github.com/scriptscat/scriptcat/pull/1463)) (by @cyfung1031)
- 🐛 `GM_xmlhttpRequest` msgConn에 대한 누락된 null 처리 수정 ([#1433](https://github.com/scriptscat/scriptcat/pull/1433)) (by @cyfung1031)
- 🐛 GM xhr가 비정상적인 onloadend를 올바르게 처리하지 못하는 문제 수정 ([#1412](https://github.com/scriptscat/scriptcat/pull/1412)) (by @cyfung1031)
- 🐛 ScriptEditor 목록 동적 업데이트 및 표시 문제 수정 ([#1414](https://github.com/scriptscat/scriptcat/pull/1414)) (by @cyfung1031)
- 🐛 동시 xhr에서 세션 규칙 수 문제 수정 ([#1353](https://github.com/scriptscat/scriptcat/pull/1353)) (by @cyfung1031)
- 🐛 잘못된 cron 표현식으로 인한 전체 페이지 충돌 수정 ([#1327](https://github.com/scriptscat/scriptcat/pull/1327)) (by @cyfung1031)
- 🐛 일괄 업데이트 확인 중 단일 스크립트 시간 초과 시 모든 스크립트 실패 수정 ([#1265](https://github.com/scriptscat/scriptcat/pull/1265)) (by @cyfung1031)
- 🐛 isIncognito, userAgent 및 run-in에 대한 extensionEnv 처리 추가 ([#1368](https://github.com/scriptscat/scriptcat/pull/1368)) (by @cyfung1031)
- 🐛 부분적으로 숨겨진 온보딩 가이드 버튼 수정 [#1396](https://github.com/scriptscat/scriptcat/issues/1396) ([#1398](https://github.com/scriptscat/scriptcat/pull/1398)) (by @cyfung1031)
- 🐛 스크립트 관리 페이지에서 가려진 툴팁 수정 [#1386](https://github.com/scriptscat/scriptcat/issues/1386) ([#1387](https://github.com/scriptscat/scriptcat/pull/1387)) (by @Xdy1579883916)
- 🐛 카드 모드에서 Sidebar가 비정상적인 크기 조정을 일으키는 문제 수정 [#1179](https://github.com/scriptscat/scriptcat/issues/1179) ([#1373](https://github.com/scriptscat/scriptcat/pull/1373)) (by @cyfung1031)
- 🐛 드래그 앤 드롭으로 로컬 파일을 설치할 때 잘못된 origin 설정 수정 ([#1371](https://github.com/scriptscat/scriptcat/pull/1371)) (by @cyfung1031)
- 🐛 언어 전환 메시지 수정 ([#1380](https://github.com/scriptscat/scriptcat/pull/1380)) (by @cyfung1031)
- 🐛 로그 표시 UI 개선 ([#1372](https://github.com/scriptscat/scriptcat/pull/1372)) (by @cyfung1031)
- 🐛 UserConfigPanel CSS 수정 ([#1361](https://github.com/scriptscat/scriptcat/pull/1361)) (by @cyfung1031)
- 🐛 create_context에서 빈 객체에 `Object.create(null)` 사용 ([#1397](https://github.com/scriptscat/scriptcat/pull/1397)) (by @cyfung1031)
- 🐛 구독 스크립트의 자동 업데이트 및 연결 권한 로직 수정 ([#1201](https://github.com/scriptscat/scriptcat/pull/1201)) (by @cyfung1031)
- 🐛 로그 페이지 쿼리 버튼이 시간을 새로고침하지 않는 문제 수정 ([#1294](https://github.com/scriptscat/scriptcat/pull/1294)) (by @CodFrm)

### 🔒 보안 개선

- 🔒 신뢰할 수 없는 YAML 사용자 구성 키를 통한 프로토타입 오염 수정 ([#1494](https://github.com/scriptscat/scriptcat/pull/1494)) (by @qdzsh)
- 🔒 모든 npm 의존성 보안 취약점 수정 ([#1350](https://github.com/scriptscat/scriptcat/pull/1350)) ([#1364](https://github.com/scriptscat/scriptcat/pull/1364)) ([#1365](https://github.com/scriptscat/scriptcat/pull/1365)) (by @cyfung1031)

### ♻️ 리팩터링 및 호환성

- ♻️ Firefox MV3 적응을 준비하기 위한 저수준 리팩터링 ([#1457](https://github.com/scriptscat/scriptcat/pull/1457)) ([#1480](https://github.com/scriptscat/scriptcat/pull/1480)) (by @cyfung1031)
- ♻️ 스크립트 리소스 업데이트 로직(updateResource) 및 동시성 제어 리팩터링, 리소스 캐시 호환성 복원 ([#1193](https://github.com/scriptscat/scriptcat/pull/1193)) (by @cyfung1031)
- ♻️ ZIP 처리를 위해 jszip을 JSZipp으로 교체(백업 가져오기/내보내기)하고 사용하지 않는 jszip 의존성 제거 ([#1479](https://github.com/scriptscat/scriptcat/pull/1479)) (by @cyfung1031)
- ♻️ postMessage 채널을 통한 Offscreen ↔ ServiceWorker 통신 통합 ([#1299](https://github.com/scriptscat/scriptcat/pull/1299)) (by @CodFrm)
- ♻️ VSCodeConnect 코드 리팩터링 ([#1170](https://github.com/scriptscat/scriptcat/pull/1170)) (by @cyfung1031)
- ⚡️ AMO 검증 통과를 위해 ts.worker.js를 4MB로 압축, MV3 백그라운드 권한 오류 수정 ([#1221](https://github.com/scriptscat/scriptcat/pull/1221)) (by @cyfung1031)

### 🌐 국제화

- 🌐 다국어 용어 번역 수정(주로 번체 중국어 개선) 및 번역 용어 지침 추가 ([#1468](https://github.com/scriptscat/scriptcat/pull/1468)) (by @cyfung1031)

### 기타

- ✨ fetchIconByDomain 아이콘 서비스를 scriptcat.org로 전환 ([#1268](https://github.com/scriptscat/scriptcat/pull/1268)) (by @cyfung1031)
- 🔥 Crowdin 및 ach-UG 유사 언어 관련 콘텐츠 제거 ([#1385](https://github.com/scriptscat/scriptcat/pull/1385)) (by @CodFrm)

<a name="0.16.15"></a>

## 0.16.15 (2026-05-19)

### 🐛 버그 수정

- 🐛 MV2 패키징 스크립트 빌드 명령 수정 [#1423](https://github.com/scriptscat/scriptcat/issues/1423) (by @CodFrm)
- 🐛 WebExtensions API 변경 사항 적응(Firefox 149-152), CSP 조정 포함 ([#1448](https://github.com/scriptscat/scriptcat/pull/1448)) (by @cyfung1031)

<a name="0.16.14"></a>

## 0.16.14 (2026-04-26)

### 🚀 주요 신규 기능

- ✨ FirefoxMV2를 MV3 주요 항목과 동기화: TypeScript 4.9로 업그레이드, tsconfig es2022로 업그레이드; 스크립트 템플릿(normal/crontab/background)을 MV3와 정렬; `once(...)` 표현식 지원으로 cron 업그레이드; Monaco Editor 다국어 지원 ([#1331](https://github.com/scriptscat/scriptcat/pull/1331)) (by @cyfung1031)

### ♻️ 리팩터링 및 호환성

- 🔥 MV3와 정렬하기 위해 axios 의존성 제거 ([#1339](https://github.com/scriptscat/scriptcat/pull/1339)) (by @cyfung1031)

### 🐛 버그 수정

- 🐛 window.parent 중첩 iframe이 postMessage 메시지를 받지 못하는 문제 수정 ([#1335](https://github.com/scriptscat/scriptcat/pull/1335)) (by @cyfung1031)

<a name="1.3.2"></a>

## 1.3.2 (2026-03-28)

### 🐛 버그 수정

- 🐛 오류 406을 피하기 위해 fetchScriptBody에서 Accept 헤더 제거 ([#1306](https://github.com/scriptscat/scriptcat/pull/1306)) (by @cyfung1031)
- 🐛 WebDAV 쿠키 인증 충돌 및 authType 지원 수정 ([#1308](https://github.com/scriptscat/scriptcat/pull/1308)) (by @CodFrm)
- 🐛 서식 오류를 올바르게 표시 ([#1310](https://github.com/scriptscat/scriptcat/pull/1310)) (by @cyfung1031)
- 🐛 기기 간 동기화를 피하기 위해 기기별 구성에 chrome.storage.local 사용 ([#1309](https://github.com/scriptscat/scriptcat/pull/1309)) (by @CodFrm)
- 🐛 코드 편집기 힌트 문제 수정 ([#1301](https://github.com/scriptscat/scriptcat/pull/1301)) (by @cyfung1031)
- 🐛 로그 페이지에서 날짜 선택기 팝업 잘림 수정 ([#1292](https://github.com/scriptscat/scriptcat/pull/1292)) (by @cyfung1031)
- 🐛 클라우드 드라이브가 연결되지 않았을 때 연결 해제 버튼이 표시되는 문제 수정 ([#1291](https://github.com/scriptscat/scriptcat/pull/1291)) (by @CodFrm)
- 🐛 가려진 팝업 수정 ([#1290](https://github.com/scriptscat/scriptcat/pull/1290)) (by @cyfung1031)

<a name="1.3.1"></a>

## 1.3.1 (2026-03-13)

### 🐛 버그 수정

- 🚑 다른 확장 프로그램이 chrome.runtime을 주입하여 발생하는 환경 감지 오류 수정 [#1280](https://github.com/scriptscat/scriptcat/issues/1280) ([#1281](https://github.com/scriptscat/scriptcat/pull/1281)) (by @CodFrm)

### 기타

- ✅ Playwright E2E 테스트 및 GM API 기능 테스트 추가 ([#1283](https://github.com/scriptscat/scriptcat/pull/1283)) (by @CodFrm)

<a name="1.3.0"></a>

## 1.3.0 (2026-03-10)

이 업데이트는 Amazon S3 스토리지, 스크립트 런타임 옵션, 외부 웹사이트 접근 없이 설치 기능 등을 제공합니다. 메시징 시스템과 React 성능을 크게 최적화하고, 많은 GM API, UI 및 안정성 문제를 수정하며, 광범위한 코드 품질 개선을 포함합니다.

### 🚀 주요 신규 기능

- ✨ Amazon S3 스토리지 추가 [#1146](https://github.com/scriptscat/scriptcat/issues/1146) ([#1189](https://github.com/scriptscat/scriptcat/pull/1189)) (by @CodFrm)
- ✨ 스크립트 런타임 옵션 ([#895](https://github.com/scriptscat/scriptcat/pull/895)) (by @CodFrm)
- ✨ 외부 웹사이트 접근 없이 설치 + 설치 페이지 레이아웃 조정 ([#842](https://github.com/scriptscat/scriptcat/pull/842)) (by @cyfung1031)
- ✨ 스크립트 기능이 비활성화되면 회색 아이콘 표시 [#897](https://github.com/scriptscat/scriptcat/issues/897) (by @CodFrm)
- ✨ 메뉴 확장 항목 수가 0일 때 상호작용 최적화 [#868](https://github.com/scriptscat/scriptcat/issues/868) (by @CodFrm)
- ✨ 흔한 실수를 방지하기 위해 템플릿에서 `@noframes` 기본값 ([#900](https://github.com/scriptscat/scriptcat/pull/900)) (by @cyfung1031)
- ✨ 스크립트 이름이 변경될 때 설치 링크가 새 설치로 오인되지 않도록 방지 ([#824](https://github.com/scriptscat/scriptcat/pull/824)) (by @cyfung1031)
- ✨ `@grant` 충돌 검증 수정, 중복 메타 선언 오류 프롬프트 추가 ([#902](https://github.com/scriptscat/scriptcat/pull/902)) (by @cyfung1031)
- ✨ 값이 없거나 빈 값의 `@version` 허용 ([#1216](https://github.com/scriptscat/scriptcat/pull/1216)) (by @cyfung1031)
- ✨ 숨겨진 편집기 사이드바 위치 조정 [#1185](https://github.com/scriptscat/scriptcat/issues/1185) ([#1254](https://github.com/scriptscat/scriptcat/pull/1254)) (by @CodFrm)

### 🧩 GM API 변경

- 🐛 GM_addElement 문제 수정, 작업을 콘텐츠 환경으로 이동 ([#1233](https://github.com/scriptscat/scriptcat/pull/1233)) (by @cyfung1031)
- 🐛 `GM_download`에 `conflictAction` 매개변수 추가 ([#1250](https://github.com/scriptscat/scriptcat/pull/1250)) (by @cyfung1031)
- 🐛 GM API 비동기 선언 수정, Promise 올바르게 반환 ([#1169](https://github.com/scriptscat/scriptcat/pull/1169)) (by @cyfung1031)
- ♻️ Firefox 호환성: GM_setClipboard ([#928](https://github.com/scriptscat/scriptcat/pull/928)) (by @cyfung1031)
- 🐛 GM_value 문제 수정 [#1192](https://github.com/scriptscat/scriptcat/issues/1192) (by @CodFrm)
- 🐛 다운로드 파일 이름이 폴더를 지원하지 않는 문제 수정 ([#1203](https://github.com/scriptscat/scriptcat/pull/1203)) (by @cyfung1031)

### ⚡️ 성능 개선

- ♻️ 메시징 시스템 리팩터링: storage.local 브로드캐스트 + Firefox MV3 scripting 준수 + 추적 불가능한 동적 동기화 MessageFlag ([#1067](https://github.com/scriptscat/scriptcat/pull/1067)) (by @cyfung1031)
- ⚡️ React 재렌더링 문제 수정(ScriptCard & ScriptTable) ([#1182](https://github.com/scriptscat/scriptcat/pull/1182)) (by @cyfung1031)
- ⚡️ React 재렌더링 문제 수정(Popup) ([#1181](https://github.com/scriptscat/scriptcat/pull/1181)) (by @cyfung1031)
- ⚡️ Repo 성능 최적화 ([#1232](https://github.com/scriptscat/scriptcat/pull/1232)) (by @CodFrm)
- ⚡️ chrome.storage.session에서 메타데이터 이동 ([#1027](https://github.com/scriptscat/scriptcat/pull/1027)) (by @cyfung1031)
- ⚡️ 문자 집합 감지 개선 ([#1140](https://github.com/scriptscat/scriptcat/pull/1140)) (by @cyfung1031)
- ⚡️ 스크립트 간 중복 저장을 피하기 위해 URL별로 아이콘 저장 ([#909](https://github.com/scriptscat/scriptcat/pull/909)) (by @cyfung1031)
- ⚡️ parseMetadata 코드 최적화 ([#903](https://github.com/scriptscat/scriptcat/pull/903)) (by @cyfung1031)
- 🐛 메모리 누수 및 객체 속성 노출 수정 ([#1242](https://github.com/scriptscat/scriptcat/pull/1242)) (by @cyfung1031)
- ♻️ Redux 제거, 상태 관리 단순화 ([#1206](https://github.com/scriptscat/scriptcat/pull/1206)) (by @cyfung1031)

### 🧑‍💻 편집기

- ✨ Monaco Editor 설정 최적화, `/* global xxx */` 수정 추가 ([#1012](https://github.com/scriptscat/scriptcat/pull/1012)) (by @cyfung1031)
- ✨ Monaco Editor 힌트 다국어 지원 및 `@require-css` 힌트 추가 ([#960](https://github.com/scriptscat/scriptcat/pull/960)) (by @cyfung1031)

### 🐛 버그 수정

- 🐛 시크릿 창 권한 확인 충돌로 인한 반복 재시작 수정 (by @CodFrm)
- 🐛 include `*?*` 표현식 처리 수정 [#1271](https://github.com/scriptscat/scriptcat/issues/1271) ([#1272](https://github.com/scriptscat/scriptcat/pull/1272)) (by @CodFrm)
- 🔒 DOMPurify로 공지 알림 HTML 콘텐츠 삭제 ([#1274](https://github.com/scriptscat/scriptcat/pull/1274)) (by @CodFrm)
- 🐛 작동하지 않는 스크립트 설정 - 권한 관리 제어 수정 ([#1267](https://github.com/scriptscat/scriptcat/pull/1267)) (by @CodFrm)
- 🐛 팝업 콘텐츠가 화면 스크롤을 따라가는 문제 수정 [#1256](https://github.com/scriptscat/scriptcat/issues/1256) ([#1263](https://github.com/scriptscat/scriptcat/pull/1263)) (by @cyfung1031)
- 🐛 설치 링크 구문 분석 실패 수정 [#1235](https://github.com/scriptscat/scriptcat/issues/1235) ([#1260](https://github.com/scriptscat/scriptcat/pull/1260)) (by @cyfung1031)
- 🐛 focusin/focusout 지연을 일으키는 드래그 구성 요소 수정 [#1224](https://github.com/scriptscat/scriptcat/issues/1224) ([#1243](https://github.com/scriptscat/scriptcat/pull/1243)) (by @CodFrm)
- 🐛 작동하지 않는 외부 확장 API 수정 ([#1217](https://github.com/scriptscat/scriptcat/pull/1217)) (by @cyfung1031)
- 🐛 grant 문제 수정 ([#1199](https://github.com/scriptscat/scriptcat/pull/1199)) (by @CodFrm)
- 🐛 content.js에 없는 UserAgentData 수정 ([#1183](https://github.com/scriptscat/scriptcat/pull/1183)) (by @cyfung1031)
- 🐛 스크립트 인코딩 문제 처리 [#1115](https://github.com/scriptscat/scriptcat/issues/1115) ([#1138](https://github.com/scriptscat/scriptcat/pull/1138)) (by @CodFrm)
- 🐛 스크립트 아이콘 표시 수정 [#1052](https://github.com/scriptscat/scriptcat/issues/1052) ([#1104](https://github.com/scriptscat/scriptcat/pull/1104)) (by @CodFrm)
- 🐛 CSS 충돌 해결을 위해 UnoCSS 접두사 추가, CSS 레이아웃 수정 ([#1013](https://github.com/scriptscat/scriptcat/pull/1013)) (by @cyfung1031)
- 🐛 불규칙한 스크립트 업데이트 확인 선택 시 기존 Alarm 정리 ([#996](https://github.com/scriptscat/scriptcat/pull/996)) (by @cyfung1031)
- 🐛 가져오기 및 내보내기 - 잘못된 스크립트 마지막 수정 날짜/시간 수정 ([#951](https://github.com/scriptscat/scriptcat/pull/951)) (by @cyfung1031)
- 🐛 i18n 접두사 언어 스크립트 이름 및 설명 표시 수정 [#1123](https://github.com/scriptscat/scriptcat/issues/1123) (by @CodFrm)
- 🐛 unregister가 올바르게 실행되지 않는 문제 수정 ([#1231](https://github.com/scriptscat/scriptcat/pull/1231)) (by @cyfung1031)

### ♻️ 리팩터링 및 호환성

- ♻️ userScripts / scripting API 조정, 호환성 강화(#704 재실행) ([#925](https://github.com/scriptscat/scriptcat/pull/925)) (by @cyfung1031)
- ♻️ Cron 관련 변경: 버그 수정, i18n, once 표현식 강화, cron 라이브러리 업그레이드 ([#1126](https://github.com/scriptscat/scriptcat/pull/1126)) (by @cyfung1031)
- ♻️ 스크립트 아이콘 로딩 리팩터링 및 최적화 ([#893](https://github.com/scriptscat/scriptcat/pull/893)) (by @CodFrm)
- ♻️ 텍스트 디코딩 개선 ([#1166](https://github.com/scriptscat/scriptcat/pull/1166)) (by @cyfung1031)
- ⬆️ swc 호환 커널 버전 업그레이드 ([#1186](https://github.com/scriptscat/scriptcat/pull/1186)) (by @cyfung1031)

### 🎨 UI 개선

- 🎨 기본 확장 아이콘 배지 숫자를 스크립트 수로 변경 [#989](https://github.com/scriptscat/scriptcat/issues/989) (by @CodFrm)
- 🎨 설치 페이지 URL을 더 예쁘게 ([#993](https://github.com/scriptscat/scriptcat/pull/993)) (by @cyfung1031)
- 🐛 DraggableEntry 리팩터링, 카드 높이 정렬 수정 ([#1245](https://github.com/scriptscat/scriptcat/pull/1245)) (by @cyfung1031)

### 기타

- 🔒 보안 개선(DOMPurify, npm 의존성 취약점 수정)
- 👷 Rspack 번들링 최적화, 빌드 도구 체인 수정
- ⬆️ 의존성 버전 업데이트

**전체 변경 내역:** [v1.2.6...v1.3.0 비교](https://github.com/scriptscat/scriptcat/compare/v1.2.6...v1.3.0)

<a name="1.2.6"></a>

## 1.2.6 (2026-02-03)

### 수정됨

- 🐛 structuredClone 오류 수정 ([#1192](https://github.com/scriptscat/scriptcat/issues/1192)) [[265e122](https://github.com/scriptscat/scriptcat/commit/265e122342366b166d3122cc8da485cb1295b924)] (by @cyfung1031)

<a name="1.2.5"></a>

## 1.2.5 (2026-02-02)

### 수정됨

- 🐛 스크립트 동기화 삭제 문제 수정 [#1158](https://github.com/scriptscat/scriptcat/issues/1158) [[5e91a31](https://github.com/scriptscat/scriptcat/commit/5e91a31e02761ba8061e3de1f4d15fc1d964346c)] (by @CodFrm)
- 🐛 TM &#x60;@match www.website.com/*&#x60; 호환 ([#1165](https://github.com/scriptscat/scriptcat/issues/1165)) [[da66ff7](https://github.com/scriptscat/scriptcat/commit/da66ff70d25c3087cb8405289dc8b14df9c15f05)] (by @cyfung1031)
- 🐛 Edge 최신 버전 144에서 사용자 스크립트 추가 [#1157](https://github.com/scriptscat/scriptcat/issues/1157) [[f7c1c73](https://github.com/scriptscat/scriptcat/commit/f7c1c730cf39cae02a9e6f815e3113ea9d2a8a05)] (by @CodFrm)
- 🐛 FileSystemObserver 연속 모니터링 문제 수정 ([#1160](https://github.com/scriptscat/scriptcat/issues/1160)) [[9556769](https://github.com/scriptscat/scriptcat/commit/95567690d1bf77bfe8bedfd6a94c88949a77e115)] (by @cyfung1031)
- 🐛 locales.ts 사소한 수정 ([#1154](https://github.com/scriptscat/scriptcat/issues/1154)) [[1c44b68](https://github.com/scriptscat/scriptcat/commit/1c44b680dab3a95a51eb73cf92531efd0a192dc9)] (by @cyfung1031)
- 🐛 팝업 업데이트 창 시간 문제 수정 ([#1155](https://github.com/scriptscat/scriptcat/issues/1155)) [[c17f761](https://github.com/scriptscat/scriptcat/commit/c17f761807fb9b14aff09b9b08d19e4cbe72b8a5)] (by @cyfung1031)
- 🐛 i18n 접두사 언어 스크립트 이름 및 설명 표시 수정 [#1123](https://github.com/scriptscat/scriptcat/issues/1123) [[7ef7355](https://github.com/scriptscat/scriptcat/commit/7ef7355632fc989fa1cad44fd2069ff840bbd8df)] (by @CodFrm)
- 🐛 값 참조 문제 처리 [#1141](https://github.com/scriptscat/scriptcat/issues/1141) ([#1147](https://github.com/scriptscat/scriptcat/issues/1147)) [[0892fcd](https://github.com/scriptscat/scriptcat/commit/0892fcd452758030553c33ddf14f1ce4bc6d3efc)] (by @cyfung1031)

<a name="1.2.4"></a>

## 1.2.4 (2026-01-07)

동기화 버그 수정, 그리고 버전 업데이트 시 더 이상 변경 내역 페이지가 자동으로 열리지 않음

### 추가됨

- ✨ 동기화 삭제가 이제 기본적으로 비활성화됨 ([#958](https://github.com/scriptscat/scriptcat/issues/958)) [[9c4c7dc](https://github.com/scriptscat/scriptcat/commit/9c4c7dc411357746db43a306d97ac41a71f2b49c)] (by @cyfung1031)
- ✨ 편집기에서 이제 GM.\* 지원 ([#1129](https://github.com/scriptscat/scriptcat/issues/1129)) [[bea0192](https://github.com/scriptscat/scriptcat/commit/bea0192c6cc50eff2ed4e1cc5dcc25f36bbe10e7)] (by @cyfung1031)

### 변경됨

- ♻️ 변경 내역 페이지 열기 로직 최적화 [#1110](https://github.com/scriptscat/scriptcat/issues/1110) [[d3ffedc](https://github.com/scriptscat/scriptcat/commit/d3ffedcffe752ca548f87f1640072fcd871b8604)] (by @CodFrm)

### 수정됨

- 🐛 scriptcat.d.tpl &amp; 유형 수정 ([#1130](https://github.com/scriptscat/scriptcat/issues/1130)) [[dd22ef5](https://github.com/scriptscat/scriptcat/commit/dd22ef544684d69e24a7aae098cb05cbab03daa8)] (by @cyfung1031)
- 🐛 클라우드 동기화 문제 수정 ([#1133](https://github.com/scriptscat/scriptcat/issues/1133)) [[a9383d2](https://github.com/scriptscat/scriptcat/commit/a9383d2012eb3953dc33c8886ce3891f404fa100)] (by @CodFrm)
- 🐛 &#x60;GM_addElement(&quot;tagName&quot;)&#x60; 오류 수정 ([#1120](https://github.com/scriptscat/scriptcat/issues/1120)) [[ad19de5](https://github.com/scriptscat/scriptcat/commit/ad19de5c1793c8c079bedbf1b11c7c2ae27a469e)] (by @cyfung1031)
- 🐛 정리 로직 제거 및 checkuserscript 로직 최적화 ([#1113](https://github.com/scriptscat/scriptcat/issues/1113)) [[e635911](https://github.com/scriptscat/scriptcat/commit/e635911a3c11c3cb8acd1cfd507cb777e5ee7236)] (by @CodFrm)

### 기타

- 🏷️ TypeScript 수정 ([#1127](https://github.com/scriptscat/scriptcat/issues/1127)) [[b455724](https://github.com/scriptscat/scriptcat/commit/b4557244191018c18d5ce8ea8e8627bcfb7f7cdd)] (by @cyfung1031)
- 📝 예제 주석 보완 ([#1131](https://github.com/scriptscat/scriptcat/issues/1131)) [[292549e](https://github.com/scriptscat/scriptcat/commit/292549ed0f65952fe9f269aace23eefc7d6a3a0f)] (by @cyfung1031)

<a name="1.2.3"></a>

## 1.2.3 (2025-12-20)

일부 버그 수정

### 변경됨

- ⚡ 다음 실행 시간 표시 최적화 [#1093](https://github.com/scriptscat/scriptcat/issues/1093) [[324ce51](https://github.com/scriptscat/scriptcat/commit/324ce515c84699ca8d3bf1ee447fc6ef0656ae0d)] (by @CodFrm)

### 수정됨

- 🐛 초기 스크립트의 URL 일치 문제 수정 ([#1096](https://github.com/scriptscat/scriptcat/issues/1096)) [[a77effb](https://github.com/scriptscat/scriptcat/commit/a77effbab5ab4d1752065ef943d9c050ff99c066)] (by @cyfung1031)
- 🐛 업데이트 팝업 창이 너무 짧게 표시되는 문제 수정 ([#1088](https://github.com/scriptscat/scriptcat/issues/1088)) [[b2b2d5c](https://github.com/scriptscat/scriptcat/commit/b2b2d5c41ff70ee5430f7d8d156f480ac8fc3a1a)] (by @cyfung1031)
- 🐛 사용자 스크립트 알림이 활성화될 때 비정상 표시 수정 ([#1086](https://github.com/scriptscat/scriptcat/issues/1086)) ([959c4db](https://github.com/scriptscat/scriptcat/commit/959c4dbed92f7bfe22a2f8ebb775c4189b5ff076))
- 🐛 responseHeaders: &#x60;TM 호환성: \\r\\n&#x60; ([#1085](https://github.com/scriptscat/scriptcat/issues/1085)) [[15232c8](https://github.com/scriptscat/scriptcat/commit/15232c8543d93abfdafa1353d39d8a15d1dc385f)] (by @cyfung1031)
- 🐛 GM XHR 문제 수정 ([#1082](https://github.com/scriptscat/scriptcat/issues/1082)) [[3d987c3](https://github.com/scriptscat/scriptcat/commit/3d987c300242a3c765146359c35ecd6d998f792c)] (by @CodFrm)

### 기타

- 🌐 팝업 페이지의 i18n 문제 처리 [#1081](https://github.com/scriptscat/scriptcat/issues/1081) [[6b17d71](https://github.com/scriptscat/scriptcat/commit/6b17d7100e8572d72b3b7aaf8ea38be9cdf33f5f)] (by @CodFrm)

<a name="1.2.2"></a>

## 1.2.2 (2025-12-13)

일부 버그 수정

### 수정됨

- 🐛 잦은 백그라운드 동기화 문제 수정 ([#1076](https://github.com/scriptscat/scriptcat/issues/1076)) [[45dc39b](https://github.com/scriptscat/scriptcat/commit/45dc39baa0f3326cf12e97312ab632dc46ba40f2)] (by @CodFrm)
- 🐛 특수 탭 처리 문제 수정 [#1066](https://github.com/scriptscat/scriptcat/issues/1066) ([50904fb](https://github.com/scriptscat/scriptcat/commit/50904fb46efdea10fd57677bc2d28c770b47e861))
- 🐛 일치 규칙이 없는 스크립트 처리 수정 [#1071](https://github.com/scriptscat/scriptcat/issues/1071) ([560cdc0](https://github.com/scriptscat/scriptcat/commit/560cdc01fc0fc27fb7d0e3b877c63ba431206668))
- 🐛 백그라운드 선택 권한을 제거한 CI 패키징 문제 수정 [[1f002f0](https://github.com/scriptscat/scriptcat/commit/1f002f0edf9892f023ae93b8522ff7c5e4a96559)] (by @CodFrm)
- 🐛 폐기된 탭 무시 수정 ([#1058](https://github.com/scriptscat/scriptcat/issues/1058)) [[6165bf4](https://github.com/scriptscat/scriptcat/commit/6165bf48eb1d53ede0561c85c30135446c2ff882)] (by @cyfung1031)

<a name="1.2.1"></a>

## 1.2.1 (2025-12-06)

일부 버그 수정 및 백그라운드 실행 옵션 처리.

### 추가됨

- ✨ 백그라운드 실행 옵션 추가 ([#1048](https://github.com/scriptscat/scriptcat/issues/1048)) [[626e84d](https://github.com/scriptscat/scriptcat/commit/626e84dbd4dda0731e0a5ffdbdf71ae10e884489)] (by @CodFrm)

### 수정됨

- 🐛 document.write로 인한 메시지 리스너 재설정 문제 수정 ([#1055](https://github.com/scriptscat/scriptcat/issues/1055)) [[1f3a3ec](https://github.com/scriptscat/scriptcat/commit/1f3a3ec335ed4b519599e9aa3036c66b6f0d10b2)] (by @cyfung1031)
- 🐛 목록 보기 필터링 기능 수정 [[e272dc6](https://github.com/scriptscat/scriptcat/commit/e272dc6ed151c15a1ef785b70ae100cb9e74a5dd)] (by @CodFrm)
- 🐛 초기 단계에서 UserAgentData 처리 ([#1045](https://github.com/scriptscat/scriptcat/issues/1045)) [[b4e08a8](https://github.com/scriptscat/scriptcat/commit/b4e08a812a08f42037837bbee54610ebc565063f)] (by @cyfung1031)
- 🐛 GM_openInTab의 useOpen 옵션 복원 [#1043](https://github.com/scriptscat/scriptcat/issues/1043) ([#1044](https://github.com/scriptscat/scriptcat/issues/1044)) [[7f30198](https://github.com/scriptscat/scriptcat/commit/7f30198909824871e694d5ffbe7088e44a6d0b45)] (by @cyfung1031)
- 🐛 userScripts undefined 문제 수정 ([#1041](https://github.com/scriptscat/scriptcat/issues/1041)) [[4f2deda](https://github.com/scriptscat/scriptcat/commit/4f2deda69aa6aae7f6e791be1cd965a440b80e33)] (by @cyfung1031)
- 🐛 `AppContext`에서 `"monaco-editor"`에 대한 잘못된 참조 수정 ([#983](https://github.com/scriptscat/scriptcat/issues/983)) [[4b8dae1](https://github.com/scriptscat/scriptcat/commit/4b8dae1f49208d13c4d19c4c627762fc1b04ea5e)] (by @cyfung1031)

**전체 변경 내역:** [v1.2.0...v1.2.1 비교](https://github.com/scriptscat/scriptcat/compare/v1.2.0...v1.2.1)

<a name="1.2.0"></a>

## 1.2.0 (2025-11-29)

이 업데이트는 스크립트 목록 사이드바, 카드 보기, 더 친근한 업데이트 확인 로직, 편집기 구성 등을 제공합니다. 주입 및 런타임 안정성이 크게 개선되어 CSP, 샌드박스, GM API의 심각한 문제를 수정하고 성능 및 구조 최적화도 제공합니다.

자세한 내용은 v1.2.0-beta.x 변경 내역과 [v1.2](https://docs.scriptcat.org/docs/change/v1.2/) 문서를 참조하세요.

### 🚀 주요 신규 기능

- ✨ 스크립트 목록 사이드바 [#794](https://github.com/scriptscat/scriptcat/issues/794) (by @CodFrm)
- ✨ 카드 보기 [#860](https://github.com/scriptscat/scriptcat/issues/860) (by @CodFrm)
- ✨ 더 친근한 업데이트 확인 로직 [#755](https://github.com/scriptscat/scriptcat/issues/755) (by @cyfung1031)
- ✨ 편집기 구성 및 편집기 유형 정의 추가 [#708](https://github.com/scriptscat/scriptcat/pull/708) (by @CodFrm)
- ✨ 팝업에 스크립트 수 표시 ([#973](https://github.com/scriptscat/scriptcat/issues/973)) [[1134586](https://github.com/scriptscat/scriptcat/commit/1134586ff040ffc0cdddd3538e9ec493950c948a)] (by @cyfung1031)
- ✨ 코드 사이드바를 숨기는 레이아웃 메뉴 추가 [#689](https://github.com/scriptscat/scriptcat/issues/689) [[dd64da7](https://github.com/scriptscat/scriptcat/commit/dd64da719c081acbf21645e2b1e1f38653ffae8c)]
- ✨ SC 버전 확인 버튼 추가 ([#795](https://github.com/scriptscat/scriptcat/issues/795)) [[1680c66](https://github.com/scriptscat/scriptcat/commit/1680c66099120c0e497c1a1f5321f38fe0160ea0)] (by @cyfung1031)
- ✨ 확장 프로그램 제거 후 설문 페이지 추가 [[6404c8f](https://github.com/scriptscat/scriptcat/commit/6404c8f74aff09b15725a92f8afdfc0d71ac188f)]

### 🧩 GM API 변경

- ✨ 콘텐츠 환경 주입 지원, 스크립트를 콘텐츠 환경에 주입할 수 있음 [#711](https://github.com/scriptscat/scriptcat/issues/711)
- ✨ GM_openInTab 고정 창, 시크릿 창에서 열기 및 기타 매개변수 지원 [#788](https://github.com/scriptscat/scriptcat/pull/788) (by @cyfung1031)
- ✨ GM_registerMenuCommand 하위 메뉴 및 구분 기호 지원 [#831](https://github.com/scriptscat/scriptcat/pull/831) (by @cyfung1031)
- 🗑 GM_openInTab에서 useOpen 옵션 제거 [#867](https://github.com/scriptscat/scriptcat/pull/867)
- ♻️ `@connect` 로직 조정 ([#969](https://github.com/scriptscat/scriptcat/issues/969)) [[67914d2](https://github.com/scriptscat/scriptcat/commit/67914d2b7d57fa9c69706ae57ee5d3400c2643f9)] (by @cyfung1031)
- ♻️ `GM_xmlhttpRequest` 및 관련 코드 리팩터링 ([#901](https://github.com/scriptscat/scriptcat/issues/901)) [[fabd2e9](https://github.com/scriptscat/scriptcat/commit/fabd2e944235b460bc73df346b79d23ee4540af7)] (by @cyfung1031)

### 기타

- ⚡️ 안정성 및 성능 최적화
- 🐛 다양한 문제 수정
- ♻️ 코드 구조 최적화
- 🌐 i18n 개선

**전체 변경 내역:** [v1.1.2...v1.2.0 비교](https://github.com/scriptscat/scriptcat/compare/v1.1.2...v1.2.0)

<a name="1.1.2"></a>

## 1.1.2 (2025-09-18)

버그 수정

### 수정됨

- 🐛 샌드박스 toString 문제 수정 [#737](https://github.com/scriptscat/scriptcat/issues/737) [[6ca24c9](https://github.com/scriptscat/scriptcat/commit/6ca24c9b171792035803ac4e1c69e473629f9d18)]
- 🐛 배지가 0을 표시하는 문제 수정 [[026c1d2](https://github.com/scriptscat/scriptcat/commit/026c1d2071dd4cfb6291f005d36717bcdf0a51c3)]
- 🐛 스크립트 주입 CSP 문제 수정 [#739](https://github.com/scriptscat/scriptcat/issues/739) [#728](https://github.com/scriptscat/scriptcat/issues/728) [[5da21b5](https://github.com/scriptscat/scriptcat/commit/5da21b5e3d0e7e86a1fd5dff57ba03ea641c19fa)]
- 🐛 팝업 페이지에서 백그라운드 스크립트가 펼쳐지지 않는 문제 수정 [[66ab70f](https://github.com/scriptscat/scriptcat/commit/66ab70fb10c28aaf0c9260a9591aab7e1ae35615)]
- 🐛 메시지 유형 검증 강화 [#676](https://github.com/scriptscat/scriptcat/issues/676) [[5073795](https://github.com/scriptscat/scriptcat/commit/50737957507ff9af3aa9ba9a6b7d444b643d1ff2)]
- 🐛 GM xhr document 문제 수정 [#716](https://github.com/scriptscat/scriptcat/issues/716) [[1c46546](https://github.com/scriptscat/scriptcat/commit/1c465462f4e14ae461d54358710f5caf74208af3)]

<a name="1.1.1"></a>

## 1.1.1 (2025-09-07)

### 추가됨

- ✨ 사용자 지정 편집기 구성 및 편집기 유형 정의 추가 ([#708](https://github.com/scriptscat/scriptcat/issues/708)) [[49eb379](https://github.com/scriptscat/scriptcat/commit/49eb3794774790d61c3ef787c865a9ba6fe82841)]

### 수정됨

- 🐛 이전 브라우저 버전과의 호환성 문제 수정 [#715](https://github.com/scriptscat/scriptcat/issues/715) [[4da8068](https://github.com/scriptscat/scriptcat/commit/4da806879c2b170672814d02e6f8ed98c9fae35b)]
- 💄 팝업 창이 너무 작을 때 팝업 메뉴 표시 최적화 ([288650e](https://github.com/scriptscat/scriptcat/commit/288650e5e4cbdc3fa8658f0754ce427a1b3dec5a))
- 🐛 여러 문제 수정 ([#710](https://github.com/scriptscat/scriptcat/issues/710)) [[6a2027a](https://github.com/scriptscat/scriptcat/commit/6a2027ac0bb5e0ed625df570240d068a98a34b31)] (by @WhiteSevs)

### 기타

- 🌐 i18n 문제 처리 [[2adf69d](https://github.com/scriptscat/scriptcat/commit/2adf69d6ec3c30186f2c2ef89f97e3cba9e15a66)]

<a name="1.1.0"></a>

## 1.1.0 (2025-09-07)

많은 버그 수정 및 호환성 개선, Dropbox 지원 추가, 페이지 로드보다 빠른 로딩을 위한 새로운 @early-start 기능. 자세한 내용은 v1.1.0-beta.x 변경 내역을 참조하세요.

### 추가됨

- ✨ 스크립트 런타임 환경 설정 추가 [#628](https://github.com/scriptscat/scriptcat/issues/628) [[0d4a89e](https://github.com/scriptscat/scriptcat/commit/0d4a89efaecf0331dcc7fbb6df006b93a1525846)]
- ✨ 백그라운드 스크립트가 없을 때 기본적으로 접기 [#626](https://github.com/scriptscat/scriptcat/issues/626) ([9d0aac6](https://github.com/scriptscat/scriptcat/commit/9d0aac6aae11b96707ca1f7c024a24e9d55f217b))
- ✨ Dropbox 지원 [#575](https://github.com/scriptscat/scriptcat/issues/575) [[2c66f21](https://github.com/scriptscat/scriptcat/commit/2c66f21f5118bd83a0eaa0f1baa3a31f2233e5b2)]
- ✨ TM이 설치되지 않았지만 TM과 SC가 모두 활성화된 경우 SC 설치 상태를 확인하도록 external.Tampermonkey 최적화 ([#703](https://github.com/scriptscat/scriptcat/issues/703)) [[d0115c3](https://github.com/scriptscat/scriptcat/commit/d0115c33657260d803b6091139601b1b20407d4e)] (by @cyfung1031)
- ✨ 페이지보다 빠른 로딩을 위한 @early-start 추가 ([#649](https://github.com/scriptscat/scriptcat/issues/649)) [[eb097dd](https://github.com/scriptscat/scriptcat/commit/eb097dd146dcd6f8ca712ed883571dbfb3d09f20)]
- ✨ 전역 코드 검색 ([#662](https://github.com/scriptscat/scriptcat/issues/662)) [[f8eafb7](https://github.com/scriptscat/scriptcat/commit/f8eafb7f955dad62c1b41ac477e929bf00c65982)] (by @RenjiYuusei)
- ✨ 확장 프로그램 제거 후 설문 페이지 추가 [[6404c8f](https://github.com/scriptscat/scriptcat/commit/6404c8f74aff09b15725a92f8afdfc0d71ac188f)]
- 📝 설치 페이지 및 네임스페이스 수정 ([6f2f000](https://github.com/scriptscat/scriptcat/commit/6f2f000612908b7a88f6b70c2831092805c63bc7))
- ✨ 모바일 설치용 QR 코드 추가 ([348237c](https://github.com/scriptscat/scriptcat/commit/348237c7ce9771c69025386926b1f73710cf6f42))

### 수정됨

- 🐛 네트워크가 설치 중간 페이지에 접근할 수 없을 때 설치가 트리거되지 않는 문제 수정 [#705](https://github.com/scriptscat/scriptcat/issues/705) [[5f1e292](https://github.com/scriptscat/scriptcat/commit/5f1e2929d79c470ba4427c3cce01f5cd184a839b)]
- 🐛 `@match *://*domain/*` 표현식 처리 [[039b445](https://github.com/scriptscat/scriptcat/commit/039b4454148947cd3c74de82b87804ee9815e60c)]
- 🐛 확장 환경 샌드박스 침투 문제 수정 [#700](https://github.com/scriptscat/scriptcat/issues/700) [[a1a868d](https://github.com/scriptscat/scriptcat/commit/a1a868dfe3199e666fe2bcb65cfb2ad0ad3d699b)]
- ✏️ backgroud -&gt; background ([#698](https://github.com/scriptscat/scriptcat/issues/698)) [[2594075](https://github.com/scriptscat/scriptcat/commit/2594075c4a50f4c79fa46bcda08d7b0cbcfe723c)] (by @cyfung1031)
- ✏️ CrhomeStorage -&gt; ChromeStorage ([#693](https://github.com/scriptscat/scriptcat/issues/693)) [[64c536d](https://github.com/scriptscat/scriptcat/commit/64c536dbd5fcb4c29eebc1109202bab69aaa3ee2)] (by @cyfung1031)
- 🐛 GM.getTab 및 GM.getTabs 수정 ([#683](https://github.com/scriptscat/scriptcat/issues/683)) [[31de256](https://github.com/scriptscat/scriptcat/commit/31de256f02b5b61e27f0eec9ea673248ba8faa32)] (by @WhiteSevs)
- 🐛 finalUrl에서 누락된 도메인 수정 ([#656](https://github.com/scriptscat/scriptcat/issues/656)) [[545d7c8](https://github.com/scriptscat/scriptcat/commit/545d7c8c0dd69c83bd2f0353518aafe6af81c0f4)] (by @cyfung1031)
- 🐛 이전 브라우저 커널과의 호환성 [#647](https://github.com/scriptscat/scriptcat/issues/647) ([bba12d2](https://github.com/scriptscat/scriptcat/commit/bba12d23f04759cb9b7fdb63f0d95ae515ee94a9))
- 🐛 finalUrl에서 누락된 도메인 수정 ([#656](https://github.com/scriptscat/scriptcat/issues/656)) [[3ed018a](https://github.com/scriptscat/scriptcat/commit/3ed018a7a54803fcf2e1791316e0166ed0b52007)] (by @cyfung1031)
- 💚 react/jsx-no-literals lint 문제 수정 [[017b608](https://github.com/scriptscat/scriptcat/commit/017b60886be601e3e0e1719cf249da32d5686c30)]
- 🐛 이전 브라우저 커널과의 호환성 [#647](https://github.com/scriptscat/scriptcat/issues/647) [[0e2f817](https://github.com/scriptscat/scriptcat/commit/0e2f8173c8b44bd6ad44bdffc73fa302a96a058e)]
- 🐛 window.external 주입 최적화 ([#646](https://github.com/scriptscat/scriptcat/issues/646)) [[0b2668a](https://github.com/scriptscat/scriptcat/commit/0b2668aadcab35a33ff9abc4bd030dffb87ea168)] (by @cyfung1031)
- 🐛 클라우드 스토리지 인증 페이지가 자동으로 닫히지 않는 문제 수정 [[7748088](https://github.com/scriptscat/scriptcat/commit/7748088e63c1fc660b6a6ae5613cf04f9da99b8c)]
- 🐛 작동하지 않는 `@connect` \\* 문제 수정 [#623](https://github.com/scriptscat/scriptcat/issues/623) [[76481c8](https://github.com/scriptscat/scriptcat/commit/76481c845b34414a7f15ed18ec61f7dff7eef091)]
- 🐛 단위 테스트 추가 및 `@exclude` 문제 수정 ([#618](https://github.com/scriptscat/scriptcat/issues/618)) [[0046bb7](https://github.com/scriptscat/scriptcat/commit/0046bb78800a2c46edaac785b8e9592327772a3b)] (by @cyfung1031)
- 🐛 일부 .user.js 링크가 스크립트를 설치할 수 없는 문제 수정 [#599](https://github.com/scriptscat/scriptcat/issues/599) [[ccd2639](https://github.com/scriptscat/scriptcat/commit/ccd2639858f0f3cde28f284376fe8ed998d935ae)]
- 🐛 새 스크립트 생성 실패 수정 [[d42d6e7](https://github.com/scriptscat/scriptcat/commit/d42d6e7d408a84674facf9ab0da6eac0e384502f)]
- 🐛 메타데이터 수정 ([#610](https://github.com/scriptscat/scriptcat/issues/610)) [[4d98cce](https://github.com/scriptscat/scriptcat/commit/4d98cce0ca1281cc58f551ea4e6700e340780d3f)] (by @cyfung1031)
- 🐛 팝업 배지 수정 ([#605](https://github.com/scriptscat/scriptcat/issues/605)) [[eff9230](https://github.com/scriptscat/scriptcat/commit/eff92309de99abb0cf48ef4727afaa113bc2fbb6)] (by @cyfung1031)
- 🐛 ScriptEditor.tsx 수정 ([#603](https://github.com/scriptscat/scriptcat/issues/603)) [[a9aadba](https://github.com/scriptscat/scriptcat/commit/a9aadba372b813c16bdc5f0aeb07c68981f48c63)] (by @cyfung1031)
- 🐛 코드 뷰어 및 편집기 CSS 수정 ([#602](https://github.com/scriptscat/scriptcat/issues/602)) [[2e86785](https://github.com/scriptscat/scriptcat/commit/2e8678513efaccd42c8dc2aa89f8b76679aa8420)] (by @cyfung1031)
- 🐛 getFaviconFromDomain 동시성 문제 수정 ([#597](https://github.com/scriptscat/scriptcat/issues/597)) [[1872fe1](https://github.com/scriptscat/scriptcat/commit/1872fe165ab204b155a56f037c111d2d7776c2b9)] (by @cyfung1031)
- 🐛 여러 창에서 탭 열기 오류 수정 [#586](https://github.com/scriptscat/scriptcat/issues/586) [[54c1da2](https://github.com/scriptscat/scriptcat/commit/54c1da29c2bd8bd8f5ef2d85b7aed8b334de296f)]
- 🐛 openerTabId 호환성 문제 수정 ([#586](https://github.com/scriptscat/scriptcat/issues/586)) [[b861fc8](https://github.com/scriptscat/scriptcat/commit/b861fc8620e53b885cad98db03f1dd10ec9d296c)] (by @cyfung1031)

### 기타

- 📝 README_RU.md 및 CONTRIBUTING_RU.md 작성 ([#678](https://github.com/scriptscat/scriptcat/issues/678)) [[597ab03](https://github.com/scriptscat/scriptcat/commit/597ab0378fe5ced01637cf411326ef7845b8ce2b)] (by @Ioann)
- 👷 호환성 조정(pack.js 호환성) ([#669](https://github.com/scriptscat/scriptcat/issues/669)) [[fec45e6](https://github.com/scriptscat/scriptcat/commit/fec45e6606a609b10b79c58d2fcba02c2ce71e16)] (by @cyfung1031)
- 🌐 베트남어 로케일 개선 및 확장 ([#661](https://github.com/scriptscat/scriptcat/issues/661)) [[6847a59](https://github.com/scriptscat/scriptcat/commit/6847a596c4b06c75e13594ef60e4b9dfa5718cf3)] (by @RenjiYuusei)
- 🌐 번역 수정 ([#635](https://github.com/scriptscat/scriptcat/issues/635)) [[19296de](https://github.com/scriptscat/scriptcat/commit/19296de6a3815e5965eb33401a55da9b2bd22bb4)] (by @cyfung1031)
- 🌐 온보딩 가이드 i18n 문제 수정 [#627](https://github.com/scriptscat/scriptcat/issues/627) [[9683f96](https://github.com/scriptscat/scriptcat/commit/9683f965400ab6a2bac15349aca4335911766eac)]
- 👷 pack.js 코드 최적화 ([#615](https://github.com/scriptscat/scriptcat/issues/615)) [[870dd9b](https://github.com/scriptscat/scriptcat/commit/870dd9bc6b7eff3eceefa915452e773ec0565180)] (by @cyfung1031)
