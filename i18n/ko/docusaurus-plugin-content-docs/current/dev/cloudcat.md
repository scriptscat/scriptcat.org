---
title: 클라우드 실행
---

> 클라우드에서 실행하는 여러 방법이 제공됩니다. 자세한 내용은 [실행 환경](#running-environments)을 참조하세요. 또한 [CloudCat](https://github.com/scriptscat/cloudcat)은 백그라운드 스크립트를 클라우드에서 실행하기 위한 서비스입니다 — 아직 개발 중인 FAAS 플랫폼입니다.

⚠ 참고 ⚠, 클라우드에 업로드되면 예약 스크립트 표현식에서 `once`의 의미가 변경됩니다: 실행 시 `once` 이전의 시간이 최소값으로 대체됩니다.

예를 들어:

* `* * once * *` => `0 0 * * *`: 하루에 한 번 실행되며, 매일 00:00에 실행됩니다
* `* 1-23 once * *` => `0 1 * * *`: 매일 1:00~23:00 사이에 한 번 실행되며, 매일 01:00에 실행됩니다
* `* 1,3,5 once * *` => `0 1 * * *`: 매일 1:00, 3:00 또는 5:00에 한 번 실행되며, 매일 01:00에 실행됩니다
* `* */4 once * *` => `0 0 * * *`: 매일 4시간마다 한 번 실행되며, 매일 00:00에 실행됩니다
* `* 1-23/4 once * *` => `0 1 * * *`: 매일 1:00~23:00 사이에 4시간마다 한 번 실행되며, 매일 01:00에 실행됩니다
* `* 10 once * *` => `0 10 * * *`: 매일 10:00에 한 번 실행되며, 매일 10시 00분에 실행됩니다
* `* * * once *` => `0 0 1 * *`: 한 달에 한 번 실행되며, 매월 1일 00:00에 실행됩니다

## 추가 CloudCat 설명 값

참조 스크립트: [Bilibili 자동 출석](https://scriptcat.org/script-show-page/48)

### cloudCat

이 속성을 선언하면 스크립트가 `CloudCat`를 통해 실행될 수 있습니다. 스크립트에 이 옵션이 있으면 스크립트 목록에 클라우드 실행 버튼이 나타납니다. 클릭하면 실행 방법을 선택할 수 있습니다 — [실행 환경](#running-environments)을 참조하세요.

![image-20220203225847694](@site/docs/dev/cloudcat.assets/image-20220203225847694.png)

### cloudServer

> cloudCat과 관련, 아직 구현되지 않음

기본 cloudCat 서버 주소


### exportValue

클라우드로 내보낼 Values를 설명합니다. 여러 번 선언할 수 있습니다.

```ts
// @exportValue key1,key2,key3
// @exportValue key4,key5,key6
```

### exportCookie

클라우드로 내보낼 쿠키를 설명합니다. 여러 번 선언할 수 있습니다. 매개변수는 `GM_cookie`의 `CookieDetails`로 설명됩니다. 예:

```ts
// 다음은 https://docs.scriptcat.org/docs/use/에서 cookie1이라는 쿠키를 내보냅니다
// @exportCookie url=https://docs.scriptcat.org/docs/use;name=cookie1

// 이는 scriptcat.org 도메인의 모든 쿠키를 내보냅니다
// @exportCookie domain=scriptcat.org

// 사용 가능한 모든 매개변수:
// @exportCookie domain=scriptcat.org;url=https://docs.scriptcat.org/docs/use;name=cookie1;path=/docs/use;secure=true;session=true
```

## API 지원 변경 사항
> 현재 다음 API만 지원됩니다. 달리 명시되지 않는 한 원래 API와 동일하게 동작합니다.

### GM_xmlhttpRequest


### GM_notification


### GM_log

### GM_getValue

현재 `@exportValue`로 내보낸 Values 가져오기만 지원합니다. set/delete/list 및 기타 메서드는 지원되지 않습니다.

## 실행 환경 {#running-environments}

### 로컬

zip 패키지를 내보냅니다. 폴더에 압축을 푼 후 다음 명령을 실행하여 로컬에서 실행합니다 (로컬 Node.js 환경 필요):

```bash
npm i
node index.js
```


### Tencent Cloud

먼저 [**액세스 키**](https://console.cloud.tencent.com/cam/capi)에서 Tencent Cloud 키를 생성하세요 — 하위 계정을 사용하는 경우 클라우드 함수 권한을 부여했는지 확인하세요. 그런 다음 [**함수 서비스**](https://console.cloud.tencent.com/scf/list)에서 서비스를 활성화하세요. 매월 일정량의 무료 사용량이 포함됩니다. 지역은 기본적으로 상하이이며 필요에 따라 조정하세요. 업로드를 클릭하면 `@crontab`을 기반으로 함수를 예약 실행하는 예약 트리거가 자동으로 생성됩니다.

![image-20220203224956248](@site/docs/dev/cloudcat.assets/image-20220203224956248.png)
