---
title: Tích hợp MCP
---

MCP ([Model Context Protocol](https://modelcontextprotocol.io/)) cho phép Agent kết nối với các server MCP bên ngoài và tự động truy cập các công cụ, tài nguyên và mẫu prompt mà chúng cung cấp.

> Khác với các subsystem khác của Agent, các server MCP hiện tại **chỉ có thể được người dùng cấu hình trên trang quản lý** — không có API quản lý `CAT.agent.mcp` cho script. Tất cả mà script có thể quan sát được là các công cụ từ các server này được gọi tự động trong cuộc trò chuyện.

## Cấu hình server MCP

Thêm một server trên trang quản lý → **Agent → MCP**:

| Trường | Mô tả |
|------|------|
| Tên | Tên hiển thị của server |
| URL | Endpoint HTTP Streamable (JSON-RPC 2.0 qua POST) |
| Khóa API | Tùy chọn, cho xác thực |
| Headers tùy chỉnh | Tùy chọn |
| Đã bật | Server có đang hoạt động không |

Client MCP của ScriptCat sử dụng transport **Streamable HTTP** và hỗ trợ phiên bản giao thức `2025-03-26`.

Một server MCP có thể cung cấp ba loại khả năng:

| Khả năng | Mô tả |
|------|------|
| **Công cụ** | Tự động đăng ký như công cụ mà Agent có thể gọi |
| **Tài nguyên** | Tài nguyên có thể đọc (văn bản/nhị phân) |
| **Prompt** | Mẫu prompt, hỗ trợ tham số |

## Sử dụng trong cuộc trò chuyện

Các công cụ từ server MCP được bật tự động xuất hiện trong danh sách công cụ có sẵn cho cuộc trò chuyện Agent, được đặt tên theo mẫu `mcp_{tên server đã sanitizedName}_{toolName}` — AI quyết định có gọi chúng dựa trên ý định của người dùng. Điều này hoạt động tương tự cách [Skills](../agent-skill-install) tự động tải; nhà phát triển script thường không cần lo lắng về các chi tiết cơ bản.

Để kiểm tra xem một công cụ MCP cụ thể có khả dụng không, chỉ cần hỏi AI trực tiếp trong cuộc trò chuyện, hoặc kiểm tra danh sách công cụ đã phát hiện trong chi tiết server đó trên trang quản lý.
