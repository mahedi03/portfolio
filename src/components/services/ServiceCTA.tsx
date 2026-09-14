import { CTA } from "@/components/home/CTA";
import type { Service } from "@/types";

export function ServiceCTA({ service: _service }: { service?: Service }) {
  return <CTA />;
}
