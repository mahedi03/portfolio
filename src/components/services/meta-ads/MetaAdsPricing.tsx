import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function MetaAdsPricing() {
  return (
    <section id="pricing" className="py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Transparent Investment</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Meta Ads Management Investment
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Monthly management fees are structured transparently based on your monthly ad spend and creative testing requirements.
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
              <tr key="Monthly Media Spend" className="border-b border-border/50 transition-colors hover:bg-card/40">
                <td className="py-4 pr-4 font-medium text-foreground text-sm">Monthly Media Spend</td>
                <td className="py-4 pl-4 text-sm text-muted-foreground leading-relaxed">Managing $2,000/month versus scaling $30,000/month with high daily budget velocity.</td>
              </tr>
              <tr key="Weekly Creative Testing Volume" className="border-b border-border/50 transition-colors hover:bg-card/40">
                <td className="py-4 pr-4 font-medium text-foreground text-sm">Weekly Creative Testing Volume</td>
                <td className="py-4 pl-4 text-sm text-muted-foreground leading-relaxed">Testing 3 new creative concepts weekly versus high-frequency 10+ variant testing programs.</td>
              </tr>
              <tr key="Catalog & Feed Complexity" className="border-b border-border/50 transition-colors hover:bg-card/40">
                <td className="py-4 pr-4 font-medium text-foreground text-sm">Catalog & Feed Complexity</td>
                <td className="py-4 pl-4 text-sm text-muted-foreground leading-relaxed">Standard lead generation setup versus dynamic multi-thousand SKU ecommerce product catalogs.</td>
              </tr>
              <tr key="International Market Targeting" className="border-b border-border/50 transition-colors hover:bg-card/40">
                <td className="py-4 pr-4 font-medium text-foreground text-sm">International Market Targeting</td>
                <td className="py-4 pl-4 text-sm text-muted-foreground leading-relaxed">Single-country domestic targeting versus multi-country localized ad accounts.</td>
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
