import { useState, type FormEvent, type ReactNode } from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import { CONTACTS } from '../../data/contacts';
import { cn } from '../../lib/cn';

// Netlify Forms: il nome e i campi devono coincidere con public/__forms.html.
const FORM_NAME = 'sportello';
const FORM_ENDPOINT = '/__forms.html';

type Status = 'idle' | 'sending' | 'success' | 'error';

const inputClass =
  'w-full rounded-xl border border-line bg-white px-4 py-3 text-base text-ink placeholder:text-muted/70 transition focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none';

function Field({
  label,
  htmlFor,
  required = true,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold text-ink">
        {label} {required ? <span className="text-accent">*</span> : <span className="font-normal text-muted">(facoltativo)</span>}
      </label>
      {children}
    </div>
  );
}

export default function SportelloForm() {
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('sending');
    try {
      const body = new URLSearchParams(new FormData(form) as unknown as Record<string, string>);
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div role="status" className="flex flex-col items-center gap-3 rounded-2xl bg-accent/5 p-8 text-center">
        <CheckCircle2 className="h-10 w-10 text-accent" />
        <p className="font-display text-2xl font-semibold text-brand-900">Richiesta inviata</p>
        <p className="max-w-md text-muted">Grazie, abbiamo ricevuto la tua richiesta. Riceverai a breve una email di conferma e ti ricontatteremo al più presto.</p>
        <button type="button" onClick={() => setStatus('idle')} className="mt-2 text-sm font-semibold text-accent hover:underline">
          Invia un'altra richiesta
        </button>
      </div>
    );
  }

  return (
    <form name={FORM_NAME} method="POST" onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <input type="hidden" name="form-name" value={FORM_NAME} />
      {/* Honeypot anti-spam: nascosto agli utenti. */}
      <p className="hidden">
        <label>
          Non compilare questo campo: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <Field label="Nome" htmlFor="sf-nome">
        <input id="sf-nome" name="nome" required autoComplete="given-name" className={inputClass} />
      </Field>
      <Field label="Cognome" htmlFor="sf-cognome">
        <input id="sf-cognome" name="cognome" required autoComplete="family-name" className={inputClass} />
      </Field>
      <Field label="Numero di telefono" htmlFor="sf-telefono" required={false}>
        <input
          id="sf-telefono"
          name="telefono"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          pattern="[+0-9 ()\-]{6,20}"
          title="Inserisci un numero di telefono valido"
          className={inputClass}
        />
      </Field>
      <Field label="E-mail" htmlFor="sf-email">
        <input id="sf-email" name="email" type="email" required autoComplete="email" className={inputClass} />
      </Field>
      <Field label="La tua richiesta" htmlFor="sf-messaggio" required={false} className="sm:col-span-2">
        <textarea
          id="sf-messaggio"
          name="messaggio"
          rows={6}
          placeholder="Scrivi qui la tua richiesta"
          className={cn(inputClass, 'resize-y')}
        />
      </Field>

      <label className="flex items-start gap-3 text-sm leading-relaxed text-ink/85 sm:col-span-2">
        <input type="checkbox" name="privacy" value="accettato" required className="mt-1 h-4 w-4 shrink-0 accent-[var(--color-accent)]" />
        {/* TODO: collegare all'informativa privacy quando sarà disponibile. */}
        <span>
          Acconsento al trattamento dei miei dati personali per essere ricontattato/a in merito alla mia richiesta, ai sensi
          del Regolamento UE 2016/679 (GDPR). <span className="text-accent">*</span>
        </span>
      </label>

      <div className="flex flex-col items-center gap-3 sm:col-span-2">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-sm transition hover:brightness-110 disabled:opacity-60 sm:w-auto"
        >
          {status === 'sending' ? 'Invio in corso…' : 'Invia la richiesta'}
          <Send className="h-4 w-4" />
        </button>
        <p className="text-xs text-muted">I campi contrassegnati con * sono obbligatori.</p>
        {status === 'error' && (
          <p role="alert" className="text-center text-sm font-medium text-red-700">
            Si è verificato un errore durante l'invio. Riprova più tardi oppure scrivi a{' '}
            <a href={`mailto:${CONTACTS.emailPsy}`} className="underline">
              {CONTACTS.emailPsy}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
