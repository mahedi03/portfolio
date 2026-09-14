import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

export function MetaAdsWhyItMatters() {
  return (
    <section className="border-t border-border/60 bg-surface/40 py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Strategic Context</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Why Meta Ads Remains the Premier Scalable Paid Acquisition Channel
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            With over 3 billion active users across Facebook and Instagram, Meta offers unparalleled audience scale. The algorithm's predictive capability can find your ideal customers anywhere in the world—provided you feed it high-converting creative and accurate conversion data.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div key="Unmatched Audience Reach" className="rounded-xl border border-border/80 bg-card/60 p-6 backdrop-blur-sm">
              <span className="text-xs font-semibold text-primary">Strategic Advantage 1</span>
              <h3 className="mt-2 text-lg font-bold text-foreground font-display">Unmatched Audience Reach</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Facebook and Instagram offer the deepest consumer behavioral graph in digital advertising history.</p>
            </div>
            <div key="Algorithmic Broad Targeting" className="rounded-xl border border-border/80 bg-card/60 p-6 backdrop-blur-sm">
              <span className="text-xs font-semibold text-primary">Strategic Advantage 2</span>
              <h3 className="mt-2 text-lg font-bold text-foreground font-display">Algorithmic Broad Targeting</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Meta's AI excels at finding buyers within broad audiences when guided by creative that speaks directly to customer pain points.</p>
            </div>
            <div key="Visual Storytelling Formats" className="rounded-xl border border-border/80 bg-card/60 p-6 backdrop-blur-sm">
              <span className="text-xs font-semibold text-primary">Strategic Advantage 3</span>
              <h3 className="mt-2 text-lg font-bold text-foreground font-display">Visual Storytelling Formats</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Full-screen Instagram Reels and interactive carousel formats allow immersive demonstration of product value.</p>
            </div>
        </div>
      </Container>
    </section>
  );
}
