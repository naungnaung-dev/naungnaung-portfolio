import Link from "next/link";
import { profile } from "@/data/profile";

export function PersonalLogo() {
  return (
    <Link
      href="/"
      aria-label={`${profile.name} — Back to top`}
      className="inline-flex min-h-11 shrink-0 items-center gap-2.5 rounded-md sm:gap-3"
    >
      <span aria-hidden="true" className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-lg font-semibold tracking-tight text-heading">
        NN<span className="text-accent">.</span>
      </span>
      <span className="text-base font-semibold tracking-tight text-heading sm:text-lg">{profile.name}</span>
    </Link>
  );
}
