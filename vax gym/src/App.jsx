import Header from './Header';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Prices from './Prices';
import Testimonial from './Testimonial';
import Contact from './Contact';
function App() {
  

  return (
    <>
      <Header />
       <Hero />
       <About />
       <Services />
       <Prices />
       <Testimonial />
       <Contact/>
    </>
  )
}

// Add these imports at top
import { useState, useEffect } from 'react';

// Inside App function, before return:
const [showFloatingNav, setShowFloatingNav] = useState(false);

// Add this useEffect:
useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 500) {
      setShowFloatingNav(true);
    } else {
      setShowFloatingNav(false);
    }
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

// In your JSX, before </div>:
{showFloatingNav && (
  <>
    <button className={`nav-toggle ${showFloatingNav ? 'show' : ''}`} onClick={() => setShowFloatingNav(false)}>
      ×
    </button>
    <div className={`floating-nav ${showFloatingNav ? 'show' : ''}`}>
      <div className="nav-buttons">
        <a href="#home" className="nav-btn">🏠 Home</a>
        <a href="#about" className="nav-btn">👥 About</a>
        <a href="#services" className="nav-btn">⚡ Services</a>
        <a href="#prices" className="nav-btn">💰 Prices</a>
        <a href="#testimonials" className="nav-btn">⭐ Testimonials</a>
        <a href="#contact" className="nav-btn">📞 Contact</a>
      </div>
    </div>
  </>
)}


export default App
