import { useEffect, useState } from 'react';
import './FloatingTabs.css';

const FloatingTabs = () => {
  const [showTabs, setShowTabs] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const about1 = document.getElementById('about1');
      if (about1) {
        const scrollThreshold = about1.offsetTop + about1.offsetHeight / 2;
        setShowTabs(window.scrollY > scrollThreshold);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' }); // 요기 핵심 💫
    }
  };

  return (
    <div className={`floating-tabs ${showTabs ? 'visible' : ''}`}>
      <button onClick={() => scrollToSection('about2')} className="tab">About</button>
      <button onClick={() => scrollToSection('technology')} className="tab">Tech</button>
      <button onClick={() => scrollToSection('projects')} className="tab">Projects</button>
    </div>
  );
};

export default FloatingTabs;
