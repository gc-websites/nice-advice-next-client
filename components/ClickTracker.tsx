'use client';

import { useEffect, useRef, useCallback } from 'react';

const TRACKING_API = 'https://api.nice-advice.info/track-click';

// Generate or retrieve session ID
function getSessionId(): string {
  if (typeof window === 'undefined') return '';
  try {
    let sid = sessionStorage.getItem('na_session_id');
    if (!sid) {
      // Fallback for random ID if crypto.randomUUID is not available
      sid = (typeof crypto !== 'undefined' && crypto.randomUUID) 
        ? crypto.randomUUID() 
        : Math.random().toString(36).substring(2, 15);
      sessionStorage.setItem('na_session_id', sid);
    }
    return sid;
  } catch (e) {
    return 'fallback-sid-' + Date.now();
  }
}

// Parse UTM and ad params from URL and persist them in sessionStorage
function getTrackingParams() {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'];
  const tracking: Record<string, string | undefined> = {};

  keys.forEach(key => {
    const val = params.get(key);
    if (val) {
      sessionStorage.setItem(`na_${key}`, val);
      tracking[key] = val;
    } else {
      tracking[key] = sessionStorage.getItem(`na_${key}`) || undefined;
    }
  });

  return tracking;
}

// Send tracking event via sendBeacon (non-blocking)
function sendTrackEvent(data: Record<string, unknown>) {
  try {
    const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
    if (navigator.sendBeacon) {
      navigator.sendBeacon(TRACKING_API, blob);
    } else {
      fetch(TRACKING_API, {
        method: 'POST',
        body: blob,
        keepalive: true,
      }).catch(() => { });
    }
  } catch {
    // Silently fail — never break UX
  }
}

interface ClickTrackerProps {
  locale: 'en' | 'fr' | 'es';
  prelendSlug: string;
  eventType?: 'prelend_view' | 'cta_click' | 'outbound_click';
}

export default function ClickTracker({ locale, prelendSlug, eventType = 'prelend_view' }: ClickTrackerProps) {
  const hasFired = useRef(false);

  useEffect(() => {
    if (hasFired.current) return;
    hasFired.current = true;

    const trackingParams = getTrackingParams();

    sendTrackEvent({
      session_id: getSessionId(),
      event_type: eventType,
      prelend_slug: prelendSlug,
      locale,
      source_url: window.location.pathname,
      referrer: document.referrer || undefined,
      screen_width: window.screen.width,
      screen_height: window.screen.height,
      clicked_at: new Date().toISOString(),
      ...trackingParams,
    });
  }, [locale, prelendSlug, eventType]);

  return null;
}

// Hook for tracking CTA clicks from any component
export function useTrackClick(locale: 'en' | 'fr' | 'es', prelendSlug: string) {
  return useCallback((destinationUrl: string, eventType: 'cta_click' | 'outbound_click' = 'cta_click') => {
    const trackingParams = getTrackingParams();
    sendTrackEvent({
      session_id: getSessionId(),
      event_type: eventType,
      prelend_slug: prelendSlug,
      locale,
      source_url: window.location.pathname,
      destination_url: destinationUrl,
      referrer: document.referrer || undefined,
      screen_width: window.screen.width,
      screen_height: window.screen.height,
      clicked_at: new Date().toISOString(),
      ...trackingParams,
    });
  }, [locale, prelendSlug]);
}
