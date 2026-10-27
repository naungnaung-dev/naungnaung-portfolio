import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="border-t border-border bg-background">
      <div className="site-container py-12 sm:py-24 lg:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">Featured Work</p>
        <h2 id="projects-heading" className="mt-3 text-3xl font-semibold tracking-tight text-heading sm:text-4xl">Selected Projects</h2>
        <div className="mt-8 space-y-8 sm:mt-10">
          {projects.filter((project) => project.featured).map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </div>
    </section>
  );
}
