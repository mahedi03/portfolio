import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

export function PinterestAdsWhyItMatters() {
  return (
    <section className="border-t border-border/60 bg-surface/40 py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Strategic Context</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Why Pinterest Advertising Captures Buyers Other Platforms Miss
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Pinterest users come to the platform with open commercial intent. Over 80% of weekly pinners have made a purchase based on brand content they discovered on Pinterest. Furthermore, pins enjoy a longer lifespan than posts on any other social network.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div key="Planning Mindset with High Purchasing Power" className="rounded-xl border border-border/80 bg-card/60 p-6 backdrop-blur-sm">
              <span className="text-xs font-semibold text-primary">Strategic Advantage 1</span>
              <h3 className="mt-2 text-lg font-bold text-foreground font-display">Planning Mindset with High Purchasing Power</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Users save ideas weeks or months before major life events, holidays, home renovations, and gift shopping.</p>
            </div>
            <div key="Substantially Lower Cost Per Click" className="rounded-xl border border-border/80 bg-card/60 p-6 backdrop-blur-sm">
              <span className="text-xs font-semibold text-primary">Strategic Advantage 2</span>
              <h3 className="mt-2 text-lg font-bold text-foreground font-display">Substantially Lower Cost Per Click</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Because competition is lower than Google and Meta, Pinterest frequently delivers 30-50% lower CPCs in competitive niches.</p>
            </div>
            <div key="Compounding Long-Tail Traffic" className="rounded-xl border border-border/80 bg-card/60 p-6 backdrop-blur-sm">
              <span className="text-xs font-semibold text-primary">Strategic Advantage 3</span>
              <h3 className="mt-2 text-lg font-bold text-foreground font-display">Compounding Long-Tail Traffic</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Paid pins that accumulate organic repins continue driving free referral traffic and sales long after ad spend concludes.</p>
            </div>
        </div>
      </Container>
    </section>
  );
}
