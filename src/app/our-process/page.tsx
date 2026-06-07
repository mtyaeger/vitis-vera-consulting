import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Our Process",
  description: "A practical overview of how Vitis Vera engagements move from discovery through implementation, ownership, and responsible scale.",
};

const engagementSteps = [
  { number: "01", title: "Discovery & Assessment", summary: "Understand where time is being lost and what a better outcome would make possible." },
  { number: "02", title: "Prioritize Opportunities", summary: "Choose the problem that can create the most value first." },
  { number: "03", title: "Build a Focused Solution", summary: "Build the smallest solution capable of solving the problem." },
  { number: "04", title: "Launch & Improve", summary: "Put it into real work, learn from the team, and improve it." },
  { number: "05", title: "Scale What Works", summary: "Turn proven solutions into a stronger operating system over time." },
];

const processSections = [
  {
    number: "01",
    eyebrow: "Discovery",
    title: "Begin with the operating reality.",
    copy: [
      "The goal of discovery is not to discuss software. It is to understand the problem well enough to recommend the most efficient solution.",
      "Discovery and assessment costs $250. That fee is credited toward implementation if we move forward together.",
    ],
  },
  {
    number: "02",
    eyebrow: "Prioritize",
    title: "Choose the right first opportunity.",
    copy: [
      "Every business has more opportunities than it has time, resources, or attention.",
      "Every problem deserves a solution. Not every problem should be solved at the same time. We identify the place where a focused effort can create the greatest return.",
    ],
  },
  {
    number: "03",
    eyebrow: "Build",
    title: "Create the smallest useful solution.",
    copy: [
      "We build the smallest solution capable of solving the problem. That keeps the work focused, limits unnecessary cost, and creates value quickly.",
      "Some projects launch in weeks. The timeline depends on the workflow, the systems involved, and what the team needs to use it confidently.",
    ],
  },
  {
    number: "04",
    eyebrow: "Launch & Improve",
    title: "Put the solution into real work.",
    copy: [
      "A solution only matters if people use it. We launch it inside the real workflow, listen to the team, and measure whether it is saving time or improving decisions.",
      "Then we fix what gets in the way and strengthen what is working.",
    ],
  },
  {
    number: "05",
    eyebrow: "Scale What Works",
    title: "Expand from evidence, not assumption.",
    copy: [
      "Individual solutions can evolve into a collection of connected tools. Each new tool should earn its place by solving a real problem.",
      "Over time, that collection can become a proprietary operating system tailored to the way your business works.",
    ],
  },
];

const workingDetails = [
  {
    eyebrow: "Existing software",
    title: "Working With Your Existing Software",
    copy: [
      "We do not immediately replace software. We often build around the investments your team already understands and uses.",
      "We can connect systems, automate repetitive work, improve reporting, and increase the value of existing software. The goal is to build the system your business actually needs.",
    ],
  },
  {
    eyebrow: "Scope & investment",
    title: "Discovery & Pricing",
    copy: [
      "Discovery and assessment is $250 and is credited toward implementation.",
      "Most pilot projects range from hundreds to several thousand dollars, depending on the problem and the systems involved. No surprises. No long-term commitments.",
    ],
  },
  {
    eyebrow: "After launch",
    title: "Ongoing Partnership (Optional)",
    copy: [
      "Ongoing support typically ranges from $100 to $500 per month. It can include support, improvements, updates, maintenance, and evaluation of new opportunities.",
      "We continuously test new AI and automation tools. When those tools create a better option, we may identify ways to improve solutions we have already delivered.",
    ],
  },
  {
    eyebrow: "Your advantage",
    title: "Ownership",
    copy: [
      "The solution belongs to you. Full source code handoff is available, along with the information your team needs to operate and maintain what was built.",
      "Your business should own the system and the advantage it creates.",
    ],
  },
];

export default function OurProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="From first conversation to working solution"
        title="Our Process"
        intro="Every business has inefficiencies. The challenge is knowing which one to solve first. Our process identifies the highest-impact opportunities, builds practical solutions, and helps your team spend less time on repetitive work and more time on the people, decisions, and relationships that drive growth."
      />

      <section className="border-b hairline bg-paper-deep py-16 md:py-20">
        <div className="site-shell">
          <div className="grid gap-7 border-b hairline pb-9 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <p className="eyebrow text-gold">A typical engagement</p>
            <h2 className="display-title max-w-4xl text-5xl md:text-6xl">Five connected stages. One practical outcome.</h2>
          </div>

          <div className="grid border-l hairline md:grid-cols-5">
            {engagementSteps.map((step, index) => (
              <article key={step.title} className="relative border-r border-b hairline p-5 md:min-h-72 md:p-6">
                <p className="font-display text-3xl text-gold">{step.number}</p>
                <h3 className="mt-8 font-display text-3xl leading-none tracking-[-0.035em]">{step.title}</h3>
                <p className="mt-5 text-sm leading-7 text-muted">{step.summary}</p>
                {index < engagementSteps.length - 1 && (
                  <span className="absolute -bottom-3 left-5 z-10 bg-paper-deep px-1 text-gold md:-right-3 md:bottom-auto md:left-auto md:top-7" aria-hidden="true">
                    →
                  </span>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="site-shell">
          {processSections.map((section) => (
            <article
              key={section.eyebrow}
              className="grid gap-8 border-t hairline py-12 lg:grid-cols-[0.2fr_0.45fr_1.35fr] lg:gap-12 lg:py-16"
            >
              <p className="font-display text-4xl text-gold">{section.number}</p>
              <p className="eyebrow pt-2 text-gold">{section.eyebrow}</p>
              <div>
                <h2 className="display-title max-w-3xl text-5xl md:text-6xl">{section.title}</h2>
                <div className="mt-6 max-w-2xl space-y-4 text-base leading-8 text-muted md:text-lg">
                  {section.copy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="noise bg-ink py-20 text-paper md:py-28">
        <div className="site-shell">
          <div className="grid gap-8 border-b border-paper/18 pb-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <p className="eyebrow text-gold-light">Working together</p>
            <h2 className="display-title max-w-4xl text-5xl md:text-6xl">The practical details around every engagement.</h2>
          </div>

          <div className="grid border-l border-paper/18 md:grid-cols-2">
            {workingDetails.map((detail) => (
              <article key={detail.title} className="border-r border-b border-paper/18 p-7 md:min-h-72 md:p-9">
                <p className="eyebrow text-gold-light">{detail.eyebrow}</p>
                <h2 className="mt-7 font-display text-4xl leading-none tracking-[-0.035em] md:text-5xl">{detail.title}</h2>
                <div className="mt-6 max-w-xl space-y-4 text-sm leading-7 text-paper/62 md:text-base">
                  {detail.copy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="site-shell grid gap-10 border-t hairline pt-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="eyebrow text-gold">Want to go deeper?</p>
            <h2 className="display-title mt-6 max-w-4xl text-5xl md:text-7xl">See how we think.</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted">Our Process explains how we work with you. SYSTEM explains how we think through the problem, decide what gets built first, and create measurable value.</p>
          </div>
          <Link href="/system-method" className="inline-flex min-h-14 items-center justify-center bg-ink px-7 text-center text-xs font-bold uppercase tracking-[0.12em] text-paper transition-colors hover:bg-gold hover:text-ink">
            Explore SYSTEM
          </Link>
        </div>
      </section>
    </>
  );
}
