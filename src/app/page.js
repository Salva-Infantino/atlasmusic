"use client"

import { useEffect, useState, useRef } from 'react';

import Atlas from './components/Atlas';
import Events from './components/Events';
import About from './components/About';
import Artists from './components/Artists';
import Contact from './components/Contact';
import Sphere from './components/Sphere';

import Nav from './components/Nav';

import ParticlesComponent from './components/Particles';

const Home = () => {

  const scrollContainerRef = useRef(null);

  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const calcul = Math.round(scrollContainerRef.current.scrollTop /  window.innerHeight);
        setActiveSection(calcul);
      }
    };

    const container = scrollContainerRef.current;

    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    // Nettoyage de l'événement de défilement lors du démontage
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div id='App'>
      
      <Nav activeSection={activeSection} />
      
      <ParticlesComponent id="particles" />
      <div className='onePage overflow-scroll h-screen' ref={scrollContainerRef}>
        <Atlas />
        <Events />
        <About />
        <Sphere />
        <Artists />
        <Contact />
      </div>
    </div>
  );
}

export default Home;