"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { PortfolioCategory } from "@/types";
import { portfolioProjects } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

const categories: { label: string; value: PortfolioCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Website", value: "website" },
  { label: "SEO", value: "seo" },
  { label: "Paid Ads", value: "paid-ads" },
  { label: "Branding", value: "branding" },
];

export function PortfolioGrid() {
  const [active, setActive] = useState<PortfolioCategory | "all">("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return portfolioProjects.filter((p) => {
      const matchesCategory = active === "all" || p.category === active;
      const matchesSearch =
        search.trim() === "" ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [active, search]);

  return (
    <section className="py-12 lg:py-16">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActive(cat.value)}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                  active === cat.value
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:text-foreground"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search projects..."
            aria-label="Search projects"
            className="w-full rounded-md border border-border bg-card px-4 py-2 text-sm sm:w-64"
          />
        </div>

        {filtered.length === 0 ? (
          <p className="mt-16 text-center text-muted-foreground">
            No projects match your filters.
          </p>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
              >
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-container transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/70 via-black/10 to-transparent p-4 pt-12">
                      <span className="rounded-full border border-white/25 bg-black/25 px-2.5 py-1 text-xs font-medium uppercase tracking-wide text-white backdrop-blur-sm">{project.category.replace("-", " ")}</span>
                      <span className="flex size-9 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg transition-transform group-hover:rotate-12"><ArrowUpRight className="size-4" /></span>
                    </div>
                  </div>
                  <div className="p-5 sm:p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{project.client}</p>
                    <h3 className="mt-2 font-display text-xl font-bold tracking-tight">{project.title}</h3>
                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted-foreground">{project.summary}</p>
                    {project.results.length > 0 && <div className="mt-5 grid grid-cols-2 gap-2">{project.results.slice(0, 2).map((result) => <div key={result.label} className="rounded-lg bg-muted/70 px-3 py-2"><div className="font-display text-lg font-bold text-primary">{result.value}</div><div className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">{result.label}</div></div>)}</div>}
                    <div className="mt-5 flex flex-wrap gap-1.5">{project.tags.slice(0, 3).map((tag) => <span key={tag} className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground">{tag}</span>)}</div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
