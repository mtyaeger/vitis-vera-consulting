import Link from "next/link";

export const systemSteps = [
  { key: "S", title: "Start with the Decision", text: "Define the decision, outcome, and measurable business value before discussing technology." },
  { key: "Y", title: "Your Reality", text: "Understand the real workflow, constraints, people, data, and exceptions involved." },
  { key: "S", title: "Simplify", text: "Remove unnecessary complexity and clarify ownership before anything is automated." },
  { key: "T", title: "Test the Idea", text: "Create alignment around the smallest useful intervention and prove the ROI case." },
  { key: "E", title: "Engineer It", text: "Build a secure, maintainable system around the way the business needs to operate." },
  { key: "M", title: "Multiply It", text: "Scale the proven result across teams, workflows, and operating environments." },
];

export function SystemSequence({ compact = false }: { compact?: boolean }) {
  return (
    <div>
      <div className="border-t hairline">
        {systemSteps.map((step, index) => (
          <article key={`${step.key}-${step.title}`} className={`group grid border-b hairline ${compact ? "gap-4 py-5 sm:grid-cols-[3rem_1fr]" : "gap-5 py-8 sm:grid-cols-[5rem_0.8fr_1.2fr] sm:items-center md:py-10"}`}>
            <div className="relative flex items-center">
              <span className={`${compact ? "text-3xl" : "text-5xl md:text-6xl"} font-display text-gold`}>{step.key}</span>
              {index < systemSteps.length - 1 && <span className={`absolute left-[0.72rem] top-full w-px bg-gold/45 ${compact ? "h-5" : "h-8 md:h-10"}`} aria-hidden="true" />}
            </div>
            <h3 className={`${compact ? "text-base" : "text-xl md:text-2xl"} font-semibold tracking-[-0.025em]`}>{step.title}</h3>
            {!compact && <p className="max-w-xl text-sm leading-7 text-muted">{step.text}</p>}
          </article>
        ))}
      </div>
      {compact && <Link href="/system-method" className="mt-7 inline-flex items-center gap-3 text-sm font-bold">See how SYSTEM works <span className="text-gold">→</span></Link>}
    </div>
  );
}
