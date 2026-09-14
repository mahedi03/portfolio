import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

export function MediaBuyingProcess() {
  return (
    <section className="border-t border-border/60 bg-surface/30 py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Execution Methodology</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Six-Stage Media Buying Framework
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            A scientific methodology to deploy, validate, and scale your advertising capital.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div key="1. Discovery & Performance Audit" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 01</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">1. Discovery & Performance Audit</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Reviewing historical ad account data, unit economics, target CAC, and customer demographics.</p>
            </div>
            <div key="2. Platform & Channel Selection" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 02</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">2. Platform & Channel Selection</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Determining the optimal channel distribution based on where your buyers congregate and convert.</p>
            </div>
            <div key="3. Media Plan & Budget Modeling" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 03</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">3. Media Plan & Budget Modeling</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Drafting a detailed budget allocation plan with projected milestones and testing parameters.</p>
            </div>
            <div key="4. Campaign Setup & Tracking Launch" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 04</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">4. Campaign Setup & Tracking Launch</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Configuring server-side pixels, conversions APIs, custom audiences, and launching initial creative tests.</p>
            </div>
            <div key="5. Active Optimization & Bid Tuning" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 05</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">5. Active Optimization & Bid Tuning</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Reallocating daily spend toward top-performing ad sets, pausing fatigue creative, and tuning bids.</p>
            </div>
            <div key="6. Strategic Review & Scaling" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 06</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">6. Strategic Review & Scaling</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Analyzing blended acquisition metrics and scaling budgets into validated winning campaigns.</p>
            </div>
        </div>
      </Container>
    </section>
  );
}
