import type { JourneyBeat } from "./types";

/**
 * The five-beat narrative behind the HCAI major: observation, evidence,
 * harm, response, direction. Rendered in order on the About page.
 */
export const journey: JourneyBeat[] = [
  {
    slug: "the-shortcut",
    label: "01: Observation",
    title: "A tool to think with, used as a shortcut",
    body: [
      `When ChatGPT was released in late 2022, many people around me saw 
      it mainly as a shortcut for schoolwork or a path to primarily make profit. 
      I was more curious about how it could support creativity and expand ideas. 
      That curiosity pushed me to explore AI independently and learn more about how 
      the systems work, recognize key patterns, and how to use it responsibly.`,

      `At the same time, I started noticing a tension. A tool that could help people 
      develop ideas could also make it easier to skip the thinking behind them. I became 
      interested in where that line was and what happens when support slowly turns into dependence.`,
    ],
  },
  {
    slug: "the-evidence",
    label: "02: Evidence",
    title: "600+ students, and a pattern I could not ignore",
    body: [
    `I wanted to test whether my observations held up at scale, so I surveyed 
    more than 600 students about their use of AI. Their responses pointed to a 
    growing reliance on these tools alongside concerns around independent thinking and creativity.`,
    
    `The project changed the way I looked at AI adoption. I became less interested in whether people used
    AI more, and started wondering in what they were letting AI do for them. If these systems are going to 
    become part of everyday learning and decision making, I think we also have to ask what people should continue practicing for themselves.`,
    ],
  },
  {
    slug: "the-harms",
    label: "03: Questions",
    title: "The systems themselves were part of the problem",
    body: [
      `As I learned more, I realized that responsible AI could not depend only on people using the 
      technology carefully. The systems themselves could hallucinate information, reproduce biases 
      from their training data, or reflect political and cultural forces in the way they responded. 
      I'd seen this firsthand with DeepSeek denying Taiwan's independence and ChatGPT hallucinating 
      and perpetuating gender biases. These issues stem from algorithmic bias in the data used to train them.`,

      `That shifted the question for me. I wanted to understand not only how people should use AI, but how 
      the systems themselves should be built, evaluated, and governed. If AI is going to influence how people 
      learn, communicate, and make decisions, then technical performance alone is not enough to determine 
      whether a system is working well.`,
    ],
  },
  {
    slug: "the-response",
    label: "04: Response",
    title: "A major that did not exist yet",
    body: [
      `The questions I wanted to study did not fit neatly inside one traditional major. Computer science 
      could help me understand how intelligent systems are built. Ethics and science, technology, and society 
      could help me examine fairness, accountability, and the forces that shape technology. Psychology and 
      human computer interaction could help me understand how people think, make decisions, and interact 
      with the systems around them.`,

      `Through the Pennoni Honors College, I created Human Centered Artificial Intelligence to bring those 
      perspectives together. I did not want to study AI only as a technical system. I wanted a path that 
      would let me build and evaluate the technology while also questioning how it should affect the people 
      who use it.`,
    ],
  },
  {
    slug: "the-direction",
    label: "05: Direction",
    title: "Still figuring out what Human-Centered AI can become",
    bodyColor: "foreground",
    body: [
      `Creating the major gave me a direction, not a finished answer. My projects, research, coursework, 
      and work experience are helping me figure out which problems I want to pursue more deeply and what 
      Human Centered Artificial Intelligence should look like in practice.`,

      `My interests will probably continue to change as I learn more. Right now, I'm focused on learning how 
      to evaluate and build systems responsibly through my projects, coursework, and work experience. 
      Eventually, I want to contribute to how we govern and build AI so these systems remain accountable 
      to the people they affect.`,
    
    ],
  },
];
