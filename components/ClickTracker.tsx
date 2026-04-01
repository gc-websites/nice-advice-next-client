'use client';

import { useEffect, useRef, useCallback } from 'react';
import { sendGTMEvent } from '@next/third-parties/google';

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

// Parse UTM, ad, and FB params from URL and persist them in sessionStorage
function getTrackingParams() {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid', 'pixel', 'event', 'pixel_mode', 'fire'];
  const tracking: Record<string, string | undefined> = {};

  keys.forEach(key => {
    const val = params.get(key);
    // For fb params, we prefix them as na_fb_ in session storage inside DynamicPixel, 
    // but here we can just pick them up from na_${key} or na_fb_${key}
    const storageKey = ['pixel', 'event', 'pixel_mode', 'fire'].includes(key) ? `na_fb_${key}` : `na_${key}`;
    const trackingKey = ['pixel', 'event', 'pixel_mode', 'fire'].includes(key) ? `fb_${key}` : key;
    
    // Quick fix: replace fb_fire with fb_fire_type to match Strapi/DynamicPixel
    const finalTrackingKey = trackingKey === 'fb_fire' ? 'fb_fire_type' : trackingKey;

    if (val) {
      sessionStorage.setItem(storageKey, val);
      tracking[finalTrackingKey] = val;
    } else {
      tracking[finalTrackingKey] = sessionStorage.getItem(storageKey) || undefined;
    }
  });

  return tracking;
}

// Send tracking event via sendBeacon (non-blocking)
function sendTrackEvent(data: Record<string, unknown>) {
  try {
    // 1. Send to Google Tag Manager
    if (data.event_type) {
      sendGTMEvent({ event: data.event_type as string, ...data });
    }

    // 2. Send to Custom Server via Beacon
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
    
    // Trigger Facebook Pixel if configured for 'click'
    if (eventType === 'cta_click' && trackingParams.fb_fire_type === 'click' && trackingParams.fb_event && trackingParams.fb_pixel) {
      if (typeof window !== 'undefined') {
        // @ts-ignore
        if (window.fbq) {
          // @ts-ignore
          window.fbq('track', trackingParams.fb_event);
        }
      }
    }

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
