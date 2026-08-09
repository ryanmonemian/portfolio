import type { FocusArea } from "./types";

export const profile = {
  name: "Ryan Monemian",
  headline: "Building AI that extends judgment instead of replacing it.",
  thesis:
    "I study and build human-centered AI; systems designed to enhance human agency, not erode it. My work sits at the intersection of CS, AI ethics, and HCI, grounded in one question: does this system make people more capable of thinking for themselves, or less?",
  goalRoles: ["Trust & Safety Engineering", "AI Governance", "Content Moderation"],
  email: "ryanmonemian@gmail.com",
  github: "github.com/ryanmonemian",
  linkedin: "linkedin.com/in/ryan-monemian",
} as const;

export const focusAreas: FocusArea[] = [
  {
    title: "Trust & Safety Engineering",
    description:
      "Building the systems that catch harm before it reaches people; red-teaming, abuse detection, and safety tooling that holds up under adversarial pressure.",
  },
  {
    title: "AI Governance",
    description:
      "Translating fairness metrics and audit findings into policy that actually constrains how systems get built and shipped.",
  },
  {
    title: "Content Moderation",
    description:
      "Designing moderation systems that account for context and bias instead of applying a single blunt rule at scale.",
  },
];
