---
title: Execução na nuvem
---

> Várias maneiras de executar na nuvem são fornecidas; consulte [Ambientes de execução](#running-environments) para detalhes. Além disso, [CloudCat](https://github.com/scriptscat/cloudcat) é um serviço para executar scripts de fundo na nuvem — uma plataforma FAAS que ainda está em desenvolvimento.

⚠ Por favor, note ⚠, uma vez carregado na nuvem, o significado de `once` em uma expressão de script agendado muda: o tempo antes de `once` é substituído por seu valor mínimo ao executar.

Por exemplo:

* `* * once * *` => `0 0 * * *`: executa uma vez por dia, torna-se executar às 00:00 todos os dias
* `* 1-23 once * *` => `0 1 * * *`: executa uma vez entre 1:00 e 23:00 todos os dias, torna-se executar às 01:00 todos os dias
* `* 1,3,5 once * *` => `0 1 * * *`: executa uma vez às 1:00, 3:00 ou 5:00 todos os dias, torna-se executar às 01:00 todos os dias
* `* */4 once * *` => `0 0 * * *`: executa uma vez a cada 4 horas todos os dias, torna-se executar às 00:00 todos os dias
* `* 1-23/4 once * *` => `0 1 * * *`: executa uma vez a cada 4 horas entre 1:00 e 23:00 todos os dias, torna-se executar às 01:00 todos os dias
* `* 10 once * *` => `0 10 * * *`: executa uma vez às 10:00 todos os dias, torna-se executar no minuto 00 da hora 10 todos os dias
* `* * * once *` => `0 0 1 * *`: executa uma vez por mês, torna-se executar às 00:00 no dia 1 de cada mês

## Valores adicionais de descrição do CloudCat

Um script de referência: [Bilibili Auto Check-in](https://scriptcat.org/script-show-page/48)

### cloudCat

Declarar este atributo permite que o script seja executado via `CloudCat`. Uma vez que um script tenha esta opção, um botão de execução na nuvem aparece na lista de scripts; clicando nele você pode escolher um método de execução — consulte [Ambientes de execução](#running-environments).

![image-20220203225847694](@site/docs/dev/cloudcat.assets/image-20220203225847694.png)

### cloudServer

> Relacionado ao cloudCat, ainda não implementado

O endereço do servidor cloudCat padrão

### exportValue

Descreve os Values a exportar para a nuvem; múltiplas declarações são permitidas.

```ts
// @exportValue key1,key2,key3
// @exportValue key4,key5,key6
```

### exportCookie

Descreve os cookies a exportar para a nuvem; múltiplas declarações são permitidas. Os parâmetros são descritos usando `CookieDetails` do `GM_cookie`, por exemplo:

```ts
// O seguinte exporta o cookie chamado cookie1 de https://docs.scriptcat.org/docs/use/
// @exportCookie url=https://docs.scriptcat.org/docs/use;name=cookie1

// Isto exporta todos os cookies do domínio scriptcat.org
// @exportCookie domain=scriptcat.org

// Todos os parâmetros disponíveis:
// @exportCookie domain=scriptcat.org;url=https://docs.scriptcat.org/docs/use;name=cookie1;path=/docs/use;secure=true;session=true
```

## Alterações no suporte à API
> Atualmente apenas as seguintes APIs são suportadas; a menos que indicado de outra forma, elas se comportam da mesma forma que a API original.

### GM_xmlhttpRequest


### GM_notification


### GM_log

### GM_getValue

Atualmente apenas suporta obter Values exportados via `@exportValue`; os métodos set/delete/list e outros não são suportados.

## Ambientes de execução {#running-environments}

### Local

Exporta um pacote zip; após extraí-lo em uma pasta, execute os seguintes comandos para executá-lo localmente (requer um ambiente Node.js local):

```bash
npm i
node index.js
```


### Tencent Cloud

Primeiro crie uma chave Tencent Cloud em [**Access Keys**](https://console.cloud.tencent.com/cam/capi) — se usar uma sub-conta, conceda-lhe permissões de Cloud Function. Em seguida, ative o serviço em [**Function Service**](https://console.cloud.tencent.com/scf/list), que inclui uma certa quantidade de uso gratuito a cada mês. A região padrão é Xangai; ajuste se necessário. Após clicar em upload, um gatilho agendado é criado automaticamente baseado em `@crontab` para executar a função conforme o agendamento.

![image-20220203224956248](@site/docs/dev/cloudcat.assets/image-20220203224956248.png)
