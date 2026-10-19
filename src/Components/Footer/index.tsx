import { Instagram, Mail, MapPin } from 'lucide-react';
import { CONTACTS } from '../../data/contacts';
import { Container } from '../Ui';

const headingClass = 'mb-4 text-xs font-bold tracking-[0.2em] text-muted uppercase';

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white/60">
      <Container className="grid gap-10 py-12 md:grid-cols-3 md:gap-8 md:py-16">
        <div>
          <img src="/gozone_logocompleto.svg" alt="Go-Zone" width={160} height={46} className="mb-6 h-10 w-auto" />
          <ul className="space-y-3 text-sm text-ink/85">
            <li className="flex gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-brand-600" />
              {CONTACTS.address}
            </li>
            <li className="flex gap-3">
              <Mail className="h-5 w-5 shrink-0 text-brand-600" />
              <span className="min-w-0">
                Info generali e amministrazione:{' '}
                <a href={`mailto:${CONTACTS.emailInfo}`} className="font-semibold break-words hover:underline">
                  {CONTACTS.emailInfo}
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="h-5 w-5 shrink-0 text-brand-600" />
              <span className="min-w-0">
                Centro di supporto psicologico:{' '}
                <a href={`mailto:${CONTACTS.emailPsy}`} className="font-semibold break-words hover:underline">
                  {CONTACTS.emailPsy}
                </a>
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className={headingClass}>Seguici</h3>
          <a
            href={CONTACTS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:border-brand-300 hover:text-brand-600"
          >
            <Instagram className="h-5 w-5" />
            Instagram
          </a>
        </div>

        <div>
          <h3 className={headingClass}>Trovi lo sportello psicologico qui</h3>
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line shadow-sm md:aspect-[16/10]">
            <iframe
              src={CONTACTS.mapsEmbed}
              title="Mappa: sede dello sportello psicologico"
              className="h-full w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Container>

      <div className="border-t border-line">
        <Container className="flex flex-col gap-2 py-6 text-center text-xs text-muted sm:flex-row sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} Go-Zone APS · CF {CONTACTS.taxCode} · Tutti i diritti riservati
          </p>
          <p>{CONTACTS.photoCredit}</p>
        </Container>
      </div>
    </footer>
  );
}
