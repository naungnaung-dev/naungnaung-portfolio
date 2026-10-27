import { ChevronDown } from "lucide-react";
import { experience, previousExperience } from "@/data/experience";
import type { Experience as ExperienceEntry } from "@/types/portfolio";

function CareerEntry({ entry, headingId }: { entry: ExperienceEntry; headingId: string }) {
  return (
    <article aria-labelledby={headingId} className="min-w-0">
      <div className="flex flex-col gap-2 lg:flex-row lg:items-start lg:justify-between lg:gap-6">
        <div className="min-w-0">
          <h3 id={headingId} className="text-lg font-semibold leading-snug tracking-tight text-heading sm:text-xl">{entry.role}</h3>
          {entry.organization && <p className="mt-1 font-medium text-accent">{entry.organization}</p>}
        </div>
        <p className="shrink-0 text-sm leading-relaxed text-muted">{entry.period}</p>
      </div>
      {entry.location && (
        <p className="mt-3 text-sm text-muted">{entry.location}{entry.arrangement ? ` — ${entry.arrangement}` : ""}</p>
      )}
      {entry.note && <p className="mt-4 rounded-md border border-border bg-background px-4 py-3 text-sm leading-relaxed text-muted">{entry.note}</p>}
      {entry.responsibilities && (
        <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted marker:text-accent sm:text-base">
          {entry.responsibilities.map((item) => <li key={item} className="pl-1">{item}</li>)}
        </ul>
      )}
      {entry.technologies && (
        <ul aria-label={`Technologies used at ${entry.organization ?? "independent projects"}`} className="mt-5 flex flex-wrap gap-2">
          {entry.technologies.map((technology) => (
            <li key={technology} className="max-w-full rounded-md border border-border bg-background px-2.5 py-1 text-xs leading-relaxed text-foreground wrap-anywhere">{technology}</li>
          ))}
        </ul>
      )}
    </article>
  );
}

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="border-t border-border bg-surface">
      <div className="site-container py-12 sm:py-24 lg:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">Career & contributions</p>
        <h2 id="experience-heading" className="mt-3 text-3xl font-semibold tracking-tight text-heading sm:text-4xl">Professional experience</h2>
        <ol className="mt-9 ml-1.5 border-l border-border sm:mt-12">
          {experience.map((entry, index) => (
            <li key={`${entry.role}-${entry.period}`} className="relative pb-10 pl-6 last:pb-0 sm:pb-12 sm:pl-8">
              <span aria-hidden="true" className={`absolute -left-1.5 top-1.5 size-3 rounded-full border-2 ${index === 0 ? "border-accent bg-accent" : "border-accent bg-surface"}`} />
              <CareerEntry entry={entry} headingId={`experience-role-${index}`} />
            </li>
          ))}
        </ol>
        <details className="group mt-10 rounded-xl border border-border bg-background sm:mt-12">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-5 py-4 font-semibold text-heading [&::-webkit-details-marker]:hidden sm:px-7">
            <span>Previous Experience</span>
            <ChevronDown size={18} aria-hidden="true" className="shrink-0 group-open:rotate-180" />
          </summary>
          <div className="px-5 pb-6 sm:px-7 sm:pb-7">
            <p className="mb-5 text-sm leading-relaxed text-muted">Earlier and overlapping roles are listed with their original dates.</p>
            <ul className="divide-y divide-border">
              {previousExperience.map((entry) => (
                <li key={`${entry.organization}-${entry.period}`} className="py-5 first:pt-0 last:pb-0">
                  <h3 className="font-semibold text-heading">{entry.role}</h3>
                  <p className="mt-1 text-sm text-muted">{entry.organization}</p>
                  <p className="mt-1 text-sm text-muted">{entry.period}</p>
                </li>
              ))}
            </ul>
          </div>
        </details>
      </div>
    </section>
  );
}
