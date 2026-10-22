import { aboutFAQs } from "@/data/faq";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { FAQAccordion } from "@/components/shared/FAQAccordion";

/**
 * About-page FAQ — due-diligence questions in the style of the reference
 * agency's about page, rewritten with original copy.
 */
export function AboutFAQ() {
  return (
    <section className="border-t border-border py-20 lg:py-28">
      <Container className="max-w-3xl">
        <Reveal className="text-center">
          <span className="inline-block rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Due Diligence
          </span>
          <h2 className="mt-3 text-[length:var(--text-h2)] font-display font-bold tracking-tight">
            Questions clients ask before we start
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Straight answers about how the engagement works — before any proposal is sent.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mt-10">
          <FAQAccordion items={aboutFAQs} large />
        </Reveal>
      </Container>
    </section>
  );
}
