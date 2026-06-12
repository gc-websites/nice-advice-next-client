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

const LOCALE = 'es' as const;
const PRELEND_SLUG = 'digital-marketing';

export const metadata: Metadata = {
  title: 'Título en Marketing Digital en línea en SNHU: la guía completa',
  description:
    'Una guía completa para obtener un título acreditado en marketing digital en línea en Southern New Hampshire University: formato, colegiatura, transferencia de créditos, qué estudias, para quién es, pros y contras, y cómo inscribirte.',
  alternates: {
    canonical: 'https://nice-advice.info/es/o/digital-marketing',
  },
};

const SECTIONS = [
  { id: 'format', label: 'Formato y cómo funciona el aprendizaje en línea' },
  { id: 'benefits', label: 'Beneficios clave del programa' },
  { id: 'curriculum', label: 'Qué estudias: áreas principales' },
  { id: 'who-its-for', label: 'Para quién es' },
  { id: 'tuition', label: 'Colegiatura, ayuda y formas de pago' },
  { id: 'pros-cons', label: 'Pros y contras' },
  { id: 'tools', label: 'Habilidades y herramientas que desarrollas' },
  { id: 'why', label: 'Por qué lo recomendamos' },
  { id: 'programs', label: 'Programas de título destacados' },
  { id: 'enroll', label: 'Cómo inscribirte y empezar' },
  { id: 'maximize', label: 'Cómo aprovecharlo al máximo' },
  { id: 'faq', label: 'Preguntas frecuentes' },
  { id: 'limitations', label: 'Limitaciones a considerar' },
  { id: 'final', label: 'Reflexiones finales' },
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
        <TrackedAdSlot adUnit="na_o_top" locale={LOCALE} prelendSlug={PRELEND_SLUG} funnelStep="ad_view_o_top" />
      </div>

      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-8 lg:items-start">
          <Toc />

          <main className="w-full max-w-[830px] mx-auto lg:mx-0 bg-white dark:bg-additionalText rounded-xl shadow-sm border border-[#eaeaea] dark:border-white/10 overflow-hidden text-gray-800 dark:text-white p-6 sm:p-10">
            <article>
              <p className="text-[13px] text-additionalText dark:text-white/60 mb-2">
                Publicado el: <time dateTime="2026-06-04">4 de junio de 2026</time> • Equipo Editorial de Nice Advice
              </p>

              <h1 className="font-merriweather text-[30px] sm:text-[40px] font-bold text-mainText dark:text-white leading-tight mb-5 tracking-tight">
                Título en Marketing Digital en línea en SNHU: la guía completa
              </h1>

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

              <div className="space-y-5 text-[17px] text-[#4b5563] dark:text-white/80 leading-relaxed mb-8">
                <p>
                  Esta guía analiza de cerca cómo obtener un <strong>título en marketing digital en línea</strong> en
                  Southern New Hampshire University (SNHU): qué ofrece el programa, cómo funciona el estudio en línea y
                  cómo decidir si se ajusta a tus metas y a tu presupuesto.
                </p>

                {/* Ad — na_o_mid1 (after the first paragraph) */}
                <TrackedAdSlot adUnit="na_o_mid1" locale={LOCALE} prelendSlug={PRELEND_SLUG} funnelStep="ad_view_o_mid1" />

                <p>
                  Desglosamos el formato, qué estudias, la colegiatura y la ayuda, los pros y contras reales, y los
                  pasos exactos para inscribirte, para que puedas tomar una decisión informada y con confianza.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Universidad sin fines de lucro y acreditada</strong> con uno de los cuerpos estudiantiles en línea más grandes de EE. UU.</li>
                  <li><strong>Formato 100% en línea y flexible</strong>, sin horarios de clase fijos y con acceso a los cursos las 24 horas.</li>
                  <li><strong>Colegiatura accesible</strong> y la opción de transferir hasta 90 créditos hacia tu título.</li>
                </ul>
              </div>

              {/* Ad — na_o_mid2 (after the intro block) */}
              <TrackedAdSlot adUnit="na_o_mid2" locale={LOCALE} prelendSlug={PRELEND_SLUG} funnelStep="ad_view_o_mid2" />

              <Section id="format" title="Formato y cómo funciona el aprendizaje en línea">
                <p>
                  SNHU está hecha para el aprendizaje en línea. Los cursos son totalmente en línea, a tu ritmo, para que
                  puedas estudiar temprano en la mañana, de noche o los fines de semana sin pausar el trabajo ni las
                  responsabilidades familiares.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Las lecciones son <strong>a tu propio ritmo dentro de cada periodo</strong>, con metas semanales para mantenerte en marcha.</li>
                  <li>No hay <strong>horarios de clase fijos</strong>: entras y aprendes cuando mejor te convenga.</li>
                  <li>Varias <strong>fechas de inicio a lo largo del año</strong> significan que empiezas cuando estás listo.</li>
                  <li>Todo es accesible desde una <strong>computadora, tableta o teléfono</strong>, donde tengas conexión.</li>
                </ul>
                <p>Este formato es ideal para profesionales que trabajan y necesitan aprender de forma eficiente con una agenda ocupada.</p>
              </Section>

              <Section id="benefits" title="Beneficios clave del programa">
                <p className="mb-2">
                  Un título en línea en una universidad sin fines de lucro y acreditada reúne credibilidad, flexibilidad
                  y un costo accesible, una combinación difícil de igualar.
                </p>
                <div className="flex flex-col gap-7 mt-6">
                  <FeatureItem
                    icon={<BadgeIcon />}
                    title="Sin fines de lucro y acreditada, de confianza por generaciones"
                    description={<><strong>SNHU está acreditada por NECHE</strong>: una universidad sin fines de lucro que forma estudiantes desde 1932 y en línea desde 1995, así que tu título tiene un peso real ante los empleadores.</>}
                  />
                  <FeatureItem
                    icon={<LaptopIcon />}
                    title="100% en línea, sin horarios de clase fijos"
                    description={<><strong>Estudia totalmente en línea con acceso las 24 horas</strong> a tus cursos, aprendiendo a tu ritmo desde cualquier lugar.</>}
                  />
                  <FeatureItem
                    icon={<TagIcon />}
                    title="Entre las colegiaturas más bajas del país"
                    description={<><strong>Al ser sin fines de lucro, SNHU mantiene la colegiatura accesible</strong>, con algunas de las tarifas en línea más bajas del país.</>}
                  />
                  <FeatureItem
                    icon={<TransferIcon />}
                    title="Transfiere hasta 90 créditos"
                    description={<><strong>Trae los créditos que ya obtuviste</strong> con una evaluación gratuita y termina tu título más rápido y por menos.</>}
                  />
                  <FeatureItem
                    icon={<UsersIcon />}
                    title="Enfocada en tu carrera, con apoyo real"
                    description={<><strong>Asesores dedicados te guían desde el primer día</strong>, con un plan de estudios construido en torno a las habilidades prácticas que buscan los empleadores.</>}
                  />
                </div>
                <div className="mt-10">
                  <CTAButton text="Ver opciones de título" />
                </div>
              </Section>

              <Section id="curriculum" title="Qué estudias: áreas principales">
                <p>El plan de estudios combina los fundamentos del marketing con las habilidades digitales prácticas por las que las empresas contratan hoy.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Estrategia de marketing y comportamiento del consumidor</strong>: entender a las audiencias y el posicionamiento.</li>
                  <li><strong>SEO y marketing de contenidos</strong>: ganar visibilidad orgánica y construir autoridad.</li>
                  <li><strong>Medios pagados y publicidad en redes</strong>: planear, lanzar y optimizar campañas.</li>
                  <li><strong>Analítica y datos</strong>: medir el desempeño y tomar decisiones con métricas.</li>
                  <li><strong>Marca, email y automatización</strong>: nutrir a las audiencias y escalar lo que funciona.</li>
                </ul>
                <p>La combinación te permite desarrollar un conjunto de habilidades completo que puedes aplicar de inmediato en el trabajo o en tus propios proyectos.</p>
              </Section>

              <Section id="who-its-for" title="Para quién es">
                <p>El programa es adecuado para una amplia variedad de estudiantes que quieren entrar al marketing digital o crecer dentro de él.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Quienes cambian de carrera</strong> hacia un campo en rápido crecimiento y con alta demanda.</li>
                  <li><strong>Profesionales que trabajan</strong> y necesitan un horario flexible y totalmente en línea.</li>
                  <li><strong>Recién graduados y principiantes</strong> que quieren un camino estructurado y creíble.</li>
                  <li><strong>Emprendedores</strong> que quieren promocionar su propio negocio con confianza.</li>
                </ul>
                <p>No se requiere experiencia previa en marketing, y el formato se adapta a distintos niveles y metas.</p>
              </Section>

              <Section id="tuition" title="Colegiatura, ayuda y formas de pago">
                <p>Al ser sin fines de lucro, SNHU está diseñada para mantener un título en línea al alcance de más estudiantes.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Algunas de las colegiaturas en línea más bajas</strong> del país, con precios transparentes por crédito.</li>
                  <li><strong>Transfiere hasta 90 créditos</strong> para acortar tu camino y reducir el costo total.</li>
                  <li><strong>La ayuda financiera</strong> está disponible para quienes califiquen; muchos estudiantes la usan para financiar sus estudios.</li>
                  <li><strong>Las evaluaciones de transferencia gratuitas</strong> te ayudan a ver exactamente en qué punto estás antes de comprometerte.</li>
                </ul>
                <p>Confirma siempre la colegiatura y las opciones de ayuda vigentes para tu programa específico antes de inscribirte.</p>
              </Section>

              <Section id="pros-cons" title="Pros y contras">
                <p className="mb-2">Una mirada rápida y equilibrada para ayudarte a decidir si este camino es el adecuado para ti.</p>
                <div className="flex flex-col md:flex-row gap-6 mt-4">
                  <div className="flex-1 rounded-xl border border-main/30 bg-main/5 p-6">
                    <h3 className="text-[20px] font-bold text-main3 dark:text-main mb-5">Lo que nos gusta</h3>
                    <ul className="space-y-4">
                      <ProItem title="Acreditada y reconocida" text="La acreditación NECHE y una reputación sin fines de lucro le dan a la credencial un peso genuino." />
                      <ProItem title="Verdaderamente flexible" text="Sin horarios de clase fijos y con acceso las 24 horas, estudias en torno al trabajo y a tu vida." />
                      <ProItem title="Accesible y amigable con transferencias" text="La colegiatura en línea baja y hasta 90 créditos transferibles reducen tiempo y costo." />
                      <ProItem title="Enfocada en tu carrera y con apoyo" text="Habilidades prácticas y asesores que te guían de principio a fin." />
                    </ul>
                  </div>
                  <div className="flex-1 rounded-xl border border-red-200 dark:border-red-500/30 bg-red-50 dark:bg-red-950/20 p-6">
                    <h3 className="text-[20px] font-bold text-red-700 dark:text-red-300 mb-5">Que vale la pena considerar</h3>
                    <ul className="space-y-4">
                      <ConItem title="Requiere autodisciplina" text="El estudio en línea y a tu propio ritmo depende de tu constancia y de tu manejo del tiempo." />
                      <ConItem title="Menos networking presencial" text="Un formato totalmente en línea ofrece menos conexiones cara a cara que un campus." />
                      <ConItem title="El tiempo varía" text="Qué tan rápido terminas depende de los créditos transferidos y de tu ritmo semanal." />
                      <ConItem title="Necesita conexión estable" text="Gran parte de la experiencia asume un acceso a internet confiable." />
                    </ul>
                  </div>
                </div>
              </Section>

              <Section id="tools" title="Habilidades y herramientas que desarrollas">
                <p>El programa pone énfasis en habilidades prácticas y listas para el empleo, y en las herramientas que se usan en toda la industria.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Leer y actuar sobre los datos con <strong>plataformas de analítica</strong> como Google Analytics.</li>
                  <li>Planear y optimizar <strong>campañas pagadas</strong> en buscadores y redes sociales.</li>
                  <li>Construir estrategias de <strong>contenido y SEO</strong> que se acumulan con el tiempo.</li>
                  <li>Usar <strong>herramientas de automatización y asistidas por IA</strong> para escalar el trabajo de marketing.</li>
                </ul>
                <p>El enfoque se mantiene en aplicar las herramientas para lograr resultados reales, no solo en aprobar exámenes teóricos.</p>
              </Section>

              <Section id="why" title="Por qué lo recomendamos">
                <p>Destacamos este camino porque combina credibilidad, flexibilidad y valor como pocos programas lo hacen.</p>
                <p>El formato en línea se ajusta a vidas ocupadas, la colegiatura sin fines de lucro lo mantiene accesible, y la acreditación NECHE le da al título un peso duradero.</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Una credencial reconocida y acreditada que fortalece tu currículum.</li>
                  <li>Habilidades prácticas y enfocadas en tu carrera que puedes usar de inmediato.</li>
                  <li>Estudio en línea flexible que se adapta a tu horario.</li>
                  <li>Créditos transferibles y colegiatura baja que acortan el camino y el precio.</li>
                </ol>
                <p>Tras sopesar las opciones, consideramos que SNHU es una opción sólida para cualquiera que se tome en serio una carrera en marketing digital.</p>
              </Section>

              <Section id="programs" title="Programas de título destacados">
                <p>El catálogo abarca niveles de associate, licenciatura y maestría, para que ajustes el programa a tus metas.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Licenciatura en Marketing</strong> con enfoque en marketing digital para una base sólida.</li>
                  <li><strong>Certificados y concentraciones</strong> para una actualización de habilidades enfocada y más rápida.</li>
                  <li><strong>Opciones de maestría</strong> para quienes están listos para asumir roles de liderazgo.</li>
                </ul>
                <p>Elige el nivel que se ajuste a dónde estás ahora y a dónde quieres llegar después.</p>
              </Section>

              <Section id="enroll" title="Cómo inscribirte y empezar">
                <p>Empezar es sencillo y no hay cuota de solicitud para postularte.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Solicita información o postúlate en línea en unos minutos.</li>
                  <li>Envía una evaluación gratuita de créditos transferibles si ya tienes créditos universitarios.</li>
                  <li>Trabaja con un asesor de admisión y recibe una decisión de admisión en pocos días.</li>
                </ul>
                <div className="pt-5">
                  <CTAButton text="Visitar el sitio oficial" />
                </div>
              </Section>

              <Section id="maximize" title="Cómo aprovecharlo al máximo">
                <p>Para obtener el mayor rendimiento de tu tiempo, combina el estudio con la práctica desde el primer módulo.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Aplica cada lección a una campaña real o simulada sobre la marcha.</li>
                  <li>Crea un portafolio de trabajo que puedas mostrar a los empleadores.</li>
                  <li>Apóyate en los asesores y recursos siempre que te atores.</li>
                  <li>Mide los resultados y aprende de tus propios datos.</li>
                </ul>
                <p>El aprendizaje aplicado acelera tus habilidades y mejora tu empleabilidad.</p>
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
                        Preguntas frecuentes
                      </h2>
                    </div>
                    <div className="max-w-3xl mx-auto space-y-5">
                      <FaqItem n="Q1" q="¿SNHU está acreditada?">
                        Sí. SNHU está acreditada por la New England Commission of Higher Education (NECHE), un organismo
                        de acreditación regional reconocido.
                      </FaqItem>
                      <FaqItem n="Q2" q="¿Puedo transferir créditos que ya tengo?">
                        Sí: puedes transferir hasta 90 créditos hacia una licenciatura, con una evaluación gratuita para
                        ver exactamente qué aplica.
                      </FaqItem>
                      <FaqItem n="Q3" q="¿Cuánto cuesta?">
                        SNHU ofrece algunas de las colegiaturas en línea más bajas del país, con precio por crédito. Hay
                        ayuda financiera disponible para quienes califiquen; confirma las tarifas vigentes para tu programa.
                      </FaqItem>
                      <FaqItem n="Q4" q="¿Es realmente 100% en línea?">
                        Sí. Los cursos son totalmente en línea, sin horarios de clase fijos y con acceso las 24 horas, así
                        que estudias en tu propio horario.
                      </FaqItem>
                    </div>
                  </div>
                </div>
              </section>

              <Section id="limitations" title="Limitaciones a considerar">
                <p>Ningún programa es perfecto, y ayuda conocer las contrapartidas antes de inscribirte.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>El aprendizaje en línea y a tu propio ritmo premia la disciplina: los resultados dependen del tiempo que inviertas.</li>
                  <li>Un formato totalmente en línea implica menos conexiones presenciales que un campus tradicional.</li>
                  <li>Algunas metas muy especializadas pueden requerir formación adicional y enfocada más adelante.</li>
                </ul>
                <p>Conocer estos puntos te ayuda a planear un camino que se ajuste a tus metas y a tu estilo de aprendizaje.</p>
              </Section>

              <Section id="final" title="Reflexiones finales">
                <p>Un título en marketing digital en línea en SNHU es una opción sólida si quieres un camino flexible, accesible y acreditado hacia este campo.</p>
                <p>Es adecuado tanto para quienes cambian de carrera como para profesionales que trabajan y principiantes, y la combinación de colegiatura baja, créditos transferibles y apoyo real es difícil de superar.</p>
                <p>Desde <strong>Nice Advice</strong>, revisamos el formato, el valor y los resultados, y lo consideramos una opción sólida y creíble para construir una carrera en marketing.</p>
              </Section>

              {/* Author */}
              <section className="mt-12 p-6 rounded-2xl border border-[#e5e7eb] dark:border-white/10 flex flex-col items-center text-center gap-3">
                <div className="rounded-full bg-light dark:bg-white/10 w-24 h-24 grid place-items-center overflow-hidden ring-1 ring-black/5 border border-[#eaeaea] dark:border-white/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/assets/svg/tick.svg" alt="Nice Advice" width={56} height={56} className="w-14 h-14 object-contain" />
                </div>
                <h3 className="font-merriweather text-lg font-bold text-mainText dark:text-white">Equipo Editorial de Nice Advice</h3>
                <p className="text-additionalText dark:text-white/70 text-[15px] leading-relaxed max-w-xl">
                  Somos el equipo detrás de Nice Advice: redactores y especialistas que convierten temas complejos en
                  pasos claros y prácticos. Investigamos las opciones para que puedas tomar decisiones con confianza
                  sobre tu educación y tu carrera.
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
        Contenido
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
