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
          These projects have given me different ways to explore 
          the questions behind Human-Centered AI. The work below 
          focuses on the problem I was trying to understand, the 
          constraints I had to work within, the decisions I made, 
          and the tradeoffs that shaped the result.
        </p>
      </Section>

      <Section title="Projects">
        <div className="grid gap-6 sm:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 80} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section title="Supporting Work">
        <div className="grid gap-6 sm:grid-cols-2">
          {supportingProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 80} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Section>
    </main>
  );
}
