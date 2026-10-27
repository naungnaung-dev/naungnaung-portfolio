import { education } from "@/data/education";

export function Education() {
  return (
    <section id="education" aria-labelledby="education-heading" className="border-t border-border bg-surface">
      <div className="site-container py-12 sm:py-16 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">Academic background</p>
        <h2 id="education-heading" className="mt-3 text-3xl font-semibold tracking-tight text-heading sm:text-4xl">Education</h2>
        <div className="mt-8 rounded-xl border border-border bg-background p-5 sm:mt-10 sm:p-8">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:gap-8">
            <div className="min-w-0">
              <h3 className="text-xl font-semibold tracking-tight text-heading sm:text-2xl">{education.degree}</h3>
              <p className="mt-2 font-medium text-accent">{education.university}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{education.field}</p>
            </div>
            <p className="text-sm leading-relaxed text-muted">{education.period}</p>
          </div>
          <div className="mt-6 border-t border-border pt-6">
            <h4 className="text-sm font-semibold text-heading">Additional activity</h4>
            <ul className="mt-2 space-y-2 text-sm leading-relaxed text-muted">
              {education.activities.map((activity) => (
                <li key={`${activity.name}-${activity.year}`}>{activity.name} — {activity.location}, {activity.year}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
