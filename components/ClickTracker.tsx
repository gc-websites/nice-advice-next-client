'use client';

import { useEffect, useRef, useCallback } from 'react';
import { trackEvent, getTrackingParams, type TrackEventType } from './track';

interface ClickTrackerProps {
  locale: 'en' | 'fr' | 'es';
  prelendSlug: string;
  eventType?: TrackEventType;
}

/**
 * Fires the page-view step of the funnel (default `prelend_view`) once on mount,
 * persisting UTM/attribution params for the rest of the journey.
 */
export default function ClickTracker({ locale, prelendSlug, eventType = 'prelend_view' }: ClickTrackerProps) {
  const hasFired = useRef(false);

  useEffect(() => {
    if (hasFired.current) return;
    hasFired.current = true;
    trackEvent(eventType, { locale, prelendSlug });
  }, [locale, prelendSlug, eventType]);

  return null;
}

/**
 * Hook for tracking CTA / outbound clicks from any component.
 * On a TikTok-campaign `cta_click` the payload also carries the TikTok
 * conversion fields (tt_event_id/ttclid/…), which the server forwards to the
 * Events API. The Facebook click event is kept for FB campaigns.
 */
export function useTrackClick(locale: 'en' | 'fr' | 'es', prelendSlug: string) {
  return useCallback(
    (destinationUrl: string, eventType: 'cta_click' | 'outbound_click' = 'cta_click') => {
      const tp = getTrackingParams();

      // Facebook pixel click event — only for FB campaigns configured to fire on click.
      if (eventType === 'cta_click' && tp.fb_fire_type === 'click' && tp.fb_event && tp.fb_pixel) {
        if (typeof window !== 'undefined') {
          // @ts-ignore — fbq is injected by the FB pixel snippet in layout.tsx
          if (window.fbq) window.fbq('track', tp.fb_event);
        }
      }

      trackEvent(eventType, { locale, prelendSlug, destinationUrl });
    },
    [locale, prelendSlug]
  );
}
