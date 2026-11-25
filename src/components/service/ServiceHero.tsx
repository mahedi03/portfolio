import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ChevronRight, Quote } from "lucide-react";
import type { Service } from "@/types";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceWebPageSchema } from "@/lib/seo";
import { AnimatedServiceIcon } from "@/components/service";

export function ServiceHero({ service }: { service: Service }) {
  // Keep heroHook crisp: only show the first paragraph if a legacy entry has multiple paragraphs
  const cleanHook = service.heroHook
    ?.replace(/^Short Description \(under H1\):\s*/i, "")
    .split(/\n\n/)[0]
    ?.trim();

  // Only show quote when it is an actual editorial quote (not a short CTA button label)
  const cleanQuote =
    service.quote && service.quote.split(" ").length >= 8 ? service.quote : null;

  return (
    <>
      <JsonLd data={serviceWebPageSchema(service)} />
      <section className="relative overflow-hidden border-b border-border/80 bg-[radial-gradient(ellipse_60%_80%_at_80%_20%,rgba(124,58,237,0.14),transparent_70%)] pt-10 pb-14 sm:pt-14 sm:pb-18 lg:pt-16 lg:pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-28 right-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
        />

        <Container className="relative z-10 max-w-6xl">
          {/* Top Bar: Back to Services + Breadcrumbs */}
          <Reveal className="mb-8 flex flex-wrap items-center justify-between gap-3 sm:mb-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-2 text-xs font-semibold text-foreground backdrop-blur-md transition-colors hover:border-white/40 hover:bg-surface hover:text-white"
            >
              <ArrowLeft className="size-3.5" />
              <span>All Services</span>
            </Link>

            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="size-3.5 opacity-50" />
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight className="size-3.5 opacity-50" />
              <span className="text-primary font-bold">{service.shortTitle}</span>
            </nav>
          </Reveal>

          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
            <Reveal className="text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface/80 px-3.5 py-1.5 text-xs font-semibold backdrop-blur-md">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                <span className="text-foreground">{service.shortTitle}</span>
                <span className="text-border" aria-hidden>•</span>
                <span className="text-muted-foreground">Direct Senior Execution</span>
              </div>

              <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                {service.tagline}
              </p>
              <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight text-white leading-[1.08]">
                {service.title}
              </h1>

              <p className="mt-4 text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground">
                {service.overview}
              </p>

              {cleanHook && cleanHook.toLowerCase() !== service.overview.toLowerCase() && (
                <div className="mt-5 rounded-2xl border border-white/10 bg-surface/60 p-4 sm:p-5 backdrop-blur-md">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {cleanHook}
                  </p>
                </div>
              )}

              {cleanQuote && (
                <div className="mt-5 flex items-start gap-3 rounded-2xl border border-primary/20 bg-primary/5 p-4">
                  <Quote className="mt-0.5 size-4 text-primary shrink-0 rotate-180" />
                  <p className="text-xs sm:text-sm italic leading-relaxed text-foreground/90 font-medium">
                    &ldquo;{cleanQuote}&rdquo;
                  </p>
                </div>
              )}

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-white/90 shadow-[0_8px_25px_rgba(255,255,255,0.2)]"
                >
                  <span>Book Strategy Consultation</span>
                  <ArrowUpRight className="size-4" />
                </Link>
                <a
                  href="#offerings"
                  className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/60 px-5 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition-all hover:border-white/40 hover:bg-surface hover:text-white"
                >
                  <span>What&apos;s Included</span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative">
                <AnimatedServiceIcon icon={service.icon} label={service.shortTitle} />
                <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  <span>{service.process.length}-step workflow</span>
                  <span>{service.deliverables.length} key deliverables</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Proof Metrics Bar */}
          <Reveal delay={0.15} className="mt-12">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 border-t border-white/10 pt-8 sm:grid-cols-4">
              <div className="rounded-2xl border border-white/10 bg-surface/50 p-4 backdrop-blur-sm">
                <div className="text-xl sm:text-2xl font-black font-display text-white">4+ Years</div>
                <div className="text-xs text-muted-foreground mt-0.5">Hands-On Experience</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-surface/50 p-4 backdrop-blur-sm">
                <div className="text-xl sm:text-2xl font-black font-display text-white">50+ Projects</div>
                <div className="text-xs text-muted-foreground mt-0.5">Shipped &amp; Audited</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-surface/50 p-4 backdrop-blur-sm">
                <div className="text-xl sm:text-2xl font-black font-display text-white">৳15L+ Revenue</div>
                <div className="text-xs text-muted-foreground mt-0.5">Verified Client Return</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-surface/50 p-4 backdrop-blur-sm">
                <div className="text-xl sm:text-2xl font-black font-display text-white">100% Direct</div>
                <div className="text-xs text-muted-foreground mt-0.5">Zero Outsourced Layers</div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
