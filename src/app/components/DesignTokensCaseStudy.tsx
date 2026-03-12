import { CaseStudyLayout } from './CaseStudyLayout';
import { Section } from './Section';
import { AnimatedSection } from './AnimatedSection';
import { InsightBlock } from './InsightBlock';
import { NarrativeBreak } from './NarrativeBreak';
import { TensionPair } from './TensionPair';
import { EvidenceStrip } from './EvidenceStrip';
import { OutcomeGrid } from './OutcomeGrid';

export function DesignTokensCaseStudy() {
  return (
    <CaseStudyLayout
      studyId="design-tokens"
      lede="Sustainable infrastructure over perfect systems"
      title="Implementing Design Tokens at Scale"
      subtitle="We were spending all our energy maintaining two complete systems. The question wasn't how to unify them, it was what we could actually sustain."
      tags={[
        { label: 'Design Tokens' },
        { label: 'Strategy' },
        { label: 'Scalability' },
      ]}
    >
      {/* --- The Setup --- */}
      <Section variant="muted">
        <AnimatedSection>
          <p className="text-[var(--text-secondary)]">
            I oversee two complete third-party design systems with separate themes, libraries, and documentation for each. Teams are entrenched in their tools, and forcing a migration would create disruption without meaningful benefit. Meanwhile, our priorities kept shifting. Asking for more resources wasn't a viable path forward.
          </p>
          <p className="text-[var(--text-secondary)] mt-4">
            Everyone was treating this as a resource problem. I started seeing it as an architecture problem.
          </p>
        </AnimatedSection>
      </Section>

      <NarrativeBreak variant="marker" marker="The sustainability question" />

      {/* --- Insight 1 --- */}
      <InsightBlock
        label="The question that reframed everything"
        insight="We were asking 'how do we maintain two systems?' The better question was: what's the minimum we need to control to keep everything consistent? What if we stopped trying to own the whole stack and focused on the layer that actually matters?"
        context="The color system work had already proven that tokens could bridge both systems. That wasn't just a successful project. It was a proof of concept for an entirely different operating model."
      />

      {/* --- The strategic shift --- */}
      <Section>
        <AnimatedSection>
          <h2>Following the evidence</h2>
          <p className="text-[var(--text-secondary)] mt-6">
            After the color palette proved tokens could work across both systems, I started seeing the larger opportunity. Tokens give us a single source of truth we can realistically maintain. Teams apply them to whatever system they're using. We keep foundational consistency without maintaining two complete themes.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <TensionPair
            left={{
              label: 'The old model',
              content: 'Maintain two complete design systems: two themes, two sets of documentation, two upgrade paths. Every change doubled. Our engineer spent most of their time on theme maintenance instead of higher-value work.',
            }}
            right={{
              label: 'The token model',
              content: 'Own the foundation layer (color, typography, spacing, elevation) as tokens. Let teams use whatever UI library they prefer. One source of truth, applied everywhere. Sustainable with the resources we actually have.',
            }}
            connector="instead"
          />
        </AnimatedSection>
      </Section>

      <NarrativeBreak variant="marker" marker="An unexpected validation" />

      {/* --- Insight 2 --- */}
      <InsightBlock
        variant="prominent"
        label="What I didn't predict"
        insight="Design tokens are code. And code is machine-readable in a way that visual design never will be. The architecture we built for sustainability turned out to be inherently AI-ready — not because we designed it for AI, but because we designed it as structured data."
        context="When your strategic direction gets validated by forces you didn't foresee, it usually means you found the right layer of abstraction."
        showLayers
      />

      {/* --- Expanding the foundation --- */}
      <Section variant="muted">
        <AnimatedSection>
          <h2>Expanding the foundation</h2>
          <p className="text-[var(--text-secondary)] mt-6">
            I built out the primitive and semantic token layers as a proof of concept, then ran a workshop with the team to pitch the vision and gather input on what governance would look like. The response validated the direction: teams saw how tokens could give them autonomy while keeping the system consistent.
          </p>
          <p className="text-[var(--text-secondary)] mt-4">
            The next challenge was component tokens. 108 components across two libraries, each needing its own token mappings. My initial plan was to divide the work across the team. Then I had a better idea.
          </p>
        </AnimatedSection>
      </Section>

      <NarrativeBreak variant="marker" marker="The multiplier" />

      {/* --- AI agent approach --- */}
      <Section>
        <AnimatedSection>
          <h2>Scaling with leverage</h2>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <TensionPair
            left={{
              label: 'The manual path',
              content: 'Distribute the 108 components across the team. Each person maps tokens for their assigned components. Weeks of work, inconsistent results, constant alignment needed.',
            }}
            right={{
              label: 'What I built instead',
              content: 'An AI agent loaded with the token structure, my primitives, my semantics, and constrained to only reference Ant Design and MUI documentation. It generated component tokens at a pace no team could match.',
            }}
            connector="vs"
          />
        </AnimatedSection>
      </Section>

      <EvidenceStrip
        items={[
          { value: '108', label: 'total components' },
          { value: '71', label: 'unique components tokenized', emphasis: true },
          { value: '~1,100', label: 'component tokens generated' },
          { value: '~2', label: 'days to complete' },
        ]}
        caption="To validate and refine the output, I built a React demo site showing every component, its token connections, and a live demo page — using real React components to prove these tokens can make anything look like what's in production."
      />

      {/* --- What this built --- */}
      <Section variant="muted" width="wide">
        <AnimatedSection>
          <h2>What this built</h2>
          <p className="text-[var(--text-secondary)] mt-6 mb-2">
            What started as a sustainability play became a force multiplier.
          </p>
          <OutcomeGrid variant="featured" columns={2} items={[
            { title: 'Reduced maintenance burden', description: 'One token foundation instead of two complete system themes.' },
            { title: 'Design consistency maintained', description: 'Without forcing standardization or disrupting entrenched workflows.' },
            { title: '71 components tokenized', description: 'An AI agent generated component tokens in days, not weeks — with a single consistent vision.' },
            { title: 'Live validation site', description: 'A React demo site proving tokens work in production, with every component and connection visible.' },
          ]} />
        </AnimatedSection>
      </Section>

      <NarrativeBreak variant="line" />

      {/* --- Insight 3 --- */}
      <InsightBlock
        label="The principle underneath"
        insight="Sustainability beats perfection. A system you can actually maintain with the resources you have will always outperform a theoretically better system that slowly decays from neglect. The hardest part of systems work is choosing what not to own."
        context="Every design system team I've talked to is stretched thin. The ones that thrive aren't the ones with the most resources. They're the ones who found the right layer to control."
      />
    </CaseStudyLayout>
  );
}
