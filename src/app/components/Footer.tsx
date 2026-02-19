export function Footer() {
  return (
    <footer className="bg-[var(--surface-dark)] py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[var(--text-on-dark-secondary)] mb-8">
          <a href="mailto:joseph.lawsky@gmail.com" className="hover:text-[var(--text-on-dark)] transition-colors">
            joseph.lawsky@gmail.com
          </a>
          <a href="tel:+14044082534" className="hover:text-[var(--text-on-dark)] transition-colors">
            404.408.2534
          </a>
          <a
            href="https://www.linkedin.com/in/josephlawsky/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text-on-dark)] transition-colors"
          >
            LinkedIn
          </a>
        </div>
        <div className="text-xs text-[var(--text-on-dark-secondary)] opacity-50 pt-6 border-t border-[var(--border-dark)]">
          &copy; 2026 Joseph Lawsky
        </div>
      </div>
    </footer>
  );
}
