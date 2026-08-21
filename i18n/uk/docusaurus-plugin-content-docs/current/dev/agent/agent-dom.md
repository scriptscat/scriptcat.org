---
title: API операцій з DOM
---

`@grant CAT.agent.dom`

API операцій з DOM надає повну автоматизацію сторінок браузера: навігацію, читання вмісту, скріншоти, взаємодію з формами та моніторинг DOM.

## Керування вкладками

### listTabs — список вкладок

```javascript
const tabs = await CAT.agent.dom.listTabs();
```

Повертає інформацію про кожну відкриту вкладку.

**Повертає `TabInfo[]`:**

| Поле | Тип | Опис |
|------|------|------|
| `tabId` | `number` | ID вкладки |
| `url` | `string` | Поточна URL |
| `title` | `string` | Назва сторінки |
| `active` | `boolean` | Чи є це поточно активною вкладкою |
| `windowId` | `number` | ID вікна, до якого вона належить |
| `discarded` | `boolean` | Чи була вона викинута (призупинена) |

## Навігація

### navigate — навігація сторінкою

```javascript
const result = await CAT.agent.dom.navigate(url, options?);
```

**Параметри:**

| Параметр | Тип | За замовчуванням | Опис |
|------|------|--------|------|
| `url` | `string` | — | Цільова URL (обов'язково) |
| `options.tabId` | `number` | поточна активна вкладка | Яку вкладку використовувати |
| `options.waitUntil` | `boolean` | `true` | Чи чекати завершення завантаження сторінки |
| `options.timeout` | `number` | `30000` | Час очікування в мілісекундах |

**Повертає `NavigateResult`:**

```typescript
{ tabId: number; url: string; title: string }
```

## Читання вмісту

### readPage — читання вмісту сторінки

```javascript
const page = await CAT.agent.dom.readPage(options?);
```

Перетворює DOM сторінки на структурований текст, автоматично видаляючи нерелевантні елементи, такі як `<script>`, `<style>`, `<noscript>`, `<svg>` та `<link[rel=stylesheet]>`.

**Параметри:**

| Параметр | Тип | За замовчуванням | Опис |
|------|------|--------|------|
| `options.tabId` | `number` | поточна активна вкладка | Яку вкладку використовувати |
| `options.selector` | `string` | — | CSS-селектор; повертається лише вміст збіглого елемента |
| `options.maxLength` | `number` | — | Максимальна кількість символів вмісту; далі обрізається |
| `options.removeTags` | `string[]` | — | Додаткові назви тегів для видалення |

**Повертає `PageContent`:**

| Поле | Тип | Опис |
|------|------|------|
| `title` | `string` | Назва сторінки |
| `url` | `string` | URL сторінки |
| `html` | `string` | Оброблений текстовий вміст сторінки |
| `truncated` | `boolean` | Чи був вміст обрізаний |
| `totalLength` | `number` | Загальна довжина оригінального вмісту |

### screenshot — зробити скріншот

```javascript
const shot = await CAT.agent.dom.screenshot(options?);
```

**Параметри:**

| Параметр | Тип | За замовчуванням | Опис |
|------|------|--------|------|
| `options.tabId` | `number` | поточна активна вкладка | Яку вкладку використовувати |
| `options.quality` | `number` | `80` | Якість JPEG (0-100) |
| `options.fullPage` | `boolean` | `false` | Захопити всю сторінку |
| `options.selector` | `string` | — | CSS-селектор; захопити лише область збіглого елемента |
| `options.saveTo` | `string` | — | Шлях для збереження в робочому просторі OPFS |

**Повертає `ScreenshotResult`:**

| Поле | Тип | Опис |
|------|------|------|
| `dataUrl` | `string` | base64 data URL |
| `path` | `string` | Шлях збереження OPFS (коли використовується `saveTo`) |
| `size` | `number` | Розмір файлу (коли використовується `saveTo`) |

**Як вибирається режим захоплення:**

| Сценарій | Поведінка |
|------|------|
| `selector` вказано | Знаходить межі елемента через CDP і обрізає скріншот |
| Фонова вкладка | Пробує скріншот CDP; якщо не вдається, активує вкладку та використовує `captureVisibleTab` |
| Вкладка на передньому плані | Використовує `captureVisibleTab` безпосередньо |

```javascript
// Зберегти скріншот в OPFS
const shot = await CAT.agent.dom.screenshot({
  saveTo: "screenshots/page.png",
  quality: 90
});
console.log(`Saved to ${shot.path}, size ${shot.size} bytes`);
```

## Взаємодія зі сторінкою

### click — клік по елементу

```javascript
const result = await CAT.agent.dom.click(selector, options?);
```

**Параметри:**

| Параметр | Тип | За замовчуванням | Опис |
|------|------|--------|------|
| `selector` | `string` | — | CSS-селектор (обов'язково) |
| `options.tabId` | `number` | поточна активна вкладка | Яку вкладку використовувати |
| `options.trusted` | `boolean` | `false` | Використовувати CDP для надсилання реальної події миші |

**Повертає `ActionResult`:**

| Поле | Тип | Опис |
|------|------|------|
| `success` | `boolean` | Чи вдалося |
| `navigated` | `boolean` | Чи викликав клік навігацію сторінкою |
| `url` | `string` | Нова URL після навігації |
| `newTab` | `boolean` | Чи відкрилася нова вкладка |

**`trusted` проти звичайного кліку:**

- `trusted: false` (за замовчуванням) — імітує `element.click()` через впроваджений JS; швидко, але деякі сайти можуть виявити це як несправжню подію
- `trusted: true` — надсилає реальну подію миші через Chrome DevTools Protocol, не відрізнити від реальної взаємодії користувача, але потребує дозволу налагоджувача

### fill — заповнення поля форми

```javascript
const result = await CAT.agent.dom.fill(selector, value, options?);
```

**Параметри:**

| Параметр | Тип | Опис |
|------|------|------|
| `selector` | `string` | CSS-селектор (обов'язково) |
| `value` | `string` | Значення для заповнення (обов'язково) |
| `options.tabId` | `number` | Яку вкладку використовувати |
| `options.trusted` | `boolean` | Використовувати CDP для імітації введення з клавіатури |

**Поведінка:**
- Звичайний режим: встановлює `element.value` і надсилає подію `input`
- Довірений режим: CDP фокусує елемент → друкує символ за символом

### scroll — прокрутка сторінки

```javascript
const result = await CAT.agent.dom.scroll(direction, options?);
```

**Параметри:**

| Параметр | Тип | Опис |
|------|------|------|
| `direction` | `"up" \| "down" \| "top" \| "bottom"` | Напрямок прокрутки (обов'язково) |
| `options.tabId` | `number` | Яку вкладку використовувати |
| `options.selector` | `string` | Прокрутити конкретний контейнер замість усієї сторінки |

**Повертає `ScrollResult`:**

| Поле | Тип | Опис |
|------|------|------|
| `scrollTop` | `number` | Позиція прокрутки після прокрутки |
| `scrollHeight` | `number` | Загальна висота вмісту |
| `clientHeight` | `number` | Висота області перегляду |
| `atBottom` | `boolean` | Чи прокручено донизу |

### waitFor — очікування елемента

```javascript
const result = await CAT.agent.dom.waitFor(selector, options?);
```

Опитує, поки вказаний елемент не з'явиться на сторінці (перевірка кожні 500 мс).

**Параметри:**

| Параметр | Тип | За замовчуванням | Опис |
|------|------|--------|------|
| `selector` | `string` | — | CSS-селектор (обов'язково) |
| `options.tabId` | `number` | поточна активна вкладка | Яку вкладку використовувати |
| `options.timeout` | `number` | `10000` | Час очікування в мілісекундах |

**Повертає `WaitForResult`:**

| Поле | Тип | Опис |
|------|------|------|
| `found` | `boolean` | Чи знайдено елемент |
| `element` | `object` | Інформація про елемент (лише коли `found=true`) |
| `element.selector` | `string` | Збіглий селектор |
| `element.tag` | `string` | Назва тега |
| `element.text` | `string` | Текстовий вміст |
| `element.role` | `string` | Роль ARIA |
| `element.type` | `string` | тип input |
| `element.visible` | `boolean` | Чи видимий |

## Виконання скриптів

### executeScript — запуск JavaScript

```javascript
const result = await CAT.agent.dom.executeScript(code, options?);
```

**Параметри:**

| Параметр | Тип | За замовчуванням | Опис |
|------|------|--------|------|
| `code` | `string` | — | Код JavaScript (обов'язково) |
| `options.tabId` | `number` | поточна активна вкладка | Яку вкладку використовувати |

> Код завжди виконується в **MAIN світі** сторінки (ділиться тим самим об'єктом `window`, що й власний JS сторінки), тому він може викликати власні функції сторінки та читати змінні сторінки безпосередньо — але з тієї ж причини він **не може отримати доступ до blob URL розширення** (напр. `blob:` URL, створений через `URL.createObjectURL()` з `Blob`, повернутого `CAT.agent.opfs.read` у режимі `"blob"`), оскільки blob URL обмежені власним походженням розширення. Якщо вам потрібно працювати з blob URL в ізольованому контексті, використовуйте натомість SkillScript (див. [Розробка Skill](../skill-dev)).

```javascript
// Викликати власну JS-функцію сторінки / прочитати змінну сторінки
const data = await CAT.agent.dom.executeScript(
  "return window.__APP_STATE__"
);

// Читання вмісту DOM
const title = await CAT.agent.dom.executeScript(
  "return document.querySelector('h1')?.textContent"
);
```

> Код обгортається у `new Function()` для виконання та підтримує значення `return`. Час очікування — 30 секунд.

## Моніторинг DOM

Використовує Chrome DevTools Protocol для моніторингу змін DOM і подій діалогів на сторінці.

### startMonitor — почати моніторинг

```javascript
await CAT.agent.dom.startMonitor(tabId);
```

Починає моніторинг вказаної вкладки на предмет змін DOM і діалогів (alert/confirm/prompt).

### stopMonitor — зупинити моніторинг

```javascript
const result = await CAT.agent.dom.stopMonitor(tabId);
```

Зупиняє моніторинг і повертає зібрані зміни.

**Повертає `MonitorResult`:**

| Поле | Тип | Опис |
|------|------|------|
| `dialogs` | `Array<{ type, message }>` | Список діалогів |
| `addedNodes` | `Array<{ tag, id?, class?, role?, text }>` | Підсумок нових вузлів DOM |

> `addedNodes` дедуплікується за ID вузла та обмежується 50 записами; вузли, які з тих пір були видалені зі сторінки або не видимі, автоматично пропускаються. `text` — це звичайний текст, витягнутий з `outerHTML` вузла, обрізаний до 300 символів.

### peekMonitor — перевірка статусу моніторингу

```javascript
const status = await CAT.agent.dom.peekMonitor(tabId);
```

Недеструктивно перевіряє поточний статус моніторингу.

**Повертає `MonitorStatus`:**

| Поле | Тип | Опис |
|------|------|------|
| `hasChanges` | `boolean` | Чи є зміни |
| `dialogCount` | `number` | Кількість діалогів |
| `nodeCount` | `number` | Кількість нових вузлів |

## Повний приклад

```javascript
// ==UserScript==
// @name        Auto form filler
// @match       https://example.com/form
// @grant       CAT.agent.dom
// ==/UserScript==

// Чекати завантаження форми
await CAT.agent.dom.waitFor("form#signup", { timeout: 5000 });

// Заповнити форму
await CAT.agent.dom.fill("input[name=username]", "test_user");
await CAT.agent.dom.fill("input[name=email]", "test@example.com");

// Позначити прапорець згоди
await CAT.agent.dom.click("input[type=checkbox]#agree");

// Зробити скріншот заповненої форми
await CAT.agent.dom.screenshot({
  selector: "form#signup",
  saveTo: "screenshots/form-filled.png"
});

// Натиснути «Надіслати»
const result = await CAT.agent.dom.click("button[type=submit]", { trusted: true });
if (result.navigated) {
  console.log("Form submitted successfully, navigated to:", result.url);
}
```
