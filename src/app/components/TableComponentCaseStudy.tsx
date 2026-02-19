import { CaseStudyLayout } from './CaseStudyLayout';
import { Section } from './Section';
import { AnimatedSection } from './AnimatedSection';
import { InsightBlock } from './InsightBlock';
import { NarrativeBreak } from './NarrativeBreak';
import { TensionPair } from './TensionPair';
import { OutcomeGrid } from './OutcomeGrid';

export function TableComponentCaseStudy() {
  return (
    <CaseStudyLayout
      studyId="table-component"
      lede="Designing for how people actually work"
      title="Redesigning Tables for Real-World Use"
      subtitle="Our most-used component was also our most broken. The fix revealed something surprising about what designers actually want from a design system."
      tags={[
        { label: 'Component Design' },
        { label: 'Design Systems' },
        { label: 'User Research' },
      ]}
    >
      {/* --- The Setup --- */}
      <Section variant="muted">
        <AnimatedSection>
          <p className="text-[var(--text-secondary)]">
            Designer surveys revealed Figma proficiency distributed in a bell curve, and the middle wasn't where we needed it to be. Meanwhile, our component libraries weren't taking advantage of newer Figma features that could make components easier to use. Tables were the worst offender: one of our most-used components, driven by data-heavy product teams, and consistently the source of the most support requests.
          </p>
          <p className="text-[var(--text-secondary)] mt-4">
            The existing Table component was essentially static: 5 columns, 5 rows, with only basic properties. Any real customization required detaching, which is exactly what a design system component should prevent. The answer to "how do I add more columns?" was always "detach it and build what you need."
          </p>
        </AnimatedSection>
      </Section>

      <NarrativeBreak variant="marker" marker="The deeper problem" />

      {/* --- Insight 1 --- */}
      <InsightBlock
        label="What I saw underneath"
        insight="A component that forces designers to detach in order to use it isn't a component. It's a suggestion. And every detachment is a data point telling you the abstraction is wrong."
        context="I started tracking detachment patterns through Figma analytics. The question shifted from 'how do we make a better table' to 'why does every real use case break the component?'"
        showConstraint
      />

      {/* --- Research and redesign --- */}
      <Section>
        <AnimatedSection>
          <h2>Finding the right constraints</h2>
          <p className="text-[var(--text-secondary)] mt-6">
            I used Figma analytics to identify files with heavy table usage, then examined what designers were actually building, not what I assumed they needed. Combined with direct conversations, three strategic constraints emerged: add enough flexibility so designers wouldn't need to detach, don't overload the library with variants that slow file loading, and make customization possible without deep Figma knowledge.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <TensionPair
            left={{
              label: 'Row-based architecture',
              content: 'The existing approach: tables as rows of cells. Seems intuitive, but adding or removing columns means restructuring every row. Customization cascades unpredictably.',
            }}
            right={{
              label: 'Column-based architecture',
              content: 'Tables as columns of cells. Adding a column is a single swap. Multiple cell types (text, numeric, action, status) as full columns in 10, 25, or 50 row variants. Fundamentally composable.',
            }}
            connector="vs"
          />
        </AnimatedSection>
      </Section>

      <NarrativeBreak variant="marker" marker="The surprise in the data" />

      {/* --- Insight 2 --- */}
      <InsightBlock
        variant="prominent"
        label="What the adoption data revealed"
        insight="I tracked usage after launch expecting to see the complete table components leading adoption. Instead, the most adopted components were individual columns. Designers didn't want a more flexible pre-built solution. They wanted better building blocks to create their own."
        context="This changed how I think about design system components at every level of complexity."
      />

      {/* --- Outcomes --- */}
      <Section variant="muted" width="wide">
        <AnimatedSection>
          <h2>What changed</h2>
          <p className="text-[var(--text-secondary)] mt-6 mb-2">
            The redesign solved the immediate problem, but the real value was in what we learned.
          </p>
          <OutcomeGrid variant="featured" columns={2} items={[
            { title: 'Eliminated detachment', description: 'Designers could build any table configuration without breaking the component connection.' },
            { title: 'Reduced support requests', description: 'No more "how do I customize this?" questions about tables in Slack.' },
            { title: 'Empowered all skill levels', description: 'Complex tables became accessible without deep Figma expertise.' },
            { title: 'Validated building-block philosophy', description: 'Giving people raw materials may matter more than giving them finished solutions.' },
          ]} />
        </AnimatedSection>
      </Section>

      <NarrativeBreak variant="line" />

      {/* --- Insight 3 --- */}
      <InsightBlock
        label="The mental model shift"
        insight="Without post-launch analytics, I would have declared success based on the solution I built. The data showed success was happening, just not where I expected. Design systems work best when they give people the right primitives, not when they try to predict every use case."
        context="It's the difference between building a kitchen and delivering meals. Both feed people, but one creates ongoing capability."
      />
    </CaseStudyLayout>
  );
}
