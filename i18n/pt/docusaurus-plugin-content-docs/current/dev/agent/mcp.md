---
title: Integração MCP
---

MCP ([Model Context Protocol](https://modelcontextprotocol.io/)) permite que o Agent se conecte a servidores MCP externos e obtenha automaticamente acesso às ferramentas, recursos e modelos de prompt que eles fornecem.

> Ao contrário de outros subsistemas do Agent, os servidores MCP atualmente **só podem ser configurados pelo usuário na página de administração** — não há API de gerenciamento `CAT.agent.mcp` para scripts. Tudo que um script pode observar é que as ferramentas desses servidores são chamadas automaticamente durante as conversas.

## Configurando um servidor MCP

Adicione um na página de administração → **Agent → MCP**:

| Campo | Descrição |
|------|------|
| Nome | Nome de exibição do servidor |
| URL | Endpoint HTTP Streamable (JSON-RPC 2.0 via POST) |
| Chave API | Opcional, para autenticação |
| Headers personalizados | Opcionais |
| Habilitado | Se o servidor está ativo |

O client MCP do ScriptCat usa o transporte **Streamable HTTP** e suporta a versão do protocolo `2025-03-26`.

Um servidor MCP pode fornecer três tipos de capacidade:

| Capacidade | Descrição |
|------|------|
| **Ferramentas** | Registradas automaticamente como ferramentas que o Agent pode chamar |
| **Recursos** | Recursos legíveis (texto/binário) |
| **Prompts** | Modelos de prompt, com suporte a parâmetros |

## Usando em uma conversa

As ferramentas de servidores MCP habilitados aparecem automaticamente na lista de ferramentas disponível para as conversas do Agent, nomeadas usando o padrão `mcp_{nome do servidor sanitizado}_{toolName}` — a IA decide se chamá-las com base na intenção do usuário. Isso funciona de maneira semelhante a como os [Skills](../skill-install) são carregados automaticamente; os desenvolvedores de scripts normalmente não precisam se preocupar com os detalhes subjacentes.

Para verificar se uma ferramenta MCP específica está disponível, basta perguntar diretamente à IA em uma conversa, ou verificar a lista de ferramentas descobertas nos detalhes desse servidor na página de administração.
