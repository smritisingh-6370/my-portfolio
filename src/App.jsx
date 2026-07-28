import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AcademicsPage from './components/AcademicsPage';

function App() {
  const [showAcademics, setShowAcademics] = useState(false);
  const [returnToAbout, setReturnToAbout] = useState(false);

  useEffect(() => {
    if (!showAcademics && returnToAbout) {
      // Small timeout ensures the main page layout is fully rendered before scrolling
      setTimeout(() => {
        const aboutElement = document.getElementById('about-me');
        if (aboutElement) {
          aboutElement.scrollIntoView({ behavior: 'smooth' });
        }
        setReturnToAbout(false);
      }, 100);
    }
  }, [showAcademics, returnToAbout]);

  const handleBackToAbout = () => {
    setReturnToAbout(true);
    setShowAcademics(false);
  };

  if (showAcademics) {
    return <AcademicsPage onBack={handleBackToAbout} />;
  }

  return (
    <div className="bg-brand-cream min-h-screen text-brand-dark font-sans scroll-smooth">
      <Navbar />
      <Hero />
      <About onOpenAcademics={() => setShowAcademics(true)} />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;