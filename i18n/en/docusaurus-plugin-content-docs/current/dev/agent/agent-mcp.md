---
title: MCP Management API
---

`@grant CAT.agent.mcp`

The MCP ([Model Context Protocol](https://modelcontextprotocol.io/)) Management API lets a script manage MCP server connections. The tools an MCP server provides are automatically registered with the Agent for AI conversations to call.

## MCP Servers

ScriptCat's MCP Client uses the **Streamable HTTP** transport protocol (JSON-RPC 2.0 over POST), supporting MCP protocol version `2025-03-26`.

An MCP server can provide three kinds of capabilities:

| Capability | Description |
|------|------|
| **Tools** | Tool functions, automatically registered as tools the Agent can call |
| **Resources** | Readable resources (text/binary) |
| **Prompts** | Prompt templates, supporting parameters |

## listServers — List Servers

```javascript
const servers = await CAT.agent.mcp.listServers();
```

**Return value, MCPServerConfig[]:**

| Field | Type | Description |
|------|------|------|
| `id` | `string` | Server ID |
| `name` | `string` | Display name |
| `url` | `string` | The HTTP endpoint address |
| `apiKey` | `string` | API Key (optional) |
| `headers` | `Record<string, string>` | Custom request headers (optional) |
| `enabled` | `boolean` | Whether it's enabled |
| `createtime` | `number` | Creation timestamp |
| `updatetime` | `number` | Update timestamp |

## getServer — Get Server Details

```javascript
const server = await CAT.agent.mcp.getServer(serverId);
```

## addServer — Add a Server

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

## updateServer — Update a Server

```javascript
await CAT.agent.mcp.updateServer(serverId, {
  name: "New name",
  enabled: false
});
```

## removeServer — Remove a Server

```javascript
await CAT.agent.mcp.removeServer(serverId);
```

## testConnection — Test the Connection

```javascript
await CAT.agent.mcp.testConnection(serverId);
```

Attempts to connect to the server and exchange protocol versions; returns nothing on success, throws on failure.

## listTools — List Tools

```javascript
const tools = await CAT.agent.mcp.listTools(serverId);
```

Returns the list of tools the server provides; each tool includes `name`, `description`, and `inputSchema` (a JSON Schema parameter definition).

Tools from enabled MCP servers are automatically registered with the Agent, named using the format `mcp_{serverId}_{toolName}`.

## listResources — List Resources

```javascript
const resources = await CAT.agent.mcp.listResources(serverId);
```

Returns the list of resources the server can provide.

## readResource — Read a Resource

```javascript
const result = await CAT.agent.mcp.readResource(serverId, uri);
```

**Parameters:**

| Parameter | Type | Description |
|------|------|------|
| `serverId` | `string` | Server ID |
| `uri` | `string` | Resource URI |

Returns the resource's content.

## listPrompts — List Prompt Templates

```javascript
const prompts = await CAT.agent.mcp.listPrompts(serverId);
```

## getPrompt — Get a Prompt

```javascript
const messages = await CAT.agent.mcp.getPrompt(serverId, promptName, args?);
```

**Parameters:**

| Parameter | Type | Description |
|------|------|------|
| `serverId` | `string` | Server ID |
| `promptName` | `string` | Prompt name |
| `args` | `Record<string, string>` | Prompt parameters |

## Full Example

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
