/**
 * Netlify la esegue automaticamente a ogni invio verificato (non spam) di un form.
 * Per il form "sportello" invia a chi ha scritto una mail di conferma via Resend.
 *
 * Variabili d'ambiente (Netlify → Site configuration → Environment variables):
 *   RESEND_API_KEY  obbligatoria
 *   MAIL_FROM       opzionale, default "Go-Zone · Psy Zone <psyzone@go-zone.it>"
 *   MAIL_REPLY_TO   opzionale, default "psyzone@go-zone.it"
 *
 * La conferma NON ripete il testo della richiesta: può contenere dati sensibili.
 */

const DEFAULT_FROM = 'Go-Zone · Psy Zone <psyzone@go-zone.it>';
const DEFAULT_REPLY_TO = 'psyzone@go-zone.it';

const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

export function buildConfirmation(nome) {
  const greeting = nome ? `Ciao ${nome},` : 'Ciao,';
  const text = [
    greeting,
    '',
    'abbiamo ricevuto la tua richiesta allo Sportello psicologico di Go-Zone.',
    'Una persona del nostro team ti ricontatterà al più presto ai recapiti che ci hai indicato.',
    '',
    'Se hai bisogno di aggiungere qualcosa puoi rispondere direttamente a questa email.',
    '',
    'Un caro saluto,',
    'Il team Psy Zone – Go-Zone APS',
  ].join('\n');

  const html = `<!doctype html>
<html lang="it">
  <body style="margin:0;padding:24px;background:#fbfdf4;font-family:Arial,Helvetica,sans-serif;color:#1d2b24;">
    <div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e2e8dc;border-radius:16px;padding:32px;">
      <p style="margin:0 0 16px;font-size:16px;">${escapeHtml(greeting)}</p>
      <p style="margin:0 0 16px;font-size:16px;line-height:1.6;">
        abbiamo ricevuto la tua richiesta allo <strong>Sportello psicologico</strong> di Go-Zone.
        Una persona del nostro team ti ricontatterà al più presto ai recapiti che ci hai indicato.
      </p>
      <p style="margin:0 0 24px;font-size:16px;line-height:1.6;">
        Se hai bisogno di aggiungere qualcosa puoi rispondere direttamente a questa email.
      </p>
      <p style="margin:0;font-size:16px;line-height:1.6;">Un caro saluto,<br />Il team Psy Zone – Go-Zone APS</p>
    </div>
  </body>
</html>`;

  return { subject: 'Abbiamo ricevuto la tua richiesta – Sportello psicologico Go-Zone', text, html };
}

export const handler = async (event) => {
  const { payload } = JSON.parse(event.body ?? '{}');
  if (payload?.form_name !== 'sportello') return { statusCode: 200, body: 'Form ignorato' };

  const email = payload.data?.email?.trim();
  if (!email) return { statusCode: 200, body: 'Nessuna email a cui rispondere' };

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY non configurata: conferma non inviata');
    return { statusCode: 500, body: 'Configurazione mancante' };
  }

  const nome = payload.data?.nome?.trim() ?? '';
  const { subject, text, html } = buildConfirmation(nome);

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.MAIL_FROM || DEFAULT_FROM,
      to: [email],
      reply_to: process.env.MAIL_REPLY_TO || DEFAULT_REPLY_TO,
      subject,
      text,
      html,
    }),
  });

  if (!res.ok) {
    console.error('Invio conferma fallito', res.status, await res.text());
    return { statusCode: 502, body: 'Invio fallito' };
  }

  return { statusCode: 200, body: 'Conferma inviata' };
};
