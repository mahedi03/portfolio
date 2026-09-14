import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

export function MediaBuyingWhyItMatters() {
  return (
    <section className="border-t border-border/60 bg-surface/40 py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Strategic Context</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Why Relying on a Single Ad Channel Is the Biggest Risk to Your Business
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Algorithm updates, unexpected account flags, or sudden ad cost spikes on a single platform can paralyze your revenue overnight. Diversifying your acquisition across search and social channels creates a resilient growth engine.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div key="Blended Customer Acquisition Efficiency" className="rounded-xl border border-border/80 bg-card/60 p-6 backdrop-blur-sm">
              <span className="text-xs font-semibold text-primary">Strategic Advantage 1</span>
              <h3 className="mt-2 text-lg font-bold text-foreground font-display">Blended Customer Acquisition Efficiency</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Prospects who encounter your brand on social media and subsequently convert on Google Search yield lower overall acquisition costs.</p>
            </div>
            <div key="Protection from Platform Volatility" className="rounded-xl border border-border/80 bg-card/60 p-6 backdrop-blur-sm">
              <span className="text-xs font-semibold text-primary">Strategic Advantage 2</span>
              <h3 className="mt-2 text-lg font-bold text-foreground font-display">Protection from Platform Volatility</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Multi-channel media distribution protects your company from unexpected platform policy shifts or account restrictions.</p>
            </div>
            <div key="Audience Intent Harmonization" className="rounded-xl border border-border/80 bg-card/60 p-6 backdrop-blur-sm">
              <span className="text-xs font-semibold text-primary">Strategic Advantage 3</span>
              <h3 className="mt-2 text-lg font-bold text-foreground font-display">Audience Intent Harmonization</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Matching creative formats to platform intent—visual inspiration on Pinterest, entertainment on TikTok, immediate solutions on Google.</p>
            </div>
        </div>
      </Container>
    </section>
  );
}
