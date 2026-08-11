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
              I&apos;m a second-year student at Drexel University from Los Angeles, California. 
              Outside of school, I DJ for events, play soccer, and spend time at the gym. Whether I&apos;m reading
              a room while DJing, anticipating how teammates will move on the field, or reflecting on how I approach 
              problems, I&apos;ve learned to pay attention to how people think, react, and adapt in different situations.
            </p>
            <p>
              I became interested in computer science early, but as I learned more, I realized the questions I cared 
              about weren't just technical. I became interested in how people interact with these systems, how they 
              influence the decisions we make, and what we gain or lose as AI becomes part of our everyday lives. 
              Understanding these systems meant understanding the people using them. That insight is why I designed my own major 
              through the Pennoni Honors College, called Human-Centered Artificial Intelligence.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section title="My HCAI Journey">
        <JourneyTimeline />
      </Section>

      <Section>
        <Reveal>
          <div className="mt-10">
            <Link href="/projects" className="text-sm font-medium text-accent hover:underline">
              View all projects →
            </Link>
          </div>
        </Reveal>
      </Section>
    </main>
  );
}
