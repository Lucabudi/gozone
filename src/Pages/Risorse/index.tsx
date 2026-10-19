import { useCallback, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { HeroSection } from '../../Components/HeroSection';
import { Modal, Prose, Section } from '../../Components/Ui';
import { BOOKS, type Book } from '../../data/books';

export default function RisorseBiblioteca() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const close = useCallback(() => setSelectedBook(null), []);

  return (
    <>
      <HeroSection title="Risorse in biblioteca" />

      <Section>
        <ul className="grid gap-6 md:grid-cols-2">
          {BOOKS.map((book) => (
            <li key={book.id}>
              <button
                type="button"
                onClick={() => setSelectedBook(book)}
                className="group flex h-full w-full flex-col gap-5 rounded-2xl border border-line bg-white/80 p-5 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md sm:flex-row sm:p-6 md:rounded-3xl"
              >
                <img
                  src={book.cover}
                  alt=""
                  loading="lazy"
                  className="aspect-[2/3] w-28 shrink-0 rounded-xl object-cover shadow-md sm:w-32"
                />
                <div className="flex flex-1 flex-col">
                  <h2 className="font-display text-xl leading-snug font-semibold text-brand-900 sm:text-2xl">
                    {book.title}
                  </h2>
                  <p className="mt-1 text-sm font-semibold text-accent">{book.subtitle}</p>
                  <p className="mt-2 text-sm text-muted italic">Recensione a cura di {book.author}</p>
                  <p className="mt-3 line-clamp-4 flex-1 leading-relaxed text-ink/85">{book.preview}</p>
                  <span className="mt-4 inline-flex items-center gap-1 font-semibold text-accent">
                    Leggi la recensione completa
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </Section>

      <Modal open={selectedBook !== null} onClose={close} label={selectedBook?.title ?? 'Recensione'}>
        {selectedBook && (
          <>
            <div className="mb-8 flex flex-col gap-6 sm:flex-row">
              <img
                src={selectedBook.cover}
                alt=""
                className="aspect-[2/3] w-36 shrink-0 rounded-2xl object-cover shadow-lg sm:w-44"
              />
              <div>
                <h2 className="font-display text-2xl leading-tight font-semibold text-brand-900 sm:text-4xl">
                  {selectedBook.title}
                </h2>
                <p className="mt-2 text-lg font-semibold text-accent">{selectedBook.subtitle}</p>
                <p className="mt-3 text-muted italic">Recensione a cura di {selectedBook.author}</p>
              </div>
            </div>
            <Prose>
              {selectedBook.fullReview.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </Prose>
          </>
        )}
      </Modal>
    </>
  );
}
