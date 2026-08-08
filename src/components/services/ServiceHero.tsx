import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/types";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/Reveal";
import { getLucideIcon } from "@/lib/icons";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceWebPageSchema } from "@/lib/schema";
import { AnimatedServiceIcon } from "@/components/services/AnimatedServiceIcon";

export function ServiceHero({ service }: { service: Service }) {
  const Icon = getLucideIcon(service.icon);
  return (
    <>
      <JsonLd data={serviceWebPageSchema(service)} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.shortTitle }]} />
      <section className="pt-16 pb-16 lg:pt-24 lg:pb-20">
      <Container className="grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal className="text-center lg:text-left">
          <div className="mx-auto inline-flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary lg:mx-0">
            <Icon className="size-7" />
          </div>
          <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-primary">{service.tagline}</p>
          <h1 className="mt-3 text-[length:var(--text-h1)] font-display font-bold tracking-tight">{service.title}</h1>
          <p className="mt-5 text-[length:var(--text-body-lg)] text-muted-foreground">{service.overview}</p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/contact">Get Started <ArrowRight className="size-4" /></Link>
          </Button>
        </Reveal>
        <Reveal delay={0.1}>
          <AnimatedServiceIcon icon={service.icon} label={service.shortTitle} />
        </Reveal>
      </Container>
      </section>
    </>
  );
}
