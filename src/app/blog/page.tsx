import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, itemListSchema, webPageSchema } from "@/lib/schema";
import { blogPosts } from "@/data/blogs";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogList } from "@/components/blog/BlogList";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = buildMetadata({
  title: "Blog | Practical SEO, Paid Media & Web Engineering Insights",
  description:
    "Explore strategic articles on Search Engine Optimization, AEO, algorithmic advertising across Meta & Google, and Next.js development by Mahedi Hasan.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
          itemListSchema(
            blogPosts.map((p) => ({ name: p.title, path: `/blog/${p.slug}` }))
          ),
          webPageSchema({
            name: "Blog | Mahedi Hasan",
            description:
              "Articles on SEO, technical SEO, paid advertising, and web development — practical, no-fluff marketing insights.",
            path: "/blog",
            breadcrumbPath: "/blog",
          }),
        ]}
      />
      <BlogHero />
      <BlogList />
      <CTA />
    </>
  );
}
