import Link from "next/link";
import type { Service } from "@/types";
import { getServiceContent } from "@/data/serviceContent";
import { getRelatedServices } from "@/data/services";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

export function ServiceLongForm({ service }: { service: Service }) {
  const sections = getServiceContent(service);
  const contextualServices = getRelatedServices(service).slice(0, 2);
  return (
    <section className="border-t border-border py-20">
      <Container className="max-w-3xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">A considered approach</p>
        </Reveal>
        <div className="mt-10 space-y-12">
          <Reveal>
            <p className="text-[length:var(--text-body-lg)] leading-8 text-muted-foreground">
              Explore the full <Link href="/services" className="font-semibold text-foreground underline decoration-primary/50 underline-offset-4 hover:text-primary">services hub</Link>{" "}
              to see how this work fits into a wider growth plan. For a connected next step, consider{" "}
              {contextualServices.map((related, index) => (
                <span key={related.slug}>
                  {index > 0 ? " or " : " "}
                  <Link href={`/services/${related.slug}`} className="font-semibold text-foreground underline decoration-primary/50 underline-offset-4 hover:text-primary">
                    {related.shortTitle}
                  </Link>
                </span>
              ))}.
            </p>
          </Reveal>
          {sections.map((section, index) => (
            <Reveal key={section.heading} delay={Math.min(index * 0.04, 0.2)}>
              <article>
                <h2 className="text-[length:var(--text-h2)] font-display font-bold tracking-tight">{section.heading}</h2>
                <div className="mt-4 space-y-4 text-[length:var(--text-body-lg)] leading-8 text-muted-foreground">
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
