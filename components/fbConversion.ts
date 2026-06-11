// Shared Meta (Facebook) conversion helpers — mirror of ttConversion.ts.
//
// Keeps ONE event_id per session, shared by the browser pixel (fbq.track with
// eventID) and the server forwarder (Conversions API with event_id). Meta
// deduplicates the browser event and the server event when both carry the same
// event name + event id + pixel.

import { isRealClickId } from './clickId';

const KEY_EVENT_ID = 'na_fb_event_id';
const KEY_CONVERTED = 'na_fb_converted';

// Default pixel for the digital-marketing funnel. Used when the ad URL omits
// ?fb_pixel but the visit is a Facebook session, so the conversion still has a pixel.
export const DEFAULT_FB_PIXEL = '1417082162390960';

function ss(): Storage | null {
  try {
    return typeof window !== 'undefined' ? window.sessionStorage : null;
  } catch {
    return null;
  }
}

function readCookie(name: string): string {
  try {
    if (typeof document === 'undefined') return '';
    const m = document.cookie.match(new RegExp('(?:^|;\\s*)' + name + '=([^;]+)'));
    return m ? decodeURIComponent(m[1]) : '';
  } catch {
    return '';
  }
}

/** One event_id per session; created on first call, reused afterwards. */
export function getOrCreateFbEventId(): string {
  const store = ss();
  try {
    const existing = store?.getItem(KEY_EVENT_ID);
    if (existing) return existing;
  } catch {
    /* ignore */
  }
  const id =
    (typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID()) ||
    `fb_${Date.now()}_${Math.random().toString(36).slice(2)}`;
  try {
    store?.setItem(KEY_EVENT_ID, id);
  } catch {
    /* ignore */
  }
  return id;
}

/**
 * Capture fbclid from the URL once, persist it for the session, return it.
 * Garbage values (literal {{macros}} / "fbclid" echoes from FB scanners) are
 * never persisted or returned — a fake fbclid would poison the server-built
 * fbc and tank match quality.
 */
export function getFbclid(): string {
  const store = ss();
  try {
    if (typeof window !== 'undefined') {
      const fromUrl = new URLSearchParams(window.location.search).get('fbclid');
      if (isRealClickId(fromUrl)) {
        try {
          store?.setItem('na_fbclid', fromUrl);
        } catch {
          /* ignore */
        }
        return fromUrl;
      }
    }
  } catch {
    /* ignore */
  }
  try {
    const stored = store?.getItem('na_fbclid') || '';
    if (stored && !isRealClickId(stored)) {
      // purge garbage persisted by older builds
      try {
        store?.removeItem('na_fbclid');
      } catch {
        /* ignore */
      }
      return '';
    }
    return stored;
  } catch {
    return '';
  }
}

/**
 * Collect the Meta conversion fields to send to the server. Returns null when
 * this is not a Facebook campaign (no pixel persisted and platform!=facebook),
 * so TikTok/organic sessions stay clean.
 *
 * fbc/fbp come from the pixel's _fbc/_fbp cookies (best match quality); when the
 * _fbc cookie is missing the server rebuilds fbc from the raw fbclid.
 */
export function getFbConversion(): Record<string, string> | null {
  const store = ss();
  const get = (k: string): string => {
    try {
      return store?.getItem(k) || '';
    } catch {
      return '';
    }
  };

  let pixel = get('na_fb_pixel');
  if (!pixel && get('na_platform') === 'facebook' && DEFAULT_FB_PIXEL) {
    // Facebook session whose ad URL omitted ?fb_pixel — fall back to the funnel
    // pixel so the conversion isn't silently dropped. (CampaignPixel also defaults it.)
    pixel = DEFAULT_FB_PIXEL;
  }
  if (!pixel) return null;

  const out: Record<string, string> = {
    fb_pixel: pixel,
    fb_event: get('na_fb_event') || 'Purchase',
    fb_event_id: getOrCreateFbEventId(),
  };
  const fbclid = getFbclid();
  if (fbclid) out.fbclid = fbclid;
  const fbc = readCookie('_fbc');
  if (fbc) out.fbc = fbc;
  const fbp = readCookie('_fbp');
  if (fbp) out.fbp = fbp;

  const value = get('na_fb_value');
  if (value) out.fb_value = value;
  const currency = get('na_fb_currency');
  if (currency) out.fb_currency = currency;
  const contentId = get('na_fb_content_id');
  if (contentId) out.fb_content_id = contentId;

  return out;
}

/**
 * Fire the Meta conversion ONCE per session (browser pixel via fbq.track with
 * eventID) and return the fields the server needs to mirror it via the
 * Conversions API (same event name + event_id → dedup). Returns null if this is
 * not a Facebook campaign or the conversion already fired this session.
 *
 * Trigger: the first filled ad view on the prelander (see TrackedAdSlot) — the
 * same trigger as the TikTok conversion.
 */
export function fireFacebookConversionOnce(): Record<string, string> | null {
  const conv = getFbConversion();
  if (!conv) return null;

  const store = ss();
  try {
    if (store?.getItem(KEY_CONVERTED)) return null;
  } catch {
    /* ignore */
  }
  try {
    store?.setItem(KEY_CONVERTED, '1');
  } catch {
    /* ignore */
  }

  try {
    const props: Record<string, unknown> = {};
    if (conv.fb_value) {
      const v = Number(conv.fb_value);
      if (!Number.isNaN(v)) {
        props.value = v;
        props.currency = conv.fb_currency || 'USD';
      }
    }
    if (conv.fb_content_id) {
      props.content_ids = [conv.fb_content_id];
      props.content_type = 'product';
    }
    (window as unknown as { fbq?: (...a: unknown[]) => void }).fbq?.(
      'track',
      conv.fb_event,
      props,
      { eventID: conv.fb_event_id }
    );
  } catch {
    /* ignore */
  }

  return conv;
}
