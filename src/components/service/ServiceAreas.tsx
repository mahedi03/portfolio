import type { Service } from "@/types";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { Globe, MapPin, CheckCircle2 } from "lucide-react";

export function ServiceAreas({ service }: { service: Service }) {
  const areas = service.serviceAreas;
  if (!areas) return null;

  const isString = typeof areas === "string";
  const defaultPills = [
    "Dhaka (Gulshan, Banani, Dhanmondi, Uttara, Mirpur)",
    "Chittagong & Sylhet Commercial Hubs",
    "Bangladesh-wide Remote Delivery",
    "United States & Canada",
    "United Kingdom & Europe",
    "Australia & New Zealand",
    "United Arab Emirates & Gulf Region"
  ];

  return (
    <section className="border-t border-border/60 bg-surface/30 py-20 lg:py-28">
      <Container className="max-w-6xl">
        <Reveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Globe className="size-3.5" />
            Local Depth &amp; Worldwide Execution
          </div>
          <h2 className="mt-4 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Service Reach &amp; Regional Expertise
          </h2>
          <p className="mt-2 text-[length:var(--text-body-lg)] leading-relaxed text-muted-foreground">
            Trusted by fast-growing startups and enterprises across Bangladesh and international markets worldwide.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <div className="rounded-2xl border border-border/80 bg-card/60 p-6 md:p-8 backdrop-blur-sm">
            {isString ? (
              <div className="max-w-3xl text-sm md:text-base leading-relaxed text-muted-foreground whitespace-pre-line">
                {areas}
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Available for strategic advisory, technical engineering, and managed retainers across the following primary markets:
                </p>
                <div className="flex flex-wrap gap-2.5 pt-2">
                  {(Array.isArray(areas) ? areas : defaultPills).map((loc, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface/70 px-3.5 py-2 text-xs font-medium text-foreground"
                    >
                      <MapPin className="size-3.5 text-primary shrink-0" />
                      {loc}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8 border-t border-border/60 pt-6 grid grid-cols-1 gap-4 sm:grid-cols-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                <span>Async-friendly communication</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                <span>Local payment &amp; currency support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                <span>NDA &amp; IP ownership guaranteed</span>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
