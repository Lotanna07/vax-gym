import React from 'react';



function Header() {
  return (
    <header style={{ 
      backgroundColor: '#000', 
      padding: '20px 40px',
      display: 'flex',
      justifyContent: 'space-between'
    }}>
      
      {/* LEFT: Logo */}
      <div>
        <h1 style={{ color: 'white', margin: 0 }}>YOUR LOGO</h1>
      </div>
      
      {/* RIGHT: Menu */}
      <nav>
        <a href="#home" style={{ color: 'white', margin: '0 20px' }}>Home</a>
        <a href="#about" style={{ color: 'white', margin: '0 20px' }}>About</a>
        <a href="#contact" style={{ color: 'white', margin: '0 20px' }}>Contact</a>
      </nav>
      
    </header>
  );
}

export default Header;

