import Image from 'next/image';
import { Metadata } from 'next';
import TrackedAdSlot from '@/components/TrackedAdSlot';
import EngagementTracker from '@/components/EngagementTracker';
import ClickTracker from '@/components/ClickTracker';
import TrackedCTALink from '@/components/TrackedCTALink';
import RobotGate from '@/components/RobotGate';
import CampaignPixel from '@/components/CampaignPixel';

// ---------------------------------------------------------------------------
// CTA destination — the offer (review) page. Incoming ?utm_* params are
// forwarded automatically (see TrackedCTALink), and the click is tracked.
// ---------------------------------------------------------------------------
const OFFER_URL = '/es/o/digital-marketing';

const LOCALE = 'es' as const;
const PRELEND_SLUG = 'digital-marketing';

export const metadata: Metadata = {
  title: 'Obtén un título acreditado en Marketing Digital en línea | SNHU',
  description:
    'Obtén un título en marketing digital 100% en línea y respetado en Southern New Hampshire University: una universidad sin fines de lucro con acreditación NECHE, una de las colegiaturas en línea más bajas del país, transferencia de hasta 90 créditos y sin horarios de clase fijos.',
  alternates: {
    canonical: 'https://nice-advice.info/es/v/digital-marketing',
  },
};

export default function DigitalMarketingPrelandPage() {
  return (
    <div className="bg-light dark:bg-mainText min-h-screen py-8 sm:py-12">
      {/* TikTok campaign pixel — loads the pixel (defaults it for tiktok sessions); the
          conversion fires on the first filled ad view (see TrackedAdSlot) */}
      <CampaignPixel />

      {/* fire prelander_view + persist utm params */}
      <ClickTracker locale={LOCALE} prelendSlug={PRELEND_SLUG} funnelStep="prelander_view" />

      {/* scroll depth + time on page → page_exit */}
      <EngagementTracker locale={LOCALE} prelendSlug={PRELEND_SLUG} />

      {/* human-check gate (captcha) shown on open */}
      <RobotGate locale={LOCALE} prelendSlug={PRELEND_SLUG} />

      <main className="w-full max-w-[830px] mx-auto bg-white dark:bg-additionalText rounded-xl shadow-sm overflow-hidden text-gray-800 dark:text-white p-6 sm:p-10 border border-[#eaeaea] dark:border-white/10">
        <article>
          <header className="mb-6">
            <h1 className="font-merriweather text-[30px] sm:text-[38px] font-bold text-mainText dark:text-white leading-tight mb-3 tracking-tight">
              Obtén un título acreditado en Marketing Digital en línea: listo cuando tú lo estés
            </h1>
            <div className="flex flex-wrap items-center text-additionalText dark:text-white/70 text-[15px] gap-2">
              <span>4 de junio de 2026</span>
              <span className="text-gray-400">•</span>
              <span>Equipo Editorial de Nice Advice</span>
            </div>
          </header>

          {/* Top ad — na_v_top — fires the TikTok conversion on first view */}
          <TrackedAdSlot adUnit="na_v_top" locale={LOCALE} prelendSlug={PRELEND_SLUG} conversion funnelStep="ad_view_v_top" />

          <figure className="mb-8">
            <Image
              src="/assets/img/escouu.png"
              alt="Título en marketing digital en línea: tu guía para dominar el marketing digital"
              width={1774}
              height={887}
              className="w-full h-auto rounded-xl object-cover"
              priority
              fetchPriority="high"
              sizes="(max-width: 830px) 100vw, 830px"
            />
          </figure>

          <p className="text-[17px] text-[#4b5563] dark:text-white/80 mb-8 leading-relaxed max-w-3xl">
            Southern New Hampshire University (SNHU) hace posible obtener un título 100% en
            línea y respetado en marketing digital, diseñado en torno a tu vida y no al revés.
            Como universidad sin fines de lucro acreditada por la New England Commission of
            Higher Education (NECHE), SNHU combina una de las colegiaturas en línea más bajas
            del país con las habilidades prácticas que buscan los empleadores. Sin horarios de
            clase fijos, acceso a tus cursos las 24 horas y un camino que puedes empezar cuando
            estés listo.
          </p>

          <div className="border border-[#e5e7eb] dark:border-white/10 rounded-xl p-6 sm:p-8 mb-10 bg-white dark:bg-transparent">
            <div className="flex flex-col gap-8">
              <FeatureItem
                icon={<BadgeIcon />}
                title="Sin fines de lucro y acreditada, de confianza por generaciones"
                description={
                  <>
                    <strong className="font-semibold text-gray-800 dark:text-white">
                      SNHU es una universidad sin fines de lucro acreditada por NECHE
                    </strong>{' '}
                    : forma estudiantes desde 1932 y en línea desde 1995, con más de 200,000
                    estudiantes. Tu título tiene un peso real ante los empleadores.
                  </>
                }
              />
              <FeatureItem
                icon={<LaptopIcon />}
                title="100% en línea, sin horarios de clase fijos"
                description={
                  <>
                    <strong className="font-semibold text-gray-800 dark:text-white">
                      Estudia totalmente en línea con acceso a tus cursos las 24 horas
                    </strong>
                    . No hay horarios de clase fijos, así que aprendes a tu ritmo, desde una
                    computadora o tu teléfono, donde estés.
                  </>
                }
              />
              <FeatureItem
                icon={<TagIcon />}
                title="Entre las colegiaturas más bajas del país"
                description={
                  <>
                    <strong className="font-semibold text-gray-800 dark:text-white">
                      Al ser sin fines de lucro, SNHU mantiene la colegiatura accesible
                    </strong>{' '}
                    , con algunas de las tarifas en línea más bajas del país, para que el costo
                    nunca se interponga entre tú y tu título.
                  </>
                }
              />
              <FeatureItem
                icon={<TransferIcon />}
                title="Transfiere hasta 90 créditos"
                description={
                  <>
                    <strong className="font-semibold text-gray-800 dark:text-white">
                      ¿Ya tienes créditos universitarios? Tráelos contigo
                    </strong>{' '}
                    : transfiere hasta 90 créditos con una evaluación gratuita y termina tu
                    título más rápido y por menos.
                  </>
                }
              />
              <FeatureItem
                icon={<UsersIcon />}
                title="Enfocada en tu carrera, con apoyo real"
                description={
                  <>
                    <strong className="font-semibold text-gray-800 dark:text-white">
                      Asesores de admisión dedicados te guían desde el primer día
                    </strong>{' '}
                    : con una decisión de admisión en pocos días y un plan de estudios
                    construido en torno a las habilidades prácticas que buscan los empleadores.
                  </>
                }
              />
            </div>
          </div>

          <div className="mb-10">
            <CTAButton />
          </div>

          <hr className="border-[#e5e7eb] dark:border-white/10 mb-10" />

          <section className="mb-10">
            <div className="flex items-center gap-4 mb-8">
              <ThumbsUpIcon />
              <h2 className="font-merriweather text-[26px] sm:text-[28px] font-bold text-mainText dark:text-white">
                Por qué los estudiantes eligen SNHU
              </h2>
            </div>

            <div className="flex flex-col gap-6 sm:pl-2">
              <CheckPoint
                title="Listo cuando tú lo estés"
                description="Varias fechas de inicio durante el año y un formato en línea flexible significan que empiezas cuando tu vida lo permite, no cuando lo dicta un semestre."
              />
              <CheckPoint
                title="Un título realmente reconocido"
                description="La acreditación regional de NECHE y una reputación sin fines de lucro le dan a tu credencial un peso genuino ante los empleadores."
              />
              <CheckPoint
                title="Termina más rápido, paga menos"
                description="Transfiere hasta 90 créditos y combínalos con una de las colegiaturas en línea más bajas del país para acortar tanto el camino como el precio."
              />
              <CheckPoint
                title="Habilidades que buscan los empleadores"
                description="Un plan de estudios enfocado en tu carrera y construido en torno al trabajo real de marketing, con asesores que te acompañan en todo el camino."
              />
            </div>
          </section>

          <div className="mb-10">
            <CTAButton />
          </div>

          {/* Author / about */}
          <section className="mt-2 p-6 rounded-2xl border border-[#e5e7eb] dark:border-white/10 flex flex-col items-center text-center gap-3">
            <div className="rounded-full bg-light dark:bg-white/10 w-24 h-24 grid place-items-center overflow-hidden ring-1 ring-black/5 border border-[#eaeaea] dark:border-white/10">
              <Image
                src="/assets/svg/tick.svg"
                alt="Nice Advice"
                width={56}
                height={56}
                className="w-14 h-14 object-contain"
              />
            </div>
            <h3 className="font-merriweather text-lg font-bold text-mainText dark:text-white">
              Equipo Editorial de Nice Advice
            </h3>
            <p className="text-additionalText dark:text-white/70 text-[15px] leading-relaxed max-w-xl">
              Somos el equipo detrás de Nice Advice: redactores y especialistas que convierten
              temas complejos en pasos claros y prácticos. Investigamos las opciones para que
              puedas tomar decisiones con confianza sobre tu educación y tu carrera.
            </p>
          </section>
        </article>
      </main>
    </div>
  );
}

// --------------------------------------------------------------------------
// Subcomponents
// --------------------------------------------------------------------------

function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4 sm:gap-5">
      <div className="flex-shrink-0 mt-1">{icon}</div>
      <div>
        <h3 className="text-[17px] sm:text-[18px] font-bold text-mainText dark:text-white mb-1.5">
          {title}
        </h3>
        <p className="text-[#5c6778] dark:text-white/75 leading-relaxed text-[15px] sm:text-[16px]">
          {description}
        </p>
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
        <h3 className="text-[17px] font-bold text-mainText dark:text-white mb-1">{title}</h3>
        <p className="text-[#5c6778] dark:text-white/75 leading-relaxed text-[15px] sm:text-[16px]">
          {description}
        </p>
      </div>
    </div>
  );
}

function CTAButton() {
  return (
    <TrackedCTALink
      href={OFFER_URL}
      locale={LOCALE}
      prelendSlug={PRELEND_SLUG}
      className="group/cta relative isolate flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-br from-main to-main3 px-8 py-8 sm:py-10 text-center text-2xl sm:text-[28px] font-extrabold uppercase tracking-wide text-white shadow-[0_18px_42px_-12px_rgba(3,145,133,0.55)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.015] hover:shadow-[0_30px_70px_-14px_rgba(3,145,133,0.75)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-main/40 active:translate-y-0 active:scale-100"
    >
      {/* gradient cross-fade on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-main2 to-main3 opacity-0 transition-opacity duration-500 ease-out group-hover/cta:opacity-100"
      />
      {/* sweeping shine */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-[45%] -translate-x-[170%] -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-[900ms] ease-out group-hover/cta:translate-x-[320%]"
      />
      <span className="relative z-10 inline-flex items-center gap-3">
        Comenzar ahora
        <ArrowRightCircleIcon />
      </span>
    </TrackedCTALink>
  );
}

// --------------------------------------------------------------------------
// Icons (teal, brand color via text-main)
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

function UsersIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" className="w-[32px] h-[32px] text-main">
      <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h66c6.2-47.4 34.8-87.3 75.1-109.4z" />
    </svg>
  );
}

function ThumbsUpIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-mainText dark:text-white">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-[22px] h-[22px] text-main2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
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

function ArrowRightCircleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 sm:w-9 sm:h-9 transition-transform duration-300 ease-out group-hover/cta:translate-x-1.5">
      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd" />
    </svg>
  );
}
