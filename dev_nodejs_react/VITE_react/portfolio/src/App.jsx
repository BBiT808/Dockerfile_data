import React from 'react';
import './styles/main.css';

import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingTech from './components/FloatingTech';
import FloatingTabs from './components/FloatingTabs';

const App = () => {
  return (
    <>
      <FloatingTabs/>
      <Hero />
      <About />
      <FloatingTech />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
