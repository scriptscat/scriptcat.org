---
title: Desenvolver Scripts com VSCode
---

ScriptCat fornece uma extensão do VSCode que permite escrever userscripts no VSCode. Após salvar, as alterações são sincronizadas automaticamente com o ScriptCat no navegador.

## Pré-requisitos

Você precisa instalar as seguintes duas ferramentas:

1. **Instalar a extensão ScriptCat no navegador** — Siga o guia [Início Rápido](/docs/use/use/)
2. **Instalar a extensão ScriptCat no VSCode** — Pesquise por "[scriptcat-vscode](https://marketplace.visualstudio.com/items?itemName=CodFrm.scriptcat-vscode)" no marketplace de extensões do VSCode

## Estabelecer Conexão

Após instalar, você precisa conectar a extensão ScriptCat com o VSCode:

1. Clique no ícone do ScriptCat no navegador
2. Vá para **Ferramentas > Ferramentas do Desenvolvedor**
3. Encontre **Conexão automática com o serviço VSCode**, ative-o e clique em **Conectar**

## Sincronizar Scripts

### Opção 1: Modo Detecção Automática (Recomendado)

1. No VSCode, pressione `Ctrl + Shift + P`
2. Digite e selecione `scriptcat.autoTarget`
3. A partir daí, sempre que você abrir ou salvar um arquivo `.user.js`, ele será sincronizado automaticamente

### Opção 2: Modo Script Especificado

1. No VSCode, pressione `Ctrl + Shift + P`
2. Digite e selecione `scriptcat.target`
3. Especifique o caminho do arquivo de script a sincronizar

## Fluxo de Trabalho

1. Escreva ou edite seu script `.user.js` no VSCode
2. Pressione `Ctrl + S` para salvar
3. O script é sincronizado automaticamente com o ScriptCat
4. Mude para o navegador e atualize a página

## Perguntas Frequentes

### E se não conectar?

- Certifique-se de que a extensão ScriptCat esteja rodando
- Certifique-se de que a extensão VSCode esteja instalada e habilitada

### O script não atualiza após salvar?

- Certifique-se de que o nome do arquivo termine com `.user.js`
- Certifique-se de ter executado o comando `scriptcat.autoTarget` ou `scriptcat.target`

### Preciso reconectar após reiniciar o VSCode?

Se "Conexão automática com o serviço VSCode" estiver habilitado, o VSCode se reconectará automaticamente após um reinício.
