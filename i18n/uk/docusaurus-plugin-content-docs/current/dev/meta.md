---
title: Блок метаданих
---

Вміст усередині `==UserScript==` описує дозволи, необхідні скрипту, інформацію про скрипт тощо. Він розташований на самому початку скрипта.

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

## Основні значення

### name

Назва скрипта

### namespace

Простір імен скрипта. `name + namespace` визначає унікальність скрипта.

### version

Версія скрипта. Рекомендується дотримуватися [семантичного версіонування](https://semver.org/), щоб під час виявлення зміни версії користувачеві пропонувалося оновитися тощо.

### description

Детальний опис скрипта

### author

Автор скрипта

### run-at

Коли запускається скрипт

| Значення          | Запуск                                                              | Підтримується з        |
| -------------- | ------------------------------------------------------------------ | ---------------------- |
| document-start | Впроваджує скрипт у сторінку, щойно URL збігається на фронтенді | v0.3.0          |
| document-end   | Впроваджує скрипт після завершення завантаження DOM; скрипти та зображення сторінки можуть ще завантажуватися | v0.3.0 |
| document-idle  | Впроваджує скрипт після завершення завантаження всього вмісту         | v0.3.0                  |
| document-body  | Скрипт впроваджується лише після появи елемента `body` на сторінці     | v0.6.2                  |
| document-menu  | Показує меню під час натискання правою кнопкою миші; запуск скрипта використовує назву скрипта як назву меню | v0.3.4-v0.9.4 (🔥 видалено) |

Для іконок меню ви можете звернутися до [Unicode Symbols](https://unicode-table.com/en/) та [emoji](https://www.emojiall.com/en-US/).

### run-in

Вказує середовище, у яке впроваджується скрипт: `@run-in normal-tabs` для звичайних вкладок, `@run-in incognito-tabs` для вкладок у режимі інкогніто.

### early-start (v1.1.0+)

Коли `run-at` має значення `document-start`, скрипт запускається якомога раніше, але все одно не може гарантувати завантаження швидше, ніж сторінка.

Після визначення `@run-at document-start` ви можете додати `@early-start`, щоб скрипт завантажувався швидше, ніж сторінка: [приклад](https://github.com/scriptscat/scriptcat/blob/main/example/early-start.js)

### inject-into

:::tip

У середовищі скрипта вмісту (`content`) `unsafeWindow` вказує лише на власне поточне `window` середовища та не може отримати доступ до `window` сторінки.

ScriptCat не підтримує автоматичну перевірку обмежень CSP для вирішення, чи впроваджувати як `content` чи `page` (тобто `@inject-into auto` від Tampermonkey).

:::

Вказує, куди впроваджується скрипт, підтримуючи `page` і `content`, за замовчуванням `page`.

- `page`: скрипт впроваджується в середовище сторінки та може використовувати `unsafeWindow` для доступу до `window` і `DOM` сторінки
- `content`: скрипт впроваджується в середовище скрипта вмісту, не може безпосередньо отримати доступ до об'єкта `window` сторінки, але може отримати доступ до `DOM` сторінки та не підлягає `CSP`

### storageName 🧪

Простір зберігання для `Value`; дані під тим самим `storageName` можна спільно використовувати та передавати між скриптами. Це специфічно для ScriptCat.

### background

Позначає цей скрипт як фоновий, який має працювати у фоновому середовищі. Деталі дивіться в [Фоновий скрипт](./background.md#background-script-background).

### crontab

Позначає скрипт як запланований, що вимагає значення cron-виразу. Може існувати лише один cron-вираз, і він запускається за цим розкладом у фоновому середовищі. Деталі дивіться в [Запланований скрипт](./background.md#scheduled-script-crontab).

### match

Лише URL-адреси, які збігаються з `match`, запускатимуть скрипт, відповідно до [шаблонів зіставлення](https://developer.chrome.com/docs/extensions/mv3/match_patterns/). У `match` `*` — це підстановочний знак, `tld` збігається з доменом верхнього рівня, а домен, що починається з `*.`, також збігається з `xxx.com`:

| Значення                             | Правильні приклади                                                                                                                          | Неправильні приклади                          |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| `http://scriptcat.org/doc/match`  | `http://scriptcat.org/doc/match`                                                                                                            | `http://scriptcat.org/doc/runAt`         |
| `*://*/param?*`                   | `https://scriptcat.org/param` \| `http://scriptcat.org/param?search=tampermonkey`                                                            | `https://scriptcat.org/test/param`       |
| `*://*/prefix*suffix`             | `http://scriptcat.org/prefix/suffix` \| `http://scriptcat.org/prefix/mid/suffix` \| `http://scriptcat.org/prefixsuffix`                      | `http://scriptcat.org/prefix/suffix/end` |
| `http*://scriptcat.org/*`         | `https://scriptcat.org/` \| `https://scriptcat.org/doc` \| `http://scriptcat.org/doc/match` \| `http://scriptcat.org/param?search=tampermonkey` | `https://doc.scriptcat.org/`            |
| `http*://scriptcat.org/doc/*`     | `https://scriptcat.org/doc` \| `http://scriptcat.org/doc/match`                                                                              | `http://scriptcat.org/param?search=tampermonkey` |
| `http*://scriptcat.tld/doc/*`     | `https://scriptcat.cn/doc` \| `http://scriptcat.net.cn/doc/match`                                                                            | `http://google.com/param?search=tampermonkey` |
| `http*://*.scriptcat.org/doc/*`   | `https://scriptcat.cn/doc` \| `http://www.scriptcat.net.cn/doc/match`                                                                        | `http://google.com/param?search=tampermonkey` |

### include

Підтримує `\*` для нечіткого зіставлення, дозволяючи нестандартні URL

### exclude

URL, які не повинні збігатися; використовує той самий синтаксис виразів, що й `include`

### grant

Запитує дозвіл API — API можна викликати лише після запиту. Дивіться список дозволів у: [Документація API](./api.md) та [Документація CAT API](./cat-api.md).

Два особливі значення:

- **none**: скрипт не запускається в середовищі пісочниці, а безпосередньо в середовищі сторінки. У цьому середовищі жодні GM API недоступні, але можна безпосередньо отримати доступ до об'єкта `window` сторінки.
- **unsafeWindow**: у середовищі пісочниці, якщо потрібно отримати доступ до об'єкта `window` сторінки, використовуйте `unsafeWindow`. (Tampermonkey не вимагає оголошення цього — воно зберігається лише для сумісності, що, звісно, не дуже чисто.)

### connect

Запитує дозвіл доступу до сайту; дивіться `GM_cookie` і `GM_xmlhttpRequest`. `GM_download` у режимі `native` також поважає `@connect` (неоголошені хости запускають запит на підтвердження, на відміну від Tampermonkey)

### resource

Включає файл ресурсу. Після оголошення `@resource` ви можете використовувати `GM_getResourceText`/`GM_getResourceURL` для отримання інформації.

```js
// @resource icon https://bbs.tampermonkey.net.cn/favicon.ico
// @resource html https://bbs.tampermonkey.net.cn/
// @resource xml https://bbs.tampermonkey.net.cn/sitemap.xml
// Додавання перевірки цілісності ресурсу
// @resource icon https://bbs.tampermonkey.net.cn/favicon.ico#md5-xxx,sha256-xxx
```

### require

Включає зовнішній JS-файл; підтримує [перевірку цілісності ресурсу](#resource-integrity-verification)

### require-css

Включає зовнішній CSS-файл; підтримує [перевірку цілісності ресурсу](#resource-integrity-verification)

### noframes

Позначає скрипт як такий, що не запускається всередині `<frame>`

### definition

Адреса посилання файлу `.d.ts`, що вмикає підказки автодоповнення в редакторі

### antifeature

Це пов'язано з маркетплейсом скриптів; небажані функції потрібно позначати цим значенням опису, наприклад:

```js
// @antifeature ads This script has ads
// @antifeature referral-link This script modifies or redirects to the author's referral link
```

## Додаткові значення опису

### license

Ліцензія з відкритим кодом поточного скрипта

### updateURL

Перевірка оновлень вимагає, щоб віддалений скрипт мав тег `@version`, щоб це працювало.

Посилання, за яким скрипт перевіряє оновлення; якщо не встановлено, за замовчуванням використовується `user.js => meta.js` посилання, або поточне посилання, якщо `user.js` немає.

Якщо налаштовано `@updateURL`, для дії `@updateURL` також має бути налаштовано `@downloadURL`.

### downloadURL

Адреса завантаження оновлення скрипта

### supportURL

Сайт підтримки, сторінка звіту про помилки

### homepage, homepageURL, website

Домашня сторінка скрипта

### source

Сторінка вихідного коду скрипта

### icon, iconURL, defaulticon

Іконка скрипта

### icon64, icon64URL

Іконка скрипта розміром 64x64

### copyright

Інформація про авторські права скрипта

### tag

Теги скрипта, розділені комами або пробілами

### compatible

Інформація про сумісність, яка показується на GreasyFork

### scriptUrl

URL користувацького скрипта, на який посилається скрипт підписки

### unwrap

Дозволяє користувацькому скрипту обійти обгортку пісочниці та бути впровадженим і виконаним безпосередньо в рідній глобальній області сторінки. Скрипт може безпосередньо отримувати доступ і змінювати справжні глобальні змінні сторінки, але не зможе використовувати привілейовані API користувацьких скриптів, такі як `GM.*`. Зазвичай використовується в сценаріях, що вимагають глибокої взаємодії з рідними скриптами сторінки, або під час міграції існуючого звичайного скрипта сторінки.

### cloudCat

Позначає скрипт як експортований у пакет хмарного скрипта CloudCat (лише SC)

### cloudServer

Хмарний сервіс CloudCat, який використовує скрипт

### exportValue

Значення зберігання скрипта для експорту під час експорту як хмарного скрипта

### exportCookie

Cookie для експорту під час експорту як хмарного скрипта

### Примітки

### Перевірка цілісності ресурсу {#resource-integrity-verification}

- Використовуйте md5, sha1, sha256, sha384 або sha512 для перевірки ресурсів на підробку. Кілька методів перевірки можна розділити `;` або `,`.
- Відповідно до [рекомендацій W3C](https://w3c.github.io/webappsec-subresource-integrity/#hash-collision-attacks), md5 і sha1 не рекомендуються; натомість використовуйте sha384 або сильніший алгоритм хешування.

Наприклад:

```js
// @require https://cdn.jsdelivr.net/npm/darkmode-js@1.5.7/lib/darkmode-js.min.js#md5-d55836f30c097da753179f82fa6f108f,sha256-a476ab8560837a51938aa6e1720c8be87c2862b6221690e9de7ffac113811a90
```
