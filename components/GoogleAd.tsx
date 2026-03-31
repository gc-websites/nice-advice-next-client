"use client";

import React, { useEffect } from 'react';

interface GoogleAdProps {
  adSlot: string;
  className?: string;
  style?: React.CSSProperties;
  adFormat?: string;
  fullWidthResponsive?: string;
}

const GoogleAd: React.FC<GoogleAdProps> = ({
  adSlot,
  className = '',
  style = { display: 'block' },
  adFormat,
  fullWidthResponsive,
}) => {
  const adRef = React.useRef<HTMLModElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        // Prevent "No slot size for availableWidth=0" error by ensuring container is visible
        if (adRef.current && adRef.current.clientWidth > 0) {
          // @ts-ignore
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      } catch (e) {
        console.error('AdSense error:', e);
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [adSlot]);

  return (
    <div key={`container-${adSlot}`} className={`ad-container ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ ...style, width: '100%', minWidth: '250px', maxWidth: '100%' }}
        data-ad-client="ca-pub-1088654265590051"
        data-ad-slot={adSlot}
        {...(adFormat ? { 'data-ad-format': adFormat } : {})}
        {...(fullWidthResponsive
          ? { 'data-full-width-responsive': fullWidthResponsive }
          : {})}
      />
    </div>
  );
};

export default GoogleAd;
