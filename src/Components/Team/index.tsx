import { TEAM } from '../../data/team';
import { ZONES } from '../../data/zones';
import { Section, SectionHeader } from '../Ui';

export default function Team() {
  return (
    <Section id="team" size="md">
      <SectionHeader eyebrow="Le persone" title="Il team" />

      <div className="space-y-14 md:space-y-20">
        {ZONES.map((zone) => {
          const members = TEAM.filter((m) => m.zone === zone.id);
          if (members.length === 0) return null;
          return (
            <div key={zone.id} data-zone={zone.id}>
              <h3 className="mb-8 flex items-center gap-3 border-b border-line pb-4 text-sm font-bold tracking-[0.2em] text-accent uppercase">
                <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-accent" />
                Referenti {zone.name}
              </h3>
              <ul className="space-y-10">
                {members.map((member) => (
                  <li
                    key={member.name}
                    className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:text-left"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      width={160}
                      height={160}
                      className="h-32 w-32 shrink-0 rounded-full object-cover ring-4 ring-accent/20 ring-offset-4 ring-offset-cream md:h-40 md:w-40"
                    />
                    <div>
                      <p className="font-display text-xl font-semibold text-brand-900">{member.name}</p>
                      <p className="mt-1 text-sm font-semibold text-accent">{member.role}</p>
                      <p
                        className="mt-4 leading-relaxed text-ink/85 [&_b]:font-semibold [&_b]:text-ink"
                        dangerouslySetInnerHTML={{ __html: member.description }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
