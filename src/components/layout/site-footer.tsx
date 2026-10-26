import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="site-container flex flex-col gap-2 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>{profile.name} · {profile.title}</p>
        <p>{profile.location}</p>
      </div>
    </footer>
  );
}
