"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

export function Services() {
  const serviceItems = [
    {
      title: "UI/UX & NEXT.JS DEVELOPMENT",
      description: "High-performance web apps built with Next.js 15, TypeScript, Tailwind CSS, and ultra-fast Core Web Vitals.",
      href: "/services/website-development",
      tag: "Development",
    },
    {
      title: "SEARCH ENGINE OPTIMIZATION (SEO)",
      description: "Entity-first Semantic SEO based on Koray Tuğberk GÜBÜR framework to dominate topical authority and organic rankings.",
      href: "/services/seo",
      tag: "Organic Search",
    },
    {
      title: "PERFORMANCE ADS (META & GOOGLE)",
      description: "Full-funnel paid advertising with automated tracking, creative testing, and high-ROAS conversion funnels.",
      href: "/services/meta-ads",
      tag: "Paid Media",
    },
    {
      title: "CONVERSION ARCHITECTURE & ANALYTICS",
      description: "Server-side GTM, GA4 custom tracking, CRO audits, and user behavior analytics to maximize revenue per visitor.",
      href: "/services/analytics-tracking",
      tag: "Analytics & CRO",
    },
  ];

  return (
    <section id="services" className="relative py-20 lg:py-28 overflow-hidden">
      {/* 1. Giant Faint Watermark behind the section */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-4 left-4 sm:left-12 select-none text-[clamp(4.5rem,12vw,12rem)] font-display font-black uppercase tracking-[-0.05em] text-white/[0.025] leading-none z-0"
      >
        SERVICE
      </div>

      <Container className="relative z-10">
        {/* 2. Section Header with /SERVICE */}
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight text-white uppercase">
              /SERVICE
            </h2>
            <p className="mt-3 max-w-lg text-base sm:text-lg leading-relaxed text-muted-foreground">
              Comprehensive growth and development services tailored for ambitious businesses and modern digital products.
            </p>
          </div>

          <Link
            href="/services"
            className="group inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/80 backdrop-blur-md px-5 py-2.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-white/40 hover:bg-white hover:text-black hover:scale-105 shadow-sm"
          >
            <span>Explore All Services</span>
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>

        {/* 3. Full-width Interactive Service Rows */}
        <div className="mt-12 divide-y divide-border/60 border-y border-border/60">
          {serviceItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <Link
                href={item.href}
                className="group flex flex-col sm:flex-row sm:items-center justify-between py-8 sm:py-10 transition-all duration-300 hover:px-4 hover:bg-white/[0.02]"
              >
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-muted-foreground">
                      0{index + 1}
                    </span>
                    <span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-black tracking-tight text-white transition-colors group-hover:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 sm:mt-0 flex items-center justify-end">
                  <div className="size-12 rounded-full border border-border/80 bg-surface/60 flex items-center justify-center transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black group-hover:scale-110 shadow-sm">
                    <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
