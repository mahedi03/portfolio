const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'contents');
const files = fs.readdirSync(dir);
const result = {};

for (const file of files) {
  const filePath = path.join(dir, file);
  const text = fs.readFileSync(filePath, 'utf8');
  result[file] = text;
}

fs.writeFileSync(path.join(__dirname, 'all_contents_parsed.json'), JSON.stringify(result, null, 2), 'utf8');
console.log('Saved all parsed contents to scripts/all_contents_parsed.json');

