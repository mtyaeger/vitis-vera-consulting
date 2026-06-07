"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandMark } from "./brand-mark";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/our-process", label: "Our Process" },
  { href: "/system-method", label: "SYSTEM" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b hairline bg-paper/95 backdrop-blur-md">
      <div className="site-shell flex h-20 items-center justify-between">
        <BrandMark />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => <Link key={link.href} href={link.href} className={`text-[0.76rem] font-semibold tracking-[0.04em] transition-colors hover:text-gold ${pathname === link.href ? "text-gold" : "text-ink/75"}`}>{link.label}</Link>)}
        </nav>
        <button type="button" className="grid size-11 place-items-center border hairline md:hidden" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          <span className="space-y-1.5"><span className="block h-px w-5 bg-ink" /><span className="block h-px w-5 bg-ink" /></span>
        </button>
      </div>
      {open && <nav className="site-shell border-t hairline py-5 md:hidden" aria-label="Mobile navigation"><div className="grid gap-1">{links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="border-b hairline py-4 text-sm font-semibold">{link.label}</Link>)}</div></nav>}
    </header>
  );
}
