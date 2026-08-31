---
title: 메타데이터 블록
---

`==UserScript==` 내부의 콘텐츠는 스크립트에 필요한 권한, 스크립트에 대한 정보 등을 설명합니다. 스크립트의 맨 처음에 위치합니다.

```js
// ==UserScript==
// @name         New Userscript
// @namespace    https://bbs.tampermonkey.net.cn/
// @version      0.1.0
// @description  try to take over the world!
// @author       You
// @crontab      * * once * *
// ==/UserScript==
```

## 주요 값

### name

스크립트 이름

### namespace

스크립트 네임스페이스. `name + namespace`가 스크립트의 고유성을 결정합니다.

### version

스크립트의 버전. 버전 변경이 감지되면 사용자에게 업데이트하라는 메시지가 표시되도록 [시맨틱 버저닝](https://semver.org/)을 따르는 것이 좋습니다.

### description

스크립트에 대한 자세한 설명

### author

스크립트 작성자

### run-at

스크립트가 실행되는 시점

| 값          | 실행 시점                                                              | 지원 시작 버전        |
| -------------- | ------------------------------------------------------------------ | ---------------------- |
| document-start | URL이 프런트엔드에서 일치하는 즉시 스크립트를 페이지에 주입합니다 | v0.3.0          |
| document-end   | DOM 로딩이 완료된 후 스크립트를 주입합니다. 이 시점에 페이지 스크립트와 이미지가 아직 로딩 중일 수 있습니다 | v0.3.0 |
| document-idle  | 모든 콘텐츠 로딩이 완료된 후 스크립트를 주입합니다         | v0.3.0                  |
| document-body  | 페이지에 `body` 요소가 생긴 후에만 스크립트가 주입됩니다     | v0.6.2                  |
| document-menu  | 마우스 오른쪽 버튼 클릭 시 메뉴를 표시합니다. 스크립트 실행 시 스크립트 이름을 메뉴 이름으로 사용합니다 | v0.3.4-v0.9.4 (🔥 제거됨) |

메뉴 아이콘은 [유니코드 기호](https://unicode-table.com/en/)와 [이모지](https://www.emojiall.com/en-US/)를 참조할 수 있습니다.

### run-in

스크립트가 주입되는 환경을 지정합니다: 일반 탭은 `@run-in normal-tabs`, 시크릿 탭은 `@run-in incognito-tabs`.

### early-start (v1.1.0+)

`run-at`이 `document-start`일 때 스크립트는 가능한 한 빨리 실행되지만, 페이지보다 빠르게 로드되는 것을 보장할 수는 없습니다.

`@run-at document-start`를 정의한 후 `@early-start`를 추가하여 스크립트가 페이지보다 빠르게 로드되도록 할 수 있습니다: [예시](https://github.com/scriptscat/scriptcat/blob/main/example/early-start.js)

### inject-into

:::tip

콘텐츠 스크립트 환경(`content`)에서 `unsafeWindow`는 환경 자체의 현재 `window`만 가리키며 페이지의 `window`에 접근할 수 없습니다.

ScriptCat은 `content` 또는 `page`로 주입할지 결정하기 위해 CSP 제한을 자동으로 확인하는 것을 지원하지 않습니다 (즉, Tampermonkey의 `@inject-into auto`).

:::

스크립트가 주입되는 위치를 지정합니다. `page`와 `content`를 지원하며 기본값은 `page`입니다.

- `page`: 스크립트가 페이지 환경에 주입되며 `unsafeWindow`를 사용하여 페이지의 `window`와 `DOM`에 접근할 수 있습니다
- `content`: 스크립트가 콘텐츠 스크립트 환경에 주입되며 페이지의 `window` 객체에 직접 접근할 수 없지만 페이지 `DOM`에 접근할 수 있고 `CSP`의 적용을 받지 않습니다

### storageName 🧪

`Value`의 저장 공간. 동일한 `storageName` 아래의 데이터는 스크립트 간에 공유되고 통신할 수 있습니다. ScriptCat 전용입니다.

### background

이 스크립트를 백그라운드 환경에서 실행해야 하는 백그라운드 스크립트로 표시합니다. 자세한 내용은 [백그라운드 스크립트](./background.md#background-script-background)를 참조하세요.

### crontab

스크립트를 cron 표현식 값이 필요한 예약 스크립트로 표시합니다. cron 표현식은 하나만 존재할 수 있으며 백그라운드 환경에서 해당 일정에 따라 실행됩니다. 자세한 내용은 [예약 스크립트](./background.md#scheduled-script-crontab)를 참조하세요.

### match

`match`로 일치하는 URL에서만 스크립트가 실행됩니다. [Match 패턴](https://developer.chrome.com/docs/extensions/mv3/match_patterns/)을 따릅니다. `match`에서 `*`는 와일드카드이고, `tld`는 최상위 도메인과 일치하며, `*.`로 시작하는 도메인은 `xxx.com`과도 일치합니다:

| 값                             | 올바른 예                                                                                                                          | 잘못된 예                          |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| `http://scriptcat.org/doc/match`  | `http://scriptcat.org/doc/match`                                                                                                            | `http://scriptcat.org/doc/runAt`         |
| `*://*/param?*`                   | `https://scriptcat.org/param` \| `http://scriptcat.org/param?search=tampermonkey`                                                            | `https://scriptcat.org/test/param`       |
| `*://*/prefix*suffix`             | `http://scriptcat.org/prefix/suffix` \| `http://scriptcat.org/prefix/mid/suffix` \| `http://scriptcat.org/prefixsuffix`                      | `http://scriptcat.org/prefix/suffix/end` |
| `http*://scriptcat.org/*`         | `https://scriptcat.org/` \| `https://scriptcat.org/doc` \| `http://scriptcat.org/doc/match` \| `http://scriptcat.org/param?search=tampermonkey` | `https://doc.scriptcat.org/`            |
| `http*://scriptcat.org/doc/*`     | `https://scriptcat.org/doc` \| `http://scriptcat.org/doc/match`                                                                              | `http://scriptcat.org/param?search=tampermonkey` |
| `http*://scriptcat.tld/doc/*`     | `https://scriptcat.cn/doc` \| `http://scriptcat.net.cn/doc/match`                                                                            | `http://google.com/param?search=tampermonkey` |
| `http*://*.scriptcat.org/doc/*`   | `https://scriptcat.cn/doc` \| `http://www.scriptcat.net.cn/doc/match`                                                                        | `http://google.com/param?search=tampermonkey` |

### include

퍼지 일치를 위해 `\*`를 지원하며 비표준 URL을 허용합니다

### exclude

일치하지 않아야 하는 URL. `include`와 동일한 표현식 구문을 사용합니다

### grant

API 권한을 요청합니다 — API는 요청된 후에만 호출할 수 있습니다. 권한 목록: [API 문서](./api.md) 및 [CAT API 문서](./cat-api.md)를 참조하세요.

두 가지 특수 값:

- **none**: 스크립트가 샌드박스 환경에서 실행되지 않고 페이지 환경에서 직접 실행됩니다. 이 환경에서는 GM API를 사용할 수 없지만 페이지의 `window` 객체에 직접 접근할 수 있습니다.
- **unsafeWindow**: 샌드박스 환경에서 페이지의 `window` 객체에 접근해야 하는 경우 `unsafeWindow`를 사용하세요. (Tampermonkey는 이를 선언할 필요가 없습니다 — 호환성을 위해서만 유지되며, 확실히 깔끔하지는 않습니다.)

### connect

사이트에 대한 액세스 권한을 요청합니다. `GM_cookie` 및 `GM_xmlhttpRequest`를 참조하세요. `native` 모드의 `GM_download`도 `@connect`를 존중합니다 (선언되지 않은 호스트는 Tampermonkey와 달리 확인 프롬프트를 트리거합니다)

### resource

리소스 파일을 포함합니다. `@resource`를 선언한 후 `GM_getResourceText`/`GM_getResourceURL`을 사용하여 정보를 검색할 수 있습니다.

```js
// @resource icon https://bbs.tampermonkey.net.cn/favicon.ico
// @resource html https://bbs.tampermonkey.net.cn/
// @resource xml https://bbs.tampermonkey.net.cn/sitemap.xml
// 리소스 무결성 검증 추가
// @resource icon https://bbs.tampermonkey.net.cn/favicon.ico#md5-xxx,sha256-xxx
```

### require

외부 JS 파일을 포함합니다. [리소스 무결성 검증](#resource-integrity-verification)을 지원합니다

### require-css

외부 CSS 파일을 포함합니다. [리소스 무결성 검증](#resource-integrity-verification)을 지원합니다

### noframes

스크립트가 `<frame>` 내부에서 실행되지 않도록 표시합니다

### definition

`.d.ts` 파일의 참조 주소. 편집기 자동 완성 힌트를 활성화합니다

### antifeature

스크립트 마켓플레이스와 관련이 있습니다. 원치 않는 기능은 이 설명 값으로 표시해야 합니다. 예:

```js
// @antifeature ads This script has ads
// @antifeature referral-link This script modifies or redirects to the author's referral link
```

## 추가 설명 값

### license

현재 스크립트의 오픈소스 라이선스

### updateURL

업데이트 확인이 적용되려면 원격 스크립트에 `@version` 태그가 있어야 합니다.

스크립트가 업데이트를 확인하는 데 사용하는 링크. 설정하지 않으면 링크의 `user.js => meta.js`로 기본 설정되며 `user.js`가 없으면 현재 링크를 사용합니다.

`@updateURL`이 구성되면 `@updateURL`이 적용되려면 `@downloadURL`도 구성되어야 합니다.

### downloadURL

스크립트 업데이트의 다운로드 주소

### supportURL

지원 사이트, 버그 보고 페이지

### homepage, homepageURL, website

스크립트 홈페이지

### source

스크립트 소스 코드 페이지

### icon, iconURL, defaulticon

스크립트 아이콘

### icon64, icon64URL

64x64 크기의 스크립트 아이콘

### copyright

스크립트 저작권 정보

### tag

스크립트 태그. 쉼표 또는 공백으로 구분됩니다

### compatible

GreasyFork에 표시되는 호환성 정보

### scriptUrl

구독 스크립트가 참조하는 사용자 스크립트 URL

### unwrap

사용자 스크립트가 샌드박스 래핑을 우회하고 페이지의 네이티브 전역 범위에서 직접 주입되고 실행되도록 합니다. 스크립트는 페이지의 실제 전역 변수에 직접 접근하고 수정할 수 있지만 `GM.*`과 같은 사용자 스크립트 권한 API는 사용할 수 없습니다. 일반적으로 네이티브 페이지 스크립트와의 깊은 상호 작용이 필요한 시나리오 또는 기존 일반 페이지 스크립트를 마이그레이션할 때 사용됩니다.

### cloudCat

스크립트를 CloudCat 클라우드 스크립트 패키지로 내보낼 수 있도록 표시합니다 (SC 전용)

### cloudServer

스크립트가 사용하는 CloudCat 클라우드 서비스

### exportValue

클라우드 스크립트로 내보낼 때 내보낼 스크립트 저장 값

### exportCookie

클라우드 스크립트로 내보낼 때 내보낼 쿠키

### 참고

### 리소스 무결성 검증 {#resource-integrity-verification}

- md5, sha1, sha256, sha384 또는 sha512를 사용하여 리소스를 변조로부터 검증합니다. 여러 검증 방법은 `;` 또는 `,`로 구분할 수 있습니다.
- [W3C 권장 사항](https://w3c.github.io/webappsec-subresource-integrity/#hash-collision-attacks)에 따라 md5와 sha1은 권장되지 않습니다. sha384 이상의 강력한 해시 알고리즘을 사용하세요.

예:

```js
// @require https://cdn.jsdelivr.net/npm/darkmode-js@1.5.7/lib/darkmode-js.min.js#md5-d55836f30c097da753179f82fa6f108f,sha256-a476ab8560837a51938aa6e1720c8be87c2862b6221690e9de7ffac113811a90
```
