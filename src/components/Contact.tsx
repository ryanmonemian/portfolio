import Section from "@/components/Section";

const socials = [
  { label: "Email", href: "mailto:jane.doe@example.com", value: "jane.doe@example.com" },
  { label: "GitHub", href: "https://github.com", value: "github.com/janedoe" },
  { label: "LinkedIn", href: "https://linkedin.com", value: "linkedin.com/in/janedoe" },
];

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="max-w-2xl">
        <h3 className="text-2xl font-semibold sm:text-3xl">Let&apos;s work together.</h3>
        <p className="mt-4 text-lg text-muted">
          I&apos;m currently open to new opportunities. Whether you have a question or just want
          to say hi, my inbox is always open.
        </p>

        <ul className="mt-8 flex flex-col gap-3">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm"
              >
                <span className="font-mono text-xs uppercase tracking-widest text-muted">
                  {social.label}
                </span>
                <span className="text-foreground transition-colors hover:text-accent">
                  {social.value}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
