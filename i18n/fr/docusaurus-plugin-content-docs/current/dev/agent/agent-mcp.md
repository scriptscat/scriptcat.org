---
title: Intégration MCP
---

MCP ([Model Context Protocol](https://modelcontextprotocol.io/)) permet à Agent de se connecter à des serveurs MCP externes et d'accéder automatiquement aux outils, ressources et modèles d'invite qu'ils fournissent.

> Contrairement aux autres sous-systèmes d'Agent, les serveurs MCP ne peuvent actuellement **être configurés que par l'utilisateur sur la page de gestion** — il n'existe pas d'API de gestion `CAT.agent.mcp` pour les scripts. Tout ce qu'un script peut observer, c'est que les outils de ces serveurs sont appelés automatiquement pendant les conversations.

## Configurer un serveur MCP

Ajoutez-en un sur la page de gestion → **Agent → MCP** :

| Champ | Description |
|------|------|
| Nom | Nom d'affichage du serveur |
| URL | Point de terminaison HTTP Streamable (JSON-RPC 2.0 sur POST) |
| Clé API | Facultative, pour l'authentification |
| En-têtes personnalisés | Facultatifs |
| Activé | Indique si le serveur est actif |

Le client MCP de ScriptCat utilise le transport **Streamable HTTP** et prend en charge la version de protocole `2025-03-26`.

Un serveur MCP peut fournir trois types de capacités :

| Capacité | Description |
|------|------|
| **Outils** | Enregistrés automatiquement comme outils que Agent peut appeler |
| **Ressources** | Ressources lisibles (texte/binaire) |
| **Invites** | Modèles d'invite, avec prise en charge des paramètres |

## Utilisation dans une conversation

Les outils des serveurs MCP activés apparaissent automatiquement dans la liste d'outils disponible pour les conversations Agent, nommés selon le modèle `mcp_{nom de serveur assaini}_{toolName}` — l'IA décide de les appeler en fonction de l'intention de l'utilisateur. Cela fonctionne de la même manière que le chargement automatique des [Skills](../agent-skill-install) ; les développeurs de scripts n'ont généralement pas à se soucier des détails sous-jacents.

Pour vérifier si un outil MCP spécifique est disponible, demandez simplement directement à l'IA dans une conversation, ou consultez la liste des outils découverts dans les détails de ce serveur sur la page de gestion.
