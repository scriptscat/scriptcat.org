---
title: Model Sorgulama API'si
---

`@grant CAT.agent.model`

Model sorgulama API'si, kullanıcının yönetim sayfasında yapılandırdığı modellere salt okunur erişim sağlar. Güvenlik için API anahtarı asla betiğe gösterilmez.

## list — tüm modelleri listele

```javascript
const models = await CAT.agent.model.list();
```

**`ModelSummary[]` döndürür:**

| Alan | Tür | Açıklama |
|------|------|------|
| `id` | `string` | Model yapılandırma kimliği |
| `name` | `string` | Kullanıcı tanımlı görünen ad (örn. "GPT-4o", "Claude Sonnet") |
| `provider` | `"openai" \| "anthropic"` | Sağlayıcı türü |
| `apiBaseUrl` | `string` | API temel URL'si |
| `model` | `string` | Sağlayıcı API'sine gönderilen model tanımlayıcısı (örn. `gpt-4o`, `claude-sonnet-4-20250514`) |
| `maxTokens` | `number` | Maksimum çıkış belirteci sayısı (ayarlanmadıysa atlanır) |

> Not: döndürülen nesneler **bir `apiKey` alanı içermez**.

## get — belirli bir modeli al

```javascript
const model = await CAT.agent.model.get(modelId);
```

Model yoksa `null` döndürür.

## getDefault — varsayılan model kimliğini al

```javascript
const defaultId = await CAT.agent.model.getDefault();
```

Kullanıcının yapılandırdığı varsayılan model kimliğini döndürür; hiçbiri ayarlanmadıysa boş bir dize döndürür.

## getSummary — özet model kimliğini al

```javascript
const summaryModelId = await CAT.agent.model.getSummary();
```

Kullanıcının özetleme görevleri (sohbet geçmişinin otomatik sıkıştırılması gibi) için özel olarak yapılandırdığı hafif modelin kimliğini döndürür. Ayrıca yapılandırılmadıysa sistem varsayılan modele geri döner ve bu yöntem boş bir dize döndürür.

## Kullanım senaryoları

### Kullanıcının bir model seçmesine izin verme

```javascript
// ==UserScript==
// @name        Model picker example
// @grant       CAT.agent.model
// @grant       CAT.agent.conversation
// ==/UserScript==

const models = await CAT.agent.model.list();
const defaultId = await CAT.agent.model.getDefault();

// Listeyi kullanıcıya göster ve seçmesini sağla
const selectedModel = models.find(m => m.id === defaultId) || models[0];

const conv = await CAT.agent.conversation.create({
  model: selectedModel.id
});
```

### Belirli bir modelin ayrıntılarını alma

```javascript
const model = await CAT.agent.model.get("my-model-id");
if (model) {
  console.log(`${model.name} (${model.provider}), max output ${model.maxTokens ?? "unset"} tokens`);
}
```
