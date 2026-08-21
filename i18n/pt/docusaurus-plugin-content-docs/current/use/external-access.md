---
title: Acesso Externo (CLI e Clientes de IA)
sidebar_label: Acesso Externo
---

**Acesso Externo** permite que programas de linha de comando locais e clientes de IA compatíveis com [MCP](https://modelcontextprotocol.io/) gerenciem scripts no ScriptCat através do [sctl](https://github.com/scriptscat/sctl).

```text
AI client ── stdio MCP ──▶ sctl mcp ── local control API ──▶ sctl serve ── WebSocket ──▶ ScriptCat
CLI ────────────────────────────────────────────────────────▲
```

`sctl serve` é um daemon local separado que deve ser iniciado explicitamente.

:::warning O ouvinte é local por padrão
sctl escuta em `127.0.0.1` por padrão. Escuta em outra interface apenas quando `--listen-address` é passado explicitamente.
:::

## 1. Instalar sctl

```bash
curl -fsSL https://raw.githubusercontent.com/scriptscat/sctl/main/scripts/install.sh | sh
```

ou Windows PowerShell:

```powershell
irm https://raw.githubusercontent.com/scriptscat/sctl/main/scripts/install.ps1 | iex
```

```bash
sctl version
```

## 2. Iniciar o daemon e registrar

### 2.1 Escolher um diretório de dados

```bash
export SCTL_DATA_DIR=/absolute/path/to/sctl-data
sctl serve
sctl status
sctl mcp
```

### 2.2 Iniciar o daemon

```bash
sctl serve
```

### 2.3 Habilitar e parear no ScriptCat

1. Abra **Ajustes → Ferramentas → Acesso Externo** no ScriptCat e ative a chave.
2. Confirme que o **endereço sctl** corresponde ao daemon.
3. Execute em outro terminal:

   ```bash
   sctl connect
   ```

4. Insira o código de terminal de 8 caracteres.
5. Verifique a conexão:

   ```bash
   sctl status
   ```

:::warning O código de pareamento é apenas do terminal
O código se parece com `A1B2-C3D4`, expira após 2 minutos e funciona uma vez. Nunca o cole em um chat de IA, issue, log ou configuração MCP.
:::

## 3. Permissões e confirmação {#permissions}

| Capacidade | Comportamento padrão |
|---|---|
| Listar scripts e ler metadados | Retornar diretamente |
| Ler ou buscar fonte do script | Seguir a política de **leitura de fonte** |
| Instalar, editar, habilitar, desabilitar ou excluir um script | Seguir a política de **escrita** |

## 4. Uso da linha de comando

```bash
sctl get                         # Listar scripts
sctl get <uuid>                  # Ler metadados
sctl get <uuid> -o source        # Imprimir fonte completa
sctl get <uuid> -o source --lines 20-80
sctl grep <uuid> "fetch("         # Busca literal de fonte
sctl grep <uuid> "pattern" -E    # Expressão regular
sctl install <url|file>
sctl edit <uuid> --replace OLD --with NEW
sctl enable <uuid>
sctl disable <uuid>
sctl delete <uuid>
sctl status
```

## 5. Conectar um cliente de IA (MCP)

```json
{
  "mcpServers": {
    "scriptcat": {
      "command": "/absolute/path/to/sctl",
      "env": {
        "SCTL_DATA_DIR": "/absolute/path/to/sctl-data"
      },
      "args": ["mcp", "--name", "my-ai-client"]
    }
  }
}
```

Ferramentas atuais:

| Ferramenta | Propósito | Política de confirmação |
|---|---|---|
| `scripts_list` | Resumos de scripts | Nenhuma |
| `scripts_metadata_get` | Metadados de um script | Nenhuma |
| `scripts_source_get` | Ler fonte por UUID | Política de leitura de fonte |
| `scripts_source_grep` | Buscar na fonte | Política de leitura de fonte |
| `scripts_install_request` | Solicitar instalação | Política de escrita |
| `scripts_edit_request` | Solicitar edição | Política de escrita |
| `scripts_toggle_request` | Solicitar habilitar/desabilitar | Política de escrita |
| `scripts_delete_request` | Solicitar exclusão | Política de escrita |

## 6. Auditoria e revogação

- `sctl status` mostra versão do daemon, conectividade e eventos de segurança recentes.
- "Parar Acesso Externo" desconecta, exclui o estado de pareamento e limpa permissões de sessão.

## 7. Solução de problemas {#troubleshooting}

**Daemon inacessível** — Execute `sctl serve` primeiro.

**Autenticação do canal de controle falhou** — Confirme que `serve`, comandos CLI e processo MCP resolvem para o mesmo diretório de dados absoluto.

**O estado diz "Conexão falhou"** — Confirme que o daemon está rodando e o endereço corresponde.

**Um comando não retorna** — Verifique o navegador para uma página de confirmação de escrita ou divulgação de fonte.

**Encontrar logs** — Os logs estão em `<data-dir>/logs/`.

| Plataforma | Diretório de logs |
|---|---|
| macOS | `~/Library/Application Support/sctl/logs/` |
| Windows | `%LOCALAPPDATA%\sctl\logs\` |
| Linux | `~/.config/sctl/logs/` |
