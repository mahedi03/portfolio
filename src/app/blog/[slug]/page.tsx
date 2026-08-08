import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getPostBySlug, blogPosts } from "@/data/blogs";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, blogPostingSchema, webPageSchema } from "@/lib/schema";
import { formatDate } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/Reveal";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return buildMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    ogImage: post.coverImage,
    keywords: post.tags,
    openGraphType: "article",
  });
}

// Minimal markdown-ish renderer: paragraphs + ## headings.
// Swap for a real markdown renderer (e.g. react-markdown) if content grows.
function renderContent(content: string) {
  return content.split(/\n\n+/).map((block, i) => {
    const trimmed = block.trim();
    if (trimmed.startsWith("## ")) {
      return (
        <h2 key={i} className="mt-8 text-xl font-display font-bold">
          {trimmed.replace("## ", "")}
        </h2>
      );
    }
    return (
      <p key={i} className="mt-4 leading-relaxed text-muted-foreground">
        {trimmed}
      </p>
    );
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          blogPostingSchema(post),
          webPageSchema({ name: post.metaTitle, description: post.metaDescription, path: `/blog/${post.slug}`, breadcrumbPath: `/blog/${post.slug}` }),
        ]}
      />

      <article>
        <section className="pt-16 pb-8 lg:pt-24">
          <Container className="max-w-3xl text-center">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                {post.category}
              </p>
              <h1 className="mt-3 text-[length:var(--text-h1)] font-display font-bold tracking-tight">
                {post.title}
              </h1>
              <div className="mt-5 flex items-center justify-center gap-3 text-sm text-muted-foreground">
                <div className="relative size-8 overflow-hidden rounded-full bg-muted">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    sizes="32px"
                    className="object-cover"
                  />
                </div>
                <span>{post.author.name}</span>
                <span>·</span>
                <time dateTime={post.publishedAt}>
                  {formatDate(post.publishedAt)}
                </time>
                <span>·</span>
                <span>{post.readingTime} min read</span>
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="pb-10">
          <Container>
            <Reveal className="relative aspect-[16/9] overflow-hidden rounded-xl border border-border bg-muted shadow-elevated">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            </Reveal>
          </Container>
        </section>

        <section className="pb-16">
          <Container className="max-w-2xl">
            <Reveal>{renderContent(post.content)}</Reveal>

            <div className="mt-10 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="mt-12 rounded-xl border border-border bg-surface p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Written by
              </p>
              <div className="mt-2 flex items-start justify-between gap-4">
                <div>
                  <Link href="/about" className="font-semibold hover:text-primary">
                    {post.author.name}
                  </Link>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {post.author.bio}
                  </p>
                </div>
                <Link href="/about" className="shrink-0 text-sm font-medium text-primary hover:underline">
                  About the author
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </article>

      <section className="border-t border-border bg-surface py-16">
        <Container className="max-w-2xl text-center">
          <Reveal>
            <h2 className="text-[length:var(--text-h3)] font-display font-bold">
              Need help with something like this?
            </h2>
            <Button asChild size="lg" className="mt-6">
              <Link href="/contact">
                Get in Touch <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
