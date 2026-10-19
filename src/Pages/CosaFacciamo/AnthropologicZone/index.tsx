import {
  ArrowDown,
  BookOpen,
  Compass,
  Eye,
  Globe,
  Heart,
  Layers,
  MapPin,
  MessageCircle,
  Sparkles,
  Users,
} from 'lucide-react';
import { HeroSection } from '../../../Components/HeroSection';
import {
  Badge,
  BulletList,
  Button,
  Card,
  FadeIn,
  FeatureCard,
  Lead,
  MiniCard,
  Prose,
  Section,
  SectionHeader,
  Subheading,
} from '../../../Components/Ui';

const research = [
  { icon: <Globe className="h-6 w-6" />, text: 'I modi in cui il clima modifica culture, identità e relazioni sociali' },
  { icon: <Users className="h-6 w-6" />, text: 'Le pratiche di adattamento e le strategie locali di resilienza' },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    text: 'Gli immaginari sul futuro e le narrazioni del rischio, della perdita e della speranza',
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    text: 'Le trasformazioni dei paesaggi culturali, degli spazi urbani e dei territori vissuti',
  },
  {
    icon: <Layers className="h-6 w-6" />,
    text: 'Le forme di vulnerabilità e le disuguaglianze prodotte o accentuate dai cambiamenti ambientali',
  },
  {
    icon: <Heart className="h-6 w-6" />,
    text: 'I processi comunitari attraverso cui le persone costruiscono nuovi sensi di appartenenza',
  },
];

const methods = [
  { icon: <BookOpen className="h-5 w-5" />, text: 'Incontri pubblici' },
  { icon: <Sparkles className="h-5 w-5" />, text: 'Workshop' },
  { icon: <Users className="h-5 w-5" />, text: 'Percorsi partecipativi' },
  { icon: <Compass className="h-5 w-5" />, text: 'Collaborazioni territoriali' },
];

const approach = [
  { title: 'Situato', description: 'Attento ai contesti locali e alle loro specificità' },
  { title: 'Relazionale', description: 'Valorizza le interazioni e le forme di vita comunitarie' },
  { title: 'Interpretativo', description: 'Sensibile ai significati che le persone attribuiscono alle proprie esperienze' },
  { title: 'Ecologico', description: 'Mette in dialogo ambiente, cultura e pratiche sociali' },
  {
    title: 'Partecipativo',
    description: 'Coinvolge attivamente le comunità nelle fasi di ascolto, progettazione e valutazione',
  },
];

const goals = [
  'Aprire spazi di dialogo',
  'Riconoscere la pluralità dei vissuti',
  "Valorizzare l'immaginazione comunitaria",
];

export default function AnthropologicZone() {
  return (
    <div data-zone="anthro">
      <HeroSection title="Anthro Zone" image="/anthropologiczonebackground.jpg" />

      {/* Intro */}
      <Section size="sm" containerClassName="text-center">
        <SectionHeader
          as="p"
          eyebrow="Anthro Zone"
          title="Sguardi antropologici per comprendere trasformazioni, culture e comunità"
        />
        <Button href="#contenuto" icon={<ArrowDown className="h-4 w-4" />}>
          Esplora
        </Button>
      </Section>

      {/* Antropologia culturale */}
      <Section id="contenuto" className="pt-0 md:pt-0">
        <Card padding="lg">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <Badge icon={<Eye className="h-4 w-4" />}>Antropologia culturale</Badge>
              <Subheading className="mt-6 mb-5">Oltre il fenomeno ambientale</Subheading>
              <Prose>
                <p>
                  La crisi climatica non è soltanto un fenomeno ambientale, ma anche un profondo processo culturale,
                  sociale e simbolico. Il cambiamento del clima modifica gli ecosistemi materiali, ma allo stesso tempo
                  trasforma i nostri modi di vivere.
                </p>
                <p>
                  L'antropologia offre strumenti essenziali per leggere questa complessità attraverso l'attenzione ai
                  mondi della vita, alle pratiche quotidiane, alle narrazioni e ai sistemi di significato.
                </p>
              </Prose>
            </div>
            <div>
              <h3 className="mb-5 text-xl font-semibold text-ink">Il cambiamento trasforma:</h3>
              <BulletList
                items={[
                  "Il modo di dare senso all'esperienza",
                  "L'immaginazione del futuro",
                  'La costruzione dei legami comunitari',
                  'I paesaggi culturali e vissuti',
                ]}
              />
            </div>
          </div>
        </Card>
      </Section>

      {/* Ricerca */}
      <Section tone="tint">
        <FadeIn>
          <SectionHeader
            eyebrow="Cosa facciamo"
            title="Nella Anthro Zone"
            intro="Analizziamo e documentiamo come persone, gruppi e comunità rispondono ai mutamenti in corso"
          />
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {research.map((item, i) => (
            <FadeIn key={item.text} delay={i * 0.05}>
              <FeatureCard icon={item.icon}>{item.text}</FeatureCard>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Metodi */}
      <Section>
        <FadeIn>
          <SectionHeader
            eyebrow="Metodo"
            title="I nostri metodi"
            intro="Promuoviamo ricerca qualitativa, osservazione partecipante, raccolta di storie di vita, analisi delle pratiche sociali e attività sul territorio"
          />
        </FadeIn>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {methods.map((method) => (
            <MiniCard key={method.text} icon={method.icon}>
              {method.text}
            </MiniCard>
          ))}
        </div>
        <Lead className="mx-auto mt-12 max-w-3xl text-center">
          Collaboriamo con scuole, amministrazioni, enti culturali e reti comunitarie per rendere visibili e condivisi i
          vissuti delle persone nei contesti di cambiamento
        </Lead>
      </Section>

      {/* Approccio */}
      <Section tone="tint">
        <FadeIn>
          <SectionHeader
            eyebrow="Il nostro approccio"
            title="Abitare lo sguardo"
            intro="Comprendere i fenomeni dall'interno, attraverso la vicinanza ai contesti e alle persone"
          />
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {approach.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.05}>
              <FeatureCard index={i + 1} title={item.title}>
                {item.description}
              </FeatureCard>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Visione */}
      <Section size="md">
        <Card variant="tint" padding="lg">
          <div className="text-center">
            <Badge icon={<Eye className="h-4 w-4" />}>La nostra visione</Badge>
            <Subheading className="mt-6">Ascoltare le culture</Subheading>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
              Comprendere il cambiamento climatico richiede di ascoltare non solo ciò che accade nel mondo fisico, ma
              anche ciò che accade nelle culture, nelle relazioni e nelle storie delle persone.
            </p>
          </div>
          <div className="my-10 grid gap-4 md:grid-cols-3">
            {goals.map((goal, i) => (
              <MiniCard key={goal} index={i + 1}>
                {goal}
              </MiniCard>
            ))}
          </div>
          <p className="text-center text-base leading-relaxed font-semibold text-ink sm:text-lg">
            La nostra ambizione è contribuire allo sviluppo di una transizione ecologica che sia anche una transizione
            culturale e sociale, capace di integrare conoscenze, valori e forme di vita.
          </p>
        </Card>
      </Section>
    </div>
  );
}
