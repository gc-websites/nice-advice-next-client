import Image from 'next/image';
import { Metadata } from 'next';
import GoogleAd from '../../../../components/GoogleAd';

export const metadata: Metadata = {
  title: 'CIM Online Marketing Course: The Full Guide to Getting Certified',
  description: 'The Complete Guide to the CIM Online Marketing Course - Course Structure, Apprenticeships, Costs, and Outcomes.',
};

export default function CIMMarketingCourseFullGuidePage() {
  return (
    <div className="bg-[#f8f9fa] min-h-screen py-8 sm:py-12">
      {/* Top Banner Ad - Outside Main Content */}
      <div className="max-w-[1020px] mx-auto px-4 mb-8">
        <div className="w-full flex flex-col items-center group has-[ins[data-ad-status='unfilled']]:hidden has-[ins[style*='display: none']]:hidden">
          <span className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider mb-2 text-center hidden group-has-[ins:not(:empty)]:block">Advertisement</span>
          <GoogleAd adSlot="6679416038" adFormat="horizontal" fullWidthResponsive="true" className="w-full text-center" />
        </div>
      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          
          {/* Main Content Column */}
          <main className="w-full max-w-[830px] bg-white rounded-xl shadow-sm border border-[#eaeaea] overflow-hidden text-gray-800 font-sans p-6 sm:p-10">
            <article>
              <header className="mb-6">
                <h1 className="text-[32px] sm:text-[40px] font-bold text-[#1f2937] leading-tight mb-3 tracking-tight">
                  CIM Online Marketing Course: The Full Guide to Getting Certified
                </h1>
                <div className="flex flex-wrap items-center text-[#6b7280] text-[15px] gap-2">
                  <span>22/10/2026</span>
                  <span className="text-gray-400">•</span>
                  <span>Editorial Team Gaulois</span>
                </div>
              </header>

              <figure className="mb-8">
                <Image
                  src="/assets/img/cim-marketing-certification-course.png"
                  alt="CIM Online Marketing Course Structure"
                  width={800}
                  height={450}
                  className="w-full h-auto rounded-xl object-cover"
                  priority
                />
              </figure>

              {/* Mid-Content Ad Slot 1 (Below Image) */}
              <div className="w-full flex flex-col items-center group has-[ins[data-ad-status='unfilled']]:hidden has-[ins[style*='display: none']]:hidden mb-10">
                <span className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider mb-2 text-center hidden group-has-[ins:not(:empty)]:block">Advertisement</span>
                <GoogleAd adSlot="6679416038" adFormat="auto" fullWidthResponsive="true" className="w-full text-center" />
              </div>

              <div className="space-y-6 text-[17px] text-[#4b5563] leading-relaxed mb-10">
                <p>This comprehensive overview explores what the <strong>CIM Digital Marketing Course</strong> provides and how it can accelerate your professional growth in the marketing industry.</p>
                <p>We analyze the curriculum breakdown, grading methods, financing options, and the real-world skills you will gain.</p>
                <p>Every section is dedicated to a distinct topic, allowing you to easily locate the specific details you require.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Target audience of the program</strong> and the common career trajectories it unlocks.</li>
                  <li><strong>Curriculum format and teaching methods</strong>, spanning individual modules and exams.</li>
                  <li><strong>Financial aid, apprenticeship paths, and tangible results</strong> to assist you in determining if this aligns with your corporate or personal career trajectory.</li>
                </ul>
                <p>Continue reading for an actionable, clear perspective on the CIM Digital Marketing Course and how to navigate registration or integrate it into an apprenticeship structure.</p>
              </div>

              <section className="mb-10 space-y-6 text-[17px] text-[#4b5563] leading-relaxed">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-5">Curriculum Breakdown & Core Modules</h2>
                <p>The CIM Digital Marketing framework is divided into distinct modules, meticulously structured to build marketing fundamentals alongside advanced digital techniques.</p>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Core Marketing Principles</strong> analyzing target audiences and optimizing the marketing mix.</li>
                  <li><strong>Omnichannel Campaigns</strong> focusing on campaign strategy, rollout, and performance tracking.</li>
                  <li><strong>Content Management</strong> detailing digital creation, syndication, and brand governance.</li>
                  <li><strong>Search Engine & Paid Advertising</strong> covering hands-on tactics for both paid campaigns and organic visibility.</li>
                  <li><strong>Data & Commercial Analytics</strong> dedicated to tracking marketing ROI and scaling performance metrics.</li>
                </ul>
                <p>While usually completed sequentially, these modules can frequently be customized by educational partners to better align with specific job demands and past experience.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-6">Primary Advantages of the CIM Digital Marketing Certification</h2>
                <p className="text-[17px] text-[#4b5563] mb-6">Enrolling in this program grants both actionable tactical knowledge and highly respected professional validation.</p>
                <div className="flex flex-col gap-8 mb-8">
                  <FeatureItem 
                    icon={<BadgeIcon />}
                    title="Globally Recognized Accreditation"
                    description={<><strong>Finishing the CIM syllabus grants a formal certificate</strong> that recruiters and companies highly value during hiring and performance reviews.</>}
                  />
                  <FeatureItem 
                    icon={<BriefcaseIcon />}
                    title="Actionable, Career-Driven Education"
                    description={<><strong>The coursework heavily prioritizes tangible assignments</strong> like media planning, data evaluation, and conversion rate optimization that directly translate to your daily workflow.</>}
                  />
                  <FeatureItem 
                    icon={<LaptopIcon />}
                    title="Adaptable Study Formats"
                    description={<><strong>Numerous certified academies provide remote, in-person, or hybrid learning</strong>, giving busy professionals the flexibility to upgrade their skills alongside full-time work.</>}
                  />
                  <FeatureItem 
                    icon={<UsersIcon />}
                    title="Integration with Corporate Apprenticeships"
                    description={<><strong>This syllabus can be seamlessly woven into corporate apprenticeship schemes</strong>, with CIM serving as the official End-Point Assessment adjudicator for marketing apprentices.</>}
                  />
                </div>
                <div className="mb-10">
                   <CTAButton text="Visit Official Website" />
                </div>
              </section>

              <section className="mb-10 space-y-6 text-[17px] text-[#4b5563] leading-relaxed">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-4">Leveraging Apprenticeships & CIM's Function</h2>
                <p>CIM collaborates directly with corporations and educational institutes to ensure their syllabus matches national apprenticeship benchmarks.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>CIM operates as a licensed End-Point Assessment Body</strong>, authorizing them to conduct the final evaluations for registered apprentices.</li>
                  <li><strong>Formal module certifications can be embedded</strong> into an apprenticeship pathway, provided the employer and training entity coordinate accordingly.</li>
                  <li><strong>Candidates remain fully employed and salaried</strong>, blending hands-on workplace training with academic off-the-job study hours.</li>
                </ul>
                <p>If you intend to utilize employer apprenticeship budgets, consult your learning provider regarding integration possibilities so they can correctly align the syllabus.</p>
              </section>

              <section className="mb-10 space-y-6 text-[17px] text-[#4b5563] leading-relaxed">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-4">Ideal Candidates for the Training</h2>
                <p>This syllabus is tailored to accommodate learners across the spectrum, from junior staff to veteran marketing managers.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Recent graduates and career pivoters</strong> seeking a formally structured introduction to modern digital marketing.</li>
                  <li><strong>Marketing associates and executives</strong> looking for hands-on expertise in multi-channel strategies and data analytics.</li>
                  <li><strong>Business owners and HR departments</strong> desiring a consistent, scalable educational framework for their staff via apprenticeships.</li>
                  <li><strong>Seasoned practitioners</strong> hoping to validate their practical knowledge or secure fast-track exemptions for advanced CIM diplomas.</li>
                </ul>
                <p>Since the syllabus consists of independent modules, it can easily adapt to individual upskilling goals as well as large-scale corporate development plans.</p>
              </section>

              {/* Mid-Content AdSense Slot 2 */}
              <div className="w-full flex flex-col items-center group has-[ins[data-ad-status='unfilled']]:hidden has-[ins[style*='display: none']]:hidden mb-10">
                <span className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider mb-2 text-center hidden group-has-[ins:not(:empty)]:block">Advertisement / Partner</span>
                <GoogleAd adSlot="6679416038" adFormat="auto" fullWidthResponsive="true" className="w-full text-center" />
              </div>

              <section className="mb-10 space-y-6 text-[17px] text-[#4b5563] leading-relaxed">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-4">Teaching Methodologies and Grading</h2>
                <p>The exact delivery and grading mechanisms are determined by accredited teaching centers operating within the apprenticeship guidelines.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Learning formats</strong> typically include interactive webinars, on-demand modules, and traditional in-person seminars.</li>
                    <li><strong>Grading</strong> incorporates real-world project portfolios, applied assignments, and mandatory end-point assessments for those on an apprenticeship track.</li>
                    <li><strong>Timeline</strong> fluctuates based on background knowledge and chosen pace, though registered apprenticeships mandates a minimum standard of 12 months.</li>
                </ul>
                <p>Ensure you verify the grading structure with your selected academy and clarify if any prior learning exemptions could shorten your study time.</p>
              </section>

              <section className="mb-12">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-4">Advantages & Limitations</h2>
                <p className="text-[17px] text-[#4b5563] mb-8">Evaluating both the pros and potential drawbacks will help you determine if this qualification is the right fit.</p>
                
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Positive Points */}
                  <div className="flex-1 bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl p-6 shadow-sm">
                    <h3 className="text-[20px] font-bold text-[#166534] mb-5">Primary Advantages</h3>
                    <ul className="space-y-4">
                      <li className="flex gap-3 text-[#14532d] border-b border-[#bbf7d0] pb-4 last:border-0 last:pb-0">
                        <svg className="w-6 h-6 shrink-0 mt-0.5 text-[#16a34a]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <div>
                            <strong className="block mb-1 text-[16px]">Highly applied learning</strong>
                            <p className="text-[15px] opacity-90 leading-relaxed">Intense focus on techniques and deliverables you will regularly employ at work, bypassing abstract theory.</p>
                        </div>
                      </li>
                      <li className="flex gap-3 text-[#14532d] border-b border-[#bbf7d0] pb-4 last:border-0 last:pb-0">
                        <svg className="w-6 h-6 shrink-0 mt-0.5 text-[#16a34a]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <div>
                            <strong className="block mb-1 text-[16px]">Prestigious industry standing</strong>
                            <p className="text-[15px] opacity-90 leading-relaxed">CIM certifications carry immense weight among UK and international employers, facilitating career transitions.</p>
                        </div>
                      </li>
                      <li className="flex gap-3 text-[#14532d] border-b border-[#bbf7d0] pb-4 last:border-0 last:pb-0">
                        <svg className="w-6 h-6 shrink-0 mt-0.5 text-[#16a34a]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <div>
                            <strong className="block mb-1 text-[16px]">Corporate funding synergy</strong>
                            <p className="text-[15px] opacity-90 leading-relaxed">Can be seamlessly injected into company-sponsored training budgets, mitigating financial hurdles.</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Negative Points */}
                  <div className="flex-1 bg-[#fef2f2] border border-[#fecaca] rounded-xl p-6 shadow-sm">
                    <h3 className="text-[20px] font-bold text-[#991b1b] mb-5">Potential Limitations</h3>
                    <ul className="space-y-4">
                      <li className="flex gap-3 text-[#7f1d1d] border-b border-[#fecaca] pb-4 last:border-0 last:pb-0">
                        <svg className="w-6 h-6 shrink-0 mt-0.5 text-[#dc2626]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        <div>
                            <strong className="block mb-1 text-[16px]">Not an all-in-one package</strong>
                            <p className="text-[15px] opacity-90 leading-relaxed">A specialized apprenticeship alone may not yield a comprehensive CIM Diploma without the completion of external top-up modules.</p>
                        </div>
                      </li>
                      <li className="flex gap-3 text-[#7f1d1d] border-b border-[#fecaca] pb-4 last:border-0 last:pb-0">
                        <svg className="w-6 h-6 shrink-0 mt-0.5 text-[#dc2626]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        <div>
                            <strong className="block mb-1 text-[16px]">Inconsistent academy quality</strong>
                            <p className="text-[15px] opacity-90 leading-relaxed">The caliber of tutoring relies heavily on your chosen educational partner, making independent research vital.</p>
                        </div>
                      </li>
                      <li className="flex gap-3 text-[#7f1d1d] border-b border-[#fecaca] pb-4 last:border-0 last:pb-0">
                        <svg className="w-6 h-6 shrink-0 mt-0.5 text-[#dc2626]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        <div>
                            <strong className="block mb-1 text-[16px]">Significant schedule demands</strong>
                            <p className="text-[15px] opacity-90 leading-relaxed">Juggling a full-time position with rigorous studies requires impeccable time management and employer cooperation.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-10 space-y-6 text-[17px] text-[#4b5563] leading-relaxed">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-4">Pricing structure, Grants, and Company Backing</h2>
                <p>The total financial investment relies heavily on your learning model, seniority level, and eligibility for corporate schemes.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Corporate apprenticeship funds often absorb the entire cost</strong> for qualifying teams via state co-investments or the apprenticeship levy.</li>
                  <li><strong>Learners typically pay nothing out-of-pocket</strong> when sponsored through these mechanisms, while employers also facilitate the required study hours.</li>
                  <li><strong>Independent, self-funded candidates</strong> face varying tuition rates depending on the academy, which will generally split costs into exam fees and tuition.</li>
                </ul>
                <p>Always request a completely itemized tuition breakdown before enrolling and explore if your current employer possesses tapped or untapped training budgets.</p>
              </section>

              <section className="mb-10 space-y-6 text-[17px] text-[#4b5563] leading-relaxed">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-4">Why the CIM Digital Marketing Certification is Highly Rated</h2>
                <p>We endorse this educational pathway because it flawlessly merges day-to-day tactical abilities with profound industry credibility.</p>
                <p>This certification is uniquely tuned to the immediate demands of modern businesses, rendering it highly effective for closing skills gaps.</p>
                <p>Furthermore, graduates consistently cite the credential as a primary catalyst for wage increases and upward mobility.</p>
                <ol className="list-decimal pl-6 space-y-2">
                    <li><strong>Market respect</strong> — The CIM name is synonymous with excellence and remains widely requested by recruitment agencies.</li>
                    <li><strong>Task-focused approach</strong> — You learn by doing, actively working on deliverables like ad spend tracking and campaign drafting.</li>
                    <li><strong>Financial accessibility via employers</strong> — Companies can utilize existing government incentives to fund your journey, erasing out-of-pocket expenses.</li>
                    <li><strong>High customizability</strong> — Certified tutors can mold the syllabus to perfectly address niche company requirements or specific job descriptions.</li>
                </ol>
              </section>

              <section className="mb-10 space-y-6 text-[17px] text-[#4b5563] leading-relaxed">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-4">Post-Course Professional Progression</h2>
                <p>Achieving a CIM credential positions you for accelerated advancement across diverse digital roles.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Junior positions</strong> including content creator, social media executive, or marketing assistant.</li>
                    <li><strong>Specialist roles</strong> encompassing SEO strategist, conversion rate optimizer, or digital account manager.</li>
                    <li><strong>Leadership tiers</strong> ranging from digital marketing head to overall campaign director following additional experience.</li>
                </ul>
                <p>Countless alumni have documented substantial leverage during salary negotiations strictly as a result of achieving this recognized milestone.</p>
              </section>

              <section className="mb-10 space-y-6 text-[17px] text-[#4b5563] leading-relaxed">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-4">Registration and Enrollment Process</h2>
                <p>Begin by establishing if you will be participating via a company-sponsored apprenticeship or studying independently.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Initiate a conversation with your HR department to evaluate state-funded development programs.</li>
                    <li>Reach out to localized study centers to evaluate their class schedules, success rates, and total tuition.</li>
                    <li>Contact the CIM institution directly to seek explicit advice regarding registered training partners and grading policies.</li>
                </ul>
                <div className="pt-4 mb-4">
                   <CTAButton text="Visit Official Website" />
                </div>
              </section>

              <section className="mb-10 space-y-6 text-[17px] text-[#4b5563] leading-relaxed">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-4">Getting Ready for Your Studies</h2>
                <p>Adequate preparation ensures that your academic efforts yield the highest possible return on investment.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Define precise milestones</strong> mapping exactly what software or channels you intend to master to advance your career.</li>
                    <li><strong>Block off designated reading periods</strong> and formalize an agreement with management regarding your allotted off-the-job training time.</li>
                    <li><strong>Compile corporate case studies</strong>, statistics, and raw data to natively incorporate into your coursework portfolios.</li>
                </ul>
                <p>Leveraging internal company challenges as academic assignments significantly reduces the burden of study and allows you to apply knowledge instantly.</p>
              </section>

              <section className="mb-10 space-y-4 text-[17px] text-[#4b5563] leading-relaxed">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-6">Common Inquiries (FAQ)</h2>
                <hr className="border-gray-200 mb-6" />
                <div>
                  <h3 className="text-[20px] font-semibold text-[#1f2937] mb-2">Is it possible to secure an overarching CIM diploma exclusively through an apprenticeship?</h3>
                  <p>In most scenarios, a specialized apprenticeship will provide a modular award; achieving the comprehensive diploma may require attending supplementary classes beyond the initial apprenticeship bounds.</p>
                </div>
                <hr className="border-gray-200 my-6" />
                <div>
                  <h3 className="text-[20px] font-semibold text-[#1f2937] mb-2">Are apprentices required to shoulder any tuition fees?</h3>
                  <p>Under conventional apprenticeship frameworks, the learner is entirely exempt from fees. The financial backing flows from governmental support initiatives or corporate levy taxation.</p>
                </div>
                <hr className="border-gray-200 my-6" />
                <div>
                  <h3 className="text-[20px] font-semibold text-[#1f2937] mb-2">What is the expected timeframe to finish the workload?</h3>
                  <p>Completion speed correlates with the student's background and chosen intensity, however, official apprenticeship rules stipulate a mandatory baseline duration of twelve months prior to official assessment.</p>
                </div>
                <hr className="border-gray-200 my-6" />
                <div>
                  <h3 className="text-[20px] font-semibold text-[#1f2937] mb-2">Does the CIM organization act as the classroom tutor?</h3>
                  <p>No, the core CIM body functions predominantly as an oversight and examination board. The actual lecturing and syllabus delivery are outsourced to affiliated, specialized colleges and training hubs.</p>
                </div>
                <hr className="border-gray-200 mt-6 mb-10" />
              </section>

              <section className="mb-10 space-y-6 text-[17px] text-[#4b5563] leading-relaxed">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-4">Software, Infrastructure & Applied Techniques</h2>
                <p>Students should anticipate deep, practical immersion into standard martech applications utilized by global agencies.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Traffic dashboards</strong> designed to quantify user telemetry and demographic insights.</li>
                    <li><strong>Biddable media environments</strong> tailored for rapidly deploying, split-testing, and scaling paid advertising.</li>
                    <li><strong>Social administration suites</strong> capable of synchronizing automated posting schedules and centralizing brand voice.</li>
                </ul>
                <p>The overarching objective is mastering these interfaces to drive commercial profitability rather than passing theoretical exams.</p>
              </section>

              <section className="mb-10 space-y-6 text-[17px] text-[#4b5563] leading-relaxed">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-4">Closing Thoughts</h2>
                <p>The CIM Digital Marketing module suite presents a dynamic, commercially relevant development option suitable for nearly every phase of a marketer's journey.</p>
                <p>For individuals seeking <strong>hard technical abilities paired with bulletproof corporate credibility</strong>, this syllabus warrants serious consideration, particularly when approached through coordinated corporate mentoring.</p>
                <p>To move forward, we advise initiating dialogue with certified instructors and actively investigating avenues for commercial sponsorship.</p>
                <p>This unbiased overview was assembled to equip you with an independent evaluation, ensuring that your enrollment thoroughly complements your long-term career framework.</p>
              </section>
            </article>
          </main>
        </div>
      </div>
    </div>
  );
}

// Subcomponents

function SidebarArticle({ title, link, imageSrc }: { title: string, link: string, imageSrc: string }) {
  return (
    <a href={link} className="block bg-white rounded-lg border border-[#e5e7eb] p-5 flex items-center justify-between gap-4 group cursor-pointer hover:bg-gray-50 transition-colors shadow-sm">
      <div className="flex flex-col flex-1 pr-2">
        <h3 className="font-semibold text-[#1f2937] text-[17px] leading-[1.3] mb-3 group-hover:text-[#269752] transition-colors">
          {title}
        </h3>
        <span className="text-[#269752] text-[15px] font-medium flex items-center gap-1.5 w-max">
          Read more <span className="text-[18px] font-normal leading-none mb-[2px] transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
      <div className="flex-shrink-0">
        <Image src={imageSrc} alt="" width={85} height={60} className="object-contain" />
      </div>
    </a>
  );
}

function FeatureItem({ icon, title, description }: { icon: React.ReactNode, title: string, description: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4 sm:gap-5">
      <div className="flex-shrink-0 mt-1">
        {icon}
      </div>
      <div>
        <h3 className="text-[17px] sm:text-[18px] font-bold text-[#1f2937] mb-1.5">{title}</h3>
        <p className="text-[#5c6778] leading-relaxed text-[15px] sm:text-[16px]">{description}</p>
      </div>
    </div>
  );
}

function CTAButton({ text }: { text: string }) {
  return (
    <a 
      href="https://www.cim.co.uk/learn-develop/qualifications/marketing-apprenticeships/" 
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-3 bg-[#269752] hover:bg-[#1f7e44] transition-colors text-white font-bold text-[17px] sm:text-[18px] py-[18px] px-6 rounded-md w-full uppercase tracking-wide shadow-sm"
    >
      {text}
      <ArrowRightCircleIcon />
    </a>
  );
}

// Icons
function BadgeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[30px] h-[30px] text-[#269752]">
      <path d="M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12z"/>
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" className="w-[30px] h-[30px] text-[#269752]">
      <path d="M216 64h-40V56a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40A16 16 0 0 0 24 80v120a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16ZM96 56a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96ZM216 80v24H40V80Zm0 120H40v-80h176Z"/>
    </svg>
  );
}

function LaptopIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" className="w-[32px] h-[32px] text-[#269752]">
      <path d="M232 176v-16H216V64a16 16 0 0 0-16-16H56A16 16 0 0 0 40 64v96H24v16a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16ZM56 64h144v96H56ZM24 192v-16h208v16Z" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" className="w-[32px] h-[32px] text-[#269752]">
      <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h66c6.2-47.4 34.8-87.3 75.1-109.4z"/>
    </svg>
  );
}

function ThumbsUpIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-[#1f2937]">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-[22px] h-[22px] text-[#0fb55b]">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
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
