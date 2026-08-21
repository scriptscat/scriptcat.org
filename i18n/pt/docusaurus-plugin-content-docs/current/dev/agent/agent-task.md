---
title: API de Tarefas Agendadas
---

`@grant CAT.agent.task`

A API de tarefas agendadas permite que um script crie tarefas baseadas em expressões Cron, com dois modos de execução.

## Modos de execução

### Modo interno

Gerenciado automaticamente pelo sistema Agent:
- Cria ou retoma uma conversa automaticamente quando o Cron é acionado
- Envia o `prompt` configurado para o LLM
- É possível especificar um modelo e Skills
- O histórico de execução e uso de tokens é registrado automaticamente

### Modo evento

Gerenciado pelo próprio script:
- Uma notificação de evento é enviada para o script quando o Cron é acionado
- O script escuta o evento via `addListener`
- A lógica de tratamento é totalmente personalizável

## create — criar uma tarefa

```javascript
const task = await CAT.agent.task.create(options);
```

**Parâmetros (`AgentTaskCreateOptions`):**

| Parâmetro | Tipo | Obrigatório | Descrição |
|------|------|------|------|
| `name` | `string` | Sim | Nome da tarefa |
| `crontab` | `string` | Sim | Expressão Cron padrão (5 campos: minuto hora dia mês dia_semana) |
| `mode` | `"internal" \| "event"` | Sim | Modo de execução |
| `enabled` | `boolean` | Não | Se está habilitada, padrão `true` |
| `notify` | `boolean` | Não | Se enviar notificação do navegador quando acionada |
| `prompt` | `string` | Não | Prompt para modo interno |
| `modelId` | `string` | Não | ID do modelo a usar no modo interno |
| `skills` | `string[]` | Não | Skills a carregar no modo interno |
| `maxIterations` | `number` | Não | Máximo de rodadas de chamadas de ferramentas no modo interno, padrão `10` |

**Retorna `AgentTask`:**

| Campo | Tipo | Descrição |
|------|------|------|
| `id` | `string` | ID da tarefa |
| `name` | `string` | Nome da tarefa |
| `crontab` | `string` | Expressão Cron |
| `mode` | `string` | Modo de execução |
| `enabled` | `boolean` | Se está habilitada |
| `notify` | `boolean` | Se envia notificações |
| `nextruntime` | `number` | Carimbo de data/hora da próxima execução |
| `lastruntime` | `number` | Carimbo de data/hora da última execução |
| `conversationId` | `string` | ID da conversa associada no modo interno (opcional) |
| `lastRunStatus` | `"success" \| "error"` | Status da última execução |
| `lastRunError` | `string` | Mensagem de erro da última execução |
| `createtime` | `number` | Carimbo de data/hora de criação |

**Exemplos de expressão Cron:**

| Expressão | Descrição |
|--------|------|
| `* * * * *` | A cada minuto |
| `0 9 * * *` | Todos os dias às 09:00 |
| `0 */2 * * *` | A cada 2 horas |
| `30 8 * * 1-5` | Dias úteis às 08:30 |
| `0 0 1 * *` | 00:00 no dia 1 de cada mês |

## list — listar todas as tarefas

```javascript
const tasks = await CAT.agent.task.list();
```

Retorna todas as tarefas criadas pelo script atual.

## get — obter detalhes de uma tarefa

```javascript
const task = await CAT.agent.task.get(taskId);
```

Retorna `undefined` se a tarefa não existir.

## update — atualizar uma tarefa

```javascript
const task = await CAT.agent.task.update(taskId, partial);
```

**Campos atualizáveis:**

```javascript
await CAT.agent.task.update(task.id, {
  name: "Novo nome",
  crontab: "0 10 * * *",
  enabled: false,
  prompt: "Novo prompt",
  notify: true
});
```

`nextruntime` é recalculado automaticamente após uma atualização.

## remove — excluir uma tarefa

```javascript
const success = await CAT.agent.task.remove(taskId);
```

## runNow — executar imediatamente

```javascript
await CAT.agent.task.runNow(taskId);
```

Aciona a execução da tarefa uma vez imediatamente, sem esperar o Cron (não bloqueante, executado em segundo plano).

## addListener — escutar ativações de tarefas

```javascript
const listenerId = await CAT.agent.task.addListener(taskId, callback);
```

Usado apenas para tarefas em **modo evento**. O callback é executado quando o Cron é acionado.

**Parâmetro do callback (`AgentTaskTrigger`):**

| Campo | Tipo | Descrição |
|------|------|------|
| `taskId` | `string` | ID da tarefa |
| `name` | `string` | Nome da tarefa |
| `crontab` | `string` | Expressão Cron |
| `triggeredAt` | `number` | Carimbo de data/hora de ativação |

## removeListener — remover um listener

```javascript
await CAT.agent.task.removeListener(listenerId);
```

## Exemplos completos

### Modo interno — a IA executa automaticamente

```javascript
// ==UserScript==
// @name        Resumo de notícias agendado
// @match       *://*/*
// @grant       CAT.agent.task
// ==/UserScript==

const task = await CAT.agent.task.create({
  name: "Resumo diário de notícias",
  crontab: "0 9 * * *",       // Todos os dias às 9
  mode: "internal",
  prompt: "Por favor, pesquise as notícias de tecnologia de hoje e salve um breve resumo no OPFS",
  skills: ["web-search"],
  maxIterations: 10,
  notify: true
});

console.log("Tarefa criada, próxima execução:", new Date(task.nextruntime));
```

### Modo evento — o script gerencia

```javascript
// ==UserScript==
// @name        Coleta de dados agendada
// @match       *://*/*
// @grant       CAT.agent.task
// @grant       CAT.agent.dom
// ==/UserScript==

const task = await CAT.agent.task.create({
  name: "Coleta de dados de ações",
  crontab: "*/30 9-15 * * 1-5", // A cada 30 minutos, 9-15 nos dias úteis
  mode: "event",
  enabled: true,
  notify: false
});

await CAT.agent.task.addListener(task.id, async (trigger) => {
  console.log(`Tarefa acionada: ${trigger.name} em ${new Date(trigger.triggeredAt)}`);

  // Lógica de coleta personalizada
  await CAT.agent.dom.navigate("https://finance.example.com/stock");
  const content = await CAT.agent.dom.readPage({ selector: ".stock-table" });

  // Processar os dados...
  console.log("Coleta concluída");
});
```
