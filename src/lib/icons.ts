import * as Icons from "lucide-react";
import { Sparkle, type LucideIcon } from "lucide-react";

/**
 * Look up a Lucide icon component by its string name (as stored in data
 * files), with a safe fallback. Avoids `any` casts scattered across
 * components that render icons dynamically from data.
 */
export function getLucideIcon(name?: string): LucideIcon {
  if (!name) return Sparkle;
  const icon = (Icons as unknown as Record<string, LucideIcon>)[name];
  return icon ?? Sparkle;
}
