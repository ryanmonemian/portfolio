import Link from "next/link";
import { profile } from "@/data/profile";
import { featuredProjects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

export default function Home() {
  return (
    <main className="flex-1">
      <section className="mx-auto flex max-w-5xl flex-col justify-center px-6 py-28 sm:py-36">
        <p className="animate-fade-in-up mb-4 font-mono text-sm text-accent">Hi, I&apos;m</p>
        <h1
          className="animate-fade-in-up text-4xl font-bold tracking-tight sm:text-6xl"
          style={{ animationDelay: "100ms" }}
        >
          {profile.name}
        </h1>
        <p
          className="animate-fade-in-up mt-4 max-w-2xl text-lg text-muted sm:text-xl"
          style={{ animationDelay: "200ms" }}
        >
          {profile.thesis}
        </p>

        <div
          className="animate-fade-in-up mt-8 flex flex-wrap gap-4"
          style={{ animationDelay: "300ms" }}
        >
          <Link
            href="/about"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Read my thesis
          </Link>
          <Link
            href="/projects"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            See the work
          </Link>
        </div>
      </section>

      <Section title="Selected work">
        <div className="grid gap-6 sm:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10">
          <Link href="/projects" className="text-sm font-medium text-accent hover:underline">
            View all projects →
          </Link>
        </div>
      </Section>
    </main>
  );
}
