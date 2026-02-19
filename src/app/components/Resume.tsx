import { Link } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { AnimatedSection } from './AnimatedSection';
import { Download, Mail, Phone, Linkedin, ExternalLink } from 'lucide-react';

function CaseStudyLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-1 text-[var(--accent)] hover:underline underline-offset-2"
    >
      {children}
      <ExternalLink className="w-3 h-3 opacity-60" />
    </Link>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--accent)] mb-8">
      {children}
    </h2>
  );
}

function SkillChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs text-[var(--text-secondary)] border border-[var(--border-light)] rounded-full px-3 py-1">
      {children}
    </span>
  );
}

export function Resume() {
  return (
    <div className="min-h-screen bg-[var(--surface-primary)]">
      <Header showBackButton />

      {/* Hero / Header area */}
      <section className="pt-28 lg:pt-36 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
              <div>
                <h1 className="text-3xl lg:text-4xl font-semibold text-[var(--text-primary)] tracking-tight">
                  Joseph Lawsky
                </h1>
                <p className="text-base text-[var(--text-secondary)] mt-2">
                  System Designer | Operations & Design Systems
                </p>
                <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4 text-sm text-[var(--text-secondary)]">
                  <a href="mailto:joseph.lawsky@gmail.com" className="flex items-center gap-1.5 hover:text-[var(--accent)] hover:underline underline-offset-2 transition-colors">
                    <Mail className="w-3.5 h-3.5" />
                    joseph.lawsky@gmail.com
                  </a>
                  <a href="tel:+14044082534" className="flex items-center gap-1.5 hover:text-[var(--accent)] hover:underline underline-offset-2 transition-colors">
                    <Phone className="w-3.5 h-3.5" />
                    404-408-2534
                  </a>
                  <a href="https://www.linkedin.com/in/josephlawsky/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[var(--accent)] hover:underline underline-offset-2 transition-colors">
                    <Linkedin className="w-3.5 h-3.5" />
                    LinkedIn
                  </a>
                </div>
              </div>

              <a
                href="/joseph-lawsky-resume.pdf"
                download
                className="shrink-0 inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-lg bg-[var(--text-primary)] text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:bg-[var(--accent)]"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="h-px bg-[var(--border-light)]" />
      </div>

      {/* Summary */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <SectionHeading>Summary</SectionHeading>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Seasoned designer with 12+ years of experience blending storytelling, systems thinking, and visual design across digital and physical spaces. I've led enterprise-scale design systems, wrangled giant Figma libraries, and worked side-by-side with developers to ship accessible, high-impact UI. I came into UX from film, television, props, and production and bring that same creativity and collaborative energy to every project.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Experience */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <SectionHeading>Experience</SectionHeading>
          </AnimatedSection>

          {/* THD - Current Role */}
          <AnimatedSection delay={0.1}>
            <div className="mb-12">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">The Home Depot</h3>
                <span className="text-sm text-[var(--text-secondary)]">Feb 2022 &ndash; Present</span>
              </div>
              <p className="text-sm text-[var(--text-secondary)] italic mb-5">UX Designer &ndash; Design Operations & Systems Lead</p>

              <ul className="space-y-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-[var(--accent)] mt-1.5 shrink-0">&bull;</span>
                  <span>
                    Lead organization-wide AI experimentation through{' '}
                    <CaseStudyLink to="/case-studies/how-we-ai">"How We AI"</CaseStudyLink>{' '}
                    initiative (bi-weekly sessions, 60+ attendees) and resource site
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--accent)] mt-1.5 shrink-0">&bull;</span>
                  <span>Advise Executive Leadership on AI adoption strategy across UX and IT</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--accent)] mt-1.5 shrink-0">&bull;</span>
                  <span>
                    Lead transformation from service model (dual-theme maintenance) to platform model ({' '}
                    <CaseStudyLink to="/case-studies/design-tokens">token foundation</CaseStudyLink>
                    ), enabling sustainable governance for 260+ designers
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--accent)] mt-1.5 shrink-0">&bull;</span>
                  <span>Built component token generation agent that identifies system differences, missing tokens, and generates implementation code for Ant and MUI</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--accent)] mt-1.5 shrink-0">&bull;</span>
                  <span>Built AI-powered design critique tool (Figma plugin + app) providing contextual feedback on design quality</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--accent)] mt-1.5 shrink-0">&bull;</span>
                  <span>Testing Figma MCP server for design-to-code handoff, comparing native Figma vs Make code output, and evaluating VSCode + GitHub Copilot</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--accent)] mt-1.5 shrink-0">&bull;</span>
                  <span>Own and manage two enterprise design systems (Ant Design, Material UI)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--accent)] mt-1.5 shrink-0">&bull;</span>
                  <span>Drive design system roadmap and vision, translating organizational constraints into scalable solutions</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--accent)] mt-1.5 shrink-0">&bull;</span>
                  <span>
                    Built{' '}
                    <CaseStudyLink to="/case-studies/color-scheme">universal color palette</CaseStudyLink>{' '}
                    (10 palettes, 100+ tokens) and comprehensive token set unifying two enterprise systems
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--accent)] mt-1.5 shrink-0">&bull;</span>
                  <span>Led company-wide research with 100+ designers on design system effectiveness and maturity, identifying systemic gaps and opportunities</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--accent)] mt-1.5 shrink-0">&bull;</span>
                  <span>Provide design systems consultation supporting 5-10 product teams monthly, translating usage patterns into strategic guidance</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--accent)] mt-1.5 shrink-0">&bull;</span>
                  <span>Develop and roll out design system guidelines to cross-functional partners (product, content, QA, engineering)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--accent)] mt-1.5 shrink-0">&bull;</span>
                  <span>Serve as org-wide Figma admin managing tooling, permissions, and workspace infrastructure; built enterprise-wide training curriculum</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--accent)] mt-1.5 shrink-0">&bull;</span>
                  <span>
                    Design modular, scalable, WCAG-compliant components (including{' '}
                    <CaseStudyLink to="/case-studies/table-component">table component system</CaseStudyLink>
                    ); collaborate with engineering on design-to-code alignment and maintain documentation in Zeroheight
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--accent)] mt-1.5 shrink-0">&bull;</span>
                  <span>Created Auto Scan feature for Carton Scanning app enabling hands-free scanning while restocking, reducing scan time by 40%</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          {/* THD - Apprentice */}
          <AnimatedSection delay={0.15}>
            <div className="mb-12">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">The Home Depot</h3>
                <span className="text-sm text-[var(--text-secondary)]">Nov 2021 &ndash; Feb 2022</span>
              </div>
              <p className="text-sm text-[var(--text-secondary)] italic mb-5">UX Apprentice &ndash; Merchandise Planning and Assortment</p>

              <ul className="space-y-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-[var(--accent)] mt-1.5 shrink-0">&bull;</span>
                  <span>Supported product designers with research, flows, and early prototyping</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--accent)] mt-1.5 shrink-0">&bull;</span>
                  <span>Gained firsthand experience with agile, enterprise UX workflows</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          {/* Art Department */}
          <AnimatedSection delay={0.2}>
            <div className="mb-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">Art Department Leadership &ndash; Television & Commercial Production</h3>
                <span className="text-sm text-[var(--text-secondary)]">2014 &ndash; 2020</span>
              </div>
              <p className="text-sm text-[var(--text-secondary)] italic mb-5">
                <CaseStudyLink to="/case-studies/props-master">Prop Master</CaseStudyLink> & Production Designer
              </p>

              <ul className="space-y-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-[var(--accent)] mt-1.5 shrink-0">&bull;</span>
                  <span>Worked with major television networks like Discovery and Lifetime, and commercial productions, to lead and support the creative execution of visual environments</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--accent)] mt-1.5 shrink-0">&bull;</span>
                  <span>Designed and directed visual environments for nationally aired TV shows and branded content, translating narrative goals into cohesive spatial and graphic experiences</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--accent)] mt-1.5 shrink-0">&bull;</span>
                  <span>Built scalable, repeatable workflows across production units</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--accent)] mt-1.5 shrink-0">&bull;</span>
                  <span>Acted as a cross-functional bridge between directors, producers, and clients</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="h-px bg-[var(--border-light)]" />
      </div>

      {/* Skills */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <SectionHeading>Skills & Technologies</SectionHeading>
          </AnimatedSection>

          <div className="space-y-6">
            <AnimatedSection delay={0.05}>
              <div>
                <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-3">Design Systems & Ops</h3>
                <div className="flex flex-wrap gap-2">
                  {['Figma (expert/admin)', 'Tokens', 'Variables', 'Component Libraries', 'Zeroheight', 'Accessibility (WCAG)', 'Governance', 'Metrics', 'Adoption Strategy', 'Toolkit Distribution', 'Theming'].map((s) => (
                    <SkillChip key={s}>{s}</SkillChip>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div>
                <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-3">Cross-Functional Collaboration</h3>
                <div className="flex flex-wrap gap-2">
                  {['Engineering Handoff', 'Slack/Office Hours', 'Roadmapping', 'QA', 'Contribution Models'].map((s) => (
                    <SkillChip key={s}>{s}</SkillChip>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div>
                <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-3">Design Practices</h3>
                <div className="flex flex-wrap gap-2">
                  {['Design Thinking', 'Inclusive Design', 'Jobs to Be Done', 'UX Patterns', 'Prototyping', 'Usability', 'Documentation'].map((s) => (
                    <SkillChip key={s}>{s}</SkillChip>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div>
                <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-3">Tools & Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Sketch', 'Canva', 'Webflow', 'Ant Design', 'Material', 'Flutter', 'VSCode', 'GitHub Copilot', 'Google Gemini', 'Claude', 'ChatGPT', 'Microsoft Copilot'].map((s) => (
                    <SkillChip key={s}>{s}</SkillChip>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="h-px bg-[var(--border-light)]" />
      </div>

      {/* Education */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <SectionHeading>Education</SectionHeading>
          </AnimatedSection>

          <div className="space-y-6">
            <AnimatedSection delay={0.05}>
              <div>
                <h3 className="text-base font-semibold text-[var(--text-primary)]">DesignLab</h3>
                <p className="text-sm text-[var(--text-secondary)]">UX Foundations and Academy</p>
                <p className="text-sm text-[var(--text-secondary)]">Feb 2021 &ndash; Nov 2021</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div>
                <h3 className="text-base font-semibold text-[var(--text-primary)]">Ithaca College</h3>
                <p className="text-sm text-[var(--text-secondary)]">B.S. Film and Photography</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Bottom download CTA */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <a
              href="/joseph-lawsky-resume.pdf"
              download
              className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-lg border border-[var(--border-light)] text-[var(--text-primary)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <Download className="w-4 h-4" />
              Download PDF version
            </a>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
