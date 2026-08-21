---
title: 베타 변경 내역
---

import GithubStar from '@site/src/components/GithubStar';

<GithubStar variant="bar" scene="changelog" />

ScriptCat의 버전 릴리스는 안정 버전과 사전 릴리스(프리릴리스)의 두 가지 주요 분기로 나뉩니다. 안정 버전 변경 내역은 [변경 내역](./index.md)을 참조하세요.

사전 릴리스는 공식 안정 버전보다 먼저 출시됩니다. 일반적으로 새 기능을 테스트하는 데 사용됩니다. 사전 릴리스 버전 번호에는 사전 릴리스 식별자가 포함됩니다. 예:
`1.0.0-beta.1`.

사전 릴리스 버전은 [Release](https://github.com/scriptscat/scriptcat/releases) 페이지 또는 아래 확장 스토어 페이지에서 얻을 수 있습니다:

- [Chrome](https://chromewebstore.google.com/detail/%E8%84%9A%E6%9C%AC%E7%8C%AB-beta/jaehimmlecjmebpekkipmpmbpfhdacom?authuser=0&hl=zh-CN)
- [Edge](https://microsoftedge.microsoft.com/addons/detail/%E8%84%9A%E6%9C%AC%E7%8C%AB-beta/nimmbghgpcjmeniofmpdfkofcedcjpfi)
- [Firefox](https://addons.mozilla.org/zh-CN/firefox/addon/scriptcat-pre/)

또한 사전 릴리스 외에도 ScriptCat은 각 코드 커밋이 main 브랜치에 병합된 후 [Github Action](https://github.com/scriptscat/scriptcat/actions/workflows/build.yaml)에서 확장 프로그램을 빌드합니다. 최신 기능이나 수정 사항을 사용해 보고 싶다면 [Github Action](https://github.com/scriptscat/scriptcat/actions/workflows/build.yaml) 페이지에서 다운로드할 수 있습니다.

<a name="1.5.0-beta.1"></a>

## 1.5.0-beta.1 (2026-08-06)

이 사전 릴리스는 **외부 접근(MCP 브리지)** 및 **스크립트 휴지통**의 두 가지 주요 기능을 강조하며, Firefox MV3를 공식 지원하고 한국어, 터키어, 브라질 포르투갈어를 추가하며 여러 GM API, 클라우드 동기화 및 편집기 문제를 수정합니다.

### 🚀 주요 신규 기능

- 💥 새로운 "외부 접근(MCP 브리지)": 로컬 `sctl` 데몬이 CLI 및 MCP 클라이언트 접근을 통합합니다. 모든 스크립트 읽기/쓰기는 계층화된 권한 부여와 거부 / 허용 / 이 세션 허용의 세 가지 수준이 있는 인간 확인 페이지로 게이트되며 모든 작업이 감사됩니다 ([#1573](https://github.com/scriptscat/scriptcat/pull/1573)) (by @cyfung1031)
- 💥 스크립트 휴지통: 삭제된 스크립트는 먼저 휴지통으로 이동하며 원본 데이터와 권한을 보존하는 복원, 영구 삭제, 만료 기반 자동 정리를 지원합니다. 보관 기간은 구성 가능합니다(기본 30일 또는 무기한) ([#1585](https://github.com/scriptscat/scriptcat/pull/1585)) (by @CodFrm)
- 💥 Firefox MV3 공식 지원 및 샌드박스/오프스크린 통신 개선 ([#1561](https://github.com/scriptscat/scriptcat/pull/1561)) (by @cyfung1031)
- ✨ 팝업에 빠른 사이트 범위 작업 추가 ([#1646](https://github.com/scriptscat/scriptcat/pull/1646)) (by @CodFrm)
- ✨ 팝업 스크립트 목록 확장 수는 이제 메뉴 확장 수와 별도로 구성 가능 ([#1645](https://github.com/scriptscat/scriptcat/pull/1645)) (by @CodFrm)
- ✨ 아이콘 서비스에 파비콘 가져오기를 완전히 끄는 "비활성화" 단계 추가 ([#1637](https://github.com/scriptscat/scriptcat/pull/1637)) (by @CodFrm)
- ✨ 정의되지 않은 메타데이터 태그는 이제 편집기에서 경고를 표시 ([#1608](https://github.com/scriptscat/scriptcat/pull/1608)) (by @cyfung1031)
- ✨ 백업/복원/가져오기 완전성: ScriptCat/Tampermonkey/Violentmonkey 사용자 지정 구성 + 설정 백업 + 리소스 복구 ([#1554](https://github.com/scriptscat/scriptcat/pull/1554)) (by @CodFrm)

### ♻️ 리팩터링 및 호환성

- ♻️ 클라이언트를 공식 MCP SDK로 리팩터링 ([#1643](https://github.com/scriptscat/scriptcat/pull/1643)) (by @CodFrm)

### 🐛 버그 수정

- 🐛 GM_xmlhttpRequest 사용자 지정 쿠키가 같은 이름의 쿠키를 덮어쓰지 않고 추가되던 문제 수정 ([#1604](https://github.com/scriptscat/scriptcat/pull/1604)) (by @cyfung1031)
- 🐛 스크립트 동기화 상태 일관성 및 공급자 안전 충돌 처리 수정 ([#1504](https://github.com/scriptscat/scriptcat/pull/1504)) (by @cyfung1031)
- 🐛 예약 로그 정리가 더 이상 작동하지 않는 문제 수정 ([#1599](https://github.com/scriptscat/scriptcat/pull/1599)) (by @CodFrm)
- 🐛 스크립트 설정에서 컨텍스트 메뉴 실행 타이밍 누락 문제 수정 ([#1652](https://github.com/scriptscat/scriptcat/pull/1652)) (by @CodFrm)
- 🐛 설치 페이지의 뒤로 가기/탭 닫기 로직 수정 ([#1594](https://github.com/scriptscat/scriptcat/pull/1594)) (by @cyfung1031)
- 🐛 저장된 스크립트 이름 변경 후 브라우저 탭 제목이 업데이트되지 않는 문제 수정 ([#1607](https://github.com/scriptscat/scriptcat/pull/1607)) (by @cyfung1031)
- 🐛 window.focus 포커스 동작 수정 및 windowId 검증 강화 ([#1577](https://github.com/scriptscat/scriptcat/pull/1577)) (by @cyfung1031)
- 🐛 편집기의 활성 탭 닫기 버튼이 숨겨지는 문제 수정 [#1556](https://github.com/scriptscat/scriptcat/issues/1556) (by @CodFrm)
- 🐛 저장되지 않은 편집기 콘텐츠의 탐색 가드 수정 ([#1656](https://github.com/scriptscat/scriptcat/pull/1656)) (by @CodFrm)
- 🐛 휴지통의 같은 이름 스크립트 저장 확인 문구 수정 ([#1622](https://github.com/scriptscat/scriptcat/pull/1622)) (by @CodFrm)
- 🐛 selfMetadata가 빈 재정의를 지원: match/exclude/tag/run-at "삭제 후 부활" 수정 ([#1579](https://github.com/scriptscat/scriptcat/pull/1579)) (by @CodFrm)

### 🎨 UI 개선

- 💄 Android UI 적응 수정: 동적 뷰포트 높이 + 좁은 화면 테이블/설정 행/로그 통계 바 재배치 ([#1636](https://github.com/scriptscat/scriptcat/pull/1636)) (by @RenjiYuusei)
- 💄 팝업에 컴팩트 레이아웃 옵션 추가 ([#1551](https://github.com/scriptscat/scriptcat/pull/1551)) (by @cyfung1031)

### 🌐 국제화

- 🌐 한국어(ko-KR) 번역 추가 ([#1568](https://github.com/scriptscat/scriptcat/pull/1568)) (by @moduvoice)
- 🌐 터키어(tr-TR) 번역 추가 ([#1557](https://github.com/scriptscat/scriptcat/pull/1557)) (by @azizaktas)
- 🌐 브라질 포르투갈어(pt-BR) 번역 추가 ([#1587](https://github.com/scriptscat/scriptcat/pull/1587)) (by @Lucas559-noob)
- 🌐 pt-BR / tr-TR용 chrome.i18n messages.json 및 Monaco 편집기 언어 채우기 ([#1605](https://github.com/scriptscat/scriptcat/pull/1605)) (by @CodFrm)

### 기타

- ⬆️ 종속성 업그레이드(TypeScript 6.0 포함) 및 pnpm audit 경고 수정 ([#1576](https://github.com/scriptscat/scriptcat/pull/1576), [#1567](https://github.com/scriptscat/scriptcat/pull/1567)) (by @cyfung1031)
- 스크립트 동기화 설정이 이제 즉시 저장됩니다 ([#1615](https://github.com/scriptscat/scriptcat/pull/1615)) (by @CodFrm)
- 📝 "사용자 스크립트" 검색 가능성을 높이기 위해 스토어 설명 및 README 태그라인 개선 ([#1553](https://github.com/scriptscat/scriptcat/pull/1553)) (by @CodFrm)

<a name="1.5.0-beta"></a>

## 1.5.0-beta (2026-07-08)

이 사전 릴리스는 더 깔끔하고 일관된 인터페이스와 더 부드러운 전반적인 경험을 제공하는 **완전히 새로운 UI**와 모바일 사용자도 훌륭한 경험을 할 수 있도록 모바일 전용 디자인 최적화를 제공합니다. 또한 편집기에 새 스크립트 유형 선택, 로컬 백업용 수동 다운로드 링크 등을 추가하고 예약 작업의 잘못된 시간대 및 기본 GM_download 교차 출처 문제를 수정합니다. 새 UI/UX에 대한 제안이 있으면 [GitHub](https://github.com/scriptscat/scriptcat/discussions)에서 토론에 참여하세요.

### 🎨 UI 개선

- ♻️ 완전히 새로운 UI: 전체 인터페이스 재작성, 데스크톱과 모바일 모두에서 더 나은 경험을 위한 모바일 적응 개선 ([#1514](https://github.com/scriptscat/scriptcat/pull/1514)) (by @CodFrm)

### 🚀 주요 신규 기능

- ✨ 편집기 탭 바의 "＋"가 이제 새 스크립트 유형 선택을 지원 ([#1544](https://github.com/scriptscat/scriptcat/pull/1544)) (by @cyfung1031)
- ✨ 로컬 백업용 수동 다운로드 링크 추가 ([#1543](https://github.com/scriptscat/scriptcat/pull/1543)) (by @cyfung1031)
- ✨ Chromium 148+에서 확장 메시징을 위한 structured_clone 직렬화 활성화 ([#1534](https://github.com/scriptscat/scriptcat/pull/1534)) (by @cyfung1031)
- ✨ 사전 릴리스(beta) 버전은 이제 업데이트 후 변경 내역 페이지를 자동으로 엽니다 (by @CodFrm)

### 🧩 GM API 변경

- 🐛 GM_xmlhttpRequest처럼 기본 GM_download가 @connect를 따르도록 수정 ([#1506](https://github.com/scriptscat/scriptcat/pull/1506)) (by @DudeAint)

### ⚡️ 성능 개선

- ⚡️ 스크립트 로딩 캐시 최적화 및 남은 Popup 메뉴 항목 수정 ([#1511](https://github.com/scriptscat/scriptcat/pull/1511)) (by @cyfung1031)

### 🧑💻 편집기

- ♻️ `eslint-plugin-userscripts` 규칙 조정 ([#1510](https://github.com/scriptscat/scriptcat/pull/1510)) (by @cyfung1031)

### 🐛 버그 수정

- 🐛 cron이 잘못된 시간대를 자동 감지하여 발생하는 예약 작업 오류 방지 ([#1531](https://github.com/scriptscat/scriptcat/pull/1531)) (by @cyfung1031)
- 🐛 crontab 예제에서 사용할 수 없는 데모 API 수정 ([#1542](https://github.com/scriptscat/scriptcat/pull/1542)) (by @cyfung1031)

### 🌐 현지화

- 🌐 터키어 추가 (by @azizaktas)

<a name="1.4.0-beta.4"></a>

## 1.4.0-beta.4 (2026-06-13)

이 릴리스는 Edge Android 모바일 팝업 레이아웃, 초기 로드 중 흰색 배경 플래시, 사이트 접근 권한이 없을 때 발생하는 교차 출처 요청 실패를 수정하고 신뢰할 수 없는 YAML 사용자 구성 키를 통해 트리거되는 프로토타입 오염 취약점을 패치하며 스크립트 리소스 업데이트 및 ZIP 처리를 리팩터링(jszip을 JSZipp으로 대체)하고 Firefox MV3 호환성과 현지화를 계속 개선합니다.

### 🧑💻 편집기

- ✨ Monaco 빠른 수정 및 userscript 메타데이터 힌트 개선 ([#1461](https://github.com/scriptscat/scriptcat/pull/1461)) (by @cyfung1031)
- 🐛 편집기 CSS 레이아웃 문제 수정 ([#1460](https://github.com/scriptscat/scriptcat/pull/1460)) (by @cyfung1031)

### 🐛 버그 수정

- 🐛 Edge Android 모바일 팝업 레이아웃 수정 ([#686](https://github.com/scriptscat/scriptcat/issues/686)) ([#1507](https://github.com/scriptscat/scriptcat/pull/1507)) (by @CodFrm)
- 🐛 초기 로드 중 흰색 배경 플래시 수정 ([#1497](https://github.com/scriptscat/scriptcat/issues/1497)) ([#1498](https://github.com/scriptscat/scriptcat/pull/1498)) (by @cyfung1031)
- 🐛 사이트 접근 권한이 없을 때 교차 출처 요청 실패 수정 ([#1477](https://github.com/scriptscat/scriptcat/pull/1477)) (by @cyfung1031)
- 🐛 메시지 연결(GM API / port)이 제대로 정리되지 않는 문제 수정 ([#1474](https://github.com/scriptscat/scriptcat/pull/1474)) (by @cyfung1031)
- 🐛 검색이 없을 때 @match 템플릿 불일치 수정 ([#1466](https://github.com/scriptscat/scriptcat/pull/1466)) (by @cyfung1031)
- 🐛 Tampermonkey 반샌드박스에서 조상 클래스 상속을 수정하기 위해 `protoBaseDescs` 추가 ([#1463](https://github.com/scriptscat/scriptcat/pull/1463)) (by @cyfung1031)

### 🔒 보안 개선

- 🔒 신뢰할 수 없는 YAML 사용자 구성 키를 통한 프로토타입 오염 수정 ([#1494](https://github.com/scriptscat/scriptcat/pull/1494)) (by @qdzsh)

### ♻️ 리팩터링 및 호환성

- ♻️ 스크립트 리소스 업데이트(updateResource) 및 동시성 제어 리팩터링, 리소스 캐시 호환성 복원 ([#1193](https://github.com/scriptscat/scriptcat/pull/1193)) (by @cyfung1031)
- ♻️ ZIP 처리(백업 가져오기/내보내기)를 위해 jszip을 JSZipp으로 대체하고 사용하지 않는 jszip 종속성 제거 ([#1479](https://github.com/scriptscat/scriptcat/pull/1479)) (by @cyfung1031)
- ♻️ Firefox MV3 호환성 개선 ([#1457](https://github.com/scriptscat/scriptcat/pull/1457), [#1480](https://github.com/scriptscat/scriptcat/pull/1480)) (by @cyfung1031)

### 🌐 현지화

- 🌐 다국어 용어 번역 수정(특히 중국어 번체 개선) 및 번역 용어 지침 추가 ([#1468](https://github.com/scriptscat/scriptcat/pull/1468)) (by @cyfung1031)

<a name="1.4.0-beta.3"></a>

## 1.4.0-beta.3 (2026-05-19)

beta.2에서 설정된 방향을 이어가며 이 릴리스는 클라우드 동기화 안정성(OneDrive/Google Drive/WebDAV 오류 처리 및 업로드 흐름)을 더욱 강화하고 여러 ScriptEditor 및 GM xhr 예외 처리 문제를 수정하며 Ctrl+Shift+F 서식 지정과 `@run-at context-menu`의 복귀를 추가합니다.

### 🚀 주요 신규 기능

- ✨ 편집기: 코드 서식 지정을 위한 Ctrl+Shift+F ([#1415](https://github.com/scriptscat/scriptcat/pull/1415)) (by @cyfung1031)
- ✨ `@run-at context-menu` 지원 복귀 ([#1442](https://github.com/scriptscat/scriptcat/pull/1442)) (by @cyfung1031)

### ⚡️ 성능 개선

- ⚡️ pushValue 처리 최적화 ([#1403](https://github.com/scriptscat/scriptcat/pull/1403)) (by @cyfung1031)

### 🐛 버그 수정

- 🐛 클라우드 동기화 수정: OneDrive 0바이트 업로드, Google Drive/OneDrive 오류 정규화, S3 사용자 지정 메타데이터 modifiedDate ([#1405](https://github.com/scriptscat/scriptcat/pull/1405)) ([#1406](https://github.com/scriptscat/scriptcat/pull/1406)) ([#1408](https://github.com/scriptscat/scriptcat/pull/1408)) (by @cyfung1031)
- 🐛 WebDAV 확인: 쓰기 프로브 제거 — 쓰기 불가능한 루트를 가진 Jianguoyun 같은 서비스가 더 이상 확인에 실패하지 않음 ([#1445](https://github.com/scriptscat/scriptcat/pull/1445)) (by @CodFrm)
- 🐛 `GM_xmlhttpRequest` msgConn에 대한 null 처리 누락 수정 ([#1433](https://github.com/scriptscat/scriptcat/pull/1433)) (by @cyfung1031)
- 🐛 GM xhr이 비정상 onloadend를 잘못 처리하는 문제 수정 ([#1412](https://github.com/scriptscat/scriptcat/pull/1412)) (by @cyfung1031)
- 🐛 ScriptEditor 목록 동적 업데이트 및 표시 문제 수정 ([#1414](https://github.com/scriptscat/scriptcat/pull/1414)) (by @cyfung1031)
- 🐛 ScriptEditor 도구 모음에서 편집 관련 작업과의 상호 작용 문제 수정 ([#1417](https://github.com/scriptscat/scriptcat/pull/1417)) (by @cyfung1031)
- 🐛 `chrome.downloads.download` 코드 및 Mock 수정 ([#1410](https://github.com/scriptscat/scriptcat/pull/1410)) (by @cyfung1031)
- 🐛 src/pages/install/App.tsx의 closeWindow 수정 ([#1435](https://github.com/scriptscat/scriptcat/pull/1435)) (by @cyfung1031)
- 🐛 내부 스크롤이 브라우저 스와이프 탐색을 트리거하지 않도록 루트 레이아웃에 휠 이벤트 경계 추가 ([#1431](https://github.com/scriptscat/scriptcat/pull/1431)) (by @cyfung1031)
- 🐛 동시 초기 인증 요청 중복 제거 ([#1437](https://github.com/scriptscat/scriptcat/pull/1437)) (by @cyfung1031)
- 🐛 encoding.ts 리팩터링으로 감지 통합 및 개선 ([#1426](https://github.com/scriptscat/scriptcat/pull/1426)) (by @cyfung1031)
- 🐛 메뉴가 보이도록 Tooltip 추가 ([#1429](https://github.com/scriptscat/scriptcat/pull/1429)) (by @cyfung1031)
- 🐛 overscroll-behavior 수정 ([#1413](https://github.com/scriptscat/scriptcat/pull/1413)) (by @cyfung1031)
- 🐛 업데이트를 지원하지 않는 스크립트에 업데이트 버튼 표시 중지 ([#1418](https://github.com/scriptscat/scriptcat/pull/1418)) (by @cyfung1031)
- 🐛 누락된 i18n 키 참조 수정 ([#1422](https://github.com/scriptscat/scriptcat/pull/1422)) (by @cyfung1031)
- 🐛 샌드박스 createContext에 `frames` 추가, [#1427](https://github.com/scriptscat/scriptcat/issues/1427) 수정 ([#1428](https://github.com/scriptscat/scriptcat/pull/1428)) (by @cyfung1031)
- 🐛 isContextMenu 필드 누락으로 인한 SkillScript 컴파일 오류 수정 (5fdc8e39) (by @CodFrm)

### ♻️ 리팩터링 및 호환성

- ♻️ 설치 리소스를 `chrome.storage.local` tempStorage로 이동; 코드 부분은 `OPFS/temp_install_codes`에 위치 ([#1318](https://github.com/scriptscat/scriptcat/pull/1318)) (by @cyfung1031)
- ♻️ 경로 결합 로직으로 생성된 이중 슬래시 수정 ([#1432](https://github.com/scriptscat/scriptcat/pull/1432)) (by @tomaioo)

### 🌐 국제화

- 🌐 다른 언어에 대한 동반 수정과 함께 일본어 UI 번역 개선 ([#1419](https://github.com/scriptscat/scriptcat/pull/1419)) ([#1421](https://github.com/scriptscat/scriptcat/pull/1421)) (by @GoodLight999, @cyfung1031)

<a name="1.4.0-beta.2"></a>

## 1.4.0-beta.2 (2026-05-06)

이 업데이트는 **포괄적인 클라우드 저장소 동기화 안정성 강화**(Dropbox/WebDAV/Google Drive/OneDrive 백엔드의 인증, 경로 처리 및 재시도 수정), **Agent 도구 호출 안정성 개선**, 그리고 장기 실행 메모리 누수를 포함한 많은 UI 및 스크립트 런타임 버그 수정에 중점을 둡니다.

### ⚡️ 성능 개선

- ⚡️ 전역 DNR 규칙에 대한 Baidu 파일 시스템 종속성 제거; 대신 요청별로 쿠키 비활성화 ([#1377](https://github.com/scriptscat/scriptcat/pull/1377)) (by @cyfung1031)
- ⚡️ 스크립트 가져오기를 위한 다중 플랫폼 검색 엔진 선택 최적화 ([#1379](https://github.com/scriptscat/scriptcat/pull/1379)) (by @cyfung1031)
- ⚡️ 설치 페이지 loadingStatus에 모노스페이스 사용하여 떨림 방지 ([#1381](https://github.com/scriptscat/scriptcat/pull/1381)) (by @cyfung1031)
- ⚡️ Agent 프롬프트 안정성 강화 — 결과 검증, 예산 의미론, 안전 경계 ([#1354](https://github.com/scriptscat/scriptcat/pull/1354)) (by @cyfung1031)

### 🐛 버그 수정

- 🚑 ScriptCat이 장기간 실행될 때 발생할 수 있는 메모리 누수 수정 ([#1401](https://github.com/scriptscat/scriptcat/pull/1401)) (by @cyfung1031)
- 🐛 백엔드 전반의 클라우드 동기화 안정성 강화(Dropbox/WebDAV/Google Drive/OneDrive 인증, 경로 처리, 재시도 로직) ([#1374](https://github.com/scriptscat/scriptcat/pull/1374)) ([#1375](https://github.com/scriptscat/scriptcat/pull/1375)) ([#1376](https://github.com/scriptscat/scriptcat/pull/1376)) ([#1390](https://github.com/scriptscat/scriptcat/pull/1390)) ([#1391](https://github.com/scriptscat/scriptcat/pull/1391)) ([#1392](https://github.com/scriptscat/scriptcat/pull/1392)) ([#1393](https://github.com/scriptscat/scriptcat/pull/1393)) ([#1394](https://github.com/scriptscat/scriptcat/pull/1394)) ([#1395](https://github.com/scriptscat/scriptcat/pull/1395)) (by @cyfung1031)
- 🐛 extensionEnv에 isIncognito(early-start & bgScript), userAgent 및 bgScript용 run-in을 올바르게 채움 ([#1368](https://github.com/scriptscat/scriptcat/pull/1368)) (by @cyfung1031)
- 🐛 온보딩 가이드 버튼이 잘리는 문제 수정 [#1396](https://github.com/scriptscat/scriptcat/issues/1396) ([#1398](https://github.com/scriptscat/scriptcat/pull/1398)) (by @cyfung1031)
- 🐛 스크립트 관리 페이지에서 툴팁 가림 문제 수정 [#1386](https://github.com/scriptscat/scriptcat/issues/1386) ([#1387](https://github.com/scriptscat/scriptcat/pull/1387)) (by @Xdy1579883916)
- 🐛 카드 모드에서 Sidebar가 레이아웃 크기 문제를 일으키는 문제 수정 [#1179](https://github.com/scriptscat/scriptcat/issues/1179) ([#1373](https://github.com/scriptscat/scriptcat/pull/1373)) (by @cyfung1031)
- 🐛 로컬 파일 끌어서 놓기 설치의 잘못된 출처 수정 ([#1371](https://github.com/scriptscat/scriptcat/pull/1371)) (by @cyfung1031)
- 🐛 언어 전환 메시징 수정 ([#1380](https://github.com/scriptscat/scriptcat/pull/1380)) (by @cyfung1031)
- 🐛 로그 표시 UI 개선 ([#1372](https://github.com/scriptscat/scriptcat/pull/1372)) (by @cyfung1031)
- 🐛 동시 xhr로 인한 세션 규칙 수 문제 해결 ([#1353](https://github.com/scriptscat/scriptcat/pull/1353)) (by @cyfung1031)
- 🐛 UserConfigPanel CSS 수정 ([#1361](https://github.com/scriptscat/scriptcat/pull/1361)) (by @cyfung1031)
- 🐛 create_context에서 빈 객체에 Object.create(null) 사용 ([#1397](https://github.com/scriptscat/scriptcat/pull/1397)) (by @cyfung1031)
- 🐛 Agent 스트리밍 tool_call 인수 연결 오류 및 병렬 tool-call 간섭 수정 ([#1355](https://github.com/scriptscat/scriptcat/pull/1355)) (by @cyfung1031)
- 🐛 추론 모델과의 Agent 호환성 수정 ([#1357](https://github.com/scriptscat/scriptcat/pull/1357)) (by @cyfung1031)
- 🐛 Agent web_fetch/web_search 계약 불일치 수정 (7bbd6d18) (by @CodFrm)
- 🐛 Agent Skill 스크립트 런타임에 누락된 확장 환경 수정 (e143c4a7) (by @CodFrm)

### 🔒 보안 개선

- 🔒 모든 npm 취약점 수정 ([#1350](https://github.com/scriptscat/scriptcat/pull/1350)) ([#1364](https://github.com/scriptscat/scriptcat/pull/1364)) ([#1365](https://github.com/scriptscat/scriptcat/pull/1365)) (by @cyfung1031)

### 기타

- 🔥 Crowdin 및 ach-UG 의사 로케일 콘텐츠 제거 ([#1385](https://github.com/scriptscat/scriptcat/pull/1385)) (by @CodFrm)

<a name="1.4.0-beta.1"></a>

## 1.4.0-beta.1 (2026-04-07)

이 릴리스의 하이라이트는 **ScriptCat AI Agent** — 대화형 상호 작용을 통해 userscript 생태계의 도구를 호출할 수 있는 내장 AI 기반 에이전트 시스템입니다. 이 업데이트는 또한 `@unwrap` 태그 지원, `window.onurlchange` 이벤트, 편집기 메뉴 개선 및 많은 버그 수정을 추가합니다.

### 🚀 주요 신규 기능

- 💥 ScriptCat AI Agent — 대화형 상호 작용, 도구 호출, Skill 시스템, MCP 프로토콜 지원 등을 갖춘 AI 기반 지능형 에이전트 시스템 ([#1324](https://github.com/scriptscat/scriptcat/pull/1324)) (by @CodFrm)
- ✨ `@unwrap` 메타데이터 태그 지원 ([#1213](https://github.com/scriptscat/scriptcat/pull/1213)) (by @cyfung1031)
- ✨ Navigation API를 사용하여 TM의 `window.onurlchange` 구현 ([#1315](https://github.com/scriptscat/scriptcat/pull/1315)) (by @cyfung1031)

### 🧑💻 편집기

- ✨ 편집기 메뉴 추가(찾기, 바꾸기, 실행 취소 등) ([#1303](https://github.com/scriptscat/scriptcat/pull/1303)) (by @CodFrm)
- 🐛 Ctrl-F / Ctrl-H 단축키 수정 ([#1312](https://github.com/scriptscat/scriptcat/pull/1312)) (by @cyfung1031)
- 🐛 ESLint 자동 수정이 작동하지 않는 문제 수정 [#1079](https://github.com/scriptscat/scriptcat/issues/1079) ([#1184](https://github.com/scriptscat/scriptcat/pull/1184)) (by @cyfung1031)
- 🐛 서식 오류를 올바르게 표시 ([#1310](https://github.com/scriptscat/scriptcat/pull/1310)) (by @cyfung1031)
- 🐛 코드 편집기 툴팁 문제 수정 ([#1301](https://github.com/scriptscat/scriptcat/pull/1301)) (by @cyfung1031)

### ✨ 기능 개선

- ✨ 스크립트 검색을 위한 다중 플랫폼 검색 엔진 선택 지원 ([#1295](https://github.com/scriptscat/scriptcat/pull/1295)) (by @CodFrm)
- ✨ 더 많은 아이콘 서비스 공급자 추가 ([#1333](https://github.com/scriptscat/scriptcat/pull/1333)) (by @cyfung1031)
- ✨ 스크립트 목록 마지막 업데이트 열에 업데이트 확인 아이콘 추가 ([#1304](https://github.com/scriptscat/scriptcat/pull/1304)) (by @CodFrm)
- ✨ 편집 충돌 및 스크립트 이름 충돌 처리 개선 ([#1223](https://github.com/scriptscat/scriptcat/pull/1223)) (by @cyfung1031)

### 🐛 버그 수정

- 🐛 cron 표현식 오류로 전체 페이지가 중단되는 문제 수정 ([#1327](https://github.com/scriptscat/scriptcat/pull/1327)) (by @cyfung1031)
- 🐛 스크립트 설치 시 Error 406이 발생하는 문제 수정 ([#1306](https://github.com/scriptscat/scriptcat/pull/1306)) (by @cyfung1031)
- 🐛 WebDAV 쿠키 인증 충돌 및 authType 지원 수정 ([#1308](https://github.com/scriptscat/scriptcat/pull/1308)) (by @CodFrm)
- 🐛 기기 간 동기화를 피하기 위해 기기별 설정에 chrome.storage.local 사용 ([#1309](https://github.com/scriptscat/scriptcat/pull/1309)) (by @CodFrm)
- 🐛 구독 스크립트 자동 업데이트 및 connect 권한 로직 수정 ([#1201](https://github.com/scriptscat/scriptcat/pull/1201)) (by @cyfung1031)
- 🐛 하나의 스크립트가 시간 초과되면 일괄 스크립트 업데이트 확인이 완전히 실패하는 문제 수정 ([#1265](https://github.com/scriptscat/scriptcat/pull/1265)) (by @cyfung1031)
- 🐛 로거 페이지 쿼리 버튼이 시간을 새로 고치지 않는 문제 수정 ([#1294](https://github.com/scriptscat/scriptcat/pull/1294)) (by @CodFrm)
- 🐛 로거 페이지 날짜 선택기 팝업이 잘리는 문제 수정 ([#1292](https://github.com/scriptscat/scriptcat/pull/1292)) (by @cyfung1031)
- 🐛 클라우드 드라이브가 바인딩되지 않았을 때 바인딩 해제 버튼이 표시되는 문제 수정 ([#1291](https://github.com/scriptscat/scriptcat/pull/1291)) (by @CodFrm)
- 🐛 ScriptEditor 스크립트 목록 라이트 테마 표시 문제 수정 ([#1288](https://github.com/scriptscat/scriptcat/pull/1288)) (by @CodFrm)
- 🐛 팝업이 가려지는 문제 수정 ([#1290](https://github.com/scriptscat/scriptcat/pull/1290)) (by @cyfung1031)

## 1.4.0-beta (2026-03-13)

### 🐛 버그 수정

- 🚑 다른 확장 프로그램이 chrome.runtime을 주입하여 발생하는 환경 감지 오류 수정 [#1280](https://github.com/scriptscat/scriptcat/issues/1280) ([#1281](https://github.com/scriptscat/scriptcat/pull/1281)) (by @CodFrm)
- 🐛 ScriptEditor 문제 수정 및 최적화 ([#1258](https://github.com/scriptscat/scriptcat/pull/1258)) (by @cyfung1031)
- 🐛 시크릿 창 권한 확인 충돌로 인한 반복 재시작 수정 (6c308f60) (by @CodFrm)
- 🐛 확인 페이지 문제 수정 ([#1275](https://github.com/scriptscat/scriptcat/pull/1275)) (by @cyfung1031)
- 🐛 include *?* 표현식 처리 문제 수정 [#1271](https://github.com/scriptscat/scriptcat/issues/1271) ([#1272](https://github.com/scriptscat/scriptcat/pull/1272)) (by @CodFrm)
- 🐛 스크립트 설정 - 권한 관리 컨트롤이 작동하지 않는 문제 수정 ([#1267](https://github.com/scriptscat/scriptcat/pull/1267)) (by @CodFrm)

### 🔒 보안 개선

- 🔒 공지 알림 HTML 콘텐츠를 살균하기 위해 DOMPurify 사용 ([#1274](https://github.com/scriptscat/scriptcat/pull/1274)) (by @CodFrm)

### 기타

- ✅ Playwright E2E 테스트 및 GM API 기능 테스트 추가 ([#1283](https://github.com/scriptscat/scriptcat/pull/1283)) (by @CodFrm)
- 📄 docs: Chrome Web Store URL을 새 도메인으로 업데이트 ([#1279](https://github.com/scriptscat/scriptcat/pull/1279)) (by @theluckystrike)

## 1.3.0-beta.4 (2026-02-19)

### 추가됨

- ✨ Amazon S3 저장소 추가 [#1146](https://github.com/scriptscat/scriptcat/issues/1146) ([#1189](https://github.com/scriptscat/scriptcat/pull/1189)) (by @CodFrm)
- ✨ 숨겨진 편집기 사이드바 위치 조정 [#1185](https://github.com/scriptscat/scriptcat/issues/1185) ([#1254](https://github.com/scriptscat/scriptcat/pull/1254)) (by @CodFrm)
- ✨ 값이 없거나 빈 `@version` 허용 ([#1216](https://github.com/scriptscat/scriptcat/pull/1216)) (by @cyfung1031)

### 수정됨

- 🐛 변경 내역 알림이 페이지를 여는 문제 수정 ([#1266](https://github.com/scriptscat/scriptcat/pull/1266)) (by @CodFrm)
- 🐛 unregister가 올바르게 실행되지 않는 문제 수정 ([#1231](https://github.com/scriptscat/scriptcat/pull/1231)) (by @cyfung1031)
- 🐛 GM_addElement 문제 수정, 작업을 콘텐츠 환경으로 이동 ([#1233](https://github.com/scriptscat/scriptcat/pull/1233)) (by @cyfung1031)
- 🐛 DraggableEntry 리팩터링, 카드 높이 정렬 수정 ([#1245](https://github.com/scriptscat/scriptcat/pull/1245)) (by @cyfung1031)
- 🐛 팝업 콘텐츠가 화면 스크롤을 따라가는 문제 수정 ([#1263](https://github.com/scriptscat/scriptcat/pull/1263)) (by @cyfung1031) ([#1259](https://github.com/scriptscat/scriptcat/pull/1259)) (by @cyfung1031)
- 🐛 메모리 누수 및 객체 속성 노출 수정, TTP XML 구문 분석이 null로 대체됨 ([#1242](https://github.com/scriptscat/scriptcat/pull/1242)) (by @cyfung1031) ([#1260](https://github.com/scriptscat/scriptcat/pull/1260)) (by @cyfung1031)
- 🐛 `GM_download`에 `conflictAction` 매개변수 추가 ([#1250](https://github.com/scriptscat/scriptcat/pull/1250)) (by @cyfung1031)
- 🐛 설치 링크 구문 분석 실패 수정 [#1235](https://github.com/scriptscat/scriptcat/issues/1235) ([#1238](https://github.com/scriptscat/scriptcat/pull/1238)) (by @cyfung1031)
- 🐛 드래그 구성 요소로 인한 focusin/focusout 지연 수정 [#1224](https://github.com/scriptscat/scriptcat/issues/1224) ([#1243](https://github.com/scriptscat/scriptcat/pull/1243)) (by @CodFrm)
- 🐛 installScript에서 subscribeUrl 출처 관련 부분 수정 ([#1218](https://github.com/scriptscat/scriptcat/pull/1218)) (by @cyfung1031)
- 🐛 ScriptCard 애니메이션 문제 수정 ([#1234](https://github.com/scriptscat/scriptcat/pull/1234)) (by @cyfung1031)
- 🐛 hide_sidebar를 show_main_sidebar & hide_main_sidebar로 수정 ([#1225](https://github.com/scriptscat/scriptcat/pull/1225)) (by @cyfung1031)
- 🐛 외부 확장 API가 작동하지 않는 문제 수정 ([#1217](https://github.com/scriptscat/scriptcat/pull/1217)) (by @cyfung1031)
- 🐛 다운로드 파일 이름이 폴더를 지원하지 않는 문제 수정 ([#1203](https://github.com/scriptscat/scriptcat/pull/1203)) (by @cyfung1031)

<a name="1.3.0-beta.3"></a>

## 1.3.0-beta.3 (2026-02-07)

### 추가됨

- ✨ Cron 관련 수정: 버그 수정, i18n, once 표현식 개선, cron 라이브러리 업그레이드 ([#1126](https://github.com/scriptscat/scriptcat/issues/1126)) (by @cyfung1031)

### 변경됨

- ♻️ 통신 메커니즘 리팩터링: storage.local 브로드캐스트 + Firefox MV3 스크립팅 호환 + 추적 불가능한 동적 동기화 MessageFlag 채택 ([#1067](https://github.com/scriptscat/scriptcat/issues/1067)) (by @cyfung1031)
- ⚡️ 텍스트 디코딩 강화 ([#1166](https://github.com/scriptscat/scriptcat/issues/1166)) (by @cyfung1031)
- 🎨 코드 조정(사소함) - `isContent` 변수 위치 ([#1171](https://github.com/scriptscat/scriptcat/issues/1171)) (by @cyfung1031)
- 🎨 코드 조정 - Value 관련 클래스 및 변수 이름 ([#1175](https://github.com/scriptscat/scriptcat/issues/1175)) (by @cyfung1031)
- 🎨 코드 조정(사소함) - ScriptClient ([#1172](https://github.com/scriptscat/scriptcat/issues/1172)) (by @cyfung1031)
- 🎨 (TypeScript) 사용자 지정 클래스 이름 수정: File -> FileInfo ([#1174](https://github.com/scriptscat/scriptcat/issues/1174)) (by @cyfung1031)
- ⬆️ rspack의 `jsc.target`을 es2020으로 수정 / 핵심 버전 업그레이드 ([#1186](https://github.com/scriptscat/scriptcat/issues/1186)) (by @cyfung1031)
- 🎨 문자 집합 감지 개선 ([#1140](https://github.com/scriptscat/scriptcat/issues/1140)) (by @cyfung1031)
- 🎨 팝업 창 표시 시간 업데이트 ([#1155](https://github.com/scriptscat/scriptcat/issues/1155)) (by @cyfung1031)
- 🎨 locales.ts 사소한 수정 ([#1154](https://github.com/scriptscat/scriptcat/issues/1154)) (by @cyfung1031)
- 🎨 로고 128x128 ([#1176](https://github.com/scriptscat/scriptcat/issues/1176)) (by @cyfung1031)
- 🎨 이미지 처리 ([#1177](https://github.com/scriptscat/scriptcat/issues/1177)) (by @cyfung1031)

### 제거됨

- 🔥 package.json: pako 제거 ([#1188](https://github.com/scriptscat/scriptcat/issues/1188)) (by @cyfung1031)

### 수정됨

- 🐛 스크립트 인코딩 문제 처리 [#1115](https://github.com/scriptscat/scriptcat/issues/1115) ([#1138](https://github.com/scriptscat/scriptcat/issues/1138)) (by @CodFrm)
- 🐛 값 참조 문제 처리 [#1141](https://github.com/scriptscat/scriptcat/issues/1141) ([#1147](https://github.com/scriptscat/scriptcat/issues/1147)) (by @CodFrm)
- 🐛 버튼 렌더링 로직 수정, 렌더 단계 부작용 방지, JSX 조건부 렌더링 및 명명된 슬롯 사용 ([#1153](https://github.com/scriptscat/scriptcat/issues/1153)) (by @cyfung1031)
- 🐛 FileSystemObserver가 지속적으로 모니터링할 수 없는 문제 수정 ([#1160](https://github.com/scriptscat/scriptcat/issues/1160)) (by @cyfung1031)
- 🐛 수정: TM 호환성 `@match www.website.com/*` ([#1165](https://github.com/scriptscat/scriptcat/issues/1165)) (by @cyfung1031)
- 🐛 GM API 비동기 선언 수정, Promise를 올바르게 반환 ([#1169](https://github.com/scriptscat/scriptcat/issues/1169)) (by @cyfung1031)
- 🐛 content.js에서 UserAgentData 누락 문제 수정 ([#1183](https://github.com/scriptscat/scriptcat/issues/1183)) (by @cyfung1031)
- 🐛 1.2.5 structuredClone 오류 수정 ([#1192](https://github.com/scriptscat/scriptcat/issues/1192)) (by @cyfung1031)
- 🐛 수정 9343f2d6e49aec78d208d0e3ba3d96ec2a4d5a1c ([#1195](https://github.com/scriptscat/scriptcat/issues/1195)) (by @cyfung1031)
- 🐛 grant 문제 수정 ([#1199](https://github.com/scriptscat/scriptcat/issues/1199)) (by @CodFrm)

<a name="1.3.0-beta.2"></a>

## 1.3.0-beta.2 (2026-01-07)

### 추가됨

- ✨ 동기 삭제가 이제 기본적으로 꺼짐 ([#958](https://github.com/scriptscat/scriptcat/issues/958)) [[9c4c7dc](https://github.com/scriptscat/scriptcat/commit/9c4c7dc411357746db43a306d97ac41a71f2b49c)] (by @cyfung1031)
- ✨ 편집기에서 이제 GM.\* 지원 ([#1129](https://github.com/scriptscat/scriptcat/issues/1129)) [[bea0192](https://github.com/scriptscat/scriptcat/commit/bea0192c6cc50eff2ed4e1cc5dcc25f36bbe10e7)] (by @cyfung1031)

### 변경됨

- ♻️ 변경 내역 페이지 열기 로직 최적화 [#1110](https://github.com/scriptscat/scriptcat/issues/1110) [[d3ffedc](https://github.com/scriptscat/scriptcat/commit/d3ffedcffe752ca548f87f1640072fcd871b8604)] (by @CodFrm)

### 수정됨

- 🐛 스크립트 아이콘 표시 수정 [#1052](https://github.com/scriptscat/scriptcat/issues/1052) ([#1104](https://github.com/scriptscat/scriptcat/issues/1104)) [[2e5c601](https://github.com/scriptscat/scriptcat/commit/2e5c601274fa27aa67b49ef9d352e3a1c3975979)] (by @CodFrm)
- 🐛 scriptcat.d.tpl 및 유형 수정 ([#1130](https://github.com/scriptscat/scriptcat/issues/1130)) [[dd22ef5](https://github.com/scriptscat/scriptcat/commit/dd22ef544684d69e24a7aae098cb05cbab03daa8)] (by @cyfung1031)
- 🐛 클라우드 동기화 문제 수정 ([#1133](https://github.com/scriptscat/scriptcat/issues/1133)) [[a9383d2](https://github.com/scriptscat/scriptcat/commit/a9383d2012eb3953dc33c8886ce3891f404fa100)] (by @CodFrm)
- 🐛 `GM_addElement("tagName")` 오류 수정 ([#1120](https://github.com/scriptscat/scriptcat/issues/1120)) [[ad19de5](https://github.com/scriptscat/scriptcat/commit/ad19de5c1793c8c079bedbf1b11c7c2ae27a469e)] (by @cyfung1031)
- 🐛 정리 로직 제거 및 checkuserscript 로직 최적화 ([#1113](https://github.com/scriptscat/scriptcat/issues/1113)) [[e635911](https://github.com/scriptscat/scriptcat/commit/e635911a3c11c3cb8acd1cfd507cb777e5ee7236)] (by @CodFrm)

### 기타

- 🏷️ TypeScript 수정 ([#1127](https://github.com/scriptscat/scriptcat/issues/1127)) [[b455724](https://github.com/scriptscat/scriptcat/commit/b4557244191018c18d5ce8ea8e8627bcfb7f7cdd)] (by @cyfung1031)
- 📝 추가 예제 주석 ([#1131](https://github.com/scriptscat/scriptcat/issues/1131)) [[292549e](https://github.com/scriptscat/scriptcat/commit/292549ed0f65952fe9f269aace23eefc7d6a3a0f)] (by @cyfung1031)

<a name="1.3.0-beta.1"></a>

## 1.3.0-beta.1 (2025-12-21)

### 추가됨

- ✨ Monaco Editor 설정 최적화, `/* global xxx */` 수정 추가 ([#1012](https://github.com/scriptscat/scriptcat/issues/1012)) [[b1a738d](https://github.com/scriptscat/scriptcat/commit/b1a738d98b5e852993da322d56dbfa20f68d20e3)] (by @cyfung1031)

### 변경됨

- ⚡️ 메타데이터를 chrome.storage.session에서 이동 ([#1027](https://github.com/scriptscat/scriptcat/issues/1027)) [[9c81f6c](https://github.com/scriptscat/scriptcat/commit/9c81f6c42b087411669adef35df30714e184ee93)] (by @cyfung1031)
- ⚡️ 다음 실행 시간 표시 최적화 [#1093](https://github.com/scriptscat/scriptcat/issues/1093) [[324ce51](https://github.com/scriptscat/scriptcat/commit/324ce515c84699ca8d3bf1ee447fc6ef0656ae0d)] (by @CodFrm)

### 수정됨

- 🐛 팝업 페이지 문제 수정 ([#1100](https://github.com/scriptscat/scriptcat/issues/1100)) [[9c67e4a](https://github.com/scriptscat/scriptcat/commit/9c67e4a2c609f8c1ef82c493bb1ed68da6396d2e)] (by @CodFrm)
- 🐛 유형 오류 수정 [[f5a73c7](https://github.com/scriptscat/scriptcat/commit/f5a73c71649621e519b32630ae7717411732aa50)] (by @CodFrm)
- 🐛 영어 로그에 전각 문자가 포함된 문제 수정 ([#1095](https://github.com/scriptscat/scriptcat/issues/1095)) [[a68b100](https://github.com/scriptscat/scriptcat/commit/a68b10048cb01a8e26fe8d524102bfb23ed4e179)] (by @cyfung1031)
- 🐛 CSS 충돌을 해결하기 위해 UnoCSS 접두사 추가, CSS 레이아웃 수정 ([#1013](https://github.com/scriptscat/scriptcat/issues/1013)) [[723e64c](https://github.com/scriptscat/scriptcat/commit/723e64cc0c23763dfed322e907c0a960c4f9060e)] (by @cyfung1031)
- 🐛 초기 스크립트 URL 일치 문제 수정 ([#1096](https://github.com/scriptscat/scriptcat/issues/1096)) [[a77effb](https://github.com/scriptscat/scriptcat/commit/a77effbab5ab4d1752065ef943d9c050ff99c066)] (by @CodFrm)
- 🐛 업데이트 팝업 창이 너무 짧게 표시되는 문제 수정 ([#1088](https://github.com/scriptscat/scriptcat/issues/1088)) [[b2b2d5c](https://github.com/scriptscat/scriptcat/commit/b2b2d5c41ff70ee5430f7d8d156f480ac8fc3a1a)] (by @cyfung1031)
- 🐛 사용자 스크립트 알림이 활성화될 때 비정상 표시 문제 수정 ([#1086](https://github.com/scriptscat/scriptcat/issues/1086)) ([959c4db](https://github.com/scriptscat/scriptcat/commit/959c4dbed92f7bfe22a2f8ebb775c4189b5ff076))
- 🐛 responseHeaders: `TM 호환성: \r\n` ([#1085](https://github.com/scriptscat/scriptcat/issues/1085)) [[15232c8](https://github.com/scriptscat/scriptcat/commit/15232c8543d93abfdafa1353d39d8a15d1dc385f)] (by @cyfung1031)
- 🐛 GM xhr 문제 수정 ([#1082](https://github.com/scriptscat/scriptcat/issues/1082)) [[3d987c3](https://github.com/scriptscat/scriptcat/commit/3d987c300242a3c765146359c35ecd6d998f792c)] (by @CodFrm)
- 🐛 빈번한 백그라운드 동기화 문제 수정 ([#1076](https://github.com/scriptscat/scriptcat/issues/1076)) [[45dc39b](https://github.com/scriptscat/scriptcat/commit/45dc39baa0f3326cf12e97312ab632dc46ba40f2)] (by @CodFrm)
- 🐛 특수 탭 처리 문제 수정 [#1066](https://github.com/scriptscat/scriptcat/issues/1066) ([50904fb](https://github.com/scriptscat/scriptcat/commit/50904fb46efdea10fd57677bc2d28c770b47e861))
- 🐛 일치 규칙 없는 스크립트 처리 수정 [#1071](https://github.com/scriptscat/scriptcat/issues/1071) ([560cdc0](https://github.com/scriptscat/scriptcat/commit/560cdc01fc0fc27fb7d0e3b877c63ba431206668))
- 🐛 백그라운드 선택적 권한을 제거한 CI 패키징 문제 수정 [[1f002f0](https://github.com/scriptscat/scriptcat/commit/1f002f0edf9892f023ae93b8522ff7c5e4a96559)] (by @CodFrm)
- 🐛 버려진 탭 무시 수정 ([#1058](https://github.com/scriptscat/scriptcat/issues/1058)) [[6165bf4](https://github.com/scriptscat/scriptcat/commit/6165bf48eb1d53ede0561c85c30135446c2ff882)] (by @cyfung1031)

<a name="1.3.0-beta"></a>

## 1.3.0-beta (2025-12-13)

### 추가됨

- ✨ 새 스크립트 설치 로직 ([#842](https://github.com/scriptscat/scriptcat/issues/842)) ([80d342e](https://github.com/scriptscat/scriptcat/commit/80d342e80c9c1b36f88b7dcd4c65c663bb1d9185))
- ✨ monaco 편집기 힌트 국제화 및 `@require-css` 힌트 추가 ([#960](https://github.com/scriptscat/scriptcat/issues/960)) [[51a6f94](https://github.com/scriptscat/scriptcat/commit/51a6f94be3a430691f73057eae61a3814560a5b3)] (by @cyfung1031)
- ✨ `@grant` 충돌 검증 수정, 메타 중복 선언 오류 프롬프트 추가 ([#902](https://github.com/scriptscat/scriptcat/issues/902)) [[8fbd0f1](https://github.com/scriptscat/scriptcat/commit/8fbd0f1041f5c5dcdb5a515348a5f54934acfdc7)] (by @cyfung1031)
- ✨ 초보자의 함정을 방지하기 위해 템플릿에 `@noframes` 사전 설정 ([#900](https://github.com/scriptscat/scriptcat/issues/900)) [[c9d5840](https://github.com/scriptscat/scriptcat/commit/c9d584066ff2395112b9a930aaa409cda764a5e6)] (by @cyfung1031)
- ✨ 스크립트 이름이 변경될 때 설치 링크가 업데이트 대신 설치로 잘못 판단되는 문제 방지 ([#824](https://github.com/scriptscat/scriptcat/issues/824)) [[5c7a5dd](https://github.com/scriptscat/scriptcat/commit/5c7a5ddc81e3bd1dd0a71cc80460a5239178c1de)] (by @cyfung1031)
- ✨ 스크립트 실행 시점 옵션 ([#895](https://github.com/scriptscat/scriptcat/issues/895)) [[b0ea187](https://github.com/scriptscat/scriptcat/commit/b0ea187c2e6d69b60c981aa9b4d068fed7c2c2a2)] (by @CodFrm)
- ✨ 스크립트 기능이 비활성화되면 회색 아이콘 표시 [#897](https://github.com/scriptscat/scriptcat/issues/897) ([3e406dc](https://github.com/scriptscat/scriptcat/commit/3e406dc4562adf7d7f3b79b52623b87e87ef1ad3))
- ✨ 확장 가능한 항목이 0개일 때 메뉴 상호 작용 로직 최적화 [#868](https://github.com/scriptscat/scriptcat/issues/868) ([da24ac2](https://github.com/scriptscat/scriptcat/commit/da24ac234f0eeae0159dce6c2b346d06fb72eaa5))

### 변경됨

- 🎨 Typography 참조 수정 ([#984](https://github.com/scriptscat/scriptcat/issues/984)) [[a70400c](https://github.com/scriptscat/scriptcat/commit/a70400cdca8a5b64cffaca85017513d4e5e7171c)] (by @cyfung1031)
- ♻️ Firefox 호환성: GM_setClipboard ([#928](https://github.com/scriptscat/scriptcat/issues/928)) [[d1a5cb1](https://github.com/scriptscat/scriptcat/commit/d1a5cb19dc4e05fac838258d15c48cc6f876d416)] (by @cyfung1031)
- ♻️ userScripts / scripting API 조정, 호환성 강화 ([#704](https://github.com/scriptscat/scriptcat/issues/704) 재실행) ([#925](https://github.com/scriptscat/scriptcat/issues/925)) [[43bc40f](https://github.com/scriptscat/scriptcat/commit/43bc40ff5da5ef36a13564504293f1928138cf12)] (by @cyfung1031)
- ♻️ 스크립트 아이콘 로딩 리팩터링 및 최적화 ([#893](https://github.com/scriptscat/scriptcat/issues/893)) ([ab36c86](https://github.com/scriptscat/scriptcat/commit/ab36c86b5d031b88e71fbf9151696a42acba86fa))
- ⚡️ parseMetadata 코드 최적화 ([#903](https://github.com/scriptscat/scriptcat/issues/903)) [[0efc648](https://github.com/scriptscat/scriptcat/commit/0efc648257f74591765869dedee5d98f8a1dc610)] (by @cyfung1031)
- 🎨 기본 확장 아이콘 숫자 표시를 스크립트 수로 변경 [#989](https://github.com/scriptscat/scriptcat/issues/989) [[70f67b6](https://github.com/scriptscat/scriptcat/commit/70f67b6bd8cf803d7a18bf26fdccdfa6f8a92893)] (by @CodFrm)
- 🐛 가져오기 & 내보내기 - 스크립트 마지막 수정 날짜 시간을 따르지 않는 문제 수정 ([#951](https://github.com/scriptscat/scriptcat/issues/951)) ([6e7272f](https://github.com/scriptscat/scriptcat/commit/6e7272f52ef2d49d9fceb3e30babfee1cbd72e75))
- 🎨 디버깅을 더 쉽게 하기 위해 sourceURL 조정 ([#987](https://github.com/scriptscat/scriptcat/issues/987)) [[ed741e7](https://github.com/scriptscat/scriptcat/commit/ed741e7d0188fa5e95eae87bcd3a28e82ee008e1)] (by @cyfung1031)
- ⬆️ 패키지 버전 업데이트 ([#922](https://github.com/scriptscat/scriptcat/issues/922)) [[9b1df8d](https://github.com/scriptscat/scriptcat/commit/9b1df8dda794e5e95ecc12cef37ed66712ae561e)] (by @cyfung1031)
- ⚡️ Values 관련 공통 조정 ([#949](https://github.com/scriptscat/scriptcat/issues/949)) [[b258fb2](https://github.com/scriptscat/scriptcat/commit/b258fb2c73d790f7f277a9a31d07e2931a7d680d)] (by @cyfung1031)
- ⚡️ URL.createObjectURL 공통화, Firefox 호환성 ([#929](https://github.com/scriptscat/scriptcat/issues/929)) [[54ad4de](https://github.com/scriptscat/scriptcat/commit/54ad4de48b81170b90283fb6ce3b4d6e7c908cdf)] (by @cyfung1031)
- ⚡️ 여러 스크립트가 같은 아이콘을 저장하지 않도록 URL 기반 아이콘 저장 ([#909](https://github.com/scriptscat/scriptcat/issues/909)) [[c6e8efb](https://github.com/scriptscat/scriptcat/commit/c6e8efbe8d11719034a9aaa3fd871519025671ff)] (by @cyfung1031)
- ♻️ updateIcon 코드 조정 ([#908](https://github.com/scriptscat/scriptcat/issues/908)) [[642e3b9](https://github.com/scriptscat/scriptcat/commit/642e3b9e57f01f2b008990cc7cb1461f5dccd256)] (by @cyfung1031)

### 수정됨

- 🐛 불규칙 스크립트 업데이트 확인 선택 시 기존 Alarm 지우기 ([#996](https://github.com/scriptscat/scriptcat/issues/996)) [[8bb9a2d](https://github.com/scriptscat/scriptcat/commit/8bb9a2d5741acb7d547e743c7bef8a2139f1401a)] (by @cyfung1031)
- 🐛 백업 페이지 상단의 불필요한 공백 제거 ([#995](https://github.com/scriptscat/scriptcat/issues/995)) ([9c149ce](https://github.com/scriptscat/scriptcat/commit/9c149ce5999b7a70375a41c6604c8e8dbd19e9df))
- ✨ 외부 웹사이트 접근에 의존하지 않는 설치 + 설치 페이지 레이아웃 조정 ([#842](https://github.com/scriptscat/scriptcat/issues/842)) ([80d342e](https://github.com/scriptscat/scriptcat/commit/80d342e80c9c1b36f88b7dcd4c65c663bb1d9185))
- 🐛 CSS 충돌을 해결하기 위해 UnoCSS 접두사 추가, CSS 레이아웃 수정 ([#1013](https://github.com/scriptscat/scriptcat/issues/1013)) [[723e64c](https://github.com/scriptscat/scriptcat/commit/723e64cc0c23763dfed322e907c0a960c4f9060e)] (by @cyfung1031)
- 🐛 systemconfig 최적화 및 SW의 i18n 문제 수정 ([#976](https://github.com/scriptscat/scriptcat/issues/976)) [[c50fcf7](https://github.com/scriptscat/scriptcat/commit/c50fcf7770df633462c2f25f8cf22d302002ec57)] (by @CodFrm)
- 🐛 유형 오류 수정 ([#975](https://github.com/scriptscat/scriptcat/issues/975)) [[7d85856](https://github.com/scriptscat/scriptcat/commit/7d8585687c71cde1c2793d742abb7c22d9d358f0)] (by @cyfung1031)

<a name="1.2.0-beta.5"></a>

## 1.2.0-beta.5 (2025-11-17)

### 추가됨

- ✨ 팝업에서 스크립트 수 표시 ([#973](https://github.com/scriptscat/scriptcat/issues/973)) [[1134586](https://github.com/scriptscat/scriptcat/commit/1134586ff040ffc0cdddd3538e9ec493950c948a)] (by @cyfung1031)

### 변경됨

- ⚡ `check_script_update_cycle` 처리 ([#906](https://github.com/scriptscat/scriptcat/issues/906)) [[760562f](https://github.com/scriptscat/scriptcat/commit/760562f92ad64bc538873b2ca61dfafe067c3f6e)] (by @cyfung1031)
- ♻️ inject & content 구성, pageLoad 정보 전송 수정 ([#952](https://github.com/scriptscat/scriptcat/issues/952)) [[0554159](https://github.com/scriptscat/scriptcat/commit/0554159c105606192d48e1153194e09314d43bc9)] (by @cyfung1031)
- 🎨 messageFlag 단순화, 이벤트 명명 표준에 따라 수정 ([#926](https://github.com/scriptscat/scriptcat/issues/926)) [[d725d85](https://github.com/scriptscat/scriptcat/commit/d725d85a2f4917c08f6d3daa035a45fd15d12451)] (by @cyfung1031)
- ♻️ `GM_xmlhttpRequest` 및 관련 코드 리팩터링 ([#901](https://github.com/scriptscat/scriptcat/issues/901)) [[fabd2e9](https://github.com/scriptscat/scriptcat/commit/fabd2e944235b460bc73df346b79d23ee4540af7)] (by @cyfung1031)
- ⚡ toCamelCase 미세 최적화 ([#930](https://github.com/scriptscat/scriptcat/issues/930)) [[88d8bdf](https://github.com/scriptscat/scriptcat/commit/88d8bdfc726f1a4ed63bd3cf81ebad88426273e8)] (by @cyfung1031)

### 수정됨

- 🐛 손상된 샌드박스 수정 ([#966](https://github.com/scriptscat/scriptcat/issues/966)) [[dd80386](https://github.com/scriptscat/scriptcat/commit/dd8038666481d1319dd0f8ab80f79f1b13c1730d)] (by @cyfung1031)
- 🐛 setInvalidContext에서 정의되지 않은 `valueChangeListener.clear` 수정 ([#970](https://github.com/scriptscat/scriptcat/issues/970)) [[2a399e9](https://github.com/scriptscat/scriptcat/commit/2a399e96a1e848f2f569566479b48dcee280f543)] (by @cyfung1031)
- 🐛 `@connect` 로직 조정 ([#969](https://github.com/scriptscat/scriptcat/issues/969)) [[67914d2](https://github.com/scriptscat/scriptcat/commit/67914d2b7d57fa9c69706ae57ee5d3400c2643f9)] (by @cyfung1031)
- 🐛 서비스 워커 i18n 처리 수정 [#956](https://github.com/scriptscat/scriptcat/issues/956) [[843e618](https://github.com/scriptscat/scriptcat/commit/843e618daf13ec659cc16759c5de13dacf23c534)] (by @CodFrm)
- 🐛 deleteValue/deleteValues 실행 문제 수정 ([#943](https://github.com/scriptscat/scriptcat/issues/943)) [[3d92bfb](https://github.com/scriptscat/scriptcat/commit/3d92bfb4a0334ffd2c279a1e6d33e98eed0a1a81)] (by @cyfung1031)
- 🐛 GitHub 링크로 스크립트를 설치할 수 없는 문제 수정 ([#877](https://github.com/scriptscat/scriptcat/issues/877)) [[b9268e7](https://github.com/scriptscat/scriptcat/commit/b9268e7207081fcaa4591c9e1385f98446ade04a)] (by @cyfung1031)
- 🐛 `@connect *`가 적용되지 않는 문제 수정 ([#967](https://github.com/scriptscat/scriptcat/issues/967)) [[6bcb93c](https://github.com/scriptscat/scriptcat/commit/6bcb93c20c9690a2ce4f50d0978948e20ba407b8)] (by @cyfung1031)

### 기타

- 🌐 번역 업데이트 ([#920](https://github.com/scriptscat/scriptcat/issues/920)) [[ede013b](https://github.com/scriptscat/scriptcat/commit/ede013b8e725ddefa626e3e432cbaee756535259)] (by @cyfung1031)

<a name="1.2.0-beta.4"></a>

## 1.2.0-beta.4 (2025-11-07)

### 추가됨

- ✨ 카드 모드 가이드 ([#894](https://github.com/scriptscat/scriptcat/issues/894)) [[0627a0f](https://github.com/scriptscat/scriptcat/commit/0627a0faacf3a41645e985ec6f6960568427d5a4)] (by @CodFrm)

### 변경됨

- ♻️ EarlyStart 구현 리팩터링 ([#882](https://github.com/scriptscat/scriptcat/issues/882)) [[cca11e0](https://github.com/scriptscat/scriptcat/commit/cca11e02b98de285423b04ec0d95eab995cee378)] (by @CodFrm)
- 💄 카드 보기 레이아웃 미세 조정 ([#872](https://github.com/scriptscat/scriptcat/issues/872)) [[5aa21b8](https://github.com/scriptscat/scriptcat/commit/5aa21b88bf423d5d03f7df70b654249bac4b7a88)] (by @Coxxs)

### 수정됨

- 🐛 두 `@require` 사이의 세미콜론 누락으로 인한 오류 수정 [#917](https://github.com/scriptscat/scriptcat/issues/917) ([#921](https://github.com/scriptscat/scriptcat/issues/921)) [[2769a24](https://github.com/scriptscat/scriptcat/commit/2769a24e129da79926816886fe42bbc4d9a97875)] (by @cyfung1031)
- 🐛 업데이트 확인 페이지 예외 문제 수정 ([#912](https://github.com/scriptscat/scriptcat/issues/912)) [[12272e1](https://github.com/scriptscat/scriptcat/commit/12272e1ad4787cc6768f2f157d272faff5782f37)] (by @cyfung1031)
- 🐛 백그라운드 스크립트에서 GM_openInTab이 작동하지 않는 문제 수정 [#873](https://github.com/scriptscat/scriptcat/issues/873) [[a526664](https://github.com/scriptscat/scriptcat/commit/a52666429710e150d81cac33af5511401b697355)] (by @CodFrm)
- 🐛 테이블 목록 로딩 상태 문제 수정 [#874](https://github.com/scriptscat/scriptcat/issues/874) [[0b53cb0](https://github.com/scriptscat/scriptcat/commit/0b53cb07cf1ca1d3e42b15fd9c104c83031502d5)] (by @CodFrm)
- 🐛 `@early-start` 제거 후 스크립트 주입 실패 수정 ([#871](https://github.com/scriptscat/scriptcat/issues/871)) [[426e878](https://github.com/scriptscat/scriptcat/commit/426e8788d9b934ee96cf5ec22b432a08681a9e8c)] (by @cyfung1031)

<a name="1.2.0-beta.3"></a>

## 1.2.0-beta.3 (2025-10-23)

### 추가됨

- ✨ 카드 보기 ([#860](https://github.com/scriptscat/scriptcat/issues/860)) [[c9f2350](https://github.com/scriptscat/scriptcat/commit/c9f23509648a41b06f82e79da2bc1fc05a783e06)] (by @CodFrm)

### 변경됨

- ♻️ Null 코드 조정 ([#852](https://github.com/scriptscat/scriptcat/issues/852)) [[fa1031d](https://github.com/scriptscat/scriptcat/commit/fa1031df9c3e8bc2550f429e7cf8d1c3869a1ea3)] (by @cyfung1031)
- ♻️ GMApiRequest 코드 조정, GM_log 코드 수정, @connect 판단 수정 ([#849](https://github.com/scriptscat/scriptcat/issues/849)) [[ee4a8b2](https://github.com/scriptscat/scriptcat/commit/ee4a8b28715fb48fa627f5231c8dc30e55c006ed)] (by @cyfung1031)

### 제거됨

- 🔥 `GM_openInTab({ useOpen: true })` 제거 ([#867](https://github.com/scriptscat/scriptcat/issues/867)) [[aa61335](https://github.com/scriptscat/scriptcat/commit/aa613354c7b7c84d461000ed0362cf9916c8aa39)] (by @cyfung1031)

### 수정됨

- 🐛 Vivaldi와 checkUserScriptsAvailable 호환성 ([#859](https://github.com/scriptscat/scriptcat/issues/859)) [[014d62d](https://github.com/scriptscat/scriptcat/commit/014d62de6b731bfda82babf5db5aa5ae909908f1)] (by @cyfung1031)
- 🚑 중요 수정: GM.delete/setValue Promise가 이행되지 않는 문제 ([#865](https://github.com/scriptscat/scriptcat/issues/865)) [[43572a3](https://github.com/scriptscat/scriptcat/commit/43572a3110b8b083f840b472a231400223da7751)] (by @cyfung1031)
- 🐛 GM xhr fetch 문제 수정 [#847](https://github.com/scriptscat/scriptcat/issues/847) [[c6e95c2](https://github.com/scriptscat/scriptcat/commit/c6e95c210748d091ff9f610f3801eaa055d9d6de)]

### 기타

- 📝 monaco-editor에 `@compatible` 주석 추가 ([#853](https://github.com/scriptscat/scriptcat/issues/853)) [[752b951](https://github.com/scriptscat/scriptcat/commit/752b95122ab324df358e45ec468194cc8466f8bb)] (by @cyfung1031)
- 🌐 subscribe_source_tooltip 번역 추가 [#850](https://github.com/scriptscat/scriptcat/issues/850) [[8d675bd](https://github.com/scriptscat/scriptcat/commit/8d675bd5398d403dfc8e7ee2016fbaffd821da64)]

<a name="1.2.0-beta.2"></a>

## 1.2.0-beta.2 (2025-10-15)

스크립트 업데이트 로직 최적화, 스크립트 목록 사이드바 추가, GM_registerMenuCommand 및 GM_openInTab 기능 강화, 많은 버그 수정

### 추가됨

- ✨ 통합 업데이트 알림 메커니즘 ([#755](https://github.com/scriptscat/scriptcat/issues/755)) ([741b0bd](https://github.com/scriptscat/scriptcat/commit/741b0bd2ec2f75a7e84c62fbe02654ce6bc41543))
- ✨ GM_registerMenuCommand 2단계 메뉴 &amp; 구분선 ([#831](https://github.com/scriptscat/scriptcat/issues/831)) [[bd08959](https://github.com/scriptscat/scriptcat/commit/bd089595c922aa63af0fb6d41fa9f6dc2587e096)] (by @cyfung1031)
- ✨ GM_openInTab에 매개변수 추가 ([#788](https://github.com/scriptscat/scriptcat/issues/788)) [[eb33d61](https://github.com/scriptscat/scriptcat/commit/eb33d613473815b12017e34f46ed9eb292a9dcba)] (by @cyfung1031)
- ✨ SC 버전 확인 버튼 추가 ([#795](https://github.com/scriptscat/scriptcat/issues/795)) [[1680c66](https://github.com/scriptscat/scriptcat/commit/1680c66099120c0e497c1a1f5321f38fe0160ea0)] (by @cyfung1031)
- ✨ 스크립트 목록 사이드바 필터링 및 태깅 기능 추가 ([#794](https://github.com/scriptscat/scriptcat/issues/794)) [[6aabf59](https://github.com/scriptscat/scriptcat/commit/6aabf594cd62fa7358ba34c1c69060dc9e24919c)]
- ✨ 로컬 파일 모니터링을 활성화하기 위해 window.showOpenFilePicker로 파일 열기 [#749](https://github.com/scriptscat/scriptcat/issues/749) [[7dcfbf1](https://github.com/scriptscat/scriptcat/commit/7dcfbf1309fff28c3d806d4ccb36bd0ef51050f5)]

### 변경됨

- ♻️ indexeddb와 chrome.storage 마이그레이션 로직 분리 ([#844](https://github.com/scriptscat/scriptcat/issues/844)) [[b8389fb](https://github.com/scriptscat/scriptcat/commit/b8389fbc21932dbbe9394b576fbd8605a3b820c8)]
- ♻️ registerMenuCommand &amp; unregisterMenuCommand 수정 ([#826](https://github.com/scriptscat/scriptcat/issues/826)) [[3ecde9e](https://github.com/scriptscat/scriptcat/commit/3ecde9e0125089744c2d81f759b043deb5440be6)] (by @cyfung1031)
- ⚡ Runtime 시작 로딩 최적화 ([#775](https://github.com/scriptscat/scriptcat/issues/775)) [[3e69401](https://github.com/scriptscat/scriptcat/commit/3e69401feb98bd789a85dbda7d9e690f71bae696)] (by @cyfung1031)

### 수정됨

- 🐛 `GM_registerMenuCommand` 관련 코드 설계 수정 ([#790](https://github.com/scriptscat/scriptcat/issues/790)) ([a71cfe4](https://github.com/scriptscat/scriptcat/commit/a71cfe496fcb2457109dd97742a795585860a6d7))
- 🐛 팝업 데이터 정리 처리 [#784](https://github.com/scriptscat/scriptcat/issues/784) [[7bd9b16](https://github.com/scriptscat/scriptcat/commit/7bd9b162b178a534a8be31aca210af2106f110b7)]
- 🐛 CAT_fileStorage 다운로드 문제 수정 [#829](https://github.com/scriptscat/scriptcat/issues/829) [[81d4e49](https://github.com/scriptscat/scriptcat/commit/81d4e496df8abd3715348fe979758a63311b54c3)]
- 🐛 userconfig 그룹 순서 문제 수정 [#818](https://github.com/scriptscat/scriptcat/issues/818) [[74881c0](https://github.com/scriptscat/scriptcat/commit/74881c0a05d599ad13300c3c69b33b01a5a7b552)]
- 🐛 설치 소스 데이터 호환성 및 처리 문제 수정 [[574b3c6](https://github.com/scriptscat/scriptcat/commit/574b3c6506a21e1b8ebd891fd91fcd8b19774b96)]
- 🐛 팝업 페이지에서 백그라운드 스크립트 상태 동기화 문제 수정 [#838](https://github.com/scriptscat/scriptcat/issues/838) ([edd13c6](https://github.com/scriptscat/scriptcat/commit/edd13c65c9643dece7c38665f58146c9e59c802c))
- 🐛 컨텍스트 메뉴와 스크립트 메뉴 간의 불일치 수정 [#768](https://github.com/scriptscat/scriptcat/issues/768) ([191ffcd](https://github.com/scriptscat/scriptcat/commit/191ffcd1e55d842acabbc44fdf1f1098f0b0093d))
- 🐛 로컬 파일 수동 가져오기 오류 수정 [#745](https://github.com/scriptscat/scriptcat/issues/745) ([fe14991](https://github.com/scriptscat/scriptcat/commit/fe149914e6eef99761ca44681abd95919613adb3))
- 🐛 로컬 파일 수동 가져오기 오류 수정 [#745](https://github.com/scriptscat/scriptcat/issues/745) ([52950a2](https://github.com/scriptscat/scriptcat/commit/52950a2ad04c79aecaa530a6eb615e9c54bba884))
- 🐛 로컬 \*.user.js 인식 지원 [#812](https://github.com/scriptscat/scriptcat/issues/812) [[cec8ffc](https://github.com/scriptscat/scriptcat/commit/cec8ffc5f6947a54b7a59365928a1ccf47b336a2)]
- 🐛 조기 시작 스크립트가 GM_addElement를 사용할 수 없는 문제 수정 [#801](https://github.com/scriptscat/scriptcat/issues/801) [[4d17645](https://github.com/scriptscat/scriptcat/commit/4d17645c0659d8ecd283473cbdd88b6eda065758)]
- 🐛 조기 스크립트 GM_info.scriptMetaStr 문제 수정 [#801](https://github.com/scriptscat/scriptcat/issues/801) [[a9a4333](https://github.com/scriptscat/scriptcat/commit/a9a433393ceb259aecc4fe9c1d32a0c9a8333160)]
- 🐛 메타데이터 블록 문서 및 사소한 코드 수정 ([#832](https://github.com/scriptscat/scriptcat/issues/832)) [[c40822b](https://github.com/scriptscat/scriptcat/commit/c40822b293f1283d420797a0cbe549153541f3c8)] (by @cyfung1031)
- 🐛 탭 제거 후 menuCommand 업데이트 트리거 방지 ([#828](https://github.com/scriptscat/scriptcat/issues/828)) [[c64f6d9](https://github.com/scriptscat/scriptcat/commit/c64f6d9a4e087f7788f5b160b91c2b808161e58e)] (by @cyfung1031)
- 🐛 Modali18n 문제 수정 ([#825](https://github.com/scriptscat/scriptcat/issues/825)) [[03da1ba](https://github.com/scriptscat/scriptcat/commit/03da1ba07c0fd212627bf3c18dbb3afa6affed78)] (by @cyfung1031)
- 🐛 Modal.confirm i18n 문제 수정 [#821](https://github.com/scriptscat/scriptcat/issues/821) [[b3c30f5](https://github.com/scriptscat/scriptcat/commit/b3c30f55db8b37ccbfa7278b83af21159c72f2cb)]
- ✏️ 매개변수 유형에서 &quot;minetype&quot;이 &quot;mimetype&quot;이어야 함 ([#823](https://github.com/scriptscat/scriptcat/issues/823)) [[fb3d132](https://github.com/scriptscat/scriptcat/commit/fb3d132ece659cb18082e383dfb925a5cc242c4c)] (by @cyfung1031)
- 🐛 잘못된 Extension Context 오류 발생 시 작업 중단 &amp; 리소스 해제 ([#800](https://github.com/scriptscat/scriptcat/issues/800)) [[c110e74](https://github.com/scriptscat/scriptcat/commit/c110e746336e63fc1266bb4cacc056e126d919e0)] (by @cyfung1031)
- 🐛 batchUpdate 페이지가 업데이트를 다시 가져오는 문제 + 설치 후 업데이트되지 않는 문제 수정 ([#803](https://github.com/scriptscat/scriptcat/issues/803)) [[73f1f32](https://github.com/scriptscat/scriptcat/commit/73f1f329388c07588f2a532b71e5318bf3a92392)] (by @cyfung1031)
- 🐛 기본 jsconfig 조정 [#813](https://github.com/scriptscat/scriptcat/issues/813) [[06f0e1c](https://github.com/scriptscat/scriptcat/commit/06f0e1c7f0974b954d7ab546ce86f22f830dc28f)]
- 🐛 UI 렌더링 문제 ([#806](https://github.com/scriptscat/scriptcat/issues/806)) [[5c75c8b](https://github.com/scriptscat/scriptcat/commit/5c75c8b8e8fc92fcd830db094b34a7ad16fb4c9f)] (by @cyfung1031)
- 🐛 모호한 유니코드 경고 억제 [#747](https://github.com/scriptscat/scriptcat/issues/747) [[5e7c077](https://github.com/scriptscat/scriptcat/commit/5e7c077ef250e1b8eef5662bc416b82d62927b52)]
- 🐛 언어 전환 후 ScriptList 열 이름과 내용이 업데이트되지 않는 문제 ([#792](https://github.com/scriptscat/scriptcat/issues/792)) [[3ad58b8](https://github.com/scriptscat/scriptcat/commit/3ad58b82bf1d4955cddd3e50b570c601f7e90143)] (by @cyfung1031)
- 🐛 chrome.tabs.query 수정 ([#786](https://github.com/scriptscat/scriptcat/issues/786)) [[de607fd](https://github.com/scriptscat/scriptcat/commit/de607fd8eca841748a3e422fe5e84f84f84619d5)] (by @cyfung1031)
- 🐛 [UI 수정] useCallback 문제 해결 ([#769](https://github.com/scriptscat/scriptcat/issues/769)) [[511de96](https://github.com/scriptscat/scriptcat/commit/511de96d2b271142244f9874f87bb23ec75f626a)] (by @cyfung1031)
- 🐛 백그라운드 실행 불가 문제를 해결하기 위해 백그라운드 권한 추가 [#762](https://github.com/scriptscat/scriptcat/issues/762) [[4205837](https://github.com/scriptscat/scriptcat/commit/42058379ab6d0e29003cc1f63d5df48dbe601f4e)]
- 🐛 파일 이름에 잘못된 문자가 있는 파일을 GM_download가 다운로드할 수 없는 문제 수정 ([#758](https://github.com/scriptscat/scriptcat/issues/758)) [[2518722](https://github.com/scriptscat/scriptcat/commit/2518722c8bc14b9f52e8720624dd835b1fbdfb1b)] (by @WhiteSevs)
- 🐛 샌드박스 toString 문제 수정 [#737](https://github.com/scriptscat/scriptcat/issues/737) [[6ca24c9](https://github.com/scriptscat/scriptcat/commit/6ca24c9b171792035803ac4e1c69e473629f9d18)]
- 🐛 배지가 0으로 표시되는 문제 수정 [[026c1d2](https://github.com/scriptscat/scriptcat/commit/026c1d2071dd4cfb6291f005d36717bcdf0a51c3)]
- 🐛 스크립트 주입 CSP 문제 수정 [#739](https://github.com/scriptscat/scriptcat/issues/739) [#728](https://github.com/scriptscat/scriptcat/issues/728) [[5da21b5](https://github.com/scriptscat/scriptcat/commit/5da21b5e3d0e7e86a1fd5dff57ba03ea641c19fa)]

### 기타

- 📝 TypeScript 주석 수정 ([#839](https://github.com/scriptscat/scriptcat/issues/839)) [[6b575ca](https://github.com/scriptscat/scriptcat/commit/6b575cac4841bdf86de70e4b0e702e342a00ca76)] (by @cyfung1031)
- 🌐 알림 및 오류 번역 문제 처리, `@grant` 충돌 검증 추가 ([#819](https://github.com/scriptscat/scriptcat/issues/819)) [[ef3482d](https://github.com/scriptscat/scriptcat/commit/ef3482d2c6406927a72835067f66a28cdb0f3b79)] (by @cyfung1031)
- 🌐 "메시지 내용 없음" i18n 처리 ([#811](https://github.com/scriptscat/scriptcat/issues/811)) [[f9486d6](https://github.com/scriptscat/scriptcat/commit/f9486d6e53d68c085625ac370dc717daf8af232e)] (by @cyfung1031)
- 🌐 UI 소스 형식 표시 수정 ([#783](https://github.com/scriptscat/scriptcat/issues/783)) [[9242b95](https://github.com/scriptscat/scriptcat/commit/9242b957cf5f90f6d186a0b1f07bfce8d6ed1cd7)] (by @cyfung1031)
- 🌐 updatepage 번역 ([#777](https://github.com/scriptscat/scriptcat/issues/777)) [[757c954](https://github.com/scriptscat/scriptcat/commit/757c954768be8fc94e05200822a23efef5e6bc01)] (by @cyfung1031)
- 🌐 translation.json 업데이트 ([#746](https://github.com/scriptscat/scriptcat/issues/746)) [[85b48e2](https://github.com/scriptscat/scriptcat/commit/85b48e2982e0c81f82622528a3aa600c3c88ce8d)] (by @cyfung1031)

<a name="1.2.0-beta.1"></a>

## 1.2.0-beta.1 (2025-09-18)

### 추가됨

- ✨ 사이드바 숨기기 레이아웃 메뉴 추가 [#689](https://github.com/scriptscat/scriptcat/issues/689) [[dd64da7](https://github.com/scriptscat/scriptcat/commit/dd64da719c081acbf21645e2b1e1f38653ffae8c)]
- ✨ inject into 구현 ([#711](https://github.com/scriptscat/scriptcat/issues/711)) [[4c708c2](https://github.com/scriptscat/scriptcat/commit/4c708c2c5a0f7cea6daa2f32f51e182a4f83c50c)]
- ✨ : Firefox mv3용 도구 모음 버튼을 활성화하는 단축키 추가 ([#718](https://github.com/scriptscat/scriptcat/issues/718)) [[06a9040](https://github.com/scriptscat/scriptcat/commit/06a904046034aad59564ea07d8ec441f4def5278)] (by @xymoryn)

### 변경됨

- ⚡ 백그라운드 스크립트 실행 버튼 클릭 후 팝업 페이지 재렌더링으로 인한 축소 문제 최적화 [[d83ad0d](https://github.com/scriptscat/scriptcat/commit/d83ad0dda600db59adf70f9db2304381db7ab80f)]
- ⚡ 스크립트 목록 최적화, 재렌더링 감소 [[610fba0](https://github.com/scriptscat/scriptcat/commit/610fba08bbac5c01791aac756eed60a75bc1d483)]
- ♻️ 백그라운드 스크립트 작업 확인 강화, 오류 감소 [#714](https://github.com/scriptscat/scriptcat/issues/714) [[3850af2](https://github.com/scriptscat/scriptcat/commit/3850af22abefced1f2ec6c773c92599a18bb0f8a)]
- 🐛 팝업 페이지에서 백그라운드 스크립트가 확장되지 않는 문제 수정 ([66ab70f](https://github.com/scriptscat/scriptcat/commit/66ab70fb10c28aaf0c9260a9591aab7e1ae35615))
- ✨ 사이트 제외 후 팝업 페이지가 자동으로 닫히지 않음 [#725](https://github.com/scriptscat/scriptcat/issues/725) ([e432210](https://github.com/scriptscat/scriptcat/commit/e43221051d52d7394a579442519e99d258df872a))
- ♻️ ReduxStore 및 브로드캐스트 메커니즘 최적화 ([#729](https://github.com/scriptscat/scriptcat/issues/729)) [[b62781e](https://github.com/scriptscat/scriptcat/commit/b62781e11f0f4771094e42cb3479a70b8134cdf6)] (by @cyfung1031)
- ⚡ React.forwardRef 코드 최적화 ([#734](https://github.com/scriptscat/scriptcat/issues/734)) [[a7faa48](https://github.com/scriptscat/scriptcat/commit/a7faa48f9a4615318104fa5d501184a4faec73cd)] (by @cyfung1031)
- ♻️ systemConfig 리팩터링 및 최적화 [[3acd3f3](https://github.com/scriptscat/scriptcat/commit/3acd3f3890031a7e90bd57eb63320007164ed4ff)]

### 수정됨

- 🐛 상태 업데이트 오류 수정 [[94fd65b](https://github.com/scriptscat/scriptcat/commit/94fd65bfb765a9511e0efb2dc6fb2bfd216e570f)]
- ✏️ 오타 수정 ([#738](https://github.com/scriptscat/scriptcat/issues/738)) ([4e55c06](https://github.com/scriptscat/scriptcat/commit/4e55c06212336bd3356e6d1ead3b75cf97f3b9d8))
- 🐛 배지가 0으로 표시되는 문제 수정 ([6edad14](https://github.com/scriptscat/scriptcat/commit/6edad1491820665fad8cd6ee5c85e93c57aa0d42))
- 🐛 메시지 유형 확인 강화 [#676](https://github.com/scriptscat/scriptcat/issues/676) ([5073795](https://github.com/scriptscat/scriptcat/commit/50737957507ff9af3aa9ba9a6b7d444b643d1ff2))
- 🐛 샌드박스 toString 문제 수정 [#737](https://github.com/scriptscat/scriptcat/issues/737) [[a4cefbc](https://github.com/scriptscat/scriptcat/commit/a4cefbc791fc2c2e53f3e934e0e4725023f49f72)]
- ✏️ 오타 수정 [[35b6f58](https://github.com/scriptscat/scriptcat/commit/35b6f581c6421a6db001eebadaa8ae216f5b8575)]
- 🐛 GM xhr 문서 문제 수정 [#716](https://github.com/scriptscat/scriptcat/issues/716) [[1c46546](https://github.com/scriptscat/scriptcat/commit/1c465462f4e14ae461d54358710f5caf74208af3)]

<a name="1.2.0-beta"></a>

## 1.2.0-beta (2025-09-07)

### 추가됨

- ✨ 사용자 지정 편집기 구성 및 편집기 유형 정의 추가 ([#708](https://github.com/scriptscat/scriptcat/issues/708)) [[49eb379](https://github.com/scriptscat/scriptcat/commit/49eb3794774790d61c3ef787c865a9ba6fe82841)]
- ✨ 제거 설문 페이지 추가 [[6404c8f](https://github.com/scriptscat/scriptcat/commit/6404c8f74aff09b15725a92f8afdfc0d71ac188f)]
- 📝 설치 시작 페이지 및 네임스페이스 수정 ([6f2f000](https://github.com/scriptscat/scriptcat/commit/6f2f000612908b7a88f6b70c2831092805c63bc7))
- ✨ 모바일 설치 QR 코드 추가 ([348237c](https://github.com/scriptscat/scriptcat/commit/348237c7ce9771c69025386926b1f73710cf6f42))

### 수정됨

- 🐛 이전 브라우저 버전 호환성 문제 수정 [#715](https://github.com/scriptscat/scriptcat/issues/715) [[4da8068](https://github.com/scriptscat/scriptcat/commit/4da806879c2b170672814d02e6f8ed98c9fae35b)]
- 💄 창이 너무 작을 때 팝업 메뉴 표시 최적화 ([288650e](https://github.com/scriptscat/scriptcat/commit/288650e5e4cbdc3fa8658f0754ce427a1b3dec5a))
- 🐛 N 문제 수정 ([#710](https://github.com/scriptscat/scriptcat/issues/710)) [[6a2027a](https://github.com/scriptscat/scriptcat/commit/6a2027ac0bb5e0ed625df570240d068a98a34b31)] (by @WhiteSevs)
- 🐛 GM XHR 리디렉션이 헤더를 잃는 문제 수정 [#664](https://github.com/scriptscat/scriptcat/issues/664) close [#664](https://github.com/scriptscat/scriptcat/issues/664) [[1f29e69](https://github.com/scriptscat/scriptcat/commit/1f29e699ded25ec5270844c1fb54001b5bbf5038)]

### 기타

- 🌐 i18n 문제 처리 [[2adf69d](https://github.com/scriptscat/scriptcat/commit/2adf69d6ec3c30186f2c2ef89f97e3cba9e15a66)]
- 🌐 번역 문제 처리 [[55223dd](https://github.com/scriptscat/scriptcat/commit/55223dde8c545e974d19dd8126756aaae407e1fd)]

<a name="1.1.0-beta.2"></a>

## 1.1.0-beta.2 (2025-09-03)

Dropbox 지원 추가, 호환성 개선, 페이지 로딩보다 빠른 @early-start 추가

### 추가됨

- ✨ 스크립트 런타임 환경 설정 추가 [#628](https://github.com/scriptscat/scriptcat/issues/628) [[0d4a89e](https://github.com/scriptscat/scriptcat/commit/0d4a89efaecf0331dcc7fbb6df006b93a1525846)]
- ✨ 백그라운드 스크립트가 없을 때 기본적으로 축소 [#626](https://github.com/scriptscat/scriptcat/issues/626) ([9d0aac6](https://github.com/scriptscat/scriptcat/commit/9d0aac6aae11b96707ca1f7c024a24e9d55f217b))
- ✨ Dropbox 지원 [#575](https://github.com/scriptscat/scriptcat/issues/575) [[2c66f21](https://github.com/scriptscat/scriptcat/commit/2c66f21f5118bd83a0eaa0f1baa3a31f2233e5b2)]
- ✨ TM과 SC가 함께 실행될 때 external.Tampermonkey 최적화, TM이 설치되지 않은 경우 SC 설치 상태 확인 ([#703](https://github.com/scriptscat/scriptcat/issues/703)) [[d0115c3](https://github.com/scriptscat/scriptcat/commit/d0115c33657260d803b6091139601b1b20407d4e)] (by @cyfung1031)
- ✨ 페이지 로딩보다 빠른 @early-start 추가 ([#649](https://github.com/scriptscat/scriptcat/issues/649)) [[eb097dd](https://github.com/scriptscat/scriptcat/commit/eb097dd146dcd6f8ca712ed883571dbfb3d09f20)]

### 변경됨

- ♻️ FF 호환: `chrome.scripting.registerContentScripts` ([#704](https://github.com/scriptscat/scriptcat/issues/704)) [[a9ad0ea](https://github.com/scriptscat/scriptcat/commit/a9ad0ea2b34744dbd4488bda0a16d73bd6a1cc2b)] (by @cyfung1031)
- ♻️ url_matcher 코드 최적화 ([#702](https://github.com/scriptscat/scriptcat/issues/702)) [[27b8baa](https://github.com/scriptscat/scriptcat/commit/27b8baa90372f75cbf428dd32ef02d842688cf33)] (by @cyfung1031)
- ⚡ const now = Date.now(); ([#695](https://github.com/scriptscat/scriptcat/issues/695)) [[400b45c](https://github.com/scriptscat/scriptcat/commit/400b45cc487da4cc8a7b866916855acdc18a8023)] (by @cyfung1031)
- ⚡ forEach -> for of ([#694](https://github.com/scriptscat/scriptcat/issues/694)) [[70927b6](https://github.com/scriptscat/scriptcat/commit/70927b6f0ddcf4a60d5838597d1df5acaaa7ca94)] (by @cyfung1031)
- ⚡ 공통 코드 최적화 ([#692](https://github.com/scriptscat/scriptcat/issues/692)) [[cf05973](https://github.com/scriptscat/scriptcat/commit/cf0597305a158fd8ba8489f30906d7bbbd7a4b0b)] (by @cyfung1031)
- ⚡ 코드 최적화: 전역 검색 ([#697](https://github.com/scriptscat/scriptcat/issues/697)) [[a5c12bd](https://github.com/scriptscat/scriptcat/commit/a5c12bd94f249ea194bececf2ecb39a0dea3c7dc)] (by @cyfung1031)
- ♻️ initReady 처리를 위해 미들웨어 사용 [[758e926](https://github.com/scriptscat/scriptcat/commit/758e92690194462982282dca25041c825d0b05e2)]
- ♻️ Server 및 MessageQueue 구성 요소 최적화 [[0932edc](https://github.com/scriptscat/scriptcat/commit/0932edc49722226cac97403dcd14dbaef01b5528)]
- ♻️ 호환성 조정: optional_permission 처리 ([#679](https://github.com/scriptscat/scriptcat/issues/679)) [[bfc558a](https://github.com/scriptscat/scriptcat/commit/bfc558a0dfd167234100d95b9180ee6db4ab4c04)] (by @cyfung1031)
- ♻️ 호환성 조정: `chrome.runtime.onMessage`가 없으면 `content.js`가 오류를 발생시켜야 함 ([#675](https://github.com/scriptscat/scriptcat/issues/675)) [[4e9adc0](https://github.com/scriptscat/scriptcat/commit/4e9adc00562981aa9d930d8a3f199e9418bdff30)] (by @cyfung1031)
- ♻️ 호환성 조정(offscreen) 및 코드 최적화 ([#674](https://github.com/scriptscat/scriptcat/issues/674)) [[a3e56dd](https://github.com/scriptscat/scriptcat/commit/a3e56dd9d76cad73c8c8ec75c71fdbcfb9ca40e0)] (by @cyfung1031)
- 🎨 호환성 조정: notificationsUpdate ([#673](https://github.com/scriptscat/scriptcat/issues/673)) [[a345d93](https://github.com/scriptscat/scriptcat/commit/a345d93187e26efe99cc331072ffc854b3fe7b4d)] (by @cyfung1031)
- 🎨 chrome.tabs.create 호환성 강화 ([#639](https://github.com/scriptscat/scriptcat/issues/639)) [[ac0d7de](https://github.com/scriptscat/scriptcat/commit/ac0d7deb5957ea71579ef7a44594a75300e1cca6)] (by @cyfung1031)

### 수정됨

- 🐛 설치 중간 페이지에 연결할 수 없을 때 설치가 트리거되지 않는 문제 수정 [#705](https://github.com/scriptscat/scriptcat/issues/705) [[5f1e292](https://github.com/scriptscat/scriptcat/commit/5f1e2929d79c470ba4427c3cce01f5cd184a839b)]
- 🐛 `@match *://*domain/*` 표현식 처리 [[039b445](https://github.com/scriptscat/scriptcat/commit/039b4454148947cd3c74de82b87804ee9815e60c)]
- 🐛 확장 환경에서 샌드박스 탈출 문제 수정 [#700](https://github.com/scriptscat/scriptcat/issues/700) [[a1a868d](https://github.com/scriptscat/scriptcat/commit/a1a868dfe3199e666fe2bcb65cfb2ad0ad3d699b)]
- ✏️ backgroud -> background ([#698](https://github.com/scriptscat/scriptcat/issues/698)) [[2594075](https://github.com/scriptscat/scriptcat/commit/2594075c4a50f4c79fa46bcda08d7b0cbcfe723c)] (by @cyfung1031)
- ✏️ CrhomeStorage -> ChromeStorage ([#693](https://github.com/scriptscat/scriptcat/issues/693)) [[64c536d](https://github.com/scriptscat/scriptcat/commit/64c536dbd5fcb4c29eebc1109202bab69aaa3ee2)] (by @cyfung1031)
- 🐛 GM.getTab 및 GM.getTabs 수정 ([#683](https://github.com/scriptscat/scriptcat/issues/683)) [[31de256](https://github.com/scriptscat/scriptcat/commit/31de256f02b5b61e27f0eec9ea673248ba8faa32)] (by @WhiteSevs)
- 🐛 finalUrl에 도메인 누락 문제 수정 ([#656](https://github.com/scriptscat/scriptcat/issues/656)) [[545d7c8](https://github.com/scriptscat/scriptcat/commit/545d7c8c0dd69c83bd2f0353518aafe6af81c0f4)] (by @cyfung1031)
- 🐛 이전 브라우저 커널과 호환 [#647](https://github.com/scriptscat/scriptcat/issues/647) ([bba12d2](https://github.com/scriptscat/scriptcat/commit/bba12d23f04759cb9b7fdb63f0d95ae515ee94a9))

### 기타

- 📝 README_RU.md 및 CONTRIBUTING_RU.md 생성 ([#678](https://github.com/scriptscat/scriptcat/issues/678)) [[597ab03](https://github.com/scriptscat/scriptcat/commit/597ab0378fe5ced01637cf411326ef7845b8ce2b)] (by @Ioann)
- 👷 호환성 조정(pack.js 호환성) ([#669](https://github.com/scriptscat/scriptcat/issues/669)) [[fec45e6](https://github.com/scriptscat/scriptcat/commit/fec45e6606a609b10b79c58d2fcba02c2ce71e16)] (by @cyfung1031)

**전체 변경 내역**: https://github.com/scriptscat/scriptcat/compare/v1.1.0-beta.1...v1.1.0-beta.2

<a name="1.1.0-beta.1"></a>

## 1.1.0-beta.1 (2025-08-29)

### 추가됨

- ✅ 단위 테스트 수정 ([#690](https://github.com/scriptscat/scriptcat/issues/690)) [[71f9d70](https://github.com/scriptscat/scriptcat/commit/71f9d709868b96352494889ea864c22c0b2ce197)] (by @cyfung1031)
- 🎨 Async 코드 최적화 ([#651](https://github.com/scriptscat/scriptcat/issues/651)) ([55440e7](https://github.com/scriptscat/scriptcat/commit/55440e725a706e4358f08bc430ebea77bcb25335))
- ✨ 전역 코드 검색 ([#662](https://github.com/scriptscat/scriptcat/issues/662)) [[f8eafb7](https://github.com/scriptscat/scriptcat/commit/f8eafb7f955dad62c1b41ac477e929bf00c65982)] (by @RenjiYuusei)
- ✅ nextTime 단위 테스트 조정 [[0a6ed8c](https://github.com/scriptscat/scriptcat/commit/0a6ed8c72b8ee6dc15b66f8053ae3bf3ee95584d)]

### 변경됨

- ♻️ ScriptMatchInfo 관련 코드 최적화 ([#653](https://github.com/scriptscat/scriptcat/issues/653)) [[556c493](https://github.com/scriptscat/scriptcat/commit/556c493f027fbfa7299ee68c3a9d927de6f41f08)] (by @cyfung1031)
- 🎨 창 열기 로직 최적화 [[0de44bf](https://github.com/scriptscat/scriptcat/commit/0de44bfc90eeee003d9708ba0678e6c23f859579)]
- 🌐 번역 문제 처리 ([cbe880e](https://github.com/scriptscat/scriptcat/commit/cbe880efcf3a148301dce4ffa90aa29a14407a26))
- 🎨 `@scriptURL` ([#654](https://github.com/scriptscat/scriptcat/issues/654)) [[4b1a5de](https://github.com/scriptscat/scriptcat/commit/4b1a5de9ed3b328091f582925b8a442535953a9e)] (by @cyfung1031)
- ♻️ UrlMatch 다시 작성 ([#637](https://github.com/scriptscat/scriptcat/issues/637)) [[5b01c10](https://github.com/scriptscat/scriptcat/commit/5b01c10859b80890456a44a66d78204b42040870)] (by @cyfung1031)
- 🎨 getEnableScript 최적화 ([#645](https://github.com/scriptscat/scriptcat/issues/645)) [[04910cf](https://github.com/scriptscat/scriptcat/commit/04910cf6213fe90fc8cbca28f2826414855dd7b1)] (by @cyfung1031)
- ⚡ runtime.ts 코드 최적화 ([#642](https://github.com/scriptscat/scriptcat/issues/642)) [[641cc1d](https://github.com/scriptscat/scriptcat/commit/641cc1d1ec0ec2dff5d32689ba46d27d30f7b45f)] (by @cyfung1031)
- 🎨 chrome.tabs.create 호환성 강화 ([#639](https://github.com/scriptscat/scriptcat/issues/639)) [[601b933](https://github.com/scriptscat/scriptcat/commit/601b933bd5cec1405ac6169a6160a57dfe0dbcfc)] (by @cyfung1031)
- 🎨 새 스크립트 `@match` `@icon` 수정 ([#636](https://github.com/scriptscat/scriptcat/issues/636)) [[aec08a3](https://github.com/scriptscat/scriptcat/commit/aec08a331f868defee6279eb420f6b90aba39cfe)] (by @cyfung1031)

### 제거됨

- 🔥 스크립트 사이트 crowdin 문서 제거 [[695f4d1](https://github.com/scriptscat/scriptcat/commit/695f4d1ba2d039508415235dd8e606d238be8035)]

### 수정됨

- 🐛 finalUrl에 도메인 누락 문제 수정 ([#656](https://github.com/scriptscat/scriptcat/issues/656)) [[3ed018a](https://github.com/scriptscat/scriptcat/commit/3ed018a7a54803fcf2e1791316e0166ed0b52007)] (by @cyfung1031)
- 💚 react/jsx-no-literals lint 문제 수정 [[017b608](https://github.com/scriptscat/scriptcat/commit/017b60886be601e3e0e1719cf249da32d5686c30)]
- 🐛 이전 브라우저 커널과 호환 [#647](https://github.com/scriptscat/scriptcat/issues/647) [[0e2f817](https://github.com/scriptscat/scriptcat/commit/0e2f8173c8b44bd6ad44bdffc73fa302a96a058e)]
- 🐛 window.external 주입 최적화 ([#646](https://github.com/scriptscat/scriptcat/issues/646)) [[0b2668a](https://github.com/scriptscat/scriptcat/commit/0b2668aadcab35a33ff9abc4bd030dffb87ea168)] (by @cyfung1031)
- 🐛 클라우드 저장소 인증 페이지가 자동으로 닫히지 않는 문제 수정 [[7748088](https://github.com/scriptscat/scriptcat/commit/7748088e63c1fc660b6a6ae5613cf04f9da99b8c)]

### 기타

- 🌐 베트남어 로케일 개선 및 확장 ([#661](https://github.com/scriptscat/scriptcat/issues/661)) [[6847a59](https://github.com/scriptscat/scriptcat/commit/6847a596c4b06c75e13594ef60e4b9dfa5718cf3)] (by @RenjiYuusei)
- 🌐 번역 수정 ([#635](https://github.com/scriptscat/scriptcat/issues/635)) [[19296de](https://github.com/scriptscat/scriptcat/commit/19296de6a3815e5965eb33401a55da9b2bd22bb4)] (by @cyfung1031)
- 🌐 온보딩 가이드 i18n 문제 수정 [#627](https://github.com/scriptscat/scriptcat/issues/627) [[9683f96](https://github.com/scriptscat/scriptcat/commit/9683f965400ab6a2bac15349aca4335911766eac)]

<a name="1.1.0-beta"></a>

## 1.1.0-beta (2025-08-18)

### 변경됨

- ⚡ .reduce 구문 사용 안 함 ([#619](https://github.com/scriptscat/scriptcat/issues/619)) [[71e97d5](https://github.com/scriptscat/scriptcat/commit/71e97d53fe152d5a8e479378366d077589df3d27)] (by @cyfung1031)
- ⚡ 스크립트 리소스 로딩 문제 최적화 [#612](https://github.com/scriptscat/scriptcat/issues/612) [[e206562](https://github.com/scriptscat/scriptcat/commit/e2065622c2a544579bc84f25f178d118d902ccba)]
- 🎨 스크립트 설치 페이지 최적화 ([#611](https://github.com/scriptscat/scriptcat/issues/611)) ([bbc76b1](https://github.com/scriptscat/scriptcat/commit/bbc76b1110d417a445b3cc065488fe11b7f2ddc2))
- 🐛 현재 창에서 열기 방법 수정 ([70be8a3](https://github.com/scriptscat/scriptcat/commit/70be8a303b98b73885dac950dc1b24aa8cbbe773))
- 🎨 utils.ts 최적화 ([#608](https://github.com/scriptscat/scriptcat/issues/608)) [[37bb763](https://github.com/scriptscat/scriptcat/commit/37bb763306c7e06df085022c2cb2fa9cc2788204)] (by @cyfung1031)
- 🎨 doThrow 및 TypeScript 구성 ([#606](https://github.com/scriptscat/scriptcat/issues/606)) [[4362802](https://github.com/scriptscat/scriptcat/commit/4362802fe3ba4482a283996cae9a424b23c69407)] (by @cyfung1031)
- ⚡ popup.ts 및 runtime.ts 개선(코드 최적화) ([#607](https://github.com/scriptscat/scriptcat/issues/607)) [[e48ca66](https://github.com/scriptscat/scriptcat/commit/e48ca66cc4f56ef981543c1f56b5e7eb0c2fa14a)] (by @cyfung1031)
- 🎨 getCurrentTab 관련 업데이트 ([#604](https://github.com/scriptscat/scriptcat/issues/604)) [[b4a9f2e](https://github.com/scriptscat/scriptcat/commit/b4a9f2efd48ee8cbacac6872ddb25c7d630bfd8a)] (by @cyfung1031)
- 🎨 TMessage TS 정의 ([#596](https://github.com/scriptscat/scriptcat/issues/596)) [[6aeb61d](https://github.com/scriptscat/scriptcat/commit/6aeb61da8ae7efdd718facacf90e4ed40ddb4caf)] (by @cyfung1031)
- 🎨 파비콘을 얻기 위해 Service Worker 사용 ([#594](https://github.com/scriptscat/scriptcat/issues/594)) [[727872d](https://github.com/scriptscat/scriptcat/commit/727872d47552e4c53b09be33b526f7f69baad4ec)] (by @cyfung1031)
- 🎨 메시지 표준화 ([#595](https://github.com/scriptscat/scriptcat/issues/595)) [[791608b](https://github.com/scriptscat/scriptcat/commit/791608b31855b1415f9ad496ef6c52fe1809984d)] (by @cyfung1031)
- 🎨 SystemConfigChange 코드 최적화 ([#593](https://github.com/scriptscat/scriptcat/issues/593)) [[041d985](https://github.com/scriptscat/scriptcat/commit/041d98523902319c88efdee3fa2ae40eab80aba8)] (by @cyfung1031)
- 🎨 EventEmitter 코드 최적화 ([#592](https://github.com/scriptscat/scriptcat/issues/592)) [[67543c4](https://github.com/scriptscat/scriptcat/commit/67543c473b303a1708ea83ca00e49d5d687d6a34)] (by @cyfung1031)
- 🎨 Cache 코드 최적화 ([#591](https://github.com/scriptscat/scriptcat/issues/591)) [[34e42ac](https://github.com/scriptscat/scriptcat/commit/34e42ac5f9ee504a90636d32c53def356c7d4495)] (by @cyfung1031)
- 🎨 새 스크립트 템플릿이 TM처럼 기본적으로 `@grant none` 사용 ([#589](https://github.com/scriptscat/scriptcat/issues/589)) [[e5a2d5d](https://github.com/scriptscat/scriptcat/commit/e5a2d5d3adafdcac2cf95b865550e395ba8443c7)] (by @cyfung1031)
- ⚡ new Date().getTime() → Date.now() ([#587](https://github.com/scriptscat/scriptcat/issues/587)) [[245ecbf](https://github.com/scriptscat/scriptcat/commit/245ecbfc23f1811aeee5671e48151e94b0ebc128)] (by @cyfung1031)

### 수정됨

- 🐛 `@connect` \*가 적용되지 않는 문제 수정 [#623](https://github.com/scriptscat/scriptcat/issues/623) [[76481c8](https://github.com/scriptscat/scriptcat/commit/76481c845b34414a7f15ed18ec61f7dff7eef091)]
- 🐛 단위 테스트 추가 및 `@exclude` 문제 수정 ([#618](https://github.com/scriptscat/scriptcat/issues/618)) [[0046bb7](https://github.com/scriptscat/scriptcat/commit/0046bb78800a2c46edaac785b8e9592327772a3b)] (by @cyfung1031)
- 🐛 일부 .user.js 링크가 스크립트를 설치할 수 없는 문제 수정 [#599](https://github.com/scriptscat/scriptcat/issues/599) [[ccd2639](https://github.com/scriptscat/scriptcat/commit/ccd2639858f0f3cde28f284376fe8ed998d935ae)]
- 🐛 새 스크립트 생성 실패 수정 [[d42d6e7](https://github.com/scriptscat/scriptcat/commit/d42d6e7d408a84674facf9ab0da6eac0e384502f)]
- 🐛 메타데이터 수정 ([#610](https://github.com/scriptscat/scriptcat/issues/610)) [[4d98cce](https://github.com/scriptscat/scriptcat/commit/4d98cce0ca1281cc58f551ea4e6700e340780d3f)] (by @cyfung1031)
- 🐛 팝업 배지 수정 ([#605](https://github.com/scriptscat/scriptcat/issues/605)) [[eff9230](https://github.com/scriptscat/scriptcat/commit/eff92309de99abb0cf48ef4727afaa113bc2fbb6)] (by @cyfung1031)
- 🐛 ScriptEditor.tsx 수정 ([#603](https://github.com/scriptscat/scriptcat/issues/603)) [[a9aadba](https://github.com/scriptscat/scriptcat/commit/a9aadba372b813c16bdc5f0aeb07c68981f48c63)] (by @cyfung1031)
- 🐛 코드 뷰어 &amp; 편집기 CSS 수정 ([#602](https://github.com/scriptscat/scriptcat/issues/602)) [[2e86785](https://github.com/scriptscat/scriptcat/commit/2e8678513efaccd42c8dc2aa89f8b76679aa8420)] (by @cyfung1031)
- 🐛 getFaviconFromDomain 동시성 문제 수정 ([#597](https://github.com/scriptscat/scriptcat/issues/597)) [[1872fe1](https://github.com/scriptscat/scriptcat/commit/1872fe165ab204b155a56f037c111d2d7776c2b9)] (by @cyfung1031)
- 🐛 다중 창 시나리오에서 탭 열기 오류 수정 [#586](https://github.com/scriptscat/scriptcat/issues/586) [[54c1da2](https://github.com/scriptscat/scriptcat/commit/54c1da29c2bd8bd8f5ef2d85b7aed8b334de296f)]
- 🐛 openerTabId 호환성 문제 수정 ([#586](https://github.com/scriptscat/scriptcat/issues/586)) [[b861fc8](https://github.com/scriptscat/scriptcat/commit/b861fc8620e53b885cad98db03f1dd10ec9d296c)] (by @cyfung1031)

### 기타

- 👷 pack.js 코드 최적화 ([#615](https://github.com/scriptscat/scriptcat/issues/615)) [[870dd9b](https://github.com/scriptscat/scriptcat/commit/870dd9bc6b7eff3eceefa915452e773ec0565180)] (by @cyfung1031)
