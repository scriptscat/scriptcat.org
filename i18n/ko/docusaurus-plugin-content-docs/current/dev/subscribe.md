---
title: 구독 모드
---

파일은 `UserScript` 대신 `UserSubscribe`로 시작해야 합니다. 설치 링크는 `user.sub.js` 확장자를 사용해야 하며 `https` 링크여야 합니다.

구독 스크립트는 설치 시 사용자가 구독을 확인할 수 있도록 설치 대화 상자만 표시합니다. 이후 업데이트는 자동이며, 업데이트 대화 상자는 `connect` 권한이 변경된 경우에만 다시 표시됩니다.

단일 구독 스크립트는 여러 스크립트의 설치 링크를 설명할 수 있습니다. 구독 모드로 설치된 스크립트는 확인 대화 상자 없이 자동으로 설치되며, 설치된 스크립트는 스크립트 목록에 계속 표시됩니다 — 그러나 `connect` 권한은 스크립트 자체의 `connect` 권한이 아닌 구독에 선언된 `connect`를 사용합니다.

```js
// ==UserSubscribe==
// @name         xxx
// @description  Subscribe to the xxx script series
// @version      0.1.0
// @author       You
// @connect      www.baidu.com
// @scriptUrl    https://script.tampermonkey.net.cn/48.user.js
// @scriptUrl    https://script.tampermonkey.net.cn/49.user.js
// ==/UserSubscribe==
```

## 구독 업데이트 및 스크립트 업데이트

사용자가 구성한 `업데이트 간격`에 따라 ScriptCat은 구독 링크의 업데이트를 주기적으로 확인합니다. 이를 적용하려면 `version`이 구성되어 있어야 합니다.

각 구독 업데이트 또는 변경은 스크립트 링크를 현재 설치된 스크립트와 비교합니다: 새 구독에 더 이상 없는 스크립트는 제거되고 새로 추가된 스크립트는 자동으로 설치됩니다. 스크립트 업데이트는 스크립트 자체의 `version`을 따르며 일반 설치된 스크립트와 동일한 업데이트 로직을 사용합니다.

## 자동 설치 및 업데이트

구독된 스크립트는 자동으로 설치되고 업데이트됩니다 — 구독에서 스크립트를 추가, 제거 또는 업데이트하면 알림만 표시되고 사용자 확인이 필요하지 않습니다. 이 자동 업데이트 메커니즘 때문에 신뢰할 수 있는 소스에만 구독하세요.


## metadata

구독 스크립트 내에서 일부 메타데이터 필드의 의미가 변경됩니다.

### name

구독 이름 (구독 목록에서 직접 편집할 수도 있음)

### description

구독 설명. 구독이 무엇을 위한 것인지 설명합니다

### version

구독 버전. 생략하면 대신 구독 스크립트의 콘텐츠가 변경되었는지 여부로 업데이트가 트리거됩니다.

### connect

사이트에 대한 액세스 권한을 요청합니다. `GM_cookie` 및 `GM_xmlhttpRequest`를 참조하세요. 구독 모드로 설치된 스크립트의 경우 `connect`는 구독의 `connect`로 재정의됩니다.

### scriptUrl

구독에 필요한 스크립트 설치 링크
