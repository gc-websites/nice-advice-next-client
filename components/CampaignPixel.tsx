'use client';

import { useEffect, useRef } from 'react';
import { getOrCreateTtEventId, getTtclid } from './ttConversion';

/**
 * Campaign pixel — TikTok.
 *
 * Replicates the competitor's URL-parameter–driven pixel approach, for TikTok:
 * the ad URL carries the pixel id + event, the page loads the TikTok pixel and
 * fires the conversion event on the first CTA click (the /v/ "Get started"
 * button that sends the user to the offer page).
 *
 * Uses TikTok-specific `tt_*` URL params (NOT the bare `pixel`/`event`, which
 * are already reserved for the Facebook pixel in this codebase — sharing them
 * would make ClickTracker fire a spurious FB event).
 *
 * Campaign URL contract (only `tt_pixel` is required):
 *   ?tt_pixel=Cxxxxxxxxx       // TikTok Pixel ID (required to do anything)
 *   &tt_event=CompletePayment   // event name (default: CompletePayment)
 *   &tt_fire=click              // "click" = on first CTA click (default) | "load"
 *   &tt_value=1&tt_currency=USD // optional, for value-based optimization
 *   &tt_content_id=digital-marketing
 *
 * Params are persisted in sessionStorage so they survive client navigation,
 * and the conversion is fired at most once per session.
 */

declare global {
  interface Window {
    ttq?: any;
    TiktokAnalyticsObject?: string;
  }
}

const CTA_SELECTOR = '[class*="cta"], a[data-cta]';

export default function CampaignPixel() {
  const fired = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const params = new URLSearchParams(window.location.search);

    // Read a param from the URL, falling back to (and persisting in) sessionStorage.
    const get = (key: string, storeKey: string): string => {
      const v = params.get(key);
      if (v) {
        try {
          sessionStorage.setItem(storeKey, v);
        } catch {
          /* ignore */
        }
        return v;
      }
      try {
        return sessionStorage.getItem(storeKey) || '';
      } catch {
        return '';
      }
    };

    const pixel = get('tt_pixel', 'na_tt_pixel');
    if (!pixel) return; // no TikTok campaign pixel → nothing to do

    const event = get('tt_event', 'na_tt_event') || 'CompletePayment';
    const fire = (get('tt_fire', 'na_tt_fire') || 'click').toLowerCase();
    const value = get('tt_value', 'na_tt_value');
    const currency = get('tt_currency', 'na_tt_currency');
    const contentId = get('tt_content_id', 'na_tt_content_id');

    loadTikTok(pixel); // loads SDK + fires Pageview (ttq.page)
    getTtclid(); // capture & persist ttclid for the server-side Events API event

    const properties: Record<string, unknown> = {};
    if (value && !Number.isNaN(Number(value))) properties.value = Number(value);
    if (currency) properties.currency = currency;
    if (contentId) {
      properties.content_id = contentId;
      properties.content_type = 'product';
    }

    const fireConversion = () => {
      if (fired.current) return;
      try {
        if (sessionStorage.getItem('na_tt_converted')) {
          fired.current = true;
          return;
        }
      } catch {
        /* ignore */
      }
      fired.current = true;
      try {
        sessionStorage.setItem('na_tt_converted', '1');
      } catch {
        /* ignore */
      }
      // Shared event_id so the browser pixel and the server Events API event dedupe.
      const eventId = getOrCreateTtEventId();
      try {
        window.ttq?.track?.(event, properties, { event_id: eventId });
      } catch {
        /* ignore */
      }
    };

    if (fire === 'load') {
      fireConversion();
      return;
    }

    // Default: fire on the first CTA click (capture phase, before navigation).
    const onClick = (ev: MouseEvent) => {
      const target = ev.target as Element | null;
      if (!target || !target.closest) return;
      if (!target.closest(CTA_SELECTOR)) return;
      fireConversion();
      document.removeEventListener('click', onClick, true);
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return null;
}

// Standard TikTok Pixel base code + Pageview.
function loadTikTok(pixelId: string) {
  if (typeof window === 'undefined') return;
  /* eslint-disable */
  (function (w: any, d: any, t: string) {
    w.TiktokAnalyticsObject = t;
    const ttq = (w[t] = w[t] || []);
    if (ttq.__loaded === pixelId) return; // avoid double-load for the same pixel
    ttq.methods = [
      'page', 'track', 'identify', 'instances', 'debug', 'on', 'off', 'once',
      'ready', 'alias', 'group', 'enableCookie', 'disableCookie', 'holdConsent',
      'revokeConsent', 'grantConsent',
    ];
    ttq.setAndDefer = function (a: any, b: string) {
      a[b] = function () {
        a.push([b].concat([].slice.call(arguments, 0)));
      };
    };
    for (let i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);
    ttq.instance = function (e: string) {
      const r = (ttq._i && ttq._i[e]) || [];
      for (let i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(r, ttq.methods[i]);
      return r;
    };
    ttq.load = function (e: string, n?: any) {
      const s = 'https://analytics.tiktok.com/i18n/pixel/events.js';
      ttq._i = ttq._i || {};
      ttq._i[e] = [];
      ttq._i[e]._u = s;
      ttq._t = ttq._t || {};
      ttq._t[e] = +new Date();
      ttq._o = ttq._o || {};
      ttq._o[e] = n || {};
      const o = d.createElement('script');
      o.type = 'text/javascript';
      o.async = true;
      o.src = s + '?sdkid=' + e + '&lib=' + t;
      const a = d.getElementsByTagName('script')[0];
      a.parentNode.insertBefore(o, a);
    };
    ttq.load(pixelId);
    ttq.page();
    ttq.__loaded = pixelId;
  })(window, document, 'ttq');
  /* eslint-enable */
}
