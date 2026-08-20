---
title: Մետատվյալների բլոկ
---

`==UserScript==`-ի ներսում եղած բովանդակությունը նկարագրում է սկրիպտի պահանջած թույլտվությունները, սկրիպտի մասին տեղեկատվությունը և այլն: Այն գտնվում է սկրիպտի հենց սկզբում:

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

## Հիմնական արժեքներ

### name

Սկրիպտի անունը

### namespace

Սկրիպտի անվանատարածքը: `name + namespace`-ը որոշում է սկրիպտի եզակիությունը:

### version

Սկրիպտի տարբերակը: Խորհուրդ է տրվում հետևել [սեմանտիկ տարբերակավորմանը](https://semver.org/), որպեսզի տարբերակի փոփոխություն հայտնաբերելիս օգտագործողին հուշվի թարմացնել, և այլն:

### description

Սկրիպտի մանրամասն նկարագրությունը

### author

Սկրիպտի հեղինակը

### run-at

Երբ է գործարկվում սկրիպտը

| Արժեք          | Գործարկվում է                                                              | Աջակցվում է սկսած        |
| -------------- | ------------------------------------------------------------------ | ---------------------- |
| document-start | Սկրիպտը ներարկվում է էջ՝ հենց URL-ը համընկնում է ճակատային մասում | v0.3.0          |
| document-end   | Սկրիպտը ներարկվում է DOM-ի բեռնման ավարտից հետո; էջի սկրիպտներն ու պատկերները կարող են դեռ բեռնվել այս պահին | v0.3.0 |
| document-idle  | Սկրիպտը ներարկվում է բոլոր բովանդակության բեռնման ավարտից հետո         | v0.3.0                  |
| document-body  | Սկրիպտը ներարկվում է միայն այն ժամանակ, երբ էջն ունի `body` տարր     | v0.6.2                  |
| document-menu  | Աջ սեղմելիս ցույց է տալիս մենյու; սկրիպտը գործարկելիս սկրիպտի անունը օգտագործվում է որպես մենյուի անուն | v0.3.4-v0.9.4 (🔥 հեռացված) |

Մենյուի պատկերակների համար կարող եք անդրադառնալ [Unicode նշաններին](https://unicode-table.com/en/) և [էմոջիներին](https://www.emojiall.com/en-US/):

### run-in

Նշում է այն միջավայրը, որտեղ ներարկվում է սկրիպտը՝ `@run-in normal-tabs` սովորական ներդիրների համար, `@run-in incognito-tabs` ինկոգնիտո ներդիրների համար:

### early-start (v1.1.0+)

Երբ `run-at`-ը `document-start` է, սկրիպտը գործարկվում է հնարավորինս շուտ, բայց այն դեռ չի կարող երաշխավորել էջից ավելի արագ բեռնումը:

Երբ սահմանեք `@run-at document-start`, կարող եք ավելացնել `@early-start`՝ սկրիպտը էջից ավելի արագ բեռնելու համար. [օրինակ](https://github.com/scriptscat/scriptcat/blob/main/example/early-start.js)

### inject-into

:::tip

Կոնտենտ-սկրիպտ միջավայրում (`content`) `unsafeWindow`-ը մատնանշում է միայն միջավայրի սեփական ընթացիկ `window`-ը և չի կարող մուտք գործել էջի `window`-ը:

ScriptCat-ը չի աջակցում CSP սահմանափակումների ավտոմատ ստուգումը՝ որոշելու համար, թե արդյոք ներարկել որպես `content` կամ `page` (այսինքն՝ Tampermonkey-ի `@inject-into auto`):

:::

Նշում է, թե որտեղ է ներարկվում սկրիպտը՝ աջակցելով `page` և `content`, լռելյայն՝ `page`:

- `page`. սկրիպտը ներարկվում է էջի միջավայր և կարող է օգտագործել `unsafeWindow`՝ էջի `window`-ին և `DOM`-ին մուտք գործելու համար
- `content`. սկրիպտը ներարկվում է կոնտենտ-սկրիպտ միջավայր, չի կարող ուղղակիորեն մուտք գործել էջի `window` օբյեկտը, բայց կարող է մուտք գործել էջի `DOM`-ը և ենթակա չէ `CSP`-ին

### storageName 🧪

`Value`-ի պահեստավորման տարածքը. նույն `storageName`-ի տակ գտնվող տվյալները կարող են կիսվել և փոխանցվել սկրիպտների միջև: Սա ScriptCat-ին հատուկ է:

### background

Նշում է այս սկրիպտը որպես ֆոնային սկրիպտ, որը պետք է գործարկվի ֆոնային միջավայրում: Մանրամասների համար տեսեք [Ֆոնային սկրիպտ](./background.md#background-script-background):

### crontab

Նշում է սկրիպտը որպես պլանավորված սկրիպտ, որը պահանջում է cron արտահայտության արժեք: Կարող է գոյություն ունենալ միայն մեկ cron արտահայտություն, և այն գործարկվում է այդ ժամանակացույցով ֆոնային միջավայրում: Մանրամասների համար տեսեք [Պլանավորված սկրիպտ](./background.md#scheduled-script-crontab):

### match

Միայն `match`-ի հետ համընկնող URL-ները կգործարկեն սկրիպտը՝ հետևելով [Match նախշերին](https://developer.chrome.com/docs/extensions/mv3/match_patterns/): `match`-ում `*`-ը նշանակում է wildcard, `tld`-ը համընկնում է վերին մակարդակի դոմենին, իսկ `*.`-ով սկսվող դոմենը նույնպես կհամընկնի `xxx.com`-ի հետ՝

| Արժեք                             | Ճիշտ օրինակներ                                                                                                                          | Սխալ օրինակներ                          |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| `http://scriptcat.org/doc/match`  | `http://scriptcat.org/doc/match`                                                                                                            | `http://scriptcat.org/doc/runAt`         |
| `*://*/param?*`                   | `https://scriptcat.org/param` \| `http://scriptcat.org/param?search=tampermonkey`                                                            | `https://scriptcat.org/test/param`       |
| `*://*/prefix*suffix`             | `http://scriptcat.org/prefix/suffix` \| `http://scriptcat.org/prefix/mid/suffix` \| `http://scriptcat.org/prefixsuffix`                      | `http://scriptcat.org/prefix/suffix/end` |
| `http*://scriptcat.org/*`         | `https://scriptcat.org/` \| `https://scriptcat.org/doc` \| `http://scriptcat.org/doc/match` \| `http://scriptcat.org/param?search=tampermonkey` | `https://doc.scriptcat.org/`            |
| `http*://scriptcat.org/doc/*`     | `https://scriptcat.org/doc` \| `http://scriptcat.org/doc/match`                                                                              | `http://scriptcat.org/param?search=tampermonkey` |
| `http*://scriptcat.tld/doc/*`     | `https://scriptcat.cn/doc` \| `http://scriptcat.net.cn/doc/match`                                                                            | `http://google.com/param?search=tampermonkey` |
| `http*://*.scriptcat.org/doc/*`   | `https://scriptcat.cn/doc` \| `http://www.scriptcat.net.cn/doc/match`                                                                        | `http://google.com/param?search=tampermonkey` |

### include

Աջակցում է `\*`-ին՝ անորոշ համընկնման համար՝ թույլ տալով ոչ ստանդարտ URL-ներ

### exclude

URL-ներ, որոնք չպետք է համընկնեն. օգտագործում է նույն արտահայտության շարահյուսությունը, ինչ `include`-ը

### grant

Պահանջում է API թույլտվություն — API կարելի է կանչել միայն այն պահանջվելուց հետո: Թույլտվությունների ցուցակը տեսեք՝ [API փաստաթղթեր](./api.md) և [CAT API փաստաթղթեր](./cat-api.md):

Երկու հատուկ արժեք՝

- **none**. սկրիպտը չի գործարկվում սանդբոքս միջավայրում, այլ ուղղակիորեն էջի միջավայրում: Այս միջավայրում ոչ մի GM API հասանելի չէ, բայց էջի `window` օբյեկտին կարելի է ուղղակիորեն մուտք գործել:
- **unsafeWindow**. սանդբոքս միջավայրում, եթե անհրաժեշտ է մուտք գործել էջի `window` օբյեկտը, օգտագործեք `unsafeWindow`-ը: (Tampermonkey-ը չի պահանջում սա հայտարարել — այն պահվում է միայն համատեղելիության համար, ինչը, իհարկե, այնքան էլ կոկիկ չէ:)

### connect

Պահանջում է մուտքի թույլտվություն կայքի համար. տեսեք `GM_cookie` և `GM_xmlhttpRequest`: `GM_download`-ը `native` ռեժիմում նույնպես հարգում է `@connect`-ը (չհայտարարված հոսթերը հրահրում են հաստատման հուշում՝ ի տարբերություն Tampermonkey-ի)

### resource

Ներառում է ռեսուրս ֆայլ: `@resource` հայտարարելուց հետո կարող եք օգտագործել `GM_getResourceText`/`GM_getResourceURL`՝ տեղեկատվությունը ստանալու համար:

```js
// @resource icon https://bbs.tampermonkey.net.cn/favicon.ico
// @resource html https://bbs.tampermonkey.net.cn/
// @resource xml https://bbs.tampermonkey.net.cn/sitemap.xml
// Adding resource integrity verification
// @resource icon https://bbs.tampermonkey.net.cn/favicon.ico#md5-xxx,sha256-xxx
```

### require

Ներառում է արտաքին JS ֆայլ. աջակցում է [ռեսուրսի ամբողջականության ստուգմանը](#resource-integrity-verification)

### require-css

Ներառում է արտաքին CSS ֆայլ. աջակցում է [ռեսուրսի ամբողջականության ստուգմանը](#resource-integrity-verification)

### noframes

Նշում է սկրիպտը որպես `<frame>`-ի ներսում չգործարկվող

### definition

`.d.ts` ֆայլի հղման հասցեն՝ խմբագրիչի ավտոլրացման հուշումները միացնելու համար

### antifeature

Սա կապված է սկրիպտի շուկայի հետ. անցանկալի հնարավորությունները պետք է նշվեն այս նկարագրության արժեքով, օրինակ՝

```js
// @antifeature ads This script has ads
// @antifeature referral-link This script modifies or redirects to the author's referral link
```

## Լրացուցիչ նկարագրության արժեքներ

### license

Ընթացիկ սկրիպտի բաց կոդի լիցենզիան

### updateURL

Թարմացման ստուգումը պահանջում է, որ հեռավոր սկրիպտը ունենա `@version` պիտակ՝ դրա գործողության համար:

Այն հղումը, որը սկրիպտը օգտագործում է թարմացումները ստուգելու համար. եթե սահմանված չէ, այն լռելյայն դառնում է հղման `user.js => meta.js`, կամ ընթացիկ հղումը, եթե `user.js` չկա:

Եթե `@updateURL` կարգավորված է, `@downloadURL`-ը նույնպես պետք է կարգավորվի, որպեսզի `@updateURL`-ը գործի:

### downloadURL

Սկրիպտի թարմացման ներբեռնման հասցեն

### supportURL

Աջակցման կայք, սխալների հաղորդման էջ

### homepage, homepageURL, website

Սկրիպտի գլխավոր էջը

### source

Սկրիպտի սկզբնաղբյուր կոդի էջը

### icon, iconURL, defaulticon

Սկրիպտի պատկերակը

### icon64, icon64URL

64x64 չափի սկրիպտի պատկերակ

### copyright

Սկրիպտի հեղինակային իրավունքի տեղեկատվությունը

### tag

Սկրիպտի պիտակները՝ բաժանված ստորակետներով կամ բացատներով

### compatible

Համատեղելիության տեղեկատվություն, որը ցուցադրվում է GreasyFork-ում

### scriptUrl

Բաժանորդագրության սկրիպտի կողմից հղված օգտագործողի սկրիպտի URL-ը

### unwrap

Թույլ է տալիս օգտագործողի սկրիպտին շրջանցել սանդբոքսի փաթաթումը և ներարկվել ու գործարկվել ուղղակիորեն էջի բնիկ գլոբալ շրջանակում: Սկրիպտը կարող է ուղղակիորեն մուտք գործել և փոփոխել էջի իրական գլոբալ փոփոխականները, բայց չի կարողանա օգտագործել օգտագործողի սկրիպտի արտոնյալ API-ները, ինչպիսիք են `GM.*`-ը: Սովորաբար օգտագործվում է բնիկ էջի սկրիպտների հետ խորը փոխազդեցություն պահանջող սցենարներում կամ գոյություն ունեցող սովորական էջի սկրիպտի միգրացիայի ժամանակ:

### cloudCat

Նշում է սկրիպտը որպես CloudCat ամպային սկրիպտ փաթեթ արտահանելի (միայն SC)

### cloudServer

Սկրիպտի կողմից օգտագործվող CloudCat ամպային ծառայությունը

### exportValue

Սկրիպտի պահեստավորման արժեքները, որոնք պետք է արտահանվեն ամպային սկրիպտ արտահանելիս

### exportCookie

Քուքիները, որոնք պետք է արտահանվեն ամպային սկրիպտ արտահանելիս

### Նշումներ

### Ռեսուրսի ամբողջականության ստուգում {#resource-integrity-verification}

- Օգտագործեք md5, sha1, sha256, sha384 կամ sha512՝ ռեսուրսները կեղծիքներից ստուգելու համար: Բազմաթիվ ստուգման մեթոդներ կարելի է առանձնացնել `;` կամ `,`-ով:
- [W3C առաջարկությունների](https://w3c.github.io/webappsec-subresource-integrity/#hash-collision-attacks) համաձայն՝ md5 և sha1 խորհուրդ չեն տրվում. փոխարենը օգտագործեք sha384 կամ ավելի ուժեղ հեշ ալգորիթմ:

Օրինակ՝

```js
// @require https://cdn.jsdelivr.net/npm/darkmode-js@1.5.7/lib/darkmode-js.min.js#md5-d55836f30c097da753179f82fa6f108f,sha256-a476ab8560837a51938aa6e1720c8be87c2862b6221690e9de7ffac113811a90
```
