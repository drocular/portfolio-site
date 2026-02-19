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
      subtitle="We were spending all our energy maintaining two complete systems. The question wasn't how to unify them. It was what we could actually sustain."
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
        insight="AI tools started consuming design tokens. The architecture we built for sustainability turned out to be exactly what emerging tools needed. We were future-proof for reasons we didn't even anticipate. That's the best kind of validation."
        context="When your strategic direction gets validated by forces you didn't foresee, it usually means you found the right layer of abstraction."
        showLayers
      />

      {/* --- Driving the change --- */}
      <Section variant="muted">
        <AnimatedSection>
          <h2>Expanding the foundation</h2>
          <p className="text-[var(--text-secondary)] mt-6">
            I expanded beyond color to comprehensive token coverage: typography, spacing, elevation, and more. Now leading alignment workshops to establish tokens as our single source of truth. This freed our engineer from full-time theme maintenance to work on higher-value projects.
          </p>
          <p className="text-[var(--text-secondary)] mt-4">
            This isn't about doing less. It's about focusing effort where it creates the most leverage. Teams maintain their flexibility. We maintain something sustainable. And we're positioned for whatever tools emerge next.
          </p>
        </AnimatedSection>
      </Section>

      {/* --- Expected impact --- */}
      <Section width="wide">
        <AnimatedSection>
          <h2>Expected impact</h2>
          <p className="text-[var(--text-secondary)] mt-6 mb-2">
            In progress, but the trajectory is clear.
          </p>
          <OutcomeGrid variant="featured" columns={2} items={[
            { title: 'Reduced maintenance burden', description: 'One token foundation instead of two complete system themes.' },
            { title: 'Design consistency maintained', description: 'Without forcing standardization or disrupting entrenched workflows.' },
            { title: 'AI tool readiness', description: 'Emerging tools can generate on-brand work using our tokens directly.' },
            { title: 'Team autonomy preserved', description: 'Teams keep their preferred tools while we govern what actually needs governance.' },
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
