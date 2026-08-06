import type { Skill } from "@/types";

export const skills: Skill[] = [
  { name: "Next.js / React", category: "development", proficiency: 95, icon: "Code2" },
  { name: "TypeScript", category: "development", proficiency: 90, icon: "FileCode" },
  { name: "Tailwind CSS", category: "development", proficiency: 92, icon: "Palette" },
  { name: "Technical SEO", category: "seo", proficiency: 93, icon: "Settings2" },
  { name: "Keyword Research & Strategy", category: "seo", proficiency: 90, icon: "Search" },
  { name: "Local SEO", category: "seo", proficiency: 88, icon: "MapPin" },
  { name: "Google Ads", category: "ads", proficiency: 87, icon: "Target" },
  { name: "Meta Ads", category: "ads", proficiency: 90, icon: "Megaphone" },
  { name: "TikTok Ads", category: "ads", proficiency: 82, icon: "Video" },
  { name: "GA4 / Google Tag Manager", category: "tools", proficiency: 88, icon: "BarChart3" },
  { name: "Marketing Strategy", category: "strategy", proficiency: 90, icon: "Compass" },
  { name: "Conversion Rate Optimization", category: "strategy", proficiency: 85, icon: "TrendingUp" },
];

export function getSkillsByCategory(category: Skill["category"]): Skill[] {
  return skills.filter((s) => s.category === category);
}
