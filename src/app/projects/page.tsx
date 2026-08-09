import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects in AI ethics, safety, and human-centered design.",
};

const featuredProjects = projects.filter((p) => p.featured);
const supportingProjects = projects.filter((p) => !p.featured);

export default function ProjectsPage() {
  return (
    <main className="flex-1">
      <Section>
        <p className="max-w-2xl text-lg text-muted">
          Each of these started with a harm I wanted to understand, not a technology I wanted to
          use. The projects below walk through the problem, the constraints I was actually
          working inside, and what I learned about the tradeoffs.
        </p>
      </Section>

      <Section title="Projects">
        <div className="grid gap-6 sm:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section title="Also">
        <div className="grid gap-6 sm:grid-cols-2">
          {supportingProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Section>
    </main>
  );
}
