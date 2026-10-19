import { useEffect, useState } from 'react';
import { cn } from '../../lib/cn';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function useTyping(text: string, enabled: boolean) {
  const [count, setCount] = useState(() => (enabled && !prefersReducedMotion() ? 0 : text.length));

  useEffect(() => {
    if (count >= text.length) return;
    const timeout = setTimeout(() => setCount((c) => c + 1), 90);
    return () => clearTimeout(timeout);
  }, [count, text.length]);

  return text.slice(0, count);
}

export function HeroSection({
  title,
  image = '/backgroundhome.jpg',
  size = 'md',
  typing = false,
}: {
  title: string;
  image?: string;
  /** lg: home; md: tutte le altre pagine. */
  size?: 'lg' | 'md';
  typing?: boolean;
}) {
  const typed = useTyping(title, typing);

  return (
    <section
      className={cn(
        'relative isolate flex items-center justify-center overflow-hidden bg-brand-900 bg-cover bg-center px-4 pt-16 pb-20 md:pt-20',
        size === 'lg' ? 'min-h-[max(85svh,30rem)]' : 'min-h-[max(55svh,22rem)]',
      )}
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-black/55 via-black/35 to-black/45" />

      <h1 className="relative max-w-5xl text-center font-display text-4xl leading-tight font-semibold text-white sm:text-5xl md:text-7xl">
        <span className="sr-only">{title}</span>
        <span aria-hidden className="invisible">
          {title}
        </span>
        <span aria-hidden className="absolute inset-0">
          {typed}
        </span>
      </h1>

      <svg
        aria-hidden
        className="absolute bottom-0 left-0 h-16 w-full md:h-28"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          className="fill-cream/50"
          d="M0,256L40,245.3C80,235,160,213,240,218.7C320,224,400,256,480,261.3C560,267,640,245,720,224C800,203,880,181,960,154.7C1040,128,1120,96,1200,85.3C1280,75,1360,85,1400,90.7L1440,96L1440,320L0,320Z"
        />
        <path
          className="fill-cream"
          d="M0,288L48,277.3C96,267,192,245,288,240C384,235,480,245,576,229.3C672,213,768,171,864,144C960,117,1056,85,1152,74.7C1248,64,1344,64,1392,64L1440,64L1440,320L0,320Z"
        />
      </svg>
    </section>
  );
}
