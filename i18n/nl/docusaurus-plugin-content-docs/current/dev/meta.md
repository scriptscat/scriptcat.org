---
title: Metadatablok
---

De inhoud binnen `==UserScript==` beschrijft de machtigingen die een script nodig heeft, informatie over het script, enzovoort. Het staat helemaal aan het begin van het script.

```js
// ==UserScript==
// @name         Nieuw gebruikersscript
// @namespace    https://bbs.tampermonkey.net.cn/
// @version      0.1.0
// @description  probeer de wereld over te nemen!
// @author       U
// @crontab      * * once * *
// ==/UserScript==
```

## Belangrijkste waarden

### name

Scriptnaam

### namespace

Scriptnaamruimte. `name + namespace` bepaalt de uniciteit van het script.

### version

De versie van het script. Het wordt aanbevolen om [semantische versiebeheer](https://semver.org/) te volgen, zodat de gebruiker bij een gedetecteerde versiewijziging wordt gevraagd om bij te werken, enzovoort.

### description

Een gedetailleerde beschrijving van het script

### author

Scriptauteur

### run-at

Wanneer het script wordt uitgevoerd

| Waarde          | Uitvoering                                                              | Ondersteund sinds        |
| -------------- | ------------------------------------------------------------------ | ---------------------- |
| document-start | Injecteert het script in de pagina zodra de URL aan de voorkant overeenkomt | v0.3.0          |
| document-end   | Injecteert het script nadat de DOM is geladen; paginascripts en afbeeldingen kunnen op dat moment nog laden | v0.3.0 |
| document-idle  | Injecteert het script nadat alle inhoud is geladen         | v0.3.0                  |
| document-body  | Het script wordt alleen geïnjecteerd zodra de pagina een `body`-element heeft     | v0.6.2                  |
| document-menu  | Toont een menu bij rechtsklik; het script uitvoeren gebruikt de scriptnaam als menunaam | v0.3.4-v0.9.4 (🔥 verwijderd) |

Voor menu-iconen kunt u verwijzen naar [Unicode-symbolen](https://unicode-table.com/en/) en [emoji](https://www.emojiall.com/en-US/).

### run-in

Specificeert de omgeving waarin het script wordt geïnjecteerd: `@run-in normal-tabs` voor gewone tabbladen, `@run-in incognito-tabs` voor incognitotabbladen.

### early-start (v1.1.0+)

Wanneer `run-at` `document-start` is, wordt het script zo vroeg mogelijk uitgevoerd, maar het kan nog steeds niet garanderen dat het sneller laadt dan de pagina.

Zodra u `@run-at document-start` hebt gedefinieerd, kunt u `@early-start` toevoegen om het script sneller te laten laden dan de pagina: [voorbeeld](https://github.com/scriptscat/scriptcat/blob/main/example/early-start.js)

### inject-into

:::tip

In de content-script-omgeving (`content`) verwijst `unsafeWindow` alleen naar de eigen huidige `window` van de omgeving en kan het de `window` van de pagina niet bereiken.

ScriptCat ondersteunt niet het automatisch controleren van CSP-beperkingen om te beslissen of als `content` of `page` moet worden geïnjecteerd (d.w.z. Tampermonkey's `@inject-into auto`).

:::

Specificeert waar het script wordt geïnjecteerd, met ondersteuning voor `page` en `content`, standaard `page`.

- `page`: het script wordt geïnjecteerd in de paginaomgeving en kan `unsafeWindow` gebruiken om toegang te krijgen tot de `window` en `DOM` van de pagina
- `content`: het script wordt geïnjecteerd in de content-script-omgeving, kan niet rechtstreeks toegang krijgen tot het `window`-object van de pagina, maar wel tot de `DOM` van de pagina, en is niet onderworpen aan `CSP`

### storageName 🧪

De opslagruimte voor `Value`; gegevens onder dezelfde `storageName` kunnen worden gedeeld en gecommuniceerd tussen scripts. Dit is specifiek voor ScriptCat.

### background

Markeert dit script als een achtergrondscript, dat in de achtergrondomgeving moet worden uitgevoerd. Zie [Achtergrondscript](./background.md#background-script-background) voor details.

### crontab

Markeert het script als een gepland script, waarvoor een cron-expressiewaarde vereist is. Er kan slechts één cron-expressie bestaan en deze wordt volgens dat schema in de achtergrondomgeving uitgevoerd. Zie [Gepland script](./background.md#scheduled-script-crontab) voor details.

### match

Alleen URL's die door `match` worden gematcht, voeren het script uit, volgens [Match-patroon](https://developer.chrome.com/docs/extensions/mv3/match_patterns/). In `match` is `*` een jokerteken, komt `tld` overeen met het topleveldomein en komt een domein dat met `*.` begint ook overeen met `xxx.com`:

| Waarde                             | Correcte voorbeelden                                                                                                                          | Onjuiste voorbeelden                          |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| `http://scriptcat.org/doc/match`  | `http://scriptcat.org/doc/match`                                                                                                            | `http://scriptcat.org/doc/runAt`         |
| `*://*/param?*`                   | `https://scriptcat.org/param` \| `http://scriptcat.org/param?search=tampermonkey`                                                            | `https://scriptcat.org/test/param`       |
| `*://*/prefix*suffix`             | `http://scriptcat.org/prefix/suffix` \| `http://scriptcat.org/prefix/mid/suffix` \| `http://scriptcat.org/prefixsuffix`                      | `http://scriptcat.org/prefix/suffix/end` |
| `http*://scriptcat.org/*`         | `https://scriptcat.org/` \| `https://scriptcat.org/doc` \| `http://scriptcat.org/doc/match` \| `http://scriptcat.org/param?search=tampermonkey` | `https://doc.scriptcat.org/`            |
| `http*://scriptcat.org/doc/*`     | `https://scriptcat.org/doc` \| `http://scriptcat.org/doc/match`                                                                              | `http://scriptcat.org/param?search=tampermonkey` |
| `http*://scriptcat.tld/doc/*`     | `https://scriptcat.cn/doc` \| `http://scriptcat.net.cn/doc/match`                                                                            | `http://google.com/param?search=tampermonkey` |
| `http*://*.scriptcat.org/doc/*`   | `https://scriptcat.cn/doc` \| `http://www.scriptcat.net.cn/doc/match`                                                                        | `http://google.com/param?search=tampermonkey` |

### include

Ondersteunt `\*` voor fuzzy matching, waardoor niet-standaard URL's mogelijk zijn

### exclude

URL's die niet mogen matchen; gebruikt dezelfde expressiesyntaxis als `include`

### grant

Vraagt API-machtiging aan — een API kan alleen worden aangeroepen nadat deze is aangevraagd. Zie de machtigingslijst op: [API-documentatie](./api.md) en [CAT API-documentatie](./cat-api.md).

Twee speciale waarden:

- **none**: het script wordt niet uitgevoerd in de sandboxomgeving, maar direct in de paginaomgeving. In deze omgeving zijn geen GM-API's beschikbaar, maar kan het `window`-object van de pagina rechtstreeks worden benaderd.
- **unsafeWindow**: in de sandboxomgeving, als u toegang nodig hebt tot het `window`-object van de pagina, gebruik dan `unsafeWindow` om dit te doen. (Tampermonkey vereist dit niet om te declareren — het wordt alleen bewaard voor compatibiliteit, wat toegegeven niet erg netjes is.)

### connect

Vraagt toegangsmachtiging aan voor een site; zie `GM_cookie` en `GM_xmlhttpRequest`. `GM_download` in de `native`-modus respecteert ook `@connect` (niet-gedeclareerde hosts triggeren een bevestigingsprompt, anders dan bij Tampermonkey)

### resource

Voegt een resourcebestand toe. Na het declareren van `@resource` kunt u `GM_getResourceText`/`GM_getResourceURL` gebruiken om de informatie op te halen.

```js
// @resource icon https://bbs.tampermonkey.net.cn/favicon.ico
// @resource html https://bbs.tampermonkey.net.cn/
// @resource xml https://bbs.tampermonkey.net.cn/sitemap.xml
// Resource-integriteitsverificatie toevoegen
// @resource icon https://bbs.tampermonkey.net.cn/favicon.ico#md5-xxx,sha256-xxx
```

### require

Voegt een extern JS-bestand toe; ondersteunt [resource-integriteitsverificatie](#resource-integrity-verification)

### require-css

Voegt een extern CSS-bestand toe; ondersteunt [resource-integriteitsverificatie](#resource-integrity-verification)

### noframes

Markeert het script als niet uitgevoerd binnen een `<frame>`

### definition

Het referentieadres van een `.d.ts`-bestand, waarmee editor-autocompletesuggesties worden ingeschakeld

### antifeature

Dit is gerelateerd aan de scriptmarktplaats; ongewenste functies moeten worden gemarkeerd met deze beschrijvingswaarde, bijvoorbeeld:

```js
// @antifeature ads Dit script bevat advertenties
// @antifeature referral-link Dit script wijzigt of verwijst door naar de verwijzingslink van de auteur
```

## Aanvullende beschrijvingswaarden

### license

De open-source licentie van het huidige script

### updateURL

Updatecontrole vereist dat het externe script een `@version`-tag heeft om dit te laten werken.

De link die het script gebruikt om op updates te controleren; indien niet ingesteld, wordt standaard `user.js => meta.js` van de link gebruikt, of de huidige link als er geen `user.js` is.

Als `@updateURL` is geconfigureerd, moet `@downloadURL` ook worden geconfigureerd om `@updateURL` te laten werken.

### downloadURL

Het downloadadres voor de scriptupdate

### supportURL

Ondersteuningssite, bugrapportpagina

### homepage, homepageURL, website

Scripthomepage

### source

Pagina van de broncode van het script

### icon, iconURL, defaulticon

Scripticoon

### icon64, icon64URL

Scripticoon van 64x64

### copyright

Auteursrechtinformatie van het script

### tag

Scripttags, gescheiden door komma's of spaties

### compatible

Compatibiliteitsinformatie weergegeven op GreasyFork

### scriptUrl

De gebruikersscript-URL waarnaar een abonnementsscript verwijst

### unwrap

Laat het gebruikersscript de sandbox-wrapping omzeilen en rechtstreeks worden geïnjecteerd en uitgevoerd in de native globale scope van de pagina. Het script kan rechtstreeks toegang krijgen tot en de echte globale variabelen van de pagina wijzigen, maar kan geen bevoorrechte API's van gebruikersscripts gebruiken zoals `GM.*`. Wordt vaak gebruikt in scenario's die diepe interactie met native paginascripts vereisen, of bij het migreren van een bestaand regulier paginascript.

### cloudCat

Markeert het script als exporteerbaar naar een CloudCat-cloudscriptpakket (alleen SC)

### cloudServer

De CloudCat-clouddienst die door het script wordt gebruikt

### exportValue

Scriptopslagwaarden om te exporteren bij het exporteren als cloudscript

### exportCookie

Cookies om te exporteren bij het exporteren als cloudscript

### Opmerkingen

### Resource-integriteitsverificatie {#resource-integrity-verification}

- Gebruik md5, sha1, sha256, sha384 of sha512 om resources tegen manipulatie te verifiëren. Meerdere verificatiemethoden kunnen worden gescheiden met `;` of `,`.
- Volgens [W3C-aanbevelingen](https://w3c.github.io/webappsec-subresource-integrity/#hash-collision-attacks) worden md5 en sha1 niet aanbevolen; gebruik sha384 of een sterker hash-algoritme.

Bijvoorbeeld:

```js
// @require https://cdn.jsdelivr.net/npm/darkmode-js@1.5.7/lib/darkmode-js.min.js#md5-d55836f30c097da753179f82fa6f108f,sha256-a476ab8560837a51938aa6e1720c8be87c2862b6221690e9de7ffac113811a90
```
