import { profile } from "@/data/profile";
import LinkIcon, { type LinkIconName } from "@/components/LinkIcon";

const socialLinks: { icon: LinkIconName; href: string; label: string }[] = [
  { icon: "mail", href: `mailto:${profile.email}`, label: "Email" },
  { icon: "github", href: `https://${profile.github}`, label: "GitHub" },
  { icon: "linkedin", href: `https://${profile.linkedin}`, label: "LinkedIn" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.icon}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-muted transition-colors hover:text-accent"
              >
                <LinkIcon name={link.icon} />
              </a>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
            <span className="inline-flex items-center gap-1.5">
              <LinkIcon name="location" />
              {profile.location}
            </span>
          </div>
        </div>

        <div className="mt-6 border-t border-border pt-6 text-sm text-muted">
          <p>
            &copy; {year} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
