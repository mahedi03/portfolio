import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

export function WebsiteMarketingWhyItMatters() {
  return (
    <section className="border-t border-border/60 bg-surface/40 py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Strategic Context</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Why Modern Website Marketing Requires SEO, AEO, and CRO Working in Harmony
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Consumer search behavior has split. Some users search Google; others query ChatGPT or Perplexity; others browse social feeds. When traffic lands on your website, it must convert immediately. Marketing your website requires aligning the entire discovery-to-transaction pipeline.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div key="The Zero-Click Search Shift" className="rounded-xl border border-border/80 bg-card/60 p-6 backdrop-blur-sm">
              <span className="text-xs font-semibold text-primary">Strategic Advantage 1</span>
              <h3 className="mt-2 text-lg font-bold text-foreground font-display">The Zero-Click Search Shift</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">AI answers are absorbing informational queries. Modern websites must optimize for both direct citations (AEO/GEO) and commercial search terms.</p>
            </div>
            <div key="Eliminating Wasted Website Investment" className="rounded-xl border border-border/80 bg-card/60 p-6 backdrop-blur-sm">
              <span className="text-xs font-semibold text-primary">Strategic Advantage 2</span>
              <h3 className="mt-2 text-lg font-bold text-foreground font-display">Eliminating Wasted Website Investment</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">An unmarketed website generates zero return. Strategic marketing transforms your web asset into a 24/7 business development engine.</p>
            </div>
            <div key="Compound Traffic Value" className="rounded-xl border border-border/80 bg-card/60 p-6 backdrop-blur-sm">
              <span className="text-xs font-semibold text-primary">Strategic Advantage 3</span>
              <h3 className="mt-2 text-lg font-bold text-foreground font-display">Compound Traffic Value</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Unlike paid advertising that stops the moment ad spend halts, an optimized search and citation foundation continues generating qualified organic leads indefinitely.</p>
            </div>
        </div>
      </Container>
    </section>
  );
}
