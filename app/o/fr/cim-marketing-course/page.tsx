import Image from 'next/image';
import { Metadata } from 'next';
import GoogleAd from '../../../../components/GoogleAd';
import ClickTracker from '../../../../components/ClickTracker';
import TrackedCTALink from '../../../../components/TrackedCTALink';

export const metadata: Metadata = {
  title: 'Cours de Marketing en Ligne CIM : Le Guide Complet',
  description: 'Le Guide Complet du Cours de Marketing en Ligne CIM - Structure du Cours, Apprentissages, Coûts et Résultats.',
};

export default function CIMMarketingCourseFullGuidePageFR() {
  return (
    <div className="bg-[#f8f9fa] min-h-screen py-8 sm:py-12">
      {/* Top Banner Ad - Outside Main Content */}
      <div className="max-w-[1020px] mx-auto px-4 mb-8">
        <div className="w-full flex flex-col items-center group has-[ins[data-ad-status='unfilled']]:hidden has-[ins[style*='display: none']]:hidden">
          <span className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider mb-2 text-center hidden group-has-[ins:not(:empty)]:block">Publicité</span>
          <GoogleAd adSlot="6679416038" adFormat="horizontal" fullWidthResponsive="true" className="w-full text-center" />
        </div>
      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          
          {/* Main Content Column */}
          <main className="w-full max-w-[830px] bg-white rounded-xl shadow-sm border border-[#eaeaea] overflow-hidden text-gray-800 font-sans p-6 sm:p-10">
            <article>
              <ClickTracker locale="fr" prelendSlug="cim-marketing-course" eventType="prelend_view" />
              <header className="mb-6">
                <h1 className="text-[32px] sm:text-[40px] font-bold text-[#1f2937] leading-tight mb-3 tracking-tight">
                  Cours de Marketing en Ligne CIM : Le Guide Complet pour Obtenir sa Certification
                </h1>
                <div className="flex flex-wrap items-center text-[#6b7280] text-[15px] gap-2">
                  <span>22/10/2026</span>
                  <span className="text-gray-400">•</span>
                  <span>Équipe Éditoriale Nice Advice</span>
                </div>
              </header>

              <figure className="mb-8">
                <Image
                  src="/assets/img/cim-marketing-certification-course.png"
                  alt="Structure du Cours de Marketing en Ligne CIM"
                  width={800}
                  height={450}
                  className="w-full h-auto rounded-xl object-cover"
                  priority
                />
              </figure>

              {/* Mid-Content Ad Slot 1 (Below Image) */}
              <div className="w-full flex flex-col items-center group has-[ins[data-ad-status='unfilled']]:hidden has-[ins[style*='display: none']]:hidden mb-10">
                <span className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider mb-2 text-center hidden group-has-[ins:not(:empty)]:block">Publicité</span>
                <GoogleAd adSlot="6679416038" adFormat="auto" fullWidthResponsive="true" className="w-full text-center" />
              </div>

              <div className="space-y-6 text-[17px] text-[#4b5563] leading-relaxed mb-10">
                <p>Cet aperçu complet explore ce que le <strong>Cours de Marketing Numérique CIM</strong> offre et comment il peut accélérer votre croissance professionnelle dans l'industrie du marketing.</p>
                <p>Nous analysons la structure du programme, les méthodes de notation, les options de financement et les compétences pratiques que vous acquerrez.</p>
                <p>Chaque section est dédiée à un sujet distinct, vous permettant de trouver facilement les détails spécifiques dont vous avez besoin.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Le public cible du programme</strong> et les trajectoires professionnelles courantes qu'il permet de débloquer.</li>
                  <li><strong>Le format du programme et les méthodes d'enseignement</strong>, couvrant les modules individuels et les examens.</li>
                  <li><strong>Aides financières, parcours d'apprentissage et résultats tangibles</strong> pour vous aider à déterminer si cela correspond à votre trajectoire professionnelle, en entreprise ou personnelle.</li>
                </ul>
                <p>Poursuivez votre lecture pour obtenir une perspective claire et exploitable sur le Cours de Marketing Numérique CIM et sur la manière de naviguer dans l'inscription ou de l'intégrer dans une structure d'apprentissage.</p>
              </div>

              <section className="mb-10 space-y-6 text-[17px] text-[#4b5563] leading-relaxed">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-5">Répartition du Programme & Modules Fondamentaux</h2>
                <p>Le cadre de Marketing Numérique CIM est divisé en modules distincts, méticuleusement structurés pour développer les fondamentaux du marketing aux côtés de techniques numériques avancées.</p>
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Principes Fondamentaux du Marketing</strong> : analyser les publics cibles et optimiser le mix marketing.</li>
                  <li><strong>Campagnes Omnicanales</strong> : se concentrer sur la stratégie, le déploiement et le suivi des performances des campagnes.</li>
                  <li><strong>Gestion de Contenu</strong> : détailler la création numérique, la distribution et la gouvernance de la marque.</li>
                  <li><strong>Moteurs de Recherche & Publicité Payante</strong> : couvrir des tactiques concrètes pour les campagnes payantes ainsi que pour la visibilité organique.</li>
                  <li><strong>Données & Analytique Commerciale</strong> : dédiées au suivi du ROI marketing et à l'ajustement des indicateurs de performance.</li>
                </ul>
                <p>Bien qu'ils soient généralement suivis de manière séquentielle, ces modules peuvent fréquemment être personnalisés par les partenaires éducatifs pour mieux s'aligner sur des exigences professionnelles spécifiques et des expériences passées.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-6">Principaux Avantages de la Certification en Marketing Numérique CIM</h2>
                <p className="text-[17px] text-[#4b5563] mb-6">S'inscrire à ce programme offre à la fois des connaissances tactiques exploitables et une validation professionnelle hautement respectée.</p>
                <div className="flex flex-col gap-8 mb-8">
                  <FeatureItem 
                    icon={<BadgeIcon />}
                    title="Accréditation Mondialement Reconnue"
                    description={<><strong>Terminer le cursus CIM vous confère un certificat officiel</strong> que les recruteurs et les entreprises apprécient grandement lors des embauches et des évaluations de performance.</>}
                  />
                  <FeatureItem 
                    icon={<BriefcaseIcon />}
                    title="Formation Actionnable et Axée sur la Carrière"
                    description={<><strong>Les cours privilégient fortement les travaux tangibles</strong> comme la planification média, l'évaluation des données et l'optimisation du taux de conversion, qui se traduisent directement dans votre flux de travail quotidien.</>}
                  />
                  <FeatureItem 
                    icon={<LaptopIcon />}
                    title="Formats d'Étude Adaptables"
                    description={<><strong>De nombreuses académies certifiées offrent un apprentissage à distance, en présentiel ou hybride</strong>, donnant aux professionnels très occupés la flexibilité de perfectionner leurs compétences tout en travaillant à temps plein.</>}
                  />
                  <FeatureItem 
                    icon={<UsersIcon />}
                    title="Intégration dans les Apprentissages en Entreprise"
                    description={<><strong>Ce programme peut être parfaitement intégré dans les systèmes d'apprentissage en entreprise</strong>, avec le CIM agissant comme évaluateur officiel de fin de parcours pour les apprentis en marketing.</>}
                  />
                </div>
                <div className="mb-10">
                   <CTAButton text="Visitez le Site Web Officiel" />
                </div>
              </section>

              <section className="mb-10 space-y-6 text-[17px] text-[#4b5563] leading-relaxed">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-4">Tirer Parti des Apprentissages et du Rôle du CIM</h2>
                <p>Le CIM collabore directement avec les entreprises et les instituts d'enseignement pour s'assurer que leur programme correspond aux normes d'apprentissage nationales.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Le CIM fonctionne comme un organisme agréé d'évaluation de fin de parcours</strong>, les autorisant à mener les évaluations finales pour les apprentis inscrits.</li>
                  <li><strong>Les certifications de modules formels peuvent être intégrées</strong> dans un parcours d'apprentissage, à condition que l'employeur et l'organisme de formation se coordonnent en ce sens.</li>
                  <li><strong>Les candidats demeurent employés à temps plein et salariés</strong>, combinant une formation pratique sur le lieu de travail avec des heures d'étude académique en dehors de l'entreprise.</li>
                </ul>
                <p>Si vous avez l'intention d'utiliser les budgets d'apprentissage de votre employeur, consultez votre prestataire de formation concernant les possibilités d'intégration afin qu'il puisse aligner correctement le programme.</p>
              </section>

              <section className="mb-10 space-y-6 text-[17px] text-[#4b5563] leading-relaxed">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-4">Candidats Idéaux pour la Formation</h2>
                <p>Ce programme est conçu pour accueillir des apprenants de tous horizons, allant du personnel junior aux directeurs de marketing chevronnés.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Jeunes diplômés et personnes en réorientation professionnelle</strong> recherchant une introduction formellement structurée au marketing numérique moderne.</li>
                  <li><strong>Associés et cadres en marketing</strong> souhaitant acquérir une expertise pratique sur les stratégies omnicanales et l'analytique des données.</li>
                  <li><strong>Propriétaires d'entreprises et services RH</strong> désirant un cadre éducatif cohérent et évolutif pour leur personnel via les apprentissages.</li>
                  <li><strong>Praticiens expérimentés</strong> espérant valider leurs connaissances pratiques ou obtenir des dispenses accélérées pour des diplômes CIM avancés.</li>
                </ul>
                <p>Puisque le programme se compose de modules indépendants, il peut facilement s'adapter aux objectifs de perfectionnement individuels ainsi qu'aux plans de développement d'entreprise à grande échelle.</p>
              </section>

              {/* Mid-Content AdSense Slot 2 */}
              <div className="w-full flex flex-col items-center group has-[ins[data-ad-status='unfilled']]:hidden has-[ins[style*='display: none']]:hidden mb-10">
                <span className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider mb-2 text-center hidden group-has-[ins:not(:empty)]:block">Publicité / Partenaire</span>
                <GoogleAd adSlot="6679416038" adFormat="auto" fullWidthResponsive="true" className="w-full text-center" />
              </div>

              <section className="mb-10 space-y-6 text-[17px] text-[#4b5563] leading-relaxed">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-4">Méthodologies d'Enseignement et Notation</h2>
                <p>Les mécanismes exacts de prestation et de notation sont déterminés par des centres d'enseignement accrédités opérant dans le cadre des directives d'apprentissage.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Les formats d'apprentissage</strong> incluent généralement des webinaires interactifs, des modules à la demande et des séminaires traditionnels en présentiel.</li>
                    <li><strong>La notation</strong> intègre des portefeuilles de projets du monde réel, des travaux appliqués et des évaluations de fin de parcours obligatoires pour ceux en voie d'apprentissage.</li>
                    <li><strong>Le calendrier</strong> s'adapte en fonction des connaissances préalables et du rythme choisi, bien que les apprentissages enregistrés imposent une norme minimale de 12 mois.</li>
                </ul>
                <p>Assurez-vous de vérifier la structure de notation avec l'académie de votre choix et renseignez-vous pour savoir si des exemptions liées à des apprentissages antérieurs pourraient raccourcir votre temps d'étude.</p>
              </section>

              <section className="mb-12">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-4">Avantages & Inconvénients</h2>
                <p className="text-[17px] text-[#4b5563] mb-8">L'évaluation des avantages ainsi que des éventuels inconvénients vous aidera à déterminer si cette qualification est faite pour vous.</p>
                
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Positive Points */}
                  <div className="flex-1 bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl p-6 shadow-sm">
                    <h3 className="text-[20px] font-bold text-[#166534] mb-5">Avantages Principaux</h3>
                    <ul className="space-y-4">
                      <li className="flex gap-3 text-[#14532d] border-b border-[#bbf7d0] pb-4 last:border-0 last:pb-0">
                        <svg className="w-6 h-6 shrink-0 mt-0.5 text-[#16a34a]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <div>
                            <strong className="block mb-1 text-[16px]">Apprentissage hautement appliqué</strong>
                            <p className="text-[15px] opacity-90 leading-relaxed">Concentration intense sur les techniques et les livrables que vous utiliserez régulièrement au travail, en évitant la théorie abstraite.</p>
                        </div>
                      </li>
                      <li className="flex gap-3 text-[#14532d] border-b border-[#bbf7d0] pb-4 last:border-0 last:pb-0">
                        <svg className="w-6 h-6 shrink-0 mt-0.5 text-[#16a34a]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <div>
                            <strong className="block mb-1 text-[16px]">Renommée prestigieuse dans l'industrie</strong>
                            <p className="text-[15px] opacity-90 leading-relaxed">Les certifications CIM ont un poids immense auprès des employeurs britanniques et internationaux, facilitant les transitions de carrière.</p>
                        </div>
                      </li>
                      <li className="flex gap-3 text-[#14532d] border-b border-[#bbf7d0] pb-4 last:border-0 last:pb-0">
                        <svg className="w-6 h-6 shrink-0 mt-0.5 text-[#16a34a]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <div>
                            <strong className="block mb-1 text-[16px]">Synergie de financement d'entreprise</strong>
                            <p className="text-[15px] opacity-90 leading-relaxed">Peut être intégré de manière fluide aux budgets de formation sponsorisés par l'entreprise, atténuant les obstacles financiers.</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Negative Points */}
                  <div className="flex-1 bg-[#fef2f2] border border-[#fecaca] rounded-xl p-6 shadow-sm">
                    <h3 className="text-[20px] font-bold text-[#991b1b] mb-5">Inconvénients Potentiels</h3>
                    <ul className="space-y-4">
                      <li className="flex gap-3 text-[#7f1d1d] border-b border-[#fecaca] pb-4 last:border-0 last:pb-0">
                        <svg className="w-6 h-6 shrink-0 mt-0.5 text-[#dc2626]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        <div>
                            <strong className="block mb-1 text-[16px]">Pas une solution tout-en-un</strong>
                            <p className="text-[15px] opacity-90 leading-relaxed">Un apprentissage spécialisé seul pourrait ne pas vous accorder un diplôme CIM complet sans la validation de modules externes.</p>
                        </div>
                      </li>
                      <li className="flex gap-3 text-[#7f1d1d] border-b border-[#fecaca] pb-4 last:border-0 last:pb-0">
                        <svg className="w-6 h-6 shrink-0 mt-0.5 text-[#dc2626]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        <div>
                            <strong className="block mb-1 text-[16px]">Qualité inconstante des académies</strong>
                            <p className="text-[15px] opacity-90 leading-relaxed">Le calibre du tutorat dépend fortement du partenaire éducatif de votre choix, rendant une recherche indépendante vitale.</p>
                        </div>
                      </li>
                      <li className="flex gap-3 text-[#7f1d1d] border-b border-[#fecaca] pb-4 last:border-0 last:pb-0">
                        <svg className="w-6 h-6 shrink-0 mt-0.5 text-[#dc2626]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        <div>
                            <strong className="block mb-1 text-[16px]">Exigences d'emploi du temps</strong>
                            <p className="text-[15px] opacity-90 leading-relaxed">Concilier un emploi à temps plein avec des études nécessite une gestion du temps irréprochable et la coopération de l'employeur.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-10 space-y-6 text-[17px] text-[#4b5563] leading-relaxed">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-4">Structure Tarifaire, Subventions et Soutien des Entreprises</h2>
                <p>L'investissement financier total dépend grandement de votre modèle d'apprentissage, de votre niveau d'ancienneté et de votre éligibilité aux programmes d'entreprise.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Les fonds d'apprentissage en entreprise absorbent souvent la totalité du coût</strong> pour les équipes admissibles par le biais de co-investissements de l'État.</li>
                  <li><strong>Les apprenants ne paient généralement rien de leur poche</strong> lorsqu'ils sont parrainés, tandis que les employeurs facilitent également les heures d'étude.</li>
                  <li><strong>Les candidats indépendants et autofinancés</strong> font face à des frais de scolarité variables selon l'académie, qui divisera généralement les coûts entre frais d'examen et droits d'inscription.</li>
                </ul>
                <p>Demandez toujours un détail complet des frais de scolarité avant de vous inscrire et explorez si votre employeur actuel dispose de budgets de formation inexploités.</p>
              </section>

              <section className="mb-10 space-y-6 text-[17px] text-[#4b5563] leading-relaxed">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-4">Pourquoi la Certification en Marketing Numérique CIM est Hautement Notée</h2>
                <p>Nous approuvons ce parcours éducatif car il fusionne parfaitement les capacités tactiques quotidiennes avec une crédibilité industrielle profonde.</p>
                <p>Cette certification est uniquement adaptée aux besoins immédiats des entreprises modernes, ce qui la rend très efficace pour combler les lacunes en compétences.</p>
                <p>D'ailleurs, les diplômés citent systématiquement l'obtention de ce titre comme un catalyseur principal aux augmentations salariales et de mobilité ascendante.</p>
                <ol className="list-decimal pl-6 space-y-2">
                    <li><strong>Respect du Marché</strong> — Le nom CIM est synonyme d'excellence et demeure largement sollicité par les agences de recrutement.</li>
                    <li><strong>Approche axée sur les tâches</strong> — Vous apprenez en faisant, en travaillant activement sur des livrables tels que le suivi des publicités.</li>
                    <li><strong>Accessibilité financière via les employeurs</strong> — Les entreprises peuvent utiliser les incitations gouvernementales pour financer votre parcours.</li>
                    <li><strong>Grande personnalisation</strong> — Les tuteurs certifiés peuvent adapter le programme pour parer précisément aux exigences de l'entreprise.</li>
                </ol>
              </section>

              <section className="mb-10 space-y-6 text-[17px] text-[#4b5563] leading-relaxed">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-4">Évolution Professionnelle Après le Cours</h2>
                <p>L'obtention d'une accréditation CIM vous positionne pour un avancement accéléré dans divers rôles numériques.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Postes juniors</strong> tels que créateur de contenu, responsable des réseaux sociaux ou assistant marketing.</li>
                    <li><strong>Rôles spécialisés</strong> englobant stratège SEO, optimiseur du taux de conversion (CRO) ou gestionnaire de compte numérique.</li>
                    <li><strong>Niveaux de direction</strong> allant de chef du marketing numérique à directeur général de campagne, avec l'expérience.</li>
                </ul>
                <p>D'innombrables anciens élèves ont fait état d'un poids considérable lors de négociations salariales, grâce à l'accomplissement de cette étape reconnue.</p>
              </section>

              <section className="mb-10 space-y-6 text-[17px] text-[#4b5563] leading-relaxed">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-4">Processus d'Inscription et d'Enregistrement</h2>
                <p>Commencez par déterminer si vous participerez par l'entremise d'un apprentissage parrainé par votre société ou bien de façon indépendante.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Entamez une discussion avec votre service RH pour évaluer les programmes de perfectionnement financés par l'État.</li>
                    <li>Contactez les centres d'étude locaux pour évaluer leurs horaires de cours, leurs taux de réussite et le coût total de la formation.</li>
                    <li>Contactez directement l'institution CIM pour obtenir des conseils explicites concernant les partenaires de formation agréés.</li>
                </ul>
                <div className="pt-4 mb-4">
                   <CTAButton text="Visitez le Site Web Officiel" />
                </div>
              </section>

              <section className="mb-10 space-y-6 text-[17px] text-[#4b5563] leading-relaxed">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-4">Se Préparer pour ses Études</h2>
                <p>Une préparation adéquate permet d'assurer que vos efforts académiques procurent le meilleur retour sur investissement possible.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Définissez des jalons précis</strong> : dressez la carte exacte des canaux que vous comptez maîtriser pour faire avancer votre carrière.</li>
                    <li><strong>Bloquez des périodes d'étude</strong> et officialisez un accord avec la direction sur votre temps alloué à la formation.</li>
                    <li><strong>Rassemblez des études de cas</strong>, ainsi que des statistiques ou indicateurs à intégrer dans vos portefeuilles de cours.</li>
                </ul>
                <p>Exploiter les défis internes à l'entreprise comme devoirs allège considérablement la charge d'étude et permet d'appliquer ses connaissances instantanément.</p>
              </section>

              <section className="mb-10 space-y-4 text-[17px] text-[#4b5563] leading-relaxed">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-6">Foire aux Questions (FAQ)</h2>
                <hr className="border-gray-200 mb-6" />
                <div>
                  <h3 className="text-[20px] font-semibold text-[#1f2937] mb-2">Est-il possible d'obtenir un diplôme CIM global exclusivement grâce à un apprentissage ?</h3>
                  <p>Dans la plupart des cas, un apprentissage spécialisé fournira un certificat modulaire ; pour l'obtention du diplôme global, il pourra vous falloir suivre des cours complémentaires en dehors du cadre de votre apprentissage initial.</p>
                </div>
                <hr className="border-gray-200 my-6" />
                <div>
                  <h3 className="text-[20px] font-semibold text-[#1f2937] mb-2">Les apprentis doivent-ils acquitter des frais de scolarité ?</h3>
                  <p>Dans les structures d'apprentissage conventionnelles, l'apprenant est complètement exempté des frais. Le financement provient d'initiatives de soutien étatiques ou de taxes perçues auprès des entreprises.</p>
                </div>
                <hr className="border-gray-200 my-6" />
                <div>
                  <h3 className="text-[20px] font-semibold text-[#1f2937] mb-2">Quel est le délai de rigueur pour achever la formation ?</h3>
                  <p>La cadence dépend de l'expérience de chacun, mais la règle stipule une période minimale obligatoire d'une durée d'un an avant toute évaluation formelle.</p>
                </div>
                <hr className="border-gray-200 my-6" />
                <div>
                  <h3 className="text-[20px] font-semibold text-[#1f2937] mb-2">L'organisation CIM elle-même fait-elle office de professeur en classe ?</h3>
                  <p>Non, l'agence CIM agit avant tout en tant qu'organisme de supervision et d'évaluation. L'enseignement est encadré par des universités affiliées ainsi que des pôles de formation spécifiques.</p>
                </div>
                <hr className="border-gray-200 mt-6 mb-10" />
              </section>

              <section className="mb-10 space-y-6 text-[17px] text-[#4b5563] leading-relaxed">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-4">Logiciels, Infrastructure & Techniques Appliquées</h2>
                <p>Les étudiants doivent anticiper une immersion approfondie dans les logiciels martech déployés par les agences de renommée mondiale.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Tableaux de bord d'activité</strong> élaborés pour quantifier la conversion et collecter d'autres profils démographiques.</li>
                    <li><strong>Environnements programmatiques</strong> calibrés dans le but de rapidement déployer, mesurer et adapter la croissance publicitaire.</li>
                    <li><strong>Suites analytiques sociales</strong> permettant d'unifier diverses communications et de programmer vos publications.</li>
                </ul>
                <p>Un des objectifs primordiaux reste d'apprendre à contrôler parfaitement cette panoplie d'instruments pour augmenter le seuil de rentabilité commerciale.</p>
              </section>

              <section className="mb-10 space-y-6 text-[17px] text-[#4b5563] leading-relaxed">
                <h2 className="text-[26px] font-bold text-[#1f2937] mb-4">Dernières Observations</h2>
                <p>Le programme des modules offerts au sein des leçons d'apprentissage CIM s'avère hautement fonctionnel afin de bâtir un bagage qualifié, que ce soit applicable autour de toutes carrières impliquant le marketing digital.</p>
                <p>Destinés prioritairement aux acteurs en quête d'<strong>aptitudes solides combinées à une crédibilité corporate sans faille</strong>, ces certificats méritent la plus grande attention, particulièrement via un financement d'entreprise.</p>
                <p>À partir d'ici nous vous recommandons fortement une discussion ouverte auprès des établissements adéquats afin de connaître les opportunités de prise en charge en entreprise.</p>
                <p>Cette évaluation neutre vous fut confectionnée dans le but final de conforter de potentiels étudiants vers une direction assurant plus sereinement vos plans de réussite quant à l'achèvement de vos objectifs pour cette formation.</p>
              </section>
            </article>
          </main>
        </div>
      </div>
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

function CTAButton({ text }: { text: string }) {
  return (
    <TrackedCTALink 
      href="https://www.cim.co.uk/learn-develop/qualifications/marketing-apprenticeships/"
      locale="fr"
      prelendSlug="cim-marketing-course"
      eventType="outbound_click"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-3 bg-[#269752] hover:bg-[#1f7e44] transition-colors text-white font-bold text-[17px] sm:text-[18px] py-[18px] px-6 rounded-md w-full uppercase tracking-wide shadow-sm"
    >
      {text}
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

function ArrowRightCircleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[26px] h-[26px]">
      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd" />
    </svg>
  );
}
