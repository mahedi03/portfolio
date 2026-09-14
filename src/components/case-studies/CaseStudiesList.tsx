"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";

type CategoryFilter = "all" | "seo" | "paid-ads";

const filterOptions: { id: CategoryFilter; label: string }[] = [
  { id: "all", label: "All Studies" },
  { id: "seo", label: "SEO & Organic" },
  { id: "paid-ads", label: "Paid Media & Ads" },
];

export function CaseStudiesList() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");

  const filteredStudies = useMemo(() => {
    if (activeFilter === "all") return caseStudies;
    return caseStudies.filter((cs) => cs.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="relative py-12 lg:py-20 overflow-hidden">
      {/* Background watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-8 left-6 select-none text-[clamp(4.5rem,13vw,13rem)] font-display font-black uppercase tracking-[-0.05em] text-white/[0.02] leading-none z-0"
      >
        IMPACT
      </div>

      <Container className="relative z-10">
        {/* Filters */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-8">
          <div className="flex flex-wrap items-center gap-2.5">
            {filterOptions.map((tab) => {
              const count = caseStudies.filter((cs) => {
                if (tab.id === "all") return true;
                return cs.category === tab.id;
              }).length;

              const isSelected = activeFilter === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id)}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    isSelected
                      ? "bg-white text-black shadow-lg scale-105"
                      : "bg-surface/60 text-muted-foreground hover:bg-surface hover:text-white border border-border/60"
                  }`}
                >
                  <span>{tab.label}</span>
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

          <div className="text-xs text-muted-foreground">
            Displaying <span className="text-white font-semibold">{filteredStudies.length}</span> proven case studies
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          {filteredStudies.map((cs, i) => (
            <motion.div
              key={cs.slug}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
            >
              <Link
                href={`/case-studies/${cs.slug}`}
                className="group block h-full overflow-hidden rounded-2xl border border-border/80 bg-surface/40 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-surface/80 hover:-translate-y-1.5 shadow-soft hover:shadow-elevated"
              >
                {/* Image Mockup with CASE STUDY badge and Circular Hover Arrow */}
                <div className="relative aspect-[16/10] overflow-hidden bg-muted/30">
                  <Image
                    src={cs.coverImage}
                    alt={cs.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Top-Left Badges */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-black/75 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white border border-white/20">
                      CASE STUDY
                    </span>
                    <span className="inline-flex items-center rounded-full bg-primary/20 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary border border-primary/30">
                      {cs.industry}
                    </span>
                  </div>

                  {/* Centered Circular Hover Arrow */}
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
                      {cs.client}
                    </p>
                    <span className="text-[11px] font-medium text-muted-foreground">
                      {cs.category.replace("-", " ").toUpperCase()}
                    </span>
                  </div>

                  <h3 className="mt-2.5 text-xl sm:text-2xl font-display font-bold text-white transition-colors group-hover:text-white">
                    {cs.title}
                  </h3>

                  <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-muted-foreground line-clamp-2">
                    {cs.summary}
                  </p>

                  {/* Key Metrics Chips */}
                  {cs.metrics.length > 0 && (
                    <div className="mt-5 grid grid-cols-2 gap-2.5">
                      {cs.metrics.slice(0, 2).map((m) => (
                        <div
                          key={m.label}
                          className="rounded-xl border border-white/5 bg-surface/60 px-3.5 py-2 backdrop-blur-sm"
                        >
                          <div className="font-display text-base sm:text-lg font-bold text-white">
                            {m.after}
                          </div>
                          <div className="mt-0.5 text-[11px] text-muted-foreground truncate">
                            {m.label} (was {m.before})
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tools / Discipline Tags */}
                  {cs.tools.length > 0 && (
                    <div className="mt-5 flex flex-wrap items-center gap-1.5 pt-2 border-t border-white/5">
                      {cs.tools.slice(0, 3).map((tool) => (
                        <span
                          key={tool}
                          className="inline-flex items-center gap-1 rounded-full border border-border/80 bg-surface/50 px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                        >
                          <span className="size-1.5 rounded-full bg-emerald-400" />
                          <span className="truncate max-w-[240px]">{tool}</span>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
