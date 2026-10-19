import { HeroSection } from '../../Components/HeroSection';
import { Button, Section, SectionHeader } from '../../Components/Ui';

export default function NotFound() {
  return (
    <>
      <HeroSection title="Pagina non trovata" />
      <Section size="sm" containerClassName="text-center">
        <SectionHeader eyebrow="Errore 404" title="Questa pagina non esiste" intro="Forse il link è cambiato o non è più disponibile." />
        <Button to="/">Torna alla home</Button>
      </Section>
    </>
  );
}
