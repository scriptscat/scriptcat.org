---
title: Modell-Konfiguration
---

Die Modell-Konfiguration ermöglicht die Einstellung von API-Schlüsseln und die Auswahl des zu verwendenden KI-Modells.

## Unterstützte Modelle

- **OpenAI-kompatible**: GPT-4, GPT-3.5, alle OpenAI-API-kompatiblen Modelle
- **Anthropic**: Claude 3 Opus, Claude 3 Sonnet, Claude 3 Haiku

## Konfiguration

### API-Schlüssel

```javascript
await cat.agent.model.setApiKey({
  provider: 'openai',
  apiKey: 'sk-...',
});
```

### Modell auswählen

```javascript
await cat.agent.model.setDefault({
  model: 'gpt-4',
  temperature: 0.7,
  maxTokens: 4096,
});
```

### Modell abrufen

```javascript
const modell = await cat.agent.model.getDefault();
```

## Prompt Caching

ScriptCat unterstützt Prompt Caching, um Token-Verbrauch und Kosten zu reduzieren. Häufig verwendete Kontexte werden zwischengespeichert und wiederverwendet.
