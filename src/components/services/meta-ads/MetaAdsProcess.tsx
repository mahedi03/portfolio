import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

export function MetaAdsProcess() {
  return (
    <section className="border-t border-border/60 bg-surface/30 py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Execution Methodology</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Six-Stage Meta Advertising Playbook
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            A tested process to take your ad account from inconsistent results to predictable, scalable profitability.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div key="1. Account & Pixel Infrastructure Audit" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 01</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">1. Account & Pixel Infrastructure Audit</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Checking event match quality, pixel health, domain verification, and historical campaign efficiency.</p>
            </div>
            <div key="2. Audience & Avatar Strategy" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 02</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">2. Audience & Avatar Strategy</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Defining cold prospecting audiences, customer match lists, and high-intent engagement retargeting pools.</p>
            </div>
            <div key="3. Creative Production & Hook Ideation" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 03</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">3. Creative Production & Hook Ideation</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Drafting persuasive copy angles, designing visual assets, and preparing video hooks for testing.</p>
            </div>
            <div key="4. Campaign Build & Launch" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 04</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">4. Campaign Build & Launch</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Deploying isolated testing campaigns alongside consolidated Advantage+ scaling campaigns.</p>
            </div>
            <div key="5. Algorithmic Optimization & Bid Tuning" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 05</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">5. Algorithmic Optimization & Bid Tuning</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Monitoring cost per purchase, ROAS, and frequency daily to prune losers and scale winning assets.</p>
            </div>
            <div key="6. Scaling & Retargeting Expansion" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 06</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">6. Scaling & Retargeting Expansion</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Increasing budgets systematically by 15-20% on winning ad sets and expanding retargeting sequences.</p>
            </div>
        </div>
      </Container>
    </section>
  );
}
