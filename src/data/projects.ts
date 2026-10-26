import type { Project } from "@/types/portfolio";

export const projects = [
  {
    slug: "askonce",
    name: "AskOnce",
    role: "Founder & Full-Stack Developer",
    period: "April 2026 – Present",
    description:
      "An independent web-based product that helps social media sellers organize product information, reduce repetitive customer questions, and simplify ordering.",
    website: "https://askonceapp.com",
    demo: "https://askonceapp.com/askonce-demo-page",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MongoDB", "Mongoose", "AWS S3", "Vercel"],
    featured: true,
  },
] as const satisfies readonly Project[];
