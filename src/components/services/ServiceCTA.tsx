import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/types";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/Reveal";

export function ServiceCTA({ service }: { service: Service }) {
  return <section className="pb-20 lg:pb-28"><Container><Reveal className="rounded-2xl bg-primary px-8 py-14 text-center text-primary-foreground"><h2 className="text-[length:var(--text-h3)] font-display font-bold tracking-tight">Ready to get started with {service.shortTitle}?</h2><Button asChild size="lg" variant="secondary" className="mt-6"><Link href="/contact">Start a Project <ArrowRight className="size-4" /></Link></Button></Reveal></Container></section>;
}
