import type { ZoneId } from './zones';

export type TeamMember = {
  name: string;
  role: string;
  /** Contiene <b> per le parole chiave: testo statico, non input utente. */
  description: string;
  image: string;
  zone: ZoneId;
};

export const TEAM: TeamMember[] = [
  {
    name: 'Giuseppe Della Fera',
    role: 'Co-founder e Presidente di Go-Zone',
    description:
      'Geografo e supervisore accademico presso l’Università degli Studi di Padova, svolge attività di ricerca e alta formazione all’interno del Dipartimento ICEA. Si occupa di <b>didattica, divulgazione scientifica e progettazione socio-ambientale</b>, con particolare attenzione all’applicazione degli strumenti della <b>GIScience</b> e del <b>Remote Sensing</b> nello studio dei territori e dei processi di trasformazione ambientale.',
    image: '/giuseppe_df.jpeg',
    zone: 'geo',
  },
  {
    name: 'Stefano Della Fera',
    role: 'Co-founder',
    description:
      'Ricercatore presso l’Istituto di Fisica Applicata “Nello Carrara” del CNR di Firenze, si dedica allo studio dell’<b>atmosfera terrestre</b>, del <b>bilancio energetico del sistema climatico</b> e dell’<b>evoluzione del clima</b>. Collabora a progetti scientifici a supporto di missioni satellitari dell’<b>Agenzia Spaziale Italiana</b> e dell’<b>Agenzia Spaziale Europea</b>, contribuendo allo sviluppo di strumenti e metodi avanzati per l’osservazione della Terra.',
    image: '/stefano_df.jpeg',
    zone: 'geo',
  },
  {
    name: 'Martina Andrea Viecelli',
    role: 'Co-founder e Vicepresidente di Go-Zone',
    description:
      'Psicologa clinica specializzata in <b>Psicologia delle Emergenze Sanitarie</b>, è dottoranda di ricerca presso l’Università degli Studi di Parma con un progetto dedicato all’impatto del <b>cambiamento climatico sulla salute mentale</b>. Integra attività clinica, ricerca e divulgazione, occupandosi dei vissuti psicologici legati alla crisi climatica e della promozione di interventi orientati al benessere individuale e comunitario.',
    image: '/andrea_viecelli.jpeg',
    zone: 'psy',
  },
  {
    name: 'Margherita Zuecco',
    role: 'Co-founder',
    description:
      'Psicologa con un interesse specifico per le connessioni tra <b>salute mentale e crisi climatica</b>, collabora a progetti di ricerca sull’eco-ansia e sugli effetti psicologici del cambiamento climatico. Ha maturato esperienza clinica in contesti psicoanalitici e all’interno di servizi pubblici dedicati alle dipendenze, lavorando con adolescenti e adulti in percorsi di sostegno e cura.',
    image: '/MArghe_zuecco.jpeg',
    zone: 'psy',
  },
  {
    name: 'Andrea Varotto',
    role: 'Co-founder',
    description:
      'Economista con esperienza in <b>sviluppo locale, progettazione europea e sociale e analisi economico-finanziarie</b>. Ha lavorato in contesti nazionali e internazionali occupandosi di business plan, progettazione per l’innovazione sociale e strategie di sostenibilità ambientale. Si concentra in particolare sul rafforzamento delle <b>reti territoriali</b> e sull’inclusione socio-lavorativa attraverso approcci integrati e partecipativi.',
    image: '/andrea_varotto.jpeg',
    zone: 'circular',
  },
  {
    name: 'Alessandro Carusi',
    role: 'Co-founder',
    description:
      'Economista e consulente gestionale con consolidata esperienza in <b>strategia organizzativa e project management</b>. Negli ultimi anni ha sviluppato competenze specifiche nell’ambito della <b>sostenibilità ambientale</b> e delle <b>sfide climatiche</b>, unendo un approccio analitico orientato ai risultati alla progettazione di interventi innovativi e ad alto impatto.',
    image: '/alessandro_carusi.jpg',
    zone: 'circular',
  },
  {
    name: 'Clelia Viecelli',
    role: 'Co-founder',
    description:
      'Antropologa specializzata in studi sul cibo, l’ambiente e le interazioni tra umani e non umani, è docente universitaria e direttrice accademica del programma <b>Food, Sustainability & the Environment</b> presso l’Umbra Institute di Perugia. Ha conseguito il dottorato di ricerca presso la <b>University of Southampton (UK)</b> ed è ricercatrice presso l’Università di Siena. I suoi interessi di ricerca includono i <b>paesaggi alimentari</b>, i processi culturali legati al vino e alle pratiche agroalimentari, e le dinamiche sociali nei sistemi ecologici contemporanei.',
    image: '/Clelia_viecelli.JPG',
    zone: 'anthro',
  },
];
