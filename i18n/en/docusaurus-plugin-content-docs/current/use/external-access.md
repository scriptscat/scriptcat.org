---
title: External Access (CLI and AI Clients)
sidebar_label: External Access
---

**External Access** lets local command-line programs and [MCP](https://modelcontextprotocol.io/)-capable AI
clients manage scripts in ScriptCat through [sctl](https://github.com/scriptscat/sctl).

```text
AI client ── stdio MCP ──▶ sctl mcp ── local control API ──▶ sctl serve ── WebSocket ──▶ ScriptCat
CLI ────────────────────────────────────────────────────────▲
```

`sctl serve` is a separate local daemon that you must start explicitly. `sctl mcp` and requester commands never
start it automatically. ScriptCat's policies and browser confirmation UI always decide whether source disclosure
or a write is allowed; an external program cannot approve its own request.

:::warning The listener is local by default
sctl listens on `127.0.0.1` by default. It listens on another interface only when `--listen-address` is passed
explicitly. `ws://` does not encrypt business traffic and there is no per-remote-client isolation, so use a
non-default address only on a trusted network. The extension and daemon still establish a long-term key through
a one-time pairing code and use mutual authentication on later connections.
:::

## 1. Install sctl

sctl is a single executable. If [GitHub Releases](https://github.com/scriptscat/sctl/releases) has a published
archive for your platform, download and extract it, then put `sctl` (`sctl.exe` on Windows) on `PATH`.

```bash
sctl version
```

ScriptCat currently requires daemon version `0.1.0` or newer. A plain source build reports `0.0.0-dev` and is
rejected by the extension. Until a release is available, contributors building from source must inject a usable
version as described in the sctl development guide. Do not treat a plain `go install ...@latest` as a usable
installation.

## 2. Start the daemon and enroll

Enrollment is a one-time step. Afterwards, the CLI and every MCP client share the trusted extension-to-daemon
channel; they do not pair separately.

### 2.1 Choose a data directory

The daemon, CLI, and MCP process must use the same data directory. It stores the long-term pairing key, local
control token, and logs. Choose an absolute path private to the current user:

```text
/absolute/path/to/sctl-data
```

Pass the same argument to every process:

```bash
sctl --data-dir /absolute/path/to/sctl-data serve
sctl --data-dir /absolute/path/to/sctl-data status
sctl --data-dir /absolute/path/to/sctl-data mcp
```

Without `--data-dir`, sctl uses the platform's default per-user application data directory. Do not put the data
directory in a repository or shared sync folder, and never give its `pairing.key` or `control.token` to an AI
model.

### 2.2 Start the daemon

Run this in a terminal and keep the process alive:

```bash
sctl --data-dir /absolute/path/to/sctl-data serve
```

The default address is `ws://127.0.0.1:8643`. The daemon is never auto-started by `connect`, `status`, another
CLI command, or `sctl mcp`. For persistent use, run the command above with your operating system's user service
manager.

To listen explicitly on every network interface, run:

```bash
sctl --data-dir /absolute/path/to/sctl-data --listen-address 0.0.0.0:8643 serve
```

On the daemon host, pass the same `--listen-address` to `connect`, `status`, other CLI commands, and `sctl mcp`.
In ScriptCat's **sctl address** setting, enter an address the extension can actually reach, such as
`ws://192.168.1.10:8643`; do not enter `0.0.0.0`.

### 2.3 Enable and pair in ScriptCat

1. Open **Settings → Tools → External Access** in ScriptCat and turn on the switch.
2. Confirm that the **sctl address** matches the daemon; keep the default `ws://127.0.0.1:8643` normally.
3. Keep `sctl serve` running and execute in another terminal:

   ```bash
   sctl --data-dir /absolute/path/to/sctl-data connect
   ```

4. Enter the 8-character terminal code in the “Enroll sctl” dialog.
5. Verify the connection:

   ```bash
   sctl --data-dir /absolute/path/to/sctl-data status
   ```

The status should report a connected extension and show the daemon version.

:::warning The pairing code is terminal-only
The code looks like `A1B2-C3D4`, expires after 2 minutes, and works once. It is not sent to the extension over
the WebSocket. Never paste it into an AI chat, issue, log, or MCP configuration; run `connect` again if it
expires.
:::

## 3. Permissions and confirmation {#permissions}

| Capability | Default behaviour |
|---|---|
| List scripts and read metadata | Return directly |
| Read or search script source | Follow the **source read** policy |
| Install, edit, enable, disable, or delete a script | Follow the **write** policy |

Both policies offer “Require approval” (default) and “Allow directly”.

With “Require approval”, requests open a browser confirmation page. You can reject, allow once, or choose “Allow
for this session”. Session allowances are keyed by script and operation kind, and are cleared when the browser
restarts, the extension reloads, or External Access stops. A request expires after 5 minutes without a decision;
requester disconnect or `Ctrl-C` also voids it.

“Allow directly” skips the confirmation page for that class of operation. Source can contain API keys, cookies,
and other secrets, while writes can directly change scripts, so enable it only when you accept that risk.

## 4. Command-line usage

```bash
sctl --data-dir <path> get                         # List scripts
sctl --data-dir <path> get <uuid>                  # Read metadata
sctl --data-dir <path> get <uuid> -o source        # Print full source
sctl --data-dir <path> get <uuid> -o source --lines 20-80
sctl --data-dir <path> grep <uuid> "fetch("         # Literal source search
sctl --data-dir <path> grep <uuid> "pattern" -E    # Regular expression
sctl --data-dir <path> install <url|file>
sctl --data-dir <path> edit <uuid> --replace OLD --with NEW
sctl --data-dir <path> enable <uuid>
sctl --data-dir <path> disable <uuid>
sctl --data-dir <path> delete <uuid>
sctl --data-dir <path> status
```

`grep` is literal by default; `-E` enables regular expressions, `-i` ignores case, `-C N` adds context, and
`-m N` limits matches. No match is successful and exits with code 0.

`edit` is content-anchored, never line-number-based. Each `oldText` must occur exactly once by default;
`--replace-all` replaces every match. You can also pass a `{oldText,newText,replaceAll?}` array with `-f <file>`.
Only edits are sent to the extension; there is no need to read or upload the entire source first.

Writes and source disclosure block for a browser decision. CLI exit codes:

| Exit code | Meaning |
|---|---|
| `0` | Approved and successful, or a read command completed normally |
| `1` | User rejected the request |
| `2` | Request expired, was cancelled with `Ctrl-C`, or the extension disconnected |
| `3` | Other errors such as arguments, connection, or missing script |

Run `sctl <command> --help` for every option.

## 5. Connect an AI client (MCP)

First make sure `sctl serve` is running and `status` reports a connected extension. Then configure the MCP client
to launch a separate `sctl mcp` process. Use absolute binary and data paths in GUI clients:

```json
{
  "mcpServers": {
    "scriptcat": {
      "command": "/absolute/path/to/sctl",
      "args": [
        "--data-dir",
        "/absolute/path/to/sctl-data",
        "mcp",
        "--name",
        "my-ai-client"
      ]
    }
  }
}
```

Many GUI applications do not expand `~`, `$HOME`, or shell expressions. `--name` is an audit label, not an
authenticated identity or authorization boundary. MCP stdout is reserved for protocol frames; do not wrap sctl
in a script that prints a banner to stdout.

Current tools:

| Tool | Purpose | Confirmation policy |
|---|---|---|
| `scripts_list` | List script summaries | None |
| `scripts_metadata_get` | Read one script's metadata | None |
| `scripts_source_get` | Read source by uuid and optional line window | Source read policy |
| `scripts_source_grep` | Search source and return matching lines | Source read policy |
| `scripts_install_request` | Request script installation | Write policy |
| `scripts_edit_request` | Request a content-anchored edit | Write policy |
| `scripts_toggle_request` | Request enabling or disabling | Write policy |
| `scripts_delete_request` | Request deletion | Write policy |

## 6. Audit and revoke

- “View audit log” in the External Access card opens the log page filtered to this source.
- `sctl --data-dir <path> status` shows daemon version, extension connectivity, and recent security events;
  `-o json` returns complete events.
- “Stop External Access” disconnects, deletes the extension-side pairing state, and clears session allowances.
  Re-enrollment is required afterwards.
- To disable only one AI client, remove sctl from that client's MCP configuration; this does not revoke other
  CLI or client access.

## 7. Troubleshooting {#troubleshooting}

**The daemon is unreachable**

Run `sctl --data-dir <same-path> serve` first. Requester commands never auto-start the daemon.

**Control-channel authentication fails**

Confirm that `serve`, CLI, and MCP configuration use the exact same absolute `--data-dir`, then restart the MCP
client.

**The status says “Connection failed”**

Confirm that the daemon is running, the extension address matches it, and local security software is not
blocking `127.0.0.1:8643`.

**ScriptCat says “sctl version too old”**

Install a release satisfying the minimum printed by `sctl version`; do not use an uninjected `0.0.0-dev` build.

**A command does not return**

Check the browser for a source-disclosure or write confirmation page. Press `Ctrl-C` to void the request.

**Find logs**

Logs are under `<data-dir>/logs/`. Without `--data-dir`, defaults are:

| Platform | Log directory |
|---|---|
| macOS | `~/Library/Application Support/sctl/logs/` |
| Windows | `%LOCALAPPDATA%\sctl\logs\` |
| Linux | `~/.config/sctl/logs/` |
