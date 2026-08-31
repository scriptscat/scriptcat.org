---
title: Մոդելի հարցման API
---

`@grant CAT.agent.model`

Մոդելի հարցման API-ն ապահովում է միայն կարդալու հասանելիություն այն մոդելներին, որոնք օգտագործողը կարգավորել է կառավարման էջում: Անվտանգության համար API բանալին երբեք չի բացահայտվում սկրիպտին:

## list — ցուցակագրել բոլոր մոդելները

```javascript
const models = await CAT.agent.model.list();
```

**Վերադարձնում է `ModelSummary[]`՝**

| Դաշտ | Տիպ | Նկարագրություն |
|------|------|------|
| `id` | `string` | Մոդելի կոնֆիգ ID |
| `name` | `string` | Օգտագործողի կողմից սահմանված ցուցադրվող անուն (օր.՝ «GPT-4o», «Claude Sonnet») |
| `provider` | `"openai" \| "anthropic"` | Մատակարարի տիպ |
| `apiBaseUrl` | `string` | API բազային URL |
| `model` | `string` | Մոդելի նույնականացուցիչը, որն ուղարկվում է մատակարարի API-ին (օր.՝ `gpt-4o`, `claude-sonnet-4-20250514`) |
| `maxTokens` | `number` | Ելքի առավելագույն նշանները (բաց թողնված, եթե սահմանված չէ) |

> Նշում. վերադարձված օբյեկտները **չեն ներառում** `apiKey` դաշտ:

## get — ստանալ կոնկրետ մոդել

```javascript
const model = await CAT.agent.model.get(modelId);
```

Վերադարձնում է `null`, եթե մոդելը գոյություն չունի:

## getDefault — ստանալ լռելյայն մոդելի ID

```javascript
const defaultId = await CAT.agent.model.getDefault();
```

Վերադարձնում է օգտագործողի կարգավորած լռելյայն մոդելի ID-ն; վերադարձնում է դատարկ տող, եթե ոչ մեկը սահմանված չէ:

## getSummary — ստանալ ամփոփման մոդելի ID

```javascript
const summaryModelId = await CAT.agent.model.getSummary();
```

Վերադարձնում է թեթև մոդելի ID-ն, որը օգտագործողը կարգավորել է հատուկ ամփոփման առաջադրանքների համար (օրինակ՝ զրույցի պատմության ավտոմատ սեղմում): Եթե առանձին կարգավորված չէ, համակարգը ընկնում է լռելյայն մոդելի վրա, և այս մեթոդը վերադարձնում է դատարկ տող:

## Օգտագործման սցենարներ

### Թույլ տալ օգտագործողին ընտրել մոդել

```javascript
// ==UserScript==
// @name        Model picker example
// @grant       CAT.agent.model
// @grant       CAT.agent.conversation
// ==/UserScript==

const models = await CAT.agent.model.list();
const defaultId = await CAT.agent.model.getDefault();

// Show the list to the user and let them pick
const selectedModel = models.find(m => m.id === defaultId) || models[0];

const conv = await CAT.agent.conversation.create({
  model: selectedModel.id
});
```

### Կոնկրետ մոդելի մանրամասների ստացում

```javascript
const model = await CAT.agent.model.get("my-model-id");
if (model) {
  console.log(`${model.name} (${model.provider}), max output ${model.maxTokens ?? "unset"} tokens`);
}
```
