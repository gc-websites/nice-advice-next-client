'use client';

import { useEffect, useRef } from 'react';
import AdSense from './AdSense';
import { trackEvent } from './track';
import { fireTikTokConversionOnce } from './ttConversion';
import { fireFacebookConversionOnce } from './fbConversion';

// How long after visibility we wait for AdSense to resolve data-ad-status
// before logging the view as 'unresolved' (prefetched/suspended webviews and
// blocked AdSense never resolve at all).
const AD_STATUS_TIMEOUT_MS = 8000;

/**
 * Funnel ad slot: renders an AdSense unit (with label + auto-hide when unfilled)
 * and fires a single `ad_view` event when the unit scrolls into view AND
 * AdSense has resolved its fill status.
 *
 * The once-per-session conversion (TikTok/Meta, browser + server, deduped)
 * fires ONLY when the slot resolves to data-ad-status="filled". Empty/never-
 * resolving statuses ('' — prefetch phantoms, suspended webviews, blocked ads)
 * are logged as ad_status:'unresolved' and are NOT conversion-eligible, so the
 * pixels never get trained on non-views. Used only on funnel pages.
 */
export default function TrackedAdSlot({
  slot,
  locale,
  prelendSlug,
  conversion = false,
  funnelStep = 'ad_view',
}: {
  slot: string;
  locale: 'en' | 'fr' | 'es';
  prelendSlug: string;
  conversion?: boolean;
  /** Per-slot funnel step (ad_view_v_top, ad_view_o_top, ad_view_o_mid1, ad_view_o_mid2)
   *  so every ad block is its own row in the funnel report. event_type stays 'ad_view'. */
  funnelStep?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    let mo: MutationObserver | null = null;
    let timer: ReturnType<typeof setTimeout> | null = null;

    const readStatus = (): string =>
      el.querySelector('ins.adsbygoogle')?.getAttribute('data-ad-status') || '';

    // If the user leaves while we're still waiting for AdSense, flush the
    // ad_view immediately (sendBeacon survives pagehide) so quick bounces
    // are not lost from the funnel.
    const flushOnLeave = () => {
      const s = readStatus();
      finish(s === 'filled' || s === 'unfilled' ? s : 'unresolved');
    };
    const onVisibilityChange = () => {
      if (document.visibilityState === 'hidden') flushOnLeave();
    };
    const removeLeaveListeners = () => {
      window.removeEventListener('pagehide', flushOnLeave);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };

    // Logs the single ad_view and fires the conversion — exactly once.
    const finish = (status: 'filled' | 'unfilled' | 'unresolved') => {
      if (fired.current) return;
      fired.current = true;
      mo?.disconnect();
      if (timer) clearTimeout(timer);
      removeLeaveListeners();

      // Conversion ONLY on a genuinely filled, >=50%-visible unit. Each platform
      // helper no-ops unless this session belongs to it (tt_* vs fb_* params),
      // so at most one of them returns fields for the server to forward.
      const tt = status === 'filled' ? fireTikTokConversionOnce() : null;
      const fb = status === 'filled' ? fireFacebookConversionOnce() : null;
      const extra = tt || fb ? { ...(tt || {}), ...(fb || {}) } : undefined;

      trackEvent('ad_view', {
        locale,
        prelendSlug,
        funnelStep,
        meta: { slot, ad_status: status, conversion: conversion || undefined },
        extra,
      });
    };

    // Phase 2 (after visibility): wait for AdSense to resolve the fill status.
    const awaitStatus = () => {
      const now = readStatus();
      if (now === 'filled' || now === 'unfilled') {
        finish(now);
        return;
      }
      window.addEventListener('pagehide', flushOnLeave);
      document.addEventListener('visibilitychange', onVisibilityChange);
      // Watch the whole subtree: covers both the <ins> getting the attribute
      // later AND the <ins> not existing yet at visibility time.
      if (typeof MutationObserver !== 'undefined') {
        mo = new MutationObserver(() => {
          const s = readStatus();
          if (s === 'filled' || s === 'unfilled') finish(s);
        });
        mo.observe(el, {
          subtree: true,
          childList: true,
          attributes: true,
          attributeFilter: ['data-ad-status'],
        });
      }
      timer = setTimeout(() => {
        const s = readStatus();
        finish(s === 'filled' || s === 'unfilled' ? s : 'unresolved');
      }, AD_STATUS_TIMEOUT_MS);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !fired.current) {
            io.disconnect();
            awaitStatus();
          }
        }
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      mo?.disconnect();
      if (timer) clearTimeout(timer);
      removeLeaveListeners();
    };
  }, [slot, locale, prelendSlug, conversion, funnelStep]);

  return (
    <div
      ref={ref}
      className="w-full flex flex-col items-center mb-8 group has-[ins[data-ad-status='unfilled']]:hidden has-[ins[style*='display: none']]:hidden"
    >
      <span className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider mb-2 text-center hidden group-has-[ins:not(:empty)]:block">
        {locale === 'es' ? 'Publicidad' : 'Advertisement'}
      </span>
      <AdSense
        slot={slot}
        width={300}
        height={250}
        className="w-full text-center"
      />
    </div>
  );
}
