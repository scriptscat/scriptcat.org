---
title: API di interrogazione modelli
---

`@grant CAT.agent.model`

L'API di interrogazione modelli fornisce accesso in sola lettura ai modelli che l'utente ha configurato nella pagina di amministrazione. Per sicurezza, la chiave API non viene mai esposta allo script.

## list — elencare tutti i modelli

```javascript
const models = await CAT.agent.model.list();
```

**Restituisce `ModelSummary[]`:**

| Campo | Tipo | Descrizione |
|------|------|------|
| `id` | `string` | ID configurazione modello |
| `name` | `string` | Nome visualizzato definito dall'utente (es. "GPT-4o", "Claude Sonnet") |
| `provider` | `"openai" \| "anthropic"` | Tipo di provider |
| `apiBaseUrl` | `string` | URL base dell'API |
| `model` | `string` | Identificatore del modello inviato all'API del provider (es. `gpt-4o`, `claude-sonnet-4-20250514`) |
| `maxTokens` | `number` | Token di output massimi (omesso se non impostato) |

> Nota: gli oggetti restituiti **non includono** un campo `apiKey`.

## get — ottenere un modello specifico

```javascript
const model = await CAT.agent.model.get(modelId);
```

Restituisce `null` se il modello non esiste.

## getDefault — ottenere l'ID del modello predefinito

```javascript
const defaultId = await CAT.agent.model.getDefault();
```

Restituisce l'ID del modello predefinito configurato dall'utente; restituisce una stringa vuota se non ne è configurato nessuno.

## getSummary — ottenere l'ID del modello di riepilogo

```javascript
const summaryModelId = await CAT.agent.model.getSummary();
```

Restituisce l'ID del modello leggero che l'utente ha configurato specificamente per le attività di riepilogo (come la compattazione automatica della cronologia delle conversazioni). Se non ne è configurato nessuno separatamente, il sistema ricade sul modello predefinito e questo metodo restituisce una stringa vuota.

## scenari di utilizzo

### Far scegliere un modello all'utente

```javascript
// ==UserScript==
// @name        Esempio selettore modelli
// @grant       CAT.agent.model
// @grant       CAT.agent.conversation
// ==/UserScript==

const models = await CAT.agent.model.list();
const defaultId = await CAT.agent.model.getDefault();

// Mostra la lista all'utente e lascia che scelga
const selectedModel = models.find(m => m.id === defaultId) || models[0];

const conv = await CAT.agent.conversation.create({
  model: selectedModel.id
});
```

### Ottenere i dettagli di un modello specifico

```javascript
const model = await CAT.agent.model.get("my-model-id");
if (model) {
  console.log(`${model.name} (${model.provider}), output massimo ${model.maxTokens ?? "non impostato"} token`);
}
```
