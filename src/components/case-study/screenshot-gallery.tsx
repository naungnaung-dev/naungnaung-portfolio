import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { ProjectScreenshot } from "@/data/askonce-screenshots";

export function ScreenshotGallery({ screenshots }: { screenshots: readonly ProjectScreenshot[] }) {
  return (
    <div className="space-y-8 sm:space-y-10">
      {screenshots.map((screenshot) => (
        <figure key={screenshot.id} aria-labelledby={`screenshot-${screenshot.id}`} className="min-w-0 rounded-xl border border-border bg-background">
          <Image
            src={screenshot.image}
            alt={screenshot.alt}
            loading="lazy"
            placeholder="blur"
            sizes="(min-width: 1152px) 1056px, (min-width: 640px) 92vw, calc(100vw - 40px)"
            className="block h-auto w-full rounded-t-xl border-b border-border"
          />
          <figcaption className="p-5 sm:p-6">
            <h3 id={`screenshot-${screenshot.id}`} className="text-lg font-semibold tracking-tight text-heading">{screenshot.title}</h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">{screenshot.caption}</p>
            <a href={screenshot.original} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-md text-sm font-medium text-accent hover:text-accent-hover">
              View full-size image <ArrowUpRight size={15} aria-hidden="true" />
              <span className="sr-only">: {screenshot.title} (opens in a new tab)</span>
            </a>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
