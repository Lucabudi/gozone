import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/cn';

type Variant = 'primary' | 'outline' | 'light';

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  /** Link interno (react-router). */
  to?: string;
  /** Link esterno, mailto: o ancora (#id). */
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
  className?: string;
};

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition duration-200';

const variants: Record<Variant, string> = {
  primary: 'bg-accent text-white shadow-sm hover:brightness-110 hover:shadow-md',
  outline: 'border border-current text-accent hover:bg-accent/10',
  light: 'bg-cream text-brand-800 shadow-sm hover:bg-white',
};

export function Button({ children, variant = 'primary', to, href, onClick, icon, className }: ButtonProps) {
  const classes = cn(base, variants[variant], className);
  const content = (
    <>
      {children}
      {icon}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  if (href) {
    const external = href.startsWith('http');
    return (
      <a href={href} className={classes} {...(external && { target: '_blank', rel: 'noopener noreferrer' })}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
