import JlLogo from '../../imports/JlLogo';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useEffect, useState } from 'react';

interface HeaderProps {
  showBackButton?: boolean;
  variant?: 'light' | 'dark';
}

export function Header({ showBackButton = false, variant = 'light' }: HeaderProps) {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleBackToPortfolio = () => {
    navigate('/', { state: { scrollToPortfolio: true } });
  };

  const isDark = variant === 'dark' && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-[var(--border-light)] shadow-[0_1px_3px_rgba(0,0,0,0.04)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 lg:h-20 flex items-center justify-between">
        <Link to="/" className="transition-opacity hover:opacity-70">
          <div
            className="h-10 w-10 lg:h-11 lg:w-11 transition-all duration-300"
            style={{ '--fill-0': isDark ? '#fafaf9' : undefined } as React.CSSProperties}
          >
            <JlLogo />
          </div>
        </Link>

        {showBackButton ? (
          <button
            onClick={handleBackToPortfolio}
            className={`group flex items-center gap-2 text-sm font-medium transition-colors cursor-pointer ${
              isDark
                ? 'text-[var(--text-on-dark-secondary)] hover:text-[var(--text-on-dark)]'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Portfolio
          </button>
        ) : (
          <div className="flex items-center gap-8">
            <a
              href="#about"
              className={`hidden sm:inline-block text-sm font-medium transition-colors ${
                isDark
                  ? 'text-[var(--text-on-dark-secondary)] hover:text-[var(--text-on-dark)]'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              About
            </a>
            <a
              href="#portfolio"
              className={`hidden sm:inline-block text-sm font-medium transition-colors ${
                isDark
                  ? 'text-[var(--text-on-dark-secondary)] hover:text-[var(--text-on-dark)]'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              Work
            </a>
            <Link
              to="/resume"
              className={`text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 ${
                isDark
                  ? 'bg-white text-[var(--surface-dark)] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(255,255,255,0.25)] hover:bg-[var(--accent)] hover:text-white'
                  : 'bg-[var(--text-primary)] text-white hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:bg-[var(--accent)]'
              }`}
            >
              Resume
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
