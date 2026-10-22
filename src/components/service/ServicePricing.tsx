import type { Service } from "@/types";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import Link from "next/link";
import { ArrowUpRight, DollarSign, CheckCircle2 } from "lucide-react";

export function ServicePricing({ service }: { service: Service }) {
  const packages = service.pricingPackages;

  return (
    <section id="pricing" className="py-20 lg:py-28 border-t border-border/60 bg-gradient-to-b from-background via-surface/30 to-background">
      <Container className="max-w-6xl">
        <Reveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <DollarSign className="size-3.5" />
            Transparent Packages
          </div>
          <h2 className="mt-4 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            {service.shortTitle} Packages
          </h2>
          <p className="mt-3 text-[length:var(--text-body-lg)] leading-relaxed text-muted-foreground">
            Choose the package that best fits your goals. Each package defines the included scope, deliverables, and investment clearly before work begins.
          </p>
        </Reveal>

        {packages && packages.length > 0 ? (
          <div className={`mt-12 grid gap-6 ${packages.length === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"}`}>
            {packages.map((pkg, idx) => (
              <Reveal key={pkg.name || idx} delay={idx * 0.05}>
                <div className={`relative flex h-full flex-col justify-between rounded-2xl border p-7 backdrop-blur-sm transition-all ${
                  pkg.recommended 
                    ? "border-primary bg-card/90 shadow-elevated" 
                    : "border-border/80 bg-card/50 hover:border-border"
                }`}>
                  {pkg.recommended && (
                    <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-foreground">
                      Most Popular
                    </span>
                  )}
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">{pkg.name}</h3>
                    <div className="mt-3 flex items-baseline gap-1">
                      <span className="text-2xl font-bold font-display text-foreground">{pkg.price || "Custom Quote"}</span>
                      {pkg.period && <span className="text-xs text-muted-foreground">/{pkg.period}</span>}
                    </div>
                    {pkg.description && (
                      <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{pkg.description}</p>
                    )}
                    <ul className="mt-6 space-y-2.5 border-t border-border/50 pt-5">
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs text-foreground/90">
                          <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-emerald-500" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8">
                    <Link
                      href="/contact"
                      className={`inline-flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-semibold transition-all ${
                        pkg.recommended
                          ? "bg-primary text-primary-foreground hover:bg-primary/90"
                          : "border border-border bg-card text-foreground hover:bg-surface"
                      }`}
                    >
                      Select Plan <ArrowUpRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delay={0.1} className="mt-12 rounded-2xl border border-border/80 bg-card/60 p-7 backdrop-blur-sm">
            <h3 className="text-lg font-bold font-display text-foreground">Custom Package</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              We will shape the package around your goals, required deliverables, and timeline during the discovery call.
            </p>
            <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground hover:bg-primary/90">
              Build My Package <ArrowUpRight className="size-3.5" />
            </Link>
          </Reveal>
        )}

        {/* Discovery Audit Guarantee Card */}
        <Reveal delay={0.2} className="mt-8">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-primary/25 bg-gradient-to-r from-primary/10 via-primary/5 to-surface/40 p-6 md:p-8 sm:flex-row sm:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Pre-Engagement Verification</span>
              <h4 className="mt-1 text-lg font-bold font-display text-foreground">Free Discovery &amp; Scope Audit</h4>
              <p className="mt-1 text-sm text-muted-foreground max-w-2xl leading-relaxed">
                Before quoting any retainer or project build, we perform an initial technical or advertising audit to verify viability and guarantee you only pay for what directly produces return.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
            >
              Request Custom Audit <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
