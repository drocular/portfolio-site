import { AnimatedSection } from './AnimatedSection';

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 px-6 bg-[var(--surface-light)]">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <span className="text-xs font-medium uppercase tracking-wider text-[var(--text-tertiary)] mb-6 block">
            About
          </span>
          <h2 className="text-[var(--text-primary)] mb-10">
            Designing systems, not just screens
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-[var(--text-secondary)] mb-6">
            I spent 15 years as a production designer in film and television, where every project demanded reusable systems, cross-departmental coordination, and shipping under constraints that didn't care about your process. When I transitioned to UX, I realized the challenges were the same. Just different materials.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <p className="text-[var(--text-secondary)] mb-6">
            Now at The Home Depot, I lead design system operations and strategy supporting 260+ designers across enterprise products. I identify systemic issues others treat as one-offs, then build the infrastructure (design systems, processes, programs) that makes solutions scalable.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-[var(--text-secondary)] mb-10">
            Recent work includes repositioning our design systems from unsustainable dual-theme maintenance to a token-based foundation, launching an organization-wide AI knowledge-sharing initiative, and building tools that help teams work more effectively with emerging technology.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.25}>
          <div className="border-t border-[var(--border-light)] pt-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xs font-medium uppercase tracking-wider text-[var(--text-tertiary)] mb-3">
                  Systems
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Design Tokens', 'Component Architecture', 'Governance', 'Documentation', 'Accessibility Standards'].map((tag) => (
                    <span key={tag} className="text-sm text-[var(--text-secondary)] bg-[var(--surface-muted)] border border-[var(--border-light)] px-3 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xs font-medium uppercase tracking-wider text-[var(--text-tertiary)] mb-3">
                  Operations
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Process Design', 'Capacity Planning', 'Roadmapping', 'Onboarding Programs', 'Adoption Metrics'].map((tag) => (
                    <span key={tag} className="text-sm text-[var(--text-secondary)] bg-[var(--surface-muted)] border border-[var(--border-light)] px-3 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xs font-medium uppercase tracking-wider text-[var(--text-tertiary)] mb-3">
                  Strategy
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Cross-Functional Alignment', 'Stakeholder Partnership', 'AI Enablement', 'Organizational Change'].map((tag) => (
                    <span key={tag} className="text-sm text-[var(--text-secondary)] bg-[var(--surface-muted)] border border-[var(--border-light)] px-3 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
