import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

export function WebsiteMarketingWhyChooseMe() {
  return (
    <section className="py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Founder & Consultant Positioning</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Why Choose Mahedi Hasan for Website Marketing
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Web development architect meets growth consultant. Complete technical mastery from backend code to frontend marketing.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div key="Full-Stack Technical Capabilities" className="rounded-xl border border-border/80 bg-card/60 p-6">
              <span className="inline-flex size-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                01
              </span>
              <h3 className="mt-4 text-lg font-bold text-foreground font-display">Full-Stack Technical Capabilities</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">As a Next.js web architect, I optimize site speed, Core Web Vitals, and schema at the code level, not just on surface checklists.</p>
            </div>
            <div key="Pioneering AEO & GEO Frameworks" className="rounded-xl border border-border/80 bg-card/60 p-6">
              <span className="inline-flex size-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                02
              </span>
              <h3 className="mt-4 text-lg font-bold text-foreground font-display">Pioneering AEO & GEO Frameworks</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Early adopter of AI retrieval optimization, positioning your business to win in ChatGPT, Claude, and Google Search Overviews.</p>
            </div>
            <div key="Direct Accountability" className="rounded-xl border border-border/80 bg-card/60 p-6">
              <span className="inline-flex size-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                03
              </span>
              <h3 className="mt-4 text-lg font-bold text-foreground font-display">Direct Accountability</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Work directly with the Founder of <a href="https://framecipher.info" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground underline underline-offset-4 hover:text-primary">FrameCipher</a> and former Co-Founder of Riha Web Tech (2022 – July 2025) with 4+ years of proven track record.</p>
            </div>
        </div>
      </Container>
    </section>
  );
}
