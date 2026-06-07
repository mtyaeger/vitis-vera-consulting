import Link from "next/link";
import { BrandMark } from "./brand-mark";

export function SiteFooter() {
  return (
    <footer className="noise bg-ink text-paper">
      <div className="site-shell py-16 md:py-20">
        <div className="grid gap-12 border-b border-paper/15 pb-14 md:grid-cols-[1.3fr_0.7fr] md:items-end">
          <div><BrandMark inverse /><p className="mt-7 max-w-lg text-sm leading-7 text-paper/65">Business systems consulting and implementation that buys back time and improves decision-making.</p></div>
          <div className="md:text-right"><p className="eyebrow text-gold-light">A practical first step</p><Link href="/contact" className="mt-4 inline-block font-display text-4xl tracking-[-0.03em] underline decoration-gold/50 underline-offset-8 transition-colors hover:text-gold-light">Start a conversation</Link></div>
        </div>
        <div className="flex flex-col gap-4 pt-7 text-xs text-paper/45 md:flex-row md:items-center md:justify-between"><p>© {new Date().getFullYear()} Vitis Vera. All rights reserved.</p><div className="flex flex-wrap gap-6"><Link href="/about" className="hover:text-paper">About</Link><Link href="/our-process" className="hover:text-paper">Our Process</Link><Link href="/system-method" className="hover:text-paper">SYSTEM</Link><Link href="/contact" className="hover:text-paper">Contact</Link></div></div>
      </div>
    </footer>
  );
}
