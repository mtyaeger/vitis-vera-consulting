import Link from "next/link";

const timeLossAreas = [
  "Manual reporting",
  "Spreadsheet work",
  "Data entry",
  "Copying information between systems",
  "Meeting preparation",
  "Approval bottlenecks",
];

const outcomes = [
  { label: "Reporting", before: "Three hours preparing reports", after: "Ten seconds" },
  { label: "Invoice processing", before: "Manual invoice processing", after: "Automated workflow" },
  { label: "Operational visibility", before: "Five spreadsheets and multiple meetings", after: "One source of truth" },
];

const differences = [
  { number: "01", title: "Business First", body: "We understand the operation and the cost of the problem before recommending technology." },
  { number: "02", title: "Built And Implemented For You", body: "We design, build, and put the system into practice with the people who will use it." },
  { number: "03", title: "Value Before Expansion", body: "We prove the business impact before recommending what should be built next." },
  { number: "04", title: "Designed To Adapt", body: "The system can evolve as your business, team, and priorities change." },
];

const aiOutcomes = [
  { number: "01", title: "Reduce Work", body: "Handle repetitive tasks so your team can focus on higher-value work." },
  { number: "02", title: "Improve Visibility", body: "Turn scattered information into clear, useful operational insight." },
  { number: "03", title: "Support Better Decisions", body: "Give people timely context without removing human judgment." },
];

const systemProgression = ["Problem", "Tool", "Trust", "Next Tool", "Operating System"];

function SectionHeading({ eyebrow, title, light = false, compact = false }: { eyebrow: string; title: string; light?: boolean; compact?: boolean }) {
  return (
    <div className="max-w-4xl">
      <p className={`eyebrow ${light ? "text-gold-light" : "text-gold"}`}>{eyebrow}</p>
      <h2 className={`display-title mt-5 ${compact ? "text-4xl sm:text-5xl md:text-6xl" : "text-5xl sm:text-6xl md:text-7xl"} ${light ? "text-paper" : "text-ink"}`}>{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="noise overflow-hidden bg-ink text-paper">
        <div className="site-shell flex min-h-[calc(88vh-5rem)] flex-col justify-center py-14 md:py-20">
          <p className="eyebrow text-gold-light">Business systems consulting & implementation</p>
          <h1 className="display-title mt-7 max-w-6xl text-[clamp(3.8rem,7.6vw,7.2rem)] leading-[0.9]">
            We Solve Operational Problems.
            <span className="block text-gold-light">You Buy Back Time.</span>
            <span className="block">Your Team Makes Better Decisions.</span>
          </h1>
          <div className="mt-8 grid gap-8 border-t border-paper/15 pt-7 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-xl font-semibold leading-8 md:text-2xl">Businesses hire Vitis Vera to fix expensive operational problems with custom business systems.</p>
              <p className="mt-3 max-w-2xl text-base leading-7 text-paper/65 md:text-lg">We combine business consulting with hands-on implementation. Software, AI, automation, and integrations are tools we use when they create measurable value.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex min-h-14 items-center justify-center bg-gold px-7 text-center text-xs font-bold uppercase tracking-[0.12em] text-ink transition-colors hover:bg-gold-light">Schedule a discovery call</Link>
              <Link href="#how-we-work" className="inline-flex min-h-14 items-center justify-center border border-paper/25 px-7 text-center text-xs font-bold uppercase tracking-[0.12em] transition-colors hover:border-gold hover:text-gold-light">See how we work</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b hairline py-18 md:py-24">
        <div className="site-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="The problems we solve" title="Where Is Your Team Losing Time?" compact />
            <div className="mt-6 text-base leading-8 text-muted md:text-lg">
              <p>Small, repetitive tasks become expensive when they happen across an entire team every week.</p>
              <p className="mt-4 max-w-2xl font-semibold text-ink">Most businesses do not have an AI problem.</p>
              <p className="max-w-2xl font-semibold text-ink">They have a time problem.</p>
            </div>
          </div>
          <div className="grid border-l border-t hairline sm:grid-cols-2">
            {timeLossAreas.map((item, index) => (
              <div key={item} className="flex min-h-24 items-center gap-4 border-b border-r hairline p-5">
                <span className="font-display text-2xl text-gold">0{index + 1}</span>
                <p className="text-base font-semibold leading-6 tracking-[-0.02em] md:text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="noise scroll-mt-20 bg-ink py-18 text-paper md:py-24">
        <div className="site-shell">
          <div className="grid gap-5 border-b border-paper/15 pb-8 lg:grid-cols-[auto_1fr] lg:items-end lg:gap-16">
            <p className="eyebrow text-gold-light lg:pb-2">Business outcomes</p>
            <h2 className="display-title max-w-5xl text-4xl text-paper sm:text-5xl md:text-6xl">Buy Back Time. <span className="text-gold-light">Make Better Decisions.</span></h2>
          </div>
          <div className="grid border-l border-paper/18 md:grid-cols-3">
            {outcomes.map((outcome) => (
              <article key={outcome.label} className="border-r border-b border-paper/18 bg-paper/[0.045] p-6 md:p-7">
                <p className="eyebrow text-gold-light">{outcome.label}</p>
                <div className="mt-6 border-l border-paper/20 pl-4">
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-paper/45">Before</p>
                  <p className="mt-2 min-h-12 text-sm leading-6 text-paper/60">{outcome.before}</p>
                </div>
                <div className="my-4 flex items-center gap-3 text-gold-light" aria-hidden="true"><span className="h-px flex-1 bg-gold/55" /><span className="text-lg">↓</span><span className="h-px flex-1 bg-gold/55" /></div>
                <div className="border-l-2 border-gold pl-4">
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-gold-light">After</p>
                  <p className="mt-2 font-display text-4xl leading-[0.95] tracking-[-0.04em] text-paper lg:text-5xl">{outcome.after}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 text-center text-base font-semibold text-paper/80 md:text-lg">Less work. Better information. More time for higher value work.</p>
        </div>
      </section>

      <section className="border-b hairline bg-paper-deep/35 py-18 md:py-24">
        <div className="site-shell grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="Practical AI" title="Make AI Useful" compact />
            <p className="mt-6 max-w-xl text-base leading-8 text-muted md:text-lg">AI should make the business easier to run. We use it where it can reduce work, improve visibility, or help people make better decisions.</p>
            <p className="mt-4 max-w-xl text-base font-semibold leading-8 text-ink md:text-lg">The measure is whether it creates a better business outcome.</p>
          </div>
          <div className="border-t hairline">
            {aiOutcomes.map((item) => (
              <div key={item.title} className="grid gap-3 border-b hairline py-6 sm:grid-cols-[4rem_0.8fr_1.2fr] sm:gap-6">
                <span className="font-display text-3xl text-gold">{item.number}</span>
                <h3 className="text-xl font-semibold tracking-[-0.025em]">{item.title}</h3>
                <p className="text-sm leading-7 text-muted md:text-base">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="noise bg-ink py-18 text-paper md:py-24">
        <div className="site-shell">
          <SectionHeading eyebrow="Why businesses hire us" title="A Business Partner, Not Another Platform" light compact />
          <div className="mt-10 grid border-l border-t border-paper/16 md:grid-cols-2">
            {differences.map((item) => (
              <article key={item.title} className="border-b border-r border-paper/16 p-6 md:p-7">
                <p className="text-xs text-gold-light">{item.number}</p>
                <h3 className="mt-5 font-display text-3xl tracking-[-0.035em] md:text-4xl">{item.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-paper/60">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-we-work" className="scroll-mt-20 border-b hairline py-18 md:py-24">
        <div className="site-shell grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="How we work" title="We Earn The Right To Build The Next Tool" compact />
            <p className="mt-6 max-w-xl text-base leading-8 text-muted md:text-lg">We start with one important problem, build the smallest useful tool, and prove its value in the business.</p>
            <p className="mt-4 max-w-xl text-base leading-8 text-ink md:text-lg">Trust and measurable results determine what gets built next. Over time, proven tools can become a proprietary operating system designed around your business.</p>
          </div>
          <div className="border-t hairline">
            {systemProgression.map((step, index) => (
              <div key={step} className="relative grid gap-4 border-b hairline py-5 sm:grid-cols-[5rem_1fr] sm:items-center">
                <span className="font-display text-3xl text-gold">0{index + 1}</span>
                <p className="font-display text-3xl tracking-[-0.035em] md:text-[2.5rem]">{step}</p>
                {index < systemProgression.length - 1 && <span className="absolute bottom-[-0.8rem] left-[0.7rem] z-10 bg-paper px-1 text-gold" aria-hidden="true">↓</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/35 py-18 md:py-24">
        <div className="site-shell grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
          <p className="eyebrow text-gold">Who you are hiring</p>
          <div>
            <h2 className="display-title text-5xl md:text-6xl">Built By Operators</h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-muted md:text-lg">Our perspective comes from years spent running businesses, leading teams, managing operations, selling, and solving real-world business problems.</p>
            <p className="mt-3 max-w-3xl text-base leading-8 text-ink md:text-lg">We understand the pressure behind the process because we have worked inside it. That experience shapes practical systems built for adoption and measurable results.</p>
          </div>
        </div>
      </section>

      <section className="noise border-y border-paper/15 bg-ink py-20 text-center text-paper md:py-28">
        <div className="site-shell">
          <p className="display-title mx-auto max-w-5xl text-5xl sm:text-6xl md:text-7xl">Buy Back Time.<span className="block text-gold-light">Improve Decisions.</span><span className="block">Build Advantage.</span></p>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-paper/65 md:text-lg">We help businesses replace operational friction with custom systems that make the work easier and the business clearer.</p>
        </div>
      </section>

      <section className="py-18 md:py-24">
        <div className="site-shell grid gap-12 border-t hairline pt-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="eyebrow text-gold">A practical first step</p>
            <h2 className="display-title mt-5 text-5xl md:text-6xl">Bring Us One Operational Problem</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted md:text-lg">We will help you understand the opportunity, determine the right system, and decide whether the business case is strong enough to build it.</p>
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
