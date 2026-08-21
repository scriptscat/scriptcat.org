---
title: API Conversazione
---

`@grant CAT.agent.conversation`

L'API Conversazione è il nucleo del sistema Agent, permettendo a uno script di creare conversazioni AI, inviare messaggi e ricevere risposte.

## Creare una conversazione

```javascript
const conv = await CAT.agent.conversation.create(options?);
```

### ConversationCreateOptions

| Parametro | Tipo | Predefinito | Descrizione |
|------|------|--------|------|
| `id` | `string` | auto-generato | ID conversazione, usato per riprendere una conversazione esistente |
| `system` | `string` | — | Prompt di sistema personalizzato, aggiunto dopo il prompt integrato |
| `model` | `string` | modello predefinito | ID del modello (ottenuto dopo averlo configurato nella pagina di gestione) |
| `maxIterations` | `number` | `20` | Conteggio massimo di cicli di chiamate a strumenti in un singolo turno di conversazione |
| `skills` | `"auto" \| string[]` | — | `"auto"` carica tutte le Skill automaticamente, o un array di nomi di Skill specifiche |
| `tools` | `ToolDefinition[]` | — | Elenco di strumenti personalizzati (vedi sotto) |
| `commands` | `Record<string, CommandHandler>` | — | Comandi di conversazione personalizzati |
| `ephemeral` | `boolean` | `false` | Una conversazione effimera che non viene persistita |
| `cache` | `boolean` | `true` | Abilita la cache dei prompt (riduce l'uso dei token) |

### Strumenti personalizzati

Uno script può registrare i propri strumenti per l'IA da chiamare:

```javascript
const conv = await CAT.agent.conversation.create({
  tools: [{
    name: "get_weather",
    description: "Ottieni informazioni meteo per la città specificata",
    parameters: {
      type: "object",
      properties: {
        city: {
          type: "string",
          description: "Nome della città"
        },
        unit: {
          type: "string",
          enum: ["celsius", "fahrenheit"],
          description: "Unità di temperatura"
        }
      },
      required: ["city"]
    },
    handler: async (args) => {
      // args = { city: "Roma", unit: "celsius" }
      const data = await fetchWeather(args.city, args.unit);
      return { temperature: data.temp, condition: data.condition };
    }
  }]
});
```

I `parameters` di uno strumento seguono la specifica [JSON Schema](https://json-schema.org/). L'IA usa `description` per capire quando e come chiamare lo strumento.

### Comandi personalizzati

Si possono registrare comandi personalizzati che iniziano con `/`:

```javascript
const conv = await CAT.agent.conversation.create({
  commands: {
    "/export": async (args) => {
      // Attivato quando l'utente digita "/export pdf"
      await exportToPdf(args);
      return "Esportazione completata";
    }
  }
});
```

Comandi integrati: `/new` (cancella la cronologia della conversazione) — può essere sovrascritto da un gestore personalizzato.

## Ottenere una conversazione esistente

```javascript
const conv = await CAT.agent.conversation.get(conversationId);
// Restituisce null se la conversazione non esiste
```

## Metodi di ConversationInstance

### chat — chat sincrona

```javascript
const reply = await conv.chat(content, options?);
```

Invia un messaggio e attende la risposta completa. L'IA può chiamare strumenti mentre risponde; `chat` attende che tutta l'esecuzione degli strumenti sia completata prima di restituire il risultato finale.

**Parametri:**

| Parametro | Tipo | Descrizione |
|------|------|------|
| `content` | `string \| ContentBlock[]` | Contenuto del messaggio, testo o blocchi di contenuto multimodali |
| `options.tools` | `ToolDefinition[]` | Strumenti extra da aggiungere solo per questa chiamata (combinati con gli strumenti passati alla creazione) |

**Restituisce `ChatReply`:**

| Campo | Tipo | Descrizione |
|------|------|------|
| `content` | `string \| ContentBlock[]` | Il contenuto della risposta dell'IA |
| `thinking` | `string` | Il processo di ragionamento del modello (solo alcuni modelli supportano questo) |
| `toolCalls` | `ToolCall[]` | Registro delle chiamate a strumenti effettuate durante questa risposta |
| `usage` | `{ inputTokens, outputTokens }` | Uso dei token |
| `command` | `boolean` | Se questa risposta è stata attivata da un comando |

### chatStream — chat in streaming

```javascript
const stream = await conv.chatStream(content, options?);
for await (const chunk of stream) {
  // Gestisci gli eventi di streaming
}
```

Riceve la risposta dell'IA in tempo reale — utile quando devi mostrare l'output in modo incrementale.

**Tipi di eventi `StreamChunk`:**

| tipo | Campi | Descrizione |
|------|------|------|
| `content_delta` | `content: string` | Contenuto testuale incrementale |
| `thinking_delta` | `thinking: string` | Contenuto di ragionamento incrementale |
| `tool_call` | `toolCall: ToolCall` | Info di chiamata a strumento (scattato sui cambi di stato) |
| `content_block` | `block: ContentBlock` | Un blocco di contenuto (immagine, file, ecc.) |
| `done` | `usage: { inputTokens, outputTokens }` | Turno di conversazione completo |
| `error` | `error: string, errorCode?: string` | Errore |

**Codici di errore (`errorCode`):**

| Codice | Descrizione |
|--------|------|
| `rate_limit` | Limite di velocità API raggiunto; generalmente ritentato automaticamente |
| `auth` | Autenticazione fallita; controllare la chiave API |
| `tool_timeout` | Timeout dell'esecuzione dello strumento |
| `max_iterations` | Raggiunto il conteggio massimo di cicli di chiamate a strumenti |
| `api_error` | Altro errore API |

### getMessages — ottenere la cronologia dei messaggi

```javascript
const messages = await conv.getMessages();
```

Restituisce un `ChatMessage[]` contenente ogni messaggio nella conversazione.

**Struttura di `ChatMessage`:**

| Campo | Tipo | Descrizione |
|------|------|------|
| `id` | `string` | ID del messaggio |
| `role` | `"user" \| "assistant" \| "system" \| "tool"` | Ruolo del messaggio |
| `content` | `string \| ContentBlock[]` | Contenuto del messaggio |
| `thinking` | `{ content: string }` | Processo di ragionamento (messaggi dell'assistente — nota che è un oggetto, non una stringa semplice) |
| `error` | `string` | Messaggio di errore se questo turno ha avuto un errore |
| `modelId` | `string` | ID del modello usato per questo messaggio |
| `durationMs` | `number` | Durata totale della risposta in ms |
| `parentId` | `string` | ID del messaggio padre (per la ramificazione) |
| `toolCalls` | `ToolCall[]` | Registro delle chiamate a strumenti (messaggi dell'assistente) |
| `toolCallId` | `string` | L'ID corrispondente della chiamata a strumento (messaggi dello strumento) |
| `usage` | `{ inputTokens, outputTokens }` | Uso dei token |
| `createtime` | `number` | Timestamp di creazione |

### clear — cancellare la conversazione

```javascript
await conv.clear();
```

Cancella tutta la cronologia dei messaggi nella conversazione.

### save — persistere la conversazione

```javascript
await conv.save();
```

Salva i metadati della conversazione nell'archivio. Le conversazioni efimere (`ephemeral: true`) non vengono salvate per impostazione predefinita; chiamare questo metodo le converte in conversazioni persistite.

### Proprietà dell'istanza

| Proprietà | Tipo | Descrizione |
|------|------|------|
| `id` | `string` | ID conversazione |
| `title` | `string` | Titolo della conversazione |
| `modelId` | `string` | L'ID del modello in uso |

## Contenuto multimodale

Il contenuto del messaggio può essere una stringa di testo semplice, o un array `ContentBlock[]` per supportare l'input multimodale:

```javascript
// Inviare testo + un'immagine
await conv.chat([
  { type: "text", text: "Per favore analizza cosa c'è in questa immagine" },
  { type: "image", attachmentId: "img-id", mimeType: "image/png" }
]);
```

### Tipi di ContentBlock

| tipo | Campi obbligatori | Descrizione |
|------|---------|------|
| `text` | `text: string` | Contenuto testuale |
| `image` | `attachmentId: string, mimeType: string` | Immagine; richiede un modello con capacità vision |
| `file` | `attachmentId: string, mimeType: string, name: string` | File |
| `audio` | `attachmentId: string, mimeType: string` | Audio |

## Conversazioni efimere vs. persistite

| Caratteristica | Conversazione persistita (predefinita) | Conversazione effimera |
|------|-------------------|---------------------|
| Archiviazione messaggi | Persistita in OPFS | Solo in memoria |
| Strumenti integrati | Tutti disponibili | Non inclusi; fornisci i tuoi via `tools` |
| Elenco conversazioni | Visibile | Non visibile |
| Cache dei prompt | Supportata | Può essere disabilitata |
| Caso d'uso | Conversazioni a scopo generale | Compiti leggeri, una tantum e domande rapide |

## Gestione del contesto

### Auto-compattazione

Quando l'uso del contesto della conversazione supera l'**80%** della finestra di contesto del modello, il sistema chiama automaticamente l'LLM per generare un riepilogo della cronologia, sostituendo i messaggi più vecchi per liberare spazio.

### Cache dei prompt

Abilitata per impostazione predefinita. Per i modelli Anthropic, il prompt di sistema e la cronologia dei messaggi vengono cachati, riducendo significativamente l'uso dei token e la latenza per turni ripetuti.

Può essere disabilitata tramite `cache: false`:

```javascript
const conv = await CAT.agent.conversation.create({ cache: false });
```

## Esempio completo

```javascript
// ==UserScript==
// @name        Assistente di traduzione intelligente
// @match       *://*/*
// @grant       CAT.agent.conversation
// @grant       CAT.agent.dom
// ==/UserScript==

// Creare una conversazione con uno strumento personalizzato
const conv = await CAT.agent.conversation.create({
  system: "Sei un assistente di traduzione. L'utente ti darà il contenuto di una pagina web — per favore traducilo in italiano.",
  tools: [{
    name: "get_selection",
    description: "Ottieni il testo che l'utente ha selezionato nella pagina",
    parameters: { type: "object", properties: {} },
    handler: async () => {
      return { text: window.getSelection()?.toString() || "Nessun testo selezionato" };
    }
  }]
});

// Trasmettere il risultato della traduzione
const stream = await conv.chatStream("Per favore ottieni il testo selezionalo e traducilo in italiano");
let result = "";
for await (const chunk of stream) {
  if (chunk.type === "content_delta") {
    result += chunk.content;
    // Aggiornare l'interfaccia in tempo reale
    updateTranslationUI(result);
  }
}
```
