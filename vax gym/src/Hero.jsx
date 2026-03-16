function Hero() {
  return (
    <section className="hero">
      <img 
  src="/hero.jpg" 
  alt="Gym" 
  style={{ 
    position: 'static', 
    width: '500px', 
    height: '700px', 
    zIndex: '999',
  }} 
/>

      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>"Get that dream body you've always wanted"</h1>
      </div>
    </section>
  );
}
export default Hero;
