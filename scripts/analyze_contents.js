const fs = require('fs');
const path = require('path');

const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'all_contents_parsed.json'), 'utf8'));

const analysis = {};

for (const [filename, text] of Object.entries(data)) {
  const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  const headings = lines.filter(l => /^(#|\d+\.|\d+\.\d+)/.test(l) || l.length < 50 && !l.endsWith('.'));
  
  analysis[filename] = {
    totalChars: text.length,
    totalLines: lines.length,
    sampleHeadings: headings.slice(0, 20)
  };
}

fs.writeFileSync(path.join(__dirname, 'analysis.json'), JSON.stringify(analysis, null, 2), 'utf8');
console.log('Analysis written to scripts/analysis.json');
