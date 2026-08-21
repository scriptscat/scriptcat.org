---
title: Զրույցի API
---

`@grant CAT.agent.conversation`

Զրույցի API-ն Agent համակարգի միջուկն է՝ թույլ տալով սկրիպտին ստեղծել AI զրույցներ, ուղարկել հաղորդագրություններ և ստանալ պատասխաններ:

## Զրույցի ստեղծում

```javascript
const conv = await CAT.agent.conversation.create(options?);
```

### ConversationCreateOptions

| Պարամետր | Տիպ | Լռելյայն | Նկարագրություն |
|------|------|--------|------|
| `id` | `string` | ավտոմատ ստեղծված | Զրույցի ID, օգտագործվում է գոյություն ունեցող զրույցը վերսկսելու համար |
| `system` | `string` | — | Կաստոմ համակարգային պրոմպտ, ավելացվում է ներկառուցված պրոմպտից հետո |
| `model` | `string` | լռելյայն մոդել | Մոդելի ID (ստացվում է կառավարման էջում այն կարգավորելուց հետո) |
| `maxIterations` | `number` | `20` | Մեկ զրույցի փուլի ընթացքում գործիք-կանչերի ցիկլի առավելագույն քանակը |
| `skills` | `"auto" \| string[]` | — | `"auto"`-ն ավտոմատ կերպով բեռնում է բոլոր Skills-ը, կամ կոնկրետ Skill անունների զանգված |
| `tools` | `ToolDefinition[]` | — | Կաստոմ գործիքների ցուցակ (տես ստորև) |
| `commands` | `Record<string, CommandHandler>` | — | Կաստոմ զրույցի հրամաններ |
| `ephemeral` | `boolean` | `false` | Էֆեմերալ զրույց, որը չի պահպանվում պահեստում |
| `cache` | `boolean` | `true` | Միացնել պրոմպտի քեշավորումը (նվազեցնում է token օգտագործումը) |

### Կաստոմ գործիքներ

Սկրիպտը կարող է գրանցել իր սեփական գործիքները՝ AI-ի կանչելու համար:

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

Գործիքի `parameters`-ը հետևում է [JSON Schema](https://json-schema.org/) սպեցիֆիկացիային: AI-ն օգտագործում է `description`-ը՝ հասկանալու համար, թե երբ և ինչպես կանչել գործիքը:

### Կաստոմ հրամաններ

`/`-ով սկսվող կաստոմ հրամանները կարող են գրանցվել՝

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

Ներկառուցված հրամաններ. `/new` (մաքրում է զրույցի պատմությունը) — այն կարող է փոխարինվել կաստոմ handler-ով:

## Գոյություն ունեցող զրույցի ստացում

```javascript
const conv = await CAT.agent.conversation.get(conversationId);
// Returns null if the conversation doesn't exist
```

## ConversationInstance մեթոդներ

### chat — սինխրոն զրույց

```javascript
const reply = await conv.chat(content, options?);
```

Ուղարկում է հաղորդագրություն և սպասում ամբողջական պատասխանին: AI-ն կարող է գործիքներ կանչել պատասխանելիս. `chat`-ը սպասում է բոլոր գործիքների կատարման ավարտին՝ նախքան վերջնական արդյունքը վերադարձնելը:

**Պարամետրեր՝**

| Պարամետր | Տիպ | Նկարագրություն |
|------|------|------|
| `content` | `string \| ContentBlock[]` | Հաղորդագրության բովանդակություն՝ կա՛մ տեքստ, կա՛մ մուլտիմոդալ բովանդակության բլոկներ |
| `options.tools` | `ToolDefinition[]` | Լրացուցիչ գործիքներ՝ այս կանչի համար միայն ավելացվող (միաձուլվում են ստեղծման ժամանակ փոխանցված գործիքների հետ) |

**Վերադարձնում է `ChatReply`՝**

| Դաշտ | Տիպ | Նկարագրություն |
|------|------|------|
| `content` | `string \| ContentBlock[]` | AI-ի պատասխանի բովանդակությունը |
| `thinking` | `string` | Մոդելի մտածողության գործընթացը (միայն որոշ մոդելներ են աջակցում) |
| `toolCalls` | `ToolCall[]` | Այս պատասխանի ընթացքում կատարված գործիք-կանչերի գրանցումը |
| `usage` | `{ inputTokens, outputTokens }` | Token օգտագործում |
| `command` | `boolean` | Արդյոք այս պատասխանը հրամանով է գործարկվել |

### chatStream — հոսքային զրույց

```javascript
const stream = await conv.chatStream(content, options?);
for await (const chunk of stream) {
  // Handle streaming events
}
```

Ստանում է AI-ի պատասխանը իրական ժամանակում — օգտակար է, երբ անհրաժեշտ է ելքը ցուցադրել աստիճանաբար:

**`StreamChunk` իրադարձությունների տիպեր՝**

| type | Դաշտեր | Նկարագրություն |
|------|------|------|
| `content_delta` | `content: string` | Աստիճանական տեքստային բովանդակություն |
| `thinking_delta` | `thinking: string` | Աստիճանական մտածողության բովանդակություն |
| `tool_call` | `toolCall: ToolCall` | Գործիք-կանչի տեղեկատվություն (գործարկվում է կարգավիճակի փոփոխությունների ժամանակ) |
| `content_block` | `block: ContentBlock` | Բովանդակության բլոկ (նկար, ֆայլ և այլն) |
| `done` | `usage: { inputTokens, outputTokens }` | Զրույցի փուլն ավարտված է |
| `error` | `error: string, errorCode?: string` | Սխալ |

**Սխալի կոդեր (`errorCode`):**

| Կոդ | Նկարագրություն |
|--------|------|
| `rate_limit` | API-ի արագության սահմանաչափը հասել է. սովորաբար ավտոմատ կերպով կրկնվում է |
| `auth` | Նույնականացումը ձախողվեց. ստուգեք API բանալին |
| `tool_timeout` | Գործիքի կատարման թայմաութ |
| `max_iterations` | Հասել է գործիք-կանչերի ցիկլի առավելագույն քանակին |
| `api_error` | Այլ API սխալ |

### getMessages — հաղորդագրությունների պատմության ստացում

```javascript
const messages = await conv.getMessages();
```

Վերադարձնում է `ChatMessage[]`, որը պարունակում է զրույցի յուրաքանչյուր հաղորդագրություն:

**`ChatMessage` կառուցվածքը՝**

| Դաշտ | Տիպ | Նկարագրություն |
|------|------|------|
| `id` | `string` | Հաղորդագրության ID |
| `role` | `"user" \| "assistant" \| "system" \| "tool"` | Հաղորդագրության դերը |
| `content` | `string \| ContentBlock[]` | Հաղորդագրության բովանդակություն |
| `thinking` | `{ content: string }` | Մտածողության գործընթացը (assistant հաղորդագրություններ — նշեք, որ սա օբյեկտ է, ոչ թե սովորական տող) |
| `error` | `string` | Սխալի հաղորդագրություն, եթե այս փուլը սխալվեց |
| `modelId` | `string` | Այս հաղորդագրության համար օգտագործված մոդելի ID |
| `durationMs` | `number` | Պատասխանի ընդհանուր տևողությունը մս-ով |
| `parentId` | `string` | Ծնող հաղորդագրության ID (ճյուղավորման համար) |
| `toolCalls` | `ToolCall[]` | Գործիք-կանչերի գրանցումը (assistant հաղորդագրություններ) |
| `toolCallId` | `string` | Համապատասխան գործիք-կանչի ID (tool հաղորդագրություններ) |
| `usage` | `{ inputTokens, outputTokens }` | Token օգտագործում |
| `createtime` | `number` | Ստեղծման ժամանակի դրոշմ |

### clear — զրույցի մաքրում

```javascript
await conv.clear();
```

Մաքրում է զրույցի հաղորդագրությունների ողջ պատմությունը:

### save — զրույցի պահպանում

```javascript
await conv.save();
```

Պահպանում է զրույցի մետատվյալները պահեստում: Էֆեմերալ զրույցները (`ephemeral: true`) լռելյայն չեն պահվում. այս մեթոդի կանչը մեկը վերածում է պահպանվող զրույցի:


### Ինստանսի հատկություններ

| Հատկություն | Տիպ | Նկարագրություն |
|------|------|------|
| `id` | `string` | Զրույցի ID |
| `title` | `string` | Զրույցի վերնագիր |
| `modelId` | `string` | Օգտագործվող մոդելի ID |

## Մուլտիմոդալ բովանդակություն

Հաղորդագրության բովանդակությունը կարող է լինել սովորական տեքստային տող կամ `ContentBlock[]` զանգված՝ մուլտիմոդալ մուտքագրման աջակցության համար:

```javascript
// Send text + an image
await conv.chat([
  { type: "text", text: "Please analyze what's in this image" },
  { type: "image", attachmentId: "img-id", mimeType: "image/png" }
]);
```

### ContentBlock տիպեր

| type | Պարտադիր դաշտեր | Նկարագրություն |
|------|---------|------|
| `text` | `text: string` | Տեքստային բովանդակություն |
| `image` | `attachmentId: string, mimeType: string` | Նկար; պահանջում է տեսողության ունակ մոդել |
| `file` | `attachmentId: string, mimeType: string, name: string` | Ֆայլ |
| `audio` | `attachmentId: string, mimeType: string` | Աուդիո |

## Էֆեմերալ ընդդեմ պահպանվող զրույցների

| Հատկանիշ | Պահպանվող զրույց (լռելյայն) | Էֆեմերալ զրույց |
|------|-------------------|---------------------|
| Հաղորդագրությունների պահեստավորում | Պահպանվում է OPFS-ում | Միայն հիշողության մեջ |
| Ներկառուցված գործիքներ | Բոլորը հասանելի են | Ներառված չեն. տրամադրեք ձերը `tools`-ի միջոցով |
| Զրույցների ցուցակ | Տեսանելի | Տեսանելի չէ |
| Պրոմպտի քեշավորում | Աջակցվում է | Կարող է անջատվել |
| Օգտագործման դեպք | Ընդհանուր նշանակության զրույցներ | Թեթև, միանգամյա առաջադրանքներ և արագ հարց-պատասխան |

## Կոնտեքստի կառավարում

### Ավտոմատ սեղմում

Երբ զրույցի կոնտեքստի օգտագործումը գերազանցում է մոդելի կոնտեքստային պատուհանի **80%-ը**, համակարգը ավտոմատ կերպով կանչում է LLM-ին՝ պատմության ամփոփում ստեղծելու համար՝ փոխարինելով ավելի հին հաղորդագրությունները՝ տարածք ազատելու համար:

### Պրոմպտի քեշավորում

Միացված է լռելյայն: Anthropic մոդելների համար համակարգային պրոմպտը և հաղորդագրությունների պատմությունը քեշավորվում են՝ զգալիորեն նվազեցնելով token օգտագործումը և ուշացումը կրկնվող փուլերի համար:

Կարող է անջատվել `cache: false`-ի միջոցով՝

```javascript
const conv = await CAT.agent.conversation.create({ cache: false });
```

## Ամբողջական օրինակ

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
