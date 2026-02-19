import { AnimatedSection } from './AnimatedSection';

interface PrincipleCardProps {
  index: string;
  title: string;
  description: string;
  aside?: string;
}

interface PrincipleGridProps {
  items: PrincipleCardProps[];
  columns?: 2 | 3;
}

function Card({ index, title, description, aside }: PrincipleCardProps) {
  return (
    <div className="relative bg-white rounded-xl border border-[var(--border-light)] p-8 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300">
      {/* Watermark index */}
      <span className="absolute top-4 right-5 text-4xl font-semibold text-[var(--accent)] opacity-[0.12] select-none">
        {index}
      </span>

      <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-2 pr-10">
        {title}
      </h4>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
        {description}
      </p>

      {aside && (
        <>
          <div className="h-px bg-[var(--border-light)] my-4" />
          <p className="text-sm italic text-[var(--text-tertiary)] leading-relaxed">
            {aside}
          </p>
        </>
      )}
    </div>
  );
}

export function PrincipleGrid({ items, columns = 3 }: PrincipleGridProps) {
  const gridCols = columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3';

  return (
    <div className={`grid ${gridCols} gap-5 mt-10`}>
      {items.map((item, i) => (
        <AnimatedSection key={i} delay={i * 0.1}>
          <Card {...item} />
        </AnimatedSection>
      ))}
    </div>
  );
}
