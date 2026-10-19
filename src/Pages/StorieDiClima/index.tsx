import { HeroSection } from '../../Components/HeroSection';
import { Button, Section, SectionHeader } from '../../Components/Ui';

// TODO: pagina ancora senza contenuti.
export default function StorieDiClima() {
  return (
    <>
      <HeroSection title="Storie di Clima" />
      <Section size="sm" containerClassName="text-center">
        <SectionHeader eyebrow="Storie di clima" title="Le storie sono in arrivo" />
        <Button to="/">Torna alla home</Button>
      </Section>
    </>
  );
}
