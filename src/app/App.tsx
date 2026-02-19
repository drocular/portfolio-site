import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { HomePage } from './components/HomePage';
import { ColorSchemeCaseStudy } from './components/ColorSchemeCaseStudy';
import { DesignTokensCaseStudy } from './components/DesignTokensCaseStudy';
import { HowWeAICaseStudy } from './components/HowWeAICaseStudy';
import { TableComponentCaseStudy } from './components/TableComponentCaseStudy';
import { PropsMasterCaseStudy } from './components/PropsMasterCaseStudy';
import { CurrentWork } from './components/CurrentWork';
import { Resume } from './components/Resume';
import { ScrollToTop } from './components/ScrollToTop';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/case-studies/color-scheme" element={<ColorSchemeCaseStudy />} />
          <Route path="/case-studies/design-tokens" element={<DesignTokensCaseStudy />} />
          <Route path="/case-studies/how-we-ai" element={<HowWeAICaseStudy />} />
          <Route path="/case-studies/table-component" element={<TableComponentCaseStudy />} />
          <Route path="/case-studies/props-master" element={<PropsMasterCaseStudy />} />
          <Route path="/current-work" element={<CurrentWork />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatedRoutes />
    </Router>
  );
}
