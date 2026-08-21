---
title: Script de Fundo
---

Scripts de fundo são adequados para scripts que precisam continuar executando continuamente. Scripts de fundo são um tipo de script específico do ScriptCat; rodam em um sandbox e não podem acessar o DOM. Podem ser desenvolvidos usando as mesmas GM APIs do Tampermonkey, e as notas de compatibilidade são indicadas na documentação.

## Script de Fundo (`@background`)

Um script de fundo é declarado com o atributo `@background`. Permite que o script continue rodando em segundo plano após ser habilitado ou o navegador ser iniciado.

## Script Agendado (`@crontab`)

> Um script agendado é um tipo de script de fundo adequado para tarefas que precisam **rodar repetidamente em um ciclo de tempo**.

Um script agendado é declarado com o atributo `@crontab`. Suporta agendamento em nível de minuto e segundo, e fornece a sintaxe estendida do ScriptCat `once` / `once(...)` para evitar executar mais de uma vez dentro do mesmo ciclo de tempo.

⚠️ Notas:

* Em um único script, **apenas o primeiro `@crontab` tem efeito**
* Recomenda-se que o **tempo de execução individual + tempo de retry** não exceda o intervalo do cron, caso contrário as execuções podem se sobrepor

## Notas sobre Expressões Cron

A implementação de cron do ScriptCat é baseada no [**node-cron**](https://github.com/kelektiv/node-cron/), com uma pequena extensão sobre a sintaxe cron padrão.

### Formato da Expressão

#### Formato padrão de 5 campos (Recomendado)

```text
minuto hora dia mês dia_da_semana
```

#### Formato estendido de 6 campos (Não recomendado)

```text
segundo minuto hora dia mês dia_da_semana
```

> ⚠️ O formato de 6 campos não é recomendado
> Ambientes do navegador não podem garantir precisão de segundo e aumentam a sobrecarga de desempenho.

### Sintaxe Disponível por Campo

| Sintaxe | Significado | Exemplo |
|---|---|---|
| `*` | Qualquer valor | `*` (cada minuto/hora) |
| number | Valor específico | `5` (o quinto minuto) |
| `a,b,c` | Múltiplos valores discretos | `1,15,30` |
| `a-b` | Intervalo contíguo | `10-23` |
| `*/n` | A cada n unidades | `*/5` |
| `a-b/n` | Intervalo com passo | `10-50/10` |

#### Regras do Dia da Semana

* `1–6`: Segunda a Sábado
* `0` ou `7`: Domingo

## A Sintaxe Estendida `once`

### O que Significa `once`

Usar `once` em uma expressão cron significa:

> **Dentro do ciclo de tempo atual, apenas permitir uma execução bem-sucedida**

Mesmo que pontos de tempo posteriores dentro do mesmo ciclo ainda correspondam à regra do cron, o script não será executado novamente.

### `once` vs. `once(...)`

| Sintaxe | Valor cron subjacente | Descrição |
|---|---|---|
| `once` | `*` (qualquer valor) | Roda na primeira correspondência dentro do ciclo, sem um tempo específico |
| `once(expr)` | `expr` | Roda apenas em tempos que correspondem a `expr` dentro do ciclo, e apenas uma vez |

### A Posição de `once` = o Ciclo de Tempo que Restringe

Onde `once` / `once(...)` for colocado, significa "rodar apenas uma vez dentro dessa granularidade de tempo".

| Posição de `once` | Comportamento |
|---|---|
| Campo minuto | Roda apenas uma vez por minuto |
| Campo hora | Roda apenas uma vez por hora |
| Campo dia | Roda apenas uma vez por dia |
| Campo mês | Roda apenas uma vez por mês |
| Campo dia da semana | Roda apenas uma vez por semana |

## Exemplos de `@crontab`

### Comuns

```js
//@crontab * * * * *        // uma vez por minuto
//@crontab * * * * * *      // uma vez por segundo (não recomendado)
//@crontab 0 */6 * * *      // a cada 6 horas no minuto 0
//@crontab 15 */6 * * *     // a cada 6 horas no minuto 15
//@crontab * once * * *     // no máximo uma vez por hora
//@crontab * * once * *     // no máximo uma vez por dia
//@crontab * 10 once * *    // apenas uma vez dentro da hora 10:00 cada dia
//@crontab * */4 once * *   // no máximo uma vez a cada 4 horas cada dia
```

### Avançados

```js
//@crontab * 1,3,5 once * *       // uma vez às 1:00, 3:00 ou 5:00 cada dia
//@crontab * 10-23 once * *       // uma vez entre 10:00 e 23:59 cada dia
//@crontab * once 13 * *          // uma vez por hora no dia 13 de cada mês
//@crontab * once(9-17) * * *     // uma vez por hora entre 9:00 e 17:00 cada dia
//@crontab 0,30 once * * *        // o minuto 0 ou 30 é correspondido primeiro; sem repetição naquela hora
//@crontab * 9-18 once * *        // apenas uma vez entre 9:00 e 18:00 cada dia
```

## Recomendações de Uso

### Bons Usos para `once`

* Tarefas que **precisam rodar apenas uma vez** por dia/hora
* Scripts de verificação de status, sincronização e relatórios

### Não Recomendado para `once`

* Tarefas que devem rodar em um momento preciso
* Scripts cujo tempo de execução pode exceder significativamente o intervalo do cron

## Testando Expressões Cron

Ao testar uma expressão cron, por favor **substitua temporariamente `once` / `once(...)` pelo seu valor subjacente**:

* `once` → `*`
* `once(expr)` → `expr`

Ferramentas recomendadas:

* [crontab.guru](https://crontab.guru/)
* [tool.lu cron calculator](https://tool.lu/crontab/)

## Registros

Na página de lista de scripts, passando o mouse sobre a `coluna de status de execução` é exibido um tooltip com o status de execução do script;
clicando é exibido o conteúdo do registro impresso via `GM_log`.

![](@site/docs/dev/background.assets/image-20210621214143661.png)

![](@site/docs/dev/background.assets/image-20210621214124685.png)

## Depuração de Scripts

Scripts de fundo podem ser depurados diretamente da página do editor de scripts, mas tem limitações:

* `value` não sincroniza corretamente
* Menus `registerMenu` não são acionados corretamente

![](@site/docs/dev/background.assets/image-20210903141601057.png)

Para depurar o ambiente de execução real, habilite o **Modo Desenvolvedor** nas configurações da extensão, depois abra a página `background.html` da extensão para depurar.

Erros em tempo de execução também podem ser vistos no registro de execução.

![image-20210903144155450](@site/docs/dev/background.assets/image-20210903144155450.png)

## Promise

O padrão seguinte é altamente recomendado, pois também permite que o gerenciador de scripts monitore a execução.
Se o script realizar qualquer operação assíncrona, **deve retornar um `Promise`**.

```ts
// ==UserScript==
// @name         Script de Fundo
// @namespace    wyz
// @version      1.0.0
// @author       wyz
// @background
// ==/UserScript==
return new Promise((resolve, reject) => {
  if (Math.round((Math.random() * 10) % 2)) {
    resolve("ok");
  } else {
    reject("error");
  }
});
```

```js
// ==UserScript==
// @name         Script agendado que roda uma vez por dia
// @namespace    wyz
// @version      1.0.0
// @author       wyz
// @crontab      * * once * *
// ==/UserScript==
return new Promise((resolve, reject) => {
  if (Math.round((Math.random() * 10) % 2)) {
    resolve("ok");
  } else {
    reject("error");
  }
});
```

```js
// ==UserScript==
// @name         Chamar uma API
// @namespace    wyz
// @version      1.0.0
// @author       wyz
// @crontab      * * once * *
// ==/UserScript==
return new Promise((resolve, reject) => {
  GM_xmlhttpRequest({
    url: "https://bbs.tampermonkey.net.cn/",
    onload() {
      resolve("ok");
    },
    onerror() {
      reject("error");
    },
  });
});
```

Certifique-se de chamar `resolve` / `reject` apenas depois que a lógica do script tenha realmente terminado.
Uma vez chamado, o gerenciador considera a execução do script completa, e quaisquer operações GM subsequentes não terão mais efeito.

## Retry de Erro

Scripts de fundo do ScriptCat suportam retry de erro.
Quando um script falha, pode fazer `reject` com um `CATRetryError` para acionar um retry.

* Intervalo mínimo de retry: 5 segundos
* Evite conflitos com o próprio tempo de execução do script, caso contrário execuções duplicadas podem ocorrer

```js
// ==UserScript==
// @name         Exemplo de retry
// @namespace    https://bbs.tampermonkey.net.cn/
// @version      0.1.0
// @description  tente conquistar o mundo!
// @author       You
// @crontab      * * once * *
// @grant        GM_notification
// ==/UserScript==

return new Promise((resolve, reject) => {
  GM_notification({
    title: "retry",
    text: "Repetindo em 10 segundos",
  });
  reject(new CATRetryError("xxx error", 10));
});
```
