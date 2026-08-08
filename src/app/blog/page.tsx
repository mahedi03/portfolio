import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, itemListSchema, webPageSchema } from "@/lib/schema";
import { blogPosts, getFeaturedPosts } from "@/data/blogs";
import { formatDate } from "@/lib/utils";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description:
    "Articles on SEO, technical SEO, paid advertising, and web development — practical, no-fluff marketing insights.",
  path: "/blog",
});

export default function BlogPage() {
  const featured = getFeaturedPosts()[0];
  const rest = blogPosts.filter((p) => p.slug !== featured?.slug);

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
          webPageSchema({ name: "Blog | Mahedi Hasan", description: "Articles on SEO, technical SEO, paid advertising, and web development — practical, no-fluff marketing insights.", path: "/blog", breadcrumbPath: "/blog" }),
        ]}
      />
      <PageHero
        eyebrow="Blog"
        title="Insights on SEO, ads, and web development"
        description="Practical, no-fluff articles on what actually moves the needle."
      />

      {featured && (
        <section className="pb-8">
          <Container>
            <Reveal>
              <Link
                href={`/blog/${featured.slug}`}
                className="group grid grid-cols-1 gap-6 overflow-hidden rounded-xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated lg:grid-cols-2"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-muted lg:aspect-auto">
                  <Image
                    src={featured.coverImage}
                    alt={featured.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                </div>
                <div className="flex flex-col justify-center p-6 lg:p-10">
                  <div className="text-xs font-medium uppercase tracking-wide text-primary">
                    Featured · {featured.category}
                  </div>
                  <h2 className="mt-2 text-2xl font-display font-bold">
                    {featured.title}
                  </h2>
                  <p className="mt-3 text-muted-foreground">
                    {featured.excerpt}
                  </p>
                  <div className="mt-4 text-sm text-muted-foreground">
                    {formatDate(featured.publishedAt)} · {featured.readingTime} min read
                  </div>
                </div>
              </Link>
            </Reveal>
          </Container>
        </section>
      )}

      <section className="py-12 lg:py-16">
        <Container>
          {rest.length === 0 ? (
            <p className="text-center text-muted-foreground">
              More articles coming soon.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((post, i) => (
                <Reveal key={post.slug} delay={i * 0.06}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block overflow-hidden rounded-lg border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <div className="text-xs font-medium uppercase tracking-wide text-primary">
                        {post.category}
                      </div>
                      <h3 className="mt-1.5 font-semibold">{post.title}</h3>
                      <div className="mt-3 text-xs text-muted-foreground">
                        {formatDate(post.publishedAt)} · {post.readingTime} min read
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </Container>
      </section>

      <CTA />
    </>
  );
}
