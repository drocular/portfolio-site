import { motion } from 'motion/react';

const EASE = [0.25, 0.1, 0.25, 1] as const;

function AmbientGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {/* Large teal blob — visible top-right, exits off top-left, gone, re-enters from bottom */}
      <motion.div
        className="absolute rounded-full w-[350px] h-[350px] md:w-[700px] md:h-[700px]"
        style={{
          top: '-10%',
          right: '-15%',
          background: 'radial-gradient(circle, rgba(48, 179, 206, 0.35) 0%, rgba(48, 179, 206, 0.08) 40%, transparent 65%)',
          filter: 'blur(40px)',
        }}
        animate={{
          x: [0, -200, -600, -400, -500, -100, 0],
          y: [0, 50, -400, 300, 100, -50, 0],
          scale: [1, 1.1, 0.8, 0.9, 1.15, 1.05, 1],
        }}
        transition={{
          duration: 40,
          ease: 'easeInOut',
          repeat: Infinity,
          times: [0, 0.15, 0.35, 0.5, 0.65, 0.85, 1],
        }}
      />

      {/* Smaller teal blob — visible bottom-left, exits off right, gone, re-enters from top-left */}
      <motion.div
        className="absolute rounded-full w-[280px] h-[280px] md:w-[500px] md:h-[500px]"
        style={{
          bottom: '-5%',
          left: '-5%',
          background: 'radial-gradient(circle, rgba(48, 179, 206, 0.28) 0%, rgba(48, 179, 206, 0.06) 40%, transparent 65%)',
          filter: 'blur(35px)',
        }}
        animate={{
          x: [0, 150, 500, 350, -100, -50, 0],
          y: [0, -100, -300, -450, -150, 50, 0],
          scale: [1, 1.12, 0.85, 0.9, 1.1, 1.05, 1],
        }}
        transition={{
          duration: 35,
          ease: 'easeInOut',
          repeat: Infinity,
          times: [0, 0.15, 0.35, 0.55, 0.7, 0.88, 1],
          delay: 5,
        }}
      />

      {/* Indigo accent — visible center-left, exits off bottom-right, gone, re-enters from top */}
      <motion.div
        className="absolute rounded-full w-[300px] h-[300px] md:w-[550px] md:h-[550px]"
        style={{
          top: '15%',
          left: '10%',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.22) 0%, rgba(99, 102, 241, 0.05) 40%, transparent 65%)',
          filter: 'blur(45px)',
        }}
        animate={{
          x: [0, 200, 450, 300, -150, -50, 0],
          y: [0, 100, 350, -300, -200, -25, 0],
          scale: [1, 1.15, 0.8, 0.9, 1.2, 1.05, 1],
          opacity: [0.8, 1, 0.6, 0.5, 1, 0.8, 0.8],
        }}
        transition={{
          duration: 44,
          ease: 'easeInOut',
          repeat: Infinity,
          times: [0, 0.15, 0.35, 0.55, 0.72, 0.9, 1],
          delay: 10,
        }}
      />
    </div>
  );
}

export function Hero() {
  return (
    <section className="bg-[var(--surface-dark)] pt-36 pb-28 lg:pt-44 lg:pb-36 px-6 relative overflow-hidden">
      <AmbientGlow />
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h1 className="text-[var(--text-on-dark)] mb-6">
            Joseph Lawsky
          </h1>
        </motion.div>

        <motion.p
          className="text-xl lg:text-2xl text-[var(--text-on-dark-secondary)] leading-relaxed max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
        >
          Design systems leader and operations strategist. I build the infrastructure that design organizations depend on to ship consistent, accessible products.
        </motion.p>

        <motion.p
          className="text-base text-[var(--text-on-dark-secondary)] opacity-60 mt-6 max-w-xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
        >
          Previously a production designer in film & television, where I first learned to build reusable systems under impossible constraints.
        </motion.p>

        <motion.div
          className="mt-10 flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="#portfolio"
            className="text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors group"
          >
            View my work
            <span className="inline-block ml-1.5 transition-transform group-hover:translate-y-0.5">&darr;</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
