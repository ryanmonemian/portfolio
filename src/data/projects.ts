import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "fairlearn-bias-audit",
    title: "Recidivism Bias Audit",
    oneLiner:
      "What happens when a predictive system makes decisions about people's freedom.",
    category: "AI Ethics",
    featured: true,
    timeframe: "July 2026 to August 2026",
    tech: ["Python", "scikit-learn", "Fairlearn", "pandas"],
    links: [
      { label: "View on GitHub", href: "https://github.com/ryanmonemian/fairlearn-bias-audit" },
    ],
    problem:
      "Recidivism prediction models inform bail, sentencing, and parole decisions. They are trained on historical arrest data. So they do not just reflect bias in policing; they encode that bias as a risk score and present discrimination as objective. I wanted to audit one the way an organization would actually be asked to evaluate it, using the metrics they would realistically have to report.",
    context:
      "Using the ProPublica COMPAS dataset of 6,172 defendants, I independently trained a recidivism model and tested it against the original COMPAS scores.",
    process:
      "I measured false positive rates and demographic parity across racial subgroups using Fairlearn. I found that African-American defendants who did not reoffend were wrongly flagged as high risk at a 36.3% false positive rate, compared to 20.2% for Caucasian defendants. Then I tested Fairlearn's ExponentiatedGradient bias mitigation technique to see how much of that gap could actually be closed. Reducing the fairness gap came at a measurable cost to overall accuracy.",
    tradeoffs:
      "Fairness metrics conflict with each other. Satisfying demographic parity can violate equalized odds, and satisfying equalized odds can violate demographic parity. Choosing which metric to prioritize is not a technical decision; it is a policy decision wearing a technical costume. The mitigation techniques narrowed some gaps without resolving that underlying tension.",
    outcome:
      "A fairness dashboard is necessary, but it is not sufficient. A clean report can hide that someone made an actual choice about which group matters more, which tradeoff to accept, and no one consciously owns it. This is why governance has to sit alongside the metrics rather than downstream of them. This project pulled me toward Trust and Safety and AI governance work.",
  },
  {
    slug: "llm-red-team-tool",
    title: "LLM Red Team Tool",
    oneLiner:
      "Safety refusals are trained behavior, not guarantees. I built a tool to find out how and why they break.",
    category: "AI Safety",
    featured: true,
    timeframe: "April 2026 to May 2026",
    tech: ["Python", "OpenAI API", "Streamlit", "SQLite"],
    links: [{ label: "View on GitHub", href: "https://github.com/ryanmonemian/redTeamTool" }],
    problem:
      "Model safety depends on refusals holding up under pressure. But a refusal is trained behavior, not a hard boundary. If you do not know how it fails, you are trusting a system you have never actually tested. An adversarial user will find the failure mode before you do.",
    context:
      "I needed systematic, repeatable probing instead of isolated jailbreak attempts. A harness that could run structured prompt variations and log exactly where refusal behavior held, degraded, or broke.",
    process:
      "I sourced 100 real-world toxic prompts from the LMSYS Toxic-Chat dataset and benchmarked GPT-4o and GPT-4o-mini across hate speech, manipulation, and jailbreak categories. I built an adversarial testing pipeline across five conditions. Prompt engineering alone increased refusal rates from 31% to 76%. I then developed a regex plus LLM classifier that flagged soft refusals in 16 to 25% of responses that pattern matching alone would have missed.",
    tradeoffs:
      "Safety tuning is a tradeoff that cuts both ways, not a setting you can simply turn up. Tune the refusals too aggressively and journalists, researchers, and security professionals get blocked doing ordinary work. Tune them too loosely and harmful requests slip through undetected. There is no threshold that eliminates both failure modes at once, so every refusal setting is a tradeoff that someone has to own.",
    outcome:
      "Red teaming is not about breaking things for sport. It is the only way to know what a safety claim is actually worth before someone with worse intentions than a researcher tests it in production.",
  },
  {
    slug: "multi-pdf-rag-chatbot",
    title: "Multi-PDF Q&A Chatbot",
    oneLiner:
      "Grounding answers in source documents closes the exact gap where hallucination lives.",
    category: "Applied AI",
    featured: true,
    timeframe: "December 2025 to January 2026",
    tech: ["Python", "LangChain", "OpenAI API", "FAISS", "Streamlit"],
    links: [
      { label: "View on GitHub", href: "https://github.com/ryanmonemian/MULTIPLE-PDF-CHAT" },
    ],
    problem:
      "Ungrounded answers from a language model hallucinate with total confidence. I had already watched models cause real harm through confidently wrong outputs. In a document Q&A context, a wrong answer that sounds right is worse than no answer at all, because it is indistinguishable from a correct one unless you independently check the source.",
    context:
      "I needed a system that could answer questions across multiple PDFs while making every answer traceable back to actual source text.",
    process:
      "I built a retrieval-augmented generation pipeline. I chunked and embedded the source PDFs, retrieved the passages most relevant to each query, and constrained the model to answer only from that retrieved context with inline citations. I evaluated answer faithfulness using a 10-question RAGAS evaluation and achieved 89 to 95% faithfulness.",
    tradeoffs:
      "Grounding turned out to be a dial rather than a switch. Retrieve too narrowly and the model gives incomplete answers whenever a question spans multiple sections. Retrieve too broadly and irrelevant context creeps back in, reopening the door to hallucination. Chunk size and retrieval depth ended up mattering as much as the underlying model.",
    outcome:
      "This was the first project where I moved from diagnosing a harm to shipping something that structurally reduces it. Hallucination is not fixed by asking a model to be more careful; it is fixed by changing what the model is allowed to answer from in the first place.",
  },
  {
    slug: "drexel-public-safety-gis-bi",
    title: "GIS/BI Co-op, Drexel Public Safety",
    oneLiner:
      "Real data pipelines, real institutional constraints, and stakeholders who were never going to read a technical spec.",
    category: "Data Systems",
    featured: true,
    timeframe: "March 2026 to Present",
    tech: ["GIS", "SQL", "Power BI", "ETL"],
    problem:
      "Campus safety decisions were being made on data that was siloed, outdated, or hard to access. The operational version of every AI harm I had been studying; a system making decisions without a clear picture of the people it affects.",
    context:
      "Unlike a class project, this one ran inside constraints I did not choose. Legacy systems I could not simply replace, dispatchers and other staff without a technical background as the actual end users, and data sensitivity rules that limited what could be surfaced and to whom.",
    process:
      "I built GIS and BI pipelines that integrated live and historical safety data into dashboards designed for staff who needed an answer in seconds, not analysts who wanted to explore a dataset at their own pace. I developed an asynchronous Python data pipeline using AIOHTTP and AsyncIO that extracted and merged CAD and case incident data from Drexel Public Safety's REST API, pulling 7,000 plus records per month in under 90 seconds.",
    tradeoffs:
      "Transparency and usability pulled against privacy at almost every decision. Showing dispatchers more data made them faster, but it raised the stakes if that data were ever exposed or misused. Elegant technical solutions kept losing to what the legacy infrastructure and budget could actually support. Design thinking, it turned out, is mostly the work of negotiating constraints you did not choose.",
    outcome:
      "This project is the reason Human-Centered AI is not just a phrase to me. It is the difference between a pipeline that is technically correct and one that the people it was built for actually use. Institutional constraints are not obstacles to good design; they are part of the design problem itself.",
  },
  {
    slug: "techtogether-digital-literacy",
    title: "TechTogether Digital Literacy",
    oneLiner:
      "AI literacy should not be a prerequisite for AI safety.",
    category: "Accessibility",
    featured: false,
    timeframe: "October 2023 to June 2024",
    tech: ["Workshop design", "Curriculum development"],
    problem:
      "The people most exposed to AI driven harm, things like scams, misinformation, and opaque decision systems, are often the least equipped to recognize when a system is working against them. Particularly older adults without a technical background.",
    context:
      "I designed and taught workshops for learners with no assumed computing background, primarily seniors.",
    process:
      "I built curriculum that explained AI concepts through concrete, everyday analogies rather than technical vocabulary. The goal was building enough intuition to recognize risk rather than enough knowledge to write code.",
    tradeoffs:
      "Simplifying without condescending was a constant tension. Strip out too much nuance and people are left less equipped to spot new risks on their own. Keep too much in and you lose the room entirely.",
    outcome:
      "This work reframed who counts as a stakeholder in Human-Centered AI. It is not just the people who use a product; it is everyone exposed to its consequences, including people who will never open a settings menu. Access to understanding is itself a safety issue.",
  },
  {
    slug: "independent-research",
    title: "Independent Research: Algorithmic Bias & Predictive Policing",
    oneLiner:
      "The thread connecting bias audits, red teaming, and hallucination; systems optimized without the human context that should have shaped them.",
    category: "Research",
    featured: false,
    timeframe: "January 2026 to March 2026",
    tech: ["Literature review", "Policy analysis"],
    problem:
      "Individual case studies, a biased model here, a hallucinated fact there, read as isolated incidents unless you look at them side by side. Which is exactly how they tend to avoid real scrutiny.",
    context:
      "I synthesized research across algorithmic bias, predictive policing, and the cognitive effects of generative AI to test whether a common pattern actually held across all three.",
    process:
      "I reviewed existing literature and connected findings across domains that are usually studied separately; fairness in machine learning, criminal justice technology, and human and AI interaction.",
    tradeoffs:
      "Research at this scope trades depth for breadth. The wider the pattern I tried to trace, the less expertise I could claim in any single domain along the way.",
    outcome:
      "This is the theoretical backbone underneath every other project. The failures are not isolated bugs; they are the predictable output of systems optimized for a metric that left the human context out. That systems level view is what I bring to governance and safety work, rather than a single technical fix.",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);