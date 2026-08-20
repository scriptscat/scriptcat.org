---
title: Journal des modifications
---

import GithubStar from '@site/src/components/GithubStar';

<GithubStar variant="bar" scene="changelog" />

Pour le journal des modifications des versions Beta, consultez le [Journal des modifications Beta](./beta-changelog.md)

⚠️ Veuillez noter que si vous utilisez Windows 8/7/XP, ou si la version de votre noyau de navigateur est inférieure à \<120, vous devez installer manuellement la [version héritée de ScriptCat](https://github.com/scriptscat/scriptcat/releases). v0.16.x est la dernière version prenant en charge Manifest V2. Les étapes d'installation se trouvent ici : [Installer l'extension en chargeant le dossier décompressé](/use/use.md#load-unpacked-extension-installation).

<a name="1.4.0"></a>

## 1.4.0 (2026-06-26)

Cette version apporte une refactorisation de bas niveau en préparation de Firefox MV3, ainsi que des améliorations de l'expérience éditeur (menu d'édition, formatage Ctrl+Shift+F, correction rapide Monaco), la sélection de moteurs de recherche multi-plateformes pour la découverte de scripts, de nouvelles capacités telles que `@unwrap` / `window.onurlchange` / `@run-at context-menu`, un renforcement complet de la fiabilité de la synchronisation du stockage cloud, et un grand lot de corrections GM API, d'interface et de stabilité (y compris une fuite de mémoire à long terme et des vulnérabilités de sécurité par pollution des prototypes). L'Agent IA ScriptCat est disponible en aperçu dans les versions dev / Beta et n'est pas encore activé dans la version stable.

### 🚀 Principales nouvelles fonctionnalités

- 🧪 Agent IA ScriptCat (**Aperçu — disponible uniquement dans les versions dev / Beta, pas encore activé dans la version stable**) — système d'agent intelligent propulsé par l'IA avec interaction conversationnelle, appel d'outils, système de Skill, protocole MCP, et plus ([#1324](https://github.com/scriptscat/scriptcat/pull/1324)) (by @CodFrm)
- ✨ Prise en charge de la balise de métadonnées `@unwrap` ([#1213](https://github.com/scriptscat/scriptcat/pull/1213)) (by @cyfung1031)
- ✨ Implémentation de `window.onurlchange` de TM via l'API Navigation ([#1315](https://github.com/scriptscat/scriptcat/pull/1315)) (by @cyfung1031)
- ✨ Restauration de la prise en charge de `@run-at context-menu` ([#1442](https://github.com/scriptscat/scriptcat/pull/1442)) (by @cyfung1031)
- ✨ La découverte de scripts prend en charge la sélection de moteurs de recherche multi-plateformes ([#1295](https://github.com/scriptscat/scriptcat/pull/1295)) (by @CodFrm)
- ✨ Ajout de plus de fournisseurs de services d'icônes ([#1333](https://github.com/scriptscat/scriptcat/pull/1333)) (by @cyfung1031)
- ✨ Ajout d'une icône de vérification de mise à jour dans la colonne « dernière mise à jour » de la liste des scripts ([#1304](https://github.com/scriptscat/scriptcat/pull/1304)) (by @CodFrm)
- ✨ Amélioration de la gestion des conflits d'édition et des conflits de noms de scripts ([#1223](https://github.com/scriptscat/scriptcat/pull/1223)) (by @cyfung1031)

### 🧑‍💻 Éditeur

- ✨ Ajout d'un menu d'édition à l'éditeur (rechercher, remplacer, annuler, etc.) ([#1303](https://github.com/scriptscat/scriptcat/pull/1303)) (by @CodFrm)
- ✨ L'éditeur prend en charge le formatage Ctrl+Shift+F ([#1415](https://github.com/scriptscat/scriptcat/pull/1415)) (by @cyfung1031)
- ✨ Amélioration de la correction rapide Monaco et des indices de métadonnées de scripts utilisateur ([#1461](https://github.com/scriptscat/scriptcat/pull/1461)) (by @cyfung1031)
- 🐛 Correction des raccourcis Ctrl-F / Ctrl-H ([#1312](https://github.com/scriptscat/scriptcat/pull/1312)) (by @cyfung1031)
- 🐛 Correction de la fonctionnalité de correction ESLint qui ne fonctionnait pas [#1079](https://github.com/scriptscat/scriptcat/issues/1079) ([#1184](https://github.com/scriptscat/scriptcat/pull/1184)) (by @cyfung1031)
- 🐛 Correction des problèmes de mise en page CSS de l'éditeur ([#1460](https://github.com/scriptscat/scriptcat/pull/1460)) (by @cyfung1031)
- 🐛 Correction de l'affichage de la liste des scripts de ScriptEditor en thème clair ([#1288](https://github.com/scriptscat/scriptcat/pull/1288)) (by @CodFrm)
- 🐛 Correction et amélioration des problèmes de ScriptEditor ([#1258](https://github.com/scriptscat/scriptcat/pull/1258)) (by @cyfung1031)

### ⚡️ Améliorations de performances

- 🚑 Correction d'une fuite de mémoire potentielle lors de sessions ScriptCat de longue durée ([#1401](https://github.com/scriptscat/scriptcat/pull/1401)) (by @cyfung1031)
- ⚡️ Suppression de la dépendance au système de fichiers Baidu pour les règles DNR globales, passage à la désactivation des cookies par requête ([#1377](https://github.com/scriptscat/scriptcat/pull/1377)) (by @cyfung1031)
- ⚡️ Optimisation de la sélection de moteurs de recherche multi-plateformes pour la découverte de scripts ([#1379](https://github.com/scriptscat/scriptcat/pull/1379)) (by @cyfung1031)
- ⚡️ Utilisation d'une police monospace pour le loadingStatus de la page d'installation afin d'éviter les à-coups ([#1381](https://github.com/scriptscat/scriptcat/pull/1381)) (by @cyfung1031)
- ⚡️ Optimisation du traitement de pushValue ([#1403](https://github.com/scriptscat/scriptcat/pull/1403)) (by @cyfung1031)
- ⚡️ Contrôles de permissions plus complets et meilleurs indices de permissions de scripts utilisateur ([#1251](https://github.com/scriptscat/scriptcat/pull/1251)) (by @cyfung1031)
- ⚡️ Amélioration de la gestion de la mémoire et du mécanisme de nettoyage de MessageConnect ([#1248](https://github.com/scriptscat/scriptcat/pull/1248)) (by @cyfung1031)

### 🐛 Corrections de bugs

- 🐛 Renforcement de la fiabilité de la synchronisation du stockage cloud (authentification, gestion des chemins et logique de relance Dropbox / WebDAV / Google Drive / OneDrive) ([#1374](https://github.com/scriptscat/scriptcat/pull/1374) ~ [#1395](https://github.com/scriptscat/scriptcat/pull/1395)) (by @cyfung1031)
- 🐛 Correction de plusieurs problèmes de synchronisation cloud : téléversement zéro octet OneDrive, normalisation des erreurs Google Drive / OneDrive, modifiedDate de métadonnées personnalisées S3 ([#1405](https://github.com/scriptscat/scriptcat/pull/1405)) ([#1406](https://github.com/scriptscat/scriptcat/pull/1406)) ([#1408](https://github.com/scriptscat/scriptcat/pull/1408)) (by @cyfung1031)
- 🐛 Suppression de la sonde d'écriture de vérification WebDAV pour éviter les faux négatifs sur les services dont la racine n'est pas accessible en écriture (ex. Nutstore) ([#1445](https://github.com/scriptscat/scriptcat/pull/1445)) (by @CodFrm)
- 🐛 Correction de l'échec des requêtes cross-origin lorsque la permission d'accès au site est manquante ([#1477](https://github.com/scriptscat/scriptcat/pull/1477)) (by @cyfung1031)
- 🐛 Correction de l'adaptation de la popup mobile Edge Android [#686](https://github.com/scriptscat/scriptcat/issues/686) ([#1507](https://github.com/scriptscat/scriptcat/pull/1507)) (by @CodFrm)
- 🐛 Correction du flash de fond blanc lors du chargement initial [#1497](https://github.com/scriptscat/scriptcat/issues/1497) ([#1498](https://github.com/scriptscat/scriptcat/pull/1498)) (by @cyfung1031)
- 🐛 Correction des connexions de messages (API GM / ports) qui n'étaient pas correctement nettoyées ([#1474](https://github.com/scriptscat/scriptcat/pull/1474)) (by @cyfung1031)
- 🐛 Correction de la non-correspondance du modèle `@match` lorsque la recherche est manquante ([#1466](https://github.com/scriptscat/scriptcat/pull/1466)) (by @cyfung1031)
- 🐛 Ajout de `protoBaseDescs` pour corriger l'héritage des classes ancêtres dans le semi-sandbox Tampermonkey ([#1463](https://github.com/scriptscat/scriptcat/pull/1463)) (by @cyfung1031)
- 🐛 Correction de la gestion de null manquante pour msgConn de `GM_xmlhttpRequest` ([#1433](https://github.com/scriptscat/scriptcat/pull/1433)) (by @cyfung1031)
- 🐛 Correction de la gestion incorrecte de onloadend anormal par GM xhr ([#1412](https://github.com/scriptscat/scriptcat/pull/1412)) (by @cyfung1031)
- 🐛 Correction des problèmes de mise à jour dynamique et d'affichage de la liste de ScriptEditor ([#1414](https://github.com/scriptscat/scriptcat/pull/1414)) (by @cyfung1031)
- 🐛 Correction du problème de nombre de règles de session avec xhr concurrent ([#1353](https://github.com/scriptscat/scriptcat/pull/1353)) (by @cyfung1031)
- 🐛 Correction du crash de toute la page causé par une expression cron invalide ([#1327](https://github.com/scriptscat/scriptcat/pull/1327)) (by @cyfung1031)
- 🐛 Correction de l'échec de tous les scripts lorsqu'un seul script expire pendant la vérification de mise à jour par lots ([#1265](https://github.com/scriptscat/scriptcat/pull/1265)) (by @cyfung1031)
- 🐛 Ajout de la gestion extensionEnv pour isIncognito, userAgent et run-in ([#1368](https://github.com/scriptscat/scriptcat/pull/1368)) (by @cyfung1031)
- 🐛 Correction du bouton du guide d'intégration partiellement masqué [#1396](https://github.com/scriptscat/scriptcat/issues/1396) ([#1398](https://github.com/scriptscat/scriptcat/pull/1398)) (by @cyfung1031)
- 🐛 Correction de l'infobulle masquée sur la page de gestion des scripts [#1386](https://github.com/scriptscat/scriptcat/issues/1386) ([#1387](https://github.com/scriptscat/scriptcat/pull/1387)) (by @Xdy1579883916)
- 🐛 Correction du redimensionnement anormal de la barre latérale en mode carte [#1179](https://github.com/scriptscat/scriptcat/issues/1179) ([#1373](https://github.com/scriptscat/scriptcat/pull/1373)) (by @cyfung1031)
- 🐛 Correction de l'origine incorrecte lors de l'installation de fichiers locaux par glisser-déposer ([#1371](https://github.com/scriptscat/scriptcat/pull/1371)) (by @cyfung1031)
- 🐛 Correction du message de changement de langue ([#1380](https://github.com/scriptscat/scriptcat/pull/1380)) (by @cyfung1031)
- 🐛 Amélioration de l'interface d'affichage des journaux ([#1372](https://github.com/scriptscat/scriptcat/pull/1372)) (by @cyfung1031)
- 🐛 Correction du CSS de UserConfigPanel ([#1361](https://github.com/scriptscat/scriptcat/pull/1361)) (by @cyfung1031)
- 🐛 Utilisation de `Object.create(null)` pour l'objet vide dans create_context ([#1397](https://github.com/scriptscat/scriptcat/pull/1397)) (by @cyfung1031)
- 🐛 Correction de la logique de mise à jour silencieuse et de permission de connexion des scripts abonnés ([#1201](https://github.com/scriptscat/scriptcat/pull/1201)) (by @cyfung1031)
- 🐛 Correction du bouton de requête de la page de journaux qui ne rafraîchissait pas l'heure ([#1294](https://github.com/scriptscat/scriptcat/pull/1294)) (by @CodFrm)

### 🔒 Améliorations de sécurité

- 🔒 Correction de la pollution des prototypes via des clés de configuration utilisateur YAML non fiables ([#1494](https://github.com/scriptscat/scriptcat/pull/1494)) (by @qdzsh)
- 🔒 Correction de toutes les vulnérabilités de sécurité des dépendances npm ([#1350](https://github.com/scriptscat/scriptcat/pull/1350)) ([#1364](https://github.com/scriptscat/scriptcat/pull/1364)) ([#1365](https://github.com/scriptscat/scriptcat/pull/1365)) (by @cyfung1031)

### ♻️ Refactorisation et compatibilité

- ♻️ Refactorisation de bas niveau en préparation de l'adaptation Firefox MV3 ([#1457](https://github.com/scriptscat/scriptcat/pull/1457)) ([#1480](https://github.com/scriptscat/scriptcat/pull/1480)) (by @cyfung1031)
- ♻️ Refactorisation de la logique de mise à jour des ressources de scripts (updateResource) et du contrôle de concurrence, restauration de la compatibilité du cache de ressources ([#1193](https://github.com/scriptscat/scriptcat/pull/1193)) (by @cyfung1031)
- ♻️ Remplacement de jszip par JSZipp pour le traitement ZIP (import / export de sauvegarde) et suppression de la dépendance jszip inutilisée ([#1479](https://github.com/scriptscat/scriptcat/pull/1479)) (by @cyfung1031)
- ♻️ Unification de la communication Offscreen ↔ ServiceWorker via le canal postMessage ([#1299](https://github.com/scriptscat/scriptcat/pull/1299)) (by @CodFrm)
- ♻️ Refactorisation du code VSCodeConnect ([#1170](https://github.com/scriptscat/scriptcat/pull/1170)) (by @cyfung1031)
- ⚡️ Compression de ts.worker.js à 4 Mo pour passer la validation AMO, correction de l'erreur de permission de fond MV3 ([#1221](https://github.com/scriptscat/scriptcat/pull/1221)) (by @cyfung1031)

### 🌐 Internationalisation

- 🌐 Correction des traductions terminologiques multilingues (principalement l'amélioration du chinois traditionnel) et ajout de directives de terminologie de traduction ([#1468](https://github.com/scriptscat/scriptcat/pull/1468)) (by @cyfung1031)

### Autres

- ✨ Passage du service d'icônes fetchIconByDomain à scriptcat.org ([#1268](https://github.com/scriptscat/scriptcat/pull/1268)) (by @cyfung1031)
- 🔥 Suppression du contenu lié à Crowdin et au pseudo-langage ach-UG ([#1385](https://github.com/scriptscat/scriptcat/pull/1385)) (by @CodFrm)

<a name="0.16.15"></a>

## 0.16.15 (2026-05-19)

### 🐛 Corrections de bugs

- 🐛 Correction de la commande de construction du script de packaging MV2 [#1423](https://github.com/scriptscat/scriptcat/issues/1423) (by @CodFrm)
- 🐛 Adaptation aux changements de l'API WebExtensions (Firefox 149-152), y compris les ajustements CSP ([#1448](https://github.com/scriptscat/scriptcat/pull/1448)) (by @cyfung1031)

<a name="0.16.14"></a>

## 0.16.14 (2026-04-26)

### 🚀 Principales nouvelles fonctionnalités

- ✨ Synchronisation FirefoxMV2 avec les principaux éléments MV3 : TypeScript mis à niveau vers 4.9, tsconfig mis à niveau vers es2022 ; modèles de scripts (normal/crontab/background) alignés sur MV3 ; cron amélioré avec la prise en charge de l'expression `once(...)` ; prise en charge multilingue de l'éditeur Monaco ([#1331](https://github.com/scriptscat/scriptcat/pull/1331)) (by @cyfung1031)

### ♻️ Refactorisation et compatibilité

- 🔥 Suppression de la dépendance axios pour s'aligner sur MV3 ([#1339](https://github.com/scriptscat/scriptcat/pull/1339)) (by @cyfung1031)

### 🐛 Corrections de bugs

- 🐛 Correction du fait que l'iframe imbriquée de window.parent ne recevait pas les messages postMessage ([#1335](https://github.com/scriptscat/scriptcat/pull/1335)) (by @cyfung1031)

<a name="1.3.2"></a>

## 1.3.2 (2026-03-28)

### 🐛 Corrections de bugs

- 🐛 Suppression de l'en-tête Accept de fetchScriptBody pour éviter l'erreur 406 ([#1306](https://github.com/scriptscat/scriptcat/pull/1306)) (by @cyfung1031)
- 🐛 Correction du conflit d'authentification des cookies WebDAV et de la prise en charge d'authType ([#1308](https://github.com/scriptscat/scriptcat/pull/1308)) (by @CodFrm)
- 🐛 Affichage correct des erreurs de formatage ([#1310](https://github.com/scriptscat/scriptcat/pull/1310)) (by @cyfung1031)
- 🐛 Utilisation de chrome.storage.local pour les configurations spécifiques à l'appareil afin d'éviter la synchronisation entre appareils ([#1309](https://github.com/scriptscat/scriptcat/pull/1309)) (by @CodFrm)
- 🐛 Correction des problèmes d'indices de l'éditeur de code ([#1301](https://github.com/scriptscat/scriptcat/pull/1301)) (by @cyfung1031)
- 🐛 Correction du rognage de la popup du sélecteur de date dans la page de journaux ([#1292](https://github.com/scriptscat/scriptcat/pull/1292)) (by @cyfung1031)
- 🐛 Correction de l'affichage du bouton de dissociation lorsqu'aucun lecteur cloud n'est associé ([#1291](https://github.com/scriptscat/scriptcat/pull/1291)) (by @CodFrm)
- 🐛 Correction de la popup masquée ([#1290](https://github.com/scriptscat/scriptcat/pull/1290)) (by @cyfung1031)

<a name="1.3.1"></a>

## 1.3.1 (2026-03-13)

### 🐛 Corrections de bugs

- 🚑 Correction de l'erreur de détection d'environnement causée par d'autres extensions injectant chrome.runtime [#1280](https://github.com/scriptscat/scriptcat/issues/1280) ([#1281](https://github.com/scriptscat/scriptcat/pull/1281)) (by @CodFrm)

### Autres

- ✅ Ajout de tests E2E Playwright et de tests fonctionnels de l'API GM ([#1283](https://github.com/scriptscat/scriptcat/pull/1283)) (by @CodFrm)

<a name="1.3.0"></a>

## 1.3.0 (2026-03-10)

Cette mise à jour apporte le stockage Amazon S3, les options d'exécution des scripts, l'installation sans accès à un site web externe, et plus encore. Elle optimise considérablement le système de messagerie et les performances React, corrige de nombreux problèmes d'API GM, d'interface et de stabilité, et inclut d'importantes améliorations de la qualité du code.

### 🚀 Principales nouvelles fonctionnalités

- ✨ Ajout du stockage Amazon S3 [#1146](https://github.com/scriptscat/scriptcat/issues/1146) ([#1189](https://github.com/scriptscat/scriptcat/pull/1189)) (by @CodFrm)
- ✨ Options d'exécution des scripts ([#895](https://github.com/scriptscat/scriptcat/pull/895)) (by @CodFrm)
- ✨ Installation sans accès à un site web externe + ajustements de la mise en page de la page d'installation ([#842](https://github.com/scriptscat/scriptcat/pull/842)) (by @cyfung1031)
- ✨ Affichage d'une icône grise lorsque la fonctionnalité du script est désactivée [#897](https://github.com/scriptscat/scriptcat/issues/897) (by @CodFrm)
- ✨ Optimisation de l'interaction lorsque le nombre d'éléments développés du menu est 0 [#868](https://github.com/scriptscat/scriptcat/issues/868) (by @CodFrm)
- ✨ `@noframes` par défaut dans le modèle pour éviter les erreurs courantes ([#900](https://github.com/scriptscat/scriptcat/pull/900)) (by @cyfung1031)
- ✨ Empêcher que le lien d'installation ne soit mal jugé comme une nouvelle installation lorsque le nom du script change ([#824](https://github.com/scriptscat/scriptcat/pull/824)) (by @cyfung1031)
- ✨ Correction de la validation des conflits `@grant`, ajout d'une invite d'erreur de déclaration de métadonnées dupliquée ([#902](https://github.com/scriptscat/scriptcat/pull/902)) (by @cyfung1031)
- ✨ Acceptation de `@version` sans valeur ou avec une valeur vide ([#1216](https://github.com/scriptscat/scriptcat/pull/1216)) (by @cyfung1031)
- ✨ Ajustement de la position de la barre latérale masquée de l'éditeur [#1185](https://github.com/scriptscat/scriptcat/issues/1185) ([#1254](https://github.com/scriptscat/scriptcat/pull/1254)) (by @CodFrm)

### 🧩 Changements de l'API GM

- 🐛 Correction du problème de GM_addElement, déplacement de l'opération dans l'environnement de contenu ([#1233](https://github.com/scriptscat/scriptcat/pull/1233)) (by @cyfung1031)
- 🐛 Ajout du paramètre `conflictAction` à `GM_download` ([#1250](https://github.com/scriptscat/scriptcat/pull/1250)) (by @cyfung1031)
- 🐛 Correction des déclarations asynchrones de l'API GM, retour correct de Promise ([#1169](https://github.com/scriptscat/scriptcat/pull/1169)) (by @cyfung1031)
- ♻️ Compatibilité Firefox : GM_setClipboard ([#928](https://github.com/scriptscat/scriptcat/pull/928)) (by @cyfung1031)
- 🐛 Correction du problème de GM_value [#1192](https://github.com/scriptscat/scriptcat/issues/1192) (by @CodFrm)
- 🐛 Correction du nom de fichier de téléchargement ne prenant pas en charge les dossiers ([#1203](https://github.com/scriptscat/scriptcat/pull/1203)) (by @cyfung1031)

### ⚡️ Améliorations de performances

- ♻️ Refactorisation du système de messagerie : diffusion storage.local + conformité scripting Firefox MV3 + MessageFlag de synchronisation dynamique intraçable ([#1067](https://github.com/scriptscat/scriptcat/pull/1067)) (by @cyfung1031)
- ⚡️ Correction des problèmes de re-rendu React (ScriptCard & ScriptTable) ([#1182](https://github.com/scriptscat/scriptcat/pull/1182)) (by @cyfung1031)
- ⚡️ Correction des problèmes de re-rendu React (Popup) ([#1181](https://github.com/scriptscat/scriptcat/pull/1181)) (by @cyfung1031)
- ⚡️ Optimisation des performances de Repo ([#1232](https://github.com/scriptscat/scriptcat/pull/1232)) (by @CodFrm)
- ⚡️ Déplacement des métadonnées hors de chrome.storage.session ([#1027](https://github.com/scriptscat/scriptcat/pull/1027)) (by @cyfung1031)
- ⚡️ Amélioration de la détection de jeu de caractères ([#1140](https://github.com/scriptscat/scriptcat/pull/1140)) (by @cyfung1031)
- ⚡️ Stockage des icônes par URL pour éviter le stockage en double entre les scripts ([#909](https://github.com/scriptscat/scriptcat/pull/909)) (by @cyfung1031)
- ⚡️ Optimisation du code parseMetadata ([#903](https://github.com/scriptscat/scriptcat/pull/903)) (by @cyfung1031)
- 🐛 Correction des fuites de mémoire et de l'exposition de propriétés d'objets ([#1242](https://github.com/scriptscat/scriptcat/pull/1242)) (by @cyfung1031)
- ♻️ Suppression de Redux, simplification de la gestion d'état ([#1206](https://github.com/scriptscat/scriptcat/pull/1206)) (by @cyfung1031)

### 🧑‍💻 Éditeur

- ✨ Optimisation des paramètres de l'éditeur Monaco, ajout de la correction `/* global xxx */` ([#1012](https://github.com/scriptscat/scriptcat/pull/1012)) (by @cyfung1031)
- ✨ Indices multilingues de l'éditeur Monaco et ajout de l'indice `@require-css` ([#960](https://github.com/scriptscat/scriptcat/pull/960)) (by @cyfung1031)

### 🐛 Corrections de bugs

- 🐛 Correction du conflit de vérification des permissions de la fenêtre de navigation privée provoquant des redémarrages répétés (by @CodFrm)
- 🐛 Correction de la gestion de l'expression include `*?*` [#1271](https://github.com/scriptscat/scriptcat/issues/1271) ([#1272](https://github.com/scriptscat/scriptcat/pull/1272)) (by @CodFrm)
- 🔒 Assainissement du contenu HTML des notifications d'annonces avec DOMPurify ([#1274](https://github.com/scriptscat/scriptcat/pull/1274)) (by @CodFrm)
- 🐛 Correction du contrôle de gestion des permissions des paramètres de scripts qui ne fonctionnait pas ([#1267](https://github.com/scriptscat/scriptcat/pull/1267)) (by @CodFrm)
- 🐛 Correction du contenu de la popup suivant le défilement de l'écran [#1256](https://github.com/scriptscat/scriptcat/issues/1256) ([#1263](https://github.com/scriptscat/scriptcat/pull/1263)) (by @cyfung1031)
- 🐛 Correction de l'échec d'analyse du lien d'installation [#1235](https://github.com/scriptscat/scriptcat/issues/1235) ([#1260](https://github.com/scriptscat/scriptcat/pull/1260)) (by @cyfung1031)
- 🐛 Correction du composant de glisser-déposer causant un décalage focusin/focusout [#1224](https://github.com/scriptscat/scriptcat/issues/1224) ([#1243](https://github.com/scriptscat/scriptcat/pull/1243)) (by @CodFrm)
- 🐛 Correction de l'API d'extension externe qui ne fonctionnait pas ([#1217](https://github.com/scriptscat/scriptcat/pull/1217)) (by @cyfung1031)
- 🐛 Correction du problème de grant ([#1199](https://github.com/scriptscat/scriptcat/pull/1199)) (by @CodFrm)
- 🐛 Correction de UserAgentData manquant dans content.js ([#1183](https://github.com/scriptscat/scriptcat/pull/1183)) (by @cyfung1031)
- 🐛 Gestion du problème d'encodage des scripts [#1115](https://github.com/scriptscat/scriptcat/issues/1115) ([#1138](https://github.com/scriptscat/scriptcat/pull/1138)) (by @CodFrm)
- 🐛 Correction de l'affichage des icônes de scripts [#1052](https://github.com/scriptscat/scriptcat/issues/1052) ([#1104](https://github.com/scriptscat/scriptcat/pull/1104)) (by @CodFrm)
- 🐛 Ajout du préfixe UnoCSS pour résoudre les conflits CSS, correction de la mise en page CSS ([#1013](https://github.com/scriptscat/scriptcat/pull/1013)) (by @cyfung1031)
- 🐛 Effacement de l'Alarm existant lors du choix d'une vérification de mise à jour de scripts irrégulière ([#996](https://github.com/scriptscat/scriptcat/pull/996)) (by @cyfung1031)
- 🐛 Import & export - correction de la date/heure de dernière modification incorrecte des scripts ([#951](https://github.com/scriptscat/scriptcat/pull/951)) (by @cyfung1031)
- 🐛 Correction de l'affichage du nom et de la description des scripts avec préfixe de langue i18n [#1123](https://github.com/scriptscat/scriptcat/issues/1123) (by @CodFrm)
- 🐛 Correction de l'exécution incorrecte de unregister ([#1231](https://github.com/scriptscat/scriptcat/pull/1231)) (by @cyfung1031)

### ♻️ Refactorisation et compatibilité

- ♻️ Ajustements de l'API userScripts / scripting, amélioration de la compatibilité (redo #704) ([#925](https://github.com/scriptscat/scriptcat/pull/925)) (by @cyfung1031)
- ♻️ Changements liés à Cron : corrections de bugs, i18n, amélioration de l'expression once, mise à niveau de la bibliothèque cron ([#1126](https://github.com/scriptscat/scriptcat/pull/1126)) (by @cyfung1031)
- ♻️ Refactorisation et optimisation du chargement des icônes de scripts ([#893](https://github.com/scriptscat/scriptcat/pull/893)) (by @CodFrm)
- ♻️ Amélioration du décodage de texte ([#1166](https://github.com/scriptscat/scriptcat/pull/1166)) (by @cyfung1031)
- ⬆️ Mise à niveau de la version du noyau compatible swc ([#1186](https://github.com/scriptscat/scriptcat/pull/1186)) (by @cyfung1031)

### 🎨 Améliorations de l'interface

- 🎨 Changement du nombre de badge de l'icône d'extension par défaut en nombre de scripts [#989](https://github.com/scriptscat/scriptcat/issues/989) (by @CodFrm)
- 🎨 Rendre l'URL de la page d'installation plus jolie ([#993](https://github.com/scriptscat/scriptcat/pull/993)) (by @cyfung1031)
- 🐛 Refactorisation de DraggableEntry, correction de l'alignement de la hauteur des cartes ([#1245](https://github.com/scriptscat/scriptcat/pull/1245)) (by @cyfung1031)

### Divers

- 🔒 Améliorations de sécurité (DOMPurify, corrections des vulnérabilités des dépendances npm)
- 👷 Optimisation du bundling Rspack, corrections de la chaîne d'outils de construction
- ⬆️ Mises à jour des versions de dépendances

**Journal des modifications complet :** [Comparer v1.2.6...v1.3.0](https://github.com/scriptscat/scriptcat/compare/v1.2.6...v1.3.0)

<a name="1.2.6"></a>

## 1.2.6 (2026-02-03)

### Corrigé

- 🐛 Correction de l'erreur structuredClone ([#1192](https://github.com/scriptscat/scriptcat/issues/1192)) [[265e122](https://github.com/scriptscat/scriptcat/commit/265e122342366b166d3122cc8da485cb1295b924)] (by @cyfung1031)

<a name="1.2.5"></a>

## 1.2.5 (2026-02-02)

### Corrigé

- 🐛 Correction du problème de suppression de synchronisation des scripts [#1158](https://github.com/scriptscat/scriptcat/issues/1158) [[5e91a31](https://github.com/scriptscat/scriptcat/commit/5e91a31e02761ba8061e3de1f4d15fc1d964346c)] (by @CodFrm)
- 🐛 Compatible avec TM &#x60;@match www.website.com/*&#x60; ([#1165](https://github.com/scriptscat/scriptcat/issues/1165)) [[da66ff7](https://github.com/scriptscat/scriptcat/commit/da66ff70d25c3087cb8405289dc8b14df9c15f05)] (by @cyfung1031)
- 🐛 La dernière version d'Edge 144 ajoute les scripts utilisateur [#1157](https://github.com/scriptscat/scriptcat/issues/1157) [[f7c1c73](https://github.com/scriptscat/scriptcat/commit/f7c1c730cf39cae02a9e6f815e3113ea9d2a8a05)] (by @CodFrm)
- 🐛 Correction du problème de surveillance continue de FileSystemObserver ([#1160](https://github.com/scriptscat/scriptcat/issues/1160)) [[9556769](https://github.com/scriptscat/scriptcat/commit/95567690d1bf77bfe8bedfd6a94c88949a77e115)] (by @cyfung1031)
- 🐛 Corrections mineures de locales.ts ([#1154](https://github.com/scriptscat/scriptcat/issues/1154)) [[1c44b68](https://github.com/scriptscat/scriptcat/commit/1c44b680dab3a95a51eb73cf92531efd0a192dc9)] (by @cyfung1031)
- 🐛 Correction du problème d'heure de la fenêtre de mise à jour de la popup ([#1155](https://github.com/scriptscat/scriptcat/issues/1155)) [[c17f761](https://github.com/scriptscat/scriptcat/commit/c17f761807fb9b14aff09b9b08d19e4cbe72b8a5)] (by @cyfung1031)
- 🐛 Correction de l'affichage du nom et de la description des scripts avec préfixe de langue i18n [#1123](https://github.com/scriptscat/scriptcat/issues/1123) [[7ef7355](https://github.com/scriptscat/scriptcat/commit/7ef7355632fc989fa1cad44fd2069ff840bbd8df)] (by @CodFrm)
- 🐛 Gestion du problème de référence de valeur [#1141](https://github.com/scriptscat/scriptcat/issues/1141) ([#1147](https://github.com/scriptscat/scriptcat/issues/1147)) [[0892fcd](https://github.com/scriptscat/scriptcat/commit/0892fcd452758030553c33ddf14f1ce4bc6d3efc)] (by @cyfung1031)

<a name="1.2.4"></a>

## 1.2.4 (2026-01-07)

Correction des bugs de synchronisation, et les mises à jour de version n'ouvriront plus automatiquement la page du journal des modifications

### Ajouté

- ✨ La suppression par synchronisation est désormais désactivée par défaut ([#958](https://github.com/scriptscat/scriptcat/issues/958)) [[9c4c7dc](https://github.com/scriptscat/scriptcat/commit/9c4c7dc411357746db43a306d97ac41a71f2b49c)] (by @cyfung1031)
- ✨ L'éditeur prend désormais en charge GM.\* ([#1129](https://github.com/scriptscat/scriptcat/issues/1129)) [[bea0192](https://github.com/scriptscat/scriptcat/commit/bea0192c6cc50eff2ed4e1cc5dcc25f36bbe10e7)] (by @cyfung1031)

### Modifié

- ♻️ Optimisation de la logique d'ouverture de la page du journal des modifications [#1110](https://github.com/scriptscat/scriptcat/issues/1110) [[d3ffedc](https://github.com/scriptscat/scriptcat/commit/d3ffedcffe752ca548f87f1640072fcd871b8604)] (by @CodFrm)

### Corrigé

- 🐛 scriptcat.d.tpl &amp; corrections de types ([#1130](https://github.com/scriptscat/scriptcat/issues/1130)) [[dd22ef5](https://github.com/scriptscat/scriptcat/commit/dd22ef544684d69e24a7aae098cb05cbab03daa8)] (by @cyfung1031)
- 🐛 Correction des problèmes de synchronisation cloud ([#1133](https://github.com/scriptscat/scriptcat/issues/1133)) [[a9383d2](https://github.com/scriptscat/scriptcat/commit/a9383d2012eb3953dc33c8886ce3891f404fa100)] (by @CodFrm)
- 🐛 Correction de l'erreur &#x60;GM_addElement(&quot;tagName&quot;)&#x60; ([#1120](https://github.com/scriptscat/scriptcat/issues/1120)) [[ad19de5](https://github.com/scriptscat/scriptcat/commit/ad19de5c1793c8c079bedbf1b11c7c2ae27a469e)] (by @cyfung1031)
- 🐛 Suppression de la logique de nettoyage et optimisation de la logique checkuserscript ([#1113](https://github.com/scriptscat/scriptcat/issues/1113)) [[e635911](https://github.com/scriptscat/scriptcat/commit/e635911a3c11c3cb8acd1cfd507cb777e5ee7236)] (by @CodFrm)

### Divers

- 🏷️ Révisions TypeScript ([#1127](https://github.com/scriptscat/scriptcat/issues/1127)) [[b455724](https://github.com/scriptscat/scriptcat/commit/b4557244191018c18d5ce8ea8e8627bcfb7f7cdd)] (by @cyfung1031)
- 📝 Compléments de commentaires d'exemples ([#1131](https://github.com/scriptscat/scriptcat/issues/1131)) [[292549e](https://github.com/scriptscat/scriptcat/commit/292549ed0f65952fe9f269aace23eefc7d6a3a0f)] (by @cyfung1031)

<a name="1.2.3"></a>

## 1.2.3 (2025-12-20)

Quelques corrections de bugs

### Modifié

- ⚡ Optimisation de l'affichage de la prochaine heure d'exécution [#1093](https://github.com/scriptscat/scriptcat/issues/1093) [[324ce51](https://github.com/scriptscat/scriptcat/commit/324ce515c84699ca8d3bf1ee447fc6ef0656ae0d)] (by @CodFrm)

### Corrigé

- 🐛 Correction du problème de correspondance d'URL pour les scripts précoces ([#1096](https://github.com/scriptscat/scriptcat/issues/1096)) [[a77effb](https://github.com/scriptscat/scriptcat/commit/a77effbab5ab4d1752065ef943d9c050ff99c066)] (by @cyfung1031)
- 🐛 Correction du problème d'affichage trop bref de la fenêtre de mise à jour ([#1088](https://github.com/scriptscat/scriptcat/issues/1088)) [[b2b2d5c](https://github.com/scriptscat/scriptcat/commit/b2b2d5c41ff70ee5430f7d8d156f480ac8fc3a1a)] (by @cyfung1031)
- 🐛 Correction de l'affichage anormal lorsque la notification de script utilisateur est activée ([#1086](https://github.com/scriptscat/scriptcat/issues/1086)) ([959c4db](https://github.com/scriptscat/scriptcat/commit/959c4dbed92f7bfe22a2f8ebb775c4189b5ff076))
- 🐛 responseHeaders : &#x60;Compatibilité TM : \\r\\n&#x60; ([#1085](https://github.com/scriptscat/scriptcat/issues/1085)) [[15232c8](https://github.com/scriptscat/scriptcat/commit/15232c8543d93abfdafa1353d39d8a15d1dc385f)] (by @cyfung1031)
- 🐛 Correction des problèmes de GM XHR ([#1082](https://github.com/scriptscat/scriptcat/issues/1082)) [[3d987c3](https://github.com/scriptscat/scriptcat/commit/3d987c300242a3c765146359c35ecd6d998f792c)] (by @CodFrm)

### Divers

- 🌐 Gestion des problèmes i18n sur les pages popup [#1081](https://github.com/scriptscat/scriptcat/issues/1081) [[6b17d71](https://github.com/scriptscat/scriptcat/commit/6b17d7100e8572d72b3b7aaf8ea38be9cdf33f5f)] (by @CodFrm)

<a name="1.2.2"></a>

## 1.2.2 (2025-12-13)

Quelques corrections de bugs

### Corrigé

- 🐛 Correction du problème de synchronisation en arrière-plan fréquente ([#1076](https://github.com/scriptscat/scriptcat/issues/1076)) [[45dc39b](https://github.com/scriptscat/scriptcat/commit/45dc39baa0f3326cf12e97312ab632dc46ba40f2)] (by @CodFrm)
- 🐛 Correction du problème de gestion des onglets spéciaux [#1066](https://github.com/scriptscat/scriptcat/issues/1066) ([50904fb](https://github.com/scriptscat/scriptcat/commit/50904fb46efdea10fd57677bc2d28c770b47e861))
- 🐛 Correction de la gestion des scripts sans règles de correspondance [#1071](https://github.com/scriptscat/scriptcat/issues/1071) ([560cdc0](https://github.com/scriptscat/scriptcat/commit/560cdc01fc0fc27fb7d0e3b877c63ba431206668))
- 🐛 Correction du problème de packaging CI qui supprimait les permissions optionnelles en arrière-plan [[1f002f0](https://github.com/scriptscat/scriptcat/commit/1f002f0edf9892f023ae93b8522ff7c5e4a96559)] (by @CodFrm)
- 🐛 Correction de l'ignorance des onglets rejetés ([#1058](https://github.com/scriptscat/scriptcat/issues/1058)) [[6165bf4](https://github.com/scriptscat/scriptcat/commit/6165bf48eb1d53ede0561c85c30135446c2ff882)] (by @cyfung1031)

<a name="1.2.1"></a>

## 1.2.1 (2025-12-06)

Quelques corrections de bugs et gestion des options d'exécution en arrière-plan.

### Ajouté

- ✨ Ajout de l'option d'exécution en arrière-plan ([#1048](https://github.com/scriptscat/scriptcat/issues/1048)) [[626e84d](https://github.com/scriptscat/scriptcat/commit/626e84dbd4dda0731e0a5ffdbdf71ae10e884489)] (by @CodFrm)

### Corrigé

- 🐛 Correction du problème de réinitialisation de l'écouteur de messages causé par document.write ([#1055](https://github.com/scriptscat/scriptcat/issues/1055)) [[1f3a3ec](https://github.com/scriptscat/scriptcat/commit/1f3a3ec335ed4b519599e9aa3036c66b6f0d10b2)] (by @cyfung1031)
- 🐛 Correction de la fonctionnalité de filtrage de la vue en liste [[e272dc6](https://github.com/scriptscat/scriptcat/commit/e272dc6ed151c15a1ef785b70ae100cb9e74a5dd)] (by @CodFrm)
- 🐛 Gestion de UserAgentData en phase précoce ([#1045](https://github.com/scriptscat/scriptcat/issues/1045)) [[b4e08a8](https://github.com/scriptscat/scriptcat/commit/b4e08a812a08f42037837bbee54610ebc565063f)] (by @cyfung1031)
- 🐛 Restauration de l'option useOpen pour GM_openInTab [#1043](https://github.com/scriptscat/scriptcat/issues/1043) ([#1044](https://github.com/scriptscat/scriptcat/issues/1044)) [[7f30198](https://github.com/scriptscat/scriptcat/commit/7f30198909824871e694d5ffbe7088e44a6d0b45)] (by @cyfung1031)
- 🐛 Correction du problème userScripts undefined ([#1041](https://github.com/scriptscat/scriptcat/issues/1041)) [[4f2deda](https://github.com/scriptscat/scriptcat/commit/4f2deda69aa6aae7f6e791be1cd965a440b80e33)] (by @cyfung1031)
- 🐛 Correction de la référence incorrecte à `"monaco-editor"` dans `AppContext` ([#983](https://github.com/scriptscat/scriptcat/issues/983)) [[4b8dae1](https://github.com/scriptscat/scriptcat/commit/4b8dae1f49208d13c4d19c4c627762fc1b04ea5e)] (by @cyfung1031)

**Journal des modifications complet :** [Comparer v1.2.0...v1.2.1](https://github.com/scriptscat/scriptcat/compare/v1.2.0...v1.2.1)

<a name="1.2.0"></a>

## 1.2.0 (2025-11-29)

Cette mise à jour apporte la barre latérale de la liste des scripts, la vue en cartes, une logique de vérification des mises à jour plus conviviale, la configuration de l'éditeur, et plus encore. La stabilité de l'injection et de l'exécution a été considérablement améliorée, corrigeant des problèmes critiques avec CSP, sandbox, API GM, tout en apportant des optimisations de performances et de structure.

Pour plus de détails, consultez le journal des modifications v1.2.0-beta.x et la documentation [v1.2](https://docs.scriptcat.org/docs/change/v1.2/).

### 🚀 Principales nouvelles fonctionnalités

- ✨ Barre latérale de la liste des scripts [#794](https://github.com/scriptscat/scriptcat/issues/794) (by @CodFrm)
- ✨ Vue en cartes [#860](https://github.com/scriptscat/scriptcat/issues/860) (by @CodFrm)
- ✨ Logique de vérification des mises à jour plus conviviale [#755](https://github.com/scriptscat/scriptcat/issues/755) (by @cyfung1031)
- ✨ Ajout de la configuration de l'éditeur et des définitions de types de l'éditeur [#708](https://github.com/scriptscat/scriptcat/pull/708) (by @CodFrm)
- ✨ Affichage du nombre de scripts dans la popup ([#973](https://github.com/scriptscat/scriptcat/issues/973)) [[1134586](https://github.com/scriptscat/scriptcat/commit/1134586ff040ffc0cdddd3538e9ec493950c948a)] (by @cyfung1031)
- ✨ Ajout d'un menu de mise en page pour masquer la barre latérale de code [#689](https://github.com/scriptscat/scriptcat/issues/689) [[dd64da7](https://github.com/scriptscat/scriptcat/commit/dd64da719c081acbf21645e2b1e1f38653ffae8c)]
- ✨ Ajout du bouton de vérification de version SC ([#795](https://github.com/scriptscat/scriptcat/issues/795)) [[1680c66](https://github.com/scriptscat/scriptcat/commit/1680c66099120c0e497c1a1f5321f38fe0160ea0)] (by @cyfung1031)
- ✨ Ajout d'une page de sondage après la désinstallation de l'extension [[6404c8f](https://github.com/scriptscat/scriptcat/commit/6404c8f74aff09b15725a92f8afdfc0d71ac188f)]

### 🧩 Changements de l'API GM

- ✨ Prise en charge de l'injection dans l'environnement de contenu, les scripts peuvent désormais être injectés dans l'environnement de contenu [#711](https://github.com/scriptscat/scriptcat/issues/711)
- ✨ GM_openInTab prend en charge la fenêtre épinglée, l'ouverture en fenêtre de navigation privée et d'autres paramètres [#788](https://github.com/scriptscat/scriptcat/pull/788) (by @cyfung1031)
- ✨ GM_registerMenuCommand prend en charge le sous-menu et le séparateur [#831](https://github.com/scriptscat/scriptcat/pull/831) (by @cyfung1031)
- 🗑 Suppression de l'option useOpen de GM_openInTab [#867](https://github.com/scriptscat/scriptcat/pull/867)
- ♻️ Ajustement de la logique `@connect` ([#969](https://github.com/scriptscat/scriptcat/issues/969)) [[67914d2](https://github.com/scriptscat/scriptcat/commit/67914d2b7d57fa9c69706ae57ee5d3400c2643f9)] (by @cyfung1031)
- ♻️ Refactorisation de `GM_xmlhttpRequest` et du code associé ([#901](https://github.com/scriptscat/scriptcat/issues/901)) [[fabd2e9](https://github.com/scriptscat/scriptcat/commit/fabd2e944235b460bc73df346b79d23ee4540af7)] (by @cyfung1031)

### Autres

- ⚡️ Optimisations de stabilité et de performances
- 🐛 Divers problèmes corrigés
- ♻️ Optimisation de la structure du code
- 🌐 Améliorations i18n

**Journal des modifications complet :** [Comparer v1.1.2...v1.2.0](https://github.com/scriptscat/scriptcat/compare/v1.1.2...v1.2.0)

<a name="1.1.2"></a>

## 1.1.2 (2025-09-18)

Corrections de bugs

### Corrigé

- 🐛 Correction du problème sandbox toString [#737](https://github.com/scriptscat/scriptcat/issues/737) [[6ca24c9](https://github.com/scriptscat/scriptcat/commit/6ca24c9b171792035803ac4e1c69e473629f9d18)]
- 🐛 Correction du problème d'affichage du badge 0 [[026c1d2](https://github.com/scriptscat/scriptcat/commit/026c1d2071dd4cfb6291f005d36717bcdf0a51c3)]
- 🐛 Correction du problème CSP de l'injection de scripts [#739](https://github.com/scriptscat/scriptcat/issues/739) [#728](https://github.com/scriptscat/scriptcat/issues/728) [[5da21b5](https://github.com/scriptscat/scriptcat/commit/5da21b5e3d0e7e86a1fd5dff57ba03ea641c19fa)]
- 🐛 Correction du fait que le script en arrière-plan ne se développait pas dans la page popup [[66ab70f](https://github.com/scriptscat/scriptcat/commit/66ab70fb10c28aaf0c9260a9591aab7e1ae35615)]
- 🐛 Renforcement de la validation des types de messages [#676](https://github.com/scriptscat/scriptcat/issues/676) [[5073795](https://github.com/scriptscat/scriptcat/commit/50737957507ff9af3aa9ba9a6b7d444b643d1ff2)]
- 🐛 Correction du problème document de GM xhr [#716](https://github.com/scriptscat/scriptcat/issues/716) [[1c46546](https://github.com/scriptscat/scriptcat/commit/1c465462f4e14ae461d54358710f5caf74208af3)]

<a name="1.1.1"></a>

## 1.1.1 (2025-09-07)

### Ajouté

- ✨ Ajout de la configuration personnalisée de l'éditeur et des définitions de types de l'éditeur ([#708](https://github.com/scriptscat/scriptcat/issues/708)) [[49eb379](https://github.com/scriptscat/scriptcat/commit/49eb3794774790d61c3ef787c865a9ba6fe82841)]

### Corrigé

- 🐛 Correction des problèmes de compatibilité avec les anciennes versions de navigateurs [#715](https://github.com/scriptscat/scriptcat/issues/715) [[4da8068](https://github.com/scriptscat/scriptcat/commit/4da806879c2b170672814d02e6f8ed98c9fae35b)]
- 💄 Optimisation de l'affichage du menu popup lorsque la fenêtre popup est trop petite ([288650e](https://github.com/scriptscat/scriptcat/commit/288650e5e4cbdc3fa8658f0754ce427a1b3dec5a))
- 🐛 Correction de plusieurs problèmes ([#710](https://github.com/scriptscat/scriptcat/issues/710)) [[6a2027a](https://github.com/scriptscat/scriptcat/commit/6a2027ac0bb5e0ed625df570240d068a98a34b31)] (by @WhiteSevs)

### Divers

- 🌐 Gestion des problèmes i18n [[2adf69d](https://github.com/scriptscat/scriptcat/commit/2adf69d6ec3c30186f2c2ef89f97e3cba9e15a66)]

<a name="1.1.0"></a>

## 1.1.0 (2025-09-07)

De nombreuses corrections de bugs et améliorations de compatibilité, prise en charge de Dropbox ajoutée, nouvelle fonctionnalité @early-start pour un chargement plus rapide que le chargement de la page. Pour plus de détails, consultez le journal des modifications v1.1.0-beta.x.

### Ajouté

- ✨ Ajout des paramètres d'environnement d'exécution des scripts [#628](https://github.com/scriptscat/scriptcat/issues/628) [[0d4a89e](https://github.com/scriptscat/scriptcat/commit/0d4a89efaecf0331dcc7fbb6df006b93a1525846)]
- ✨ Réduction par défaut lorsqu'il n'y a pas de scripts en arrière-plan [#626](https://github.com/scriptscat/scriptcat/issues/626) ([9d0aac6](https://github.com/scriptscat/scriptcat/commit/9d0aac6aae11b96707ca1f7c024a24e9d55f217b))
- ✨ Prise en charge de Dropbox [#575](https://github.com/scriptscat/scriptcat/issues/575) [[2c66f21](https://github.com/scriptscat/scriptcat/commit/2c66f21f5118bd83a0eaa0f1baa3a31f2233e5b2)]
- ✨ Optimisation d'external.Tampermonkey pour vérifier l'état d'installation de SC lorsque TM n'est pas installé mais que TM et SC sont tous deux activés ([#703](https://github.com/scriptscat/scriptcat/issues/703)) [[d0115c3](https://github.com/scriptscat/scriptcat/commit/d0115c33657260d803b6091139601b1b20407d4e)] (by @cyfung1031)
- ✨ Ajout de @early-start pour charger plus rapidement que la page ([#649](https://github.com/scriptscat/scriptcat/issues/649)) [[eb097dd](https://github.com/scriptscat/scriptcat/commit/eb097dd146dcd6f8ca712ed883571dbfb3d09f20)]
- ✨ Recherche globale de code ([#662](https://github.com/scriptscat/scriptcat/issues/662)) [[f8eafb7](https://github.com/scriptscat/scriptcat/commit/f8eafb7f955dad62c1b41ac477e929bf00c65982)] (by @RenjiYuusei)
- ✨ Ajout d'une page de sondage après la désinstallation de l'extension [[6404c8f](https://github.com/scriptscat/scriptcat/commit/6404c8f74aff09b15725a92f8afdfc0d71ac188f)]
- 📝 Modification de la page d'installation et du namespace ([6f2f000](https://github.com/scriptscat/scriptcat/commit/6f2f000612908b7a88f6b70c2831092805c63bc7))
- ✨ Ajout d'un code QR pour l'installation mobile ([348237c](https://github.com/scriptscat/scriptcat/commit/348237c7ce9771c69025386926b1f73710cf6f42))

### Corrigé

- 🐛 Correction du problème où l'installation ne pouvait pas être déclenchée lorsque le réseau ne peut pas accéder à la page intermédiaire d'installation [#705](https://github.com/scriptscat/scriptcat/issues/705) [[5f1e292](https://github.com/scriptscat/scriptcat/commit/5f1e2929d79c470ba4427c3cce01f5cd184a839b)]
- 🐛 Gestion de l'expression `@match *://*domain/*` [[039b445](https://github.com/scriptscat/scriptcat/commit/039b4454148947cd3c74de82b87804ee9815e60c)]
- 🐛 Correction du problème de pénétration du sandbox de l'environnement d'extension [#700](https://github.com/scriptscat/scriptcat/issues/700) [[a1a868d](https://github.com/scriptscat/scriptcat/commit/a1a868dfe3199e666fe2bcb65cfb2ad0ad3d699b)]
- ✏️ backgroud -&gt; background ([#698](https://github.com/scriptscat/scriptcat/issues/698)) [[2594075](https://github.com/scriptscat/scriptcat/commit/2594075c4a50f4c79fa46bcda08d7b0cbcfe723c)] (by @cyfung1031)
- ✏️ CrhomeStorage -&gt; ChromeStorage ([#693](https://github.com/scriptscat/scriptcat/issues/693)) [[64c536d](https://github.com/scriptscat/scriptcat/commit/64c536dbd5fcb4c29eebc1109202bab69aaa3ee2)] (by @cyfung1031)
- 🐛 Correction de GM.getTab et GM.getTabs ([#683](https://github.com/scriptscat/scriptcat/issues/683)) [[31de256](https://github.com/scriptscat/scriptcat/commit/31de256f02b5b61e27f0eec9ea673248ba8faa32)] (by @WhiteSevs)
- 🐛 Correction du domaine manquant dans finalUrl ([#656](https://github.com/scriptscat/scriptcat/issues/656)) [[545d7c8](https://github.com/scriptscat/scriptcat/commit/545d7c8c0dd69c83bd2f0353518aafe6af81c0f4)] (by @cyfung1031)
- 🐛 Compatibilité avec les noyaux de navigateurs plus anciens [#647](https://github.com/scriptscat/scriptcat/issues/647) ([bba12d2](https://github.com/scriptscat/scriptcat/commit/bba12d23f04759cb9b7fdb63f0d95ae515ee94a9))
- 🐛 Correction du domaine manquant dans finalUrl ([#656](https://github.com/scriptscat/scriptcat/issues/656)) [[3ed018a](https://github.com/scriptscat/scriptcat/commit/3ed018a7a54803fcf2e1791316e0166ed0b52007)] (by @cyfung1031)
- 💚 Correction du problème lint react/jsx-no-literals [[017b608](https://github.com/scriptscat/scriptcat/commit/017b60886be601e3e0e1719cf249da32d5686c30)]
- 🐛 Compatibilité avec les noyaux de navigateurs plus anciens [#647](https://github.com/scriptscat/scriptcat/issues/647) [[0e2f817](https://github.com/scriptscat/scriptcat/commit/0e2f8173c8b44bd6ad44bdffc73fa302a96a058e)]
- 🐛 Optimisation de l'injection window.external ([#646](https://github.com/scriptscat/scriptcat/issues/646)) [[0b2668a](https://github.com/scriptscat/scriptcat/commit/0b2668aadcab35a33ff9abc4bd030dffb87ea168)] (by @cyfung1031)
- 🐛 Correction du problème où la page d'authentification du stockage cloud ne pouvait pas se fermer automatiquement [[7748088](https://github.com/scriptscat/scriptcat/commit/7748088e63c1fc660b6a6ae5613cf04f9da99b8c)]
- 🐛 Correction du problème `@connect` \\* qui ne fonctionnait pas [#623](https://github.com/scriptscat/scriptcat/issues/623) [[76481c8](https://github.com/scriptscat/scriptcat/commit/76481c845b34414a7f15ed18ec61f7dff7eef091)]
- 🐛 Ajout de tests unitaires et correction du problème `@exclude` ([#618](https://github.com/scriptscat/scriptcat/issues/618)) [[0046bb7](https://github.com/scriptscat/scriptcat/commit/0046bb78800a2c46edaac785b8e9592327772a3b)] (by @cyfung1031)
- 🐛 Correction du problème où certains liens .user.js ne pouvaient pas installer de scripts [#599](https://github.com/scriptscat/scriptcat/issues/599) [[ccd2639](https://github.com/scriptscat/scriptcat/commit/ccd2639858f0f3cde28f284376fe8ed998d935ae)]
- 🐛 Correction de l'échec de création de nouveaux scripts [[d42d6e7](https://github.com/scriptscat/scriptcat/commit/d42d6e7d408a84674facf9ab0da6eac0e384502f)]
- 🐛 Correction des métadonnées ([#610](https://github.com/scriptscat/scriptcat/issues/610)) [[4d98cce](https://github.com/scriptscat/scriptcat/commit/4d98cce0ca1281cc58f551ea4e6700e340780d3f)] (by @cyfung1031)
- 🐛 Correction du badge de la popup ([#605](https://github.com/scriptscat/scriptcat/issues/605)) [[eff9230](https://github.com/scriptscat/scriptcat/commit/eff92309de99abb0cf48ef4727afaa113bc2fbb6)] (by @cyfung1031)
- 🐛 Correction de ScriptEditor.tsx ([#603](https://github.com/scriptscat/scriptcat/issues/603)) [[a9aadba](https://github.com/scriptscat/scriptcat/commit/a9aadba372b813c16bdc5f0aeb07c68981f48c63)] (by @cyfung1031)
- 🐛 Correction des CSS de la visionneuse de code et de l'éditeur ([#602](https://github.com/scriptscat/scriptcat/issues/602)) [[2e86785](https://github.com/scriptscat/scriptcat/commit/2e8678513efaccd42c8dc2aa89f8b76679aa8420)] (by @cyfung1031)
- 🐛 Correction du problème de concurrence de getFaviconFromDomain ([#597](https://github.com/scriptscat/scriptcat/issues/597)) [[1872fe1](https://github.com/scriptscat/scriptcat/commit/1872fe165ab204b155a56f037c111d2d7776c2b9)] (by @cyfung1031)
- 🐛 Correction de l'erreur d'ouverture d'onglet dans plusieurs fenêtres [#586](https://github.com/scriptscat/scriptcat/issues/586) [[54c1da2](https://github.com/scriptscat/scriptcat/commit/54c1da29c2bd8bd8f5ef2d85b7aed8b334de296f)]
- 🐛 Correction du problème de compatibilité openerTabId ([#586](https://github.com/scriptscat/scriptcat/issues/586)) [[b861fc8](https://github.com/scriptscat/scriptcat/commit/b861fc8620e53b885cad98db03f1dd10ec9d296c)] (by @cyfung1031)

### Divers

- 📝 Création de README_RU.md et CONTRIBUTING_RU.md ([#678](https://github.com/scriptscat/scriptcat/issues/678)) [[597ab03](https://github.com/scriptscat/scriptcat/commit/597ab0378fe5ced01637cf411326ef7845b8ce2b)] (by @Ioann)
- 👷 Ajustements de compatibilité (compatibilité pack.js) ([#669](https://github.com/scriptscat/scriptcat/issues/669)) [[fec45e6](https://github.com/scriptscat/scriptcat/commit/fec45e6606a609b10b79c58d2fcba02c2ce71e16)] (by @cyfung1031)
- 🌐 Affinage et extension de la locale vietnamienne ([#661](https://github.com/scriptscat/scriptcat/issues/661)) [[6847a59](https://github.com/scriptscat/scriptcat/commit/6847a596c4b06c75e13594ef60e4b9dfa5718cf3)] (by @RenjiYuusei)
- 🌐 Corrections de traductions ([#635](https://github.com/scriptscat/scriptcat/issues/635)) [[19296de](https://github.com/scriptscat/scriptcat/commit/19296de6a3815e5965eb33401a55da9b2bd22bb4)] (by @cyfung1031)
- 🌐 Correction du problème i18n du guide d'intégration [#627](https://github.com/scriptscat/scriptcat/issues/627) [[9683f96](https://github.com/scriptscat/scriptcat/commit/9683f965400ab6a2bac15349aca4335911766eac)]
- 👷 Optimisation du code pack.js ([#615](https://github.com/scriptscat/scriptcat/issues/615)) [[870dd9b](https://github.com/scriptscat/scriptcat/commit/870dd9bc6b7eff3eceefa915452e773ec0565180)] (by @cyfung1031)
