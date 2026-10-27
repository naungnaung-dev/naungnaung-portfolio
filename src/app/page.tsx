import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Experience } from "@/components/sections/experience";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <FeaturedProjects />
    </main>
  );
}
