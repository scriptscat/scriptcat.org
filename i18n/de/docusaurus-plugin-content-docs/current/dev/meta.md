---
title: Metadaten
---

Skriptmetadaten werden im Kopf des Skripts als Kommentare definiert. Diese Metadaten steuern das Verhalten von ScriptCat bei der Installation und Ausführung des Skripts.

## Grundlegende Metadaten

```javascript
// ==UserScript==
// @name        Mein Skript
// @namespace   http://mein-namespace.de/
// @version     1.0
// @description Beschreibung meines Skripts
// @author      Autor
// @match       https://example.com/*
// @grant       GM_getValue
// ==/UserScript==
```

## Wichtige Metadaten

### @name
Der Name des Skripts, der im ScriptCat-Dashboard angezeigt wird.

### @namespace
Ein eindeutiger Namespace für das Skript. Hilft bei der Identifikation.

### @version
Die Version des Skripts. ScriptCat verwendet diese Version, um zu prüfen, ob Updates verfügbar sind.

### @description
Eine Beschreibung des Skripts.

### @match / @include
Definiert, auf welchen Seiten das Skript ausgeführt werden soll.

- `@match https://example.com/*` — Führt auf example.com aus
- `@match *://*.example.com/*` — Führt auf allen Unterdomänen aus
- `@include https://example.com/*` — Ähnlich wie @match

### @exclude
Schließt bestimmte URLs von der Ausführung aus.

### @grant
Definiert, welche GM-APIs das Skript verwenden darf.

### @require
Lädt externe Bibliotheken, die vor dem Skript ausgeführt werden.

### @resource
Lädt externe Ressourcen (CSS, Bilder), die im Skript verwendet werden können.

### @run-at
Bestimmt, wann das Skript ausgeführt wird:

- `document-start` — Vor dem Laden des DOM
- `document-body` — Wenn der Body geladen wird
- `document-end` — Nach dem Laden des DOM
- `document-idle` — Nachdem die Seite vollständig geladen ist
- `context-menu` — Bei Rechtsklick (nur über Kontextmenü)

### @unwrap
Wenn gesetzt, wird das Skript direkt in die Seite injiziert, ohne Sandbox-Verpackung.

### @noframes
Verhindert die Ausführung des Skripts in iframes.

### @grant
Beispiele für Berechtigungen:

```javascript
// ==UserScript==
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_xmlhttpRequest
// @grant       GM_addStyle
// @grant       GM_notification
// @grant       GM_setClipboard
// @grant       GM_getTab
// @grant       GM_saveTab
// @grant       GM_getTabs
// @grant       window.close
// @grant       window.focus
// @grant       GM_addElement
// @grant       GM_registerMenuCommand
// @grant       GM_unregisterMenuCommand
// @grant       GM_openInTab
// @grant       GM_download
// @grant       GM_info
// @grant       GM_cookie
// @grant       cat.*
// ==/UserScript==
```

### @connect
Erlaubt Cross-Origin-Anfragen für bestimmte Domains:

```javascript
// ==UserScript==
// @connect     api.example.com
// @connect     *
// ==/UserScript==
```

### @homepage / @supportURL / @downloadURL
URLs für Homepage, Support und direkten Download.

### @icon
URL zu einem Icon für das Skript.

### @license
Lizenz des Skripts.
