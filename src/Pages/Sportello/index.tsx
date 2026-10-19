import { HeroSection } from '../../Components/HeroSection';
import SportelloInfo from '../../Components/SportelloInfo';
import { Lead, Section } from '../../Components/Ui';

export default function SportelloPage() {
  return (
    <div data-zone="psy">
      <HeroSection title="Sportello psicologico" />
      <Section size="sm">
        <Lead className="text-center">
          L'associazione Go-Zone nasce come <strong>Associazione di Promozione Sociale</strong> volta a promuovere
          esperienze di cittadinanza attiva nel campo del Climate Change, attraverso strategie ed azioni di cura delle
          persone, della comunità e progetti di sostenibilità sociale ed ambientale.
        </Lead>
      </Section>
      <Section className="pt-0 md:pt-0">
        <SportelloInfo withForm />
      </Section>
    </div>
  );
}
