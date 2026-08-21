---
title: UserConfig
---

Вміст усередині `==UserConfig==` йде після `==UserScript==` і описує деякі параметри скрипта, які може налаштовувати користувач. Конфігурація записується у форматі [YAML](https://yaml.org/):

```js
/* ==UserConfig==
group1:
  configA:                                # ключ має формат group.config, напр. цей ключ є group1.configA
    title: Конфігурація A                 # назва конфігурації
    description: Це конфігурація текстового типу # опис конфігурації
    type: text                            # тип опції; визначається автоматично з даних, якщо пропущено
    default: значення за замовчуванням    # значення конфігурації за замовчуванням
    min: 2                                # мінімум 2 символи
    max: 18                               # максимум 18 символів
    password: true                        # позначити як поле пароля
  configB:
    title: Конфігурація B
    description: Це конфігурація-прапорець
    type: checkbox
    default: true
  configC:
    title: Конфігурація C
    description: Це конфігурація-список вибору
    type: select
    default: 1
    values: [1,2,3,4,5]
  configD:
    title: Конфігурація D
    description: Це динамічна конфігурація-список вибору
    type: select
    bind: $cookies                       # динамічно прив'язані значення; ключ починається з $, і значення має бути масивом
  configE:
    title: Конфігурація E
    description: Це конфігурація-список множинного вибору
    type: mult-select
    default: [1]
    values: [1,2,3,4,5]
  configF:
    title: Конфігурація F
    description: Це динамічна конфігурація-список множинного вибору
    type: mult-select
    bind: $cookies
  configG:
    title: Конфігурація G
    description: Це числова конфігурація
    type: number
    default: 1
    min: 10  # мінімальне значення
    max: 16  # максимальне значення
    unit: min # позначка одиниці
  configH:
    title: Конфігурація H
    description: Це конфігурація довгого тексту
    type: textarea
    default: значення за замовчуванням
  configI:
    title: Конфігурація I
    description: Це конфігурація часового типу
    type: time
    default: "12:00"
---
group2: # друга група конфігурацій
  configX:
    title: Конфігурація X
    description: Це конфігурація текстового типу
    default: значення за замовчуванням
 ==/UserConfig== */
```

Після визначення тут у панелі керування з'являється кнопка конфігурації для налаштування користувачем. Розробники використовують `GM_getValue`, щоб прочитати значення конфігурації, де ключ виражається як `group.config`.

![](@site/docs/dev/config.assets/image-20210621213013631.png)
