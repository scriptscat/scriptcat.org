---
title: Akses Eksternal (CLI dan Klien AI)
sidebar_label: Akses Eksternal
---

**Akses Eksternal** memungkinkan program baris perintah lokal dan klien AI yang mendukung [MCP](https://modelcontextprotocol.io/) untuk mengelola skrip di ScriptCat melalui [sctl](https://github.com/scriptscat/sctl).

```text
AI client ── stdio MCP ──▶ sctl mcp ── local control API ──▶ sctl serve ── WebSocket ──▶ ScriptCat
CLI ────────────────────────────────────────────────────────▲
```

`sctl serve` adalah daemon lokal terpisah yang harus Anda mulai secara eksplisit. `sctl mcp` dan perintah requester tidak pernah memulainya secara otomatis. Kebijakan ScriptCat dan UI konfirmasi browser selalu menentukan apakah pengungkapan sumber atau penulisan diizinkan; program eksternal tidak dapat menyetujui permintaannya sendiri.

:::warning Listener bersifat lokal secara bawaan
sctl mendengarkan di `127.0.0.1` secara bawaan. sctl hanya mendengarkan di antarmuka lain saat `--listen-address` diberikan secara eksplisit. `ws://` tidak mengenkripsi lalu lintas bisnis dan tidak ada isolasi per-klien jarak jauh, jadi gunakan alamat non-bawaan hanya di jaringan tepercaya. Ekstensi dan daemon tetap membangun kunci jangka panjang melalui kode pemasangan satu kali dan menggunakan autentikasi timbal balik pada koneksi berikutnya.
:::

## 1. Pasang sctl

Pasang rilis terbaru dengan satu perintah — macOS dan Linux:

```bash
curl -fsSL https://raw.githubusercontent.com/scriptscat/sctl/main/scripts/install.sh | sh
```

atau Windows PowerShell:

```powershell
irm https://raw.githubusercontent.com/scriptscat/sctl/main/scripts/install.ps1 | iex
```

Installer mengunduh arsip rilis `sctl-<version>-<os>-<arch>.<ext>` dengan nama bertanda hubung untuk platform Anda, memverifikasi sha256-nya terhadap `checksums.txt` dari rilis yang sama, dan memasang `sctl` ke `~/.local/bin` (macOS/Linux) atau `%LOCALAPPDATA%\sctl\bin` (Windows). `SCTL_VERSION` mengunci versi tertentu; `SCTL_INSTALL_DIR` mengganti direktori pemasangan. Jika direktori pemasangan tidak ada di `PATH` Anda, installer mencetak petunjuk `PATH` yang tepat untuk platform Anda — installer tidak pernah mengedit profil shell atau PATH pengguna Anda.

sctl adalah satu file eksekusi. Jika [Rilis GitHub](https://github.com/scriptscat/sctl/releases) memiliki arsip yang dipublikasikan untuk platform Anda, Anda juga dapat mengunduh dan mengekstraknya, lalu letakkan `sctl` (`sctl.exe` di Windows) di `PATH`.

```bash
sctl version
```

Build sumber polos melaporkan `0.0.0-dev` untuk membedakannya dari build rilis dengan versi, commit, dan metadata waktu build yang disuntikkan; ini tidak mencegahnya terhubung ke ScriptCat. Jika tidak ada rilis yang tersedia, kontributor dapat membangunnya dari [repositori sctl](https://github.com/scriptscat/sctl).

## 2. Mulai daemon dan daftarkan

Pendaftaran adalah langkah satu kali. Setelahnya, CLI dan setiap klien MCP berbagi saluran ekstensi-ke-daemon yang tepercaya; mereka tidak memasangkan secara terpisah.

### 2.1 Pilih direktori data

Proses daemon, CLI, dan MCP harus menggunakan direktori data yang sama. Direktori ini menyimpan kunci pemasangan jangka panjang, token kontrol lokal, dan log. Pilih jalur absolut yang privat untuk pengguna saat ini:

```text
/absolute/path/to/sctl-data
```

Tetapkan variabel lingkungan yang sama untuk setiap proses sctl:

```bash
export SCTL_DATA_DIR=/absolute/path/to/sctl-data
sctl serve
sctl status
sctl mcp
```

`--data-dir` eksplisit memiliki prioritas di atas variabel lingkungan.

Jika `--data-dir` maupun `SCTL_DATA_DIR` tidak diatur, sctl menggunakan direktori data aplikasi per-pengguna bawaan platform. Jangan letakkan direktori data di repositori atau folder sinkronisasi bersama, dan jangan pernah memberikan `pairing.key` atau `control.token`-nya kepada model AI.

### 2.2 Mulai daemon

Jalankan ini di terminal dan pertahankan proses tetap hidup:

```bash
sctl serve
```

Alamat bawaan adalah `ws://127.0.0.1:8643`. Daemon tidak pernah dimulai otomatis oleh `connect`, `status`, perintah CLI lain, atau `sctl mcp`. Untuk penggunaan persisten, jalankan perintah di atas dengan manajer layanan pengguna sistem operasi Anda.

Untuk mendengarkan secara eksplisit di setiap antarmuka jaringan, jalankan:

```bash
sctl --listen-address 0.0.0.0:8643 serve
```

Di host daemon, berikan `--listen-address` yang sama ke `connect`, `status`, perintah CLI lain, dan `sctl mcp`. Di pengaturan **alamat sctl** ScriptCat, masukkan alamat yang benar-benar dapat dijangkau ekstensi, seperti `ws://192.168.1.10:8643`; jangan masukkan `0.0.0.0`.

### 2.3 Aktifkan dan pasangkan di ScriptCat

1. Buka **Pengaturan → Alat → Akses Eksternal** di ScriptCat dan nyalakan sakelarnya.
2. Pastikan **alamat sctl** cocok dengan daemon; pertahankan bawaan `ws://127.0.0.1:8643` biasanya.
3. Pertahankan `sctl serve` berjalan dan jalankan di terminal lain:

   ```bash
   sctl connect
   ```

4. Masukkan kode terminal 8 karakter di dialog "Daftarkan sctl".
5. Verifikasi koneksi:

   ```bash
   sctl status
   ```

Status harus melaporkan ekstensi yang terhubung dan menampilkan versi daemon.

:::warning Kode pemasangan hanya untuk terminal
Kodenya terlihat seperti `A1B2-C3D4`, kedaluwarsa setelah 2 menit, dan hanya berlaku sekali. Kode tidak dikirim ke ekstensi melalui WebSocket. Jangan pernah menempelkannya ke chat AI, issue, log, atau konfigurasi MCP; jalankan `connect` lagi jika kedaluwarsa.
:::

## 3. Izin dan konfirmasi {#permissions}

| Kemampuan | Perilaku bawaan |
|---|---|
| Daftar skrip dan baca metadata | Dikembalikan langsung |
| Baca atau cari sumber skrip | Ikuti kebijakan **baca sumber** |
| Pasang, edit, aktifkan, nonaktifkan, atau hapus skrip | Ikuti kebijakan **tulis** |

Kedua kebijakan menawarkan "Perlukan persetujuan" (bawaan) dan "Izinkan langsung".

Dengan "Perlukan persetujuan", permintaan membuka halaman konfirmasi browser. Anda dapat menolak, mengizinkan sekali, atau memilih "Izinkan untuk sesi ini". Izin sesi dikunci berdasarkan skrip dan jenis operasi, dan dibersihkan saat browser dimulai ulang, ekstensi dimuat ulang, atau Akses Eksternal berhenti. Permintaan kedaluwarsa setelah 5 menit tanpa keputusan; putusnya requester atau `Ctrl-C` juga membatalkannya.

"Izinkan langsung" melewati halaman konfirmasi untuk kelas operasi tersebut. Sumber dapat berisi kunci API, cookie, dan rahasia lainnya, sementara operasi tulis dapat langsung mengubah skrip, jadi aktifkan hanya jika Anda menerima risiko tersebut.

## 4. Penggunaan baris perintah

```bash
sctl get                         # Daftar skrip
sctl get <uuid>                  # Baca metadata
sctl get <uuid> -o source        # Cetak sumber lengkap
sctl get <uuid> -o source --lines 20-80
sctl grep <uuid> "fetch("         # Pencarian sumber literal
sctl grep <uuid> "pattern" -E    # Ekspresi reguler
sctl install <url|file>
sctl edit <uuid> --replace OLD --with NEW
sctl enable <uuid>
sctl disable <uuid>
sctl delete <uuid>
sctl status
```

`grep` bersifat literal secara bawaan; `-E` mengaktifkan ekspresi reguler, `-i` mengabaikan huruf besar/kecil, `-C N` menambahkan konteks, dan `-m N` membatasi jumlah kecocokan. Tidak ada kecocokan yang dianggap berhasil dan keluar dengan kode 0.

`edit` berlabuh pada konten, tidak pernah berdasarkan nomor baris. Setiap `oldText` harus muncul tepat satu kali secara bawaan; `--replace-all` mengganti setiap kecocokan. Anda juga dapat memberikan array `{oldText,newText,replaceAll?}` dengan `-f <file>`. Hanya edit yang dikirim ke ekstensi; tidak perlu membaca atau mengunggah seluruh sumber terlebih dahulu.

Operasi tulis dan pengungkapan sumber menunggu keputusan browser. Kode keluar CLI:

| Kode keluar | Arti |
|---|---|
| `0` | Disetujui dan berhasil, atau perintah baca selesai secara normal |
| `1` | Pengguna menolak permintaan |
| `2` | Permintaan kedaluwarsa, dibatalkan dengan `Ctrl-C`, atau ekstensi terputus |
| `3` | Kesalahan lain seperti argumen, koneksi, atau skrip yang tidak ada |

Jalankan `sctl <command> --help` untuk setiap opsi.

## 5. Hubungkan klien AI (MCP)

Pertama pastikan `sctl serve` berjalan dan `status` melaporkan ekstensi yang terhubung. Kemudian konfigurasikan klien MCP untuk meluncurkan proses `sctl mcp` terpisah. Gunakan jalur biner dan data absolut di klien GUI:

```json
{
  "mcpServers": {
    "scriptcat": {
      "command": "/absolute/path/to/sctl",
      "env": {
        "SCTL_DATA_DIR": "/absolute/path/to/sctl-data"
      },
      "args": [
        "mcp",
        "--name",
        "my-ai-client"
      ]
    }
  }
}
```

Banyak aplikasi GUI tidak memperluas `~`, `$HOME`, atau ekspresi shell. `--name` adalah label audit, bukan identitas terautentikasi atau batas otorisasi. stdout MCP dicadangkan untuk frame protokol; jangan bungkus sctl dalam skrip yang mencetak banner ke stdout.

Alat saat ini:

| Alat | Tujuan | Kebijakan konfirmasi |
|---|---|---|
| `scripts_list` | Daftar ringkasan skrip | Tidak ada |
| `scripts_metadata_get` | Baca metadata satu skrip | Tidak ada |
| `scripts_source_get` | Baca sumber berdasarkan uuid dan jendela baris opsional | Kebijakan baca sumber |
| `scripts_source_grep` | Cari sumber dan kembalikan baris yang cocok | Kebijakan baca sumber |
| `scripts_install_request` | Minta pemasangan skrip | Kebijakan tulis |
| `scripts_edit_request` | Minta edit yang berlabuh konten | Kebijakan tulis |
| `scripts_toggle_request` | Minta pengaktifan atau penonaktifan | Kebijakan tulis |
| `scripts_delete_request` | Minta penghapusan | Kebijakan tulis |

## 6. Audit dan cabut

- "Lihat log audit" di kartu Akses Eksternal membuka halaman log yang difilter ke sumber ini.
- `sctl status` menampilkan versi daemon, konektivitas ekstensi, dan peristiwa keamanan terbaru; `-o json` mengembalikan peristiwa lengkap.
- "Hentikan Akses Eksternal" memutuskan koneksi, menghapus status pemasangan di sisi ekstensi, dan membersihkan izin sesi. Pendaftaran ulang diperlukan setelahnya.
- Untuk menonaktifkan hanya satu klien AI, hapus sctl dari konfigurasi MCP klien tersebut; ini tidak mencabut akses CLI atau klien lain.

## 7. Pemecahan masalah {#troubleshooting}

**Daemon tidak dapat dijangkau**

Jalankan `sctl serve` terlebih dahulu. Perintah requester tidak pernah memulai daemon secara otomatis.

**Autentikasi saluran kontrol gagal**

Pastikan `serve`, perintah CLI, dan proses MCP menyelesaikan ke direktori data absolut yang sama. Periksa `SCTL_DATA_DIR` dan `--data-dir` eksplisit apa pun, lalu mulai ulang klien MCP.

**Status menyatakan "Koneksi gagal"**

Pastikan daemon berjalan, alamat ekstensi cocok dengannya, dan perangkat lunak keamanan lokal tidak memblokir `127.0.0.1:8643`.

**Sebuah perintah tidak mengembalikan hasil**

Periksa browser untuk halaman konfirmasi pengungkapan sumber atau penulisan. Tekan `Ctrl-C` untuk membatalkan permintaan.

**Temukan log**

Log berada di bawah `<data-dir>/logs/`. Jika `--data-dir` maupun `SCTL_DATA_DIR` tidak diatur, bawaan adalah:

| Platform | Direktori log |
|---|---|
| macOS | `~/Library/Application Support/sctl/logs/` |
| Windows | `%LOCALAPPDATA%\sctl\logs\` |
| Linux | `~/.config/sctl/logs/` |
