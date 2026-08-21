---
title: Meta Veri Bloğu
---

`==UserScript==` içindeki içerik, bir betiğin ihtiyaç duyduğu izinleri, betik hakkındaki bilgileri vb. tanımlar. Betiğin en başında yer alır.

```js
// ==UserScript==
// @name         New Userscript
// @namespace    https://bbs.tampermonkey.net.cn/
// @version      0.1.0
// @description  try to take over the world!
// @author       You
// @crontab      * * once * *
// ==/UserScript==
```

## Ana Değerler

### name

Betik adı

### namespace

Betik ad alanı. `name + namespace`, betiğin benzersizliğini belirler.

### version

Betiğin sürümü. Bir sürüm değişikliği algılandığında kullanıcının güncelleme yapmasının istenmesi vb. için [anlamsal sürümleme](https://semver.org/) kullanılması önerilir.

### description

Betiğin ayrıntılı açıklaması

### author

Betik yazarı

### run-at

Betiğin ne zaman çalışacağı

| Değer          | Çalışma zamanı                                                              | Desteklenmeye başlandığı sürüm        |
| -------------- | ------------------------------------------------------------------ | ---------------------- |
| document-start | Betiği, URL ön uçta eşleştiği anda sayfaya enjekte eder | v0.3.0          |
| document-end   | Betiği DOM yüklemeyi bitirdikten sonra enjekte eder; sayfa betikleri ve görseller bu noktada hâlâ yükleniyor olabilir | v0.3.0 |
| document-idle  | Betiği tüm içerik yüklemeyi bitirdikten sonra enjekte eder         | v0.3.0                  |
| document-body  | Betik yalnızca sayfada bir `body` öğesi olduğunda enjekte edilir     | v0.6.2                  |
| document-menu  | Sağ tıklamada bir menü gösterir; betiği çalıştırmak menü adı olarak betik adını kullanır | v0.3.4-v0.9.4 (🔥 kaldırıldı) |

Menü simgeleri için [Unicode Sembollerine](https://unicode-table.com/en/) ve [emojiye](https://www.emojiall.com/en-US/) başvurabilirsiniz.

### run-in

Betiğin enjekte edileceği ortamı belirtir: normal sekmeler için `@run-in normal-tabs`, gizli sekmeler için `@run-in incognito-tabs`.

### early-start (v1.1.0+)

`run-at` `document-start` olduğunda, betik mümkün olduğunca erken çalışır, ancak yine de sayfadan daha hızlı yükleneceğini garanti edemez.

`@run-at document-start` tanımladıktan sonra, betiğin sayfadan daha hızlı yüklenmesini sağlamak için `@early-start` ekleyebilirsiniz: [örnek](https://github.com/scriptscat/scriptcat/blob/main/example/early-start.js)

### inject-into

:::tip

İçerik betiği ortamında (`content`), `unsafeWindow` yalnızca ortamın kendi geçerli `window` değerine işaret eder ve sayfanın `window` değerine erişemez.

ScriptCat, `content` veya `page` olarak enjekte edileceğine karar vermek için CSP kısıtlamalarını otomatik kontrol etmeyi desteklemez (yani Tampermonkey'in `@inject-into auto` özelliği).

:::

Betiğin nereye enjekte edileceğini belirtir; `page` ve `content` desteklenir, varsayılan `page` değeridir.

- `page`: betik sayfa ortamına enjekte edilir ve sayfanın `window` ve `DOM` değerlerine erişmek için `unsafeWindow` kullanabilir
- `content`: betik içerik betiği ortamına enjekte edilir, sayfanın `window` nesnesine doğrudan erişemez, ancak sayfa `DOM` değerine erişebilir ve `CSP` kısıtlamalarına tabi değildir

### storageName 🧪

`Value` için depolama alanı; aynı `storageName` altındaki veriler betikler arasında paylaşılabilir ve iletişim kurabilir. Bu, ScriptCat'e özgüdür.

### background

Bu betiği arka plan ortamında çalışması gereken bir arka plan betiği olarak işaretler. Ayrıntılar için [Arka Plan Betiği](./background.md#background-script-background) bölümüne bakın.

### crontab

Betiği, bir cron ifadesi değeri gerektiren zamanlanmış bir betik olarak işaretler. Yalnızca bir cron ifadesi olabilir ve arka plan ortamında bu programa göre çalışır. Ayrıntılar için [Zamanlanmış Betik](./background.md#scheduled-script-crontab) bölümüne bakın.

### match

Yalnızca `match` tarafından eşleştirilen URL'ler betiği çalıştırır; [Match kalıplarını](https://developer.chrome.com/docs/extensions/mv3/match_patterns/) izler. `match` içinde `*` bir joker karakterdir, `tld` üst düzey alan adıyla eşleşir ve `*.` ile başlayan bir alan adı `xxx.com` ile de eşleşir:

| Değer                             | Doğru örnekler                                                                                                                          | Yanlış örnekler                          |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| `http://scriptcat.org/doc/match`  | `http://scriptcat.org/doc/match`                                                                                                            | `http://scriptcat.org/doc/runAt`         |
| `*://*/param?*`                   | `https://scriptcat.org/param` \| `http://scriptcat.org/param?search=tampermonkey`                                                            | `https://scriptcat.org/test/param`       |
| `*://*/prefix*suffix`             | `http://scriptcat.org/prefix/suffix` \| `http://scriptcat.org/prefix/mid/suffix` \| `http://scriptcat.org/prefixsuffix`                      | `http://scriptcat.org/prefix/suffix/end` |
| `http*://scriptcat.org/*`         | `https://scriptcat.org/` \| `https://scriptcat.org/doc` \| `http://scriptcat.org/doc/match` \| `http://scriptcat.org/param?search=tampermonkey` | `https://doc.scriptcat.org/`            |
| `http*://scriptcat.org/doc/*`     | `https://scriptcat.org/doc` \| `http://scriptcat.org/doc/match`                                                                              | `http://scriptcat.org/param?search=tampermonkey` |
| `http*://scriptcat.tld/doc/*`     | `https://scriptcat.cn/doc` \| `http://scriptcat.net.cn/doc/match`                                                                            | `http://google.com/param?search=tampermonkey` |
| `http*://*.scriptcat.org/doc/*`   | `https://scriptcat.cn/doc` \| `http://www.scriptcat.net.cn/doc/match`                                                                        | `http://google.com/param?search=tampermonkey` |

### include

Bulanık eşleştirme için `\*` destekler, standart olmayan URL'lere izin verir

### exclude

Eşleşmemesi gereken URL'ler; `include` ile aynı ifade söz dizimini kullanır

### grant

API izni ister — bir API yalnızca istenmişse çağrılabilir. İzin listesine bakın: [API Belgeleri](./api.md) ve [CAT API Belgeleri](./cat-api.md).

İki özel değer:

- **none**: betik korumalı alan ortamında çalışmaz, doğrudan sayfa ortamında çalışır. Bu ortamda GM API'leri kullanılamaz, ancak sayfanın `window` nesnesine doğrudan erişilebilir.
- **unsafeWindow**: korumalı alan ortamında, sayfanın `window` nesnesine erişmeniz gerekiyorsa `unsafeWindow` kullanın. (Tampermonkey bunun bildirilmesini gerektirmez — yalnızca uyumluluk için korunur, ki bu pek temiz değildir.)

### connect

Bir site için erişim izni ister; bkz. `GM_cookie` ve `GM_xmlhttpRequest`. `native` moddaki `GM_download` da `@connect` değerini dikkate alır (bildirilmemiş konaklar, Tampermonkey'den farklı olarak bir onay istemi tetikler)

### resource

Bir kaynak dosyası içerir. `@resource` bildirdikten sonra, bilgileri almak için `GM_getResourceText`/`GM_getResourceURL` kullanabilirsiniz.

```js
// @resource icon https://bbs.tampermonkey.net.cn/favicon.ico
// @resource html https://bbs.tampermonkey.net.cn/
// @resource xml https://bbs.tampermonkey.net.cn/sitemap.xml
// Kaynak bütünlük doğrulaması ekleme
// @resource icon https://bbs.tampermonkey.net.cn/favicon.ico#md5-xxx,sha256-xxx
```

### require

Harici bir JS dosyası içerir; [kaynak bütünlük doğrulamasını](#resource-integrity-verification) destekler

### require-css

Harici bir CSS dosyası içerir; [kaynak bütünlük doğrulamasını](#resource-integrity-verification) destekler

### noframes

Betiği bir `<frame>` içinde çalışmayacak şekilde işaretler

### definition

Bir `.d.ts` dosyasının referans adresi; editör otomatik tamamlama ipuçlarını etkinleştirir

### antifeature

Bu, betik pazarıyla ilgilidir; istenmeyen özelliklerin bu açıklama değeriyle işaretlenmesi gerekir, örneğin:

```js
// @antifeature ads This script has ads
// @antifeature referral-link This script modifies or redirects to the author's referral link
```

## Ek Tanımlama Değerleri

### license

Geçerli betiğin açık kaynak lisansı

### updateURL

Güncelleme kontrolü, uzak betiğin bunun etkili olması için bir `@version` etiketine sahip olmasını gerektirir.

Betiğin güncellemeleri kontrol etmek için kullandığı bağlantı; ayarlanmazsa, bağlantının `user.js => meta.js` değerine veya `user.js` yoksa geçerli bağlantıya varsayılan olarak ayarlanır.

`@updateURL` yapılandırılırsa, `@updateURL` değerinin etkili olması için `@downloadURL` da yapılandırılmalıdır.

### downloadURL

Betik güncellemesi için indirme adresi

### supportURL

Destek sitesi, hata bildirim sayfası

### homepage, homepageURL, website

Betik ana sayfası

### source

Betik kaynak kodu sayfası

### icon, iconURL, defaulticon

Betik simgesi

### icon64, icon64URL

64x64 boyutunda betik simgesi

### copyright

Betik telif hakkı bilgileri

### tag

Betik etiketleri, virgül veya boşlukla ayrılır

### compatible

GreasyFork'ta gösterilen uyumluluk bilgileri

### scriptUrl

Bir abonelik betiği tarafından başvurulan kullanıcı betiği URL'si

### unwrap

Kullanıcı betiğinin korumalı alan sarmalayıcısını atlamasını ve sayfanın yerel genel kapsamında doğrudan enjekte edilip çalıştırılmasını sağlar. Betik, sayfanın gerçek genel değişkenlerine doğrudan erişebilir ve bunları değiştirebilir, ancak `GM.*` gibi kullanıcı betiği ayrıcalıklı API'lerini kullanamaz. Genellikle yerel sayfa betikleriyle derin etkileşim gerektiren senaryolarda veya mevcut bir normal sayfa betiğini taşırken kullanılır.

### cloudCat

Betiği bir CloudCat bulut betik paketine dışa aktarılabilir olarak işaretler (yalnızca SC)

### cloudServer

Betiğin kullandığı CloudCat bulut hizmeti

### exportValue

Bulut betiği olarak dışa aktarırken dışa aktarılacak betik depolama değerleri

### exportCookie

Bulut betiği olarak dışa aktarırken dışa aktarılacak çerezler

### Notlar

### Kaynak Bütünlük Doğrulaması {#resource-integrity-verification}

- Kaynakları kurcalamaya karşı doğrulamak için md5, sha1, sha256, sha384 veya sha512 kullanın. Birden çok doğrulama yöntemi `;` veya `,` ile ayrılabilir.
- [W3C önerilerine](https://w3c.github.io/webappsec-subresource-integrity/#hash-collision-attacks) göre md5 ve sha1 önerilmez; bunun yerine sha384 veya daha güçlü bir karmalama algoritması kullanın.

Örneğin:

```js
// @require https://cdn.jsdelivr.net/npm/darkmode-js@1.5.7/lib/darkmode-js.min.js#md5-d55836f30c097da753179f82fa6f108f,sha256-a476ab8560837a51938aa6e1720c8be87c2862b6221690e9de7ffac113811a90
```
