import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-border bg-surface/60">
      <Container>
        <ol className="flex min-h-12 items-center gap-1 overflow-x-auto whitespace-nowrap text-sm text-muted-foreground">
          {items.map((item, index) => (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1">
              {index > 0 && <ChevronRight className="size-4 shrink-0" aria-hidden="true" />}
              {item.href && index < items.length - 1 ? <Link href={item.href} className="hover:text-foreground">{item.label}</Link> : <span className={index === items.length - 1 ? "font-medium text-foreground" : undefined}>{item.label}</span>}
            </li>
          ))}
        </ol>
      </Container>
    </nav>
  );
}
