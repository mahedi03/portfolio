import Link from "next/link";
import { ArrowUpRight, Quote } from "lucide-react";
import type { Service } from "@/types";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/Reveal";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceWebPageSchema } from "@/lib/seo";
import { AnimatedServiceIcon } from "@/components/service";

export function ServiceHero({ service }: { service: Service }) {

  return (
    <>
      <JsonLd data={serviceWebPageSchema(service)} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.shortTitle }]} />
      <section className="relative overflow-hidden border-b border-border bg-[radial-gradient(ellipse_60%_80%_at_80%_20%,rgba(124,58,237,0.16),transparent_70%)] pt-14 pb-16 lg:pt-20 lg:pb-24">
        {/* Glow ambient background */}
        <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

        <Container className="max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal className="text-left">
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/80 px-3.5 py-1.5 text-xs font-medium backdrop-blur-md">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                <span className="text-muted-foreground">{service.shortTitle} / Direct Senior Execution</span>
              </div>

              {/* Tagline & Title */}
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-primary">{service.tagline}</p>
              <h1 className="mt-3 text-[length:var(--text-h1)] font-display font-bold tracking-tight text-foreground">
                {service.title}
              </h1>

              {/* Overview */}
              <p className="mt-4 text-base lg:text-lg leading-relaxed text-muted-foreground">
                {service.overview}
              </p>

              {/* Hero Hook / Editorial Philosophy Callout */}
              {service.heroHook && (
                <div className="mt-6 rounded-xl border border-border/70 bg-card/50 p-5 backdrop-blur-sm">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.heroHook}
                  </p>
                </div>
              )}

              {/* Editorial Quote */}
              {service.quote && (
                <div className="mt-5 flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4">
                  <Quote className="mt-0.5 size-4 text-primary shrink-0 rotate-180" />
                  <p className="text-xs italic leading-relaxed text-foreground/90 font-medium">
                    &ldquo;{service.quote}&rdquo;
                  </p>
                </div>
              )}

              {/* Single CTA */}
              <div className="mt-8">
                <Button asChild size="lg" className="rounded-full shadow-soft">
                  <Link href="/contact" className="gap-2">
                    Book Strategy Consultation <ArrowUpRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </Reveal>

            {/* Right Side Visual & Proof */}
            <Reveal delay={0.1}>
              <div className="relative">
                <div className="absolute -right-4 -top-8 font-mono text-[clamp(5rem,12vw,9rem)] font-bold leading-none text-white/[0.04]">01</div>
                <AnimatedServiceIcon icon={service.icon} label={service.shortTitle} />
                <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  <span>{service.process.length} step workflow</span>
                  <span>Clear deliverables</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Key Proof Metrics Bar */}
          <Reveal delay={0.15} className="mt-14">
            <div className="grid grid-cols-2 gap-4 border-t border-border/60 pt-8 sm:grid-cols-4">
              <div className="rounded-xl border border-border/60 bg-card/40 p-4">
                <div className="text-2xl font-bold font-display text-foreground">4+ Years</div>
                <div className="text-xs text-muted-foreground mt-0.5">Technical Track Record</div>
              </div>
              <div className="rounded-xl border border-border/60 bg-card/40 p-4">
                <div className="text-2xl font-bold font-display text-foreground">50+ Projects</div>
                <div className="text-xs text-muted-foreground mt-0.5">Delivered Successfully</div>
              </div>
              <div className="rounded-xl border border-border/60 bg-card/40 p-4">
                <div className="text-2xl font-bold font-display text-foreground">৳15L+ Revenue</div>
                <div className="text-xs text-muted-foreground mt-0.5">Client Sales Generated</div>
              </div>
              <div className="rounded-xl border border-border/60 bg-card/40 p-4">
                <div className="text-2xl font-bold font-display text-foreground">100% In-House</div>
                <div className="text-xs text-muted-foreground mt-0.5">Zero Outsourced Fluff</div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
