"use client";

import { useEffect, useId, useRef, useState } from "react";
import { SectionLink } from "@/components/navigation/section-link";
import { Menu, X } from "lucide-react";
import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 64rem)");
    function resetOnDesktop() {
      if (desktop.matches) setOpen(false);
    }
    desktop.addEventListener("change", resetOnDesktop);
    return () => desktop.removeEventListener("change", resetOnDesktop);
  }, []);

  function close() {
    setOpen(false);
    toggleRef.current?.focus();
  }

  return (
    <div className="lg:hidden" onBlur={(event) => {
      // A disclosure should not remain over the page after tabbing out.
      if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
    }} onKeyDown={(event) => {
      if (event.key === "Escape" && open) {
        event.preventDefault();
        close();
      }
    }}>
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => setOpen((current) => !current)}
        className="flex size-11 items-center justify-center rounded-lg border border-border text-heading hover:bg-surface"
      >
        {open ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
      </button>
      <nav id={panelId} aria-label="Mobile primary" hidden={!open} className="absolute inset-x-0 top-full max-h-[calc(100dvh-5rem)] overflow-y-auto border-b border-border bg-background px-5 py-4 shadow-sm">
        <ul className="site-container grid gap-1">
          {navigation.map((item) => (
            <li key={item.href}>
              <SectionLink href={item.href} available={item.available} onNavigate={close} className="nav-link w-full text-sm font-medium">{item.label}</SectionLink>
            </li>
          ))}
          <li className="mt-3">
            <a href={profile.links.linkedin} className="button-primary w-full" onClick={close}>Let&apos;s Connect</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
