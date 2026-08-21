---
title: API de Conversación
---

`@grant CAT.agent.conversation`

La API de Conversación es el núcleo del sistema Agent, permitiendo a un script crear conversaciones con IA, enviar mensajes y recibir respuestas.

## Crear una conversación

```javascript
const conv = await CAT.agent.conversation.create(options?);
```

### ConversationCreateOptions

| Parámetro | Tipo | Predeterminado | Descripción |
|------|------|--------|------|
| `id` | `string` | auto-generado | ID de conversación, usado para reanudar una conversación existente |
| `system` | `string` | — | Prompt del sistema personalizado, añadido después del prompt integrado |
| `model` | `string` | modelo predeterminado | ID del modelo (obtenido después de configurarlo en la página de gestión) |
| `maxIterations` | `number` | `20` | Conteo máximo de bucles de llamadas a herramientas dentro de un turno de conversación |
| `skills` | `"auto" \| string[]` | — | `"auto"` carga todas las Skills automáticamente, o un array de nombres de Skills específicas |
| `tools` | `ToolDefinition[]` | — | Lista de herramientas personalizadas (ver abajo) |
| `commands` | `Record<string, CommandHandler>` | — | Comandos de conversación personalizados |
| `ephemeral` | `boolean` | `false` | Una conversación efímera que no se persiste en almacenamiento |
| `cache` | `boolean` | `true` | Habilitar caché de prompts (reduce el uso de tokens) |

### Herramientas personalizadas

Un script puede registrar sus propias herramientas para que la IA las llame:

```javascript
const conv = await CAT.agent.conversation.create({
  tools: [{
    name: "get_weather",
    description: "Obtener información del clima para la ciudad especificada",
    parameters: {
      type: "object",
      properties: {
        city: {
          type: "string",
          description: "Nombre de la ciudad"
        },
        unit: {
          type: "string",
          enum: ["celsius", "fahrenheit"],
          description: "Unidad de temperatura"
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

Los `parameters` de una herramienta siguen la especificación [JSON Schema](https://json-schema.org/). La IA usa `description` para entender cuándo y cómo llamar a la herramienta.

### Comandos personalizados

Se pueden registrar comandos personalizados que comienzan con `/`:

```javascript
const conv = await CAT.agent.conversation.create({
  commands: {
    "/export": async (args) => {
      // Se activa cuando el usuario escribe "/export pdf"
      await exportToPdf(args);
      return "Exportación completa";
    }
  }
});
```

Comandos integrados: `/new` (limpiar historial de conversación) — puede ser anulado por un manejador personalizado.

## Obtener una conversación existente

```javascript
const conv = await CAT.agent.conversation.get(conversationId);
// Retorna null si la conversación no existe
```

## Métodos de ConversationInstance

### chat — chat síncrono

```javascript
const reply = await conv.chat(content, options?);
```

Envía un mensaje y espera la respuesta completa. La IA puede llamar herramientas mientras responde; `chat` espera a que termine toda la ejecución de herramientas antes de retornar el resultado final.

**Parámetros:**

| Parámetro | Tipo | Descripción |
|------|------|------|
| `content` | `string \| ContentBlock[]` | Contenido del mensaje, texto o bloques de contenido multimodales |
| `options.tools` | `ToolDefinition[]` | Herramientas extra a añadir solo para esta llamada (se combinan con las herramientas pasadas en la creación) |

**Retorna `ChatReply`:**

| Campo | Tipo | Descripción |
|------|------|------|
| `content` | `string \| ContentBlock[]` | El contenido de la respuesta de la IA |
| `thinking` | `string` | El proceso de razonamiento del modelo (solo algunos modelos soportan esto) |
| `toolCalls` | `ToolCall[]` | Registro de llamadas a herramientas realizadas durante esta respuesta |
| `usage` | `{ inputTokens, outputTokens }` | Uso de tokens |
| `command` | `boolean` | Si esta respuesta fue activada por un comando |

### chatStream — chat en streaming

```javascript
const stream = await conv.chatStream(content, options?);
for await (const chunk of stream) {
  // Manejar eventos de streaming
}
```

Recibe la respuesta de la IA en tiempo real — útil cuando necesitas mostrar salida incrementalmente.

**Tipos de eventos `StreamChunk`:**

| tipo | Campos | Descripción |
|------|------|------|
| `content_delta` | `content: string` | Contenido de texto incremental |
| `thinking_delta` | `thinking: string` | Contenido de razonamiento incremental |
| `tool_call` | `toolCall: ToolCall` | Información de llamada a herramienta (se dispara en cambios de estado) |
| `content_block` | `block: ContentBlock` | Un bloque de contenido (imagen, archivo, etc.) |
| `done` | `usage: { inputTokens, outputTokens }` | Turno de conversación completo |
| `error` | `error: string, errorCode?: string` | Error |

**Códigos de error (`errorCode`):**

| Código | Descripción |
|--------|------|
| `rate_limit` | Límite de velocidad de API alcanzado; generalmente se reintenta automáticamente |
| `auth` | Autenticación fallida; verificar la clave API |
| `tool_timeout` | Tiempo de espera de ejecución de herramienta agotado |
| `max_iterations` | Se alcanzó el conteo máximo de bucles de llamadas a herramientas |
| `api_error` | Otro error de API |

### getMessages — obtener historial de mensajes

```javascript
const messages = await conv.getMessages();
```

Retorna un `ChatMessage[]` que contiene cada mensaje de la conversación.

**Estructura de `ChatMessage`:**

| Campo | Tipo | Descripción |
|------|------|------|
| `id` | `string` | ID del mensaje |
| `role` | `"user" \| "assistant" \| "system" \| "tool"` | Rol del mensaje |
| `content` | `string \| ContentBlock[]` | Contenido del mensaje |
| `thinking` | `{ content: string }` | Proceso de razonamiento (mensajes del asistente — nota que es un objeto, no una cadena simple) |
| `error` | `string` | Mensaje de error si este turno tuvo un error |
| `modelId` | `string` | ID del modelo usado para este mensaje |
| `durationMs` | `number` | Duración total de la respuesta en ms |
| `parentId` | `string` | ID del mensaje padre (para ramificación) |
| `toolCalls` | `ToolCall[]` | Registro de llamadas a herramientas (mensajes del asistente) |
| `toolCallId` | `string` | El ID correspondiente de la llamada a herramienta (mensajes de herramienta) |
| `usage` | `{ inputTokens, outputTokens }` | Uso de tokens |
| `createtime` | `number` | Marca de tiempo de creación |

### clear — limpiar la conversación

```javascript
await conv.clear();
```

Limpia todo el historial de mensajes en la conversación.

### save — persistir la conversación

```javascript
await conv.save();
```

Guarda los metadatos de la conversación en almacenamiento. Las conversaciones efímeras (`ephemeral: true`) no se guardan por defecto; llamar a este método las convierte en conversaciones persistidas.

### Propiedades de instancia

| Propiedad | Tipo | Descripción |
|------|------|------|
| `id` | `string` | ID de conversación |
| `title` | `string` | Título de la conversación |
| `modelId` | `string` | El ID del modelo en uso |

## Contenido multimodal

El contenido del mensaje puede ser una cadena de texto simple, o un array `ContentBlock[]` para soportar entrada multimodal:

```javascript
// Enviar texto + una imagen
await conv.chat([
  { type: "text", text: "Por favor analiza lo que hay en esta imagen" },
  { type: "image", attachmentId: "img-id", mimeType: "image/png" }
]);
```

### Tipos de ContentBlock

| tipo | Campos requeridos | Descripción |
|------|---------|------|
| `text` | `text: string` | Contenido de texto |
| `image` | `attachmentId: string, mimeType: string` | Imagen; requiere un modelo con capacidad de visión |
| `file` | `attachmentId: string, mimeType: string, name: string` | Archivo |
| `audio` | `attachmentId: string, mimeType: string` | Audio |

## Conversaciones efímeras vs. persistidas

| Característica | Conversación persistida (predeterminada) | Conversación efímera |
|------|-------------------|---------------------|
| Almacenamiento de mensajes | Persistido en OPFS | Solo en memoria |
| Herramientas integradas | Todas disponibles | No incluidas; proporciona las tuyas vía `tools` |
| Lista de conversaciones | Visible | No visible |
| Caché de prompts | Soportado | Puede deshabilitarse |
| Caso de uso | Conversaciones de propósito general | Tareas ligeras, únicas y preguntas rápidas |

## Gestión del contexto

### Auto-compactación

Cuando el uso del contexto de la conversación supera el **80%** de la ventana de contexto del modelo, el sistema llama automáticamente al LLM para generar un resumen del historial, reemplazando mensajes más antiguos para liberar espacio.

### Caché de prompts

Habilitado por defecto. Para modelos de Anthropic, el prompt del sistema y el historial de mensajes se cachean, reduciendo significativamente el uso de tokens y la latencia para turnos repetidos.

Puede deshabilitarse via `cache: false`:

```javascript
const conv = await CAT.agent.conversation.create({ cache: false });
```

## Ejemplo completo

```javascript
// ==UserScript==
// @name        Asistente de traducción inteligente
// @match       *://*/*
// @grant       CAT.agent.conversation
// @grant       CAT.agent.dom
// ==/UserScript==

// Crear una conversación con una herramienta personalizada
const conv = await CAT.agent.conversation.create({
  system: "Eres un asistente de traducción. El usuario te dará contenido de una página web — por favor tradúcelo al español.",
  tools: [{
    name: "get_selection",
    description: "Obtener el texto que el usuario ha seleccionado en la página",
    parameters: { type: "object", properties: {} },
    handler: async () => {
      return { text: window.getSelection()?.toString() || "No hay texto seleccionado" };
    }
  }]
});

// Transmitir el resultado de la traducción
const stream = await conv.chatStream("Por favor obtén el texto seleccionado y tradúcelo al español");
let result = "";
for await (const chunk of stream) {
  if (chunk.type === "content_delta") {
    result += chunk.content;
    // Actualizar la UI en tiempo real
    updateTranslationUI(result);
  }
}
```
