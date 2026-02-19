import { PortfolioCard } from './PortfolioCard';
import { AnimatedSection } from './AnimatedSection';

import type { CardVariant } from './CardVisual';

const caseStudies: Array<{
  tag: string;
  title: string;
  hook: string;
  link: string;
  gradient: string;
  variant: CardVariant;
}> = [
  {
    tag: 'Design Systems',
    title: 'Creating an Enterprise Color Scheme',
    hook: 'Unifying two incompatible UI libraries through a shared color foundation for the entire design org.',
    link: '/case-studies/color-scheme',
    gradient: 'bg-gradient-to-br from-emerald-700 to-teal-900',
    variant: 'color-scheme',
  },
  {
    tag: 'Design Tokens',
    title: 'Implementing Design Tokens at Scale',
    hook: 'Shifting from maintaining two complete design systems to building a single sustainable source of truth.',
    link: '/case-studies/design-tokens',
    gradient: 'bg-gradient-to-br from-violet-600 to-indigo-800',
    variant: 'design-tokens',
  },
  {
    tag: 'Community Building',
    title: 'How We AI',
    hook: 'A grassroots learning community that changed how an entire organization adopts emerging technology.',
    link: '/case-studies/how-we-ai',
    gradient: 'bg-gradient-to-br from-cyan-700 to-blue-900',
    variant: 'how-we-ai',
  },
  {
    tag: 'Component Design',
    title: 'Redesigning Tables for Real-World Use',
    hook: 'Modernizing our most problematic component, and discovering what designers actually wanted.',
    link: '/case-studies/table-component',
    gradient: 'bg-gradient-to-br from-slate-700 to-indigo-900',
    variant: 'table-component',
  },
  {
    tag: 'Systems Thinking',
    title: 'Props Master: Dead Silent',
    hook: 'Film-quality production design on a procedural budget. Through systems, not heroics.',
    link: '/case-studies/props-master',
    gradient: 'bg-gradient-to-br from-rose-700 to-rose-950',
    variant: 'props-master',
  },
  {
    tag: 'Innovation',
    title: 'Current Work',
    hook: 'Building AI tools and conducting research to transform how design teams work.',
    link: '/current-work',
    gradient: 'bg-gradient-to-br from-amber-600 to-orange-800',
    variant: 'current-work',
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 lg:py-32 px-6 bg-[var(--surface-muted)]">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <span className="text-xs font-medium uppercase tracking-wider text-[var(--text-tertiary)] mb-6 block">
            Work
          </span>
          <h2 className="text-[var(--text-primary)] mb-4">
            Systems thinking in action
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mb-14">
            Case studies showing how I approach design systems challenges, from identifying patterns to implementing scalable solutions.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {caseStudies.map((study, index) => (
            <PortfolioCard key={study.link} {...study} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
