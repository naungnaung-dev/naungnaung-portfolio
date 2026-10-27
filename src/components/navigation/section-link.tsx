"use client";

import type { ReactNode } from "react";

interface SectionLinkProps {
  href: string;
  available: boolean;
  children: ReactNode;
  className?: string;
  onNavigate?: () => void;
  "aria-describedby"?: string;
}

// Preserve future section URLs without navigating to nonexistent targets.
export function SectionLink({
  href,
  available,
  children,
  className,
  onNavigate,
  "aria-describedby": describedBy,
}: SectionLinkProps) {
  return (
    <a
      href={href}
      className={className}
      aria-disabled={available ? undefined : true}
      aria-describedby={describedBy}
      title={available ? undefined : "Coming soon"}
      onClick={(event) => {
        if (!available) event.preventDefault();
        onNavigate?.();
      }}
    >
      {children}
      {!available && <span className="sr-only"> (coming soon)</span>}
    </a>
  );
}
