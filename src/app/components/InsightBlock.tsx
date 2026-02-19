import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

const EASE = [0.25, 0.1, 0.25, 1] as const;

interface InsightBlockProps {
  insight: string;
  label?: string;
  context?: string;
  variant?: 'default' | 'prominent';
  /** Show a radar pulse animation in the left margin */
  showSignal?: boolean;
  /** Show a flywheel orbit animation in the left margin */
  showFlywheel?: boolean;
  /** Show a stacked layers animation in the left margin */
  showLayers?: boolean;
  /** Show a detach/recompose animation in the left margin */
  showDetach?: boolean;
  /** Show a constraint frame animation in the left margin */
  showConstraint?: boolean;
  /** Show a morphing shape animation in the left margin */
  showTransform?: boolean;
  /** Show a spectrum drift animation in the left margin */
  showSpectrum?: boolean;
  /** Show a blueprint grid animation in the left margin */
  showBlueprint?: boolean;
}

function RadarPulse({ isInView }: { isInView: boolean }) {
  return (
    <>
      {/* Positioned in the left margin, vertically centered in the section.
          Content is max-w-2xl (672px) centered, so left edge = calc(50% - 336px).
          We place the radar center ~130px left of the content edge. */}
      <div
        className="absolute top-1/2 -translate-y-1/2 w-[300px] h-[300px] pointer-events-none hidden xl:block"
        style={{ left: 'calc(50% - 336px - 280px)' }}
      >
        {/* Expanding rings — each starts bright and fades as it grows */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.05 }}
            animate={
              isInView
                ? {
                    opacity: [0.9, 0.7, 0.3, 0],
                    scale: [0.05, 0.35, 0.7, 1],
                  }
                : { opacity: 0, scale: 0.05 }
            }
            transition={{
              duration: 3.5,
              delay: 0.5 + i * 0.9,
              ease: 'linear',
              repeat: Infinity,
              repeatDelay: 0.8,
            }}
            className="absolute inset-0 rounded-full"
            style={{ border: '1.5px solid rgba(48, 179, 206, 0.8)' }}
          />
        ))}
        {/* Center dot */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[var(--accent)]"
          style={{ boxShadow: '0 0 12px var(--insight-glow), 0 0 30px var(--insight-glow)' }}
        />
      </div>
    </>
  );
}

const FLYWHEEL_STAGES = ['Consistency', 'Visibility', 'Participants', 'Content'];

function FlywheelAnimation({ isInView }: { isInView: boolean }) {
  const radius = 90;
  const center = 150;
  const nodeRadius = 28;

  return (
    <div
      className="absolute top-1/2 -translate-y-1/2 w-[300px] h-[300px] pointer-events-none hidden xl:block"
      style={{ left: 'calc(50% - 336px - 280px)' }}
    >
      {/* Outer orbit ring */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 0.15, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
        className="absolute rounded-full border border-[var(--accent)]"
        style={{
          left: center - radius,
          top: center - radius,
          width: radius * 2,
          height: radius * 2,
        }}
      />

      {/* Rotating group with nodes */}
      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        animate={
          isInView
            ? { opacity: 1, rotate: 360 }
            : { opacity: 0, rotate: 0 }
        }
        transition={
          isInView
            ? {
                opacity: { duration: 0.6, delay: 0.5, ease: EASE },
                rotate: { duration: 20, ease: 'linear', repeat: Infinity, delay: 0.5 },
              }
            : { duration: 0.3 }
        }
        className="absolute inset-0"
        style={{ transformOrigin: `${center}px ${center}px` }}
      >
        {FLYWHEEL_STAGES.map((stage, i) => {
          const angle = (i / FLYWHEEL_STAGES.length) * Math.PI * 2 - Math.PI / 2;
          const x = center + Math.cos(angle) * radius - nodeRadius;
          const y = center + Math.sin(angle) * radius - nodeRadius;

          return (
            <motion.div
              key={stage}
              className="absolute flex items-center justify-center rounded-full"
              style={{
                left: x,
                top: y,
                width: nodeRadius * 2,
                height: nodeRadius * 2,
                background: 'rgba(48, 179, 206, 0.12)',
                border: '1px solid rgba(48, 179, 206, 0.35)',
                boxShadow: '0 0 16px rgba(48, 179, 206, 0.1)',
              }}
            >
              {/* Counter-rotate text so it stays upright */}
              <motion.span
                animate={isInView ? { rotate: -360 } : { rotate: 0 }}
                transition={
                  isInView
                    ? { duration: 20, ease: 'linear', repeat: Infinity, delay: 0.5 }
                    : { duration: 0.3 }
                }
                className="text-[8px] font-medium uppercase tracking-wider text-[var(--accent)] select-none"
                style={{ transformOrigin: 'center center' }}
              >
                {stage}
              </motion.span>
            </motion.div>
          );
        })}

        {/* Directional arrows between nodes */}
        {FLYWHEEL_STAGES.map((_, i) => {
          const startAngle = (i / FLYWHEEL_STAGES.length) * Math.PI * 2 - Math.PI / 2;
          const endAngle = ((i + 1) / FLYWHEEL_STAGES.length) * Math.PI * 2 - Math.PI / 2;
          const midAngle = (startAngle + endAngle) / 2;
          const arrowRadius = radius + 18;
          const ax = center + Math.cos(midAngle) * arrowRadius;
          const ay = center + Math.sin(midAngle) * arrowRadius;

          return (
            <motion.div
              key={`arrow-${i}`}
              className="absolute text-[var(--accent)] opacity-40"
              style={{
                left: ax - 4,
                top: ay - 4,
                fontSize: '8px',
                transform: `rotate(${midAngle + Math.PI / 2}rad)`,
              }}
            >
              ▸
            </motion.div>
          );
        })}
      </motion.div>

      {/* Center pulse */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={
          isInView
            ? { opacity: [0.6, 1, 0.6], scale: [0.9, 1.1, 0.9] }
            : { opacity: 0, scale: 0 }
        }
        transition={
          isInView
            ? {
                duration: 3,
                ease: 'easeInOut',
                repeat: Infinity,
                delay: 0.8,
              }
            : { duration: 0.3 }
        }
        className="absolute rounded-full bg-[var(--accent)]"
        style={{
          left: center - 4,
          top: center - 4,
          width: 8,
          height: 8,
          boxShadow: '0 0 12px var(--insight-glow), 0 0 30px var(--insight-glow)',
        }}
      />
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════
   Layers — three horizontal layers that separate and the middle glows
   For Design Tokens: "finding the right layer of abstraction"
   ════════════════════════════════════════════════════════════════════ */
function LayersAnimation({ isInView }: { isInView: boolean }) {
  const layers = [
    { yRest: 120, ySpread: 80, w: 140, h: 24, opacity: 0.15 },
    { yRest: 138, ySpread: 138, w: 160, h: 28, opacity: 0.35, glow: true },
    { yRest: 156, ySpread: 196, w: 130, h: 22, opacity: 0.15 },
  ];

  return (
    <div
      className="absolute top-1/2 -translate-y-1/2 w-[300px] h-[300px] pointer-events-none hidden xl:block"
      style={{ left: 'calc(50% - 336px - 280px)' }}
    >
      {layers.map((l, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 -translate-x-1/2 rounded-lg"
          style={{
            width: l.w,
            height: l.h,
            background: l.glow
              ? 'rgba(48, 179, 206, 0.25)'
              : `rgba(255, 255, 255, ${l.opacity})`,
            border: l.glow
              ? '1px solid rgba(48, 179, 206, 0.5)'
              : '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: l.glow ? '0 0 20px rgba(48, 179, 206, 0.15)' : 'none',
          }}
          initial={{ opacity: 0, y: l.yRest }}
          animate={
            isInView
              ? { opacity: 1, y: [l.yRest, l.ySpread, l.yRest] }
              : { opacity: 0, y: l.yRest }
          }
          transition={
            isInView
              ? {
                  opacity: { duration: 0.6, delay: 0.3 + i * 0.1, ease: EASE },
                  y: { duration: 4, delay: 0.8, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' },
                }
              : { duration: 0.3 }
          }
        />
      ))}

      {/* "Right layer" label that fades in when layers separate */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 text-[7px] font-medium uppercase tracking-[0.2em] text-[var(--accent)]"
        style={{ top: 172 }}
        initial={{ opacity: 0 }}
        animate={
          isInView
            ? { opacity: [0, 0.7, 0] }
            : { opacity: 0 }
        }
        transition={
          isInView
            ? { duration: 4, delay: 0.8, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }
            : { duration: 0.3 }
        }
      >
        ↕
      </motion.div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════
   Detach — a rectangle splits into smaller building blocks
   For Table Component: monolithic → composable primitives
   ════════════════════════════════════════════════════════════════════ */
function DetachAnimation({ isInView }: { isInView: boolean }) {
  const center = 150;
  const pieces = [
    { xRest: -24, yRest: -16, xSpread: -48, ySpread: -36, w: 28, h: 52 },
    { xRest: 8, yRest: -16, xSpread: 4, ySpread: -40, w: 28, h: 52 },
    { xRest: 40, yRest: -16, xSpread: 56, ySpread: -32, w: 28, h: 52 },
  ];

  return (
    <div
      className="absolute top-1/2 -translate-y-1/2 w-[300px] h-[300px] pointer-events-none hidden xl:block"
      style={{ left: 'calc(50% - 336px - 280px)' }}
    >
      {/* Ghost outline of the original monolith */}
      <motion.div
        className="absolute rounded-md"
        style={{
          left: center - 44,
          top: center - 22,
          width: 100,
          height: 58,
          border: '1px dashed rgba(255, 255, 255, 0.12)',
        }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: [0.3, 0.1, 0.3] } : { opacity: 0 }}
        transition={isInView ? { duration: 5, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' } : { duration: 0.3 }}
      />

      {/* Individual column pieces */}
      {pieces.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded"
          style={{
            width: p.w,
            height: p.h,
            background: i === 1 ? 'rgba(48, 179, 206, 0.25)' : 'rgba(255, 255, 255, 0.18)',
            border: i === 1 ? '1px solid rgba(48, 179, 206, 0.45)' : '1px solid rgba(255, 255, 255, 0.25)',
            boxShadow: i === 1 ? '0 0 12px rgba(48, 179, 206, 0.1)' : '0 2px 8px rgba(0,0,0,0.1)',
          }}
          initial={{ opacity: 0, x: center + p.xRest, y: center + p.yRest }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  x: [center + p.xRest, center + p.xSpread, center + p.xRest],
                  y: [center + p.yRest, center + p.ySpread, center + p.yRest],
                }
              : { opacity: 0, x: center + p.xRest, y: center + p.yRest }
          }
          transition={
            isInView
              ? {
                  opacity: { duration: 0.5, delay: 0.3 + i * 0.1, ease: EASE },
                  x: { duration: 5, delay: 0.8, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' },
                  y: { duration: 5, delay: 0.8, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' },
                }
              : { duration: 0.3 }
          }
        />
      ))}

      {/* Small dots representing data flowing between pieces when detached */}
      {[0, 1].map((i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-1.5 h-1.5 rounded-full bg-[var(--accent)]"
          style={{ boxShadow: '0 0 6px rgba(48, 179, 206, 0.4)' }}
          initial={{ opacity: 0 }}
          animate={
            isInView
              ? {
                  opacity: [0, 0.8, 0],
                  x: [center - 20 + i * 30, center + 20 + i * 10],
                  y: [center - 10 + i * 5, center + 5 - i * 15],
                }
              : { opacity: 0 }
          }
          transition={
            isInView
              ? { duration: 2.5, delay: 1.5 + i * 1.2, ease: 'easeInOut', repeat: Infinity }
              : { duration: 0.3 }
          }
        />
      ))}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════
   Constraint Frame — a rigid border with elements rearranging inside
   For Props Master: quality within fixed constraints
   ════════════════════════════════════════════════════════════════════ */
function ConstraintAnimation({ isInView }: { isInView: boolean }) {
  const center = 150;
  const frameW = 120;
  const frameH = 80;

  const elements = [
    { x1: -36, y1: -22, x2: -36, y2: 14, w: 24, h: 24, shape: 'rounded-full' },
    { x1: -4, y1: -22, x2: 20, y2: -22, w: 32, h: 16, shape: 'rounded' },
    { x1: 32, y1: -22, x2: -4, y2: 18, w: 20, h: 20, shape: 'rounded-sm' },
    { x1: -4, y1: 8, x2: 32, y2: 14, w: 44, h: 12, shape: 'rounded' },
  ];

  return (
    <div
      className="absolute top-1/2 -translate-y-1/2 w-[300px] h-[300px] pointer-events-none hidden xl:block"
      style={{ left: 'calc(50% - 336px - 280px)' }}
    >
      {/* The rigid constraint frame */}
      <motion.div
        className="absolute rounded-lg"
        style={{
          left: center - frameW / 2,
          top: center - frameH / 2,
          width: frameW,
          height: frameH,
          border: '1.5px solid rgba(255, 255, 255, 0.25)',
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
      />

      {/* Elements that rearrange within the frame */}
      {elements.map((el, i) => (
        <motion.div
          key={i}
          className={`absolute ${el.shape}`}
          style={{
            width: el.w,
            height: el.h,
            background: i === 0 ? 'rgba(48, 179, 206, 0.3)' : `rgba(255, 255, 255, ${0.12 + i * 0.04})`,
            border: i === 0 ? '1px solid rgba(48, 179, 206, 0.5)' : '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: i === 0 ? '0 0 10px rgba(48, 179, 206, 0.1)' : 'none',
          }}
          initial={{ opacity: 0, x: center + el.x1, y: center + el.y1 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  x: [center + el.x1, center + el.x2, center + el.x1],
                  y: [center + el.y1, center + el.y2, center + el.y1],
                }
              : { opacity: 0, x: center + el.x1, y: center + el.y1 }
          }
          transition={
            isInView
              ? {
                  opacity: { duration: 0.5, delay: 0.5 + i * 0.1, ease: EASE },
                  x: { duration: 6, delay: 1, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' },
                  y: { duration: 6, delay: 1, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' },
                }
              : { duration: 0.3 }
          }
        />
      ))}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════
   Spectrum — swatches that look uniform until one drifts "off"
   For Color Scheme: "the silent breakage nobody noticed"
   ════════════════════════════════════════════════════════════════════ */
function SpectrumAnimation({ isInView }: { isInView: boolean }) {
  const center = 150;
  const swatchSize = 22;
  const gap = 6;
  const count = 5;
  const totalW = count * swatchSize + (count - 1) * gap;
  const startX = center - totalW / 2;

  /* All swatches start the same muted teal, then index 3 drifts to a warm hue */
  const baseColor = 'rgba(48, 179, 206, 0.35)';
  const baseBorder = 'rgba(48, 179, 206, 0.5)';
  const driftColor = 'rgba(220, 100, 80, 0.45)';
  const driftBorder = 'rgba(220, 100, 80, 0.6)';
  const driftIndex = 3;

  return (
    <div
      className="absolute top-1/2 -translate-y-1/2 w-[300px] h-[300px] pointer-events-none hidden xl:block"
      style={{ left: 'calc(50% - 336px - 280px)' }}
    >
      {/* Swatch row */}
      {Array.from({ length: count }).map((_, i) => {
        const x = startX + i * (swatchSize + gap);
        const isDrift = i === driftIndex;

        return (
          <motion.div
            key={i}
            className="absolute rounded-md"
            style={{
              left: x,
              top: center - swatchSize / 2,
              width: swatchSize,
              height: swatchSize,
            }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={
              isInView
                ? isDrift
                  ? {
                      opacity: 1,
                      scale: 1,
                      background: [baseColor, baseColor, driftColor, driftColor, baseColor],
                      borderColor: [baseBorder, baseBorder, driftBorder, driftBorder, baseBorder],
                      y: [0, 0, -6, -6, 0],
                      boxShadow: [
                        '0 0 0px rgba(220,100,80,0)',
                        '0 0 0px rgba(220,100,80,0)',
                        '0 0 14px rgba(220,100,80,0.3)',
                        '0 0 14px rgba(220,100,80,0.3)',
                        '0 0 0px rgba(220,100,80,0)',
                      ],
                    }
                  : { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.6 }
            }
            transition={
              isInView
                ? isDrift
                  ? {
                      opacity: { duration: 0.4, delay: 0.3 + i * 0.08, ease: EASE },
                      scale: { duration: 0.4, delay: 0.3 + i * 0.08, ease: EASE },
                      background: { duration: 7, delay: 1.5, ease: 'easeInOut', repeat: Infinity, times: [0, 0.3, 0.5, 0.7, 1] },
                      borderColor: { duration: 7, delay: 1.5, ease: 'easeInOut', repeat: Infinity, times: [0, 0.3, 0.5, 0.7, 1] },
                      y: { duration: 7, delay: 1.5, ease: 'easeInOut', repeat: Infinity, times: [0, 0.3, 0.5, 0.7, 1] },
                      boxShadow: { duration: 7, delay: 1.5, ease: 'easeInOut', repeat: Infinity, times: [0, 0.3, 0.5, 0.7, 1] },
                    }
                  : {
                      opacity: { duration: 0.4, delay: 0.3 + i * 0.08, ease: EASE },
                      scale: { duration: 0.4, delay: 0.3 + i * 0.08, ease: EASE },
                    }
                : { duration: 0.3 }
            }
          >
            <div
              className="w-full h-full rounded-md"
              style={{
                background: baseColor,
                border: `1px solid ${baseBorder}`,
              }}
            />
          </motion.div>
        );
      })}

      {/* "silent" label below the swatches */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 text-[7px] font-medium uppercase tracking-[0.2em] text-[var(--accent)]"
        style={{ top: center + swatchSize / 2 + 14 }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: [0.3, 0.3, 0.7, 0.7, 0.3] } : { opacity: 0 }}
        transition={
          isInView
            ? { duration: 7, delay: 1.5, ease: 'easeInOut', repeat: Infinity, times: [0, 0.3, 0.5, 0.7, 1] }
            : { duration: 0.3 }
        }
      >
        ≠
      </motion.div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════
   Blueprint — a schematic grid that draws itself in, holds, fades out, repeats
   For Props Master: systematic architecture that makes quality the default
   ════════════════════════════════════════════════════════════════════ */

/* Total cycle: ~3s draw-in + ~3s hold + ~1s fade-out + ~1.5s blank = ~8.5s */
const BLUEPRINT_CYCLE = 8500;

function BlueprintDraw() {
  const center = 150;
  const gridSize = 80;
  const l = center - gridSize / 2;
  const t = center - gridSize / 2;

  const hLines = [0, 0.33, 0.66, 1].map((f) => ({
    x1: l, y1: t + f * gridSize, x2: l + gridSize, y2: t + f * gridSize,
  }));
  const vLines = [0, 0.33, 0.66, 1].map((f) => ({
    x1: l + f * gridSize, y1: t, x2: l + f * gridSize, y2: t + gridSize,
  }));
  const allLines = [...hLines, ...vLines];

  const nodes = [
    { x: l, y: t, delay: 1.4 },
    { x: l + gridSize, y: t, delay: 1.6 },
    { x: l + gridSize * 0.66, y: t + gridSize * 0.33, delay: 1.8, accent: true },
    { x: l, y: t + gridSize, delay: 2.0 },
    { x: l + gridSize, y: t + gridSize, delay: 2.2 },
  ];

  return (
    <>
      <svg width="300" height="300" className="absolute inset-0">
        {allLines.map((line, i) => (
          <motion.line
            key={i}
            x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}
            stroke="rgba(255, 255, 255, 0.15)"
            strokeWidth={1}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              pathLength: { duration: 1.2, delay: 0.3 + i * 0.1, ease: 'easeOut' },
              opacity: { duration: 0.3, delay: 0.3 + i * 0.1 },
            }}
          />
        ))}

        <motion.line
          x1={l} y1={t} x2={l + gridSize} y2={t + gridSize}
          stroke="rgba(48, 179, 206, 0.4)"
          strokeWidth={1.5}
          strokeDasharray="4 3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { duration: 1.5, delay: 1.6, ease: 'easeOut' },
            opacity: { duration: 0.3, delay: 1.6 },
          }}
        />
      </svg>

      {nodes.map((n, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: n.x - 3, top: n.y - 3, width: 6, height: 6,
            background: n.accent ? 'rgba(48, 179, 206, 0.6)' : 'rgba(255, 255, 255, 0.3)',
            boxShadow: n.accent ? '0 0 10px rgba(48, 179, 206, 0.3)' : 'none',
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: n.delay, ease: EASE }}
        />
      ))}

      <motion.div
        className="absolute rounded-full"
        style={{
          left: l + gridSize * 0.66 - 8, top: t + gridSize * 0.33 - 8,
          width: 16, height: 16,
          border: '1px solid rgba(48, 179, 206, 0.3)',
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: [0, 0.6, 0], scale: [0.5, 1.8, 0.5] }}
        transition={{ duration: 2.5, delay: 2.2, ease: 'easeOut' }}
      />

      <motion.div
        className="absolute left-1/2 -translate-x-1/2 text-[7px] font-medium uppercase tracking-[0.2em] text-[var(--accent)]"
        style={{ top: t + gridSize + 16 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 0.5, delay: 2.2, ease: EASE }}
      >
        system
      </motion.div>
    </>
  );
}

function BlueprintAnimation({ isInView }: { isInView: boolean }) {
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const id = setInterval(() => setCycle((c) => c + 1), BLUEPRINT_CYCLE);
    return () => clearInterval(id);
  }, [isInView]);

  return (
    <div
      className="absolute top-1/2 -translate-y-1/2 w-[300px] h-[300px] pointer-events-none hidden xl:block"
      style={{ left: 'calc(50% - 336px - 280px)' }}
    >
      {isInView && (
        <motion.div
          key={cycle}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: BLUEPRINT_CYCLE / 1000, times: [0, 0.04, 0.75, 0.88], ease: 'easeInOut' }}
        >
          <BlueprintDraw />
        </motion.div>
      )}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════
   Transform — shape morphs while a steady line persists
   For Current Work: "tools change, approach doesn't"
   Uses clipPath for true shape morphing (circle → square → triangle → diamond → circle)
   ════════════════════════════════════════════════════════════════════ */

/* clipPath polygons for each shape — all use the same coordinate space */
const SHAPES = {
  circle: 'polygon(50% 0%, 79% 10%, 98% 35%, 98% 65%, 79% 90%, 50% 100%, 21% 90%, 2% 65%, 2% 35%, 21% 10%)',
  square: 'polygon(10% 10%, 50% 10%, 90% 10%, 90% 50%, 90% 90%, 50% 90%, 10% 90%, 10% 50%, 10% 10%, 10% 10%)',
  triangle: 'polygon(50% 5%, 65% 25%, 95% 90%, 80% 90%, 50% 90%, 20% 90%, 5% 90%, 35% 25%, 50% 5%, 50% 5%)',
  diamond: 'polygon(50% 2%, 70% 25%, 98% 50%, 70% 75%, 50% 98%, 30% 75%, 2% 50%, 30% 25%, 50% 2%, 50% 2%)',
};

function TransformAnimation({ isInView }: { isInView: boolean }) {
  const center = 150;

  return (
    <div
      className="absolute top-1/2 -translate-y-1/2 w-[300px] h-[300px] pointer-events-none hidden xl:block"
      style={{ left: 'calc(50% - 336px - 280px)' }}
    >
      {/* The steady line — "the approach doesn't change" */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          top: center + 40,
          width: 100,
          height: 1.5,
          background: 'rgba(48, 179, 206, 0.5)',
          boxShadow: '0 0 8px rgba(48, 179, 206, 0.2)',
        }}
        initial={{ opacity: 0, scaleX: 0 }}
        animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
      />

      {/* Morphing shape — uses clipPath for true shape transitions */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          top: center - 30,
          width: 48,
          height: 48,
          background: 'rgba(255, 255, 255, 0.15)',
          border: '1px solid rgba(255, 255, 255, 0.25)',
          boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={
          isInView
            ? {
                opacity: 1,
                scale: [1, 1.05, 1, 1.08, 1],
                clipPath: [
                  SHAPES.circle,
                  SHAPES.square,
                  SHAPES.triangle,
                  SHAPES.diamond,
                  SHAPES.circle,
                ],
              }
            : { opacity: 0, scale: 0 }
        }
        transition={
          isInView
            ? {
                opacity: { duration: 0.5, delay: 0.5, ease: EASE },
                scale: { duration: 10, delay: 1, ease: 'easeInOut', repeat: Infinity, times: [0, 0.25, 0.5, 0.75, 1] },
                clipPath: { duration: 10, delay: 1, ease: 'easeInOut', repeat: Infinity, times: [0, 0.25, 0.5, 0.75, 1] },
              }
            : { duration: 0.3 }
        }
      />

      {/* Small label */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 text-[7px] font-medium uppercase tracking-[0.15em] text-[var(--accent)] opacity-40"
        style={{ top: center + 50 }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.4 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 1.2, ease: EASE }}
      >
        constant
      </motion.div>
    </div>
  );
}

export function InsightBlock({ insight, label, context, variant = 'default', showSignal = false, showFlywheel = false, showLayers = false, showDetach = false, showConstraint = false, showTransform = false, showSpectrum = false, showBlueprint = false }: InsightBlockProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const isProminent = variant === 'prominent';
  const maxWidth = isProminent ? 'max-w-3xl' : 'max-w-2xl';
  const insightSize = isProminent
    ? 'text-2xl lg:text-3xl'
    : 'text-xl lg:text-2xl';

  return (
    <section
      ref={ref}
      className="relative py-16 lg:py-20 px-6 bg-[var(--surface-insight)] overflow-hidden"
    >
      {/* Subtle radial glow — shifts left when signal is shown */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: (showSignal || showFlywheel || showLayers || showDetach || showConstraint || showTransform || showSpectrum || showBlueprint)
            ? 'radial-gradient(ellipse at 10% 50%, var(--insight-glow) 0%, transparent 50%)'
            : 'radial-gradient(ellipse at 20% 20%, var(--insight-glow) 0%, transparent 60%)',
        }}
      />

      {/* Radar pulse — in the left margin, outside the content column */}
      {showSignal && <RadarPulse isInView={isInView} />}
      {showFlywheel && <FlywheelAnimation isInView={isInView} />}
      {showLayers && <LayersAnimation isInView={isInView} />}
      {showDetach && <DetachAnimation isInView={isInView} />}
      {showConstraint && <ConstraintAnimation isInView={isInView} />}
      {showTransform && <TransformAnimation isInView={isInView} />}
      {showSpectrum && <SpectrumAnimation isInView={isInView} />}
      {showBlueprint && <BlueprintAnimation isInView={isInView} />}

      <div className={`${maxWidth} mx-auto relative`}>
        {label && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--accent)] mb-5"
          >
            {label}
          </motion.p>
        )}

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className={`${insightSize} font-medium text-[var(--text-on-dark)] leading-snug tracking-tight`}
        >
          {insight}
        </motion.p>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="h-px w-20 bg-[var(--insight-border)] mt-8 origin-left"
        />

        {context && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-sm text-[var(--text-on-dark-secondary)] leading-relaxed mt-5 max-w-xl"
          >
            {context}
          </motion.p>
        )}
      </div>
    </section>
  );
}
