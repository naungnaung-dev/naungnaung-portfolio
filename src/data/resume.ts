import { education } from "@/data/education";
import { experience, previousExperience } from "@/data/experience";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { siteConfig } from "@/config/site";

interface ResumeLink {
  label: string;
  href: string;
  displayText: string;
}

interface ResumeExperienceEntry {
  organization?: string;
  role: string;
  period: string;
  location?: string;
  arrangement?: string;
  bullets: readonly string[];
}

interface ResumeSkillGroup {
  category: string;
  items: readonly string[];
}

export interface ResumeContent {
  header: {
    name: string;
    title: string;
    location: string;
    nationality: string;
    email: string;
    links: readonly ResumeLink[];
  };
  summary: string;
  skills: readonly ResumeSkillGroup[];
  experience: readonly ResumeExperienceEntry[];
  additionalExperience: readonly Omit<ResumeExperienceEntry, "bullets">[];
  featuredProject: {
    name: string;
    role: string;
    period: string;
    description: string;
    bullets: readonly string[];
    technologies: readonly string[];
    links: readonly ResumeLink[];
  };
  education: {
    degree: string;
    university: string;
    field: string;
    period: string;
    activities: readonly string[];
  };
}

const askOnce = projects[0];

export const resume = {
  header: {
    name: profile.name,
    title: profile.title,
    location: profile.location,
    nationality: profile.nationality,
    email: "naungnaung.code@gmail.com",
    links: [
      {
        label: "Portfolio",
        href: siteConfig.url,
        displayText: "naungnaung.vercel.app",
      },
      {
        label: "GitHub",
        href: profile.links.github,
        displayText: "github.com/naungnaung-dev",
      },
      {
        label: "LinkedIn",
        href: profile.links.linkedin,
        displayText: "linkedin.com/in/naung-naung",
      },
    ],
  },
  summary:
    "Full-Stack Developer with 5+ years of experience building and maintaining web applications across frontend and backend systems. Experienced with React, Next.js, Vue.js, Node.js, and Laravel, including RESTful APIs and relational and NoSQL databases. Professional background spans software engineering teams and the independent development of a full-stack software product.",
  skills: [
    {
      category: "Frontend",
      items: ["React", "Next.js", "Vue.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "PHP", "Laravel", "RESTful APIs"],
    },
    {
      category: "Databases",
      items: ["MySQL", "MongoDB", "Mongoose"],
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "Swagger", "Docker", "Vercel", "Figma"],
    },
  ],
  experience: [
    {
      organization: experience[0].organization,
      role: experience[0].role,
      period: experience[0].period,
      bullets: [
        "Lead product planning and full-stack development for an independent web product serving social media sellers.",
        "Manage testing, debugging, deployment, maintenance, and continued product development.",
      ],
    },
    {
      organization: experience[1].organization,
      role: experience[1].role,
      period: experience[1].period,
      location: experience[1].location,
      arrangement: experience[1].arrangement,
      bullets: [
        "Developed frontend application functionality using React and Next.js in collaboration with product managers and development teams.",
        "Contributed to backend services, database-driven features, and RESTful APIs.",
        "Documented APIs with Swagger and tested, debugged, and optimized application functionality.",
      ],
    },
    {
      role: experience[2].role,
      period: experience[2].period,
      location: experience[2].location,
      arrangement: experience[2].arrangement,
      bullets: [
        "Focused on independent web development projects and technical upskilling with React, Tailwind CSS, Node.js, and MongoDB.",
        "Used Git and GitHub for version control and practiced UI/UX design and prototyping with Figma.",
      ],
    },
    {
      organization: experience[3].organization,
      role: experience[3].role,
      period: experience[3].period,
      location: experience[3].location,
      arrangement: experience[3].arrangement,
      bullets: [
        "Developed and maintained full-stack web application functionality using Vue.js, Laravel, and MySQL.",
        "Worked with relational data, troubleshot application issues, and tested software functionality.",
      ],
    },
    {
      organization: experience[4].organization,
      role: experience[4].role,
      period: experience[4].period,
      location: experience[4].location,
      arrangement: experience[4].arrangement,
      bullets: [
        "Developed dynamic web applications using Laravel, PHP, Vue.js, JavaScript, and MySQL.",
        "Built and maintained RESTful APIs supporting frontend application functionality.",
      ],
    },
  ],
  additionalExperience: previousExperience.map(({ organization, role, period }) => ({
    organization,
    role,
    period,
  })),
  featuredProject: {
    name: askOnce.name,
    role: askOnce.role,
    period: askOnce.period,
    description:
      "Independent full-stack product for social media sellers to organize product information and support customer browsing and ordering.",
    bullets: [
      "Developed product and category management, product variants, and stock-information functionality.",
      "Built server-side APIs and MongoDB data models with Mongoose for product and ordering workflows.",
      "Implemented authentication, role-based access control, a responsive public storefront, cart functionality, and customer ordering.",
    ],
    technologies: askOnce.technologies,
    links: [
      {
        label: "Live Demo",
        href: askOnce.demo,
        displayText: "askonceapp.com/askonce-demo-page",
      },
    ],
  },
  education: {
    degree: education.degree,
    university: education.university,
    field: education.field,
    period: education.period,
    activities: education.activities.map(
      ({ name, location, year }) => `${name} — ${location}, ${year}`,
    ),
  },
} as const satisfies ResumeContent;
