import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

export function TiktokAdsProcess() {
  return (
    <section className="border-t border-border/60 bg-surface/30 py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Execution Methodology</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Six-Stage TikTok Growth Architecture
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            A systematic methodology to launch, validate, and scale your TikTok ad spend.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div key="1. Brand & Audience Readiness Audit" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 01</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">1. Brand & Audience Readiness Audit</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Evaluating website mobile speed, product pricing, creative assets, and TikTok platform suitability.</p>
            </div>
            <div key="2. Campaign Strategy & Creative Ideation" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 02</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">2. Campaign Strategy & Creative Ideation</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Scripting native video hooks, mapping competitor angles, and defining initial testing objectives.</p>
            </div>
            <div key="3. Pixel & Events API Technical Setup" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 03</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">3. Pixel & Events API Technical Setup</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Installing the TikTok Pixel and server-side Events API to track conversions accurately from day one.</p>
            </div>
            <div key="4. Creative Production & Launch" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 04</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">4. Creative Production & Launch</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Producing vertical 9:16 video ads and launching structured testing ad groups.</p>
            </div>
            <div key="5. Daily Monitoring & Fast Optimization" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 05</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">5. Daily Monitoring & Fast Optimization</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Evaluating 3-second hook rates, click-through rates, and pausing underperforming creative within 48 hours.</p>
            </div>
            <div key="6. Scaling Winning Creative & Budget Expansion" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 06</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">6. Scaling Winning Creative & Budget Expansion</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Scaling budget into winning creative angles, testing Spark Ads, and expanding lookalike audiences.</p>
            </div>
        </div>
      </Container>
    </section>
  );
}
