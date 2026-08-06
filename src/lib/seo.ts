import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/utils";
import type { PageSEO } from "@/types";

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
  const url = absoluteUrl(page.path);
  const ogImage = page.ogImage
    ? absoluteUrl(page.ogImage)
    : absoluteUrl(siteConfig.ogImage);
  const siteIcon = "/logo.png";

  const title =
    page.path === "/" ? siteConfig.title : `${page.title} | ${siteConfig.name}`;

  return {
    title,
    description: page.description,
    keywords: page.keywords,
    authors: [{ name: siteConfig.author.name, url: siteConfig.url }],
    metadataBase: new URL(siteConfig.url),
    icons: {
      icon: siteIcon,
      shortcut: siteIcon,
      apple: siteIcon,
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
      type: "website",
      locale: siteConfig.locale,
      url,
      title,
      description: page.description,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: page.description,
      images: [ogImage],
      creator: "@yourhandle",
    },
  };
}
