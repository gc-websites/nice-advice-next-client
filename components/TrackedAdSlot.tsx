'use client';

import { useEffect, useRef } from 'react';
import AdSense from './AdSense';
import { trackEvent } from './track';
import { fireTikTokConversionOnce } from './ttConversion';

/**
 * Funnel ad slot: renders an AdSense unit (with label + auto-hide when unfilled)
 * and fires a single `ad_view` event when the unit scrolls into view.
 *
 * When `conversion` is set (the prelander's top ad), the first view ALSO fires
 * the TikTok conversion (browser + server, deduped) — mirroring the competitor's
 * "ad viewed" conversion. Used only on funnel pages, not site-wide.
 */
export default function TrackedAdSlot({
  slot,
  locale,
  prelendSlug,
  conversion = false,
}: {
  slot: string;
  locale: 'en' | 'fr' | 'es';
  prelendSlug: string;
  conversion?: boolean;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !fired.current) {
            fired.current = true;
            const ins = el.querySelector('ins.adsbygoogle');
            const status = ins?.getAttribute('data-ad-status') || '';

            // On the conversion ad, fire the TikTok conversion on view — unless the
            // unit explicitly returned no ad. Returns the fields the server forwards.
            const tt =
              conversion && status !== 'unfilled' ? fireTikTokConversionOnce() : null;

            trackEvent('ad_view', {
              locale,
              prelendSlug,
              meta: { slot, ad_status: status, conversion: conversion || undefined },
              extra: tt || undefined,
            });
            io.disconnect();
          }
        }
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [slot, locale, prelendSlug, conversion]);

  return (
    <div
      ref={ref}
      className="w-full flex flex-col items-center mb-8 group has-[ins[data-ad-status='unfilled']]:hidden has-[ins[style*='display: none']]:hidden"
    >
      <span className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider mb-2 text-center hidden group-has-[ins:not(:empty)]:block">
        Advertisement
      </span>
      <AdSense
        slot={slot}
        format="auto"
        className="w-full text-center"
        style={{ display: 'block', minHeight: 250, width: '100%' }}
      />
    </div>
  );
}
