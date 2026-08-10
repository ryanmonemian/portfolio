export type JourneyBeat = {
  slug: string;
  label: string;
  title: string;
  body: string[];
  /** Body text color; defaults to muted if omitted. */
  bodyColor?: "muted" | "foreground";
};

export type ProjectCategory =
  | "AI Ethics"
  | "AI Safety"
  | "Applied AI"
  | "Data Systems"
  | "Accessibility"
  | "Research";

export type Project = {
  slug: string;
  title: string;
  oneLiner: string;
  category: ProjectCategory;
  featured: boolean;
  timeframe: string;
  tech: string[];
  links?: { label: string; href: string; icon: "github" | "drive" | "arcgis" }[];
  /** The harm, risk, or failure mode this project responds to. */
  problem: string;
  /** The real-world constraints shaping the design (org, technical, ethical). */
  context: string;
  /** What was actually built or done. */
  process: string;
  /** The competing values/goals in tension, and how they were weighed. */
  tradeoffs: string;
  /** What it proved, and how it changed the author's thinking. */
  outcome: string;
};

export type FocusArea = {
  title: string;
  description: string;
};
