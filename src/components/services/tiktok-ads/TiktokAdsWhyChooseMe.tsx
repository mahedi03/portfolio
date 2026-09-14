import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

export function TiktokAdsWhyChooseMe() {
  return (
    <section className="py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Founder & Consultant Positioning</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Why Work With Mahedi Hasan for TikTok Ads
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Technical tracking precision paired with creative hook architecture and performance media buying.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div key="Full Server-Side Events API Implementation" className="rounded-xl border border-border/80 bg-card/60 p-6">
              <span className="inline-flex size-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                01
              </span>
              <h3 className="mt-4 text-lg font-bold text-foreground font-display">Full Server-Side Events API Implementation</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">We configure server-side conversion ingestion so your attribution remains accurate despite mobile tracking limitations.</p>
            </div>
            <div key="Native Creative Briefs & Hook Testing" className="rounded-xl border border-border/80 bg-card/60 p-6">
              <span className="inline-flex size-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                02
              </span>
              <h3 className="mt-4 text-lg font-bold text-foreground font-display">Native Creative Briefs & Hook Testing</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">We script and direct high-converting hook variations that hold user attention past the initial 3-second mark.</p>
            </div>
            <div key="Direct Founder Involvement & Transparent Reporting" className="rounded-xl border border-border/80 bg-card/60 p-6">
              <span className="inline-flex size-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                03
              </span>
              <h3 className="mt-4 text-lg font-bold text-foreground font-display">Direct Founder Involvement & Transparent Reporting</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Direct account oversight by Mahedi Hasan with 24/7 access to live metrics and clear commercial attribution.</p>
            </div>
        </div>
      </Container>
    </section>
  );
}
