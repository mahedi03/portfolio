import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { Globe, MapPin, ShieldCheck } from "lucide-react";

export function LocalSeoServiceAreas() {
  return (
    <section className="border-t border-border/60 bg-surface/30 py-20">
      <Container>
        <div className="grid gap-8 md:grid-cols-3">
          <Reveal className="rounded-2xl border border-border/80 bg-card/60 p-6">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <MapPin className="size-5" />
            </div>
            <h3 className="mt-4 text-base font-bold font-display text-foreground">Bangladesh Operations</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Based in Dhaka, supporting local enterprises with strategic alignment, bilingual marketing, and localized execution.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="rounded-2xl border border-border/80 bg-card/60 p-6">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Globe className="size-5" />
            </div>
            <h3 className="mt-4 text-base font-bold font-display text-foreground">Global Client Engagements</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Direct technical and media campaign operations for companies across North America, the UK, Europe, and Australia.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="rounded-2xl border border-border/80 bg-card/60 p-6">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <ShieldCheck className="size-5" />
            </div>
            <h3 className="mt-4 text-base font-bold font-display text-foreground">Execution Guarantee</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              We guarantee 100% transparency, rigorous tracking setups, and continuous iterative optimization. No vanity metrics.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
