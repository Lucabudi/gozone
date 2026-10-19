import { useEffect, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../Footer';
import Navbar from '../Navbar';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    // Link con ancora da un'altra pagina: scorri alla sezione appena renderizzata.
    const frame = requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView());
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
  return null;
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
