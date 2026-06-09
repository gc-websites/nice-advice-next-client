import Image from 'next/image';
import { Metadata } from 'next';
import TrackedAdSlot from '@/components/TrackedAdSlot';
import EngagementTracker from '@/components/EngagementTracker';
import ClickTracker from '@/components/ClickTracker';
import TrackedCTALink from '@/components/TrackedCTALink';

// ---------------------------------------------------------------------------
// Final offer link. Incoming ?utm_* params are appended automatically by
// TrackedCTALink and the outbound click is tracked. Swap for your affiliate
// / destination URL when ready:
// ---------------------------------------------------------------------------
const OFFER_URL = 'https://degrees.snhu.edu/';

const LOCALE = 'en' as const;
const PRELEND_SLUG = 'digital-marketing';

export const metadata: Metadata = {
  title: 'Online Digital Marketing Degree at SNHU: The Complete Guide',
  description:
    'A complete guide to earning an accredited online digital marketing degree at Southern New Hampshire University — format, tuition, transfer credits, what you study, who it is for, pros and cons, and how to enroll.',
  alternates: {
    canonical: 'https://nice-advice.info/en/o/digital-marketing',
  },
};

const SECTIONS = [
  { id: 'format', label: 'Format & how online learning works' },
  { id: 'benefits', label: 'Key benefits of the program' },
  { id: 'curriculum', label: 'What you study: core areas' },
  { id: 'who-its-for', label: 'Who it is for' },
  { id: 'tuition', label: 'Tuition, aid & ways to pay' },
  { id: 'pros-cons', label: 'Pros and cons' },
  { id: 'tools', label: 'Skills & tools you build' },
  { id: 'why', label: 'Why we recommend it' },
  { id: 'programs', label: 'Featured degree paths' },
  { id: 'enroll', label: 'How to enroll and start' },
  { id: 'maximize', label: 'How to get the most out of it' },
  { id: 'faq', label: 'Frequently asked questions' },
  { id: 'limitations', label: 'Limitations to consider' },
  { id: 'final', label: 'Final thoughts' },
];

export default function DigitalMarketingOfferPage() {
  return (
    <div className="bg-light dark:bg-mainText min-h-screen py-8 sm:py-12">
      {/* fire offer_view + persist utm params */}
      <ClickTracker locale={LOCALE} prelendSlug={PRELEND_SLUG} eventType="prelend_view" funnelStep="offer_view" />

      {/* scroll depth + time on page → page_exit */}
      <EngagementTracker locale={LOCALE} prelendSlug={PRELEND_SLUG} />

      {/* Top banner ad — na_o_top */}
      <div className="max-w-[1100px] mx-auto px-4 mb-8">
        <TrackedAdSlot slot="9081217047" locale={LOCALE} prelendSlug={PRELEND_SLUG} />
      </div>

      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-8 lg:items-start">
          <Toc />

          <main className="w-full max-w-[830px] mx-auto lg:mx-0 bg-white dark:bg-additionalText rounded-xl shadow-sm border border-[#eaeaea] dark:border-white/10 overflow-hidden text-gray-800 dark:text-white p-6 sm:p-10">
            <article>
              <p className="text-[13px] text-additionalText dark:text-white/60 mb-2">
                Published on: <time dateTime="2026-06-04">June 4, 2026</time> • Editorial Team Nice Advice
              </p>

              <h1 className="font-merriweather text-[30px] sm:text-[40px] font-bold text-mainText dark:text-white leading-tight mb-5 tracking-tight">
                Online Digital Marketing Degree at SNHU: The Complete Guide
              </h1>

              <figure className="mb-8">
                <Image
                  src="/assets/img/d26c2aae-dcfe-425e-b25b-baebd8dca307.png"
                  alt="Online digital marketing degree — your guide to mastering digital marketing"
                  width={1774}
                  height={887}
                  className="w-full h-auto rounded-xl object-cover"
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 830px) 100vw, 830px"
                />
              </figure>

              <div className="space-y-5 text-[17px] text-[#4b5563] dark:text-white/80 leading-relaxed mb-8">
                <p>
                  This guide takes a close look at earning an <strong>online digital marketing degree</strong> at
                  Southern New Hampshire University (SNHU) — what the program offers, how online study works, and how
                  to decide whether it fits your goals and budget.
                </p>

                {/* Ad — na_o_mid1 (after the first paragraph) */}
                <TrackedAdSlot slot="8220091745" locale={LOCALE} prelendSlug={PRELEND_SLUG} />

                <p>
                  We break down the format, what you study, tuition and aid, the real pros and cons, and the exact
                  steps to enroll — so you can make a confident, informed decision.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Accredited nonprofit university</strong> with one of the largest online student bodies in the U.S.</li>
                  <li><strong>100% online, flexible format</strong> with no set class times and 24/7 course access.</li>
                  <li><strong>Affordable tuition</strong> and the option to transfer up to 90 credits toward your degree.</li>
                </ul>
              </div>

              {/* Ad — na_o_mid2 (after the intro block) */}
              <TrackedAdSlot slot="3800970206" locale={LOCALE} prelendSlug={PRELEND_SLUG} />

              <Section id="format" title="Format & how online learning works">
                <p>
                  SNHU is built for online learning. Courses run fully online, on your schedule, so you can study
                  early mornings, late nights or weekends without pausing work or family commitments.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Lessons are <strong>self-paced within each term</strong>, with weekly milestones to keep you on track.</li>
                  <li>There are <strong>no fixed lecture times</strong> — you log in and learn whenever it suits you.</li>
                  <li>Multiple <strong>start dates throughout the year</strong> mean you begin when you are ready.</li>
                  <li>Everything is accessible from a <strong>laptop, tablet or phone</strong>, anywhere you have a connection.</li>
                </ul>
                <p>This format is ideal for working professionals who need to learn efficiently around a busy schedule.</p>
              </Section>

              <Section id="benefits" title="Key benefits of the program">
                <p className="mb-2">
                  An online degree at an accredited nonprofit university brings together credibility, flexibility and
                  affordability — a combination that is hard to match.
                </p>
                <div className="flex flex-col gap-7 mt-6">
                  <FeatureItem
                    icon={<BadgeIcon />}
                    title="Accredited nonprofit, trusted for generations"
                    description={<><strong>SNHU is accredited by NECHE</strong> — a nonprofit university educating students since 1932 and online since 1995, so your degree carries real weight with employers.</>}
                  />
                  <FeatureItem
                    icon={<LaptopIcon />}
                    title="100% online — no set class times"
                    description={<><strong>Study fully online with 24/7 access</strong> to your courses, learning on your schedule from anywhere.</>}
                  />
                  <FeatureItem
                    icon={<TagIcon />}
                    title="Among the lowest tuition in the nation"
                    description={<><strong>As a nonprofit, SNHU keeps tuition affordable</strong>, with some of the lowest online rates in the country.</>}
                  />
                  <FeatureItem
                    icon={<TransferIcon />}
                    title="Transfer up to 90 credits"
                    description={<><strong>Bring the credits you have already earned</strong> with a free evaluation and finish your degree faster, for less.</>}
                  />
                  <FeatureItem
                    icon={<UsersIcon />}
                    title="Career-focused, with real support"
                    description={<><strong>Dedicated advisors guide you from day one</strong>, with a curriculum built around the real-world skills employers look for.</>}
                  />
                </div>
                <div className="mt-10">
                  <CTAButton text="View degree options" />
                </div>
              </Section>

              <Section id="curriculum" title="What you study: core areas">
                <p>The curriculum blends marketing fundamentals with the hands-on digital skills companies hire for today.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Marketing strategy & consumer behavior</strong> — understanding audiences and positioning.</li>
                  <li><strong>SEO & content marketing</strong> — earning organic visibility and building authority.</li>
                  <li><strong>Paid media & social advertising</strong> — planning, launching and optimizing campaigns.</li>
                  <li><strong>Analytics & data</strong> — measuring performance and making decisions with metrics.</li>
                  <li><strong>Brand, email & automation</strong> — nurturing audiences and scaling what works.</li>
                </ul>
                <p>The mix lets you build a well-rounded skill set you can apply immediately at work or in your own projects.</p>
              </Section>

              <Section id="who-its-for" title="Who it is for">
                <p>The program suits a wide range of learners who want to move into or grow within digital marketing.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Career changers</strong> moving into a fast-growing, in-demand field.</li>
                  <li><strong>Working professionals</strong> who need a flexible, fully online schedule.</li>
                  <li><strong>Recent grads and beginners</strong> who want a structured, credible path.</li>
                  <li><strong>Entrepreneurs</strong> who want to market their own business with confidence.</li>
                </ul>
                <p>No prior marketing experience is required, and the format adapts to different levels and goals.</p>
              </Section>

              <Section id="tuition" title="Tuition, aid & ways to pay">
                <p>As a nonprofit, SNHU is designed to keep an online degree within reach for more students.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Some of the lowest online tuition</strong> in the nation, with transparent per-credit pricing.</li>
                  <li><strong>Transfer up to 90 credits</strong> to shorten your path and lower the total cost.</li>
                  <li><strong>Financial aid</strong> is available to those who qualify — many students use it to fund their studies.</li>
                  <li><strong>Free transfer evaluations</strong> help you see exactly where you stand before you commit.</li>
                </ul>
                <p>Always confirm current tuition and aid options for your specific program before enrolling.</p>
              </Section>

              <Section id="pros-cons" title="Pros and cons">
                <p className="mb-2">A quick, balanced look to help you decide whether this path is the right fit.</p>
                <div className="flex flex-col md:flex-row gap-6 mt-4">
                  <div className="flex-1 rounded-xl border border-main/30 bg-main/5 p-6">
                    <h3 className="text-[20px] font-bold text-main3 dark:text-main mb-5">What we like</h3>
                    <ul className="space-y-4">
                      <ProItem title="Accredited & recognized" text="NECHE accreditation and a nonprofit reputation give the credential genuine weight." />
                      <ProItem title="Truly flexible" text="No set class times and 24/7 access let you study around work and life." />
                      <ProItem title="Affordable & transfer-friendly" text="Low online tuition plus up to 90 transfer credits cut time and cost." />
                      <ProItem title="Career-focused with support" text="Practical skills and advisors who guide you from start to finish." />
                    </ul>
                  </div>
                  <div className="flex-1 rounded-xl border border-red-200 dark:border-red-500/30 bg-red-50 dark:bg-red-950/20 p-6">
                    <h3 className="text-[20px] font-bold text-red-700 dark:text-red-300 mb-5">Worth considering</h3>
                    <ul className="space-y-4">
                      <ConItem title="Requires self-discipline" text="Online, self-paced study depends on your consistency and time management." />
                      <ConItem title="Less in-person networking" text="A fully online format offers fewer face-to-face connections than a campus." />
                      <ConItem title="Timeline varies" text="How fast you finish depends on transfer credits and your weekly pace." />
                      <ConItem title="Needs a stable connection" text="Most of the experience assumes reliable internet access." />
                    </ul>
                  </div>
                </div>
              </Section>

              <Section id="tools" title="Skills & tools you build">
                <p>The program emphasizes practical, employer-ready skills and the tools used across the industry.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Reading and acting on data with <strong>analytics platforms</strong> like Google Analytics.</li>
                  <li>Planning and optimizing <strong>paid campaigns</strong> across search and social.</li>
                  <li>Building <strong>content and SEO</strong> strategies that compound over time.</li>
                  <li>Using <strong>automation and AI-assisted tools</strong> to scale marketing work.</li>
                </ul>
                <p>The focus stays on applying tools to drive real results, not just passing theory exams.</p>
              </Section>

              <Section id="why" title="Why we recommend it">
                <p>We highlight this path because it combines credibility, flexibility and value in a way few programs do.</p>
                <p>The online format fits busy lives, the nonprofit tuition keeps it affordable, and NECHE accreditation gives the degree lasting weight.</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>A recognized, accredited credential that strengthens your resume.</li>
                  <li>Practical, career-focused skills you can use right away.</li>
                  <li>Flexible online study that adapts to your schedule.</li>
                  <li>Transfer credits and low tuition that shorten the path and the price.</li>
                </ol>
                <p>After weighing the options, we consider SNHU a solid choice for anyone serious about a career in digital marketing.</p>
              </Section>

              <Section id="programs" title="Featured degree paths">
                <p>The catalog spans associate, bachelor&apos;s and master&apos;s levels, so you can match the program to your goals.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Bachelor&apos;s in Marketing</strong> with a digital marketing focus for a strong foundation.</li>
                  <li><strong>Certificates and concentrations</strong> for focused, faster upskilling.</li>
                  <li><strong>Master&apos;s options</strong> for those ready to move into leadership roles.</li>
                </ul>
                <p>Pick the level that fits where you are now and where you want to go next.</p>
              </Section>

              <Section id="enroll" title="How to enroll and start">
                <p>Getting started is straightforward and there is no application fee to apply.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Request information or apply online in a few minutes.</li>
                  <li>Submit a free transfer-credit evaluation if you have prior college credit.</li>
                  <li>Work with an admission counselor and get an acceptance decision in days.</li>
                </ul>
                <div className="pt-5">
                  <CTAButton text="Visit the official site" />
                </div>
              </Section>

              <Section id="maximize" title="How to get the most out of it">
                <p>To get the strongest return on your time, combine study with hands-on practice from the first module.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Apply each lesson to a real or simulated campaign as you go.</li>
                  <li>Build a portfolio of work you can show employers.</li>
                  <li>Lean on advisors and resources whenever you get stuck.</li>
                  <li>Track results and learn from your own data.</li>
                </ul>
                <p>Applied learning speeds up your skills and improves your employability.</p>
              </Section>

              {/* FAQ */}
              <section id="faq" className="my-12 scroll-mt-24">
                <div className="relative overflow-hidden rounded-2xl border border-[#e8ebf7] dark:border-white/10 bg-white dark:bg-transparent shadow-sm">
                  <div className="h-1.5 bg-gradient-to-r from-main via-main2 to-main3" />
                  <div className="p-6 md:p-8">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-main/10 text-main mb-3">
                        <QuestionIcon />
                      </div>
                      <h2 className="font-merriweather text-2xl md:text-3xl font-bold text-mainText dark:text-white">
                        Frequently asked questions
                      </h2>
                    </div>
                    <div className="max-w-3xl mx-auto space-y-5">
                      <FaqItem n="Q1" q="Is SNHU accredited?">
                        Yes. SNHU is accredited by the New England Commission of Higher Education (NECHE), a recognized
                        regional accreditor.
                      </FaqItem>
                      <FaqItem n="Q2" q="Can I transfer credits I already have?">
                        Yes — you can transfer up to 90 credits toward a bachelor&apos;s degree, with a free evaluation
                        to see exactly what applies.
                      </FaqItem>
                      <FaqItem n="Q3" q="How much does it cost?">
                        SNHU offers some of the lowest online tuition in the nation, priced per credit. Financial aid is
                        available to those who qualify; confirm current rates for your program.
                      </FaqItem>
                      <FaqItem n="Q4" q="Is it really 100% online?">
                        Yes. Courses are fully online with no set class times and 24/7 access, so you study on your own
                        schedule.
                      </FaqItem>
                    </div>
                  </div>
                </div>
              </section>

              <Section id="limitations" title="Limitations to consider">
                <p>No program is perfect, and it helps to know the trade-offs before you enroll.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Online, self-paced learning rewards discipline — results depend on the time you put in.</li>
                  <li>A fully online format means fewer in-person connections than a traditional campus.</li>
                  <li>Some highly specialized goals may call for additional, focused training later.</li>
                </ul>
                <p>Knowing these points helps you plan a path that fits your goals and learning style.</p>
              </Section>

              <Section id="final" title="Final thoughts">
                <p>An online digital marketing degree at SNHU is a strong option if you want a flexible, affordable and accredited path into the field.</p>
                <p>It fits career changers, working professionals and beginners alike — and the combination of low tuition, transfer credits and real support is hard to beat.</p>
                <p>From <strong>Nice Advice</strong>, we reviewed the format, value and outcomes, and consider it a solid, credible choice for building a marketing career.</p>
              </Section>

              {/* Author */}
              <section className="mt-12 p-6 rounded-2xl border border-[#e5e7eb] dark:border-white/10 flex flex-col items-center text-center gap-3">
                <div className="rounded-full bg-light dark:bg-white/10 w-24 h-24 grid place-items-center overflow-hidden ring-1 ring-black/5 border border-[#eaeaea] dark:border-white/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/assets/svg/tick.svg" alt="Nice Advice" width={56} height={56} className="w-14 h-14 object-contain" />
                </div>
                <h3 className="font-merriweather text-lg font-bold text-mainText dark:text-white">Editorial Team Nice Advice</h3>
                <p className="text-additionalText dark:text-white/70 text-[15px] leading-relaxed max-w-xl">
                  We are the team behind Nice Advice — writers and specialists who turn dense topics into clear,
                  practical steps. We research the options so you can make confident decisions about your education and
                  your career.
                </p>
              </section>
            </article>
          </main>
        </div>
      </div>
    </div>
  );
}

// --------------------------------------------------------------------------
// Subcomponents
// --------------------------------------------------------------------------

function Toc() {
  return (
    <aside
      aria-labelledby="toc-title"
      className="hidden lg:block lg:sticky lg:top-4 rounded-2xl border border-[#e8ebf7] dark:border-white/10 bg-white dark:bg-additionalText pt-6 pb-6 px-2 shadow-sm overflow-hidden"
    >
      <h2 id="toc-title" className="text-base font-bold uppercase mb-5 text-gray-700 dark:text-white pb-3 border-b border-[#f0f2f9] dark:border-white/10 text-center">
        Contents
      </h2>
      <nav>
        <ul className="list-none m-0 p-0 flex flex-col gap-1.5">
          {SECTIONS.map((s, i) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="group flex items-start gap-2.5 rounded-lg px-2 py-2 text-[14px] text-gray-600 dark:text-white/70 hover:bg-main/5 hover:text-main3 dark:hover:text-main transition-colors"
              >
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-main/10 text-main text-[11px] font-bold">
                  {i + 1}
                </span>
                <span className="flex-1 leading-[1.4]">{s.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-10 scroll-mt-24 space-y-4 text-[17px] text-[#4b5563] dark:text-white/80 leading-relaxed">
      <h2 className="font-merriweather text-[24px] sm:text-[26px] font-bold text-mainText dark:text-white !mb-2">
        {title}
      </h2>
      {children}
    </section>
  );
}

function FeatureItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4 sm:gap-5">
      <div className="flex-shrink-0 mt-1">{icon}</div>
      <div>
        <h3 className="text-[17px] sm:text-[18px] font-bold text-mainText dark:text-white mb-1.5">{title}</h3>
        <p className="text-[#5c6778] dark:text-white/75 leading-relaxed text-[15px] sm:text-[16px]">{description}</p>
      </div>
    </div>
  );
}

function ProItem({ title, text }: { title: string; text: string }) {
  return (
    <li className="flex gap-3">
      <span className="shrink-0 mt-0.5 text-main">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 13l4 4L19 7" /></svg>
      </span>
      <div>
        <strong className="block mb-0.5 text-[16px] text-mainText dark:text-white">{title}</strong>
        <p className="text-[15px] text-[#5c6778] dark:text-white/70 leading-relaxed">{text}</p>
      </div>
    </li>
  );
}

function ConItem({ title, text }: { title: string; text: string }) {
  return (
    <li className="flex gap-3">
      <span className="shrink-0 mt-0.5 text-red-500">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M6 18L18 6M6 6l12 12" /></svg>
      </span>
      <div>
        <strong className="block mb-0.5 text-[16px] text-mainText dark:text-white">{title}</strong>
        <p className="text-[15px] text-[#5c6778] dark:text-white/70 leading-relaxed">{text}</p>
      </div>
    </li>
  );
}

function FaqItem({ n, q, children }: { n: string; q: string; children: React.ReactNode }) {
  return (
    <article className="relative">
      <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-main to-main3 opacity-60" />
      <div className="pl-5 pr-4 py-4 rounded-xl border border-main/15 bg-gradient-to-br from-main/5 to-transparent">
        <h3 className="flex items-start gap-3 text-lg font-bold text-mainText dark:text-white mb-2">
          <span className="inline-flex items-center justify-center min-w-[2rem] h-7 rounded-lg bg-main text-white text-xs font-extrabold shrink-0 mt-0.5">
            {n}
          </span>
          <span>{q}</span>
        </h3>
        <p className="pl-12 text-[#5c6778] dark:text-white/75 leading-relaxed text-[0.95rem]">{children}</p>
      </div>
    </article>
  );
}

function CTAButton({ text }: { text: string }) {
  return (
    <TrackedCTALink
      href={OFFER_URL}
      locale={LOCALE}
      prelendSlug={PRELEND_SLUG}
      eventType="outbound_click"
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="group/cta relative isolate flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-br from-main to-main3 px-8 py-7 sm:py-8 text-center text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-white shadow-[0_18px_42px_-12px_rgba(3,145,133,0.55)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.015] hover:shadow-[0_30px_70px_-14px_rgba(3,145,133,0.75)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-main/40 active:translate-y-0 active:scale-100"
    >
      <span aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-main2 to-main3 opacity-0 transition-opacity duration-500 ease-out group-hover/cta:opacity-100" />
      <span aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-[45%] -translate-x-[170%] -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-[900ms] ease-out group-hover/cta:translate-x-[320%]" />
      <span className="relative z-10 inline-flex items-center gap-3">
        {text}
        <ArrowRightCircleIcon />
      </span>
    </TrackedCTALink>
  );
}

// --------------------------------------------------------------------------
// Icons
// --------------------------------------------------------------------------

function BadgeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[30px] h-[30px] text-main">
      <path d="M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12z" />
    </svg>
  );
}

function LaptopIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" className="w-[32px] h-[32px] text-main">
      <path d="M232 176v-16H216V64a16 16 0 0 0-16-16H56A16 16 0 0 0 40 64v96H24v16a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16ZM56 64h144v96H56ZM24 192v-16h208v16Z" />
    </svg>
  );
}

function TagIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[30px] h-[30px] text-main">
      <path d="M21.41 11.58l-9-9A2 2 0 0 0 11 2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 .59 1.42l9 9a2 2 0 0 0 2.82 0l7-7a2 2 0 0 0 0-2.84zM6.5 8A1.5 1.5 0 1 1 8 6.5 1.5 1.5 0 0 1 6.5 8z" />
    </svg>
  );
}

function TransferIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[30px] h-[30px] text-main">
      <path d="M7 7h11l-2.5-2.5L17 3l5 5-5 5-1.5-1.5L18 9H7V7zm10 10H6l2.5 2.5L7 21l-5-5 5-5 1.5 1.5L6 15h11v2z" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" className="w-[32px] h-[32px] text-main">
      <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h66c6.2-47.4 34.8-87.3 75.1-109.4z" />
    </svg>
  );
}

function QuestionIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
    </svg>
  );
}

function ArrowRightCircleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 sm:w-9 sm:h-9 transition-transform duration-300 ease-out group-hover/cta:translate-x-1.5">
      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd" />
    </svg>
  );
}
