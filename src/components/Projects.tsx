import Section from "@/components/Section";

type Project = {
  name: string;
  description: string;
  tags: string[];
  href: string;
};

const projects: Project[] = [
  {
    name: "Project One",
    description:
      "A short description of this project — what it does, the problem it solves, and the impact it had.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    href: "https://github.com",
  },
  {
    name: "Project Two",
    description:
      "A short description of this project — what it does, the problem it solves, and the impact it had.",
    tags: ["React", "Node.js", "GraphQL"],
    href: "https://github.com",
  },
  {
    name: "Project Three",
    description:
      "A short description of this project — what it does, the problem it solves, and the impact it had.",
    tags: ["React Native", "Firebase"],
    href: "https://github.com",
  },
];

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-2xl border border-border p-6 transition-colors hover:border-accent"
          >
            <h3 className="text-lg font-semibold transition-colors group-hover:text-accent">
              {project.name}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
              {project.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-white/5 px-2.5 py-1 font-mono text-xs text-muted"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </Section>
  );
}
