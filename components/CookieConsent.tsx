'use client';
import { useEffect } from 'react';

export default function CookieConsent() {
  useEffect(() => {
    // @ts-ignore
    if (window.cookieconsent) {
      // @ts-ignore
      window.cookieconsent.initialise({
        palette: {
          popup: { background: '#000' },
          button: { background: '#f1d600', text: '#000' },
        },
        theme: 'classic',
        type: 'opt-in',
        revokable: false,
        content: {
          message: 'We use cookies to improve website performance.',
          allow: 'Allow',
          deny: 'Deny',
          link: 'Details',
          href: '/privacy',
        },
      });
    }
  }, []);

  return null;
}
