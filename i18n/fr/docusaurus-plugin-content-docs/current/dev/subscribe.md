---
title: Mode abonnement
---

Le début du fichier doit utiliser `UserSubscribe` au lieu de `UserScript` ; pour le lien d'installation, il est recommandé d'utiliser l'extension `user.sub.js`, et le lien doit obligatoirement être en `https`.

Un script d'abonnement affiche l'écran d'installation uniquement lors de l'installation initiale, pour que l'utilisateur confirme l'abonnement ; les mises à jour suivantes se font ensuite silencieusement, sauf si la permission `connect` change, auquel cas un écran de confirmation de mise à jour s'affiche.

Un script d'abonnement peut décrire les liens d'installation de plusieurs scripts. Les scripts installés via le mode abonnement sont installés silencieusement, sans écran de confirmation ; ils apparaissent dans la liste des scripts comme les autres, mais leur permission `connect` utilise celle déclarée dans l'abonnement, et non celle propre au script lui-même.

```js
// ==UserSubscribe==
// @name         xxx
// @description  Abonnement à la série de scripts xxx
// @version      0.1.0
// @author       You
// @connect      www.baidu.com
// @scriptUrl    https://script.tampermonkey.net.cn/48.user.js
// @scriptUrl    https://script.tampermonkey.net.cn/49.user.js
// ==/UserSubscribe==
```

## Mise à jour de l'abonnement et des scripts

Selon l'`intervalle de mise à jour` défini par l'utilisateur, une vérification périodique des mises à jour est effectuée via le lien de l'abonnement ; le champ `version` doit être renseigné pour que cela fonctionne.

À chaque mise à jour ou changement de l'abonnement, les liens de script sont comparés aux scripts déjà installés : les scripts absents du nouvel abonnement sont supprimés, et les nouveaux scripts sont installés silencieusement. La mise à jour de chaque script individuel se fait via son propre champ `version`, selon la même logique qu'une installation normale par l'utilisateur.

## Installation et mise à jour silencieuses

Les scripts d'un abonnement sont installés et mis à jour silencieusement : lors d'un ajout, d'une suppression ou d'une mise à jour, seule une notification s'affiche, sans nouvelle confirmation de l'utilisateur. En raison de ce mécanisme de mise à jour silencieuse, choisissez uniquement des sources d'abonnement sûres et dignes de confiance.


## metadata

Certaines directives de métadonnées changent de signification dans un script d'abonnement.

### name

Nom de l'abonnement (également modifiable directement depuis la liste des abonnements).

### description

Description de l'abonnement, précisant son objectif.

### version

Version de l'abonnement ; si omise, la mise à jour se base sur un changement du contenu du script d'abonnement lui-même.

### connect

Permission d'accès aux sites web — voir `GM_cookie` et `GM_xmlhttpRequest`. Le `connect` des scripts installés via un abonnement est remplacé par celui déclaré dans l'abonnement.

### scriptUrl

Lien(s) des scripts à installer via cet abonnement.
