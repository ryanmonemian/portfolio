import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import type { Project } from "@/data/types";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.oneLiner,
  };
}

const caseStudySections: { key: keyof Project; label: string }[] = [
  { key: "problem", label: "The problem" },
  { key: "context", label: "The constraints" },
  { key: "process", label: "What I built" },
  { key: "tradeoffs", label: "The tradeoffs" },
  { key: "outcome", label: "What it proved" },
];

export default async function ProjectCaseStudyPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <main className="flex-1">
      <Section>
        <Link
          href="/projects"
          className="text-sm text-muted transition-colors hover:text-accent"
        >
          ← All projects
        </Link>

        <Reveal className="mt-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">
              {project.category}
            </span>
            <span className="font-mono text-xs text-muted">{project.timeframe}</span>
          </div>
          <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">{project.oneLiner}</p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li
                key={t}
                className="rounded-full bg-foreground/5 px-3 py-1 font-mono text-xs text-muted"
              >
                {t}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-16 flex flex-col gap-12">
          {caseStudySections.map(({ key, label }, i) => (
            <Reveal key={key} delay={i * 60}>
              <h2 className="mb-3 font-mono text-sm font-semibold uppercase tracking-widest text-accent">
                {label}
              </h2>
              <p className="max-w-3xl text-lg leading-relaxed text-muted">
                {project[key] as string}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 border-t border-border pt-8">
          <p className="text-sm text-muted">Next project</p>
          <Link
            href={`/projects/${next.slug}`}
            className="mt-2 inline-flex items-center gap-1 font-heading text-xl font-semibold transition-colors hover:text-accent"
          >
            {next.title} →
          </Link>
        </div>
      </Section>
    </main>
  );
}
