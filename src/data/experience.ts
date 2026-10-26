import type { Experience } from "@/types/portfolio";

// Organization names only; ordering does not imply chronology.
// Roles, employment dates, and responsibilities await verified details.
export const experience = [
  { organization: "Viatick" },
  { organization: "Uplyrn" },
  { organization: "Pinnacle Venture Myanmar" },
] as const satisfies readonly Experience[];
