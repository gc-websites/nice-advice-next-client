'use client';

import { useEffect, useRef, useState } from 'react';
import { trackEvent } from './track';

/**
 * Full-screen "human check" gate shown as soon as the page opens.
 * Blocks the whole screen with a dimmed, blurred overlay and a small centered
 * card with a single confirm button. Styled to match the landing (teal brand,
 * Merriweather heading, rounded card). Dismisses on click and unlocks scroll.
 *
 * Tracks `captcha_shown` (on open) and `captcha_passed` (on confirm) so the
 * funnel journey records the gate step.
 */
export default function RobotGate({
  locale,
  prelendSlug,
}: {
  locale: 'en' | 'fr' | 'es';
  prelendSlug: string;
}) {
  const [open, setOpen] = useState(true);
  const shownTracked = useRef(false);

  // Fire captcha_shown once when the gate appears.
  useEffect(() => {
    if (shownTracked.current) return;
    shownTracked.current = true;
    trackEvent('captcha_shown', { locale, prelendSlug });
  }, [locale, prelendSlug]);

  // Lock page scroll while the gate is open.
  useEffect(() => {
    if (!open) return;
    const html = document.documentElement;
    const body = document.body;
    const prevHtml = html.style.overflow;
    const prevBody = body.style.overflow;
    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';
    return () => {
      html.style.overflow = prevHtml;
      body.style.overflow = prevBody;
    };
  }, [open]);

  if (!open) return null;

  const handlePass = () => {
    trackEvent('captcha_passed', { locale, prelendSlug });
    setOpen(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="robot-gate-title"
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
    >
      <div className="w-full max-w-sm rounded-2xl border border-black/5 bg-white p-7 text-center shadow-2xl dark:border-white/10 dark:bg-additionalText sm:p-8">
        <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full bg-main/10 text-main">
          <ShieldCheckIcon />
        </div>

        <h2
          id="robot-gate-title"
          className="mb-2 font-merriweather text-xl font-bold text-mainText dark:text-white sm:text-2xl"
        >
          Quick security check
        </h2>
        <p className="mb-6 text-[15px] leading-relaxed text-additionalText dark:text-white/70">
          Please confirm you&apos;re human to continue.
        </p>

        <button
          type="button"
          onClick={handlePass}
          className="group/btn relative isolate flex w-full cursor-pointer items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-br from-main to-main3 px-6 py-4 text-base font-bold uppercase tracking-wide text-white shadow-[0_12px_28px_-10px_rgba(3,145,133,0.55)] transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_22px_48px_-12px_rgba(3,145,133,0.75)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-main/40 active:translate-y-0 active:scale-100 sm:text-lg"
        >
          {/* gradient cross-fade on hover */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-main2 to-main3 opacity-0 transition-opacity duration-500 ease-out group-hover/btn:opacity-100"
          />
          {/* sweeping shine */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-[45%] -translate-x-[170%] -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-[900ms] ease-out group-hover/btn:translate-x-[320%]"
          />
          <span className="relative z-10 inline-flex items-center gap-2.5">
            <CheckIcon />
            I&apos;m not a robot
          </span>
        </button>
      </div>
    </div>
  );
}

function ShieldCheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className="h-8 w-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 transition-transform duration-300 ease-out group-hover/btn:scale-110">
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
