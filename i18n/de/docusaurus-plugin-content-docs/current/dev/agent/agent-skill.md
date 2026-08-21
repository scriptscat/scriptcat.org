---
title: Skill-System
---

Skills sind Erweiterungen für den Agenten, die spezifisches Wissen und Werkzeuge für bestimmte Domains bereitstellen.

## Skill-Struktur

Ein Skill besteht aus:
- **Prompt**: Systemanweisungen für den Agenten
- **Werkzeuge**: Skripte, die der Agent aufrufen kann
- **Referenzmaterial**: Dokumentation und Beispiele

## Skill-Verwaltung

### Skill installieren

```javascript
await cat.agent.skill.install({
  name: 'web-scraping',
  source: 'https://example.com/skill.json',
});
```

### Skills auflisten

```javascript
const skills = await cat.agent.skill.list();
```

### Skill deinstallieren

```javascript
await cat.agent.skill.uninstall('web-scraping');
```

## Beispiele

### Web-Scraping-Skill

```json
{
  "name": "web-scraping",
  "description": "Werkzeuge zum Scraping von Webseiten",
  "prompt": "Du bist ein Experte für Web-Scraping. Verwende die bereitgestellten Werkzeuge, um Daten von Webseiten zu extrahieren.",
  "tools": [
    {
      "name": "extract_table",
      "description": "Tabellen von einer Webseite extrahieren",
      "parameters": {
        "url": "URL der Webseite",
        "selector": "CSS-Selektor für die Tabelle"
      }
    }
  ]
}
```
