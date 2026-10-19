import { ArrowRight } from 'lucide-react';
import { Button, Container } from '../Ui';

export default function BannerSportello() {
  return (
    <section className="bg-brand-700 text-cream">
      <Container size="sm" className="py-14 text-center md:py-20">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl md:text-5xl">Centro di supporto psicologico</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-cream/85 sm:text-lg">
          Uno spazio rivolto a tutte le persone che sentono la necessità di elaborare e condividere pensieri ed emozioni
          rispetto alla crisi climatica.
        </p>
        <Button to="/sportello-psicologico" variant="light" className="mt-8" icon={<ArrowRight className="h-4 w-4" />}>
          Scopri di più
        </Button>
      </Container>
    </section>
  );
}
