---
title: Konversation
---

Die Konversations-API ermöglicht die Durchführung mehrstufiger Gespräche mit KI-Modellen.

## API-Referenz

### cat.agent.conversation.create

Eine neue Konversation erstellen:

```javascript
const gespraech = await cat.agent.conversation.create({
  model: 'gpt-4',
  systemPrompt: 'Du bist ein Assistent für Web-Automatisierung.',
  maxTokens: 4096,
});
```

### cat.agent.conversation.send

Eine Nachricht in der Konversation senden:

```javascript
const antwort = await cat.agent.conversation.send(gespraech.id, {
  content: 'Analysiere den Inhalt dieser Seite und fasse ihn zusammen.',
});
```

### cat.agent.conversation.list

Alle Konversationen auflisten:

```javascript
const gespraäche = await cat.agent.conversation.list();
```

### cat.agent.conversation.get

Eine Konversation abrufen:

```javascript
const gespraech = await cat.agent.conversation.get(gespraechId);
```

### cat.agent.conversation.delete

Eine Konversation löschen:

```javascript
await cat.agent.conversation.delete(gespraechId);
```

### cat.agent.conversation.messages

Nachrichten einer Konversation abrufen:

```javascript
const nachrichten = await cat.agent.conversation.messages(gespraechId);
```

## Beispiele

### Einfache Konversation

```javascript
// ==UserScript==
// @grant       cat.agent.conversation.*
// ==/UserScript==

async function main() {
  const gespraech = await cat.agent.conversation.create({
    model: 'gpt-4',
  });

  const antwort = await cat.agent.conversation.send(gespraech.id, {
    content: 'Was ist die Hauptüberschrift dieser Seite?',
  });

  console.log(antwort.content);
}

main();
```
