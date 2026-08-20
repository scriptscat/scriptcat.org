---
title: Integrasi MCP
---

MCP ([Model Context Protocol](https://modelcontextprotocol.io/)) memungkinkan Agent terhubung ke server MCP eksternal dan secara otomatis mendapatkan akses ke alat, sumber daya, dan templat prompt yang mereka sediakan.

> Tidak seperti subsistem Agent lainnya, server MCP saat ini **hanya dapat dikonfigurasi oleh pengguna di halaman manajemen** — tidak ada API manajemen `CAT.agent.mcp` untuk skrip. Yang dapat diamati skrip hanyalah bahwa alat dari server ini dipanggil secara otomatis selama percakapan.

## Mengonfigurasi server MCP

Tambahkan satu di halaman manajemen → **Agent → MCP**:

| Bidang | Deskripsi |
|------|------|
| Nama | Nama tampilan untuk server |
| URL | Titik akhir Streamable HTTP (JSON-RPC 2.0 melalui POST) |
| Kunci API | Opsional, untuk autentikasi |
| Header kustom | Opsional |
| Aktif | Apakah server aktif |

Klien MCP ScriptCat menggunakan transport **Streamable HTTP**, dan mendukung versi protokol `2025-03-26`.

Server MCP dapat menyediakan tiga jenis kemampuan:

| Kemampuan | Deskripsi |
|------|------|
| **Alat** | Secara otomatis terdaftar sebagai alat yang dapat dipanggil Agent |
| **Sumber daya** | Sumber daya yang dapat dibaca (teks/biner) |
| **Prompt** | Templat prompt, mendukung parameter |

## Menggunakannya dalam percakapan

Alat dari server MCP yang diaktifkan secara otomatis muncul di daftar alat yang tersedia untuk percakapan Agent, diberi nama menggunakan pola `mcp_{nama server yang dibersihkan}_{toolName}` — AI memutuskan apakah akan memanggilnya berdasarkan maksud pengguna. Ini bekerja mirip dengan cara [Skill](../agent-skill-install) dimuat secara otomatis; pengembang skrip biasanya tidak perlu khawatir tentang detail di baliknya.

Untuk memeriksa apakah alat MCP tertentu tersedia, tanyakan langsung ke AI dalam percakapan, atau periksa daftar alat yang ditemukan di detail server tersebut di halaman manajemen.
