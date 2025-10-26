import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

// Componente DropDownMenu
const DropDownMenu = ({ scrolled, isMobile = false, onItemClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (isMobile) {
    return (
      <div className="w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full flex items-center justify-between py-2 font-bold transition-colors duration-500 ${
            scrolled ? "text-gray-700" : "text-white"
          }`}
        >
          Cosa facciamo
          <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        {isOpen && (
          <div className="pl-4 space-y-1 mt-1">
            <a 
              href="#servizio1" 
              className={`block py-2 text-sm transition-colors duration-500 ${
                scrolled ? "text-gray-600 hover:text-black" : "text-gray-300 hover:text-white"
              }`}
              onClick={onItemClick}
            >
              Geo Zone  
            </a>
            <a 
              href="#servizio2" 
              className={`block py-2 text-sm transition-colors duration-500 ${
                scrolled ? "text-gray-600 hover:text-black" : "text-gray-300 hover:text-white"
              }`}
              onClick={onItemClick}
            >
              Psy Zone
            </a>
            <a 
              href="#servizio3" 
              className={`block py-2 text-sm transition-colors duration-500 ${
                scrolled ? "text-gray-600 hover:text-black" : "text-gray-300 hover:text-white"
              }`}
              onClick={onItemClick}
            >
              Anthropological Zone
            </a>
            <a 
              href="#servizio4" 
              className={`block py-2 text-sm transition-colors duration-500 ${
                scrolled ? "text-gray-600 hover:text-black" : "text-gray-300 hover:text-white"
              }`}
              onClick={onItemClick}
            >
              Economic Zone
            </a>
            <a 
              href="#servizio5" 
              className={`block py-2 text-sm transition-colors duration-500 ${
                scrolled ? "text-gray-600 hover:text-black" : "text-gray-300 hover:text-white"
              }`}
              onClick={onItemClick}
            >
              I nostri Progetti
            </a>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className={`flex items-center space-x-1 font-bold transition-colors duration-500 ${
          scrolled ? "text-gray-700 hover:text-black" : "text-white hover:text-gray-300"
        }`}
      >
        Cosa facciamo
        <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div
          className="absolute pt-2 w-56 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-100"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <a href="#servizio1" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
            Geo Zone  
          </a>
          <a href="#servizio2" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
            Psy Zone
          </a>
          <a href="#servizio3" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
            Anthropological Zone
          </a>
          <a href="#servizio4" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
            Economic Zone
          </a>
          <a href="#servizio5" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
            I nostri Progetti
          </a>
        </div>
      )}
    </div>
  );
};

// Componente Navbar
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm"
            : "bg-transparent border-b-0"
        }`}
      >
        <div className="max-w-8xl mx-auto px-6 sm:px-6 lg:px-10 w-full">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a
              href="/"
              className={`text-2xl font-bold transition-colors duration-500 ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              MyWebsite
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a
                href="/chi-siamo"
                className={`ease-out text-md font-bold transition-colors duration-500 ${
                  scrolled ? "text-gray-700 hover:text-black" : "text-white hover:text-gray-300"
                } hover:underline`}
              >
                Chi siamo
              </a>
              <div
                className={`text-md transition-colors duration-500 ${
                  scrolled ? "text-gray-700 hover:text-black" : "text-white hover:text-gray-300"
                }`}
              >
                <DropDownMenu scrolled={scrolled} />
              </div>
              <a
                href="#sportello"
                className={`ease-out text-md font-bold transition-colors duration-500 ${
                  scrolled ? "text-gray-700 hover:text-black" : "text-white hover:text-gray-300"
                } hover:underline`}
              >
                Sportello psicologico
              </a>
              <a
                href="#storie"
                className={`ease-out text-md font-bold transition-colors duration-500 ${
                  scrolled ? "text-gray-700 hover:text-black" : "text-white hover:text-gray-300"
                } hover:underline`}
              >
                Storie di clima
              </a>
              <a
                href="#biblioteca"
                className={`ease-out text-md font-bold transition-colors duration-500 ${
                  scrolled ? "text-gray-700 hover:text-black" : "text-white hover:text-gray-300"
                } hover:underline`}
              >
                Risorse in biblioteca
              </a>
              <a
                href="#contatti"
                className={`ease-out text-md font-bold transition-colors duration-500 ${
                  scrolled ? "text-gray-700 hover:text-black" : "text-white hover:text-gray-300"
                } hover:underline`}
              >
                Contatti
              </a>
            </div>

            <div className="hidden md:flex space-x-2">
              <button
                className={`px-4 py-2 rounded transition-colors duration-500 ${
                  scrolled
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
                }`}
              >
                Volontari
              </button>
              <button
                className={`px-4 py-2 rounded transition-colors duration-500 ${
                  scrolled
                    ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    : "bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
                }`}
              >
                Sostienici
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={`md:hidden transition-colors duration-500 ${
                scrolled ? "text-gray-800 hover:text-black" : "text-white hover:text-gray-300"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-screen" : "max-h-0"
          } ${
            scrolled ? "bg-white border-t border-gray-200" : "bg-gray-900/95 backdrop-blur-md"
          }`}
        >
          <div className="px-6 py-4 space-y-1">
            <a
              href="/chi-siamo"
              className={`block py-2 font-bold transition-colors duration-500 ${
                scrolled ? "text-gray-700 hover:text-black" : "text-white hover:text-gray-300"
              }`}
              onClick={closeMenu}
            >
              Chi siamo
            </a>
            
            <DropDownMenu scrolled={scrolled} isMobile={true} onItemClick={closeMenu} />
            
            <a
              href="#sportello"
              className={`block py-2 font-bold transition-colors duration-500 ${
                scrolled ? "text-gray-700 hover:text-black" : "text-white hover:text-gray-300"
              }`}
              onClick={closeMenu}
            >
              Sportello psicologico
            </a>
            <a
              href="#storie"
              className={`block py-2 font-bold transition-colors duration-500 ${
                scrolled ? "text-gray-700 hover:text-black" : "text-white hover:text-gray-300"
              }`}
              onClick={closeMenu}
            >
              Storie di clima
            </a>
            <a
              href="#biblioteca"
              className={`block py-2 font-bold transition-colors duration-500 ${
                scrolled ? "text-gray-700 hover:text-black" : "text-white hover:text-gray-300"
              }`}
              onClick={closeMenu}
            >
              Risorse in biblioteca
            </a>
            <a
              href="#contatti"
              className={`block py-2 font-bold transition-colors duration-500 ${
                scrolled ? "text-gray-700 hover:text-black" : "text-white hover:text-gray-300"
              }`}
              onClick={closeMenu}
            >
              Contatti
            </a>
            <div className="pt-4 space-y-2 border-t border-gray-200/20">
              <button 
                className="w-full px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors font-bold"
                onClick={closeMenu}
              >
                Volontari
              </button>
              <button 
                className="w-full px-4 py-2 rounded bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors font-bold"
                onClick={closeMenu}
              >
                Sostienici
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}