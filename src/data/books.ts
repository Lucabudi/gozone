export type Book = {
  id: number;
  cover: string;
  title: string;
  subtitle: string;
  author: string;
  preview: string;
  fullReview: string;
};

// TODO: recensioni segnaposto, da sostituire con i contenuti reali.
export const BOOKS: Book[] = [
  {
    id: 1,
    cover: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=400&h=600&fit=crop",
    title: "Il Potere delle Narrazioni Climatiche",
    subtitle: "Come le storie plasmano la nostra comprensione del cambiamento",
    author: "Maria Rossi",
    preview: "In questo libro Tizio Caio esplora come le narrazioni culturali influenzino profondamente la percezione pubblica del cambiamento climatico. Attraverso un'analisi antropologica delle storie che raccontiamo...",
    fullReview: "In questo libro Tizio Caio esplora come le narrazioni culturali influenzino profondamente la percezione pubblica del cambiamento climatico. Attraverso un'analisi antropologica delle storie che raccontiamo, l'autore dimostra come i miti, le metafore e i racconti collettivi modellino non solo la nostra comprensione del problema, ma anche le soluzioni che immaginiamo possibili.\n\nIl volume si articola in tre sezioni principali: la prima analizza le narrazioni dominanti sulla crisi climatica nei media occidentali, evidenziando come spesso si privilegi un approccio catastrofista che paralizza l'azione. La seconda parte esplora narrazioni alternative provenienti da comunità indigene e culture non occidentali, che offrono prospettive più relazionali e integrate con l'ambiente.\n\nParticolarmente interessante è il capitolo dedicato alle 'contro-narrazioni della speranza', dove l'autore documenta come gruppi locali stiano riscrivendo la storia del cambiamento climatico attraverso pratiche concrete di resilienza e adattamento. Questi racconti non negano la gravità della situazione, ma offrono esempi tangibili di trasformazione possibile.\n\nUn libro essenziale per chiunque voglia comprendere come il linguaggio e le storie che utilizziamo possano diventare strumenti di cambiamento sociale e culturale."
  },
  {
    id: 2,
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
    title: "Geografie dell'Adattamento",
    subtitle: "Comunità locali di fronte ai mutamenti ambientali",
    author: "Giuseppe Verdi",
    preview: "Una ricerca sul campo che documenta le strategie di adattamento di diverse comunità costiere italiane. Il libro presenta casi studio dettagliati che rivelano come saperi locali e innovazione...",
    fullReview: "Una ricerca sul campo che documenta le strategie di adattamento di diverse comunità costiere italiane. Il libro presenta casi studio dettagliati che rivelano come saperi locali e innovazione tecnologica possano integrarsi per rispondere efficacemente ai cambiamenti in corso.\n\nL'autore ha trascorso tre anni vivendo in cinque comunità costiere diverse, dall'Adriatico al Tirreno, documentando attraverso l'osservazione partecipante come pescatori, agricoltori e residenti stiano affrontando l'innalzamento del livello del mare, l'erosione costiera e i cambiamenti nei pattern climatici.\n\nCiò che emerge è un quadro complesso ma incoraggiante: lungi dall'essere vittime passive, queste comunità stanno sviluppando forme sofisticate di adattamento che combinano conoscenze tradizionali tramandate da generazioni con nuove tecnologie e approcci collaborativi.\n\nIl capitolo sulle 'mappe emotive' del territorio è particolarmente toccante: attraverso interviste e disegni partecipati, l'autore mostra come il cambiamento ambientale stia trasformando non solo il paesaggio fisico, ma anche i legami affettivi e identitari delle persone con i loro luoghi.\n\nUn contributo fondamentale alla letteratura sull'adattamento climatico che mette al centro le persone e i loro saperi."
  },
  {
    id: 3,
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop",
    title: "Antropologia della Resilienza",
    subtitle: "Pratiche comunitarie nei tempi di crisi",
    author: "Laura Bianchi",
    preview: "Un'analisi profonda di come le comunità costruiscano resilienza attraverso reti di solidarietà, pratiche condivise e nuove forme di organizzazione sociale. Il testo esplora esempi concreti...",
    fullReview: "Un'analisi profonda di come le comunità costruiscano resilienza attraverso reti di solidarietà, pratiche condivise e nuove forme di organizzazione sociale. Il testo esplora esempi concreti da tutto il mondo, offrendo una prospettiva antropologica sulla capacità umana di adattarsi e prosperare anche in condizioni difficili.\n\nLaura Bianchi parte da una critica costruttiva del concetto di resilienza, spesso usato in modo superficiale o per giustificare l'inazione istituzionale. Invece di celebrare acriticamente la capacità delle comunità di 'resistere', l'autrice indaga le condizioni materiali, sociali e culturali che rendono possibile una vera trasformazione.\n\nAttraverso etnografie condotte in quattro continenti, il libro documenta pratiche di mutuo aiuto, economie solidali, gestione collettiva delle risorse e forme innovative di governance locale. Ogni caso studio è analizzato non solo nei suoi aspetti pratici, ma anche nelle sue dimensioni simboliche e rituali.\n\nParticolarmente illuminante è la sezione dedicata al ruolo delle donne nella costruzione di resilienza comunitaria. L'autrice mostra come in molti contesti siano proprio le reti femminili a garantire coesione sociale e trasmissione di saperi essenziali.\n\nIl volume si chiude con una riflessione metodologica sulla ricerca-azione partecipativa, offrendo spunti preziosi per ricercatori e operatori del territorio."
  },
  {
    id: 4,
    cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop",
    title: "Paesaggi in Transizione",
    subtitle: "Memoria, identità e trasformazione territoriale",
    author: "Marco Neri",
    preview: "Come cambiano le identità culturali quando cambiano i paesaggi? Questo volume esplora la relazione profonda tra territorio e comunità attraverso la lente della memoria collettiva...",
    fullReview: "Come cambiano le identità culturali quando cambiano i paesaggi? Questo volume esplora la relazione profonda tra territorio e comunità attraverso la lente della memoria collettiva e delle pratiche di costruzione identitaria.\n\nMarco Neri affronta un tema delicato e spesso trascurato: la dimensione emotiva e identitaria del cambiamento ambientale. Quando un paesaggio familiare si trasforma - sia per cause climatiche che per interventi antropici - non si perdono solo elementi fisici, ma anche significati, storie e senso di appartenenza.\n\nIl libro è strutturato come un viaggio attraverso diversi tipi di paesaggi: montani, agricoli, urbani, costieri. In ognuno, l'autore documenta come le comunità stiano elaborando il lutto per ciò che è andato perduto e, contemporaneamente, immaginando nuove forme di relazione con il territorio trasformato.\n\nUn intero capitolo è dedicato ai 'rituali del paesaggio': pratiche collettive attraverso cui le comunità celebrano, commemorano o risignificano i luoghi del cambiamento. Dalle processioni che seguono nuovi percorsi dopo frane e alluvioni, alle feste che celebrano nuove colture adattate al clima mutato.\n\nIl volume si distingue per la ricchezza del materiale visivo: fotografie d'archivio, disegni comunitari e mappe partecipate accompagnano il testo, rendendo tangibile la trasformazione.\n\nUna lettura essenziale per comprendere le dimensioni culturali della transizione ecologica."
  }
];
