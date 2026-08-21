#!/bin/bash
# Close 12 stale PRs on scriptscat/scriptcat.org
# Run this from the project directory

REPO="scriptscat/scriptcat.org"

declare -A MESSAGES
MESSAGES[30]="Closing in favor of focused, split PRs. This comprehensive PR has been split into individual, reviewable PRs: PR #87 (code.json + legacy dev docs) and PRs #88-#97 (per-locale dev docs). All translations verified, builds cleanly across 20 locales."
MESSAGES[76]="Superseded by PR #87. Locale registration and infrastructure changes are now included in PR #87."
MESSAGES[77]="Superseded by PR #87 (code.json) and PR #97 (dev docs). Split for cleaner review."
MESSAGES[78]="Superseded by PR #87 (code.json) and PR #96 (dev docs). Split for cleaner review."
MESSAGES[79]="Superseded by PR #87 (code.json) and PR #92 (dev docs). Split for cleaner review."
MESSAGES[80]="Superseded by PR #87 (code.json) and PR #89 (dev docs). Split for cleaner review."
MESSAGES[81]="Superseded by PR #87 (code.json) and PR #88 (dev docs). Split for cleaner review."
MESSAGES[82]="Superseded by PR #87 (code.json) and PR #90 (dev docs). Split for cleaner review."
MESSAGES[83]="Superseded by PR #87 (code.json) and PR #94 (dev docs). Split for cleaner review."
MESSAGES[84]="Superseded by PR #87 (code.json) and PR #95 (dev docs). Split for cleaner review."
MESSAGES[85]="Superseded by PR #87 (code.json) and PR #93 (dev docs). Split for cleaner review."
MESSAGES[86]="Superseded by PR #87 (code.json) and PR #91 (dev docs). Split for cleaner review."

for PR in 30 76 77 78 79 80 81 82 83 84 85 86; do
  echo "Closing PR #$PR..."
  gh pr close $PR --repo "$REPO" --comment "${MESSAGES[$PR]}" 2>&1
  sleep 1
done

echo "Done! All 12 stale PRs closed."
echo "Remaining open PRs: #87, #88-#97"
