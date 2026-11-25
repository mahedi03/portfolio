import type { Service } from "@/types";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { MapPin, CheckCircle2 } from "lucide-react";

const defaultPills = [
  "Dhaka (Gulshan, Banani, Dhanmondi, Uttara, Mirpur)",
  "Chittagong & Sylhet",
  "United States & Canada",
  "United Kingdom & Europe",
  "Australia & UAE",
];

export function ServiceAreas({ service }: { service: Service }) {
  const areas = service.serviceAreas;
  if (!areas) return null;

  const isString = typeof areas === "string";

  return (
    <section className="py-12 sm:py-16">
      <Container className="max-w-6xl">
        <Reveal>
          <div className="rounded-3xl border border-white/10 bg-surface/50 p-6 sm:p-8 backdrop-blur-md">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  Local Depth &amp; Global Delivery
                </p>
                <h2 className="mt-2 text-xl sm:text-2xl font-display font-black text-white uppercase">
                  Where This Service Is Delivered
                </h2>
                {isString ? (
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
                    {areas}
                  </p>
                ) : (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {(Array.isArray(areas) ? areas : defaultPills).map((loc, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-background/60 px-3.5 py-1.5 text-xs font-medium text-foreground"
                      >
                        <MapPin className="size-3.5 text-primary shrink-0" />
                        {loc}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-2.5 text-xs sm:text-sm text-muted-foreground lg:min-w-[260px] lg:border-l lg:border-white/10 lg:pl-8">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                  <span>Async-friendly across time zones</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                  <span>Local &amp; international billing support</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                  <span>Full NDA &amp; IP ownership guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
