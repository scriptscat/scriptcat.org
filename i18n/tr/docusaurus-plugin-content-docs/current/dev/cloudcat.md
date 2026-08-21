---
title: Bulut Çalıştırma
---

> Bulutta çalıştırmanın birkaç yolu sağlanmıştır; ayrıntılar için [Çalıştırma Ortamları](#running-environments) bölümüne bakın. Ayrıca [CloudCat](https://github.com/scriptscat/cloudcat), arka plan betiklerini bulutta çalıştırmak için bir hizmettir — hâlâ geliştirilmekte olan bir FAAS platformudur.

⚠ Lütfen dikkat ⚠, buluta yüklendikten sonra, zamanlanmış bir betik ifadesindeki `once` anlamı değişir: `once` öncesindeki süre, çalıştırılırken minimum değeriyle değiştirilir.

Örneğin:

* `* * once * *` => `0 0 * * *`: günde bir kez çalışır, her gün 00:00'da çalışmaya başlar
* `* 1-23 once * *` => `0 1 * * *`: her gün 1:00 ile 23:00 arasında bir kez çalışır, her gün 01:00'de çalışmaya başlar
* `* 1,3,5 once * *` => `0 1 * * *`: her gün 1:00, 3:00 veya 5:00'te bir kez çalışır, her gün 01:00'de çalışmaya başlar
* `* */4 once * *` => `0 0 * * *`: her gün 4 saatte bir kez çalışır, her gün 00:00'da çalışmaya başlar
* `* 1-23/4 once * *` => `0 1 * * *`: her gün 1:00 ile 23:00 arasında 4 saatte bir kez çalışır, her gün 01:00'de çalışmaya başlar
* `* 10 once * *` => `0 10 * * *`: her gün 10:00'da bir kez çalışır, her gün saat 10'un 00. dakikasında çalışmaya başlar
* `* * * once *` => `0 0 1 * *`: ayda bir kez çalışır, her ayın 1'inde 00:00'da çalışmaya başlar

## Ek CloudCat Tanımlama Değerleri

Referans betik: [Bilibili Otomatik Giriş](https://scriptcat.org/script-show-page/48)

### cloudCat

Bu özniteliği bildirmek, betiğin `CloudCat` üzerinden çalışmasını sağlar. Bir betik bu seçeneğe sahip olduğunda, betik listesinde bir bulut çalıştırma düğmesi görünür; tıkladığınızda bir çalıştırma yöntemi seçebilirsiniz — [Çalıştırma Ortamları](#running-environments) bölümüne bakın.

![image-20220203225847694](@site/docs/dev/cloudcat.assets/image-20220203225847694.png)

### cloudServer

> cloudCat ile ilgili, henüz uygulanmadı

Varsayılan cloudCat sunucu adresi


### exportValue

Buluta dışa aktarılacak Değerleri tanımlar; birden çok bildirime izin verilir.

```ts
// @exportValue key1,key2,key3
// @exportValue key4,key5,key6
```

### exportCookie

Buluta dışa aktarılacak çerezleri tanımlar; birden çok bildirime izin verilir. Parametreler `GM_cookie`'nin `CookieDetails` yapısı kullanılarak tanımlanır, örneğin:

```ts
// Aşağıdaki, https://docs.scriptcat.org/docs/use/ adresinden cookie1 adlı çerezi dışa aktarır
// @exportCookie url=https://docs.scriptcat.org/docs/use;name=cookie1

// Bu, scriptcat.org alan adının tüm çerezlerini dışa aktarır
// @exportCookie domain=scriptcat.org

// Mevcut tüm parametreler:
// @exportCookie domain=scriptcat.org;url=https://docs.scriptcat.org/docs/use;name=cookie1;path=/docs/use;secure=true;session=true
```

## API Desteği Değişiklikleri
> Şu anda yalnızca aşağıdaki API'ler desteklenmektedir; aksi belirtilmedikçe orijinal API ile aynı şekilde davranırlar.

### GM_xmlhttpRequest


### GM_notification


### GM_log

### GM_getValue

Şu anda yalnızca `@exportValue` ile dışa aktarılan Değerleri almayı destekler; set/delete/list ve diğer yöntemler desteklenmez.

## Çalıştırma Ortamları {#running-environments}

### Yerel

Bir zip paketi dışa aktarır; bir klasöre açtıktan sonra yerel olarak çalıştırmak için aşağıdaki komutları çalıştırın (yerel bir Node.js ortamı gerektirir):

```bash
npm i
node index.js
```


### Tencent Cloud

Önce [**Erişim Anahtarları**](https://console.cloud.tencent.com/cam/capi) sayfasında bir Tencent Cloud anahtarı oluşturun — alt hesap kullanıyorsanız, ona Bulut Fonksiyonu izinleri verdiğinizden emin olun. Ardından hizmeti [**Fonksiyon Hizmeti**](https://console.cloud.tencent.com/scf/list) sayfasında etkinleştirin; her ay belirli bir miktar ücretsiz kullanım içerir. Bölge varsayılan olarak Şanghay'dır; gerekirse ayarlayın. Yükle'ye tıkladıktan sonra, fonksiyonu zamanında çalıştırmak için `@crontab` temelinde otomatik olarak bir zamanlanmış tetikleyici oluşturulur.

![image-20220203224956248](@site/docs/dev/cloudcat.assets/image-20220203224956248.png)
