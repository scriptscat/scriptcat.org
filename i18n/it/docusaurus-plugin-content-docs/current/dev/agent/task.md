---
title: API Task Programmati
---

`@grant CAT.agent.task`

L'API task programmati permette a uno script di creare task basati su espressioni Cron, con due modalità di esecuzione.

## Modalità di esecuzione

### Modalità interna

Gestita automaticamente dal sistema Agent:
- Crea o riprende una conversazione automaticamente quando si attiva il Cron
- Invia il `prompt` configurato al LLM
- È possibile specificare un modello e Skills
- La cronologia di esecuzione e l'utilizzo dei token vengono registrati automaticamente

### Modalità evento

Gestita dallo script stesso:
- Viene inviata una notifica di evento allo script quando si attiva il Cron
- Lo script ascolta l'evento tramite `addListener`
- La logica di gestione è completamente personalizzabile

## create — creare un task

```javascript
const task = await CAT.agent.task.create(options);
```

**Parametri (`AgentTaskCreateOptions`):**

| Parametro | Tipo | Obbligatorio | Descrizione |
|------|------|------|------|
| `name` | `string` | Sì | Nome del task |
| `crontab` | `string` | Sì | Espressione Cron standard (5 campi: minuto ora giorno mese giorno_settimana) |
| `mode` | `"internal" \| "event"` | Sì | Modalità di esecuzione |
| `enabled` | `boolean` | No | Se è abilitato, predefinito `true` |
| `notify` | `boolean` | No | Se inviare notifica del browser quando si attiva |
| `prompt` | `string` | No | Prompt per modalità interna |
| `modelId` | `string` | No | ID del modello da usare in modalità interna |
| `skills` | `string[]` | No | Skills da caricare in modalità interna |
| `maxIterations` | `number` | No | Max round di chiamate a strumenti in modalità interna, predefinito `10` |

**Restituisce `AgentTask`:**

| Campo | Tipo | Descrizione |
|------|------|------|
| `id` | `string` | ID del task |
| `name` | `string` | Nome del task |
| `crontab` | `string` | Espressione Cron |
| `mode` | `string` | Modalità di esecuzione |
| `enabled` | `boolean` | Se è abilitato |
| `notify` | `boolean` | Se vengono inviate notifiche |
| `nextruntime` | `number` | Timestamp della prossima esecuzione |
| `lastruntime` | `number` | Timestamp dell'ultima esecuzione |
| `conversationId` | `string` | ID conversazione associata in modalità interna (opzionale) |
| `lastRunStatus` | `"success" \| "error"` | Stato dell'ultima esecuzione |
| `lastRunError` | `string` | Messaggio di errore dell'ultima esecuzione |
| `createtime` | `number` | Timestamp di creazione |

**Esempi di espressione Cron:**

| Espressione | Descrizione |
|--------|------|
| `* * * * *` | Ogni minuto |
| `0 9 * * *` | Ogni giorno alle 09:00 |
| `0 */2 * * *` | Ogni 2 ore |
| `30 8 * * 1-5` | Nei giorni feriali alle 08:30 |
| `0 0 1 * *` | 00:00 il giorno 1 di ogni mese |

## list — elencare tutti i task

```javascript
const tasks = await CAT.agent.task.list();
```

Restituisce tutti i task creati dallo script corrente.

## get — ottenere dettagli di un task

```javascript
const task = await CAT.agent.task.get(taskId);
```

Restituisce `undefined` se il task non esiste.

## update — aggiornare un task

```javascript
const task = await CAT.agent.task.update(taskId, partial);
```

**Campi aggiornabili:**

```javascript
await CAT.agent.task.update(task.id, {
  name: "Nuovo nome",
  crontab: "0 10 * * *",
  enabled: false,
  prompt: "Nuovo prompt",
  notify: true
});
```

`nextruntime` viene ricalcolato automaticamente dopo un aggiornamento.

## remove — eliminare un task

```javascript
const success = await CAT.agent.task.remove(taskId);
```

## runNow — eseguire immediatamente

```javascript
await CAT.agent.task.runNow(taskId);
```

Attiva l'esecuzione del task una volta immediatamente, senza attendere il suo Cron (non bloccante, eseguito in background).

## addListener — ascoltare le attivazioni dei task

```javascript
const listenerId = await CAT.agent.task.addListener(taskId, callback);
```

Utilizzato solo per task in **modalità evento**. Il callback viene eseguito quando si attiva il Cron.

**Parametro del callback (`AgentTaskTrigger`):**

| Campo | Tipo | Descrizione |
|------|------|------|
| `taskId` | `string` | ID del task |
| `name` | `string` | Nome del task |
| `crontab` | `string` | Espressione Cron |
| `triggeredAt` | `number` | Timestamp di attivazione |

## removeListener — rimuovere un listener

```javascript
await CAT.agent.task.removeListener(listenerId);
```

## Esempi completi

### Modalità interna — l'AI lo esegue automaticamente

```javascript
// ==UserScript==
// @name        Riepilogo notizie programmato
// @match       *://*/*
// @grant       CAT.agent.task
// ==/UserScript==

const task = await CAT.agent.task.create({
  name: "Riepilogo giornaliero delle notizie",
  crontab: "0 9 * * *",       // Ogni giorno alle 9
  mode: "internal",
  prompt: "Per favore cerca le notizie tech di oggi e salva un breve riepilogo in OPFS",
  skills: ["web-search"],
  maxIterations: 10,
  notify: true
});

console.log("Task creato, prossima esecuzione:", new Date(task.nextruntime));
```

### Modalità evento — lo script lo gestisce

```javascript
// ==UserScript==
// @name        Raccolta dati programmata
// @match       *://*/*
// @grant       CAT.agent.task
// @grant       CAT.agent.dom
// ==/UserScript==

const task = await CAT.agent.task.create({
  name: "Raccolta dati azionari",
  crontab: "*/30 9-15 * * 1-5", // Ogni 30 minuti, 9-15 nei giorni feriali
  mode: "event",
  enabled: true,
  notify: false
});

await CAT.agent.task.addListener(task.id, async (trigger) => {
  console.log(`Task attivato: ${trigger.name} alle ${new Date(trigger.triggeredAt)}`);

  // Logica di raccolta personalizzata
  await CAT.agent.dom.navigate("https://finance.example.com/stock");
  const content = await CAT.agent.dom.readPage({ selector: ".stock-table" });

  // Elaborare i dati...
  console.log("Raccolta completata");
});
```
