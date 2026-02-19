import type { ReactNode } from 'react';

interface SectionProps {
  variant?: 'default' | 'muted' | 'dark' | 'accent';
  width?: 'narrow' | 'default' | 'wide' | 'full';
  children: ReactNode;
  className?: string;
  id?: string;
}

const variantStyles = {
  default: 'bg-[var(--surface-light)]',
  muted: 'bg-[var(--surface-muted)]',
  dark: 'bg-[var(--surface-dark)] text-[var(--text-on-dark)]',
  accent: 'bg-[var(--surface-insight)] text-[var(--text-on-dark)]',
};

const widthStyles = {
  narrow: 'max-w-xl',
  default: 'max-w-5xl',
  wide: 'max-w-5xl',
  full: 'max-w-5xl',
};

export function Section({ variant = 'default', width = 'default', children, className = '', id }: SectionProps) {
  return (
    <section id={id} className={`py-24 lg:py-32 px-6 ${variantStyles[variant]} ${className}`}>
      <div className={`${widthStyles[width]} mx-auto`}>
        {children}
      </div>
    </section>
  );
}
