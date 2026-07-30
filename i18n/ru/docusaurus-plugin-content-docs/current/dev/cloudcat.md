---
title: Облачное выполнение
---

> Предоставляется несколько способов запуска в облаке; подробности см. в [Средах выполнения](#running-environments). Кроме того, [CloudCat](https://github.com/scriptscat/cloudcat) — сервис для запуска фоновых скриптов в облаке, FAAS-платформа, которая всё ещё в разработке.

⚠ Обратите внимание ⚠: после загрузки в облако смысл `once` в выражении скрипта по расписанию меняется: время до `once` при запуске заменяется на минимальное значение.

Например:

* `* * once * *` => `0 0 * * *`: один раз в день → запуск каждый день в 00:00
* `* 1-23 once * *` => `0 1 * * *`: один раз между 1:00 и 23:00 каждый день → запуск каждый день в 01:00
* `* 1,3,5 once * *` => `0 1 * * *`: один раз в 1:00, 3:00 или 5:00 каждый день → запуск каждый день в 01:00
* `* */4 once * *` => `0 0 * * *`: один раз каждые 4 часа каждый день → запуск каждый день в 00:00
* `* 1-23/4 once * *` => `0 1 * * *`: один раз каждые 4 часа между 1:00 и 23:00 → запуск каждый день в 01:00
* `* 10 once * *` => `0 10 * * *`: один раз в 10:00 каждый день → запуск в минуту 00 часа 10 каждый день
* `* * * once *` => `0 0 1 * *`: один раз в месяц → запуск в 00:00 1-го числа каждого месяца

## Дополнительные описательные значения CloudCat

Скрипт-пример: [Bilibili Auto Check-in](https://scriptcat.org/script-show-page/48)

### cloudCat

Объявление этого атрибута позволяет запускать скрипт через `CloudCat`. Когда у скрипта есть эта опция, в списке скриптов появляется кнопка облачного выполнения; по нажатию можно выбрать способ — см. [Среды выполнения](#running-environments).

![image-20220203225847694](@site/docs/dev/cloudcat.assets/image-20220203225847694.png)

### cloudServer

> Связано с cloudCat, ещё не реализовано

Адрес сервера cloudCat по умолчанию


### exportValue

Описывает Values для экспорта в облако; допускается несколько объявлений.

```ts
// @exportValue key1,key2,key3
// @exportValue key4,key5,key6
```

### exportCookie

Описывает cookies для экспорта в облако; допускается несколько объявлений. Параметры описываются через `CookieDetails` из `GM_cookie`, например:

```ts
// The following exports the cookie named cookie1 from https://docs.scriptcat.org/docs/use/
// @exportCookie url=https://docs.scriptcat.org/docs/use;name=cookie1

// This exports all cookies for the scriptcat.org domain
// @exportCookie domain=scriptcat.org

// All available parameters:
// @exportCookie domain=scriptcat.org;url=https://docs.scriptcat.org/docs/use;name=cookie1;path=/docs/use;secure=true;session=true
```

## Изменения поддержки API
> Сейчас поддерживаются только следующие API; если не указано иное, поведение совпадает с исходным API.

### GM_xmlhttpRequest


### GM_notification


### GM_log

### GM_getValue

Сейчас поддерживается только получение Values, экспортированных через `@exportValue`; set/delete/list и другие методы не поддерживаются.

## Среды выполнения {#running-environments}

### Локально

Экспортируется zip-пакет; после распаковки в папку выполните следующие команды для локального запуска (нужна локальная среда Node.js):

```bash
npm i
node index.js
```


### Tencent Cloud

Сначала создайте ключ Tencent Cloud в [**Access Keys**](https://console.cloud.tencent.com/cam/capi) — если используется субаккаунт, выдайте ему права Cloud Function. Затем включите сервис в [**Function Service**](https://console.cloud.tencent.com/scf/list); каждый месяц предоставляется определённый объём бесплатного использования. Регион по умолчанию — Shanghai; при необходимости измените. После нажатия «загрузить» по `@crontab` автоматически создаётся триггер по расписанию для регулярного запуска функции.

![image-20220203224956248](@site/docs/dev/cloudcat.assets/image-20220203224956248.png)
