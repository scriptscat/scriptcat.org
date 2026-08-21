---
title: MCP Entegrasyonu
---

MCP ([Model Context Protocol](https://modelcontextprotocol.io/)), Agent'ın harici MCP sunucularına bağlanmasını ve bunların sağladığı araçlara, kaynaklara ve istem şablonlarına otomatik olarak erişmesini sağlar.

> Agent'ın diğer alt sistemlerinden farklı olarak, MCP sunucuları şu anda **yalnızca kullanıcı tarafından yönetim sayfasında yapılandırılabilir** — betikler için `CAT.agent.mcp` yönetim API'si yoktur. Bir betiğin gözlemleyebildiği tek şey, bu sunuculardan gelen araçların sohbetler sırasında otomatik olarak çağrılmasıdır.

## Bir MCP sunucusunu yapılandırma

Yönetim sayfasında → **Agent → MCP** bölümüne bir tane ekleyin:

| Alan | Açıklama |
|------|------|
| Ad | Sunucu için görünen ad |
| URL | Streamable HTTP uç noktası (POST üzerinden JSON-RPC 2.0) |
| API Anahtarı | İsteğe bağlı, kimlik doğrulama için |
| Özel başlıklar | İsteğe bağlı |
| Etkin | Sunucunun etkin olup olmadığı |

ScriptCat'in MCP istemcisi **Streamable HTTP** taşımasını kullanır ve `2025-03-26` protokol sürümünü destekler.

Bir MCP sunucusu üç tür yetenek sağlayabilir:

| Yetenek | Açıklama |
|------|------|
| **Araçlar** | Otomatik olarak Agent'ın çağırabileceği araçlar olarak kaydedilir |
| **Kaynaklar** | Okunabilir kaynaklar (metin/ikili) |
| **İstemler** | Parametreleri destekleyen istem şablonları |

## Bir sohbette kullanma

Etkin MCP sunucularından gelen araçlar, `mcp_{temizlenmiş sunucu adı}_{toolName}` deseniyle adlandırılarak Agent sohbetlerinin kullanabileceği araç listesinde otomatik olarak görünür — AI, kullanıcı amacına göre bunları çağırıp çağırmamaya karar verir. Bu, [Skill'lerin](../agent-skill-install) otomatik yüklenmesine benzer şekilde çalışır; betik geliştiricilerinin genellikle altta yatan ayrıntılar hakkında endişelenmesi gerekmez.

Belirli bir MCP aracının kullanılabilir olup olmadığını kontrol etmek için bir sohbette doğrudan AI'ya sorabilir veya yönetim sayfasındaki o sunucunun ayrıntılarında keşfedilen araç listesini kontrol edebilirsiniz.
