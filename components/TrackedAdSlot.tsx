'use client';

import { useEffect, useRef, useState } from 'react';
import GptAdSlot from './GptAdSlot';
import type { FillStatus } from './gpt';
import { trackEvent } from './track';
import { fireTikTokConversionOnce } from './ttConversion';
import { fireFacebookConversionOnce } from './fbConversion';

// How long after visibility we wait for GPT to deliver slotRenderEnded before
// logging the view as 'unresolved' (blocked GPT / suspended webviews never fire it).
const AD_STATUS_TIMEOUT_MS = 8000;

/**
 * Funnel ad slot: renders a GAM/GPT unit (AdSense backfill) and fires a single
 * `ad_view` event when the unit scrolls into view AND GPT has reported the fill
 * status via slotRenderEnded (event.isEmpty) — the official signal that replaced
 * the old adsbygoogle data-ad-status MutationObserver hack.
 *
 * The once-per-session conversion (TikTok/Meta, browser + server, deduped)
 * fires ONLY on a genuinely 'filled', >=50%-visible unit. Slots whose status
 * never arrives are logged as ad_status:'unresolved' and are NOT
 * conversion-eligible, so the pixels never get trained on non-views.
 * Used only on funnel pages.
 */
export default function TrackedAdSlot({
  adUnit,
  locale,
  prelendSlug,
  conversion = false,
  funnelStep = 'ad_view',
}: {
  /** GAM ad unit code (na_o_top / na_o_mid1 / na_o_mid2 / na_v_top) */
  adUnit: string;
  locale: 'en' | 'fr' | 'es';
  prelendSlug: string;
  conversion?: boolean;
  /** Per-slot funnel step (ad_view_v_top, ad_view_o_top, ad_view_o_mid1, ad_view_o_mid2)
   *  so every ad block is its own row in the funnel report. event_type stays 'ad_view'. */
  funnelStep?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const fired = useRef(false);
  // Drives the wrapper/label visibility (replaces the old data-ad-status CSS hooks).
  const [fill, setFill] = useState<FillStatus | null>(null);
  // Bridge: GptAdSlot's onRender prop stays identity-stable while the real
  // handler lives inside the effect (so every listener it touches is local
  // to the effect and removeEventListener always gets the same reference).
  const onRenderBridge = useRef<((s: FillStatus) => void) | null>(null);
  const onRenderStable = useRef((s: FillStatus) => onRenderBridge.current?.(s)).current;

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    let status: FillStatus | null = null;
    let visible = false;
    let timer: ReturnType<typeof setTimeout> | null = null;

    // If the user leaves while we're still waiting for GPT, flush the ad_view
    // immediately (sendBeacon survives pagehide) so quick bounces are not lost.
    const flushOnLeave = () => finish(status ?? 'unresolved');
    const onVisibilityChange = () => {
      if (document.visibilityState === 'hidden') flushOnLeave();
    };
    const removeLeaveListeners = () => {
      window.removeEventListener('pagehide', flushOnLeave);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };

    // Logs the single ad_view and fires the conversion — exactly once.
    const finish = (s: FillStatus | 'unresolved') => {
      if (fired.current) return;
      fired.current = true;
      if (timer) clearTimeout(timer);
      removeLeaveListeners();

      // Conversion ONLY on a genuinely filled, >=50%-visible unit. Each platform
      // helper no-ops unless this session belongs to it (tt_* vs fb_* params),
      // so at most one of them returns fields for the server to forward.
      const tt = s === 'filled' ? fireTikTokConversionOnce() : null;
      const fb = s === 'filled' ? fireFacebookConversionOnce() : null;
      const extra = tt || fb ? { ...(tt || {}), ...(fb || {}) } : undefined;

      trackEvent('ad_view', {
        locale,
        prelendSlug,
        funnelStep,
        meta: { slot: adUnit, ad_status: s, conversion: conversion || undefined },
        extra,
      });
    };

    // GPT slotRenderEnded → official fill status.
    onRenderBridge.current = (s) => {
      status = s;
      setFill(s);
      if (visible) finish(s);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !fired.current && !visible) {
            visible = true;
            io.disconnect();
            if (status) {
              finish(status);
              return;
            }
            // Visible but GPT hasn't rendered yet — wait, with an escape hatch.
            window.addEventListener('pagehide', flushOnLeave);
            document.addEventListener('visibilitychange', onVisibilityChange);
            timer = setTimeout(() => finish(status ?? 'unresolved'), AD_STATUS_TIMEOUT_MS);
          }
        }
      },
      { threshold: 0.5 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      if (timer) clearTimeout(timer);
      removeLeaveListeners();
      onRenderBridge.current = null;
    };
  }, [adUnit, locale, prelendSlug, conversion, funnelStep]);

  return (
    <div
      ref={ref}
      className={`w-full flex-col items-center mb-8 ${fill === 'unfilled' ? 'hidden' : 'flex'}`}
    >
      {fill === 'filled' && (
        <span className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider mb-2 text-center">
          {locale === 'es' ? 'Publicidad' : 'Advertisement'}
        </span>
      )}
      <GptAdSlot
        adUnit={adUnit}
        width={300}
        height={250}
        onRender={onRenderStable}
        className="w-full text-center"
      />
    </div>
  );
}
