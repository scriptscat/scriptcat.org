---
title: API voor geplande taken
---

`@grant CAT.agent.task`

Met de API voor geplande taken kan een script geplande taken op basis van Cron-expressies maken, met twee uitvoeringsmodi.

## Uitvoeringsmodi

### Interne modus

Automatisch afgehandeld door het Agent-systeem:
- Maakt automatisch een gesprek aan of hervat het wanneer het Cron-schema wordt geactiveerd
- Verzendt de geconfigureerde `prompt` naar de LLM
- Er kunnen een model en Skills worden gespecificeerd
- Uitvoeringsgeschiedenis en tokenverbruik worden automatisch geregistreerd

### Gebeurtenismodus

Afgehandeld door het script zelf:
- Er wordt een gebeurtenismelding naar het script verzonden wanneer het Cron-schema wordt geactiveerd
- Het script luistert naar de gebeurtenis via `addListener`
- De afhandelingslogica is volledig aangepast

## create — een taak maken

```javascript
const task = await CAT.agent.task.create(options);
```

**Parameters (`AgentTaskCreateOptions`):**

| Parameter | Type | Vereist | Beschrijving |
|------|------|------|------|
| `name` | `string` | Ja | Taaknaam |
| `crontab` | `string` | Ja | Standaard Cron-expressie (5 velden: minuut uur dag maand weekdag) |
| `mode` | `"internal" \| "event"` | Ja | Uitvoeringsmodus |
| `enabled` | `boolean` | Nee | Of het is ingeschakeld, standaard `true` |
| `notify` | `boolean` | Nee | Of er een browsermelding wordt verzonden wanneer het wordt geactiveerd |
| `prompt` | `string` | Nee | Prompt voor de interne modus |
| `modelId` | `string` | Nee | Model-ID om te gebruiken in de interne modus |
| `skills` | `string[]` | Nee | Skills om te laden in de interne modus |
| `maxIterations` | `number` | Nee | Maximaal aantal toolaanroepronden voor de interne modus, standaard `10` |

**Retourneert `AgentTask`:**

| Veld | Type | Beschrijving |
|------|------|------|
| `id` | `string` | Taak-ID |
| `name` | `string` | Taaknaam |
| `crontab` | `string` | Cron-expressie |
| `mode` | `string` | Uitvoeringsmodus |
| `enabled` | `boolean` | Of het is ingeschakeld |
| `notify` | `boolean` | Of meldingen worden verzonden |
| `nextruntime` | `number` | Tijdstempel van volgende uitvoering |
| `lastruntime` | `number` | Tijdstempel van laatste uitvoering |
| `conversationId` | `string` | Bijbehorende gespreks-ID in de interne modus (optioneel) |
| `lastRunStatus` | `"success" \| "error"` | Status van de laatste uitvoering |
| `lastRunError` | `string` | Foutmelding van de laatste uitvoering |
| `createtime` | `number` | Aanmaaktijdstempel |

**Voorbeelden van Cron-expressies:**

| Expressie | Beschrijving |
|--------|------|
| `* * * * *` | Elke minuut |
| `0 9 * * *` | Elke dag om 09:00 |
| `0 */2 * * *` | Elke 2 uur |
| `30 8 * * 1-5` | Weekdagen om 08:30 |
| `0 0 1 * *` | 00:00 op de 1e van elke maand |

## list — alle taken weergeven

```javascript
const tasks = await CAT.agent.task.list();
```

Retourneert alle taken die door het huidige script zijn gemaakt.

## get — taakdetails ophalen

```javascript
const task = await CAT.agent.task.get(taskId);
```

Retourneert `undefined` als de taak niet bestaat.

## update — een taak bijwerken

```javascript
const task = await CAT.agent.task.update(taskId, partial);
```

**Bij te werken velden:**

```javascript
await CAT.agent.task.update(task.id, {
  name: "Nieuwe naam",
  crontab: "0 10 * * *",
  enabled: false,
  prompt: "Nieuwe prompt",
  notify: true
});
```

`nextruntime` wordt automatisch opnieuw berekend na een update.

## remove — een taak verwijderen

```javascript
const success = await CAT.agent.task.remove(taskId);
```

## runNow — onmiddellijk uitvoeren

```javascript
await CAT.agent.task.runNow(taskId);
```

Laat de taak onmiddellijk één keer draaien, zonder te wachten op het Cron-schema (niet-blokkerend, draait op de achtergrond).

## addListener — luisteren naar taaktriggers

```javascript
const listenerId = await CAT.agent.task.addListener(taskId, callback);
```

Wordt alleen gebruikt voor taken in **gebeurtenismodus**. De callback wordt uitgevoerd wanneer het Cron-schema wordt geactiveerd.

**Callback-parameter (`AgentTaskTrigger`):**

| Veld | Type | Beschrijving |
|------|------|------|
| `taskId` | `string` | Taak-ID |
| `name` | `string` | Taaknaam |
| `crontab` | `string` | Cron-expressie |
| `triggeredAt` | `number` | Triggetijdstempel |

## removeListener — een luisteraar verwijderen

```javascript
await CAT.agent.task.removeListener(listenerId);
```

## Volledige voorbeelden

### Interne modus — de AI voert het automatisch uit

```javascript
// ==UserScript==
// @name        Gepland nieuwsoverzicht
// @match       *://*/*
// @grant       CAT.agent.task
// ==/UserScript==

const task = await CAT.agent.task.create({
  name: "Dagelijks nieuwsoverzicht",
  crontab: "0 9 * * *",       // Elke dag om 9 uur
  mode: "internal",
  prompt: "Zoek het technieuws van vandaag en sla een korte samenvatting op in OPFS",
  skills: ["web-search"],
  maxIterations: 10,
  notify: true
});

console.log("Taak gemaakt, volgende uitvoering:", new Date(task.nextruntime));
```

### Gebeurtenismodus — het script handelt het zelf af

```javascript
// ==UserScript==
// @name        Geplande gegevensverzameling
// @match       *://*/*
// @grant       CAT.agent.task
// @grant       CAT.agent.dom
// ==/UserScript==

const task = await CAT.agent.task.create({
  name: "Aandelengegevens verzamelen",
  crontab: "*/30 9-15 * * 1-5", // Elke 30 minuten, 9-15 op weekdagen
  mode: "event",
  enabled: true,
  notify: false
});

await CAT.agent.task.addListener(task.id, async (trigger) => {
  console.log(`Taak geactiveerd: ${trigger.name} om ${new Date(trigger.triggeredAt)}`);

  // Aangepaste verzamellogica
  await CAT.agent.dom.navigate("https://finance.example.com/stock");
  const content = await CAT.agent.dom.readPage({ selector: ".stock-table" });

  // Verwerk de gegevens...
  console.log("Verzameling voltooid");
});
```
