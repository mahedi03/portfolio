import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/types";
import { getRelatedServices } from "@/data/services";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

export function RelatedServices({ service }: { service: Service }) {
  const related = getRelatedServices(service);
  if (!related.length) return null;

  const gridCols =
    related.length === 2 ? "sm:grid-cols-2" : related.length >= 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "";

  return (
    <section className="border-t border-border/80 bg-surface/40 py-14 sm:py-20">
      <Container className="max-w-6xl">
        <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Connected Capabilities
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-display font-black text-white uppercase">
              Related Services
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:border-white/40 hover:text-white"
          >
            <span>All Services</span>
            <ArrowUpRight className="size-3.5" />
          </Link>
        </Reveal>

        <div className={`mt-8 grid grid-cols-1 gap-5 ${gridCols}`}>
          {related.map((item, index) => (
            <Reveal key={item.slug} delay={index * 0.05}>
              <Link
                href={`/services/${item.slug}`}
                className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-card/80 p-6 backdrop-blur-md shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-surface"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="font-display text-lg font-bold text-white">
                    {item.shortTitle}
                  </div>
                  <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                </div>
                <div className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.tagline}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
