function Prices() {
  return (
    <section className="prices">
      <div className="prices-title">
        <h1>Prices</h1>
      </div>
      
      <div className="prices-grid">
        {/* BASIC */}
        <div className="price-card">
          <div className="price-header">
            <h3>Basic</h3>
            <div className="price-amount">$<span>5</span></div>
          </div>
          <ul className="price-features">
            <li>Core equipment access</li>
          </ul>
          <button className="price-button">Get Started</button>
        </div>
        
        {/* PREMIUM - FEATURED */}
        <div className="price-card featured">
          <div className="price-header">
            <h3>Premium</h3>
            <div className="price-amount">$<span>400</span></div>
          </div>
          <ul className="price-features">
            <li>24h use of the gym</li>
            <li>personal trainer</li>
            <li>Group Fitness Classes</li>
          </ul>
          <button className="price-button">Most Popular</button>
        </div>
        
        {/* ELITE */}
        <div className="price-card">
          <div className="price-header">
            <h3>Elite</h3>
            <div className="price-amount">$<span>1000</span></div>
          </div>
          <ul className="price-features">
            <li>24h use of the gym</li>
            <li>personal trainer</li>
            <li>Free Energy  Drinks</li>
            <li>Group Fitness Classes</li>
            <li>Tech and Modern Amenities</li>
            <li>Wellness and Recovery Amenities</li>
          </ul>
          <button className="price-button">Go Elite</button>
        </div>
      </div>
    </section>
  );
}

export default Prices;
