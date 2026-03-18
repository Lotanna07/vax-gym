function Header() {
  return (
    <header className="header">
      <div>
        <img src="VexGymLogo.png" alt="Vax Gym Logo" className="logo" />
      </div>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#prices">Prices</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
export default Header;
