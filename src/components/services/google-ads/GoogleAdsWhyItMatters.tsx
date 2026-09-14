import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

export function GoogleAdsWhyItMatters() {
  return (
    <section className="border-t border-border/60 bg-surface/40 py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Strategic Context</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Why Most Google Ads Accounts Burn 40% of Their Budget on Junk Searches
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Google's default campaign settings are designed to maximize Google's ad revenue, not your profit. Broad match expansion and automated suggestions push spend into low-intent informational queries unless actively controlled.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div key="Capturing Immediate Buyer Intent" className="rounded-xl border border-border/80 bg-card/60 p-6 backdrop-blur-sm">
              <span className="text-xs font-semibold text-primary">Strategic Advantage 1</span>
              <h3 className="mt-2 text-lg font-bold text-foreground font-display">Capturing Immediate Buyer Intent</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Unlike social media where users browse passively, Google searchers actively seek solutions and are ready to transact.</p>
            </div>
            <div key="Predictable Customer Acquisition Cost" className="rounded-xl border border-border/80 bg-card/60 p-6 backdrop-blur-sm">
              <span className="text-xs font-semibold text-primary">Strategic Advantage 2</span>
              <h3 className="mt-2 text-lg font-bold text-foreground font-display">Predictable Customer Acquisition Cost</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Structured bidding targets realistic customer acquisition costs, giving your business reliable financial predictability.</p>
            </div>
            <div key="First-Party Data Reinforcement" className="rounded-xl border border-border/80 bg-card/60 p-6 backdrop-blur-sm">
              <span className="text-xs font-semibold text-primary">Strategic Advantage 3</span>
              <h3 className="mt-2 text-lg font-bold text-foreground font-display">First-Party Data Reinforcement</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Enhanced conversions and customer match lists train Google's machine learning on your highest-value customers.</p>
            </div>
        </div>
      </Container>
    </section>
  );
}
