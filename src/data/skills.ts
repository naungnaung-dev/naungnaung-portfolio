import type { SkillGroup } from "@/types/portfolio";

export const skills = [
  {
    category: "Frontend",
    items: [
      "HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js",
      "Vue.js", "Tailwind CSS", "Bootstrap", "jQuery",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js", "Express.js", "PHP", "Laravel", "RESTful API Development",
      "Authentication and Authorization",
    ],
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB", "Mongoose", "Elasticsearch"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "Docker", "Swagger", "Vercel", "Figma", "AWS S3"],
  },
] as const satisfies readonly SkillGroup[];
