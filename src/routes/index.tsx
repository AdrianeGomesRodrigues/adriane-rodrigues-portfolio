import { createFileRoute } from "@tanstack/react-router";

import {
  ArchCutout,
  BlobCutout,
  HeroCollage,
  LeafCutout,
  SectionMark,
  SunCutout,
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

const EMAIL = "adrianegrodrigues@gmail.com";

const doing = [
  {
    n: "01",
    title: "Legal & Compliance Ops",
    body: "Contract lifecycle (MSA, DPA, NDA), GDPR frameworks, and risk mitigation across engineering teams.",
  },
  {
    n: "02",
    title: "Public & EU Funding",
    body: "End-to-end lifecycle management for PT2030, PRR, and Horizon programs (~€800K secured & managed in-house).",
  },
  {
    n: "03",
    title: "Finance & People Ops",
    body: "Financial administration, budget tracking, IT recruitment, and Portuguese Labour Code compliance.",
  },
  {
    n: "04",
    title: "Process Design & AI Tooling",
    body: "Standardizing SOPs and automating manual workflows using Claude, Make, and Google Apps Script.",
  },
];

const projects = [
  {
    title: "Public Grant Eligibility Evaluator",
    body: "Interactive tool mapping PT2030 & PRR criteria (Built with Claude).",
  },
  {
    title: "Legal Ops Contract Risk Matrix",
    body: "Micro-tool for clause triage & risk scoring.",
  },
  {
    title: "Case Study: In-Housing Public Grants",
    body: "Replacing external consultants to secure €800K with 100% audit compliance.",
  },
];

const background = [
  {
    degree: "Master's Degree (LLM) in Business & Corporate Law",
    place: "University of Coimbra — Thesis on Blockchain & IP",
  },
  {
    degree: "Bachelor's Degree (LLB) in Law",
    place: "University of Coimbra",
  },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-10 flex items-center gap-3">
      <SectionMark className="h-3.5 w-3.5 shrink-0 text-accent" />
      <span className="meta-label font-medium">{children}</span>
    </h2>
  );
}

function Index() {
  return (
    <div className="min-h-screen overflow-x-clip">
      <header className="border-b border-border">
        <div className="container-editorial flex flex-wrap items-center justify-between gap-3 py-6">
          <span className="flex items-center gap-2.5 font-display text-[17px] font-semibold tracking-tight">
            <LeafCutout className="h-5 w-3 shrink-0 text-accent" />
            Adriane Rodrigues
          </span>

          <nav className="flex items-center gap-6 text-[14px] text-muted-foreground">
            <a
              className="link-underline"
              href="https://www.linkedin.com/in/adrianegrodrigues/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a className="link-underline" href={`mailto:${EMAIL}`}>
              Email
            </a>
            <a className="link-underline" href="/cv.pdf">
              CV
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative">
          <HeroCollage className="pointer-events-none absolute right-0 top-6 hidden h-[300px] w-[340px] lg:block" />
          <BlobCutout className="pointer-events-none absolute -left-24 -top-16 h-[280px] w-[280px] text-clay/25" />
          <div className="container-editorial section-y relative">
            <p className="meta-label mb-6">Operations · Legal · Process design</p>
            <h1 className="max-w-[20ch] text-[34px] leading-[1.06] sm:text-[46px]">
              Cross-functional operations leader bridging{" "}
              <span className="relative inline-block">
                <span className="relative z-10">law</span>
                <span className="absolute inset-x-[-4px] bottom-[0.1em] z-0 h-[0.36em] -rotate-1 bg-ochre/55" />
              </span>
              , tech execution, and business systems.
            </h1>
            <WaveRule className="mt-8 h-3 w-[220px] text-accent/70" />
            <p className="mt-6 max-w-[62ch] text-[17px] leading-[1.75] text-muted-foreground">
              Currently running operations at Deemaze Software in Portugal. Specialized in contract
              lifecycles, public grant governance, HR frameworks, and pragmatic workflow automation.
            </p>
          </div>
        </section>


        <section className="relative border-t border-border bg-panel/50 paper-grain">
          <LeafCutout className="pointer-events-none absolute -right-6 top-10 h-[190px] w-[114px] rotate-[-12deg] text-sage/45" />
          <div className="container-editorial section-y relative">
            <SectionTitle>What I do</SectionTitle>
            <p className="mb-14 max-w-[62ch] text-[17px] leading-[1.75]">
              I manage the operational backbone of tech-driven companies. My background is in law
              (LLB, LLM), but my daily execution lives at the intersection of process design,
              compliance, and internal tooling.
            </p>

            <ul>
              {doing.map((item, i) => (
                <li
                  key={item.n}
                  className="group grid grid-cols-1 gap-2 border-t border-border py-8 sm:grid-cols-[64px_1fr] sm:gap-8"
                >
                  <span className="flex items-center gap-2">
                    <span
                      className="inline-block h-2.5 w-2.5 shrink-0 transition-transform duration-300 group-hover:rotate-45"
                      style={{
                        backgroundColor: ["var(--accent)", "var(--ochre)", "var(--sage)", "var(--clay)"][i % 4],
                        borderRadius: i % 2 === 0 ? "999px" : "2px",
                      }}
                    />
                    <span className="display-index text-muted-foreground">{item.n}</span>
                  </span>
                  <div>
                    <h3 className="text-[19px]">{item.title}</h3>
                    <p className="mt-2 max-w-[58ch] text-[15px] leading-[1.7] text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="relative border-t border-border">
          <SunCutout className="pointer-events-none absolute -left-16 bottom-12 h-[180px] w-[180px] text-ochre/35" />
          <div className="container-editorial section-y relative">
            <SectionTitle>Selected Projects &amp; Systems</SectionTitle>
            <ul className="grid gap-4 sm:grid-cols-2">
              {projects.map((p, i) => (
                <li
                  key={p.title}
                  className="group relative overflow-hidden rounded-md border border-border bg-panel/60 p-6 transition-colors hover:border-accent/50"
                >
                  <ArchCutout
                    className={`pointer-events-none absolute -right-4 -top-6 h-[110px] w-[80px] transition-transform duration-500 group-hover:translate-y-1 ${
                      ["text-clay/45", "text-sage/45", "text-ochre/45"][i % 3]
                    }`}
                  />
                  <h3 className="relative max-w-[24ch] text-[19px]">{p.title}</h3>
                  <p className="relative mt-3 max-w-[40ch] text-[15px] leading-[1.7] text-muted-foreground">
                    {p.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="relative border-t border-border">
          <div className="container-editorial section-y">
            <SectionTitle>Background</SectionTitle>
            <ul>
              {background.map((b) => (
                <li key={b.degree} className="border-t border-border py-8">
                  <h3 className="text-[19px]">{b.degree}</h3>
                  <p className="mt-2 text-[15px] leading-[1.7] text-muted-foreground">{b.place}</p>
                </li>
              ))}
            </ul>
            <WaveRule className="mt-6 h-3 w-[160px] text-sage" />
          </div>
        </section>
      </main>

      <footer className="relative border-t border-border bg-panel/60 paper-grain">
        <BlobCutout className="pointer-events-none absolute -right-16 -top-10 h-[200px] w-[200px] text-clay/30" />
        <div className="container-editorial relative flex flex-wrap items-center justify-between gap-3 py-10 text-[14px] text-muted-foreground">
          <p>Based in Coimbra, Portugal · Built with Claude &amp; Lovable · Hosted on GitHub Pages.</p>
          <a className="link-underline text-accent" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </div>
      </footer>

    </div>
  );
}
