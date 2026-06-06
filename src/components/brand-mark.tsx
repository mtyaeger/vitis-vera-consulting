import Link from "next/link";

export function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className={`group inline-flex items-center gap-3 ${inverse ? "text-paper" : "text-ink"}`} aria-label="Vitis Vera home">
      <span className={`grid size-9 place-items-center rounded-full border font-display text-xl leading-none ${inverse ? "border-gold-light/70 text-gold-light" : "border-gold text-gold"}`}>V</span>
      <span className="font-display text-2xl font-medium tracking-[-0.035em]">Vitis Vera</span>
    </Link>
  );
}
