import type { ElementType, ReactNode } from 'react';
import { cn } from '../../lib/cn';

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = 'center',
  as: Tag = 'h2',
  className,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  intro?: ReactNode;
  align?: 'center' | 'left';
  as?: ElementType;
  className?: string;
}) {
  const centered = align === 'center';
  return (
    <div className={cn('mb-10 max-w-3xl md:mb-14', centered && 'mx-auto text-center', className)}>
      {eyebrow && <p className="mb-3 text-xs font-bold tracking-[0.2em] text-accent uppercase">{eyebrow}</p>}
      <Tag className="font-display text-3xl leading-tight font-semibold text-brand-900 sm:text-4xl md:text-5xl">
        {title}
      </Tag>
      <span aria-hidden className={cn('mt-5 block h-1 w-14 rounded-full bg-accent', centered && 'mx-auto')} />
      {intro && <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">{intro}</p>}
    </div>
  );
}

/** Titolo di secondo livello dentro una card o una sezione. */
export function Subheading({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h3 className={cn('font-display text-2xl leading-snug font-semibold text-brand-900 sm:text-3xl', className)}>
      {children}
    </h3>
  );
}

/** Paragrafo introduttivo grande. */
export function Lead({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        'text-lg leading-relaxed text-muted sm:text-xl [&_strong]:font-semibold [&_strong]:text-brand-700',
        className,
      )}
    >
      {children}
    </p>
  );
}

/** Blocco di testo corrente. */
export function Prose({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        'space-y-5 text-base leading-relaxed text-ink/85 sm:text-lg [&_b]:font-semibold [&_b]:text-ink [&_strong]:font-semibold [&_strong]:text-ink',
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Quote({ children }: { children: ReactNode }) {
  return (
    <figure className="mx-auto max-w-3xl border-l-4 border-accent pl-5 sm:pl-8">
      <blockquote className="font-display text-xl leading-relaxed text-brand-900 italic sm:text-2xl">
        {children}
      </blockquote>
    </figure>
  );
}
