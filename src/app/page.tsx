import Link from "next/link";

const painFlow = ["Manual work", "Lost time", "Poor visibility", "Slower decisions"];

const outcomes = [
  { label: "Reporting", before: "Three hours preparing reports", after: "Ten seconds" },
  { label: "Invoice processing", before: "Manual invoice processing", after: "Automated workflow" },
  { label: "Operational visibility", before: "Five spreadsheets and multiple meetings", after: "One source of truth" },
];

const differences = [
  { number: "01", title: "Own Your System", body: "Keep control of the processes and information that make your business valuable." },
  { number: "02", title: "Built Around Your Team", body: "The system fits the operation instead of forcing the operation to fit software." },
  { number: "03", title: "Grow At Your Own Pace", body: "Expand only after the current solution creates measurable value." },
  { number: "04", title: "Designed To Evolve", body: "Improve the system as your business, priorities, and technology change." },
];

const workSteps = [
  "Identify the bottleneck",
  "Build the solution",
  "Measure the impact",
  "Expand when it creates value",
];

const philosophyFlow = ["Problem", "Tool", "Habit", "System", "Competitive advantage"];

function SectionHeading({ eyebrow, title, light = false }: { eyebrow: string; title: string; light?: boolean }) {
  return (
    <div className="max-w-4xl">
      <p className={`eyebrow ${light ? "text-gold-light" : "text-gold"}`}>{eyebrow}</p>
      <h2 className={`display-title mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl ${light ? "text-paper" : "text-ink"}`}>{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="noise overflow-hidden bg-ink text-paper">
        <div className="site-shell flex min-h-[calc(100vh-5rem)] flex-col justify-center py-16 md:py-24">
          <p className="eyebrow text-gold-light">Proprietary business systems</p>
          <h1 className="display-title mt-8 max-w-5xl text-[clamp(4.4rem,10vw,9rem)]">
            Build Systems.
            <span className="block text-gold-light">Buy Back Time.</span>
            <span className="block">Improve Decisions.</span>
          </h1>
          <div className="mt-10 grid gap-10 border-t border-paper/15 pt-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-xl font-semibold leading-8 md:text-2xl">Most businesses don&apos;t need more software. They need better systems.</p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-paper/65 md:text-lg">We build proprietary business systems that eliminate manual work, streamline operations, and help teams make better decisions.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex min-h-14 items-center justify-center bg-gold px-7 text-center text-xs font-bold uppercase tracking-[0.12em] text-ink transition-colors hover:bg-gold-light">Schedule a discovery call</Link>
              <Link href="#how-we-work" className="inline-flex min-h-14 items-center justify-center border border-paper/25 px-7 text-center text-xs font-bold uppercase tracking-[0.12em] transition-colors hover:border-gold hover:text-gold-light">See how we work</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-36">
        <div className="site-shell grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <SectionHeading eyebrow="Business pain" title="Most Businesses Lose Hours Every Week To Manual Work" />
            <div className="mt-8 text-lg leading-9 text-muted">
              <p>Spreadsheets. Manual reporting. Data entry.</p>
              <p>Disconnected systems. Repetitive tasks.</p>
              <p className="mt-5 max-w-2xl text-ink">Most businesses are not struggling because they lack software. They are struggling because their systems create unnecessary work.</p>
            </div>
          </div>
          <div className="border-t hairline lg:mt-14">
            {painFlow.map((step, index) => (
              <div key={step} className="relative border-b hairline py-7 pl-16">
                <span className="absolute left-0 top-6 font-display text-3xl text-gold">0{index + 1}</span>
                <p className="text-2xl font-semibold tracking-[-0.025em]">{step}</p>
                {index < painFlow.length - 1 && <span className="absolute bottom-[-0.8rem] left-[0.7rem] z-10 bg-paper px-1 text-gold" aria-hidden="true">↓</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="noise scroll-mt-20 border-y border-paper/15 bg-ink py-20 text-paper md:py-28">
        <div className="site-shell">
          <div className="max-w-5xl">
            <p className="eyebrow text-gold-light">Business outcomes</p>
            <h2 className="display-title mt-5 text-4xl text-paper sm:text-5xl md:text-6xl">Technology Is Only Valuable If It Buys Back Your Time To Focus On Higher Value Work</h2>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {outcomes.map((outcome) => (
              <article key={outcome.label} className="border border-paper/16 bg-paper/[0.035] p-6 md:p-7">
                <p className="eyebrow text-gold-light">{outcome.label}</p>
                <div className="mt-7">
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-paper/38">Before</p>
                  <p className="mt-2 min-h-12 text-sm leading-6 text-paper/52">{outcome.before}</p>
                </div>
                <div className="my-4 flex items-center gap-3 text-gold-light" aria-hidden="true"><span className="h-px flex-1 bg-gold/35" /><span>↓</span><span className="h-px flex-1 bg-gold/35" /></div>
                <div>
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-gold-light">After</p>
                  <p className="mt-2 font-display text-4xl leading-none tracking-[-0.04em] text-paper lg:text-5xl">{outcome.after}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 text-center text-lg font-semibold text-paper/85">Less work. Better information. More time for higher value work.</p>
        </div>
      </section>

      <section className="noise bg-ink py-24 text-paper md:py-36">
        <div className="site-shell">
          <SectionHeading eyebrow="Why we are different" title="Your Business Should Own Its Competitive Advantage" light />
          <div className="mt-16 grid border-l border-t border-paper/16 md:grid-cols-2">
            {differences.map((item) => (
              <article key={item.title} className="min-h-56 border-b border-r border-paper/16 p-7 md:p-9">
                <p className="text-xs text-gold-light">{item.number}</p>
                <h3 className="mt-8 font-display text-4xl tracking-[-0.035em]">{item.title}</h3>
                <p className="mt-4 max-w-md text-sm leading-7 text-paper/60">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-we-work" className="scroll-mt-20 py-24 md:py-36">
        <div className="site-shell grid gap-16 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <SectionHeading eyebrow="How we work" title="We Earn The Right To Build The Next Tool" />
            <p className="mt-8 max-w-xl text-lg leading-8 text-muted">Every project should create measurable value before moving to the next phase.</p>
          </div>
          <div className="border-t hairline">
            {workSteps.map((step, index) => (
              <div key={step} className="grid gap-4 border-b hairline py-7 sm:grid-cols-[5rem_1fr] sm:items-center">
                <span className="font-display text-4xl text-gold">0{index + 1}</span>
                <p className="text-xl font-semibold tracking-[-0.025em]">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y hairline bg-white/35 py-24 md:py-32">
        <div className="site-shell grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div>
            <p className="eyebrow text-gold">How advantage grows</p>
            <h2 className="display-title mt-6 text-5xl md:text-7xl">How Advantage Compounds</h2>
          </div>
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row sm:gap-2">
            {philosophyFlow.map((step, index) => (
              <div key={step} className="contents">
                <div className="w-full flex-1 border hairline bg-paper px-4 py-5 text-center text-sm font-semibold sm:min-h-24 sm:place-content-center">{step}</div>
                {index < philosophyFlow.length - 1 && <span className="rotate-90 text-gold sm:rotate-0" aria-hidden="true">→</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="site-shell grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
          <p className="eyebrow text-gold">Built by operators</p>
          <div>
            <h2 className="display-title text-5xl md:text-7xl">Built By Operators, Not Just Developers</h2>
            <p className="mt-8 max-w-3xl text-lg leading-9 text-muted">We have spent years running businesses, leading teams, managing operations, and solving real-world business problems.</p>
            <p className="mt-4 max-w-3xl text-lg leading-9 text-ink">We build systems designed to create measurable business outcomes, not technology for technology&apos;s sake.</p>
          </div>
        </div>
      </section>

      <section className="noise bg-ink py-28 text-center text-paper md:py-40">
        <div className="site-shell">
          <p className="display-title mx-auto max-w-5xl text-6xl sm:text-7xl md:text-9xl">Buy Back Time.<span className="block text-gold-light">Improve Decisions.</span><span className="block">Build Advantage.</span></p>
          <p className="mx-auto mt-10 max-w-2xl text-lg leading-9 text-paper/65">The companies that win are not necessarily the ones with the most software. They are the ones with the best systems.</p>
        </div>
      </section>

      <section className="py-24 md:py-36">
        <div className="site-shell grid gap-12 border-t hairline pt-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="eyebrow text-gold">A practical first step</p>
            <h2 className="display-title mt-6 text-6xl md:text-8xl">Start With One Problem</h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">You do not need a massive transformation project. You need a better way to solve the next problem in front of you.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="inline-flex min-h-14 items-center justify-center bg-ink px-7 text-center text-xs font-bold uppercase tracking-[0.12em] text-paper transition-colors hover:bg-gold hover:text-ink">Schedule a discovery call</Link>
            <a href="mailto:mark@vitisvera.com" className="inline-flex min-h-14 items-center justify-center border border-ink/20 px-7 text-center text-xs font-bold uppercase tracking-[0.12em] transition-colors hover:border-gold hover:text-gold">Let&apos;s talk</a>
          </div>
        </div>
      </section>
    </>
  );
}
