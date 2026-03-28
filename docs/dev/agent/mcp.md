---
id: agent-mcp
sidebar_position: 8
---

# MCP 管理 API

`@grant CAT.agent.mcp`

MCP（[Model Context Protocol](https://modelcontextprotocol.io/)）管理 API 允许脚本管理 MCP 服务器连接，MCP 服务器提供的工具会自动注册到 Agent，供 AI 对话调用。

## MCP 服务器

ScriptCat 的 MCP Client 使用 **Streamable HTTP** 传输协议（JSON-RPC 2.0 POST），支持 MCP 协议版本 `2025-03-26`。

MCP 服务器可以提供三种能力：

| 能力 | 说明 |
|------|------|
| **Tools** | 工具函数，自动注册为 Agent 可调用的工具 |
| **Resources** | 可读取的资源（文本/二进制） |
| **Prompts** | 提示词模板，支持参数化 |

## listServers — 列出服务器

```javascript
const servers = await CAT.agent.mcp.listServers();
```

**返回值 MCPServerConfig[]：**

| 字段 | 类型 | 说明 |
|------|------|------|
| `id` | `string` | 服务器 ID |
| `name` | `string` | 显示名称 |
| `url` | `string` | HTTP 端点地址 |
| `apiKey` | `string` | API Key（可选） |
| `headers` | `Record<string, string>` | 自定义请求头（可选） |
| `enabled` | `boolean` | 是否启用 |
| `createtime` | `number` | 创建时间戳 |
| `updatetime` | `number` | 更新时间戳 |

## getServer — 获取服务器详情

```javascript
const server = await CAT.agent.mcp.getServer(serverId);
```

## addServer — 添加服务器

```javascript
const server = await CAT.agent.mcp.addServer({
  name: "My MCP Server",
  url: "https://mcp.example.com/api",
  apiKey: "sk-xxx",          // 可选
  headers: {                  // 可选自定义头
    "X-Custom": "value"
  },
  enabled: true
});
```

## updateServer — 更新服务器

```javascript
await CAT.agent.mcp.updateServer(serverId, {
  name: "新名称",
  enabled: false
});
```

## removeServer — 删除服务器

```javascript
await CAT.agent.mcp.removeServer(serverId);
```

## testConnection — 测试连接

```javascript
await CAT.agent.mcp.testConnection(serverId);
```

尝试连接服务器并交换协议版本，成功无返回，失败抛出异常。

## listTools — 列出工具

```javascript
const tools = await CAT.agent.mcp.listTools(serverId);
```

返回服务器提供的工具列表，每个工具包含 `name`、`description` 和 `inputSchema`（JSON Schema 参数定义）。

启用的 MCP 服务器的工具会自动注册到 Agent，命名格式为 `mcp_{serverId}_{toolName}`。

## listResources — 列出资源

```javascript
const resources = await CAT.agent.mcp.listResources(serverId);
```

返回服务器可读取的资源列表。

## readResource — 读取资源

```javascript
const result = await CAT.agent.mcp.readResource(serverId, uri);
```

**参数：**

| 参数 | 类型 | 说明 |
|------|------|------|
| `serverId` | `string` | 服务器 ID |
| `uri` | `string` | 资源 URI |

返回资源内容。

## listPrompts — 列出提示词模板

```javascript
const prompts = await CAT.agent.mcp.listPrompts(serverId);
```

## getPrompt — 获取提示词

```javascript
const messages = await CAT.agent.mcp.getPrompt(serverId, promptName, args?);
```

**参数：**

| 参数 | 类型 | 说明 |
|------|------|------|
| `serverId` | `string` | 服务器 ID |
| `promptName` | `string` | 提示词名称 |
| `args` | `Record<string, string>` | 提示词参数 |

## 完整示例

```javascript
// ==UserScript==
// @name        MCP 工具管理
// @match       *://*/*
// @grant       CAT.agent.mcp
// @grant       CAT.agent.conversation
// ==/UserScript==

// 添加一个 MCP 服务器
const server = await CAT.agent.mcp.addServer({
  name: "Knowledge Base",
  url: "https://my-kb.example.com/mcp",
  apiKey: "my-api-key",
  enabled: true
});

// 测试连接
try {
  await CAT.agent.mcp.testConnection(server.id);
  console.log("连接成功！");
} catch (e) {
  console.error("连接失败:", e);
}

// 查看可用工具
const tools = await CAT.agent.mcp.listTools(server.id);
console.log("可用工具:", tools.map(t => t.name));

// 在对话中使用 — MCP 工具会自动注册，AI 可以直接调用
const conv = await CAT.agent.conversation.create();
const reply = await conv.chat("请使用知识库搜索关于 ScriptCat 的信息");
```
