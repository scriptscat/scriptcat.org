---
title: DOM-Automatisierung
---

Die DOM-Automatisierungs-API ermöglicht die Interaktion mit Webseiten über den Agenten.

## API-Referenz

### cat.agent.dom.navigate

Zu einer URL navigieren:

```javascript
await cat.agent.dom.navigate('https://example.com');
```

### cat.agent.dom.screenshot

Einen Screenshot der aktuellen Seite machen:

```javascript
const screenshot = await cat.agent.dom.screenshot();
```

### cat.agent.dom.click

Auf ein Element klicken:

```javascript
await cat.agent.dom.click('button.submit');
```

### cat.agent.dom.fill

Ein Formular ausfüllen:

```javascript
await cat.agent.dom.fill('input[name="email"]', 'test@example.com');
```

### cat.agent.dom.scroll

Zu einem Element scrollen:

```javascript
await cat.agent.dom.scroll('h2.section');
```

### cat.agent.dom.evaluate

JavaScript-Code ausführen:

```javascript
const titel = await cat.agent.dom.evaluate('document.title');
```

### cat.agent.dom.getElements

DOM-Elemente abrufen:

```javascript
const elemente = await cat.agent.dom.getElements('a.link');
```

## Beispiele

### Automatisierte Formularausfüllung

```javascript
// ==UserScript==
// @grant       cat.agent.dom.*
// ==/UserScript==

async function main() {
  await cat.agent.dom.navigate('https://example.com/formular');

  await cat.agent.dom.fill('input[name="name"]', 'Max Mustermann');
  await cat.agent.dom.fill('input[name="email"]', 'max@beispiel.de');
  await cat.agent.dom.fill('textarea[name="nachricht"]', 'Hallo!');

  await cat.agent.dom.click('button[type="submit"]');
}

main();
```
