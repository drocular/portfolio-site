import { CaseStudyLayout } from './CaseStudyLayout';
import { Section } from './Section';
import { AnimatedSection } from './AnimatedSection';
import { InsightBlock } from './InsightBlock';
import { NarrativeBreak } from './NarrativeBreak';

export function CurrentWork() {
  return (
    <CaseStudyLayout
      studyId="current-work"
      lede="Building the bridge between AI and design practice"
      title="Current Work"
      subtitle="AI tools are creating both hype and confusion. I'm building practical infrastructure (tools, research, and shared understanding) to help design teams adopt strategically, not reactively."
      tags={[
        { label: 'Innovation' },
        { label: 'AI Tools' },
        { label: 'Research' },
      ]}
    >
      {/* --- Design Critique Tool --- */}
      <Section variant="muted">
        <AnimatedSection>
          <span className="inline-block text-xs font-medium uppercase tracking-wider text-[var(--accent)] mb-3">Functional prototype in testing</span>
          <h2>Design Critique Tool</h2>
          <p className="text-[var(--text-secondary)] mt-6">
            Our AI Design Enablement team needed a way to evaluate AI-generated design work and raise quality standards across the org. The gap: no structured feedback mechanism that could work at the speed AI generates output.
          </p>
          <p className="text-[var(--text-secondary)] mt-4">
            I built a Figma plugin that extracts design data and an app that processes it through an AI agent for evaluation. Comments appear exactly where they address issues on the canvas, plus a comprehensive report. Like having an AI design reviewer who speaks in specifics, not generalities.
          </p>
        </AnimatedSection>
      </Section>

      <InsightBlock
        label="Why this matters"
        insight="As AI-generated design output increases, quality feedback becomes the bottleneck. The tool that evaluates AI work needs to be as fast as the tool that creates it. Otherwise standards erode by default."
      />

      {/* --- Translation Agent --- */}
      <Section>
        <AnimatedSection>
          <span className="inline-block text-xs font-medium uppercase tracking-wider text-[var(--accent)] mb-3">Active prototype</span>
          <h2>Design-to-AI Translation Agent</h2>
          <p className="text-[var(--text-secondary)] mt-6">
            People were getting stuck using Figma Make. They could describe what they wanted in design terms but not in the technical prompts the tool needed. Wasted credits, growing frustration, declining adoption.
          </p>
          <p className="text-[var(--text-secondary)] mt-4">
            I built an agent that translates "design speak" into "AI speak." Users paste code snippets, describe what's wrong or what they want, and it breaks down what's happening, identifies technical aspects they might not be aware of, and generates optimized prompts. Helps people get unstuck faster while reducing unnecessary credit usage.
          </p>
        </AnimatedSection>
      </Section>

      <NarrativeBreak variant="marker" marker="Research in progress" />

      {/* --- Figma AI Research --- */}
      <Section variant="muted">
        <AnimatedSection>
          <span className="inline-block text-xs font-medium uppercase tracking-wider text-[var(--accent)] mb-3">Ongoing research</span>
          <h2>Figma AI Research Project</h2>
          <p className="text-[var(--text-secondary)] mt-6">
            With Figma AI creating both hype and skepticism, our org needed actual data, not opinions, on where AI tools help and where they don't. I'm running a controlled experiment measuring productivity gains and time savings across different design tasks, building the evidence base for strategic adoption decisions.
          </p>
          <p className="text-[var(--text-secondary)] mt-4">
            Early findings: AI tools accelerate certain workflows significantly but aren't a silver bullet. The research is helping leadership set realistic expectations and invest in AI adoption strategically rather than reactively.
          </p>
        </AnimatedSection>
      </Section>

      <NarrativeBreak variant="line" />

      {/* --- The thread --- */}
      <InsightBlock
        variant="prominent"
        label="The thread connecting all of this"
        insight="These projects aren't about staying current with technology. They're about the same thing all my work is about: identifying where emerging tools create genuine leverage and building the infrastructure that helps people use them well. The tools change. The approach doesn't."
        showTransform
      />
    </CaseStudyLayout>
  );
}
