'use client';

import { useState, useEffect } from 'react';
import TrackedCTALink from '../../components/TrackedCTALink';

export default function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`
        fixed bottom-0 left-0 right-0 z-50 bg-white border-t-[3px] border-[#269752]
        shadow-[0_-6px_32px_rgba(0,0,0,0.15)]
        transition-all duration-500 ease-in-out
        ${visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'}
      `}
    >
      {/* Mobile layout: stacked */}
      <div className="flex flex-col sm:hidden px-4 py-3 gap-3">
        <div className="flex flex-col">
          <span className="text-[11px] text-[#6b7280] uppercase tracking-wide leading-none mb-1">
            Read the full article:
          </span>
          <span className="text-[16px] font-bold text-[#1f2937] leading-tight">
            Revolut&apos;s Payment Links
          </span>
        </div>
        <TrackedCTALink
          href="/o/en/revolut-payment-link"
          locale="en"
          prelendSlug="revolut-payment-link"
          eventType="outbound_click"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center justify-center gap-2
            bg-[#269752] hover:bg-[#1f7e44]
            text-white font-bold text-[16px]
            py-[14px] px-6 rounded-xl w-full
            uppercase tracking-wider
            transition-all duration-300 ease-out
            active:scale-[0.97]
            shadow-md
          "
        >
          See More Details
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd" />
          </svg>
        </TrackedCTALink>
      </div>

      {/* Desktop layout: horizontal */}
      <div className="hidden sm:flex max-w-[900px] mx-auto px-6 sm:px-10 py-5 items-center justify-between gap-6">
        <div className="flex flex-col min-w-0">
          <span className="text-[13px] text-[#6b7280] uppercase tracking-wide leading-none mb-1.5">
            Read the full article:
          </span>
          <span className="text-[19px] sm:text-[21px] font-bold text-[#1f2937] leading-tight truncate">
            Revolut&apos;s Payment Links
          </span>
        </div>
        <TrackedCTALink
          href="/o/en/revolut-payment-link"
          locale="en"
          prelendSlug="revolut-payment-link"
          eventType="outbound_click"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex-shrink-0 flex items-center gap-3
            bg-[#269752] hover:bg-[#1f7e44]
            text-white font-bold text-[17px] sm:text-[19px]
            py-[18px] px-8 sm:px-12 rounded-xl
            uppercase tracking-wider
            transition-all duration-300 ease-out
            hover:scale-[1.04] active:scale-[0.97]
            shadow-lg hover:shadow-xl
          "
        >
          See More Details
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd" />
          </svg>
        </TrackedCTALink>
      </div>
    </div>
  );
}
