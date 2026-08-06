"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { PortfolioCategory } from "@/types";
import { portfolioProjects } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

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
                  className="group block overflow-hidden rounded-lg border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-container transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <div className="text-xs font-medium uppercase tracking-wide text-primary">
                      {project.category.replace("-", " ")}
                    </div>
                    <h3 className="mt-1.5 font-semibold">{project.title}</h3>
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
