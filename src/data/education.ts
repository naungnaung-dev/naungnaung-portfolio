import type { Education } from "@/types/portfolio";

export const education = {
  degree: "Bachelor of Computer Science",
  university: "University of Computer Studies, Meiktila",
  field: "Computer Science / Information Technology",
  period: "December 2016 – August 2021",
  activities: [{ name: "Myanmar IT Contest", location: "Yangon", year: 2019 }],
} as const satisfies Education;
