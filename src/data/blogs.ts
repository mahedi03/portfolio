import type { BlogPost } from "@/types";
import { siteConfig } from "@/config/site";
import { calculateReadingTime } from "@/lib/utils";

const author = {
  name: siteConfig.author.name,
  avatar: siteConfig.author.image,
  bio: siteConfig.author.bio,
};

const post1Content = `
Technical SEO is the foundation everything else is built on. Without a
crawlable, indexable, fast site, even the best content strategy will
underperform.

## Start with crawlability

Before anything else, confirm search engines can actually reach your
important pages. Check your robots.txt, XML sitemap, and internal linking
structure.

## Then fix indexation

Duplicate content, thin pages, and inconsistent canonicalization all waste
crawl budget and dilute ranking signals.

## Finally, optimize speed

Core Web Vitals are a ranking factor and, more importantly, a user
experience factor. Prioritize LCP, CLS, and INP improvements.
`.trim();

export const blogPosts: BlogPost[] = [
  {
    slug: "technical-seo-foundations",
    title: "Technical SEO Foundations Every Site Needs",
    excerpt:
      "Before content and links can work, your site needs a crawlable, indexable, fast technical foundation. Here's where to start.",
    content: post1Content,
    coverImage: "/blog/placeholder-cover-1.jpg",
    category: "SEO",
    tags: ["Technical SEO", "Core Web Vitals"],
    author,
    publishedAt: "2026-01-15",
    readingTime: calculateReadingTime(post1Content),
    featured: true,
    relatedPosts: [],
    metaTitle: "Technical SEO Foundations Every Site Needs",
    metaDescription:
      "The core technical SEO fundamentals — crawlability, indexation, and site speed — that every website needs before scaling content and links.",
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.featured);
}

export function getPostsByCategory(category: string): BlogPost[] {
  if (category === "all") return blogPosts;
  return blogPosts.filter((p) => p.category.toLowerCase() === category.toLowerCase());
}

export function getAllCategories(): string[] {
  return Array.from(new Set(blogPosts.map((p) => p.category)));
}

export function getAllTags(): string[] {
  return Array.from(new Set(blogPosts.flatMap((p) => p.tags)));
}
