---
title: Truy cập Bên ngoài (CLI và Clients AI)
sidebar_label: Truy cập Bên ngoài
---

**Truy cập Bên ngoài** cho phép các chương trình dòng lệnh cục bộ và clients AI tương thích [MCP](https://modelcontextprotocol.io/) quản lý script trong ScriptCat thông qua [sctl](https://github.com/scriptscat/sctl).

```text
AI client ── stdio MCP ──▶ sctl mcp ── local control API ──▶ sctl serve ── WebSocket ──▶ ScriptCat
CLI ────────────────────────────────────────────────────────▲
```

`sctl serve` là một daemon cục bộ riêng biệt phải được khởi động rõ ràng.

:::warning Listener mặc định là cục bộ
sctl lắng nghe trên `127.0.0.1` theo mặc định. Chỉ lắng nghe trên giao diện khác khi truyền `--listen-address` rõ ràng.
:::

## 1. Cài đặt sctl

```bash
curl -fsSL https://raw.githubusercontent.com/scriptscat/sctl/main/scripts/install.sh | sh
```

hoặc Windows PowerShell:

```powershell
irm https://raw.githubusercontent.com/scriptscat/sctl/main/scripts/install.ps1 | iex
```

```bash
sctl version
```

## 2. Khởi động daemon và đăng ký

### 2.1 Chọn thư mục dữ liệu

```bash
export SCTL_DATA_DIR=/absolute/path/to/sctl-data
sctl serve
sctl status
sctl mcp
```

### 2.2 Khởi động daemon

```bash
sctl serve
```

### 2.3 Bật và ghép nối trong ScriptCat

1. Mở **Cài đặt → Công cụ → Truy cập Bên ngoài** trong ScriptCat và bật công tắc.
2. Xác nhận **địa chỉ sctl** khớp với daemon.
3. Thực hiện trong terminal khác:

   ```bash
   sctl connect
   ```

4. Nhập mã terminal 8 ký tự.
5. Xác minh kết nối:

   ```bash
   sctl status
   ```

:::warning Mã ghép nối chỉ dùng cho terminal
Mã trông giống `A1B2-C3D4`, hết hạn sau 2 phút và chỉ dùng một lần. Không bao giờ dán vào chat AI, issue, log hoặc cấu hình MCP.
:::

## 3. Quyền hạn và xác nhận {#permissions}

| Khả năng | Hành vi mặc định |
|---|---|
| Liệt kê script và đọc metadata | Trả về trực tiếp |
| Đọc hoặc tìm kiếm source script | Theo chính sách **đọc source** |
| Cài đặt, chỉnh sửa, bật, tắt hoặc xóa script | Theo chính sách **ghi** |

## 4. Sử dụng dòng lệnh

```bash
sctl get                         # Liệt kê script
sctl get <uuid>                  # Đọc metadata
sctl get <uuid> -o source        # In source đầy đủ
sctl get <uuid> -o source --lines 20-80
sctl grep <uuid> "fetch("         # Tìm kiếm literal
sctl grep <uuid> "pattern" -E    # Biểu thức chính tắc
sctl install <url|file>
sctl edit <uuid> --replace OLD --with NEW
sctl enable <uuid>
sctl disable <uuid>
sctl delete <uuid>
sctl status
```

## 5. Kết nối client AI (MCP)

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

Công cụ hiện tại:

| Công cụ | Mục đích | Chính sách xác nhận |
|---|---|---|
| `scripts_list` | Tóm tắt script | Không có |
| `scripts_metadata_get` | Đọc metadata một script | Không có |
| `scripts_source_get` | Đọc source theo UUID | Chính sách đọc source |
| `scripts_source_grep` | Tìm kiếm trong source | Chính sách đọc source |
| `scripts_install_request` | Yêu cầu cài đặt | Chính sách ghi |
| `scripts_edit_request` | Yêu cầu chỉnh sửa | Chính sách ghi |
| `scripts_toggle_request` | Yêu cầu bật/tắt | Chính sách ghi |
| `scripts_delete_request` | Yêu cầu xóa | Chính sách ghi |

## 6. Kiểm toán và thu hồi

- `sctl status` hiển thị phiên bản daemon, kết nối và sự kiện bảo mật gần đây.
- "Dừng Truy cập Bên ngoài" ngắt kết nối, xóa trạng thái ghép nối và xóa quyền phiên.

## 7. Khắc phục sự cố {#troubleshooting}

**Daemon không thể truy cập** — Chạy `sctl serve` trước.

**Xác thực kênh điều khiển thất bại** — Xác nhận rằng `serve`, lệnh CLI và quy trình MCP giải nén cùng thư mục dữ liệu tuyệt đối.

**Trạng thái nói "Kết nối thất bại"** — Xác nhận daemon đang chạy và địa chỉ khớp.

**Một lệnh không trả về** — Kiểm tra trình duyệt để xem trang xác nhận ghi hoặc tiết lộ source.

**Tìm nhật ký** — Nhật ký nằm trong `<data-dir>/logs/`.

| Nền tảng | Thư mục nhật ký |
|---|---|
| macOS | `~/Library/Application Support/sctl/logs/` |
| Windows | `%LOCALAPPDATA%\sctl\logs\` |
| Linux | `~/.config/sctl/logs/` |
