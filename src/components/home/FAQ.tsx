import { generalFAQs } from "@/data/faq";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { FAQAccordion } from "@/components/shared/FAQAccordion";

export function FAQ() {
  return (
    <section className="py-20 lg:py-28">
      <Container className="max-w-3xl">
        <Reveal className="text-center">
          <h2 className="text-[length:var(--text-h2)] font-display font-bold tracking-tight">
            Frequently asked questions
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-10">
          <FAQAccordion items={generalFAQs} large />
        </Reveal>
      </Container>
    </section>
  );
}
