import { useState } from 'react';
import { CaseStudyLayout } from './CaseStudyLayout';
import { Section } from './Section';
import { AnimatedSection } from './AnimatedSection';
import { InsightBlock } from './InsightBlock';
import { NarrativeBreak } from './NarrativeBreak';
import { EvidenceStrip } from './EvidenceStrip';
import { OutcomeGrid } from './OutcomeGrid';
import { CaseStudyGallery, type GalleryImage } from './CaseStudyGallery';
import { GalleryThumbnail } from './GalleryThumbnail';

// Gallery images — all roughly 4:3 landscape, naturally balanced
const galleryImages: GalleryImage[] = [
  // 0 — col1
  {
    src: '/Images/PropsMaster/burnt out room.JPG',
    alt: 'A fire-damaged room set dressed for filming',
    caption: 'Totally real fire damage. Just kidding — all staged, all us.',
  },
  // 1 — col2
  {
    src: '/Images/PropsMaster/shelter build.JPG',
    alt: 'Building the pre-fab Appalachian Trail shelter on set',
    caption: 'The infamous shelter — pre-fab, assembled in under an hour',
  },
  // 2 — col3
  {
    src: '/Images/PropsMaster/crime scene.JPG',
    alt: 'A staged crime scene set dressed for filming',
    caption: 'Crime scene dressing — every detail historically placed',
  },
  // 3 — col1
  {
    src: '/Images/PropsMaster/camera lens.jpeg',
    alt: 'On-set shot through the monitor showing the props master at work',
    caption: 'Caught through the monitor. The face of someone who definitely isn\'t annoyed.',
  },
  // 4 — col2
  {
    src: '/Images/PropsMaster/night shelter.JPG',
    alt: 'The completed Appalachian Trail shelter dressed for night filming',
    caption: 'The shelter at night — held up through two days of shooting',
  },
  // 5 — col3
  {
    src: '/Images/PropsMaster/jail scene.JPG',
    alt: 'A jail set dressed and lit for filming',
    caption: 'Jail scene — set dressed with zero budget for "real" jail',
  },
  // 6 — col1
  {
    src: '/Images/PropsMaster/creepy car.JPG',
    alt: 'A vehicle staged as a set piece for a scene',
    caption: 'Nothing suspicious here. Just another day at the office.',
  },
];

export function PropsMasterCaseStudy() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <CaseStudyLayout
      studyId="props-master"
      lede="Systems thinking before design systems"
      title="Props Master: Dead Silent"
      subtitle="Film-quality production design on a procedural budget. This is where I learned that scaling creative work isn't about heroics. It's about infrastructure."
      tags={[
        { label: 'Systems Thinking' },
        { label: 'Film & Television' },
        { label: 'Operational Excellence' },
      ]}
    >
      {/* --- The Setup --- */}
      <Section variant="muted">
        <AnimatedSection>
          <p className="text-[var(--text-secondary)]">
            Discovery Channel's true crime series <em>Dead Silent</em> needed to feel like a moody art piece, not generic true crime. The catch: procedural budget, prestige creative expectations. As Props Master, I was responsible for 75-120 working props per episode block across 17+ sets spanning multiple time periods, all with a 3-person art department handling everything.
          </p>
          <p className="text-[var(--text-secondary)] mt-4">
            Two episodes shot over 8 days. No room for error. Every prop historically accurate, every set dressed to the director's vision. Most people in this position just grind harder. I built systems instead.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="mt-10 pt-8 border-t border-[var(--border-light)]">
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--text-tertiary)] mb-4 block">
              From the set
            </span>
            <GalleryThumbnail
              image={galleryImages[0]}
              index={0}
              onClick={setLightboxIndex}
            />
          </div>
        </AnimatedSection>
      </Section>

      <EvidenceStrip
        items={[
          { value: '120', label: 'props per episode block' },
          { value: '17+', label: 'sets per block' },
          { value: '3', label: 'person art department' },
          { value: '8', label: 'day shoot schedule', emphasis: true },
        ]}
      />

      <NarrativeBreak variant="marker" marker="The operating model" />

      {/* --- Insight 1 --- */}
      <InsightBlock
        label="The principle I built on"
        insight="Individual excellence doesn't scale. I needed an operating model where quality was the default output, not the result of someone working nights and weekends. The system had to work even on the hardest days."
        context="One crew member on set, two prepping the next location. Production could wait on anyone but us. That wasn't luck. It was architecture."
        showBlueprint
      />

      {/* --- How it worked --- */}
      <Section>
        <AnimatedSection>
          <h2>Reusable assets, strategic relationships</h2>
          <p className="text-[var(--text-secondary)] mt-6">
            I built a personal "stash" of reusable assets: police department materials, period-specific items, set dressing pieces. It carried across shows. Instead of sourcing everything from scratch each episode, I maintained a library of proven elements that could be recombined and adapted. Sound familiar?
          </p>
          <p className="text-[var(--text-secondary)] mt-4">
            Cross-functional relationships were equally critical. I invested in connections with other department heads and our prop house, becoming the go-to thought partner for what was really happening on set. Those relationships paid back when I needed resources fast or creative compromises that still served the vision.
          </p>
        </AnimatedSection>
      </Section>

      <Section variant="muted">
        <AnimatedSection>
          <h2>"You always seem to pull it off"</h2>
          <p className="text-[var(--text-secondary)] mt-6">
            We needed an Appalachian Trail shelter built from scratch on an empty patch of land. Day one, no pre-call to give my crew a head start. I designed a pre-fab shelter that could be assembled in under an hour and hold up through two days of shooting with actors inside. Partnered with the prop house to plan and execute. Built on time, looked authentic, held up through the shoot.
          </p>
          <p className="text-[var(--text-secondary)] mt-4 italic text-[var(--text-tertiary)]">
            That became the running joke with directors. They kept asking for crazier things because they knew I'd find a way. But the "way" was never heroics. It was always preparation meeting opportunity.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="mt-10 pt-8 border-t border-[var(--border-light)]">
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--text-tertiary)] mb-4 block">
              From the set
            </span>
            <GalleryThumbnail
              image={galleryImages[1]}
              index={1}
              onClick={setLightboxIndex}
            />
          </div>
        </AnimatedSection>
      </Section>

      <NarrativeBreak variant="marker" marker="The through-line" />

      {/* --- Insight 2 --- */}
      <InsightBlock
        variant="prominent"
        label="Why this matters for design systems"
        insight="Every skill I use today, I learned on set. Reusable assets are design systems. Cross-department coordination is cross-functional influence. Shipping under constraints is strategic prioritization. The domain changed; the thinking didn't."
      />

      <Section>
        <AnimatedSection>
          <div className="pt-2">
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--text-tertiary)] mb-4 block">
              From the set
            </span>
            <GalleryThumbnail
              image={galleryImages[3]}
              index={3}
              onClick={setLightboxIndex}
            />
          </div>
        </AnimatedSection>
      </Section>

      {/* --- Translation --- */}
      <Section width="wide">
        <AnimatedSection>
          <OutcomeGrid variant="featured" columns={2} items={[
            { title: 'Reusable assets → Design tokens', description: 'Creating leverage so teams don\'t solve the same problem fifty times.' },
            { title: 'Cross-department trust → Cross-functional influence', description: 'Getting things done without authority, through relationships and demonstrated reliability.' },
            { title: 'Shipping under constraints → Strategic decisiveness', description: 'Achieving goals with available resources, not waiting for perfect conditions.' },
            { title: 'Systematic quality → Operational maturity', description: 'Making excellence the default output, not a one-time achievement.' },
          ]} />
        </AnimatedSection>
      </Section>

      <NarrativeBreak variant="line" />

      {/* --- Insight 3 --- */}
      <InsightBlock
        label="The lesson that transfers everywhere"
        insight="Constraints aren't blockers. They're design parameters. The question is never 'can we do this?' It's 'how do we achieve the goal within what we have?' That reframe is the difference between people who get stuck and people who ship."
      />

      <CaseStudyGallery
        heading="From the set"
        images={galleryImages}
        lightboxIndex={lightboxIndex}
        onImageClick={setLightboxIndex}
        onClose={() => setLightboxIndex(null)}
      />
    </CaseStudyLayout>
  );
}
