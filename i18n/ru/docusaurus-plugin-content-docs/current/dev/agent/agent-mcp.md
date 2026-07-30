---
title: API управления MCP
---

`@grant CAT.agent.mcp`

API управления MCP ([Model Context Protocol](https://modelcontextprotocol.io/)) позволяет скрипту управлять подключениями к MCP-серверам. Инструменты, которые предоставляет MCP-сервер, автоматически регистрируются у Agent для вызова в AI-диалогах.

## MCP-серверы

MCP Client в ScriptCat использует транспортный протокол **Streamable HTTP** (JSON-RPC 2.0 поверх POST) и поддерживает версию протокола MCP `2025-03-26`.

MCP-сервер может предоставлять три вида возможностей:

| Возможность | Описание |
|------|------|
| **Tools** | Функции-инструменты, автоматически регистрируемые как вызываемые Agent инструменты |
| **Resources** | Читаемые ресурсы (текст/бинарные) |
| **Prompts** | Шаблоны промптов с поддержкой параметров |

## listServers — список серверов

```javascript
const servers = await CAT.agent.mcp.listServers();
```

**Возвращаемое значение, MCPServerConfig[]:**

| Поле | Тип | Описание |
|------|------|------|
| `id` | `string` | ID сервера |
| `name` | `string` | Отображаемое имя |
| `url` | `string` | Адрес HTTP-эндпоинта |
| `apiKey` | `string` | API Key (необязательно) |
| `headers` | `Record<string, string>` | Пользовательские заголовки запроса (необязательно) |
| `enabled` | `boolean` | Включён ли |
| `createtime` | `number` | Временная метка создания |
| `updatetime` | `number` | Временная метка обновления |

## getServer — детали сервера

```javascript
const server = await CAT.agent.mcp.getServer(serverId);
```

## addServer — добавить сервер

```javascript
const server = await CAT.agent.mcp.addServer({
  name: "My MCP Server",
  url: "https://mcp.example.com/api",
  apiKey: "sk-xxx",          // optional
  headers: {                  // optional custom headers
    "X-Custom": "value"
  },
  enabled: true
});
```

## updateServer — обновить сервер

```javascript
await CAT.agent.mcp.updateServer(serverId, {
  name: "New name",
  enabled: false
});
```

## removeServer — удалить сервер

```javascript
await CAT.agent.mcp.removeServer(serverId);
```

## testConnection — проверить соединение

```javascript
await CAT.agent.mcp.testConnection(serverId);
```

Пытается подключиться к серверу и обменяться версиями протокола; при успехе ничего не возвращает, при сбое выбрасывает исключение.

## listTools — список инструментов

```javascript
const tools = await CAT.agent.mcp.listTools(serverId);
```

Возвращает список инструментов сервера; каждый инструмент включает `name`, `description` и `inputSchema` (определение параметров JSON Schema).

Инструменты включённых MCP-серверов автоматически регистрируются у Agent с именами формата `mcp_{serverId}_{toolName}`.

## listResources — список ресурсов

```javascript
const resources = await CAT.agent.mcp.listResources(serverId);
```

Возвращает список ресурсов, которые может предоставить сервер.

## readResource — прочитать ресурс

```javascript
const result = await CAT.agent.mcp.readResource(serverId, uri);
```

**Параметры:**

| Параметр | Тип | Описание |
|------|------|------|
| `serverId` | `string` | ID сервера |
| `uri` | `string` | URI ресурса |

Возвращает содержимое ресурса.

## listPrompts — список шаблонов промптов

```javascript
const prompts = await CAT.agent.mcp.listPrompts(serverId);
```

## getPrompt — получить промпт

```javascript
const messages = await CAT.agent.mcp.getPrompt(serverId, promptName, args?);
```

**Параметры:**

| Параметр | Тип | Описание |
|------|------|------|
| `serverId` | `string` | ID сервера |
| `promptName` | `string` | Имя промпта |
| `args` | `Record<string, string>` | Параметры промпта |

## Полный пример

```javascript
// ==UserScript==
// @name        MCP Tool Management
// @match       *://*/*
// @grant       CAT.agent.mcp
// @grant       CAT.agent.conversation
// ==/UserScript==

// Add an MCP server
const server = await CAT.agent.mcp.addServer({
  name: "Knowledge Base",
  url: "https://my-kb.example.com/mcp",
  apiKey: "my-api-key",
  enabled: true
});

// Test the connection
try {
  await CAT.agent.mcp.testConnection(server.id);
  console.log("Connected successfully!");
} catch (e) {
  console.error("Connection failed:", e);
}

// See the available tools
const tools = await CAT.agent.mcp.listTools(server.id);
console.log("Available tools:", tools.map(t => t.name));

// Use it in a conversation — MCP tools are registered automatically, so the AI can call them directly
const conv = await CAT.agent.conversation.create();
const reply = await conv.chat("Please use the knowledge base to search for information about ScriptCat");
```
