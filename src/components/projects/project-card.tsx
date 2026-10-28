import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/portfolio";

export function ProjectCard({ project }: { project: Project }) {
  const headingId = `project-${project.slug}`;

  return (
    <article aria-labelledby={headingId} className="min-w-0 overflow-hidden rounded-2xl border border-border bg-background">
      <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[1.6fr_1fr] lg:gap-12 lg:p-10">
        <div className="min-w-0">
          <p className="text-xs font-medium leading-relaxed text-accent">{project.category}</p>
          <h3 id={headingId} className="mt-3 text-3xl font-semibold tracking-tight text-heading sm:text-4xl">{project.name}</h3>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">{project.description}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {project.caseStudyPath && (
              <Link href={project.caseStudyPath} className="button-primary">
                View Case Study <ArrowRight size={17} aria-hidden="true" />
                <span className="sr-only"> for {project.name}</span>
              </Link>
            )}
            <a href={project.website} target="_blank" rel="noopener noreferrer" className={project.caseStudyPath ? "button-secondary" : "button-primary"}>
              Live Website <ArrowUpRight size={17} aria-hidden="true" />
              <span className="sr-only"> for {project.name} (opens in a new tab)</span>
            </a>
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="button-secondary">
              Explore Demo <ArrowUpRight size={17} aria-hidden="true" />
              <span className="sr-only"> for {project.name} (opens in a new tab)</span>
            </a>
          </div>
        </div>
        <div className="min-w-0 rounded-xl border border-border bg-surface p-5 sm:p-6">
          <dl className="space-y-4 text-sm">
            <div><dt className="text-muted">My role</dt><dd className="mt-1 font-medium text-heading">{project.role}</dd></div>
            <div><dt className="text-muted">Period</dt><dd className="mt-1 font-medium text-heading">{project.period}</dd></div>
          </dl>
          <h4 id={`${headingId}-stack`} className="mt-6 text-sm font-semibold text-heading">Technology stack</h4>
          <ul aria-labelledby={`${headingId}-stack`} className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <li key={technology} className="max-w-full rounded-md border border-border bg-background px-2.5 py-1 text-xs leading-relaxed text-foreground wrap-anywhere">{technology}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid gap-8 border-t border-border bg-surface p-5 sm:grid-cols-2 sm:p-8 lg:gap-12 lg:p-10">
        <div className="min-w-0">
          <h4 className="text-base font-semibold text-heading">Key features</h4>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted marker:text-accent">
            {project.features.map((feature) => <li key={feature} className="pl-1">{feature}</li>)}
          </ul>
        </div>
        <div className="min-w-0">
          <h4 className="text-base font-semibold text-heading">My contributions</h4>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted marker:text-accent">
            {project.contributions.map((contribution) => <li key={contribution} className="pl-1">{contribution}</li>)}
          </ul>
        </div>
      </div>
    </article>
  );
}
