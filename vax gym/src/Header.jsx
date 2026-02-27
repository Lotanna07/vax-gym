import React from 'react';



function Header() {
  return (
    <header style={{ 
      backgroundColor: '#450693', 
      padding: '20px 40px',
      display: 'flex',
      justifyContent: 'space-between'
    }}>
      
      {/* LEFT: Logo */}
      <div>
        <img src="/VexGymLogo.png" alt="Vax Gym Logo" style={{ height: '100px' }} />

      </div>
      
      {/* RIGHT: Menu */}
      <nav>
        <a href="#home" style={{ color: '#FFC400', margin: '0 20px' }}>Home</a>
        <a href="#about" style={{ color: '#FFC400', margin: '0 20px' }}>About</a>
        <a href="#Services" style={{ color: '#FFC400', margin: '0 20px' }}>Services</a>
        <a href="#Prices" style={{ color: '#FFC400', margin: '0 20px' }}>Prices</a>
        <a href="#Testimonial" style={{ color: '#FFC400', margin: '0 20px' }}>Testimonials</a>
        <a href="#contact" style={{ color: '#FFC400', margin: '0 20px' }}>Contact</a>
      </nav>
      
    </header>
  );
}

export default Header;

