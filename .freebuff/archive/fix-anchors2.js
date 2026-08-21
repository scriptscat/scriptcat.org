const fs = require('fs');
const locs = ['ja', 'vi', 'zh-Hant', 'es', 'it', 'pt'];

for (const loc of locs) {
  const file = `i18n/${loc}/docusaurus-plugin-content-docs/current/dev/background.md`;
  let content = fs.readFileSync(file, 'utf-8');
  
  // Actual pattern: `@background` {#id}  -- need to insert ) before the space+{
  content = content.replace('`@background` {#background-script-background}', '`@background`) {#background-script-background}');
  content = content.replace('`@crontab` {#scheduled-script-crontab}', '`@crontab`) {#scheduled-script-crontab}');
  
  fs.writeFileSync(file, content, 'utf-8');
  
  // Verify
  const lines = content.split('\n');
  const headingLines = lines.filter(l => l.includes('{#'));
  console.log(`${loc}: ${headingLines.length} heading IDs`);
  headingLines.forEach(l => console.log(`  ${l.trim()}`));
}
console.log('Done!');
