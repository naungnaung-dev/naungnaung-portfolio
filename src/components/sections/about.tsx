import { aboutParagraphs } from "@/data/about";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="border-t border-border bg-surface">
      <div className="site-container grid gap-8 py-16 sm:py-24 lg:grid-cols-[1fr_2fr] lg:gap-16 lg:py-28">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">Background</p>
          <h2 id="about-heading" className="mt-3 text-3xl font-semibold tracking-tight text-heading sm:text-4xl">About me</h2>
        </div>
        <div className="max-w-2xl space-y-5 text-base leading-relaxed text-muted sm:text-lg">
          {aboutParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
    </section>
  );
}
