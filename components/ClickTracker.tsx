'use client';

import { useEffect, useRef, useCallback } from 'react';

const TRACKING_API = 'https://api.nice-advice.info/track-click';

// Generate or retrieve session ID
function getSessionId(): string {
  if (typeof window === 'undefined') return '';
  let sid = sessionStorage.getItem('na_session_id');
  if (!sid) {
    sid = crypto.randomUUID();
    sessionStorage.setItem('na_session_id', sid);
  }
  return sid;
}

// Parse UTM and ad params from URL
function getTrackingParams() {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source') || undefined,
    utm_medium: params.get('utm_medium') || undefined,
    utm_campaign: params.get('utm_campaign') || undefined,
    utm_term: params.get('utm_term') || undefined,
    utm_content: params.get('utm_content') || undefined,
    gclid: params.get('gclid') || undefined,
    fbclid: params.get('fbclid') || undefined,
  };
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
      }).catch(() => {});
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
