---
title: Modelquery-API
---

`@grant CAT.agent.model`

De modelquery-API biedt alleen-lezen toegang tot de modellen die de gebruiker op de beheerpagina heeft geconfigureerd. Om veiligheidsredenen wordt de API-sleutel nooit aan het script blootgesteld.

## list — alle modellen weergeven

```javascript
const models = await CAT.agent.model.list();
```

**Retourneert `ModelSummary[]`:**

| Veld | Type | Beschrijving |
|------|------|------|
| `id` | `string` | Modelconfiguratie-ID |
| `name` | `string` | Door de gebruiker gedefinieerde weergavenaam (bv. "GPT-4o", "Claude Sonnet") |
| `provider` | `"openai" \| "anthropic"` | Providertype |
| `apiBaseUrl` | `string` | API-basis-URL |
| `model` | `string` | Modelidentificatie die naar de provider-API wordt verzonden (bv. `gpt-4o`, `claude-sonnet-4-20250514`) |
| `maxTokens` | `number` | Maximaal aantal uitvoertokens (weggelaten indien niet ingesteld) |

> Opmerking: de geretourneerde objecten **bevatten geen** veld `apiKey`.

## get — een specifiek model ophalen

```javascript
const model = await CAT.agent.model.get(modelId);
```

Retourneert `null` als het model niet bestaat.

## getDefault — de standaardmodel-ID ophalen

```javascript
const defaultId = await CAT.agent.model.getDefault();
```

Retourneert de door de gebruiker geconfigureerde standaardmodel-ID; retourneert een lege string als er geen is ingesteld.

## getSummary — de samenvattingsmodel-ID ophalen

```javascript
const summaryModelId = await CAT.agent.model.getSummary();
```

Retourneert de ID van het lichtgewicht model dat de gebruiker specifiek heeft geconfigureerd voor samenvattingstaken (zoals het automatisch comprimeren van de gespreksgeschiedenis). Als er geen afzonderlijk is geconfigureerd, valt het systeem terug op het standaardmodel en retourneert deze methode een lege string.

## Gebruiksscenario's

### De gebruiker een model laten kiezen

```javascript
// ==UserScript==
// @name        Modelkiezer-voorbeeld
// @grant       CAT.agent.model
// @grant       CAT.agent.conversation
// ==/UserScript==

const models = await CAT.agent.model.list();
const defaultId = await CAT.agent.model.getDefault();

// Toon de lijst aan de gebruiker en laat hem/haar kiezen
const selectedModel = models.find(m => m.id === defaultId) || models[0];

const conv = await CAT.agent.conversation.create({
  model: selectedModel.id
});
```

### Details voor een specifiek model ophalen

```javascript
const model = await CAT.agent.model.get("my-model-id");
if (model) {
  console.log(`${model.name} (${model.provider}), max output ${model.maxTokens ?? "unset"} tokens`);
}
```
