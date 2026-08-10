import type { Metadata } from "next";
import { profile, focusAreas } from "@/data/profile";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import LinkIcon, { type LinkIconName } from "@/components/LinkIcon";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${profile.name} about ${profile.goalRoles.join(", ")} roles.`,
};

const socials: { icon: LinkIconName; label: string; href: string; value: string }[] = [
  { icon: "mail", label: "Email", href: `mailto:${profile.email}`, value: profile.email },
  { icon: "github", label: "GitHub", href: `https://${profile.github}`, value: profile.github },
  {
    icon: "linkedin",
    label: "LinkedIn",
    href: `https://${profile.linkedin}`,
    value: profile.linkedin,
  },
];

export default function ContactPage() {
  return (
    <main className="flex-1">
      <Section title="Contact">
        <div className="max-w-2xl">
          <Reveal>
            <h1 className="font-heading text-2xl font-semibold sm:text-3xl">
              Let&apos;s work together.
            </h1>
            <p className="mt-4 text-lg text-muted">
              I&apos;m looking for roles in {profile.goalRoles.join(", ")}. If you&apos;re working
              on any of that, or just want to talk through a hard tradeoff in a system you&apos;re
              building, my inbox is open.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <ul className="mt-8 flex flex-col gap-3">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group flex items-center gap-3 text-sm"
                  >
                    <span className="text-muted transition-colors group-hover:text-accent">
                      <LinkIcon name={social.icon} />
                    </span>
                    <span className="text-foreground transition-colors group-hover:text-accent">
                      {social.value}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section title="What I'm looking for">
        <div className="grid gap-6 sm:grid-cols-3">
          {focusAreas.map((area, i) => (
            <Reveal key={area.title} delay={i * 80}>
              <div className="rounded-2xl border border-border p-6">
                <h3 className="font-heading font-semibold">{area.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{area.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </main>
  );
}
