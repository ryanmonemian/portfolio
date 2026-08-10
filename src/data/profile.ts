import type { FocusArea } from "./types";

export const profile = {
  name: "Ryan Monemian",
  headline: "Building AI that extends judgment instead of replacing it.",
  thesis:
    "I work to regulate and build human-centered AI, focusing on systems designed to enhance human agency and creativity rather than erode it. My work sits at the intersection of CS, AI ethics, and HCI. I want to make sure AI expands human potential instead of replacing it.",
  goalRoles: ["Trust & Safety Engineering", "AI Governance", "Content Moderation"],
  email: "ryanmonemian@gmail.com",
  github: "github.com/ryanmonemian",
  linkedin: "linkedin.com/in/ryan-monemian",
  location: "Philadelphia, PA 19104",
  phone: "661-714-7863",
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
