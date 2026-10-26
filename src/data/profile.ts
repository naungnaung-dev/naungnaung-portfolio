import type { Profile } from "@/types/portfolio";

export const profile = {
  name: "Naung Naung",
  title: "Full-Stack Developer",
  nationality: "Myanmar",
  location: "Bangkok, Thailand",
  experience: "5+ years",
  summary:
    "I'm a Full-Stack Developer with 5+ years of experience building responsive, scalable, and user-friendly web applications.",
  links: {
    github: "https://github.com/naungnaung-dev",
    linkedin: "https://www.linkedin.com/in/naung-naung/",
  },
  employment: {
    types: ["Full-time", "Part-time", "Contract", "Freelance"],
    arrangements: ["Remote", "Hybrid", "On-site"],
    note: "Open to remote, hybrid, and on-site roles where eligible.",
  },
} as const satisfies Profile;
