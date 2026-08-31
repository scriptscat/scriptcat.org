---
title: Skill-Installation
---

Anleitung zur Installation von Skills in ScriptCat.

## Methode 1: Über das Dashboard

1. Öffnen Sie das Agent-Dashboard
2. Gehen Sie zu „Skill-Verwaltung"
3. Klicken Sie auf „Skill installieren"
4. Geben Sie die URL der Skill-Datei ein
5. Klicken Sie auf „Installieren"

## Methode 2: Über die API

```javascript
await cat.agent.skill.install({
  name: 'skill-name',
  source: 'https://example.com/skill.json',
});
```

## Methode 3: Manuelle Installation

1. Laden Sie die Skill-Datei herunter
2. Öffnen Sie das Agent-Dashboard
3. Gehen Sie zu „Skill-Verwaltung"
4. Klicken Sie auf „Skill importieren"
5. Wählen Sie die heruntergeladene Datei aus

## Skill-Aktualisierung

Skills können über das Dashboard oder per API aktualisiert werden:

```javascript
await cat.agent.skill.update('skill-name');
```

## Fehlerbehebung

- **Installationsfehler**: Überprüfen Sie die URL und die Skill-Datei
- **Kompatibilitätsprobleme**: Stellen Sie sicher, dass die Skill-Version mit Ihrer ScriptCat-Version kompatibel ist
- **Berechtigungen**: Stellen Sie sicher, dass die erforderlichen `@grant`-Berechtigungen gesetzt sind
