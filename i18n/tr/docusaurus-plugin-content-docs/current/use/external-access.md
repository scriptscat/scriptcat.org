---
title: Harici Erişim (CLI ve AI İstemcileri)
sidebar_label: Harici Erişim
---

**Harici Erişim**, yerel komut satırı programlarının ve [MCP](https://modelcontextprotocol.io/) destekli AI
istemcilerinin [sctl](https://github.com/scriptscat/sctl) aracılığıyla ScriptCat'teki betikleri yönetmesini sağlar.

```text
AI client ── stdio MCP ──▶ sctl mcp ── local control API ──▶ sctl serve ── WebSocket ──▶ ScriptCat
CLI ────────────────────────────────────────────────────────▲
```

`sctl serve`, açıkça başlatmanız gereken ayrı bir yerel arka plan hizmetidir. `sctl mcp` ve istek komutları onu
asla otomatik olarak başlatmaz. Kaynak ifşasına veya bir yazma işlemine izin verilip verilmeyeceğine her zaman
ScriptCat'in politikaları ve tarayıcı onay arayüzü karar verir; harici bir program kendi isteğini onaylayamaz.

:::warning Dinleyici varsayılan olarak yereldir
sctl varsayılan olarak `127.0.0.1` adresini dinler. Yalnızca `--listen-address` açıkça verildiğinde başka bir
arabirimi dinler. `ws://` iş trafiğini şifrelemez ve uzak istemciler arasında izolasyon yoktur; bu nedenle
varsayılan olmayan bir adresi yalnızca güvenilir bir ağda kullanın. Eklenti ve arka plan hizmeti yine de tek
seferlik bir eşleştirme koduyla uzun vadeli bir anahtar kurar ve sonraki bağlantılarda karşılıklı kimlik
doğrulama kullanır.
:::

## 1. sctl'yi kurun

En son sürümü tek komutla kurun — macOS ve Linux:

```bash
curl -fsSL https://raw.githubusercontent.com/scriptscat/sctl/main/scripts/install.sh | sh
```

veya Windows PowerShell:

```powershell
irm https://raw.githubusercontent.com/scriptscat/sctl/main/scripts/install.ps1 | iex
```

Kurulum programı, platformunuz için tire ile ayrılmış `sctl-<version>-<os>-<arch>.<ext>` adlı sürüm arşivini
indirir, sha256 değerini aynı sürümün `checksums.txt` dosyasına karşı doğrular ve `sctl` komutunu `~/.local/bin`
(macOS/Linux) veya `%LOCALAPPDATA%\sctl\bin` (Windows) dizinine kurar. `SCTL_VERSION` belirli bir sürümü sabitler;
`SCTL_INSTALL_DIR` kurulum dizinini geçersiz kılar. Kurulum dizini `PATH` üzerinde değilse, kurulum programı
platformunuz için tam `PATH` ipucunu yazdırır — kabuk profilinizi veya kullanıcı PATH'inizi asla sizin yerinize
düzenlemez.

sctl tek bir çalıştırılabilir dosyadır. [GitHub Releases](https://github.com/scriptscat/sctl/releases) sayfasında
platformunuz için yayınlanmış bir arşiv varsa, bunu indirip açabilir ve `sctl` dosyasını (Windows'ta `sctl.exe`)
`PATH` üzerine koyabilirsiniz.

```bash
sctl version
```

Düz bir kaynak derlemesi, enjekte edilmiş sürüm, commit ve derleme zamanı meta verileriyle bir sürüm
derlemesinden ayırt etmek için `0.0.0-dev` bildirir; bu, ScriptCat'e bağlanmasını engellemez. Yayın yoksa,
katkıda bulunanlar bunu [sctl deposundan](https://github.com/scriptscat/sctl) derleyebilir.

## 2. Arka plan hizmetini başlatın ve kayıt olun

Kayıt, tek seferlik bir adımdır. Sonrasında CLI ve her MCP istemcisi, eklentiden arka plan hizmetine giden
güvenilir kanalı paylaşır; ayrı ayrı eşleştirme yapmazlar.

### 2.1 Bir veri dizini seçin

Arka plan hizmeti, CLI ve MCP işlemi aynı veri dizinini kullanmalıdır. Bu dizin, uzun vadeli eşleştirme anahtarını,
yerel kontrol belirtecini ve günlükleri saklar. Geçerli kullanıcıya özel mutlak bir yol seçin:

```text
/absolute/path/to/sctl-data
```

Her sctl işlemi için aynı ortam değişkenini ayarlayın:

```bash
export SCTL_DATA_DIR=/absolute/path/to/sctl-data
sctl serve
sctl status
sctl mcp
```

Açık bir `--data-dir` bayrağı ortam değişkenine göre önceliklidir.

Ne `--data-dir` ne de `SCTL_DATA_DIR` ayarlanmazsa, sctl platformun varsayılan kullanıcı başına uygulama veri
dizinini kullanır. Veri dizinini bir depoya veya paylaşılan senkronizasyon klasörüne koymayın ve `pairing.key`
veya `control.token` dosyalarını asla bir AI modeline vermeyin.

### 2.2 Arka plan hizmetini başlatın

Bunu bir terminalde çalıştırın ve işlemi canlı tutun:

```bash
sctl serve
```

Varsayılan adres `ws://127.0.0.1:8643` şeklindedir. Arka plan hizmeti `connect`, `status`, başka bir CLI
komutu veya `sctl mcp` tarafından asla otomatik başlatılmaz. Kalıcı kullanım için yukarıdaki komutu işletim
sisteminizin kullanıcı hizmet yöneticisiyle çalıştırın.

Her ağ arabiriminde açıkça dinlemek için şunu çalıştırın:

```bash
sctl --listen-address 0.0.0.0:8643 serve
```

Arka plan hizmetinin bulunduğu makinede, aynı `--listen-address` değerini `connect`, `status`, diğer CLI
komutlarına ve `sctl mcp` komutuna iletin. ScriptCat'in **sctl adresi** ayarına, eklentinin gerçekten
erişebileceği bir adres girin, örneğin `ws://192.168.1.10:8643`; `0.0.0.0` girmeyin.

### 2.3 ScriptCat'te etkinleştirin ve eşleştirin

1. ScriptCat'te **Ayarlar → Araçlar → Harici Erişim** bölümünü açın ve anahtarı açın.
2. **sctl adresinin** arka plan hizmetiyle eşleştiğini doğrulayın; normalde varsayılan `ws://127.0.0.1:8643` değerini koruyun.
3. `sctl serve` çalışır durumda kalsın ve başka bir terminalde şunu çalıştırın:

   ```bash
   sctl connect
   ```

4. "sctl'yi Kaydet" iletişim kutusuna 8 karakterli terminal kodunu girin.
5. Bağlantıyı doğrulayın:

   ```bash
   sctl status
   ```

Durum, bağlı bir eklenti bildirmeli ve arka plan hizmeti sürümünü göstermelidir.

:::warning Eşleştirme kodu yalnızca terminaldedir
Kod `A1B2-C3D4` biçimindedir, 2 dakika sonra geçerliliğini yitirir ve yalnızca bir kez kullanılabilir. WebSocket
üzerinden eklentiye gönderilmez. Asla bir AI sohbetine, soruna, günlüğe veya MCP yapılandırmasına yapıştırmayın;
süresi dolarsa `connect` komutunu yeniden çalıştırın.
:::

## 3. İzinler ve onay {#permissions}

| Yetenek | Varsayılan davranış |
|---|---|
| Betikleri listele ve meta verileri oku | Doğrudan döndür |
| Betik kaynağını oku veya ara | **Kaynak okuma** politikasını izle |
| Betik yükle, düzenle, etkinleştir, devre dışı bırak veya sil | **Yazma** politikasını izle |

Her iki politika da "Onay iste" (varsayılan) ve "Doğrudan izin ver" seçeneklerini sunar.

"Onay iste" ile istekler bir tarayıcı onay sayfası açar. Reddedebilir, bir kez izin verebilir veya "Bu oturum
için izin ver" seçeneğini seçebilirsiniz. Oturum izinleri betik ve işlem türüne göre anahtarlanır; tarayıcı
yeniden başladığında, eklenti yeniden yüklendiğinde veya Harici Erişim durdurulduğunda temizlenir. Karar
verilmeden bir istek 5 dakika sonra geçerliliğini yitirir; istek sahibinin bağlantısının kesilmesi veya `Ctrl-C`
de isteği geçersiz kılar.

"Doğrudan izin ver", o işlem sınıfı için onay sayfasını atlar. Kaynak, API anahtarları, çerezler ve diğer
sırları içerebilir; yazma işlemleri betikleri doğrudan değiştirebilir; bu nedenle bu seçeneği yalnızca bu riski
kabul ettiğinizde etkinleştirin.

## 4. Komut satırı kullanımı

```bash
sctl get                         # Betikleri listele
sctl get <uuid>                  # Meta verileri oku
sctl get <uuid> -o source        # Tam kaynağı yazdır
sctl get <uuid> -o source --lines 20-80
sctl grep <uuid> "fetch("         # Değişmez kaynak araması
sctl grep <uuid> "pattern" -E    # Düzenli ifade
sctl install <url|file>
sctl edit <uuid> --replace OLD --with NEW
sctl enable <uuid>
sctl disable <uuid>
sctl delete <uuid>
sctl status
```

`grep` varsayılan olarak değişmezdir; `-E` düzenli ifadeleri etkinleştirir, `-i` büyük/küçük harf duyarlılığını
yok sayar, `-C N` bağlam ekler ve `-m N` eşleşmeleri sınırlar. Eşleşme bulunamazsa komut yine de başarılı
sayılır ve 0 çıkış koduyla sonlanır.

`edit` içeriğe dayalıdır, asla satır numarasına dayalı değildir. Her `oldText` varsayılan olarak yalnızca bir
kez geçmelidir; `--replace-all` her eşleşmeyi değiştirir. `-f <file>` ile bir `{oldText,newText,replaceAll?}`
dizisi de iletebilirsiniz. Yalnızca düzenlemeler eklentiye gönderilir; önce kaynağın tamamını okumaya veya
yüklemeye gerek yoktur.

Yazma işlemleri ve kaynak ifşası, tarayıcı kararı için bekler. CLI çıkış kodları:

| Çıkış kodu | Anlam |
|---|---|
| `0` | Onaylandı ve başarılı, veya bir okuma komutu normal şekilde tamamlandı |
| `1` | Kullanıcı isteği reddetti |
| `2` | İsteğin süresi doldu, `Ctrl-C` ile iptal edildi veya eklenti bağlantısı kesildi |
| `3` | Bağımsız değişken, bağlantı veya eksik betik gibi diğer hatalar |

Her seçenek için `sctl <command> --help` komutunu çalıştırın.

## 5. Bir AI istemcisi bağlayın (MCP)

Önce `sctl serve` komutunun çalıştığından ve `status` komutunun bağlı bir eklenti bildirdiğinden emin olun.
Ardından MCP istemcisini ayrı bir `sctl mcp` işlemi başlatacak şekilde yapılandırın. GUI istemcilerinde mutlak
ikili ve veri yolları kullanın:

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

Birçok GUI uygulaması `~`, `$HOME` veya kabuk ifadelerini genişletmez. `--name` bir denetim etiketidir; doğrulanmış
bir kimlik veya yetkilendirme sınırı değildir. MCP stdout'u protokol çerçeveleri için ayrılmıştır; sctl'i stdout'a
bir başlık yazdıran bir betiğin içine sarmayın.

Geçerli araçlar:

| Araç | Amaç | Onay politikası |
|---|---|---|
| `scripts_list` | Betik özetlerini listele | Yok |
| `scripts_metadata_get` | Bir betiğin meta verilerini oku | Yok |
| `scripts_source_get` | Kaynağı uuid ve isteğe bağlı satır penceresiyle oku | Kaynak okuma politikası |
| `scripts_source_grep` | Kaynağı ara ve eşleşen satırları döndür | Kaynak okuma politikası |
| `scripts_install_request` | Betik kurulumu iste | Yazma politikası |
| `scripts_edit_request` | İçeriğe dayalı bir düzenleme iste | Yazma politikası |
| `scripts_toggle_request` | Etkinleştirme veya devre dışı bırakma iste | Yazma politikası |
| `scripts_delete_request` | Silme iste | Yazma politikası |

## 6. Denetim ve iptal

- Harici Erişim kartındaki "Denetim günlüğünü görüntüle" seçeneği, günlük sayfasını bu kaynağa göre filtreleyerek açar.
- `sctl status`, arka plan hizmeti sürümünü, eklenti bağlantısını ve son güvenlik olaylarını gösterir;
  `-o json` tüm olayları döndürür.
- "Harici Erişimi Durdur" bağlantıyı keser, eklenti tarafındaki eşleştirme durumunu siler ve oturum izinlerini
  temizler. Sonrasında yeniden kayıt gerekir.
- Yalnızca bir AI istemcisini devre dışı bırakmak için sctl'i o istemcinin MCP yapılandırmasından kaldırın; bu,
  diğer CLI veya istemci erişimini iptal etmez.

## 7. Sorun giderme {#troubleshooting}

**Arka plan hizmetine ulaşılamıyor**

Önce `sctl serve` komutunu çalıştırın. İstek komutları arka plan hizmetini asla otomatik başlatmaz.

**Kontrol kanalı kimlik doğrulaması başarısız oluyor**

`serve`, CLI komutlarının ve MCP işleminin aynı mutlak veri dizinine çözümlendiğini doğrulayın. Hem
`SCTL_DATA_DIR` hem de açık `--data-dir` değerini kontrol edin, ardından MCP istemcisini yeniden başlatın.

**Durum "Bağlantı başarısız" diyor**

Arka plan hizmetinin çalıştığını, eklenti adresinin onunla eşleştiğini ve yerel güvenlik yazılımının
`127.0.0.1:8643` adresini engellemediğini doğrulayın.

**Bir komut yanıt vermiyor**

Kaynak ifşası veya yazma onay sayfası için tarayıcıyı kontrol edin. İsteği geçersiz kılmak için `Ctrl-C` tuşlarına basın.

**Günlükleri bulun**

Günlükler `<data-dir>/logs/` dizinindedir. Ne `--data-dir` ne de `SCTL_DATA_DIR` ayarlanmazsa varsayılanlar:

| Platform | Günlük dizini |
|---|---|
| macOS | `~/Library/Application Support/sctl/logs/` |
| Windows | `%LOCALAPPDATA%\sctl\logs\` |
| Linux | `~/.config/sctl/logs/` |
