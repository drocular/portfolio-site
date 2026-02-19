import { useState } from 'react';
import { motion } from 'motion/react';

export type CardVariant =
  | 'color-scheme'
  | 'design-tokens'
  | 'how-we-ai'
  | 'table-component'
  | 'props-master'
  | 'current-work';

interface CardVisualProps {
  variant: CardVariant;
  gradient: string;
}

const EASE = [0.25, 0.1, 0.25, 1] as const;

const breathe = (duration: number, delay = 0) => ({
  duration,
  delay,
  ease: 'easeInOut' as const,
  repeat: Infinity,
  repeatType: 'reverse' as const,
});

const linear = (duration: number, delay = 0) => ({
  duration,
  delay,
  ease: 'linear' as const,
  repeat: Infinity,
});

const settle = { duration: 0.6, ease: EASE };

/* ════════════════════════════════════════════════════════════════════
   1. Color Scheme — Two palettes converging
   slate-800 → slate-900: use teal accent + warm/cool circle colors
   ════════════════════════════════════════════════════════════════════ */
function ColorSchemeShapes({ h }: { h: boolean }) {
  // Left = warm palette, Right = cool palette
  const leftColors = ['rgba(249,115,22,0.5)', 'rgba(234,179,8,0.4)', 'rgba(239,68,68,0.35)'];
  const rightColors = ['rgba(48,179,206,0.5)', 'rgba(99,102,241,0.4)', 'rgba(34,197,94,0.35)'];

  return (
    <>
      {/* Connecting line */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-px"
        style={{ background: 'rgba(255,255,255,0.15)', width: '50%' }}
        animate={h ? { scaleX: [0.4, 1, 0.4] } : { scaleX: 0.4 }}
        transition={h ? breathe(3) : settle}
      />

      {/* Left cluster — warm palette */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 flex flex-col gap-2"
        style={{ left: '22%' }}
        animate={h ? { x: [0, 24, 0] } : { x: 0 }}
        transition={h ? breathe(3) : settle}
      >
        {leftColors.map((bg, i) => (
          <div
            key={i}
            className="w-9 h-9 rounded-full"
            style={{
              background: bg,
              border: '1px solid rgba(255,255,255,0.15)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            }}
          />
        ))}
      </motion.div>

      {/* Right cluster — cool palette */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 flex flex-col gap-2"
        style={{ right: '22%' }}
        animate={h ? { x: [0, -24, 0] } : { x: 0 }}
        transition={h ? breathe(3) : settle}
      >
        {rightColors.map((bg, i) => (
          <div
            key={i}
            className="w-9 h-9 rounded-full"
            style={{
              background: bg,
              border: '1px solid rgba(255,255,255,0.15)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            }}
          />
        ))}
      </motion.div>

      {/* Center swatch — unified color */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-8 rounded-lg"
        style={{
          background: 'rgba(48,179,206,0.35)',
          border: '1px solid rgba(48,179,206,0.5)',
          boxShadow: '0 0 20px rgba(48,179,206,0.2)',
          backdropFilter: 'blur(8px)',
        }}
        animate={h ? { scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] } : { scale: 1, opacity: 0.7 }}
        transition={h ? breathe(3) : settle}
      />
    </>
  );
}

/* ════════════════════════════════════════════════════════════════════
   2. Design Tokens — Layered architecture
   violet-600 → indigo-700: use purple/violet tones with white layers
   ════════════════════════════════════════════════════════════════════ */
function DesignTokensShapes({ h }: { h: boolean }) {
  const layers = [
    { w: 160, ht: 36, bg: 'rgba(255,255,255,0.12)', border: 'rgba(255,255,255,0.18)', bottom: '22%', hoverY: -4 },
    { w: 120, ht: 28, bg: 'rgba(255,255,255,0.18)', border: 'rgba(255,255,255,0.25)', bottom: '40%', hoverY: -10 },
    { w: 80, ht: 22, bg: 'rgba(255,255,255,0.25)', border: 'rgba(255,255,255,0.35)', bottom: '56%', hoverY: -16 },
  ];

  return (
    <>
      {layers.map((l, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 -translate-x-1/2 rounded-lg"
          style={{
            width: l.w,
            height: l.ht,
            bottom: l.bottom,
            background: l.bg,
            border: `1px solid ${l.border}`,
            backdropFilter: 'blur(8px)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}
          animate={
            h
              ? { y: [0, l.hoverY, 0], ...(i === 2 ? { opacity: [1, 0.6, 1] } : {}) }
              : { y: 0 }
          }
          transition={h ? breathe(2.5, i * 0.15) : settle}
        />
      ))}

      {/* Token chip left */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 32,
          height: 14,
          left: '23%',
          top: '36%',
          background: 'rgba(48,179,206,0.4)',
          border: '1px solid rgba(48,179,206,0.55)',
          boxShadow: '0 0 10px rgba(48,179,206,0.15)',
        }}
        animate={h ? { x: [0, 12, 0] } : { x: 0 }}
        transition={h ? breathe(2.2, 0.3) : settle}
      />

      {/* Token chip right */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 32,
          height: 14,
          right: '23%',
          top: '36%',
          background: 'rgba(48,179,206,0.3)',
          border: '1px solid rgba(48,179,206,0.45)',
          boxShadow: '0 0 10px rgba(48,179,206,0.1)',
        }}
        animate={h ? { x: [0, -12, 0] } : { x: 0 }}
        transition={h ? breathe(2.2, 0.3) : settle}
      />
    </>
  );
}

/* ════════════════════════════════════════════════════════════════════
   3. How We AI — Network graph, orbital flywheel
   teal-600 → indigo-700: accent nodes with visible connections
   ════════════════════════════════════════════════════════════════════ */
function HowWeAIShapes({ h }: { h: boolean }) {
  const orbitalNodes = [
    { startAngle: 0, duration: 8, size: 14, bg: 'rgba(255,255,255,0.35)', shadow: '0 0 8px rgba(255,255,255,0.15)' },
    { startAngle: 120, duration: 11, size: 12, bg: 'rgba(255,255,255,0.28)', shadow: '0 0 6px rgba(255,255,255,0.1)' },
    { startAngle: 240, duration: 14, size: 12, bg: 'rgba(255,255,255,0.22)', shadow: '0 0 6px rgba(255,255,255,0.08)' },
  ];
  const radius = 52;

  return (
    <>
      {/* Connection ring */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: radius * 2,
          height: radius * 2,
          border: '1px solid rgba(255,255,255,0.15)',
        }}
        animate={h ? { opacity: [0.5, 0.9, 0.5], borderColor: ['rgba(255,255,255,0.15)', 'rgba(48,179,206,0.3)', 'rgba(255,255,255,0.15)'] } : { opacity: 0.5 }}
        transition={h ? breathe(4) : settle}
      />

      {/* Second ring for depth */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: radius * 2 + 24,
          height: radius * 2 + 24,
          border: '1px dashed rgba(255,255,255,0.08)',
        }}
      />

      {/* Orbital nodes */}
      {orbitalNodes.map((node, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2"
          style={{ width: 0, height: 0 }}
          animate={h ? { rotate: [node.startAngle, node.startAngle + 360] } : { rotate: node.startAngle }}
          transition={h ? linear(node.duration) : settle}
        >
          <div
            className="absolute rounded-full"
            style={{
              width: node.size,
              height: node.size,
              background: node.bg,
              border: '1px solid rgba(255,255,255,0.25)',
              boxShadow: node.shadow,
              transform: `translate(-50%, -50%) translateX(${radius}px)`,
            }}
          />
        </motion.div>
      ))}

      {/* Center node */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full"
        style={{
          background: 'rgba(48,179,206,0.5)',
          border: '1.5px solid rgba(48,179,206,0.7)',
          boxShadow: '0 0 20px rgba(48,179,206,0.3), 0 0 40px rgba(48,179,206,0.1)',
        }}
        animate={h ? { scale: [1, 1.15, 1] } : { scale: 1 }}
        transition={h ? breathe(3) : settle}
      />
    </>
  );
}

/* ════════════════════════════════════════════════════════════════════
   4. Table Component — Column-based composition
   slate-600 → blue-800: crisp white/blue columns
   ════════════════════════════════════════════════════════════════════ */
function TableShapes({ h }: { h: boolean }) {
  const columns = [
    { offset: -52, w: 38, bg: 'rgba(255,255,255,0.15)', hoverX: 46, scaleDelay: 0 },
    { offset: 0, w: 44, bg: 'rgba(255,255,255,0.22)', hoverX: 0, scaleDelay: 0.3 },
    { offset: 52, w: 38, bg: 'rgba(48,179,206,0.3)', accent: true, hoverX: -46, scaleDelay: 0.6 },
  ];

  return (
    <>
      {/* Grid container */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg"
        style={{
          width: 180,
          height: 100,
          border: '1px solid rgba(255,255,255,0.18)',
          backdropFilter: 'blur(4px)',
        }}
        animate={h ? { borderColor: ['rgba(255,255,255,0.18)', 'rgba(255,255,255,0.35)', 'rgba(255,255,255,0.18)'] } : {}}
        transition={h ? breathe(3) : settle}
      />

      {/* Header bar */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 rounded-sm"
        style={{
          width: 160,
          height: 8,
          top: 'calc(50% - 42px)',
          background: 'rgba(255,255,255,0.15)',
          border: '1px solid rgba(255,255,255,0.12)',
        }}
        animate={h ? { scaleX: [1, 0.7, 1] } : { scaleX: 1 }}
        transition={h ? breathe(2.5) : settle}
      />

      {/* Columns */}
      {columns.map((col, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 rounded"
          style={{
            width: col.w,
            height: 72,
            transform: `translate(calc(-50% + ${col.offset}px), calc(-50% + 8px))`,
            background: col.bg,
            border: col.accent
              ? '1px solid rgba(48,179,206,0.45)'
              : '1px solid rgba(255,255,255,0.15)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
          animate={
            h
              ? { x: [0, col.hoverX, 0], scaleY: [1, 0.85, 1] }
              : { x: 0, scaleY: 1 }
          }
          transition={h ? breathe(3, col.scaleDelay) : settle}
        />
      ))}
    </>
  );
}

/* ════════════════════════════════════════════════════════════════════
   5. Props Master — Film production, clapperboard
   amber-600 → orange-700: warm whites, amber accents
   ════════════════════════════════════════════════════════════════════ */
function PropsMasterShapes({ h }: { h: boolean }) {
  return (
    <>
      {/* Ghost duplicate */}
      <motion.div
        className="absolute rounded-md"
        style={{
          width: 92,
          height: 64,
          left: 'calc(32% + 12px)',
          top: 'calc(32% + 10px)',
          background: 'rgba(255,255,255,0.08)',
          border: '1px dashed rgba(255,255,255,0.15)',
        }}
        animate={h ? { x: [0, 10, 0], y: [0, 8, 0] } : { x: 0, y: 0 }}
        transition={h ? breathe(2.5) : settle}
      />

      {/* Clapperboard body */}
      <motion.div
        className="absolute rounded-md"
        style={{
          width: 100,
          height: 68,
          left: '30%',
          top: '30%',
          background: 'rgba(255,255,255,0.18)',
          border: '1px solid rgba(255,255,255,0.25)',
          boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
        }}
        animate={h ? { scale: [1, 1.03, 1] } : { scale: 1 }}
        transition={h ? breathe(3) : settle}
      />

      {/* Clapper top bar */}
      <motion.div
        className="absolute rounded-t-sm"
        style={{
          width: 100,
          height: 16,
          left: '30%',
          top: 'calc(30% - 16px)',
          background: 'rgba(255,255,255,0.28)',
          border: '1px solid rgba(255,255,255,0.3)',
          transformOrigin: 'bottom left',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}
        animate={h ? { rotate: [-3, -15, -3] } : { rotate: -3 }}
        transition={h ? breathe(2) : settle}
      />

      {/* Film frames */}
      <div
        className="absolute flex gap-2"
        style={{ right: '16%', top: '40%' }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-7 h-7 rounded"
            style={{
              background: 'rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.2)',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
            }}
            animate={
              h
                ? { opacity: [0.6, 1, 0.6] }
                : { opacity: 0.6 }
            }
            transition={h ? breathe(1.5, i * 0.3) : settle}
          />
        ))}
      </div>
    </>
  );
}

/* ════════════════════════════════════════════════════════════════════
   6. Current Work — Data streams, signal processing
   blue-700 → cyan-600: bright accent pulses, visible wave
   ════════════════════════════════════════════════════════════════════ */
function CurrentWorkShapes({ h }: { h: boolean }) {
  return (
    <>
      {/* Vertical data stream */}
      <motion.div
        className="absolute"
        style={{
          left: '18%',
          top: '10%',
          height: '80%',
          borderLeft: '1px dashed rgba(255,255,255,0.15)',
        }}
        animate={h ? { opacity: [0.5, 1, 0.5], scaleY: [0.6, 1, 0.6] } : { opacity: 0.5, scaleY: 0.6 }}
        transition={h ? breathe(2) : settle}
      />

      {/* Signal wave */}
      <motion.svg
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        width="70%"
        height="60"
        viewBox="0 0 280 60"
        fill="none"
        style={{ overflow: 'visible' }}
      >
        <motion.path
          d="M0 30 Q35 0 70 30 Q105 60 140 30 Q175 0 210 30 Q245 60 280 30"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="8 4"
          animate={h ? { strokeDashoffset: [0, -48] } : { strokeDashoffset: 0 }}
          transition={h ? linear(2) : settle}
        />
      </motion.svg>

      {/* Data pulse A */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full"
        style={{
          background: 'rgba(48,179,206,0.7)',
          boxShadow: '0 0 14px rgba(48,179,206,0.5), 0 0 28px rgba(48,179,206,0.2)',
        }}
        animate={h ? { left: ['15%', '85%'] } : { left: '15%' }}
        transition={h ? linear(2.5) : settle}
      />

      {/* Data pulse B */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
        style={{
          background: 'rgba(255,255,255,0.45)',
          boxShadow: '0 0 8px rgba(255,255,255,0.2)',
        }}
        animate={h ? { left: ['15%', '85%'] } : { left: '15%' }}
        transition={h ? linear(3.5, 1) : settle}
      />

      {/* Neural node cluster */}
      <motion.div
        className="absolute"
        style={{ right: '18%', top: '20%' }}
        animate={h ? { rotate: [0, 12, 0, -12, 0] } : { rotate: 0 }}
        transition={h ? breathe(4) : settle}
      >
        <div className="relative w-10 h-9">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full"
            style={{ background: 'rgba(48,179,206,0.5)', border: '1px solid rgba(48,179,206,0.6)', boxShadow: '0 0 8px rgba(48,179,206,0.2)' }}
          />
          <div
            className="absolute bottom-0 left-0 w-3 h-3 rounded-full"
            style={{ background: 'rgba(255,255,255,0.3)', border: '1px solid rgba(255,255,255,0.25)' }}
          />
          <div
            className="absolute bottom-0 right-0 w-3 h-3 rounded-full"
            style={{ background: 'rgba(255,255,255,0.3)', border: '1px solid rgba(255,255,255,0.25)' }}
          />
          <svg className="absolute inset-0" width="40" height="36" viewBox="0 0 40 36">
            <line x1="20" y1="6" x2="6" y2="30" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
            <line x1="20" y1="6" x2="34" y2="30" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
            <line x1="6" y1="30" x2="34" y2="30" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
          </svg>
        </div>
      </motion.div>
    </>
  );
}

/* ════════════════════════════════════════════════════════════════════
   Main component
   ════════════════════════════════════════════════════════════════════ */
const variants: Record<CardVariant, React.FC<{ h: boolean }>> = {
  'color-scheme': ColorSchemeShapes,
  'design-tokens': DesignTokensShapes,
  'how-we-ai': HowWeAIShapes,
  'table-component': TableShapes,
  'props-master': PropsMasterShapes,
  'current-work': CurrentWorkShapes,
};

export function CardVisual({ variant, gradient }: CardVisualProps) {
  const [isHovered, setIsHovered] = useState(false);
  const Shapes = variants[variant];

  return (
    <div
      className={`relative h-48 lg:h-56 ${gradient} overflow-hidden transition-transform duration-700 group-hover:scale-[1.02]`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Shapes h={isHovered} />
    </div>
  );
}
