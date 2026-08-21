---
title: Gespreks-API
---

`@grant CAT.agent.conversation`

De Gespreks-API is de kern van het Agent-systeem en stelt een script in staat AI-gesprekken te maken, berichten te verzenden en antwoorden te ontvangen.

## Een gesprek maken

```javascript
const conv = await CAT.agent.conversation.create(options?);
```

### ConversationCreateOptions

| Parameter | Type | Standaard | Beschrijving |
|------|------|--------|------|
| `id` | `string` | automatisch gegenereerd | Gespreks-ID, gebruikt om een bestaand gesprek te hervatten |
| `system` | `string` | — | Aangepaste systeemprompt, toegevoegd na de ingebouwde prompt |
| `model` | `string` | standaardmodel | Model-ID (verkregen na configuratie op de beheerpagina) |
| `maxIterations` | `number` | `20` | Maximaal aantal toolaanroepcycli binnen één gespreksbeurt |
| `skills` | `"auto" \| string[]` | — | `"auto"` laadt alle Skills automatisch, of een array van specifieke Skillnamen |
| `tools` | `ToolDefinition[]` | — | Aangepaste toollijst (zie hieronder) |
| `commands` | `Record<string, CommandHandler>` | — | Aangepaste gespreksopdrachten |
| `ephemeral` | `boolean` | `false` | Een vluchtig gesprek dat niet in de opslag wordt bewaard |
| `cache` | `boolean` | `true` | Promptcaching inschakelen (vermindert tokenverbruik) |

### Aangepaste tools

Een script kan zijn eigen tools registreren die de AI kan aanroepen:

```javascript
const conv = await CAT.agent.conversation.create({
  tools: [{
    name: "get_weather",
    description: "Weerinformatie ophalen voor de opgegeven stad",
    parameters: {
      type: "object",
      properties: {
        city: {
          type: "string",
          description: "Stadnaam"
        },
        unit: {
          type: "string",
          enum: ["celsius", "fahrenheit"],
          description: "Temperatureenheid"
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

De `parameters` van een tool volgen de [JSON Schema](https://json-schema.org/)-specificatie. De AI gebruikt `description` om te begrijpen wanneer en hoe de tool moet worden aangeroepen.

### Aangepaste opdrachten

Aangepaste opdrachten die met `/` beginnen, kunnen worden geregistreerd:

```javascript
const conv = await CAT.agent.conversation.create({
  commands: {
    "/export": async (args) => {
      // Geactiveerd wanneer de gebruiker "/export pdf" typt
      await exportToPdf(args);
      return "Export voltooid";
    }
  }
});
```

Ingebouwde opdrachten: `/new` (gespreksgeschiedenis wissen) — dit kan worden overschreven door een aangepaste handler.

## Een bestaand gesprek ophalen

```javascript
const conv = await CAT.agent.conversation.get(conversationId);
// Retourneert null als het gesprek niet bestaat
```

## ConversationInstance-methoden

### chat — synchrone chat

```javascript
const reply = await conv.chat(content, options?);
```

Verzendt een bericht en wacht op het volledige antwoord. De AI kan tijdens het antwoorden tools aanroepen; `chat` wacht tot alle tooluitvoeringen klaar zijn voordat het het uiteindelijke resultaat retourneert.

**Parameters:**

| Parameter | Type | Beschrijving |
|------|------|------|
| `content` | `string \| ContentBlock[]` | Berichtinhoud, tekst of multimodale inhoudsblokken |
| `options.tools` | `ToolDefinition[]` | Extra tools om alleen voor deze aanroep toe te voegen (samengevoegd met de tools die bij het maken zijn doorgegeven) |

**Retourneert `ChatReply`:**

| Veld | Type | Beschrijving |
|------|------|------|
| `content` | `string \| ContentBlock[]` | De antwoordinhoud van de AI |
| `thinking` | `string` | Het denkproces van het model (alleen sommige modellen ondersteunen dit) |
| `toolCalls` | `ToolCall[]` | Registratie van toolaanroepen tijdens dit antwoord |
| `usage` | `{ inputTokens, outputTokens }` | Tokenverbruik |
| `command` | `boolean` | Of dit antwoord door een opdracht is geactiveerd |

### chatStream — streaming chat

```javascript
const stream = await conv.chatStream(content, options?);
for await (const chunk of stream) {
  // Streamgebeurtenissen afhandelen
}
```

Ontvangt het antwoord van de AI in realtime — handig wanneer u de uitvoer stapsgewijs moet weergeven.

**Gebeurtenistypen van `StreamChunk`:**

| type | Velden | Beschrijving |
|------|------|------|
| `content_delta` | `content: string` | Incrementele tekstinhoud |
| `thinking_delta` | `thinking: string` | Incrementele denkinhoud |
| `tool_call` | `toolCall: ToolCall` | Toolaanroeppinfo (geactiveerd bij statuswijzigingen) |
| `content_block` | `block: ContentBlock` | Een inhoudsblok (afbeelding, bestand, enz.) |
| `done` | `usage: { inputTokens, outputTokens }` | Gespreksbeurt voltooid |
| `error` | `error: string, errorCode?: string` | Fout |

**Foutcodes (`errorCode`):**

| Code | Beschrijving |
|--------|------|
| `rate_limit` | API-snelheidslimiet bereikt; wordt meestal automatisch opnieuw geprobeerd |
| `auth` | Authenticatie mislukt; controleer de API-sleutel |
| `tool_timeout` | Time-out bij tooluitvoering |
| `max_iterations` | Maximaal aantal toolaanroepcycli bereikt |
| `api_error` | Andere API-fout |

### getMessages — berichtgeschiedenis ophalen

```javascript
const messages = await conv.getMessages();
```

Retourneert een `ChatMessage[]` met elk bericht in het gesprek.

**Vorm van `ChatMessage`:**

| Veld | Type | Beschrijving |
|------|------|------|
| `id` | `string` | Bericht-ID |
| `role` | `"user" \| "assistant" \| "system" \| "tool"` | Berichtrol |
| `content` | `string \| ContentBlock[]` | Berichtinhoud |
| `thinking` | `{ content: string }` | Denkproces (assistant-berichten — let op: dit is een object, geen gewone string) |
| `error` | `string` | Foutmelding als deze beurt een fout bevatte |
| `modelId` | `string` | Model-ID dat voor dit bericht is gebruikt |
| `durationMs` | `number` | Totale antwoordduur in ms |
| `parentId` | `string` | Bovenliggend bericht-ID (voor vertakking) |
| `toolCalls` | `ToolCall[]` | Registratie van toolaanroepen (assistant-berichten) |
| `toolCallId` | `string` | De bijbehorende toolaanroep-ID (toolberichten) |
| `usage` | `{ inputTokens, outputTokens }` | Tokenverbruik |
| `createtime` | `number` | Aanmaaktijdstempel |

### clear — het gesprek wissen

```javascript
await conv.clear();
```

Wist alle berichtgeschiedenis in het gesprek.

### save — het gesprek bewaren

```javascript
await conv.save();
```

Slaat de metagegevens van het gesprek op in de opslag. Vluchtige gesprekken (`ephemeral: true`) worden standaard niet opgeslagen; door deze methode aan te roepen wordt het een bewaard gesprek.


### Instantie-eigenschappen

| Eigenschap | Type | Beschrijving |
|------|------|------|
| `id` | `string` | Gespreks-ID |
| `title` | `string` | Gesprekstitel |
| `modelId` | `string` | Het model-ID dat in gebruik is |

## Multimodale inhoud

Berichtinhoud kan een gewone tekststring zijn of een `ContentBlock[]`-array om multimodale invoer te ondersteunen:

```javascript
// Tekst + een afbeelding verzenden
await conv.chat([
  { type: "text", text: "Analyseer alsjeblieft wat er op deze afbeelding staat" },
  { type: "image", attachmentId: "img-id", mimeType: "image/png" }
]);
```

### ContentBlock-typen

| type | Vereiste velden | Beschrijving |
|------|---------|------|
| `text` | `text: string` | Tekstinhoud |
| `image` | `attachmentId: string, mimeType: string` | Afbeelding; vereist een model met visuele mogelijkheden |
| `file` | `attachmentId: string, mimeType: string, name: string` | Bestand |
| `audio` | `attachmentId: string, mimeType: string` | Audio |

## Vluchtige vs. bewaarde gesprekken

| Functie | Bewaard gesprek (standaard) | Vluchtig gesprek |
|------|-------------------|---------------------|
| Berichtopslag | Bewaard in OPFS | Alleen in het geheugen |
| Ingebouwde tools | Alle beschikbaar | Niet inbegrepen; geef uw eigen via `tools` |
| Gesprekslijst | Zichtbaar | Niet zichtbaar |
| Promptcaching | Ondersteund | Kan worden uitgeschakeld |
| Gebruiksscenario | Algemene gesprekken | Lichtgewicht, eenmalige taken en snelle Q&A |

## Contextbeheer

### Automatisch comprimeren

Wanneer het contextverbruik van het gesprek **80%** van het contextvenster van het model overschrijdt, roept het systeem automatisch de LLM aan om een samenvatting van de geschiedenis te genereren, waarbij oudere berichten worden vervangen om ruimte vrij te maken.

### Promptcaching

Standaard ingeschakeld. Voor Anthropic-modellen worden de systeemprompt en berichtgeschiedenis in de cache opgeslagen, waardoor tokenverbruik en latentie voor herhaalde beurten aanzienlijk worden verminderd.

Kan worden uitgeschakeld via `cache: false`:

```javascript
const conv = await CAT.agent.conversation.create({ cache: false });
```

## Volledig voorbeeld

```javascript
// ==UserScript==
// @name        Slimme vertaalassistent
// @match       *://*/*
// @grant       CAT.agent.conversation
// @grant       CAT.agent.dom
// ==/UserScript==

// Maak een gesprek met een aangepaste tool
const conv = await CAT.agent.conversation.create({
  system: "U bent een vertaalassistent. De gebruiker geeft u webpagina-inhoud — vertaal dit naar het Chinees.",
  tools: [{
    name: "get_selection",
    description: "Haal de tekst op die de gebruiker op de pagina heeft geselecteerd",
    parameters: { type: "object", properties: {} },
    handler: async () => {
      return { text: window.getSelection()?.toString() || "Geen tekst geselecteerd" };
    }
  }]
});

// Stream het vertaalresultaat
const stream = await conv.chatStream("Haal de geselecteerde tekst op en vertaal deze naar het Chinees");
let result = "";
for await (const chunk of stream) {
  if (chunk.type === "content_delta") {
    result += chunk.content;
    // Werk de interface in realtime bij
    updateTranslationUI(result);
  }
}
```
