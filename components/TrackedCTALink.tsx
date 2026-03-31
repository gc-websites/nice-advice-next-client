'use client';

import { useState, useEffect } from 'react';
import { useTrackClick } from './ClickTracker';

interface TrackedCTALinkProps {
  href: string;
  locale: 'en' | 'fr' | 'es';
  prelendSlug: string;
  eventType?: 'cta_click' | 'outbound_click';
  className?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

export default function TrackedCTALink({
  href,
  locale,
  prelendSlug,
  eventType = 'cta_click',
  className,
  target,
  rel,
  children,
}: TrackedCTALinkProps) {
  const trackClick = useTrackClick(locale, prelendSlug);
  const [fullHref, setFullHref] = useState(href);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.search) {
      const searchParams = window.location.search;
      const separator = href.includes('?') ? '&' : '?';
      setFullHref(`${href}${separator}${searchParams.substring(1)}`);
    }
  }, [href]);

  const handleClick = () => {
    trackClick(fullHref, eventType);
  };

  return (
    <a
      href={fullHref}
      className={className}
      target={target}
      rel={rel}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
