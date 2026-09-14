import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

export function PinterestAdsWhyChooseMe() {
  return (
    <section className="py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Founder & Consultant Positioning</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Why Work With Mahedi Hasan on Pinterest Ads
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            A growth architect who approaches Pinterest as a visual search engine, not a social feed.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div key="Search-First Keyword Architecture" className="rounded-xl border border-border/80 bg-card/60 p-6">
              <span className="inline-flex size-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                01
              </span>
              <h3 className="mt-4 text-lg font-bold text-foreground font-display">Search-First Keyword Architecture</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">We structure campaigns around keyword queries and search intent, treating Pinterest like a visual version of Google.</p>
            </div>
            <div key="Technical Product Catalog Mastery" className="rounded-xl border border-border/80 bg-card/60 p-6">
              <span className="inline-flex size-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                02
              </span>
              <h3 className="mt-4 text-lg font-bold text-foreground font-display">Technical Product Catalog Mastery</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Flawless integration of ecommerce product catalogs, custom tags, and dynamic retargeting.</p>
            </div>
            <div key="Cross-Channel Integration" className="rounded-xl border border-border/80 bg-card/60 p-6">
              <span className="inline-flex size-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                03
              </span>
              <h3 className="mt-4 text-lg font-bold text-foreground font-display">Cross-Channel Integration</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">We connect Pinterest discovery with Google Search and Meta retargeting to maximize blended conversion efficiency.</p>
            </div>
        </div>
      </Container>
    </section>
  );
}
