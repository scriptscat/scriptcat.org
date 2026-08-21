---
title: API de Manipulação do DOM
---

`@grant CAT.agent.dom`

A API de manipulação do DOM fornece automação completa de páginas do navegador: navegação, leitura de conteúdo, capturas de tela, interação com formulários e monitoramento do DOM.

## Gerenciamento de abas

### listTabs — listar abas

```javascript
const tabs = await CAT.agent.dom.listTabs();
```

Retorna informações sobre cada aba aberta.

**Retorna `TabInfo[]`:**

| Campo | Tipo | Descrição |
|------|------|------|
| `tabId` | `number` | ID da aba |
| `url` | `string` | URL atual |
| `title` | `string` | Título da página |
| `active` | `boolean` | Se é a aba ativa atual |
| `windowId` | `number` | ID da janela a que pertence |
| `discarded` | `boolean` | Se foi descartada (suspensa) |

## Navegação

### navigate — navegar uma página

```javascript
const result = await CAT.agent.dom.navigate(url, options?);
```

**Parâmetros:**

| Parâmetro | Tipo | Padrão | Descrição |
|------|------|--------|------|
| `url` | `string` | — | URL alvo (obrigatório) |
| `options.tabId` | `number` | aba ativa atual | Qual aba usar |
| `options.waitUntil` | `boolean` | `true` | Se aguardar a página terminar de carregar |
| `options.timeout` | `number` | `30000` | Timeout em milissegundos |

**Retorna `NavigateResult`:**

```typescript
{ tabId: number; url: string; title: string }
```

## Leitura de conteúdo

### readPage — ler conteúdo da página

```javascript
const page = await CAT.agent.dom.readPage(options?);
```

Converte o DOM da página em texto estruturado, removendo automaticamente elementos irrelevantes como `<script>`, `<style>`, `<noscript>`, `<svg>` e `<link[rel=stylesheet]>`.

**Parâmetros:**

| Parâmetro | Tipo | Padrão | Descrição |
|------|------|--------|------|
| `options.tabId` | `number` | aba ativa atual | Qual aba usar |
| `options.selector` | `string` | — | Seletor CSS; apenas o conteúdo do elemento correspondente é retornado |
| `options.maxLength` | `number` | — | Máximo de caracteres; truncado além disso |
| `options.removeTags` | `string[]` | — | Nomes de tags adicionais a remover |

**Retorna `PageContent`:**

| Campo | Tipo | Descrição |
|------|------|------|
| `title` | `string` | Título da página |
| `url` | `string` | URL da página |
| `html` | `string` | Conteúdo de texto da página processado |
| `truncated` | `boolean` | Se o conteúdo foi truncado |
| `totalLength` | `number` | Comprimento total do conteúdo original |

### screenshot — tirar uma captura de tela

```javascript
const shot = await CAT.agent.dom.screenshot(options?);
```

**Parâmetros:**

| Parâmetro | Tipo | Padrão | Descrição |
|------|------|--------|------|
| `options.tabId` | `number` | aba ativa atual | Qual aba usar |
| `options.quality` | `number` | `80` | Qualidade JPEG (0-100) |
| `options.fullPage` | `boolean` | `false` | Capturar a página inteira |
| `options.selector` | `string` | — | Seletor CSS; apenas capturar a área do elemento correspondente |
| `options.saveTo` | `string` | — | Caminho para salvar no espaço de trabalho OPFS |

**Retorna `ScreenshotResult`:**

| Campo | Tipo | Descrição |
|------|------|------|
| `dataUrl` | `string` | URL de dados base64 |
| `path` | `string` | Caminho de salvamento no OPFS (quando `saveTo` é usado) |
| `size` | `number` | Tamanho do arquivo (quando `saveTo` é usado) |

```javascript
// Salvar uma captura no OPFS
const shot = await CAT.agent.dom.screenshot({
  saveTo: "screenshots/page.png",
  quality: 90
});
console.log(`Salvo em ${shot.path}, tamanho ${shot.size} bytes`);
```

## Interação com a página

### click — clicar em um elemento

```javascript
const result = await CAT.agent.dom.click(selector, options?);
```

**Parâmetros:**

| Parâmetro | Tipo | Padrão | Descrição |
|------|------|--------|------|
| `selector` | `string` | — | Seletor CSS (obrigatório) |
| `options.tabId` | `number` | aba ativa atual | Qual aba usar |
| `options.trusted` | `boolean` | `false` | Usar CDP para enviar um evento de mouse real |

**Retorna `ActionResult`:**

| Campo | Tipo | Descrição |
|------|------|------|
| `success` | `boolean` | Se teve sucesso |
| `navigated` | `boolean` | Se o clique acionou uma navegação |
| `url` | `string` | A nova URL após a navegação |
| `newTab` | `boolean` | Se uma nova aba foi aberta |

**`trusted` vs. um clique normal:**

- `trusted: false` (padrão) — simula `element.click()` via JS injetado; rápido, mas alguns sites podem detectá-lo como um evento não genuíno
- `trusted: true` — envia um evento de mouse real via Chrome DevTools Protocol, indistinguível da interação real do usuário, mas requer permissões de depuração

### fill — preencher um campo de formulário

```javascript
const result = await CAT.agent.dom.fill(selector, value, options?);
```

**Parâmetros:**

| Parâmetro | Tipo | Descrição |
|------|------|------|
| `selector` | `string` | Seletor CSS (obrigatório) |
| `value` | `string` | Valor a preencher (obrigatório) |
| `options.tabId` | `number` | Qual aba usar |
| `options.trusted` | `boolean` | Usar CDP para simular entrada de teclado |

**Comportamento:**
- Modo normal: define `element.value` e dispara um evento `input`
- Modo trusted: CDP foca o elemento → digita caractere por caractere

### scroll — rolar a página

```javascript
const result = await CAT.agent.dom.scroll(direction, options?);
```

**Parâmetros:**

| Parâmetro | Tipo | Descrição |
|------|------|------|
| `direction` | `"up" \| "down" \| "top" \| "bottom"` | Direção da rolagem (obrigatória) |
| `options.tabId` | `number` | Qual aba usar |
| `options.selector` | `string` | Rolar um contêiner específico em vez de toda a página |

**Retorna `ScrollResult`:**

| Campo | Tipo | Descrição |
|------|------|------|
| `scrollTop` | `number` | Posição de rolagem após rolar |
| `scrollHeight` | `number` | Altura total do conteúdo |
| `clientHeight` | `number` | Altura do viewport |
| `atBottom` | `boolean` | Se agora está rolado até o fundo |

### waitFor — aguardar um elemento

```javascript
const result = await CAT.agent.dom.waitFor(selector, options?);
```

Faz polling para que o elemento especificado apareça na página (verificando a cada 500ms).

**Parâmetros:**

| Parâmetro | Tipo | Padrão | Descrição |
|------|------|--------|------|
| `selector` | `string` | — | Seletor CSS (obrigatório) |
| `options.tabId` | `number` | aba ativa atual | Qual aba usar |
| `options.timeout` | `number` | `10000` | Timeout em milissegundos |

**Retorna `WaitForResult`:**

| Campo | Tipo | Descrição |
|------|------|------|
| `found` | `boolean` | Se o elemento foi encontrado |
| `element` | `object` | Informações do elemento (apenas quando `found=true`) |
| `element.selector` | `string` | O seletor correspondente |
| `element.tag` | `string` | Nome da tag |
| `element.text` | `string` | Conteúdo de texto |
| `element.role` | `string` | Papel ARIA |
| `element.type` | `string` | Tipo de input |
| `element.visible` | `boolean` | Se é visível |

## Execução de scripts

### executeScript — executar JavaScript

```javascript
const result = await CAT.agent.dom.executeScript(code, options?);
```

**Parâmetros:**

| Parâmetro | Tipo | Padrão | Descrição |
|------|------|--------|------|
| `code` | `string` | — | Código JavaScript (obrigatório) |
| `options.tabId` | `number` | aba ativa atual | Qual aba usar |

> O código sempre é executado no **mundo MAIN** da página (compartilhando o mesmo objeto `window` com o JS da página), então pode chamar as próprias funções da página e ler variáveis diretamente — mas pela mesma razão **não pode acessar as URLs blob da extensão** (por exemplo, uma URL `blob:` criada via `URL.createObjectURL()` a partir do `Blob` retornado por `CAT.agent.opfs.read` no modo `"blob"`), já que as URLs blob são restritas à origem da extensão. Se precisar trabalhar com uma URL blob em um contexto isolado, use um SkillScript (veja [Desenvolvimento de Skills](../agent-skill-dev)).

```javascript
// Chamar uma função JS da página / ler uma variável da página
const data = await CAT.agent.dom.executeScript(
  "return window.__APP_STATE__"
);

// Ler conteúdo do DOM
const title = await CAT.agent.dom.executeScript(
  "return document.querySelector('h1')?.textContent"
);
```

> O código é embrulhado em `new Function()` para execução e suporta um valor de `return`. O timeout é de 30 segundos.

## Monitoramento do DOM

Usa Chrome DevTools Protocol para monitorar mudanças no DOM e eventos de diálogo em uma página.

### startMonitor — iniciar monitoramento

```javascript
await CAT.agent.dom.startMonitor(tabId);
```

Inicia o monitoramento de mudanças no DOM e diálogos (alert/confirm/prompt) na aba especificada.

### stopMonitor — parar monitoramento

```javascript
const result = await CAT.agent.dom.stopMonitor(tabId);
```

Para o monitoramento e retorna as mudanças coletadas.

**Retorna `MonitorResult`:**

| Campo | Tipo | Descrição |
|------|------|------|
| `dialogs` | `Array<{ type, message }>` | Lista de diálogos |
| `addedNodes` | `Array<{ tag, id?, class?, role?, text }>` | Resumo dos nós DOM recém-adicionados |

### peekMonitor — verificar status do monitoramento

```javascript
const status = await CAT.agent.dom.peekMonitor(tabId);
```

Verifica o status atual do monitoramento de forma não destrutiva.

**Retorna `MonitorStatus`:**

| Campo | Tipo | Descrição |
|------|------|------|
| `hasChanges` | `boolean` | Se há mudanças |
| `dialogCount` | `number` | Número de diálogos |
| `nodeCount` | `number` | Número de nós recém-adicionados |

## Exemplo completo

```javascript
// ==UserScript==
// @name        Preenchedor automático de formulários
// @match       https://example.com/form
// @grant       CAT.agent.dom
// ==/UserScript==

// Aguardar o formulário carregar
await CAT.agent.dom.waitFor("form#signup", { timeout: 5000 });

// Preencher o formulário
await CAT.agent.dom.fill("input[name=username]", "test_user");
await CAT.agent.dom.fill("input[name=email]", "test@example.com");

// Marcar a caixa de acordo
await CAT.agent.dom.click("input[type=checkbox]#agree");

// Captura do formulário preenchido
await CAT.agent.dom.screenshot({
  selector: "form#signup",
  saveTo: "screenshots/form-filled.png"
});

// Clicar em enviar
const result = await CAT.agent.dom.click("button[type=submit]", { trusted: true });
if (result.navigated) {
  console.log("Formulário enviado com sucesso, navegado para:", result.url);
}
```
