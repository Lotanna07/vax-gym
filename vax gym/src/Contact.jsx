function Contact() {
  return (
    <section className="contact">
      <div className="contact-title">
        <h1>Contact Us</h1>
        <p>Ready to transform? Get in touch!</p>
      </div>
      
      <div className="contact-grid">
        {/* GOOGLE MAPS PLACEHOLDER */}
        <div className="contact-map">
          <div className="map-placeholder">
            🗺️ Vax Gym Location<br/>
            21 Lagos Street, VI
          </div>
          {/* Replace with: <iframe src="GOOGLE_MAPS_EMBED"></iframe> */}
        </div>
        
        {/* FORM */}
        <div className="contact-form-container">
          <form>
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" placeholder="John Doe" required />
            </div>
            
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="john@example.com" required />
            </div>
            
            <div className="form-group">
              <label>Phone (Optional)</label>
              <input type="tel" placeholder="+234 800 123 4567" />
            </div>
            
            <div className="form-group">
              <label>Message</label>
              <textarea rows="5" placeholder="Tell us your fitness goals..."></textarea>
            </div>
            
            <button type="submit" className="contact-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
