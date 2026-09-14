import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function WebsiteMarketingPricing() {
  return (
    <section id="pricing" className="py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Transparent Investment</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Website Marketing Retainer Options
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Comprehensive monthly growth retainers tailored to the scale, tech stack, and competition level of your website.
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
              <tr key="Website Scale & Architecture" className="border-b border-border/50 transition-colors hover:bg-card/40">
                <td className="py-4 pr-4 font-medium text-foreground text-sm">Website Scale & Architecture</td>
                <td className="py-4 pl-4 text-sm text-muted-foreground leading-relaxed">Single-page landing pages versus 1,000+ page enterprise web applications and ecommerce stores.</td>
              </tr>
              <tr key="Scope of Integrated Disciplines" className="border-b border-border/50 transition-colors hover:bg-card/40">
                <td className="py-4 pr-4 font-medium text-foreground text-sm">Scope of Integrated Disciplines</td>
                <td className="py-4 pl-4 text-sm text-muted-foreground leading-relaxed">Technical SEO only versus full SEO + AEO/GEO + CRO + Local Business Profile management.</td>
              </tr>
              <tr key="Market Competition Level" className="border-b border-border/50 transition-colors hover:bg-card/40">
                <td className="py-4 pr-4 font-medium text-foreground text-sm">Market Competition Level</td>
                <td className="py-4 pl-4 text-sm text-muted-foreground leading-relaxed">Local city targeting versus highly contested national and international commercial keywords.</td>
              </tr>
              <tr key="Content Creation Bandwidth" className="border-b border-border/50 transition-colors hover:bg-card/40">
                <td className="py-4 pr-4 font-medium text-foreground text-sm">Content Creation Bandwidth</td>
                <td className="py-4 pl-4 text-sm text-muted-foreground leading-relaxed">Monthly editorial volume required to build defensible topical authority.</td>
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
