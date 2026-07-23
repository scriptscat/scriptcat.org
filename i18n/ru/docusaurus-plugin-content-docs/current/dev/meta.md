---
title: Блок метаданных
---

Содержимое внутри `==UserScript==` описывает нужные скрипту разрешения, информацию о скрипте и т.д. Оно располагается в самом начале скрипта.

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

## Основные значения

### name

Имя скрипта

### namespace

Пространство имён скрипта. `name + namespace` определяет уникальность скрипта.

### version

Версия скрипта. Рекомендуется следовать [семантическому версионированию](https://semver.org/), чтобы при изменении версии пользователю предлагалось обновление и т.д.

### description

Подробное описание скрипта

### author

Автор скрипта

### run-at

Когда запускается скрипт

| Значение | Запуск | Поддерживается с |
| -------------- | ------------------------------------------------------------------ | ---------------------- |
| document-start | Внедряет скрипт на страницу, как только URL совпадает на фронтенде | v0.3.0 |
| document-end | Внедряет скрипт после загрузки DOM; скрипты страницы и изображения ещё могут загружаться | v0.3.0 |
| document-idle | Внедряет скрипт после полной загрузки всего содержимого | v0.3.0 |
| document-body | Скрипт внедряется только после появления элемента `body` | v0.6.2 |
| document-menu | Показывает меню по правому клику; при запуске скрипта в качестве имени меню используется имя скрипта | v0.3.4-v0.9.4 (🔥 удалено) |

Для иконок меню можно обратиться к [Unicode Symbols](https://unicode-table.com/en/) и [emoji](https://www.emojiall.com/en-US/).

### run-in

Указывает окружение внедрения скрипта: `@run-in normal-tabs` для обычных вкладок, `@run-in incognito-tabs` для вкладок инкогнито.

### early-start (v1.1.0+)

Когда `run-at` равен `document-start`, скрипт запускается как можно раньше, но всё равно не гарантирует загрузку быстрее страницы.

После объявления `@run-at document-start` можно добавить `@early-start`, чтобы скрипт загружался быстрее страницы: [пример](https://github.com/scriptscat/scriptcat/blob/main/example/early-start.js)

### inject-into

:::tip

В окружении content-script (`content`) `unsafeWindow` указывает только на собственный `window` окружения и не даёт доступ к `window` страницы.

ScriptCat не поддерживает автоматическую проверку ограничений CSP для выбора внедрения как `content` или `page` (т.е. `@inject-into auto` из Tampermonkey).

:::

Указывает, куда внедряется скрипт: поддерживаются `page` и `content`, по умолчанию `page`.

- `page`: скрипт внедряется в окружение страницы и может через `unsafeWindow` обращаться к `window` и `DOM` страницы
- `content`: скрипт внедряется в окружение content-script, не может напрямую обращаться к объекту `window` страницы, но может работать с `DOM` страницы и не подчиняется `CSP`

### storageName 🧪

Пространство хранения для `Value`; данные с одним и тем же `storageName` можно совместно использовать и обмениваться ими между скриптами. Специфично для ScriptCat.

### background

Помечает скрипт как фоновый, которому нужно работать в фоновом окружении. Подробности: [Фоновый скрипт](./background.md#background-script-background).

### crontab

Помечает скрипт как скрипт по расписанию; требуется значение cron-выражения. Допускается только одно cron-выражение; выполнение идёт по этому расписанию в фоновом окружении. Подробности: [Скрипт по расписанию](./background.md#scheduled-script-crontab).

### match

Скрипт запускается только для URL, совпадающих с `match`, по правилам [Match patterns](https://developer.chrome.com/docs/extensions/mv3/match_patterns/). В `match` `*` — подстановочный символ, `tld` соответствует домену верхнего уровня, а домен, начинающийся с `*.`, также совпадает с `xxx.com`:

| Значение | Корректные примеры | Некорректные примеры |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| `http://scriptcat.org/doc/match` | `http://scriptcat.org/doc/match` | `http://scriptcat.org/doc/runAt` |
| `*://*/param?*` | `https://scriptcat.org/param` \| `http://scriptcat.org/param?search=tampermonkey` | `https://scriptcat.org/test/param` |
| `*://*/prefix*suffix` | `http://scriptcat.org/prefix/suffix` \| `http://scriptcat.org/prefix/mid/suffix` \| `http://scriptcat.org/prefixsuffix` | `http://scriptcat.org/prefix/suffix/end` |
| `http*://scriptcat.org/*` | `https://scriptcat.org/` \| `https://scriptcat.org/doc` \| `http://scriptcat.org/doc/match` \| `http://scriptcat.org/param?search=tampermonkey` | `https://doc.scriptcat.org/` |
| `http*://scriptcat.org/doc/*` | `https://scriptcat.org/doc` \| `http://scriptcat.org/doc/match` | `http://scriptcat.org/param?search=tampermonkey` |
| `http*://scriptcat.tld/doc/*` | `https://scriptcat.cn/doc` \| `http://scriptcat.net.cn/doc/match` | `http://google.com/param?search=tampermonkey` |
| `http*://*.scriptcat.org/doc/*` | `https://scriptcat.cn/doc` \| `http://www.scriptcat.net.cn/doc/match` | `http://google.com/param?search=tampermonkey` |

### include

Поддерживает `\*` для нечёткого сопоставления, допускает нестандартные URL

### exclude

URL, которые не должны совпадать; синтаксис выражений тот же, что у `include`

### grant

Запрашивает разрешение API — API можно вызывать только после запроса. Список разрешений: [Документация API](./api.md) и [Документация CAT API](./cat-api.md).

Два особых значения:

- **none**: скрипт не выполняется в песочнице, а напрямую в окружении страницы. В этом окружении GM API недоступны, но к объекту `window` страницы можно обращаться напрямую.
- **unsafeWindow**: в песочнице для доступа к `window` страницы используйте `unsafeWindow`. (Tampermonkey не требует объявлять это — оставлено только для совместимости, что, честно говоря, не очень аккуратно.)

### connect

Запрашивает разрешение доступа к сайту; см. `GM_cookie` и `GM_xmlhttpRequest`. `GM_download` в режиме `native` также учитывает `@connect` (необъявленные хосты вызывают запрос подтверждения, в отличие от Tampermonkey)

### resource

Подключает файл ресурса. После объявления `@resource` информацию можно получить через `GM_getResourceText`/`GM_getResourceURL`.

```js
// @resource icon https://bbs.tampermonkey.net.cn/favicon.ico
// @resource html https://bbs.tampermonkey.net.cn/
// @resource xml https://bbs.tampermonkey.net.cn/sitemap.xml
// Adding resource integrity verification
// @resource icon https://bbs.tampermonkey.net.cn/favicon.ico#md5-xxx,sha256-xxx
```

### require

Подключает внешний JS-файл; поддерживает [проверку целостности ресурса](#resource-integrity-verification)

### require-css

Подключает внешний CSS-файл; поддерживает [проверку целостности ресурса](#resource-integrity-verification)

### noframes

Помечает, что скрипт не должен выполняться внутри `<frame>`

### definition

Адрес ссылки на файл `.d.ts`, включающий подсказки автодополнения в редакторе

### antifeature

Связано с маркетплейсом скриптов; нежелательные возможности нужно помечать этим описательным значением, например:

```js
// @antifeature ads This script has ads
// @antifeature referral-link This script modifies or redirects to the author's referral link
```

## Дополнительные описательные значения

### license

Лицензия с открытым исходным кодом текущего скрипта

### updateURL

Для проверки обновлений у удалённого скрипта должен быть тег `@version`.

Ссылка, по которой скрипт проверяет обновления; если не задана, по умолчанию используется `user.js => meta.js` ссылки либо текущая ссылка, если `user.js` нет.

Если настроен `@updateURL`, для его действия также нужно настроить `@downloadURL`.

### downloadURL

Адрес загрузки обновления скрипта

### supportURL

Сайт поддержки, страница сообщений об ошибках

### homepage, homepageURL, website

Домашняя страница скрипта

### source

Страница исходного кода скрипта

### icon, iconURL, defaulticon

Иконка скрипта

### icon64, icon64URL

Иконка скрипта размером 64x64

### Примечания

### Проверка целостности ресурса {#resource-integrity-verification}

- Используйте md5, sha1, sha256, sha384 или sha512 для проверки ресурсов на подмену. Несколько методов проверки можно разделить `;` или `,`.
- Согласно [рекомендациям W3C](https://w3c.github.io/webappsec-subresource-integrity/#hash-collision-attacks), md5 и sha1 не рекомендуются; используйте sha384 или более сильный алгоритм хеширования.

Например:

```js
// @require https://cdn.jsdelivr.net/npm/darkmode-js@1.5.7/lib/darkmode-js.min.js#md5-d55836f30c097da753179f82fa6f108f,sha256-a476ab8560837a51938aa6e1720c8be87c2862b6221690e9de7ffac113811a90
```
