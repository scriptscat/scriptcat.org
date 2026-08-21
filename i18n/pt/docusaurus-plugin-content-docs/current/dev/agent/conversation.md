---
title: API de Conversa
---

`@grant CAT.agent.conversation`

A API de Conversa é o núcleo do sistema Agent, permitindo que um script crie conversas com IA, envie mensagens e receba respostas.

## Criar uma conversa

```javascript
const conv = await CAT.agent.conversation.create(options?);
```

### ConversationCreateOptions

| Parâmetro | Tipo | Padrão | Descrição |
|------|------|--------|------|
| `id` | `string` | auto-gerado | ID da conversa, usado para retomar uma conversa existente |
| `system` | `string` | — | Prompt do sistema personalizado, adicionado após o prompt integrado |
| `model` | `string` | modelo padrão | ID do modelo (obtido após configurá-lo na página de gerenciamento) |
| `maxIterations` | `number` | `20` | Contagem máxima de ciclos de chamadas de ferramentas dentro de um turno de conversa |
| `skills` | `"auto" \| string[]` | — | `"auto"` carrega todas as Skills automaticamente, ou um array de nomes de Skills específicas |
| `tools` | `ToolDefinition[]` | — | Lista de ferramentas personalizadas (veja abaixo) |
| `commands` | `Record<string, CommandHandler>` | — | Comandos de conversa personalizados |
| `ephemeral` | `boolean` | `false` | Uma conversa efêmera que não é persistida no armazenamento |
| `cache` | `boolean` | `true` | Habilitar cache de prompts (reduz o uso de tokens) |

### Ferramentas personalizadas

Um script pode registrar suas próprias ferramentas para que a IA chame:

```javascript
const conv = await CAT.agent.conversation.create({
  tools: [{
    name: "get_weather",
    description: "Obter informações do clima para a cidade especificada",
    parameters: {
      type: "object",
      properties: {
        city: {
          type: "string",
          description: "Nome da cidade"
        },
        unit: {
          type: "string",
          enum: ["celsius", "fahrenheit"],
          description: "Unidade de temperatura"
        }
      },
      required: ["city"]
    },
    handler: async (args) => {
      // args = { city: "São Paulo", unit: "celsius" }
      const data = await fetchWeather(args.city, args.unit);
      return { temperature: data.temp, condition: data.condition };
    }
  }]
});
```

Os `parameters` de uma ferramenta seguem a especificação [JSON Schema](https://json-schema.org/). A IA usa `description` para entender quando e como chamar a ferramenta.

### Comandos personalizados

Comandos personalizados que começam com `/` podem ser registrados:

```javascript
const conv = await CAT.agent.conversation.create({
  commands: {
    "/export": async (args) => {
      // Acionado quando o usuário digita "/export pdf"
      await exportToPdf(args);
      return "Exportação concluída";
    }
  }
});
```

Comandos integrados: `/new` (limpar histórico da conversa) — pode ser sobreposto por um manipulador personalizado.

## Obter uma conversa existente

```javascript
const conv = await CAT.agent.conversation.get(conversationId);
// Retorna null se a conversa não existir
```

## Métodos de ConversationInstance

### chat — chat síncrono

```javascript
const reply = await conv.chat(content, options?);
```

Envia uma mensagem e aguarda a resposta completa. A IA pode chamar ferramentas enquanto responde; `chat` aguarda que toda a execução de ferramentas termine antes de retornar o resultado final.

**Parâmetros:**

| Parâmetro | Tipo | Descrição |
|------|------|------|
| `content` | `string \| ContentBlock[]` | Conteúdo da mensagem, texto ou blocos de conteúdo multimodais |
| `options.tools` | `ToolDefinition[]` | Ferramentas extras a adicionar apenas para esta chamada (combinadas com as ferramentas passadas na criação) |

**Retorna `ChatReply`:**

| Campo | Tipo | Descrição |
|------|------|------|
| `content` | `string \| ContentBlock[]` | O conteúdo da resposta da IA |
| `thinking` | `string` | O processo de raciocínio do modelo (apenas alguns modelos suportam isso) |
| `toolCalls` | `ToolCall[]` | Registro das chamadas de ferramentas feitas durante esta resposta |
| `usage` | `{ inputTokens, outputTokens }` | Uso de tokens |
| `command` | `boolean` | Se esta resposta foi acionada por um comando |

### chatStream — chat em streaming

```javascript
const stream = await conv.chatStream(content, options?);
for await (const chunk of stream) {
  // Tratar eventos de streaming
}
```

Recebe a resposta da IA em tempo real — útil quando você precisa mostrar saída incrementalmente.

**Tipos de eventos `StreamChunk`:**

| tipo | Campos | Descrição |
|------|------|------|
| `content_delta` | `content: string` | Conteúdo de texto incremental |
| `thinking_delta` | `thinking: string` | Conteúdo de raciocínio incremental |
| `tool_call` | `toolCall: ToolCall` | Info de chamada de ferramenta (disparado em mudanças de estado) |
| `content_block` | `block: ContentBlock` | Um bloco de conteúdo (imagem, arquivo, etc.) |
| `done` | `usage: { inputTokens, outputTokens }` | Turno da conversa completo |
| `error` | `error: string, errorCode?: string` | Erro |

**Códigos de erro (`errorCode`):**

| Código | Descrição |
|--------|------|
| `rate_limit` | Limite de taxa da API atingido; geralmente retentado automaticamente |
| `auth` | Autenticação falhou; verificar a chave API |
| `tool_timeout` | Timeout da execução da ferramenta |
| `max_iterations` | Atingida a contagem máxima de ciclos de chamadas de ferramentas |
| `api_error` | Outro erro de API |

### getMessages — obter histórico de mensagens

```javascript
const messages = await conv.getMessages();
```

Retorna um `ChatMessage[]` contendo cada mensagem na conversa.

**Estrutura de `ChatMessage`:**

| Campo | Tipo | Descrição |
|------|------|------|
| `id` | `string` | ID da mensagem |
| `role` | `"user" \| "assistant" \| "system" \| "tool"` | Papel da mensagem |
| `content` | `string \| ContentBlock[]` | Conteúdo da mensagem |
| `thinking` | `{ content: string }` | Processo de raciocínio (mensagens do assistente — note que é um objeto, não uma string simples) |
| `error` | `string` | Mensagem de erro se este turno teve um erro |
| `modelId` | `string` | ID do modelo usado para esta mensagem |
| `durationMs` | `number` | Duração total da resposta em ms |
| `parentId` | `string` | ID da mensagem pai (para ramificação) |
| `toolCalls` | `ToolCall[]` | Registro das chamadas de ferramentas (mensagens do assistente) |
| `toolCallId` | `string` | O ID correspondente da chamada de ferramenta (mensagens da ferramenta) |
| `usage` | `{ inputTokens, outputTokens }` | Uso de tokens |
| `createtime` | `number` | Carimbo de data/hora de criação |

### clear — limpar a conversa

```javascript
await conv.clear();
```

Limpa todo o histórico de mensagens na conversa.

### save — persistir a conversa

```javascript
await conv.save();
```

Salva os metadados da conversa no armazenamento. Conversas efêmeras (`ephemeral: true`) não são salvas por padrão; chamar este método a converte em uma conversa persistida.

### Propriedades da instância

| Propriedade | Tipo | Descrição |
|------|------|------|
| `id` | `string` | ID da conversa |
| `title` | `string` | Título da conversa |
| `modelId` | `string` | O ID do modelo em uso |

## Conteúdo multimodal

O conteúdo da mensagem pode ser uma string de texto simples, ou um array `ContentBlock[]` para suportar entrada multimodal:

```javascript
// Enviar texto + uma imagem
await conv.chat([
  { type: "text", text: "Por favor analise o que há nesta imagem" },
  { type: "image", attachmentId: "img-id", mimeType: "image/png" }
]);
```

### Tipos de ContentBlock

| tipo | Campos obrigatórios | Descrição |
|------|---------|------|
| `text` | `text: string` | Conteúdo de texto |
| `image` | `attachmentId: string, mimeType: string` | Imagem; requer um modelo com capacidade de visão |
| `file` | `attachmentId: string, mimeType: string, name: string` | Arquivo |
| `audio` | `attachmentId: string, mimeType: string` | Áudio |

## Conversas efêmeras vs. persistidas

| Característica | Conversa persistida (padrão) | Conversa efêmera |
|------|-------------------|---------------------|
| Armazenamento de mensagens | Persistido no OPFS | Apenas em memória |
| Ferramentas integradas | Todas disponíveis | Não incluídas; forneça as suas via `tools` |
| Lista de conversas | Visível | Não visível |
| Cache de prompts | Suportado | Pode ser desabilitado |
| Caso de uso | Conversas de propósito geral | Tarefas leves, únicas e perguntas rápidas |

## Gerenciamento de contexto

### Auto-compactação

Quando o uso do contexto da conversa excede **80%** da janela de contexto do modelo, o sistema chama automaticamente o LLM para gerar um resumo do histórico, substituindo mensagens mais antigas para liberar espaço.

### Cache de prompts

Habilitado por padrão. Para modelos Anthropic, o prompt do sistema e o histórico de mensagens são cacheados, reduzindo significativamente o uso de tokens e a latência para turnos repetidos.

Pode ser desabilitado via `cache: false`:

```javascript
const conv = await CAT.agent.conversation.create({ cache: false });
```

## Exemplo completo

```javascript
// ==UserScript==
// @name        Assistente de tradução inteligente
// @match       *://*/*
// @grant       CAT.agent.conversation
// @grant       CAT.agent.dom
// ==/UserScript==

// Criar uma conversa com uma ferramenta personalizada
const conv = await CAT.agent.conversation.create({
  system: "Você é um assistente de tradução. O usuário fornecerá conteúdo de uma página web — por favor traduza para o português.",
  tools: [{
    name: "get_selection",
    description: "Obter o texto que o usuário selecionou na página",
    parameters: { type: "object", properties: {} },
    handler: async () => {
      return { text: window.getSelection()?.toString() || "Nenhum texto selecionado" };
    }
  }]
});

// Transmitir o resultado da tradução
const stream = await conv.chatStream("Por favor obtenha o texto selecionado e traduza para o português");
let result = "";
for await (const chunk of stream) {
  if (chunk.type === "content_delta") {
    result += chunk.content;
    // Atualizar a interface em tempo real
    updateTranslationUI(result);
  }
}
```
