import { ArrowDown, Brain, Heart, Shield, Sprout, Users } from 'lucide-react';
import { HeroSection } from '../../../Components/HeroSection';
import SportelloInfo from '../../../Components/SportelloInfo';
import {
  BulletList,
  Button,
  Card,
  FadeIn,
  FeatureCard,
  Prose,
  Quote,
  Section,
  SectionHeader,
} from '../../../Components/Ui';

const activities = [
  "Sportello psicologico gratuito, orientato all'ascolto, alla prevenzione e al sostegno delle fragilità connesse alla crisi climatica, sociale e personale",
  'Interventi nelle scuole, per aiutare studentesse e studenti a riconoscere le proprie emozioni, sviluppare strumenti di resilienza, favorire la partecipazione attiva e coltivare immaginari futuri più sostenibili',
  'Laboratori psicoeducativi, che intrecciano mente, corpo e relazione per dare forma e significato ai vissuti legati al presente',
  'Percorsi per docenti, educatori e professionisti, per rafforzare le competenze nella gestione del disagio emotivo e nella promozione di comunità scolastiche e territoriali più accoglienti',
  'Progetti di ricerca psicologica sui vissuti legati al cambiamento climatico – eco-ansia, senso di impotenza, colpa ambientale, speranza attiva – affrontati non come patologie, ma come risposte umane a un mondo che cambia',
];

const approaches = [
  { icon: <Sprout className="h-6 w-6" />, title: 'Dinamico', description: 'Che riconosce le trasformazioni della mente nel tempo' },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Relazionale',
    description: 'Che valorizza il ruolo delle connessioni umane e della cura reciproca',
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: 'Ecologico',
    description: 'Che mette in dialogo vissuti individuali e cambiamenti climatici, sociali e culturali',
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: 'Non Patologizzante',
    description:
      "Che guarda all'ansia climatica e alle emozioni difficili come segnali da ascoltare, non come disturbi da eliminare",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Partecipativo',
    description:
      'Che coinvolge scuole, famiglie, giovani e comunità intere nella costruzione di spazi psicologicamente sicuri',
  },
];

export default function PsyZone() {
  return (
    <div data-zone="psy">
      <HeroSection title="Psy Zone" image="/psyzone.jpg" />

      {/* Intro */}
      <Section size="sm" containerClassName="text-center">
        <SectionHeader as="p" eyebrow="Psy Zone" title="Menti come paesaggi, comunità che si prendono cura" />
        <Button href="#contenuto" icon={<ArrowDown className="h-4 w-4" />}>
          Scopri di più
        </Button>
        <div className="mt-14">
          <Quote>
            Il nostro rapporto con il paesaggio non si esaurisce nello sguardo e nella contemplazione. Implica il corpo e
            la sua partecipazione sensoriale, si carica di affetti e memoria e diventa parte dell'identità.
          </Quote>
        </div>
      </Section>

      <Section id="contenuto" size="md" className="pt-0 md:pt-0">
        <Card variant="tint" padding="lg">
          <Prose>
            <p>
              La Psy Zone nasce dalla consapevolezza che il cambiamento climatico non riguarda soltanto i territori
              fisici, ma anche <strong>i paesaggi interiori delle persone</strong>. Come ricorda Lingiardi in{' '}
              <em>Mindscapes</em>, la mente è un luogo fatto di geografie intime: colline di emozioni, correnti di
              pensiero, zone d'ombra e radure di possibilità.
            </p>
            <p>
              Quando il mondo cambia rapidamente, anche i nostri climi emotivi si modificano: ansia, incertezza, senso di
              vulnerabilità, ma anche desiderio di azione, immaginazione e nuove forme di solidarietà.
            </p>
            <p className="font-semibold text-ink">
              La Psy Zone è lo spazio dell'associazione dedicato a leggere, accompagnare e trasformare questi paesaggi
              interiori, mettendo la cura psicologica, la relazione e il benessere collettivo al centro dei processi di
              adattamento climatico e sociale.
            </p>
          </Prose>
        </Card>
      </Section>

      {/* Attività */}
      <Section size="md">
        <FadeIn>
          <SectionHeader
            eyebrow="Cosa facciamo"
            title="Nella Psy Zone"
            intro="La nostra area si articola in interventi che integrano psicologia, formazione, prevenzione, partecipazione comunitaria e sensibilizzazione. In particolare, ci occupiamo di:"
          />
        </FadeIn>
        <BulletList items={activities} />
      </Section>

      {/* Approccio */}
      <Section tone="tint">
        <FadeIn>
          <SectionHeader
            eyebrow="Il nostro approccio"
            title="Paesaggi mentali"
            intro="Ispirandoci alla metafora dei paesaggi mentali, consideriamo la salute psicologica come un ecosistema complesso, in cui emozioni, relazioni, contesti di vita e ambiente fisico interagiscono costantemente. Per questo adottiamo un approccio:"
          />
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {approaches.map((approach, i) => (
            <FadeIn key={approach.title} delay={i * 0.05}>
              <FeatureCard icon={approach.icon} title={approach.title}>
                {approach.description}
              </FeatureCard>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Visione */}
      <Section size="md">
        <FadeIn>
          <SectionHeader eyebrow="La nostra visione" title="Salute mentale come bene comune" />
        </FadeIn>
        <Card padding="lg">
          <Prose>
            <p>
              Crediamo che <strong>la salute mentale sia un bene comune</strong>: qualcosa che si costruisce insieme, nei
              gesti quotidiani, nelle relazioni e nelle possibilità che una comunità offre.
            </p>
            <p>
              La Psy Zone vuole essere un luogo che accoglie, accompagna e dà voce ai vissuti delle persone, aiutandole a
              orientarsi nei propri paesaggi interiori e a trovare nuove forme di equilibrio.
            </p>
            <p className="font-semibold text-ink">
              Così come il pianeta necessita delle condizioni ottimali per mantenere la propria Goldilocks Zone, anche la
              mente umana richiede un equilibrio adeguato per potersi sviluppare e funzionare in modo sano: non un
              eccesso di stress o isolamento, né una pressione emotiva costante, ma un ambiente psicologico che offra
              sicurezza, relazioni significative e una prospettiva di futuro.
            </p>
            <p>
              La Psy Zone opera per favorire proprio questo equilibrio, promuovendo contesti in cui possano emergere cura,
              comprensione, resilienza e capacità trasformativa, elementi fondamentali per il benessere individuale e
              collettivo.
            </p>
          </Prose>
        </Card>
      </Section>

      {/* Sportello */}
      <Section tone="tint">
        <SportelloInfo />
      </Section>
    </div>
  );
}
