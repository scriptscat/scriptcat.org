---
title: Documentation des métadonnées
---

Le contenu entre `==UserScript==`, situé tout au début du script, décrit les permissions nécessaires au script ainsi que ses informations générales.

```js
// ==UserScript==
// @name         New Userscript
// @namespace    https://bbs.tampermonkey.net.cn/
// @version      0.1.0
// @description  try to take over the world!
// @author       You
// @crontab      * * once * *
// ==/UserScript==
```

## Valeurs principales

### name

Nom du script

### namespace

Espace de nommage du script ; la combinaison `name + namespace` garantit l'unicité du script

### version

Version du script, il est recommandé de suivre les [règles de versionnage sémantique](https://semver.org/lang/fr/). Un changement de version détecté invite l'utilisateur à effectuer une mise à jour.

### description

Description détaillée du script

### author

Auteur du script

### run-at

Moment d'exécution du script

| Valeur         | Comportement                                                    | Support               |
| -------------- | ----------------------------------------------------------------| ---------------------- |
| document-start | Injecte le script dans la page le plus tôt possible après correspondance de l'URL | v0.3.0                 |
| document-end   | Injecte le script une fois le DOM chargé ; scripts et images de la page peuvent encore être en cours de chargement | v0.3.0                 |
| document-idle  | Injecte le script une fois que tout le contenu est chargé       | v0.3.0                 |
| document-body  | Le script n'est injecté que lorsque la page possède un élément body | v0.6.2                 |
| document-menu  | Affiche un menu au clic droit sur la page ; le script s'exécute au clic, avec son nom comme libellé de menu | v0.3.4-v0.9.4(🔥 supprimé) |

Pour les icônes de menu, voir [Unicode Symbols](https://unicode-table.com/en/) et [emoji](https://www.emojiall.com/zh-hans)

### run-in

Spécifie l'environnement d'injection du script : `@run-in normal-tabs` onglets normaux, `@run-in incognito-tabs` onglets de navigation privée

### early-start (v1.1.0+)

Quand run-at vaut document-start, le script s'exécute le plus tôt possible, mais rien ne garantit qu'il s'exécutera avant le chargement de la page.

Une fois `@run-at document-start` défini, ajoutez `@early-start` pour que le script se charge avant la page : [exemple](https://github.com/scriptscat/scriptcat/blob/main/example/early-start.js)

### inject-into

:::tip

Dans l'environnement de script de contenu (`content`), `unsafeWindow` ne pointe que vers le `window` actuel de cet environnement, sans pouvoir accéder au `window` de la page.

ScriptCat ne prend pas en charge la détection automatique des restrictions CSP pour choisir entre injection `content` ou `page` (c'est-à-dire l'équivalent du `@inject-into auto` de Violentmonkey).

:::

Spécifie où le script est injecté, `page` ou `content`, `page` par défaut

- `page` : le script est injecté dans l'environnement de la page ; `unsafeWindow` permet d'accéder au `window` et au `DOM` de la page
- `content` : le script est injecté dans l'environnement de script de contenu ; pas d'accès direct au `window` de la page, mais accès au `DOM` de la page, sans restriction `CSP`

### storageName 🧪

Espace de stockage des `Value` ; les données partageant le même `storageName` peuvent être partagées et communiquer entre elles. Ceci est spécifique à ScriptCat.

### background

Indique que ce script est un script en arrière-plan, devant s'exécuter dans l'environnement d'arrière-plan — voir [Scripts en arrière-plan](pathname:///docs/dev/background.md#scripts-en-arrière-plan-background)

### crontab

Indique que le script est un script planifié, nécessitant une expression cron (une seule autorisée), exécuté périodiquement dans l'environnement d'arrière-plan — voir [Scripts planifiés](pathname:///docs/dev/background.md#scripts-planifiés-crontab)

### match

Seules les URL correspondant à `match` déclenchent l'exécution du script, en suivant les [Match patterns](https://developer.chrome.com/docs/extensions/mv3/match_patterns/) ; `*` sert de joker dans match, `tld` correspond au domaine de premier niveau, et un domaine commençant par `*.` correspond aussi à `xxx.com` :

| Valeur                           | Cas corrects                                                                                                                            | Cas incorrects                           |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| `http://scriptcat.org/doc/match` | `http://scriptcat.org/doc/match`                                                                                                        | `http://scriptcat.org/doc/runAt`         |
| `*://*/param?*`                  | `https://scriptcat.org/param` \| `http://scriptcat.org/param?search=油猴`                                                               | `https://scriptcat.org/test/param`       |
| `*://*/prefix*suffix`            | `http://scriptcat.org/prefix/suffix` \| `http://scriptcat.org/prefix/mid/suffix` \| `http://scriptcat.org/prefixsuffix`                 | `http://scriptcat.org/prefix/suffix/end` |
| `http*://scriptcat.org/*`        | `https://scriptcat.org/` \| `https://scriptcat.org/doc` \| `http://scriptcat.org/doc/match` \| `http://scriptcat.org/param?search=油猴` | `https://doc.scriptcat.org/`             |
| `http*://scriptcat.org/doc/*`    | `https://scriptcat.org/doc` \| `http://scriptcat.org/doc/match`                                                                         | `http://scriptcat.org/param?search=油猴` |
| `http*://scriptcat.tld/doc/*`    | `https://scriptcat.cn/doc` \| `http://scriptcat.net.cn/doc/match`                                                                       | `http://google.com/param?search=油猴`    |
| `http*://*.scriptcat.org/doc/*`  | `https://scriptcat.cn/doc` \| `http://www.scriptcat.net.cn/doc/match`                                                                   | `http://google.com/param?search=油猴`    |

### include

`*` permet une correspondance approximative, autorise les URL non standard

### exclude

Exclut des URL de la correspondance ; syntaxe identique à include

### grant

Demande une permission API ; l'API ne peut être appelée qu'une fois demandée. Liste des API : [Documentation de l'API](pathname:///docs/dev/api.md) et [Documentation de l'API CAT](pathname:///docs/dev/cat-api.md).

Deux valeurs spéciales :

- **none** : indique que le script ne s'exécute pas dans le bac à sable, mais directement dans l'environnement de la page ; aucune API GM n'est alors utilisable, mais le `window` de la page est directement accessible.
- **unsafeWindow** : pour accéder au `window` de la page depuis le bac à sable, utilisez `unsafeWindow`. (TM ne nécessite pas cette déclaration ; conservée pour compatibilité, bien que peu élégante.)

### connect

Obtient l'autorisation d'accès à un site — voir `GM_cookie` et `GM_xmlhttpRequest` ; le mode `native` de `GM_download` respecte également `@connect` (un domaine non déclaré déclenche une demande de confirmation, contrairement à TM)

### resource

Importe un fichier de ressource ; une fois `@resource` déclaré, utilisez `GM_getResourceText`/`GM_getResourceURL` pour récupérer son contenu

```js
// @resource icon https://bbs.tampermonkey.net.cn/favicon.ico
// @resource html https://bbs.tampermonkey.net.cn/
// @resource xml https://bbs.tampermonkey.net.cn/sitemap.xml
// Ajout d'une vérification d'intégrité de ressource
// @resource icon https://bbs.tampermonkey.net.cn/favicon.ico#md5-xxx,sha256-xxx
```

### require

Importe un fichier JS externe, avec possibilité de [vérification d'intégrité](#vérification-dintégrité-des-ressources)

### require-css

Importe un fichier CSS externe, avec possibilité de [vérification d'intégrité](#vérification-dintégrité-des-ressources)

### noframes

Indique que le script ne s'exécute pas dans une `<frame>`

### definition

URL de référence vers un fichier `.d.ts`, permettant l'autocomplétion dans l'éditeur

### antifeature

Lié au site de scripts ; à utiliser pour signaler des fonctionnalités indésirables, par exemple :

```js
// @antifeature ads Le script contient des publicités
// @antifeature referral-link Le script modifie ou redirige vers le lien d'affiliation de l'auteur
```

## Valeurs de description supplémentaires

### license

Licence open source du script actuel

### updateURL

La vérification de mise à jour ne fonctionne que si le script distant possède un tag `@version`.

Lien de vérification de mise à jour du script ; par défaut, non défini équivaut au lien `user.js => meta.js` ; en l'absence de `user.js`, la valeur par défaut est le lien actuel.

Si `@updateURL` est configuré, `@downloadURL` doit également l'être pour que `@updateURL` prenne effet.

### downloadURL

Adresse de téléchargement pour la mise à jour du script

### supportURL

Site de support, page de signalement de bugs

### homepage, homepageURL, website

Page d'accueil du script

### source

Page du code source du script

### icon, iconURL, defaulticon

Icône du script

### icon64， icon64URL

Icône du script en 64x64

### copyright

Informations de copyright du script

### tag

Tags du script, séparés par des virgules ou des espaces

### compatible

Informations de compatibilité affichées sur GreasyFork

### scriptUrl

URL du script utilisateur référencé par un script d'abonnement

### unwrap

Permet au script utilisateur de contourner l'encapsulation du bac à sable pour s'injecter et s'exécuter directement dans la portée globale native de la page. Le script peut alors accéder directement aux vraies variables globales de la page et les modifier, mais ne peut pas utiliser les API privilégiées de type `GM.*`. Souvent utilisé lorsqu'une interaction poussée avec les scripts natifs de la page est nécessaire, ou lors d'une migration depuis un script de page ordinaire.

### cloudCat

Marque le script comme exportable en tant que paquet de script cloud CloudCat (pris en charge par SC uniquement)

### cloudServer

Service cloud CloudCat utilisé par le script

### exportValue

Valeurs de stockage du script à exporter en même temps lors de l'export en script cloud

### exportCookie

Cookies à exporter en même temps lors de l'export en script cloud

### Remarques

### Vérification d'intégrité des ressources

- Utilisez md5, sha1, sha256, sha384 ou sha512 pour vérifier l'intégrité d'une ressource et empêcher toute altération. Plusieurs méthodes de vérification peuvent être séparées par `;` ou `,`.
- Selon les [recommandations du W3C](https://w3c.github.io/webappsec-subresource-integrity/#hash-collision-attacks), md5 et sha1 sont déconseillés ; préférez sha384 ou un algorithme de hachage plus robuste.

Par exemple :

```js
// @require https://cdn.jsdelivr.net/npm/darkmode-js@1.5.7/lib/darkmode-js.min.js#md5-d55836f30c097da753179f82fa6f108f,sha256-a476ab8560837a51938aa6e1720c8be87c2862b6221690e9de7ffac113811a90
```
