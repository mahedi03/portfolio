import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";
import { portfolioProjects } from "@/data/portfolio";
import { caseStudies } from "@/data/caseStudies";
import { routeLastmod } from "@/lib/seo/content-dates";

// Truthful lastmod values come from git history (prebuild content-dates);
// `lastModified: undefined` simply omits the tag instead of fabricating "now".

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: routeLastmod("/"), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified: routeLastmod("/about"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services`, lastModified: routeLastmod("/services"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/portfolio`, lastModified: routeLastmod("/portfolio"), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/case-studies`, lastModified: routeLastmod("/case-studies"), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: routeLastmod("/contact"), changeFrequency: "yearly", priority: 0.6 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: routeLastmod(`/services/${s.slug}`) ?? routeLastmod("/services/*"),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const portfolioRoutes: MetadataRoute.Sitemap = portfolioProjects.map((p) => ({
    url: `${base}/portfolio/${p.slug}`,
    lastModified: routeLastmod(`/portfolio/${p.slug}`) ?? routeLastmod("/portfolio/*"),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((c) => ({
    url: `${base}/case-studies/${c.slug}`,
    lastModified: routeLastmod(`/case-studies/${c.slug}`) ?? routeLastmod("/case-studies/*"),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...portfolioRoutes,
    ...caseStudyRoutes,
  ];
}
