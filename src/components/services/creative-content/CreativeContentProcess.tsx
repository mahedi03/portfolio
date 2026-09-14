import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

export function CreativeContentProcess() {
  return (
    <section className="border-t border-border/60 bg-surface/30 py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Execution Methodology</p>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Structured Five-Step Content Creation Lifecycle
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            From strategic audience research to published, verified conversion assets.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div key="1. Research & Customer Avatar Mapping" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 01</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">1. Research & Customer Avatar Mapping</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Uncovering pain points, objections, search patterns, and competitor content weaknesses.</p>
            </div>
            <div key="2. Content Architecture & Outline Approval" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 02</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">2. Content Architecture & Outline Approval</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Defining headings, target entities, answer-first retrieval blocks, and primary arguments before drafting.</p>
            </div>
            <div key="3. Copywriting & Script Drafting" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 03</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">3. Copywriting & Script Drafting</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Crafting persuasive, engaging copy focused on clarity, rhythm, and conversion mechanics.</p>
            </div>
            <div key="4. Review & Editorial Polish" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 04</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">4. Review & Editorial Polish</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Iterating based on client feedback and checking against rigorous zero-banned-word criteria.</p>
            </div>
            <div key="5. Publishing Alignment & Performance Tracking" className="relative rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">STAGE 05</span>
                <div className="size-2 rounded-full bg-primary/40" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-display">5. Publishing Alignment & Performance Tracking</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Integrating metadata, internal linking structures, and conversion tracking milestones.</p>
            </div>
        </div>
      </Container>
    </section>
  );
}
