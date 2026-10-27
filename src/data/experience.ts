import type { Experience } from "@/types/portfolio";
import { projects } from "@/data/projects";

export const experience = [
  {
    organization: "AskOnce",
    role: "Founder & Full-Stack Developer",
    period: "April 2026 – Present",
    responsibilities: [
      "Leading development of an independent web-based product for social media sellers.",
      "Building frontend and backend features using Next.js, React, and TypeScript.",
      "Developing API endpoints, database models, product management, and ordering workflows.",
      "Implementing authentication and role-based access control.",
      "Managing testing, development, and deployment.",
    ],
    technologies: projects[0].technologies,
  },
  {
    organization: "Viatick",
    role: "Full-Stack Developer",
    period: "August 2025 – December 2025",
    location: "Bangkok, Thailand",
    arrangement: "Remote",
    responsibilities: [
      "Collaborated with product managers and development teams.",
      "Developed frontend applications using React and Next.js.",
      "Worked on backend services and database-driven features.",
      "Developed and documented RESTful APIs using Swagger.",
      "Tested, debugged, and optimized applications.",
    ],
    technologies: ["React", "Next.js", "Swagger"],
  },
  {
    role: "Independent Web Developer",
    period: "September 2024 – July 2025",
    location: "Bangkok, Thailand",
    arrangement: "Remote",
    note: "Focused on independent web development projects, technical upskilling, and UI/UX practice using React, Tailwind CSS, Node.js, MongoDB, and Figma.",
    responsibilities: [
      "Developed personal and practice projects using React and Tailwind CSS.",
      "Explored backend development using Node.js and MongoDB.",
      "Used Git and GitHub for version control.",
      "Worked on UI/UX concepts and prototypes using Figma.",
    ],
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Git", "GitHub", "Figma"],
  },
  {
    organization: "Uplyrn",
    role: "Software Engineer",
    period: "March 2022 – June 2024",
    location: "Yangon, Myanmar",
    arrangement: "Remote",
    responsibilities: [
      "Developed web applications using Vue.js, Laravel, and MySQL.",
      "Built and maintained frontend and backend functionality.",
      "Worked with relational databases.",
      "Troubleshot application issues and tested software functionality.",
    ],
    technologies: ["Vue.js", "Laravel", "MySQL"],
  },
  {
    organization: "Pinnacle Venture Myanmar",
    role: "Software Development Engineer",
    period: "October 2020 – February 2022",
    location: "Yangon, Myanmar",
    arrangement: "On-site",
    responsibilities: [
      "Developed dynamic web applications.",
      "Built and maintained RESTful APIs.",
      "Worked with Laravel, PHP, Vue.js, JavaScript, and MySQL.",
    ],
    technologies: ["Laravel", "PHP", "Vue.js", "JavaScript", "MySQL"],
  },
] as const satisfies readonly Experience[];

// Earlier and overlapping roles retain their own dates; they are not sequential
// replacements for the primary roles above. No unprovided duties are inferred.
export const previousExperience = [
  { organization: "Top Range GPS Co., Ltd.", role: "Freelance UI/UX Designer", period: "July – August 2024" },
  { organization: "LM learnMyanmar", role: "Freelance Web Developer", period: "January – March 2023" },
  { organization: "Oway.com.mm", role: "Software Development Intern", period: "July – September 2020" },
  { organization: "Marter Solutions", role: "Junior Web Developer", period: "October – November 2018" },
] as const satisfies readonly Experience[];
