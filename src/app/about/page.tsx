import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "About",
  description: "Vitis Vera combines operational leadership and software architecture to build practical systems for growing companies.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Vitis Vera" title="Operators first. Technologists second." intro="We combine operating experience and software architecture to solve business problems with practical, measurable systems." />

      <section className="py-20 md:py-28">
        <div className="site-shell grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <SectionHeading eyebrow="Our perspective" title="Better systems, not more software." />
          <div className="space-y-6 text-lg leading-9 text-muted">
            <p>Vitis Vera works with growing companies where process, reporting, and decision-making have become harder as the business has expanded.</p>
            <p>We start with the operating reality: the work people do, the decisions they make, the information they need, and the friction slowing them down. Technology comes after the problem is understood.</p>
            <p className="font-semibold text-ink">Our role is to find the smallest useful intervention, prove its value, and build a system the business can trust.</p>
          </div>
        </div>
      </section>

      <section className="border-y hairline bg-white/35 py-20 md:py-28">
        <div className="site-shell">
          <SectionHeading eyebrow="The founders" title="Business judgment and technical depth." />
          <div className="mt-14 grid border-l border-t hairline md:grid-cols-2">
            <article className="border-b border-r hairline p-8 md:p-10"><p className="eyebrow text-gold">Operations & leadership</p><h2 className="mt-8 font-display text-5xl tracking-[-0.04em]">Mark Yaeger</h2><p className="mt-5 max-w-lg text-base leading-8 text-muted">Mark brings operational, sales, and leadership experience across complex, relationship-driven businesses. He keeps the work grounded in the business case, adoption, and measurable outcomes.</p></article>
            <article className="border-b border-r hairline p-8 md:p-10"><p className="eyebrow text-gold">Architecture & engineering</p><h2 className="mt-8 font-display text-5xl tracking-[-0.04em]">Junaid Dawud</h2><p className="mt-5 max-w-lg text-base leading-8 text-muted">Junaid brings software architecture and engineering expertise. He translates operational requirements into secure, maintainable systems that can evolve with the business.</p></article>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="site-shell grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <p className="eyebrow text-gold">Where we started</p>
          <div><p className="max-w-3xl text-lg leading-9 text-muted">Vitis Vera began as a wine technology product. Building that native iOS platform, along with internal tools for operating businesses, shaped our approach to workflow automation, verified data, and practical systems design.</p><blockquote className="display-title mt-12 max-w-4xl text-5xl md:text-6xl">“We do not replace people. We help people spend more time doing what matters.”</blockquote></div>
        </div>
      </section>

      <section className="pb-20 md:pb-28"><div className="site-shell flex flex-col gap-6 border-t hairline pt-9 md:flex-row md:items-center md:justify-between"><p className="text-lg font-semibold">Have a workflow that is costing time, visibility, or confidence?</p><Link href="/contact" className="inline-flex items-center gap-3 text-sm font-bold">Start a conversation <span className="text-gold">→</span></Link></div></section>
    </>
  );
}
