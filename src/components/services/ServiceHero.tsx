import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import type { Service } from "@/types";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/Reveal";
import { getLucideIcon } from "@/lib/icons";

export function ServiceHero({ service }: { service: Service }) {
  const Icon = getLucideIcon(service.icon);
  const image = service.image ?? (service.category === "ads"
    ? "/og/og-default.jpg"
    : service.category === "seo"
      ? "/portfolio/placeholder-1.jpg"
      : service.category === "development"
        ? "/portfolio/placeholder-cover.jpg"
        : "/blog/placeholder-cover-1.jpg");
  return (
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
          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-3 shadow-elevated">
            <Image src={image} alt={`${service.title} service illustration`} width={960} height={640} className="aspect-[3/2] w-full rounded-xl object-cover" priority />
            <div className="absolute bottom-7 left-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/65 px-4 py-2 text-sm font-medium text-white backdrop-blur">
              <Icon className="size-4" /> {service.shortTitle}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
