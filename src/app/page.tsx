import Link from "next/link";

const traditionalSteps = [
  "Buy software",
  "Train team",
  "Change process",
  "Hope adoption happens",
];

const ourSteps = [
  "Find bottleneck",
  "Build solution",
  "Measure impact",
  "Expand when ready",
];

const beliefFlow = [
  "Problem",
  "Tool",
  "Habit",
  "System",
  "Competitive advantage",
];

const ownershipPrinciples = [
  {
    number: "01",
    title: "Own Your System",
    body: "Your business is not locked into a platform that controls your future.",
  },
  {
    number: "02",
    title: "Built Around Your Team",
    body: "The system adapts to your operation instead of forcing your operation to adapt to software.",
  },
  {
    number: "03",
    title: "Grow At Your Own Pace",
    body: "Every solution should create measurable value before the next one is built.",
  },
  {
    number: "04",
    title: "Designed To Evolve",
    body: "As technology improves, your system can improve with it.",
  },
];

const outcomes = [
  {
    label: "Reporting",
    before: "Three hours preparing reports",
    after: "Ten seconds",
  },
  {
    label: "Invoice processing",
    before: "Manual invoice processing",
    after: "Automated workflow",
  },
  {
    label: "Operational visibility",
    before: "Five spreadsheets and multiple meetings",
    after: "One source of truth",
  },
];

const workSteps = [
  "Identify the bottleneck",
  "Build the solution",
  "Measure the impact",
  "Expand only when it creates value",
];

function SectionIntro({
  eyebrow,
  title,
  body,
  light = false,
}: {
  eyebrow: string;
  title: string;
  body?: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className="max-w-4xl">
      <p className={`eyebrow ${light ? "text-gold-light" : "text-gold"}`}>
        {eyebrow}
      </p>
      <h2
        className={`display-title mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl ${
          light ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {body && (
        <div
          className={`mt-8 max-w-2xl text-base leading-8 md:text-lg ${
            light ? "text-paper/68" : "text-muted"
          }`}
        >
          {body}
        </div>
      )}
    </div>
  );
}

function ArrowSequence({
  steps,
  accent = false,
}: {
  steps: string[];
  accent?: boolean;
}) {
  return (
    <div className="mt-8 flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-4">
      {steps.map((step, index) => (
        <div key={step} className="contents">
          <div
            className={`flex min-h-20 flex-1 items-center border px-5 py-4 text-sm font-semibold leading-6 ${
              accent
                ? "border-gold/50 bg-gold/10 text-ink"
                : "hairline bg-white/30 text-muted"
            }`}
          >
            {step}
          </div>
          {index < steps.length - 1 && (
            <span
              className={`self-center text-xl ${
                accent ? "text-gold" : "text-muted/45"
              } rotate-90 lg:rotate-0`}
              aria-hidden="true"
            >
              →
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="noise overflow-hidden bg-ink text-paper">
        <div className="site-shell flex min-h-[calc(100vh-5rem)] flex-col justify-center py-16 md:py-24">
          <p className="eyebrow text-gold-light">Custom business systems</p>
          <h1 className="display-title mt-8 max-w-6xl text-[clamp(3.75rem,9vw,8.4rem)]">
            We Build Custom Business Systems That Buy Back Time And Improve
            Decision-Making.
          </h1>
          <div className="mt-10 grid gap-10 border-t border-paper/15 pt-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl text-lg leading-8 text-paper/72 md:text-xl md:leading-9">
              <p className="font-semibold text-paper">
                Most businesses don&apos;t need more software.
              </p>
              <p className="mt-3">
                They need fewer manual processes, better information, and
                systems that help people make better decisions.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-14 items-center justify-center bg-gold px-7 text-center text-xs font-bold uppercase tracking-[0.12em] text-ink transition-colors hover:bg-gold-light"
              >
                Schedule a discovery call
              </Link>
              <Link
                href="#how-we-work"
                className="inline-flex min-h-14 items-center justify-center border border-paper/25 px-7 text-center text-xs font-bold uppercase tracking-[0.12em] text-paper transition-colors hover:border-gold hover:text-gold-light"
              >
                How we work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-36">
        <div className="site-shell">
          <SectionIntro
            eyebrow="The problem"
            title="Most Software Creates New Work"
            body={
              <>
                <p>
                  Businesses spend countless hours moving information between
                  spreadsheets, reports, emails, meetings, and disconnected
                  systems.
                </p>
                <p className="mt-4">
                  Many software projects add complexity before they create
                  value.
                </p>
              </>
            }
          />
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <article className="border border-ink/12 p-6 md:p-8">
              <p className="eyebrow text-muted">Traditional approach</p>
              <ArrowSequence steps={traditionalSteps} />
            </article>
            <article className="border border-gold/50 bg-white/35 p-6 md:p-8">
              <p className="eyebrow text-gold">Our approach</p>
              <ArrowSequence steps={ourSteps} accent />
            </article>
          </div>
        </div>
      </section>

      <section className="border-y hairline bg-white/35 py-24 md:py-36">
        <div className="site-shell grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionIntro
            eyebrow="What we believe"
            title="Start With One Problem"
            body={
              <>
                <p>We do not begin with massive software projects.</p>
                <p className="mt-4">We begin with a specific business problem.</p>
                <p className="mt-4 text-ink">
                  We solve it. We measure the impact. Then we decide what comes
                  next.
                </p>
              </>
            }
          />
          <div>
            <div className="border-t hairline">
              {beliefFlow.map((step, index) => (
                <div key={step} className="relative border-b hairline py-6 pl-16">
                  <span className="absolute left-0 top-5 font-display text-3xl text-gold">
                    0{index + 1}
                  </span>
                  <p className="text-xl font-semibold tracking-[-0.02em]">
                    {step}
                  </p>
                  {index < beliefFlow.length - 1 && (
                    <span
                      className="absolute bottom-[-0.8rem] left-[0.7rem] z-10 bg-[#f8f6f0] px-1 text-gold"
                      aria-hidden="true"
                    >
                      ↓
                    </span>
                  )}
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-2xl text-base leading-8 text-muted">
              Over time, individual tools become a custom operating system
              designed around the way your business actually works.
            </p>
          </div>
        </div>
      </section>

      <section className="noise bg-ink py-24 text-paper md:py-36">
        <div className="site-shell">
          <SectionIntro
            eyebrow="Why it works"
            title="Your Business Should Own Its Competitive Advantage"
            light
            body={
              <div className="space-y-1 text-xl leading-8 text-paper/72">
                <p>Technology changes.</p>
                <p>AI models change.</p>
                <p>Software companies change.</p>
                <p className="pt-3 font-semibold text-paper">
                  Your competitive advantage should not.
                </p>
              </div>
            }
          />
          <div className="mt-16 grid border-l border-t border-paper/16 md:grid-cols-2">
            {ownershipPrinciples.map((principle) => (
              <article
                key={principle.title}
                className="min-h-64 border-b border-r border-paper/16 p-7 md:p-9"
              >
                <p className="text-xs text-gold-light">{principle.number}</p>
                <h3 className="mt-10 font-display text-4xl tracking-[-0.035em]">
                  {principle.title}
                </h3>
                <p className="mt-5 max-w-md text-sm leading-7 text-paper/62">
                  {principle.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-36">
        <div className="site-shell">
          <SectionIntro
            eyebrow="Real business outcomes"
            title="Technology Is Only Valuable When It Removes Work"
          />
          <div className="mt-16 grid gap-px overflow-hidden border hairline bg-ink/12 lg:grid-cols-3">
            {outcomes.map((outcome) => (
              <article key={outcome.label} className="bg-paper p-7 md:p-9">
                <p className="eyebrow text-gold">{outcome.label}</p>
                <div className="mt-10">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">
                    Before
                  </p>
                  <p className="mt-3 min-h-16 text-lg leading-7 text-muted">
                    {outcome.before}
                  </p>
                </div>
                <div className="mt-8 border-t hairline pt-7">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold">
                    After
                  </p>
                  <p className="mt-3 font-display text-4xl tracking-[-0.035em]">
                    {outcome.after}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center text-xl leading-9">
            <p className="text-muted">The goal is not more technology.</p>
            <p className="font-semibold">The goal is better outcomes.</p>
          </div>
        </div>
      </section>

      <section
        id="how-we-work"
        className="scroll-mt-20 border-y hairline bg-white/35 py-24 md:py-36"
      >
        <div className="site-shell grid gap-16 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionIntro
            eyebrow="How we work"
            title="We Earn The Right To Build The Next Tool"
            body={
              <p>
                Every project should pay for itself before moving to the next
                phase.
              </p>
            }
          />
          <div className="border-t hairline">
            {workSteps.map((step, index) => (
              <div
                key={step}
                className="grid gap-4 border-b hairline py-7 sm:grid-cols-[5rem_1fr] sm:items-center"
              >
                <span className="font-display text-4xl text-gold">
                  0{index + 1}
                </span>
                <p className="text-xl font-semibold tracking-[-0.025em]">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="noise bg-ink py-28 text-center text-paper md:py-40">
        <div className="site-shell">
          <p className="display-title mx-auto max-w-5xl text-6xl sm:text-7xl md:text-9xl">
            Buy Back Time.
            <span className="block text-gold-light">Improve Decisions.</span>
            <span className="block">Build Advantage.</span>
          </p>
          <div className="mx-auto mt-12 max-w-2xl text-lg leading-9 text-paper/68">
            <p>
              The companies that win are not necessarily the ones with the most
              software.
            </p>
            <p className="mt-4">
              They are the ones with the best systems. We help businesses build
              those systems.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-36">
        <div className="site-shell grid gap-12 border-t hairline pt-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="eyebrow text-gold">A practical first step</p>
            <h2 className="display-title mt-6 text-6xl md:text-8xl">
              Start With One Problem
            </h2>
            <div className="mt-7 max-w-2xl text-lg leading-8 text-muted">
              <p>You do not need a massive transformation project.</p>
              <p className="mt-3">
                You need a better way to solve the next problem in front of
                you.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-14 items-center justify-center bg-ink px-7 text-center text-xs font-bold uppercase tracking-[0.12em] text-paper transition-colors hover:bg-gold hover:text-ink"
            >
              Schedule a discovery call
            </Link>
            <a
              href="mailto:mark@vitisvera.com"
              className="inline-flex min-h-14 items-center justify-center border border-ink/20 px-7 text-center text-xs font-bold uppercase tracking-[0.12em] text-ink transition-colors hover:border-gold hover:text-gold"
            >
              Let&apos;s talk
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
