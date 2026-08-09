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

          {project.links && project.links.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-4">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
                >
                  <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4 fill-current">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </Reveal>

        <div className="mt-12 flex flex-col gap-6">
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

        <div className="mt-16 border-t border-border pt-8">
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
