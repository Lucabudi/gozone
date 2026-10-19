import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

type Size = 'sm' | 'md' | 'lg';

const containerSizes: Record<Size, string> = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-6xl',
};

export function Container({
  size = 'lg',
  className,
  children,
}: {
  size?: Size;
  className?: string;
  children: ReactNode;
}) {
  return <div className={cn('mx-auto w-full px-4 sm:px-6 lg:px-8', containerSizes[size], className)}>{children}</div>;
}

/** Sezione di pagina con spaziatura verticale standard e contenitore centrato. */
export function Section({
  id,
  size = 'lg',
  tone = 'default',
  className,
  containerClassName,
  decor,
  children,
}: {
  id?: string;
  size?: Size;
  tone?: 'default' | 'tint';
  className?: string;
  containerClassName?: string;
  /** Elementi decorativi assoluti, fuori dal contenitore. */
  decor?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        'relative scroll-mt-24 py-14 md:py-20',
        tone === 'tint' && 'bg-brand-50/70',
        decor !== undefined && 'overflow-hidden',
        className,
      )}
    >
      {decor}
      <Container size={size} className={cn('relative', containerClassName)}>
        {children}
      </Container>
    </section>
  );
}
