"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "submitting" | "error";
type ContactMethod = "" | "Email" | "Call";

export function ContextIntakeForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [preferredContact, setPreferredContact] = useState<ContactMethod>("");
  const [showSuccess, setShowSuccess] = useState(false);

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

      if (!response.ok) {
        const result = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(result?.error || "Your context could not be sent.");
      }

      form.reset();
      setPreferredContact("");
      setErrorMessage("");
      setStatus("idle");
      setShowSuccess(true);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Your context could not be sent.");
    }
  }

  const inputClasses = "mt-2 w-full border border-ink/15 bg-white/55 px-4 py-3 text-base text-ink outline-none transition-colors placeholder:text-muted/65 focus:border-gold";

  return (
    <>
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

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-xs font-bold uppercase tracking-[0.11em] text-ink/75">
              Phone Number
              <input
                className={inputClasses}
                type="tel"
                name="phone"
                placeholder="Your phone number"
                autoComplete="tel"
                maxLength={40}
                required={preferredContact === "Call"}
              />
            </label>
            <label className="text-xs font-bold uppercase tracking-[0.11em] text-ink/75">
              Preferred Method of Contact
              <select
                className={inputClasses}
                name="preferredContact"
                value={preferredContact}
                onChange={(event) => setPreferredContact(event.target.value as ContactMethod)}
                required
              >
                <option value="" disabled>Select a method</option>
                <option value="Email">Email</option>
                <option value="Call">Call</option>
              </select>
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

      {showSuccess && (
        <div className="fixed inset-0 z-[100] grid place-items-center bg-ink/75 p-4" role="presentation">
          <div
            className="w-full max-w-lg border border-gold/45 bg-paper p-7 text-ink shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:p-10"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-success-title"
          >
            <p className="eyebrow text-gold">Message received</p>
            <h2 id="contact-success-title" className="display-title mt-6 text-4xl sm:text-5xl">
              Thank you for contacting us!
            </h2>
            <p className="mt-5 text-base leading-8 text-muted">
              We received your message and will follow up as soon as possible.
            </p>
            <button
              className="mt-8 inline-flex min-h-14 w-full items-center justify-center bg-ink px-7 text-xs font-bold uppercase tracking-[0.12em] text-paper transition-colors hover:bg-gold hover:text-ink"
              type="button"
              onClick={() => setShowSuccess(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
