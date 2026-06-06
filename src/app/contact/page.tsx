import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a practical conversation with Vitis Vera about an operational workflow, reporting challenge, or internal system.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="A useful conversation starts with the work." intro="Tell us where your team is losing time, visibility, or confidence. We will help you frame the problem before discussing a solution." />
      <section className="py-24 md:py-36"><div className="site-shell grid gap-16 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="eyebrow text-gold">Start here</p><h2 className="display-title mt-7 text-5xl md:text-7xl">One workflow is enough.</h2><p className="mt-7 max-w-md text-base leading-8 text-muted">You do not need a complete technology roadmap. A recurring bottleneck, manual report, disconnected handoff, or difficult decision is a perfectly good place to begin.</p></div><div className="border-t hairline"><div className="grid gap-4 border-b hairline py-8 sm:grid-cols-[0.35fr_0.65fr]"><p className="eyebrow text-muted">Email</p><a href="mailto:mark@vitisvera.com" className="font-display text-3xl tracking-[-0.025em] hover:text-gold md:text-4xl">mark@vitisvera.com</a></div><div className="grid gap-4 border-b hairline py-8 sm:grid-cols-[0.35fr_0.65fr]"><p className="eyebrow text-muted">Good context</p><p className="text-base leading-8 text-muted">What is happening today, who is affected, what it costs in time or risk, and what a better outcome would make possible.</p></div><div className="grid gap-4 border-b hairline py-8 sm:grid-cols-[0.35fr_0.65fr]"><p className="eyebrow text-muted">Our promise</p><p className="text-base leading-8 text-muted">We will be direct about whether the problem needs custom technology, a simpler process, an existing tool, or no project at all.</p></div></div></div></section>
    </>
  );
}
