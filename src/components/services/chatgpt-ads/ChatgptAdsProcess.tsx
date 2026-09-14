import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

export function ChatgptAdsProcess() {
  return (
    <section className="border-t border-border/60 bg-surface/30 py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Execution Methodology</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Four-Stage Execution Framework
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            A documented, repeatable methodology from initial discovery to live campaign scaling.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div key="Stage 1: Discovery & Regulatory Audit" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 01</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">Stage 1: Discovery & Regulatory Audit</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Evaluating company registration, target geographic footprint, and OpenAI platform access eligibility.</p>
            </div>
            <div key="Stage 2: Context-Hint & Creative Strategy" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 02</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">Stage 2: Context-Hint & Creative Strategy</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Developing conversational prompt personas, mapping user pain points, and writing persuasive ad assets.</p>
            </div>
            <div key="Stage 3: Account Infrastructure & Tracking" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 03</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">Stage 3: Account Infrastructure & Tracking</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Setting up server-side Conversions API, catalog feeds, and pre-launch testing environments.</p>
            </div>
            <div key="Stage 4: Optimization & GEO Amplification" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 04</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">Stage 4: Optimization & GEO Amplification</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Managing active bids, pruning irrelevant conversational contexts, and strengthening organic citation references.</p>
            </div>
        </div>
      </Container>
    </section>
  );
}
