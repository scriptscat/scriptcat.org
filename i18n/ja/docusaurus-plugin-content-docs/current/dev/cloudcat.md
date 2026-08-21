---
title: クラウド実行
---

> クラウドで実行するいくつかの方法が提供されています。詳細は [実行環境](#running-environments) を参照してください。また、[CloudCat](https://github.com/scriptscat/cloudcat) はクラウドでバックグラウンドスクリプトを実行するためのサービス — まだ開発中のFAASプラットフォームです。

⚠ 请注意 ⚠、スケジュールスクリプトの式をクラウドにアップロードすると、`once` の意味が変更されます。`once` の前の時間は実行時に最小値に置き換えられます。

例えば：

* `* * once * *` => `0 0 * * *`：1日1回実行 → 毎日00:00に実行
* `* 1-23 once * *` => `0 1 * * *`：毎日1:00〜23:00の間1回実行 → 毎日01:00に実行
* `* 1,3,5 once * *` => `0 1 * * *`：毎日1:00、3:00、または5:00に1回実行 → 毎日01:00に実行
* `* */4 once * *` => `0 0 * * *`：毎日4時間ごとに1回実行 → 毎日00:00に実行
* `* 1-23/4 once * *` => `0 1 * * *`：毎日1:00〜23:00の間4時間ごとに1回実行 → 毎日01:00に実行
* `* 10 once * *` => `0 10 * * *`：毎日10:00に1回実行 → 毎日10時の00分に実行
* `* * * once *` => `0 0 1 * *`：月1回実行 → 毎月1日の00:00に実行

## その他のCloudCat記述値

参照スクリプト：[Bilibili自動チェックイン](https://scriptcat.org/script-show-page/48)

### cloudCat

この属性を宣言すると、スクリプトを `CloudCat` 経由で実行できるようになります。このオプションを持つスクリプトには、スクリプトリストにクラウド実行ボタンが表示されます。クリックすると実行方法を選択できます — [実行環境](#running-environments) を参照してください。

![image-20220203225847694](@site/docs/dev/cloudcat.assets/image-20220203225847694.png)

### cloudServer

> cloudCatに関連、まだ実装されていません

デフォルトのcloudCatサーバーアドレス

### exportValue

クラウドにエクスポートするValuesを記述します。複数の宣言が許可されています。

```ts
// @exportValue key1,key2,key3
// @exportValue key4,key5,key6
```

### exportCookie

クラウドにエクスポートするクッキーを記述します。複数の宣言が許可されています。パラメータは `GM_cookie` の `CookieDetails` を使用して記述します。例：

```ts
// 以下の例は https://docs.scriptcat.org/docs/use/ から cookie1 という名前のクッキーをエクスポートします
// @exportCookie url=https://docs.scriptcat.org/docs/use;name=cookie1

// 以下の例は scriptcat.org ドメインのすべてのクッキーをエクスポートします
// @exportCookie domain=scriptcat.org

// 利用可能なすべてのパラメータ：
// @exportCookie domain=scriptcat.org;url=https://docs.scriptcat.org/docs/use;name=cookie1;path=/docs/use;secure=true;session=true
```

## APIサポートの変更
> 現在サポートされているのは以下のAPIのみです。特に記載がない限り、元のAPIと同じように動作します。

### GM_xmlhttpRequest


### GM_notification


### GM_log

### GM_getValue

現在 `@exportValue` を介してエクスポートされたValuesの取得のみサポートしています。set/delete/listなどの方法はサポートされていません。

## 実行環境 {#running-environments}

### ローカル

zipパッケージをエクスポートします。フォルダに展開した後、以下のコマンドを実行してローカルで実行します（ローカルのNode.js環境が必要です）：

```bash
npm i
node index.js
```


### Tencent Cloud

まず [**アクセスキー**](https://console.cloud.tencent.com/cam/capi) でTencent Cloudキーを作成します — サブアカウントを使用する場合は、Cloud Function権限を付与してください。次に [**Function Service**](https://console.cloud.tencent.com/scf/list) でサービスを有効にします。毎月一定量の無料使用量が含まれています。リージョンはデフォルトで上海です。必要に応じて調整してください。アップロードをクリックすると、`@crontab` に基づいてスケジュールトリガーが自動的に作成され、スケジュールに従って関数が実行されます。

![image-20220203224956248](@site/docs/dev/cloudcat.assets/image-20220203224956248.png)
