import { ClipboardPen, HeartHandshake } from 'lucide-react';
import SportelloForm from '../SportelloForm';
import { Button, Card, IconTile, Prose } from '../Ui';

/**
 * Informazioni sullo sportello psicologico.
 * Con `withForm` mostra il modulo di richiesta (pagina Sportello),
 * altrimenti un bottone che porta al modulo (Psy Zone).
 */
export default function SportelloInfo({ withForm = false }: { withForm?: boolean }) {
  return (
    <Card padding="lg" className="mx-auto max-w-4xl">
      <div className="mb-8 flex flex-col items-center gap-4 text-center">
        <IconTile>
          <HeartHandshake className="h-6 w-6" />
        </IconTile>
        <h2 className="font-display text-3xl font-semibold text-brand-900 sm:text-4xl">Sportello psicologico</h2>
        <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          Il nostro servizio di supporto psicologico rivolto a tutte le persone che sentono la necessità di elaborare e
          condividere pensieri ed emozioni rispetto la crisi climatica.
        </p>
      </div>

      <Card variant="tint" className="mb-6">
        <Prose>
          <p>
            Il servizio è <strong>gratuito</strong>, si struttura in colloqui individuali e/o di gruppo con uno/a
            psicologo/a del team di terapeuti/e di Go Zone, formato/a sul tema della crisi climatica.
          </p>
          <p>
            I colloqui si svolgono in presenza oppure in modalità online. Per le persone che vivono a Padova o zone
            limitrofe è preferibile svolgere i colloqui in presenza.
          </p>
        </Prose>
      </Card>

      {withForm ? (
        <div id="richiesta" className="scroll-mt-28">
          <p className="mb-6 text-center font-semibold text-ink">
            Per ulteriori informazioni o per accedere al servizio, compila il modulo:
          </p>
          <SportelloForm />
        </div>
      ) : (
        <div className="text-center">
          <p className="mb-4 font-semibold text-ink">Per ulteriori informazioni o per accedere al servizio:</p>
          <Button to="/sportello-psicologico#richiesta" icon={<ClipboardPen className="h-4 w-4" />}>
            Compila il modulo
          </Button>
        </div>
      )}
    </Card>
  );
}
