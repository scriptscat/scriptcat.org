---
title: API-Referenz
---

Dies ist die vollständige API-Referenz für ScriptCat-Skripte. ScriptCat ist kompatibel mit den Tampermonkey/Greasemonkey-APIs und erweitert diese um zusätzliche Funktionen.

## GM API

### GM_getValue

Einen Wert aus dem lokalen Speicher lesen:

```javascript
const wert = GM_getValue('schlüssel', standardwert);
```

### GM_setValue

Einen Wert im lokalen Speicher setzen:

```javascript
GM_setValue('schlüssel', wert);
```

### GM_deleteValue

Einen Wert aus dem Speicher löschen:

```javascript
GM_deleteValue('schlüssel');
```

### GM_listValues

Alle gespeicherten Schlüssel auflisten:

```javascript
const schluessel = GM_listValues();
```

### GM_addStyle

CSS-Code zur Seite hinzufügen:

```javascript
GM_addStyle(`
  .meine-klasse {
    color: red;
    font-size: 14px;
  }
`);
```

### GM_notification

Eine Benachrichtigung anzeigen:

```javascript
GM_notification({
  title: 'Titel',
  text: 'Nachricht',
  image: 'https://example.com/icon.png',
  onclick: () => { /* Klick-Handler */ },
  ondone: () => { /* Benachrichtigung geschlossen */ },
  timeout: 5000,
});
```

### GM_setClipboard

Text in die Zwischenablage kopieren:

```javascript
GM_setClipboard('Text zum Kopieren');
```

### GM_openInTab

Einen neuen Tab öffnen:

```javascript
const tab = GM_openInTab('https://example.com', {
  active: true,
  insert: true,
  pinned: false,
  incognito: false,
});
```

### GM_closeTab

Einen Tab schließen:

```javascript
GM_closeTab(tabId);
```

### GM_getTab

Daten für den aktuellen Tab abrufen:

```javascript
const tabDaten = GM_getTab('meineDaten');
```

### GM_saveTab

Daten für den aktuellen Tab speichern:

```javascript
GM_saveTab({ name: 'wert' });
```

### GM_getTabs

Daten aller Tabs abrufen:

```javascript
const alleTabs = GM_getTabs();
```

### GM_addElement

Ein Element zur Seite hinzufügen:

```javascript
GM_addElement('div', {
  id: 'mein-div',
  className: 'meine-klasse',
  textContent: 'Hallo Welt!',
  parent: document.body,
});
```

### GM_registerMenuCommand

Einen Menüeintrag registrieren:

```javascript
GM_registerMenuCommand('Meine Aktion', () => {
  alert('Aktion ausgeführt!');
});
```

### GM_unregisterMenuCommand

Einen Menüeintrag entfernen:

```javascript
GM_unregisterMenuCommand(menuId);
```

### GM_download

Eine Datei herunterladen:

```javascript
GM_download({
  url: 'https://example.com/datei.zip',
  name: 'datei.zip',
  saveAs: true,
  conflictAction: 'uniquify',
  onload: () => { console.log('Download abgeschlossen'); },
  onerror: (e) => { console.error('Download fehlgeschlagen', e); },
});
```

### GM_xmlhttpRequest

Eine HTTP-Anfrage senden:

```javascript
GM_xmlhttpRequest({
  method: 'GET',
  url: 'https://api.example.com/data',
  headers: {
    'Authorization': 'Bearer token',
  },
  onload: (response) => {
    console.log(response.responseText);
  },
  onerror: (error) => {
    console.error('Fehler:', error);
  },
});
```

### GM_cookie

Cookies verwalten (nur mit `@grant GM_cookie`):

```javascript
// Cookie abrufen
GM_cookie.getAll({}, (cookies) => {
  console.log(cookies);
});

// Cookie setzen
GM_cookie.set({
  url: 'https://example.com',
  name: 'cookie-name',
  value: 'cookie-wert',
});

// Cookie löschen
GM_cookie.delete({
  url: 'https://example.com',
  name: 'cookie-name',
});
```

## GM Info

Informationen über das aktuelle Skript:

```javascript
const info = GM_info;
console.log(info.script.name);
console.log(info.script.version);
console.log(info.script.namespace);
console.log(info.script.description);
console.log(info.scriptMatches);
console.log(info.scriptHandler);
console.log(info.version);
```

## Window-Objekt

### window.close

Das aktuelle Fenster schließen:

```javascript
window.close();
```

### window.focus

Das aktuelle Fenster fokussieren:

```javascript
window.focus();
```

## Cross-Origin-Anfragen

Mit `@grant GM_xmlhttpRequest` können Cross-Origin-Anfragen gesendet werden. Dafür muss die Domain über `@connect` erlaubt sein:

```javascript
// ==UserScript==
// @grant       GM_xmlhttpRequest
// @connect     api.example.com
// ==/UserScript==

GM_xmlhttpRequest({
  method: 'GET',
  url: 'https://api.example.com/data',
  onload: (response) => {
    console.log(JSON.parse(response.responseText));
  },
});
```

## Compliance mit Tampermonkey

ScriptCat ist vollständig kompatibel mit den Tampermonkey-APIs. Skripte, die für Tampermonkey geschrieben wurden, sollten auch in ScriptCat funktionieren. Bei Kompatibilitätsproblemen erstellen Sie bitte ein Issue auf GitHub.
