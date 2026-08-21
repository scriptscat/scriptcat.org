#!/bin/bash
# Close PRs #88-#97 (superseded by #87)
# Each PR's dev-docs content is now merged into PR #87

for PR_NUM in 88 89 90 91 92 93 94 95 96 97; do
  case $PR_NUM in
    88) LANG="Korean"; LOCALE="ko" ;;
    89) LANG="Turkish"; LOCALE="tr" ;;
    90) LANG="Ukrainian"; LOCALE="uk" ;;
    91) LANG="Armenian"; LOCALE="hy" ;;
    92) LANG="Indonesian"; LOCALE="id" ;;
    93) LANG="Bengali"; LOCALE="bn" ;;
    94) LANG="Dutch"; LOCALE="nl" ;;
    95) LANG="Persian"; LOCALE="fa" ;;
    96) LANG="Arabic"; LOCALE="ar" ;;
    97) LANG="French"; LOCALE="fr" ;;
  esac
  
  COMMENT="Closing in favor of PR #87 — all ${LANG} (${LOCALE}) dev docs, code.json, navbar.json, and footer.json are now included in PR #87 which contains the complete i18n foundation for all 20 locales with full 44/44 doc parity."

  echo "Closing PR #${PR_NUM} (${LANG})..."
  gh pr close ${PR_NUM} --repo scriptscat/scriptcat.org --comment "${COMMENT}" 2>&1
  sleep 1
done

echo "Done! All 10 per-locale PRs closed."
