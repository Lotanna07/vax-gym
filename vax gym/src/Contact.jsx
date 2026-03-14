function Contact() {
  return (
    <section className="contact">
      <div className="contact-title">
        <h1>Contact Us</h1>
      </div>
      
      <div className="contact-grid">
        {/* MAP + ADDRESS CONTAINER */}
        <div className="map-section">
          {/* GOOGLE MAP */}
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3099839832285!2d3.4238032!3d6.4290982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf6c8b8c7d5b7%3A0x9b5f8e5f8e5f8e5f!2sVax%20Gym%20Victoria%20Island!5e0!3m2!1sen!2sng!4v1731434567890!5m2!1sen!2sng"
              width="100%"
              height="400"
              style={{border:0, borderRadius: '25px'}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="🏋️ Vax Gym - Victoria Island, Lagos"
            />
          </div>
          
          {/* ADDRESS BELOW MAP */}
          <div className="map-address">
            <h3>📍 Vax Gym Location</h3>
            <p>21 Lagos Street<br/>Victoria Island, Lagos</p>
            <p className="coordinates">📐 6.4291° N, 3.4238° E</p>
          </div>
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
