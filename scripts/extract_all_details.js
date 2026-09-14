const fs = require('fs');
const path = require('path');

const parsed = JSON.parse(fs.readFileSync(path.join(__dirname, 'all_contents_parsed.json'), 'utf8'));

let output = '';
for (const [filename, text] of Object.entries(parsed)) {
  output += `\n======================================================\nFILE: ${filename}\n======================================================\n`;
  const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  const sections = [];
  let currentSec = { title: 'Header', lines: [] };
  
  for (const line of lines) {
    if (/^(\d+\.|\d+\.\d+|What We Offer|Why This Service|Why Choose|Our Process|Pricing|FAQs|What's included)/i.test(line) && line.length < 60) {
      if (currentSec.lines.length > 0) sections.push(currentSec);
      currentSec = { title: line, lines: [] };
    } else {
      currentSec.lines.push(line);
    }
  }
  if (currentSec.lines.length > 0) sections.push(currentSec);
  
  for (const sec of sections) {
    output += `\n--- [${sec.title}] (${sec.lines.length} lines) ---\n`;
    output += sec.lines.join('\n') + '\n';
  }
}
fs.writeFileSync(path.join(__dirname, 'extracted_full.txt'), output, 'utf8');
console.log('Written to scripts/extracted_full.txt');

