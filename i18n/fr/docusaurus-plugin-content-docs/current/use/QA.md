---
title: Questions fréquentes
---

## Mode développeur / autorisation des scripts utilisateur

#### Q : ScriptCat indique « le mode développeur n'est pas activé » et le script ne fonctionne pas ?

Depuis Chrome 120+ / les versions récentes d'Edge, le navigateur exige que l'utilisateur active manuellement cette autorisation pour que les scripts puissent fonctionner. Reportez-vous à [Activer la prise en charge des User Scripts dans le navigateur](/docs/use/open-dev/) pour la configuration.

Si vous avez confirmé que c'est bien activé mais que le message persiste, essayez de redémarrer le navigateur ou de recharger l'extension.

## Le script ne s'active pas

#### Q : J'ai installé un script mais il ne fait rien ?

1. **« Autoriser les scripts utilisateur » n'est pas activé** — voir [Activer la prise en charge des User Scripts dans le navigateur](/docs/use/open-dev/)
2. **Démarrage à froid** — le script peut ne pas être chargé immédiatement à l'ouverture du navigateur ; actualisez la page
3. **Conflit avec une autre extension** — les bloqueurs de publicité (comme uBlock Origin) peuvent provoquer des erreurs de script

#### Q : Le script fonctionne sur Tampermonkey mais pas sur ScriptCat ?

ScriptCat et Tampermonkey diffèrent sur certains points d'implémentation des API. Il est recommandé de passer à la dernière version ; si le problème persiste, ouvrez une Issue sur [GitHub](https://github.com/scriptscat/scriptcat/issues).

## Problèmes de synchronisation cloud

> Pour l'utilisation de base de la synchronisation cloud, voir [Synchronisation et sauvegarde](/docs/use/sync/).

#### Q : Synchronisation anormale avec OneDrive / Google Drive / WebDAV ?

1. **Un script supprimé revient après synchronisation** — assurez-vous que l'option « Synchroniser les suppressions » est activée sur tous vos appareils

## Problèmes d'installation de script

> Pour les méthodes d'installation, voir [Installer un script](/docs/use/script_installation/).

## Problèmes d'autorisation des cookies

#### Q : `GM_cookie` n'arrive pas à récupérer les cookies ?

1. **La fenêtre d'autorisation n'apparaît pas** — assurez-vous que `GM_cookie` est correctement déclaré dans le `@grant` du script, et que le domaine à accéder est déclaré via `@connect`

## Perte de données du script

#### Q : Tous mes scripts ont disparu après avoir ouvert le navigateur ?

1. **Délai d'initialisation** — ScriptCat peut encore être en train de charger ses données juste après le démarrage du navigateur ; patientez quelques secondes ou redémarrez le navigateur
2. **Logiciel de nettoyage** — des outils comme 360 Safe Guard ou CCleaner peuvent effacer les données d'extension ; il est recommandé d'exclure les données d'extension du navigateur dans ces outils
3. **Sauvegardez régulièrement** — utilisez la fonction d'export ou la [synchronisation cloud](/docs/use/sync/) pour sauvegarder régulièrement vos scripts et votre configuration
