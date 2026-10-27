// These anchor IDs are also the contract for upcoming homepage sections.
// Set available to true when each corresponding section is implemented.
export const navigation = [
  { label: "Home", href: "/#home", available: true },
  { label: "About", href: "/#about", available: false },
  { label: "Skills", href: "/#skills", available: false },
  { label: "Experience", href: "/#experience", available: false },
  { label: "Projects", href: "/#projects", available: false },
  { label: "Education", href: "/#education", available: false },
  { label: "Contact", href: "/#contact", available: false },
] as const;
