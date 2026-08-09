import type { JourneyBeat } from "./types";

/**
 * The four-beat narrative behind the HCAI major: observation, evidence,
 * harm, response. Rendered in order on the About page.
 */
export const journey: JourneyBeat[] = [
  {
    slug: "the-shortcut",
    label: "01: Observation",
    title: "A tool to think with, used as a shortcut",
    body: "When ChatGPT launched, I watched people around me reach for it the way you would reach for a calculator, not to think through a problem but to skip thinking about it entirely. That gap between using AI as a thinking partner and using it as a shortcut did not feel like a minor detail in how the tool worked; it felt like the whole question I wanted to spend my degree on.",
  },
  {
    slug: "the-evidence",
    label: "02: Evidence",
    title: "600+ students, and a pattern I could not ignore",
    body: "I surveyed more than 600 students to test whether what I was noticing was actually real, and the pattern held; rising dependence on AI tools was correlating with measurable declines in the agency and creative confidence students reported feeling in themselves. They were not simply using a new tool differently; they were outsourcing the parts of thinking that used to belong to them, and the data made that impossible for me to write off as just a feeling.",
  },
  {
    slug: "the-harms",
    label: "03: Harm",
    title: "The failures were not hypothetical",
    body: "Around the same time, the harms I had been reading about stopped being abstract. DeepSeek refused to acknowledge that Taiwan exists. ChatGPT hallucinated facts with total confidence, stating them as though they had been verified. Gender bias showed up unprompted in outputs, embedded deep enough in training data that no one had to go looking for it. None of these were edge cases; they were the default behavior of systems already deployed at a global scale, built largely without the people affected by them in the room.",
  },
  {
    slug: "the-response",
    label: "04: Response",
    title: "A major that did not exist yet",
    body: "No existing major let me hold all of this at once; the technical grounding to build these systems, the ethical framework to interrogate them, and the design discipline to make them serve people instead of managing them. So I built one myself. Human-Centered AI combines CS foundations, AI ethics, and HCI into a single course of study, and every project I have taken on since has tested the same question: does it make people more capable of thinking for themselves, or less?",
  },
];
