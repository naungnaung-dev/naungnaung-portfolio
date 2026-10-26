import Link from "next/link";
import { profile } from "@/data/profile";

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-background">
      <div className="site-container flex flex-wrap items-center justify-between gap-4 py-5">
        <Link href="/" aria-label={`${profile.name} — Home`} className="text-lg font-semibold tracking-tight text-heading">
          {profile.name}<span className="text-accent" aria-hidden="true">.</span>
        </Link>
        <nav aria-label="Primary" className="flex flex-wrap gap-1 text-sm font-medium">
          <a className="nav-link" href={profile.links.github}>GitHub</a>
          <a className="nav-link" href={profile.links.linkedin}>LinkedIn</a>
        </nav>
      </div>
    </header>
  );
}
