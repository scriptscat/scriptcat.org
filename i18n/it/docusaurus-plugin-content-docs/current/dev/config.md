---
title: UserConfig
---

Il contenuto all'interno di `==UserConfig==` va dopo `==UserScript==`, e descrive alcune opzioni configurabili dall'utente per lo script. La configurazione è scritta in formato [YAML](https://yaml.org/):

```js
/* ==UserConfig==
group1:
  configA:                                # la chiave è group.config, ad esempio questa chiave è group1.configA
    title: Config A                       # titolo della configurazione
    description: Questa è una configurazione di tipo testo # descrizione della configurazione
    type: text                            # tipo di opzione; rilevato automaticamente dai dati se omesso
    default: valore predefinito            # valore predefinito della configurazione
    min: 2                                # minimo 2 caratteri
    max: 18                               # massimo 18 caratteri
    password: true                        # contrassegna come campo password
  configB:
    title: Config B
    description: Questa è una configurazione checkbox
    type: checkbox
    default: true
  configC:
    title: Config C
    description: Questa è una configurazione lista di selezione
    type: select
    default: 1
    values: [1,2,3,4,5]
  configD:
    title: Config D
    description: Questa è una configurazione lista di selezione dinamica
    type: select
    bind: $cookies                       # valori vincolati dinamicamente; la chiave inizia con $, e il valore deve essere un array
  configE:
    title: Config E
    description: Questa è una configurazione lista di selezione multipla
    type: mult-select
    default: [1]
    values: [1,2,3,4,5]
  configF:
    title: Config F
    description: Questa è una configurazione lista di selezione multipla dinamica
    type: mult-select
    bind: $cookies
  configG:
    title: Config G
    description: Questa è una configurazione numerica
    type: number
    default: 1
    min: 10  # valore minimo
    max: 16  # valore massimo
    unit: min # etichetta unità
  configH:
    title: Config H
    description: Questa è una configurazione testo lungo
    type: textarea
    default: valore predefinito
  configI:
    title: Config I
    description: Questa è una configurazione di tipo ora
    type: time
    default: "12:00"
---
group2: # secondo gruppo di configurazione
  configX:
    title: Config X
    description: Questa è una configurazione di tipo testo
    default: valore predefinito
 ==/UserConfig== */
```

Una volta definita qui, compare un pulsante di configurazione nella dashboard per l'utente da configurare. Gli sviluppatori usano `GM_getValue` per leggere il valore della configurazione, con la chiave espressa come `group.config`.

![](@site/docs/dev/config.assets/image-20210621213013631.png)
