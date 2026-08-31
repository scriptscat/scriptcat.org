---
title: API de requête de modèles
---

`@grant CAT.agent.model`

L'API de requête de modèles fournit un accès en lecture seule aux modèles que l'utilisateur a configurés sur la page de gestion. Pour des raisons de sécurité, la clé API n'est jamais exposée au script.

## list — lister tous les modèles

```javascript
const models = await CAT.agent.model.list();
```

**Retourne `ModelSummary[]` :**

| Champ | Type | Description |
|------|------|------|
| `id` | `string` | ID de configuration du modèle |
| `name` | `string` | Nom d'affichage défini par l'utilisateur (ex. « GPT-4o », « Claude Sonnet ») |
| `provider` | `"openai" \| "anthropic"` | Type de fournisseur |
| `apiBaseUrl` | `string` | URL de base de l'API |
| `model` | `string` | Identifiant du modèle envoyé à l'API du fournisseur (ex. `gpt-4o`, `claude-sonnet-4-20250514`) |
| `maxTokens` | `number` | Nombre maximal de jetons de sortie (omis s'il n'est pas défini) |

> Remarque : les objets retournés **n'incluent pas** de champ `apiKey`.

## get — obtenir un modèle spécifique

```javascript
const model = await CAT.agent.model.get(modelId);
```

Retourne `null` si le modèle n'existe pas.

## getDefault — obtenir l'ID du modèle par défaut

```javascript
const defaultId = await CAT.agent.model.getDefault();
```

Retourne l'ID du modèle par défaut configuré par l'utilisateur ; retourne une chaîne vide si aucun n'est défini.

## getSummary — obtenir l'ID du modèle de synthèse

```javascript
const summaryModelId = await CAT.agent.model.getSummary();
```

Retourne l'ID du modèle léger que l'utilisateur a configuré spécifiquement pour les tâches de synthèse (comme la compression automatique de l'historique de dialogue). Si aucun n'est configuré séparément, le système utilise le modèle par défaut et cette méthode retourne une chaîne vide.

## Scénarios d'utilisation

### Laisser l'utilisateur choisir un modèle

```javascript
// ==UserScript==
// @name        Model picker example
// @grant       CAT.agent.model
// @grant       CAT.agent.conversation
// ==/UserScript==

const models = await CAT.agent.model.list();
const defaultId = await CAT.agent.model.getDefault();

// Show the list to the user and let them pick
const selectedModel = models.find(m => m.id === defaultId) || models[0];

const conv = await CAT.agent.conversation.create({
  model: selectedModel.id
});
```

### Obtenir les détails d'un modèle spécifique

```javascript
const model = await CAT.agent.model.get("my-model-id");
if (model) {
  console.log(`${model.name} (${model.provider}), max output ${model.maxTokens ?? "unset"} tokens`);
}
```
