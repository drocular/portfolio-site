import { CaseStudyLayout } from './CaseStudyLayout';
import { Section } from './Section';
import { AnimatedSection } from './AnimatedSection';
import { InsightBlock } from './InsightBlock';
import { NarrativeBreak } from './NarrativeBreak';
import { EvidenceStrip } from './EvidenceStrip';

export function HowWeAICaseStudy() {
  return (
    <CaseStudyLayout
      studyId="how-we-ai"
      lede="Infrastructure for collective intelligence"
      title="How We AI"
      subtitle="Everyone was experimenting with AI. Nobody was learning from each other. The question wasn't whether to create a meeting. It was how to make knowledge sharing inevitable."
      tags={[
        { label: 'Community Building' },
        { label: 'AI Adoption' },
        { label: 'Organizational Change' },
      ]}
    >
      {/* --- The Setup --- */}
      <Section variant="muted">
        <AnimatedSection>
          <p className="text-[var(--text-secondary)]">
            AI tools were emerging across the organization. Everyone experimenting, learning, building. But in isolation. The same mistakes got made repeatedly. Breakthroughs stayed local. Teams three floors apart were solving identical problems without knowing it.
          </p>
          <p className="text-[var(--text-secondary)] mt-4">
            I'd seen this pattern before. Not with AI specifically, but the dynamic: people working in silos, knowledge not spreading, the organization unable to accelerate collectively. It's a systems problem, not a people problem.
          </p>
        </AnimatedSection>
      </Section>

      <NarrativeBreak variant="marker" marker="The strategic bet" />

      {/* --- Insight 1 --- */}
      <InsightBlock
        label="Why grassroots, not top-down"
        insight="The question wasn't whether to create a meeting series. It was how to build infrastructure that makes knowledge sharing inevitable rather than effortful. Top-down mandates create compliance. Grassroots momentum creates culture."
        context="I started with what I could control. No approval needed, no budget required. Just consistency and genuine value."
      />

      {/* --- Building it --- */}
      <Section>
        <AnimatedSection>
          <h2>Building the flywheel</h2>
          <p className="text-[var(--text-secondary)] mt-6">
            I launched bi-weekly "How We AI" sessions: demos, shared workflows, lessons learned. Started with my UX team, then opened to the entire org. Product, IT, engineering, anyone experimenting. To make it scalable, I built a companion site with a prompt library, tool directory, recordings, and submission forms. The site was responsive and functional in less time than one SharePoint page would have taken.
          </p>
          <p className="text-[var(--text-secondary)] mt-4">
            The method was deliberate: push people to the site, recruit presenters when I hear they're doing interesting work, make regular announcements, maintain the cadence. Early consistency was critical because it built expectation. Now the momentum is self-sustaining. People pitch sessions, volunteer to present, and hold each other accountable to the schedule.
          </p>
        </AnimatedSection>
      </Section>

      <NarrativeBreak variant="marker" marker="The compounding effect" />

      <EvidenceStrip
        items={[
          { value: '15+', label: 'sessions delivered' },
          { value: '60', label: 'avg. attendees', emphasis: true },
          { value: '4', label: 'presentations per session' },
          { value: '3→∞', label: 'teams to org-wide' },
        ]}
        caption="What started as a UX team experiment became the organization's primary channel for AI knowledge sharing."
      />

      {/* --- Insight 2 --- */}
      <InsightBlock
        variant="prominent"
        showFlywheel
        label="The flywheel effect"
        insight="Consistency created visibility. Visibility attracted participants. Participants created content. Content attracted executive attention. None of this was planned. It was emergent. But it only happened because the underlying system was designed to compound."
        context="Someone who initially dismissed Figma AI saw another person's work at a session, went back and built something impressive enough to present themselves. A distinguished engineer found the site and reached out. Now I'm helping craft the AI narrative for Executive Leadership."
      />

      {/* --- What makes it work --- */}
      <Section variant="muted">
        <AnimatedSection>
          <h2>The operating principles</h2>
          <p className="text-[var(--text-secondary)] mt-6">
            The challenge with grassroots initiatives: people's attention is constantly pulled elsewhere. What's kept this alive isn't any one person. It's a system designed around four principles that create their own gravity:
          </p>
          <div className="mt-8 space-y-5">
            {[
              { num: '01', title: 'Maintain the cadence.', desc: 'Early consistency built trust and habit. Now the community expects it and self-organizes to keep it going.' },
              { num: '02', title: 'Make participation effortless.', desc: 'Simple submission forms, clear structure, recordings for anyone who misses it.' },
              { num: '03', title: 'Extend beyond the room.', desc: 'The site makes content accessible when people need it, not just during sessions.' },
              { num: '04', title: 'Actively recruit, don\'t passively wait.', desc: 'When I hear someone doing interesting work, I reach out. The best content comes from people who don\'t think their work is noteworthy.' },
            ].map((item) => (
              <div key={item.num} className="flex gap-5">
                <span className="text-[var(--accent)] font-semibold text-sm mt-0.5 shrink-0 tabular-nums">{item.num}</span>
                <p className="text-[var(--text-secondary)]">
                  <strong className="text-[var(--text-primary)]">{item.title}</strong> {item.desc}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      <NarrativeBreak variant="line" />

      {/* --- Insight 3 --- */}
      <InsightBlock
        label="The transferable pattern"
        insight="This approach scales beyond AI. Any time an organization faces emerging technology, the bottleneck is rarely the technology itself. It's the speed at which people learn to use it well. Build the space, show up consistently, make it easy to participate, and the network effects do the rest."
        context="The pattern is: lower friction, increase consistency, let compounding do the work. It's the same principle behind design systems, just applied to organizational learning."
      />
    </CaseStudyLayout>
  );
}
