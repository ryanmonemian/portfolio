import Link from "next/link";
import type { Metadata } from "next";
import { profile } from "@/data/profile";
import JourneyTimeline from "@/components/JourneyTimeline";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description: profile.thesis,
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <Section title="About Me">
        <Reveal>
          <div className="max-w-2xl text-lg leading-relaxed text-muted">
            <p>
              I&apos;m a second-year student at Drexel University from Los Angeles, California. I
              DJ for events, play soccer, and spend time at the gym. I&apos;m interested in how
              people think, create, and make decisions. These areas teach me to read a room,
              adapt, and stay consistent over time.
            </p>
            <p>
              I became interested in computer science early, but over time my focus shifted. Instead of following a traditional major like CS or Psychology, I designed my own
              major through the Pennoni Honors College, called Human-Centered Artificial
              Intelligence.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section title="My HCAI Journey">
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
