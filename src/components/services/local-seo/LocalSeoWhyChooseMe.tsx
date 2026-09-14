import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

export function LocalSeoWhyChooseMe() {
  return (
    <section className="py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Founder & Consultant Positioning</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Why Work With Mahedi Hasan on Local SEO
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Technical precision paired with field-tested local directory networks and clean White-Hat execution.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div key="Deep Understanding of Bangladeshi & Global Local Algorithms" className="rounded-xl border border-border/80 bg-card/60 p-6">
              <span className="inline-flex size-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                01
              </span>
              <h3 className="mt-4 text-lg font-bold text-foreground font-display">Deep Understanding of Bangladeshi & Global Local Algorithms</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Extensive experience ranking businesses in Dhaka, Chittagong, and regional hubs as well as competitive US/UK metros.</p>
            </div>
            <div key="Clean Citation Auditing" className="rounded-xl border border-border/80 bg-card/60 p-6">
              <span className="inline-flex size-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                02
              </span>
              <h3 className="mt-4 text-lg font-bold text-foreground font-display">Clean Citation Auditing</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">We identify and correct contradictory phone numbers, old addresses, and duplicate listings that confuse Google's algorithms.</p>
            </div>
            <div key="Technical Schema Integration" className="rounded-xl border border-border/80 bg-card/60 p-6">
              <span className="inline-flex size-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                03
              </span>
              <h3 className="mt-4 text-lg font-bold text-foreground font-display">Technical Schema Integration</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">We connect your website's code directly to your Google Business Profile entity using structured data.</p>
            </div>
        </div>
      </Container>
    </section>
  );
}
