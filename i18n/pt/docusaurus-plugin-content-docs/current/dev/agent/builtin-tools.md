---
title: Referência de Ferramentas Integradas
---

Agent vem com um conjunto de ferramentas integradas que a IA chama automaticamente durante as conversas. Estas ferramentas estão disponíveis por padrão em conversas persistentes; os desenvolvedores de scripts normalmente não precisam chamá-las diretamente — a IA seleciona a ferramenta certa com base na intenção do usuário.

Entender o que estas ferramentas podem fazer ajuda a escrever melhores prompts do sistema e ferramentas personalizadas.

## Busca de Dados Web

### web_fetch

Obtém o conteúdo de uma URL, com extração de HTML para texto e suporte a resumo por LLM.

| Parâmetro | Tipo | Obrigatório | Descrição |
|------|------|------|------|
| `url` | `string` | Sim | URL alvo (apenas http/https) |
| `prompt` | `string` | Não | Prompt de resumo (quando fornecido, um LLM é usado para destilar o conteúdo) |
| `max_length` | `number` | No | Máximo de caracteres de conteúdo |

**Detalhes de comportamento:**
- Timeout de 30 segundos na requisição
- O conteúdo HTML extrai automaticamente o texto principal (remove navegação, barras laterais, etc.)
- Respostas JSON são analisadas automaticamente
- Texto puro é retornado como está
- Quando `prompt` é fornecido, o conteúdo obtido é enviado a um LLM para resumo

**Valor de retorno:**
```json
{
  "url": "https://example.com",
  "content_type": "text/html",
  "content": "Conteúdo do corpo extraído...",
  "truncated": false,
  "final_url": "https://example.com/redirected"
}
```

### web_search

Consulta um mecanismo de pesquisa e retorna resultados de pesquisa estruturados.

| Parâmetro | Tipo | Obrigatório | Descrição |
|------|------|------|------|
| `query` | `string` | Sim | Palavras-chave de pesquisa |
| `max_results` | `number` | Não | Máximo número de resultados (padrão 5, limite 10) |

**Mecanismos de pesquisa suportados:**

| Mecanismo | Descrição | Configuração necessária |
|------|------|---------|
| DuckDuckGo | Mecanismo padrão | Nenhuma |
| Bing | Microsoft Bing Search | Chave API necessária |
| Baidu | Baidu Search | Nenhuma chave API necessária |
| Google Custom Search | Google Custom Search | Chave API + ID CSE necessários |

Os mecanismos de pesquisa são configurados na página de gerenciamento → Agent → Configurações.

**Valor de retorno:**
```json
[
  {
    "title": "Título do resultado de pesquisa",
    "url": "https://example.com/result",
    "snippet": "Texto de resumo do resultado..."
  }
]
```

### get_tab_content

Lê o conteúdo renderizado de uma página de uma aba específica, convertido em Markdown estruturado anotado com seletores CSS.

| Parâmetro | Tipo | Obrigatório | Descrição |
|------|------|------|------|
| `tab_id` | `number` | Sim | ID da aba |
| `selector` | `string` | Não | Seletor CSS; extrai apenas a parte correspondente |
| `prompt` | `string` | Não | Prompt de resumo |
| `max_length` | `number` | Não | Máximo de caracteres de conteúdo |

Diferença do `web_fetch`: `get_tab_content` lê a página **como já renderizada pelo navegador** (incluindo conteúdo JS dinâmico), enquanto `web_fetch` faz uma nova requisição HTTP.

**Valor de retorno:**
```json
{
  "tab_id": 123,
  "url": "https://example.com",
  "title": "Título da página",
  "content": "Conteúdo estruturado...",
  "truncated": false,
  "used_selector": "main"
}
```

## Gerenciamento de Abas

### list_tabs

Consulta abas abertas, com suporte a várias condições de filtro.

| Parâmetro | Tipo | Obrigatório | Descrição |
|------|------|------|------|
| `url_pattern` | `string` | Não | Correspondência regex de URL |
| `title_pattern` | `string` | Não | Correspondência regex de título |
| `active` | `boolean` | Não | Retorna apenas a aba ativa |
| `window_id` | `number` | Não | Janela especificada |
| `audible` | `boolean` | Não | Retorna apenas abas que atualmente reproduzem áudio |

### open_tab

Abre uma nova aba ou navega uma existente.

| Parâmetro | Tipo | Obrigatório | Descrição |
|------|------|------|------|
| `url` | `string` | Sim | URL alvo |
| `tab_id` | `number` | Não | ID de uma aba existente (se fornecido, aquela aba é navegada; caso contrário uma nova aba é aberta) |
| `active` | `boolean` | Não | Se ativá-la (padrão `true`) |
| `window_id` | `number` | Não | Janela especificada |
| `wait_until_loaded` | `boolean` | Não | Se aguardar a página terminar de carregar (padrão `true`) |

### close_tab

Fecha uma aba.

| Parâmetro | Tipo | Obrigatório | Descrição |
|------|------|------|------|
| `tab_id` | `number` | Sim | ID da aba |

### activate_tab

Ativa uma aba e foca a janela onde ela se encontra.

| Parâmetro | Tipo | Obrigatório | Descrição |
|------|------|------|------|
| `tab_id` | `number` | Sim | ID da aba |

## Sistema de Arquivos (OPFS)

### opfs_write

Escreve um arquivo no espaço de trabalho.

| Parâmetro | Tipo | Obrigatório | Descrição |
|------|------|------|------|
| `path` | `string` | Sim | Caminho do arquivo |
| `content` | `string` | Sim | Conteúdo do arquivo (suporta binário data URL) |

### opfs_read

Lê um arquivo do espaço de trabalho. Por padrão, o tipo de arquivo é detectado automaticamente: arquivos de texto retornam seu conteúdo, arquivos binários retornam uma URL blob.

| Parâmetro | Tipo | Obrigatório | Descrição |
|------|------|------|------|
| `path` | `string` | Sim | Caminho do arquivo |
| `mode` | `string` | Não | `"text"` / `"blob"` / `"auto"` (padrão) — força um modo de retorno específico |
| `offset` | `number` | Não | Número da linha de início (indexado a partir de 1), apenas modo texto |
| `limit` | `number` | Não | Número de linhas a ler, apenas modo texto (paginação é necessária uma vez que o texto excede 200 linhas) |

### opfs_list

Lista o conteúdo de um diretório.

| Parâmetro | Tipo | Obrigatório | Descrição |
|------|------|------|------|
| `path` | `string` | Não | Caminho do diretório (padrão é o diretório raiz) |

### opfs_delete

Exclui um arquivo ou diretório.

| Parâmetro | Tipo | Obrigatório | Descrição |
|------|------|------|------|
| `path` | `string` | Sim | Caminho do arquivo/diretório |

## Interação com o Usuário

### ask_user

Faz uma pergunta ao usuário, suportando entrada livre ou escolha estruturada.

| Parâmetro | Tipo | Obrigatório | Descrição |
|------|------|------|------|
| `question` | `string` | Sim | A pergunta |
| `options` | `string[]` | Não | Lista de opções (quando fornecida, torna-se uma pergunta de múltipla escolha) |
| `multiple` | `boolean` | Não | Se múltiplas seleções são permitidas (padrão `false`) |

**Timeout:** retorna `{ answer: null, reason: "timeout" }` após 5 minutos sem resposta.

**Valor de retorno:**
```json
{ "answer": "Texto da resposta do usuário" }
```

### execute_script

Executa código JavaScript em uma página ou sandbox.

| Parâmetro | Tipo | Obrigatório | Descrição |
|------|------|------|------|
| `code` | `string` | Sim | Código JavaScript |
| `target` | `string` | Sim | `"page"` ou `"sandbox"` |
| `tab_id` | `number` | Não | Qual aba mirar quando `target` é `page` (padrão a aba ativa atual); ignorado para sandbox |

**Comparação de ambientes de execução:**

| Ambiente | DOM | JS da Página | URL blob da Extensão | Melhor para |
|------|-----|---------|---------------|---------|
| `target: "page"` (sempre mundo MAIN) | sim | sim | não | Ler/manipular o DOM, chamar funções da página, ler variáveis da página |
| `target: "sandbox"` | não | não | não | Cálculo puro |

> O modo `page` sempre é executado no mundo MAIN da página, compartilhando `window` com a página — portanto não pode acessar as URLs blob da extensão (por exemplo, o endereço que `opfs_read` retorna em modo blob). Use um SkillScript quando precisar trabalhar com uma URL blob.

## Sub-agentes

### agent

Gera um sub-agente independente para lidar com uma subtarefa complexa.

| Parâmetro | Tipo | Obrigatório | Descrição |
|------|------|------|------|
| `prompt` | `string` | Sim | Descrição da subtarefa |
| `description` | `string` | Não | Uma etiqueta curta (algumas palavras, para exibição na UI) |
| `type` | `string` | Não | Tipo de sub-agente (veja abaixo), padrão `"general"` |
| `tab_id` | `number` | Não | ID da aba a passar ao sub-agente; o sub-agente operará naquela aba |

**Tipos de sub-agente:**

| tipo | Descrição | Ferramentas disponíveis |
|------|------|---------|
| `researcher` | Recuperação de informação (somente leitura) | web_search, web_fetch, leitura de conteúdo da página |
| `page_operator` | Automação do navegador | Gerenciamento de abas, manipulação DOM, interação com página |
| `general` | Uso geral (padrão) | Todas as ferramentas |

**Características:**
- Um sub-agente tem seu próprio contexto de conversa independente
- **Não pode** usar `ask_user` nem `agent` (para prevenir recursão)
- Os eventos do sub-agente são passados para a conversa pai via `sub_agent_event`

## Gerenciamento de Tarefas

Este grupo de ferramentas gerencia uma lista de tarefas temporária dentro de uma conversa (em memória, não persistida).

### create_task

| Parâmetro | Tipo | Obrigatório | Descrição |
|------|------|------|------|
| `subject` | `string` | Sim | Título da tarefa |
| `description` | `string` | Não | Descrição detalhada |

### update_task

| Parâmetro | Tipo | Obrigatório | Descrição |
|------|------|------|------|
| `task_id` | `string` | Sim | ID da tarefa |
| `status` | `string` | Não | `"pending"` / `"in_progress"` / `"completed"` |
| `subject` | `string` | Não | Novo título |
| `description` | `string` | Não | Nova descrição |

### list_tasks

Sem parâmetros; retorna uma lista breve de todas as tarefas.

> As ferramentas de gerenciamento de tarefas são principalmente para que a IA rastreie seu próprio progresso ao lidar com tarefas complexas de múltiplos passos; os dados das tarefas não são persistidos.
