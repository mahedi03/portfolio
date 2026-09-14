import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function GoogleAdsPricing() {
  return (
    <section id="pricing" className="py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Transparent Investment</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            PPC Management Pricing & Fee Structure
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Management fees are structured as a flat monthly retainer or a hybrid base fee plus a transparent percentage of ad spend for scaled accounts.
          </p>
        </Reveal>

        <div className="mt-10 overflow-hidden rounded-2xl border border-border/80 bg-card/50 p-6 md:p-8 backdrop-blur-sm">
          <h3 className="text-lg font-bold font-display text-foreground">Core Scope & Pricing Factors</h3>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border text-xs uppercase tracking-wider text-muted-foreground">
                  <th className="pb-3 pr-4 font-semibold">Scope Factor</th>
                  <th className="pb-3 pl-4 font-semibold">Impact on Investment</th>
                </tr>
              </thead>
              <tbody>
              <tr key="Monthly Ad Spend Volume" className="border-b border-border/50 transition-colors hover:bg-card/40">
                <td className="py-4 pr-4 font-medium text-foreground text-sm">Monthly Ad Spend Volume</td>
                <td className="py-4 pl-4 text-sm text-muted-foreground leading-relaxed">Campaigns spending $1,000/mo vs $20,000/mo require different operational bandwidth and testing frequency.</td>
              </tr>
              <tr key="Channel Breadth" className="border-b border-border/50 transition-colors hover:bg-card/40">
                <td className="py-4 pr-4 font-medium text-foreground text-sm">Channel Breadth</td>
                <td className="py-4 pl-4 text-sm text-muted-foreground leading-relaxed">Search-only vs multi-network Search, Performance Max, YouTube, and Display combinations.</td>
              </tr>
              <tr key="Tracking Architecture" className="border-b border-border/50 transition-colors hover:bg-card/40">
                <td className="py-4 pr-4 font-medium text-foreground text-sm">Tracking Architecture</td>
                <td className="py-4 pl-4 text-sm text-muted-foreground leading-relaxed">Standard web tracking versus complex offline CRM lead status synchronizations.</td>
              </tr>
              <tr key="Creative & Landing Page Scope" className="border-b border-border/50 transition-colors hover:bg-card/40">
                <td className="py-4 pr-4 font-medium text-foreground text-sm">Creative & Landing Page Scope</td>
                <td className="py-4 pl-4 text-sm text-muted-foreground leading-relaxed">Including dedicated landing page design and custom video asset production.</td>
              </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-xl border border-primary/20 bg-primary/5 p-6 sm:flex-row sm:items-center">
            <div>
              <h4 className="font-semibold text-foreground">Free Discovery & Scope Audit</h4>
              <p className="mt-1 text-sm text-muted-foreground">We review your accounts and goals before quoting, guaranteeing you only pay for what directly generates results.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              Request Custom Quote <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
