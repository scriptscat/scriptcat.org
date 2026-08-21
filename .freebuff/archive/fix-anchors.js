const fs = require('fs');
const locs = ['ja', 'vi', 'zh-Hant', 'es', 'it', 'pt'];

for (const loc of locs) {
  const file = `i18n/${loc}/docusaurus-plugin-content-docs/current/dev/background.md`;
  let content = fs.readFileSync(file, 'utf-8');
  
  // Replace the broken heading lines
  // Current: ## Heading (`@background {#background-script-background}
  // Target:  ## Heading (`@background`) {#background-script-background}
  const bgPattern = /@background\s+\{#background-script-background\}/;
  const crPattern = /@crontab\s+\{#scheduled-script-crontab\}/;
  
  content = content.replace(bgPattern, '@background`) {#background-script-background}');
  content = content.replace(crPattern, '@crontab`) {#scheduled-script-crontab}');
  
  fs.writeFileSync(file, content, 'utf-8');
  
  // Verify
  const lines = content.split('\n');
  const headingLines = lines.filter(l => l.includes('{#'));
  console.log(`${loc}: ${headingLines.length} heading IDs found`);
  headingLines.forEach(l => console.log(`  ${l.trim()}`));
}
console.log('Done fixing all locales');
