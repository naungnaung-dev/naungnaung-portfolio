import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { PersonalLogo } from "@/components/branding/personal-logo";
import { navigation } from "@/data/navigation";
import { MobileNavigation } from "@/components/layout/mobile-navigation";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="site-container flex min-h-20 items-center justify-between gap-5">
        <PersonalLogo />
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-0.5 text-sm font-medium">
            {navigation.map((item) => (
              <li key={item.href}><Link className="nav-link" href={item.href}>{item.label}</Link></li>
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
