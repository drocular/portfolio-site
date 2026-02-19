import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

interface NarrativeBreakProps {
  marker?: string;
  variant?: 'line' | 'space' | 'marker' | 'signal';
}

export function NarrativeBreak({ marker, variant = 'line' }: NarrativeBreakProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  if (variant === 'space') {
    return <div className="py-8 lg:py-12" />;
  }

  // Signal variant — radar pulse animation for dramatic moments
  if (variant === 'signal' && marker) {
    return (
      <div ref={ref} className="py-12 lg:py-16 px-6 bg-[var(--surface-light)]">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
          {/* Radar pulse */}
          <div className="relative w-12 h-12 flex items-center justify-center">
            {/* Expanding rings */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.3 }}
                animate={
                  isInView
                    ? {
                        opacity: [0, 0.4, 0],
                        scale: [0.3, 1.8, 2.4],
                      }
                    : { opacity: 0, scale: 0.3 }
                }
                transition={{
                  duration: 2.4,
                  delay: 0.3 + i * 0.5,
                  ease: [0.25, 0.1, 0.25, 1],
                  repeat: Infinity,
                  repeatDelay: 1.2,
                }}
                className="absolute inset-0 rounded-full border border-[var(--accent)]"
                style={{ borderColor: 'var(--insight-border)' }}
              />
            ))}
            {/* Center dot */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.4, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="w-2 h-2 rounded-full bg-[var(--accent)] relative z-10"
              style={{ boxShadow: '0 0 8px var(--insight-glow), 0 0 20px var(--insight-glow)' }}
            />
          </div>

          {/* Label */}
          <div className="flex items-center gap-4 w-full max-w-xs">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex-1 h-px bg-[var(--border-light)] origin-right"
            />
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--accent)] whitespace-nowrap"
            >
              {marker}
            </motion.span>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex-1 h-px bg-[var(--border-light)] origin-left"
            />
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'marker' && marker) {
    return (
      <div ref={ref} className="py-10 lg:py-12 px-6 bg-[var(--surface-light)]">
        <div className="max-w-2xl mx-auto flex items-center gap-5">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex-1 h-px bg-[var(--border-light)] origin-right"
          />
          <motion.span
            initial={{ opacity: 0, y: 4 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 4 }}
            transition={{ duration: 0.5, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-sm font-medium uppercase tracking-[0.12em] text-[var(--text-secondary)] whitespace-nowrap"
          >
            {marker}
          </motion.span>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex-1 h-px bg-[var(--border-light)] origin-left"
          />
        </div>
      </div>
    );
  }

  // Default: line variant
  return (
    <div ref={ref} className="py-4 px-6 bg-[var(--surface-light)]">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-16 h-px bg-[var(--border-light)] mx-auto"
      />
    </div>
  );
}
