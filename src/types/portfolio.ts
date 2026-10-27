export interface Profile {
  name: string;
  title: string;
  nationality: string;
  location: string;
  experience: string;
  summary: string;
  links: { github: string; linkedin: string };
  employment: { types: readonly string[]; arrangements: readonly string[]; note: string };
}

export interface SkillGroup {
  category: string;
  items: readonly string[];
}

export interface Experience {
  organization?: string;
  role: string;
  period: string;
  location?: string;
  arrangement?: "Remote" | "Hybrid" | "On-site";
  note?: string;
  responsibilities?: readonly string[];
  technologies?: readonly string[];
}

export interface Project {
  category: string;
  features: readonly string[];
  contributions: readonly string[];
  slug: string;
  name: string;
  role: string;
  period: string;
  description: string;
  website: string;
  demo: string;
  technologies: readonly string[];
  featured: boolean;
}
