import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Hero } from './Hero';
import { About } from './About';
import { Portfolio } from './Portfolio';
import { Footer } from './Footer';

export function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToPortfolio) {
      const portfolioSection = document.getElementById('portfolio');
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Header variant="dark" />
      <Hero />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
}
