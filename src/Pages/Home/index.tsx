import { Aree } from '../../Components/Aree';
import BannerSportello from '../../Components/BannerSportello';
import { HeroSection } from '../../Components/HeroSection';
import ClimateStories from '../../Components/StoriesClimate';
import { DecorBlobs, FadeIn, Lead, Section, SectionHeader } from '../../Components/Ui';
import { STORIES } from '../../data/stories';

export default function HomePage() {
  return (
    <>
      <HeroSection title="Il clima, la nostra casa." size="lg" typing />

      <Section size="sm" decor={<DecorBlobs />} containerClassName="text-center">
        <FadeIn>
          <img
            src="/gozone_logocompleto.svg"
            alt="Go-Zone"
            width={320}
            height={92}
            className="mx-auto mb-10 w-56 sm:w-72 md:w-80"
          />
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-display text-3xl leading-tight font-semibold text-brand-900 sm:text-4xl md:text-5xl">
            Goldilocks Zone <br className="hidden sm:block" />
            Association for Health and Social Climate Actions
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <Lead className="mt-8">
            Go-Zone è un'<strong>associazione di Promozione Sociale</strong> volta a promuovere esperienze di{' '}
            <strong>cittadinanza attiva</strong> nel campo del Climate Change, attraverso strategie ed azioni di cura
            delle persone, della comunità e progetti di sostenibilità sociale ed ambientale.
          </Lead>
        </FadeIn>
      </Section>

      <Section>
        <FadeIn>
          <SectionHeader
            eyebrow="Cosa facciamo"
            title="Esplora le nostre Zone"
            intro="Ogni zona rappresenta un’area di intervento per sviluppare comunità e legami"
          />
        </FadeIn>
        <FadeIn delay={0.15}>
          <Aree />
        </FadeIn>
      </Section>

      <BannerSportello />

      <Section>
        <FadeIn>
          <SectionHeader eyebrow="Rimani sul pezzo" title="Storie di Clima" />
        </FadeIn>
        <FadeIn delay={0.15}>
          <ClimateStories stories={STORIES} ctaTo="/storie-di-clima" />
        </FadeIn>
      </Section>
    </>
  );
}
