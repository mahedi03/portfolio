// ============================================================================
// PREBUILD: generate per-route truthful last-modified dates from git history.
// Frame-Cipher convention: sitemap <lastmod> values must be real, not `now`.
// Output: src/lib/seo/contentDates.json  ({ "/services/seo": 17360…, })
// `prebuild` runs this before `next build` (see package.json).
// Fails soft: on error it keeps the previous map so builds never break.
// ============================================================================

import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const OUT_FILE = path.resolve("src/lib/seo/contentDates.json");
const ROUTE_MAP = {
  // Routes can move between refactors — git history keeps the old path, so
  // every candidate is probed and the first one with history wins.
  "/": ["app/page.tsx", "src/app/page.tsx"],
  "/about": ["app/about/page.tsx", "src/app/about/page.tsx"],
  "/contact": ["app/contact/page.tsx", "src/app/contact/page.tsx"],
  "/services": ["app/services/page.tsx", "src/app/services/page.tsx"],
  "/services/*": ["app/services/[...slug]/page.tsx"],
  "/portfolio": ["app/portfolio/page.tsx", "src/app/portfolio/page.tsx"],
  "/portfolio/*": ["app/portfolio/[slug]/page.tsx", "src/app/portfolio/[slug]/page.tsx"],
  "/case-studies": ["app/case-studies/page.tsx", "src/app/case-studies/page.tsx"],
  "/case-studies/*": ["app/case-studies/[slug]/page.tsx", "src/app/case-studies/[slug]/page.tsx"],
};

/** git log -1 --format=%ct <file> — last commit touching that file (or dir). */
function lastCommitEpoch(candidates) {
  for (const reference of candidates) {
    try {
      // No existence check on purpose: history survives path moves
      // (e.g. src/app → app), git log works regardless of the checkout.
      const out = execFileSync(
        "git",
        ["log", "-1", "--format=%ct", "--", reference],
        { encoding: "utf8", timeout: 15000 },
      ).trim();
      if (out) return Number(out);
    } catch {
      // try next candidate
    }
  }
  return null;
}

const dates = { generatedAt: Date.now(), routes: {} };

for (const [routeKey, candidates] of Object.entries(ROUTE_MAP)) {
  const epoch = lastCommitEpoch(candidates);
  if (epoch) dates.routes[routeKey] = new Date(epoch * 1000).toISOString();
}

try {
  fs.writeFileSync(OUT_FILE, `${JSON.stringify(dates, null, 2)}\n`);
  console.log(`content-dates: wrote ${Object.keys(dates.routes).length} route dates`);
} catch (error) {
  // Fail soft — keep building; sitemap falls back gracefully.
  console.warn(`content-dates: skipped (${error?.message ?? "unknown error"})`);
}
