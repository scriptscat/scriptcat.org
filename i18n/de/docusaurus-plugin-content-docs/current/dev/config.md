---
title: Konfiguration
---

ScriptCat bietet verschiedene Konfigurationsoptionen für die Anpassung des Verhaltens.

## Skriptkonfiguration

Jedes Skript kann eigene Konfigurationsoptionen über `UserConfig` definieren:

```javascript
// ==UserScript==
// @name        Mein Skript
// @grant       GM_getValue
// @grant       GM_setValue
// ==/UserScript==

// Konfiguration definieren
if (!GM_getValue('config-initialized')) {
  GM_setValue('theme', 'dark');
  GM_setValue('notifications', true);
  GM_setValue('config-initialized', true);
}
```

## Benutzerkonfiguration

ScriptCat bietet eine benutzerdefinierte Konfigurationsseite, die über die Dashboardeinstellungen accessed werden kann. Skripte können eigene Konfigurationsfelder definieren, die den Benutzern angezeigt werden.

## Konfigurationstypen

- **Text**: Freitexteingabe
- **Nummer**: Numerische Eingabe
- **Schalter**: Ein/Aus-Schalter
- **Auswahl**: Auswahl aus vordefinierten Optionen

## Zugriff auf Konfiguration

```javascript
// Aktuellen Wert lesen
const value = GM_getValue('config-key', standardwert);

// Wert setzen
GM_setValue('config-key', neuerWert);
```
