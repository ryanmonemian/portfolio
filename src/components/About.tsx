import Section from "@/components/Section";

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "GraphQL",
  "Tailwind CSS",
  "AWS",
];

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-10 sm:grid-cols-3">
        <div className="sm:col-span-2">
          <p className="text-lg leading-relaxed text-muted">
            I&apos;m a full-stack engineer with a few years of experience turning ideas into
            polished, production-ready products. I care about clean interfaces, fast performance,
            and code that&apos;s easy for the next person to work with. When I&apos;m not coding,
            you&apos;ll find me exploring new coffee shops or contributing to open source.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-mono text-xs font-semibold uppercase tracking-widest text-muted">
            Skills
          </h3>
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-border px-3 py-1 text-sm text-foreground"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
