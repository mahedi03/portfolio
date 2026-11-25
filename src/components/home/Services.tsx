import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

export function Services() {
  const serviceItems = [
    {
      title: "MARKETING STRATEGY & SYSTEMS",
      description: "Offer clarity, funnel architecture, channel sequencing, and a growth plan that ends the guesswork.",
      href: "/services/marketing-strategy",
      tag: "Strategy",
    },
    {
      title: "NEXT.JS WEBSITES & WEB APPS",
      description: "Fast, accessible builds designed around one question: what should the visitor do next?",
      href: "/services/website-development",
      tag: "Web",
    },
    {
      title: "WEBSITE MARKETING & CRO",
      description: "Landing journeys, offer placement, and on-page experiments that lift the conversion rate you already earn.",
      href: "/services/website-marketing",
      tag: "Conversion",
    },
    {
      title: "SEMANTIC SEO",
      description: "Topical authority, technical health, and content mapped to real search intent, built to compound quarter over quarter.",
      href: "/services/seo",
      tag: "Organic Search",
    },
    {
      title: "META & GOOGLE ADS",
      description: "Full-funnel campaigns with disciplined targeting, creative iteration, and clean conversion tracking.",
      href: "/services/meta-ads",
      tag: "Paid Media",
    },
    {
      title: "TikTok & PINTEREST ADS",
      description: "Discovery-led placements where the scroll happens, with native creative, native pacing, and measurable outcomes.",
      href: "/services/tiktok-ads",
      tag: "Discovery Ads",
    },
    {
      title: "ANALYTICS & CRO",
      description: "GA4, server-side tagging, and behaviour analysis wired to the conversions your business actually runs on.",
      href: "/services/analytics-tracking",
      tag: "Analytics & CRO",
    },
    {
      title: "LOCAL SEO & VISIBILITY",
      description: "Profile optimization, location pages, and review workflows that put the business on the map, literally.",
      href: "/services/local-seo",
      tag: "Local Search",
    },
  ];

  return (
    <section id="services" className="relative py-14 sm:py-20 lg:py-24 overflow-hidden">
      {/* 1. Giant Faint Watermark behind the section */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-4 left-4 sm:left-12 select-none text-[clamp(3.75rem,12vw,12rem)] font-display font-black uppercase tracking-[-0.05em] text-white/[0.025] leading-none z-0"
      >
        SERVICE
      </div>

      <Container className="relative z-10">
        {/* 2. Section Header with /SERVICE */}
        <Reveal className="flex flex-col items-start justify-between gap-5 sm:gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-display font-black tracking-tight text-white uppercase">
              /SERVICE
            </h2>
            <p className="mt-3 max-w-lg text-base sm:text-lg leading-relaxed text-muted-foreground">
              One connected capability set for growing businesses: strategy, web, search,
              paid media, and measurement that support each other instead of competing.
            </p>
          </div>

          <Link
            href="/services"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-border/80 bg-surface/80 backdrop-blur-md px-5 py-2.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-white/40 hover:bg-white hover:text-black hover:scale-105 shadow-sm"
          >
            <span>Explore All Services</span>
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>

        {/* 3. Full-width Interactive Service Rows */}
        <div className="mt-10 sm:mt-12 divide-y divide-border/60 border-y border-border/60">
          {serviceItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <Link
                href={item.href}
                className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-6 sm:py-9 transition-all duration-300 sm:hover:px-4 hover:bg-white/[0.02]"
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
                  <h3 className="mt-2 text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-display font-black tracking-tight text-white transition-colors group-hover:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-end shrink-0">
                  <div className="size-10 sm:size-12 rounded-full border border-border/80 bg-surface/60 flex items-center justify-center transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black group-hover:scale-110 shadow-sm">
                    <ArrowUpRight className="size-4 sm:size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
