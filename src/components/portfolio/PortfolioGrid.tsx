"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { PortfolioCategory } from "@/types";
import { portfolioProjects } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { ArrowUpRight, Search } from "lucide-react";

const categories: { label: string; value: PortfolioCategory | "all" }[] = [
  { label: "SEO", value: "seo" },
  { label: "Website", value: "website" },
  { label: "Paid Ads", value: "paid-ads" },
  { label: "All", value: "all" },
];

export function PortfolioGrid() {
  const [active, setActive] = useState<PortfolioCategory | "all">("seo");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return portfolioProjects.filter((p) => {
      const matchesCategory =
        active === "all" ||
        p.category === active ||
        (active === "seo" && p.category.includes("seo")) ||
        (active === "website" && (p.category.includes("website") || p.category.includes("web"))) ||
        (active === "paid-ads" && (p.category.includes("ad") || p.category.includes("paid")));

      const matchesSearch =
        search.trim() === "" ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.client.toLowerCase().includes(search.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [active, search]);

  return (
    <section className="relative py-12 lg:py-20 overflow-hidden">
      {/* Background ambient watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-8 left-6 select-none text-[clamp(4.5rem,14vw,14rem)] font-display font-black uppercase tracking-[-0.05em] text-white/[0.02] leading-none z-0"
      >
        SHOWCASE
      </div>

      <Container className="relative z-10">
        {/* Controls: Modern Filter Tabs + Glass Search Bar */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-8">
          <div className="flex flex-wrap items-center gap-2.5">
            {categories.map((cat) => {
              const count = portfolioProjects.filter((p) => {
                if (cat.value === "all") return true;
                if (cat.value === "seo") return p.category.includes("seo");
                if (cat.value === "website") return p.category.includes("website") || p.category.includes("web");
                if (cat.value === "paid-ads") return p.category.includes("ad") || p.category.includes("paid");
                return p.category === cat.value;
              }).length;

              const isSelected = active === cat.value;

              return (
                <button
                  key={cat.value}
                  type="button"
                  onClick={() => setActive(cat.value)}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    isSelected
                      ? "bg-white text-black shadow-lg scale-105"
                      : "bg-surface/60 text-muted-foreground hover:bg-surface hover:text-white border border-border/60"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-mono font-bold ${
                      isSelected ? "bg-black/10 text-black" : "bg-white/10 text-muted-foreground"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search case studies & systems..."
              aria-label="Search projects"
              className="w-full rounded-full border border-border/80 bg-surface/60 pl-10 pr-4 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground backdrop-blur-md focus:border-white/50 focus:outline-none focus:ring-1 focus:ring-white/50 transition-all"
            />
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="mt-16 text-center py-16 rounded-2xl border border-white/5 bg-surface/20">
            <p className="text-base text-muted-foreground">
              No projects match your current filter or search query.
            </p>
            <button
              type="button"
              onClick={() => {
                setActive("all");
                setSearch("");
              }}
              className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
              >
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="group block h-full overflow-hidden rounded-2xl border border-border/80 bg-surface/40 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-surface/80 hover:-translate-y-1.5 shadow-soft hover:shadow-elevated"
                >
                  {/* Image with 16:10 Aspect, REAL PROJECT badge, and Centered Circular Hover Arrow */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted/30">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* REAL PROJECT Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="inline-flex items-center rounded-full bg-black/75 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white border border-white/20">
                        REAL PROJECT
                      </span>
                    </div>

                    {/* Circular Hover Arrow */}
                    <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="size-14 rounded-full bg-white text-black flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-300">
                        <ArrowUpRight className="size-6 text-black" />
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                        {project.client}
                      </p>
                      <span className="text-[11px] font-medium text-muted-foreground">
                        {project.category.replace("-", " ").toUpperCase()}
                      </span>
                    </div>

                    <h3 className="mt-2.5 text-xl sm:text-2xl font-display font-bold text-white transition-colors group-hover:text-white">
                      {project.title}
                    </h3>

                    <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-muted-foreground line-clamp-2">
                      {project.summary}
                    </p>

                    {/* Key Results Chips */}
                    {project.results.length > 0 && (
                      <div className="mt-5 grid grid-cols-2 gap-2.5">
                        {project.results.slice(0, 2).map((result) => (
                          <div
                            key={result.label}
                            className="rounded-xl border border-white/5 bg-surface/60 px-3.5 py-2 backdrop-blur-sm"
                          >
                            <div className="font-display text-base sm:text-lg font-bold text-white">
                              {result.value}
                            </div>
                            <div className="mt-0.5 text-[11px] text-muted-foreground truncate">
                              {result.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Category Tags */}
                    <div className="mt-5 flex flex-wrap items-center gap-1.5 pt-2 border-t border-white/5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border/80 bg-surface/50 px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
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
