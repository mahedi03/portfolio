import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

/**
 * Connected-system band for the services page — how the individual service
 * groups plug into one growth engine. Inspired by the reference agency's
 * "connected system" section, rewritten in an original voice.
 */

const pillars = [
  {
    number: "01",
    title: "Strategy",
    description: "Offer architecture, funnel planning, and channel sequencing that decide what everything else serves.",
    href: "/services/marketing-strategy",
  },
  {
    number: "02",
    title: "Search",
    description: "Technical health, topical content, and local visibility so demand finds the business on its own.",
    href: "/services/seo",
  },
  {
    number: "03",
    title: "Paid Media",
    description: "Meta, Google, TikTok, and Pinterest campaigns engineered around one conversion definition.",
    href: "/services/media-buying",
  },
  {
    number: "04",
    title: "Content",
    description: "Service pages, articles, and social copy built from the same message map — never a random feed.",
    href: "/services/content-marketing",
  },
  {
    number: "05",
    title: "Engineering",
    description: "Next.js builds, tracking infrastructure, and CRO that turn the traffic everything else earns.",
    href: "/services/website-development",
  },
];

export function ServicesSystem() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-surface/60 py-20 lg:py-28">
      {/* Grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(124,58,237,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.05)_1px,transparent_1px)] bg-[size:44px_44px]"
      />

      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Connected system
          </span>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight text-foreground">
            Different services. One connected system.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Every service can be booked on its own — but returns compound when strategy,
            search, paid media, content, and engineering run on the same plan and read the
            same scoreboard.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {pillars.map((pillar) => (
              <Link
                key={pillar.number}
                href={pillar.href}
                className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-elevated"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="font-display text-3xl font-bold leading-none tracking-tighter text-muted-foreground/50 transition-colors duration-300 group-hover:text-primary/60">
                    {pillar.number}
                  </span>
                  <ArrowUpRight className="size-4 text-muted-foreground/50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
                <h3 className="mt-8 text-xl font-display font-bold uppercase leading-tight tracking-tight text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </Link>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-10 text-center text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
            One brief · one accountable partner · one system, from strategy to execution
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
