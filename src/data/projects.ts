import type { Project } from "@/types/portfolio";

export const projects = [
  {
    slug: "askonce",
    caseStudyPath: "/projects/askonce",
    name: "AskOnce",
    category: "Full-Stack Web Application / Independent Software Product",
    role: "Founder & Full-Stack Developer",
    period: "April 2026 – Present",
    description:
      "An independent product for social media sellers, with shareable storefronts, product variations, stock information, and customer ordering workflows.",
    website: "https://askonceapp.com",
    demo: "https://askonceapp.com/askonce-demo-page",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MongoDB", "Mongoose", "AWS S3", "Vercel"],
    features: [
      "Responsive storefronts and multilingual browsing",
      "Product categories, variations, and stock information",
      "Cart and customer ordering workflows",
      "Authentication and role-based administration",
    ],
    contributions: [
      "Product planning and application architecture",
      "Frontend interfaces and backend APIs",
      "Database modeling and access control",
      "Testing, deployment, and maintenance",
    ],
    featured: true,
  },
] as const satisfies readonly Project[];
