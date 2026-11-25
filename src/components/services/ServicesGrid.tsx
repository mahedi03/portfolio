"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowUpRight, Search, Sparkles } from "lucide-react";
import { services } from "@/data/services";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { getLucideIcon } from "@/lib/icons";

type CategoryFilter = "all" | "seo" | "ads" | "development" | "strategy";

const filterOptions: { id: CategoryFilter; label: string }[] = [
  { id: "all", label: "All Services" },
  { id: "seo", label: "SEO & AI Search" },
  { id: "ads", label: "Paid Media" },
  { id: "development", label: "Web Engineering" },
  { id: "strategy", label: "Strategy & CRO" },
];

export function ServicesGrid() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return services.filter((service) => {
      const matchesCategory =
        activeCategory === "all" || service.category === activeCategory;
      const matchesQuery =
        q === "" ||
        service.title.toLowerCase().includes(q) ||
        service.shortTitle.toLowerCase().includes(q) ||
        service.tagline.toLowerCase().includes(q) ||
        service.overview.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="all-services" className="py-14 sm:py-20 lg:py-24">
      <Container>
        {/* Filter Pills + Search */}
        <div className="flex flex-col gap-5 border-b border-white/10 pb-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {filterOptions.map((tab) => {
              const count = services.filter((s) => tab.id === "all" || s.category === tab.id).length;
              const isSelected = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveCategory(tab.id)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    isSelected
                      ? "bg-white text-black shadow-lg scale-[1.02]"
                      : "border border-border/80 bg-surface/60 text-muted-foreground hover:bg-surface hover:text-white"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 font-mono text-[10px] font-bold ${
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
              placeholder="Search services..."
              aria-label="Search services"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-border/80 bg-surface/60 py-2.5 pl-10 pr-4 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground backdrop-blur-md focus:border-white/50 focus:outline-none focus:ring-1 focus:ring-white/50"
            />
          </div>
        </div>

        {/* Services Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service, i) => {
            const Icon = getLucideIcon(service.icon);
            return (
              <Reveal key={service.slug} delay={Math.min(i * 0.03, 0.25)}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-surface/50 p-6 backdrop-blur-md shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-surface/90 hover:shadow-elevated"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="inline-flex size-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-colors group-hover:bg-white group-hover:text-black">
                        <Icon className="size-5" />
                      </div>
                      <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                        {service.category}
                      </span>
                    </div>

                    <h2 className="mt-5 text-lg font-display font-bold text-white transition-colors">
                      {service.shortTitle}
                    </h2>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground line-clamp-2">
                      {service.overview}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-semibold text-white/90">
                    <span className="inline-flex items-center gap-1.5 group-hover:text-primary transition-colors">
                      <span>Explore Service</span>
                      <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                    <span className="font-mono text-[11px] text-muted-foreground/70">
                      {service.process.length} phases
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        {filteredServices.length === 0 && (
          <div className="mt-12 rounded-2xl border border-dashed border-border bg-surface/30 p-12 text-center">
            <Sparkles className="mx-auto size-8 text-muted-foreground/40" />
            <p className="mt-3 text-base font-semibold text-white">No services match your filter</p>
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
              Try a different keyword or reset the category filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
              }}
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}
