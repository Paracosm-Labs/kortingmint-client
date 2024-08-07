import React from 'react';


function Home() {
  const handleLogin = () => {
    // Add login logic
  };

  const handleLogout = () => {
    // Add logout logic
  };

  return (
    <div>


      <section className="hero text-center" style={{
        background: 'linear-gradient(rgba(76, 175, 80, 0.8), rgba(76, 175, 80, 0.8)), url("https://picsum.photos/1200/400?random=1")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#ffffff',
        padding: '100px 0'
      }}>
        <div className="container">
          <h1 className="display-4 mb-4">Join KortingMint's Decentralized Partner Network</h1>
          <p className="lead mb-5">Connect businesses with customers through our innovative blockchain-based discount platform. No application needed - start earning instantly!</p>
          <button id="ctaLoginButton" className="btn btn-primary btn-lg" onClick={handleLogin}>Get Started</button>
        </div>
      </section>

      <section className="features py-5">
        <div className="container">
          <h2 className="text-center mb-5">Why Join Our Decentralized Network?</h2>
          <div className="row">
            <div className="col-md-4 text-center mb-4">
              <i className="fas fa-coins feature-icon" style={{ fontSize: '3rem', color: '#4CAF50' }}></i>
              <h3>Instant Earnings</h3>
              <p>Start earning cryptocurrency rewards immediately for every business you bring to our platform and for every coupon sold through your referrals.</p>
            </div>
            <div className="col-md-4 text-center mb-4">
              <i className="fas fa-globe feature-icon" style={{ fontSize: '3rem', color: '#4CAF50' }}></i>
              <h3>Global Opportunities</h3>
              <p>Connect with businesses worldwide and expand your reach beyond geographical boundaries.</p>
            </div>
            <div className="col-md-4 text-center mb-4">
              <i className="fas fa-lock feature-icon" style={{ fontSize: '3rem', color: '#4CAF50' }}></i>
              <h3>Secure & Transparent</h3>
              <p>Benefit from blockchain technology ensuring transparent, secure, and instant transactions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">How It Works</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">1. Connect Your Wallet</h5>
                  <p className="card-text">Use our Web3 login to connect your cryptocurrency wallet securely.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">2. Start Partnering</h5>
                  <p className="card-text">Immediately begin connecting businesses with KortingMint's platform.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">3. Earn Rewards</h5>
                  <p className="card-text">Receive instant cryptocurrency rewards for successful partnerships and coupon sales.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials py-5">
        <div className="container">
          <h2 className="text-center mb-5">What Our Partners Say</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="testimonial" style={{
                backgroundColor: '#ffffff',
                borderRadius: '10px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                padding: '20px'
              }}>
                <div className="d-flex align-items-center mb-3">
                  <img src="https://picsum.photos/60/60?random=1" alt="Partner 1" className="rounded-circle" style={{ width: '60px', height: '60px', marginRight: '15px' }} />
                  <div>
                    <h5 className="mb-0">Emma Visser</h5>
                    <small className="text-muted">Crypto Enthusiast & Marketer</small>
                  </div>
                </div>
                <p>"KortingMint's decentralized platform has revolutionized how I approach partnerships. The instant rewards and global reach have significantly boosted my income!"</p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="testimonial" style={{
                backgroundColor: '#ffffff',
                borderRadius: '10px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                padding: '20px'
              }}>
                <div className="d-flex align-items-center mb-3">
                  <img src="https://picsum.photos/60/60?random=2" alt="Partner 2" className="rounded-circle" style={{ width: '60px', height: '60px', marginRight: '15px' }} />
                  <div>
                    <h5 className="mb-0">Liam de Vries</h5>
                    <small className="text-muted">Blockchain Developer & Entrepreneur</small>
                  </div>
                </div>
                <p>"The transparency and security of KortingMint's blockchain-based system give me peace of mind. It's a game-changer for decentralized partnerships!"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section" style={{ backgroundColor: '#f8f9fa', padding: '80px 0' }}>
        <div className="container text-center">
          <h2 className="mb-4">Ready to Start Earning?</h2>
          <p className="mb-4">Connect your wallet now and become part of our decentralized partner network!</p>
          <button className="btn btn-primary btn-lg" onClick={handleLogin}>Get Started</button>
        </div>
      </section>


    </div>
  );
}

export default Home;
