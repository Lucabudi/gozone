import type { ReactNode } from 'react';
import { useInView } from '../../hooks/useInView';
import { cn } from '../../lib/cn';

/** Dissolvenza dal basso quando l'elemento entra nel viewport. */
export function FadeIn({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={cn('transition duration-700 ease-out', inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0', className)}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

/** Sfumature decorative di sfondo (da passare a <Section decor>). */
export function DecorBlobs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute top-[8%] -right-24 h-72 w-72 animate-float rounded-full bg-[radial-gradient(circle,rgba(134,239,172,0.35)_0%,transparent_70%)] md:h-[32rem] md:w-[32rem]" />
      <div className="absolute bottom-[5%] -left-24 h-64 w-64 animate-float rounded-full bg-[radial-gradient(circle,rgba(147,197,253,0.25)_0%,transparent_70%)] [animation-delay:2s] md:h-[26rem] md:w-[26rem]" />
    </div>
  );
}
