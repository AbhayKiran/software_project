import React, { useState } from 'react';
import './App.css';

function Home({ cart, addToCart }) {
  const [email, setEmail] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? 'Logging in with email:' : 'Signing up with email:', email);
    setEmail('');
  };

  return (
    <div className="home-container">
      <div
        className="hero-section"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyOTl8MHwxfHNlYXJjaHwxfHxjYXIlMjB3aGVlbCUyMGFuZCUyMGJyYWtlfGVufDB8fHx8MTcwODc2NjY2N3ww&ixlib=rb-4.0.3&q=80&w=1080)',
        }}
      >
        <div className="container h-100 d-flex flex-column justify-content-center text-white">
          <h1 className="display-4 fw-bold text-primary">THE WORLD’S BEST<br />auto parts</h1>
          <p className="lead">We are the leading auto parts company with a world-wide reputation of premium quality products and maintenance services.</p>
          <div className="login-section-hero py-3">
            <div className="row justify-content-start">
              <div className="col-12 col-md-6 offset-md-1">
                <div className="login-form-wrapper">
                  <form onSubmit={handleSubmit} className="login-form-hero d-flex justify-content-start">
                    <input
                      type="email"
                      className="form-control login-input-hero"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type="submit" className="btn login-button-hero ms-2">
                      {isLogin ? 'Login' : 'Sign Up'}
                    </button>
                  </form>
                  <div className="toggle-wrapper d-flex justify-content-center">
                    <button
                      className="btn btn-link text-white p-0 text-decoration-none"
                      onClick={() => setIsLogin(!isLogin)}
                    >
                      {isLogin ? 'Need to Sign Up?' : 'Already have an account? Login'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subscription Section */}
      <div className="subscription-section py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h5>Subscribe for News and Get a Discount</h5>
            </div>
            <div className="col-md-6">
              <div className="input-group">
                <input type="email" className="form-control rounded-pill" placeholder="Your Email" />
                <button className="btn btn-danger rounded-pill ms-2">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;