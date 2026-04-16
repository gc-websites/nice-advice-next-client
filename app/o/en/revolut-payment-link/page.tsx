import Image from 'next/image';
import { Metadata } from 'next';
import GoogleAd from '../../../../components/GoogleAd';
import ClickTracker from '../../../../components/ClickTracker';
import TrackedCTALink from '../../../../components/TrackedCTALink';
import RevolutStickyBar from './RevolutStickyBar';
import InAppBrowserBanner from '../../../../components/InAppBrowserBanner';

export const metadata: Metadata = {
  title: "Revolut's Payment Links: The Full Guide",
  description:
    'The complete guide to Revolut Payment Links — how they work, fees, benefits, pros and cons, and how to get started accepting payments instantly.',
  alternates: {
    canonical: 'https://nice-advice.info/o/en/revolut-payment-link',
  },
};

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
  { id: 'section-11', label: 'Payment Links vs. Alternatives' },
  { id: 'section-faq', label: 'Frequently Asked Questions' },
  { id: 'section-13', label: 'Common Issues & Troubleshooting' },
  { id: 'section-14', label: 'Final Considerations' },
];

export default function RevolutPaymentLinkFullGuidePage() {
  return (
    <div className="bg-[#f8f9fa] min-h-screen py-8 sm:py-12">

      {/* In-App Browser Banner */}
      <InAppBrowserBanner />

      {/* Top Banner Ad */}
      <div className="max-w-[1020px] mx-auto px-4 mb-8">
        <div className="w-full flex flex-col items-center group has-[ins[data-ad-status='unfilled']]:hidden has-[ins[style*='display: none']]:hidden">
          <span className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider mb-2 text-center hidden group-has-[ins:not(:empty)]:block">Advertisement</span>
          <GoogleAd adSlot="6679416038" adFormat="horizontal" fullWidthResponsive="true" className="w-full text-center" />
        </div>
      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* 3-column layout */}
        <div className="flex gap-6 justify-center items-start">

          {/* ── LEFT: Contents (TOC) ── */}
          <aside className="hidden lg:flex flex-col w-[240px] flex-shrink-0">
            <div className="sticky top-6 bg-white rounded-xl shadow-[0_2px_16px_rgba(0,0,0,0.08)] overflow-hidden border border-[#e5e7eb]">
              {/* Header with teal accent top border */}
              <div className="border-t-[3px] border-[#4BC8BE] px-5 py-4 bg-gradient-to-b from-[#f8fffe] to-white">
                <span className="text-[13px] font-bold text-[#1f2937] uppercase tracking-[0.18em]">Contents</span>
              </div>
              <div className="w-full h-px bg-[#f0f0f0]" />
              <nav className="px-4 py-3">
                <ol className="space-y-0.5">
                  {TOC_ITEMS.map((item, i) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="flex items-center gap-3 py-[9px] px-2 rounded-lg hover:bg-[#f0fdf9] group transition-all duration-150 relative"
                      >
                        {/* Number badge */}
                        <span className="flex-shrink-0 w-[26px] h-[26px] rounded-full bg-[#e8f8f6] group-hover:bg-[#4BC8BE] flex items-center justify-center text-[11px] font-bold text-[#4BC8BE] group-hover:text-white transition-all duration-200 leading-none shadow-sm">
                          {i + 1 <= 14 ? i + 1 : '✓'}
                        </span>
                        {/* Label */}
                        <span className="text-[13px] text-[#374151] group-hover:text-[#039185] leading-tight font-medium transition-colors duration-150">
                          {item.label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </aside>

          {/* ── CENTER: Main Article ── */}
          <main className="w-full max-w-[760px] bg-white rounded-xl shadow-sm border border-[#eaeaea] overflow-hidden text-gray-800 font-sans p-6 sm:p-10 flex-shrink">
            <article>
              <ClickTracker locale="en" prelendSlug="revolut-payment-link" eventType="prelend_view" />

              <header className="mb-6">
                <h1 className="text-[32px] sm:text-[40px] font-bold text-[#1f2937] leading-tight mb-3 tracking-tight">
                  Revolut&apos;s Payment Links: The Full Guide
                </h1>
                <div className="flex flex-wrap items-center text-[#6b7280] text-[15px] gap-2">
                  <span>16/04/2026</span>
                  <span className="text-gray-400">•</span>
                  <span>Editorial Team Nice Advice</span>
                </div>
              </header>

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

              {/* Ad slot 1 */}
              <div className="w-full flex flex-col items-center group has-[ins[data-ad-status='unfilled']]:hidden has-[ins[style*='display: none']]:hidden mb-10">
                <span className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider mb-2 text-center hidden group-has-[ins:not(:empty)]:block">Advertisement</span>
                <GoogleAd adSlot="6679416038" adFormat="auto" fullWidthResponsive="true" className="w-full text-center" />
              </div>

              {/* Intro */}
              <div className="space-y-6 text-[17px] text-[#4b5563] leading-relaxed mb-10">
                <p>You can create a payment link in a few taps and send it to your customer via email, text, or any messaging app. It&apos;s one of the simplest ways to get paid online without a full e-commerce setup.</p>
                <p>This complete guide covers how <strong>Revolut Payment Links</strong> work, what they cost, who they&apos;re best suited for, and how to get started today.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Create links in seconds</strong> directly from the Revolut Business app.</li>
                  <li><strong>Share anywhere</strong> via email, SMS, or social media.</li>
                  <li><strong>Accept 35+ currencies</strong> from customers worldwide.</li>
                  <li><strong>Multiple payment methods</strong> — Cards, Apple Pay, Google Pay, and Revolut Pay.</li>
                  <li><strong>Funds settle quickly</strong> into your Merchant account.</li>
                </ul>
                <p>Continue reading for a detailed breakdown of every aspect of Revolut Payment Links so you can decide if they&apos;re the right tool for your business.</p>
              </div>

              {/* §1 */}
              <section id="section-1" className="mb-12 text-[17px] text-[#4b5563] leading-relaxed">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-3">1. How Payment Links Work</h2>
                <p className="mb-8">Payment Links removes the need for a storefront or complex integration. You simply generate a URL for a specific amount and send it to your client.</p>

                {/* Step cards */}
                <div className="relative">
                  {/* Connecting line (desktop) */}
                  <div className="hidden sm:block absolute left-[27px] top-[52px] bottom-[52px] w-[2px] bg-gradient-to-b from-[#4BC8BE] via-[#4BC8BE]/40 to-transparent z-0" />

                  <div className="flex flex-col gap-4">
                    {[
                      {
                        num: '01', label: 'Create',
                        desc: "Generate a link in the 'Merchant' tab of your Revolut Business app or web dashboard.",
                        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" /></svg>,
                        color: 'from-[#4BC8BE] to-[#039185]',
                      },
                      {
                        num: '02', label: 'Share',
                        desc: 'Send the URL to your customer via email, WhatsApp, SMS, or any channel you prefer.',
                        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z" clipRule="evenodd" /></svg>,
                        color: 'from-[#6366f1] to-[#4f46e5]',
                      },
                      {
                        num: '03', label: 'Pay',
                        desc: 'Customer opens the link and pays via a secure Revolut-hosted checkout page — no account needed.',
                        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" /><path fillRule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd" /></svg>,
                        color: 'from-[#f59e0b] to-[#d97706]',
                      },
                      {
                        num: '04', label: 'Settle',
                        desc: 'Money lands in your Merchant account, typically within 24 hours.',
                        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd" /></svg>,
                        color: 'from-[#10b981] to-[#059669]',
                      },
                    ].map((step) => (
                      <div key={step.num} className="relative z-10 flex items-start gap-5 bg-white border border-[#e5e7eb] hover:border-[#4BC8BE]/60 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-200 group">
                        {/* Icon circle */}
                        <div className={`flex-shrink-0 w-[54px] h-[54px] rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-md`}>
                          {step.icon}
                        </div>
                        {/* Content */}
                        <div className="flex-1 min-w-0 pt-0.5">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[11px] font-bold text-[#4BC8BE] tracking-widest uppercase">{step.num}</span>
                            <h3 className="text-[17px] font-bold text-[#1f2937] group-hover:text-[#039185] transition-colors">{step.label}</h3>
                          </div>
                          <p className="text-[15px] text-[#6b7280] leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* §2 */}
              <section id="section-2" className="mb-10 space-y-5 text-[17px] text-[#4b5563] leading-relaxed">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-4">2. Key Benefits of Using Payment Links</h2>
                <p>Payment Links combines convenience, speed, and flexibility for businesses that need to accept payments without heavy technical investment.</p>
                <div className="space-y-4">
                  {[
                    { title: 'Fast setup', desc: 'You can create and send links in seconds, making Payment Links ideal for one-off invoices, quotes, and quick sales.' },
                    { title: 'Low friction for customers', desc: 'Customers pay on a mobile-friendly secure page with multiple payment options, reducing abandoned transactions.' },
                    { title: 'Multi-currency support', desc: 'Accept payments in 35+ currencies, which helps businesses sell internationally without manual conversion hassles.' },
                    { title: 'Transparent fees', desc: 'Revolut charges processing fees per successful transaction, and refunds are processed for free, helping you keep control of costs.' },
                    { title: 'Integration-friendly', desc: 'You can link Payment Links with business tools and automate tasks via the Revolut Business API to streamline accounting and reconciliation.' },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-3 items-start p-4 bg-[#f8fffe] border border-[#d1fae5] rounded-xl">
                      <svg className="w-5 h-5 text-[#4BC8BE] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      <div><strong className="text-[#1f2937]">{item.title}</strong><span className="text-[#4b5563]"> — {item.desc}</span></div>
                    </div>
                  ))}
                </div>
              </section>

              {/* §3 */}
              <section id="section-3" className="mb-10 space-y-5 text-[17px] text-[#4b5563] leading-relaxed">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-4">3. Pricing and Fees — What to Expect</h2>
                <p>Understanding fees is essential to estimate your margins when using Payment Links.</p>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Creating and sending Payment Links is free</strong> — there is no charge for customising pages or generating QR codes.</li>
                  <li><strong>Domestic / Revolut Pay cards</strong> — online payment processing starts from £0.20 + 1% per transaction.</li>
                  <li><strong>International / Commercial cards</strong> — typically incur a higher rate such as £0.20 + 2.8% per transaction.</li>
                  <li><strong>Only successful transactions are charged</strong> — refunds are processed without additional processing fees.</li>
                  <li><strong>High-volume businesses</strong> — check Revolut Business plans as fees and settlement options can vary by account tier.</li>
                </ul>
                <p>Compare these rates against your average basket value and sales volume to judge cost-effectiveness for your business.</p>
              </section>

              {/* CTA */}
              <div className="mb-10"><CTAButton text="Visit Official Website" /></div>

              {/* §4 */}
              <section id="section-4" className="mb-10 space-y-5 text-[17px] text-[#4b5563] leading-relaxed">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-4">4. Who Should Use Payment Links</h2>
                <p>Payment Links is tailored for businesses that need a fast, low-technical way to accept payments from customers anywhere.</p>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Small businesses and freelancers</strong> who send invoices or accept one-off payments without a website.</li>
                  <li><strong>Shops and market sellers</strong> who want to accept card payments on the go using QR codes.</li>
                  <li><strong>Service providers</strong> like consultants and contractors who need quick payment collection after delivering work.</li>
                  <li><strong>International sellers</strong> who benefit from multi-currency acceptance without complex checkout setups.</li>
                  <li><strong>Wholesalers and B2B businesses</strong> handling custom or bulk orders with per-invoice links.</li>
                </ul>
                <p>If you need a lightweight payment solution with quick settlements and multi-currency support, Payment Links is worth considering.</p>
              </section>

              {/* §5 */}
              <section id="section-5" className="mb-10 space-y-5 text-[17px] text-[#4b5563] leading-relaxed">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-4">5. Customisation and Conversion Tips</h2>
                <p>A personalised payment page helps customers recognise your brand and can improve conversion rates.</p>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Add your logo and brand colours</strong> to the payments page to boost trust and conversions.</li>
                  <li><strong>Include a clear description and invoice number</strong> in the payment details so customers know what they are paying for.</li>
                  <li><strong>Use a QR code</strong> at events or on printed receipts for quick in-person payments that reduce checkout friction.</li>
                  <li><strong>Set an expiry date</strong> on payment links to create urgency for time-sensitive offers.</li>
                  <li><strong>Test different layouts and messaging</strong> to see what reduces drop-off and increases completion rates.</li>
                </ul>
                <p>Small visual changes can have measurable impacts, so invest a little time in branding the payment experience. According to Revolut, businesses that apply branding see conversion rate improvements of up to 10% compared to unbranded links.</p>
              </section>

              {/* §6 Pros/Cons */}
              <section id="section-6" className="mb-12">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-4">6. Pros and Cons at a Glance</h2>
                <p className="text-[17px] text-[#4b5563] mb-8">A balanced look at what makes Revolut Payment Links stand out and where they have limitations.</p>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl p-6 shadow-sm">
                    <h3 className="text-[20px] font-bold text-[#166534] mb-5">Primary Advantages</h3>
                    <ul className="space-y-4">
                      {[
                        { title: 'No website or code needed', desc: 'Create links from the app or dashboard and share them immediately — ideal for non-technical teams.' },
                        { title: 'Quick settlement', desc: 'Funds typically appear in your Merchant account within 24 hours and can be transferred instantly.' },
                        { title: 'Multi-currency and payment options', desc: 'Support for 35+ currencies and digital wallets helps reduce barriers for international customers.' },
                        { title: 'Customisable payment page', desc: 'Branding options can increase customer trust and conversion rates by up to 10% according to Revolut.' },
                      ].map((item) => (
                        <li key={item.title} className="flex gap-3 text-[#14532d] border-b border-[#bbf7d0] pb-4 last:border-0 last:pb-0">
                          <svg className="w-6 h-6 shrink-0 mt-0.5 text-[#16a34a]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                          <div><strong className="block mb-1 text-[16px]">{item.title}</strong><p className="text-[15px] opacity-90 leading-relaxed">{item.desc}</p></div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-1 bg-[#fef2f2] border border-[#fecaca] rounded-xl p-6 shadow-sm">
                    <h3 className="text-[20px] font-bold text-[#991b1b] mb-5">Potential Limitations</h3>
                    <ul className="space-y-4">
                      {[
                        { title: 'Fees vary by card type', desc: 'International and commercial card rates (2.8% + £0.20) are noticeably higher than domestic card rates.' },
                        { title: 'Support experience can vary', desc: 'Some users report longer response times from Revolut Business support during busy periods.' },
                        { title: 'Account eligibility requirements', desc: 'A Revolut Business account and approved Merchant account are required — not instant for all applicants.' },
                        { title: 'Occasional reliability reports', desc: 'Some merchants have reported sporadic issues with link availability, though these are generally resolved quickly.' },
                      ].map((item) => (
                        <li key={item.title} className="flex gap-3 text-[#7f1d1d] border-b border-[#fecaca] pb-4 last:border-0 last:pb-0">
                          <svg className="w-6 h-6 shrink-0 mt-0.5 text-[#dc2626]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                          <div><strong className="block mb-1 text-[16px]">{item.title}</strong><p className="text-[15px] opacity-90 leading-relaxed">{item.desc}</p></div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Ad slot 2 */}
              <div className="w-full flex flex-col items-center group has-[ins[data-ad-status='unfilled']]:hidden has-[ins[style*='display: none']]:hidden mb-10">
                <span className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider mb-2 text-center hidden group-has-[ins:not(:empty)]:block">Advertisement / Partner</span>
                <GoogleAd adSlot="6679416038" adFormat="auto" fullWidthResponsive="true" className="w-full text-center" />
              </div>

              {/* §7 */}
              <section id="section-7" className="mb-10 space-y-5 text-[17px] text-[#4b5563] leading-relaxed">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-4">7. Security and Eligibility</h2>
                <p>Security and compliance are central to any payments product, and Payment Links employs several safeguards to protect both merchants and customers.</p>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Payment pages are hosted by Revolut</strong> — removing the need to handle card data directly on your side.</li>
                  <li><strong>Customers never need to share card details with the seller</strong> — reducing exposure to PCI compliance concerns.</li>
                  <li>Revolut is <strong>FCA-regulated</strong> in the UK and authorised across the EEA.</li>
                  <li>To use Payment Links you must have a <strong>Revolut Business account</strong> and a <strong>Merchant account</strong>, and operate from an eligible country.</li>
                  <li>Settlement and dispute handling follows <strong>Revolut&apos;s merchant terms</strong> and standard payment network rules.</li>
                  <li>Maximum transaction size is up to <strong>£50,000</strong> (or currency equivalent) per single link.</li>
                </ul>
                <p>These controls make Payment Links a secure option, but ensure your business meets eligibility requirements before relying on it as a primary payment method.</p>
              </section>

              {/* §8 */}
              <section id="section-8" className="mb-10 space-y-5 text-[17px] text-[#4b5563] leading-relaxed">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-4">8. Why We Recommend Revolut&apos;s Payment Links</h2>
                <p>We recommend Payment Links when you need a fast, low-friction way to accept payments from customers without a bespoke checkout.</p>
                <p>The combination of <strong>quick setup, multi-currency support, and rapid settlement</strong> is especially useful for growing small businesses and freelancers. Revolut&apos;s ecosystem also allows you to connect payments to accounting and expense workflows, which reduces administrative overhead.</p>
                <ol className="list-decimal pl-6 space-y-3">
                  <li><strong>Simplicity</strong> — create links and start getting paid in a few taps without development resources.</li>
                  <li><strong>Flexibility</strong> — share via multiple channels and accept a wide range of payment methods.</li>
                  <li><strong>Efficiency</strong> — funds are usually available fast and refunds are free, helping with cash flow management.</li>
                  <li><strong>Integration</strong> — the Business API and tool integrations help automate reconciliation and reduce manual work.</li>
                </ol>
              </section>

              {/* §9 */}
              <section id="section-9" className="mb-10 space-y-5 text-[17px] text-[#4b5563] leading-relaxed">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-4">9. Integrations and Automation</h2>
                <p>Payment Links fits into a broader merchant workflow via API access and prebuilt integrations.</p>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Revolut Business API</strong> — create links programmatically, automate link expiry, and track payments directly in your systems.</li>
                  <li><strong>Accounting tools (Xero, QuickBooks)</strong> — integrate to speed up reconciliation and reduce manual data entry.</li>
                  <li><strong>Expense management and invoicing flows</strong> — collected payments can automatically update your bookkeeping.</li>
                  <li><strong>Slack notifications</strong> — receive instant alerts when a payment is completed.</li>
                </ul>
                <p>Automation reduces repetitive tasks and helps you scale payment handling as your business grows.</p>
              </section>

              {/* §10 */}
              <section id="section-10" className="mb-10 space-y-5 text-[17px] text-[#4b5563] leading-relaxed">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-4">10. How to Start Using Payment Links</h2>
                <p>Getting started requires a Revolut Business account and an active Merchant account for your business location.</p>
                <ul className="list-disc pl-6 space-y-3">
                  <li>Open or log in to your <strong>Revolut Business account</strong>.</li>
                  <li>Apply for a <strong>Merchant account</strong> from the &apos;Merchant&apos; section in the app or dashboard.</li>
                  <li>Once approved, navigate to the <strong>&apos;Merchant&apos;</strong> tab and click <strong>&apos;Create Payment Link&apos;</strong>.</li>
                  <li>Set the amount, description, currency, and any branding options.</li>
                  <li>Copy and share the link — your customer can pay immediately.</li>
                  <li>Contact <strong>Revolut Business Sales</strong> for eligibility questions and onboarding support.</li>
                  <li>Use <strong>Revolut Business in-app support chat</strong> for setup questions or consult Revolut&apos;s Help Centre.</li>
                </ul>
                <div className="pt-4 mb-4"><CTAButton text="Visit Official Website" /></div>
              </section>

              {/* §11 — Comparison */}
              <section id="section-11" className="mb-10 space-y-5 text-[17px] text-[#4b5563] leading-relaxed">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-4">11. How Payment Links Compares to Alternatives</h2>
                <p>When choosing a payments provider consider fees, reliability, and ecosystem integrations.</p>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Compared to some rivals</strong>, Revolut offers competitive starting fees and faster settlement which benefits cash flow.</li>
                  <li><strong>Stripe</strong> may provide more advanced developer tools and broader global support in some regions, but base rates can be higher for domestic cards.</li>
                  <li><strong>Wise Business</strong> can be cost-effective for some currency conversions but may charge higher card processing rates in certain cases.</li>
                  <li><strong>PayPal</strong> has wider consumer recognition, but transaction fees and currency conversion costs are generally higher than Revolut.</li>
                </ul>
                <p>Weigh the fee schedule against your typical transaction sizes, geography, and technical needs to choose the best fit for your business.</p>
              </section>

              {/* FAQ */}
              <section id="section-faq" className="mb-10 space-y-4 text-[17px] text-[#4b5563] leading-relaxed">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-6">12. Frequently Asked Questions</h2>
                <hr className="border-gray-200 mb-6" />
                <div>
                  <h3 className="text-[19px] font-semibold text-[#1f2937] mb-2">Can I use Revolut Payment Links?</h3>
                  <p>Yes, if you have a Revolut Business account and a Revolut Merchant account and your business operates from an eligible country.</p>
                </div>
                <hr className="border-gray-200 my-6" />
                <div>
                  <h3 className="text-[19px] font-semibold text-[#1f2937] mb-2">What payment methods do Payment Links support?</h3>
                  <p>Payment Links support card payments, Apple Pay, Google Pay and Revolut Pay among other options depending on region.</p>
                </div>
                <hr className="border-gray-200 my-6" />
                <div>
                  <h3 className="text-[19px] font-semibold text-[#1f2937] mb-2">How long until funds arrive in my account?</h3>
                  <p>Funds are typically available in your Merchant account within 24 hours and can be transferred to your business account without fees.</p>
                </div>
                <hr className="border-gray-200 my-6" />
                <div>
                  <h3 className="text-[19px] font-semibold text-[#1f2937] mb-2">Are there limits on payments via links?</h3>
                  <p>There is a maximum payment limit per link — for example, a single-link limit of up to £50,000 in your base currency equivalent — but limits can vary by account and region.</p>
                </div>
                <hr className="border-gray-200 my-6" />
                <div>
                  <h3 className="text-[19px] font-semibold text-[#1f2937] mb-2">Are refunds free?</h3>
                  <p>Yes, Revolut processes refunds without charging additional processing fees, although network chargebacks may still apply in dispute cases.</p>
                </div>
                <hr className="border-gray-200 mt-6 mb-10" />
              </section>

              {/* §13 — Troubleshooting */}
              <section id="section-13" className="mb-10 space-y-5 text-[17px] text-[#4b5563] leading-relaxed">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-4">13. Common Issues and Troubleshooting</h2>
                <p>Most merchants have a smooth experience, but a few common issues can appear and are usually resolvable.</p>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>If a link fails to process a payment</strong> — check the card type and whether international or commercial card fees may be blocking the transaction.</li>
                  <li><strong>If you experience account restrictions</strong> — contact Revolut support and ensure your business details and documentation meet merchant account requirements.</li>
                  <li><strong>For missing settlements</strong> — confirm the payment status in the Merchant dashboard and check for notifications from Revolut about holds or reviews.</li>
                  <li><strong>For link expiry issues</strong> — verify the link settings and whether a single-use restriction has been triggered.</li>
                </ul>
                <p>Keep records of transactions and screenshots when contacting support to speed up resolution.</p>
              </section>

              {/* §14 Final Considerations */}
              <section id="section-14" className="mb-10 space-y-5 text-[17px] text-[#4b5563] leading-relaxed">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-4">14. Final Considerations</h2>
                <p>Revolut&apos;s Payment Links is a strong option when you need a low-friction solution to accept payments quickly and securely.</p>
                <p>Evaluate the fee structure against your average transaction value and international sales to ensure it meets your margin needs. For automation, multi-currency sales, and rapid settlement, Payment Links is worth testing in real-world transactions.</p>
                <p>We encourage merchants to <strong>pilot Payment Links with a subset of invoices or sales</strong> to validate performance before scaling its use across your entire payment flow.</p>
                <p>The combination of <strong>low domestic fees, instant link creation, and Revolut Pay one-click checkout</strong> makes this one of the most compelling payment link tools currently available in Europe for small and growing businesses.</p>
              </section>

              {/* Editorial Author Box */}
              <div className="mb-10 bg-[#f8f9fa] border border-[#eaeaea] rounded-xl p-6 flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#269752] flex items-center justify-center text-white font-bold text-[18px]">N</div>
                <div>
                  <p className="font-bold text-[#1f2937] text-[16px] mb-1">Editorial Team Nice Advice</p>
                  <p className="text-[14px] text-[#6b7280] leading-relaxed">At Nice Advice, our editorial team combines practical research with clear writing to help readers make confident, well-informed decisions. We cover finance, lifestyle, health, and everyday tools that make life better.</p>
                </div>
              </div>

              {/* More Content (mobile/tablet — shown when sidebar not visible) */}
              <aside className="lg:hidden mb-10">
                <h2 className="text-[22px] font-bold text-[#1f2937] mb-5">More Content</h2>
                <a href="/o/en/cim-marketing-course" className="flex items-center gap-4 bg-white border border-[#e5e7eb] rounded-lg p-4 hover:bg-gray-50 transition-colors group shadow-sm">
                  <div className="flex-shrink-0 w-[72px] h-[52px] rounded-md overflow-hidden">
                    <Image src="/assets/img/cim-marketing-certification-course.png" alt="CIM Marketing Course" width={72} height={52} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1f2937] text-[15px] leading-snug group-hover:text-[#269752] transition-colors">CIM Online Marketing Course: The Full Guide to Getting Certified</p>
                    <span className="text-[#269752] text-[13px] font-medium mt-1 inline-flex items-center gap-1">Read more →</span>
                  </div>
                </a>
              </aside>

            </article>
          </main>

          {/* ── RIGHT: More Content ── */}
          <aside className="hidden lg:flex flex-col w-[240px] flex-shrink-0">
            <div className="sticky top-6 bg-white rounded-xl shadow-[0_2px_16px_rgba(0,0,0,0.08)] overflow-hidden border border-[#e5e7eb]">
              {/* Header — matches Contents */}
              <div className="border-t-[3px] border-[#4BC8BE] px-5 py-4 bg-gradient-to-b from-[#f8fffe] to-white">
                <span className="text-[13px] font-bold text-[#1f2937] uppercase tracking-[0.18em]">More Content</span>
              </div>
              <div className="w-full h-px bg-[#f0f0f0]" />
              {/* Article card */}
              <div className="p-3">
                <a
                  href="/o/en/cim-marketing-course"
                  className="flex flex-col rounded-xl border border-[#e5e7eb] hover:border-[#4BC8BE] hover:shadow-md transition-all duration-200 group overflow-hidden bg-white"
                >
                  <div className="w-full h-[128px] overflow-hidden">
                    <Image
                      src="/assets/img/cim-marketing-certification-course.png"
                      alt="CIM Marketing Course"
                      width={240}
                      height={128}
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-300"
                    />
                  </div>
                  <div className="px-3 pt-3 pb-3">
                    <p className="text-[13px] text-[#1f2937] leading-snug font-semibold group-hover:text-[#039185] transition-colors mb-2">
                      CIM Online Marketing Course: The Full Guide to Getting Certified
                    </p>
                    <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-[#4BC8BE] group-hover:gap-2 transition-all duration-150">
                      Read more <span className="text-[14px]">→</span>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </aside>

        </div>
      </div>

      {/* Sticky Bottom Bar */}
      <RevolutStickyBar />
    </div>
  );
}

// ─── Subcomponents ─────────────────────────────────────────────────────────────

function FeatureItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
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

function CTAButton({ text }: { text: string }) {
  return (
    <TrackedCTALink
      href="https://www.revolut.com/business/payment-links/"
      locale="en"
      prelendSlug="revolut-payment-link"
      eventType="outbound_click"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-3 bg-[#269752] hover:bg-[#1f7e44] text-white font-bold text-[18px] sm:text-[20px] py-[20px] px-8 rounded-xl w-full uppercase tracking-wider shadow-md hover:shadow-xl transition-all duration-300 ease-out hover:scale-[1.025] active:scale-[0.98]"
    >
      {text}
      <ArrowRightCircleIcon />
    </TrackedCTALink>
  );
}

// ─── Icons ─────────────────────────────────────────────────────────────────────

function CreateIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[30px] h-[30px] text-[#269752]">
      <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[30px] h-[30px] text-[#269752]">
      <path fillRule="evenodd" d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z" clipRule="evenodd" />
    </svg>
  );
}

function PayIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[30px] h-[30px] text-[#269752]">
      <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
      <path fillRule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd" />
    </svg>
  );
}

function SettleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[30px] h-[30px] text-[#269752]">
      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd" />
    </svg>
  );
}

function ArrowRightCircleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[26px] h-[26px]">
      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd" />
    </svg>
  );
}
