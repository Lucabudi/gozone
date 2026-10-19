import { Globe, Sparkles, Thermometer, Waves, Wind } from 'lucide-react';
import { HeroSection } from '../../../Components/HeroSection';
import {
  Badge,
  Card,
  FadeIn,
  FeatureCard,
  Lead,
  Prose,
  Section,
  SectionHeader,
  Subheading,
} from '../../../Components/Ui';

const missions = [
  {
    icon: <Globe className="h-6 w-6" />,
    text: 'Comprendere come il cambiamento climatico modifica spazi, ecosistemi, comportamenti e dinamiche fisiche del sistema Terra',
  },
  {
    icon: <Waves className="h-6 w-6" />,
    text: 'Leggere i territori come sistemi complessi da accompagnare in una transizione ecologica, culturale, urbana e sociale',
  },
  {
    icon: <Wind className="h-6 w-6" />,
    text: 'Sostenere processi di adattamento e rigenerazione radicati nei contesti reali',
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    text: 'Promuovere una nuova alleanza tra scienze naturali, scienze sociali, fisica del clima e discipline del progetto',
  },
];

export default function GeoZone() {
  return (
    <div data-zone="geo">
      <HeroSection title="Geo Zone" image="/geozonebackground.jpg" />

      {/* Intro + emissioni */}
      <Section size="md">
        <SectionHeader as="p" eyebrow="Geo Zone" title="Leggere il cambiamento, abitare la complessità." />
        <FadeIn>
          <Card padding="lg" className="text-center">
            <Badge tone="alert" icon={<Thermometer className="h-4 w-4" />}>
              Emergenza climatica
            </Badge>
            <p className="mt-8 flex items-baseline justify-center gap-3 font-display font-semibold text-red-600 sm:gap-5">
              <span className="text-6xl leading-none sm:text-7xl">20</span>
              <span className="text-4xl text-muted sm:text-5xl">→</span>
              <span className="text-6xl leading-none sm:text-7xl">37</span>
            </p>
            <p className="mt-4 text-lg font-semibold text-ink sm:text-xl">miliardi di tonnellate di emissioni</p>
            <p className="mt-1 text-sm text-muted">1990 → 2024</p>
            <Prose className="mx-auto mt-8 max-w-3xl">
              <p>
                Negli ultimi trent'anni le <strong>emissioni globali</strong> sono quasi raddoppiate: dai 20 miliardi di
                tonnellate del 1990 siamo arrivati agli attuali <strong>37 miliardi</strong>. L’aumento dei{' '}
                <strong>gas serra</strong>, principale <strong>forcing climatico</strong>, sta alterando l’equilibrio
                energetico del pianeta e rendendo il clima <strong>instabile</strong>, con effetti noti e altri ancora
                difficili da prevedere: dalle deviazioni delle correnti oceaniche alle trasformazioni dei paesaggi, dalla
                perdita di biodiversità alla scomparsa di interi ecosistemi.
              </p>
            </Prose>
          </Card>
        </FadeIn>
      </Section>

      {/* Visualizzazione interattiva */}
      <Section className="pt-0 md:pt-0">
        <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm md:rounded-3xl">
          <iframe
            src="https://tulpinteractive.com/goldilocks/"
            title="TULP interactive - Goldilocks"
            loading="lazy"
            className="block h-[75svh] min-h-[480px] w-full border-0 md:h-[800px]"
          />
        </div>
      </Section>

      {/* Guardare in faccia alla realtà */}
      <Section tone="tint">
        <FadeIn>
          <SectionHeader eyebrow="Il nostro sguardo" title="Guardare in faccia alla realtà" />
        </FadeIn>
        <Prose className="mx-auto max-w-3xl text-center">
          <p>
            Non significa arrendersi. Al contrario, significa riconoscere che esiste ancora un ampio{' '}
            <b>margine di azione</b>. La sfida non è <strong>evitare</strong> il cambiamento, ma governarlo con
            intelligenza, orientando le nostre società verso modi di abitare la Terra più{' '}
            <b>giusti, adattivi e consapevoli dei limiti biofisici.</b>
          </p>
          <p>
            Possiamo — e dobbiamo — scegliere come vivere questa transizione: investendo in <strong>conoscenza</strong>,{' '}
            <strong>immaginazione politica</strong>, <strong>responsabilità collettiva</strong> e{' '}
            <strong>partecipazione comunitaria</strong>.
          </p>
        </Prose>

        <Subheading className="mx-auto mt-14 mb-8 max-w-3xl text-center">
          Per questo, in Geo Zone dialogano e collaborano due discipline fondamentali:
        </Subheading>
        <div className="grid gap-6 md:grid-cols-2">
          <FeatureCard icon={<Globe className="h-6 w-6" />} title="Geografia">
            Come <b className="text-ink">scienza delle relazioni</b> tra luoghi, processi ambientali e comportamenti
            collettivi
          </FeatureCard>
          <FeatureCard icon={<Waves className="h-6 w-6" />} title="Fisica del Clima">
            Che studia i <b className="text-ink">meccanismi energetici</b>, le{' '}
            <b className="text-ink">dinamiche atmosferiche</b>, gli <b className="text-ink">scambi radiativi</b> e le
            forzanti del sistema climatico
          </FeatureCard>
        </div>
      </Section>

      {/* Missioni */}
      <Section>
        <FadeIn>
          <SectionHeader eyebrow="Cosa facciamo" title="Nella Geo Zone" />
        </FadeIn>
        <Lead className="mx-auto max-w-3xl text-center">
          Geo Zone è l’area dell’associazione dedicata allo studio del cambiamento climatico e dell’attuale crisi in
          corso, alla comunicazione e divulgazione delle scienze del Sistema Terra, del clima, della geografia, dei
          territori, della pianificazione ambientale e sociale, dei biomi e degli ecosistemi.
        </Lead>
        <p className="mx-auto mt-6 mb-10 max-w-3xl text-center font-semibold text-ink">
          Attraverso ricerca, formazione, divulgazione e progetti territoriali, ci impegniamo a:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {missions.map((mission, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <FeatureCard icon={mission.icon} index={i + 1}>
                {mission.text}
              </FeatureCard>
            </FadeIn>
          ))}
        </div>
      </Section>
    </div>
  );
}
