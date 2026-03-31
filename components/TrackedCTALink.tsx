'use client';

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

  const handleClick = () => {
    trackClick(href, eventType);
  };

  return (
    <a
      href={href}
      className={className}
      target={target}
      rel={rel}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
