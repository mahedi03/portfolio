// ============================================================================
// SERVICE PAGE DATA LAYER
// Every service detail page (via app/services/[...slug]/page.tsx) resolves its
// service object through getServiceForPage(), which normalizes raw editorial
// data onto sanitized, UI-ready output before it ever reaches a component:
//   • heroHook / quote        → strips CMS scaffolding, stray CTAs, arrows,
//                               duplicate H1 fragments; caps length
//   • whyMatters              → drops heading-like fragments
//   • whyChooseUs             → drops pasted page drafts & bullet-list dumps
//   • pricingTable            → rebuilt into clean label/price items
//   • pricingPackages         → placeholder prices become `price: undefined`
// ============================================================================

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/services";
import { buildMetadata } from "@/lib/seo";
import type { Service, ServicePricingPackage, ServicePricingTable } from "@/types";

// ---------------------------------------------------------------------------
// String sanitization helpers
// ---------------------------------------------------------------------------

const META_PREFIX = /^(Short Description \(under H1\)|Meta Title|Meta Description|Title Tag)\s*:\s*/i;
const CTA_STYLE = /^(Get|Book|Call|Contact|Curious|Message|Send|Request|Schedule|Ping|Reach|CLAIM|Start)\b/i;
const PLACEHOLDER_PRICE = /X{2,},{0,3}|xx,xxx|n\/a|tbd|tbc/i;

/** True when a string looks like a bare heading/H1 fragment, not a sentence. */
function isHeadingLike(line: string): boolean {
  const clean = line.replace(/\s+/g, " ").trim();
  if (!clean) return true;
  const hasSentenceEnd = /[.!?…"'”)\]]$/.test(clean);
  return !hasSentenceEnd && clean.length < 90;
}

/**
 * Truncate long copy at a sentence boundary so callouts stay callouts.
 */
function clampSentences(text: string, limit: number): string {
  if (text.length <= limit) return text;
  const cut = text.slice(0, limit);
  const lastStop = Math.max(
    cut.lastIndexOf(". "),
    cut.lastIndexOf("! "),
    cut.lastIndexOf("? "),
  );
  if (lastStop > limit * 0.4) return text.slice(0, lastStop + 1).trim();
  return text.slice(0, cut.lastIndexOf(" ")).trim();
}

function cleanHeroHook(service: Service): string | undefined {
  const raw = service.heroHook;
  if (!raw) return undefined;

  const segments = raw
    .replace(META_PREFIX, "")
    .split(/\n+/)
    .map((line) => line.replace(/\s+/g, " ").trim())
    .filter(Boolean);

  const kept = segments.filter((line) => {
    if (line.includes("→") || line.includes("⤻") || line.includes("❯")) return false;
    if (CTA_STYLE.test(line) && line.length < 100) return false;
    if (isHeadingLike(line)) return false; // duplicate H1 breadcrumbs of a pasted draft
    return true;
  });

  if (kept.length === 0) return undefined;
  return clampSentences(kept.join(" "), 420);
}

function cleanQuote(service: Service): string | undefined {
  const raw = service.quote;
  if (!raw) return undefined;
  const clean = raw.replace(/\s+/g, " ").trim();
  // A "quote" that is really a CTA button label ("Get a Free Production Consultation")
  if (CTA_STYLE.test(clean) && !/[.!?…]$/.test(clean)) return undefined;
  return clean;
}

function cleanWhyMatters(service: Service) {
  if (!service.whyMatters?.length) return service.whyMatters;
  return service.whyMatters.filter((item) => {
    const text = typeof item === "string" ? item : item.description;
    const clean = text.replace(/\s+/g, " ").trim();
    return !isHeadingLike(clean);
  });
}

function cleanWhyChooseUs(service: Service) {
  if (!service.whyChooseUs?.length) return service.whyChooseUs;
  return service.whyChooseUs.filter((item) => {
    const clean = item.replace(/\s+/g, " ").trim();
    if (clean.length < 15) return false;
    // Pasted page drafts: bullet-marker dumps, chip lines, freeform section text
    if (clean.includes("* ") || clean.includes(" | ")) return false;
    if (clean.split(". ").length > 6) return false; // >6 sentences = a whole section
    return !isHeadingLike(clean);
  });
}

// ---------------------------------------------------------------------------
// Pricing normalization
// Raw pricingTable rows arrive as ["", cell] pairs that were transposed when
// the CMS draft was pasted. Rebuild them into ordered label/price items:
//   • flatten all non-empty cells, in order
//   • drop placeholder prices ("৳XX,XXX")
//   • pair each price-like cell with the nearest preceding label
//   • move the long trailing "depends on scope" sentence into the note
// ---------------------------------------------------------------------------

interface PricingItem {
  label: string;
  price?: string;
}

/** Shape as written in the raw CMS draft inside data/services.ts. */
interface RawPricingTable {
  headers?: string[];
  rows?: string[][];
  note?: string;
}

const PRICE_LIKE = /\d/;

function isPriceToken(token: string): boolean {
  if (!PRICE_LIKE.test(token)) return false;
  return /৳|\d{3,}|\/\s*month|per month|onwards|\+/i.test(token) && !isHeadingLike(token);
}

function normalizePricingTable(service: Service): ServicePricingTable | undefined {
  const raw = (service.pricingTable ?? undefined) as unknown as RawPricingTable | undefined;
  if (!raw || !Array.isArray(raw.rows)) return undefined;

  const caption = (raw.headers ?? [])
    .map((h) => (h || "").replace(/\s+/g, " ").trim())
    .filter((h) => h && !/^spec(ification)?$/i.test(h));

  const tokens = raw.rows
    .flat()
    .map((cell) => (cell ?? "").replace(/\s+/g, " ").trim())
    .filter((cell) => cell && !PLACEHOLDER_PRICE.test(cell));

  if (tokens.length === 0) return undefined;

  // The last long sentence is context copy, not a table row — promote it to the note.
  let note = raw.note || undefined;
  const last = tokens.at(-1) ?? "";
  if (!note && last.length > 120 && !isPriceToken(last)) {
    note = tokens.pop();
  }

  const items: PricingItem[] = [];
  for (const token of tokens) {
    const previous = items.at(-1);
    if (isPriceToken(token) && previous && !previous.price) {
      previous.price = token;
    } else if (isPriceToken(token)) {
      items.push({ label: "", price: token });
    } else {
      items.push({ label: token });
    }
  }

  if (items.length === 0) return undefined;
  return {
    headers: caption.length ? caption : ["Scope", "Investment"],
    items,
    note,
  } as unknown as ServicePricingTable;
}

function normalizePricingPackages(service: Service): ServicePricingPackage[] | undefined {
  if (service.pricingPackages?.length) return service.pricingPackages.map((pkg) => {
    if (PLACEHOLDER_PRICE.test(pkg.price)) {
      return { ...pkg, price: "" }; // rendered as "Custom Quote"
    }
    return pkg;
  });

  // Convert legacy pricing-table rows into the package shape used by the UI.
  const raw = service.pricingTable as unknown as RawPricingTable | undefined;
  if (!raw?.rows?.length) return undefined;

  const rows = raw.rows
    .map((row) => row.map((cell) => (cell ?? "").replace(/\s+/g, " ").trim()).filter(Boolean))
    .filter((row) => row.length >= 2)
    .filter((row) => !/^plan$/i.test(row[0]) && !/^what'?s covered$/i.test(row[0]));

  if (!rows.length) return undefined;

  return rows.map((row, index) => {
    const [name, rawPrice, ...details] = row;
    return {
      name: name || `Package ${index + 1}`,
      price: PLACEHOLDER_PRICE.test(rawPrice) || /^custom quote$/i.test(rawPrice) ? "" : rawPrice,
      features: details.filter((detail) => !PLACEHOLDER_PRICE.test(detail)),
      recommended: index === 1 && rows.length > 2,
    };
  });
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Deepest-cleaning normalization pass over a service document.
 */
export function normalizeService(service: Service): Service {
  return {
    ...service,
    heroHook: cleanHeroHook(service),
    quote: cleanQuote(service),
    whyMatters: cleanWhyMatters(service),
    whyChooseUs: cleanWhyChooseUs(service),
    pricingTable: normalizePricingTable(service),
    pricingPackages: normalizePricingPackages(service),
  };
}

export function getServiceForPage(slug: string): Service {
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return normalizeService(service);
}

export function getServicePageMetadata(slug: string): Metadata {
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}
