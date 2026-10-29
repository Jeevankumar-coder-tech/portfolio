import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechRibbon from './components/TechRibbon';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import './App.css';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Global Scroll Progress & Reveal Animations on Scroll
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // IntersectionObserver for smooth scrollable reveals
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="app-container">
      {/* Top Navbar with Scroll Progress */}
      <Navbar scrollProgress={scrollProgress} />

      {/* Exactly 5 Main Sections */}
      <main className="app-main">
        {/* 1. Hero Section */}
        <Hero />

        {/* Tech Ribbon matching reference layout */}
        <TechRibbon />

        {/* 2. About Me Section */}
        <AboutMe />

        {/* 3. Education Section */}
        <Education />

        {/* 4. Projects Section */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* 5. Contact Me Section */}
        <Contact />
      </main>

      {/* Minimalist Footer */}
      <Footer />

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
