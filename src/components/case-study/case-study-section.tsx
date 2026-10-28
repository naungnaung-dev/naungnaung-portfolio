import type { ReactNode } from "react";

interface CaseStudySectionProps {
  section: { id: string; title: string };
  children: ReactNode;
}

export function CaseStudySection({ section, children }: CaseStudySectionProps) {
  return (
    <section id={section.id} aria-labelledby={`${section.id}-heading`} className="border-t border-border">
      <div className="site-container grid gap-6 py-10 sm:py-14 lg:grid-cols-[1fr_2fr] lg:gap-16 lg:py-16">
        <h2 id={`${section.id}-heading`} className="text-2xl font-semibold leading-snug tracking-tight text-heading">{section.title}</h2>
        <div className="min-w-0 space-y-5 text-base leading-relaxed text-muted">{children}</div>
      </div>
    </section>
  );
}
