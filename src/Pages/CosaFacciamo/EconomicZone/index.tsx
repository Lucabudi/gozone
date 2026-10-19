import {
  ArrowDown,
  Building2,
  HandHeart,
  Leaf,
  Lightbulb,
  Network,
  Recycle,
  RefreshCw,
  Sparkles,
  TrendingUp,
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

const activities = [
  { icon: <Recycle className="h-6 w-6" />, text: 'Modelli circolari di produzione e consumo' },
  { icon: <HandHeart className="h-6 w-6" />, text: 'Forme di mutualismo e cooperazione' },
  { icon: <Network className="h-6 w-6" />, text: 'Reti locali resilienti' },
  { icon: <Building2 className="h-6 w-6" />, text: 'Processi di rigenerazione urbana e sociale' },
  { icon: <TrendingUp className="h-6 w-6" />, text: 'Iniziative di riduzione degli sprechi e ottimizzazione delle risorse' },
  { icon: <Users className="h-6 w-6" />, text: "Pratiche di design sociale orientate all'inclusione e all'impatto comunitario" },
];

const methods = [
  { icon: <Lightbulb className="h-5 w-5" />, text: 'Workshop' },
  { icon: <Users className="h-5 w-5" />, text: 'Seminari' },
  { icon: <Sparkles className="h-5 w-5" />, text: 'Laboratori di innovazione' },
  { icon: <Network className="h-5 w-5" />, text: 'Co-progettazione' },
];

const vision = [
  'Intelligenza economica',
  'Progettazione sociale',
  'Giustizia climatica',
  'Partecipazione attiva delle comunità',
  'Attenzione al benessere psicologico e sanitario',
  'Valorizzazione delle economie locali',
  'Cooperazione tra settori diversi',
];

const goals = [
  'Ripensare il valore',
  'Ridisegnare i processi',
  'Rafforzare le comunità',
  'Creare economie che rigenerino il mondo',
];

export default function EconomicZone() {
  return (
    <div data-zone="circular">
      <HeroSection title="Circular Zone" image="/economiczonebackground.jpg" />

      {/* Intro */}
      <Section size="sm" containerClassName="text-center">
        <SectionHeader
          as="p"
          eyebrow="Circular Zone"
          title="L'incontro tra economia sostenibile e progettazione sociale per generare trasformazioni profonde e durature nelle comunità"
        />
        <Button href="#contenuto" icon={<ArrowDown className="h-4 w-4" />}>
          Scopri di più
        </Button>
      </Section>

      {/* Economia circolare */}
      <Section id="contenuto" className="pt-0 md:pt-0">
        <Card padding="lg">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <Badge icon={<RefreshCw className="h-4 w-4" />}>Economia circolare</Badge>
              <Subheading className="mt-6 mb-5">Oltre lo sfruttamento lineare</Subheading>
              <Prose>
                <p>
                  Superiamo i modelli basati sullo sfruttamento lineare delle risorse e sull'aumento incontrollato dei
                  consumi, promuovendo invece sistemi circolari, rigenerativi e centrati sulle persone.
                </p>
                <p>
                  Pratiche economiche orientate alla sostenibilità, al riuso, al riciclo e alla condivisione diventano
                  leve fondamentali per stimolare innovazione sociale ed ecologica.
                </p>
              </Prose>
            </div>
            <div>
              <h3 className="mb-5 text-xl font-semibold text-ink">Un cambio culturale:</h3>
              <BulletList
                items={[
                  'La cura dei legami',
                  'Responsabilità collettiva',
                  'Nuovi modi di abitare gli spazi',
                  'Trasformazione delle relazioni',
                ]}
              />
            </div>
          </div>
        </Card>
      </Section>

      {/* Cosa facciamo */}
      <Section tone="tint">
        <FadeIn>
          <SectionHeader
            eyebrow="Cosa facciamo"
            title="Nella Circular Zone"
            intro="Attraverso progetti educativi, percorsi partecipativi e collaborazioni con enti pubblici, privati e realtà del terzo settore, promuoviamo una cultura economica e sociale che valorizzi:"
          />
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity, i) => (
            <FadeIn key={activity.text} delay={i * 0.05}>
              <FeatureCard icon={activity.icon}>{activity.text}</FeatureCard>
            </FadeIn>
          ))}
        </div>
        <Lead className="mx-auto mt-12 max-w-3xl text-center">
          <strong>Benessere psicologico e coesione sociale</strong> come parti integranti della sostenibilità economica
        </Lead>
      </Section>

      {/* Come lavoriamo */}
      <Section>
        <FadeIn>
          <SectionHeader
            eyebrow="Metodo"
            title="Come lavoriamo"
            intro="Organizziamo iniziative che aiutano cittadini, amministrazioni e organizzazioni a reinterpretare i sistemi economici come opportunità di equità, adattamento e rigenerazione"
          />
        </FadeIn>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {methods.map((method) => (
            <MiniCard key={method.text} icon={method.icon}>
              {method.text}
            </MiniCard>
          ))}
        </div>
      </Section>

      {/* Visione */}
      <Section tone="tint">
        <FadeIn>
          <SectionHeader
            eyebrow="La nostra visione"
            title="Un approccio integrato"
            intro="L'economia circolare non è solo gestione delle risorse, ma un approccio integrato che unisce:"
          />
        </FadeIn>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {vision.map((item, i) => (
            <MiniCard key={item} index={i + 1}>
              {item}
            </MiniCard>
          ))}
        </div>
        <Lead className="mx-auto mt-12 max-w-3xl text-center">
          Solo attraverso questa integrazione è possibile costruire città e territori più giusti, resilienti, creativi e
          orientati al lungo termine.
        </Lead>
      </Section>

      {/* Laboratorio */}
      <Section size="md">
        <Card variant="tint" padding="lg">
          <div className="text-center">
            <Badge icon={<Leaf className="h-4 w-4" />}>Laboratorio per il futuro</Badge>
            <Subheading className="mt-6">Un luogo di incontro</Subheading>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Dove idee, pratiche e persone si incontrano per generare nuovi modelli di sviluppo
            </p>
          </div>
          <div className="my-10 grid gap-4 sm:grid-cols-2">
            {goals.map((goal) => (
              <MiniCard key={goal} icon={<RefreshCw className="h-5 w-5" />}>
                {goal}
              </MiniCard>
            ))}
          </div>
          <p className="text-center text-base leading-relaxed text-ink/85 italic sm:text-lg">
            Crediamo che una transizione economica equa e sostenibile possa nascere solo attraverso il dialogo, la
            conoscenza condivisa e la cooperazione, e che ogni territorio possieda energie preziose da cui ripartire.
          </p>
        </Card>
      </Section>
    </div>
  );
}
