import { AnimatedSection } from './AnimatedSection';

interface OutcomeItem {
  title: string;
  description: string;
}

interface OutcomeGridProps {
  items: OutcomeItem[];
  columns?: 2 | 3;
  variant?: 'compact' | 'featured';
}

export function OutcomeGrid({ items, columns = 3, variant = 'compact' }: OutcomeGridProps) {
  const gridCols = columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3';

  if (variant === 'featured') {
    return (
      <div className={`grid ${gridCols} gap-5 mt-10`}>
        {items.map((item, i) => (
          <AnimatedSection key={i} delay={i * 0.08}>
            <div className="p-8 rounded-xl border border-[var(--border-light)] bg-white border-t-[3px] border-t-[var(--accent)]">
              <h4 className="text-base font-semibold text-[var(--text-primary)] mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {item.description}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    );
  }

  return (
    <div className={`grid ${gridCols} gap-4 mt-10`}>
      {items.map((item, i) => (
        <AnimatedSection key={i} delay={i * 0.08}>
          <div className="p-5 rounded-lg border border-[var(--border-light)] bg-white/60">
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-1.5">
              {item.title}
            </h4>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {item.description}
            </p>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
}
