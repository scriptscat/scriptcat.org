---
title: UserConfig
---

`==UserConfig==` 내부의 콘텐츠는 `==UserScript==` 다음에 오며 스크립트에 대한 사용자 구성 가능한 일부 옵션을 설명합니다. 구성은 [YAML](https://yaml.org/) 형식으로 작성됩니다:

```js
/* ==UserConfig==
group1:
  configA:                                # 키는 group.config 형식입니다. 예: 이 키는 group1.configA
    title: 구성 A                         # 구성의 제목
    description: 텍스트 유형 구성입니다    # 구성의 설명
    type: text                            # 옵션 유형; 생략하면 데이터에서 자동 감지됩니다
    default: 기본값                      # 구성의 기본값
    min: 2                                # 최소 2자
    max: 18                               # 최대 18자
    password: true                        # 비밀번호 필드로 표시
  configB:
    title: 구성 B
    description: 체크박스 구성입니다
    type: checkbox
    default: true
  configC:
    title: 구성 C
    description: 선택 목록 구성입니다
    type: select
    default: 1
    values: [1,2,3,4,5]
  configD:
    title: 구성 D
    description: 동적 선택 목록 구성입니다
    type: select
    bind: $cookies                       # 동적으로 바인딩된 값; 키는 $로 시작하고 값은 배열이어야 합니다
  configE:
    title: 구성 E
    description: 다중 선택 목록 구성입니다
    type: mult-select
    default: [1]
    values: [1,2,3,4,5]
  configF:
    title: 구성 F
    description: 동적 다중 선택 목록 구성입니다
    type: mult-select
    bind: $cookies
  configG:
    title: 구성 G
    description: 숫자 구성입니다
    type: number
    default: 1
    min: 10  # 최소값
    max: 16  # 최대값
    unit: min # 단위 라벨
  configH:
    title: 구성 H
    description: 긴 텍스트 구성입니다
    type: textarea
    default: 기본값
  configI:
    title: 구성 I
    description: 시간 유형 구성입니다
    type: time
    default: "12:00"
---
group2: # 두 번째 구성 그룹
  configX:
    title: 구성 X
    description: 텍스트 유형 구성입니다
    default: 기본값
 ==/UserConfig== */
```

여기에서 정의하면 사용자가 구성할 수 있도록 대시보드에 구성 버튼이 나타납니다. 개발자는 `GM_getValue`를 사용하여 구성 값을 읽으며 키는 `group.config` 형식으로 표현됩니다.

![](@site/docs/dev/config.assets/image-20210621213013631.png)
