---
title: Référence des outils intégrés
---

Agent est livré avec un ensemble d'outils intégrés que l'IA appelle automatiquement pendant les conversations. Ces outils sont disponibles par défaut dans les conversations persistantes ; les développeurs de scripts n'ont généralement pas besoin de les appeler directement — l'IA choisit le bon outil en fonction de l'intention de l'utilisateur.

Comprendre ce que ces outils peuvent faire vous aide à écrire de meilleures invites système et de meilleurs outils personnalisés.

## Récupération de données Web

### web_fetch

Récupère le contenu d'une URL, avec extraction HTML-vers-texte et prise en charge de la synthèse par LLM.

| Paramètre | Type | Obligatoire | Description |
|------|------|------|------|
| `url` | `string` | Oui | URL cible (http/https uniquement) |
| `prompt` | `string` | Non | Invite de synthèse (lorsqu'elle est fournie, un LLM est utilisé pour distiller le contenu) |
| `max_length` | `number` | Non | nombre maximal de caractères du contenu |

**Détails de comportement :**
- Délai d'expiration de la requête : 30 secondes
- Le contenu HTML extrait automatiquement le texte principal du corps (supprime navigation, barres latérales, etc.)
- Les réponses JSON sont analysées automatiquement
- Le texte brut est retourné tel quel
- Lorsque `prompt` est fourni, le contenu récupéré est envoyé à un LLM pour synthèse

**Valeur de retour :**
```json
{
  "url": "https://example.com",
  "content_type": "text/html",
  "content": "Extracted body content...",
  "truncated": false,
  "final_url": "https://example.com/redirected"
}
```

### web_search

Interroge un moteur de recherche et retourne des résultats de recherche structurés.

| Paramètre | Type | Obligatoire | Description |
|------|------|------|------|
| `query` | `string` | Oui | Mots-clés de recherche |
| `max_results` | `number` | Non | Nombre maximal de résultats (défaut 5, maximum 10) |

**Moteurs de recherche pris en charge :**

| Moteur | Description | Configuration requise |
|------|------|---------|
| DuckDuckGo | Moteur par défaut | Aucune |
| Bing | Microsoft Bing Search | Clé API requise |
| Baidu | Baidu Search | Aucune clé API requise |
| Google Custom Search | Google Custom Search | Clé API + ID CSE requis |

Les moteurs de recherche sont configurés sur la page de gestion → Agent → Paramètres.

**Valeur de retour :**
```json
[
  {
    "title": "Search result title",
    "url": "https://example.com/result",
    "snippet": "Result summary text..."
  }
]
```

### get_tab_content

Lit le contenu rendu d'une page d'un onglet spécifié, converti en Markdown structuré annoté avec des sélecteurs CSS.

| Paramètre | Type | Obligatoire | Description |
|------|------|------|------|
| `tab_id` | `number` | Oui | ID de l'onglet |
| `selector` | `string` | Non | Sélecteur CSS ; n'extrait que la partie correspondante |
| `prompt` | `string` | Non | invite de synthèse |
| `max_length` | `number` | Non | nombre maximal de caractères du contenu |

Différence avec `web_fetch` : `get_tab_content` lit la page **telle qu'elle est déjà rendue par le navigateur** (y compris le contenu JS dynamique), alors que `web_fetch` effectue une nouvelle requête HTTP.

**Valeur de retour :**
```json
{
  "tab_id": 123,
  "url": "https://example.com",
  "title": "Page title",
  "content": "Structured content...",
  "truncated": false,
  "used_selector": "main"
}
```

## Gestion des onglets

### list_tabs

Interroge les onglets ouverts, avec prise en charge de plusieurs conditions de filtre.

| Paramètre | Type | Obligatoire | Description |
|------|------|------|------|
| `url_pattern` | `string` | Non | Correspondance regex d'URL |
| `title_pattern` | `string` | Non | Correspondance regex de titre |
| `active` | `boolean` | Non | Retourne uniquement l'onglet actif |
| `window_id` | `number` | Non | fenêtre spécifiée |
| `audible` | `boolean` | Non | Retourne uniquement les onglets qui jouent actuellement de l'audio |

### open_tab

Ouvre un nouvel onglet, ou navigue dans un onglet existant.

| Paramètre | Type | Obligatoire | Description |
|------|------|------|------|
| `url` | `string` | Oui | URL cible |
| `tab_id` | `number` | Non | ID d'un onglet existant (s'il est fourni, cet onglet navigue ; sinon un nouvel onglet est ouvert) |
| `active` | `boolean` | Non | Indique s'il faut l'activer (défaut `true`) |
| `window_id` | `number` | Non | fenêtre spécifiée |
| `wait_until_loaded` | `boolean` | Non | Indique s'il faut attendre la fin du chargement de la page (défaut `true`) |

### close_tab

Ferme un onglet.

| Paramètre | Type | Obligatoire | Description |
|------|------|------|------|
| `tab_id` | `number` | Oui | ID de l'onglet |

### activate_tab

Active un onglet et met la fenêtre qui le contient au premier plan.

| Paramètre | Type | Obligatoire | Description |
|------|------|------|------|
| `tab_id` | `number` | Oui | ID de l'onglet |

## Système de fichiers (OPFS)

### opfs_write

Écrit un fichier dans l'espace de travail.

| Paramètre | Type | Obligatoire | Description |
|------|------|------|------|
| `path` | `string` | Oui | chemin du fichier |
| `content` | `string` | Oui | Contenu du fichier (URL de données binaires prise en charge) |

### opfs_read

Lit un fichier depuis l'espace de travail. Par défaut, le type de fichier est détecté automatiquement : les fichiers texte retournent leur contenu, les fichiers binaires retournent une URL de blob.

| Paramètre | Type | Obligatoire | Description |
|------|------|------|------|
| `path` | `string` | Oui | chemin du fichier |
| `mode` | `string` | Non | `"text"` / `"blob"` / `"auto"` (défaut) — force un mode de retour spécifique |
| `offset` | `number` | Non | Numéro de ligne de départ (indexé à partir de 1), mode texte uniquement |
| `limit` | `number` | Non | Nombre de lignes à lire, mode texte uniquement (la pagination est requise dès que le texte dépasse 200 lignes) |

### opfs_list

Liste le contenu d'un répertoire.

| Paramètre | Type | Obligatoire | Description |
|------|------|------|------|
| `path` | `string` | Non | Chemin du répertoire (défaut : répertoire racine) |

### opfs_delete

Supprime un fichier ou un répertoire.

| Paramètre | Type | Obligatoire | Description |
|------|------|------|------|
| `path` | `string` | Oui | Chemin du fichier/répertoire |

## Interaction utilisateur

### ask_user

Pose une question à l'utilisateur, en prenant en charge la saisie libre ou un choix structuré.

| Paramètre | Type | Obligatoire | Description |
|------|------|------|------|
| `question` | `string` | Oui | La question |
| `options` | `string[]` | Non | Liste de choix (lorsqu'elle est fournie, cela devient une question à choix multiples) |
| `multiple` | `boolean` | Non | Indique si plusieurs sélections sont autorisées (défaut `false`) |

**Délai d'expiration :** retourne `{ answer: null, reason: "timeout" }` après 5 minutes sans réponse.

**Valeur de retour :**
```json
{ "answer": "The user's answer text" }
```

### execute_script

Exécute du code JavaScript dans une page ou un bac à sable.

| Paramètre | Type | Obligatoire | Description |
|------|------|------|------|
| `code` | `string` | Oui | Code JavaScript |
| `target` | `string` | Oui | `"page"` ou `"sandbox"` |
| `tab_id` | `number` | Non | Onglet cible lorsque `target` est `page` (défaut : onglet actif courant) ; ignoré pour le bac à sable |

**Comparaison des environnements d'exécution :**

| Environnement | DOM | JS de la page | URL de blob de l'extension | Idéal pour |
|------|-----|---------|---------------|---------|
| `target: "page"` (toujours monde MAIN) | oui | oui | non | Lire/manipuler le DOM, appeler des fonctions de la page, lire des variables de la page |
| `target: "sandbox"` | non | non | non | Calcul pur |

> Le mode `page` s'exécute toujours dans le monde MAIN de la page, partageant `window` avec la page — il ne peut donc pas accéder aux URL de blob propres à l'extension (par ex. l'adresse que `opfs_read` retourne en mode blob). Utilisez plutôt un SkillScript lorsque vous devez travailler avec une URL de blob.

## Sous-agents

### agent

Génère un sous-agent indépendant pour traiter une sous-tâche complexe.

| Paramètre | Type | Obligatoire | Description |
|------|------|------|------|
| `prompt` | `string` | Oui | Description de la sous-tâche |
| `description` | `string` | Non | Une courte étiquette (quelques mots, pour l'affichage dans l'interface) |
| `type` | `string` | Non | Type de sous-agent (voir ci-dessous), défaut : `"general"` |
| `tab_id` | `number` | Non | ID d'onglet à transmettre au sous-agent ; le sous-agent opérera sur cet onglet |

**Types de sous-agents :**

| type | Description | Outils disponibles |
|------|------|---------|
| `researcher` | Recherche d'informations (lecture seule) | web_search, web_fetch, lecture du contenu de la page |
| `page_operator` | Automatisation du navigateur | Gestion des onglets, manipulation du DOM, interaction avec la page |
| `general` | Usage général (défaut) | Tous les outils |

**Caractéristiques :**
- Un sous-agent a son propre contexte de conversation indépendant
- Il **ne peut pas** utiliser `ask_user` ou `agent` (pour empêcher la récursion)
- Les événements d'un sous-agent sont transmis à la conversation parente via `sub_agent_event`

## Gestion des tâches

Ce groupe d'outils gère une liste de tâches temporaire au sein d'une conversation (en mémoire, non persistée).

### create_task

| Paramètre | Type | Obligatoire | Description |
|------|------|------|------|
| `subject` | `string` | Oui | Titre de la tâche |
| `description` | `string` | Non | Description détaillée |

### update_task

| Paramètre | Type | Obligatoire | Description |
|------|------|------|------|
| `task_id` | `string` | Oui | ID de la tâche |
| `status` | `string` | Non | `"pending"` / `"in_progress"` / `"completed"` |
| `subject` | `string` | Non | Nouveau titre |
| `description` | `string` | Non | Nouvelle description |

### list_tasks

Aucun paramètre ; retourne une brève liste de toutes les tâches.

> Les outils de gestion des tâches servent principalement à ce que l'IA suive sa propre progression lors du traitement de tâches complexes en plusieurs étapes ; les données des tâches ne sont pas persistées.
