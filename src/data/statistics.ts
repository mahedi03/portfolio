import type { Statistic } from "@/types";

/**
 * Replace placeholder values with real, verifiable numbers only.
 * Never fabricate statistics — this is a hard project rule.
 */
export const statistics: Statistic[] = [
  { label: "Projects Completed", value: 100, suffix: "+", icon: "Briefcase" },
  { label: "Client Countries", value: 25, suffix: "+", icon: "Globe" },
  { label: "Years of Experience", value: 5, suffix: "+", icon: "Calendar" },
  { label: "Client Satisfaction", value: 98, suffix: "%", icon: "Heart" },
];
