import Link from "next/link";
import type { Project } from "@/data/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group flex flex-col rounded-2xl border border-border transition-colors hover:border-accent ${
        project.featured ? "p-6" : "p-5"
      }`}
    >
      <div className="mb-3 flex items-center justify-between gap-2">
        <span className="font-mono text-xs uppercase tracking-widest text-accent">
          {project.category}
        </span>
        <span className="font-mono text-xs text-muted">{project.timeframe}</span>
      </div>

      <h3
        className={`font-heading font-semibold transition-colors group-hover:text-accent ${
          project.featured ? "text-lg" : "text-base"
        }`}
      >
        {project.title}
      </h3>

      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.oneLiner}</p>

      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
        View project
        <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}
