import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#fafbf7] border-t border-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* --- Colonna 1: Contatti --- */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Contatti</h3>
          <ul className="text-gray-700 space-y-1">
            <li>Sede</li>
            <li>E-mail</li>
            <li>P. IVA</li>
          </ul>

          <div className="pt-4">
            <p className="font-semibold text-gray-900 flex items-center gap-2">
              Sostienici / Dona <span className="text-indigo-800 text-xl">❤️</span>
            </p>
          </div>
        </div>

        {/* --- Colonna 2: Newsletter --- */}
        <div className="bg-[#2e6750] text-white rounded-lg p-6 text-center flex flex-col items-center justify-center">
          <h3 className="text-xl font-semibold mb-4">
            Vuoi ricevere la newsletter?
          </h3>
          <button className="bg-[#c8a4f6] text-[#1f1f1f] font-semibold px-6 py-2 rounded-full hover:bg-[#b68ef3] transition">
            Iscriviti!
          </button>

          {/* Social icons */}
          <div className="flex gap-4 mt-6">
            <a href="#" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* --- Colonna 3: Mappa / Luogo --- */}
        <div className="flex flex-col items-start">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">
            TROVI LO SPORTELLO PSICOLOGICO QUI:
          </h3>
          <div className="relative w-full h-40 rounded-md overflow-hidden shadow-sm">
            <img
              src="/images/map.jpg" // 👉 Inserisci un'immagine in /public/images/map.jpg
              alt="Mappa posizione"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* --- Bottom section --- */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} — Tutti i diritti riservati.
      </div>
    </footer>
  );
}
