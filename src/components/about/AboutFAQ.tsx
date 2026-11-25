import { aboutFAQs } from "@/data/faq";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { FAQAccordion } from "@/components/shared/FAQAccordion";

export function AboutFAQ() {
  return (
    <section className="py-14 sm:py-20 lg:py-24">
      <Container className="max-w-3xl">
        <Reveal className="text-center">
          <span className="inline-block rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Due Diligence
          </span>
          <h2 className="mt-4 text-2xl sm:text-4xl font-display font-black tracking-tight text-white">
            Questions clients ask before we start
          </h2>
          <p className="mt-3 text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground">
            Straight answers about how the engagement works before any proposal is sent.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mt-8 sm:mt-10">
          <FAQAccordion items={aboutFAQs} large />
        </Reveal>
      </Container>
    </section>
  );
}
