import { useEffect, useState } from 'react';
import '../styles/FloatingTabs.css';

const FloatingTabs = () => {
  const [showTabs, setShowTabs] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
  const threshold = 100; // 예: 100px 이상 내려가면 보이게
  setShowTabs(window.scrollY > threshold);
};
window.addEventListener('scroll', handleScroll); // 이게 빠졌었어!
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
      <button onClick={() => scrollToSection('about')} className="tab">About</button>
      <button onClick={() => scrollToSection('tech')} className="tab">Skills</button>
      <button onClick={() => scrollToSection('projects')} className="tab">Projects</button>
      <button onClick={() => scrollToSection('contact')} className="tab">Contact</button>
    </div>
  );
};

export default FloatingTabs;
