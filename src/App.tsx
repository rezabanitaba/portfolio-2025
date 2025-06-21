import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Timeline from './components/Timeline';
import HeroSection from './components/HeroSection';
import ProjectSection from './components/ProjectSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import { projects } from './data/projects';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', ...projects.map(p => p.id), 'about', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white font-inter">
      <Timeline 
        activeSection={activeSection}
        onSectionClick={scrollToSection}
        projects={projects}
      />
      
      <main className="scroll-smooth">
        <HeroSection onViewProjects={() => scrollToSection(projects[0].id)} />
        
        {projects.map((project, index) => (
          <ProjectSection 
            key={project.id} 
            project={project} 
            index={index}
          />
        ))}
        
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;