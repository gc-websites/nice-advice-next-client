'use client';

import { useEffect, useRef } from 'react';
import AdSense from './AdSense';
import { trackEvent } from './track';

/**
 * Funnel ad slot: renders an AdSense unit (with label + auto-hide when unfilled)
 * and fires a single `ad_view` event when the unit scrolls into view — so the
 * journey records which ads each user actually saw. Used only on funnel pages,
 * not site-wide, to avoid noise.
 */
export default function TrackedAdSlot({
  slot,
  locale,
  prelendSlug,
}: {
  slot: string;
  locale: 'en' | 'fr' | 'es';
  prelendSlug: string;
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
            const status = ins?.getAttribute('data-ad-status') || 'unknown';
            trackEvent('ad_view', { locale, prelendSlug, meta: { slot, ad_status: status } });
            io.disconnect();
          }
        }
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [slot, locale, prelendSlug]);

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
