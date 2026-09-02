import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import {
  ArcLines,
  BlobCutout,
  ContourLines,
  HeroCollage,
  WaveRule,
} from "../components/shapes";

const TITLE = "Adriane Rodrigues — Operations, Legal & Process Design";
const DESCRIPTION =
  "Cross-functional operations leader bridging law, tech execution, and business systems. Contract lifecycles, EU funding, HR frameworks, and workflow automation.";

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
const LINKEDIN = "https://www.linkedin.com/in/adrianegrodrigues/";
const GITHUB = "https://github.com/adrianegrodrigues";

const scope = [
  {
    n: "01",
    title: "Legal & Regulatory",
    body: "Contract lifecycle (MSA, DPA, NDA), GDPR frameworks, and risk mitigation across engineering teams.",
  },
  {
    n: "02",
    title: "Public & EU Funding",
    body: "End-to-end lifecycle management for PT2030, PRR, and Horizon programs (~€800K secured and managed in-house).",
  },
  {
    n: "03",
    title: "Finance & People",
    body: "Financial administration, budget tracking, IT recruitment, and Portuguese Labour Code compliance.",
  },
  {
    n: "04",
    title: "Process & Automation",
    body: "Standardizing SOPs and automating manual workflows using Claude, Make, and Google Apps Script.",
  },
];

const projects = [
  {
    n: "01",
    title: "Public Grant Eligibility Evaluator",
    body: "Interactive tool mapping PT2030 & PRR criteria against company profiles.",
    tags: ["Public funding", "Eligibility", "Claude"],
    href: GITHUB,
  },
  {
    n: "02",
    title: "Legal Ops Contract Risk Matrix",
    body: "Micro-tool for clause triage and risk scoring before signature.",
    tags: ["Legal ops", "Risk", "Sheets"],
    href: GITHUB,
  },
  {
    n: "03",
    title: "In-Housing Public Grants",
    body: "Replaced external consultants to secure €800K with 100% audit compliance.",
    tags: ["Case study", "Governance", "Audit"],
    href: GITHUB,
  },
  {
    n: "04",
    title: "Hiring & Onboarding Playbook",
    body: "One repeatable path from job brief to signed contract and first week.",
    tags: ["People ops", "SOP", "Compliance"],
    href: GITHUB,
  },
];

const trajectory = [
  { period: "2016 – 2021", title: "LLB in Law", place: "University of Coimbra" },
  {
    period: "2021 – 2023",
    title: "LLM, Business & Corporate Law",
    place: "Thesis: Blockchain & Intellectual Property",
  },
  { period: "2021 – Present", title: "Operations Manager", place: "Deemaze Software" },
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
            <a className="link-underline" href={LINKEDIN} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="link-underline" href={`mailto:${EMAIL}`}>
              Email
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
            <p className="meta-label mb-6 text-accent">— Operations leader · Law · Tech</p>
            <h1 className="max-w-[22ch] text-[34px] leading-[1.06] sm:text-[46px]">
              Building cross-functional systems at the intersection of{" "}
              <span className="relative inline-block">
                <span className="relative z-10">law</span>
                <span className="absolute inset-x-0 bottom-[0.12em] z-0 h-[0.28em] bg-ochre/55" />
              </span>
              , technology, and business operations.
            </h1>
            <WaveRule className="mt-8 h-5 w-[220px] text-accent/70" />
            <p className="mt-6 max-w-[58ch] text-[17px] leading-[1.75] text-muted-foreground">
              Running legal, finance, HR, and public funding for a software company in Portugal.
              Picking up whatever each new domain requires, then owning it end to end.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${EMAIL}`}
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
            <h3 className="mb-6 text-[26px] sm:text-[30px]">Four domains, one owner.</h3>
            <p className="mb-12 max-w-[58ch] text-[16px] leading-[1.75] text-muted-foreground">
              I manage the operational backbone of tech-driven companies. My background is in law
              (LLB, LLM), but my daily execution lives at the intersection of process design,
              compliance, and internal tooling.
            </p>

            <ul className="grid gap-4 sm:grid-cols-2">
              {scope.map((item, i) => (
                <li
                  key={item.n}
                  className="group h-[190px] [perspective:1200px]"
                  tabIndex={0}
                >
                  <div className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus:[transform:rotateY(180deg)]">
                    {/* front */}
                    <div className="absolute inset-0 flex flex-col justify-between rounded-md border border-border bg-background p-6 [backface-visibility:hidden]">
                      <span className="flex items-center gap-2.5">
                        <span
                          className="inline-block h-2.5 w-2.5 shrink-0 rounded-[2px]"
                          style={{
                            backgroundColor: ["var(--accent)", "var(--ochre)", "var(--clay)", "var(--accent)"][
                              i % 4
                            ],
                          }}
                        />
                        <span className="display-index text-muted-foreground">{item.n}</span>
                      </span>
                      <div>
                        <h4 className="text-[21px]">{item.title}</h4>
                        <p className="mt-2 text-[13px] text-muted-foreground">Hover to read more</p>
                      </div>
                    </div>
                    {/* back */}
                    <div className="absolute inset-0 flex flex-col justify-between rounded-md border border-accent/40 bg-panel p-6 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                      <span className="flex items-center gap-2.5">
                        <span
                          className="inline-block h-2.5 w-2.5 shrink-0 rounded-[2px]"
                          style={{
                            backgroundColor: ["var(--accent)", "var(--ochre)", "var(--clay)", "var(--accent)"][
                              i % 4
                            ],
                          }}
                        />
                        <span className="display-index text-muted-foreground">{item.n}</span>
                      </span>
                      <div>
                        <h4 className="text-[17px]">{item.title}</h4>
                        <p className="mt-2 text-[14px] leading-[1.65] text-muted-foreground">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="relative border-t border-border">
          <div className="container-editorial section-y relative">
            <SectionLabel>Selected projects &amp; systems</SectionLabel>
            <h3 className="mb-12 text-[26px] sm:text-[30px]">Case studies, in brief.</h3>
            <ul className="grid gap-4 sm:grid-cols-2">
              {projects.map((p, i) => (
                <li key={p.title}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative flex h-full flex-col overflow-hidden rounded-md border border-border bg-panel/60 p-6 transition-colors hover:border-accent/50"
                  >
                    <ArcLines
                      className={`pointer-events-none absolute right-14 top-5 h-[22px] w-[22px] transition-transform duration-500 group-hover:-translate-y-0.5 ${
                        ["text-clay/60", "text-ochre/70", "text-accent/50", "text-clay/40"][i % 4]
                      }`}
                    />

                    <ArrowUpRight
                      className="absolute right-5 top-5 h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      strokeWidth={1.75}
                    />
                    <span className="display-index relative text-accent">{p.n}</span>
                    <h4 className="relative mt-3 max-w-[24ch] text-[19px]">{p.title}</h4>
                    <p className="relative mt-3 max-w-[40ch] text-[15px] leading-[1.7] text-muted-foreground">
                      {p.body}
                    </p>
                    <div className="relative mt-5 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-border px-3 py-1 text-[11px] uppercase tracking-[0.08em] text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
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
                Trained as a lawyer (LLB, LLM from the University of Coimbra), I moved into
                operations because I wanted to build the systems a company runs on, not just review
                them after the fact. Since 2021, I've run legal, finance, HR, and public funding for
                a software company as one connected function rather than four separate jobs.
              </p>
              <p className="text-muted-foreground">
                Each new domain came with its own learning curve, and I've made a habit of closing it
                fast enough to own the work end to end. That's what replaced outside consultants on
                public grant management, and what keeps contracts, hiring, and budgets moving without
                the usual handoffs between departments.
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
      </main>

      <footer className="relative border-t border-border bg-panel/60">
        <div className="container-editorial relative py-10 text-[14px] text-muted-foreground">
          <p>Based in Coimbra, Portugal · Built with Claude &amp; Lovable · Hosted on GitHub Pages.</p>
        </div>
      </footer>
    </div>
  );
}
