import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "About",
  description:
    "Vitis Vera helps growing businesses close the gap between how they operate today and the software systems supporting their work.",
};

const approach = [
  {
    number: "01",
    title: "Understand the operation",
    body: "We learn how work actually moves through the business: who does it, what decisions depend on it, where information lives, and where time or confidence is being lost.",
  },
  {
    number: "02",
    title: "Redesign the workflow",
    body: "We separate necessary complexity from accumulated friction. Before building anything, we define a clearer way for the work, information, and decisions to move.",
  },
  {
    number: "03",
    title: "Build what the workflow requires",
    body: "The answer may connect existing platforms, automate a repetitive task, improve reporting, or introduce a focused custom tool. The business problem determines the technology.",
  },
  {
    number: "04",
    title: "Prove it in real work",
    body: "We put the system into the hands of the people who will use it, measure whether it improves the operation, and refine it from evidence.",
  },
];

const principles = [
  {
    title: "Software should serve the operation.",
    body: "We are not anti-software. Established platforms can be valuable, and replacing them is often unnecessary. We work with what already earns its place and address the gaps around it.",
  },
  {
    title: "Technology is a means, not the offer.",
    body: "We are not selling AI, automation, or a preferred platform. We use the tools that fit the problem and judge them by the time saved, clarity created, and decisions improved.",
  },
  {
    title: "Ownership creates resilience.",
    body: "We are the opposite of vendor lock-in. Whenever practical, clients should be able to understand, control, and own the systems that become important to their business.",
  },
  {
    title: "The relationship should remain a choice.",
    body: "Some clients retain us to support and improve what we build. Others prefer documentation, source code, and a complete handoff. Both are successful outcomes.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Vitis Vera exists"
        lines={[
          "Your Business Evolves.",
          "Your Systems Should Too.",
          "That Gap Creates Opportunity.",
        ]}
        highlightIndex={2}
        intro="We redesign workflows and build practical systems around the way a business operates now, not the way its software expects it to operate."
      />

      <section className="border-b hairline py-20 md:py-28">
        <div className="site-shell grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="eyebrow text-gold">Why we exist</p>
            <p className="mt-7 max-w-sm font-display text-4xl leading-[1.02] tracking-[-0.035em]">
              The business changed. The system did not.
            </p>
          </div>
          <div>
            <h2 className="display-title max-w-4xl text-5xl md:text-7xl">
              Growth creates a gap between the operation and the tools beneath it.
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-muted md:text-lg">
              <p>
                Teams grow. Responsibilities shift. Customer expectations change. Leaders need different information to make good decisions.
              </p>
              <p>
                The software beneath the business rarely changes at the same pace. Workflows become workarounds. Reporting spreads across spreadsheets. People copy information between systems and rely on institutional memory to keep the operation moving.
              </p>
              <p className="font-semibold text-ink">
                Vitis Vera exists to close that gap: identify the friction, redesign the workflow, and build a system that reflects how the organization operates today.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper-deep py-20 md:py-28">
        <div className="site-shell">
          <div className="grid gap-8 border-b hairline pb-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <p className="eyebrow text-gold">Our approach</p>
            <div>
              <h2 className="display-title max-w-4xl text-5xl md:text-7xl">
                Start with how the business works.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-muted md:text-lg">
                We approach systems work as operators. The first question is not what can be built. It is what needs to work better.
              </p>
            </div>
          </div>

          <div className="border-t hairline">
            {approach.map((item) => (
              <article
                key={item.number}
                className="grid gap-4 border-b hairline py-8 md:grid-cols-[5rem_0.75fr_1.25fr] md:gap-8 md:py-10"
              >
                <p className="font-display text-3xl text-gold">{item.number}</p>
                <h3 className="font-display text-3xl leading-none tracking-[-0.035em] md:text-4xl">
                  {item.title}
                </h3>
                <p className="max-w-xl text-sm leading-7 text-muted md:text-base">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="noise bg-ink py-20 text-paper md:py-28">
        <div className="site-shell">
          <div className="grid gap-8 border-b border-paper/18 pb-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <p className="eyebrow text-gold-light">Our philosophy</p>
            <h2 className="display-title max-w-4xl text-5xl md:text-7xl">
              Build capability, not dependency.
            </h2>
          </div>

          <div className="grid border-l border-paper/18 md:grid-cols-2">
            {principles.map((principle) => (
              <article
                key={principle.title}
                className="border-r border-b border-paper/18 p-7 md:min-h-72 md:p-9"
              >
                <h3 className="font-display text-4xl leading-none tracking-[-0.035em] md:text-5xl">
                  {principle.title}
                </h3>
                <p className="mt-6 max-w-xl text-sm leading-7 text-paper/62 md:text-base">
                  {principle.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b hairline py-20 md:py-28">
        <div className="site-shell">
          <div className="grid gap-8 border-b hairline pb-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <p className="eyebrow text-gold">The founders</p>
            <div>
              <h2 className="display-title max-w-4xl text-5xl md:text-7xl">
                Business judgment and technical depth, at the same table.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-muted md:text-lg">
                Every engagement brings operating judgment and technical execution together. The people shaping the workflow are accountable for making it work.
              </p>
            </div>
          </div>

          <div className="grid border-l hairline md:grid-cols-2">
            <article className="border-r border-b hairline p-7 md:p-10">
              <p className="eyebrow text-gold">Co-Founder & CEO</p>
              <h3 className="mt-8 font-display text-5xl tracking-[-0.04em] md:text-6xl">Mark Yaeger</h3>
              <p className="mt-6 max-w-lg text-base leading-8 text-muted">
                Mark leads the business side of the work: understanding the operation, setting the strategy, redesigning workflows, and guiding implementation with the people who will use the system.
              </p>
              <p className="mt-8 border-t hairline pt-5 text-xs font-bold uppercase tracking-[0.14em] text-ink">
                Business operations · Strategy · Workflow design · Implementation
              </p>
            </article>
            <article className="border-r border-b hairline p-7 md:p-10">
              <p className="eyebrow text-gold">Co-Founder & CTO</p>
              <h3 className="mt-8 font-display text-5xl tracking-[-0.04em] md:text-6xl">Junaid Dawud</h3>
              <p className="mt-6 max-w-lg text-base leading-8 text-muted">
                Junaid leads the technical side of the work: defining the architecture, engineering the system, automating the right tasks, and carrying the solution through reliable technical execution.
              </p>
              <p className="mt-8 border-t hairline pt-5 text-xs font-bold uppercase tracking-[0.14em] text-ink">
                Architecture · Engineering · Automation · Technical execution
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white/35 py-20 md:py-28">
        <div className="site-shell grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <p className="eyebrow text-gold">The outcome</p>
          <div>
            <h2 className="display-title max-w-4xl text-5xl md:text-7xl">
              A business that is easier to run and better prepared to change.
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-muted md:text-lg">
              <p>
                The goal is a clearer operation: less repetitive work, better access to information, fewer avoidable bottlenecks, and more confidence in the decisions that move the business forward.
              </p>
              <p>
                Sometimes that outcome is one focused tool. Sometimes proven tools grow into a connected operating system built around the business. In either case, the system should earn its place by making the work measurably better.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="site-shell grid gap-10 border-t hairline pt-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="eyebrow text-gold">A practical first step</p>
            <h2 className="display-title mt-6 max-w-4xl text-5xl md:text-7xl">
              Bring us the part of the business that no longer works the way it should.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted md:text-lg">
              We will help you understand the friction, identify the right first intervention, and determine whether there is a sound business case for building it.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex min-h-14 items-center justify-center bg-ink px-7 text-center text-xs font-bold uppercase tracking-[0.12em] text-paper transition-colors hover:bg-gold hover:text-ink"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </>
  );
}
