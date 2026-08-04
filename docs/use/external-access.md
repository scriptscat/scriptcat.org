---
title: 外部接入（命令行与 AI 客户端）
sidebar_label: 外部接入
---

**外部接入**让本机命令行和支持 [MCP](https://modelcontextprotocol.io/) 的 AI 客户端通过
[sctl](https://github.com/scriptscat/sctl) 管理脚本猫中的脚本。

```text
AI 客户端 ── stdio MCP ──▶ sctl mcp ── 本地控制 API ──▶ sctl serve ── WebSocket ──▶ 脚本猫
命令行 ─────────────────────────────────────────────────────▲
```

`sctl serve` 是需要单独启动的本地 daemon；`sctl mcp` 和其他命令不会自动启动它。源码披露和写操作
是否放行，始终由脚本猫中的策略和确认界面决定，外部程序不能批准自己的请求。

:::info 连接只在本机
sctl 的桥接端口只监听 `127.0.0.1`，不对局域网或公网开放。扩展主动连接 daemon，双方通过一次性
配对码建立长期密钥，并在后续连接中进行双向认证。
:::

## 一、安装 sctl

sctl 是单文件可执行程序。如果 [GitHub Releases](https://github.com/scriptscat/sctl/releases) 已提供
你的平台对应的发布包，下载、解压并把 `sctl`（Windows 为 `sctl.exe`）放进 `PATH`。

```bash
sctl version
```

脚本猫当前要求 daemon 版本至少为 `0.1.0`。普通源码构建显示为 `0.0.0-dev`，会被扩展拒绝；在正式
发布包可用前，从源码构建的贡献者需要按 sctl 仓库的开发说明注入有效版本号。不要使用普通
`go install ...@latest` 作为可用安装方式。

## 二、启动 daemon 并完成接入

接入只需完成一次。接入后，命令行和所有 MCP 客户端共用扩展与 daemon 之间的信任通道，不需要
分别配对。

### 1. 选择数据目录

daemon、命令行和 MCP 进程必须使用同一个数据目录，其中保存长期配对密钥、本机控制令牌和日志。
建议选择当前用户私有的绝对路径：

```text
/absolute/path/to/sctl-data
```

每个进程都传入同一个参数：

```bash
sctl --data-dir /absolute/path/to/sctl-data serve
sctl --data-dir /absolute/path/to/sctl-data status
sctl --data-dir /absolute/path/to/sctl-data mcp
```

如果不传 `--data-dir`，sctl 使用当前平台的默认用户数据目录。不要把数据目录放进代码仓库或多人
共享的同步目录，也不要向 AI 模型提供其中的 `pairing.key` 或 `control.token`。

### 2. 启动 daemon

在一个终端中运行并保持进程存活：

```bash
sctl --data-dir /absolute/path/to/sctl-data serve
```

默认监听地址为 `ws://127.0.0.1:8643`。daemon 不会被 `connect`、`status`、其他 CLI 命令或
`sctl mcp` 自动启动；需要常驻时，请使用操作系统的用户服务管理器托管上面的命令。

### 3. 在脚本猫中启用并配对

1. 打开脚本猫的**设置 → 工具 → 外部接入**，开启右上角开关。
2. 确认 **sctl 地址**与 daemon 一致；默认保持 `ws://127.0.0.1:8643`。
3. 保持 `sctl serve` 运行，在另一个终端执行：

   ```bash
   sctl --data-dir /absolute/path/to/sctl-data connect
   ```

4. 在「接入 sctl」对话框中输入终端显示的 8 位配对码。
5. 验证连接：

   ```bash
   sctl --data-dir /absolute/path/to/sctl-data status
   ```

状态应显示扩展已连接，并列出 daemon 版本。

:::warning 配对码只在终端显示
配对码形如 `A1B2-C3D4`，2 分钟后过期且只能使用一次。它不会通过 WebSocket 发送给扩展。不要把它
粘贴到 AI 对话、Issue、日志或 MCP 配置中；过期后重新运行 `connect` 即可。
:::

## 三、权限与确认 {#permissions}

| 能力 | 默认行为 |
|---|---|
| 读取脚本列表与元数据 | 直接返回 |
| 读取或搜索脚本源码 | 按**源码读取**策略 |
| 安装、编辑、启用、停用或删除脚本 | 按**写操作**策略 |

「源码读取」和「写操作」策略都可选择「需人工审批」（默认）或「直接允许」。

在「需人工审批」下，请求会打开浏览器确认页。你可以拒绝、仅允许本次，或选择「本会话允许」。
会话授权按脚本和操作类别保存，浏览器重启、扩展重载或停止外部接入后自动清除。请求在 5 分钟内
没有决定会过期；请求方断开或按 `Ctrl-C` 也会作废请求。

「直接允许」会跳过该类操作的确认页。源码可能包含 API Key、Cookie 等敏感信息，写操作则可能
直接改变脚本，请只在理解风险后开启。

## 四、命令行用法

```bash
sctl --data-dir <目录> get                         # 列出脚本
sctl --data-dir <目录> get <uuid>                  # 读取元数据
sctl --data-dir <目录> get <uuid> -o source        # 输出完整源码
sctl --data-dir <目录> get <uuid> -o source --lines 20-80
sctl --data-dir <目录> grep <uuid> "fetch("         # 按字面量搜索源码
sctl --data-dir <目录> grep <uuid> "pattern" -E    # 使用正则表达式
sctl --data-dir <目录> install <url|文件>
sctl --data-dir <目录> edit <uuid> --replace OLD --with NEW
sctl --data-dir <目录> enable <uuid>
sctl --data-dir <目录> disable <uuid>
sctl --data-dir <目录> delete <uuid>
sctl --data-dir <目录> status
```

`grep` 默认按字面量匹配；`-E` 使用正则，`-i` 忽略大小写，`-C N` 返回上下文，`-m N` 限制匹配数。
没有匹配不是错误，退出码仍为 0。

`edit` 使用内容锚点，不按行号修改。每个 `oldText` 默认必须只出现一次；`--replace-all` 可替换全部
匹配。也可以用 `-f <文件>` 提交 `{oldText,newText,replaceAll?}` 数组。只有编辑内容会发送给扩展，
无需先读取或上传整份源码。

写操作和源码披露会阻塞等待浏览器决定。CLI 退出码：

| 退出码 | 含义 |
|---|---|
| `0` | 已批准并成功，或只读命令正常完成 |
| `1` | 用户拒绝 |
| `2` | 请求过期、被 `Ctrl-C` 取消或扩展断开 |
| `3` | 参数、连接、脚本不存在等其他错误 |

运行 `sctl <命令> --help` 查看完整参数。

## 五、接入 AI 客户端（MCP）

先确认 `sctl serve` 正在运行且 `status` 显示扩展已连接，再让 MCP 客户端启动独立的 `sctl mcp`
进程。建议在 GUI 客户端中使用二进制和数据目录的绝对路径：

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

许多 GUI 应用不会展开 `~`、`$HOME` 或 shell 表达式。`--name` 只是审计标签，不是经过认证的身份或
授权边界。MCP 的 stdout 专用于协议帧，不要用会向 stdout 打印 banner 的脚本包装 sctl。

当前提供的工具：

| 工具 | 作用 | 确认策略 |
|---|---|---|
| `scripts_list` | 列出脚本摘要 | 无 |
| `scripts_metadata_get` | 读取单个脚本元数据 | 无 |
| `scripts_source_get` | 按 uuid 和可选行范围读取源码 | 源码读取策略 |
| `scripts_source_grep` | 搜索源码并返回匹配行 | 源码读取策略 |
| `scripts_install_request` | 请求安装脚本 | 写操作策略 |
| `scripts_edit_request` | 请求基于内容锚点编辑脚本 | 写操作策略 |
| `scripts_toggle_request` | 请求启用或停用脚本 | 写操作策略 |
| `scripts_delete_request` | 请求删除脚本 | 写操作策略 |

## 六、审计与撤销

- 外部接入卡片中的「查看审计日志」会打开按外部接入来源过滤的日志页。
- `sctl --data-dir <目录> status` 显示 daemon 版本、扩展连接状态和近期安全事件摘要；`-o json`
  返回完整事件。
- 「停止外部接入」会断开连接、删除扩展侧配对信息并清除会话授权。再次使用时需要重新配对。
- 如果只想停用某个 AI 客户端，从该客户端的 MCP 配置中删除 sctl；这不会撤销其他 CLI 或客户端。

## 七、排查 {#troubleshooting}

**提示 daemon 不可达**

先运行 `sctl --data-dir <相同目录> serve`。请求命令不会自动启动 daemon。

**提示控制通道鉴权失败**

确认 `serve`、CLI 和 MCP 配置使用完全相同的绝对 `--data-dir`，然后重启 MCP 客户端。

**状态显示「连接失败」**

确认 daemon 正在运行，扩展地址与 daemon 一致，并检查本机安全软件是否拦截 `127.0.0.1:8643`。

**提示「sctl 版本过旧」**

安装满足 `sctl version` 所示最低版本的发布包；不要使用未注入版本的 `0.0.0-dev` 构建。

**命令长时间不返回**

检查浏览器中的源码披露或写操作确认页；不想继续可按 `Ctrl-C` 作废请求。

**查看日志**

日志位于 `<data-dir>/logs/`。未传 `--data-dir` 时，默认目录为：

| 平台 | 日志目录 |
|---|---|
| macOS | `~/Library/Application Support/sctl/logs/` |
| Windows | `%LOCALAPPDATA%\sctl\logs\` |
| Linux | `~/.config/sctl/logs/` |
