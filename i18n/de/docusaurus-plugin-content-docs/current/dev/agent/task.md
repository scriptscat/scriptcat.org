---
title: Geplante Aufgaben
---

Geplante Aufgaben ermöglichen die automatische Ausführung von Agent-Aktionen basierend auf einem Cron-Zeitplan.

## Aufgabe erstellen

```javascript
await cat.agent.task.create({
  name: 'Tägliche Zusammenfassung',
  cron: '0 9 * * *',
  prompt: 'Fasse die neuesten Nachrichten zusammen',
  model: 'gpt-4',
});
```

## Aufgaben verwalten

### Aufgaben auflisten

```javascript
const aufgaben = await cat.agent.task.list();
```

### Aufgabe abrufen

```javascript
const aufgabe = await cat.agent.task.get(aufgabenId);
```

### Aufgabe aktualisieren

```javascript
await cat.agent.task.update(aufgabenId, {
  cron: '0 10 * * *',
  aktiv: true,
});
```

### Aufgabe löschen

```javascript
await cat.agent.task.delete(aufgabenId);
```

### Aufgabe pausieren/fortsetzen

```javascript
await cat.agent.task.pause(aufgabenId);
await cat.agent.task.resume(aufgabenId);
```

## Cron-Syntax

```
Minute Stunde Tag Monat Wochentag
  *      *    *   *     *
```

### Beispiele

- `0 9 * * *` — Täglich um 9:00 Uhr
- `*/30 * * * *` — Alle 30 Minuten
- `0 0 1 * *` — Monatlich am 1. um Mitternacht
- `0 9 * * 1-5` — Werktags um 9:00 Uhr
- `0 18 * * 0` — Sonntags um 18:00 Uhr

## Aufgaben-Protokolle

Ausführungsprotokolle können über das Dashboard oder per API abgerufen werden:

```javascript
const protokolle = await cat.agent.task.logs(aufgabenId);
```

## Beispiel: Tägliche Zusammenfassung

```javascript
// ==UserScript==
// @grant       cat.agent.task.*
// @grant       cat.agent.conversation.*
// ==/UserScript==

async function setup() {
  await cat.agent.task.create({
    name: 'Tägliche Tech-Nachrichten',
    cron: '0 8 * * *',
    prompt: 'Suche die neuesten Tech-Nachrichten und erstelle eine Zusammenfassung mit den 5 wichtigsten Punkten.',
    model: 'gpt-4',
  });
}

setup();
```
