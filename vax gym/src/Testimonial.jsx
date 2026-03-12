import { useState, useEffect } from 'react';

function Testimonials() {
  const [current, setCurrent] = useState(0);
  
  const testimonials = [
    { 
      quote:  "Gym's my sanctuary—deadlifts at dawn fuel my soul! He posts sweaty selfies captioned Love the iron life.", 
      author: "James",
      photo: "james.jpg"
    },
    { 
      quote: "Lost 50 pounds and found my power—gym hugs me back every rep. She celebrates with mirror flexes and progress pics.", 
      author: "Sarah",
      photo: "sarah.jpg"
    },
    { 
      quote: "Nothing beats that chest pump after benching 225—gym's where I conquer myself daily.", 
      author: "Mike",
      photo: "mike.jpg"
    },
    { 
      quote: "From couch potato to cardio queen, the burn is my best friend now—who needs Netflix?", 
      author: "Lisa",
      photo: "Lisa.jpg"
    },
    { 
      quote: "Ran my first marathon post-gym obsession—legs on fire, heart unstoppable. Addicted forever.", 
      author: "Alex",
      photo: "Alex.jpg"
    },
    { 
      quote: "Squats built my empire—one barbell at a time, gym love turned me fearless.", 
      author: "Tina",
      photo: "Tina.jpg"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((current + 1) % testimonials.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [current, testimonials.length]);

  const currentTestimonial = testimonials[current];

  return (
    <section className="testimonials">
      <div className="testimonials-title">
        <h1>Testimonials</h1>
      </div>
      
      <div className="carousel-container">
        <div className="photo-container">
          <img 
            src={`/${currentTestimonial.photo}`} 
            alt={currentTestimonial.author}
            className="member-photo"
          />
        </div>
        
        <div className="testimonial-content">
          <div className="quote-mark-large">"</div>
          <div className="testimonial-quote-large">
            {currentTestimonial.quote}
          </div>
          <div className="author-section">
            <div className="testimonial-author-large">
              {currentTestimonial.author}
            </div>
            <div className="stars-large">★★★★★</div>
          </div>
        </div>
      </div>

      <div className="progress-bar">
        <div className="progress-fill" />
      </div>

      <div className="dots-container">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`dot ${current === index ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
