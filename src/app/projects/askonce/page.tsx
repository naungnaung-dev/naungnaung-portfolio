import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { CaseStudySection } from "@/components/case-study/case-study-section";
import { askOnceCaseStudy as study } from "@/data/askonce-case-study";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: study.title,
  description: study.description,
  openGraph: {
    title: `${study.title} | ${profile.name}`,
    description: study.description,
    type: "article",
    locale: "en_US",
    siteName: `${profile.name} — Portfolio`,
  },
  twitter: {
    card: "summary",
    title: `${study.title} | ${profile.name}`,
    description: study.description,
  },
};

function ProjectLinks() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <a href={study.project.website} target="_blank" rel="noopener noreferrer" className="button-primary">
        Live Website <ArrowUpRight size={17} aria-hidden="true" />
        <span className="sr-only"> for AskOnce (opens in a new tab)</span>
      </a>
      <a href={study.project.demo} target="_blank" rel="noopener noreferrer" className="button-secondary">
        Explore Demo <ArrowUpRight size={17} aria-hidden="true" />
        <span className="sr-only"> for AskOnce (opens in a new tab)</span>
      </a>
    </div>
  );
}

export default function AskOnceCaseStudyPage() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 bg-background">
      <article aria-labelledby="case-study-heading">
        <header className="site-container py-10 sm:py-16 lg:py-20">
          <Link href="/#projects" className="inline-flex min-h-11 items-center gap-2 rounded-md text-sm font-medium text-muted hover:text-accent">
            <ArrowLeft size={16} aria-hidden="true" /> Back to Projects
          </Link>
          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.12em] text-accent">Technical case study</p>
          <h1 id="case-study-heading" className="mt-4 text-4xl font-semibold tracking-tight text-heading sm:text-6xl">{study.project.name}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted sm:text-xl">{study.introduction}</p>
          <dl className="mt-8 grid gap-5 rounded-xl border border-border bg-surface p-5 text-sm sm:grid-cols-2 sm:p-7 lg:grid-cols-3">
            <div className="min-w-0"><dt className="text-muted">Role</dt><dd className="mt-1 font-medium text-heading">{study.project.role}</dd></div>
            <div className="min-w-0"><dt className="text-muted">Period</dt><dd className="mt-1 font-medium text-heading">{study.project.period}</dd></div>
            <div className="min-w-0"><dt className="text-muted">Category</dt><dd className="mt-1 font-medium text-heading">{study.category}</dd></div>
          </dl>
          <div className="mt-7"><ProjectLinks /></div>
          <nav aria-label="Case study sections" className="mt-9 border-t border-border pt-5">
            <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
              {Object.values(study.sections).map((section) => (
                <li key={section.id}><a href={`#${section.id}`} className="inline-flex min-h-11 items-center rounded-md hover:text-accent">{section.title}</a></li>
              ))}
            </ul>
          </nav>
        </header>

        <CaseStudySection section={study.sections.overview}>
          {study.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </CaseStudySection>
        <CaseStudySection section={study.sections.problem}>
          <p>{study.problem.introduction}</p>
          <ul className="list-disc space-y-2 pl-5 marker:text-accent">
            {study.problem.questions.map((question) => <li key={question} className="pl-1">{question}</li>)}
          </ul>
          <p>{study.problem.conclusion}</p>
        </CaseStudySection>
        <CaseStudySection section={study.sections.solution}>
          <p>{study.solution}</p>
        </CaseStudySection>
        <CaseStudySection section={study.sections.features}>
          <ul className="space-y-5">
            {study.features.map((feature) => (
              <li key={feature.title}><h3 className="font-semibold text-heading">{feature.title}</h3><p className="mt-1">{feature.description}</p></li>
            ))}
          </ul>
        </CaseStudySection>
        <CaseStudySection section={study.sections.stack}>
          <div className="space-y-6">
            {study.stack.map((group) => (
              <div key={group.category}>
                <h3 className="font-semibold text-heading">{group.category}</h3>
                <ul aria-label={`${group.category} technologies`} className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((technology) => <li key={technology} className="max-w-full rounded-md border border-border bg-surface px-3 py-1.5 text-sm text-foreground wrap-anywhere">{technology}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </CaseStudySection>
        <CaseStudySection section={study.sections.architecture}>
          <p>The components below describe high-level responsibilities. Infrastructure topology, request sequencing, and staging configuration are not specified here.</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {study.architecture.map((component) => (
              <div key={component.title} className="min-w-0 rounded-xl border border-border bg-surface p-5">
                <h3 className="font-semibold text-heading">{component.title}</h3>
                <p className="mt-2 text-sm leading-relaxed">{component.description}</p>
              </div>
            ))}
          </div>
        </CaseStudySection>
        <CaseStudySection section={study.sections.contributions}>
          <p>My hands-on work spans product planning, implementation, and ongoing delivery across these areas.</p>
          <ul className="space-y-5">
            {study.contributions.map((contribution) => (
              <li key={contribution.title}><h3 className="font-semibold text-heading">{contribution.title}</h3><p className="mt-1">{contribution.description}</p></li>
            ))}
          </ul>
        </CaseStudySection>
        <CaseStudySection section={study.sections.decisions}>
          <p>These considerations follow from the known project scope. Specific implementation trade-offs, incidents, and measured outcomes are not documented here.</p>
          <div className="space-y-6">
            {study.decisions.map((decision) => (
              <div key={decision.title}><h3 className="font-semibold text-heading">{decision.title}</h3><p className="mt-2">{decision.description}</p></div>
            ))}
          </div>
        </CaseStudySection>
        <CaseStudySection section={study.sections.status}>
          {study.status.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </CaseStudySection>
        <CaseStudySection section={study.sections.links}>
          <p>{study.closing}</p>
          <ProjectLinks />
          <Link href="/#projects" className="inline-flex min-h-11 items-center gap-2 rounded-md text-sm font-medium text-accent hover:text-accent-hover">
            <ArrowLeft size={16} aria-hidden="true" /> Back to selected projects
          </Link>
        </CaseStudySection>
      </article>
    </main>
  );
}
