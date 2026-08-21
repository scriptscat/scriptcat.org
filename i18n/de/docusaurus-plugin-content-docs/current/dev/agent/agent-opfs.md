---
title: OPFS
---

OPFS (Origin Private File System) ist eine Dateisystem-API, die es ScriptCat-Skripten ermöglicht, Daten dauerhaft im Browser zu speichern.

## API-Referenz

### cat.agent.opfs.write

In eine Datei schreiben:

```javascript
await cat.agent.opfs.write('/daten/datei.txt', 'Hallo Welt!');
```

### cat.agent.opfs.read

Aus einer Datei lesen:

```javascript
const inhalt = await cat.agent.opfs.read('/daten/datei.txt');
```

### cat.agent.opfs.list

Dateien in einem Verzeichnis auflisten:

```javascript
const dateien = await cat.agent.opfs.list('/daten/');
```

### cat.agent.opfs.delete

Eine Datei löschen:

```javascript
await cat.agent.opfs.delete('/daten/datei.txt');
```

### cat.agent.opfs.mkdir

Ein Verzeichnis erstellen:

```javascript
await cat.agent.opfs.mkdir('/daten/unterverzeichnis');
```

## Beispiele

### Daten speichern

```javascript
// ==UserScript==
// @grant       cat.agent.opfs.*
// ==/UserScript==

async function main() {
  // Konfiguration speichern
  await cat.agent.opfs.write('/config/einstellungen.json', JSON.stringify({
    thema: 'dunkel',
    benachrichtigungen: true,
  }));

  // Konfiguration lesen
  const config = JSON.parse(await cat.agent.opfs.read('/config/einstellungen.json'));
  console.log(config);
}

main();
```

## Begrenzungen

- OPFS ist an die Origin des Skripts gebunden
- Maximale Dateigröße variiert je nach Browser
- Kein Zugriff aus iframes (außer mit @unwrap)
