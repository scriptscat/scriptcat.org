---
title: Skill-Entwicklung
---

Anleitung zur Entwicklung eigener Skills für den ScriptCat Agenten.

## Skill-Datei erstellen

Erstellen Sie eine JSON-Datei mit der Skill-Definition:

```json
{
  "name": "mein-skill",
  "version": "1.0.0",
  "description": "Beschreibung meines Skills",
  "author": "Ihr Name",
  "prompt": "Systemanweisungen für den Agenten",
  "tools": [
    {
      "name": "werkzeug1",
      "description": "Beschreibung des Werkzeugs",
      "parameters": {
        "param1": {
          "type": "string",
          "description": "Beschreibung des Parameters"
        }
      },
      "handler": "werkzeug1.js"
    }
  ],
  "resources": [
    {
      "name": "dokumentation",
      "type": "markdown",
      "path": "docs/readme.md"
    }
  ]
}
```

## Werkzeuge definieren

Jedes Werkzeug benötigt:
- **name**: Eindeutiger Name
- **description**: Beschreibung für den Agenten
- **parameters**: JSON-Schema der Parameter
- **handler**: Pfad zur Ausführungsdatei

### Handler-Datei

```javascript
// werkzeug1.js
module.exports = async function(params) {
  // Logik des Werkzeugs
  const ergebnis = await fetch(params.url);
  return await ergebnis.text();
};
```

## Ressourcen

Ressourcen sind Referenzmaterialien, die dem Agenten zur Verfügung stehen:
- **markdown**: Markdown-Dateien
- **json**: JSON-Daten
- **text**: Reiner Text

## Testen

1. Skill lokal developen
2. In ScriptCat importieren
3. Über das Agent-Dashboard testen
4. Fehler in den Agent-Logs prüfen

## Veröffentlichung

Skills können über GitHub oder einen eigenen Server verteilt werden. Veröffentlichen Sie Ihre Skills, um anderen Nutzern zu helfen!
