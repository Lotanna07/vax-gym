function Hero() {
  return (
    <section style={{ 
      height: '100vh',           // Full screen height
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: '#450693'  // Light gray - change to your Figma color
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        Welcome to Vax Gym
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '500px' }}>
        Transform your body with our world-class training programs
      </p>
      <button style={{ 
        padding: '15px 40px', 
        fontSize: '1.1rem',
        backgroundColor: '#ff6b35',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        Join Now
      </button>
    </section>
  );
}

export default Hero;
