import Link from "next/link";
import type { Metadata } from "next";
import { profile } from "@/data/profile";
import JourneyTimeline from "@/components/JourneyTimeline";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: `About — ${profile.name}`,
  description: profile.thesis,
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <Section title="About">
        <Reveal>
          <p className="max-w-3xl text-2xl font-medium leading-snug sm:text-3xl">
            {profile.thesis}
          </p>
        </Reveal>
      </Section>

      <Section>
        <JourneyTimeline />
      </Section>

      <Section>
        <Reveal>
          <div className="max-w-2xl rounded-2xl border border-border p-8">
            <p className="text-lg text-muted">
              Every project since has tested the same question against something real, not just
              against a hypothetical.
            </p>
            <Link
              href="/projects"
              className="mt-4 inline-flex text-sm font-medium text-accent hover:underline"
            >
              See how →
            </Link>
          </div>
        </Reveal>
      </Section>
    </main>
  );
}
