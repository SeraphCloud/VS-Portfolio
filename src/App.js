import React, { useEffect, useState, lazy, Suspense } from 'react';
import './styles/index.scss';

import Header from './components/organisms/Header';
const Hero = lazy(() => import('./components/organisms/Hero'));
const About = lazy(() => import('./components/organisms/About'));
const Projects = lazy(() => import('./components/organisms/Projects'));
const Contact = lazy(() => import('./components/organisms/Contact'));
const Footer = lazy(() => import('./components/organisms/Footer'));

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      let current = 'home';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    // Smooth scroll for nav links
    const navAnchors = document.querySelectorAll('.nav a[href^="#"]');
    navAnchors.forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      });
    });

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Header activeSection={activeSection} />
      <Suspense fallback={<div className="loading">Carregando...</div>}>
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
