import { HeroSection } from '../../../Components/HeroSection';
import ClimateStories from '../../../Components/StoriesClimate';
import { Section } from '../../../Components/Ui';
import { PROJECTS } from '../../../data/stories';

export default function Projects() {
  return (
    <>
      <HeroSection title="I nostri progetti" />
      <Section>
        <ClimateStories stories={PROJECTS} />
      </Section>
    </>
  );
}
