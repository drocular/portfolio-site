import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

interface TensionSide {
  label: string;
  content: string;
}

interface TensionPairProps {
  left: TensionSide;
  right: TensionSide;
  connector?: string;
}

export function TensionPair({ left, right, connector }: TensionPairProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div ref={ref} className="relative mt-10 rounded-xl overflow-hidden border border-[var(--border-light)]">
      <div className="grid md:grid-cols-2">
        {/* Left side — the conventional path */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="p-8 lg:p-10 bg-[var(--surface-muted)] border-b md:border-b-0 md:border-r border-[var(--border-light)]"
        >
          <p className="text-xs font-medium uppercase tracking-wider text-[var(--text-tertiary)] mb-3">
            {left.label}
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            {left.content}
          </p>
        </motion.div>

        {/* Right side — what actually happened */}
        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 12 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="p-8 lg:p-10 bg-white"
        >
          <p className="text-xs font-medium uppercase tracking-wider text-[var(--accent)] mb-3">
            {right.label}
          </p>
          <p className="text-[var(--text-primary)] leading-relaxed">
            {right.content}
          </p>
        </motion.div>
      </div>

      {/* Connector pill */}
      {connector && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ delay: 0.3, duration: 0.3, type: 'spring', stiffness: 300, damping: 20 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex"
        >
          <span className="text-xs font-medium bg-white border border-[var(--border-light)] rounded-full px-3 py-1 shadow-sm text-[var(--text-tertiary)]">
            {connector}
          </span>
        </motion.div>
      )}
    </div>
  );
}
