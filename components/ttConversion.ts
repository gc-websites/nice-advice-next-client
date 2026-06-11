// Shared TikTok conversion helpers.
//
// Keeps ONE event_id and ttclid per session, shared by the browser pixel
// (CampaignPixel — fires ttq.track) and the server forwarder (ClickTracker —
// posts to /track-click). TikTok deduplicates the browser event and the server
// Events API event when both carry the same event name + event_id.

import { isRealClickId } from './clickId';

const KEY_EVENT_ID = 'na_tt_event_id';
const KEY_TTCLID = 'na_ttclid';

// Default pixel for the digital-marketing funnel. Used when the ad URL omits
// ?tt_pixel but the visit is a TikTok session, so the conversion still has a pixel.
export const DEFAULT_TT_PIXEL = 'CGUJ36RC77U0HA6062A0';

function ss(): Storage | null {
  try {
    return typeof window !== 'undefined' ? window.sessionStorage : null;
  } catch {
    return null;
  }
}

/** One event_id per session; created on first call, reused afterwards. */
export function getOrCreateTtEventId(): string {
  const store = ss();
  try {
    const existing = store?.getItem(KEY_EVENT_ID);
    if (existing) return existing;
  } catch {
    /* ignore */
  }
  const id =
    (typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID()) ||
    `tt_${Date.now()}_${Math.random().toString(36).slice(2)}`;
  try {
    store?.setItem(KEY_EVENT_ID, id);
  } catch {
    /* ignore */
  }
  return id;
}

/**
 * Capture ttclid from the URL once, persist it for the session, return it.
 * Garbage values (literal __CLICKID__ macros from previews/misconfigured ad
 * URLs) are NEVER persisted or returned — a missing ttclid is recoverable via
 * TikTok auto-append, a fake one actively breaks attribution.
 */
export function getTtclid(): string {
  const store = ss();
  try {
    if (typeof window !== 'undefined') {
      const fromUrl = new URLSearchParams(window.location.search).get('ttclid');
      if (isRealClickId(fromUrl)) {
        try {
          store?.setItem(KEY_TTCLID, fromUrl);
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
    const stored = store?.getItem(KEY_TTCLID) || '';
    if (stored && !isRealClickId(stored)) {
      // purge garbage persisted by older builds
      try {
        store?.removeItem(KEY_TTCLID);
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
 * Collect the TikTok conversion fields to send to the server on a CTA click.
 * Returns null when this is not a TikTok campaign (no pixel persisted by
 * CampaignPixel), so non-TikTok clicks stay clean.
 */
export function getTtConversion(): Record<string, string> | null {
  const store = ss();
  const get = (k: string): string => {
    try {
      return store?.getItem(k) || '';
    } catch {
      return '';
    }
  };

  let pixel = get('na_tt_pixel');
  if (!pixel && get('na_platform') === 'tiktok') {
    // TikTok session whose ad URL omitted ?tt_pixel — fall back to the funnel pixel
    // so the conversion isn't silently dropped. (CampaignPixel also defaults it.)
    pixel = DEFAULT_TT_PIXEL;
  }
  if (!pixel) return null;

  const out: Record<string, string> = {
    tt_pixel: pixel,
    tt_event: get('na_tt_event') || 'Purchase',
    tt_event_id: getOrCreateTtEventId(),
  };
  const ttclid = getTtclid();
  if (ttclid) out.ttclid = ttclid;

  const value = get('na_tt_value');
  if (value) out.tt_value = value;
  const currency = get('na_tt_currency');
  if (currency) out.tt_currency = currency;
  const contentId = get('na_tt_content_id');
  if (contentId) out.tt_content_id = contentId;

  return out;
}

/**
 * Fire the TikTok conversion ONCE per session (browser pixel via ttq.track) and
 * return the fields the server needs to mirror it via the Events API (same
 * event name + event_id → dedup). Returns null if this is not a TikTok campaign
 * or the conversion already fired this session.
 *
 * Trigger: the first ad view on the prelander (see TrackedAdSlot) — mirrors the
 * competitor's "ad viewed" conversion rather than firing on the CTA click.
 */
export function fireTikTokConversionOnce(): Record<string, string> | null {
  const conv = getTtConversion();
  if (!conv) return null;

  const store = ss();
  try {
    if (store?.getItem('na_tt_converted')) return null;
  } catch {
    /* ignore */
  }
  try {
    store?.setItem('na_tt_converted', '1');
  } catch {
    /* ignore */
  }

  try {
    const props: Record<string, unknown> = {};
    if (conv.tt_value) {
      const v = Number(conv.tt_value);
      if (!Number.isNaN(v)) props.value = v;
    }
    if (conv.tt_currency) props.currency = conv.tt_currency;
    if (conv.tt_content_id) {
      props.content_id = conv.tt_content_id;
      props.content_type = 'product';
    }
    (window as unknown as { ttq?: { track?: (...a: unknown[]) => void } }).ttq?.track?.(
      conv.tt_event,
      props,
      { event_id: conv.tt_event_id }
    );
  } catch {
    /* ignore */
  }

  return conv;
}
