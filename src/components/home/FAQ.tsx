import { generalFAQs } from "@/data/faq";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { FAQAccordion } from "@/components/shared/FAQAccordion";

export function FAQ() {
  return (
    <section className="py-14 sm:py-20 lg:py-24">
      <Container className="max-w-3xl">
        <Reveal className="text-center">
          <h2 className="text-2xl sm:text-4xl lg:text-[2.75rem] font-display font-bold tracking-tight">
            Frequently asked questions
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-8 sm:mt-10">
          <FAQAccordion items={generalFAQs} large />
        </Reveal>
      </Container>
    </section>
  );
}
