import type { ReactNode } from 'react';

interface CalloutProps {
  children: ReactNode;
  label?: string;
}

export function Callout({ children, label }: CalloutProps) {
  return (
    <div className="border-l-2 border-[var(--accent)] bg-[var(--accent-subtle)] pl-6 py-5 pr-6 rounded-r-lg my-8">
      {label && (
        <span className="text-xs font-medium uppercase tracking-wider text-[var(--accent)] mb-2 block">
          {label}
        </span>
      )}
      <div className="text-[var(--text-primary)] leading-relaxed [&>p]:text-base">
        {children}
      </div>
    </div>
  );
}
