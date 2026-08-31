---
title: Zamanlanmış Görev API'si
---

`@grant CAT.agent.task`

Zamanlanmış görev API'si, bir betiğin Cron ifadesi tabanlı zamanlanmış görevler oluşturmasını sağlar; iki yürütme modu vardır.

## Yürütme modları

### Dahili mod

Agent sistemi tarafından otomatik olarak yönetilir:
- Cron zamanlaması tetiklendiğinde otomatik olarak bir sohbet oluşturur veya sürdürür
- Yapılandırılan `prompt` değerini LLM'ye gönderir
- Bir model ve Skill'ler belirtilebilir
- Yürütme geçmişi ve belirteç kullanımı otomatik olarak kaydedilir

### Olay modu

Betiğin kendisi tarafından yönetilir:
- Cron zamanlaması tetiklendiğinde betiğe bir olay bildirimi gönderilir
- Betik, olayı `addListener` üzerinden dinler
- İşleme mantığı tamamen özeldir

## create — bir görev oluştur

```javascript
const task = await CAT.agent.task.create(options);
```

**Parametreler (`AgentTaskCreateOptions`):**

| Parametre | Tür | Zorunlu | Açıklama |
|------|------|------|------|
| `name` | `string` | Evet | Görev adı |
| `crontab` | `string` | Evet | Standart Cron ifadesi (5 alan: dakika saat gün ay hafta günü) |
| `mode` | `"internal" \| "event"` | Evet | Yürütme modu |
| `enabled` | `boolean` | Hayır | Etkin olup olmadığı, varsayılan `true` |
| `notify` | `boolean` | Hayır | Tetiklendiğinde tarayıcı bildirimi gönderilip gönderilmeyeceği |
| `prompt` | `string` | Hayır | Dahili mod için istem |
| `modelId` | `string` | Hayır | Dahili modda kullanılacak model kimliği |
| `skills` | `string[]` | Hayır | Dahili modda yüklenecek Skill'ler |
| `maxIterations` | `number` | Hayır | Dahili mod için maksimum araç çağrısı turu, varsayılan `10` |

**`AgentTask` döndürür:**

| Alan | Tür | Açıklama |
|------|------|------|
| `id` | `string` | Görev kimliği |
| `name` | `string` | Görev adı |
| `crontab` | `string` | Cron ifadesi |
| `mode` | `string` | Yürütme modu |
| `enabled` | `boolean` | Etkin olup olmadığı |
| `notify` | `boolean` | Bildirim gönderilip gönderilmediği |
| `nextruntime` | `number` | Sonraki çalıştırma zaman damgası |
| `lastruntime` | `number` | Son çalıştırma zaman damgası |
| `conversationId` | `string` | Dahili modda ilişkili sohbet kimliği (isteğe bağlı) |
| `lastRunStatus` | `"success" \| "error"` | Son çalıştırmanın durumu |
| `lastRunError` | `string` | Son çalıştırmadaki hata mesajı |
| `createtime` | `number` | Oluşturma zaman damgası |

**Cron ifadesi örnekleri:**

| İfade | Açıklama |
|--------|------|
| `* * * * *` | Her dakika |
| `0 9 * * *` | Her gün 09:00'da |
| `0 */2 * * *` | Her 2 saatte bir |
| `30 8 * * 1-5` | Hafta içi günler 08:30'da |
| `0 0 1 * *` | Her ayın 1'inde 00:00'da |

## list — tüm görevleri listele

```javascript
const tasks = await CAT.agent.task.list();
```

Geçerli betik tarafından oluşturulan tüm görevleri döndürür.

## get — görev ayrıntılarını al

```javascript
const task = await CAT.agent.task.get(taskId);
```

Görev yoksa `undefined` döndürür.

## update — bir görevi güncelle

```javascript
const task = await CAT.agent.task.update(taskId, partial);
```

**Güncellenebilir alanlar:**

```javascript
await CAT.agent.task.update(task.id, {
  name: "New name",
  crontab: "0 10 * * *",
  enabled: false,
  prompt: "New prompt",
  notify: true
});
```

Bir güncellemeden sonra `nextruntime` otomatik olarak yeniden hesaplanır.

## remove — bir görevi sil

```javascript
const success = await CAT.agent.task.remove(taskId);
```

## runNow — hemen çalıştır

```javascript
await CAT.agent.task.runNow(taskId);
```

Görevi, Cron zamanlamasını beklemeden hemen bir kez çalıştırmayı tetikler (engellemesiz, arka planda çalışır).

## addListener — görev tetikleyicilerini dinle

```javascript
const listenerId = await CAT.agent.task.addListener(taskId, callback);
```

Yalnızca **olay modu** görevleri için kullanılır. Geri çağırma, Cron zamanlaması tetiklendiğinde çalışır.

**Geri çağırma parametresi (`AgentTaskTrigger`):**

| Alan | Tür | Açıklama |
|------|------|------|
| `taskId` | `string` | Görev kimliği |
| `name` | `string` | Görev adı |
| `crontab` | `string` | Cron ifadesi |
| `triggeredAt` | `number` | Tetikleme zaman damgası |

## removeListener — bir dinleyiciyi kaldır

```javascript
await CAT.agent.task.removeListener(listenerId);
```

## Tam örnekler

### Dahili mod — AI otomatik olarak çalıştırır

```javascript
// ==UserScript==
// @name        Scheduled news digest
// @match       *://*/*
// @grant       CAT.agent.task
// ==/UserScript==

const task = await CAT.agent.task.create({
  name: "Daily news digest",
  crontab: "0 9 * * *",       // Her gün saat 9'da
  mode: "internal",
  prompt: "Please search today's tech news and save a short summary to OPFS",
  skills: ["web-search"],
  maxIterations: 10,
  notify: true
});

console.log("Task created, next run:", new Date(task.nextruntime));
```

### Olay modu — betiğin kendisi yönetir

```javascript
// ==UserScript==
// @name        Scheduled data collection
// @match       *://*/*
// @grant       CAT.agent.task
// @grant       CAT.agent.dom
// ==/UserScript==

const task = await CAT.agent.task.create({
  name: "Stock data collection",
  crontab: "*/30 9-15 * * 1-5", // Hafta içi 9-15 arası her 30 dakikada bir
  mode: "event",
  enabled: true,
  notify: false
});

await CAT.agent.task.addListener(task.id, async (trigger) => {
  console.log(`Task triggered: ${trigger.name} at ${new Date(trigger.triggeredAt)}`);

  // Özel toplama mantığı
  await CAT.agent.dom.navigate("https://finance.example.com/stock");
  const content = await CAT.agent.dom.readPage({ selector: ".stock-table" });

  // Verileri işle...
  console.log("Collection complete");
});
```
