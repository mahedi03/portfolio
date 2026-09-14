import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

export function SocialMediaManagementWhyItMatters() {
  return (
    <section className="border-t border-border/60 bg-surface/40 py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Strategic Context</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Why Inconsistent Social Media Activity Silently Destroys Brand Credibility
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            When prospective clients research your company, they check your social channels before making contact. An abandoned page or sporadic, low-effort posts signal stagnation and lack of professionalism, pushing buyers directly into the hands of active competitors.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div key="Immediate Trust & Due Diligence Validation" className="rounded-xl border border-border/80 bg-card/60 p-6 backdrop-blur-sm">
              <span className="text-xs font-semibold text-primary">Strategic Advantage 1</span>
              <h3 className="mt-2 text-lg font-bold text-foreground font-display">Immediate Trust & Due Diligence Validation</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Active profiles with responsive customer interaction prove that your business is thriving, reliable, and attentive to clients.</p>
            </div>
            <div key="Bilingual Market Engagement" className="rounded-xl border border-border/80 bg-card/60 p-6 backdrop-blur-sm">
              <span className="text-xs font-semibold text-primary">Strategic Advantage 2</span>
              <h3 className="mt-2 text-lg font-bold text-foreground font-display">Bilingual Market Engagement</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">In markets like Bangladesh, authentic bilingual communication (Bangla and English) dramatically expands customer resonance.</p>
            </div>
            <div key="Compound Organic Brand Equity" className="rounded-xl border border-border/80 bg-card/60 p-6 backdrop-blur-sm">
              <span className="text-xs font-semibold text-primary">Strategic Advantage 3</span>
              <h3 className="mt-2 text-lg font-bold text-foreground font-display">Compound Organic Brand Equity</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Consistent editorial publishing builds an engaged, loyal audience that drives zero-cost referral sales and inquiries over time.</p>
            </div>
        </div>
      </Container>
    </section>
  );
}
