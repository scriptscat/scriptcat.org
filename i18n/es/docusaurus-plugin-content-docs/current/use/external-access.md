---
title: Acceso Externo (CLI y Clientes de IA)
sidebar_label: Acceso Externo
---

**Acceso Externo** permite que programas de línea de comandos locales y clientes de IA compatibles con [MCP](https://modelcontextprotocol.io/) gestionen scripts en ScriptCat a través de [sctl](https://github.com/scriptscat/sctl).

```text
AI client ── stdio MCP ──▶ sctl mcp ── local control API ──▶ sctl serve ── WebSocket ──▶ ScriptCat
CLI ────────────────────────────────────────────────────────▲
```

`sctl serve` es un daemon local separado que debe iniciarse explícitamente. `sctl mcp` y los comandos solicitantes nunca lo inician automáticamente.

:::warning El escuchador es local por defecto
sctl escucha en `127.0.0.1` por defecto. Solo escucha en otra interfaz cuando se pasa `--listen-address` explícitamente. `ws://` no encripta el tráfico, use una dirección no predeterminada solo en una red de confianza.
:::

## 1. Instalar sctl

```bash
curl -fsSL https://raw.githubusercontent.com/scriptscat/sctl/main/scripts/install.sh | sh
```

o Windows PowerShell:

```powershell
irm https://raw.githubusercontent.com/scriptscat/sctl/main/scripts/install.ps1 | iex
```

```bash
sctl version
```

## 2. Iniciar el daemon y registrarse

### 2.1 Elegir un directorio de datos

```bash
export SCTL_DATA_DIR=/absolute/path/to/sctl-data
sctl serve
sctl status
sctl mcp
```

### 2.2 Iniciar el daemon

```bash
sctl serve
```

### 2.3 Habilitar y emparejar en ScriptCat

1. Abre **Ajustes → Herramientas → Acceso Externo** en ScriptCat y activa el interruptor.
2. Confirma que la **dirección sctl** coincide con el daemon.
3. Ejecuta en otra terminal:

   ```bash
   sctl connect
   ```

4. Ingresa el código de terminal de 8 caracteres.
5. Verifica la conexión:

   ```bash
   sctl status
   ```

:::warning El código de emparejar es solo de terminal
El código se ve como `A1B2-C3D4`, expira después de 2 minutos y funciona una vez. Nunca lo pegues en un chat de IA, issue, registro o configuración MCP.
:::

## 3. Permisos y confirmación {#permissions}

| Capacidad | Comportamiento predeterminado |
|---|---|
| Listar scripts y leer metadatos | Devolver directamente |
| Leer o buscar fuente de script | Seguir la política de **lectura de fuente** |
| Instalar, editar, habilitar, deshabilitar o eliminar un script | Seguir la política de **escritura** |

## 4. Uso de línea de comandos

```bash
sctl get                         # Listar scripts
sctl get <uuid>                  # Leer metadatos
sctl get <uuid> -o source        # Imprimir fuente completa
sctl get <uuid> -o source --lines 20-80
sctl grep <uuid> "fetch("         # Búsqueda literal de fuente
sctl grep <uuid> "pattern" -E    # Expresión regular
sctl install <url|file>
sctl edit <uuid> --replace OLD --with NEW
sctl enable <uuid>
sctl disable <uuid>
sctl delete <uuid>
sctl status
```

## 5. Conectar un cliente de IA (MCP)

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

Herramientas actuales:

| Herramienta | Propósito | Política de confirmación |
|---|---|---|
| `scripts_list` | Resúmenes de scripts | Ninguna |
| `scripts_metadata_get` | Metadatos de un script | Ninguna |
| `scripts_source_get` | Leer fuente por UUID | Política de lectura de fuente |
| `scripts_source_grep` | Buscar en fuente | Política de lectura de fuente |
| `scripts_install_request` | Solicitar instalación | Política de escritura |
| `scripts_edit_request` | Solicitar edición | Política de escritura |
| `scripts_toggle_request` | Solicitar habilitar/deshabilitar | Política de escritura |
| `scripts_delete_request` | Solicitar eliminación | Política de escritura |

## 6. Auditoría y revocación

- `sctl status` muestra versión del daemon, conectividad y eventos de seguridad recientes.
- "Detener Acceso Externo" desconecta, elimina el estado de emparejamiento y borra las permisiones de sesión.

## 7. Solución de problemas {#troubleshooting}

**El daemon no es accesible** — Ejecuta `sctl serve` primero.

**Autenticación del canal de control fallida** — Confirma que `serve`, comandos CLI y el proceso MCP resuelven al mismo directorio de datos absoluto.

**El estado dice "Conexión fallida"** — Confirma que el daemon está ejecutándose y la dirección coincide.

**Un comando no regresa** — Verifica el navegador para una página de confirmación de escritura o divulgación de fuente.

**Encontrar registros** — Los registros están en `<data-dir>/logs/`.

| Plataforma | Directorio de registros |
|---|---|
| macOS | `~/Library/Application Support/sctl/logs/` |
| Windows | `%LOCALAPPDATA%\sctl\logs\` |
| Linux | `~/.config/sctl/logs/` |
