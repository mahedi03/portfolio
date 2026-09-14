"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getFeaturedProjects } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

export function FeaturedProjects() {
  const projects = getFeaturedProjects();
  const tabs = ["SEO", "Website", "Ads"] as const;
  type TabType = (typeof tabs)[number];
  const [activeTab, setActiveTab] = useState<TabType>("SEO");

  if (projects.length === 0) return null;

  const filteredProjects = projects.filter((p) => {
    if (activeTab === "SEO") {
      return p.category === "seo" || p.category.toLowerCase().includes("seo");
    }
    if (activeTab === "Website") {
      return p.category === "website" || p.category.toLowerCase().includes("web");
    }
    if (activeTab === "Ads") {
      return p.category === "paid-ads" || p.category.toLowerCase().includes("ad");
    }
    return true;
  });

  return (
    <section id="work" className="relative py-20 lg:py-28 overflow-hidden">
      {/* 1. Giant Faint Watermark behind the section */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-4 left-4 sm:left-12 select-none text-[clamp(4.5rem,12vw,12rem)] font-display font-black uppercase tracking-[-0.05em] text-white/[0.025] leading-none z-0"
      >
        PORTFOLIO
      </div>

      <Container className="relative z-10">
        {/* 2. Top Header Row with /SELECTED WORK and View All Work Button */}
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight text-white uppercase">
              /SELECTED WORK
            </h2>
            <p className="mt-3 max-w-lg text-base sm:text-lg leading-relaxed text-muted-foreground">
              A curated selection of high-impact web development, revenue-generating paid campaigns, and semantic SEO frameworks.
            </p>
          </div>

          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/80 backdrop-blur-md px-5 py-2.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-white/40 hover:bg-white hover:text-black hover:scale-105 shadow-sm"
          >
            <span>View All Work</span>
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>

        {/* 3. Filter Tabs: SEO -> Website -> Ads */}
        <Reveal delay={0.1} className="mt-8 flex flex-wrap items-center gap-2.5">
          {tabs.map((tab) => {
            const count = projects.filter((p) => {
              if (tab === "SEO") return p.category.includes("seo");
              if (tab === "Website") return p.category.includes("website") || p.category.includes("web");
              if (tab === "Ads") return p.category.includes("ad");
              return true;
            }).length;

            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-white text-black shadow-lg scale-105"
                    : "bg-surface/60 text-muted-foreground hover:bg-surface hover:text-white border border-border/60"
                }`}
              >
                <span>{tab}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-mono font-bold ${
                    activeTab === tab ? "bg-black/10 text-black" : "bg-white/10 text-muted-foreground"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </Reveal>

        {/* 4. Project Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          {filteredProjects.slice(0, 4).map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <Link
                href={`/portfolio/${project.slug}`}
                className="group block overflow-hidden rounded-2xl border border-border/80 bg-surface/40 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-surface/80 hover:-translate-y-1.5 shadow-soft hover:shadow-elevated"
              >
                {/* Image Mockup with REAL PROJECT badge and Circular Hover Arrow */}
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

                  {/* Circular Hover Arrow matching the video */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="size-14 rounded-full bg-white text-black flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-300">
                      <ArrowUpRight className="size-6 text-black" />
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white transition-colors group-hover:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted-foreground line-clamp-2">
                    {project.summary}
                  </p>

                  {/* Category Pill Tags */}
                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 border border-white/10">
                      {project.category.replace("-", " ")}
                    </span>
                    {project.tags?.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-muted-foreground border border-border/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
