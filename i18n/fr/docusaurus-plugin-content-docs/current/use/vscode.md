---
title: Développer des scripts avec VSCode
---

ScriptCat propose une extension VSCode qui vous permet d'écrire vos scripts utilisateur dans VSCode, avec synchronisation automatique vers ScriptCat dans le navigateur dès l'enregistrement — plus besoin de copier-coller manuellement, ce qui accélère considérablement le développement.

## Prérequis

Vous devez installer les deux outils suivants :

1. **L'extension ScriptCat dans votre navigateur** — si ce n'est pas déjà fait, suivez le [guide de démarrage rapide](/docs/use/use/) pour l'installer
2. **L'extension ScriptCat dans VSCode** — recherchez « [scriptcat-vscode](https://marketplace.visualstudio.com/items?itemName=CodFrm.scriptcat-vscode) » dans la marketplace VSCode, ou téléchargez-la depuis le [dépôt GitHub](https://github.com/scriptscat/scriptcat-vscode)

## Établir la connexion

Une fois les deux extensions installées, vous devez connecter ScriptCat dans le navigateur avec VSCode :

1. Cliquez sur l'icône ScriptCat dans le navigateur pour ouvrir le panneau de gestion
2. Allez dans **Outils > Outils de développement**
3. Trouvez **Connexion automatique au service VSCode**, activez-la et cliquez sur **Connecter**

Une fois la connexion établie, un canal en temps réel est créé entre VSCode et ScriptCat.

## Synchroniser un script

Une fois connecté, deux méthodes de synchronisation sont disponibles :

### Méthode 1 : mode de détection automatique (recommandé)

1. Dans VSCode, appuyez sur `Ctrl + Shift + P` (`Cmd + Shift + P` sur Mac) pour ouvrir la palette de commandes
2. Saisissez et sélectionnez `scriptcat.autoTarget`
3. Ensuite, chaque ouverture ou enregistrement d'un fichier `.user.js` sera automatiquement synchronisé vers ScriptCat

### Méthode 2 : mode de script spécifique

1. Dans VSCode, appuyez sur `Ctrl + Shift + P` (`Cmd + Shift + P` sur Mac) pour ouvrir la palette de commandes
2. Saisissez et sélectionnez `scriptcat.target`
3. Indiquez le chemin du fichier de script à synchroniser

## Flux de développement

Une fois la configuration terminée, le flux de développement est très simple :

1. Écrivez ou modifiez votre script `.user.js` dans VSCode
2. Appuyez sur `Ctrl + S` pour enregistrer le fichier
3. Le script est automatiquement synchronisé vers ScriptCat dans le navigateur
4. Basculez vers le navigateur et actualisez la page pour voir le résultat

Tout se fait automatiquement — l'enregistrement suffit.

## Questions fréquentes

### Que faire si la connexion échoue ?

- Vérifiez que l'extension ScriptCat du navigateur est bien active
- Vérifiez que l'extension ScriptCat de VSCode est installée et activée
- Consultez le statut de connexion dans la page « Outils de développement » du panneau de gestion de ScriptCat

### Le script ne se met pas à jour après l'enregistrement ?

- Vérifiez que le nom du fichier se termine bien par `.user.js`
- Vérifiez que la commande `scriptcat.autoTarget` ou `scriptcat.target` a bien été exécutée
- Vérifiez la présence de messages d'erreur dans le panneau de sortie de VSCode

### Faut-il se reconnecter après un redémarrage de VSCode ?

Si « Connexion automatique au service VSCode » est activée, la reconnexion se fait automatiquement au redémarrage de VSCode, sans action manuelle nécessaire.
