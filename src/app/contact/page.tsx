import type { Metadata } from "next";
import { ContextIntakeForm } from "@/components/context-intake-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Share one recurring workflow or operational problem with Vitis Vera and find a practical place to begin.",
};

const contextCards = [
  {
    number: "01",
    title: "Identify the bottleneck",
    body: "Where is time being lost, work being repeated, or decisions getting stuck?",
  },
  {
    number: "02",
    title: "Design the right fix",
    body: "Not every problem needs custom software. We help choose the simplest solution that creates real leverage.",
  },
  {
    number: "03",
    title: "Build the tool or system",
    body: "When the opportunity is clear, we help build practical tools that reduce manual work and improve how your team operates.",
  },
];

const contextExamples = [
  {
    label: "Wine distribution",
    copy: "Every week our team receives supplier invoices, manually checks item names, vintages, pack sizes, pricing, and inventory, then rebuilds a spreadsheet before anyone can make an ordering decision. It takes hours, creates errors, and slows down purchasing.",
  },
  {
    label: "Physical therapy",
    copy: "Clinic directors spend hours preparing for P&L or operations meetings by pulling reports, cleaning spreadsheets, and building presentations. By the time the team meets, most of the energy has gone into preparing the data instead of deciding what to do next.",
  },
  {
    label: "Hospitality",
    copy: "Our managers spend too much time gathering sales, labor, inventory, and reservation notes from different systems before weekly leadership meetings. The information is scattered, the story changes depending on who prepared it, and decisions are slower than they should be.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="noise bg-ink text-paper">
        <div className="site-shell grid gap-12 py-14 md:py-20 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-16">
          <div>
            <p className="eyebrow text-gold-light">Start with the work</p>
            <h1 className="display-title mt-6 max-w-2xl text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem]">
              Tell us where time is being lost. We will help build the solution.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-paper/68 md:text-lg">
              Bring us one workflow, report, handoff, or decision that keeps slowing your team down. We will help identify what should be fixed first, then design and build the tool, process, or system that buys that time back.
            </p>
          </div>

          <ContextIntakeForm />
        </div>
      </section>

      <section className="border-b hairline py-20 md:py-28">
        <div className="site-shell">
          <div className="grid gap-8 border-b hairline pb-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <p className="eyebrow text-gold">How we work from context</p>
            <div>
              <h2 className="display-title text-5xl md:text-6xl">From context to a working system.</h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted md:text-lg">
                We look for the recurring work that drains time, creates errors, or slows decisions. Then we help decide whether the best answer is a simpler process, an existing tool, custom automation, or a proprietary system your team can actually use.
              </p>
            </div>
          </div>

          <div className="grid border-l hairline md:grid-cols-3">
            {contextCards.map((card) => (
              <article key={card.title} className="border-r border-b hairline p-6 md:p-8">
                <p className="font-display text-3xl text-gold">{card.number}</p>
                <h3 className="mt-6 font-display text-3xl tracking-[-0.035em]">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{card.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 border-l-2 border-gold bg-paper-deep/55 p-7 md:p-10">
            <div className="grid gap-5 border-b hairline pb-8 md:grid-cols-[0.32fr_0.68fr] md:items-end">
              <h3 className="font-display text-4xl tracking-[-0.035em] md:text-5xl">Examples of useful context</h3>
              <p className="text-sm leading-7 text-muted md:text-base">
                You do not need to know the solution before reaching out. A real example of the work, who it affects, and why it matters is enough for us to begin.
              </p>
            </div>

            <div className="border-l hairline md:grid md:grid-cols-3">
              {contextExamples.map((example) => (
                <article key={example.label} className="border-r border-b hairline p-6">
                  <p className="eyebrow text-gold">{example.label}</p>
                  <p className="mt-5 text-sm leading-7 text-ink/80">{example.copy}</p>
                </article>
              ))}
            </div>

            <p className="mt-6 text-xs leading-6 text-muted">
              The best examples are specific: what happens today, who is involved, what it costs in time or confidence, and what a better outcome would make possible.
            </p>
          </div>
        </div>
      </section>

      <section className="noise bg-ink py-20 text-paper md:py-24">
        <div className="site-shell grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <p className="eyebrow text-gold-light">Our promise</p>
          <div>
            <h2 className="display-title max-w-4xl text-5xl md:text-6xl">What we will do with that context</h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-paper/68 md:text-lg">
              We will be direct about whether the problem needs custom technology, a simpler process, an existing tool, or no project at all. The goal of the first conversation is not to sell software. It is to find the highest-value place to buy back time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
