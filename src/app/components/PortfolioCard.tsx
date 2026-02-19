import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CardVisual, type CardVariant } from './CardVisual';

interface PortfolioCardProps {
  tag: string;
  title: string;
  hook: string;
  link: string;
  gradient: string;
  variant: CardVariant;
  index: number;
}

export function PortfolioCard({ tag, title, hook, link, gradient, variant, index }: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.08 }}
    >
      <Link to={link} className="group block">
        <div className="overflow-hidden rounded-lg border border-[var(--border-light)] bg-white transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:border-[var(--border-light)]/60">
          <CardVisual variant={variant} gradient={gradient} />
          <div className="p-6 lg:p-8">
            <span className="text-xs font-medium uppercase tracking-wider text-[var(--text-tertiary)] mb-3 block">
              {tag}
            </span>
            <h3 className="text-lg lg:text-xl font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">
              {title}
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {hook}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
