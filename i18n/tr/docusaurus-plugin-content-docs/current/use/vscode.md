---
title: VSCode ile Komut Dosyası Geliştirme
---

ScriptCat, VSCode'da kullanıcı komut dosyaları yazmanızı sağlayan bir VSCode uzantısı sunar. Kaydettikten sonra değişiklikler otomatik olarak tarayıcıdaki ScriptCat'e senkronize edilir — manuel kopyala-yapıştır gerekmez, bu da geliştirme verimliliğini büyük ölçüde artırır.

## Ön Koşullar

Aşağıdaki iki aracı kurmanız gerekir:

1. **Tarayıcınıza ScriptCat uzantısını kurun** — Henüz kurmadıysanız, kurmak için [Hızlı Başlangıç](/docs/use/use/) rehberini izleyin
2. **VSCode'a ScriptCat uzantısını kurun** — VSCode Uzantılar pazarında "[scriptcat-vscode](https://marketplace.visualstudio.com/items?itemName=CodFrm.scriptcat-vscode)" arayın veya [GitHub deposundan](https://github.com/scriptscat/scriptcat-vscode) indirin

## Bağlantı Kurun

Kurulduktan sonra, tarayıcınızdaki ScriptCat uzantısını VSCode ile bağlamanız gerekir:

1. Yönetim panelini açmak için tarayıcınızda ScriptCat simgesine tıklayın
2. **Araçlar > Geliştirici Araçları** bölümüne gidin
3. **VSCode hizmetine otomatik bağlan** seçeneğini bulun, etkinleştirin ve **Bağlan**'a tıklayın

Bağlandıktan sonra VSCode ile ScriptCat arasında gerçek zamanlı bir kanal kurulur.

## Komut Dosyalarını Senkronize Etme

Bağlantı kurulduktan sonra, komut dosyalarını senkronize etmek için iki yoldan birini seçebilirsiniz:

### Seçenek 1: Otomatik Algılama Modu (Önerilen)

1. VSCode'da komut paletini açmak için `Ctrl + Shift + P` (`Mac'te Cmd + Shift + P`) tuşlarına basın
2. `scriptcat.autoTarget` yazın ve seçin
3. Bundan sonra, her açtığınızda veya kaydettiğinizde `.user.js` dosyaları otomatik olarak ScriptCat'e senkronize edilir

### Seçenek 2: Belirtilen Komut Dosyası Modu

1. VSCode'da komut paletini açmak için `Ctrl + Shift + P` (`Mac'te Cmd + Shift + P`) tuşlarına basın
2. `scriptcat.target` yazın ve seçin
3. Senkronize edilecek komut dosyası dosyasının yolunu belirtin

## Geliştirme İş Akışı

Kurulduktan sonra geliştirme iş akışı çok basittir:

1. VSCode'da `.user.js` komut dosyanızı yazın veya düzenleyin
2. Dosyayı kaydetmek için `Ctrl + S` tuşlarına basın
3. Komut dosyası otomatik olarak tarayıcıdaki ScriptCat'e senkronize edilir
4. Tarayıcıya geçin ve sonucu görmek için sayfayı yenileyin

Tüm süreç manuel adım gerektirmez — kaydetme anında etkili olur.

## SSS

### Bağlanamıyorsa ne yapmalıyım?

- Tarayıcınızdaki ScriptCat uzantısının çalıştığından emin olun
- VSCode'daki ScriptCat uzantısının kurulu ve etkin olduğundan emin olun
- ScriptCat yönetim panelindeki "Geliştirici Araçları" sayfasında bağlantı durumunu kontrol edin

### Kaydettikten sonra komut dosyası güncellenmiyor?

- Dosya adının `.user.js` ile bittiğinden emin olun
- `scriptcat.autoTarget` veya `scriptcat.target` komutunu çalıştırdığınızdan emin olun
- Herhangi bir hata mesajı için VSCode çıktı panelini kontrol edin

### VSCode'u yeniden başlattıktan sonra yeniden bağlanmam gerekir mi?

"VSCode hizmetine otomatik bağlan" etkinse, VSCode yeniden başlatıldıktan sonra otomatik olarak yeniden bağlanır — manuel adım gerekmez.
