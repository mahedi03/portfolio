import Link from "next/link";
import type { Service } from "@/types";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export function ServicePricing({ service }: { service: Service }) {
  const packages = service.pricingPackages;

  return (
    <section id="pricing" className="py-14 sm:py-20 lg:py-24">
      <Container className="max-w-6xl">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Transparent Investment
          </p>
          <h2 className="mt-3 text-2xl sm:text-4xl font-display font-black tracking-tight text-white uppercase">
            /{service.shortTitle} PACKAGES
          </h2>
          <p className="mt-3 text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground">
            Clear scope, deliverables, and pricing agreed upfront before any work begins.
          </p>
        </Reveal>

        {packages && packages.length > 0 ? (
          <div className={`mt-10 grid gap-5 ${packages.length === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"}`}>
            {packages.map((pkg, idx) => (
              <Reveal key={pkg.name || idx} delay={idx * 0.05}>
                <div
                  className={`relative flex h-full flex-col justify-between rounded-2xl border p-6 sm:p-7 backdrop-blur-md transition-all ${
                    pkg.recommended
                      ? "border-white/40 bg-surface/90 shadow-elevated"
                      : "border-white/10 bg-card/70 hover:border-white/25"
                  }`}
                >
                  {pkg.recommended && (
                    <span className="absolute -top-3 left-6 rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black">
                      Most Popular
                    </span>
                  )}
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">{pkg.name}</h3>
                    <div className="mt-3 flex items-baseline gap-1">
                      <span className="text-2xl sm:text-3xl font-black font-display text-white">
                        {pkg.price || "Custom Quote"}
                      </span>
                      {pkg.period && <span className="text-xs text-muted-foreground">/{pkg.period}</span>}
                    </div>
                    {pkg.description && (
                      <p className="mt-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {pkg.description}
                      </p>
                    )}
                    <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-5">
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90">
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-400" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8">
                    <Link
                      href="/contact"
                      className={`inline-flex w-full items-center justify-center gap-2 rounded-full py-3 text-xs sm:text-sm font-semibold transition-all ${
                        pkg.recommended
                          ? "bg-white text-black hover:bg-white/90"
                          : "border border-border bg-background/60 text-white hover:border-white/40 hover:bg-surface"
                      }`}
                    >
                      <span>Select Plan</span>
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delay={0.1} className="mt-10 rounded-3xl border border-white/10 bg-surface/60 p-6 sm:p-8 backdrop-blur-md">
            <h3 className="text-xl font-display font-bold text-white">Custom Scope &amp; Transparent Quote</h3>
            <p className="mt-2 max-w-2xl text-sm sm:text-base leading-relaxed text-muted-foreground">
              Every project is scoped around your exact business goals, current technical baseline, and timeline so you never pay for bloated deliverables you don&apos;t need.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all hover:scale-105 hover:bg-white/90"
            >
              <span>Request a Custom Scope</span>
              <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        )}

        {/* Discovery Audit Strip */}
        <Reveal delay={0.15} className="mt-8">
          <div className="flex flex-col items-start justify-between gap-5 rounded-3xl border border-primary/25 bg-gradient-to-r from-primary/10 via-primary/5 to-surface/60 p-6 sm:p-8 sm:flex-row sm:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Pre-Engagement Audit
              </span>
              <h4 className="mt-1 text-lg sm:text-xl font-display font-bold text-white">
                Free Discovery &amp; Viability Review
              </h4>
              <p className="mt-1.5 text-sm text-muted-foreground max-w-2xl leading-relaxed">
                Before any retainer or build starts, I review your current site, tracking, or ad account to confirm where the highest-leverage opportunity actually is.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all hover:scale-105 hover:bg-white/90"
            >
              <span>Request Free Audit</span>
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
