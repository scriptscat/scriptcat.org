---
title: DOM İşleme API'si
---

`@grant CAT.agent.dom`

DOM işleme API'si, eksiksiz tarayıcı sayfa otomasyonu sağlar: gezinme, içerik okuma, ekran görüntüleri, form etkileşimi ve DOM izleme.

## Sekme yönetimi

### listTabs — sekmeleri listele

```javascript
const tabs = await CAT.agent.dom.listTabs();
```

Açık olan her sekme hakkındaki bilgileri döndürür.

**`TabInfo[]` döndürür:**

| Alan | Tür | Açıklama |
|------|------|------|
| `tabId` | `number` | Sekme kimliği |
| `url` | `string` | Geçerli URL |
| `title` | `string` | Sayfa başlığı |
| `active` | `boolean` | Şu anda etkin sekme olup olmadığı |
| `windowId` | `number` | Ait olduğu pencerenin kimliği |
| `discarded` | `boolean` | Atılıp atılmadığı (askıya alındı) |

## Gezinme

### navigate — bir sayfaya git

```javascript
const result = await CAT.agent.dom.navigate(url, options?);
```

**Parametreler:**

| Parametre | Tür | Varsayılan | Açıklama |
|------|------|--------|------|
| `url` | `string` | — | Hedef URL (zorunlu) |
| `options.tabId` | `number` | geçerli etkin sekme | Hangi sekmenin kullanılacağı |
| `options.waitUntil` | `boolean` | `true` | Sayfanın yüklemeyi bitirmesinin beklenip beklenmeyeceği |
| `options.timeout` | `number` | `30000` | Milisaniye cinsinden zaman aşımı |

**`NavigateResult` döndürür:**

```typescript
{ tabId: number; url: string; title: string }
```

## İçerik okuma

### readPage — sayfa içeriğini oku

```javascript
const page = await CAT.agent.dom.readPage(options?);
```

Sayfa DOM'unu yapılandırılmış metne dönüştürür; `<script>`, `<style>`, `<noscript>`, `<svg>` ve `<link[rel=stylesheet]>` gibi ilgisiz öğeleri otomatik olarak kaldırır.

**Parametreler:**

| Parametre | Tür | Varsayılan | Açıklama |
|------|------|--------|------|
| `options.tabId` | `number` | geçerli etkin sekme | Hangi sekmenin kullanılacağı |
| `options.selector` | `string` | — | CSS seçici; yalnızca eşleşen öğenin içeriği döndürülür |
| `options.maxLength` | `number` | — | Maksimum içerik karakteri; bunun ötesinde kısaltılır |
| `options.removeTags` | `string[]` | — | Kaldırılacak ek etiket adları |

**`PageContent` döndürür:**

| Alan | Tür | Açıklama |
|------|------|------|
| `title` | `string` | Sayfa başlığı |
| `url` | `string` | Sayfa URL'si |
| `html` | `string` | İşlenmiş sayfa metin içeriği |
| `truncated` | `boolean` | İçeriğin kısaltılıp kısaltılmadığı |
| `totalLength` | `number` | Orijinal içeriğin toplam uzunluğu |

### screenshot — ekran görüntüsü al

```javascript
const shot = await CAT.agent.dom.screenshot(options?);
```

**Parametreler:**

| Parametre | Tür | Varsayılan | Açıklama |
|------|------|--------|------|
| `options.tabId` | `number` | geçerli etkin sekme | Hangi sekmenin kullanılacağı |
| `options.quality` | `number` | `80` | JPEG kalitesi (0-100) |
| `options.fullPage` | `boolean` | `false` | Tam sayfayı yakala |
| `options.selector` | `string` | — | CSS seçici; yalnızca eşleşen öğenin alanını yakala |
| `options.saveTo` | `string` | — | OPFS çalışma alanında kaydedilecek yol |

**`ScreenshotResult` döndürür:**

| Alan | Tür | Açıklama |
|------|------|------|
| `dataUrl` | `string` | base64 veri URL'si |
| `path` | `string` | OPFS kayıt yolu (`saveTo` kullanıldığında) |
| `size` | `number` | Dosya boyutu (`saveTo` kullanıldığında) |

**Yakalama modunun nasıl seçildiği:**

| Senaryo | Davranış |
|------|------|
| `selector` verildi | CDP ile öğenin sınırlarını bulur ve ekran görüntüsünü kırpar |
| Arka plan sekmesi | CDP ekran görüntüsünü dener; başarısız olursa sekmeyi etkinleştirir ve `captureVisibleTab` kullanır |
| Ön plan sekmesi | Doğrudan `captureVisibleTab` kullanır |

```javascript
// Bir ekran görüntüsünü OPFS'e kaydet
const shot = await CAT.agent.dom.screenshot({
  saveTo: "screenshots/page.png",
  quality: 90
});
console.log(`Saved to ${shot.path}, size ${shot.size} bytes`);
```

## Sayfa etkileşimi

### click — bir öğeye tıklama

```javascript
const result = await CAT.agent.dom.click(selector, options?);
```

**Parametreler:**

| Parametre | Tür | Varsayılan | Açıklama |
|------|------|--------|------|
| `selector` | `string` | — | CSS seçici (zorunlu) |
| `options.tabId` | `number` | geçerli etkin sekme | Hangi sekmenin kullanılacağı |
| `options.trusted` | `boolean` | `false` | Gerçek bir fare olayı göndermek için CDP kullan |

**`ActionResult` döndürür:**

| Alan | Tür | Açıklama |
|------|------|------|
| `success` | `boolean` | Başarılı olup olmadığı |
| `navigated` | `boolean` | Tıklamanın bir sayfa gezinmesi tetikleyip tetiklemediği |
| `url` | `string` | Gezinmeden sonraki yeni URL |
| `newTab` | `boolean` | Yeni bir sekme açılıp açılmadığı |

**`trusted` ve normal tıklama:**

- `trusted: false` (varsayılan) — enjekte edilen JS ile `element.click()` simüle eder; hızlıdır, ancak bazı siteler bunu gerçek olmayan bir olay olarak algılayabilir
- `trusted: true` — Chrome DevTools Protocol üzerinden gerçek bir fare olayı gönderir; gerçek kullanıcı etkileşiminden ayırt edilemez, ancak hata ayıklayıcı izni gerektirir

### fill — bir form alanını doldur

```javascript
const result = await CAT.agent.dom.fill(selector, value, options?);
```

**Parametreler:**

| Parametre | Tür | Açıklama |
|------|------|------|
| `selector` | `string` | CSS seçici (zorunlu) |
| `value` | `string` | Doldurulacak değer (zorunlu) |
| `options.tabId` | `number` | Hangi sekmenin kullanılacağı |
| `options.trusted` | `boolean` | Klavye girişini simüle etmek için CDP kullan |

**Davranış:**
- Normal mod: `element.value` değerini ayarlar ve bir `input` olayı gönderir
- Güvenilir mod: CDP öğeye odaklanır → karakter karakter yazar

### scroll — sayfayı kaydır

```javascript
const result = await CAT.agent.dom.scroll(direction, options?);
```

**Parametreler:**

| Parametre | Tür | Açıklama |
|------|------|------|
| `direction` | `"up" \| "down" \| "top" \| "bottom"` | Kaydırma yönü (zorunlu) |
| `options.tabId` | `number` | Hangi sekmenin kullanılacağı |
| `options.selector` | `string` | Sayfanın tamamı yerine belirli bir kabı kaydır |

**`ScrollResult` döndürür:**

| Alan | Tür | Açıklama |
|------|------|------|
| `scrollTop` | `number` | Kaydırmadan sonraki kaydırma konumu |
| `scrollHeight` | `number` | Toplam içerik yüksekliği |
| `clientHeight` | `number` | Görüntü alanı yüksekliği |
| `atBottom` | `boolean` | Şimdi en alta kaydırılıp kaydırılmadığı |

### waitFor — bir öğeyi bekle

```javascript
const result = await CAT.agent.dom.waitFor(selector, options?);
```

Belirtilen öğenin sayfada görünmesi için yoklar (her 500 ms'de bir kontrol eder).

**Parametreler:**

| Parametre | Tür | Varsayılan | Açıklama |
|------|------|--------|------|
| `selector` | `string` | — | CSS seçici (zorunlu) |
| `options.tabId` | `number` | geçerli etkin sekme | Hangi sekmenin kullanılacağı |
| `options.timeout` | `number` | `10000` | Milisaniye cinsinden zaman aşımı |

**`WaitForResult` döndürür:**

| Alan | Tür | Açıklama |
|------|------|------|
| `found` | `boolean` | Öğenin bulunup bulunmadığı |
| `element` | `object` | Öğe bilgisi (yalnızca `found=true` olduğunda) |
| `element.selector` | `string` | Eşleşen seçici |
| `element.tag` | `string` | Etiket adı |
| `element.text` | `string` | Metin içeriği |
| `element.role` | `string` | ARIA rolü |
| `element.type` | `string` | input türü |
| `element.visible` | `boolean` | Görünür olup olmadığı |

## Betik yürütme

### executeScript — JavaScript çalıştır

```javascript
const result = await CAT.agent.dom.executeScript(code, options?);
```

**Parametreler:**

| Parametre | Tür | Varsayılan | Açıklama |
|------|------|--------|------|
| `code` | `string` | — | JavaScript kodu (zorunlu) |
| `options.tabId` | `number` | geçerli etkin sekme | Hangi sekmenin kullanılacağı |

> Kod her zaman sayfanın **MAIN dünyasında** çalışır (sayfanın kendi JS'iyle aynı `window` nesnesini paylaşır), bu nedenle sayfanın kendi işlevlerini çağırabilir ve sayfa değişkenlerini doğrudan okuyabilir — ancak aynı nedenle **eklentinin blob URL'lerine erişemez** (örn. `CAT.agent.opfs.read` değerinin `"blob"` modunda döndürdüğü `Blob` ile `URL.createObjectURL()` kullanarak oluşturduğunuz bir `blob:` URL), çünkü blob URL'leri eklentinin kendi kaynağına kapsamlanmıştır. İzole bir bağlamda bir blob URL ile çalışmanız gerekiyorsa, bunun yerine bir SkillScript kullanın (bkz. [Skill Geliştirme](../agent-skill-dev)).

```javascript
// Sayfanın kendi JS işlevini çağır / bir sayfa değişkenini oku
const data = await CAT.agent.dom.executeScript(
  "return window.__APP_STATE__"
);

// DOM içeriğini oku
const title = await CAT.agent.dom.executeScript(
  "return document.querySelector('h1')?.textContent"
);
```

> Kod, çalıştırma için `new Function()` içine sarılır ve bir `return` değerini destekler. Zaman aşımı 30 saniyedir.

## DOM izleme

Bir sayfadaki DOM değişikliklerini ve iletişim kutusu olaylarını izlemek için Chrome DevTools Protocol'ü kullanır.

### startMonitor — izlemeyi başlat

```javascript
await CAT.agent.dom.startMonitor(tabId);
```

Belirtilen sekmede DOM değişikliklerini ve iletişim kutularını (alert/confirm/prompt) izlemeye başlar.

### stopMonitor — izlemeyi durdur

```javascript
const result = await CAT.agent.dom.stopMonitor(tabId);
```

İzlemeyi durdurur ve toplanan değişiklikleri döndürür.

**`MonitorResult` döndürür:**

| Alan | Tür | Açıklama |
|------|------|------|
| `dialogs` | `Array<{ type, message }>` | İletişim kutusu listesi |
| `addedNodes` | `Array<{ tag, id?, class?, role?, text }>` | Yeni eklenen DOM düğümlerinin özeti |

> `addedNodes`, düğüm kimliğine göre yinelenmelerden arındırılır ve 50 girişle sınırlandırılır; sayfadan kaldırılmış veya görünür olmayan düğümler otomatik olarak atlanır. `text`, düğümün `outerHTML` değerinden çıkarılan ve 300 karakterle sınırlandırılan düz metindir.

### peekMonitor — izleme durumunu kontrol et

```javascript
const status = await CAT.agent.dom.peekMonitor(tabId);
```

Geçerli izleme durumunu yıkıcı olmayan bir şekilde kontrol eder.

**`MonitorStatus` döndürür:**

| Alan | Tür | Açıklama |
|------|------|------|
| `hasChanges` | `boolean` | Herhangi bir değişiklik olup olmadığı |
| `dialogCount` | `number` | İletişim kutusu sayısı |
| `nodeCount` | `number` | Yeni eklenen düğüm sayısı |

## Tam örnek

```javascript
// ==UserScript==
// @name        Auto form filler
// @match       https://example.com/form
// @grant       CAT.agent.dom
// ==/UserScript==

// Formun yüklenmesini bekle
await CAT.agent.dom.waitFor("form#signup", { timeout: 5000 });

// Formu doldur
await CAT.agent.dom.fill("input[name=username]", "test_user");
await CAT.agent.dom.fill("input[name=email]", "test@example.com");

// Onay kutusunu işaretle
await CAT.agent.dom.click("input[type=checkbox]#agree");

// Doldurulmuş formun ekran görüntüsünü al
await CAT.agent.dom.screenshot({
  selector: "form#signup",
  saveTo: "screenshots/form-filled.png"
});

// Gönder'e tıkla
const result = await CAT.agent.dom.click("button[type=submit]", { trusted: true });
if (result.navigated) {
  console.log("Form submitted successfully, navigated to:", result.url);
}
```
