---
title: Sohbet API'si
---

`@grant CAT.agent.conversation`

Sohbet API'si Agent sisteminin çekirdeğidir; bir betiğin AI sohbetleri oluşturmasını, mesaj göndermesini ve yanıtlar almasını sağlar.

## Bir sohbet oluşturma

```javascript
const conv = await CAT.agent.conversation.create(options?);
```

### ConversationCreateOptions

| Parametre | Tür | Varsayılan | Açıklama |
|------|------|--------|------|
| `id` | `string` | otomatik oluşturulur | Sohbet kimliği, mevcut bir sohbeti sürdürmek için kullanılır |
| `system` | `string` | — | Özel sistem istemi, yerleşik istemin ardına eklenir |
| `model` | `string` | varsayılan model | Model kimliği (yönetim sayfasında yapılandırdıktan sonra elde edilir) |
| `maxIterations` | `number` | `20` | Tek bir sohbet turundaki maksimum araç çağrısı döngüsü sayısı |
| `skills` | `"auto" \| string[]` | — | `"auto"` tüm Skill'leri otomatik yükler veya belirli Skill adlarının bir dizisi |
| `tools` | `ToolDefinition[]` | — | Özel araç listesi (aşağıya bakın) |
| `commands` | `Record<string, CommandHandler>` | — | Özel sohbet komutları |
| `ephemeral` | `boolean` | `false` | Depolamaya kalıcı olarak yazılmayan geçici bir sohbet |
| `cache` | `boolean` | `true` | İstem önbelleğini etkinleştirir (belirteç kullanımını azaltır) |

### Özel araçlar

Bir betik, AI'ın çağırması için kendi araçlarını kaydedebilir:

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

Bir aracın `parameters` değeri [JSON Schema](https://json-schema.org/) spesifikasyonunu izler. AI, aracı ne zaman ve nasıl çağıracağını anlamak için `description` kullanır.

### Özel komutlar

`/` ile başlayan özel komutlar kaydedilebilir:

```javascript
const conv = await CAT.agent.conversation.create({
  commands: {
    "/export": async (args) => {
      // Kullanıcı "/export pdf" yazdığında tetiklenir
      await exportToPdf(args);
      return "Export complete";
    }
  }
});
```

Yerleşik komutlar: `/new` (sohbet geçmişini temizler) — bu, özel bir işleyiciyle geçersiz kılınabilir.

## Mevcut bir sohbeti alma

```javascript
const conv = await CAT.agent.conversation.get(conversationId);
// Sohbet yoksa null döndürür
```

## ConversationInstance yöntemleri

### chat — eşzamanlı sohbet

```javascript
const reply = await conv.chat(content, options?);
```

Bir mesaj gönderir ve tam yanıtı bekler. AI yanıt verirken araçları çağırabilir; `chat`, nihai sonucu döndürmeden önce tüm araç yürütmelerinin bitmesini bekler.

**Parametreler:**

| Parametre | Tür | Açıklama |
|------|------|------|
| `content` | `string \| ContentBlock[]` | Mesaj içeriği, metin veya çok modlu içerik blokları |
| `options.tools` | `ToolDefinition[]` | Yalnızca bu çağrı için eklenecek ek araçlar (oluşturma sırasında iletilen araçlarla birleştirilir) |

**`ChatReply` döndürür:**

| Alan | Tür | Açıklama |
|------|------|------|
| `content` | `string \| ContentBlock[]` | AI'nın yanıt içeriği |
| `thinking` | `string` | Modelin düşünme süreci (yalnızca bazı modeller destekler) |
| `toolCalls` | `ToolCall[]` | Bu yanıt sırasında yapılan araç çağrılarının kaydı |
| `usage` | `{ inputTokens, outputTokens }` | Belirteç kullanımı |
| `command` | `boolean` | Bu yanıtın bir komutla tetiklenip tetiklenmediği |

### chatStream — akışlı sohbet

```javascript
const stream = await conv.chatStream(content, options?);
for await (const chunk of stream) {
  // Akış olaylarını işle
}
```

AI'nın yanıtını gerçek zamanlı olarak alır — çıktıyı kademeli olarak görüntülemeniz gerektiğinde kullanışlıdır.

**`StreamChunk` olay türleri:**

| type | Alanlar | Açıklama |
|------|------|------|
| `content_delta` | `content: string` | Artımlı metin içeriği |
| `thinking_delta` | `thinking: string` | Artımlı düşünme içeriği |
| `tool_call` | `toolCall: ToolCall` | Araç çağrısı bilgisi (durum değişikliklerinde tetiklenir) |
| `content_block` | `block: ContentBlock` | Bir içerik bloğu (görsel, dosya vb.) |
| `done` | `usage: { inputTokens, outputTokens }` | Sohbet turu tamamlandı |
| `error` | `error: string, errorCode?: string` | Hata |

**Hata kodları (`errorCode`):**

| Kod | Açıklama |
|--------|------|
| `rate_limit` | API hız sınırına ulaşıldı; genellikle otomatik olarak yeniden denenir |
| `auth` | Kimlik doğrulama başarısız oldu; API anahtarını kontrol edin |
| `tool_timeout` | Araç yürütmesi zaman aşımına uğradı |
| `max_iterations` | Maksimum araç çağrısı döngüsü sayısına ulaşıldı |
| `api_error` | Diğer API hatası |

### getMessages — mesaj geçmişini al

```javascript
const messages = await conv.getMessages();
```

Sohbetteki her mesajı içeren bir `ChatMessage[]` döndürür.

**`ChatMessage` biçimi:**

| Alan | Tür | Açıklama |
|------|------|------|
| `id` | `string` | Mesaj kimliği |
| `role` | `"user" \| "assistant" \| "system" \| "tool"` | Mesaj rolü |
| `content` | `string \| ContentBlock[]` | Mesaj içeriği |
| `thinking` | `{ content: string }` | Düşünme süreci (asistan mesajları — bunun bir nesne olduğunu, düz bir dize olmadığını unutmayın) |
| `error` | `string` | Bu turda hata oluştuysa hata mesajı |
| `modelId` | `string` | Bu mesaj için kullanılan model kimliği |
| `durationMs` | `number` | Milisaniye cinsinden toplam yanıt süresi |
| `parentId` | `string` | Üst mesaj kimliği (dallanma için) |
| `toolCalls` | `ToolCall[]` | Araç çağrılarının kaydı (asistan mesajları) |
| `toolCallId` | `string` | Karşılık gelen araç çağrısı kimliği (araç mesajları) |
| `usage` | `{ inputTokens, outputTokens }` | Belirteç kullanımı |
| `createtime` | `number` | Oluşturma zaman damgası |

### clear — sohbeti temizle

```javascript
await conv.clear();
```

Sohbetteki tüm mesaj geçmişini temizler.

### save — sohbeti kalıcı hale getir

```javascript
await conv.save();
```

Sohbetin meta verilerini depolamaya kaydeder. Geçici sohbetler (`ephemeral: true`) varsayılan olarak kaydedilmez; bu yöntemi çağırmak bir sohbeti kalıcı bir sohbete dönüştürür.


### Örnek özellikler

| Özellik | Tür | Açıklama |
|------|------|------|
| `id` | `string` | Sohbet kimliği |
| `title` | `string` | Sohbet başlığı |
| `modelId` | `string` | Kullanımdaki model kimliği |

## Çok modlu içerik

Mesaj içeriği düz bir metin dizesi veya çok modlu girişi desteklemek için bir `ContentBlock[]` dizisi olabilir:

```javascript
// Metin + görsel gönder
await conv.chat([
  { type: "text", text: "Please analyze what's in this image" },
  { type: "image", attachmentId: "img-id", mimeType: "image/png" }
]);
```

### ContentBlock türleri

| type | Zorunlu alanlar | Açıklama |
|------|---------|------|
| `text` | `text: string` | Metin içeriği |
| `image` | `attachmentId: string, mimeType: string` | Görsel; görüş yeteneğine sahip bir model gerektirir |
| `file` | `attachmentId: string, mimeType: string, name: string` | Dosya |
| `audio` | `attachmentId: string, mimeType: string` | Ses |

## Geçici ve kalıcı sohbetler

| Özellik | Kalıcı sohbet (varsayılan) | Geçici sohbet |
|------|-------------------|---------------------|
| Mesaj depolama | OPFS'e kalıcı olarak yazılır | Yalnızca bellekte |
| Yerleşik araçlar | Tümü kullanılabilir | Dahil edilmez; `tools` ile kendinizinkini sağlayın |
| Sohbet listesi | Görünür | Görünmez |
| İstem önbelleği | Desteklenir | Devre dışı bırakılabilir |
| Kullanım amacı | Genel amaçlı sohbetler | Hafif, tek seferlik görevler ve hızlı soru-cevap |

## Bağlam yönetimi

### Otomatik sıkıştırma

Sohbetin bağlam kullanımı, modelin bağlam penceresinin **%80'ini** aştığında, sistem geçmişin bir özetini oluşturmak için otomatik olarak LLM'yi çağırır ve yer açmak için eski mesajları değiştirir.

### İstem önbelleği

Varsayılan olarak etkindir. Anthropic modelleri için sistem istemi ve mesaj geçmişi önbelleğe alınır; bu, tekrarlanan turlar için belirteç kullanımını ve gecikmeyi önemli ölçüde azaltır.

`cache: false` ile devre dışı bırakılabilir:

```javascript
const conv = await CAT.agent.conversation.create({ cache: false });
```

## Tam örnek

```javascript
// ==UserScript==
// @name        Smart translation assistant
// @match       *://*/*
// @grant       CAT.agent.conversation
// @grant       CAT.agent.dom
// ==/UserScript==

// Özel bir araçla bir sohbet oluştur
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

// Çeviri sonucunu akış olarak al
const stream = await conv.chatStream("Please get the selected text and translate it into Chinese");
let result = "";
for await (const chunk of stream) {
  if (chunk.type === "content_delta") {
    result += chunk.content;
    // Arayüzü gerçek zamanlı güncelle
    updateTranslationUI(result);
  }
}
```
