---
title: Modo de assinatura
---

O arquivo deve começar com `UserSubscribe` em vez de `UserScript`. O link de instalação deve usar a extensão `user.sub.js` e deve ser um link `https`.

Um script de assinatura mostra apenas o diálogo de instalação para que o usuário confirme a assinatura no momento da instalação; as atualizações subsequentes são silenciosas, e o diálogo de atualização é mostrado novamente apenas se a permissão `connect` mudar.

Um único script de assinatura pode descrever os links de instalação para vários scripts. Os scripts instalados via modo de assinatura são instalados silenciosamente, sem diálogo de confirmação, e os scripts instalados ainda aparecem na lista de scripts — mas sua permissão `connect` usa o `connect` declarado na assinatura em vez da permissão `connect` do próprio script.

```js
// ==UserSubscribe==
// @name         xxx
// @description  Assinar a série de scripts xxx
// @version      0.1.0
// @author       You
// @connect      www.baidu.com
// @scriptUrl    https://script.tampermonkey.net.cn/48.user.js
// @scriptUrl    https://script.tampermonkey.net.cn/49.user.js
// ==/UserSubscribe==
```

## Atualizações de assinatura e atualizações de scripts

De acordo com o `intervalo de atualização` configurado pelo usuário, o ScriptCat verifica periodicamente o link da assinatura em busca de atualizações; `version` deve ser configurado para que isso funcione.

Cada atualização ou alteração da assinatura compara os links dos scripts com os atualmente instalados: os scripts que não estão mais na nova assinatura são removidos, e os scripts recém-adicionados são instalados silenciosamente. As atualizações de scripts seguem a própria `version` do script, usando a mesma lógica de atualização de um script normalmente instalado.

## Instalação e atualização silenciosas

Os scripts assinados são instalados e atualizados silenciosamente — adicionar, remover ou atualizar um script de uma assinatura mostra apenas uma notificação, sem exigir a confirmação do usuário novamente. Por causa deste mecanismo de atualização silenciosa, por favor assine apenas fontes em que você confie.

## metadata

O significado de certos campos de metadados muda dentro de um script de assinatura.

### name

O nome da assinatura (também pode ser editado diretamente na lista de assinaturas)

### description

A descrição da assinatura, descrevendo para que serve a assinatura

### version

A versão da assinatura. Se omitida, as atualizações são acionadas com base em se o conteúdo do script de assinatura mudou ou não.

### connect

Solicita permissão de acesso a um site; consulte `GM_cookie` e `GM_xmlhttpRequest`. Para scripts instalados via modo de assinatura, `connect` é sobrescrito pelo `connect` da assinatura.

### scriptUrl

Os links de instalação de scripts necessários pela assinatura
