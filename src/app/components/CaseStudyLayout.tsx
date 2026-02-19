import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { getCaseStudyNavigation } from '../config/caseStudies';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Tag {
  label: string;
}

interface CaseStudyLayoutProps {
  title: string;
  subtitle: string;
  lede?: string;
  tags: Tag[];
  studyId: string;
  children: ReactNode;
}

export function CaseStudyLayout({ title, subtitle, lede, tags, studyId, children }: CaseStudyLayoutProps) {
  const { previous, next } = getCaseStudyNavigation(studyId);

  return (
    <div className="min-h-screen">
      <Header variant="dark" showBackButton />

      {/* Hero */}
      <div className="bg-[var(--surface-dark)] pt-32 pb-20 lg:pb-28 px-6 relative overflow-hidden">
        {/* Single ambient blob — quieter version of homepage treatment */}
        <motion.div
          className="absolute rounded-full pointer-events-none"
          aria-hidden
          style={{
            width: 600,
            height: 600,
            top: '-20%',
            right: '-10%',
            background: 'radial-gradient(circle, rgba(48, 179, 206, 0.25) 0%, rgba(48, 179, 206, 0.06) 40%, transparent 65%)',
            filter: 'blur(50px)',
          }}
          animate={{
            x: [0, -500, -900, -300, 0],
            y: [0, 200, -500, 400, 0],
            scale: [1, 1.1, 0.85, 1.05, 1],
          }}
          transition={{
            duration: 36,
            ease: 'easeInOut',
            repeat: Infinity,
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs font-medium uppercase tracking-wider text-[var(--text-on-dark-secondary)] border border-[var(--border-dark)] px-3 py-1 rounded-full"
                >
                  {tag.label}
                </span>
              ))}
            </div>

            {lede && (
              <p className="text-sm font-medium uppercase tracking-wider text-[var(--accent)] mb-4">
                {lede}
              </p>
            )}

            <h1 className="text-[var(--text-on-dark)] mb-6">
              {title}
            </h1>

            <p className="text-lg text-[var(--text-on-dark-secondary)] leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {children}
      </motion.div>

      {/* Navigation */}
      <nav className="border-t border-[var(--border-light)] bg-[var(--surface-light)]">
        <div className="max-w-5xl mx-auto px-6 py-12 flex justify-between items-center">
          {previous ? (
            <Link
              to={previous.route}
              className="group flex items-center gap-3 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <div>
                <div className="text-xs uppercase tracking-wider text-[var(--text-tertiary)] mb-0.5">Previous</div>
                <div className="text-sm font-medium">{previous.title}</div>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              to={next.route}
              className="group flex items-center gap-3 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-right"
            >
              <div>
                <div className="text-xs uppercase tracking-wider text-[var(--text-tertiary)] mb-0.5">Next</div>
                <div className="text-sm font-medium">{next.title}</div>
              </div>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </nav>

      <Footer />
    </div>
  );
}
