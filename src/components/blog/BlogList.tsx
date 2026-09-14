"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Search, Sparkles } from "lucide-react";
import { blogPosts, getFeaturedPosts } from "@/data/blogs";
import { formatDate } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { Badge } from "@/components/ui/badge";

export function BlogList() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const featured = getFeaturedPosts()[0];

  // Extract all categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    blogPosts.forEach((post) => {
      if (post.category) set.add(post.category);
    });
    return ["All", ...Array.from(set)];
  }, []);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Non-featured posts for the grid
  const gridPosts = useMemo(() => {
    if (selectedCategory !== "All" || searchQuery) {
      return filteredPosts;
    }
    return filteredPosts.filter((p) => p.slug !== featured?.slug);
  }, [filteredPosts, featured, selectedCategory, searchQuery]);

  return (
    <div className="py-12 lg:py-16">
      <Container>
        {/* Featured Post Card (only when no filter active) */}
        {featured && selectedCategory === "All" && !searchQuery && (
          <div className="mb-14">
            <Reveal>
              <Link
                href={`/blog/${featured.slug}`}
                className="group grid grid-cols-1 gap-6 overflow-hidden rounded-2xl border border-border/80 bg-card shadow-soft transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-elevated lg:grid-cols-2"
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
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider">
                      Featured Analysis
                    </Badge>
                  </div>
                </div>

                <div className="flex flex-col justify-between p-7 lg:p-10">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {featured.category}
                    </div>
                    <h2 className="mt-3 text-2xl font-display font-bold tracking-tight text-foreground transition-colors group-hover:text-primary lg:text-3xl">
                      {featured.title}
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {featured.excerpt}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-border/60 pt-4 text-xs text-muted-foreground">
                    <span>
                      {formatDate(featured.publishedAt)} · {featured.readingTime} min read
                    </span>
                    <span className="font-semibold text-primary inline-flex items-center gap-1 group-hover:underline">
                      Read Full Article <ArrowUpRight className="size-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
        )}

        {/* Filter Controls */}
        <div className="flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "bg-card border border-border text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative min-w-[240px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-border bg-card py-1.5 pl-9 pr-3 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="mt-8">
          {gridPosts.length === 0 ? (
            <div className="rounded-xl border border-dashed border-border p-12 text-center">
              <Sparkles className="mx-auto size-8 text-muted-foreground/40" />
              <p className="mt-3 text-sm font-semibold text-foreground">No articles found</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Try searching for different keywords or clearing your category filter.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {gridPosts.map((post, i) => (
                <Reveal key={post.slug} delay={Math.min(i * 0.04, 0.3)} className="h-full">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex h-full flex-col justify-between overflow-hidden rounded-xl border border-border/80 bg-card shadow-soft transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-elevated"
                  >
                    <div>
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
                        <div className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                          {post.category}
                        </div>
                        <h3 className="mt-2 text-base font-bold text-foreground transition-colors group-hover:text-primary line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-border/60 px-5 py-3 text-[11px] text-muted-foreground flex items-center justify-between">
                      <span>{formatDate(post.publishedAt)}</span>
                      <span>{post.readingTime} min read</span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
