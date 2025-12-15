import React, { useState, useEffect } from 'react';
import { BookOpen, ArrowLeft, X } from 'lucide-react';

export default function RisorseBiblioteca() {
  const [scrollY, setScrollY] = useState(0);
  type Book = {
    id: number;
    cover: string;
    title: string;
    subtitle: string;
    author: string;
    preview: string;
    fullReview: string;
  };

  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const books = [
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

  return (
    <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 min-h-screen pt-16">
      
      {/* Header */}
      <header className="relative z-10 px-6 py-20 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-6">
            <BookOpen className="w-12 h-12 text-orange-600" />
          </div>
          <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-orange-600 via-rose-600 to-pink-600 bg-clip-text text-transparent">
            RISORSE IN BIBLIOTECA
          </h1>
        </div>
      </header>

      {/* Books Grid */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {books.map((book) => (
              <div
                key={book.id}
                onClick={() => setSelectedBook(book)}
                className="group cursor-pointer backdrop-blur-xl bg-white/80 rounded-3xl overflow-hidden border border-white/40 hover:border-orange-300 hover:shadow-2xl hover:shadow-orange-200/50 transition-all duration-500 hover:scale-105"
              >
                <div className="flex gap-6 p-6">
                  <div className="flex-shrink-0">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-32 h-48 object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-shadow"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-sm font-semibold text-orange-600 mb-3">{book.subtitle}</p>
                    <p className="text-sm text-gray-600 mb-4 italic">Recensione a cura di {book.author}</p>
                    <p className="text-gray-700 leading-relaxed line-clamp-4 flex-1">
                      {book.preview}
                    </p>
                    <div className="mt-4 inline-flex items-center text-orange-600 font-semibold group-hover:gap-2 transition-all">
                      Leggi la recensione completa
                      <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="backdrop-blur-xl bg-gradient-to-br from-orange-100/80 to-rose-100/80 rounded-3xl p-12 border border-orange-200 shadow-xl">
            <p className="text-xl text-gray-700 italic">
              aprendo la recensione...
            </p>
          </div>
        </div>
      </section> */}

      {/* Modal for Full Review */}
      {selectedBook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/50 backdrop-blur-sm">
          <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <button
              onClick={() => setSelectedBook(null)}
              className="sticky top-6 float-right mr-6 p-3 bg-white/80 hover:bg-white rounded-full shadow-lg hover:shadow-xl transition-all z-10"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>

            <div className="p-12">
              <button
                onClick={() => setSelectedBook(null)}
                className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold mb-8 group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                Torna alle recensioni
              </button>

              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <img
                  src={selectedBook.cover}
                  alt={selectedBook.title}
                  className="w-48 h-72 object-cover rounded-2xl shadow-2xl mx-auto md:mx-0"
                />
                <div className="flex-1">
                  <h2 className="text-4xl font-black mb-3 bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">
                    {selectedBook.title}
                  </h2>
                  <p className="text-xl font-semibold text-orange-600 mb-4">{selectedBook.subtitle}</p>
                  <p className="text-lg text-gray-700 italic mb-6">Recensione a cura di {selectedBook.author}</p>
                </div>
              </div>

              <div className="backdrop-blur-xl bg-white/60 rounded-2xl p-8 border border-orange-200">
                <div className="prose prose-lg max-w-none">
                  {selectedBook.fullReview.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="h-32"></div>
    </div>
  );
}