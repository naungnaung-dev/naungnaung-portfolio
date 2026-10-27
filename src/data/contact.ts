import { profile } from "@/data/profile";
import type { Contact } from "@/types/portfolio";

export const contact: Contact = {
  heading: "Let's Work Together",
  introduction: [
    "I'm open to opportunities to contribute to software engineering teams and develop meaningful web applications.",
    "Feel free to connect with me to discuss full-time, part-time, contract, or freelance opportunities.",
  ],
  links: [
    { label: "Connect on LinkedIn", href: profile.links.linkedin },
    { label: "View GitHub", href: profile.links.github },
  ],
  // No email is configured until a verified professional address is supplied.
};
