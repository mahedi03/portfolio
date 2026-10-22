// ============================================================================
// METADATA FACTORY
// Frame-Cipher conventions ported here:
//   • withBrandSuffix() — every title ends with " | <brand>" within 60 chars
//   • clampMetaDescription() — sentence-boundary truncation within ~160 chars
//   • buildMetadata() — canonical, robots, OpenGraph, Twitter in one place
// ============================================================================

import type { Metadata } from "next";
import type { PageSEO } from "@/types";
import {
  SITE_NAME,
  SITE_OG_IMAGE,
  SITE_ICON,
  SITE_LOCALE,
  SITE_TWITTER,
  absoluteSiteUrl,
} from "./site";

const BRANDED_TITLE_SUFFIX = ` | ${SITE_NAME}`;

/**
 * Append a brand suffix to a title while staying inside ~`limit` characters
 * (Google rewrites titles around 60 chars). Idempotent: an existing brand
 * suffix is never doubled.
 */
export function withBrandSuffix(
  title: string,
  suffix = BRANDED_TITLE_SUFFIX,
  limit = 60,
): string {
  const clean = String(title ?? "").replace(/\s+/g, " ").trim();
  if (!clean) return SITE_NAME;

  const existingBrand = new RegExp(
    `${suffix.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*$`,
    "i",
  );
  const core = clean.replace(existingBrand, "").trim() || clean;
  if (`${core}${suffix}`.length <= limit) return `${core}${suffix}`;
  return core;
}

/**
 * Truncate a meta description at a sentence boundary (hard cut at `limit`
 * chars, trying not to orphan a word).
 */
export function clampMetaDescription(description: string, limit = 160): string {
  const clean = String(description ?? "").replace(/\s+/g, " ").trim();
  if (clean.length <= limit) return clean;

  const cut = clean.slice(0, limit);
  const lastStop = Math.max(
    cut.lastIndexOf(". "),
    cut.lastIndexOf("! "),
    cut.lastIndexOf("? "),
  );
  if (lastStop > limit * 0.5) return clean.slice(0, lastStop + 1).trim();
  return cut.slice(0, cut.lastIndexOf(" ")).trim();
}

/**
 * Build a fully-populated Next.js Metadata object for any page.
 * Every page should call this inside `generateMetadata()` (dynamic routes)
 * or export the result directly as `metadata` (static routes).
 *
 * Usage:
 *   export const metadata = buildMetadata({
 *     title: "SEO Services",
 *     description: "...",
 *     path: "/services/seo",
 *   });
 */
export function buildMetadata(page: PageSEO): Metadata {
  const url = absoluteSiteUrl(page.path);
  const ogImage = page.ogImage
    ? absoluteSiteUrl(page.ogImage)
    : absoluteSiteUrl(SITE_OG_IMAGE);

  const title =
    page.path === "/"
      ? withBrandSuffix(page.title, "", 60) // home title is already branded
      : withBrandSuffix(page.title);
  const description = clampMetaDescription(page.description);

  return {
    title,
    description,
    keywords: page.keywords,
    authors: [{ name: SITE_NAME, url: absoluteSiteUrl("/") }],
    metadataBase: new URL(absoluteSiteUrl("/")),
    icons: {
      icon: SITE_ICON,
      shortcut: SITE_ICON,
      apple: "/apple-touch-icon.png",
    },
    alternates: {
      canonical: url,
    },
    robots: page.noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      type: page.openGraphType ?? "website",
      locale: SITE_LOCALE,
      url,
      title,
      description,
      siteName: SITE_NAME,
      images: [{ url: ogImage, width: 1200, height: 630, alt: page.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: ogImage, alt: page.title }],
      creator: SITE_TWITTER,
    },
  };
}
