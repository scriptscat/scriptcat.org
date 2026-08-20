---
title: UserConfig
---

`==UserConfig==` içindeki içerik `==UserScript==` bölümünden sonra gelir ve betik için kullanıcı tarafından yapılandırılabilir bazı seçenekleri tanımlar. Yapılandırma [YAML](https://yaml.org/) biçiminde yazılır:

```js
/* ==UserConfig==
group1:
  configA:                                # anahtar group.config biçimindedir, örn. bu anahtar group1.configA
    title: Yapılandırma A                 # yapılandırmanın başlığı
    description: Bu metin türünde bir yapılandırmadır # yapılandırmanın açıklaması
    type: text                            # seçenek türü; atlanırsa veriden otomatik algılanır
    default: varsayılan değer             # yapılandırmanın varsayılan değeri
    min: 2                                # en az 2 karakter
    max: 18                               # en fazla 18 karakter
    password: true                        # parola alanı olarak işaretler
  configB:
    title: Yapılandırma B
    description: Bu bir onay kutusu yapılandırmasıdır
    type: checkbox
    default: true
  configC:
    title: Yapılandırma C
    description: Bu bir seçim listesi yapılandırmasıdır
    type: select
    default: 1
    values: [1,2,3,4,5]
  configD:
    title: Yapılandırma D
    description: Bu dinamik bir seçim listesi yapılandırmasıdır
    type: select
    bind: $cookies                       # dinamik olarak bağlanan değerler; anahtar $ ile başlar ve değer bir dizi olmalıdır
  configE:
    title: Yapılandırma E
    description: Bu bir çoklu seçim listesi yapılandırmasıdır
    type: mult-select
    default: [1]
    values: [1,2,3,4,5]
  configF:
    title: Yapılandırma F
    description: Bu dinamik bir çoklu seçim listesi yapılandırmasıdır
    type: mult-select
    bind: $cookies
  configG:
    title: Yapılandırma G
    description: Bu sayısal bir yapılandırmadır
    type: number
    default: 1
    min: 10  # minimum değer
    max: 16  # maksimum değer
    unit: min # birim etiketi
  configH:
    title: Yapılandırma H
    description: Bu uzun metin türünde bir yapılandırmadır
    type: textarea
    default: varsayılan değer
  configI:
    title: Yapılandırma I
    description: Bu zaman türünde bir yapılandırmadır
    type: time
    default: "12:00"
---
group2: # ikinci yapılandırma grubu
  configX:
    title: Yapılandırma X
    description: Bu metin türünde bir yapılandırmadır
    default: varsayılan değer
 ==/UserConfig== */
```

Burada tanımlandıktan sonra, kullanıcının yapılandırması için panelde bir yapılandırma düğmesi görünür. Geliştiriciler, anahtarı `group.config` biçiminde ifade ederek yapılandırmanın değerini okumak için `GM_getValue` kullanır.

![](@site/docs/dev/config.assets/image-20210621213013631.png)
