import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import FloatingTabs from './components/FloatingTabs';

function App() {
  const [activeTab, setActiveTab] = useState('about');

  const scrollToSection = (sectionId, tabName) => {
    setActiveTab(tabName);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 항상 떠있는 탭 */}
      <FloatingTabs scrollToSection={scrollToSection} activeTab={activeTab} />

      {/* 라우터 구성 */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;