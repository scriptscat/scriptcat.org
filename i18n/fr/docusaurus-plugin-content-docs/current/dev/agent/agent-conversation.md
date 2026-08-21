---
title: API de dialogue
---

`@grant CAT.agent.conversation`

L'API de dialogue est le cœur du système Agent : elle permet à un script de créer des dialogues IA, d'envoyer des messages et de recevoir des réponses.

## Créer un dialogue

```javascript
const conv = await CAT.agent.conversation.create(options?);
```

### ConversationCreateOptions

| Paramètre | Type | Défaut | Description |
|------|------|--------|------|
| `id` | `string` | généré automatiquement | ID du dialogue, utilisé pour reprendre un dialogue existant |
| `system` | `string` | — | Invite système personnalisée, ajoutée après l'invite intégrée |
| `model` | `string` | modèle par défaut | ID du modèle (obtenu après configuration sur la page de gestion) |
| `maxIterations` | `number` | `20` | Nombre maximal de boucles d'appels d'outils au sein d'un tour de dialogue |
| `skills` | `"auto" \| string[]` | — | `"auto"` charge automatiquement tous les Skills, ou un tableau de noms de Skills spécifiques |
| `tools` | `ToolDefinition[]` | — | Liste d'outils personnalisés (voir ci-dessous) |
| `commands` | `Record<string, CommandHandler>` | — | Commandes de dialogue personnalisées |
| `ephemeral` | `boolean` | `false` | Un dialogue éphémère qui n'est pas persisté dans le stockage |
| `cache` | `boolean` | `true` | Active la mise en cache des invites (réduit la consommation de jetons) |

### Outils personnalisés

Un script peut enregistrer ses propres outils que l'IA pourra appeler :

```javascript
const conv = await CAT.agent.conversation.create({
  tools: [{
    name: "get_weather",
    description: "Get weather information for the specified city",
    parameters: {
      type: "object",
      properties: {
        city: {
          type: "string",
          description: "City name"
        },
        unit: {
          type: "string",
          enum: ["celsius", "fahrenheit"],
          description: "Temperature unit"
        }
      },
      required: ["city"]
    },
    handler: async (args) => {
      // args = { city: "Beijing", unit: "celsius" }
      const data = await fetchWeather(args.city, args.unit);
      return { temperature: data.temp, condition: data.condition };
    }
  }]
});
```

Les `parameters` d'un outil suivent la spécification [JSON Schema](https://json-schema.org/). L'IA utilise `description` pour comprendre quand et comment appeler l'outil.

### Commandes personnalisées

Des commandes personnalisées commençant par `/` peuvent être enregistrées :

```javascript
const conv = await CAT.agent.conversation.create({
  commands: {
    "/export": async (args) => {
      // Triggered when the user types "/export pdf"
      await exportToPdf(args);
      return "Export complete";
    }
  }
});
```

Commandes intégrées : `/new` (efface l'historique du dialogue) — peut être remplacée par un gestionnaire personnalisé.

## Obtenir un dialogue existant

```javascript
const conv = await CAT.agent.conversation.get(conversationId);
// Returns null if the conversation doesn't exist
```

## Méthodes de ConversationInstance

### chat — dialogue synchrone

```javascript
const reply = await conv.chat(content, options?);
```

Envoie un message et attend la réponse complète. L'IA peut appeler des outils en répondant ; `chat` attend la fin de toute l'exécution des outils avant de retourner le résultat final.

**Paramètres :**

| Paramètre | Type | Description |
|------|------|------|
| `content` | `string \| ContentBlock[]` | Contenu du message, texte ou blocs de contenu multimodaux |
| `options.tools` | `ToolDefinition[]` | Outils supplémentaires à ajouter pour cet appel uniquement (fusionnés avec les outils passés à la création) |

**Retourne `ChatReply` :**

| Champ | Type | Description |
|------|------|------|
| `content` | `string \| ContentBlock[]` | Contenu de la réponse de l'IA |
| `thinking` | `string` | Processus de réflexion du modèle (seuls certains modèles le prennent en charge) |
| `toolCalls` | `ToolCall[]` | Enregistrement des appels d'outils effectués pendant cette réponse |
| `usage` | `{ inputTokens, outputTokens }` | Consommation de jetons |
| `command` | `boolean` | Indique si cette réponse a été déclenchée par une commande |

### chatStream — dialogue en flux

```javascript
const stream = await conv.chatStream(content, options?);
for await (const chunk of stream) {
  // Handle streaming events
}
```

Reçoit la réponse de l'IA en temps réel — utile lorsque vous devez afficher la sortie de manière incrémentale.

**Types d'événements `StreamChunk` :**

| type | Champs | Description |
|------|------|------|
| `content_delta` | `content: string` | Contenu texte incrémental |
| `thinking_delta` | `thinking: string` | Contenu de réflexion incrémental |
| `tool_call` | `toolCall: ToolCall` | Informations sur l'appel d'outil (déclenché lors des changements d'état) |
| `content_block` | `block: ContentBlock` | Un bloc de contenu (image, fichier, etc.) |
| `done` | `usage: { inputTokens, outputTokens }` | Tour de dialogue terminé |
| `error` | `error: string, errorCode?: string` | Erreur |

**Codes d'erreur (`errorCode`) :**

| Code | Description |
|--------|------|
| `rate_limit` | Limite de débit de l'API atteinte ; généralement relancé automatiquement |
| `auth` | Échec de l'authentification ; vérifiez la clé API |
| `tool_timeout` | Délai d'expiration de l'exécution d'un outil |
| `max_iterations` | Nombre maximal de boucles d'appels d'outils atteint |
| `api_error` | Autre erreur d'API |

### getMessages — obtenir l'historique des messages

```javascript
const messages = await conv.getMessages();
```

Retourne un `ChatMessage[]` contenant tous les messages du dialogue.

**Forme de `ChatMessage` :**

| Champ | Type | Description |
|------|------|------|
| `id` | `string` | ID du message |
| `role` | `"user" \| "assistant" \| "system" \| "tool"` | Rôle du message |
| `content` | `string \| ContentBlock[]` | Contenu du message |
| `thinking` | `{ content: string }` | Processus de réflexion (messages assistant — notez qu'il s'agit d'un objet, pas d'une simple chaîne) |
| `error` | `string` | Message d'erreur si ce tour a échoué |
| `modelId` | `string` | ID du modèle utilisé pour ce message |
| `durationMs` | `number` | Durée totale de la réponse en ms |
| `parentId` | `string` | ID du message parent (pour la ramification) |
| `toolCalls` | `ToolCall[]` | Enregistrement des appels d'outils (messages assistant) |
| `toolCallId` | `string` | ID de l'appel d'outil correspondant (messages d'outil) |
| `usage` | `{ inputTokens, outputTokens }` | Consommation de jetons |
| `createtime` | `number` | Horodatage de création |

### clear — effacer le dialogue

```javascript
await conv.clear();
```

Efface tout l'historique des messages du dialogue.

### save — persister le dialogue

```javascript
await conv.save();
```

Enregistre les métadonnées du dialogue dans le stockage. Les dialogues éphémères (`ephemeral: true`) ne sont pas enregistrés par défaut ; appeler cette méthode les convertit en dialogue persisté.


### Propriétés d'instance

| Propriété | Type | Description |
|------|------|------|
| `id` | `string` | ID du dialogue |
| `title` | `string` | Titre du dialogue |
| `modelId` | `string` | ID du modèle utilisé |

## Contenu multimodal

Le contenu d'un message peut être une chaîne de texte simple, ou un tableau `ContentBlock[]` pour prendre en charge les entrées multimodales :

```javascript
// Send text + an image
await conv.chat([
  { type: "text", text: "Please analyze what's in this image" },
  { type: "image", attachmentId: "img-id", mimeType: "image/png" }
]);
```

### Types de ContentBlock

| type | Champs obligatoires | Description |
|------|---------|------|
| `text` | `text: string` | Contenu texte |
| `image` | `attachmentId: string, mimeType: string` | Image ; nécessite un modèle avec capacités visuelles |
| `file` | `attachmentId: string, mimeType: string, name: string` | Fichier |
| `audio` | `attachmentId: string, mimeType: string` | Audio |

## Dialogues éphémères vs persistés

| Fonctionnalité | Dialogue persisté (défaut) | Dialogue éphémère |
|------|-------------------|---------------------|
| Stockage des messages | Persisté dans OPFS | En mémoire uniquement |
| Outils intégrés | Tous disponibles | Non inclus ; fournissez les vôtres via `tools` |
| Liste des dialogues | Visible | Non visible |
| Mise en cache des invites | prise en charge | Peut être désactivée |
| Cas d'usage | Dialogues à usage général | Tâches légères ponctuelles et questions-réponses rapides |

## Gestion du contexte

### Compression automatique

Lorsque l'utilisation du contexte du dialogue dépasse **80 %** de la fenêtre de contexte du modèle, le système appelle automatiquement le LLM pour générer un résumé de l'historique, remplaçant les messages plus anciens afin de libérer de l'espace.

### Mise en cache des invites

Activée par défaut. Pour les modèles Anthropic, l'invite système et l'historique des messages sont mis en cache, ce qui réduit considérablement la consommation de jetons et la latence des tours répétés.

Peut être désactivée via `cache: false` :

```javascript
const conv = await CAT.agent.conversation.create({ cache: false });
```

## Exemple complet

```javascript
// ==UserScript==
// @name        Smart translation assistant
// @match       *://*/*
// @grant       CAT.agent.conversation
// @grant       CAT.agent.dom
// ==/UserScript==

// Create a conversation with a custom tool
const conv = await CAT.agent.conversation.create({
  system: "You are a translation assistant. The user will give you web page content — please translate it into Chinese.",
  tools: [{
    name: "get_selection",
    description: "Get the text the user has selected on the page",
    parameters: { type: "object", properties: {} },
    handler: async () => {
      return { text: window.getSelection()?.toString() || "No text selected" };
    }
  }]
});

// Stream the translation result
const stream = await conv.chatStream("Please get the selected text and translate it into Chinese");
let result = "";
for await (const chunk of stream) {
  if (chunk.type === "content_delta") {
    result += chunk.content;
    // Update the UI in real time
    updateTranslationUI(result);
  }
}
```
