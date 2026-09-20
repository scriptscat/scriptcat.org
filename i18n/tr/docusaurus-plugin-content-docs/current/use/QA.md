---
title: Sıkça Sorulan Sorular
---

## Geliştirici Modu / Kullanıcı Komut Dosyası İzinleri

#### S: ScriptCat "Geliştirici modu etkinleştirilmedi" gösteriyor ve komut dosyaları çalışmıyor?

Chrome 120+ ve daha yeni Edge sürümlerinden itibaren tarayıcılar, komut dosyalarının çalışması için kullanıcıların izinleri manuel olarak etkinleştirmesini gerektirir. Kurulum talimatları için lütfen [Tarayıcı Kullanıcı Komut Dosyası Desteğini Etkinleştir](/docs/use/open-dev/) sayfasına bakın.

Zaten etkinleştirildiyse ancak uyarı devam ediyorsa, tarayıcıyı yeniden başlatmayı veya uzantıyı yeniden yüklemeyi deneyin.

## Komut Dosyaları Çalışmıyor

#### S: Komut dosyası kuruldu ama hiçbir etkisi yok?

1. **"Kullanıcı Komut Dosyalarına İzin Ver" etkin değil** — Bkz. [Tarayıcı Kullanıcı Komut Dosyası Desteğini Etkinleştir](/docs/use/open-dev/)
2. **Soğuk başlatma** — Tarayıcı ilk açıldığında komut dosyaları hemen yüklenmeyebilir. Sayfayı yenilemeyi deneyin
3. **Uzantı çakışmaları** — Reklam engelleyiciler (örn. uBlock Origin) komut dosyası hatalarına neden olabilir

#### S: Komut dosyası Tampermonkey'de çalışıyor ama ScriptCat'te çalışmıyor?

ScriptCat ve Tampermonkey'in API uygulamalarında bazı farklılıklar vardır. Lütfen en son sürüme güncelleyin. Sorun devam ederse, [GitHub](https://github.com/scriptscat/scriptcat/issues) üzerinden bir Issue gönderin.

## CSP / Trusted Types kısıtlamaları {#csp-trusted-types}

#### Q: Bir sitenin CSP'si betiğin çalışmasını engelliyorsa ne yapmalıyım?

ScriptCat'teki **Network Rules (Ağ kuralları)** bölümünde **Araçlar → Ağ kuralları → Yeni kural → CSP'yi kaldır** yolunu izleyin. **Siteler** alanına yalnızca sorun yaşanan siteyi yazın; örneğin `example.com`. Kuralı kaydedip açık sayfaları yenileyin.

**Remove CSP** şablonu, ana çerçeve ve alt çerçevelerdeki belge yanıtlarından CSP yanıt başlıklarını kaldırır. İsterseniz `X-Frame-Options` başlığını da kaldırabilirsiniz.

#### Q: `This document requires 'TrustedHTML' assignment.` hatası ne anlama geliyor?

Bu hata genellikle site Trusted Types uyguladığı için tarayıcının bir DOM işlemini reddettiği anlamına gelir. Site, CSP yönergesi `require-trusted-types-for 'script'` ile Trusted Types'ı etkinleştirebilir; userscript politika tarafından izin verilmeyen bir işlem yaparsa bu hata görülebilir. Site güvenlik politikasını tarayıcı uygular; bu mesaj tek başına sorunun ScriptCat'ten kaynaklandığını göstermez.

Kısıtlama, belge yanıtındaki zorunlu bir CSP yanıt başlığından kaynaklanıyorsa yalnızca bu siteye yönelik **Remove CSP** kuralı yardımcı olabilir. Hatanın nedeni kaldırılabilir CSP başlıklarından biri değilse çözüm garanti edilmez.

#### Q: ScriptCat neden tüm sitelerde CSP'yi varsayılan olarak kaldırmıyor?

CSP ve Trusted Types, siteler arası komut dosyası çalıştırma (XSS) gibi riskleri azaltmaya yardımcı olur. CSP'yi kaldırmak, eşleşen sitenin yerleşik güvenlik korumalarını zayıflatır. Kuralı yalnızca gerçekten ihtiyaç duyulan siteler için oluşturun. **Tüm siteler** kapsamı kullanılabilir, ancak ScriptCat kaydetmeden önce onay ister.

:::warning Güvenlik uyarısı

Güvenlik etkisini anlamıyor ve kabul etmiyorsanız **Tüm siteler** kapsamını kullanmayın.

:::

:::info ScriptCat'teki Trusted Types uyumluluk sorunu hakkında

[ScriptCat #1239](https://github.com/scriptscat/scriptcat/issues/1239), ayrı bir `GM_xmlhttpRequest` uyumluluk sorununu da içeriyordu; bu sorun [ScriptCat #1242](https://github.com/scriptscat/scriptcat/pull/1242) ile düzeltildi. Bu düzeltme Trusted Types'ı devre dışı bırakmaz veya aşmaz ve sitenin CSP'sini değiştirmez. Eski bir ScriptCat sürümü kullanıyorsanız güncelleyin.

:::

## Bulut Senkronizasyonu Sorunları

> Temel senkronizasyon kullanımı için bkz. [Senkronizasyon ve Yedekleme](/docs/use/sync/).

#### S: OneDrive / Google Drive / WebDAV senkronizasyonuyla ilgili sorunlar mı yaşıyorsunuz?

1. **Silinen komut dosyaları yeniden görünüyor** — Tüm cihazlarda "silme senkronizasyonu"nun etkin olduğundan emin olun

## Komut Dosyası Kurulumu Sorunları

> Komut dosyalarının nasıl kurulacağı için bkz. [Komut Dosyalarını Kur](/docs/use/script_installation/).

## Çerez Yetkilendirme Sorunları

#### S: GM_cookie çerezleri alamıyor?

1. **Yetkilendirme penceresi görünmüyor** — `GM_cookie`'nun komut dosyasının `@grant` bölümünde düzgün şekilde bildirildiğinden emin olun ve erişilmesi gereken alan adlarını bildirmek için `@connect` kullanın

## Komut Dosyası Veri Kaybı

#### S: Tarayıcıyı açtıktan sonra tüm komut dosyaları kayboldu?

1. **Başlatma gecikmesi** — ScriptCat, tarayıcı başlarken verileri hâlâ yüklüyor olabilir. Birkaç saniye bekleyin veya tarayıcıyı yeniden başlatın
2. **Temizleme yazılımı** — 360 Security Guard veya CCleaner gibi araçlar uzantı verilerini silebilir. Temizleme ayarlarında tarayıcı uzantısı verilerini hariç tutun
3. **Düzenli yedekleme önerilir** — Komut dosyalarını ve ayarları düzenli olarak yedeklemek için dışa aktarma özelliğini veya [bulut senkronizasyonunu](/docs/use/sync/) kullanın
