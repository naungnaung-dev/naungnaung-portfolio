import type { SkillGroup } from "@/types/portfolio";

export const skills = [
  { category: "Frontend", items: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend & APIs", items: ["Node.js", "Laravel", "RESTful APIs"] },
  { category: "Data & Storage", items: ["MySQL", "MongoDB", "Mongoose", "AWS S3"] },
  { category: "Design & Delivery", items: ["UI/UX development", "Vercel"] },
] as const satisfies readonly SkillGroup[];
