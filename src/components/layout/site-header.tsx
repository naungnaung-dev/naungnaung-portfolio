import { SectionLink } from "@/components/navigation/section-link";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { profile } from "@/data/profile";
import { navigation } from "@/data/navigation";
import { MobileNavigation } from "@/components/layout/mobile-navigation";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="site-container flex min-h-20 items-center justify-between gap-5">
        <Link href="/#home" aria-label={`${profile.name} — Home`} className="shrink-0 text-lg font-semibold tracking-tight text-heading">
          {profile.name}<span className="text-accent" aria-hidden="true">.</span>
        </Link>
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-0.5 text-sm font-medium">
            {navigation.map((item) => (
              <li key={item.href}><SectionLink className="nav-link" href={item.href} available={item.available}>{item.label}</SectionLink></li>
            ))}
          </ul>
        </nav>
        <Link href="/#contact" className="button-primary hidden shrink-0 lg:inline-flex">
          Let&apos;s Connect <ArrowDown size={16} aria-hidden="true" />
        </Link>
        <MobileNavigation />
      </div>
    </header>
  );
}
