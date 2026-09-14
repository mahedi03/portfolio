import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

export function LocalSeoProcess() {
  return (
    <section className="border-t border-border/60 bg-surface/30 py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Execution Methodology</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Six-Stage Local Ranking Architecture
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            A methodical system to take your business from hidden to prominent in local search results.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div key="1. Local SEO Audit & Competitor Scan" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 01</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">1. Local SEO Audit & Competitor Scan</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Analyzing local grid rankings, citation accuracy, category choices, and top competitors.</p>
            </div>
            <div key="2. GBP Complete Optimization" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 02</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">2. GBP Complete Optimization</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Refining primary and secondary business categories, descriptions, service menus, and attributes.</p>
            </div>
            <div key="3. On-Page Local Landing Page Engineering" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 03</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">3. On-Page Local Landing Page Engineering</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Developing hyper-targeted city and area pages with localized content and embedded map signals.</p>
            </div>
            <div key="4. Citation Building & Cleanup" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 04</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">4. Citation Building & Cleanup</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Submitting correct NAP data to leading directories, mapping platforms, and localized business portals.</p>
            </div>
            <div key="5. Reputation System Deployment" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 05</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">5. Reputation System Deployment</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Implementing an automated customer review collection workflow and review response strategy.</p>
            </div>
            <div key="6. Geo-Rank Monitoring & Iteration" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 06</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">6. Geo-Rank Monitoring & Iteration</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Tracking local keyword visibility on geo-grid maps and optimizing based on conversion actions.</p>
            </div>
        </div>
      </Container>
    </section>
  );
}
