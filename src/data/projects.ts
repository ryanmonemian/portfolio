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
      `Recidivism prediction systems can influence decisions that carry serious 
      consequences for the people being evaluated. Their scores may appear objective 
      because they are produced by a model, but that does not mean the errors are distributed equally.`,

      `I wanted to understand what happens when we look beyond overall accuracy and ask who a model gets 
      wrong. Instead of treating fairness as an abstract idea, I audited a recidivism model across racial 
      groups and compared the results with real COMPAS risk scores.`
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
      `Model safety depends on refusals holding up under pressure. But a refusal is 
      trained behavior, not a hard boundary. If you do not understand how 
      refusal behavior fails under pressure, you are trusting a safety claim that has 
      not been meaningfully tested.`,
    process:
      "I sourced 100 real-world toxic prompts from the LMSYS Toxic-Chat dataset and benchmarked GPT-4o and GPT-4o-mini across hate speech, manipulation, and jailbreak categories. I built an adversarial testing pipeline across five conditions. Prompt engineering alone increased refusal rates from 31% to 76%. I then developed a regex plus LLM classifier that flagged soft refusals in 16 to 25% of responses that pattern matching alone would have missed.",
    tradeoffs:
      "Safety tuning is a tradeoff that cuts both ways, not a setting you can simply turn up. Tune the refusals too aggressively and journalists, researchers, and security professionals get blocked doing ordinary work. Tune them too loosely and harmful requests slip through undetected. There is no threshold that eliminates both failure modes at once, so every refusal setting is a tradeoff that someone has to own.",
    outcome: [
      `I started this project thinking model safety would mostly come down to whether a system refused a harmful
      request. Testing it made the problem feel much less binary. Prompt structure changed refusal behavior, and
      even measuring whether a response counted as a refusal became a challenge of its own.`,

      `It made me more interested in AI safety as an evaluation problem. Before we trust claims about how a
      system behaves, we need ways to test those claims under conditions that are closer to how the system may
      realistically be challenged.`,
    ]
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
      "Language models can generate answers that sound confident even when they are unsupported by the source material. In a document question answering system, that creates a reliability problem. A useful answer should not only sound plausible, but also should be grounded in information the user can trace back to the documents they provided.",
    context:
      "I wanted the system to answer questions across multiple PDFs while grounding its responses in retrieved source material. It also needed to handle questions whose answers could depend on information spread across different parts of a document.",
    process:
      `I built a retrieval augmented generation pipeline. I chunked and embedded the source PDFs,
      retrieved the passages most relevant to each query, and instructed the model to generate
      answers from the retrieved context. Using RAGAS evaluation on a test syllabus, the system
      achieved 89% to 95% across 10 questions.`,
    tradeoffs:
      "Grounding turned out to be a dial rather than a switch. Retrieve too narrowly and the model gives incomplete answers whenever a question spans multiple sections. Retrieve too broadly and irrelevant context creeps back in, reopening the door to hallucination. Chunk size and retrieval depth ended up mattering as much as the underlying model.",
    outcome: [
      `Before this project, I thought grounding was mostly about giving a model better information.
      Building the pipeline showed me that retrieval itself shapes the quality of the answer. What gets
      retrieved, how much context is included, and how the source material is divided can all change what
      the model is able to produce.`,

      `It made me think about reliability as more than a model problem. The systems around the model matter
      too, and improving an AI response often means designing those surrounding systems more carefully rather
      than relying on the model alone.`,
    ]
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
    problem: [
      `Drexel Public Safety relied on information spread across multiple internal systems, which made it harder
      to see patterns across incidents and reporting data in one place. Accessing and combining that
      information also required technical steps that were not practical for the people who needed to
      use it regularly.`,
      `The problem was not simply getting the data into one system. It was making that information useful
      to people working in an operational environment where answers needed to be accessible quickly.`,
    ],
    context:
      "Unlike a class project, this one ran inside constraints I did not choose. Legacy systems I could not simply replace, officers without a technical background as the actual end users, and data sensitivity rules that limited what could be surfaced and to whom.",
    process: [
      `I built an asynchronous Python pipeline using aiohttp and asyncio to pull and merge CAD and incident data
      from internal REST APIs. The pipeline processes more than 7,000 records per month in under 90 seconds and
      produces structured data for reporting and analysis.`,

      `I then designed an interactive Power BI dashboard using the pipeline output to visualize more than 600
      incidents across 2025 by temporal patterns, call volume, and incident categories. The dashboard was designed
      to make common patterns easier to access without requiring users to manually query or combine the underlying
      data.`,
    ],
    tradeoffs: [
      `More visibility into the data could make the dashboard more useful, but public safety information
      also created limits around what could be surfaced and who could access it. Technical decisions were
      shaped by the systems already in place, which meant the most elegant solution was not always the most
      practical one.`,

      `I also had to balance how much information to show at once. Giving users access to more data can be
      useful, but adding too much can make patterns harder to interpret. The goal became making the information
      useful without overwhelming the people who would eventually work with it.`,
    ],

    outcome: [
      `Working on a system that other people would eventually rely on changed how I thought about technical
      quality. A pipeline can be fast and accurate, but that does not make the full system useful if the
      information is difficult to access or does not fit the way people already work.`,

      `I also learned that constraints are not always problems to engineer away. Legacy infrastructure, privacy
      requirements, and the needs of nontechnical users shaped the solution just as much as the code did.`,
    ]

  },
  {
    slug: "independent-research-ai-cognition",
    title: "Independent Research: AI, Cognition and Society",
    oneLiner:
      "Faculty supervised research exploring how AI systems interact with bias, institutions, human behavior, and the decisions made around their use.",
    category: "Research",
    featured: false,
    timeframe: "January 2026 to March 2026",
    tech: [
      "Faculty supervised research",
      "Literature synthesis",
      "AI governance",
      "Dr. Kristene Unsworth",
    ],
    problem: [
      "I wanted to understand AI beyond how well a model performs. Over the course of the study, I explored how data, institutions, incentives, and human behavior can shape what these systems produce and how they are used.",
      "My readings covered topics including algorithmic bias, predictive policing, AI effects on critical thinking, governance, labor, environmental costs, and the social forces surrounding emerging technology. The goal was to connect the technical side of AI with the broader systems it operates within.",
    ],
    context: [
      "I synthesized more than 15 sources through weekly citation based reading responses and discussions with my faculty supervisor. Each week pushed me to connect ideas across areas that are often treated separately, from machine learning and model behavior to politics, labor, cognition, and institutional responsibility.",
      "I then developed two larger research papers that allowed me to follow specific questions more deeply.",
    ],
    process: [
      "My first paper examined why large investments in generative AI do not always produce measurable business value. I looked at the gap between technological capability and successful implementation, including differences between internal development and external partnerships, infrastructure incentives, environmental costs, and the kinds of use cases that were actually producing returns.",
      "The research made me question the assumption that adopting more AI automatically creates more value. In many cases, the more important question was whether the technology was being applied to a problem it could solve reliably and whether the organization had a clear reason for using it.",
    ],
    tradeoffs: [
      "My second paper examined why algorithmic bias can be difficult to address through technical fixes alone. I looked at how historical data, predictive policing, measurement choices, competing definitions of fairness, and institutional power can shape unequal outcomes.",
      "This helped me see bias as something that can enter a system long before a model produces its final prediction. The data collected, the concepts being measured, and the people deciding what counts as fair can all shape the outcome.",
    ],
    outcome: [
      "This study changed the way I think about where responsibility exists in an AI system. Evaluating the model itself is important, but it is only one part of the problem. The data behind it, the institution deploying it, the incentives surrounding its use, and the people affected by its decisions can matter just as much.",
      "It also strengthened my interest in the space between building AI and governing it. If these systems are going to become more influential, understanding how they work technically is not enough. We also have to understand the structures around them and decide how accountability should work when those systems affect real people.",
    ],
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
    outcome: [
      `I learned that accessibility is not just about making technology simpler.
      It requires understanding what someone is actually trying to do and adapting the experience
      around them. Understanding the circumstances and cultural context of your audience is also
      important when designing or developing products for them. The handwritten notes, practice
      during sessions, and differences between participants mattered just as much as the technology itself.`,

      `This experience made me think more carefully about designing around people rather than expecting people
      to adapt to the system.`,
    ]
  },
  {
    slug: "independent-research",
    title: "Independent Research: AI Literacy and Misuse in Education",
    oneLiner:
      "An interactive visual StoryMap introducing AI fundamentals for a Gen Z audience and encouraging more thoughtful use of AI tools.",
    category: "Research",
    featured: false,
    timeframe: "December 2023",
    tech: ["AI literacy", "Visual Storytelling", "Research synthesis", "ArcGIS Storymap"],
    links: [
      {
        label: "View ArcGIS Storymap",
        href: "https://storymaps.arcgis.com/stories/464b69f5c6e34a02a0c6828fc14ce5e5",
        icon: "arcgis",
      },
    ],
    problem: [
      `Generative AI was becoming easier to use much faster than people were learning
      how it actually worked. I saw people my age experimenting with chatbots, but
      understanding how to ask good questions, interpret their responses, and recognize
      their limitations was still developing.`,

      `I wanted to make those ideas more approachable for a Gen Z audience. Instead of
      treating AI literacy as learning how to get an answer from a chatbot, I was
      interested in helping people understand the technology well enough to use it more
      intentionally.`,
    ],
    process: [
      `I created an interactive ArcGIS StoryMap called Asking the Right Questions that introduced
      AI fundamentals through a visual format rather than a traditional research paper. I used the
      digital StoryMap to explain core concepts, introduce how chatbots work, and connect those ideas to
      questions about how people should interact with AI.`,

      `The goal was to make the technical ideas easier to approach while giving readers a reason to think
      more carefully about how they were using these systems.`,
    ],

    tradeoffs: [
      `Making technical ideas accessible meant deciding how much detail someone actually needed. Too much
      technical explanation could make the material difficult for the audience I wanted to reach, while
      simplifying too much could leave readers without enough understanding to question what an AI system
      was doing.`,

      `The project made me think about the difference between simplifying information and removing the
      context people need to make informed decisions.`,
    ],
    outcome: [
      `This was one of my earliest attempts to think about AI as both a technical system and something
      people needed to understand how to use. I learned that access to a powerful tool does not automatically
      create understanding of that tool.`,

      `It also made me more interested in AI literacy as a design problem. If people are going to use AI thoughtfully,
      the information explaining these systems has to be understandable to the people actually using them.`,
    ]
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
