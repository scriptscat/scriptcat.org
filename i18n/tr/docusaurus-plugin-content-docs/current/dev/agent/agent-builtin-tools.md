---
title: Yerleşik Araçlar Referansı
---

Agent, AI'ın sohbetler sırasında otomatik olarak çağırdığı bir dizi yerleşik araçla birlikte gelir. Bu araçlar kalıcı sohbetlerde varsayılan olarak kullanılabilir; betik geliştiricilerinin genellikle bunları doğrudan çağırması gerekmez — AI, kullanıcı amacına göre doğru aracı seçer.

Bu araçların neler yapabildiğini anlamak, daha iyi sistem istemleri ve özel araçlar yazmanıza yardımcı olur.

## Web Verisi Getirme

### web_fetch

Bir URL'nin içeriğini getirir; HTML'den metne dönüştürme ve LLM özetleme desteği vardır.

| Parametre | Tür | Zorunlu | Açıklama |
|------|------|------|------|
| `url` | `string` | Evet | Hedef URL (yalnızca http/https) |
| `prompt` | `string` | Hayır | Özet istemi (sağlandığında, içeriği damıtmak için bir LLM kullanılır) |
| `max_length` | `number` | Hayır | maksimum içerik karakteri |

**Davranış ayrıntıları:**
- 30 saniyelik istek zaman aşımı
- HTML içeriği ana gövde metnini otomatik olarak çıkarır (gezinme, kenar çubukları vb. kaldırılır)
- JSON yanıtları otomatik olarak ayrıştırılır
- Düz metin olduğu gibi döndürülür
- `prompt` sağlandığında, getirilen içerik özetleme için bir LLM'ye gönderilir

**Dönüş değeri:**
```json
{
  "url": "https://example.com",
  "content_type": "text/html",
  "content": "Extracted body content...",
  "truncated": false,
  "final_url": "https://example.com/redirected"
}
```

### web_search

Bir arama motorunu sorgular ve yapılandırılmış arama sonuçları döndürür.

| Parametre | Tür | Zorunlu | Açıklama |
|------|------|------|------|
| `query` | `string` | Evet | Arama anahtar kelimeleri |
| `max_results` | `number` | Hayır | Maksimum sonuç sayısı (varsayılan 5, üst sınır 10) |

**Desteklenen arama motorları:**

| Motor | Açıklama | Yapılandırma gerektirir |
|------|------|---------|
| DuckDuckGo | Varsayılan motor | Yok |
| Bing | Microsoft Bing Arama | API anahtarı gerekli |
| Baidu | Baidu Arama | API anahtarı gerekmez |
| Google Custom Search | Google Özel Arama | API anahtarı + CSE kimliği gerekli |

Arama motorları yönetim sayfasında → Agent → Ayarlar bölümünde yapılandırılır.

**Dönüş değeri:**
```json
[
  {
    "title": "Search result title",
    "url": "https://example.com/result",
    "snippet": "Result summary text..."
  }
]
```

### get_tab_content

Belirtilen bir sekmenin işlenmiş sayfa içeriğini okur; CSS seçicileriyle açıklanmış yapılandırılmış Markdown'a dönüştürülür.

| Parametre | Tür | Zorunlu | Açıklama |
|------|------|------|------|
| `tab_id` | `number` | Evet | Sekme kimliği |
| `selector` | `string` | Hayır | CSS seçici; yalnızca eşleşen kısmı çıkar |
| `prompt` | `string` | Hayır | özet istemi |
| `max_length` | `number` | Hayır | maksimum içerik karakteri |

`web_fetch`'ten farkı: `get_tab_content`, sayfayı **tarayıcının zaten işlediği haliyle** okur (dinamik JS içeriği dahil), `web_fetch` ise yeni bir HTTP isteği yapar.

**Dönüş değeri:**
```json
{
  "tab_id": 123,
  "url": "https://example.com",
  "title": "Page title",
  "content": "Structured content...",
  "truncated": false,
  "used_selector": "main"
}
```

## Sekme Yönetimi

### list_tabs

Açık sekmeleri sorgular; birkaç filtre koşulunu destekler.

| Parametre | Tür | Zorunlu | Açıklama |
|------|------|------|------|
| `url_pattern` | `string` | Hayır | URL regex eşleşmesi |
| `title_pattern` | `string` | Hayır | Başlık regex eşleşmesi |
| `active` | `boolean` | Hayır | Yalnızca etkin sekmeyi döndür |
| `window_id` | `number` | Hayır | belirtilen pencere |
| `audible` | `boolean` | Hayır | Yalnızca şu anda ses çalan sekmeleri döndür |

### open_tab

Yeni bir sekme açar veya mevcut bir sekmeyi gezdirir.

| Parametre | Tür | Zorunlu | Açıklama |
|------|------|------|------|
| `url` | `string` | Evet | Hedef URL |
| `tab_id` | `number` | Hayır | Mevcut bir sekmenin kimliği (sağlanırsa o sekme gezdirilir; aksi takdirde yeni bir sekme açılır) |
| `active` | `boolean` | Hayır | Etkinleştirilip etkinleştirilmeyeceği (varsayılan `true`) |
| `window_id` | `number` | Hayır | belirtilen pencere |
| `wait_until_loaded` | `boolean` | Hayır | Sayfanın yüklemeyi bitirmesinin beklenip beklenmeyeceği (varsayılan `true`) |

### close_tab

Bir sekmeyi kapatır.

| Parametre | Tür | Zorunlu | Açıklama |
|------|------|------|------|
| `tab_id` | `number` | Evet | Sekme kimliği |

### activate_tab

Bir sekmeyi etkinleştirir ve içinde bulunduğu pencereye odaklanır.

| Parametre | Tür | Zorunlu | Açıklama |
|------|------|------|------|
| `tab_id` | `number` | Evet | Sekme kimliği |

## Dosya Sistemi (OPFS)

### opfs_write

Çalışma alanına bir dosya yazar.

| Parametre | Tür | Zorunlu | Açıklama |
|------|------|------|------|
| `path` | `string` | Evet | dosya yolu |
| `content` | `string` | Evet | Dosya içeriği (veri URL'si ikili desteklenir) |

### opfs_read

Çalışma alanından bir dosya okur. Varsayılan olarak dosya türü otomatik algılanır: metin dosyaları içeriklerini döndürür, ikili dosyalar bir blob URL döndürür.

| Parametre | Tür | Zorunlu | Açıklama |
|------|------|------|------|
| `path` | `string` | Evet | dosya yolu |
| `mode` | `string` | Hayır | `"text"` / `"blob"` / `"auto"` (varsayılan) — belirli bir dönüş modunu zorlar |
| `offset` | `number` | Hayır | Başlangıç satır numarası (1 tabanlı), yalnızca metin modu |
| `limit` | `number` | Hayır | Okunacak satır sayısı, yalnızca metin modu (metin 200 satırı aştığında sayfalama gereklidir) |

### opfs_list

Dizin içeriğini listeler.

| Parametre | Tür | Zorunlu | Açıklama |
|------|------|------|------|
| `path` | `string` | Hayır | Dizin yolu (varsayılan kök dizindir) |

### opfs_delete

Bir dosyayı veya dizini siler.

| Parametre | Tür | Zorunlu | Açıklama |
|------|------|------|------|
| `path` | `string` | Evet | Dosya/dizin yolu |

## Kullanıcı Etkileşimi

### ask_user

Kullanıcıya bir soru sorar; serbest biçimli girişi veya yapılandırılmış bir seçimi destekler.

| Parametre | Tür | Zorunlu | Açıklama |
|------|------|------|------|
| `question` | `string` | Evet | Soru |
| `options` | `string[]` | Hayır | Seçenekler listesi (sağlandığında bu, çoktan seçmeli bir soruya dönüşür) |
| `multiple` | `boolean` | Hayır | Birden çok seçime izin verilip verilmeyeceği (varsayılan `false`) |

**Zaman aşımı:** 5 dakika boyunca yanıt gelmezse `{ answer: null, reason: "timeout" }` döndürür.

**Dönüş değeri:**
```json
{ "answer": "The user's answer text" }
```

### execute_script

Bir sayfada veya korumalı alanda JavaScript kodu çalıştırır.

| Parametre | Tür | Zorunlu | Açıklama |
|------|------|------|------|
| `code` | `string` | Evet | JavaScript kodu |
| `target` | `string` | Evet | `"page"` veya `"sandbox"` |
| `tab_id` | `number` | Hayır | `target` `page` olduğunda hedeflenecek sekme (varsayılan geçerli etkin sekmedir); korumalı alan için yok sayılır |

**Çalıştırma ortamı karşılaştırması:**

| Ortam | DOM | Sayfa JS'i | Eklenti blob URL'si | En iyi şunlar için |
|------|-----|---------|---------------|---------|
| `target: "page"` (her zaman MAIN dünyası) | evet | evet | hayır | DOM okuma/değiştirme, sayfa işlevlerini çağırma, sayfa değişkenlerini okuma |
| `target: "sandbox"` | hayır | hayır | hayır | Saf hesaplama |

> `page` modu her zaman sayfanın MAIN dünyasında çalışır ve `window` değerini sayfayla paylaşır — bu nedenle eklentinin kendi blob URL'lerine erişemez (örn. `opfs_read` değerinin blob modunda döndürdüğü adres). Bir blob URL ile çalışmanız gerektiğinde bunun yerine bir SkillScript kullanın.

## Alt-agent'lar

### agent

Karmaşık bir alt görevi yönetmek için bağımsız bir alt-agent başlatır.

| Parametre | Tür | Zorunlu | Açıklama |
|------|------|------|------|
| `prompt` | `string` | Evet | Alt görevin açıklaması |
| `description` | `string` | Hayır | Kısa bir etiket (birkaç kelime, arayüz görüntüleme için) |
| `type` | `string` | Hayır | Alt-agent türü (aşağıya bakın), varsayılan `"general"` |
| `tab_id` | `number` | Hayır | Alt-agent'a iletilecek sekme kimliği; alt-agent o sekmede çalışır |

**Alt-agent türleri:**

| type | Açıklama | Kullanılabilir araçlar |
|------|------|---------|
| `researcher` | Bilgi alma (salt okunur) | web_search, web_fetch, sayfa içeriği okuma |
| `page_operator` | Tarayıcı otomasyonu | Sekme yönetimi, DOM işlemleri, sayfa etkileşimi |
| `general` | Genel amaçlı (varsayılan) | Tüm araçlar |

**Özellikler:**
- Bir alt-agent'ın kendi bağımsız sohbet bağlamı vardır
- `ask_user` veya `agent` kullanamaz (yinelemeyi önlemek için)
- Bir alt-agent'ın olayları, `sub_agent_event` üzerinden üst sohbete iletilir

## Görev Yönetimi

Bu araç grubu, bir sohbet içinde geçici bir görev listesi yönetir (bellekte, kalıcı değil).

### create_task

| Parametre | Tür | Zorunlu | Açıklama |
|------|------|------|------|
| `subject` | `string` | Evet | Görev başlığı |
| `description` | `string` | Hayır | Ayrıntılı açıklama |

### update_task

| Parametre | Tür | Zorunlu | Açıklama |
|------|------|------|------|
| `task_id` | `string` | Evet | Görev kimliği |
| `status` | `string` | Hayır | `"pending"` / `"in_progress"` / `"completed"` |
| `subject` | `string` | Hayır | Yeni başlık |
| `description` | `string` | Hayır | Yeni açıklama |

### list_tasks

Parametre yok; tüm görevlerin kısa bir listesini döndürür.

> Görev yönetimi araçları esas olarak AI'ın karmaşık, çok adımlı görevleri işlerken kendi ilerlemesini izlemesi içindir; görev verileri kalıcı değildir.
