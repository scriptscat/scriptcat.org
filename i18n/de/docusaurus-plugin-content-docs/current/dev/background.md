---
title: Hintergrundskripte
---

Hintergrundskripte sind spezielle Skripte, die im Hintergrund des Browsers laufen, auch wenn keine Seite geöffnet ist. Sie sind nützlich für Aufgaben, die ununterbrochen ausgeführt werden müssen.

## Arten von Hintergrundskripten

### Normale Hintergrundskripte

Diese Skripte laufen im Hintergrund und können auf Browser-Ereignisse reagieren.

### Geplante Skripte (Cron)

Diese Skripte werden basierend auf einem Cron-Zeitplan ausgeführt.

## Erstellung

1. Erstellen Sie ein neues Skript
2. Wählen Sie den Typ „Hintergrundskript" oder „Geplantes Skript"
3. Schreiben Sie Ihren Code

## Cron-Zeitplan

Für geplante Skripte können Sie Cron-Ausdrücke verwenden:

```
// minute hour day month weekday
  *      *    *   *     *       → Jede Minute
  0      *    *   *     *       → Zu Beginn jeder Stunde
  0      9    *   *     1-5     → Täglich um 9:00 Uhr (Mo-Fr)
  0      0    1   *     *       → Monatlich am 1. um Mitternacht
```

## Beispiele

### Normales Hintergrundskript

```javascript
// ==UserScript==
// @name        Mein Hintergrundskript
// @background  true
// @grant       GM_notification
// ==/UserScript==

// Auf Browser-Ereignisse reagieren
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    console.log('Seite geladen:', tab.url);
  }
});
```

### Geplantes Skript

```javascript
// ==UserScript==
// @name        Geplantes Skript
// @cron        0 9 * * 1-5
// @grant       GM_notification
// ==/UserScript==

// Wird täglich um 9:00 Uhr ausgeführt
GM_notification({
  title: 'Erinnerung',
  text: 'Zeit für Ihre tägliche Aufgabe!',
});
```

## Unterschiede zu normalen Skripten

| Feature | Normales Skript | Hintergrundskript |
|---------|----------------|-------------------|
| Ausführung | Nur auf passenden Seiten | Immer aktiv |
| Zugriff auf DOM | Ja | Nein |
| Browser-APIs | Begrenzt | Voller Zugriff |
| Speicher | Seite-basiert | Global |
