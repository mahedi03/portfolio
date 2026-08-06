import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { getLucideIcon } from "@/lib/icons";

export function ServicesGrid() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = getLucideIcon(service.icon);
            return (
              <Reveal key={service.slug} delay={i * 0.04}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col rounded-lg border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
                >
                  <div className="inline-flex size-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <h2 className="mt-4 text-lg font-semibold">
                    {service.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {service.tagline}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
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
