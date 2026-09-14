import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

export function CreativeContentWhyItMatters() {
  return (
    <section className="border-t border-border/60 bg-surface/40 py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Strategic Context</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Why Generic Copy Is the Hidden Bottleneck in Paid and Organic Acquisition
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Audiences have developed immunity to buzzword-laden copy and surface-level AI summaries. Brands that invest in original perspectives, specific data, and clear communication win search rank and customer trust.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div key="Search Engine Entity Recognition" className="rounded-xl border border-border/80 bg-card/60 p-6 backdrop-blur-sm">
              <span className="text-xs font-semibold text-primary">Strategic Advantage 1</span>
              <h3 className="mt-2 text-lg font-bold text-foreground font-display">Search Engine Entity Recognition</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Modern search algorithms prioritize content demonstrating verifiable first-party experience and comprehensive topical coverage.</p>
            </div>
            <div key="Lower Paid Ad Customer Acquisition Costs" className="rounded-xl border border-border/80 bg-card/60 p-6 backdrop-blur-sm">
              <span className="text-xs font-semibold text-primary">Strategic Advantage 2</span>
              <h3 className="mt-2 text-lg font-bold text-foreground font-display">Lower Paid Ad Customer Acquisition Costs</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Direct, high-empathy ad creative cuts through feed exhaustion, lifting click-through rates and reducing blended acquisition costs.</p>
            </div>
            <div key="Defensible Brand Authority" className="rounded-xl border border-border/80 bg-card/60 p-6 backdrop-blur-sm">
              <span className="text-xs font-semibold text-primary">Strategic Advantage 3</span>
              <h3 className="mt-2 text-lg font-bold text-foreground font-display">Defensible Brand Authority</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Clear, well-crafted messaging positions your company as the premier expert in your niche, making competitors appear commoditized.</p>
            </div>
        </div>
      </Container>
    </section>
  );
}
