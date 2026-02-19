export interface CaseStudyConfig {
  id: string;
  title: string;
  route: string;
}

export const caseStudies: CaseStudyConfig[] = [
  {
    id: 'color-scheme',
    title: 'Creating an Enterprise Color Scheme',
    route: '/case-studies/color-scheme'
  },
  {
    id: 'design-tokens',
    title: 'Implementing Design Tokens at Scale',
    route: '/case-studies/design-tokens'
  },
  {
    id: 'how-we-ai',
    title: 'How We AI',
    route: '/case-studies/how-we-ai'
  },
  {
    id: 'table-component',
    title: 'Redesigning Tables for Real-World Use',
    route: '/case-studies/table-component'
  },
  {
    id: 'props-master',
    title: 'Props Master: Dead Silent',
    route: '/case-studies/props-master'
  },
  {
    id: 'current-work',
    title: 'Current Work',
    route: '/current-work'
  }
];

export function getCaseStudyNavigation(currentId: string) {
  const currentIndex = caseStudies.findIndex(study => study.id === currentId);
  
  if (currentIndex === -1) {
    return { previous: null, next: null };
  }
  
  const previous = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const next = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;
  
  return { previous, next };
}