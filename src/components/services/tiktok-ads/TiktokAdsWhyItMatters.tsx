import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

export function TiktokAdsWhyItMatters() {
  return (
    <section className="border-t border-border/60 bg-surface/40 py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Strategic Context</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Why Traditional Advertising Fails on TikTok and What Works Instead
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            TikTok's algorithm prioritizes watch time, hook retention, and authentic emotion. Polished corporate commercials are swiped away in less than one second. Brands that succeed treat the platform like a creator, producing lo-fi, relatable, and entertaining demonstrations of value.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div key="The First 3-Second Hook Rule" className="rounded-xl border border-border/80 bg-card/60 p-6 backdrop-blur-sm">
              <span className="text-xs font-semibold text-primary">Strategic Advantage 1</span>
              <h3 className="mt-2 text-lg font-bold text-foreground font-display">The First 3-Second Hook Rule</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Over 63% of top-converting TikTok ads communicate their core offer or hook within the first 3 seconds of playback.</p>
            </div>
            <div key="High Buyer Purchasing Urgency" className="rounded-xl border border-border/80 bg-card/60 p-6 backdrop-blur-sm">
              <span className="text-xs font-semibold text-primary">Strategic Advantage 2</span>
              <h3 className="mt-2 text-lg font-bold text-foreground font-display">High Buyer Purchasing Urgency</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">The viral #TikTokMadeMeBuyIt phenomenon drives impulsive, immediate purchasing behavior unlike any other social platform.</p>
            </div>
            <div key="Significantly Lower CPMs" className="rounded-xl border border-border/80 bg-card/60 p-6 backdrop-blur-sm">
              <span className="text-xs font-semibold text-primary">Strategic Advantage 3</span>
              <h3 className="mt-2 text-lg font-bold text-foreground font-display">Significantly Lower CPMs</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">TikTok ad inventory often delivers lower CPMs and CPCs compared to mature Western ad networks like Meta and Google.</p>
            </div>
        </div>
      </Container>
    </section>
  );
}
