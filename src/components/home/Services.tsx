import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { getLucideIcon } from "@/lib/icons";

export function Services() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-[length:var(--text-h2)] font-display font-bold tracking-tight">
            Everything you need to grow, in one place
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            From website development to the traffic that finds it, full-stack
            marketing and growth services under one roof.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = getLucideIcon(service.icon);
            return (
              <Reveal key={service.slug} delay={i * 0.05}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col rounded-lg border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
                >
                  <div className="inline-flex size-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                    {service.category}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold">
                    {service.shortTitle}
                  </h3>
                  <p className="mt-2 text-sm font-medium leading-6 text-card-foreground">
                    {service.tagline}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {service.overview}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-base font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more <ArrowUpRight className="size-3.5" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
