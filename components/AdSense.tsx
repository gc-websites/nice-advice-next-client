'use client';

import React, { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

interface AdSenseProps {
  slot: string;
  className?: string;
  format?: string;
  fullWidthResponsive?: boolean;
  style?: React.CSSProperties;
}

export default function AdSense({
  slot,
  className = '',
  format = 'auto',
  fullWidthResponsive = true,
  style,
}: AdSenseProps) {
  const pathname = usePathname();
  const insRef = useRef<HTMLModElement | null>(null);
  const lastPath = useRef<string>('');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const ins = insRef.current;
    if (!ins) return;
    if (lastPath.current === `${pathname}-${slot}`) return;
    if (ins.getAttribute('data-adsbygoogle-status')) {
      lastPath.current = `${pathname}-${slot}`;
      return;
    }
    try {
      const w = window as unknown as { adsbygoogle?: unknown[] };
      w.adsbygoogle = w.adsbygoogle || [];
      (w.adsbygoogle as unknown[]).push({});
      lastPath.current = `${pathname}-${slot}`;
    } catch (err) {
      console.error('AdSense push error:', err);
    }
  }, [pathname, slot]);

  return (
    <div className={className}>
      <ins
        key={`${pathname}-${slot}`}
        ref={insRef}
        className="adsbygoogle"
        style={{ display: 'block', ...style }}
        data-ad-client="ca-pub-1088654265590051"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={fullWidthResponsive ? 'true' : 'false'}
      />
    </div>
  );
}
