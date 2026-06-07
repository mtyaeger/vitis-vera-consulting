import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SystemSequence, systemSteps } from "@/components/system-grid";

export const metadata: Metadata = {
  title: "SYSTEM Method",
  description: "SYSTEM is the Vitis Vera methodology for identifying opportunities, prioritizing solutions, creating organizational buy-in, and building systems that generate measurable ROI.",
};

export default function SystemMethodPage() {
  return (
    <>
      <PageHero
        eyebrow="The SYSTEM Method"
        lines={[
          "A Connected Process",
          "From Friction",
          "To Measurable Result.",
        ]}
        highlightIndex={2}
        intro="SYSTEM is how we identify opportunities, prioritize solutions, create organizational buy-in, and determine what gets built first."
      />

      <section className="border-b hairline bg-paper-deep">
        <div className="site-shell flex flex-wrap items-center justify-center gap-x-5 gap-y-3 py-6 md:gap-x-8">
          {systemSteps.map((step, index) => <div key={`${step.key}-${index}-sequence`} className="flex items-center gap-5 md:gap-8"><span className="font-display text-4xl text-gold md:text-5xl">{step.key}</span>{index < systemSteps.length - 1 && <span className="text-muted">→</span>}</div>)}
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="site-shell grid gap-16 lg:grid-cols-[0.55fr_1.45fr]">
          <div className="lg:sticky lg:top-32 lg:self-start"><p className="eyebrow text-gold">The methodology</p><h2 className="display-title mt-6 text-5xl md:text-6xl">SYSTEM is how we think.</h2><p className="mt-6 max-w-sm text-base leading-8 text-muted">Each step reduces uncertainty and builds the evidence needed for the next. The sequence matters.</p></div>
          <SystemSequence />
        </div>
      </section>

      <section className="noise bg-ink py-20 text-paper md:py-28">
        <div className="site-shell grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
          <p className="eyebrow text-gold-light">What SYSTEM creates</p>
          <div className="grid gap-8 sm:grid-cols-2">
            {["A clear business decision", "A grounded view of the workflow", "Organizational alignment", "A measurable ROI case", "A focused first build", "A path to responsible scale"].map((outcome, index) => <div key={outcome} className="border-t border-paper/20 pt-5"><span className="text-xs text-gold-light">0{index + 1}</span><p className="mt-3 text-lg font-semibold">{outcome}</p></div>)}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28"><div className="site-shell flex flex-col gap-8 border-t hairline pt-10 md:flex-row md:items-end md:justify-between"><div><p className="eyebrow text-gold">Every engagement starts here</p><h2 className="display-title mt-5 text-5xl md:text-7xl">Bring us one stubborn workflow.</h2></div><Link href="/contact" className="inline-flex min-h-14 items-center justify-center bg-ink px-7 text-xs font-bold uppercase tracking-[0.12em] text-paper">Talk through the friction</Link></div></section>
    </>
  );
}
