'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Script from 'next/script';

export default function DynamicPixel() {
  const searchParams = useSearchParams();
  const [pixelId, setPixelId] = useState<string | null>(null);

  useEffect(() => {
    // Read from URL Parameters
    const urlPixel = searchParams.get('pixel');
    const urlEvent = searchParams.get('event');
    const urlFire = searchParams.get('fire'); // 'click' etc.
    const urlPixelMode = searchParams.get('pixel_mode');

    // Default to stored pixel id if we navigate internally without url params
    let finalPixelId = urlPixel;
    
    if (urlPixel) {
      sessionStorage.setItem('na_fb_pixel', urlPixel);
      if (urlEvent) sessionStorage.setItem('na_fb_event', urlEvent);
      if (urlFire) sessionStorage.setItem('na_fb_fire_type', urlFire);
      if (urlPixelMode) sessionStorage.setItem('na_fb_pixel_mode', urlPixelMode);
    } else {
      finalPixelId = sessionStorage.getItem('na_fb_pixel');
    }

    if (finalPixelId) {
      setPixelId(finalPixelId);
      
      // Initialize fbq if not exists
      if (typeof window !== 'undefined') {
        // @ts-ignore
        if (!window.fbq) {
          // @ts-ignore
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
        }

        // @ts-ignore
        window.fbq('init', finalPixelId);
        // Always track pageview
        // @ts-ignore
        window.fbq('track', 'PageView');
        
        // If event is set AND it's not waiting for a click right now, fire it on page load
        const currentEvent = urlEvent || sessionStorage.getItem('na_fb_event');
        const fireType = urlFire || sessionStorage.getItem('na_fb_fire_type');
        
        if (currentEvent && fireType !== 'click') {
          // @ts-ignore
          window.fbq('track', currentEvent);
        }
      }
    }
  }, [searchParams]);

  if (!pixelId) return null;

  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: 'none' }}
        src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
        alt=""
      />
    </noscript>
  );
}
