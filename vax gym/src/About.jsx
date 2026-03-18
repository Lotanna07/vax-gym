function About() {
  return (
    <section id="about" className="about">
        <div className="about-title">
          <h1>About Us</h1>
        </div>
        <div className="about-content">
        <p>
           At Vax Gym, we're more than just a gym—we're your partner in transformation. Founded by passionate fitness experts right here in Lagos,
           we blend cutting-edge equipment, expert-led classes, and personalized training to help you crush your goals, whether you're a beginner building strength or an athlete pushing limits. 
           Join our vibrant community of driven individuals and discover the energy, support, and results that make every sweat session count.
          </p>
        <button className="about-button">Join Now</button>
      </div>
      <img src="about.jpg" alt="Gym" className="about-image" />
    </section>
  );
}

export default About;
