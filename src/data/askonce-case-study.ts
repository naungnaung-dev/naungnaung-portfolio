import { projects } from "@/data/projects";
import type { SkillGroup } from "@/types/portfolio";

const project = projects.find((project) => project.slug === "askonce")!;

export const askOnceCaseStudy = {
  project,
  category: "Independent Full-Stack Software Product",
  title: "AskOnce — Technical Case Study",
  description:
    "A technical case study of AskOnce: product planning, full-stack development, data modeling, access control, and a mobile-responsive ordering experience.",
  introduction:
    "Building a managed product storefront and ordering service for social media sellers, spanning public browsing, ordering, and administrative workflows.",
  sections: {
    overview: { id: "overview", title: "Project Overview" },
    problem: { id: "problem", title: "The Problem" },
    solution: { id: "solution", title: "The Solution" },
    screenshots: { id: "product-screenshots", title: "Product Screenshots" },
    features: { id: "features", title: "Key Features" },
    stack: { id: "technology-stack", title: "Technology Stack" },
    architecture: { id: "architecture", title: "High-Level Architecture" },
    contributions: { id: "contributions", title: "My Contributions" },
    decisions: { id: "engineering-decisions", title: "Engineering Challenges & Decisions" },
    status: { id: "status", title: "Current Status & Future Improvements" },
    links: { id: "project-links", title: "Explore the Project" },
  },
  overview: [
    "AskOnce is a managed web-based product storefront and ordering service for social media sellers, initially focused on Myanmar businesses selling through Facebook and similar platforms.",
    "Sellers can share product pages where buyers browse product information, compare available options, and follow an ordering process. The product brings together customer-facing storefronts and administrative tools for managing the information behind them.",
  ],
  problem: {
    introduction:
      "Product details can be scattered across social posts and conversations. Buyers may need to contact a seller and wait for answers before they can decide what to order.",
    questions: [
      "How much does this product cost?",
      "Is it still available?",
      "What colors and sizes are available?",
      "How much is delivery?",
      "How can I place an order?",
    ],
    conclusion:
      "AskOnce aims to make these details easier to access and the purchasing journey clearer, reducing the need for repeated questions.",
  },
  solution:
    "A shareable seller storefront connects product discovery with ordering. Categories organize the catalog, product pages present details and variations, and stock information helps buyers understand available options. Cart and order-submission workflows give customers a clearer next step, while administrative tools let sellers manage the product information presented in a responsive public interface.",
  features: [
    { title: "Shareable storefronts", description: "Public seller pages bring product browsing into a mobile-responsive customer experience." },
    { title: "Organized catalog", description: "Product and category management supports structured product discovery and administration." },
    { title: "Variations & stock", description: "Product details include available options and stock information to support customer selection." },
    { title: "Cart & ordering", description: "Customer product selection, cart, checkout, and order submission form the ordering workflow." },
    { title: "Administrative workflows", description: "Shop and product management are supported by authentication and role-based access control." },
  ],
  stack: [
    { category: "Frontend", items: ["Next.js App Router", "React", "TypeScript", "Tailwind CSS"] },
    { category: "Backend & Data", items: ["Next.js server-side APIs", "MongoDB Atlas", "Mongoose", "Zod"] },
    { category: "Supporting Technologies", items: ["AWS S3", "Git", "GitHub", "Vercel"] },
  ] satisfies readonly SkillGroup[],
  architecture: [
    { title: "Public customer experience", description: "Seller storefronts, product listings and detail pages, cart, checkout, and order submission make up the public interface." },
    { title: "Administrative experience", description: "Shop, product, and category management cover administrative workflows, including product variants, stock handling, and administrative access control." },
    { title: "Backend & data", description: "Server-side API endpoints, input validation, authentication and authorization, and MongoDB models and database operations support application functionality. The known stack includes Zod, Mongoose, and MongoDB Atlas." },
    { title: "Deployment & development", description: "The Next.js application is deployed through Vercel. Development and staging workflows are relevant to release preparation; specific environment configuration and release automation are not documented in this case study." },
  ],
  contributions: [
    { title: "Product & architecture", description: "Product planning and application architecture across the customer and administrative experiences." },
    { title: "Frontend engineering", description: "Frontend development and responsive interface implementation for product discovery and ordering." },
    { title: "Backend & modeling", description: "Backend API development and database modeling, including product variation and stock handling." },
    { title: "Access control", description: "Authentication and role-based authorization for administrative functionality." },
    { title: "Quality & delivery", description: "Testing, debugging, deployment preparation, and ongoing maintenance." },
  ],
  decisions: [
    { title: "Modeling variations and stock", description: "Products with different colors, sizes, or available options require a clear relationship between product information, variations, and stock. The data model needs to support both administrative updates and customer selection." },
    { title: "Separating public and administrative workflows", description: "Buyers need a focused browsing and ordering experience, while administrative users need management tools. Route boundaries and component sharing are considerations when organizing these responsibilities." },
    { title: "Managing permissions", description: "Authentication establishes access, while role-based authorization governs administrative capabilities. Keeping permission requirements clear across interfaces and APIs is a key engineering concern." },
    { title: "Keeping mobile ordering clear", description: "Product options, stock information, cart state, and order-submission steps need to remain understandable on smaller screens. Clarity between product selection, cart review, and order submission is a usability consideration for continued iteration." },
  ],
  status: [
    "AskOnce is an independent software product in ongoing development, with work beginning in April 2026.",
    "Areas for continued iteration include product and stock management, administrative usability, and clarity throughout the mobile ordering experience. These are improvement areas to evaluate, rather than a committed feature roadmap or claims of completed optimizations.",
  ],
  closing:
    "Explore the public website and demo for product context, or return to the portfolio's selected projects.",
} as const;
