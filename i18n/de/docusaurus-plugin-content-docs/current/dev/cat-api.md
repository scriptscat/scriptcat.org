---
title: CAT API
---

Das `CAT`-Objekt ist ein Erweiterungs-API-Objekt, das spezielle Funktionen für ScriptCat-Skripte bietet, die über die Standard-GM-API hinausgehen.

## Verwendung

```javascript
// ==UserScript==
// @grant       cat.*
// ==/UserScript==
```

## Verfügbare Funktionen

### cat.notification

Zeigt eine Benachrichtigung an:

```javascript
cat.notification({
  title: 'Titel',
  text: 'Nachricht',
  onclick: () => {
    console.log('Benachrichtigung angeklickt');
  }
});
```

### cat.openTab

Öffnet einen neuen Tab:

```javascript
cat.openTab('https://example.com');
```

### cat.getTab

Aktuelle Tab-Informationen abrufen:

```javascript
const tab = await cat.getTab();
console.log(tab.url);
```

### cat.saveTab

Tab-Daten speichern:

```javascript
await cat.saveTab({ data: 'meine Daten' });
```

### cat.getTabs

Alle geöffneten Tabs abrufen:

```javascript
const tabs = await cat.getTabs();
console.log(tabs);
```

### cat.getScript

Informationen über das aktuelle Skript abrufen:

```javascript
const info = cat.getScript();
console.log(info.name, info.version);
```

## Agent-API (CAT.agent.*)

Für die Agent-API siehe die entsprechende Dokumentation im Agent-Bereich.
