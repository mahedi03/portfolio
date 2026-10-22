// One-off verification: every image path referenced in source must exist in public/.
import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const bad = [];
const files = execSync("git ls-files src", { encoding: "utf8" })
  .split("\n")
  .filter((f) => /\.(ts|tsx|css|txt)$/.test(f) && existsSync(f));

const re = /[("'=\s]\/([A-Za-z0-9 \-_.%\\/]+?\.(?:png|jpe?g|webp|ico))["')\s]/g;
for (const file of files) {
  const text = readFileSync(file, "utf8");
  let m;
  while ((m = re.exec(text)) !== null) {
    const ref = m[1].split("?")[0];
    if (!existsSync(path.join("public", ref))) {
      bad.push({ ref, file });
    }
  }
}

if (bad.length === 0) console.log("All referenced images exist in public/");
else for (const b of bad) console.log("MISSING:", b.ref, "referenced in", b.file);
