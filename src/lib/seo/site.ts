// ============================================================================
// SITE CONSTANTS (single source of truth for SEO)
// Mirrors Frame-Cipher's src/lib/seo/site.* — keep this file tiny; every
// metadata/schema builder resolves URLs, names, and locales through here.
// ============================================================================

import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/utils";

export const SITE_NAME: string = siteConfig.name;
export const SITE_URL: string =
  process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url;
export const SITE_LOCALE: string = siteConfig.locale;
export const SITE_TWITTER: string = "@mahedi_perves";
export const SITE_OG_IMAGE: string = siteConfig.ogImage;
export const SITE_ICON: string = "/Mahedi Hasan-transparent.webp";

/** Absolute URL helper that also hard-truncates trailing slashes. */
export const absoluteSiteUrl = absoluteUrl;
