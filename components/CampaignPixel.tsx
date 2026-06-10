'use client';

import { useEffect } from 'react';
import { getTtclid, DEFAULT_TT_PIXEL } from './ttConversion';
import { getFbclid, DEFAULT_FB_PIXEL } from './fbConversion';

/**
 * Campaign pixel — TikTok + Meta (Facebook).
 *
 * On the prelander it loads the platform pixel (+ PageView) and persists the
 * tt_* and fb_* campaign params + ttclid/fbclid in sessionStorage.
 *
 * The CONVERSION is NOT fired here. It is fired on the first filled ad view
 * (see TrackedAdSlot → fireTikTokConversionOnce / fireFacebookConversionOnce)
 * to mirror the competitor's "ad viewed" conversion instead of the CTA click.
 *
 * Campaign URL contracts (only the pixel id is required):
 *   TikTok:   ?platform=tiktok&tt_pixel=Cxxxxxxxxx&tt_event=Purchase
 *   Facebook: ?platform=facebook&fb_pixel=1234567890&fb_event=Purchase
 *             (Meta appends fbclid automatically; the funnel pixel sets _fbc/_fbp)
 *
 * NOTE: the legacy site-wide fb script in app/layout.tsx (?pixel=&event= contract)
 * skips funnel pages — CampaignPixel is the single owner of the pixel here, so
 * the conversion is only ever fired WITH an eventID (dedupable with the CAPI).
 */

declare global {
  interface Window {
    ttq?: any;
    fbq?: any;
    _fbq?: any;
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

    // ---------------- TikTok ----------------
    let pixel = get('tt_pixel', 'na_tt_pixel');
    if (!pixel && params.get('platform') === 'tiktok') {
      // TikTok ad URL without ?tt_pixel → default the funnel pixel so the conversion
      // (fired later on the first ad view) still has a pixel to report to.
      pixel = DEFAULT_TT_PIXEL;
      try {
        sessionStorage.setItem('na_tt_pixel', pixel);
      } catch {
        /* ignore */
      }
    }
    if (pixel) {
      // Persist the rest so fireTikTokConversionOnce() can build the event later.
      get('tt_event', 'na_tt_event');
      get('tt_value', 'na_tt_value');
      get('tt_currency', 'na_tt_currency');
      get('tt_content_id', 'na_tt_content_id');

      loadTikTok(pixel); // loads SDK + fires Pageview (ttq.page)
      getTtclid(); // capture & persist ttclid for the conversion + server-side event
    }

    // ---------------- Meta (Facebook) ----------------
    let fbPixel = get('fb_pixel', 'na_fb_pixel');
    if (!fbPixel && params.get('platform') === 'facebook' && DEFAULT_FB_PIXEL) {
      // Facebook ad URL without ?fb_pixel → default the funnel pixel (once issued).
      fbPixel = DEFAULT_FB_PIXEL;
      try {
        sessionStorage.setItem('na_fb_pixel', fbPixel);
      } catch {
        /* ignore */
      }
    }
    if (fbPixel) {
      // Persist the rest so fireFacebookConversionOnce() can build the event later.
      get('fb_event', 'na_fb_event');
      get('fb_value', 'na_fb_value');
      get('fb_currency', 'na_fb_currency');
      get('fb_content_id', 'na_fb_content_id');

      loadMeta(fbPixel); // loads fbevents.js + init + PageView (sets _fbp/_fbc cookies)
      getFbclid(); // capture & persist fbclid for the conversion + server-side event
    }
  }, []);

  return null;
}

// Standard Meta Pixel base code + PageView. Idempotent: the stub guards on
// window.fbq, and a repeated init for the same pixel id is a no-op warning.
function loadMeta(pixelId: string) {
  if (typeof window === 'undefined') return;
  /* eslint-disable */
  (function (f: any, b: any, e: string, v: string) {
    let n: any, t: any, s: any;
    if (f.fbq) {
      n = f.fbq;
    } else {
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = true;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    }
    if (n.__na_loaded === pixelId) return; // avoid double init+PageView for the same pixel
    f.fbq('init', pixelId);
    f.fbq('track', 'PageView');
    n.__na_loaded = pixelId;
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
  /* eslint-enable */
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
