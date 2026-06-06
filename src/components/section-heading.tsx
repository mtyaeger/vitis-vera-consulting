type SectionHeadingProps = { eyebrow: string; title: string; body?: string; light?: boolean };

export function SectionHeading({ eyebrow, title, body, light = false }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-4"><span className={`gold-rule ${light ? "bg-gold-light" : ""}`} /><p className={`eyebrow ${light ? "text-gold-light" : "text-gold"}`}>{eyebrow}</p></div>
      <h2 className={`display-title mt-7 text-5xl sm:text-6xl md:text-7xl ${light ? "text-paper" : "text-ink"}`}>{title}</h2>
      {body && <p className={`mt-6 max-w-2xl text-base leading-8 ${light ? "text-paper/65" : "text-muted"}`}>{body}</p>}
    </div>
  );
}
