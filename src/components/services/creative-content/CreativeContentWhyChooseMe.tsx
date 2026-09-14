import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

export function CreativeContentWhyChooseMe() {
  return (
    <section className="py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Founder & Consultant Positioning</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Why Work With Mahedi Hasan for Creative Content
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            A growth strategist who writes copy backed by technical search architecture, conversion rate principles, and commercial empathy.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div key="SEO & Technical Integration" className="rounded-xl border border-border/80 bg-card/60 p-6">
              <span className="inline-flex size-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                01
              </span>
              <h3 className="mt-4 text-lg font-bold text-foreground font-display">SEO & Technical Integration</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Content formatted with structured headings, semantic entities, and schema compatibility built-in from the first draft.</p>
            </div>
            <div key="Direct Focus on Commercial Action" className="rounded-xl border border-border/80 bg-card/60 p-6">
              <span className="inline-flex size-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                02
              </span>
              <h3 className="mt-4 text-lg font-bold text-foreground font-display">Direct Focus on Commercial Action</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">No fluff or ornamental prose. Every sentence is designed to answer a search question or advance a prospect toward conversion.</p>
            </div>
            <div key="Bilingual Market Fluency" className="rounded-xl border border-border/80 bg-card/60 p-6">
              <span className="inline-flex size-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                03
              </span>
              <h3 className="mt-4 text-lg font-bold text-foreground font-display">Bilingual Market Fluency</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Fluent creative copy development in both English and Bengali, tailored to local cultural resonance or Western enterprise standards.</p>
            </div>
        </div>
      </Container>
    </section>
  );
}
