import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

export function SocialMediaManagementProcess() {
  return (
    <section className="border-t border-border/60 bg-surface/30 py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Execution Methodology</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Six-Stage Social Management Lifecycle
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            A consistent monthly rhythm to keep your brand visible, relevant, and engaging.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div key="1. Channel Audit & Brand Voice Definition" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 01</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">1. Channel Audit & Brand Voice Definition</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Reviewing existing social profiles, competitor activity, customer personas, and setting tone guidelines.</p>
            </div>
            <div key="2. Platform Strategy & Pillar Architecture" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 02</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">2. Platform Strategy & Pillar Architecture</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Selecting high-priority channels and establishing core content themes (education, proof, culture, offers).</p>
            </div>
            <div key="3. Monthly Content Calendar Production" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 03</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">3. Monthly Content Calendar Production</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Writing captions, designing graphics, scripting videos, and presenting the calendar for client approval.</p>
            </div>
            <div key="4. Scheduled Publishing & Live Distribution" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 04</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">4. Scheduled Publishing & Live Distribution</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Scheduling posts at optimal engagement hours and verifying formatting across all platforms.</p>
            </div>
            <div key="5. Daily Community Management & Monitoring" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 05</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">5. Daily Community Management & Monitoring</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Moderating comments, answering inquiries, and engaging with relevant industry discussions.</p>
            </div>
            <div key="6. Monthly Performance Analysis & Tuning" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 06</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">6. Monthly Performance Analysis & Tuning</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Reviewing top-performing formats, audience growth, and refining the next month&apos;s calendar based on data.</p>
            </div>
        </div>
      </Container>
    </section>
  );
}
