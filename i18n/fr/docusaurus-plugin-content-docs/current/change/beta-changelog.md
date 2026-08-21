---
title: Journal des modifications Beta
---

import GithubStar from '@site/src/components/GithubStar';

<GithubStar variant="bar" scene="changelog" />

Les versions de ScriptCat sont réparties en deux branches principales : les versions stables et les versions de pré-version. Pour le journal des modifications des versions stables, consultez : [Journal des modifications](./index.md)

Les versions de pré-version sont publiées avant la version stable officielle. Elles servent généralement à tester de nouvelles fonctionnalités. Les numéros de version des pré-versions contiennent un identifiant de pré-version, par exemple :
`1.0.0-beta.1`.

Vous pouvez obtenir les versions de pré-version depuis la page [Release](https://github.com/scriptscat/scriptcat/releases) ou depuis les pages des magasins d'extensions ci-dessous :

- [Chrome](https://chromewebstore.google.com/detail/%E8%84%9A%E6%9C%AC%E7%8C%AB-beta/jaehimmlecjmebpekkipmpmbpfhdacom?authuser=0&hl=zh-CN)
- [Edge](https://microsoftedge.microsoft.com/addons/detail/%E8%84%9A%E6%9C%AC%E7%8C%AB-beta/nimmbghgpcjmeniofmpdfkofcedcjpfi)
- [Firefox](https://addons.mozilla.org/zh-CN/firefox/addon/scriptcat-pre/)

De plus, en dehors des pré-versions, ScriptCat construit l'extension sur [Github Action](https://github.com/scriptscat/scriptcat/actions/workflows/build.yaml) après chaque fusion de commit de code dans la branche principale. Si vous souhaitez découvrir les dernières fonctionnalités ou corrections, vous pouvez les télécharger depuis la page [Github Action](https://github.com/scriptscat/scriptcat/actions/workflows/build.yaml).

<a name="1.5.0-beta.1"></a>

## 1.5.0-beta.1 (2026-08-06)

Cette pré-version met en avant deux grandes fonctionnalités — **Accès externe (pont MCP)** et **corbeille de scripts** — prend officiellement en charge Firefox MV3, ajoute le coréen, le turc et le portugais brésilien, et corrige un certain nombre de problèmes GM API, de synchronisation cloud et d'éditeur.

### 🚀 Principales nouvelles fonctionnalités

- 💥 Nouveau « Accès externe (pont MCP) » : un démon local `sctl` unifie l'accès CLI et client MCP ; chaque lecture/écriture de script est contrôlée par une autorisation à plusieurs niveaux et une page de confirmation humaine à trois niveaux — Refuser / Autoriser / Autoriser cette session — et chaque opération est auditée ([#1573](https://github.com/scriptscat/scriptcat/pull/1573)) (by @cyfung1031)
- 💥 Corbeille de scripts : les scripts supprimés vont d'abord dans la corbeille, avec restauration (en préservant les données et permissions d'origine), suppression définitive et nettoyage automatique basé sur l'expiration ; la période de conservation est configurable (30 jours par défaut, ou jamais) ([#1585](https://github.com/scriptscat/scriptcat/pull/1585)) (by @CodFrm)
- 💥 Prise en charge officielle de Firefox MV3, avec une communication sandbox/offscreen améliorée ([#1561](https://github.com/scriptscat/scriptcat/pull/1561)) (by @cyfung1031)
- ✨ Ajout d'actions rapides de périmètre de site à la popup ([#1646](https://github.com/scriptscat/scriptcat/pull/1646)) (by @CodFrm)
- ✨ Le nombre d'éléments développés de la liste de scripts de la popup est désormais configurable, séparément du nombre d'éléments développés du menu ([#1645](https://github.com/scriptscat/scriptcat/pull/1645)) (by @CodFrm)
- ✨ Le service d'icônes gagne un niveau « désactivé » pour couper complètement la récupération de favicons ([#1637](https://github.com/scriptscat/scriptcat/pull/1637)) (by @CodFrm)
- ✨ Les balises de métadonnées non définies affichent désormais un avertissement dans l'éditeur ([#1608](https://github.com/scriptscat/scriptcat/pull/1608)) (by @cyfung1031)
- ✨ Exhaustivité de la sauvegarde/restauration/importation : configuration personnalisée ScriptCat/Tampermonkey/Violentmonkey + sauvegarde des paramètres + réparation des ressources ([#1554](https://github.com/scriptscat/scriptcat/pull/1554)) (by @CodFrm)

### ♻️ Refactorisation et compatibilité

- ♻️ Refactorisation du client sur le SDK MCP officiel ([#1643](https://github.com/scriptscat/scriptcat/pull/1643)) (by @CodFrm)

### 🐛 Corrections de bugs

- 🐛 Correction des cookies personnalisés de GM_xmlhttpRequest qui étaient ajoutés au lieu de remplacer les cookies du même nom ([#1604](https://github.com/scriptscat/scriptcat/pull/1604)) (by @cyfung1031)
- 🐛 Correction de la cohérence de l'état de la synchronisation des scripts et de la gestion des conflits sécurisée par fournisseur ([#1504](https://github.com/scriptscat/scriptcat/pull/1504)) (by @cyfung1031)
- 🐛 Correction du nettoyage planifié des journaux qui ne fonctionnait plus ([#1599](https://github.com/scriptscat/scriptcat/pull/1599)) (by @CodFrm)
- 🐛 Correction du moment d'exécution context-menu manquant dans les paramètres de script ([#1652](https://github.com/scriptscat/scriptcat/pull/1652)) (by @CodFrm)
- 🐛 Correction de la logique retour/fermeture d'onglet de la page d'installation ([#1594](https://github.com/scriptscat/scriptcat/pull/1594)) (by @cyfung1031)
- 🐛 Correction du titre de l'onglet du navigateur qui ne se mettait pas à jour après le renommage d'un script enregistré ([#1607](https://github.com/scriptscat/scriptcat/pull/1607)) (by @cyfung1031)
- 🐛 Correction du comportement de focus de window.focus et renforcement de la validation de windowId ([#1577](https://github.com/scriptscat/scriptcat/pull/1577)) (by @cyfung1031)
- 🐛 Correction du bouton de fermeture de l'onglet actif de l'éditeur masqué [#1556](https://github.com/scriptscat/scriptcat/issues/1556) (by @CodFrm)
- 🐛 Correction du garde de navigation pour le contenu non enregistré de l'éditeur ([#1656](https://github.com/scriptscat/scriptcat/pull/1656)) (by @CodFrm)
- 🐛 Correction du libellé de confirmation d'enregistrement des scripts du même nom dans la corbeille ([#1622](https://github.com/scriptscat/scriptcat/pull/1622)) (by @CodFrm)
- 🐛 selfMetadata prend en charge les remplacements vides : correction de « supprimer puis ressusciter » pour match/exclude/tag/run-at ([#1579](https://github.com/scriptscat/scriptcat/pull/1579)) (by @CodFrm)

### 🎨 Améliorations de l'interface

- 💄 Correction de l'adaptation Android : hauteur de viewport dynamique + réorganisation des tableaux/lignes de paramètres/barres de statistiques sur écran étroit ([#1636](https://github.com/scriptscat/scriptcat/pull/1636)) (by @RenjiYuusei)
- 💄 Ajout d'une option de mise en page compacte à la popup ([#1551](https://github.com/scriptscat/scriptcat/pull/1551)) (by @cyfung1031)

### 🌐 Internationalisation

- 🌐 Ajout de la traduction coréenne (ko-KR) ([#1568](https://github.com/scriptscat/scriptcat/pull/1568)) (by @moduvoice)
- 🌐 Ajout de la traduction turque (tr-TR) ([#1557](https://github.com/scriptscat/scriptcat/pull/1557)) (by @azizaktas)
- 🌐 Ajout de la traduction en portugais brésilien (pt-BR) ([#1587](https://github.com/scriptscat/scriptcat/pull/1587)) (by @Lucas559-noob)
- 🌐 Remplissage des messages.json de chrome.i18n et des langues de l'éditeur Monaco pour pt-BR / tr-TR ([#1605](https://github.com/scriptscat/scriptcat/pull/1605)) (by @CodFrm)

### Autres

- ⬆️ Mise à niveau des dépendances (incl. TypeScript 6.0) et correction des avertissements pnpm audit ([#1576](https://github.com/scriptscat/scriptcat/pull/1576), [#1567](https://github.com/scriptscat/scriptcat/pull/1567)) (by @cyfung1031)
- Les paramètres de synchronisation des scripts sont désormais enregistrés instantanément ([#1615](https://github.com/scriptscat/scriptcat/pull/1615)) (by @CodFrm)
- 📝 Amélioration de la description du magasin et du slogan du README pour une meilleure découvrabilité du « script utilisateur » ([#1553](https://github.com/scriptscat/scriptcat/pull/1553)) (by @CodFrm)

<a name="1.5.0-beta"></a>

## 1.5.0-beta (2026-07-08)

Cette pré-version apporte une **interface entièrement nouvelle** avec une interface plus propre et plus cohérente et une expérience globale plus fluide, ainsi que des optimisations de conception dédiées au mobile pour que les utilisateurs mobiles bénéficient également d'une excellente expérience. De plus, elle ajoute la sélection de nouveaux types de scripts dans l'éditeur, un lien de téléchargement manuel pour les sauvegardes locales, et plus encore, tout en corrigeant les fuseaux horaires invalides des tâches planifiées et les problèmes cross-origin du GM_download natif. Si vous avez des suggestions concernant la nouvelle UI/UX, n'hésitez pas à rejoindre la discussion sur [GitHub](https://github.com/scriptscat/scriptcat/discussions).

### 🎨 Améliorations de l'interface

- ♻️ Interface entièrement nouvelle : une réécriture complète de l'interface, avec une meilleure adaptation mobile pour une meilleure expérience sur ordinateur et mobile ([#1514](https://github.com/scriptscat/scriptcat/pull/1514)) (by @CodFrm)

### 🚀 Principales nouvelles fonctionnalités

- ✨ La « ＋ » de la barre d'onglets de l'éditeur permet désormais de choisir le type de nouveau script ([#1544](https://github.com/scriptscat/scriptcat/pull/1544)) (by @cyfung1031)
- ✨ Ajout d'un lien de téléchargement manuel pour les sauvegardes locales ([#1543](https://github.com/scriptscat/scriptcat/pull/1543)) (by @cyfung1031)
- ✨ Activation de la sérialisation structured_clone pour la messagerie d'extension sur Chromium 148+ ([#1534](https://github.com/scriptscat/scriptcat/pull/1534)) (by @cyfung1031)
- ✨ Les versions de pré-version (beta) ouvrent désormais automatiquement la page du journal des modifications après une mise à jour (by @CodFrm)

### 🧩 Changements de l'API GM

- 🐛 Faire en sorte que le GM_download natif respecte @connect, comme GM_xmlhttpRequest ([#1506](https://github.com/scriptscat/scriptcat/pull/1506)) (by @DudeAint)

### ⚡️ Améliorations de performances

- ⚡️ Optimisation du cache de chargement des scripts et correction des éléments de menu Popup restants ([#1511](https://github.com/scriptscat/scriptcat/pull/1511)) (by @cyfung1031)

### 🧑‍💻 Éditeur

- ♻️ Ajustement des règles `eslint-plugin-userscripts` ([#1510](https://github.com/scriptscat/scriptcat/pull/1510)) (by @cyfung1031)

### 🐛 Corrections de bugs

- 🐛 Éviter les erreurs de tâches planifiées causées par la détection automatique d'un fuseau horaire invalide par cron ([#1531](https://github.com/scriptscat/scriptcat/pull/1531)) (by @cyfung1031)
- 🐛 Correction de l'API de démonstration indisponible dans l'exemple crontab ([#1542](https://github.com/scriptscat/scriptcat/pull/1542)) (by @cyfung1031)

### 🌐 Localisation

- 🌐 Ajout de la langue turque (by @azizaktas)

<a name="1.4.0-beta.4"></a>

## 1.4.0-beta.4 (2026-06-13)

Cette version corrige la mise en page de la popup mobile Edge Android, le flash de fond blanc lors du chargement initial et les échecs de requêtes cross-origin lorsque la permission d'accès au site est manquante ; corrige une vulnérabilité de pollution des prototypes déclenchée via des clés de configuration utilisateur YAML non fiables ; refactorise la mise à jour des ressources de scripts et le traitement ZIP (remplacement de jszip par JSZipp) ; et continue d'améliorer la compatibilité Firefox MV3 et la localisation.

### 🧑‍💻 Éditeur

- ✨ Amélioration de la correction rapide Monaco et des indices de métadonnées de scripts utilisateur ([#1461](https://github.com/scriptscat/scriptcat/pull/1461)) (by @cyfung1031)
- 🐛 Correction des problèmes de mise en page CSS de l'éditeur ([#1460](https://github.com/scriptscat/scriptcat/pull/1460)) (by @cyfung1031)

### 🐛 Corrections de bugs

- 🐛 Correction de la mise en page de la popup mobile Edge Android ([#686](https://github.com/scriptscat/scriptcat/issues/686)) ([#1507](https://github.com/scriptscat/scriptcat/pull/1507)) (by @CodFrm)
- 🐛 Correction du flash de fond blanc lors du chargement initial ([#1497](https://github.com/scriptscat/scriptcat/issues/1497)) ([#1498](https://github.com/scriptscat/scriptcat/pull/1498)) (by @cyfung1031)
- 🐛 Correction de l'échec des requêtes cross-origin lorsque la permission d'accès au site est manquante ([#1477](https://github.com/scriptscat/scriptcat/pull/1477)) (by @cyfung1031)
- 🐛 Correction de la connexion de messages (GM API / port) qui n'était pas correctement nettoyée ([#1474](https://github.com/scriptscat/scriptcat/pull/1474)) (by @cyfung1031)
- 🐛 Correction de la non-correspondance du modèle @match lorsque la recherche est manquante ([#1466](https://github.com/scriptscat/scriptcat/pull/1466)) (by @cyfung1031)
- 🐛 Ajout de `protoBaseDescs` pour corriger l'héritage des classes ancêtres dans le semi-sandbox Tampermonkey ([#1463](https://github.com/scriptscat/scriptcat/pull/1463)) (by @cyfung1031)

### 🔒 Améliorations de sécurité

- 🔒 Correction de la pollution des prototypes via des clés de configuration utilisateur YAML non fiables ([#1494](https://github.com/scriptscat/scriptcat/pull/1494)) (by @qdzsh)

### ♻️ Refactorisation et compatibilité

- ♻️ Refactorisation de la mise à jour des ressources de scripts (updateResource) et du contrôle de concurrence, et restauration de la compatibilité du cache de ressources ([#1193](https://github.com/scriptscat/scriptcat/pull/1193)) (by @cyfung1031)
- ♻️ Remplacement de jszip par JSZipp pour le traitement ZIP (import/export de sauvegarde) et suppression de la dépendance jszip inutilisée ([#1479](https://github.com/scriptscat/scriptcat/pull/1479)) (by @cyfung1031)
- ♻️ Amélioration de la compatibilité Firefox MV3 ([#1457](https://github.com/scriptscat/scriptcat/pull/1457), [#1480](https://github.com/scriptscat/scriptcat/pull/1480)) (by @cyfung1031)

### 🌐 Localisation

- 🌐 Correction des traductions terminologiques multilingues (notamment l'amélioration du chinois traditionnel) et ajout de directives de terminologie de traduction ([#1468](https://github.com/scriptscat/scriptcat/pull/1468)) (by @cyfung1031)

<a name="1.4.0-beta.3"></a>

## 1.4.0-beta.3 (2026-05-19)

Poursuivant la direction définie dans beta.2, cette version renforce encore la fiabilité de la synchronisation cloud (gestion des erreurs et des flux de téléversement OneDrive/Google Drive/WebDAV), corrige un certain nombre de problèmes de ScriptEditor et de gestion des exceptions GM xhr, et ajoute le formatage Ctrl+Shift+F ainsi que le retour de `@run-at context-menu`.

### 🚀 Principales nouvelles fonctionnalités

- ✨ Éditeur : Ctrl+Shift+F pour formater le code ([#1415](https://github.com/scriptscat/scriptcat/pull/1415)) (by @cyfung1031)
- ✨ Retour de la prise en charge de `@run-at context-menu` ([#1442](https://github.com/scriptscat/scriptcat/pull/1442)) (by @cyfung1031)

### ⚡️ Améliorations de performances

- ⚡️ Optimisation du traitement de pushValue ([#1403](https://github.com/scriptscat/scriptcat/pull/1403)) (by @cyfung1031)

### 🐛 Corrections de bugs

- 🐛 Corrections de synchronisation cloud : téléversement zéro octet OneDrive, normalisation des erreurs Google Drive/OneDrive, modifiedDate de métadonnées personnalisées S3 ([#1405](https://github.com/scriptscat/scriptcat/pull/1405)) ([#1406](https://github.com/scriptscat/scriptcat/pull/1406)) ([#1408](https://github.com/scriptscat/scriptcat/pull/1408)) (by @cyfung1031)
- 🐛 Vérification WebDAV : suppression de la sonde d'écriture afin que les services comme Jianguoyun dont la racine n'est pas accessible en écriture ne manquent plus la vérification ([#1445](https://github.com/scriptscat/scriptcat/pull/1445)) (by @CodFrm)
- 🐛 Correction de la gestion de null manquante pour msgConn de `GM_xmlhttpRequest` ([#1433](https://github.com/scriptscat/scriptcat/pull/1433)) (by @cyfung1031)
- 🐛 Correction de la gestion incorrecte de onloadend anormal par GM xhr ([#1412](https://github.com/scriptscat/scriptcat/pull/1412)) (by @cyfung1031)
- 🐛 Correction des problèmes de mise à jour dynamique et d'affichage de la liste de ScriptEditor ([#1414](https://github.com/scriptscat/scriptcat/pull/1414)) (by @cyfung1031)
- 🐛 Correction des problèmes d'interaction avec les actions liées à l'édition dans la barre d'outils de ScriptEditor ([#1417](https://github.com/scriptscat/scriptcat/pull/1417)) (by @cyfung1031)
- 🐛 Correction du code et du Mock de `chrome.downloads.download` ([#1410](https://github.com/scriptscat/scriptcat/pull/1410)) (by @cyfung1031)
- 🐛 Correction de closeWindow dans src/pages/install/App.tsx ([#1435](https://github.com/scriptscat/scriptcat/pull/1435)) (by @cyfung1031)
- 🐛 Ajout d'une limite d'événements molette au niveau de la mise en page racine pour empêcher le défilement interne de déclencher la navigation par balayage du navigateur ([#1431](https://github.com/scriptscat/scriptcat/pull/1431)) (by @cyfung1031)
- 🐛 Déduplication des requêtes d'authentification initiales concurrentes ([#1437](https://github.com/scriptscat/scriptcat/pull/1437)) (by @cyfung1031)
- 🐛 Refactorisation de encoding.ts pour consolider et améliorer la détection ([#1426](https://github.com/scriptscat/scriptcat/pull/1426)) (by @cyfung1031)
- 🐛 Ajout d'une info-bulle pour rendre le menu visible ([#1429](https://github.com/scriptscat/scriptcat/pull/1429)) (by @cyfung1031)
- 🐛 Correction de overscroll-behavior ([#1413](https://github.com/scriptscat/scriptcat/pull/1413)) (by @cyfung1031)
- 🐛 Arrêt de l'affichage du bouton de mise à jour pour les scripts qui ne prennent pas en charge les mises à jour ([#1418](https://github.com/scriptscat/scriptcat/pull/1418)) (by @cyfung1031)
- 🐛 Correction des références de clés i18n manquantes ([#1422](https://github.com/scriptscat/scriptcat/pull/1422)) (by @cyfung1031)
- 🐛 Ajout de `frames` à sandbox createContext, corrigeant [#1427](https://github.com/scriptscat/scriptcat/issues/1427) ([#1428](https://github.com/scriptscat/scriptcat/pull/1428)) (by @cyfung1031)
- 🐛 Correction de l'erreur de compilation SkillScript due au champ isContextMenu manquant (5fdc8e39) (by @CodFrm)

### ♻️ Refactorisation et compatibilité

- ♻️ Déplacement des ressources d'installation vers tempStorage de `chrome.storage.local` ; la partie code réside dans `OPFS/temp_install_codes` ([#1318](https://github.com/scriptscat/scriptcat/pull/1318)) (by @cyfung1031)
- ♻️ Correction du double slash créé par la logique de jonction de chemins ([#1432](https://github.com/scriptscat/scriptcat/pull/1432)) (by @tomaioo)

### 🌐 Internationalisation

- 🌐 Amélioration des traductions japonaises avec des corrections associées pour d'autres langues ([#1419](https://github.com/scriptscat/scriptcat/pull/1419)) ([#1421](https://github.com/scriptscat/scriptcat/pull/1421)) (by @GoodLight999, @cyfung1031)

<a name="1.4.0-beta.2"></a>

## 1.4.0-beta.2 (2026-05-06)

Cette mise à jour se concentre sur le **renforcement complet de la fiabilité de la synchronisation du stockage cloud** (corrections d'authentification, de gestion des chemins et de relance pour les backends Dropbox/WebDAV/Google Drive/OneDrive), sur **l'amélioration de la stabilité des appels d'outils de l'Agent** et sur un grand nombre de corrections de bugs d'interface et d'exécution des scripts, y compris une fuite de mémoire à long terme.

### ⚡️ Améliorations de performances

- ⚡️ Suppression de la dépendance au système de fichiers Baidu pour les règles DNR globales ; désactivation des cookies par requête à la place ([#1377](https://github.com/scriptscat/scriptcat/pull/1377)) (by @cyfung1031)
- ⚡️ Optimisation de la sélection de moteurs de recherche multi-plateformes pour la récupération de scripts ([#1379](https://github.com/scriptscat/scriptcat/pull/1379)) (by @cyfung1031)
- ⚡️ Utilisation d'une police monospace pour le loadingStatus de la page d'installation afin d'éviter les à-coups ([#1381](https://github.com/scriptscat/scriptcat/pull/1381)) (by @cyfung1031)
- ⚡️ Renforcement de la fiabilité des prompts de l'Agent — vérification des résultats, sémantique du budget, limites de sécurité ([#1354](https://github.com/scriptscat/scriptcat/pull/1354)) (by @cyfung1031)

### 🐛 Corrections de bugs

- 🚑 Correction d'une fuite de mémoire potentielle lorsque ScriptCat fonctionne pendant une période prolongée ([#1401](https://github.com/scriptscat/scriptcat/pull/1401)) (by @cyfung1031)
- 🐛 Renforcement de la fiabilité de la synchronisation cloud sur tous les backends (authentification, gestion des chemins et logique de relance Dropbox/WebDAV/Google Drive/OneDrive) ([#1374](https://github.com/scriptscat/scriptcat/pull/1374)) ([#1375](https://github.com/scriptscat/scriptcat/pull/1375)) ([#1376](https://github.com/scriptscat/scriptcat/pull/1376)) ([#1390](https://github.com/scriptscat/scriptcat/pull/1390)) ([#1391](https://github.com/scriptscat/scriptcat/pull/1391)) ([#1392](https://github.com/scriptscat/scriptcat/pull/1392)) ([#1393](https://github.com/scriptscat/scriptcat/pull/1393)) ([#1394](https://github.com/scriptscat/scriptcat/pull/1394)) ([#1395](https://github.com/scriptscat/scriptcat/pull/1395)) (by @cyfung1031)
- 🐛 Remplissage correct d'extensionEnv avec isIncognito (early-start et bgScript), userAgent et run-in pour bgScript ([#1368](https://github.com/scriptscat/scriptcat/pull/1368)) (by @cyfung1031)
- 🐛 Correction du bouton du guide d'intégration rogné [#1396](https://github.com/scriptscat/scriptcat/issues/1396) ([#1398](https://github.com/scriptscat/scriptcat/pull/1398)) (by @cyfung1031)
- 🐛 Correction de l'infobulle masquée sur la page de gestion des scripts [#1386](https://github.com/scriptscat/scriptcat/issues/1386) ([#1387](https://github.com/scriptscat/scriptcat/pull/1387)) (by @Xdy1579883916)
- 🐛 Correction des problèmes de dimensionnement de mise en page causés par la barre latérale en mode carte [#1179](https://github.com/scriptscat/scriptcat/issues/1179) ([#1373](https://github.com/scriptscat/scriptcat/pull/1373)) (by @cyfung1031)
- 🐛 Correction de l'origine incorrecte pour les installations de fichiers locaux par glisser-déposer ([#1371](https://github.com/scriptscat/scriptcat/pull/1371)) (by @cyfung1031)
- 🐛 Correction de la messagerie de changement de langue ([#1380](https://github.com/scriptscat/scriptcat/pull/1380)) (by @cyfung1031)
- 🐛 Amélioration de l'interface d'affichage des journaux ([#1372](https://github.com/scriptscat/scriptcat/pull/1372)) (by @cyfung1031)
- 🐛 Résolution des problèmes de nombre de règles de session avec xhr concurrent ([#1353](https://github.com/scriptscat/scriptcat/pull/1353)) (by @cyfung1031)
- 🐛 Correction du CSS de UserConfigPanel ([#1361](https://github.com/scriptscat/scriptcat/pull/1361)) (by @cyfung1031)
- 🐛 Utilisation de Object.create(null) pour les objets vides dans create_context ([#1397](https://github.com/scriptscat/scriptcat/pull/1397)) (by @cyfung1031)
- 🐛 Correction des erreurs de concaténation des arguments tool_call en streaming de l'Agent et des interférences entre appels d'outils parallèles ([#1355](https://github.com/scriptscat/scriptcat/pull/1355)) (by @cyfung1031)
- 🐛 Correction de la compatibilité de l'Agent avec les modèles de raisonnement ([#1357](https://github.com/scriptscat/scriptcat/pull/1357)) (by @cyfung1031)
- 🐛 Correction de l'incohérence du contrat web_fetch/web_search de l'Agent (7bbd6d18) (by @CodFrm)
- 🐛 Correction de l'environnement d'extension manquant dans l'exécution des scripts Skill de l'Agent (e143c4a7) (by @CodFrm)

### 🔒 Améliorations de sécurité

- 🔒 Correction de toutes les vulnérabilités npm ([#1350](https://github.com/scriptscat/scriptcat/pull/1350)) ([#1364](https://github.com/scriptscat/scriptcat/pull/1364)) ([#1365](https://github.com/scriptscat/scriptcat/pull/1365)) (by @cyfung1031)

### Autres

- 🔥 Suppression du contenu de pseudo-locale Crowdin et ach-UG ([#1385](https://github.com/scriptscat/scriptcat/pull/1385)) (by @CodFrm)

<a name="1.4.0-beta.1"></a>

## 1.4.0-beta.1 (2026-04-07)

Le point fort de cette version est le **ScriptCat AI Agent**, un système d'agent intelligent intégré basé sur l'IA qui peut invoquer des outils de l'écosystème des scripts utilisateur par interaction conversationnelle. Cette mise à jour ajoute également la prise en charge de la balise `@unwrap`, l'événement `window.onurlchange`, des améliorations du menu de l'éditeur et de nombreuses corrections de bugs.

### 🚀 Principales nouvelles fonctionnalités

- 💥 ScriptCat AI Agent — système d'agent intelligent basé sur l'IA avec interaction conversationnelle, appel d'outils, système de Skill, prise en charge du protocole MCP et plus ([#1324](https://github.com/scriptscat/scriptcat/pull/1324)) (by @CodFrm)
- ✨ Prise en charge de la balise de métadonnées `@unwrap` ([#1213](https://github.com/scriptscat/scriptcat/pull/1213)) (by @cyfung1031)
- ✨ Implémentation de `window.onurlchange` de TM à l'aide de l'API Navigation ([#1315](https://github.com/scriptscat/scriptcat/pull/1315)) (by @cyfung1031)

### 🧑‍💻 Éditeur

- ✨ Ajout du menu de l'éditeur (rechercher, remplacer, annuler, etc.) ([#1303](https://github.com/scriptscat/scriptcat/pull/1303)) (by @CodFrm)
- 🐛 Correction des raccourcis Ctrl-F / Ctrl-H ([#1312](https://github.com/scriptscat/scriptcat/pull/1312)) (by @cyfung1031)
- 🐛 Correction de l'auto-correction ESLint qui ne fonctionnait pas [#1079](https://github.com/scriptscat/scriptcat/issues/1079) ([#1184](https://github.com/scriptscat/scriptcat/pull/1184)) (by @cyfung1031)
- 🐛 Affichage correct des erreurs de formatage ([#1310](https://github.com/scriptscat/scriptcat/pull/1310)) (by @cyfung1031)
- 🐛 Correction des problèmes d'infobulles de l'éditeur de code ([#1301](https://github.com/scriptscat/scriptcat/pull/1301)) (by @cyfung1031)

### ✨ Améliorations de fonctionnalités

- ✨ Prise en charge de la sélection de moteurs de recherche multi-plateformes pour la recherche de scripts ([#1295](https://github.com/scriptscat/scriptcat/pull/1295)) (by @CodFrm)
- ✨ Ajout de plus de fournisseurs de services d'icônes ([#1333](https://github.com/scriptscat/scriptcat/pull/1333)) (by @cyfung1031)
- ✨ Ajout d'une icône de vérification de mise à jour dans la colonne de dernière mise à jour de la liste des scripts ([#1304](https://github.com/scriptscat/scriptcat/pull/1304)) (by @CodFrm)
- ✨ Amélioration de la gestion des conflits d'édition et des conflits de noms de scripts ([#1223](https://github.com/scriptscat/scriptcat/pull/1223)) (by @cyfung1031)

### 🐛 Corrections de bugs

- 🐛 Correction des erreurs d'expression cron qui faisaient planter toute la page ([#1327](https://github.com/scriptscat/scriptcat/pull/1327)) (by @cyfung1031)
- 🐛 Correction du déclenchement de l'erreur 406 lors de l'installation de scripts ([#1306](https://github.com/scriptscat/scriptcat/pull/1306)) (by @cyfung1031)
- 🐛 Correction du conflit d'authentification des cookies WebDAV et de la prise en charge d'authType ([#1308](https://github.com/scriptscat/scriptcat/pull/1308)) (by @CodFrm)
- 🐛 Utilisation de chrome.storage.local pour les paramètres spécifiques à l'appareil afin d'éviter la synchronisation entre appareils ([#1309](https://github.com/scriptscat/scriptcat/pull/1309)) (by @CodFrm)
- 🐛 Correction de la logique de mise à jour silencieuse et de permission de connexion des scripts abonnés ([#1201](https://github.com/scriptscat/scriptcat/pull/1201)) (by @cyfung1031)
- 🐛 Correction de l'échec total de la vérification de mise à jour par lots lorsqu'un script expire ([#1265](https://github.com/scriptscat/scriptcat/pull/1265)) (by @cyfung1031)
- 🐛 Correction du bouton de requête de la page de journaux qui ne rafraîchissait pas l'heure ([#1294](https://github.com/scriptscat/scriptcat/pull/1294)) (by @CodFrm)
- 🐛 Correction du rognage de la popup du sélecteur de date de la page de journaux ([#1292](https://github.com/scriptscat/scriptcat/pull/1292)) (by @cyfung1031)
- 🐛 Correction de l'affichage du bouton de dissociation lorsqu'aucun lecteur cloud n'est associé ([#1291](https://github.com/scriptscat/scriptcat/pull/1291)) (by @CodFrm)
- 🐛 Correction du problème d'affichage de la liste des scripts de ScriptEditor en thème clair ([#1288](https://github.com/scriptscat/scriptcat/pull/1288)) (by @CodFrm)
- 🐛 Correction de la popup masquée ([#1290](https://github.com/scriptscat/scriptcat/pull/1290)) (by @cyfung1031)

## 1.4.0-beta (2026-03-13)

### 🐛 Corrections de bugs

- 🚑 Correction de l'erreur de détection d'environnement causée par d'autres extensions injectant chrome.runtime [#1280](https://github.com/scriptscat/scriptcat/issues/1280) ([#1281](https://github.com/scriptscat/scriptcat/pull/1281)) (by @CodFrm)
- 🐛 Correction et optimisation des problèmes de ScriptEditor ([#1258](https://github.com/scriptscat/scriptcat/pull/1258)) (by @cyfung1031)
- 🐛 Correction du redémarrage répété causé par le conflit de vérification des permissions de la fenêtre de navigation privée (6c308f60) (by @CodFrm)
- 🐛 Correction des problèmes de la page de confirmation ([#1275](https://github.com/scriptscat/scriptcat/pull/1275)) (by @cyfung1031)
- 🐛 Correction du problème de gestion de l'expression include *?* [#1271](https://github.com/scriptscat/scriptcat/issues/1271) ([#1272](https://github.com/scriptscat/scriptcat/pull/1272)) (by @CodFrm)
- 🐛 Correction du contrôle de gestion des permissions des paramètres de scripts qui ne fonctionnait pas ([#1267](https://github.com/scriptscat/scriptcat/pull/1267)) (by @CodFrm)

### 🔒 Améliorations de sécurité

- 🔒 Utilisation de DOMPurify pour assainir le contenu HTML des notifications d'annonces ([#1274](https://github.com/scriptscat/scriptcat/pull/1274)) (by @CodFrm)

### Autres

- ✅ Ajout de tests E2E Playwright et de tests fonctionnels de l'API GM ([#1283](https://github.com/scriptscat/scriptcat/pull/1283)) (by @CodFrm)
- 📄 docs : mise à jour des URL du Chrome Web Store vers le nouveau domaine ([#1279](https://github.com/scriptscat/scriptcat/pull/1279)) (by @theluckystrike)

## 1.3.0-beta.4 (2026-02-19)

### Ajouté

- ✨ Ajout du stockage Amazon S3 [#1146](https://github.com/scriptscat/scriptcat/issues/1146) ([#1189](https://github.com/scriptscat/scriptcat/pull/1189)) (by @CodFrm)
- ✨ Ajustement de la position de la barre latérale masquée de l'éditeur [#1185](https://github.com/scriptscat/scriptcat/issues/1185) ([#1254](https://github.com/scriptscat/scriptcat/pull/1254)) (by @CodFrm)
- ✨ Acceptation de `@version` sans valeur ou avec une valeur vide ([#1216](https://github.com/scriptscat/scriptcat/pull/1216)) (by @cyfung1031)

### Corrigé

- 🐛 Correction du problème d'ouverture de page de la notification de changement de version ([#1266](https://github.com/scriptscat/scriptcat/pull/1266)) (by @CodFrm)
- 🐛 Correction de l'exécution incorrecte de unregister ([#1231](https://github.com/scriptscat/scriptcat/pull/1231)) (by @cyfung1031)
- 🐛 Correction du problème de GM_addElement, déplacement de l'opération dans l'environnement de contenu ([#1233](https://github.com/scriptscat/scriptcat/pull/1233)) (by @cyfung1031)
- 🐛 Refactorisation de DraggableEntry, correction de l'alignement de la hauteur des cartes ([#1245](https://github.com/scriptscat/scriptcat/pull/1245)) (by @cyfung1031)
- 🐛 Correction du problème de suivi du défilement de l'écran par le contenu de la popup ([#1263](https://github.com/scriptscat/scriptcat/pull/1263)) (by @cyfung1031) ([#1259](https://github.com/scriptscat/scriptcat/pull/1259)) (by @cyfung1031)
- 🐛 Correction de la fuite de mémoire et de l'exposition de propriétés d'objets, et repli de l'analyse XML TTP sur null ([#1242](https://github.com/scriptscat/scriptcat/pull/1242)) (by @cyfung1031) ([#1260](https://github.com/scriptscat/scriptcat/pull/1260)) (by @cyfung1031)
- 🐛 Ajout du paramètre `conflictAction` à `GM_download` ([#1250](https://github.com/scriptscat/scriptcat/pull/1250)) (by @cyfung1031)
- 🐛 Correction de l'échec d'analyse du lien d'installation [#1235](https://github.com/scriptscat/scriptcat/issues/1235) ([#1238](https://github.com/scriptscat/scriptcat/pull/1238)) (by @cyfung1031)
- 🐛 Correction du composant de glisser-déposer causant un décalage focusin/focusout [#1224](https://github.com/scriptscat/scriptcat/issues/1224) ([#1243](https://github.com/scriptscat/scriptcat/pull/1243)) (by @CodFrm)
- 🐛 Correction des parties liées à subscribeUrl dans installScript ([#1218](https://github.com/scriptscat/scriptcat/pull/1218)) (by @cyfung1031)
- 🐛 Correction du problème d'animation de ScriptCard ([#1234](https://github.com/scriptscat/scriptcat/pull/1234)) (by @cyfung1031)
- 🐛 Correction de hide_sidebar pour montrer main_sidebar et masquer main_sidebar ([#1225](https://github.com/scriptscat/scriptcat/pull/1225)) (by @cyfung1031)
- 🐛 Correction de l'API d'extension externe qui ne fonctionnait pas ([#1217](https://github.com/scriptscat/scriptcat/pull/1217)) (by @cyfung1031)
- 🐛 Correction du nom de fichier de téléchargement ne prenant pas en charge les dossiers ([#1203](https://github.com/scriptscat/scriptcat/pull/1203)) (by @cyfung1031)

<a name="1.3.0-beta.3"></a>

## 1.3.0-beta.3 (2026-02-07)

### Ajouté

- ✨ Modifications liées à Cron : corrections de bugs, i18n, améliorations de l'expression once, mise à niveau de la bibliothèque cron ([#1126](https://github.com/scriptscat/scriptcat/issues/1126)) (by @cyfung1031)

### Modifié

- ♻️ Refactorisation du mécanisme de communication : adoption de la diffusion storage.local + conformité scripting Firefox MV3 + MessageFlag de synchronisation dynamique intraçable ([#1067](https://github.com/scriptscat/scriptcat/issues/1067)) (by @cyfung1031)
- ⚡ Décodage de texte amélioré ([#1166](https://github.com/scriptscat/scriptcat/issues/1166)) (by @cyfung1031)
- 🎨 Ajustements de code (mineurs) - emplacement de la variable `isContent` ([#1171](https://github.com/scriptscat/scriptcat/issues/1171)) (by @cyfung1031)
- 🎨 Ajustements de code - noms de classes et de variables liés à Value ([#1175](https://github.com/scriptscat/scriptcat/issues/1175)) (by @cyfung1031)
- 🎨 Ajustements de code (mineurs) - ScriptClient ([#1172](https://github.com/scriptscat/scriptcat/issues/1172)) (by @cyfung1031)
- 🎨 (TypeScript) Révision du nom de la classe personnalisée : File -> FileInfo ([#1174](https://github.com/scriptscat/scriptcat/issues/1174)) (by @cyfung1031)
- ⬆️ Correction de `jsc.target` de rspack en es2020 / Mise à niveau de la version du noyau ([#1186](https://github.com/scriptscat/scriptcat/issues/1186)) (by @cyfung1031)
- 🎨 Amélioration de la détection de jeu de caractères ([#1140](https://github.com/scriptscat/scriptcat/issues/1140)) (by @cyfung1031)
- 🎨 Mise à jour du temps d'affichage de la fenêtre popup ([#1155](https://github.com/scriptscat/scriptcat/issues/1155)) (by @cyfung1031)
- 🎨 Corrections mineures de locales.ts ([#1154](https://github.com/scriptscat/scriptcat/issues/1154)) (by @cyfung1031)
- 🎨 Logo 128x128 ([#1176](https://github.com/scriptscat/scriptcat/issues/1176)) (by @cyfung1031)
- 🎨 Traitement d'images ([#1177](https://github.com/scriptscat/scriptcat/issues/1177)) (by @cyfung1031)

### Supprimé

- 🔥 package.json : suppression de pako ([#1188](https://github.com/scriptscat/scriptcat/issues/1188)) (by @cyfung1031)

### Corrigé

- 🐛 Gestion des problèmes d'encodage des scripts [#1115](https://github.com/scriptscat/scriptcat/issues/1115) ([#1138](https://github.com/scriptscat/scriptcat/issues/1138)) (by @CodFrm)
- 🐛 Gestion des problèmes de référence de valeurs [#1141](https://github.com/scriptscat/scriptcat/issues/1141) ([#1147](https://github.com/scriptscat/scriptcat/issues/1147)) (by @CodFrm)
- 🐛 Correction de la logique de rendu des boutons, évitement des effets de bord en phase de rendu, utilisation du rendu conditionnel JSX et des slots nommés ([#1153](https://github.com/scriptscat/scriptcat/issues/1153)) (by @cyfung1031)
- 🐛 Correction du problème de surveillance continue de FileSystemObserver ([#1160](https://github.com/scriptscat/scriptcat/issues/1160)) (by @cyfung1031)
- 🐛 fix : compatibilité TM `@match www.website.com/*` ([#1165](https://github.com/scriptscat/scriptcat/issues/1165)) (by @cyfung1031)
- 🐛 Correction des déclarations asynchrones de l'API GM, retour correct de Promise ([#1169](https://github.com/scriptscat/scriptcat/issues/1169)) (by @cyfung1031)
- 🐛 Correction du problème de UserAgentData manquant dans content.js ([#1183](https://github.com/scriptscat/scriptcat/issues/1183)) (by @cyfung1031)
- 🐛 Correction de l'erreur structuredClone de 1.2.5 ([#1192](https://github.com/scriptscat/scriptcat/issues/1192)) (by @cyfung1031)
- 🐛 Correction de la modification 9343f2d6e49aec78d208d0e3ba3d96ec2a4d5a1c ([#1195](https://github.com/scriptscat/scriptcat/issues/1195)) (by @cyfung1031)
- 🐛 Correction des problèmes de grant ([#1199](https://github.com/scriptscat/scriptcat/issues/1199)) (by @CodFrm)

<a name="1.3.0-beta.2"></a>

## 1.3.0-beta.2 (2026-01-07)

### Ajouté

- ✨ La suppression synchrone est désormais désactivée par défaut ([#958](https://github.com/scriptscat/scriptcat/issues/958)) [[9c4c7dc](https://github.com/scriptscat/scriptcat/commit/9c4c7dc411357746db43a306d97ac41a71f2b49c)] (by @cyfung1031)
- ✨ L'éditeur prend désormais en charge GM.\* ([#1129](https://github.com/scriptscat/scriptcat/issues/1129)) [[bea0192](https://github.com/scriptscat/scriptcat/commit/bea0192c6cc50eff2ed4e1cc5dcc25f36bbe10e7)] (by @cyfung1031)

### Modifié

- ♻️ Optimisation de la logique d'ouverture de la page du journal des modifications [#1110](https://github.com/scriptscat/scriptcat/issues/1110) [[d3ffedc](https://github.com/scriptscat/scriptcat/commit/d3ffedcffe752ca548f87f1640072fcd871b8604)] (by @CodFrm)

### Corrigé

- 🐛 Correction de l'affichage des icônes de scripts [#1052](https://github.com/scriptscat/scriptcat/issues/1052) ([#1104](https://github.com/scriptscat/scriptcat/issues/1104)) [[2e5c601](https://github.com/scriptscat/scriptcat/commit/2e5c601274fa27aa67b49ef9d352e3a1c3975979)] (by @CodFrm)
- 🐛 Correction de scriptcat.d.tpl et des types ([#1130](https://github.com/scriptscat/scriptcat/issues/1130)) [[dd22ef5](https://github.com/scriptscat/scriptcat/commit/dd22ef544684d69e24a7aae098cb05cbab03daa8)] (by @cyfung1031)
- 🐛 Correction des problèmes de synchronisation cloud ([#1133](https://github.com/scriptscat/scriptcat/issues/1133)) [[a9383d2](https://github.com/scriptscat/scriptcat/commit/a9383d2012eb3953dc33c8886ce3891f404fa100)] (by @CodFrm)
- 🐛 Correction de l'erreur `GM_addElement("tagName")` ([#1120](https://github.com/scriptscat/scriptcat/issues/1120)) [[ad19de5](https://github.com/scriptscat/scriptcat/commit/ad19de5c1793c8c079bedbf1b11c7c2ae27a469e)] (by @cyfung1031)
- 🐛 Suppression de la logique de nettoyage et optimisation de la logique checkuserscript ([#1113](https://github.com/scriptscat/scriptcat/issues/1113)) [[e635911](https://github.com/scriptscat/scriptcat/commit/e635911a3c11c3cb8acd1cfd507cb777e5ee7236)] (by @CodFrm)

### Divers

- 🏷️ Révisions TypeScript ([#1127](https://github.com/scriptscat/scriptcat/issues/1127)) [[b455724](https://github.com/scriptscat/scriptcat/commit/b4557244191018c18d5ce8ea8e8627bcfb7f7cdd)] (by @cyfung1031)
- 📝 Compléments de commentaires d'exemples ([#1131](https://github.com/scriptscat/scriptcat/issues/1131)) [[292549e](https://github.com/scriptscat/scriptcat/commit/292549ed0f65952fe9f269aace23eefc7d6a3a0f)] (by @cyfung1031)

<a name="1.3.0-beta.1"></a>

## 1.3.0-beta.1 (2025-12-21)

### Ajouté

- ✨ Optimisation des paramètres de l'éditeur Monaco, ajout de la correction `/* global xxx */` ([#1012](https://github.com/scriptscat/scriptcat/issues/1012)) [[b1a738d](https://github.com/scriptscat/scriptcat/commit/b1a738d98b5e852993da322d56dbfa20f68d20e3)] (by @cyfung1031)

### Modifié

- ⚡ Déplacement des métadonnées hors de chrome.storage.session ([#1027](https://github.com/scriptscat/scriptcat/issues/1027)) [[9c81f6c](https://github.com/scriptscat/scriptcat/commit/9c81f6c42b087411669adef35df30714e184ee93)] (by @cyfung1031)
- ⚡ Optimisation de l'affichage de la prochaine heure d'exécution [#1093](https://github.com/scriptscat/scriptcat/issues/1093) [[324ce51](https://github.com/scriptscat/scriptcat/commit/324ce515c84699ca8d3bf1ee447fc6ef0656ae0d)] (by @CodFrm)

### Corrigé

- 🐛 Correction des problèmes de la page popup ([#1100](https://github.com/scriptscat/scriptcat/issues/1100)) [[9c67e4a](https://github.com/scriptscat/scriptcat/commit/9c67e4a2c609f8c1ef82c493bb1ed68da6396d2e)] (by @CodFrm)
- 🐛 Correction d'une erreur de type [[f5a73c7](https://github.com/scriptscat/scriptcat/commit/f5a73c71649621e519b32630ae7717411732aa50)] (by @CodFrm)
- 🐛 Correction du problème de journal anglais contenant des caractères pleine largeur ([#1095](https://github.com/scriptscat/scriptcat/issues/1095)) [[a68b100](https://github.com/scriptscat/scriptcat/commit/a68b10048cb01a8e26fe8d524102bfb23ed4e179)] (by @cyfung1031)
- 🐛 Ajout du préfixe UnoCSS pour résoudre les conflits CSS, correction de la mise en page CSS ([#1013](https://github.com/scriptscat/scriptcat/issues/1013)) [[723e64c](https://github.com/scriptscat/scriptcat/commit/723e64cc0c23763dfed322e907c0a960c4f9060e)] (by @cyfung1031)
- 🐛 Correction du problème de correspondance d'URL pour les scripts précoces ([#1096](https://github.com/scriptscat/scriptcat/issues/1096)) [[a77effb](https://github.com/scriptscat/scriptcat/commit/a77effbab5ab4d1752065ef943d9c050ff99c066)] (by @CodFrm)
- 🐛 Correction du problème d'affichage trop bref de la fenêtre de mise à jour ([#1088](https://github.com/scriptscat/scriptcat/issues/1088)) [[b2b2d5c](https://github.com/scriptscat/scriptcat/commit/b2b2d5c41ff70ee5430f7d8d156f480ac8fc3a1a)] (by @cyfung1031)
- 🐛 Correction du problème d'affichage anormal lorsque les notifications de scripts utilisateur sont activées ([#1086](https://github.com/scriptscat/scriptcat/issues/1086)) ([959c4db](https://github.com/scriptscat/scriptcat/commit/959c4dbed92f7bfe22a2f8ebb775c4189b5ff076))
- 🐛 responseHeaders : `Compatibilité TM : \\r\\n` ([#1085](https://github.com/scriptscat/scriptcat/issues/1085)) [[15232c8](https://github.com/scriptscat/scriptcat/commit/15232c8543d93abfdafa1353d39d8a15d1dc385f)] (by @cyfung1031)
- 🐛 Correction des problèmes de GM xhr ([#1082](https://github.com/scriptscat/scriptcat/issues/1082)) [[3d987c3](https://github.com/scriptscat/scriptcat/commit/3d987c300242a3c765146359c35ecd6d998f792c)] (by @CodFrm)
- 🐛 Correction du problème de synchronisation en arrière-plan fréquente ([#1076](https://github.com/scriptscat/scriptcat/issues/1076)) [[45dc39b](https://github.com/scriptscat/scriptcat/commit/45dc39baa0f3326cf12e97312ab632dc46ba40f2)] (by @CodFrm)
- 🐛 Correction du problème de gestion des onglets spéciaux [#1066](https://github.com/scriptscat/scriptcat/issues/1066) ([50904fb](https://github.com/scriptscat/scriptcat/commit/50904fb46efdea10fd57677bc2d28c770b47e861))
- 🐛 Correction de la gestion des scripts sans règles de correspondance [#1071](https://github.com/scriptscat/scriptcat/issues/1071) ([560cdc0](https://github.com/scriptscat/scriptcat/commit/560cdc01fc0fc27fb7d0e3b877c63ba431206668))
- 🐛 Correction du problème de packaging CI qui supprimait les permissions optionnelles en arrière-plan [[1f002f0](https://github.com/scriptscat/scriptcat/commit/1f002f0edf9892f023ae93b8522ff7c5e4a96559)] (by @CodFrm)
- 🐛 Correction de l'ignorance des onglets rejetés ([#1058](https://github.com/scriptscat/scriptcat/issues/1058)) [[6165bf4](https://github.com/scriptscat/scriptcat/commit/6165bf48eb1d53ede0561c85c30135446c2ff882)] (by @cyfung1031)

<a name="1.3.0-beta"></a>

## 1.3.0-beta (2025-12-13)

### Ajouté

- ✨ Nouvelle logique d'installation de scripts ([#842](https://github.com/scriptscat/scriptcat/issues/842)) ([80d342e](https://github.com/scriptscat/scriptcat/commit/80d342e80c9c1b36f88b7dcd4c65c663bb1d9185))
- ✨ Internationalisation des indices de l'éditeur Monaco et ajout de l'indice `@require-css` ([#960](https://github.com/scriptscat/scriptcat/issues/960)) [[51a6f94](https://github.com/scriptscat/scriptcat/commit/51a6f94be3a430691f73057eae61a3814560a5b3)] (by @cyfung1031)
- ✨ Correction de la validation des conflits `@grant`, ajout d'une invite d'erreur de déclaration de métadonnées dupliquée ([#902](https://github.com/scriptscat/scriptcat/issues/902)) [[8fbd0f1](https://github.com/scriptscat/scriptcat/commit/8fbd0f1041f5c5dcdb5a515348a5f54934acfdc7)] (by @cyfung1031)
- ✨ `@noframes` prédéfini dans le modèle pour éviter les pièges des débutants ([#900](https://github.com/scriptscat/scriptcat/issues/900)) [[c9d5840](https://github.com/scriptscat/scriptcat/commit/c9d584066ff2395112b9a930aaa409cda764a5e6)] (by @cyfung1031)
- ✨ Empêcher que le lien d'installation du script soit mal jugé comme une installation au lieu d'une mise à jour lorsque le nom du script change ([#824](https://github.com/scriptscat/scriptcat/issues/824)) [[5c7a5dd](https://github.com/scriptscat/scriptcat/commit/5c7a5ddc81e3bd1dd0a71cc80460a5239178c1de)] (by @cyfung1031)
- ✨ Options d'exécution des scripts ([#895](https://github.com/scriptscat/scriptcat/issues/895)) [[b0ea187](https://github.com/scriptscat/scriptcat/commit/b0ea187c2e6d69b60c981aa9b4d068fed7c2c2a2)] (by @CodFrm)
- ✨ Affichage d'une icône grise lorsque la fonctionnalité du script est désactivée [#897](https://github.com/scriptscat/scriptcat/issues/897) ([3e406dc](https://github.com/scriptscat/scriptcat/commit/3e406dc4562adf7d7f3b79b52623b87e87ef1ad3))
- ✨ Optimisation de la logique d'interaction du menu lorsque les éléments extensibles sont 0 [#868](https://github.com/scriptscat/scriptcat/issues/868) ([da24ac2](https://github.com/scriptscat/scriptcat/commit/da24ac234f0eeae0159dce6c2b346d06fb72eaa5))

### Modifié

- 🎨 Correction de la référence Typography ([#984](https://github.com/scriptscat/scriptcat/issues/984)) [[a70400c](https://github.com/scriptscat/scriptcat/commit/a70400cdca8a5b64cffaca85017513d4e5e7171c)] (by @cyfung1031)
- ♻️ Compatibilité Firefox : GM_setClipboard ([#928](https://github.com/scriptscat/scriptcat/issues/928)) [[d1a5cb1](https://github.com/scriptscat/scriptcat/commit/d1a5cb19dc4e05fac838258d15c48cc6f876d416)] (by @cyfung1031)
- ♻️ Ajustements de l'API userScripts / scripting, amélioration de la compatibilité (redo [#704](https://github.com/scriptscat/scriptcat/issues/704)) ([#925](https://github.com/scriptscat/scriptcat/issues/925)) [[43bc40f](https://github.com/scriptscat/scriptcat/commit/43bc40ff5da5ef36a13564504293f1928138cf12)] (by @cyfung1031)
- ♻️ Refactorisation et optimisation du chargement des icônes de scripts ([#893](https://github.com/scriptscat/scriptcat/issues/893)) ([ab36c86](https://github.com/scriptscat/scriptcat/commit/ab36c86b5d031b88e71fbf9151696a42acba86fa))
- ⚡ Optimisation du code parseMetadata ([#903](https://github.com/scriptscat/scriptcat/issues/903)) [[0efc648](https://github.com/scriptscat/scriptcat/commit/0efc648257f74591765869dedee5d98f8a1dc610)] (by @cyfung1031)
- 🎨 Changement de l'affichage du nombre d'icônes par défaut de l'extension en nombre de scripts [#989](https://github.com/scriptscat/scriptcat/issues/989) [[70f67b6](https://github.com/scriptscat/scriptcat/commit/70f67b6bd8cf803d7a18bf26fdccdfa6f8a92893)] (by @CodFrm)
- 🐛 Import & Export - Correction du problème de non-respect de la date/heure de dernière modification des scripts ([#951](https://github.com/scriptscat/scriptcat/issues/951)) ([6e7272f](https://github.com/scriptscat/scriptcat/commit/6e7272f52ef2d49d9fceb3e30babfee1cbd72e75))
- 🎨 Ajustement de sourceURL pour faciliter le débogage ([#987](https://github.com/scriptscat/scriptcat/issues/987)) [[ed741e7](https://github.com/scriptscat/scriptcat/commit/ed741e7d0188fa5e95eae87bcd3a28e82ee008e1)] (by @cyfung1031)
- ⬆️ Mises à jour des versions de paquets ([#922](https://github.com/scriptscat/scriptcat/issues/922)) [[9b1df8d](https://github.com/scriptscat/scriptcat/commit/9b1df8dda794e5e95ecc12cef37ed66712ae561e)] (by @cyfung1031)
- ⚡ Ajustements courants liés aux valeurs ([#949](https://github.com/scriptscat/scriptcat/issues/949)) [[b258fb2](https://github.com/scriptscat/scriptcat/commit/b258fb2c73d790f7f277a9a31d07e2931a7d680d)] (by @cyfung1031)
- ⚡ Généralisation de URL.createObjectURL, compatibilité Firefox ([#929](https://github.com/scriptscat/scriptcat/issues/929)) [[54ad4de](https://github.com/scriptscat/scriptcat/commit/54ad4de48b81170b90283fb6ce3b4d6e7c908cdf)] (by @cyfung1031)
- ⚡ Stockage des icônes par URL pour éviter que plusieurs scripts stockent la même icône ([#909](https://github.com/scriptscat/scriptcat/issues/909)) [[c6e8efb](https://github.com/scriptscat/scriptcat/commit/c6e8efbe8d11719034a9aaa3fd871519025671ff)] (by @cyfung1031)
- ♻️ Ajustement du code updateIcon ([#908](https://github.com/scriptscat/scriptcat/issues/908)) [[642e3b9](https://github.com/scriptscat/scriptcat/commit/642e3b9e57f01f2b008990cc7cb1461f5dccd256)] (by @cyfung1031)

### Corrigé

- 🐛 Effacement de l'Alarm existant lors de la sélection de vérifications de mises à jour de scripts irrégulières ([#996](https://github.com/scriptscat/scriptcat/issues/996)) [[8bb9a2d](https://github.com/scriptscat/scriptcat/commit/8bb9a2d5741acb7d547e743c7bef8a2139f1401a)] (by @cyfung1031)
- 🐛 Suppression de l'espace blanc supplémentaire en haut de la page de sauvegarde ([#995](https://github.com/scriptscat/scriptcat/issues/995)) ([9c149ce](https://github.com/scriptscat/scriptcat/commit/9c149ce5999b7a70375a41c6604c8e8dbd19e9df))
- ✨ Installation sans dépendre de l'accès à un site web externe + ajustement de la mise en page de la page d'installation ([#842](https://github.com/scriptscat/scriptcat/issues/842)) ([80d342e](https://github.com/scriptscat/scriptcat/commit/80d342e80c9c1b36f88b7dcd4c65c663bb1d9185))
- 🐛 Ajout du préfixe UnoCSS pour résoudre les conflits CSS, correction de la mise en page CSS ([#1013](https://github.com/scriptscat/scriptcat/issues/1013)) [[723e64c](https://github.com/scriptscat/scriptcat/commit/723e64cc0c23763dfed322e907c0a960c4f9060e)] (by @cyfung1031)
- 🐛 Optimisation de systemconfig et correction des problèmes i18n dans SW ([#976](https://github.com/scriptscat/scriptcat/issues/976)) [[c50fcf7](https://github.com/scriptscat/scriptcat/commit/c50fcf7770df633462c2f25f8cf22d302002ec57)] (by @CodFrm)
- 🐛 Correction des erreurs de type ([#975](https://github.com/scriptscat/scriptcat/issues/975)) [[7d85856](https://github.com/scriptscat/scriptcat/commit/7d8585687c71cde1c2793d742abb7c22d9d358f0)] (by @cyfung1031)

<a name="1.2.0-beta.5"></a>

## 1.2.0-beta.5 (2025-11-17)

### Ajouté

- ✨ Affichage du nombre de scripts dans la popup ([#973](https://github.com/scriptscat/scriptcat/issues/973)) [[1134586](https://github.com/scriptscat/scriptcat/commit/1134586ff040ffc0cdddd3538e9ec493950c948a)] (by @cyfung1031)

### Modifié

- ⚡ Gestion de `check_script_update_cycle` ([#906](https://github.com/scriptscat/scriptcat/issues/906)) [[760562f](https://github.com/scriptscat/scriptcat/commit/760562f92ad64bc538873b2ca61dfafe067c3f6e)] (by @cyfung1031)
- ♻️ Organisation d'inject &amp; content, modification du transfert d'informations pageLoad ([#952](https://github.com/scriptscat/scriptcat/issues/952)) [[0554159](https://github.com/scriptscat/scriptcat/commit/0554159c105606192d48e1153194e09314d43bc9)] (by @cyfung1031)
- 🎨 Simplification de messageFlag, révision selon les normes de nommage des événements ([#926](https://github.com/scriptscat/scriptcat/issues/926)) [[d725d85](https://github.com/scriptscat/scriptcat/commit/d725d85a2f4917c08f6d3daa035a45fd15d12451)] (by @cyfung1031)
- ♻️ Refactorisation de `GM_xmlhttpRequest` et du code associé ([#901](https://github.com/scriptscat/scriptcat/issues/901)) [[fabd2e9](https://github.com/scriptscat/scriptcat/commit/fabd2e944235b460bc73df346b79d23ee4540af7)] (by @cyfung1031)
- ⚡ Micro-optimisation de toCamelCase ([#930](https://github.com/scriptscat/scriptcat/issues/930)) [[88d8bdf](https://github.com/scriptscat/scriptcat/commit/88d8bdfc726f1a4ed63bd3cf81ebad88426273e8)] (by @cyfung1031)

### Corrigé

- 🐛 Correction du sandbox corrompu ([#966](https://github.com/scriptscat/scriptcat/issues/966)) [[dd80386](https://github.com/scriptscat/scriptcat/commit/dd8038666481d1319dd0f8ab80f79f1b13c1730d)] (by @cyfung1031)
- 🐛 Correction de `valueChangeListener.clear` non défini dans setInvalidContext ([#970](https://github.com/scriptscat/scriptcat/issues/970)) [[2a399e9](https://github.com/scriptscat/scriptcat/commit/2a399e96a1e848f2f569566479b48dcee280f543)] (by @cyfung1031)
- 🐛 Ajustement de la logique `@connect` ([#969](https://github.com/scriptscat/scriptcat/issues/969)) [[67914d2](https://github.com/scriptscat/scriptcat/commit/67914d2b7d57fa9c69706ae57ee5d3400c2643f9)] (by @cyfung1031)
- 🐛 Correction de la gestion i18n du service worker [#956](https://github.com/scriptscat/scriptcat/issues/956) [[843e618](https://github.com/scriptscat/scriptcat/commit/843e618daf13ec659cc16759c5de13dacf23c534)] (by @CodFrm)
- 🐛 Correction du problème d'exécution de deleteValue/deleteValues ([#943](https://github.com/scriptscat/scriptcat/issues/943)) [[3d92bfb](https://github.com/scriptscat/scriptcat/commit/3d92bfb4a0334ffd2c279a1e6d33e98eed0a1a81)] (by @cyfung1031)
- 🐛 Correction de l'impossibilité d'installer des scripts via un lien GitHub ([#877](https://github.com/scriptscat/scriptcat/issues/877)) [[b9268e7](https://github.com/scriptscat/scriptcat/commit/b9268e7207081fcaa4591c9e1385f98446ade04a)] (by @cyfung1031)
- 🐛 Correction de `@connect *` qui ne prenait pas effet ([#967](https://github.com/scriptscat/scriptcat/issues/967)) [[6bcb93c](https://github.com/scriptscat/scriptcat/commit/6bcb93c20c9690a2ce4f50d0978948e20ba407b8)] (by @cyfung1031)

### Divers

- 🌐 Mises à jour de traductions ([#920](https://github.com/scriptscat/scriptcat/issues/920)) [[ede013b](https://github.com/scriptscat/scriptcat/commit/ede013b8e725ddefa626e3e432cbaee756535259)] (by @cyfung1031)

<a name="1.2.0-beta.4"></a>

## 1.2.0-beta.4 (2025-11-07)

### Ajouté

- ✨ Guide du mode carte ([#894](https://github.com/scriptscat/scriptcat/issues/894)) [[0627a0f](https://github.com/scriptscat/scriptcat/commit/0627a0faacf3a41645e985ec6f6960568427d5a4)] (by @CodFrm)

### Modifié

- ♻️ Refactorisation de l'implémentation EarlyStart ([#882](https://github.com/scriptscat/scriptcat/issues/882)) [[cca11e0](https://github.com/scriptscat/scriptcat/commit/cca11e02b98de285423b04ec0d95eab995cee378)] (by @CodFrm)
- 💄 Réglage fin de la mise en page de la vue en cartes ([#872](https://github.com/scriptscat/scriptcat/issues/872)) [[5aa21b8](https://github.com/scriptscat/scriptcat/commit/5aa21b88bf423d5d03f7df70b654249bac4b7a88)] (by @Coxxs)

### Corrigé

- 🐛 Correction de l'erreur causée par le point-virgule manquant entre deux `@require` [#917](https://github.com/scriptscat/scriptcat/issues/917) ([#921](https://github.com/scriptscat/scriptcat/issues/921)) [[2769a24](https://github.com/scriptscat/scriptcat/commit/2769a24e129da79926816886fe42bbc4d9a97875)] (by @cyfung1031)
- 🐛 Correction du problème d'exception de la page Vérifier les mises à jour ([#912](https://github.com/scriptscat/scriptcat/issues/912)) [[12272e1](https://github.com/scriptscat/scriptcat/commit/12272e1ad4787cc6768f2f157d272faff5782f37)] (by @cyfung1031)
- 🐛 Correction de GM_openInTab qui ne fonctionnait pas dans les scripts en arrière-plan [#873](https://github.com/scriptscat/scriptcat/issues/873) [[a526664](https://github.com/scriptscat/scriptcat/commit/a52666429710e150d81cac33af5511401b697355)] (by @CodFrm)
- 🐛 Correction du problème d'état de chargement de la liste de tableaux [#874](https://github.com/scriptscat/scriptcat/issues/874) [[0b53cb0](https://github.com/scriptscat/scriptcat/commit/0b53cb07cf1ca1d3e42b15fd9c104c83031502d5)] (by @CodFrm)
- 🐛 Correction de l'échec d'injection des scripts après la suppression de `@early-start` ([#871](https://github.com/scriptscat/scriptcat/issues/871)) [[426e878](https://github.com/scriptscat/scriptcat/commit/426e8788d9b934ee96cf5ec22b432a08681a9e8c)] (by @cyfung1031)

<a name="1.2.0-beta.3"></a>

## 1.2.0-beta.3 (2025-10-23)

### Ajouté

- ✨ Vue en cartes ([#860](https://github.com/scriptscat/scriptcat/issues/860)) [[c9f2350](https://github.com/scriptscat/scriptcat/commit/c9f23509648a41b06f82e79da2bc1fc05a783e06)] (by @CodFrm)

### Modifié

- ♻️ Ajustement du code Null ([#852](https://github.com/scriptscat/scriptcat/issues/852)) [[fa1031d](https://github.com/scriptscat/scriptcat/commit/fa1031df9c3e8bc2550f429e7cf8d1c3869a1ea3)] (by @cyfung1031)
- ♻️ Ajustement du code GMApiRequest, correction du code GM_log, correction du jugement @connect ([#849](https://github.com/scriptscat/scriptcat/issues/849)) [[ee4a8b2](https://github.com/scriptscat/scriptcat/commit/ee4a8b28715fb48fa627f5231c8dc30e55c006ed)] (by @cyfung1031)

### Supprimé

- 🔥 Suppression de `GM_openInTab({ useOpen: true })` ([#867](https://github.com/scriptscat/scriptcat/issues/867)) [[aa61335](https://github.com/scriptscat/scriptcat/commit/aa613354c7b7c84d461000ed0362cf9916c8aa39)] (by @cyfung1031)

### Corrigé

- 🐛 Compatibilité de checkUserScriptsAvailable avec Vivaldi ([#859](https://github.com/scriptscat/scriptcat/issues/859)) [[014d62d](https://github.com/scriptscat/scriptcat/commit/014d62de6b731bfda82babf5db5aa5ae909908f1)] (by @cyfung1031)
- 🚑 Correction critique : la Promise de GM.delete/setValue ne se résolvait pas ([#865](https://github.com/scriptscat/scriptcat/issues/865)) [[43572a3](https://github.com/scriptscat/scriptcat/commit/43572a3110b8b083f840b472a231400223da7751)] (by @cyfung1031)
- 🐛 Correction du problème de fetch de GM xhr [#847](https://github.com/scriptscat/scriptcat/issues/847) [[c6e95c2](https://github.com/scriptscat/scriptcat/commit/c6e95c210748d091ff9f610f3801eaa055d9d6de)]

### Divers

- 📝 Ajout du commentaire `@compatible` à monaco-editor ([#853](https://github.com/scriptscat/scriptcat/issues/853)) [[752b951](https://github.com/scriptscat/scriptcat/commit/752b95122ab324df358e45ec468194cc8466f8bb)] (by @cyfung1031)
- 🌐 Ajout de la traduction subscribe_source_tooltip [#850](https://github.com/scriptscat/scriptcat/issues/850) [[8d675bd](https://github.com/scriptscat/scriptcat/commit/8d675bd5398d403dfc8e7ee2016fbaffd821da64)]

<a name="1.2.0-beta.2"></a>

## 1.2.0-beta.2 (2025-10-15)

Logique de mise à jour des scripts optimisée, barre latérale de la liste des scripts ajoutée, fonctionnalités GM_registerMenuCommand et GM_openInTab améliorées, et de nombreux bugs corrigés

### Ajouté

- ✨ Mécanisme de notification de mise à jour unifié ([#755](https://github.com/scriptscat/scriptcat/issues/755)) ([741b0bd](https://github.com/scriptscat/scriptcat/commit/741b0bd2ec2f75a7e84c62fbe02654ce6bc41543))
- ✨ Menu de deuxième niveau et séparateur de GM_registerMenuCommand &amp; ([#831](https://github.com/scriptscat/scriptcat/issues/831)) [[bd08959](https://github.com/scriptscat/scriptcat/commit/bd089595c922aa63af0fb6d41fa9f6dc2587e096)] (by @cyfung1031)
- ✨ Ajout de paramètres à GM_openInTab ([#788](https://github.com/scriptscat/scriptcat/issues/788)) [[eb33d61](https://github.com/scriptscat/scriptcat/commit/eb33d613473815b12017e34f46ed9eb292a9dcba)] (by @cyfung1031)
- ✨ Ajout du bouton de vérification de version SC ([#795](https://github.com/scriptscat/scriptcat/issues/795)) [[1680c66](https://github.com/scriptscat/scriptcat/commit/1680c66099120c0e497c1a1f5321f38fe0160ea0)] (by @cyfung1031)
- ✨ Ajout du filtrage et de l'étiquetage de la barre latérale de la liste des scripts ([#794](https://github.com/scriptscat/scriptcat/issues/794)) [[6aabf59](https://github.com/scriptscat/scriptcat/commit/6aabf594cd62fa7358ba34c1c69060dc9e24919c)]
- ✨ Utilisation de window.showOpenFilePicker pour ouvrir des fichiers, permettant la surveillance des fichiers locaux [#749](https://github.com/scriptscat/scriptcat/issues/749) [[7dcfbf1](https://github.com/scriptscat/scriptcat/commit/7dcfbf1309fff28c3d806d4ccb36bd0ef51050f5)]

### Modifié

- ♻️ Séparation de la logique de migration d'indexeddb et de chrome.storage ([#844](https://github.com/scriptscat/scriptcat/issues/844)) [[b8389fb](https://github.com/scriptscat/scriptcat/commit/b8389fbc21932dbbe9394b576fbd8605a3b820c8)]
- ♻️ Correction de registerMenuCommand &amp; unregisterMenuCommand ([#826](https://github.com/scriptscat/scriptcat/issues/826)) [[3ecde9e](https://github.com/scriptscat/scriptcat/commit/3ecde9e0125089744c2d81f759b043deb5440be6)] (by @cyfung1031)
- ⚡ Optimisation du chargement au démarrage de Runtime ([#775](https://github.com/scriptscat/scriptcat/issues/775)) [[3e69401](https://github.com/scriptscat/scriptcat/commit/3e69401feb98bd789a85dbda7d9e690f71bae696)] (by @cyfung1031)

### Corrigé

- 🐛 Révision de la conception du code lié à `GM_registerMenuCommand` ([#790](https://github.com/scriptscat/scriptcat/issues/790)) ([a71cfe4](https://github.com/scriptscat/scriptcat/commit/a71cfe496fcb2457109dd97742a795585860a6d7))
- 🐛 Gestion du nettoyage des données de la popup [#784](https://github.com/scriptscat/scriptcat/issues/784) [[7bd9b16](https://github.com/scriptscat/scriptcat/commit/7bd9b162b178a534a8be31aca210af2106f110b7)]
- 🐛 Correction du problème de téléchargement de CAT_fileStorage [#829](https://github.com/scriptscat/scriptcat/issues/829) [[81d4e49](https://github.com/scriptscat/scriptcat/commit/81d4e496df8abd3715348fe979758a63311b54c3)]
- 🐛 Correction du problème d'ordre des groupes userconfig [#818](https://github.com/scriptscat/scriptcat/issues/818) [[74881c0](https://github.com/scriptscat/scriptcat/commit/74881c0a05d599ad13300c3c69b33b01a5a7b552)]
- 🐛 Correction des problèmes de compatibilité et de gestion des données de source d'installation [[574b3c6](https://github.com/scriptscat/scriptcat/commit/574b3c6506a21e1b8ebd891fd91fcd8b19774b96)]
- 🐛 Correction du problème de synchronisation d'état des scripts en arrière-plan dans la page popup [#838](https://github.com/scriptscat/scriptcat/issues/838) ([edd13c6](https://github.com/scriptscat/scriptcat/commit/edd13c65c9643dece7c38665f58146c9e59c802c))
- 🐛 Correction de l'incohérence entre le menu contextuel et le menu des scripts [#768](https://github.com/scriptscat/scriptcat/issues/768) ([191ffcd](https://github.com/scriptscat/scriptcat/commit/191ffcd1e55d842acabbc44fdf1f1098f0b0093d))
- 🐛 Correction de l'erreur d'importation manuelle de fichier local [#745](https://github.com/scriptscat/scriptcat/issues/745) ([fe14991](https://github.com/scriptscat/scriptcat/commit/fe149914e6eef99761ca44681abd95919613adb3))
- 🐛 Correction de l'erreur d'importation manuelle de fichier local [#745](https://github.com/scriptscat/scriptcat/issues/745) ([52950a2](https://github.com/scriptscat/scriptcat/commit/52950a2ad04c79aecaa530a6eb615e9c54bba884))
- 🐛 Prise en charge de la reconnaissance des \\*.user.js locaux [#812](https://github.com/scriptscat/scriptcat/issues/812) [[cec8ffc](https://github.com/scriptscat/scriptcat/commit/cec8ffc5f6947a54b7a59365928a1ccf47b336a2)]
- 🐛 Correction de l'impossibilité d'utiliser GM_addElement dans les scripts à démarrage précoce [#801](https://github.com/scriptscat/scriptcat/issues/801) [[4d17645](https://github.com/scriptscat/scriptcat/commit/4d17645c0659d8ecd283473cbdd88b6eda065758)]
- 🐛 Correction du problème de GM_info.scriptMetaStr des scripts précoces [#801](https://github.com/scriptscat/scriptcat/issues/801) [[a9a4333](https://github.com/scriptscat/scriptcat/commit/a9a433393ceb259aecc4fe9c1d32a0c9a8333160)]
- 🐛 Documentation du bloc de métadonnées et corrections mineures de code ([#832](https://github.com/scriptscat/scriptcat/issues/832)) [[c40822b](https://github.com/scriptscat/scriptcat/commit/c40822b293f1283d420797a0cbe549153541f3c8)] (by @cyfung1031)
- 🐛 Évitement du déclenchement de la mise à jour de menuCommand après la suppression de l'onglet ([#828](https://github.com/scriptscat/scriptcat/issues/828)) [[c64f6d9](https://github.com/scriptscat/scriptcat/commit/c64f6d9a4e087f7788f5b160b91c2b808161e58e)] (by @cyfung1031)
- 🐛 Correction du problème Modali18n ([#825](https://github.com/scriptscat/scriptcat/issues/825)) [[03da1ba](https://github.com/scriptscat/scriptcat/commit/03da1ba07c0fd212627bf3c18dbb3afa6affed78)] (by @cyfung1031)
- 🐛 Correction du problème i18n de Modal.confirm [#821](https://github.com/scriptscat/scriptcat/issues/821) [[b3c30f5](https://github.com/scriptscat/scriptcat/commit/b3c30f55db8b37ccbfa7278b83af21159c72f2cb)]
- ✏️ &quot;minetype&quot; devrait être &quot;mimetype&quot; dans le type de paramètre ([#823](https://github.com/scriptscat/scriptcat/issues/823)) [[fb3d132](https://github.com/scriptscat/scriptcat/commit/fb3d132ece659cb18082e383dfb925a5cc242c4c)] (by @cyfung1031)
- 🐛 Abandon des opérations &amp; libération des ressources lorsqu'une erreur de contexte d'extension invalide se produit ([#800](https://github.com/scriptscat/scriptcat/issues/800)) [[c110e74](https://github.com/scriptscat/scriptcat/commit/c110e746336e63fc1266bb4cacc056e126d919e0)] (by @cyfung1031)
- 🐛 Correction du rechargement de la page batchUpdate et du problème de non-mise à jour après installation ([#803](https://github.com/scriptscat/scriptcat/issues/803)) [[73f1f32](https://github.com/scriptscat/scriptcat/commit/73f1f329388c07588f2a532b71e5318bf3a92392)] (by @cyfung1031)
- 🐛 Ajustement du jsconfig par défaut [#813](https://github.com/scriptscat/scriptcat/issues/813) [[06f0e1c](https://github.com/scriptscat/scriptcat/commit/06f0e1c7f0974b954d7ab546ce86f22f830dc28f)]
- 🐛 Problème de rendu de l'interface ([#806](https://github.com/scriptscat/scriptcat/issues/806)) [[5c75c8b](https://github.com/scriptscat/scriptcat/commit/5c75c8b8e8fc92fcd830db094b34a7ad16fb4c9f)] (by @cyfung1031)
- 🐛 Suppression des avertissements unicode ambigus [#747](https://github.com/scriptscat/scriptcat/issues/747) [[5e7c077](https://github.com/scriptscat/scriptcat/commit/5e7c077ef250e1b8eef5662bc416b82d62927b52)]
- 🐛 Noms de colonnes et contenu de ScriptList non mis à jour après le changement de langue ([#792](https://github.com/scriptscat/scriptcat/issues/792)) [[3ad58b8](https://github.com/scriptscat/scriptcat/commit/3ad58b82bf1d4955cddd3e50b570c601f7e90143)] (by @cyfung1031)
- 🐛 Correction de chrome.tabs.query ([#786](https://github.com/scriptscat/scriptcat/issues/786)) [[de607fd](https://github.com/scriptscat/scriptcat/commit/de607fd8eca841748a3e422fe5e84f84f84619d5)] (by @cyfung1031)
- 🐛 [Correction UI] Résolution du problème useCallback ([#769](https://github.com/scriptscat/scriptcat/issues/769)) [[511de96](https://github.com/scriptscat/scriptcat/commit/511de96d2b271142244f9874f87bb23ec75f626a)] (by @cyfung1031)
- 🐛 Ajout de la permission de fond pour corriger l'impossibilité d'exécution en arrière-plan [#762](https://github.com/scriptscat/scriptcat/issues/762) [[4205837](https://github.com/scriptscat/scriptcat/commit/42058379ab6d0e29003cc1f63d5df48dbe601f4e)]
- 🐛 Correction de l'impossibilité de GM_download à télécharger des fichiers avec des caractères illégaux dans le nom de fichier ([#758](https://github.com/scriptscat/scriptcat/issues/758)) [[2518722](https://github.com/scriptscat/scriptcat/commit/2518722c8bc14b9f52e8720624dd835b1fbdfb1b)] (by @WhiteSevs)
- 🐛 Correction du problème sandbox toString [#737](https://github.com/scriptscat/scriptcat/issues/737) [[6ca24c9](https://github.com/scriptscat/scriptcat/commit/6ca24c9b171792035803ac4e1c69e473629f9d18)]
- 🐛 Correction du problème d'affichage du badge 0 [[026c1d2](https://github.com/scriptscat/scriptcat/commit/026c1d2071dd4cfb6291f005d36717bcdf0a51c3)]
- 🐛 Correction du problème CSP de l'injection de scripts [#739](https://github.com/scriptscat/scriptcat/issues/739) [#728](https://github.com/scriptscat/scriptcat/issues/728) [[5da21b5](https://github.com/scriptscat/scriptcat/commit/5da21b5e3d0e7e86a1fd5dff57ba03ea641c19fa)]

### Divers

- 📝 Corrections de commentaires TypeScript ([#839](https://github.com/scriptscat/scriptcat/issues/839)) [[6b575ca](https://github.com/scriptscat/scriptcat/commit/6b575cac4841bdf86de70e4b0e702e342a00ca76)] (by @cyfung1031)
- 🌐 Gestion des problèmes de traduction pour les notifications et les erreurs, ajout de la validation des conflits `@grant` ([#819](https://github.com/scriptscat/scriptcat/issues/819)) [[ef3482d](https://github.com/scriptscat/scriptcat/commit/ef3482d2c6406927a72835067f66a28cdb0f3b79)] (by @cyfung1031)
- 🌐 Gestion i18n de « No message content » ([#811](https://github.com/scriptscat/scriptcat/issues/811)) [[f9486d6](https://github.com/scriptscat/scriptcat/commit/f9486d6e53d68c085625ac370dc717daf8af232e)] (by @cyfung1031)
- 🌐 Modification de l'affichage du format de la source dans l'interface ([#783](https://github.com/scriptscat/scriptcat/issues/783)) [[9242b95](https://github.com/scriptscat/scriptcat/commit/9242b957cf5f90f6d186a0b1f07bfce8d6ed1cd7)] (by @cyfung1031)
- 🌐 Traduction de updatepage ([#777](https://github.com/scriptscat/scriptcat/issues/777)) [[757c954](https://github.com/scriptscat/scriptcat/commit/757c954768be8fc94e05200822a23efef5e6bc01)] (by @cyfung1031)
- 🌐 Mise à jour de translation.json ([#746](https://github.com/scriptscat/scriptcat/issues/746)) [[85b48e2](https://github.com/scriptscat/scriptcat/commit/85b48e2982e0c81f82622528a3aa600c3c88ce8d)] (by @cyfung1031)

<a name="1.2.0-beta.1"></a>

## 1.2.0-beta.1 (2025-09-18)

### Ajouté

- ✨ Ajout du menu de mise en page pour masquer la barre latérale [#689](https://github.com/scriptscat/scriptcat/issues/689) [[dd64da7](https://github.com/scriptscat/scriptcat/commit/dd64da719c081acbf21645e2b1e1f38653ffae8c)]
- ✨ Implémentation de inject into ([#711](https://github.com/scriptscat/scriptcat/issues/711)) [[4c708c2](https://github.com/scriptscat/scriptcat/commit/4c708c2c5a0f7cea6daa2f32f51e182a4f83c50c)]
- ✨ : ajout d'un raccourci pour activer le bouton de la barre d'outils pour Firefox mv3 ([#718](https://github.com/scriptscat/scriptcat/issues/718)) [[06a9040](https://github.com/scriptscat/scriptcat/commit/06a904046034aad59564ea07d8ec441f4def5278)] (by @xymoryn)

### Modifié

- ⚡ Optimisation du re-rendu de la page popup causant un effondrement après le clic sur le bouton d'exécution du script en arrière-plan [[d83ad0d](https://github.com/scriptscat/scriptcat/commit/d83ad0dda600db59adf70f9db2304381db7ab80f)]
- ⚡ Optimisation de la liste des scripts, réduction du re-rendu [[610fba0](https://github.com/scriptscat/scriptcat/commit/610fba08bbac5c01791aac756eed60a75bc1d483)]
- ♻️ Amélioration de la vérification des tâches des scripts en arrière-plan, réduction des erreurs [#714](https://github.com/scriptscat/scriptcat/issues/714) [[3850af2](https://github.com/scriptscat/scriptcat/commit/3850af22abefced1f2ec6c773c92599a18bb0f8a)]
- 🐛 Correction du fait que les scripts en arrière-plan ne se développaient pas dans la page popup ([66ab70f](https://github.com/scriptscat/scriptcat/commit/66ab70fb10c28aaf0c9260a9591aab7e1ae35615))
- ✨ La page popup ne se ferme plus automatiquement après l'exclusion de sites web [#725](https://github.com/scriptscat/scriptcat/issues/725) ([e432210](https://github.com/scriptscat/scriptcat/commit/e43221051d52d7394a579442519e99d258df872a))
- ♻️ Optimisation de ReduxStore et du mécanisme de diffusion ([#729](https://github.com/scriptscat/scriptcat/issues/729)) [[b62781e](https://github.com/scriptscat/scriptcat/commit/b62781e11f0f4771094e42cb3479a70b8134cdf6)] (by @cyfung1031)
- ⚡ Optimisation du code React.forwardRef ([#734](https://github.com/scriptscat/scriptcat/issues/734)) [[a7faa48](https://github.com/scriptscat/scriptcat/commit/a7faa48f9a4615318104fa5d501184a4faec73cd)] (by @cyfung1031)
- ♻️ Refactorisation et optimisation de systemConfig [[3acd3f3](https://github.com/scriptscat/scriptcat/commit/3acd3f3890031a7e90bd57eb63320007164ed4ff)]

### Corrigé

- 🐛 Correction de l'erreur de mise à jour d'état [[94fd65b](https://github.com/scriptscat/scriptcat/commit/94fd65bfb765a9511e0efb2dc6fb2bfd216e570f)]
- ✏️ Correction d'une faute de frappe ([#738](https://github.com/scriptscat/scriptcat/issues/738)) ([4e55c06](https://github.com/scriptscat/scriptcat/commit/4e55c06212336bd3356e6d1ead3b75cf97f3b9d8))
- 🐛 Correction du problème d'affichage du badge 0 ([6edad14](https://github.com/scriptscat/scriptcat/commit/6edad1491820665fad8cd6ee5c85e93c57aa0d42))
- 🐛 Renforcement de la vérification des types de messages [#676](https://github.com/scriptscat/scriptcat/issues/676) ([5073795](https://github.com/scriptscat/scriptcat/commit/50737957507ff9af3aa9ba9a6b7d444b643d1ff2))
- 🐛 Correction du problème sandbox toString [#737](https://github.com/scriptscat/scriptcat/issues/737) [[a4cefbc](https://github.com/scriptscat/scriptcat/commit/a4cefbc791fc2c2e53f3e934e0e4725023f49f72)]
- ✏️ Correction d'une faute de frappe [[35b6f58](https://github.com/scriptscat/scriptcat/commit/35b6f581c6421a6db001eebadaa8ae216f5b8575)]
- 🐛 Correction du problème document de GM xhr [#716](https://github.com/scriptscat/scriptcat/issues/716) [[1c46546](https://github.com/scriptscat/scriptcat/commit/1c465462f4e14ae461d54358710f5caf74208af3)]

<a name="1.2.0-beta"></a>

## 1.2.0-beta (2025-09-07)

### Ajouté

- ✨ Ajout de la configuration personnalisée de l'éditeur et des définitions de types de l'éditeur ([#708](https://github.com/scriptscat/scriptcat/issues/708)) [[49eb379](https://github.com/scriptscat/scriptcat/commit/49eb3794774790d61c3ef787c865a9ba6fe82841)]
- ✨ Ajout de la page de sondage de désinstallation [[6404c8f](https://github.com/scriptscat/scriptcat/commit/6404c8f74aff09b15725a92f8afdfc0d71ac188f)]
- 📝 Modification de la page d'ouverture d'installation et du namespace ([6f2f000](https://github.com/scriptscat/scriptcat/commit/6f2f000612908b7a88f6b70c2831092805c63bc7))
- ✨ Ajout du code QR d'installation mobile ([348237c](https://github.com/scriptscat/scriptcat/commit/348237c7ce9771c69025386926b1f73710cf6f42))

### Corrigé

- 🐛 Correction des problèmes de compatibilité avec les anciennes versions de navigateurs [#715](https://github.com/scriptscat/scriptcat/issues/715) [[4da8068](https://github.com/scriptscat/scriptcat/commit/4da806879c2b170672814d02e6f8ed98c9fae35b)]
- 💄 Optimisation de l'affichage du menu popup lorsque la fenêtre est trop petite ([288650e](https://github.com/scriptscat/scriptcat/commit/288650e5e4cbdc3fa8658f0754ce427a1b3dec5a))
- 🐛 Correction de N problèmes ([#710](https://github.com/scriptscat/scriptcat/issues/710)) [[6a2027a](https://github.com/scriptscat/scriptcat/commit/6a2027ac0bb5e0ed625df570240d068a98a34b31]] (by @WhiteSevs)
- 🐛 Correction du problème de perte d'en-têtes lors de la redirection de GM XHR [#664](https://github.com/scriptscat/scriptcat/issues/664) ferme [#664](https://github.com/scriptscat/scriptcat/issues/664) [[1f29e69](https://github.com/scriptscat/scriptcat/commit/1f29e699ded25ec5270844c1fb54001b5bbf5038]]

### Divers

- 🌐 Gestion des problèmes i18n [[2adf69d](https://github.com/scriptscat/scriptcat/commit/2adf69d6ec3c30186f2c2ef89f97e3cba9e15a66]]
- 🌐 Gestion des problèmes de traduction [[55223dd](https://github.com/scriptscat/scriptcat/commit/55223dde8c545e974d19dd8126756aaae407e1fd]]

<a name="1.1.0-beta.2"></a>

## 1.1.0-beta.2 (2025-09-03)

Ajout du support Dropbox, améliorations de compatibilité, ajout de @early-start pour un chargement plus rapide que la page

### Ajouté

- ✨ Ajout des paramètres d'environnement d'exécution des scripts [#628](https://github.com/scriptscat/scriptcat/issues/628) [[0d4a89e](https://github.com/scriptscat/scriptcat/commit/0d4a89efaecf0331dcc7fbb6df006b93a1525846]]
- ✨ Réduction par défaut lorsqu'il n'y a pas de scripts en arrière-plan [#626](https://github.com/scriptscat/scriptcat/issues/626) ([9d0aac6](https://github.com/scriptscat/scriptcat/commit/9d0aac6aae11b96707ca1f7c024a24e9d55f217b))
- ✨ Prise en charge de Dropbox [#575](https://github.com/scriptscat/scriptcat/issues/575) [[2c66f21](https://github.com/scriptscat/scriptcat/commit/2c66f21f5118bd83a0eaa0f1baa3a31f2233e5b2]]
- ✨ Optimisation d'external.Tampermonkey lorsque TM et SC démarrent ensemble, vérification de l'état d'installation de SC si TM n'est pas installé ([#703](https://github.com/scriptscat/scriptcat/issues/703)) [[d0115c3](https://github.com/scriptscat/scriptcat/commit/d0115c33657260d803b6091139601b1b20407d4e]] (by @cyfung1031)
- ✨ Ajout de @early-start pour un chargement plus rapide que la page ([#649](https://github.com/scriptscat/scriptcat/issues/649)) [[eb097dd](https://github.com/scriptscat/scriptcat/commit/eb097dd146dcd6f8ca712ed883571dbfb3d09f20]]

### Modifié

- ♻️ Compatible avec FF : `chrome.scripting.registerContentScripts` ([#704](https://github.com/scriptscat/scriptcat/issues/704)) [[a9ad0ea](https://github.com/scriptscat/scriptcat/commit/a9ad0ea2b34744dbd4488bda0a16d73bd6a1cc2b]] (by @cyfung1031)
- ♻️ Optimisation du code url_matcher ([#702](https://github.com/scriptscat/scriptcat/issues/702)) [[27b8baa](https://github.com/scriptscat/scriptcat/commit/27b8baa90372f75cbf428dd32ef02d842688cf33]] (by @cyfung1031)
- ⚡ const now = Date.now(); ([#695](https://github.com/scriptscat/scriptcat/issues/695)) [[400b45c](https://github.com/scriptscat/scriptcat/commit/400b45cc487da4cc8a7b866916855acdc18a8023]] (by @cyfung1031)
- ⚡ forEach -> for of ([#694](https://github.com/scriptscat/scriptcat/issues/694)) [[70927b6](https://github.com/scriptscat/scriptcat/commit/70927b6f0ddcf4a60d5838597d1df5acaaa7ca94]] (by @cyfung1031)
- ⚡ Optimisation de code commun ([#692](https://github.com/scriptscat/scriptcat/issues/692)) [[cf05973](https://github.com/scriptscat/scriptcat/commit/cf0597305a158fd8ba8489f30906d7bbbd7a4b0b]] (by @cyfung1031)
- ⚡ Optimisation du code : recherche globale ([#697](https://github.com/scriptscat/scriptcat/issues/697)) [[a5c12bd](https://github.com/scriptscat/scriptcat/commit/a5c12bd94f249ea194bececf2ecb39a0dea3c7dc]] (by @cyfung1031)
- ♻️ Utilisation d'un middleware pour gérer initReady [[758e926](https://github.com/scriptscat/scriptcat/commit/758e92690194462982282dca25041c825d0b05e2]]
- ♻️ Optimisation des composants Server et MessageQueue [[0932edc](https://github.com/scriptscat/scriptcat/commit/0932edc49722226cac97403dcd14dbaef01b5528]]
- ♻️ Ajustement de compatibilité : gestion d'optional_permission ([#679](https://github.com/scriptscat/scriptcat/issues/679)) [[bfc558a](https://github.com/scriptscat/scriptcat/commit/bfc558a0dfd167234100d95b9180ee6db4ab4c04]] (by @cyfung1031)
- ♻️ Ajustement de compatibilité : `content.js` devrait générer une erreur si `chrome.runtime.onMessage` est absent ([#675](https://github.com/scriptscat/scriptcat/issues/675)) [[4e9adc0](https://github.com/scriptscat/scriptcat/commit/4e9adc00562981aa9d930d8a3f199e9418bdff30]] (by @cyfung1031)
- ♻️ Ajustement de compatibilité (offscreen) et optimisation du code ([#674](https://github.com/scriptscat/scriptcat/issues/674)) [[a3e56dd](https://github.com/scriptscat/scriptcat/commit/a3e56dd9d76cad73c8c8ec75c71fdbcfb9ca40e0]] (by @cyfung1031)
- 🎨 Ajustement de compatibilité : notificationsUpdate ([#673](https://github.com/scriptscat/scriptcat/issues/673)) [[a345d93](https://github.com/scriptscat/scriptcat/commit/a345d93187e26efe99cc331072ffc854b3fe7b4d]] (by @cyfung1031)
- 🎨 Renforcement de la compatibilité de chrome.tabs.create ([#639](https://github.com/scriptscat/scriptcat/issues/639)) [[ac0d7de](https://github.com/scriptscat/scriptcat/commit/ac0d7deb5957ea71579ef7a44594a75300e1cca6]] (by @cyfung1031)

### Corrigé

- 🐛 Correction du problème où l'installation ne pouvait pas être déclenchée lorsque la page intermédiaire d'installation était inaccessible [#705](https://github.com/scriptscat/scriptcat/issues/705) [[5f1e292](https://github.com/scriptscat/scriptcat/commit/5f1e2929d79c470ba4427c3cce01f5cd184a839b]]
- 🐛 Gestion de l'expression `@match *://*domain/*` [[039b445](https://github.com/scriptscat/scriptcat/commit/039b4454148947cd3c74de82b87804ee9815e60c]]
- 🐛 Correction du problème d'échappement du sandbox dans l'environnement d'extension [#700](https://github.com/scriptscat/scriptcat/issues/700) [[a1a868d](https://github.com/scriptscat/scriptcat/commit/a1a868dfe3199e666fe2bcb65cfb2ad0ad3d699b]]
- ✏️ backgroud -&gt; background ([#698](https://github.com/scriptscat/scriptcat/issues/698)) [[2594075](https://github.com/scriptscat/scriptcat/commit/2594075c4a50f4c79fa46bcda08d7b0cbcfe723c]] (by @cyfung1031)
- ✏️ CrhomeStorage -&gt; ChromeStorage ([#693](https://github.com/scriptscat/scriptcat/issues/693)) [[64c536d](https://github.com/scriptscat/scriptcat/commit/64c536dbd5fcb4c29eebc1109202bab69aaa3ee2]] (by @cyfung1031)
- 🐛 Correction de GM.getTab et GM.getTabs ([#683](https://github.com/scriptscat/scriptcat/issues/683)) [[31de256](https://github.com/scriptscat/scriptcat/commit/31de256f02b5b61e27f0eec9ea673248ba8faa32]] (by @WhiteSevs)
- 🐛 Correction du domaine manquant dans finalUrl ([#656](https://github.com/scriptscat/scriptcat/issues/656)) [[545d7c8](https://github.com/scriptscat/scriptcat/commit/545d7c8c0dd69c83bd2f0353518aafe6af81c0f4]] (by @cyfung1031)
- 🐛 Compatible avec les noyaux de navigateurs plus anciens [#647](https://github.com/scriptscat/scriptcat/issues/647) ([bba12d2](https://github.com/scriptscat/scriptcat/commit/bba12d23f04759cb9b7fdb63f0d95ae515ee94a9))

### Divers

- 📝 Création de README_RU.md et CONTRIBUTING_RU.md ([#678](https://github.com/scriptscat/scriptcat/issues/678)) [[597ab03](https://github.com/scriptscat/scriptcat/commit/597ab0378fe5ced01637cf411326ef7845b8ce2b]] (by @Ioann)
- 👷 Ajustement de compatibilité (compatibilité pack.js) ([#669](https://github.com/scriptscat/scriptcat/issues/669)) [[fec45e6](https://github.com/scriptscat/scriptcat/commit/fec45e6606a609b10b79c58d2fcba02c2ce71e16]] (by @cyfung1031)

**Journal des modifications complet** : https://github.com/scriptscat/scriptcat/compare/v1.1.0-beta.1...v1.1.0-beta.2

<a name="1.1.0-beta.1"></a>

## 1.1.0-beta.1 (2025-08-29)

### Ajouté

- ✅ Modification des tests unitaires ([#690](https://github.com/scriptscat/scriptcat/issues/690)) [[71f9d70](https://github.com/scriptscat/scriptcat/commit/71f9d709868b96352494889ea864c22c0b2ce197]] (by @cyfung1031)
- 🎨 Optimisation du code asynchrone ([#651](https://github.com/scriptscat/scriptcat/issues/651)) ([55440e7](https://github.com/scriptscat/scriptcat/commit/55440e725a706e4358f08bc430ebea77bcb25335))
- ✨ Recherche globale de code ([#662](https://github.com/scriptscat/scriptcat/issues/662)) [[f8eafb7](https://github.com/scriptscat/scriptcat/commit/f8eafb7f955dad62c1b41ac477e929bf00c65982]] (by @RenjiYuusei)
- ✅ Ajustement du test unitaire nextTime [[0a6ed8c](https://github.com/scriptscat/scriptcat/commit/0a6ed8c72b8ee6dc15b66f8053ae3bf3ee95584d]]

### Modifié

- ♻️ Optimisation du code lié à ScriptMatchInfo ([#653](https://github.com/scriptscat/scriptcat/issues/653)) [[556c493](https://github.com/scriptscat/scriptcat/commit/556c493f027fbfa7299ee68c3a9d927de6f41f08]] (by @cyfung1031)
- 🎨 Optimisation de la logique d'ouverture de fenêtre [[0de44bf](https://github.com/scriptscat/scriptcat/commit/0de44bfc90eeee003d9708ba0678e6c23f859579]]
- 🌐 Gestion des problèmes de traduction ([cbe880e](https://github.com/scriptscat/scriptcat/commit/cbe880efcf3a148301dce4ffa90aa29a14407a26))
- 🎨 `@scriptURL` ([#654](https://github.com/scriptscat/scriptcat/issues/654)) [[4b1a5de](https://github.com/scriptscat/scriptcat/commit/4b1a5de9ed3b328091f582925b8a442535953a9e]] (by @cyfung1031)
- ♻️ Réécriture de UrlMatch ([#637](https://github.com/scriptscat/scriptcat/issues/637)) [[5b01c10](https://github.com/scriptscat/scriptcat/commit/5b01c10859b80890456a44a66d78204b42040870]] (by @cyfung1031)
- 🎨 Optimisation de getEnableScript ([#645](https://github.com/scriptscat/scriptcat/issues/645)) [[04910cf](https://github.com/scriptscat/scriptcat/commit/04910cf6213fe90fc8cbca28f2826414855dd7b1]] (by @cyfung1031)
- ⚡ Optimisation du code runtime.ts ([#642](https://github.com/scriptscat/scriptcat/issues/642)) [[641cc1d](https://github.com/scriptscat/scriptcat/commit/641cc1d1ec0ec2dff5d32689ba46d27d30f7b45f]] (by @cyfung1031)
- 🎨 Renforcement de la compatibilité de chrome.tabs.create ([#639](https://github.com/scriptscat/scriptcat/issues/639)) [[601b933](https://github.com/scriptscat/scriptcat/commit/601b933bd5cec1405ac6169a6160a57dfe0dbcfc]] (by @cyfung1031)
- 🎨 Correction de `@match` `@icon` des nouveaux scripts ([#636](https://github.com/scriptscat/scriptcat/issues/636)) [[aec08a3](https://github.com/scriptscat/scriptcat/commit/aec08a331f868defee6279eb420f6b90aba39cfe]] (by @cyfung1031)

### Supprimé

- 🔥 Suppression de la documentation crowdin du site de scripts [[695f4d1](https://github.com/scriptscat/scriptcat/commit/695f4d1ba2d039508415235dd8e606d238be8035]]

### Corrigé

- 🐛 Correction du domaine manquant dans finalUrl ([#656](https://github.com/scriptscat/scriptcat/issues/656)) [[3ed018a](https://github.com/scriptscat/scriptcat/commit/3ed018a7a54803fcf2e1791316e0166ed0b52007]] (by @cyfung1031)
- 💚 Correction du problème lint react/jsx-no-literals [[017b608](https://github.com/scriptscat/scriptcat/commit/017b60886be601e3e0e1719cf249da32d5686c30]]
- 🐛 Compatible avec les noyaux de navigateurs plus anciens [#647](https://github.com/scriptscat/scriptcat/issues/647) [[0e2f817](https://github.com/scriptscat/scriptcat/commit/0e2f8173c8b44bd6ad44bdffc73fa302a96a058e]]
- 🐛 Optimisation de l'injection window.external ([#646](https://github.com/scriptscat/scriptcat/issues/646)) [[0b2668a](https://github.com/scriptscat/scriptcat/commit/0b2668aadcab35a33ff9abc4bd030dffb87ea168]] (by @cyfung1031)
- 🐛 Correction de l'impossibilité de fermeture automatique de la page d'authentification du stockage cloud [[7748088](https://github.com/scriptscat/scriptcat/commit/7748088e63c1fc660b6a6ae5613cf04f9da99b8c]]

### Divers

- 🌐 Affinage et extension de la locale vietnamienne ([#661](https://github.com/scriptscat/scriptcat/issues/661)) [[6847a59](https://github.com/scriptscat/scriptcat/commit/6847a596c4b06c75e13594ef60e4b9dfa5718cf3]] (by @RenjiYuusei)
- 🌐 Corrections de traductions ([#635](https://github.com/scriptscat/scriptcat/issues/635)) [[19296de](https://github.com/scriptscat/scriptcat/commit/19296de6a3815e5965eb33401a55da9b2bd22bb4]] (by @cyfung1031)
- 🌐 Correction du problème i18n du guide d'intégration [#627](https://github.com/scriptscat/scriptcat/issues/627) [[9683f96](https://github.com/scriptscat/scriptcat/commit/9683f965400ab6a2bac15349aca4335911766eac]]

<a name="1.1.0-beta"></a>

## 1.1.0-beta (2025-08-18)

### Modifié

- ⚡ Ne pas utiliser la syntaxe .reduce ([#619](https://github.com/scriptscat/scriptcat/issues/619)) [[71e97d5](https://github.com/scriptscat/scriptcat/commit/71e97d53fe152d5a8e479378366d077589df3d27]] (by @cyfung1031)
- ⚡ Optimisation des problèmes de chargement des ressources de scripts [#612](https://github.com/scriptscat/scriptcat/issues/612) [[e206562](https://github.com/scriptscat/scriptcat/commit/e2065622c2a544579bc84f25f178d118d902ccba]]
- 🎨 Optimisation de la page d'installation de scripts ([#611](https://github.com/scriptscat/scriptcat/issues/611)) ([bbc76b1](https://github.com/scriptscat/scriptcat/commit/bbc76b1110d417a445b3cc065488fe11b7f2ddc2))
- 🐛 Correction de la méthode d'ouverture dans la fenêtre actuelle ([70be8a3](https://github.com/scriptscat/scriptcat/commit/70be8a303b98b73885dac950dc1b24aa8cbbe773))
- 🎨 Optimisation de utils.ts ([#608](https://github.com/scriptscat/scriptcat/issues/608)) [[37bb763](https://github.com/scriptscat/scriptcat/commit/37bb763306c7e06df085022c2cb2fa9cc2788204]] (by @cyfung1031)
- 🎨 Organisation de doThrow et TypeScript ([#606](https://github.com/scriptscat/scriptcat/issues/606)) [[4362802](https://github.com/scriptscat/scriptcat/commit/4362802fe3ba4482a283996cae9a424b23c69407]] (by @cyfung1031)
- ⚡ Amélioration de popup.ts et runtime.ts (optimisation du code) ([#607](https://github.com/scriptscat/scriptcat/issues/607)) [[e48ca66](https://github.com/scriptscat/scriptcat/commit/e48ca66cc4f56ef981543c1f56b5e7eb0c2fa14a]] (by @cyfung1031)
- 🎨 Mises à jour liées à getCurrentTab ([#604](https://github.com/scriptscat/scriptcat/issues/604)) [[b4a9f2e](https://github.com/scriptscat/scriptcat/commit/b4a9f2efd48ee8cbacac6872ddb25c7d630bfd8a]] (by @cyfung1031)
- 🎨 Définition TypeScript de TMessage ([#596](https://github.com/scriptscat/scriptcat/issues/596)) [[6aeb61d](https://github.com/scriptscat/scriptcat/commit/6aeb61da8ae7efdd718facacf90e4ed40ddb4caf]] (by @cyfung1031)
- 🎨 Utilisation du service worker pour obtenir le favicon ([#594](https://github.com/scriptscat/scriptcat/issues/594)) [[727872d](https://github.com/scriptscat/scriptcat/commit/727872d47552e4c53b09be33b526f7f69baad4ec]] (by @cyfung1031)
- 🎨 Standardisation des messages ([#595](https://github.com/scriptscat/scriptcat/issues/595)) [[791608b](https://github.com/scriptscat/scriptcat/commit/791608b31855b1415f9ad496ef6c52fe1809984d]] (by @cyfung1031)
- 🎨 Optimisation du code SystemConfigChange ([#593](https://github.com/scriptscat/scriptcat/issues/593)) [[041d985](https://github.com/scriptscat/scriptcat/commit/041d98523902319c88efdee3fa2ae40eab80aba8]] (by @cyfung1031)
- 🎨 Optimisation du code EventEmitter ([#592](https://github.com/scriptscat/scriptcat/issues/592)) [[67543c4](https://github.com/scriptscat/scriptcat/commit/67543c473b303a1708ea83ca00e49d5d687d6a34]] (by @cyfung1031)
- 🎨 Optimisation du code Cache ([#591](https://github.com/scriptscat/scriptcat/issues/591)) [[34e42ac](https://github.com/scriptscat/scriptcat/commit/34e42ac5f9ee504a90636d32c53def356c7d4495]] (by @cyfung1031)
- 🎨 Le modèle de nouveau script utilise `@grant none` par défaut comme TM ([#589](https://github.com/scriptscat/scriptcat/issues/589)) [[e5a2d5d](https://github.com/scriptscat/scriptcat/commit/e5a2d5d3adafdcac2cf95b865550e395ba8443c7]] (by @cyfung1031)
- ⚡ new Date().getTime() → Date.now() ([#587](https://github.com/scriptscat/scriptcat/issues/587)) [[245ecbf](https://github.com/scriptscat/scriptcat/commit/245ecbfc23f1811aeee5671e48151e94b0ebc128]] (by @cyfung1031)

### Corrigé

- 🐛 Correction du problème `@connect` \\* qui ne prenait pas effet [#623](https://github.com/scriptscat/scriptcat/issues/623) [[76481c8](https://github.com/scriptscat/scriptcat/commit/76481c845b34414a7f15ed18ec61f7dff7eef091]]
- 🐛 Ajout de tests unitaires et correction du problème `@exclude` ([#618](https://github.com/scriptscat/scriptcat/issues/618)) [[0046bb7](https://github.com/scriptscat/scriptcat/commit/0046bb78800a2c46edaac785b8e9592327772a3b]] (by @cyfung1031)
- 🐛 Correction de l'impossibilité d'installation de certains liens .user.js [#599](https://github.com/scriptscat/scriptcat/issues/599) [[ccd2639](https://github.com/scriptscat/scriptcat/commit/ccd2639858f0f3cde28f284376fe8ed998d935ae]]
- 🐛 Correction de l'échec de création de nouveaux scripts [[d42d6e7](https://github.com/scriptscat/scriptcat/commit/d42d6e7d408a84674facf9ab0da6eac0e384502f]]
- 🐛 Corrections de métadonnées ([#610](https://github.com/scriptscat/scriptcat/issues/610)) [[4d98cce](https://github.com/scriptscat/scriptcat/commit/4d98cce0ca1281cc58f551ea4e6700e340780d3f]] (by @cyfung1031)
- 🐛 Corrections du badge de la popup ([#605](https://github.com/scriptscat/scriptcat/issues/605)) [[eff9230](https://github.com/scriptscat/scriptcat/commit/eff92309de99abb0cf48ef4727afaa113bc2fbb6]] (by @cyfung1031)
- 🐛 Corrections de ScriptEditor.tsx ([#603](https://github.com/scriptscat/scriptcat/issues/603)) [[a9aadba](https://github.com/scriptscat/scriptcat/commit/a9aadba372b813c16bdc5f0aeb07c68981f48c63]] (by @cyfung1031)
- 🐛 Corrections CSS de la visionneuse de code &amp; de l'éditeur ([#602](https://github.com/scriptscat/scriptcat/issues/602)) [[2e86785](https://github.com/scriptscat/scriptcat/commit/2e8678513efaccd42c8dc2aa89f8b76679aa8420]] (by @cyfung1031)
- 🐛 Correction du problème de concurrence de getFaviconFromDomain ([#597](https://github.com/scriptscat/scriptcat/issues/597)) [[1872fe1](https://github.com/scriptscat/scriptcat/commit/1872fe165ab204b155a56f037c111d2d7776c2b9]] (by @cyfung1031)
- 🐛 Correction de l'erreur d'ouverture d'onglet dans les scénarios multi-fenêtres [#586](https://github.com/scriptscat/scriptcat/issues/586) [[54c1da2](https://github.com/scriptscat/scriptcat/commit/54c1da29c2bd8bd8f5ef2d85b7aed8b334de296f]]
- 🐛 Correction du problème de compatibilité openerTabId ([#586](https://github.com/scriptscat/scriptcat/issues/586)) [[b861fc8](https://github.com/scriptscat/scriptcat/commit/b861fc8620e53b885cad98db03f1dd10ec9d296c]] (by @cyfung1031)

### Divers

- 👷 Optimisation du code pack.js ([#615](https://github.com/scriptscat/scriptcat/issues/615)) [[870dd9b](https://github.com/scriptscat/scriptcat/commit/870dd9bc6b7eff3eceefa915452e773ec0565180]] (by @cyfung1031)
