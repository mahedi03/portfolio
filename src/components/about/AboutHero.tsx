import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { siteConfig } from "@/config/site";

export function AboutHero() {
  return (
    <section className="pt-16 pb-20 lg:pt-24 lg:pb-28">
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            About
          </p>
          <h1 className="mt-3 text-[length:var(--text-h1)] font-display font-bold tracking-tight">
            Hi, I&apos;m {siteConfig.author.name}
          </h1>
          <p className="mt-5 text-[length:var(--text-body-lg)] text-muted-foreground">
            {siteConfig.author.jobTitle} helping businesses turn their
            website into their hardest-working growth channel — through
            clean development, search visibility, and paid advertising that
            pays for itself.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border bg-muted shadow-elevated">
            <Image
              src="/authors/placeholder-avatar.jpg"
              alt={siteConfig.author.name}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
