---
title: API DOM
---

`@grant CAT.agent.dom`

API DOM предоставляет полный набор возможностей автоматизации страниц браузера: навигацию, чтение содержимого, скриншоты, взаимодействие с формами и мониторинг DOM.

## Управление вкладками

### listTabs — список вкладок

```javascript
const tabs = await CAT.agent.dom.listTabs();
```

Возвращает информацию о каждой открытой вкладке.

**Возвращаемое значение, TabInfo[]:**

| Поле | Тип | Описание |
|------|------|------|
| `tabId` | `number` | ID вкладки |
| `url` | `string` | Текущий URL |
| `title` | `string` | Заголовок страницы |
| `active` | `boolean` | Является ли текущей активной вкладкой |
| `windowId` | `number` | ID окна, которому принадлежит |
| `discarded` | `boolean` | Была ли выгружена (приостановлена) |

## Навигация

### navigate — перейти на страницу

```javascript
const result = await CAT.agent.dom.navigate(url, options?);
```

**Параметры:**

| Параметр | Тип | По умолчанию | Описание |
|------|------|--------|------|
| `url` | `string` | — | Целевой URL (обязательно) |
| `options.tabId` | `number` | текущая активная вкладка | Указать вкладку |
| `options.waitUntil` | `boolean` | `true` | Ждать ли окончания загрузки страницы |
| `options.timeout` | `number` | `30000` | Таймаут в миллисекундах |

**Возвращаемое значение, NavigateResult:**

```typescript
{ tabId: number; url: string; title: string }
```

## Чтение содержимого

### readPage — прочитать содержимое страницы

```javascript
const page = await CAT.agent.dom.readPage(options?);
```

Преобразует DOM страницы в структурированный текст, автоматически удаляя нерелевантные элементы вроде `<script>`, `<style>`, `<noscript>`, `<svg>` и `<link[rel=stylesheet]>`.

**Параметры:**

| Параметр | Тип | По умолчанию | Описание |
|------|------|--------|------|
| `options.tabId` | `number` | текущая активная вкладка | Указать вкладку |
| `options.selector` | `string` | — | CSS-селектор; возвращает только содержимое совпадающих элементов |
| `options.maxLength` | `number` | — | Максимальное число символов; сверх — обрезка |
| `options.removeTags` | `string[]` | — | Дополнительные имена тегов для удаления |

**Возвращаемое значение, PageContent:**

| Поле | Тип | Описание |
|------|------|------|
| `title` | `string` | Заголовок страницы |
| `url` | `string` | URL страницы |
| `html` | `string` | Обработанное текстовое содержимое страницы |
| `truncated` | `boolean` | Было ли содержимое обрезано |
| `totalLength` | `number` | Исходная полная длина содержимого |

### screenshot — сделать скриншот

```javascript
const shot = await CAT.agent.dom.screenshot(options?);
```

**Параметры:**

| Параметр | Тип | По умолчанию | Описание |
|------|------|--------|------|
| `options.tabId` | `number` | текущая активная вкладка | Указать вкладку |
| `options.quality` | `number` | `80` | Качество JPEG (0-100) |
| `options.fullPage` | `boolean` | `false` | Снять всю страницу |
| `options.selector` | `string` | — | CSS-селектор; снимает только область совпадающего элемента |
| `options.saveTo` | `string` | — | Путь сохранения в рабочем пространстве OPFS |

**Возвращаемое значение, ScreenshotResult:**

| Поле | Тип | Описание |
|------|------|------|
| `dataUrl` | `string` | Data URL в base64 |
| `path` | `string` | Путь сохранения в OPFS (если использован `saveTo`) |
| `size` | `number` | Размер файла (если использован `saveTo`) |

**Выбор режима скриншота:**

| Сценарий | Поведение |
|------|------|
| Используется `selector` | Границы элемента находятся через CDP, скриншот обрезается |
| Фоновая вкладка | Пытается CDP-скриншот; при неудаче активирует вкладку и использует `captureVisibleTab` |
| Передняя вкладка | Сразу использует `captureVisibleTab` |

```javascript
// Save a screenshot to OPFS
const shot = await CAT.agent.dom.screenshot({
  saveTo: "screenshots/page.png",
  quality: 90
});
console.log(`Saved to ${shot.path}, size ${shot.size} bytes`);
```

## Взаимодействие со страницей

### click — клик по элементу

```javascript
const result = await CAT.agent.dom.click(selector, options?);
```

**Параметры:**

| Параметр | Тип | По умолчанию | Описание |
|------|------|--------|------|
| `selector` | `string` | — | CSS-селектор (обязательно) |
| `options.tabId` | `number` | текущая активная вкладка | Указать вкладку |
| `options.trusted` | `boolean` | `false` | Использовать CDP для настоящего события мыши |

**Возвращаемое значение, ActionResult:**

| Поле | Тип | Описание |
|------|------|------|
| `success` | `boolean` | Успешность |
| `navigated` | `boolean` | Привёл ли клик к навигации страницы |
| `url` | `string` | Новый URL после навигации |
| `newTab` | `boolean` | Была ли открыта новая вкладка |

**trusted и обычный клик:**

- `trusted: false` (по умолчанию) — симулирует `element.click()` через внедрённый JS; быстро, но некоторые сайты могут распознать как ненастоящее событие
- `trusted: true` — отправляет настоящее событие мыши через Chrome DevTools Protocol, ведёт себя как действие реального пользователя, но требует разрешение debugger

### fill — заполнить форму

```javascript
const result = await CAT.agent.dom.fill(selector, value, options?);
```

**Параметры:**

| Параметр | Тип | Описание |
|------|------|------|
| `selector` | `string` | CSS-селектор (обязательно) |
| `value` | `string` | Значение для ввода (обязательно) |
| `options.tabId` | `number` | Указать вкладку |
| `options.trusted` | `boolean` | Использовать CDP для имитации ввода с клавиатуры |

**Поведение:**
- Обычный режим: устанавливает `element.value` и отправляет событие `input`
- Режим trusted: CDP фокусирует элемент → вводит посимвольно

### scroll — прокрутить страницу

```javascript
const result = await CAT.agent.dom.scroll(direction, options?);
```

**Параметры:**

| Параметр | Тип | Описание |
|------|------|------|
| `direction` | `"up" \| "down" \| "top" \| "bottom"` | Направление прокрутки (обязательно) |
| `options.tabId` | `number` | Указать вкладку |
| `options.selector` | `string` | Прокрутить конкретный контейнер вместо всей страницы |

**Возвращаемое значение, ScrollResult:**

| Поле | Тип | Описание |
|------|------|------|
| `scrollTop` | `number` | Позиция прокрутки после действия |
| `scrollHeight` | `number` | Полная высота содержимого |
| `clientHeight` | `number` | Высота видимой области |
| `atBottom` | `boolean` | Достигнут ли низ |

### waitFor — ждать элемент

```javascript
const result = await CAT.agent.dom.waitFor(selector, options?);
```

Опрашивает появление указанного элемента на странице (проверка каждые 500 мс).

**Параметры:**

| Параметр | Тип | По умолчанию | Описание |
|------|------|--------|------|
| `selector` | `string` | — | CSS-селектор (обязательно) |
| `options.tabId` | `number` | текущая активная вкладка | Указать вкладку |
| `options.timeout` | `number` | `10000` | Таймаут в миллисекундах |

**Возвращаемое значение, WaitForResult:**

| Поле | Тип | Описание |
|------|------|------|
| `found` | `boolean` | Найден ли элемент |
| `element` | `object` | Информация об элементе (только при found=true) |
| `element.selector` | `string` | Совпавший селектор |
| `element.tag` | `string` | Имя тега |
| `element.text` | `string` | Текстовое содержимое |
| `element.role` | `string` | ARIA role |
| `element.type` | `string` | input type |
| `element.visible` | `boolean` | Видимость |

## Выполнение скриптов

### executeScript — выполнить JavaScript

```javascript
const result = await CAT.agent.dom.executeScript(code, options?);
```

**Параметры:**

| Параметр | Тип | По умолчанию | Описание |
|------|------|--------|------|
| `code` | `string` | — | Код JavaScript (обязательно) |
| `options.tabId` | `number` | текущая активная вкладка | Указать вкладку |
| `options.world` | `"MAIN" \| "ISOLATED"` | `"ISOLATED"` | Окружение выполнения |

**Два окружения выполнения:**

| Окружение | Описание | Сценарий |
|------|------|---------|
| **ISOLATED** | Изолированное окружение расширения, отделённое от JS страницы | Манипуляции DOM, чтение контента, использование blob URL расширения |
| **MAIN** | Собственное окружение страницы, общий объект `window` | Вызов JS-функций страницы, чтение переменных страницы |

```javascript
// ISOLATED — safely read the DOM
const title = await CAT.agent.dom.executeScript(
  "return document.querySelector('h1')?.textContent",
  { world: "ISOLATED" }
);

// MAIN — call a JS function on the page
const data = await CAT.agent.dom.executeScript(
  "return window.__APP_STATE__",
  { world: "MAIN" }
);
```

> Код оборачивается в `new Function()` для выполнения и поддерживает `return`. Таймаут — 30 секунд.

## Мониторинг DOM

Отслеживает изменения DOM и события диалогов на странице через Chrome DevTools Protocol.

### startMonitor — начать мониторинг

```javascript
await CAT.agent.dom.startMonitor(tabId);
```

Начинает мониторинг изменений DOM и диалогов (alert/confirm/prompt) на указанной вкладке.

### stopMonitor — остановить мониторинг

```javascript
const result = await CAT.agent.dom.stopMonitor(tabId);
```

Останавливает мониторинг и возвращает собранные изменения.

**Возвращаемое значение, MonitorResult:**

| Поле | Тип | Описание |
|------|------|------|
| `dialogs` | `Array<{ type, message }>` | Список диалогов |
| `addedNodes` | `Array<{ tag, id?, class?, role?, text }>` | Сводка вновь добавленных узлов DOM |

### peekMonitor — проверить статус мониторинга

```javascript
const status = await CAT.agent.dom.peekMonitor(tabId);
```

Неразрушающе проверяет текущий статус мониторинга.

**Возвращаемое значение, MonitorStatus:**

| Поле | Тип | Описание |
|------|------|------|
| `hasChanges` | `boolean` | Есть ли изменения |
| `dialogCount` | `number` | Число диалогов |
| `nodeCount` | `number` | Число вновь добавленных узлов |

## Полный пример

```javascript
// ==UserScript==
// @name        Automatic Form Filling
// @match       https://example.com/form
// @grant       CAT.agent.dom
// ==/UserScript==

// Wait for the form to load
await CAT.agent.dom.waitFor("form#signup", { timeout: 5000 });

// Fill in the form
await CAT.agent.dom.fill("input[name=username]", "test_user");
await CAT.agent.dom.fill("input[name=email]", "test@example.com");

// Check the agreement checkbox
await CAT.agent.dom.click("input[type=checkbox]#agree");

// Screenshot the filled-in result
await CAT.agent.dom.screenshot({
  selector: "form#signup",
  saveTo: "screenshots/form-filled.png"
});

// Click submit
const result = await CAT.agent.dom.click("button[type=submit]", { trusted: true });
if (result.navigated) {
  console.log("Form submitted successfully, navigated to:", result.url);
}
```
