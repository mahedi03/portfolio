import type { Service } from "@/types";
import { getExpandedServiceFaqs } from "@/data/serviceFaqs";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";
import { FAQAccordion } from "@/components/shared/FAQAccordion";

export function ServiceFAQ({ service }: { service: Service }) {
  return <section className="border-t border-border bg-surface py-20"><Container className="max-w-3xl"><Reveal className="text-center"><h2 className="text-[length:var(--text-h2)] font-display font-bold tracking-tight">Questions about {service.shortTitle}</h2></Reveal><Reveal delay={0.1} className="mt-10"><FAQAccordion items={getExpandedServiceFaqs(service)} /></Reveal></Container></section>;
}
