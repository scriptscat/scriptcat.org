---
title: Arka Plan Betiği
---

Arka plan betikleri, sürekli çalışmaya devam etmesi gereken betikler için uygundur. Arka plan betikleri ScriptCat'e özgü bir betik türüdür; korumalı alanda çalışırlar ve DOM'a erişemezler. Tampermonkey ile aynı GM API'leri kullanılarak geliştirilebilirler ve uyumluluk notları belgelerde belirtilmiştir.

## Arka Plan Betiği (`@background`) {#background-script-background}

Bir arka plan betiği `@background` özniteliğiyle bildirilir. Betiğin, betik etkinleştirildikten veya tarayıcı başlatıldıktan sonra arka planda çalışmaya devam etmesini sağlar.

## Zamanlanmış Betik (`@crontab`) {#scheduled-script-crontab}

> Zamanlanmış bir betik, **bir zaman döngüsünde tekrar tekrar çalışması** gereken görevlere uygun bir arka plan betiği türüdür.

Bir zamanlanmış betik `@crontab` özniteliğiyle bildirilir. Dakika düzeyinde ve saniye düzeyinde zamanlamayı destekler ve aynı zaman döngüsü içinde birden fazla kez çalışmayı önlemek için ScriptCat'in genişletilmiş sözdizimi `once` / `once(...)` özelliğini sağlar.

⚠️ Notlar:

* Tek bir betikte **yalnızca ilk `@crontab` etkilidir**
* Betiğin **tek çalıştırma süresi + yeniden deneme süresinin** cron aralığını aşmaması önerilir, aksi takdirde çalıştırmalar çakışabilir

## Cron İfadesi Notları

ScriptCat'in cron uygulaması, standart cron sözdiziminin üzerine küçük bir genişletmeyle [**node-cron**](https://github.com/kelektiv/node-cron/) temellidir.

### İfade Biçimi

#### Standart 5 Alanlı Biçim (Önerilir)

```text
minute hour day month weekday
```

#### Genişletilmiş 6 Alanlı Biçim (Önerilmez)

```text
second minute hour day month weekday
```

> ⚠️ 6 alanlı biçim önerilmez
> Tarayıcı ortamları saniye düzeyinde hassasiyeti garanti edemez ve bu, performans yükünü artırır — arka plan sayfasının zamanlaması gecikebilir.

### Alan Başına Kullanılabilir Sözdizimi

| Sözdizimi  | Anlam              | Örnek                  |
| ------- | -------------------- | ------------------------ |
| `*`     | Herhangi bir değer            | `*` (her dakika/saat)  |
| sayı  | Belirli bir değer       | `5` (5. dakika)     |
| `a,b,c` | Birden çok ayrık değer | `1,15,30`             |
| `a-b`   | Bitişik aralık      | `10-23`                  |
| `*/n`   | Her n birimde bir          | `*/5`                   |
| `a-b/n` | Adımlı aralık        | `10-50/10`               |

#### Hafta Günü Kuralları

* `1–6`: Pazartesiden Cumartesiye
* `0` veya `7`: Pazar

## `once` Genişletme Sözdizimi

### `once` Ne Anlama Gelir

Bir cron ifadesinde `once` kullanmak şu anlama gelir:

> **Geçerli zaman döngüsü içinde yalnızca bir başarılı çalıştırmaya izin ver**

Aynı döngü içindeki sonraki zaman noktaları cron kuralıyla eşleşse bile betik yeniden çalışmaz.

### `once` ve `once(...)` Karşılaştırması

| Sözdizimi        | Bu alan için temel cron değeri | Açıklama                                                       |
| ------------- | ------------------------------------- | ------------------------------------------------------------------ |
| `once`        | `*` (herhangi bir değer)                       | Belirli bir zaman olmadan döngü içindeki ilk eşleşmede çalışır  |
| `once(expr)`  | `expr`                                 | Yalnızca döngü içinde `expr` ile eşleşen zamanlarda ve yalnızca bir kez çalışır |

`once(expr)`, "döngü başına yalnızca bir kez çalıştır" kuralını uygularken aday zaman noktalarını hassas bir şekilde belirlemenizi sağlar. Parantez içinde tüm standart cron sözdizimi (sayılar, aralıklar, adımlar, listeler) desteklenir.

Örnek karşılaştırma:

```text
* once * * *          // her saatin herhangi bir dakikası; ilk eşleşmede çalışır, o saatte başka çalışmaz
* once(9-17) * * *    // her gün 9:00 ile 17:59 arasında, saatte bir kez çalışır
0,30 once * * *       // her saat hangi dakika (0 veya 30) önce eşleşirse o çalışır; o saatte başka çalışmaz
```

### `once` Konumu = Sınırladığı Zaman Döngüsü

`once` / `once(...)` nereye yerleştirilirse yerleştirilsin, "yalnızca o zaman parçalılığında bir kez çalıştır" anlamına gelir.

| `once` konumu | Davranış                       |
| ---------------- | ------------------------------- |
| dakika alanı      | Dakikada yalnızca bir kez çalışır       |
| saat alanı        | Saatte yalnızca bir kez çalışır         |
| gün alanı         | Günde yalnızca bir kez çalışır          |
| ay alanı       | Ayda yalnızca bir kez çalışır        |
| hafta günü alanı     | Haftada yalnızca bir kez çalışır         |

Örnekler:

```text
* once * * *       // saatte yalnızca bir kez çalışır
* * once * *       // günde yalnızca bir kez çalışır
* 9-18 once * *    // her gün 9:00 ile 18:59 arasında yalnızca bir kez çalışır
```

### `once` Aralıklar / Listeler / Adımlarla Birleştirme

`once` / `once(...)` herhangi bir cron sözdizimiyle birleştirilebilir, ancak yalnızca bir kural vardır:

> **Aynı döngü içinde, bir çalıştırma başarılı olduğunda, eşleşen sonraki tüm zaman noktaları yok sayılır**

#### Örnek 1: Aralık

```text
* 10 once * *
```

Anlamı:

* Her gün, 10:00–10:59 aday zamanlardır
* Günün ilk eşleşmesinden sonra
* 10:05–10:59 artık çalışmaz

#### Örnek 2: Liste

```text
* 1,3,5 once * *
```

Anlamı:

* Her gün, 1:00, 3:00 ve 5:00 aday zamanlardır
* 1:00 zaten çalıştıysa
* 3:00 ve 5:00 atlanır

#### Örnek 3: Adım

```text
* */4 once * *
```

Anlamı:

* Her gün, 0:00, 4:00, 8:00, 12:00, 16:00 ve 20:00 aday zamanlardır
* Günün ilk çalıştırmasından sonra
* Başka hiçbir zaman noktası çalışmaz

#### Örnek 4: `once(...)` ile Aday Zaman Noktaları Belirleme

```text
* once(9-17) * * *
```

Anlamı:

* Her gün, 9:00 ile 17:00 arası aday saatlerdir
* Döngü her saat sıfırlanır; bir saat içinde ilk eşleşme sonraki çalıştırmaları durdurur
* Etki: her gün 9:00 ile 17:00 arasında saatte bir kez, toplam 9 kez çalışır

```text
* 9-18 once * *
```

Anlamı:

* Her gün, 9:00–18:59 aday zamanlardır
* Gün alanındaki `once`, döngüyü günde bir kez olarak kilitler
* Günün ilk eşleşmesinden sonra, 18:59'a kadar başka hiçbir şey çalışmaz

## `@crontab` Örnekleri

### Yaygın

```js
//@crontab * * * * *        // dakikada bir kez çalışır
//@crontab * * * * * *      // saniyede bir kez çalışır (önerilmez)
//@crontab 0 */6 * * *      // her 6 saatte bir tam saatte çalışır
//@crontab 15 */6 * * *     // her 6 saatte bir 15. dakikada çalışır
//@crontab * once * * *     // saatte en fazla bir kez çalışır
//@crontab * * once * *     // günde en fazla bir kez çalışır
//@crontab * 10 once * *    // her gün yalnızca 10:00 saatinde bir kez çalışır (örn. 10:04'te çalıştıysa 10:05-10:59 arasında tekrar çalışmaz)
//@crontab * */4 once * *   // her gün en fazla 4 saatte bir kontrol eder (örn. 4:00'te çalıştıysa 8, 12, 16, 20, 24 vb. saatlerde tekrar çalışmaz)
```

### İleri Düzey

```js
//@crontab * 1,3,5 once * *       // her gün 1:00, 3:00 veya 5:00'te bir kez çalışır (örn. 1:00'de çalıştıysa 3:00 veya 5:00'te tekrar çalışmaz)
//@crontab * 10-23 once * *       // her gün 10:00 ile 23:59 arasında bir kez çalışır (örn. 10:04'te çalıştıysa 10:05-23:59 arasında tekrar çalışmaz)
//@crontab * once 13 * *          // her ayın 13'ünde saatte bir kez çalışır
//@crontab * once(9-17) * * *     // her gün 9:00 ile 17:00 arasında saatte bir kez çalışır
//@crontab 0,30 once * * *        // her saat hangi dakika (0 veya 30) önce eşleşirse o çalışır; o saatte tekrar etmez
//@crontab * 9-18 once * *        // her gün yalnızca 9:00 ile 18:00 arasında bir kez çalışır
```

## Kullanım Önerileri

### `once` için Uygun Durumlar

* Gün/saat başına **yalnızca bir kez çalışması gereken** görevler
* Durum kontrolleri, senkronizasyon ve raporlama betikleri
* Aşağıdaki sorunlardan kaçınmak:

  * Tarayıcı uzun süredir açılmamış olması
  * Arka plan sayfası zamanlama gecikmeleri
  * Tarayıcı yeniden başlatılmasının neden olduğu yinelenen çalıştırma

### `once` için Önerilmez

* Tam bir anda çalışması gereken görevler
* Çalıştırma süresi cron aralığını önemli ölçüde aşabilen betikler
* Çalıştırma sayısında katı tutarlılık gereksinimleri olan görevler

## Cron İfadelerini Test Etme

Bir cron ifadesini test ederken, lütfen `once` / `once(...)` değerlerini **geçici olarak temel değerleriyle değiştirin**:

* `once` → `*`
* `once(expr)` → `expr`

Test araçlarının genişletilmiş 6 alanlı biçimi desteklemeyebileceğini unutmayın.

Önerilen araçlar:

* [crontab.guru](https://crontab.guru/)
* [tool.lu cron hesaplayıcı](https://tool.lu/crontab/)

Betik listesi sayfasında, **çalıştırma durumu sütununun** üzerine gelerek betiğin **bir sonraki zamanlanmış çalıştırma zamanını** görebilirsiniz.

## Günlükler

Betik listesi sayfasında, `çalıştırma durumu sütununun` üzerine gelindiğinde betiğin çalıştırma durumunu gösteren bir araç ipucu görünür;
tıklandığında `GM_log` ile yazdırılan günlük içeriği açılır.

![](@site/docs/dev/background.assets/image-20210621214143661.png)

![](@site/docs/dev/background.assets/image-20210621214124685.png)

## Betik Hata Ayıklama

Arka plan betikleri, betik düzenleyici sayfasından doğrudan hata ayıklanabilir, ancak bunun aşağıdaki sınırlamaları vardır:

* `value` düzgün senkronize olmaz
* `registerMenu` menüleri düzgün tetiklenmez

![](@site/docs/dev/background.assets/image-20210903141601057.png)

Gerçek çalıştırma ortamında hata ayıklamak için eklenti ayarlarında **Geliştirici Modu**'nu etkinleştirin, ardından hata ayıklamak için eklentinin `background.html` sayfasını açın.

Çalışma zamanında oluşan hatalar da çalıştırma günlüğünde görüntülenebilir.

![image-20210903144155450](@site/docs/dev/background.assets/image-20210903144155450.png)

## Promise

Aşağıdaki kalıp şiddetle önerilir, çünkü betik yöneticisinin betik çalıştırmasını izlemesine de olanak tanır.
Betik herhangi bir zaman uyumsuz işlem gerçekleştiriyorsa, **bir `Promise` döndürmelidir**.

```ts
// ==UserScript==
// @name         Background Script
// @namespace    wyz
// @version      1.0.0
// @author       wyz
// @background
// ==/UserScript==
return new Promise((resolve, reject) => {
  if (Math.round((Math.random() * 10) % 2)) {
    resolve("ok"); // başarılı
  } else {
    reject("error"); // başarısız, hata nedeniyle
  }
});
```

```js
// ==UserScript==
// @name         Scheduled script that runs once a day
// @namespace    wyz
// @version      1.0.0
// @author       wyz
// @crontab      * * once * *
// ==/UserScript==
return new Promise((resolve, reject) => {
  if (Math.round((Math.random() * 10) % 2)) {
    resolve("ok"); // başarılı
  } else {
    reject("error"); // başarısız, hata nedeniyle
  }
});
```

```js
// ==UserScript==
// @name         Call an API
// @namespace    wyz
// @version      1.0.0
// @author       wyz
// @crontab      * * once * *
// ==/UserScript==
return new Promise((resolve, reject) => {
  GM_xmlhttpRequest({
    url: "https://bbs.tampermonkey.net.cn/",
    onload() {
      resolve("ok"); // başarılı
    },
    onerror() {
      reject("error"); // başarısız, hata nedeniyle
    },
  });
});
```

Lütfen `resolve` / `reject` öğelerini yalnızca betiğin mantığı gerçekten tamamlandıktan sonra çağırdığınızdan emin olun.
Çağrıldıktan sonra yönetici betiğin çalıştırmasının tamamlandığını kabul eder ve sonraki tüm GM işlemleri artık etkili olmaz.

## Hata Yeniden Deneme

ScriptCat arka plan betikleri hata yeniden denemesini destekler.
Bir betik başarısız olduğunda, yeniden denemeyi tetiklemek için bir `CATRetryError` ile `reject` çağrısı yapabilir.

* Minimum yeniden deneme aralığı: 5 saniye
* Betiğin kendi çalıştırma süresiyle çakışmaktan kaçının, aksi takdirde yinelenen çalıştırma oluşabilir

```js
// ==UserScript==
// @name         Retry example
// @namespace    https://bbs.tampermonkey.net.cn/
// @version      0.1.0
// @description  try to take over the world!
// @author       You
// @crontab      * * once * *
// @grant        GM_notification
// ==/UserScript==

return new Promise((resolve, reject) => {
  GM_notification({
    title: "retry",
    text: "Retrying in 10 seconds",
  });
  reject(new CATRetryError("xxx error", 10));
});
```
