---
title: VSCode로 스크립트 개발하기
---

ScriptCat은 VSCode에서 사용자 스크립트를 작성할 수 있는 VSCode 확장 프로그램을 제공합니다. 저장 후 변경 사항이 브라우저의 ScriptCat에 자동으로 동기화됩니다 — 수동으로 복사하여 붙여넣을 필요가 없어 개발 효율성이 크게 향상됩니다.

## 사전 요구 사항

다음 두 도구를 설치해야 합니다:

1. **브라우저에 ScriptCat 확장 프로그램 설치** — 아직 설치하지 않았다면 [빠른 시작](/docs/use/use/) 가이드를 따라 설치하세요
2. **VSCode에 ScriptCat 확장 프로그램 설치** — VSCode 확장 프로그램 마켓플레이스에서 "[scriptcat-vscode](https://marketplace.visualstudio.com/items?itemName=CodFrm.scriptcat-vscode)"를 검색하거나 [GitHub 리포지토리](https://github.com/scriptscat/scriptcat-vscode)에서 다운로드하세요

## 연결 설정

설치가 완료되면 브라우저의 ScriptCat 확장 프로그램과 VSCode를 연결해야 합니다:

1. 브라우저에서 ScriptCat 아이콘을 클릭하여 관리 패널을 엽니다
2. **도구 > 개발자 도구**로 이동합니다
3. **VSCode 서비스 자동 연결**을 찾아 활성화하고 **연결**을 클릭합니다

연결되면 VSCode와 ScriptCat 사이에 실시간 채널이 설정됩니다.

## 스크립트 동기화

연결이 설정된 후 다음 두 가지 방법 중 하나로 스크립트를 동기화할 수 있습니다:

### 방법 1: 자동 감지 모드 (권장)

1. VSCode에서 `Ctrl + Shift + P` (Mac에서는 `Cmd + Shift + P`)를 눌러 명령 팔레트를 엽니다
2. `scriptcat.autoTarget`을 입력하고 선택합니다
3. 이후부터 `.user.js` 파일을 열거나 저장할 때마다 ScriptCat에 자동으로 동기화됩니다

### 방법 2: 특정 스크립트 모드

1. VSCode에서 `Ctrl + Shift + P` (Mac에서는 `Cmd + Shift + P`)를 눌러 명령 팔레트를 엽니다
2. `scriptcat.target`을 입력하고 선택합니다
3. 동기화할 스크립트 파일의 경로를 지정합니다

## 개발 워크플로우

설정이 완료되면 개발 워크플로우는 매우 간단합니다:

1. VSCode에서 `.user.js` 스크립트를 작성하거나 편집합니다
2. `Ctrl + S`를 눌러 파일을 저장합니다
3. 스크립트가 브라우저의 ScriptCat에 자동으로 동기화됩니다
4. 브라우저로 전환하여 페이지를 새로 고치면 결과를 볼 수 있습니다

전체 과정에서 수동 단계가 필요 없습니다 — 저장하면 즉시 적용됩니다.

## FAQ

### 연결이 안 되면 어떻게 하나요?

- 브라우저의 ScriptCat 확장 프로그램이 실행 중인지 확인하세요
- VSCode의 ScriptCat 확장 프로그램이 설치되고 활성화되었는지 확인하세요
- ScriptCat 관리 패널의 "개발자 도구" 페이지에서 연결 상태를 확인하세요

### 저장 후 스크립트가 업데이트되지 않나요?

- 파일 이름이 `.user.js`로 끝나는지 확인하세요
- `scriptcat.autoTarget` 또는 `scriptcat.target` 명령을 실행했는지 확인하세요
- VSCode 출력 패널에서 오류 메시지가 있는지 확인하세요

### VSCode를 다시 시작한 후 다시 연결해야 하나요?

"VSCode 서비스 자동 연결"이 활성화되어 있으면 VSCode는 다시 시작 후 자동으로 다시 연결됩니다 — 수동 단계가 필요 없습니다.
