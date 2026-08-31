---
title: UserConfig
---

O conteúdo dentro de `==UserConfig==` vai depois de `==UserScript==`, e descreve algumas opções configuráveis pelo usuário para o script. A configuração é escrita no formato [YAML](https://yaml.org/):

```js
/* ==UserConfig==
group1:
  configA:                                # a chave é group.config, por exemplo esta chave é group1.configA
    title: Config A                       # título da configuração
    description: Esta é uma configuração de tipo texto # descrição da configuração
    type: text                            # tipo de opção; detectado automaticamente dos dados se omitido
    default: valor padrão                 # valor padrão da configuração
    min: 2                                # mínimo 2 caracteres
    max: 18                               # máximo 18 caracteres
    password: true                        # marcar como campo de senha
  configB:
    title: Config B
    description: Esta é uma configuração de caixa de seleção
    type: checkbox
    default: true
  configC:
    title: Config C
    description: Esta é uma configuração de lista de seleção
    type: select
    default: 1
    values: [1,2,3,4,5]
  configD:
    title: Config D
    description: Esta é uma configuração de lista de seleção dinâmica
    type: select
    bind: $cookies                       # valores vinculados dinamicamente; a chave começa com $, e o valor deve ser um array
  configE:
    title: Config E
    description: Esta é uma configuração de lista de seleção múltipla
    type: mult-select
    default: [1]
    values: [1,2,3,4,5]
  configF:
    title: Config F
    description: Esta é uma configuração de lista de seleção múltipla dinâmica
    type: mult-select
    bind: $cookies
  configG:
    title: Config G
    description: Esta é uma configuração numérica
    type: number
    default: 1
    min: 10  # valor mínimo
    max: 16  # valor máximo
    unit: min # rótulo da unidade
  configH:
    title: Config H
    description: Esta é uma configuração de texto longo
    type: textarea
    default: valor padrão
  configI:
    title: Config I
    description: Esta é uma configuração de tipo hora
    type: time
    default: "12:00"
---
group2: # segundo grupo de configuração
  configX:
    title: Config X
    description: Esta é uma configuração de tipo texto
    default: valor padrão
 ==/UserConfig== */
```

Uma vez definido aqui, um botão de configuração aparece no painel para o usuário configurar. Os desenvolvedores usam `GM_getValue` para ler o valor da configuração, com a chave expressa como `group.config`.

![](@site/docs/dev/config.assets/image-20210621213013631.png)
