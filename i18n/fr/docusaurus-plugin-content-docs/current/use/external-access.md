---
title: Accès externe (ligne de commande et clients IA)
sidebar_label: Accès externe
---

L'**accès externe** permet à la ligne de commande locale et aux clients IA compatibles [MCP](https://modelcontextprotocol.io/)
de gérer les scripts de ScriptCat via [sctl](https://github.com/scriptscat/sctl).

```text
Client IA ── stdio MCP ──▶ sctl mcp ── API de contrôle locale ──▶ sctl serve ── WebSocket ──▶ ScriptCat
Ligne de commande ─────────────────────────────────────────────────────▲
```

`sctl serve` est un daemon local qui doit être démarré séparément ; `sctl mcp` et les autres commandes ne le démarrent pas automatiquement. La divulgation du code source et l'autorisation des opérations d'écriture sont toujours décidées par la politique et l'interface de confirmation de ScriptCat — un programme externe ne peut pas approuver ses propres requêtes.

:::warning Écoute uniquement en local par défaut
sctl écoute par défaut sur `127.0.0.1`. Il n'écoutera sur d'autres interfaces que si `--listen-address` est explicitement fourni ; `ws://` ne chiffre pas le trafic et n'isole pas les clients distants entre eux — n'utilisez donc une adresse non par défaut que sur un réseau de confiance. L'extension et le daemon établissent tout de même une clé longue durée via un code d'appairage à usage unique, avec authentification mutuelle à chaque connexion suivante.
:::

## 1. Installer sctl

Installez la dernière version publiée en une seule commande. macOS / Linux :

```bash
curl -fsSL https://raw.githubusercontent.com/scriptscat/sctl/main/scripts/install.sh | sh
```

Windows (PowerShell) :

```powershell
irm https://raw.githubusercontent.com/scriptscat/sctl/main/scripts/install.ps1 | iex
```

Le script d'installation télécharge le paquet `sctl-<version>-<système>-<architecture>.<extension>` correspondant à votre plateforme, vérifie son empreinte sha256 avec le `checksums.txt` de la même publication, puis l'installe dans `~/.local/bin` (macOS/Linux) ou `%LOCALAPPDATA%\sctl\bin` (Windows). `SCTL_VERSION` permet de choisir la version à installer, et `SCTL_INSTALL_DIR` de remplacer le répertoire d'installation ; si ce répertoire n'est pas dans le `PATH`, le script affiche l'indication correspondante, mais ne modifie pas votre configuration shell ni votre `PATH` utilisateur à votre place.

sctl est un exécutable en un seul fichier. Si les [GitHub Releases](https://github.com/scriptscat/sctl/releases) proposent déjà un paquet pour votre plateforme, vous pouvez aussi le télécharger, le décompresser et placer `sctl` (`sctl.exe` sous Windows) dans votre `PATH`.

```bash
sctl version
```

Une compilation depuis les sources sans configuration particulière affiche `0.0.0-dev`, pour la distinguer des paquets officiels dans lesquels version, commit et date de build sont injectés — cela n'empêche pas la connexion avec ScriptCat. En l'absence de paquet publié, vous pouvez aussi compiler depuis le [dépôt sctl](https://github.com/scriptscat/sctl).

## 2. Démarrer le daemon et finaliser l'appairage

L'appairage ne se fait qu'une seule fois. Une fois effectué, la ligne de commande et tous les clients MCP partagent le même canal de confiance entre l'extension et le daemon, sans avoir besoin de s'apparier séparément.

### 1. Choisir un répertoire de données

Le daemon, la ligne de commande et les processus MCP doivent utiliser le même répertoire de données, qui contient la clé d'appairage longue durée, le jeton de contrôle local et les journaux. Il est recommandé de choisir un chemin absolu privé à l'utilisateur courant :

```text
/chemin/absolu/vers/sctl-data
```

Définissez la même variable d'environnement pour chaque processus sctl :

```bash
export SCTL_DATA_DIR=/chemin/absolu/vers/sctl-data
sctl serve
sctl status
sctl mcp
```

Si la variable d'environnement et `--data-dir` sont définis simultanément, l'argument de ligne de commande est prioritaire.

Si ni `--data-dir` ni `SCTL_DATA_DIR` ne sont fournis, sctl utilise le répertoire de données utilisateur par défaut de la plateforme courante. Ne placez pas le répertoire de données dans un dépôt de code ou un dossier de synchronisation partagé, et ne fournissez jamais son `pairing.key` ou `control.token` à un modèle d'IA.

### 2. Démarrer le daemon

Exécutez la commande suivante dans un terminal et laissez le processus actif :

```bash
sctl serve
```

L'adresse d'écoute par défaut est `ws://127.0.0.1:8643`. Le daemon n'est démarré automatiquement ni par `connect`, `status`, les autres commandes CLI, ni par `sctl mcp` ; pour le garder actif en permanence, utilisez le gestionnaire de services utilisateur de votre système pour superviser la commande ci-dessus.

Pour écouter explicitement sur toutes les interfaces réseau :

```bash
sctl --listen-address 0.0.0.0:8643 serve
```

`connect`, `status`, les autres commandes CLI et `sctl mcp` sur la même machine doivent également recevoir le même `--listen-address`. Le champ **Adresse sctl** dans les paramètres de ScriptCat doit contenir l'adresse hôte réellement accessible par l'extension, par exemple `ws://192.168.1.10:8643`, et non `0.0.0.0`.

### 3. Activer et s'apparier dans ScriptCat

1. Ouvrez **Paramètres → Outils → Accès externe** dans ScriptCat, et activez l'interrupteur en haut à droite.
2. Vérifiez que l'**adresse sctl** correspond à celle du daemon ; elle reste par défaut sur `ws://127.0.0.1:8643`.
3. Avec `sctl serve` toujours actif, exécutez dans un autre terminal :

   ```bash
   sctl connect
   ```

4. Saisissez le code d'appairage à 8 caractères affiché dans le terminal dans la boîte de dialogue « Accès sctl ».
5. Vérifiez la connexion :

   ```bash
   sctl status
   ```

Le statut doit indiquer que l'extension est connectée et afficher la version du daemon.

:::warning Le code d'appairage n'est affiché que dans le terminal
Le code d'appairage ressemble à `A1B2-C3D4`, expire au bout de 2 minutes et ne peut être utilisé qu'une seule fois. Il n'est jamais envoyé à l'extension via WebSocket. Ne le collez ni dans une conversation IA, ni dans une issue, ni dans un journal, ni dans une configuration MCP ; en cas d'expiration, relancez simplement `connect`.
:::

## 3. Permissions et confirmations {#permissions}

| Capacité | Comportement par défaut |
|---|---|
| Lire la liste et les métadonnées des scripts | Retourné directement |
| Lire ou rechercher dans le code source d'un script | Selon la politique **lecture du code source** |
| Installer, modifier, activer, désactiver ou supprimer un script | Selon la politique **opérations d'écriture** |

Les politiques « lecture du code source » et « opérations d'écriture » peuvent chacune être réglées sur « approbation manuelle requise » (par défaut) ou « autoriser directement ».

En mode « approbation manuelle requise », chaque requête ouvre une page de confirmation dans le navigateur. Vous pouvez refuser, autoriser uniquement cette fois, ou choisir « autoriser pour cette session ». Les autorisations de session sont enregistrées par script et par catégorie d'opération, et sont effacées automatiquement au redémarrage du navigateur, au rechargement de l'extension, ou à l'arrêt de l'accès externe. Une requête sans décision dans les 5 minutes expire ; une déconnexion du demandeur ou un `Ctrl-C` annule également la requête.

« Autoriser directement » saute la page de confirmation pour ce type d'opération. Le code source peut contenir des informations sensibles (clés API, cookies, etc.), et les opérations d'écriture peuvent modifier directement un script — n'activez cette option qu'en connaissance des risques.

## 4. Utilisation en ligne de commande

```bash
sctl get                         # lister les scripts
sctl get <uuid>                  # lire les métadonnées
sctl get <uuid> -o source        # afficher le code source complet
sctl get <uuid> -o source --lines 20-80
sctl grep <uuid> "fetch("         # rechercher dans le code source (littéral)
sctl grep <uuid> "pattern" -E    # utiliser une expression régulière
sctl install <url|fichier>
sctl edit <uuid> --replace ANCIEN --with NOUVEAU
sctl enable <uuid>
sctl disable <uuid>
sctl delete <uuid>
sctl status
```

`grep` effectue par défaut une correspondance littérale ; `-E` active les regex, `-i` ignore la casse, `-C N` retourne du contexte, `-m N` limite le nombre de correspondances. L'absence de correspondance n'est pas une erreur : le code de sortie reste 0.

`edit` utilise des ancres de contenu, et non des numéros de ligne. Par défaut, chaque `oldText` doit apparaître exactement une fois ; `--replace-all` permet de remplacer toutes les occurrences. Vous pouvez aussi soumettre un tableau `{oldText,newText,replaceAll?}` via `-f <fichier>`. Seul le contenu modifié est envoyé à l'extension, sans avoir à lire ou téléverser le code source complet au préalable.

Les opérations d'écriture et la divulgation de code source bloquent en attendant la décision du navigateur. Codes de sortie du CLI :

| Code de sortie | Signification |
|---|---|
| `0` | Approuvé et réussi, ou commande en lecture seule terminée normalement |
| `1` | Refusé par l'utilisateur |
| `2` | Requête expirée, annulée par `Ctrl-C`, ou extension déconnectée |
| `3` | Autre erreur (arguments, connexion, script inexistant, etc.) |

Exécutez `sctl <commande> --help` pour voir tous les arguments disponibles.

## 5. Connecter un client IA (MCP)

Vérifiez d'abord que `sctl serve` est actif et que `status` indique l'extension connectée, avant de laisser le client MCP démarrer son propre processus `sctl mcp`. Dans les clients GUI, il est recommandé d'utiliser des chemins absolus pour le binaire et le répertoire de données :

```json
{
  "mcpServers": {
    "scriptcat": {
      "command": "/chemin/absolu/vers/sctl",
      "env": {
        "SCTL_DATA_DIR": "/chemin/absolu/vers/sctl-data"
      },
      "args": [
        "mcp",
        "--name",
        "my-ai-client"
      ]
    }
  }
}
```

De nombreuses applications GUI n'étendent pas `~`, `$HOME` ni les expressions shell. `--name` n'est qu'une étiquette d'audit, pas une identité authentifiée ni une limite d'autorisation. Le flux stdout du MCP est réservé aux trames du protocole ; n'enveloppez pas sctl dans un script qui affiche une bannière sur stdout.

Outils actuellement proposés :

| Outil | Fonction | Politique de confirmation |
|---|---|---|
| `scripts_list` | Lister le résumé des scripts | Aucune |
| `scripts_metadata_get` | Lire les métadonnées d'un script | Aucune |
| `scripts_source_get` | Lire le code source par uuid et plage de lignes optionnelle | Politique de lecture du code source |
| `scripts_source_grep` | Rechercher dans le code source et retourner les lignes correspondantes | Politique de lecture du code source |
| `scripts_install_request` | Demander l'installation d'un script | Politique des opérations d'écriture |
| `scripts_edit_request` | Demander une modification basée sur des ancres de contenu | Politique des opérations d'écriture |
| `scripts_toggle_request` | Demander l'activation ou la désactivation d'un script | Politique des opérations d'écriture |
| `scripts_delete_request` | Demander la suppression d'un script | Politique des opérations d'écriture |

## 6. Audit et révocation

- « Voir le journal d'audit » dans la carte Accès externe ouvre une page de journal filtrée par source d'accès externe.
- `sctl status` affiche la version du daemon, l'état de connexion de l'extension et un résumé des événements de sécurité récents ; `-o json` retourne l'événement complet.
- « Arrêter l'accès externe » déconnecte, supprime les informations d'appairage côté extension et efface les autorisations de session. Une nouvelle utilisation nécessitera un nouvel appairage.
- Pour désactiver uniquement un client IA en particulier, supprimez sctl de la configuration MCP de ce client ; cela ne révoque pas les autres CLI ou clients.

## 7. Dépannage {#troubleshooting}

**Message indiquant que le daemon est inaccessible**

Exécutez d'abord `sctl serve`. Les commandes de requête ne démarrent pas le daemon automatiquement.

**Message d'échec d'authentification du canal de contrôle**

Vérifiez que `serve`, le CLI et les processus MCP utilisent finalement le même répertoire de données absolu ; vérifiez à la fois `SCTL_DATA_DIR` et un éventuel `--data-dir` explicite, puis redémarrez le client MCP.

**Le statut affiche « échec de connexion »**

Vérifiez que le daemon est actif, que l'adresse de l'extension correspond à celle du daemon, et que votre logiciel de sécurité local ne bloque pas `127.0.0.1:8643`.

**Une commande ne retourne pas de résultat pendant longtemps**

Vérifiez la page de confirmation de divulgation de code source ou d'opération d'écriture dans le navigateur ; pour annuler, appuyez sur `Ctrl-C`.

**Consulter les journaux**

Les journaux se trouvent dans `<data-dir>/logs/`. Sans `--data-dir` ni `SCTL_DATA_DIR`, le répertoire par défaut est :

| Plateforme | Répertoire des journaux |
|---|---|
| macOS | `~/Library/Application Support/sctl/logs/` |
| Windows | `%LOCALAPPDATA%\sctl\logs\` |
| Linux | `~/.config/sctl/logs/` |
