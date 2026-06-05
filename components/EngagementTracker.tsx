'use client';

import { useEffect } from 'react';
import { trackEvent } from './track';

/**
 * Tracks scroll depth + time on page and fires a single `page_exit` event when
 * the user leaves (tab hidden or page unloaded). Completes the journey path:
 * how far the user scrolled and how long they stayed before the next step.
 */
export default function EngagementTracker({
  locale,
  prelendSlug,
}: {
  locale: 'en' | 'fr' | 'es';
  prelendSlug: string;
}) {
  useEffect(() => {
    const start = Date.now();
    let maxScroll = 0;
    let sent = false;

    const onScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const pct = scrollable > 0 ? Math.min(100, Math.round((doc.scrollTop / scrollable) * 100)) : 0;
      if (pct > maxScroll) maxScroll = pct;
    };

    const sendExit = () => {
      if (sent) return;
      sent = true;
      trackEvent('page_exit', {
        locale,
        prelendSlug,
        extra: { scroll_depth: maxScroll, time_on_page: Date.now() - start },
      });
    };

    const onVisibility = () => {
      if (document.visibilityState === 'hidden') sendExit();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('visibilitychange', onVisibility);
    window.addEventListener('pagehide', sendExit);
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('pagehide', sendExit);
    };
  }, [locale, prelendSlug]);

  return null;
}
