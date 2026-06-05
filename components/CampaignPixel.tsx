'use client';

import { useEffect } from 'react';
import { getTtclid } from './ttConversion';

/**
 * Campaign pixel — TikTok.
 *
 * On the prelander it loads the TikTok pixel (+ Pageview) and persists the
 * tt_* campaign params + ttclid in sessionStorage.
 *
 * The CONVERSION is NOT fired here. It is fired on the first ad view
 * (see TrackedAdSlot → fireTikTokConversionOnce) to mirror the competitor's
 * "ad viewed" conversion instead of firing on the CTA click.
 *
 * Campaign URL contract (only tt_pixel is required):
 *   ?platform=tiktok&tt_pixel=Cxxxxxxxxx&tt_event=CompletePayment&tt_content_id=digital-marketing
 */

declare global {
  interface Window {
    ttq?: any;
    TiktokAnalyticsObject?: string;
  }
}

export default function CampaignPixel() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const params = new URLSearchParams(window.location.search);

    // Read a param from the URL, persisting it in sessionStorage so the
    // conversion (fired later on ad view) and the server can read it.
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
    if (!pixel) return; // not a TikTok campaign → nothing to do

    // Persist the rest so fireTikTokConversionOnce() can build the event later.
    get('tt_event', 'na_tt_event');
    get('tt_value', 'na_tt_value');
    get('tt_currency', 'na_tt_currency');
    get('tt_content_id', 'na_tt_content_id');

    loadTikTok(pixel); // loads SDK + fires Pageview (ttq.page)
    getTtclid(); // capture & persist ttclid for the conversion + server-side event
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
