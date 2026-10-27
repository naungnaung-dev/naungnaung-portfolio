import type { Project } from "@/types/portfolio";

export const projects = [
  {
    slug: "askonce",
    name: "AskOnce",
    category: "Full-Stack Web Application / Independent Software Product",
    role: "Founder & Full-Stack Developer",
    period: "April 2026 – Present",
    description:
      "AskOnce is a web-based service for social media sellers that organizes product information and helps customers browse products and follow an ordering process more easily. It aims to reduce repetitive inquiries about prices, colors, sizes, stock availability, and ordering instructions.",
    website: "https://askonceapp.com",
    demo: "https://askonceapp.com/askonce-demo-page",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MongoDB", "Mongoose", "AWS S3", "Vercel"],
    features: [
      "Product and category management",
      "Product variations and stock information",
      "Seller product pages",
      "Responsive public storefront",
      "Customer product selection and ordering flow",
      "Authentication and role-based access control",
      "Administrative management features",
      "Multilingual interface support",
    ],
    contributions: [
      "Product planning and system architecture",
      "Frontend development",
      "Backend API development",
      "Database modeling",
      "Authentication and authorization",
      "User interface implementation",
      "Testing and debugging",
      "Deployment and maintenance",
    ],
    featured: true,
  },
] as const satisfies readonly Project[];
