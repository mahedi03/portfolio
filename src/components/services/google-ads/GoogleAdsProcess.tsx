import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

export function GoogleAdsProcess() {
  return (
    <section className="border-t border-border/60 bg-surface/30 py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Execution Methodology</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Systematic 4-Step PPC Growth Process
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            A disciplined workflow designed to extract maximum value from every dollar spent on Google.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div key="1. Account Audit & Tracking Validation" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 01</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">1. Account Audit & Tracking Validation</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Auditing search term waste, Quality Scores, conversion accuracy, and competitor pressure.</p>
            </div>
            <div key="2. Intent Architecture & Keyword Modeling" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 02</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">2. Intent Architecture & Keyword Modeling</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Structuring campaigns around customer intent tiers, negative lists, and high-converting commercial keywords.</p>
            </div>
            <div key="3. Campaign Build & Ad Copy Production" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 03</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">3. Campaign Build & Ad Copy Production</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Creating high-CTR responsive ads, ad assets (sitelinks, callouts), and setting up bidding rules.</p>
            </div>
            <div key="4. Daily Monitoring, Bid Tuning & Scaling" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 04</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">4. Daily Monitoring, Bid Tuning & Scaling</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Pruning wasteful search terms, testing ad copy variations, and scaling budget into winning themes.</p>
            </div>
        </div>
      </Container>
    </section>
  );
}
