import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/profile";
import { featuredProjects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

export default function Home() {
  return (
    <main className="flex-1">
      <section className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-28 sm:py-36 md:flex-row md:items-center md:gap-12">
        <Image
          src="/images/headshot.png"
          alt={profile.name}
          width={800}
          height={800}
          priority
          className="animate-fade-in-up h-32 w-32 shrink-0 rounded-full border-4 border-accent object-cover shadow-sm sm:h-40 sm:w-40"
        />

        <div className="flex-1">
          <p className="animate-fade-in-up mb-4 font-mono text-sm text-accent">Hi, I&apos;m</p>
          <h1
            className="animate-fade-in-up font-heading text-4xl font-bold tracking-tight sm:text-6xl"
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
            className="animate-fade-in-up mt-8 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "300ms" }}
          >
            <a
              href="/assets/RyanMonemianResume.pdf"
              download
              className="rounded-full bg-cta px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Download Resume
            </a>
            <Link
              href="/about"
              className="rounded-full border border-accent px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-background"
            >
              Read my thesis
            </Link>
            <Link
              href="/projects"
              className="text-sm font-medium text-accent hover:underline"
            >
              See the work
            </Link>
          </div>
        </div>
      </section>

      <Section>
        <Reveal>
          <p className="max-w-3xl text-lg leading-relaxed text-muted sm:text-xl">
            I work to regulate and build human-centered AI, focusing on systems designed to
            enhance human agency and creativity rather than erode it. My work sits at the
            intersection of CS, AI ethics, and HCI. I want to make sure AI expands human potential
            instead of replacing it.
          </p>
        </Reveal>
      </Section>

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
