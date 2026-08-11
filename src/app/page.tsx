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
          <p className="animate-fade-in-up mb-4 text-sm text-accent">Hi, I&apos;m</p>
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
            <Link
              href="/projects"
              className="rounded-full bg-cta px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              See the work
            </Link>
            <a
              href="/assets/RyanMonemianResume.pdf"
              download
              className="rounded-full border border-accent px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-background"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      <Section title="Why Human-Centered AI">
        <Reveal>
          <div className="max-w-3xl text-lg leading-relaxed text-foreground">
            <p>
              I became interested in AI for its ideation possibilities and what it could add to how people think and create. 
              As I learned more, I also started noticing people relying on generated answers without 
              engaging with the thinking behind them. Problems like bias and hallucination made me question 
              not only how people use AI, but how these systems are built and what happens when we begin to rely on them.
            </p>
            <p>
              Those questions pushed me beyond treating AI as only a technical problem. Through the Pennoni 
              Honors College at Drexel, I created Human Centered Artificial Intelligence to bring together 
              computer science, AI ethics, and human computer interaction.
            </p>
          </div>

          <Link
            href="/about"
            className="mt-6 inline-flex text-sm font-medium text-accent hover:underline"
          >
            Read my path →
          </Link>
        </Reveal>
      </Section>

      <Section title="Selected work">
        <div className="grid gap-6 sm:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 80} className="h-full">
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
