import { createFileRoute } from "@tanstack/react-router";

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
        <section className="container-editorial section-y">
          <h1 className="max-w-[20ch] text-[32px] leading-[1.12] sm:text-[40px]">
            Cross-functional operations leader bridging law, tech execution, and business systems.
          </h1>
          <p className="mt-8 max-w-[62ch] text-[17px] leading-[1.75] text-muted-foreground">
            Currently running operations at Deemaze Software in Portugal. Specialized in contract
            lifecycles, public grant governance, HR frameworks, and pragmatic workflow automation.
          </p>
        </section>

        <section className="border-t border-border">
          <div className="container-editorial section-y">
            <SectionTitle>What I do</SectionTitle>
            <p className="mb-14 max-w-[62ch] text-[17px] leading-[1.75]">
              I manage the operational backbone of tech-driven companies. My background is in law
              (LLB, LLM), but my daily execution lives at the intersection of process design,
              compliance, and internal tooling.
            </p>

            <ul>
              {doing.map((item) => (
                <li
                  key={item.n}
                  className="grid grid-cols-1 gap-2 border-t border-border py-8 transition-colors hover:bg-panel sm:grid-cols-[64px_1fr] sm:gap-8"
                >
                  <span className="text-[13px] font-medium text-accent">{item.n} /</span>
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

        <section className="border-t border-border">
          <div className="container-editorial section-y">
            <SectionTitle>Selected Projects &amp; Systems</SectionTitle>
            <ul>
              {projects.map((p) => (
                <li
                  key={p.title}
                  className="border-t border-border py-8 transition-colors hover:bg-panel"
                >
                  <h3 className="text-[19px]">{p.title}</h3>
                  <p className="mt-2 max-w-[58ch] text-[15px] leading-[1.7] text-muted-foreground">
                    {p.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-border">
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
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="container-editorial flex flex-wrap items-center justify-between gap-3 py-10 text-[14px] text-muted-foreground">
          <p>Based in Coimbra, Portugal · Built with Claude &amp; Lovable · Hosted on GitHub Pages.</p>
          <a className="link-underline text-accent" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </div>
      </footer>
    </div>
  );
}
