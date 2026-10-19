import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { ZONES } from '../../data/zones';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';
import { cn } from '../../lib/cn';
import { Button } from '../Ui';

// Pagine esistenti ma non ancora in menu: /storie-di-clima, /risorse, /cosa-facciamo/progetti.
const LINKS = [
  { label: 'Chi siamo', to: '/chi-siamo' },
  { label: 'Sportello psicologico', to: '/sportello-psicologico' },
];

function ZonesDropdown({ solid }: { solid: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  const active = pathname.startsWith('/cosa-facciamo');

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        // Su touch il tap genera anche mouseenter: un toggle lo richiuderebbe subito.
        onClick={() => setOpen(true)}
        className={cn(navLinkClass(solid, active), 'flex items-center gap-1')}
      >
        Cosa facciamo
        <ChevronDown className={cn('h-4 w-4 transition-transform', open && 'rotate-180')} />
      </button>
      {open && (
        <div className="absolute top-full left-1/2 w-64 -translate-x-1/2 pt-3">
          <ul className="rounded-2xl border border-line bg-white p-2 shadow-xl">
            {ZONES.map((zone) => (
              <li key={zone.id} data-zone={zone.id}>
                <NavLink
                  to={zone.path}
                  className={({ isActive }) =>
                    cn(
                      'flex items-center gap-3 rounded-xl px-3 py-2 font-medium text-ink transition hover:bg-accent/10 hover:text-accent',
                      isActive && 'bg-accent/10 text-accent',
                    )
                  }
                >
                  <img src={zone.image} alt="" width={40} height={40} className="h-10 w-10 object-contain" />
                  {zone.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

const navLinkClass = (solid: boolean, active: boolean) =>
  cn(
    'text-[15px] font-semibold transition-colors duration-300 underline-offset-8 decoration-2',
    solid ? 'text-ink hover:text-brand-600' : 'text-white hover:text-white/75',
    active && 'underline',
  );

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const solid = scrolled || menuOpen;

  useBodyScrollLock(menuOpen);

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <>
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        solid ? 'border-b border-line bg-cream/90 shadow-sm backdrop-blur-md' : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 md:h-20 lg:px-8">
        <Link to="/" aria-label="Go-Zone, torna alla home" className="flex shrink-0 items-center">
          {solid ? (
            <img src="/gozone_logocompleto.svg" alt="Go-Zone" width={140} height={40} className="h-9 w-auto md:h-10" />
          ) : (
            <img src="/gozone_logosimbolo.svg" alt="Go-Zone" width={48} height={48} className="h-10 w-auto md:h-12" />
          )}
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          <NavLink to={LINKS[0].to} className={({ isActive }) => navLinkClass(solid, isActive)}>
            {LINKS[0].label}
          </NavLink>
          <ZonesDropdown solid={solid} />
          {LINKS.slice(1).map((link) => (
            <NavLink key={link.to} to={link.to} className={({ isActive }) => navLinkClass(solid, isActive)}>
              {link.label}
            </NavLink>
          ))}
        </div>
        <div className="hidden md:block">
          {/* TODO: collegare a una pagina o a un link per le donazioni. */}
          <Button>Sostienici</Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className={cn('-mr-2 rounded-full p-2 md:hidden', solid ? 'text-ink' : 'text-white')}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
    </header>

      {/*
        Mobile panel: fratello dell'header, non figlio. Il backdrop-blur dell'header
        diventerebbe il riferimento del position:fixed e il pannello avrebbe altezza 0.
      */}
      <div
        id="mobile-menu"
        className={cn(
          'fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto overscroll-contain bg-cream transition duration-300 md:hidden',
          menuOpen ? 'visible translate-y-0 opacity-100' : 'pointer-events-none invisible -translate-y-2 opacity-0',
        )}
      >
        <div className="space-y-8 px-4 py-8 sm:px-6">
          <NavLink to={LINKS[0].to} className="block font-display text-2xl font-semibold text-brand-900">
            {LINKS[0].label}
          </NavLink>
          <div>
            <p className="mb-3 text-xs font-bold tracking-[0.2em] text-muted uppercase">Cosa facciamo</p>
            <ul className="grid grid-cols-2 gap-3">
              {ZONES.map((zone) => (
                <li key={zone.id} data-zone={zone.id}>
                  <Link
                    to={zone.path}
                    className="flex flex-col items-center gap-2 rounded-2xl border border-line bg-white p-3 text-center text-sm font-semibold text-accent"
                  >
                    <img src={zone.image} alt="" width={56} height={56} className="h-14 w-14 object-contain" />
                    {zone.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {LINKS.slice(1).map((link) => (
            <NavLink key={link.to} to={link.to} className="block font-display text-2xl font-semibold text-brand-900">
              {link.label}
            </NavLink>
          ))}
          <Button className="w-full">Sostienici</Button>
        </div>
      </div>
    </>
  );
}
