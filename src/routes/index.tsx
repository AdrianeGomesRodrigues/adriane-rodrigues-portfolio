import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import {
  ArcLines,
  BlobCutout,
  ContourLines,
  HeroCollage,
  WaveRule,
} from "../components/shapes";

const TITLE = "Adriane Rodrigues — Legal & People Operations";
const DESCRIPTION =
  "Legally trained operations professional working across Legal Operations, People Operations and process automation: contracts, compliance, HR operations and AI-assisted workflows.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const EMAIL = "adrianegrod@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/adriane-gomes-rodrigues/";
const GITHUB = "https://github.com/AdrianeGomesRodrigues";

const scope = [
  {
    n: "01",
    title: "Legal Operations & Compliance",
    items: [
      {
        label: "Contract Lifecycle",
        text: "Review, drafting and negotiation support for commercial contracts: MSAs, NDAs, DPAs and SOWs.",
      },
      {
        label: "Compliance by Design",
        text: "GDPR across HR and client workflows, EU AI Act readiness, and Portuguese tax and labour requirements built into day-to-day processes.",
      },
      {
        label: "Legal Workflows",
        text: "Repeatable contract intake, approval and repository systems that remove legal bottlenecks.",
      },
    ],
  },
  {
    n: "02",
    title: "People Operations",
    items: [
      {
        label: "Employee Lifecycle",
        text: "Recruitment, onboarding and offboarding processes, designed end to end.",
      },
      {
        label: "Labour Compliance",
        text: "HR workflows aligned with Portuguese labour law and the applicable collective agreement for the IT sector.",
      },
      {
        label: "People Systems",
        text: "HR records, leave management and employee documentation workflows.",
      },
    ],
  },
  {
    n: "03",
    title: "Process Optimisation & AI",
    items: [
      {
        label: "Process Design",
        text: "Clear, enforceable SOPs that connect Legal, People and Operations.",
      },
      {
        label: "AI & No-Code Automation",
        text: "Make, Google Apps Script and Claude skills; by my own estimate, approximately 40% less time spent on manual and repetitive tasks.",
      },
      {
        label: "Tooling",
        text: "Jira, Notion and workspace environments structured for cross-functional coordination.",
      },
    ],
  },
];

const alsoOwned = [
  {
    title: "Public & EU Funding",
    text: "Grant lifecycle from eligibility to reporting, with audit-ready documentation; a funding-screening bot I built reclaims about a day a week.",
  },
  {
    title: "Finance & Tax Operations",
    text: "Budgeting, cash-flow tracking and coordination with external accountants.",
  },
];

const projects = [
  {
    n: "01",
    title: "Contract Review Skill — MSA · NDA · DPA",
    href: "https://github.com/AdrianeGomesRodrigues/contract-review-pt",
    description:
      "A portfolio project: a Claude skill that reviews commercial contracts against Portuguese law and EU regulation, flags red flags and suggests plain-language fixes for MSAs, NDAs and DPAs. Tested on worked examples.",
    tags: ["Legal Ops", "Portuguese & EU Law", "AI Automation"],
  },
];

const trajectory = [
  { period: "2016 – 2021", title: "LLB in Law", place: "University of Coimbra" },
  {
    period: "2021 – 2023",
    title: "LLM in Business Law",
    place: "University of Coimbra · Thesis: Blockchain & Intellectual Property",
  },
  {
    period: "2021 – Present",
    title: "Operations Manager (Legal, People & Finance Operations)",
    place: "Deemaze Software · B2B software development agency",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4">
      <span className="meta-label font-medium text-accent">— {children}</span>
    </h2>
  );
}

function Index() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <header className="border-b border-border">
        <div className="container-editorial flex flex-wrap items-center justify-between gap-3 py-6">
          <span className="font-display text-[17px] font-semibold tracking-tight">
            Adriane Rodrigues
          </span>

          <nav className="flex items-center gap-6 text-[14px] text-muted-foreground">
            <a className="link-underline" href={LINKEDIN}>
              LinkedIn
            </a>
            <a className="link-underline" href={GITHUB}>
              GitHub
            </a>
            <a className="link-underline" href="#contact">
              Contact
            </a>

          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative">
          <HeroCollage className="pointer-events-none absolute right-16 top-20 hidden h-[300px] w-[320px] xl:block" />
          <BlobCutout className="drift-medium pointer-events-none absolute left-4 bottom-6 hidden h-[200px] w-[200px] text-clay/25 lg:block" />
          <div className="container-editorial section-y relative">
            <p className="meta-label mb-6 text-accent">— Legal Operations · People Operations · Process &amp; AI</p>
            <h1 className="max-w-[24ch] text-[34px] leading-[1.06] sm:text-[46px]">
              Building the legal and people systems that let tech companies scale{" "}
              <span className="relative inline-block">
                <span className="relative z-10">cleanly</span>
                <span className="absolute inset-x-0 bottom-[0.12em] z-0 h-[0.28em] bg-ochre/55" />
              </span>
              .
            </h1>
            <WaveRule className="mt-8 h-5 w-[220px] text-accent/70" />
            <p className="mt-6 max-w-[58ch] text-[17px] leading-[1.75] text-muted-foreground">
              Legally trained (LLB + LLM) and working in-house at a B2B software company, I design
              contract, compliance and HR processes that are compliant by design, then streamline
              them with automation and AI.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="rounded-full bg-accent px-6 py-3 text-[14px] font-medium text-accent-foreground transition-opacity hover:opacity-90"
              >
                Get in touch
              </a>
            </div>
          </div>

        </section>

        {/* Scope — flip cards */}
        <section className="relative border-t border-border bg-panel/50 paper-grain">
          <ArcLines className="drift-sway pointer-events-none absolute right-16 top-16 hidden h-[120px] w-[120px] text-clay/45 lg:block" />
          <div className="container-editorial section-y relative z-10">
            <SectionLabel>What I do</SectionLabel>
            <h3 className="mb-6 text-[26px] sm:text-[30px]">Legal and People Ops, connected by process.</h3>
            <p className="mb-12 max-w-[58ch] text-[16px] leading-[1.75] text-muted-foreground">
              Legal precision applied to the systems a company runs on every day: its contracts, its
              people processes, and the workflows that connect them.
            </p>

            <ul className="grid gap-4">
              {scope.map((item, i) => (
                <li
                  key={item.n}
                  className="group h-[270px] sm:h-[190px] [perspective:1600px]"
                  tabIndex={0}
                >
                  <div className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus:[transform:rotateY(180deg)]">
                    {/* front */}
                    <div className="absolute inset-0 flex flex-col justify-between rounded-md border border-border bg-background p-6 [backface-visibility:hidden]">
                      <span className="flex items-center gap-2.5">
                        <span
                          className="inline-block h-2.5 w-2.5 shrink-0 rounded-[2px]"
                          style={{
                            backgroundColor: ["var(--accent)", "var(--ochre)", "var(--clay)"][
                              i % 3
                            ],
                          }}
                        />
                        <span className="display-index text-muted-foreground">{item.n}</span>
                      </span>
                      <h4 className="text-[21px]">{item.title}</h4>
                    </div>
                    {/* back */}
                    <div className="absolute inset-0 flex flex-col rounded-md border border-accent/40 bg-panel p-5 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                      <span className="flex items-center gap-2.5">
                        <span
                          className="inline-block h-2.5 w-2.5 shrink-0 rounded-[2px]"
                          style={{
                            backgroundColor: ["var(--accent)", "var(--ochre)", "var(--clay)"][
                              i % 3
                            ],
                          }}
                        />
                        <span className="display-index text-muted-foreground">{item.n}</span>
                        <span className="text-[13px] font-medium">{item.title}</span>
                      </span>
                      <ul className="mt-2.5 space-y-1.5">
                        {item.items.map((sub) => (
                          <li key={sub.label} className="text-[12px] leading-[1.45]">
                            <span className="font-medium">{sub.label}:</span>{" "}
                            <span className="text-muted-foreground">{sub.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <p className="meta-label mb-4 text-muted-foreground">Also owned</p>
              <ul className="grid gap-4 sm:grid-cols-2">
                {alsoOwned.map((a) => (
                  <li key={a.title} className="rounded-md border border-border bg-background p-5">
                    <h4 className="text-[16px]">{a.title}</h4>
                    <p className="mt-1.5 text-[14px] leading-[1.6] text-muted-foreground">{a.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>


        {/* Projects */}
        <section className="relative border-t border-border">
          <div className="container-editorial section-y relative">
            <SectionLabel>Selected projects &amp; systems</SectionLabel>
            <h3 className="mb-12 text-[26px] sm:text-[30px]">Selected work.</h3>
            <ul className="grid max-w-[640px] gap-4">
              {projects.map((p) => (
                <li key={p.n}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative flex h-full flex-col overflow-hidden rounded-md border border-border bg-panel/60 p-6 transition-colors hover:border-accent/50"
                  >
                    <ArrowUpRight
                      className="absolute right-5 top-5 h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      strokeWidth={1.75}
                    />
                    <span className="display-index relative text-accent">{p.n}</span>
                    <h4 className="relative mt-3 max-w-[24ch] text-[19px]">{p.title}</h4>
                    {p.description && (
                      <p className="relative mt-2 max-w-[52ch] text-[14px] leading-[1.6] text-muted-foreground">
                        {p.description}
                      </p>
                    )}
                    {p.tags && p.tags.length > 0 && (
                      <div className="relative mt-4 flex flex-wrap gap-2">
                        {p.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* About */}
        <section className="relative border-t border-border bg-panel/50 paper-grain">
          <ContourLines className="drift-slow pointer-events-none absolute left-4 bottom-12 hidden h-[160px] w-[160px] text-ochre/40 lg:block" />
          <div className="container-editorial section-y relative z-10">
            <SectionLabel>About</SectionLabel>
            <div className="max-w-[62ch] space-y-5 text-[16px] leading-[1.8]">
              <p>
                I'm legally trained (LLB and LLM in Business Law, University of Coimbra) and work
                in-house as a jurista. Rather than traditional legal practice, I chose to apply that
                training inside a tech company, where legal thinking shapes how work actually gets done.
              </p>
              <p className="text-muted-foreground">
                My work sits between Legal, People and Operations: contracts and compliance, the
                employee lifecycle, and the processes that connect them. I build these systems where
                they don't yet exist and improve them where they do, with a growing share of
                automation and AI.
              </p>

            </div>
          </div>
        </section>

        {/* Trajectory */}
        <section className="relative border-t border-border">
          <div className="container-editorial section-y">
            <SectionLabel>Trajectory</SectionLabel>
            <h3 className="mb-12 text-[26px] sm:text-[30px]">Background, in order.</h3>
            <ol className="grid gap-8 sm:grid-cols-3">
              {trajectory.map((t, i) => (
                <li key={t.title} className="relative">
                  <div className="mb-4 flex items-center gap-2">
                    <span
                      className="inline-block h-2.5 w-2.5 shrink-0 rounded-[2px]"
                      style={{
                        backgroundColor: ["var(--clay)", "var(--ochre)", "var(--accent)"][i % 3],
                      }}
                    />
                    <span className="h-px flex-1 bg-border" />
                  </div>
                  <p className="meta-label text-accent">{t.period}</p>
                  <h4 className="mt-2 text-[18px]">{t.title}</h4>
                  <p className="mt-1 text-[14px] leading-[1.7] text-muted-foreground">{t.place}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="relative border-t border-border bg-panel/50 paper-grain scroll-mt-8">
          <BlobCutout className="drift-sway pointer-events-none absolute right-8 bottom-10 hidden h-[150px] w-[150px] text-clay/20 lg:block" />
          <div className="container-editorial section-y relative z-10">
            <SectionLabel>Contact</SectionLabel>
            <h3 className="mb-6 text-[26px] sm:text-[30px]">Let's talk.</h3>
            <p className="mb-10 max-w-[52ch] text-[16px] leading-[1.75] text-muted-foreground">
              Email is the fastest way to reach me.
            </p>



            <div className="mt-10">
              <a
                href={`mailto:${EMAIL}?subject=Hello%20Adriane`}
                className="inline-block rounded-full bg-accent px-6 py-3 text-[14px] font-medium text-accent-foreground transition-opacity hover:opacity-90"
              >
                Send an email
              </a>
            </div>
          </div>
        </section>

      </main>

      <footer className="relative border-t border-border bg-panel/60">
        <div className="container-editorial relative py-10 text-[14px] text-muted-foreground">
          <p>Based in Coimbra, Portugal · Built with Claude &amp; Lovable · Hosted on GitHub Pages.</p>
        </div>
      </footer>
    </div>
  );
}
