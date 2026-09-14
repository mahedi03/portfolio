import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CreativeContentPricing() {
  return (
    <section id="pricing" className="py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Transparent Investment</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Content Investment Framework
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Engagements are scoped either as dedicated monthly editorial retainers or milestone-based project sprints depending on your volume requirements.
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
              <tr key="Content Complexity & Technical Research" className="border-b border-border/50 transition-colors hover:bg-card/40">
                <td className="py-4 pr-4 font-medium text-foreground text-sm">Content Complexity & Technical Research</td>
                <td className="py-4 pl-4 text-sm text-muted-foreground leading-relaxed">Specialized B2B, SaaS, or healthcare topics requiring clinical or technical precision.</td>
              </tr>
              <tr key="Deliverable Volume & Publishing Cadence" className="border-b border-border/50 transition-colors hover:bg-card/40">
                <td className="py-4 pr-4 font-medium text-foreground text-sm">Deliverable Volume & Publishing Cadence</td>
                <td className="py-4 pl-4 text-sm text-muted-foreground leading-relaxed">Scale of monthly articles, video scripts, or email sequences.</td>
              </tr>
              <tr key="Design & Production Support" className="border-b border-border/50 transition-colors hover:bg-card/40">
                <td className="py-4 pr-4 font-medium text-foreground text-sm">Design & Production Support</td>
                <td className="py-4 pl-4 text-sm text-muted-foreground leading-relaxed">Optional visual asset creation, custom diagrams, or social carousel design.</td>
              </tr>
              <tr key="Turnaround Speed" className="border-b border-border/50 transition-colors hover:bg-card/40">
                <td className="py-4 pr-4 font-medium text-foreground text-sm">Turnaround Speed</td>
                <td className="py-4 pl-4 text-sm text-muted-foreground leading-relaxed">Standard 5-day delivery versus expedited sprint turnarounds.</td>
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
