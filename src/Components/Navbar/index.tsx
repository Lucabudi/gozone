import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Image } from 'lucide-react';
import { Button } from '../Ui/Button';

// Componente DropDownMenu
const DropDownMenu = ({ scrolled, isMobile = false, onItemClick } : { scrolled: boolean, isMobile?: boolean, onItemClick?: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (isMobile) {
    return (
      <div className="w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between py-2 font-bold text-gray-800 hover:text-black transition-colors duration-300"
        >
          Cosa facciamo?
          <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        {isOpen && (
          <div className="pl-4 space-y-1 mt-1">
            <a 
              href="/cosa-facciamo/geo-zone" 
              className="block py-2 text-sm text-gray-600 hover:text-black transition-colors duration-300"
              onClick={onItemClick}
            >
              <img
                  width={'44px'}
                  src={"/geohome.png"}
                  alt="Geo Zone"
                  className="object-cover object-center"
              />
              Geo Zone  
            </a>
            <a 
              href="/cosa-facciamo/psy-zone" 
              className="block py-2 text-sm text-gray-600 hover:text-black transition-colors duration-300"
              onClick={onItemClick}
            >
              <img
                  width={'44px'}
                  src={"/psyhome.png"}
                  alt="Psy Zone"
                  className="object-cover object-center"
              />
              Psy Zone
            </a>
            <a 
              href="/cosa-facciamo/anthro-zone" 
              className="block py-2 text-sm text-gray-600 hover:text-black transition-colors duration-300"
              onClick={onItemClick}
            >
              <img
                  width={'44px'}
                  src={"/antrohome.png"}
                  alt="Anthro Zone"
                  className="object-cover object-center"
              />
              Anthro Zone
            </a>
            <a 
              href="/cosa-facciamo/circular-zone" 
              className="block py-2 text-sm text-gray-600 hover:text-black transition-colors duration-300"
              onClick={onItemClick}
            >
              <img
                  width={'44px'}
                  src={"/economichome.png"}
                  alt="Circular Zone"
                  className="object-cover object-center"
              />
              Circular Zone
            </a>
            {/* <a 
              href="/cosa-facciamo/progetti" 
              className={`block py-2 text-sm transition-colors duration-500 ${
                scrolled ? "text-gray-600 hover:text-black" : "text-gray-300 hover:text-white"
              }`}
            >
              I nostri Progetti
            </a> */}
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
          window.location.pathname === '/risorse'
            ? 'text-black'
            : scrolled
              ? 'text-gray-700 hover:text-black'
              : 'text-white hover:text-gray-300'
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
          <a href="/cosa-facciamo/geo-zone" className="flex flex-row items-center block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
            <img
                width={'44px'}
                src={"/geohome.png"}
                alt="Geo Zone"
                className="object-cover object-center"
            />
            <p>Geo Zone</p>
          </a>
          <a href="/cosa-facciamo/psy-zone" className="flex flex-row items-center block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
            <img
                src={"/psyhome.png"}
                alt="Psy Zone"
                width={'44px'}
                className="object-cover object-center"
            />
            Psy Zone
          </a>
          <a href="/cosa-facciamo/anthro-zone" className="flex flex-row items-center block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
            <img
                src={"/antrohome.png"}
                alt="Anthro Zone"
                width={'44px'}
                className="object-cover object-center"
            />
            Anthro Zone
          </a>
          <a href="/cosa-facciamo/circular-zone" className="flex flex-row items-center block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
            <img
                src={"/economichome.png"}
                alt="Circular Zone"
                width={'44px'}
                className="object-cover object-center"
            />
            Circular Zone
          </a>
          {/* <a href="/cosa-facciamo/progetti" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
            I nostri Progetti
          </a> */}
        </div>
      )}
    </div>
  );
};

// Componente Navbar
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
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
        <div className="max-w-8xl mx-auto px-6 py-2 sm:px-6 lg:px-10 w-full">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a
              href="/"
              className={`min-w-[150px] text-2xl font-bold transition-colors duration-500 ${
                scrolled ? "text-gray-900" : "text-white"
              } `}
            >
              {!scrolled && <img src="/gozone_logosimbolo.svg" alt="Logo" width={50} height={100} className="inline-block mr-2 fill-white text-white ml-8" />}
              {scrolled && <img src="/gozone_logocompleto.svg" alt="Logo" width={150}  height={100} className="inline-block mr-2 fill-white text-white" />}
            </a>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a
                href="/chi-siamo"
                className={`ease-out text-md font-bold transition-colors duration-500 ${
                  currentPath === '/risorse'
                    ? 'text-black'
                    : scrolled
                      ? 'text-gray-700 hover:text-black'
                      : 'text-white hover:text-gray-300'
                } ${currentPath === '/chi-siamo' ? 'underline' : ''}`}
              >
                Chi siamo
              </a>
              <div
                className={`text-md transition-colors duration-500 ${
                  currentPath === '/risorse'
                    ? 'text-black'
                    : scrolled
                      ? 'text-gray-700 hover:text-black'
                      : 'text-white hover:text-gray-300'
                }`}
              >
                <DropDownMenu scrolled={scrolled} onItemClick={() => {}} />
              </div>
              <a
                href="/sportello-psicologico"
                className={`ease-out text-md font-bold transition-colors duration-500 ${
                  currentPath === '/risorse'
                    ? 'text-black'
                    : scrolled
                      ? 'text-gray-700 hover:text-black'
                      : 'text-white hover:text-gray-300'
                } ${currentPath === '/sportello-psicologico' ? 'underline' : ''}`}
              >
                Sportello psicologico
              </a>
              {/* <a
                href="/storie-di-clima"
                className={`ease-out text-md font-bold transition-colors duration-500 ${
                  currentPath === '/risorse'
                    ? 'text-black'
                    : scrolled
                      ? 'text-gray-700 hover:text-black'
                      : 'text-white hover:text-gray-300'
                } ${currentPath === '/storie-di-clima' ? 'underline' : ''}`}
              >
                Storie di clima
              </a> */}
              {/* <a
                href="/risorse"
                className={`ease-out text-md font-bold transition-colors duration-500 ${
                  currentPath === '/risorse'
                    ? 'text-black underline'
                    : scrolled
                      ? 'text-gray-700 hover:text-black'
                      : 'text-white hover:text-gray-300'
                }`}
              >
                Risorse in biblioteca
              </a> */}
              {/* <a
                href="#contatti"
                className={`ease-out text-md font-bold transition-colors duration-500 ${
                  scrolled ? "text-gray-700 hover:text-black" : "text-white hover:text-gray-300"
                } ${currentPath === '#contatti' ? 'underline' : ''}`}
              >
                Contatti
              </a> */}
            </div>

            <div className="hidden md:flex space-x-2 text-white">
              {/* <Button onClick={() => {}} text="Volontari" variant='outline' scrolled /> */}
              <Button onClick={() => {}} text="Sostienici" scrolled />
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
          className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-gray-200 ${
            isOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="px-6 py-4 space-y-1">
            <a
              href="/chi-siamo"
              className={`block py-2 font-bold text-gray-800 hover:text-black transition-colors duration-300 ${currentPath === '/chi-siamo' ? 'underline' : ''}`}
              onClick={closeMenu}
            >
              Chi siamo
            </a>
            <DropDownMenu scrolled={scrolled} isMobile={true} onItemClick={closeMenu} />
            <a
              href="/sportello-psicologico"
              className={`block py-2 font-bold text-gray-800 hover:text-black transition-colors duration-300 ${currentPath === '/sportello-psicologico' ? 'underline' : ''}`}
              onClick={closeMenu}
            >
              Sportello psicologico
            </a>
            {/* <a
              href="/storie-di-clima"
              className={`block py-2 font-bold transition-colors duration-500 ${
                currentPath === '/risorse'
                  ? 'text-black'
                  : scrolled
                    ? 'text-gray-700 hover:text-black'
                    : 'text-white hover:text-gray-300'
              } ${currentPath === '/storie-di-clima' ? 'underline' : ''}`}
              onClick={closeMenu}
            >
              Storie di clima
            </a> */}
            {/* <a
              href="/risorse"
              className={`block py-2 font-bold transition-colors duration-500 ${
                currentPath === '/risorse'
                  ? 'text-black underline'
                  : scrolled
                    ? 'text-gray-700 hover:text-black'
                    : 'text-white hover:text-gray-300'
              }`}
              onClick={closeMenu}
            >
              Risorse in biblioteca
            </a> */}
            {/* <a
              href="#contatti"
              className={`block py-2 font-bold transition-colors duration-500 ${
                currentPath === '/risorse'
                  ? 'text-black'
                  : scrolled
                    ? 'text-gray-700 hover:text-black'
                    : 'text-white hover:text-gray-300'
              } ${currentPath === '#contatti' ? 'underline' : ''}`}
              onClick={closeMenu}
            >
              Contatti
            </a> */}
            <div className="pt-4 space-y-2 border-t border-gray-200">
              {/* <button 
                className="w-full px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors font-bold"
                onClick={closeMenu}
              >
                Volontari
              </button> */}
              <button 
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-black transition-colors duration-300 font-bold"
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