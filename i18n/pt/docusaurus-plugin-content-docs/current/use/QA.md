---
title: Perguntas Frequentes
---

## Modo Desenvolvedor / Permissões de Scripts de Usuário

#### Q: ScriptCat mostra "Modo desenvolvedor não habilitado" e os scripts não executam?

A partir do Chrome 120+ e versões mais recentes do Edge, os navegadores exigem que os usuários habilitem manualmente as permissões. Consulte [Habilitar Suporte a Scripts de Usuário](/docs/use/open-dev/).

Se já habilitado mas o aviso persiste, tente reiniciar o navegador ou recarregar a extensão.

## Scripts Não Funcionam

#### Q: Instalei um script mas ele não tem efeito?

1. **"Permitir Scripts de Usuário" não habilitado** — Veja [Habilitar Suporte a Scripts de Usuário](/docs/use/open-dev/)
2. **Inicialização a frio** — Scripts podem não carregar imediatamente quando o navegador abre pela primeira vez. Tente atualizar a página
3. **Conflitos de extensões** — Bloqueadores de anúncios (ex., uBlock Origin) podem causar erros de script

#### Q: O script funciona no Tampermonkey mas não no ScriptCat?

ScriptCat e Tampermonkey têm algumas diferenças na implementação de API. Atualize para a versão mais recente. Se o problema persistir, envie um Issue no [GitHub](https://github.com/scriptscat/scriptcat/issues).

## Restrições de CSP / Trusted Types {#csp-trusted-types}

#### Q: O que fazer se a CSP de um site impedir um script de funcionar?

No ScriptCat, abra **Network Rules (Regras de rede)** e selecione **Ferramentas → Regras de rede → Nova regra → Remover CSP**. No campo **Sites**, informe somente o site afetado, por exemplo `example.com`. Salve a regra e atualize as páginas que já estão abertas.

O modelo **Remove CSP** remove cabeçalhos de resposta CSP dos documentos no quadro principal e nos quadros subordinados. Também é possível optar por remover `X-Frame-Options`.

#### Q: O que significa `This document requires 'TrustedHTML' assignment.`?

Geralmente, significa que o navegador recusou uma operação do DOM porque o site aplica Trusted Types. Um site pode ativar Trusted Types com a diretiva CSP `require-trusted-types-for 'script'`; um userscript pode provocar o erro se executar uma operação não permitida pela política. O navegador está aplicando a política de segurança do site; a mensagem, sozinha, não prova que o ScriptCat causou o problema.

Se a restrição for imposta por um cabeçalho CSP na resposta do documento, uma regra **Remove CSP** limitada a esse site pode ajudar. Ela não garante a resolução se a causa não for um dos cabeçalhos de resposta CSP removidos pela regra.

#### Q: Por que o ScriptCat não remove a CSP de todos os sites por padrão?

CSP e Trusted Types ajudam a reduzir riscos como cross-site scripting (XSS). Remover CSP enfraquece as proteções de segurança originais dos sites correspondentes. Crie regras apenas para os sites que realmente precisam delas. O escopo **Todos os sites** está disponível, mas o ScriptCat pede confirmação antes de salvá-lo.

:::warning Aviso de segurança

Evite o escopo **Todos os sites**, a menos que compreenda e aceite o impacto na segurança.

:::

:::info Sobre um problema de compatibilidade de Trusted Types no ScriptCat

[ScriptCat #1239](https://github.com/scriptscat/scriptcat/issues/1239) também incluía um problema separado de compatibilidade do `GM_xmlhttpRequest`, corrigido em [ScriptCat #1242](https://github.com/scriptscat/scriptcat/pull/1242). Essa correção não desativa nem contorna Trusted Types e não altera a CSP do site. Atualize o ScriptCat se estiver usando uma versão antiga.

:::

## Problemas de Sincronização na Nuvem

> Para uso básico de sincronização, veja [Sincronização e Backup](/docs/use/sync/).

#### Q: Problemas com OneDrive / Google Drive / WebDAV?

1. **Scripts deletados reaparecem** — Certifique-se de que "sincronização de exclusão" esteja habilitada em todos os dispositivos

## Problemas de Instalação de Scripts

> Para instalar scripts, veja [Instalar Scripts](/docs/use/script_installation/).

## Problemas de Autorização de Cookies

#### Q: GM_cookie não consegue obter cookies?

1. **Popup de autorização não aparece** — Certifique-se de que `GM_cookie` esteja declarado corretamente no `@grant` do script, e use `@connect` para declarar os domínios a serem acessados

## Perda de Dados de Scripts

#### Q: Todos os scripts desapareceram ao abrir o navegador?

1. **Atraso de inicialização** — ScriptCat pode ainda estar carregando dados quando o navegador inicia. Aguarde alguns segundos ou reinicie o navegador
2. **Software de limpeza** — Ferramentas como 360 Security Guard ou CCleaner podem limpar dados de extensões. Exclua dados de extensões do navegador nas configurações de limpeza
3. **Backups regulares recomendados** — Use a função de exportar ou [sincronização na nuvem](/docs/use/sync/) para backup regular
