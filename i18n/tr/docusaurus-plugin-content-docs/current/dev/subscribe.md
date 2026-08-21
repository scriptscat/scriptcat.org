---
title: Abonelik Modu
---

Dosya, `UserScript` yerine `UserSubscribe` ile başlamalıdır. Kurulum bağlantısı `user.sub.js` uzantısını kullanmalı ve bir `https` bağlantısı olmalıdır.

Bir abonelik betiği, kurulum sırasında kullanıcının aboneliği onaylaması için yalnızca kurulum iletişim kutusunu gösterir; sonraki güncellemeler sessizdir ve güncelleme iletişim kutusu yalnızca `connect` izni değiştiğinde yeniden gösterilir.

Tek bir abonelik betiği, birden çok betiğin kurulum bağlantılarını tanımlayabilir. Abonelik moduyla kurulan betikler onay iletişim kutusu olmadan sessizce kurulur ve kurulan betikler betik listesinde görünmeye devam eder — ancak `connect` izinleri, betiğin kendi `connect` izni yerine abonelikte bildirilen `connect` değerini kullanır.

```js
// ==UserSubscribe==
// @name         xxx
// @description  Subscribe to the xxx script series
// @version      0.1.0
// @author       You
// @connect      www.baidu.com
// @scriptUrl    https://script.tampermonkey.net.cn/48.user.js
// @scriptUrl    https://script.tampermonkey.net.cn/49.user.js
// ==/UserSubscribe==
```

## Abonelik Güncellemeleri ve Betik Güncellemeleri

Kullanıcının yapılandırdığı `güncelleme aralığına` göre ScriptCat, abonelik bağlantısını düzenli olarak güncellemeler için kontrol eder; bunun etkili olması için `version` yapılandırılmış olmalıdır.

Her abonelik güncellemesi veya değişikliği, betik bağlantılarını şu anda kurulu betiklerle karşılaştırır: artık yeni abonelikte olmayan betikler kaldırılır ve yeni eklenen betikler sessizce kurulur. Betik güncellemeleri, betiğin kendi `version` değerini izler ve normal kurulan bir betikle aynı güncelleme mantığını kullanır.

## Sessiz Kurulum ve Güncelleme

Abone olunan betikler sessizce kurulur ve güncellenir — bir abonelikten betik eklemek, kaldırmak veya güncellemek yalnızca bir bildirim gösterir ve kullanıcı onayı gerektirmez. Bu sessiz güncelleme mekanizması nedeniyle, lütfen yalnızca güvendiğiniz kaynaklara abone olun.


## metadata

Bir abonelik betiği içinde belirli meta veri alanlarının anlamı değişir.

### name

Abonelik adı (abonelik listesinde doğrudan da düzenlenebilir)

### description

Abonelik açıklaması, aboneliğin ne için olduğunu açıklar

### version

Abonelik sürümü. Atlanırsa, güncellemeler bunun yerine abonelik betiğinin içeriğinin değişip değişmediğine göre tetiklenir.

### connect

Bir site için erişim izni ister; bkz. `GM_cookie` ve `GM_xmlhttpRequest`. Abonelik moduyla kurulan betikler için `connect`, aboneliğin `connect` değeri tarafından geçersiz kılınır.

### scriptUrl

Aboneliğin gerektirdiği betik kurulum bağlantıları
