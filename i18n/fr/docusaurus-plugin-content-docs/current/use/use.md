---
slug: /use/use
title: Guide de démarrage rapide
---

ScriptCat est une extension de navigateur capable d'exécuter des scripts utilisateur. Elle est compatible avec les scripts Tampermonkey tout en offrant des fonctionnalités plus avancées. Si vous rencontrez des bugs ou si vous avez des suggestions, vous pouvez consulter le [dépôt GitHub](https://github.com/scriptscat/scriptcat) pour nous faire part de vos commentaires.

## Installer l'extension

Vous pouvez installer l'extension depuis les boutiques officielles suivantes :

| Navigateur      | Lien de la boutique                                                                                                                                                                                                                           | Statut         |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Chrome          | [Version stable](https://chrome.google.com/webstore/detail/scriptcat/ndcooeababalnlpkfedmmbbbgkljhpjf) [Version Beta](https://chromewebstore.google.com/detail/%E8%84%9A%E6%9C%AC%E7%8C%AB-beta/jaehimmlecjmebpekkipmpmbpfhdacom?authuser=0&hl=zh-CN) | ✅ Disponible    |
| Edge            | [Version stable](https://microsoftedge.microsoft.com/addons/detail/scriptcat/liilgpjgabokdklappibcjfablkpcekh) [Version Beta](https://microsoftedge.microsoft.com/addons/detail/scriptcat-beta/nimmbghgpcjmeniofmpdfkofcedcjpfi)                      | ✅ Disponible    |
| Firefox         | [Version stable](https://addons.mozilla.org/zh-CN/firefox/addon/scriptcat/) [Version Beta](https://addons.mozilla.org/zh-CN/firefox/addon/scriptcat-pre/)                                                                                             | ✅ MV2         |

### Autres navigateurs

Si votre navigateur ne figure pas dans la liste ci-dessus, vous pouvez télécharger le fichier `zip`/`crx` depuis la page [GitHub Releases](https://github.com/scriptscat/scriptcat/releases) et l'installer manuellement.

### Installation via le chargement de l'extension décompressée {#load-unpacked-extension-installation}

① Téléchargez d'abord le fichier `zip` depuis la page [GitHub Releases](https://github.com/scriptscat/scriptcat/releases) ou la page de [téléchargement de la communauté](https://bbs.tampermonkey.net.cn/thread-3068-1-1.html). S'il s'agit d'un fichier `crx`, remplacez son extension par `.zip`.

② Préparez un dossier pour stocker l'extension et extrayez le fichier zip dans ce dossier. Après l'extraction, la structure doit ressembler à ceci (**Remarque : ce dossier ne peut être supprimé ou déplacé, sinon l'extension ne fonctionnera plus correctement**) ![download-zip](@site/i18n/en/docusaurus-plugin-content-docs/current/use/use.assets/download-zip.webp)

③ Ouvrez l'interface de gestion des extensions de votre navigateur pour charger l'extension décompressée (référez-vous à [Activer le mode développeur pour supporter ScriptCat manifest v3](/docs/use/open-dev/) pour activer d'abord le mode développeur).

- 1. **Edge** ![edge-load-unpacked](@site/i18n/en/docusaurus-plugin-content-docs/current/use/use.assets/edge-load-unpacked.webp)
- 2. **Chrome** ![chrome-load-unpacked](@site/i18n/en/docusaurus-plugin-content-docs/current/use/use.assets/chrome-load-unpacked.webp)

④ Sélectionnez le dossier créé à l'étape ② (une fois le chargement terminé, l'icône ScriptCat apparaîtra dans la liste des extensions, et vous pourrez également la voir en cliquant sur le bouton des extensions en haut à droite de la barre d'adresse).

- 1. **Edge** ![edge-load-unpacked-img](@site/i18n/en/docusaurus-plugin-content-docs/current/use/use.assets/edge-load-unpacked-img.webp)
- 2. **Chrome** ![chrome-load-unpacked-img](@site/i18n/en/docusaurus-plugin-content-docs/current/use/use.assets/chrome-load-unpacked-img.webp)

⑤ Cliquez sur l'icône ScriptCat en haut à droite, puis sur `┆` > "Obtenir des scripts" pour accéder aux sites de scripts et installer ceux qui vous intéressent.

Remarque : Les extensions installées de cette manière ne peuvent pas être mises à jour automatiquement. Si vous avez besoin d'une mise à jour, veuillez répéter les étapes ci-dessus (remplacer les fichiers et recharger l'extension).

## Obtenir des scripts

> En plus des scripts, vous pouvez également trouver des informations et des tutoriels sur le [Forum chinois Tampermonkey](https://bbs.tampermonkey.net.cn/) et le [Guide de développement de scripts](https://learn.scriptcat.org/).

### Site de scripts ScriptCat

[ScriptCat Script Site](https://scriptcat.org/) est le site de scripts officiel de cette extension, où vous pouvez publier vos propres scripts.

- Nouveau site de scripts moderne
- Supporte les scripts d'arrière-plan et les tâches planifiées
- Interface conviviale

### Userscript.Zone Search

[Userscript.Zone Search](https://www.userscript.zone/?utm_source=tm.net&utm_medium=scripts) est un moteur de recherche performant pour trouver des scripts utilisateur en saisissant des URLs ou des domaines.

- Énorme base de données de scripts
- Recherche facile par site web
- Affiche uniquement des scripts vérifiés ou provenant de pages actives

### GreasyFork

[GreasyFork](https://greasyfork.org/) est probablement le site de scripts le plus populaire au monde. Créé par Jason Barnabe, fondateur de [Stylish](https://userstyles.org/), il regorge de ressources inestimables.

- La plus grande collection de scripts utilisateur
- Possibilité de synchroniser les scripts depuis GitHub
- Modèle de [développement open source](https://github.com/JasonBarnabe/greasyfork) très actif

### GitHub/Gist

Vous pouvez également [rechercher des ressources de scripts sur GitHub et Gist.](https://gist.github.com/search?l=JavaScript&o=desc&q="%3D%3DUserScript%3D%3D"&s=updated)

## Visite guidée

Après l'installation de ScriptCat, l'ouverture du tableau de bord lance automatiquement la visite guidée (vous pouvez également la rouvrir à tout moment depuis « Centre d'aide » dans la barre latérale gauche). La visite couvre :

- [Installer des scripts](/docs/use/script_installation/) : installation depuis les sites de scripts, y compris la prise en charge des [scripts en arrière-plan](/docs/dev/background/).
- Gérer et opérer : modifier, exécuter/arrêter, [UserConfig](/docs/dev/config/).
- [Sauvegarde](/docs/use/sync/) et [migration depuis d'autres gestionnaires](/docs/use/from-other/migrate-from-tampermonkey/).
- [Synchronisation des scripts](/docs/use/sync/).
- [Abonnements](/docs/dev/subscribe/).
