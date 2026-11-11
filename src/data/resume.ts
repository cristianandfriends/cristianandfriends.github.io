export type Experience = {
  period: string;
  company: string;
  role: string;
  note: string;
  highlights?: string[];
};

export const experience: Experience[] = [
  {
    period: "Sep 2026 to now",
    company: "Microsoft",
    role: "Senior Software Engineer, Office Data Flywheel",
    note: "Setting the precedent for Data Flywheel across Microsoft Office Copilot apps, and the company.",
    highlights: [
      "Sole author and owner of the Office Data Flywheel dashboard, a self-service Power BI reporting layer that unifies Word, Excel, PowerPoint, and Cowork Agent telemetry from Azure Machine Learning pipelines.",
      "Built Plotly visualizations for user intents, document taxonomies, model comparisons, and OfficeJS code-generation diagnostics, turning ad hoc query exploration into a prioritized product fix backlog.",
      "Drove adoption to tens of DAU/WAU and hundreds of distinct users, compressing analysis from days to minutes and setting a precedent for Data Flywheel efforts across the business unit.",
      "Rated 200/200 for FY26 performance, placing in the top 1-5% of engineers at my level.",
    ],
  },
  {
    period: "Apr 2025 to Sep 2026",
    company: "Microsoft",
    role: "Software Engineer, Excel AI",
    note: "Excel AI services and maintaining an evaluation framework for Excel Agent Mode.",
    highlights: [
      "Maintained the PROSE research group's evaluation framework for Excel Agent Mode.",
      "Built Python and C++ 1DS telemetry bindings to plumb Excel Agent evaluation telemetry into internal databases, giving researchers a consistent view of agent configuration changes and ship decisions.",
    ],
  },
  {
    period: "Dec 2024 to Apr 2025",
    company: "Microsoft",
    role: "Software Engineer, Office Copilot",
    note: "Working on backend services for the flagship Office apps.",
    highlights: [
      "Prototyped an AI-enriched service that served dynamic, personalized prompts in the Copilot chat pane of the Office web document editor, contextualized with Microsoft Graph and internal Office data.",
      "Core contributor to an experiment extending AI rewrite in Word so suggested rewrites could draw on text the user had already written.",
    ],
  },
  {
    period: "May 2023 to Dec 2024",
    company: "Microsoft",
    role: "Software Engineer, Office Online",
    note: "Reliability, identity, and infrastructure for the flagship Office apps.",
    highlights: [
      "Changed Discovery, an integral part of the WOPI protocol behind Office Online, so partner integrations expose only supported apps and capabilities.",
      "Helped ship new CDN-deployed customer funnels for Word, Excel, and PowerPoint, including a fallback service that absorbed failed Azure Front Door requests and improved static content reliability by 2%.",
      "Introduced .NET 6+ and Kestrel to new Office Online services, replacing .NET Framework and IIS for a roughly 20% compute saving.",
      "Migrated server-to-server authentication for critical internal proxy services from bearer tokens to proof-of-possession tokens, reducing the risk of high-privilege token theft.",
    ],
  },
  {
    period: "May 2022 to May 2023",
    company: "Microsoft",
    role: "Software Engineer, Microsoft Loop",
    note: "Launch systems and data-boundary work for a new product in the Office ecosystem.",
    highlights: [
      "Led the design and implementation of a waitlist management API for Loop, supporting an upper bound of 200,000 new users at public preview.",
      "Implemented EU data boundary compliant merging and routing for Loop presences and workspaces, reducing P99 latency for a presence request from three seconds to a few hundred milliseconds.",
      "Implemented server-to-server authentication with Azure Active Directory tokens and on-box token caching, reducing P99 latency in some scenarios by more than 50%.",
    ],
  },
  {
    period: "Mar 2022 to May 2022",
    company: "Social Finance, Inc. (SoFi)",
    role: "Senior Software Engineer, Backend",
    note: "Caching and developer infrastructure for financial services.",
    highlights: [
      "Contributed to a read-only caching adapter used by microservices across the company to meet service-level agreements and reduce P99 read times.",
      "Prototyped a Debezium listener that stored change events in DynamoDB regardless of payload schema.",
      "Introduced LocalStack into development workflows, replacing redeployments to staging with local iterations that took seconds instead of minutes.",
    ],
  },
  {
    period: "Jul 2021 to Mar 2022",
    company: "Meredith Corporation (Bizrate Insights)",
    role: "Software Engineer, Backend",
    note: "Performance, reliability, and engineering practice.",
    highlights: [
      "Added in-memory caches to AWS Lambda microservices, cutting response times for hot containers from roughly five seconds to a few hundred milliseconds.",
      "Minified static content and introduced CloudFront for a core Java Spring service, reducing time to serve static content by more than 80% in some cases.",
      "Architected a management service behind API Gateway to ban users at the network boundary with AWS WAF.",
      "Introduced an ORM data access layer, packaged as a Python distribution, to replace ad hoc database operations in Airflow jobs.",
      "Championed test-driven development and infrastructure as code, shortening feature turnaround and making cloud infrastructure easier to reason about.",
    ],
  },
  {
    period: "Aug 2020 to Jul 2021",
    company: "Northrop Grumman",
    role: "Software Engineer, Infrastructure",
    note: "Hardened infrastructure and deployment automation.",
    highlights: [
      "Built a library of Packer configurations for DISA and NIST STIG-hardened RHEL and CentOS images, reducing deployment times by roughly 60%.",
      "Developed Jenkins pipelines and VSphere wrapper APIs that saved at least 80 developer hours per month.",
      "Wrote Ansible playbooks to harden firewalld against NIST STIGs and test network behaviour with Python sockets and kernel tunables.",
      "Configured Cisco NX-OS switches, VMware ESXi guests, Linux NetworkManager, and Chrony time servers.",
    ],
  },
  {
    period: "Jul 2019 to Aug 2020",
    company: "Northrop Grumman",
    role: "Software Engineer, Build and Release",
    note: "Build systems and release engineering.",
    highlights: [
      "Streamlined Linux, Solaris, and Windows build pipelines, reducing the build and release process from four days to two hours.",
      "Ported Jenkins job configuration into a Groovy DSL, supporting developer sandboxes, release builds, and nightly builds.",
      "Automated ad hoc build deployments and moved build systems from Ant to Maven.",
    ],
  },
  {
    period: "Jun 2017 to Aug 2017",
    company: "Northrop Grumman",
    role: "Software Engineering Intern",
    note: "A first pass at satellite telemetry and visualization.",
    highlights: [
      "Prototyped a visualization tool to track satellite health statuses with NASA's GMSEC API and Guice dependency injection.",
    ],
  },
];

export const featuredExperience = experience.slice(0, 3);

export const skills = [
  {
    label: "Languages",
    items: "Bash, C, C#, csh, Go, Groovy, Java, Perl, PowerShell, Python, SQL, TypeScript",
  },
  {
    label: "Build systems",
    items: "Apache Ant, Apache Maven, Gradle, make, MSBuild",
  },
  {
    label: "Tools and ecosystems",
    items: "Ansible, AWS, Apache Airflow, Docker, HashiCorp Packer, Git, Jenkins, .NET Core, Next.js, LocalStack, Wireshark",
  },
  {
    label: "Concepts",
    items: "Distributed systems, microservices, authentication, caching, change data capture, release engineering, test-driven development, prompt engineering and RAG",
  },
];

export const focus = [
  "AI-assisted writing",
  "Reliable backend systems",
  "Authentication and identity",
  "Applied science",
];
