import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

export function LocalSeoWhyItMatters() {
  return (
    <section className="border-t border-border/60 bg-surface/40 py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Strategic Context</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Why the Google Map Pack Captures Over 44% of All Local Clicks
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            When customers search for immediate services, Google displays the Local 3-Pack above standard organic results. If your business is not in the top 3 map positions, your direct competitors take almost all high-intent phone calls and enquiries.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div key="Near Me Search Surge" className="rounded-xl border border-border/80 bg-card/60 p-6 backdrop-blur-sm">
              <span className="text-xs font-semibold text-primary">Strategic Advantage 1</span>
              <h3 className="mt-2 text-lg font-bold text-foreground font-display">Near Me Search Surge</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Mobile searches with local commercial intent convert at over 28% within 24 hours of the query.</p>
            </div>
            <div key="Direct Call & Direction Actions" className="rounded-xl border border-border/80 bg-card/60 p-6 backdrop-blur-sm">
              <span className="text-xs font-semibold text-primary">Strategic Advantage 2</span>
              <h3 className="mt-2 text-lg font-bold text-foreground font-display">Direct Call & Direction Actions</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Google Map pack listings allow prospects to call or request navigation directions with a single screen tap.</p>
            </div>
            <div key="Trust and Social Proof" className="rounded-xl border border-border/80 bg-card/60 p-6 backdrop-blur-sm">
              <span className="text-xs font-semibold text-primary">Strategic Advantage 3</span>
              <h3 className="mt-2 text-lg font-bold text-foreground font-display">Trust and Social Proof</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Star ratings and verified reviews displayed in map rankings establish immediate authority over unranked competitors.</p>
            </div>
        </div>
      </Container>
    </section>
  );
}
