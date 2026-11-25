import type { Service } from "@/types";
import { getExpandedServiceFaqs } from "@/data/serviceFaqs";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { FAQAccordion } from "@/components/shared/FAQAccordion";

export function ServiceFAQ({ service }: { service: Service }) {
  return (
    <section className="py-14 sm:py-20 lg:py-24">
      <Container className="max-w-3xl">
        <Reveal className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Common Questions
          </p>
          <h2 className="mt-3 text-2xl sm:text-4xl font-display font-black tracking-tight text-white">
            Frequently Asked Questions
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-8 sm:mt-10">
          <FAQAccordion items={getExpandedServiceFaqs(service)} large />
        </Reveal>
      </Container>
    </section>
  );
}
