import { motion, useInView } from 'motion/react';
import { useRef, type ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  motionVariant?: 'default' | 'subtle' | 'emphasis';
}

const motionConfig = {
  default: {
    initial: { opacity: 0, y: 16 },
    duration: 0.6,
  },
  subtle: {
    initial: { opacity: 0, y: 8 },
    duration: 0.4,
  },
  emphasis: {
    initial: { opacity: 0, y: 24, scale: 0.98 },
    duration: 0.8,
  },
};

export function AnimatedSection({
  children,
  className,
  delay = 0,
  motionVariant = 'default',
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const config = motionConfig[motionVariant];

  const animateTo = motionVariant === 'emphasis'
    ? { opacity: 1, y: 0, scale: 1 }
    : { opacity: 1, y: 0 };

  return (
    <motion.div
      ref={ref}
      initial={config.initial}
      animate={isInView ? animateTo : config.initial}
      transition={{ duration: config.duration, ease: [0.25, 0.1, 0.25, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
