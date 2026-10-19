import { useEffect, useState } from 'react';
import { BookOpen, Globe, HeartHandshake, Leaf, Rocket, Thermometer, Users, Zap } from 'lucide-react';
import { HeroSection } from '../../Components/HeroSection';
import Team from '../../Components/Team';
import {
  Badge,
  Card,
  DecorBlobs,
  FadeIn,
  FeatureCard,
  IconTile,
  Lead,
  Prose,
  Section,
  SectionHeader,
  Subheading,
} from '../../Components/Ui';
import { useInView } from '../../hooks/useInView';

function AnimatedCounter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView<HTMLSpanElement>();

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.round(target * progress));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target]);

  return <span ref={ref}>{count}</span>;
}

const missions = [
  {
    icon: <Globe className="h-6 w-6" />,
    title: 'Cittadinanza Attiva',
    text: 'Esperienze concrete che valorizzano il ruolo di ogni persona nella costruzione di comunità più consapevoli e partecipi.',
  },
  {
    icon: <HeartHandshake className="h-6 w-6" />,
    title: 'Supporto Psicologico',
    text: "Assistenza gratuita per affrontare l'eco-ansia e il peso emotivo del cambiamento climatico, con cura reciproca e benessere collettivo.",
  },
  {
    icon: <Leaf className="h-6 w-6" />,
    title: 'Sensibilizzazione Ambientale',
    text: 'Percorsi di formazione e divulgazione scientifica per costruire una coscienza ambientale concreta nelle comunità e nei territori.',
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Rigenerazione Territoriale',
    text: 'Progetti di adattamento climatico per costruire territori più resilienti, sostenibili e capaci di rispondere alle sfide future.',
  },
];

export default function ChiSiamo() {
  return (
    <>
      <HeroSection title="Chi siamo" />

      {/* Intro */}
      <Section size="sm" decor={<DecorBlobs />} containerClassName="text-center">
        <FadeIn>
          <h2 className="font-display text-5xl leading-none font-semibold text-brand-700 italic sm:text-6xl md:text-7xl">
            Goldilocks Zone
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <Lead className="mt-8">
            Association for Social and Health Climate Actions — nata per ideare{' '}
            <strong>contesti abitabili, consapevoli e sostenibili</strong> nelle nostre città, comunità e vite.
          </Lead>
        </FadeIn>
        <FadeIn delay={0.2}>
          <Lead className="mt-6">Il 16 maggio 2025 nasce Go-Zone. In quel mese Mauna Loa registra un nuovo record:</Lead>
        </FadeIn>
      </Section>

      {/* CO2 */}
      <Section size="md" className="pt-0 md:pt-0">
        <FadeIn>
          <Card padding="lg">
            <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
              <div>
                <Badge tone="alert" icon={<Thermometer className="h-4 w-4" />}>
                  Emergenza climatica
                </Badge>
                <p className="mt-6 flex items-baseline gap-3">
                  <span className="font-display text-7xl leading-none font-semibold text-red-600 md:text-8xl">
                    <AnimatedCounter target={430} />
                  </span>
                  <span className="text-2xl font-bold text-muted">ppm</span>
                </p>
                <p className="mt-4 text-lg font-semibold text-ink">CO₂ in atmosfera — record storico</p>
                <p className="mt-1 text-sm text-muted">Osservatorio di Mauna Loa — Maggio 2025</p>
              </div>
              <Prose>
                <p>
                  Il valore più alto degli ultimi <strong>800.000 anni</strong>. Una soglia che ci richiama all’urgenza
                  di ripensare il nostro rapporto con il pianeta.
                </p>
              </Prose>
            </div>
          </Card>
        </FadeIn>
      </Section>

      {/* Origine del nome */}
      <Section>
        <FadeIn>
          <SectionHeader eyebrow="L'origine del nome" title="Né troppo, né troppo poco" />
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          <FadeIn>
            <Card padding="lg" className="h-full">
              <IconTile>
                <BookOpen className="h-6 w-6" />
              </IconTile>
              <Subheading className="mt-6 mb-4">La fiaba di Riccioli d'Oro</Subheading>
              <Prose>
                <p>
                  Il nome affonda le sue radici in una fiaba familiare a molti: quella di Riccioli d’Oro e i tre orsi.
                  Una bambina entra in una casa sconosciuta e scopre che solo ciò che è “né troppo né troppo poco” può
                  diventare rifugio: la sedia giusta, il cibo giusto, il letto giusto. In quello spazio di equilibrio
                  trova la possibilità di riposare, di sopravvivere, di sentirsi al sicuro.
                </p>
              </Prose>
            </Card>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Card variant="dark" padding="lg" className="h-full">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <Rocket className="h-6 w-6" />
              </span>
              <h3 className="mt-6 mb-4 font-display text-2xl font-semibold sm:text-3xl">La NASA</h3>
              <p className="text-base leading-relaxed text-cream/85 sm:text-lg">
                Ha adottato il concetto per descrivere la cosiddetta Goldilocks Zone in astronomia: la fascia attorno a
                una stella in cui le condizioni sono ottimali per la presenza di acqua liquida sulla superficie di un
                pianeta. Non troppo vicino, dove l’acqua evaporerebbe; non troppo lontano, dove congelerebbe. Una regione
                “giusta al punto giusto”, ritenuta fondamentale per la possibilità che la vita possa nascere e
                mantenersi. È la zona in cui un pianeta può essere — proprio come nella fiaba — abitabile.
              </p>
            </Card>
          </FadeIn>
        </div>
        <FadeIn>
          <Lead className="mx-auto mt-12 max-w-3xl text-center">
            La scelta di questo nome ci ricorda chi siamo, i nostri valori e ci ispira ogni giorno a riflettere ed
            affrontare le sfide del cambiamento climatico attraverso la <strong>cura reciproca</strong> e il{' '}
            <strong>legame con la terra</strong>.
          </Lead>
        </FadeIn>
      </Section>

      {/* Azioni */}
      <Section tone="tint">
        <FadeIn>
          <SectionHeader
            eyebrow="In pratica"
            title="Le nostre azioni"
            intro="Ricerca, divulgazione scientifica, supporto psicologico e progettazione sociale"
          />
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-2">
          {missions.map((mission, i) => (
            <FadeIn key={mission.title} delay={i * 0.05}>
              <FeatureCard icon={mission.icon} index={i + 1} title={mission.title}>
                {mission.text}
              </FeatureCard>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Banner team */}
      <Section size="md">
        <FadeIn>
          <Card variant="dark" padding="lg" className="text-center">
            <Badge tone="light" icon={<Users className="h-4 w-4" />}>
              Il nostro team
            </Badge>
            <h2 className="mt-6 font-display text-3xl leading-tight font-semibold sm:text-4xl md:text-5xl">
              Un equilibrio delicato,
              <br />
              <em>da coltivare insieme.</em>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cream/85 sm:text-lg">
              Il nostro gruppo è composto da persone con competenze specialistiche diversificate, unite dalla volontà di
              contribuire a un futuro più giusto, sano e sostenibile.
            </p>
          </Card>
        </FadeIn>
      </Section>

      <Team />
    </>
  );
}
