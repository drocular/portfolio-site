import { AnimatedSection } from './AnimatedSection';

interface EvidenceItem {
  value: string;
  label: string;
  emphasis?: boolean;
}

interface EvidenceStripProps {
  items: EvidenceItem[];
  caption?: string;
}

export function EvidenceStrip({ items, caption }: EvidenceStripProps) {
  return (
    <section className="py-16 lg:py-20 px-6 bg-[var(--surface-light)]">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-xl border border-[var(--border-light)] overflow-hidden">
          <div className="flex flex-col md:flex-row md:divide-x divide-y md:divide-y-0 divide-[var(--border-light)]">
            {items.map((item, i) => (
              <AnimatedSection
                key={i}
                delay={i * 0.08}
                className="flex-1 text-center px-6 py-8"
              >
                <div
                  className={`text-3xl lg:text-4xl font-semibold tabular-nums tracking-tight ${
                    item.emphasis
                      ? 'text-[var(--accent)]'
                      : 'text-[var(--text-primary)]'
                  }`}
                >
                  {item.value}
                </div>
                <div className="text-sm text-[var(--text-secondary)] mt-2">
                  {item.label}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
        {caption && (
          <p className="text-xs text-[var(--text-tertiary)] text-center mt-4">
            {caption}
          </p>
        )}
      </div>
    </section>
  );
}
