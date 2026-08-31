---
title: Bloco de Metadados
---

O conteúdo dentro de `==UserScript==` descreve as permissões que um script precisa, informações sobre o script, etc. Fica no início do script.

```js
// ==UserScript==
// @name         Novo Userscript
// @namespace    https://bbs.tampermonkey.net.cn/
// @version      0.1.0
// @description  tente conquistar o mundo!
// @author       You
// @crontab      * * once * *
// ==/UserScript==
```

## Valores Principais

### name

Nome do script

### namespace

Espaço de nomes do script. `name + namespace` determina a unicidade do script.

### version

A versão do script. Recomenda-se seguir o [versionamento semântico](https://semver.org/), para que quando uma mudança de versão for detectada, o usuário seja solicitado a atualizar.

### description

Uma descrição detalhada do script

### author

Autor do script

### run-at

Quando o script é executado

| Valor | Execução | Suportado desde |
|---|---|---|
| document-start | Injeta o script na página assim que a URL corresponde no frontend | v0.3.0 |
| document-end | Injeta o script depois que o DOM foi carregado; scripts e imagens da página podem ainda estar carregando | v0.3.0 |
| document-idle | Injeta o script depois que todo o conteúdo foi carregado | v0.3.0 |
| document-body | O script só é injetado quando a página tem um elemento `body` | v0.6.2 |
| document-menu | Mostra um menu ao clicar com o botão direito; executa o script usando o nome do script como nome do menu | v0.3.4-v0.9.4 (🔥 removido) |

Para ícones de menu, consulte [Símbolos Unicode](https://unicode-table.com/en/) e [emoji](https://www.emojiall.com/en-US/).

### run-in

Especifica o ambiente onde o script é injetado: `@run-in normal-tabs` para abas normais, `@run-in incognito-tabs` para abas anônimas.

### early-start (v1.1.0+)

Quando `run-at` é `document-start`, o script é executado o mais rápido possível, mas não pode garantir que carregue mais rápido que a página.

Depois de definir `@run-at document-start`, você pode adicionar `@early-start` para fazer o script carregar mais rápido que a página: [exemplo](https://github.com/scriptscat/scriptcat/blob/main/example/early-start.js)

### inject-into

:::tip

No ambiente de content-script (`content`), `unsafeWindow` aponta apenas para o próprio `window` atual do ambiente e não pode acessar o `window` da página.

ScriptCat não suporta verificação automática de restrições CSP para decidir se injeta como `content` ou `page` (ou seja, `@inject-into auto` do Tampermonkey).

:::

Especifica onde o script é injetado, suportando `page` e `content`, com `page` como padrão.

- `page`: o script é injetado no ambiente da página e pode usar `unsafeWindow` para acessar o `window` e `DOM` da página
- `content`: o script é injetado no ambiente de content-script, não pode acessar diretamente o objeto `window` da página, mas pode acessar o `DOM` da página e não está sujeito a `CSP`

### storageName 🧪

O espaço de armazenamento para `Value`; dados sob o mesmo `storageName` podem ser compartilhados e comunicados entre scripts. Específico do ScriptCat.

### background

Marca este script como um script de fundo, que precisa ser executado no ambiente de fundo. Veja [Script de Fundo](./background.md#background-script-background) para detalhes.

### crontab

Marca o script como um script agendado, que requer um valor de expressão cron. Apenas uma expressão cron pode existir e é executada conforme essa programação no ambiente de fundo. Veja [Script Agendado](./background.md#scheduled-script-crontab) para detalhes.

### match

Apenas URLs correspondentes com `match` executarão o script, seguindo [Padrões de Correspondência](https://developer.chrome.com/docs/extensions/v3/match_patterns/). Em `match`, `*` é um curinga, `tld` corresponde ao domínio de nível superior, e um domínio começando com `*.` também corresponderá a `xxx.com`:

| Valor | Exemplos corretos | Exemplos incorretos |
|---|---|---|
| `http://scriptcat.org/doc/match` | `http://scriptcat.org/doc/match` | `http://scriptcat.org/doc/runAt` |
| `*://*/param?*` | `https://scriptcat.org/param` \| `http://scriptcat.org/param?search=tampermonkey` | `https://scriptcat.org/test/param` |
| `http*://scriptcat.org/*` | `https://scriptcat.org/` \| `https://scriptcat.org/doc` | `https://doc.scriptcat.org/` |

### include

Suporta `*` para correspondência difusa, permitindo URLs não padronizadas

### exclude

URLs que não devem corresponder; usa a mesma sintaxe de expressão que `include`

### grant

Solicita permissão de API — uma API só pode ser chamada depois que foi solicitada. Veja a lista de permissões em: [Documentação da API](./api.md) e [Documentação da CAT API](./cat-api.md).

Dois valores especiais:

- **none**: o script não é executado no ambiente sandbox, mas diretamente no ambiente da página. Neste ambiente, nenhuma API GM está disponível, mas o objeto `window` da página pode ser acessado diretamente.
- **unsafeWindow**: no ambiente sandbox, se você precisa acessar o objeto `window` da página, use `unsafeWindow`. (Tampermonkey não requer declarar isso — é mantido apenas por compatibilidade.)

### connect

Solicita permissão de acesso para um site; veja `GM_cookie` e `GM_xmlhttpRequest`. `GM_download` no modo `native` também reconhece `@connect` (hosts não declarados acionam uma confirmação).

### resource

Inclui um arquivo de recurso. Após declarar `@resource`, você pode usar `GM_getResourceText`/`GM_getResourceURL` para recuperar as informações.

```js
// @resource icon https://bbs.tampermonkey.net.cn/favicon.ico
// @resource html https://bbs.tampermonkey.net.cn/
// @resource xml https://bbs.tampermonkey.net.cn/sitemap.xml
// Adicionar verificação de integridade do recurso
// @resource icon https://bbs.tampermonkey.net.cn/favicon.ico#md5-xxx,sha256-xxx
```

### require

Inclui um arquivo JS externo; suporta [verificação de integridade do recurso](#verificação-de-integridade-do-recurso)

### require-css

Inclui um arquivo CSS externo; suporta [verificação de integridade do recurso](#verificação-de-integridade-do-recurso)

### noframes

Marca o script para não ser executado dentro de um `<frame>`

### definition

O endereço de referência de um arquivo `.d.ts`, habilitando dicas de autocompletar do editor

### antifeature

Isso está relacionado ao marketplace de scripts; recursos indesejados precisam ser sinalizados com este valor de descrição:

```js
// @antifeature ads Este script tem anúncios
// @antifeature referral-link Este script modifica ou redireciona para o link de referência do autor
```

## Valores de Descrição Adicionais

### license

A licença open-source do script atual

### updateURL

A verificação de atualização requer que o script remoto tenha uma tag `@version`.

O link que o script usa para verificar atualizações; se não configurado, por padrão é `user.js => meta.js` do link, ou o link atual se não houver `user.js`.

Se `@updateURL` estiver configurado, `@downloadURL` também deve ser configurado para que `@updateURL` funcione.

### downloadURL

O endereço de download para a atualização do script

### supportURL

Site de suporte, página de relatório de bugs

### homepage, homepageURL, website

Página inicial do script

### source

Página do código-fonte do script

### icon, iconURL, defaulticon

Ícone do script

### icon64, icon64URL

Ícone do script de 64x64

### Notas

### Verificação de Integridade do Recurso

- Use md5, sha1, sha256, sha384 ou sha512 para verificar se os recursos não foram adulterados. Múltiplos métodos de verificação podem ser separados com `;` ou `,`.
- De acordo com as [recomendações do W3C](https://w3c.github.io/webappsec-subresource-integrity/#hash-collision-attacks), md5 e sha1 não são recomendados; use sha384 ou um algoritmo de hash mais forte.

Exemplo:

```js
// @require https://cdn.jsdelivr.net/npm/darkmode-js@1.5.7/lib/darkmode-js.min.js#md5-d55836f30c097da753179f82fa6f108f,sha256-a476ab8560837a51938aa6e1720c8be87c2862b6221690e9de7ffac113811a90
```
