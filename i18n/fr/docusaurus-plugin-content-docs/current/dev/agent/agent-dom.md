---
title: API de manipulation DOM
---

`@grant CAT.agent.dom`

L'API de manipulation DOM fournit une automatisation complète des pages du navigateur : navigation, lecture de contenu, captures d'écran, interaction avec les formulaires et surveillance du DOM.

## Gestion des onglets

### listTabs — lister les onglets

```javascript
const tabs = await CAT.agent.dom.listTabs();
```

Retourne des informations sur chaque onglet ouvert.

**Retourne `TabInfo[]` :**

| Champ | Type | Description |
|------|------|------|
| `tabId` | `number` | ID de l'onglet |
| `url` | `string` | URL actuelle |
| `title` | `string` | Titre de la page |
| `active` | `boolean` | Indique s'il s'agit de l'onglet actuellement actif |
| `windowId` | `number` | ID de la fenêtre à laquelle il appartient |
| `discarded` | `boolean` | Indique s'il a été mis en veille (suspended) |

## Navigation

### navigate — naviguer vers une page

```javascript
const result = await CAT.agent.dom.navigate(url, options?);
```

**Paramètres :**

| Paramètre | Type | Défaut | Description |
|------|------|--------|------|
| `url` | `string` | — | URL cible (obligatoire) |
| `options.tabId` | `number` | onglet actif courant | Onglet à utiliser |
| `options.waitUntil` | `boolean` | `true` | Indique s'il faut attendre la fin du chargement de la page |
| `options.timeout` | `number` | `30000` | Délai d'expiration en millisecondes |

**Retourne `NavigateResult` :**

```typescript
{ tabId: number; url: string; title: string }
```

## Lecture de contenu

### readPage — lire le contenu d'une page

```javascript
const page = await CAT.agent.dom.readPage(options?);
```

Convertit le DOM de la page en texte structuré, en supprimant automatiquement les éléments sans rapport comme `<script>`, `<style>`, `<noscript>`, `<svg>` et `<link[rel=stylesheet]>`.

**Paramètres :**

| Paramètre | Type | Défaut | Description |
|------|------|--------|------|
| `options.tabId` | `number` | onglet actif courant | Onglet à utiliser |
| `options.selector` | `string` | — | Sélecteur CSS ; seul le contenu de l'élément correspondant est retourné |
| `options.maxLength` | `number` | — | Nombre maximal de caractères du contenu ; tronqué au-delà |
| `options.removeTags` | `string[]` | — | Noms de balises supplémentaires à supprimer |

**Retourne `PageContent` :**

| Champ | Type | Description |
|------|------|------|
| `title` | `string` | Titre de la page |
| `url` | `string` | URL de la page |
| `html` | `string` | Contenu texte de la page traité |
| `truncated` | `boolean` | Indique si le contenu a été tronqué |
| `totalLength` | `number` | Longueur totale du contenu d'origine |

### screenshot — prendre une capture d'écran

```javascript
const shot = await CAT.agent.dom.screenshot(options?);
```

**Paramètres :**

| Paramètre | Type | Défaut | Description |
|------|------|--------|------|
| `options.tabId` | `number` | onglet actif courant | Onglet à utiliser |
| `options.quality` | `number` | `80` | Qualité JPEG (0-100) |
| `options.fullPage` | `boolean` | `false` | Capturer la page entière |
| `options.selector` | `string` | — | Sélecteur CSS ; ne capturer que la zone de l'élément correspondant |
| `options.saveTo` | `string` | — | Chemin d'enregistrement dans l'espace de travail OPFS |

**Retourne `ScreenshotResult` :**

| Champ | Type | Description |
|------|------|------|
| `dataUrl` | `string` | URL de données base64 |
| `path` | `string` | Chemin d'enregistrement OPFS (lorsque `saveTo` est utilisé) |
| `size` | `number` | Taille du fichier (lorsque `saveTo` est utilisé) |

**Comment le mode de capture est choisi :**

| Scénario | Comportement |
|------|------|
| `selector` fourni | Localise les limites de l'élément via CDP et recadre la capture |
| Onglet en arrière-plan | Essaie une capture CDP ; en cas d'échec, active l'onglet et utilise `captureVisibleTab` |
| Onglet au premier plan | Utilise directement `captureVisibleTab` |

```javascript
// Save a screenshot to OPFS
const shot = await CAT.agent.dom.screenshot({
  saveTo: "screenshots/page.png",
  quality: 90
});
console.log(`Saved to ${shot.path}, size ${shot.size} bytes`);
```

## Interaction avec la page

### click — cliquer sur un élément

```javascript
const result = await CAT.agent.dom.click(selector, options?);
```

**Paramètres :**

| Paramètre | Type | Défaut | Description |
|------|------|--------|------|
| `selector` | `string` | — | Sélecteur CSS (obligatoire) |
| `options.tabId` | `number` | onglet actif courant | Onglet à utiliser |
| `options.trusted` | `boolean` | `false` | Utiliser CDP pour envoyer un véritable événement de souris |

**Retourne `ActionResult` :**

| Champ | Type | Description |
|------|------|------|
| `success` | `boolean` | Indique si l'opération a réussi |
| `navigated` | `boolean` | Indique si le clic a déclenché une navigation de page |
| `url` | `string` | La nouvelle URL après la navigation |
| `newTab` | `boolean` | Indique si un nouvel onglet a été ouvert |

**`trusted` vs un simple clic :**

- `trusted: false` (défaut) — simule `element.click()` via du JS injecté ; rapide, mais certains sites peuvent le détecter comme un événement non authentique
- `trusted: true` — envoie un véritable événement de souris via le Chrome DevTools Protocol, impossible à distinguer d'une interaction utilisateur réelle, mais nécessite la permission de débogage

### fill — remplir un champ de formulaire

```javascript
const result = await CAT.agent.dom.fill(selector, value, options?);
```

**Paramètres :**

| Paramètre | Type | Description |
|------|------|------|
| `selector` | `string` | Sélecteur CSS (obligatoire) |
| `value` | `string` | Valeur à saisir (obligatoire) |
| `options.tabId` | `number` | Onglet à utiliser |
| `options.trusted` | `boolean` | Utiliser CDP pour simuler la saisie clavier |

**Comportement :**
- Mode normal : définit `element.value` et envoie un événement `input`
- Mode fiable : CDP met l'élément au point → saisit caractère par caractère

### scroll — faire défiler la page

```javascript
const result = await CAT.agent.dom.scroll(direction, options?);
```

**Paramètres :**

| Paramètre | Type | Description |
|------|------|------|
| `direction` | `"up" \| "down" \| "top" \| "bottom"` | Direction du défilement (obligatoire) |
| `options.tabId` | `number` | Onglet à utiliser |
| `options.selector` | `string` | Faire défiler un conteneur spécifique au lieu de la page entière |

**Retourne `ScrollResult` :**

| Champ | Type | Description |
|------|------|------|
| `scrollTop` | `number` | Position de défilement après l'opération |
| `scrollHeight` | `number` | Hauteur totale du contenu |
| `clientHeight` | `number` | Hauteur de la zone d'affichage |
| `atBottom` | `boolean` | Indique si le bas de page est atteint |

### waitFor — attendre un élément

```javascript
const result = await CAT.agent.dom.waitFor(selector, options?);
```

Interroge périodiquement la page pour détecter l'apparition de l'élément spécifié (toutes les 500 ms).

**Paramètres :**

| Paramètre | Type | Défaut | Description |
|------|------|--------|------|
| `selector` | `string` | — | Sélecteur CSS (obligatoire) |
| `options.tabId` | `number` | onglet actif courant | Onglet à utiliser |
| `options.timeout` | `number` | `10000` | Délai d'expiration en millisecondes |

**Retourne `WaitForResult` :**

| Champ | Type | Description |
|------|------|------|
| `found` | `boolean` | Indique si l'élément a été trouvé |
| `element` | `object` | Informations sur l'élément (uniquement lorsque `found=true`) |
| `element.selector` | `string` | Le sélecteur correspondant |
| `element.tag` | `string` | Nom de la balise |
| `element.text` | `string` | Contenu texte |
| `element.role` | `string` | Rôle ARIA |
| `element.type` | `string` | type d'entrée |
| `element.visible` | `boolean` | Indique s'il est visible |

## Exécution de scripts

### executeScript — exécuter du JavaScript

```javascript
const result = await CAT.agent.dom.executeScript(code, options?);
```

**Paramètres :**

| Paramètre | Type | Défaut | Description |
|------|------|--------|------|
| `code` | `string` | — | Code JavaScript (obligatoire) |
| `options.tabId` | `number` | onglet actif courant | Onglet à utiliser |

> Le code s'exécute toujours dans le monde **MAIN** de la page (partageant le même objet `window` que le JS de la page elle-même), il peut donc appeler les fonctions de la page et lire directement les variables de la page — mais pour la même raison, il **ne peut pas accéder aux URL de blob de l'extension** (par ex. une URL `blob:` que vous créez via `URL.createObjectURL()` à partir du `Blob` retourné par `CAT.agent.opfs.read` en mode `"blob"`), car les URL de blob sont limitées à l'origine propre de l'extension. Si vous devez travailler avec une URL de blob dans un contexte isolé, utilisez plutôt un SkillScript (voir [Développement de Skills](../agent-skill-dev)).

```javascript
// Call a page's own JS function / read a page variable
const data = await CAT.agent.dom.executeScript(
  "return window.__APP_STATE__"
);

// Read DOM content
const title = await CAT.agent.dom.executeScript(
  "return document.querySelector('h1')?.textContent"
);
```

> Le code est enveloppé dans `new Function()` pour l'exécution et prend en charge une valeur `return`. Le délai d'expiration est de 30 secondes.

## Surveillance du DOM

Utilise le Chrome DevTools Protocol pour surveiller les modifications du DOM et les événements de dialogue sur une page.

### startMonitor — démarrer la surveillance

```javascript
await CAT.agent.dom.startMonitor(tabId);
```

Démarre la surveillance de l'onglet spécifié pour les modifications du DOM et les dialogues (alert/confirm/prompt).

### stopMonitor — arrêter la surveillance

```javascript
const result = await CAT.agent.dom.stopMonitor(tabId);
```

Arrête la surveillance et retourne les modifications collectées.

**Retourne `MonitorResult` :**

| Champ | Type | Description |
|------|------|------|
| `dialogs` | `Array<{ type, message }>` | Liste des dialogues |
| `addedNodes` | `Array<{ tag, id?, class?, role?, text }>` | Résumé des nœuds DOM nouvellement ajoutés |

> `addedNodes` est dédupliqué par ID de nœud et limité à 50 entrées ; les nœuds qui ont depuis été supprimés de la page ou qui ne sont pas visibles sont ignorés automatiquement. `text` est le texte brut extrait du `outerHTML` du nœud, tronqué à 300 caractères.

### peekMonitor — vérifier l'état de la surveillance

```javascript
const status = await CAT.agent.dom.peekMonitor(tabId);
```

Vérifie de manière non destructive l'état actuel de la surveillance.

**Retourne `MonitorStatus` :**

| Champ | Type | Description |
|------|------|------|
| `hasChanges` | `boolean` | Indique s'il y a des modifications |
| `dialogCount` | `number` | Nombre de dialogues |
| `nodeCount` | `number` | Nombre de nœuds nouvellement ajoutés |

## Exemple complet

```javascript
// ==UserScript==
// @name        Auto form filler
// @match       https://example.com/form
// @grant       CAT.agent.dom
// ==/UserScript==

// Wait for the form to load
await CAT.agent.dom.waitFor("form#signup", { timeout: 5000 });

// Fill in the form
await CAT.agent.dom.fill("input[name=username]", "test_user");
await CAT.agent.dom.fill("input[name=email]", "test@example.com");

// Check the agreement box
await CAT.agent.dom.click("input[type=checkbox]#agree");

// Screenshot the filled-in form
await CAT.agent.dom.screenshot({
  selector: "form#signup",
  saveTo: "screenshots/form-filled.png"
});

// Click submit
const result = await CAT.agent.dom.click("button[type=submit]", { trusted: true });
if (result.navigated) {
  console.log("Form submitted successfully, navigated to:", result.url);
}
```
