import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

export function ChatgptAdsWhyItMatters() {
  return (
    <section className="border-t border-border/60 bg-surface/40 py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Strategic Context</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Why First-Mover Advantage in ChatGPT Ads Dictates Category Leadership
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Conversational search alters consumer discovery. Over 200 million active users engage ChatGPT with complex problem-solving queries, making high-intent conversational mentions more influential than static display banners.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div key="Informational to Transactional Bridge" className="rounded-xl border border-border/80 bg-card/60 p-6 backdrop-blur-sm">
              <span className="text-xs font-semibold text-primary">Strategic Advantage 1</span>
              <h3 className="mt-2 text-lg font-bold text-foreground font-display">Informational to Transactional Bridge</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Users consult ChatGPT when evaluating options; context-hints present your solution at the precise moment of intent.</p>
            </div>
            <div key="Zero-Click Query Capture" className="rounded-xl border border-border/80 bg-card/60 p-6 backdrop-blur-sm">
              <span className="text-xs font-semibold text-primary">Strategic Advantage 2</span>
              <h3 className="mt-2 text-lg font-bold text-foreground font-display">Zero-Click Query Capture</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">As standard web search clicks drop due to AI overviews, sponsored recommendations secure immediate visibility.</p>
            </div>
            <div key="Audience Exclusivity" className="rounded-xl border border-border/80 bg-card/60 p-6 backdrop-blur-sm">
              <span className="text-xs font-semibold text-primary">Strategic Advantage 3</span>
              <h3 className="mt-2 text-lg font-bold text-foreground font-display">Audience Exclusivity</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Targeting focuses on active Free and Go tier users actively researching products, avoiding saturated social feed blindness.</p>
            </div>
        </div>
      </Container>
    </section>
  );
}
