import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

export function PinterestAdsProcess() {
  return (
    <section className="border-t border-border/60 bg-surface/30 py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Execution Methodology</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Five-Stage Pinterest Campaign Execution
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            From initial account audit to full catalog shopping deployment and scaling.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div key="1. Account Audit & Audience Assessment" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 01</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">1. Account Audit & Audience Assessment</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Evaluating brand fit, competitor pin performance, website tracking readiness, and seasonal opportunities.</p>
            </div>
            <div key="2. Campaign Strategy & Keyword Mapping" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 02</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">2. Campaign Strategy & Keyword Mapping</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Mapping primary search queries, interest clusters, and designing the creative specifications brief.</p>
            </div>
            <div key="3. Campaign Setup & Tag Integration" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 03</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">3. Campaign Setup & Tag Integration</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Building conversion campaigns, setting up standard and video pins, and validating the Pinterest Tag.</p>
            </div>
            <div key="4. Monitoring, Bid Tuning & Pruning" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 04</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">4. Monitoring, Bid Tuning & Pruning</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Analyzing search term performance, pausing low-converting pins, and scaling winning creative assets.</p>
            </div>
            <div key="5. Reporting & Long-Tail Analysis" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 05</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">5. Reporting & Long-Tail Analysis</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Tracking paid ROAS, earned organic save traffic, and adjusting strategy for upcoming seasonal peaks.</p>
            </div>
        </div>
      </Container>
    </section>
  );
}
