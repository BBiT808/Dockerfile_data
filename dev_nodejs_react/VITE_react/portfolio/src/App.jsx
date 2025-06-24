import { useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'

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
      {/* 네비게이션 탭 */}
        <button 
  className={`floating-tab ${activeTab === 'about' ? 'active' : ''}`}
  onClick={() => scrollToSection('about', 'about')}
>
  About
</button>
<button 
  className={`floating-tab ${activeTab === 'technology' ? 'active' : ''}`}
  onClick={() => scrollToSection('technology', 'technology')}
>
  Technology
</button>
<button 
  className={`floating-tab ${activeTab === 'products' ? 'active' : ''}`}
  onClick={() => scrollToSection('products', 'products')}
>
  Products
</button>
<button 
  className={`floating-tab ${activeTab === 'contact' ? 'active' : ''}`}
  onClick={() => scrollToSection('contact', 'contact')}
>
  Contact
</button>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App