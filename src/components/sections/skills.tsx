import { skills } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="border-t border-border bg-background">
      <div className="site-container py-12 sm:py-24 lg:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">Technical toolkit</p>
        <h2 id="skills-heading" className="mt-3 text-3xl font-semibold tracking-tight text-heading sm:text-4xl">Technical skills</h2>
        <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6">
          {skills.map((group, index) => (
            <div key={group.category} className="min-w-0 rounded-xl border border-border bg-surface p-5 sm:p-7">
              <h3 id={`skill-group-${index}`} className="text-lg font-semibold tracking-tight text-heading">{group.category}</h3>
              <ul aria-labelledby={`skill-group-${index}`} className="mt-5 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li key={skill} className="max-w-full rounded-md border border-border bg-background px-3 py-1.5 text-sm leading-relaxed text-foreground wrap-anywhere">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
