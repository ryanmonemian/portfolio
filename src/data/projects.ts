import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "fairlearn-bias-audit",
    title: "Recidivism Bias Audit",
    oneLiner:
      "What happens when a predictive system helps make decisions about someone’s freedom?",
    category: "AI Ethics",
    featured: true,
    timeframe: "July 2026 to August 2026",
    tech: ["Python", "scikit-learn", "Fairlearn", "pandas"],
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/ryanmonemian/fairlearn-bias-audit",
        icon: "github",
      },
    ],
    problem: [
      `Recidivism prediction systems inform bail, sentencing, and parole decisions. 
      They appear objective because they're produced by a model, but that does not 
      mean the errors are distributed equally across groups. I wanted to understand 
      what that disparity looks like and where the model gets it wrong.`,

      `I wanted to understand what happens when we look past overall accuracy and 
      ask who a model gets wrong. Instead of treating fairness as an abstract idea, 
      I audited a recidivism model across racial groups and compared the results with 
      the real COMPAS risk scores.`
    ],
    context:
      `Using 6,172 records from the ProPublica COMPAS dataset, I independently trained 
      a random forest model to predict recidivism. I then audited its outcomes across racial 
      groups and compared the results with the real COMPAS risk scores.`,
    process: [
      `I used Fairlearn to measure false positive rates and other fairness metrics across racial groups. 
      Among defendants who did not reoffend, African American defendants were incorrectly classified as high 
      risk at a 36.3 percent false positive rate compared with 20.2 percent for Caucasian defendants.`,

      `I then applied Fairlearn’s ExponentiatedGradient mitigation method to test whether that disparity 
      could be reduced. The fairness gap narrowed, but overall model accuracy decreased by about 2.5 percentage 
      points.`,
    ],
    tradeoffs: [
      `Reducing one fairness gap did not make the model universally fair. Different fairness metrics can prioritize 
      different outcomes, and improving one measure may leave another unresolved.`,
      
      `That made the choice of a fairness metric feel larger than a technical decision. The metric determines which 
      kinds of errors receive more attention and which tradeoffs we are willing to accept. Fairlearn helped me 
      measure and reduce disparities, but it could not decide which definition of fairness should matter most.`,
    ],
    outcome: [
      `Before this project, I thought identifying bias was mostly a matter of choosing the right fairness metric 
      and measuring the gap. The audit made me realize that measurement is only the beginning. A model can become 
      fairer according to one definition while still creating unequal outcomes according to another.`,

      `The harder question is deciding which tradeoffs are acceptable when those errors affect real people. That is 
      what made me more interested in the connection between technical evaluation, accountability, and the decisions 
      people make around AI systems.`,
    ]
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
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/ryanmonemian/redTeamTool",
        icon: "github",
      },
    ],
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
      "Exploring how grounding AI responses in source documents can reduce hallucination and improve reliability.",
    category: "Applied AI",
    featured: true,
    timeframe: "December 2025 to January 2026",
    tech: ["Python", "LangChain", "OpenAI API", "FAISS", "Streamlit"],
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/ryanmonemian/MULTIPLE-PDF-CHAT",
        icon: "github",
      },
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
      "What does good data infrastructure look like when the people using it work inside legacy systems and real operational constraints?",
    category: "Data Systems",
    featured: true,
    timeframe: "March 2026 to Present",
    tech: ["GIS", "SQL", "Power BI", "ETL"],
    problem:
      "Officers at Drexel Public Safety were making decisions about resource deployment and enforcement based on data scattered across multiple systems. Some information was current, some outdated, some locked in databases that required manual queries. This is the operational version of every AI harm I had been studying; a system making decisions without a clear picture of what's actually happening.",
    context:
      "Unlike a class project, this one ran inside constraints I did not choose. Legacy systems I could not simply replace, officers without a technical background as the actual end users, and data sensitivity rules that limited what could be surfaced and to whom.",
    process:
      "I built two connected pieces. First, an asynchronous Python data pipeline using AIOHTTP and AsyncIO that extracted and merged CAD and case incident data from Drexel Public Safety's internal REST APIs, processing 7,000 plus records per month in under 90 seconds. Second, an interactive Power BI dashboard that visualizes 600 plus incidents by temporal patterns, call volume, and incident categories. The dashboard is designed so officers get answers in seconds, not analysts exploring datasets at their own pace. When deployed, it will let them see patterns that were previously invisible because the data was kept separate.",
    tradeoffs:
      "Transparency and usability pulled against privacy at almost every decision. Showing dispatchers more data made them faster, but it raised the stakes if that data were ever exposed or misused. Elegant technical solutions kept losing to what the legacy infrastructure and budget could actually support. Design thinking, it turned out, is mostly the work of negotiating constraints you did not choose.",
    outcome:
      "This project is the reason Human-Centered AI is not just a phrase to me. It is the difference between a pipeline that is technically correct and one that the people it was built for actually use. Institutional constraints are not obstacles to good design; they are part of the design problem itself.",
  },
  {
    slug: "techtogether-digital-literacy",
    title: "TechTogether Digital Literacy",
    oneLiner:
      "Teaching digital literacy to older adults showed me that the value of technology depends on whether it helps people do what actually matters to them.",
    category: "Accessibility",
    featured: false,
    timeframe: "October 2023 to June 2024",
    tech: ["Workshop design", "Curriculum development"],
    links: [
      {
        label: "View Curriculum",
        href: "https://drive.google.com/drive/folders/1tVDsOt3iHtzTE4167wG4HHg2cIk1NZty",
        icon: "drive",
      },
    ],
    problem:
      "Seniors were locked out of how their families communicate. If you can't send a photo through text or message on Instagram, you can't share a memory with your grandkid. If you don't understand email or FaceTime, you lose the ability to express yourself and stay connected across the generational gap.",
    context:
      "Teaching non-technical people without overwhelming them was a constant tension. Simplify too much and you leave them unprepared for new tools that appear. Keep too much in and you lose the room entirely. I had to figure out how to teach so the skills actually stuck, which meant practice runs during sessions and handwritten notes instead of just digital guides.",
    process:
      "An 8-session curriculum covering texting (vocabulary and utilities), adding contacts, FaceTime, camera and photos, email, internet browsing, basic accessibility settings, and Instagram (posts, stories, browsing, DMs, and how to tailor content for different audiences). The focus was teaching people to adapt to how their families actually communicate, not forcing them to learn in one generic way.",
    tradeoffs:
      "Accessibility and simplicity pulled against completeness. Teaching to one cultural or age context didn't work for everyone. Handwritten notes took time but worked better than digital guides.",
    outcome:
      "Access to understanding is itself a safety and connection issue. It is not just about the technology; it is about maintaining voice and agency across generations. Without these skills, people are locked out of how their loved ones express themselves.",
  },
  {
    slug: "independent-research",
    title: "Independent Research: AI Literacy and Misuse in Education",
    oneLiner:
      "Explored how AI literacy, algorithmic bias, and the way institutions respond to generative AI can shape how people learn and use these systems.",
    category: "Research",
    featured: false,
    timeframe: "January 2026 to March 2026",
    tech: ["Literature review", "Policy analysis"],
    links: [
      {
        label: "View ArcGIS Storymap",
        href: "https://storymaps.arcgis.com/stories/464b69f5c6e34a02a0c6828fc14ce5e5",
        icon: "arcgis",
      },
    ],
    problem:
      "I researched how people misunderstand and misuse AI. Most people treat it as a shortcut instead of a tool to think with. I looked at why teachers avoid it for students, how it gets used as a replacement for thinking rather than an enhancement. I also examined how AI can flatten people's voice, agency, and style when used carelessly. The core insight: AI literacy is not just technical knowledge; it is understanding what AI actually does and does not do, and how to use it to extend your thinking instead of outsourcing it or losing yourself in the process.",
    context:
      "I synthesized research across AI fundamentals, education policy, and how generative AI is being adopted (and banned) in schools to understand why institutions avoid teaching responsible use instead of just prohibiting it.",
    process:
      "I reviewed existing literature and connected findings across domains usually studied separately; AI education, the psychology of tool adoption, and institutional responses to technological disruption.",
    tradeoffs:
      "Research at this scope trades depth for breadth. The wider the pattern I tried to trace, the less expertise I could claim in any single domain.",
    outcome:
      "This is the foundation underneath my thinking about AI literacy and responsibility. The failures are not bugs; they are the predictable output of institutions afraid to teach, leaving people without guidance on how to actually use AI well.",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);