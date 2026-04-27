'use client';

import React, { useEffect } from 'react';

interface AdSenseProps {
  slot: string;
  className?: string;
  format?: string;
}

export default function AdSense({ slot, className = '', format = 'auto' }: AdSenseProps) {
  useEffect(() => {
    try {
      const adsbygoogle = (window as any).adsbygoogle || [];
      adsbygoogle.push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-1088654265590051"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}
