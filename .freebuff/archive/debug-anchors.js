const fs = require('fs');
const content = fs.readFileSync('i18n/ja/docusaurus-plugin-content-docs/current/dev/background.md', 'utf-8');

// Find all lines with @background
const lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('@background') && lines[i].includes('{#')) {
    const line = lines[i];
    console.log(`Line ${i+1} (${line.length} chars):`);
    // Print each char with its code point
    for (let j = 0; j < line.length; j++) {
      const ch = line[j];
      const cp = line.codePointAt(j);
      if (cp > 127 || ch === '{' || ch === '}' || ch === '#' || ch === '(' || ch === ')' || ch === '`') {
        console.log(`  pos ${j}: U+${cp.toString(16).toUpperCase().padStart(4, '0')} '${ch}'`);
      }
    }
    // Show the raw bytes around @background
    const idx = line.indexOf('@background');
    console.log(`\nContext around @background:`);
    for (let j = idx - 2; j < idx + 30 && j < line.length; j++) {
      console.log(`  pos ${j}: U+${line.codePointAt(j).toString(16).toUpperCase().padStart(4, '0')} '${line[j]}'`);
    }
  }
}
