'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie';

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const hasConsented = Cookies.get('cookie_consent');
    if (!hasConsented) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set('cookie_consent', 'true', { expires: 365 });
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#000000] p-4 shadow-lg text-white">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm max-w-7xl">
        <div className="flex-1">
          <span className="opacity-90">We use cookies to improve website performance. </span>
          <Link href="/privacy" className="underline hover:text-gray-300 ml-1">
            Details
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleAccept}
            className="whitespace-nowrap rounded bg-[#f1d600] px-6 py-2 font-medium text-black transition-colors hover:bg-yellow-500"
          >
            Allow
          </button>
        </div>
      </div>
    </div>
  );
}
