---
title: DOM մանիպուլյացիայի API
---

`@grant CAT.agent.dom`

DOM մանիպուլյացիայի API-ն ապահովում է զննարկչի էջի ամբողջական ավտոմատացում. նավիգացիա, բովանդակության ընթերցում, սքրինշոթներ, ձևերի հետ փոխազդեցություն և DOM մոնիտորինգ:

## Ներդիրների կառավարում

### listTabs — ներդիրների ցուցակագրում

```javascript
const tabs = await CAT.agent.dom.listTabs();
```

Վերադարձնում է տեղեկատվություն յուրաքանչյուր բաց ներդիրի մասին:

**Վերադարձնում է `TabInfo[]`՝**

| Դաշտ | Տիպ | Նկարագրություն |
|------|------|------|
| `tabId` | `number` | Ներդիրի ID |
| `url` | `string` | Ընթացիկ URL |
| `title` | `string` | Էջի վերնագիր |
| `active` | `boolean` | Արդյոք սա ներկայումս ակտիվ ներդիրն է |
| `windowId` | `number` | Այն պատկանող պատուհանի ID |
| `discarded` | `boolean` | Արդյոք այն դեն նետվել է (կասեցված) |

## Նավիգացիա

### navigate — էջի նավիգացիա

```javascript
const result = await CAT.agent.dom.navigate(url, options?);
```

**Պարամետրեր՝**

| Պարամետր | Տիպ | Լռելյայն | Նկարագրություն |
|------|------|--------|------|
| `url` | `string` | — | Թիրախային URL (պարտադիր) |
| `options.tabId` | `number` | ընթացիկ ակտիվ ներդիր | Որ ներդիրն օգտագործել |
| `options.waitUntil` | `boolean` | `true` | Արդյոք սպասել էջի բեռնման ավարտին |
| `options.timeout` | `number` | `30000` | Թայմաութ միլիվայրկյաններով |

**Վերադարձնում է `NavigateResult`՝**

```typescript
{ tabId: number; url: string; title: string }
```

## Բովանդակության ընթերցում

### readPage — էջի բովանդակության ընթերցում

```javascript
const page = await CAT.agent.dom.readPage(options?);
```

Փոխակերպում է էջի DOM-ը կառուցվածքային տեքստի՝ ավտոմատ կերպով հեռացնելով անկապ տարրերը, ինչպիսիք են `<script>`-ը, `<style>`-ը, `<noscript>`-ը, `<svg>`-ը և `<link[rel=stylesheet]>`-ը:

**Պարամետրեր՝**

| Պարամետր | Տիպ | Լռելյայն | Նկարագրություն |
|------|------|--------|------|
| `options.tabId` | `number` | ընթացիկ ակտիվ ներդիր | Որ ներդիրն օգտագործել |
| `options.selector` | `string` | — | CSS սելեկտոր. վերադարձվում է միայն համընկնած տարրի բովանդակությունը |
| `options.maxLength` | `number` | — | Բովանդակության առավելագույն նիշեր. դրանից ավելին կտրվում է |
| `options.removeTags` | `string[]` | — | Հեռացվող լրացուցիչ պիտակների անուններ |

**Վերադարձնում է `PageContent`՝**

| Դաշտ | Տիպ | Նկարագրություն |
|------|------|------|
| `title` | `string` | Էջի վերնագիր |
| `url` | `string` | Էջի URL |
| `html` | `string` | Մշակված էջի տեքստային բովանդակություն |
| `truncated` | `boolean` | Արդյոք բովանդակությունը կտրվել է |
| `totalLength` | `number` | Բնօրինակ բովանդակության ընդհանուր երկարությունը |

### screenshot — սքրինշոթի նկարահանում

```javascript
const shot = await CAT.agent.dom.screenshot(options?);
```

**Պարամետրեր՝**

| Պարամետր | Տիպ | Լռելյայն | Նկարագրություն |
|------|------|--------|------|
| `options.tabId` | `number` | ընթացիկ ակտիվ ներդիր | Որ ներդիրն օգտագործել |
| `options.quality` | `number` | `80` | JPEG որակ (0-100) |
| `options.fullPage` | `boolean` | `false` | Նկարահանել ամբողջ էջը |
| `options.selector` | `string` | — | CSS սելեկտոր. նկարահանել միայն համընկնած տարրի տարածքը |
| `options.saveTo` | `string` | — | Պահպանման ուղի OPFS աշխատանքային տարածքում |

**Վերադարձնում է `ScreenshotResult`՝**

| Դաշտ | Տիպ | Նկարագրություն |
|------|------|------|
| `dataUrl` | `string` | base64 տվյալների URL |
| `path` | `string` | OPFS պահպանման ուղի (երբ օգտագործվում է `saveTo`) |
| `size` | `number` | Ֆայլի չափ (երբ օգտագործվում է `saveTo`) |

**Ինչպե՞ս է ընտրվում նկարահանման ռեժիմը՝**

| Սցենար | Վարքագիծ |
|------|------|
| `selector` տրված է | Գտնում է տարրի սահմանները CDP-ի միջոցով և կտրում է սքրինշոթը |
| Ֆոնային ներդիր | Փորձում է CDP սքրինշոթ. եթե ձախողվում է, ակտիվացնում է ներդիրը և օգտագործում `captureVisibleTab` |
| Առաջին պլանի ներդիր | Ուղղակիորեն օգտագործում է `captureVisibleTab` |

```javascript
// Save a screenshot to OPFS
const shot = await CAT.agent.dom.screenshot({
  saveTo: "screenshots/page.png",
  quality: 90
});
console.log(`Saved to ${shot.path}, size ${shot.size} bytes`);
```

## Էջի հետ փոխազդեցություն

### click — տարրի վրա սեղմում

```javascript
const result = await CAT.agent.dom.click(selector, options?);
```

**Պարամետրեր՝**

| Պարամետր | Տիպ | Լռելյայն | Նկարագրություն |
|------|------|--------|------|
| `selector` | `string` | — | CSS սելեկտոր (պարտադիր) |
| `options.tabId` | `number` | ընթացիկ ակտիվ ներդիր | Որ ներդիրն օգտագործել |
| `options.trusted` | `boolean` | `false` | Օգտագործել CDP-ն՝ իրական մկնիկի իրադարձություն ուղարկելու համար |

**Վերադարձնում է `ActionResult`՝**

| Դաշտ | Տիպ | Նկարագրություն |
|------|------|------|
| `success` | `boolean` | Արդյոք հաջողվեց |
| `navigated` | `boolean` | Արդյոք սեղմումը հրահրեց էջի նավիգացիա |
| `url` | `string` | Նավիգացիայից հետո նոր URL |
| `newTab` | `boolean` | Արդյոք նոր ներդիր բացվեց |

**`trusted` ընդդեմ սովորական սեղմման՝**

- `trusted: false` (լռելյայն) — նմանակում է `element.click()`-ը ներարկված JS-ի միջոցով. արագ է, բայց որոշ կայքեր կարող են այն հայտնաբերել որպես ոչ իսկական իրադարձություն
- `trusted: true` — ուղարկում է իրական մկնիկի իրադարձություն Chrome DevTools Protocol-ի միջոցով, անտարբերելի իրական օգտագործողի փոխազդեցությունից, բայց պահանջում է վրիպազերծիչի թույլտվություն

### fill — ձևի դաշտի լրացում

```javascript
const result = await CAT.agent.dom.fill(selector, value, options?);
```

**Պարամետրեր՝**

| Պարամետր | Տիպ | Նկարագրություն |
|------|------|------|
| `selector` | `string` | CSS սելեկտոր (պարտադիր) |
| `value` | `string` | Լրացվող արժեք (պարտադիր) |
| `options.tabId` | `number` | Որ ներդիրն օգտագործել |
| `options.trusted` | `boolean` | Օգտագործել CDP-ն՝ ստեղնաշարի մուտքագրումը նմանակելու համար |

**Վարքագիծ.**
- Նորմալ ռեժիմ. սահմանում է `element.value` և ուղարկում է `input` իրադարձություն
- Վստահելի ռեժիմ. CDP-ն ֆոկուսավորում է տարրը → մուտքագրում է նիշ առ նիշ

### scroll — էջի ոլորում

```javascript
const result = await CAT.agent.dom.scroll(direction, options?);
```

**Պարամետրեր՝**

| Պարամետր | Տիպ | Նկարագրություն |
|------|------|------|
| `direction` | `"up" \| "down" \| "top" \| "bottom"` | Ոլորման ուղղություն (պարտադիր) |
| `options.tabId` | `number` | Որ ներդիրն օգտագործել |
| `options.selector` | `string` | Ոլորել կոնկրետ կոնտեյներ՝ ամբողջ էջի փոխարեն |

**Վերադարձնում է `ScrollResult`՝**

| Դաշտ | Տիպ | Նկարագրություն |
|------|------|------|
| `scrollTop` | `number` | Ոլորման դիրքը ոլորումից հետո |
| `scrollHeight` | `number` | Բովանդակության ընդհանուր բարձրությունը |
| `clientHeight` | `number` | Դիտափորկի բարձրությունը |
| `atBottom` | `boolean` | Արդյոք այժմ ոլորված է մինչև ներքև |

### waitFor — տարրի սպասում

```javascript
const result = await CAT.agent.dom.waitFor(selector, options?);
```

Հարցում է կատարում նշված տարրի էջում հայտնվելու համար (ստուգելով յուրաքանչյուր 500մվ):

**Պարամետրեր՝**

| Պարամետր | Տիպ | Լռելյայն | Նկարագրություն |
|------|------|--------|------|
| `selector` | `string` | — | CSS սելեկտոր (պարտադիր) |
| `options.tabId` | `number` | ընթացիկ ակտիվ ներդիր | Որ ներդիրն օգտագործել |
| `options.timeout` | `number` | `10000` | Թայմաութ միլիվայրկյաններով |

**Վերադարձնում է `WaitForResult`՝**

| Դաշտ | Տիպ | Նկարագրություն |
|------|------|------|
| `found` | `boolean` | Արդյոք տարրը գտնվեց |
| `element` | `object` | Տարրի տեղեկատվություն (միայն երբ `found=true`) |
| `element.selector` | `string` | Համընկած սելեկտորը |
| `element.tag` | `string` | Պիտակի անուն |
| `element.text` | `string` | Տեքստային բովանդակություն |
| `element.role` | `string` | ARIA դերը |
| `element.type` | `string` | input տիպ |
| `element.visible` | `boolean` | Արդյոք տեսանելի է |

## Սկրիպտի կատարում

### executeScript — JavaScript-ի գործարկում

```javascript
const result = await CAT.agent.dom.executeScript(code, options?);
```

**Պարամետրեր՝**

| Պարամետր | Տիպ | Լռելյայն | Նկարագրություն |
|------|------|--------|------|
| `code` | `string` | — | JavaScript կոդ (պարտադիր) |
| `options.tabId` | `number` | ընթացիկ ակտիվ ներդիր | Որ ներդիրն օգտագործել |

> Կոդը միշտ գործարկվում է էջի **MAIN world**-ում (կիսելով նույն `window` օբյեկտը, ինչ էջի սեփական JS-ը), ուստի այն կարող է կանչել էջի սեփական ֆունկցիաները և ուղղակիորեն կարդալ էջի փոփոխականները — բայց նույն պատճառով այն **չի կարող մուտք գործել ընդլայնման բլոբ URL-ները** (օր.՝ `blob:` URL, որը դուք ստեղծում եք `URL.createObjectURL()`-ի միջոցով `CAT.agent.opfs.read`-ի `"blob"` ռեժիմում վերադարձրած `Blob`-ից), քանի որ բլոբ URL-ները սահմանափակված են ընդլայնման սեփական ծագմամբ: Եթե անհրաժեշտ է աշխատել բլոբ URL-ի հետ մեկուսացված կոնտեքստում, փոխարենը օգտագործեք SkillScript (տեսեք [Skill մշակում](../skill-dev)):

```javascript
// Call a page's own JS function / read a page variable
const data = await CAT.agent.dom.executeScript(
  "return window.__APP_STATE__"
);

// Read DOM content
const title = await CAT.agent.dom.executeScript(
  "return document.querySelector('h1')?.textContent"
);
```

> Կոդը կատարման համար փաթաթվում է `new Function()`-ի մեջ և աջակցում է `return` արժեքին: Թայմաութը 30 վայրկյան է:

## DOM մոնիտորինգ

Օգտագործում է Chrome DevTools Protocol-ը՝ էջի DOM փոփոխությունները և երկխոսության իրադարձությունները վերահսկելու համար:

### startMonitor — մոնիտորինգի մեկնարկ

```javascript
await CAT.agent.dom.startMonitor(tabId);
```

Սկսում է նշված ներդրի մոնիտորինգը DOM փոփոխությունների և երկխոսությունների համար (alert/confirm/prompt):

### stopMonitor — մոնիտորինգի կանգառ

```javascript
const result = await CAT.agent.dom.stopMonitor(tabId);
```

Կանգնեցնում է մոնիտորինգը և վերադարձնում հավաքված փոփոխությունները:

**Վերադարձնում է `MonitorResult`՝**

| Դաշտ | Տիպ | Նկարագրություն |
|------|------|------|
| `dialogs` | `Array<{ type, message }>` | Երկխոսությունների ցուցակ |
| `addedNodes` | `Array<{ tag, id?, class?, role?, text }>` | Նոր ավելացված DOM հանգույցների ամփոփում |

> `addedNodes`-ը եզակիացվում է հանգույցի ID-ով և սահմանափակվում է 50 գրառումով. հանգույցները, որոնք այդ ընթացքում հեռացվել են էջից կամ տեսանելի չեն, ավտոմատ կերպով բաց են թողնվում: `text`-ը հանգույցի `outerHTML`-ից ստացված սովորական տեքստ է՝ կտրված 300 նիշի:

### peekMonitor — մոնիտորինգի կարգավիճակի ստուգում

```javascript
const status = await CAT.agent.dom.peekMonitor(tabId);
```

Ոչ կործանարար կերպով ստուգում է ընթացիկ մոնիտորինգի կարգավիճակը:

**Վերադարձնում է `MonitorStatus`՝**

| Դաշտ | Տիպ | Նկարագրություն |
|------|------|------|
| `hasChanges` | `boolean` | Արդյոք կան որևէ փոփոխություններ |
| `dialogCount` | `number` | Երկխոսությունների քանակ |
| `nodeCount` | `number` | Նոր ավելացված հանգույցների քանակ |

## Ամբողջական օրինակ

```javascript
// ==UserScript==
// @name        Auto form filler
// @match       https://example.com/form
// @grant       CAT.agent.dom
// ==/UserScript==

// Wait for the form to load
await CAT.agent.dom.waitFor("form#signup", { timeout: 5000 });

// Fill in the form
await CAT.agent.dom.fill("input[name=username]", "test_user");
await CAT.agent.dom.fill("input[name=email]", "test@example.com");

// Check the agreement box
await CAT.agent.dom.click("input[type=checkbox]#agree");

// Screenshot the filled-in form
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
