import Image from 'next/image';
import { Metadata } from 'next';
import GoogleAd from '../../components/GoogleAd';
import ClickTracker from '../../components/ClickTracker';
import TrackedCTALink from '../../components/TrackedCTALink';
import StickyBar from './StickyBar';
import InAppBrowserBanner from '../../components/InAppBrowserBanner';

export const metadata: Metadata = {
  title: "Revolut's Payment Links: The Full Guide",
  description:
    'Revolut Payment Links let you create sharable payment links to accept payments fast — no website or coding required. Accept 35+ currencies with secure, rapid settlement.',
  alternates: {
    canonical: 'https://nice-advice.info/revolut-payment-link',
  },
};

export default function RevolutPaymentLinkPage() {
  return (
    <div className="bg-[#fcfcfc] min-h-screen py-8 sm:py-12">
      {/* In-App Browser Banner */}
      <InAppBrowserBanner />
      <main className="w-full max-w-[830px] mx-auto bg-white rounded-xl shadow-sm overflow-hidden text-gray-800 font-sans p-6 sm:p-10 border border-[#eaeaea]">
        <article>
          <ClickTracker locale="en" prelendSlug="revolut-payment-link" />

          {/* Header */}
          <header className="mb-6">
            <h1 className="text-[32px] sm:text-[38px] font-bold text-[#1f2937] leading-tight mb-3 tracking-tight">
              Revolut&apos;s Payment Links: The Full Guide
            </h1>
            <div className="flex flex-wrap items-center text-[#6b7280] text-[15px] gap-2">
              <span>16/04/2026</span>
              <span className="text-gray-400">•</span>
              <span>Editorial Team Nice Advice</span>
            </div>
          </header>

          {/* Ad slot */}
          <div className="w-full flex flex-col items-center group has-[ins[data-ad-status='unfilled']]:hidden has-[ins[style*='display: none']]:hidden">
            <span className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider mb-2 text-center hidden group-has-[ins:not(:empty)]:block">
              Advertisement
            </span>
            <GoogleAd adSlot="6679416038" adFormat="auto" fullWidthResponsive="true" className="w-full mb-8 text-center" />
          </div>

          {/* Hero image */}
          <figure className="mb-8">
            <Image
              src="/assets/img/revol.png"
              alt="Revolut Payment Links — Full Guide"
              width={800}
              height={450}
              className="w-full h-auto rounded-xl object-cover"
              priority
            />
          </figure>

          {/* Intro paragraph */}
          <p className="text-[17px] text-[#4b5563] mb-8 leading-relaxed max-w-3xl">
            Revolut&apos;s Payment Links lets you create sharable payment links to accept payments fast, with no website or coding required,
            across 35+ currencies and multiple methods, with secure, rapid settlement.
          </p>

          {/* 5 highlight features */}
          <div className="space-y-4 mb-8 text-[16px] text-[#4b5563] leading-relaxed">
            <HighlightItem
              title="Fast setup"
              description="You can create and send links in seconds, making Payment Links ideal for one-off invoices, quotes, and quick sales."
            />
            <HighlightItem
              title="Low friction for customers"
              description="Customers pay on a mobile-friendly secure page with multiple payment options, reducing abandoned transactions."
            />
            <HighlightItem
              title="Multi-currency support"
              description="Accept payments in 35+ currencies, which helps businesses sell internationally without manual conversion hassles."
            />
            <HighlightItem
              title="Transparent fees"
              description="Revolut charges processing fees per successful transaction, and refunds are processed for free, helping you keep control of costs."
            />
            <HighlightItem
              title="Integration-friendly"
              description="You can link Payment Links with business tools and automate tasks via the Revolut Business API to streamline accounting and reconciliation."
            />
          </div>

          {/* First CTA */}
          <div className="mb-10">
            <CTAButton text="See More Details" />
          </div>

          <hr className="border-[#e5e7eb] mb-10" />

          {/* 4 feature cards */}
          <section className="mb-10">
            <div className="border border-[#e5e7eb] rounded-xl p-6 sm:p-8 bg-white">
              <div className="flex flex-col gap-8">
                <FeatureItem
                  icon={<LinkIcon />}
                  title="No website or code needed"
                  description={
                    <>
                      <strong className="font-semibold text-gray-800">
                        Create links from the app or dashboard and share them immediately,
                      </strong>{' '}
                      which is ideal for non-technical teams.
                    </>
                  }
                />
                <FeatureItem
                  icon={<ClockIcon />}
                  title="Quick settlement"
                  description={
                    <>
                      <strong className="font-semibold text-gray-800">
                        Funds typically appear in your Merchant account within 24 hours
                      </strong>{' '}
                      and can be transferred to your business account instantly.
                    </>
                  }
                />
                <FeatureItem
                  icon={<GlobeIcon />}
                  title="Multi-currency and payment options"
                  description={
                    <>
                      <strong className="font-semibold text-gray-800">
                        Support for 35+ currencies and digital wallets
                      </strong>{' '}
                      helps reduce barriers for international customers.
                    </>
                  }
                />
                <FeatureItem
                  icon={<PaintIcon />}
                  title="Customisable payment page"
                  description={
                    <>
                      <strong className="font-semibold text-gray-800">
                        Branding options can increase customer trust and conversion rates by up to 10%
                      </strong>{' '}
                      according to Revolut.
                    </>
                  }
                />
              </div>
            </div>
          </section>

          {/* Key Advantages section */}
          <section className="mb-10">
            <div className="flex items-center gap-4 mb-8">
              <ThumbsUpIcon />
              <h2 className="text-[28px] font-bold text-[#1f2937]">Key Advantages</h2>
            </div>

            <div className="flex flex-col gap-6 sm:pl-2">
              <CheckPoint
                title="No website or code needed"
                description="Create links from the app or dashboard and share them immediately — ideal for non-technical teams."
              />
              <CheckPoint
                title="Quick settlement"
                description="Funds typically appear in your Merchant account within 24 hours and can be transferred to your business account instantly."
              />
              <CheckPoint
                title="Multi-currency and payment options"
                description="Support for 35+ currencies and digital wallets helps reduce barriers for international customers."
              />
              <CheckPoint
                title="Customisable payment page"
                description="Branding options can increase customer trust and conversion rates by up to 10% according to Revolut."
              />
            </div>
          </section>

          {/* Payment Links combines convenience block */}
          <div className="bg-[#f0fcf6] border border-[#b7ecd4] rounded-xl p-6 mb-10 text-[16px] text-[#4b5563] leading-relaxed">
            <p>
              <strong className="text-[#1f2937]">Payment Links combines convenience, speed, and flexibility</strong> for businesses
              that need to accept payments without heavy technical investment.
            </p>
          </div>

          {/* Second CTA */}
          <div className="mb-4">
            <CTAButton text="See More Details" />
          </div>
        </article>
      </main>
      <StickyBar />
    </div>
  );
}

// ─── Subcomponents ─────────────────────────────────────────────────────────────

function HighlightItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex items-start gap-3">
      <CheckIcon />
      <p>
        <strong className="text-[#1f2937]">{title}</strong> — {description}
      </p>
    </div>
  );
}

function FeatureItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4 sm:gap-5">
      <div className="flex-shrink-0 mt-1">{icon}</div>
      <div>
        <h3 className="text-[17px] sm:text-[18px] font-bold text-[#1f2937] mb-1.5">{title}</h3>
        <p className="text-[#5c6778] leading-relaxed text-[15px] sm:text-[16px]">{description}</p>
      </div>
    </div>
  );
}

function CheckPoint({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 mt-[2px]">
        <CheckIcon />
      </div>
      <div>
        <h3 className="text-[17px] font-bold text-[#1f2937] mb-1">{title}</h3>
        <p className="text-[#5c6778] leading-relaxed text-[15px] sm:text-[16px]">{description}</p>
      </div>
    </div>
  );
}

function CTAButton({ text }: { text: string }) {
  return (
    <TrackedCTALink
      href="/o/en/revolut-payment-link"
      locale="en"
      prelendSlug="revolut-payment-link"
      eventType="outbound_click"
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex items-center justify-center gap-3
        bg-[#269752] hover:bg-[#1f7e44]
        text-white font-bold text-[19px] sm:text-[21px]
        py-[22px] px-8 rounded-xl w-full uppercase tracking-wider
        shadow-md hover:shadow-xl
        transition-all duration-300 ease-out
        hover:scale-[1.025] active:scale-[0.98]
      "
    >
      {text}
      <ArrowRightCircleIcon />
    </TrackedCTALink>
  );
}

// ─── Icons ─────────────────────────────────────────────────────────────────────

function LinkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[30px] h-[30px] text-[#269752]">
      <path
        fillRule="evenodd"
        d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-.954-6.494.75.75 0 01-.435-.986z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[30px] h-[30px] text-[#269752]">
      <path
        fillRule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[30px] h-[30px] text-[#269752]">
      <path
        fillRule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM6.262 6.072a8.25 8.25 0 1010.562-.766 4.5 4.5 0 01-1.318 1.357L14.25 7.5l.165.33a.809.809 0 01-1.086 1.085l-.604-.302a1.125 1.125 0 00-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 01-2.288 4.04l-.723.724a1.125 1.125 0 01-1.298.21l-.153-.076a1.125 1.125 0 01-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 01-.21-1.298L9.75 12l-1.64-1.64a6 6 0 01-1.676-3.257l-.172-1.03z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function PaintIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[30px] h-[30px] text-[#269752]">
      <path
        fillRule="evenodd"
        d="M20.599 1.5c-.376 0-.743.111-1.055.32l-5.08 3.385a18.747 18.747 0 00-3.471 2.987 10.04 10.04 0 014.815 4.815 18.748 18.748 0 002.987-3.472l3.386-5.079A1.902 1.902 0 0020.599 1.5zm-8.3 14.025a18.76 18.76 0 001.896-1.207 8.026 8.026 0 00-4.513-4.513A18.75 18.75 0 008.475 11.7l-.278.5a5.26 5.26 0 013.601 3.602l.502-.278zM6.75 13.5A3.75 3.75 0 003 17.25a1.5 1.5 0 01-1.601 1.497 5.25 5.25 0 005.8 5.8 1.5 1.5 0 001.497-1.601A3.75 3.75 0 006.75 13.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ThumbsUpIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-[#1f2937]">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-[22px] h-[22px] text-[#0fb55b] flex-shrink-0 mt-[2px]">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function ArrowRightCircleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[26px] h-[26px]">
      <path
        fillRule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
        clipRule="evenodd"
      />
    </svg>
  );
}
