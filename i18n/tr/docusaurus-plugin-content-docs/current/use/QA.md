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
