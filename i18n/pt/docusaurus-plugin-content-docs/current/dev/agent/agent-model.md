---
title: API de consulta de modelos
---

`@grant CAT.agent.model`

A API de consulta de modelos fornece acesso somente leitura aos modelos que o usuário configurou na página de administração. Por segurança, a chave da API nunca é exposta ao script.

## list — listar todos os modelos

```javascript
const models = await CAT.agent.model.list();
```

**Retorna `ModelSummary[]`:**

| Campo | Tipo | Descrição |
|------|------|------|
| `id` | `string` | ID da configuração do modelo |
| `name` | `string` | Nome de exibição definido pelo usuário (ex. "GPT-4o", "Claude Sonnet") |
| `provider` | `"openai" \| "anthropic"` | Tipo de provedor |
| `apiBaseUrl` | `string` | URL base da API |
| `model` | `string` | Identificador do modelo enviado à API do provedor (ex. `gpt-4o`, `claude-sonnet-4-20250514`) |
| `maxTokens` | `number` | Tokens de saída máximos (omitido se não configurado) |

> Nota: os objetos retornados **não incluem** um campo `apiKey`.

## get — obter um modelo específico

```javascript
const model = await CAT.agent.model.get(modelId);
```

Retorna `null` se o modelo não existir.

## getDefault — obter o ID do modelo padrão

```javascript
const defaultId = await CAT.agent.model.getDefault();
```

Retorna o ID do modelo padrão configurado pelo usuário; retorna uma string vazia se nenhum estiver configurado.

## getSummary — obter o ID do modelo de resumo

```javascript
const summaryModelId = await CAT.agent.model.getSummary();
```

Retorna o ID do modelo leve que o usuário configurou especificamente para tarefas de resumo (como compactação automática do histórico de conversas). Se nenhum estiver configurado separadamente, o sistema recorre ao modelo padrão e este método retorna uma string vazia.

## Cenários de uso

### Permitir que o usuário escolha um modelo

```javascript
// ==UserScript==
// @name        Exemplo de seletor de modelos
// @grant       CAT.agent.model
// @grant       CAT.agent.conversation
// ==/UserScript==

const models = await CAT.agent.model.list();
const defaultId = await CAT.agent.model.getDefault();

// Mostra a lista ao usuário e permite que ele escolha
const selectedModel = models.find(m => m.id === defaultId) || models[0];

const conv = await CAT.agent.conversation.create({
  model: selectedModel.id
});
```

### Obter detalhes de um modelo específico

```javascript
const model = await CAT.agent.model.get("my-model-id");
if (model) {
  console.log(`${model.name} (${model.provider}), saída máxima ${model.maxTokens ?? "não configurado"} tokens`);
}
```
