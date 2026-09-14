import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

export function WebsiteMarketingProcess() {
  return (
    <section className="border-t border-border/60 bg-surface/30 py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Execution Methodology</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Six-Stage Website Marketing Growth Framework
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            A disciplined, step-by-step roadmap from initial diagnostic audit to continuous monthly optimization.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div key="1. Free Comprehensive Website Audit" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 01</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">1. Free Comprehensive Website Audit</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Deep diagnostic review of technical health, page speed, current rankings, competitor gaps, and conversion roadblocks.</p>
            </div>
            <div key="2. Strategy & Commercial Keyword Roadmap" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 02</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">2. Strategy & Commercial Keyword Roadmap</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Mapping high-intent buyer keywords, AI query opportunities, and establishing topical cluster priorities.</p>
            </div>
            <div key="3. On-Page & Technical Code Optimization" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 03</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">3. On-Page & Technical Code Optimization</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Restructuring title tags, heading hierarchies, schema markup, Core Web Vitals, and internal linking.</p>
            </div>
            <div key="4. AEO & GEO Content Enhancement" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 04</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">4. AEO & GEO Content Enhancement</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Writing answer-first retrieval blocks, structured FAQs, and authority-building editorial sections.</p>
            </div>
            <div key="5. Authority Building & Local Optimization" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 05</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">5. Authority Building & Local Optimization</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Executing digital PR, local citation synchronization, Google Business Profile enhancement, and link acquisition.</p>
            </div>
            <div key="6. Monthly Performance Tracking & CRO Iteration" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 06</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">6. Monthly Performance Tracking & CRO Iteration</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Monitoring search console trends, user session recordings, conversion rates, and refining quarterly goals.</p>
            </div>
        </div>
      </Container>
    </section>
  );
}
