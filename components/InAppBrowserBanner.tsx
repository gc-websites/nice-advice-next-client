'use client';

import { useState, useEffect } from 'react';

const INAPP_PATTERNS = [
  { regex: /Telegram/i, name: 'Telegram' },
  { regex: /FBAN|FBAV|FB_IAB|MessengerForiOS/i, name: 'Facebook' },
  { regex: /Instagram/i, name: 'Instagram' },
  { regex: /TikTok|musical_ly/i, name: 'TikTok' },
  { regex: /Twitter/i, name: 'X (Twitter)' },
  { regex: /LinkedIn/i, name: 'LinkedIn' },
  { regex: /Snapchat/i, name: 'Snapchat' },
];

type Platform = 'ios' | 'android' | 'other';

export default function InAppBrowserBanner() {
  const [app, setApp] = useState<string | null>(null);
  const [platform, setPlatform] = useState<Platform>('other');
  const [visible, setVisible] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem('iab_dismissed')) return;
    } catch (_) {}

    const ua = navigator.userAgent;
    let detectedApp: string | null = null;

    for (const { regex, name } of INAPP_PATTERNS) {
      if (regex.test(ua)) { detectedApp = name; break; }
    }

    // Generic WebView detection
    if (!detectedApp) {
      const isAndroidWV = /Android/.test(ua) && /wv/.test(ua);
      const isIosWV = /iPhone|iPad|iPod/.test(ua) && /AppleWebKit/.test(ua) && !/Safari/.test(ua);
      if (isAndroidWV || isIosWV) detectedApp = 'App';
    }

    if (!detectedApp) return;

    if (/Android/i.test(ua)) setPlatform('android');
    else if (/iPhone|iPad|iPod/i.test(ua)) setPlatform('ios');

    setApp(detectedApp);
    // Slight delay so banner slides in after first paint
    const t = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  const dismiss = () => {
    setVisible(false);
    setTimeout(() => setGone(true), 350);
    try { sessionStorage.setItem('iab_dismissed', '1'); } catch (_) {}
  };

  const openInBrowser = () => {
    const url = window.location.href;
    if (platform === 'android') {
      // Try Chrome intent URL on Android
      const domain = url.replace(/^https?:\/\//, '');
      window.location.href = `intent://${domain}#Intent;scheme=https;package=com.android.chrome;S.browser_fallback_url=${encodeURIComponent(url)};end`;
    } else {
      // iOS: can't force system browser programmatically — try _blank popup
      const w = window.open(url, '_blank', 'noopener,noreferrer');
      if (!w) {
        // Fallback: copy to clipboard
        navigator.clipboard?.writeText(url).then(() => {
          alert('Link copied! Paste it in Safari or Chrome to open.');
        }).catch(() => {});
      }
    }
  };

  if (gone || !app) return null;

  return (
    <div
      role="banner"
      aria-label={`Open page in system browser instead of ${app}`}
      className={`
        w-full z-[100]
        transition-all duration-350 ease-out overflow-hidden
        ${visible ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}
      `}
    >
      <div className="bg-[#0f172a] text-white px-4 py-3 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">

        {/* Icon + text */}
        <div className="flex items-start gap-3 flex-1 min-w-0">
          <div className="flex-shrink-0 mt-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#4BC8BE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </div>
          <div className="min-w-0">
            <p className="text-[13px] sm:text-[14px] font-semibold leading-snug text-white">
              You&apos;re viewing this in <span className="text-[#4BC8BE]">{app}</span>
            </p>
            {platform === 'ios' ? (
              <p className="text-[12px] text-[#94a3b8] leading-snug mt-0.5">
                Tap <span className="font-bold text-white">···</span> at the bottom → <span className="font-bold text-white">Open in Safari</span> for best experience.
              </p>
            ) : (
              <p className="text-[12px] text-[#94a3b8] leading-snug mt-0.5">
                Open in your browser for the full experience.
              </p>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 ml-8 sm:ml-0 flex-shrink-0">
          {platform !== 'ios' && (
            <button
              onClick={openInBrowser}
              className="flex items-center gap-1.5 bg-[#4BC8BE] hover:bg-[#39b5ab] text-white text-[12px] sm:text-[13px] font-bold px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
            >
              Open in Browser
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </button>
          )}
          <button
            onClick={dismiss}
            aria-label="Dismiss banner"
            className="p-1.5 rounded-md text-[#64748b] hover:text-white hover:bg-white/10 transition-colors flex-shrink-0"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
