import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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

  return (
    <div className={`floating-tabs ${showTabs ? 'visible' : ''}`}>
      <Link to="#about1" className="tab">About</Link>
      <Link to="#technology" className="tab">Tech</Link>
      <Link to="#projects" className="tab">Projects</Link>
    </div>
  );
};

export default FloatingTabs;