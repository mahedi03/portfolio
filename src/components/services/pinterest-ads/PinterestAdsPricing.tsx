import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function PinterestAdsPricing() {
  return (
    <section id="pricing" className="py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Transparent Investment</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Pinterest Management Investment Structure
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Monthly management retainers based on ad spend volume and product catalog size.
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
              <tr key="Monthly Advertising Budget" className="border-b border-border/50 transition-colors hover:bg-card/40">
                <td className="py-4 pr-4 font-medium text-foreground text-sm">Monthly Advertising Budget</td>
                <td className="py-4 pl-4 text-sm text-muted-foreground leading-relaxed">Recommended minimum of $1,000/month for active audience testing and catalog scaling.</td>
              </tr>
              <tr key="Creative Production Needs" className="border-b border-border/50 transition-colors hover:bg-card/40">
                <td className="py-4 pr-4 font-medium text-foreground text-sm">Creative Production Needs</td>
                <td className="py-4 pl-4 text-sm text-muted-foreground leading-relaxed">Providing ready vertical assets versus requiring our team to design custom 2:3 pin graphics.</td>
              </tr>
              <tr key="Catalog Size & Feed Complexity" className="border-b border-border/50 transition-colors hover:bg-card/40">
                <td className="py-4 pr-4 font-medium text-foreground text-sm">Catalog Size & Feed Complexity</td>
                <td className="py-4 pl-4 text-sm text-muted-foreground leading-relaxed">Managing a curated 20-product boutique versus a multi-thousand SKU catalog.</td>
              </tr>
              <tr key="Seasonal Campaign Scaling" className="border-b border-border/50 transition-colors hover:bg-card/40">
                <td className="py-4 pr-4 font-medium text-foreground text-sm">Seasonal Campaign Scaling</td>
                <td className="py-4 pl-4 text-sm text-muted-foreground leading-relaxed">Quarterly planning and intensive budget surges for Q4 holiday and Black Friday sales.</td>
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
