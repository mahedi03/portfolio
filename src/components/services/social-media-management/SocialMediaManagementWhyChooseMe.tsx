import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

export function SocialMediaManagementWhyChooseMe() {
  return (
    <section className="py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Founder & Consultant Positioning</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Why Work With Mahedi Hasan for Social Media Management
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Content backed by real business strategy, technical SEO understanding, and conversion-focused storytelling.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div key="Integrated Marketing Context" className="rounded-xl border border-border/80 bg-card/60 p-6">
              <span className="inline-flex size-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                01
              </span>
              <h3 className="mt-4 text-lg font-bold text-foreground font-display">Integrated Marketing Context</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Your social media works in direct synergy with your SEO, website architecture, and paid advertising efforts.</p>
            </div>
            <div key="Bilingual Community Fluency" className="rounded-xl border border-border/80 bg-card/60 p-6">
              <span className="inline-flex size-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                02
              </span>
              <h3 className="mt-4 text-lg font-bold text-foreground font-display">Bilingual Community Fluency</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Expert community management in both professional English and natural, culturally nuanced Bengali.</p>
            </div>
            <div key="Strict Content Quality Standards" className="rounded-xl border border-border/80 bg-card/60 p-6">
              <span className="inline-flex size-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                03
              </span>
              <h3 className="mt-4 text-lg font-bold text-foreground font-display">Strict Content Quality Standards</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Every graphic, caption, and video script adheres to professional design standards with zero generic clichés.</p>
            </div>
        </div>
      </Container>
    </section>
  );
}
