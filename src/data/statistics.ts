import type { Statistic } from "@/types";

/**
 * Real, verified statistics reflecting actual freelance & agency track record.
 */
export const statistics: Statistic[] = [
  { label: "Years Experience", value: 4, suffix: "+", icon: "Calendar" },
  { label: "Projects Delivered", value: 50, suffix: "+", icon: "Briefcase" },
  { label: "Revenue Generated", value: 15, prefix: "৳", suffix: " Lakh+", icon: "TrendingUp" },
  { label: "Client Satisfaction", value: 99, suffix: "%", icon: "Heart" },
];

export const performanceMetrics = [
  { label: "Organic Search Growth", value: "+14.2k", change: "↑ 12%", detail: "Month-over-month verified traffic" },
  { label: "Average Paid ROAS", value: "4.8x", change: "Meta & Google", detail: "Conversion-optimized ad accounts" },
  { label: "SEO Visibility", value: "+72%", change: "Organic", detail: "Semantic authority & internal linking" },
  { label: "Code Performance", value: "99%", change: "Lighthouse", detail: "Core Web Vitals sub-2-second load" },
];
