import { ArrowUpRight } from "lucide-react";
import { contact } from "@/data/contact";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="border-t border-border bg-background">
      <div className="site-container grid gap-8 py-12 sm:py-24 lg:grid-cols-[1.6fr_1fr] lg:gap-12 lg:py-28">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">Contact</p>
          <h2 id="contact-heading" className="mt-3 text-3xl font-semibold tracking-tight text-heading sm:text-4xl">{contact.heading}</h2>
          <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-muted sm:text-lg">
            {contact.introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {contact.links.map((link, index) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className={index === 0 ? "button-primary" : "button-secondary"}>
                {link.label} <ArrowUpRight size={17} aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ))}
          </div>
        </div>
        <div className="min-w-0 self-start rounded-xl border border-border bg-surface p-5 sm:p-7">
          <dl className="space-y-5 text-sm">
            <div><dt className="text-muted">Based in</dt><dd className="mt-1 font-medium text-heading">{profile.location}</dd></div>
            <div><dt className="text-muted">Nationality</dt><dd className="mt-1 font-medium text-heading">{profile.nationality}</dd></div>
            <div><dt className="text-muted">Open to</dt><dd className="mt-1 leading-relaxed text-heading">{profile.employment.types.join(" · ")}</dd></div>
          </dl>
          <p className="mt-5 border-t border-border pt-5 text-sm leading-relaxed text-muted">{profile.employment.note}</p>
        </div>
      </div>
    </section>
  );
}
