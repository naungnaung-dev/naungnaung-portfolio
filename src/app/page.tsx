import { ArrowUpRight, MapPin } from "lucide-react";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} className="site-container flex flex-1 items-center py-20 sm:py-28">
      <div className="max-w-3xl">
        <p className="mb-5 text-sm font-semibold tracking-wide text-accent">{profile.title}</p>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-heading sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{profile.summary}</p>
        <p className="mt-6 flex items-center gap-2 text-sm text-muted">
          <MapPin size={16} aria-hidden="true" />{profile.location}
        </p>
        <a href={profile.links.linkedin} className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover">
          Connect on LinkedIn <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>
    </main>
  );
}
