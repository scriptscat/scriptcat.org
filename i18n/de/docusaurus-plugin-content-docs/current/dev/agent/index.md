---
title: Agent
---

ScriptCat AI Agent ist ein KI-gestütztes Agentsystem, das es Benutzern ermöglicht, Browser-Aktionen zu automatisieren, Web-Daten zu extrahieren, Dateien zu verwalten und geplante Aufgaben über natürlichsprachlichen Dialog auszuführen.

## Funktionen

- **Multi-Modell-Unterstützung**: OpenAI-kompatible und native Anthropic-Formate
- **11 eingebaute Werkzeuge**: Web-Fetch/Suche, Tab-Verwaltung, OPFS, Code-Ausführung
- **Skill-System**: Erweiterbare Domain-Kenntnisse
- **MCP-Integration**: Externe Werkzeugserver
- **DOM-Automatisierung**: Navigation, Screenshots, Klicks
- **Geplante Aufgaben**: Cron-basierte Ausführung
- **Sub-Agenten**: Unabhängige Teilaufgaben

## API-Nutzung

```javascript
// ==UserScript==
// @grant       cat.agent.*
// ==/UserScript==

// Konversation starten
const gespraech = await cat.agent.conversation.create({
  model: 'gpt-4',
  systemPrompt: 'Du bist ein Assistent.',
});

// Nachricht senden
const antwort = await cat.agent.conversation.send(gespraech.id, {
  content: 'Analysiere diese Seite',
});
```

## Dashboard

Das Agent-Dashboard bietet 6 Seiten:
1. **Chat**: Konversation mit dem Agenten
2. **Modell-Konfiguration**: API-Schlüssel und Modellauswahl
3. **Skill-Verwaltung**: Installierte Skills anzeigen und verwalten
4. **Geplante Aufgaben**: Cron-basierte Aufgaben verwalten
5. **MCP-Server**: Externe Werkzeugserver verwalten
6. **OPFS-Browser**: Dateisystem durchsuchen
