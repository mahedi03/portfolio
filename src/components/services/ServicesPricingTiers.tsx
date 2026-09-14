import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, ShieldAlert, Sparkles } from "lucide-react";
import { adSpendPricingTiers } from "@/data/services";

export function ServicesPricingTiers() {
  return (
    <section className="border-t border-border/80 bg-surface/50 py-20 lg:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Badge variant="outline" className="gap-2 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <Sparkles className="size-3.5 text-primary" />
              Transparent Pricing Structure
            </Badge>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="mt-4 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
              Paid Media Management Tiers
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              No hidden fees, no percentage markups on ad spend. You pay the exact ad platform invoice directly,
              paired with our transparent, tier-based performance management fee.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {adSpendPricingTiers.map((tier, idx) => (
            <Reveal key={tier.tier} delay={idx * 0.08} className="h-full">
              <div
                className={`relative flex h-full flex-col justify-between rounded-xl border p-7 transition-all ${
                  tier.popular
                    ? "border-primary bg-card shadow-elevated ring-1 ring-primary/40"
                    : "border-border bg-card/70 hover:border-border/80 shadow-soft"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <div>
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-xl font-bold font-display text-foreground">{tier.tier}</h3>
                    <span className="text-2xl font-extrabold text-primary">{tier.fee}</span>
                  </div>

                  <p className="mt-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Monthly Ad Spend: <span className="font-semibold text-foreground">{tier.range}</span>
                  </p>

                  <div className="mt-3 rounded-md bg-muted/60 px-3 py-2 text-xs text-muted-foreground">
                    {tier.example}
                  </div>

                  <hr className="my-6 border-border/70" />

                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-xs text-foreground/90">
                        <Check className="size-4 shrink-0 text-emerald-500 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <Button
                    asChild
                    variant={tier.popular ? "primary" : "outline"}
                    className="w-full gap-2 text-xs font-semibold"
                  >
                    <Link href={`/contact?plan=${tier.tier.toLowerCase()}`}>
                      Get Started with {tier.tier}
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.25}>
          <div className="mt-10 flex items-center justify-center gap-2 rounded-lg border border-border/60 bg-card/40 px-4 py-3 text-xs text-muted-foreground">
            <ShieldAlert className="size-4 text-amber-500 shrink-0" />
            <span>
              All campaign setups include complete tracking verification, Meta Pixel / CAPI configuration, and Google Analytics 4 integration.
            </span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
