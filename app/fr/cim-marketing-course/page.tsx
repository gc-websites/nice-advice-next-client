import Image from 'next/image';
import { Metadata } from 'next';
import GoogleAd from '../../../components/GoogleAd';
import ClickTracker from '../../../components/ClickTracker';
import TrackedCTALink from '../../../components/TrackedCTALink';

export const metadata: Metadata = {
  title: 'Qualification en Marketing Numérique CIM',
  description: 'Le programme de capacités en Marketing Numérique CIM propose des stratégies pratiques associées à une accréditation internationalement respectée pour accélérer votre croissance professionnelle.',
};

export default function CIMMarketingCoursePageFR() {
  return (
    <div className="bg-[#fcfcfc] min-h-screen py-8 sm:py-12">
      <main className="w-full max-w-[830px] mx-auto bg-white rounded-xl shadow-sm overflow-hidden text-gray-800 font-sans p-6 sm:p-10 border border-[#eaeaea]">
        <article>
          <ClickTracker locale="fr" prelendSlug="cim-marketing-course" />
          <header className="mb-6">
            <h1 className="text-[32px] sm:text-[38px] font-bold text-[#1f2937] leading-tight mb-3 tracking-tight">
              Qualification en Marketing Numérique CIM
            </h1>
            <div className="flex flex-wrap items-center text-[#6b7280] text-[15px] gap-2">
              <span>10/03/2026</span>
              <span className="text-gray-400">•</span>
              <span>Équipe Éditoriale Nice Advice</span>
            </div>
          </header>

          <div className="w-full flex flex-col items-center group has-[ins[data-ad-status='unfilled']]:hidden has-[ins[style*='display: none']]:hidden">
            <span className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider mb-2 text-center hidden group-has-[ins:not(:empty)]:block">Publicité</span>
            <GoogleAd adSlot="6679416038" adFormat="auto" fullWidthResponsive="true" className="w-full mb-8 text-center" />
          </div>

          <figure className="mb-8">
            <Image
              src="/assets/img/cim-marketing-certification-course.png"
              alt="Cours de Marketing en Ligne CIM"
              width={800}
              height={450}
              className="w-full h-auto rounded-xl object-cover"
              priority
            />
          </figure>

          <p className="text-[17px] text-[#4b5563] mb-8 leading-relaxed max-w-3xl">
            Le programme de capacités en Marketing Numérique CIM propose des stratégies pratiques et axées sur la carrière, associées à une accréditation internationalement respectée, conçues pour accélérer rapidement votre trajectoire professionnelle.
          </p>

          <div className="border border-[#e5e7eb] rounded-xl p-6 sm:p-8 mb-10 bg-white">
            <div className="flex flex-col gap-8">
              <FeatureItem 
                icon={<BadgeIcon />}
                title="Accréditation mondialement respectée"
                description={<><strong className="font-semibold text-gray-800">Réussir le cursus CIM vous octroie un diplôme faisant autorité</strong> que les recruteurs privilégient fortement lors du processus d'embauche.</>}
              />
              <FeatureItem 
                icon={<BriefcaseIcon />}
                title="Formation axée sur l'action et les tâches"
                description={<><strong className="font-semibold text-gray-800">Le programme s'articule autour de défis empiriques</strong> tels que la structuration d'annonces, le suivi du ROI et la mise à l'échelle de l'entonnoir qui s'intègrent parfaitement dans votre charge de travail quotidienne.</>}
              />
              <FeatureItem 
                icon={<LaptopIcon />}
                title="Méthodologies d'étude polyvalentes"
                description={<><strong className="font-semibold text-gray-800">Des dizaines d'académies autorisées proposent des cours virtuels ou en présentiel</strong>, permettant aux employés à temps plein d'améliorer leurs compétences sans interrompre leur carrière.</>}
              />
              <FeatureItem 
                icon={<UsersIcon />}
                title="Alignement sur les apprentissages en entreprise"
                description={<><strong className="font-semibold text-gray-800">Ces parcours d'apprentissage peuvent constituer l'épine dorsale d'initiatives sponsorisées</strong>, soutenues par le CIM agissant en tant que jury d'examen final.</>}
              />
            </div>
          </div>

          <div className="mb-10">
              <CTAButton />
          </div>

          <hr className="border-[#e5e7eb] mb-10" />

          <section className="mb-10">
            <div className="flex items-center gap-4 mb-8">
              <ThumbsUpIcon />
              <h2 className="text-[28px] font-bold text-[#1f2937]">Avantages Clés</h2>
            </div>

            <div className="flex flex-col gap-6 sm:pl-2">
              <CheckPoint 
                title="Programme appliqué"
                description="Forte dépendance à l'exécution et aux techniques que vous déploierez au quotidien, évitant les concepts purement abstraits."
              />
              <CheckPoint 
                title="Validation en entreprise"
                description="Un CV soutenu par le CIM est profondément vénéré dans la sphère de l'entreprise mondiale et accélère fréquemment les promotions internes."
              />
              <CheckPoint 
                title="Viabilité du parrainage"
                description="S'intègre de manière fluide dans les canaux de formation financés par l'État, éliminant les obstacles financiers."
              />
            </div>
          </section>

          <div className="mb-4">
              <CTAButton />
          </div>

        </article>
      </main>
    </div>
  );
}

// Subcomponents

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

function CheckPoint({ title, description }: { title: string, description: string }) {
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

function CTAButton() {
  return (
    <TrackedCTALink 
      href="/o/fr/cim-marketing-course"
      locale="fr"
      prelendSlug="cim-marketing-course"
      className="flex items-center justify-center gap-3 bg-[#269752] hover:bg-[#1f7e44] transition-colors text-white font-bold text-[17px] sm:text-[18px] py-[18px] px-6 rounded-md w-full uppercase tracking-wide shadow-sm"
    >
      Je veux voir plus de détails
      <ArrowRightCircleIcon />
    </TrackedCTALink>
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
