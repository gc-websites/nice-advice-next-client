'use client';

import { useState, useEffect } from 'react';
import TrackedCTALink from '../../../../components/TrackedCTALink';

const TOC_ITEMS = [
  { id: 'section-1', label: 'How Payment Links Work' },
  { id: 'section-2', label: 'Key Benefits of Using Payment Links' },
  { id: 'section-3', label: 'Pricing and Fees — What to Expect' },
  { id: 'section-4', label: 'Who Should Use Payment Links' },
  { id: 'section-5', label: 'Customisation and Conversion Tips' },
  { id: 'section-6', label: 'Pros and Cons at a Glance' },
  { id: 'section-7', label: 'Security and Eligibility' },
  { id: 'section-8', label: "Why We Recommend Revolut's Payment Links" },
  { id: 'section-9', label: 'Integrations and Automation' },
  { id: 'section-10', label: 'How to Start Using Payment Links' },
  { id: 'section-faq', label: 'FAQ' },
];

export default function RevolutSidebar() {
  const [activeId, setActiveId] = useState('');
  const [stickyVisible, setStickyVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setStickyVisible(window.scrollY > 400);
      const sections = TOC_ITEMS.map(({ id }) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
      let current = '';
      for (const section of sections) {
        if (window.scrollY >= section.offsetTop - 120) current = section.id;
      }
      setActiveId(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      {/* ── Left TOC Sidebar (xl+) ── */}
      <aside className="hidden xl:block w-[210px] flex-shrink-0">
        <div className="sticky top-6">
          <div className="bg-white border border-[#eaeaea] rounded-xl shadow-sm overflow-hidden">
            <div className="px-5 py-3 border-b border-[#eaeaea]">
              <span className="text-[#1f2937] font-bold text-[12px] uppercase tracking-widest">Contents</span>
            </div>
            <nav className="px-3 py-3">
              <ol className="space-y-0.5">
                {TOC_ITEMS.map((item, i) => {
                  const isActive = activeId === item.id;
                  const num = i < 10 ? String(i + 1) : 'F';
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollTo(item.id)}
                        className={`
                          w-full text-left flex items-start gap-2.5 py-2 px-2 rounded-md
                          transition-colors duration-150 group
                          ${isActive ? 'bg-[#f0fdf4]' : 'hover:bg-gray-50'}
                        `}
                      >
                        <span className={`
                          flex-shrink-0 w-[22px] h-[22px] rounded-full flex items-center justify-center
                          text-[10px] font-bold leading-none mt-[1px]
                          transition-colors duration-150
                          ${isActive
                            ? 'bg-[#269752] text-white'
                            : 'bg-[#e5e7eb] text-[#6b7280] group-hover:bg-[#d1fae5] group-hover:text-[#269752]'}
                        `}>
                          {num}
                        </span>
                        <span className={`
                          text-[12px] leading-snug
                          transition-colors duration-150
                          ${isActive ? 'text-[#269752] font-semibold' : 'text-[#4b5563] group-hover:text-[#269752]'}
                        `}>
                          {item.label}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ol>
            </nav>
          </div>
        </div>
      </aside>

      {/* ── Sticky Bottom Bar ── */}
      <div className={`
        fixed bottom-0 left-0 right-0 z-50 bg-white border-t-[3px] border-[#269752]
        shadow-[0_-6px_32px_rgba(0,0,0,0.15)]
        transition-all duration-500 ease-in-out
        ${stickyVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'}
      `}>
        {/* Mobile */}
        <div className="flex flex-col sm:hidden px-4 py-3 gap-3">
          <div className="flex flex-col">
            <span className="text-[11px] text-[#6b7280] uppercase tracking-wide leading-none mb-1">Visit the official site:</span>
            <span className="text-[16px] font-bold text-[#1f2937] leading-tight">Revolut&apos;s Payment Links</span>
          </div>
          <TrackedCTALink
            href="https://www.revolut.com/business/payment-links/"
            locale="en" prelendSlug="revolut-payment-link" eventType="outbound_click"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#269752] hover:bg-[#1f7e44] text-white font-bold text-[16px] py-[14px] px-6 rounded-xl w-full uppercase tracking-wider transition-all duration-300 active:scale-[0.97] shadow-md"
          >
            See More on the Official Site
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
              <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd" />
            </svg>
          </TrackedCTALink>
        </div>
        {/* Desktop */}
        <div className="hidden sm:flex max-w-[1100px] mx-auto px-8 py-4 items-center justify-between gap-6">
          <div className="flex flex-col min-w-0">
            <span className="text-[13px] text-[#6b7280] uppercase tracking-wide leading-none mb-1.5">Visit the official site:</span>
            <span className="text-[20px] font-bold text-[#1f2937] leading-tight">Revolut&apos;s Payment Links</span>
          </div>
          <TrackedCTALink
            href="https://www.revolut.com/business/payment-links/"
            locale="en" prelendSlug="revolut-payment-link" eventType="outbound_click"
            target="_blank" rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-3 bg-[#269752] hover:bg-[#1f7e44] text-white font-bold text-[18px] py-[18px] px-10 rounded-xl uppercase tracking-wider transition-all duration-300 ease-out hover:scale-[1.04] active:scale-[0.97] shadow-lg hover:shadow-xl"
          >
            See More on the Official Site
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 flex-shrink-0">
              <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd" />
            </svg>
          </TrackedCTALink>
        </div>
      </div>
    </>
  );
}
