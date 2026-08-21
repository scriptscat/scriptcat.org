---
title: API de tâches planifiées
---

`@grant CAT.agent.task`

L'API de tâches planifiées permet à un script de créer des tâches planifiées basées sur des expressions Cron, avec deux modes d'exécution.

## Modes d'exécution

### Mode interne

Géré automatiquement par le système Agent :
- Crée ou reprend automatiquement une conversation lorsque le déclencheur Cron se produit
- Envoie le `prompt` configuré au LLM
- Un modèle et des Skills peuvent être spécifiés
- L'historique d'exécution et la consommation de jetons sont enregistrés automatiquement

### Mode événement

Géré par le script lui-même :
- Une notification d'événement est envoyée au script lorsque le déclencheur Cron se produit
- Le script écoute l'événement via `addListener`
- La logique de traitement est entièrement personnalisée

## create — créer une tâche

```javascript
const task = await CAT.agent.task.create(options);
```

**Paramètres (`AgentTaskCreateOptions`) :**

| Paramètre | Type | Obligatoire | Description |
|------|------|------|------|
| `name` | `string` | Oui | Nom de la tâche |
| `crontab` | `string` | Oui | Expression Cron standard (5 champs : minute heure jour mois jour de la semaine) |
| `mode` | `"internal" \| "event"` | Oui | Mode d'exécution |
| `enabled` | `boolean` | Non | Indique si elle est activée, défaut : `true` |
| `notify` | `boolean` | Non | Indique si une notification du navigateur est envoyée lors du déclenchement |
| `prompt` | `string` | Non | Invite pour le mode interne |
| `modelId` | `string` | Non | ID du modèle à utiliser en mode interne |
| `skills` | `string[]` | Non | Skills à charger en mode interne |
| `maxIterations` | `number` | Non | Nombre maximal de tours d'appels d'outils pour le mode interne, défaut : `10` |

**Retourne `AgentTask` :**

| Champ | Type | Description |
|------|------|------|
| `id` | `string` | ID de la tâche |
| `name` | `string` | Nom de la tâche |
| `crontab` | `string` | Expression Cron |
| `mode` | `string` | Mode d'exécution |
| `enabled` | `boolean` | Indique si elle est activée |
| `notify` | `boolean` | Indique si des notifications sont envoyées |
| `nextruntime` | `number` | Horodatage de la prochaine exécution |
| `lastruntime` | `number` | Horodatage de la dernière exécution |
| `conversationId` | `string` | ID de conversation associé en mode interne (facultatif) |
| `lastRunStatus` | `"success" \| "error"` | Statut de la dernière exécution |
| `lastRunError` | `string` | Message d'erreur de la dernière exécution |
| `createtime` | `number` | Horodatage de création |

**Exemples d'expressions Cron :**

| Expression | Description |
|--------|------|
| `* * * * *` | Chaque minute |
| `0 9 * * *` | Chaque jour à 09:00 |
| `0 */2 * * *` | Toutes les 2 heures |
| `30 8 * * 1-5` | Jours ouvrés à 08:30 |
| `0 0 1 * *` | Le 1er de chaque mois à 00:00 |

## list — lister toutes les tâches

```javascript
const tasks = await CAT.agent.task.list();
```

Retourne toutes les tâches créées par le script courant.

## get — obtenir les détails d'une tâche

```javascript
const task = await CAT.agent.task.get(taskId);
```

Retourne `undefined` si la tâche n'existe pas.

## update — mettre à jour une tâche

```javascript
const task = await CAT.agent.task.update(taskId, partial);
```

**Champs modifiables :**

```javascript
await CAT.agent.task.update(task.id, {
  name: "New name",
  crontab: "0 10 * * *",
  enabled: false,
  prompt: "New prompt",
  notify: true
});
```

`nextruntime` est automatiquement recalculé après une mise à jour.

## remove — supprimer une tâche

```javascript
const success = await CAT.agent.task.remove(taskId);
```

## runNow — exécuter immédiatement

```javascript
await CAT.agent.task.runNow(taskId);
```

Déclenche l'exécution immédiate de la tâche une fois, sans attendre son planification Cron (non bloquant, s'exécute en arrière-plan).

## addListener — écouter les déclencheurs de tâche

```javascript
const listenerId = await CAT.agent.task.addListener(taskId, callback);
```

Utilisé uniquement pour les tâches en **mode événement**. Le rappel s'exécute lorsque le déclencheur Cron se produit.

**Paramètre du rappel (`AgentTaskTrigger`) :**

| Champ | Type | Description |
|------|------|------|
| `taskId` | `string` | ID de la tâche |
| `name` | `string` | Nom de la tâche |
| `crontab` | `string` | Expression Cron |
| `triggeredAt` | `number` | Horodatage du déclenchement |

## removeListener — supprimer un écouteur

```javascript
await CAT.agent.task.removeListener(listenerId);
```

## Exemples complets

### Mode interne — l'IA l'exécute automatiquement

```javascript
// ==UserScript==
// @name        Scheduled news digest
// @match       *://*/*
// @grant       CAT.agent.task
// ==/UserScript==

const task = await CAT.agent.task.create({
  name: "Daily news digest",
  crontab: "0 9 * * *",       // Every day at 9
  mode: "internal",
  prompt: "Please search today's tech news and save a short summary to OPFS",
  skills: ["web-search"],
  maxIterations: 10,
  notify: true
});

console.log("Task created, next run:", new Date(task.nextruntime));
```

### Mode événement — le script le gère lui-même

```javascript
// ==UserScript==
// @name        Scheduled data collection
// @match       *://*/*
// @grant       CAT.agent.task
// @grant       CAT.agent.dom
// ==/UserScript==

const task = await CAT.agent.task.create({
  name: "Stock data collection",
  crontab: "*/30 9-15 * * 1-5", // Every 30 minutes, 9-15 on weekdays
  mode: "event",
  enabled: true,
  notify: false
});

await CAT.agent.task.addListener(task.id, async (trigger) => {
  console.log(`Task triggered: ${trigger.name} at ${new Date(trigger.triggeredAt)}`);

  // Custom collection logic
  await CAT.agent.dom.navigate("https://finance.example.com/stock");
  const content = await CAT.agent.dom.readPage({ selector: ".stock-table" });

  // Process the data...
  console.log("Collection complete");
});
```
