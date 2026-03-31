const fs = require('fs');
const path = './app/o/cim-marketing-course/page.tsx';
let txt = fs.readFileSync(path, 'utf8');

const newContent = `              <div className="space-y-6 text-[17px] text-[#4b5563] leading-relaxed mb-10">
                <p>This guide explains what the <strong>CIM Digital Marketing Course</strong> offers and how it can help you progress in a marketing career.</p>
                <p>It breaks down the course structure, assessment, funding options, and practical outcomes you can expect.</p>
                <p>Each section focuses on a specific aspect so you can quickly find the information you need.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Who this course suits</strong> and typical career paths it supports.</li>
                  <li><strong>Course content and delivery</strong> including modules and assessment.</li>
                  <li><strong>Funding, apprenticeships and practical outcomes</strong> to help you decide if it fits your organisation or career plan.</li>
                </ul>
                <p>Read on to get a clear, practical view of the CIM Digital Marketing Course and how to approach enrolment or using it within an apprenticeship programme.</p>
              </div>

              <section className="mb-10 space-y-6 text-[17px] text-[#4b5563] leading-relaxed">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-5">Course Structure & Key Modules</h2>
                <p>The CIM Digital Marketing Course is modular and designed to cover marketing fundamentals and advanced digital skills.</p>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Marketing Principles</strong> covering customer insight and the marketing mix.</li>
                  <li><strong>Integrated Campaigns</strong> focusing on planning, execution and measurement.</li>
                  <li><strong>Content Strategy</strong> that includes content creation, distribution and governance.</li>
                  <li><strong>SEO and Paid Search Management</strong> with practical approaches to organic and paid traffic.</li>
                  <li><strong>Analytics and Commercial Intelligence</strong> to measure return on investment and optimise performance.</li>
                </ul>
                <p>Modules are typically taken in sequence but can often be tailored by training providers to match job roles and experience levels.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-6">Top Benefits of the CIM Digital Marketing Course</h2>
                <p className="text-[17px] text-[#4b5563] mb-6">Taking this course delivers both immediate practical skills and recognised professional credibility.</p>
                <div className="flex flex-col gap-8 mb-8">
                  <FeatureItem 
                    icon={<BadgeIcon />}
                    title="Industry-recognised credential"
                    description={<><strong>Completing CIM modules gives you a professional credential</strong> that employers recognise when hiring and promoting marketers.</>}
                  />
                  <FeatureItem 
                    icon={<BriefcaseIcon />}
                    title="Practical, job-focused learning"
                    description={<><strong>Course content emphasises real-world tasks</strong> such as campaign planning, analytics and optimisation that transfer directly to workplace performance.</>}
                  />
                  <FeatureItem 
                    icon={<LaptopIcon />}
                    title="Flexible delivery options"
                    description={<><strong>Many training providers offer online, classroom or blended delivery</strong>, allowing working professionals to upskill without leaving their roles.</>}
                  />
                  <FeatureItem 
                    icon={<UsersIcon />}
                    title="Supports apprenticeship frameworks"
                    description={<><strong>The course can be incorporated into apprenticeship programmes</strong> and CIM also acts as an End-Point Assessment Organisation for marketing apprenticeships.</>}
                  />
                </div>
                <div className="mb-10">
                   <CTAButton text="Visit Official Website" />
                </div>
              </section>

              {/* Mid-Content AdSense Slot */}
              <div className="w-full flex flex-col items-center group has-[ins[data-ad-status='unfilled']]:hidden has-[ins[style*='display: none']]:hidden mb-10">
                <span className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider mb-2 text-center hidden group-has-[ins:not(:empty)]:block">Advertisement</span>
                <GoogleAd adSlot="6679416038" adFormat="auto" fullWidthResponsive="true" className="w-full text-center" />
              </div>

              <section className="mb-10 space-y-6 text-[17px] text-[#4b5563] leading-relaxed">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-4">Apprenticeship Integration and CIM's Role</h2>
                <p>CIM works with employers and training providers to align training with apprenticeship standards.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>CIM is a registered End-Point Assessment Organisation</strong> which means it can carry out official end-point assessments for apprentices.</li>
                  <li><strong>A CIP-style module award can be integrated</strong> into an apprenticeship where training providers and employers agree this approach.</li>
                  <li><strong>The apprentice remains in paid employment</strong> while combining on-the-job and off-the-job training.</li>
                </ul>
                <p>If you plan to access apprenticeship funding, discuss integration options with your training provider so they can map modules to the apprenticeship standard.</p>
              </section>

              <section className="mb-10 space-y-6 text-[17px] text-[#4b5563] leading-relaxed">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-4">Who Should Take This Course</h2>
                <p>The course suits a wide range of learners from entry-level to experienced marketers.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>New entrants and career changers</strong> looking for structured digital marketing training.</li>
                  <li><strong>Marketing executives and coordinators</strong> wanting practical skills in digital channels and analytics.</li>
                  <li><strong>Employers and HR teams</strong> seeking a standardized training route for teams through apprenticeships.</li>
                  <li><strong>Experienced marketers</strong> aiming to formalise skills or gain exemptions to higher-level CIM qualifications.</li>
                </ul>
                <p>Because modules can be mixed and matched, the course is adaptable to both individual career development and organisational training plans.</p>
              </section>

              {/* Mid-Content AdSense Slot 2 */}
              <div className="w-full flex flex-col items-center group has-[ins[data-ad-status='unfilled']]:hidden has-[ins[style*='display: none']]:hidden mb-10">
                <span className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider mb-2 text-center hidden group-has-[ins:not(:empty)]:block">Advertisement / Partner</span>
                <GoogleAd adSlot="6679416038" adFormat="auto" fullWidthResponsive="true" className="w-full text-center" />
              </div>

              <section className="mb-10 space-y-6 text-[17px] text-[#4b5563] leading-relaxed">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-4">Delivery Format and Assessment</h2>
                <p>Delivery and assessment methods are chosen by approved training providers within the apprenticeship framework.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Delivery modes</strong> commonly include live online classes, self-paced e-learning and face-to-face workshops.</li>
                    <li><strong>Assessment</strong> involves practical assignments, portfolios and, where applicable, end-point assessments for apprenticeships.</li>
                    <li><strong>Duration</strong> varies by level and prior experience but apprenticeships have a minimum 12-month standard.</li>
                </ul>
                <p>Confirm with your chosen provider what assessment formats are used and whether any module exemptions apply to your situation.</p>
              </section>

              <section className="mb-12">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-4">Pros and Cons</h2>
                <p className="text-[17px] text-[#4b5563] mb-8">Weighing the strengths and limitations helps decide if the course matches your needs.</p>
                
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Positive Points */}
                  <div className="flex-1 bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl p-6 shadow-sm">
                    <h3 className="text-[20px] font-bold text-[#166534] mb-5">Positive Points</h3>
                    <ul className="space-y-4">
                      <li className="flex gap-3 text-[#14532d] border-b border-[#bbf7d0] pb-4 last:border-0 last:pb-0">
                        <svg className="w-6 h-6 shrink-0 mt-0.5 text-[#16a34a]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <div>
                            <strong className="block mb-1 text-[16px]">Practical focus</strong>
                            <p className="text-[15px] opacity-90 leading-relaxed">Strong emphasis on tasks and skills you will use day-to-day, not just theory.</p>
                        </div>
                      </li>
                      <li className="flex gap-3 text-[#14532d] border-b border-[#bbf7d0] pb-4 last:border-0 last:pb-0">
                        <svg className="w-6 h-6 shrink-0 mt-0.5 text-[#16a34a]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <div>
                            <strong className="block mb-1 text-[16px]">Employer recognition</strong>
                            <p className="text-[15px] opacity-90 leading-relaxed">CIM credentials are widely respected in the UK marketing sector and can boost promotion prospects.</p>
                        </div>
                      </li>
                      <li className="flex gap-3 text-[#14532d] border-b border-[#bbf7d0] pb-4 last:border-0 last:pb-0">
                        <svg className="w-6 h-6 shrink-0 mt-0.5 text-[#16a34a]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <div>
                            <strong className="block mb-1 text-[16px]">Apprenticeship compatibility</strong>
                            <p className="text-[15px] opacity-90 leading-relaxed">Can be part of funded apprenticeship pathways, lowering cost barriers for organisations.</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Negative Points */}
                  <div className="flex-1 bg-[#fef2f2] border border-[#fecaca] rounded-xl p-6 shadow-sm">
                    <h3 className="text-[20px] font-bold text-[#991b1b] mb-5">Negative Points</h3>
                    <ul className="space-y-4">
                      <li className="flex gap-3 text-[#7f1d1d] border-b border-[#fecaca] pb-4 last:border-0 last:pb-0">
                        <svg className="w-6 h-6 shrink-0 mt-0.5 text-[#dc2626]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        <div>
                            <strong className="block mb-1 text-[16px]">Not a single, one-size qualification</strong>
                            <p className="text-[15px] opacity-90 leading-relaxed">A full CIM Diploma may require additional modules and some apprenticeship configurations cannot deliver an entire CIM qualification alone.</p>
                        </div>
                      </li>
                      <li className="flex gap-3 text-[#7f1d1d] border-b border-[#fecaca] pb-4 last:border-0 last:pb-0">
                        <svg className="w-6 h-6 shrink-0 mt-0.5 text-[#dc2626]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        <div>
                            <strong className="block mb-1 text-[16px]">Provider variability</strong>
                            <p className="text-[15px] opacity-90 leading-relaxed">Course experience depends on the chosen training provider, so quality and support can vary.</p>
                        </div>
                      </li>
                      <li className="flex gap-3 text-[#7f1d1d] border-b border-[#fecaca] pb-4 last:border-0 last:pb-0">
                        <svg className="w-6 h-6 shrink-0 mt-0.5 text-[#dc2626]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        <div>
                            <strong className="block mb-1 text-[16px]">Time commitment</strong>
                            <p className="text-[15px] opacity-90 leading-relaxed">Combining work and study requires planning, especially when completing assessments and portfolios.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-10 space-y-6 text-[17px] text-[#4b5563] leading-relaxed">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-4">Costs, Funding and Employer Support</h2>
                <p>Cost depends on delivery, level and whether apprenticeship funding applies.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Apprenticeship funding commonly covers training costs</strong> for eligible employers through the levy or government co-investment.</li>
                  <li><strong>There is no cost to apprentices</strong> when apprenticeship funding is used, though employers typically support off-the-job learning time.</li>
                  <li><strong>Direct enrolment costs</strong> for non-apprentices vary by provider and may include module fees and assessment charges.</li>
                </ul>
                <p>Ask potential training providers for transparent fee breakdowns and check whether your employer or local apprenticeship scheme can fund the programme.</p>
              </section>

              <section className="mb-10 space-y-6 text-[17px] text-[#4b5563] leading-relaxed">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-4">Why We Recommend the CIM Digital Marketing Course</h2>
                <p>We recommend this course because it blends practical skills with recognised professional validation.</p>
                <p>We recommend the course because it aligns with employer needs and apprenticeship standards that support real-world marketing roles.</p>
                <p>We recommend it because completion often leads to clearer career progression paths and better performance at work.</p>
                <ol className="list-decimal pl-6 space-y-2">
                    <li><strong>Industry recognition</strong> — CIM is an established body and its modules are valued by employers.</li>
                    <li><strong>Applied learning</strong> — the curriculum focuses on deliverables like campaigns, analytics and optimisation.</li>
                    <li><strong>Apprenticeship synergy</strong> — employers can fund training through apprenticeship routes which eases adoption.</li>
                    <li><strong>Adaptability</strong> — training providers can tailor delivery to match job roles and organisational needs.</li>
                </ol>
              </section>

              <section className="mb-10 space-y-6 text-[17px] text-[#4b5563] leading-relaxed">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-4">Career Outcomes and Progression</h2>
                <p>CIM training helps you move into or up within digital marketing roles.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Entry roles</strong> such as Digital Marketing Assistant or Social Media Coordinator.</li>
                    <li><strong>Mid-level roles</strong> such as Marketing Executive, SEO Specialist or Paid Media Manager.</li>
                    <li><strong>Senior roles</strong> like Head of Digital or Marketing Manager with further experience and additional CIM diplomas.</li>
                </ul>
                <p>Many learners report faster promotion and improved salary prospects after completing recognised marketing training.</p>
              </section>

              <section className="mb-10 space-y-6 text-[17px] text-[#4b5563] leading-relaxed">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-4">How to Apply or Get Started</h2>
                <p>Start by deciding whether you will join through an apprenticeship or as a direct enrolment with a training provider.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Speak with your HR or L&amp;D team to explore employer-funded apprenticeship options.</li>
                    <li>Contact local training providers that offer CIM modules to compare delivery formats and fees.</li>
                    <li>Ask CIM directly for guidance about End-Point Assessment services and approved partners.</li>
                </ul>
                <div className="pt-4 mb-4">
                   <CTAButton text="Visit Official Website" />
                </div>
              </section>

              <section className="mb-10 space-y-6 text-[17px] text-[#4b5563] leading-relaxed">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-4">Preparing for the Course</h2>
                <p>Preparation helps you get the most from the modules and assessments.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Set clear goals</strong> for what you want to learn and which role you aim for after completion.</li>
                    <li><strong>Allocate study time</strong> within your working week and agree off-the-job hours with your employer if on an apprenticeship.</li>
                    <li><strong>Gather workplace examples</strong> and data you can use in assignments and portfolios.</li>
                </ul>
                <p>Being organised and using workplace tasks as learning activities makes assessments more practical and less time-consuming.</p>
              </section>

              <section className="mb-10 space-y-4 text-[17px] text-[#4b5563] leading-relaxed">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-6">Frequently Asked Questions</h2>
                <hr className="border-gray-200 mb-6" />
                <div>
                  <h3 className="text-[20px] font-semibold text-[#1f2937] mb-2">Can apprentices complete a full CIM qualification through an apprenticeship?</h3>
                  <p>A full CIM qualification cannot always be completed solely as an apprenticeship, but modules or module awards can be integrated where the training provider and employer agree.</p>
                </div>
                <hr className="border-gray-200 my-6" />
                <div>
                  <h3 className="text-[20px] font-semibold text-[#1f2937] mb-2">Will an apprenticeship cost the apprentice anything?</h3>
                  <p>There is typically no cost to the apprentice when apprenticeship funding is used, as employers access levy funds or government co-investment to cover training.</p>
                </div>
                <hr className="border-gray-200 my-6" />
                <div>
                  <h3 className="text-[20px] font-semibold text-[#1f2937] mb-2">How long does the training usually take?</h3>
                  <p>Duration depends on the level and experience, but apprenticeships have a minimum 12-month duration plus time for the end-point assessment.</p>
                </div>
                <hr className="border-gray-200 my-6" />
                <div>
                  <h3 className="text-[20px] font-semibold text-[#1f2937] mb-2">Does CIM provide the training directly?</h3>
                  <p>CIM is an End-Point Assessment Organisation and does not usually deliver apprenticeship training directly; approved training providers deliver the taught content.</p>
                </div>
                <hr className="border-gray-200 mt-6 mb-10" />
              </section>

              <section className="mb-10 space-y-6 text-[17px] text-[#4b5563] leading-relaxed">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-4">Tools, Platforms and Practical Skills Covered</h2>
                <p>Expect hands-on exposure to the common digital marketing tools used by professionals.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Analytics platforms</strong> for measuring performance and customer behaviour.</li>
                    <li><strong>Search and paid media tools</strong> that help set up and optimise campaigns.</li>
                    <li><strong>Content management and social platforms</strong> for planning, publishing and measuring content impact.</li>
                </ul>
                <p>The emphasis is on using tools to deliver measurable outcomes for campaigns, not just theory.</p>
              </section>

              <section className="mb-10 space-y-6 text-[17px] text-[#4b5563] leading-relaxed">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-4">Final Considerations</h2>
                <p>The CIM Digital Marketing Course is a flexible, employer-aligned option for marketers at many career stages.</p>
                <p>If you want <strong>practical skills with industry recognition</strong>, this pathway is worth exploring with a training provider or through an apprenticeship scheme.</p>
                <p>For guidance and local options, consult training providers and consider employer funding routes when planning to enroll.</p>
                <p>This guide was prepared for Gaulois and aims to give a balanced view to help you decide if the course fits your career or organisational training strategy.</p>
              </section>`;

// Replace from: <div className="space-y-6 text-[17px] text-[#4b5563] leading-relaxed mb-10">
// To: </article>
const startToken = '<div className="space-y-6 text-[17px] text-[#4b5563] leading-relaxed mb-10">';
const endToken = '</article>';

const startIndex = txt.indexOf(startToken);
const endIndex = txt.indexOf(endToken);

if (startIndex !== -1 && endIndex !== -1) {
  const newTxt = txt.substring(0, startIndex) + newContent + '\n            ' + txt.substring(endIndex);
  fs.writeFileSync(path, newTxt, 'utf8');
  console.log("Successfully replaced!");
} else {
  console.log("Tokens not found.");
}
