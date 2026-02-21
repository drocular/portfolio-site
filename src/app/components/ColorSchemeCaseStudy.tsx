import { useState } from 'react';
import { CaseStudyLayout } from './CaseStudyLayout';
import { Section } from './Section';
import { AnimatedSection } from './AnimatedSection';
import { InsightBlock } from './InsightBlock';
import { NarrativeBreak } from './NarrativeBreak';
import { TensionPair } from './TensionPair';
import { EvidenceStrip } from './EvidenceStrip';
import { OutcomeGrid } from './OutcomeGrid';
import { CaseStudyGallery, type GalleryImage } from './CaseStudyGallery';
import { GalleryThumbnail } from './GalleryThumbnail';

const galleryImages: GalleryImage[] = [
  {
    src: 'https://picsum.photos/seed/cs-palette/600/400',
    alt: 'Color palette overview showing 10 full-spectrum palettes',
    caption: 'Full-spectrum palette architecture',
  },
  {
    src: 'https://picsum.photos/seed/cs-tokens/500/700',
    alt: 'Token hierarchy diagram from raw values to component tokens',
    caption: 'Four-layer token hierarchy',
  },
  {
    src: 'https://picsum.photos/seed/cs-figma/600/450',
    alt: 'Figma variables panel showing shared color tokens',
    caption: 'Shared Figma variables panel',
  },
  {
    src: 'https://picsum.photos/seed/cs-audit/400/500',
    alt: 'Before and after color audit comparison',
    caption: 'Color audit — before and after',
  },
  {
    src: 'https://picsum.photos/seed/cs-semantic/700/400',
    alt: 'Semantic color mapping across both design systems',
    caption: 'Semantic color mapping',
  },
  {
    src: 'https://picsum.photos/seed/cs-component/500/600',
    alt: 'Component tokens applied to button variants',
    caption: 'Component token usage in buttons',
  },
  {
    src: 'https://picsum.photos/seed/cs-a11y/600/350',
    alt: 'Accessibility contrast ranges built into palettes',
    caption: 'Built-in accessibility ranges',
  },
  {
    src: 'https://picsum.photos/seed/cs-adoption/500/400',
    alt: 'Team adoption metrics dashboard',
    caption: 'Cross-team adoption dashboard',
  },
];

export function ColorSchemeCaseStudy() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <CaseStudyLayout
      studyId="color-scheme"
      lede="Pattern recognition at enterprise scale"
      title="Creating an Enterprise Color Scheme"
      subtitle="Two incompatible UI libraries. 260+ designers. The solution wasn't unification. It was finding the right layer of abstraction."
      tags={[
        { label: 'Design Systems' },
        { label: 'Design Tokens' },
        { label: 'Enterprise Scale' },
      ]}
    >
      {/* --- The Setup --- */}
      <Section variant="muted">
        <AnimatedSection>
          <p className="text-[var(--text-secondary)]">
            As captain of design systems for our DesignOps team, I manage two enterprise design systems (Ant Design and Material UI) supporting designers across dozens of product teams. Each system had its own color palettes, naming conventions, and styling logic. Every change required manual updates in two places. Teams were entrenched in their tools. Nobody questioned the setup because this was just how things worked.
          </p>
          <p className="text-[var(--text-secondary)] mt-4">
            But I kept noticing the same friction points. Designers asking "which blue?" across libraries. Inconsistent product surfaces. New team members spending weeks just learning which color values to use. The problem wasn't the people. It was the architecture.
          </p>
        </AnimatedSection>
      </Section>

      <NarrativeBreak variant="marker" marker="The first signal" />

      {/* --- Insight 1: The pattern --- */}
      <InsightBlock
        showSignal
        label="The pattern I noticed"
        insight="We were maintaining two complete color systems with almost zero overlap. Everyone was focused on the differences between the systems. I kept looking at what they shared, and it was almost nothing. That gap was the signal."
        context="A comprehensive audit of hundreds of hex values confirmed it: only three colors were consistent across both libraries. Brand orange. Link blue. White. Three out of hundreds."
      />

      {/* --- Testing the hypothesis --- */}
      <Section>
        <AnimatedSection>
          <h2>Testing the hypothesis</h2>
          <p className="text-[var(--text-secondary)] mt-6">
            Before proposing a full redesign, I needed to know if alignment was even possible. I ran a targeted experiment: take just those 7 shared colors and build a micro-palette that both systems could reference. Small scope, fast feedback.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <TensionPair
            left={{
              label: 'The safe move',
              content: 'Incrementally align colors one by one across both libraries. Minimal disruption. Slow, steady progress. But every alignment decision would need negotiating between two entrenched ecosystems.',
            }}
            right={{
              label: 'What the pilot revealed',
              content: 'Small-scale alignment was technically possible, but both systems handled color overrides differently. Limited palettes constrained the flexibility teams needed. We needed a complete foundation, not patches.',
            }}
            connector="but"
          />
        </AnimatedSection>
      </Section>

      <NarrativeBreak variant="marker" marker="The design decision" />

      {/* --- Evidence: Scale of the architecture --- */}
      <EvidenceStrip
        items={[
          { value: '10', label: 'full-spectrum palettes' },
          { value: '100', label: 'total color values' },
          { value: '6', label: 'semantic color groups', emphasis: true },
          { value: '2→1', label: 'systems, one foundation' },
        ]}
        caption="The architecture: 10 palettes, each with 10 shades from 50 to 900, anchored by brand-matched primary tones with built-in accessibility ranges."
      />

      {/* --- Choosing the right layer --- */}
      <Section variant="muted">
        <AnimatedSection>
          <h2>Choosing the right layer</h2>
          <p className="text-[var(--text-secondary)] mt-6">
            Research into modern design systems revealed two approaches: minimal prescriptive systems that tightly control usage, or expansive systems providing broader choice within structure. With dozens of product teams and vastly different requirements, tight prescriptive control would create more friction than it solved. The question wasn't how to limit choice. It was how to give designers genuine flexibility while maintaining consistency through structure and naming.
          </p>
        </AnimatedSection>
      </Section>

      {/* --- Insight 2: The leverage point --- */}
      <InsightBlock
        variant="prominent"
        label="The leverage point"
        insight="A palette without infrastructure is just a document. We didn't need better colors. We needed a system where changing a color in one place changed it everywhere."
        context="This is when the project stopped being about color and started being about architecture."
      />

      {/* --- Building the backbone --- */}
      <Section width="wide">
        <AnimatedSection>
          <h2>Building the backbone</h2>
          <p className="text-[var(--text-secondary)] mt-6">
            I designed a four-layer token system. The key insight was that each layer serves a different audience and changes at a different rate, from raw values that almost never change to component tokens that evolve with every design iteration.
          </p>
        </AnimatedSection>

        {/* Token architecture visualization */}
        <div className="mt-10 space-y-3">
          {[
            { layer: 'Raw values', example: '#30B3CE', desc: 'Hex codes. The source of truth. Almost never change.', borderOpacity: 'opacity-20' },
            { layer: 'Reference tokens', example: 'Teal / Teal-500', desc: 'Named palette positions. Change rarely, affect everything downstream.', borderOpacity: 'opacity-40' },
            { layer: 'Semantic tokens', example: 'Action-Primary', desc: 'Purpose-driven names. Why a color is used, not what it is.', borderOpacity: 'opacity-65' },
            { layer: 'Component tokens', example: 'Button / Primary / Hover-BG', desc: 'Scoped to specific components. Change often, safely.', borderOpacity: 'opacity-100' },
          ].map((item, i) => (
            <AnimatedSection key={i} delay={0.1 + i * 0.08} motionVariant="subtle">
              <div className="flex items-stretch rounded-lg border border-[var(--border-light)] bg-white overflow-hidden">
                <div className={`w-1 bg-[var(--accent)] ${item.borderOpacity} shrink-0`} />
                <div className="p-5 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 flex-1 min-w-0">
                  <div className="sm:w-44 shrink-0">
                    <span className="text-xs font-medium uppercase tracking-wider text-[var(--text-tertiary)]">
                      {item.layer}
                    </span>
                  </div>
                  <code className="text-sm font-mono text-[var(--accent)] bg-[var(--accent-subtle)] px-2 py-0.5 rounded whitespace-nowrap w-fit">
                    {item.example}
                  </code>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <p className="text-[var(--text-secondary)] mt-8">
            Colors grouped by purpose: Brand, Text, Background, Status, Action, System. Both libraries connected to a single set of Figma Variables, with components refactored to use tokens at the appropriate level. A designer changing a semantic token would see the change ripple through every component that referenced it, in both systems, instantly.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="mt-10 pt-8 border-t border-[var(--border-light)]">
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--text-tertiary)] mb-4 block">
              From the project
            </span>
            <GalleryThumbnail
              image={galleryImages[4]}
              index={4}
              onClick={setLightboxIndex}
            />
          </div>
        </AnimatedSection>
      </Section>

      {/* --- Outcomes --- */}
      <Section variant="muted" width="wide">
        <AnimatedSection>
          <h2>What this made possible</h2>
          <p className="text-[var(--text-secondary)] mt-6 mb-2">
            This work established the infrastructure for consistent design at enterprise scale, and opened doors we hadn't anticipated.
          </p>
          <OutcomeGrid
            variant="featured"
            columns={3}
            items={[
              { title: 'Single source of truth', description: 'One color system managing both Ant Design and Material UI libraries through shared tokens.' },
              { title: 'Faster onboarding', description: 'New designers learn one system and work consistently across any product team from day one.' },
              { title: 'Accessibility by default', description: 'Predefined contrast ranges in every palette ensure WCAG compliance without manual checking.' },
              { title: 'Eliminated manual sync', description: 'No more updating colors across multiple files. Change it once, it propagates everywhere.' },
              { title: 'Shared vocabulary', description: 'Design and engineering finally speaking the same language about color through semantic naming.' },
              { title: 'Foundation for theming', description: 'The token architecture directly supports dark mode, brand theming, and future system expansion.' },
            ]}
          />
        </AnimatedSection>
      </Section>

      <NarrativeBreak variant="line" />

      {/* --- Insight 3: The reflection --- */}
      <InsightBlock
        label="The deeper lesson"
        insight="The real skill wasn't designing a color system. It was recognizing that an entire org treating fragmentation as normal was itself a design signal. The best infrastructure work starts by questioning what everyone else has accepted as a given."
        context="Most people see two incompatible systems and think 'how do we pick one?' The better question is always 'what layer makes the incompatibility irrelevant?'"
      />

      <CaseStudyGallery
        heading="Project gallery"
        images={galleryImages}
        lightboxIndex={lightboxIndex}
        onImageClick={setLightboxIndex}
        onClose={() => setLightboxIndex(null)}
      />
    </CaseStudyLayout>
  );
}
