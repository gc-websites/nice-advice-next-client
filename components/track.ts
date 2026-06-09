'use client';

// Single client-side tracking core for the funnel.
//
// Every funnel step (page open, captcha, ad view, CTA, outbound, page exit) is
// sent through trackEvent() to the server (/track-click on api.nice-advice.info)
// and to GTM. The server enriches with IP/geo/device, forwards the TikTok
// conversion (Events API), and persists the row in Strapi (click-event) so the
// full user path can be reconstructed by session_id + sequence/ms_since_start.

import { sendGTMEvent } from '@next/third-parties/google';
import { getTtclid } from './ttConversion';

const TRACKING_API = 'https://api.nice-advice.info/track-click';

export type TrackEventType =
  | 'prelend_view'
  | 'captcha_shown'
  | 'captcha_passed'
  | 'ad_view'
  | 'cta_click'
  | 'outbound_click'
  | 'page_exit';

export interface TrackOpts {
  locale: 'en' | 'fr' | 'es';
  prelendSlug: string;
  destinationUrl?: string;
  /**
   * Precise funnel step (source of truth), e.g. 'captcha2_shown', 'prelander_view',
   * 'offer_view'. event_type stays a coarse/legacy bucket; funnel_step disambiguates
   * the two captchas and the two landers. The server backfills it when omitted.
   */
  funnelStep?: string;
  meta?: Record<string, unknown>;
  /** extra top-level fields (e.g. scroll_depth, time_on_page) */
  extra?: Record<string, unknown>;
}

function ss(): Storage | null {
  try {
    return typeof window !== 'undefined' ? window.sessionStorage : null;
  } catch {
    return null;
  }
}

// Stable per-session id.
export function getSessionId(): string {
  const store = ss();
  try {
    // Adopt the cross-domain session id forwarded from the hairstyles captcha (na_sid),
    // so the journey across both domains shares one session_id.
    const fromUrl =
      typeof window !== 'undefined'
        ? new URLSearchParams(window.location.search).get('na_sid')
        : null;
    if (fromUrl) {
      try {
        store?.setItem('na_session_id', fromUrl);
      } catch {
        /* ignore */
      }
      return fromUrl;
    }
    let sid = store?.getItem('na_session_id') || '';
    if (!sid) {
      sid =
        (typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID()) ||
        Math.random().toString(36).substring(2, 15);
      store?.setItem('na_session_id', sid);
    }
    return sid;
  } catch {
    return 'fallback-sid';
  }
}

// Monotonic per-session step counter — gives the path its order.
function nextSequence(): number {
  const store = ss();
  try {
    const n = parseInt(store?.getItem('na_seq') || '0', 10) + 1;
    store?.setItem('na_seq', String(n));
    return n;
  } catch {
    return 0;
  }
}

// Milliseconds since the first tracked event of the session — the timeline.
function msSinceStart(): number {
  const store = ss();
  try {
    let start = parseInt(store?.getItem('na_session_start') || '0', 10);
    if (!start) {
      // Continue the timeline started on the hairstyles captcha (na_t0) if present.
      const t0 =
        typeof window !== 'undefined'
          ? new URLSearchParams(window.location.search).get('na_t0')
          : null;
      start = (t0 && parseInt(t0, 10)) || Date.now();
      store?.setItem('na_session_start', String(start));
    }
    return Date.now() - start;
  } catch {
    return 0;
  }
}

// First URL the user landed on (persisted for the whole session).
function getLandingUrl(): string {
  const store = ss();
  try {
    let landing = store?.getItem('na_landing') || '';
    if (!landing && typeof window !== 'undefined') {
      landing = window.location.href;
      store?.setItem('na_landing', landing);
    }
    return landing;
  } catch {
    return typeof window !== 'undefined' ? window.location.href : '';
  }
}

// UTM / platform / ad-click / FB-pixel params — captured from the URL and
// persisted so they survive client navigation across the funnel.
export function getTrackingParams(): Record<string, string | undefined> {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  const keys = [
    'utm_source', 'utm_medium', 'utm_campaign', 'utm_campaign_name', 'utm_term', 'utm_content',
    'platform', 'gclid', 'fbclid', 'pixel', 'event', 'pixel_mode', 'fire',
  ];
  const tracking: Record<string, string | undefined> = {};

  keys.forEach((key) => {
    const isFb = ['pixel', 'event', 'pixel_mode', 'fire'].includes(key);
    const storageKey = isFb ? `na_fb_${key}` : `na_${key}`;
    let trackingKey = isFb ? `fb_${key}` : key;
    if (trackingKey === 'fb_fire') trackingKey = 'fb_fire_type';

    const val = params.get(key);
    try {
      if (val) {
        sessionStorage.setItem(storageKey, val);
        tracking[trackingKey] = val;
      } else {
        tracking[trackingKey] = sessionStorage.getItem(storageKey) || undefined;
      }
    } catch {
      if (val) tracking[trackingKey] = val;
    }
  });

  return tracking;
}

function sendPayload(data: Record<string, unknown>) {
  // Send the data beacon FIRST so it isn't blocked by GTM on the unload path (page_exit).
  try {
    const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
    if (typeof navigator !== 'undefined' && navigator.sendBeacon) {
      navigator.sendBeacon(TRACKING_API, blob);
    } else {
      fetch(TRACKING_API, { method: 'POST', body: blob, keepalive: true }).catch(() => {});
    }
  } catch {
    /* never break UX */
  }
  try {
    if (data.event_type) {
      sendGTMEvent({ event: data.event_type as string, ...data });
    }
  } catch {
    /* ignore GTM errors */
  }
}

/** Record one funnel step. */
export function trackEvent(eventType: TrackEventType, opts: TrackOpts) {
  if (typeof window === 'undefined') return;

  const data: Record<string, unknown> = {
    session_id: getSessionId(),
    event_type: eventType,
    funnel_step: opts.funnelStep,
    prelend_slug: opts.prelendSlug,
    locale: opts.locale,
    // ui_locale = the funnel UI language. Strapi strips the reserved `locale` key,
    // so the value lands here; `locale` is kept only for backward compatibility.
    ui_locale: opts.locale,
    source_url: window.location.pathname,
    page_url: window.location.href,
    landing_url: getLandingUrl(),
    destination_url: opts.destinationUrl,
    referrer: document.referrer || undefined,
    screen_width: window.screen.width,
    screen_height: window.screen.height,
    sequence: nextSequence(),
    ms_since_start: msSinceStart(),
    clicked_at: new Date().toISOString(),
    ...getTrackingParams(),
    // ttclid rides EVERY event (getTrackingParams omits it). TikTok appends it to the
    // landing URL; without this it's discarded and attribution breaks. NOTE: do NOT add
    // tt_event_id here — the server forwards a conversion whenever tt_event_id is present,
    // so it must ride ONLY the conversion event (see ttConversion.fireTikTokConversionOnce).
    ttclid: getTtclid() || undefined,
    ...(opts.extra || {}),
  };
  if (opts.meta) data.meta = opts.meta;

  sendPayload(data);
}
