import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

type CardVariant = 'default' | 'tint' | 'dark';

const cardVariants: Record<CardVariant, string> = {
  default: 'border border-line bg-white/80 shadow-sm',
  tint: 'border border-accent/15 bg-accent/5',
  dark: 'bg-brand-800 text-cream shadow-lg',
};

const cardPadding = {
  md: 'p-6 sm:p-8',
  lg: 'p-6 sm:p-10 md:p-12',
};

export function Card({
  variant = 'default',
  padding = 'md',
  className,
  children,
}: {
  variant?: CardVariant;
  padding?: keyof typeof cardPadding;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn('rounded-2xl md:rounded-3xl', cardVariants[variant], cardPadding[padding], className)}>
      {children}
    </div>
  );
}

export function IconTile({ children, size = 'md' }: { children: ReactNode; size?: 'sm' | 'md' }) {
  return (
    <span
      className={cn(
        'flex shrink-0 items-center justify-center bg-accent/10 text-accent',
        size === 'md' ? 'h-12 w-12 rounded-xl' : 'h-10 w-10 rounded-lg',
      )}
    >
      {children}
    </span>
  );
}

/** Card con icona e/o numero, titolo opzionale e testo. */
export function FeatureCard({
  icon,
  index,
  title,
  children,
}: {
  icon?: ReactNode;
  index?: number;
  title?: ReactNode;
  children: ReactNode;
}) {
  return (
    <Card className="h-full transition duration-300 hover:-translate-y-1 hover:shadow-md">
      {(icon || index !== undefined) && (
        <div className="mb-5 flex items-center gap-4">
          {icon && <IconTile>{icon}</IconTile>}
          {index !== undefined && (
            <span className="font-display text-3xl font-semibold text-accent">{String(index).padStart(2, '0')}</span>
          )}
        </div>
      )}
      {title && <h3 className="mb-2 text-xl font-semibold text-ink">{title}</h3>}
      <div className="leading-relaxed text-muted">{children}</div>
    </Card>
  );
}

/** Riga compatta: icona o numero + etichetta breve. */
export function MiniCard({ icon, index, children }: { icon?: ReactNode; index?: number; children: ReactNode }) {
  return (
    <div className="flex h-full items-center gap-4 rounded-2xl border border-line bg-white/80 p-4 sm:p-5">
      {icon && <IconTile size="sm">{icon}</IconTile>}
      {index !== undefined && (
        <IconTile size="sm">
          <span className="text-sm font-bold">{index}</span>
        </IconTile>
      )}
      <p className="font-semibold text-ink">{children}</p>
    </div>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 rounded-xl border border-line bg-white/70 p-4 leading-relaxed">
          <span aria-hidden className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

type BadgeTone = 'accent' | 'alert' | 'light';

const badgeTones: Record<BadgeTone, string> = {
  accent: 'border-accent/25 bg-accent/10 text-accent',
  alert: 'border-red-200 bg-red-50 text-red-700',
  light: 'border-white/20 bg-white/10 text-cream',
};

export function Badge({ icon, tone = 'accent', children }: { icon?: ReactNode; tone?: BadgeTone; children: ReactNode }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold tracking-wider uppercase',
        badgeTones[tone],
      )}
    >
      {icon}
      {children}
    </span>
  );
}
