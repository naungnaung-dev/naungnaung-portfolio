import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="site-container flex flex-col gap-3 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>{profile.name} · {profile.title}</p>
        <nav aria-label="Footer professional links" className="flex flex-wrap gap-x-5">
          <a href={profile.links.linkedin} className="inline-flex min-h-11 items-center font-medium hover:text-accent">LinkedIn</a>
          <a href={profile.links.github} className="inline-flex min-h-11 items-center font-medium hover:text-accent">GitHub</a>
        </nav>
      </div>
    </footer>
  );
}
