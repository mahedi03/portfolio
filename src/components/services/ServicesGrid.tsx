"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowUpRight, Search, Sparkles } from "lucide-react";
import { services } from "@/data/services";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { getLucideIcon } from "@/lib/icons";
import { Badge } from "@/components/ui/badge";

type CategoryFilter = "all" | "seo" | "ads" | "development" | "strategy";

const filterOptions: { id: CategoryFilter; label: string }[] = [
  { id: "all", label: "All Offerings (26)" },
  { id: "seo", label: "SEO & AI Search" },
  { id: "ads", label: "Paid Media & Ads" },
  { id: "development", label: "Web Engineering" },
  { id: "strategy", label: "Growth Strategy" },
];

export function ServicesGrid() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const matchesCategory =
        activeCategory === "all" || service.category === activeCategory;
      const matchesQuery =
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.overview.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section className="py-16 lg:py-20">
      <Container>
        {/* Controls: Search and Categories */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {filterOptions.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                  activeCategory === tab.id
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-muted/60"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative min-w-[240px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-border bg-card py-1.5 pl-9 pr-3 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
          <span>
            Showing <strong className="text-foreground">{filteredServices.length}</strong> service{filteredServices.length !== 1 ? "s" : ""}
          </span>
          {activeCategory !== "all" && (
            <button
              onClick={() => setActiveCategory("all")}
              className="text-primary hover:underline"
            >
              Reset filter
            </button>
          )}
        </div>

        {/* Services Cards */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service, i) => {
            const Icon = getLucideIcon(service.icon);
            return (
              <Reveal key={service.slug} delay={Math.min(i * 0.03, 0.3)}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col justify-between rounded-xl border border-border/80 bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-elevated"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="inline-flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="size-5" />
                      </div>
                      <Badge variant="outline" className="text-[10px] uppercase tracking-wider text-muted-foreground">
                        {service.category}
                      </Badge>
                    </div>

                    <h2 className="mt-4 text-base font-bold text-foreground transition-colors group-hover:text-primary">
                      {service.title}
                    </h2>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                      {service.tagline}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-border/50 pt-4 text-xs font-semibold text-primary">
                    <span className="inline-flex items-center gap-1 group-hover:underline">
                      Explore Framework <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                    <span className="text-[11px] font-mono text-muted-foreground/60">
                      /{service.slug}
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        {filteredServices.length === 0 && (
          <div className="mt-12 rounded-xl border border-dashed border-border p-12 text-center">
            <Sparkles className="mx-auto size-8 text-muted-foreground/40" />
            <p className="mt-3 text-sm font-semibold text-foreground">No services found</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Try adjusting your search query or switching categories.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}
