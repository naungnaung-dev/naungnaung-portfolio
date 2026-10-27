import Link from "next/link";
import portrait from "../../../public/naung-naung.jpeg";
import { ProfilePortrait } from "@/components/hero/profile-portrait";
import { ArrowDown, ArrowUpRight, Code2, MapPin } from "lucide-react";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-heading" className="relative isolate overflow-hidden bg-background">
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-1/2 bg-linear-to-l from-surface to-transparent" />
      <div className="site-container py-12 sm:py-20 lg:py-24">
        <div className="grid items-center gap-6 sm:gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-10 xl:gap-16">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-2 text-[0.6875rem] font-semibold tracking-[0.12em] text-accent sm:text-xs">
              <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-accent" />
              OPEN TO WORK OPPORTUNITIES
            </div>
            <h1 id="hero-heading" className="mt-8 max-w-4xl text-4xl font-semibold leading-[1.12] tracking-[-0.045em] text-heading sm:text-6xl lg:text-5xl xl:text-6xl">
              Hi, I&apos;m <span className="block">{profile.name}.</span>
            </h1>
            <p className="mt-4 text-2xl font-medium tracking-tight text-accent sm:mt-5 sm:text-3xl">{profile.title}</p>
            <div className="mt-7 max-w-2xl space-y-3 text-base leading-relaxed text-muted sm:text-lg">
              <p>I build modern, scalable, and user-friendly web applications using React, Next.js, Node.js, and Laravel.</p>
              <p>With {profile.experience} of professional experience, I enjoy turning ideas into reliable, real-world software solutions.</p>
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/#projects" className="button-primary">View My Work <ArrowDown size={17} aria-hidden="true" /></Link>
              <a href={profile.links.linkedin} className="button-secondary">Let&apos;s Connect <ArrowUpRight size={17} aria-hidden="true" /></a>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-muted">
              <span className="text-xs font-normal">Find me on</span>
              <a href={profile.links.github} className="inline-flex min-h-11 items-center gap-1.5 hover:text-accent">GitHub <ArrowUpRight size={14} aria-hidden="true" /></a>
              <a href={profile.links.linkedin} className="inline-flex min-h-11 items-center gap-1.5 hover:text-accent">LinkedIn <ArrowUpRight size={14} aria-hidden="true" /></a>
            </div>
          </div>
          <ProfilePortrait image={portrait} alt={`Portrait of ${profile.name}`} />
        </div>
        <div className="mt-10 grid gap-6 border-t border-border pt-7 text-sm sm:mt-12 md:grid-cols-[1fr_1.2fr] md:gap-10">
          <p className="flex items-start gap-3 text-muted"><MapPin size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" /><span className="min-w-0">From {profile.nationality} <span aria-hidden="true">•</span> Based in {profile.location}</span></p>
          <div className="flex items-start gap-3 text-muted"><Code2 size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" /><div className="min-w-0"><p>Open to Full-Time, Part-Time, Contract, and Freelance Opportunities.</p><p className="mt-1 text-xs">{profile.employment.note}</p></div></div>
        </div>
      </div>
    </section>
  );
}
