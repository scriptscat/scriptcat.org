---
title: Eingebaute Werkzeuge
---

ScriptCat AI Agent bietet 11 eingebaute Werkzeuge, die der Agent automatisch aufrufen kann, um Aufgaben zu erledigen.

## Web-Werkzeuge

### web_fetch

Inhalte von einer URL abrufen:

```json
{
  "tool": "web_fetch",
  "input": {
    "url": "https://example.com",
    "selector": "main"
  }
}
```

### web_search

Im Internet suchen:

```json
{
  "tool": "web_search",
  "input": {
    "query": "ScriptCat API Dokumentation",
    "numResults": 5
  }
}
```

## Tab-Werkzeuge

### tab_list

Alle offenen Tabs auflisten:

```json
{
  "tool": "tab_list",
  "input": {}
}
```

### tab_navigate

Zu einer URL navigieren:

```json
{
  "tool": "tab_navigate",
  "input": {
    "url": "https://example.com"
  }
}
```

### tab_screenshot

Einen Screenshot des aktuellen Tabs machen:

```json
{
  "tool": "tab_screenshot",
  "input": {}
}
```

## DOM-Werkzeuge

### dom_click

Auf ein Element klicken:

```json
{
  "tool": "dom_click",
  "input": {
    "selector": "button.submit"
  }
}
```

### dom_fill

Ein Formular ausfüllen:

```json
{
  "tool": "dom_fill",
  "input": {
    "selector": "input[name='email']",
    "value": "test@example.com"
  }
}
```

### dom_scroll

Zu einem Element scrollen:

```json
{
  "tool": "dom_scroll",
  "input": {
    "selector": "h2.section"
  }
}
```

### dom_evaluate

JavaScript-Code auf der Seite ausführen:

```json
{
  "tool": "dom_evaluate",
  "input": {
    "code": "document.title"
  }
}
```

## Datei-Werkzeuge

### opfs_write

In die OPFS-Dateisystem schreiben:

```json
{
  "tool": "opfs_write",
  "input": {
    "path": "/daten/datei.txt",
    "content": "Hallo Welt!"
  }
}
```

### opfs_read

Aus der OPFS-Dateisystem lesen:

```json
{
  "tool": "opfs_read",
  "input": {
    "path": "/daten/datei.txt"
  }
}
```
