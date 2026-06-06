"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContextIntakeForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Your context could not be sent.");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Your context could not be sent.");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-gold/45 bg-paper p-7 text-ink md:p-9" role="status">
        <p className="eyebrow text-gold">Workflow received</p>
        <p className="mt-6 font-display text-3xl leading-snug tracking-[-0.03em] md:text-4xl">
          Thanks &mdash; your workflow was sent. We will review the context and follow up with a clear starting point.
        </p>
      </div>
    );
  }

  const inputClasses = "mt-2 w-full border border-ink/15 bg-white/55 px-4 py-3 text-base text-ink outline-none transition-colors placeholder:text-muted/65 focus:border-gold";

  return (
    <div className="bg-paper p-6 text-ink shadow-[0_24px_70px_rgba(0,0,0,0.24)] sm:p-8">
      <h2 className="display-title text-4xl md:text-5xl">Start with one workflow.</h2>
      <p className="mt-4 max-w-xl text-sm leading-7 text-muted">
        You do not need to have the solution figured out. Send us the context behind one recurring problem, and we will help turn it into a clear next step.
      </p>

      <form className="mt-7 space-y-5" onSubmit={handleSubmit}>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="text-xs font-bold uppercase tracking-[0.11em] text-ink/75">
            Name
            <input className={inputClasses} type="text" name="name" placeholder="Your name" autoComplete="name" maxLength={100} required />
          </label>
          <label className="text-xs font-bold uppercase tracking-[0.11em] text-ink/75">
            Email
            <input className={inputClasses} type="email" name="email" placeholder="Your email" autoComplete="email" maxLength={254} required />
          </label>
        </div>

        <label className="block text-xs font-bold uppercase tracking-[0.11em] text-ink/75">
          Where is your team losing time, visibility, or confidence?
          <textarea
            className={`${inputClasses} min-h-28 resize-y normal-case tracking-normal`}
            name="workflow"
            placeholder="Example: Every week we rebuild invoice data, check item names, vintages, pack sizes, and pricing before anyone can make an ordering decision."
            maxLength={2000}
            required
          />
        </label>

        <label className="block text-xs font-bold uppercase tracking-[0.11em] text-ink/75">
          What would solving this make possible?
          <textarea
            className={`${inputClasses} min-h-24 resize-y normal-case tracking-normal`}
            name="outcome"
            placeholder="Example: Fewer errors, faster decisions, less meeting prep, cleaner handoffs, or more time back for the team."
            maxLength={1200}
            required
          />
        </label>

        <button
          className="inline-flex min-h-14 w-full items-center justify-center bg-ink px-7 text-xs font-bold uppercase tracking-[0.12em] text-paper transition-colors hover:bg-gold hover:text-ink disabled:cursor-wait disabled:opacity-65"
          type="submit"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending workflow..." : "Submit for contact"}
        </button>

        <p className="text-center text-xs leading-5 text-muted">
          Long descriptions are optional. A messy but real example is usually enough to begin.
        </p>

        {status === "error" && (
          <p className="text-sm leading-6 text-red-800" role="alert">
            {errorMessage} You can also email <a className="font-semibold underline" href="mailto:mark@vitisvera.com">mark@vitisvera.com</a>.
          </p>
        )}
      </form>
    </div>
  );
}
