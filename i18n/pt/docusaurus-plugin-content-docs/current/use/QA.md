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
