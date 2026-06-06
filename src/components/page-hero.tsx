type PageHeroProps = { eyebrow: string; title: string; intro: string };

export function PageHero({ eyebrow, title, intro }: PageHeroProps) {
  return (
    <section className="noise overflow-hidden bg-ink text-paper">
      <div className="site-shell grid min-h-[66vh] items-end gap-12 py-20 md:grid-cols-[1fr_0.6fr] md:py-28">
        <div><p className="eyebrow text-gold-light">{eyebrow}</p><h1 className="display-title mt-7 max-w-4xl text-6xl sm:text-7xl md:text-[6.5rem]">{title}</h1></div>
        <div className="border-l border-gold/60 pl-6 md:mb-3"><p className="max-w-md text-base leading-8 text-paper/70">{intro}</p></div>
      </div>
    </section>
  );
}
