import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  lines: string[];
  highlightIndex: number;
  intro: string;
  actions?: ReactNode;
};

export function PageHero({ eyebrow, lines, highlightIndex, intro, actions }: PageHeroProps) {
  return (
    <section className="noise overflow-hidden bg-ink text-paper">
      <div className="site-shell grid min-h-[calc(82vh-5rem)] items-center gap-12 py-16 lg:grid-cols-[minmax(0,1.55fr)_minmax(18rem,0.45fr)] lg:gap-16 lg:py-20">
        <div>
          <p className="eyebrow text-gold-light">{eyebrow}</p>
          <h1 className="display-title mt-7 max-w-5xl text-[clamp(3.15rem,5.7vw,5.5rem)] leading-[0.9]">
            {lines.map((line, index) => (
              <span key={line} className={`block ${index === highlightIndex ? "text-gold-light" : ""}`}>
                {line}
              </span>
            ))}
          </h1>
        </div>
        <div className="border-l border-gold/60 pl-6">
          <p className="max-w-md text-base leading-8 text-paper/70 md:text-lg">{intro}</p>
          {actions && <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col">{actions}</div>}
        </div>
      </div>
    </section>
  );
}
