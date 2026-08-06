import { CheckCircle2 } from "lucide-react";
import type { Service } from "@/types";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/shared/Reveal";

export function ServiceDeliverables({ service }: { service: Service }) {
  return <section className="py-20"><Container className="grid grid-cols-1 gap-12 lg:grid-cols-2"><Reveal><h2 className="text-[length:var(--text-h3)] font-display font-bold tracking-tight">Deliverables</h2><ul className="mt-6 space-y-4">{service.deliverables.map((item) => <li key={item.title} className="flex gap-3"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-success" /><div><div className="font-medium">{item.title}</div><div className="text-sm text-muted-foreground">{item.description}</div></div></li>)}</ul></Reveal><Reveal delay={0.1}><h2 className="text-[length:var(--text-h3)] font-display font-bold tracking-tight">Technology &amp; tools</h2><div className="mt-6 flex flex-wrap gap-2">{service.technologies.map((technology) => <span key={technology} className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm">{technology}</span>)}</div></Reveal></Container></section>;
}
