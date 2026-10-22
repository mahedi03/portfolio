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
    related.length === 2 ? "sm:grid-cols-2" : related.length >= 3 ? "sm:grid-cols-3" : "";

  return (
    <section className="border-t border-border bg-background py-20 lg:py-28">
      <Container className="max-w-6xl">
        <Reveal className="text-center">
          <h2 className="text-[length:var(--text-h2)] font-display font-bold tracking-tight">
            Related Services
          </h2>
          <p className="mt-3 text-[length:var(--text-body-lg)] leading-relaxed text-muted-foreground">
            Services that pair naturally with {service.shortTitle} inside a full growth system.
          </p>
        </Reveal>
        <div className={`mt-10 grid grid-cols-1 gap-5 ${gridCols}`}>
          {related.map((item, index) => (
            <Reveal key={item.slug} delay={index * 0.06}>
              <Link
                href={`/services/${item.slug}`}
                className="group flex h-full flex-col justify-between rounded-2xl border border-border/70 bg-card/60 p-6 shadow-soft backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-elevated"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="font-semibold text-foreground">{item.shortTitle}</div>
                  <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <div className="mt-1.5 text-sm text-muted-foreground">{item.tagline}</div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
