import re

with open('src/data/services.ts', 'r', encoding='utf-8') as f:
    text = f.read()

slugs = re.findall(r'slug:\s*"([^"]+)"', text)
titles = re.findall(r'title:\s*"([^"]+)"', text)
print(f"Total services: {len(slugs)}")
for s in slugs:
    print(f" - {s}")
