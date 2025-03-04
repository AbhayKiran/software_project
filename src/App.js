import React, { useState } from 'react';
import { Link, Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Catalog from './Catalog';
import Home from './Home';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // New login state

  const addToCart = (part) => {
    setCart([...cart, part]);
  };

  const handleLogin = (email) => {
    // Simulate login success (no real authentication for student project)
    console.log('Logged in with:', email);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCart([]); // Optional: clear cart on logout
  };

  return (
    <Router>
      <div className="app-container">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark-custom">
          <div className="container">
            <Link className="navbar-brand text-danger fw-bold" to="/">AutoSpire</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon-custom"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link className="nav-link text-cyan" to="/">Home</Link>
                </li>
                {isLoggedIn && (
                  <li className="nav-item">
                    <Link className="nav-link text-cyan" to="/catalog">Catalog</Link>
                  </li>
                )}
                {isLoggedIn && (
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link text-cyan dropdown-toggle"
                      href="#"
                      id="catalogDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Catalog Options <i className="bi bi-caret-down-fill"></i>
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="catalogDropdown">
                      <li><Link className="dropdown-item" to="/catalog/brakes">Brakes</Link></li>
                      <li><Link className="dropdown-item" to="/catalog/filters">Filters</Link></li>
                      <li><Link className="dropdown-item" to="/catalog/engines">Engines</Link></li>
                    </ul>
                  </li>
                )}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link text-cyan dropdown-toggle"
                    href="#"
                    id="featuresDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Features <i className="bi bi-caret-down-fill"></i>
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="featuresDropdown">
                    <li><a className="dropdown-item" href="#">Search</a></li>
                    <li><a className="dropdown-item" href="#">Cart</a></li>
                    <li><a className="dropdown-item" href="#">Filters</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link text-cyan dropdown-toggle"
                    href="#"
                    id="aboutUsDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    About Us <i className="bi bi-caret-down-fill"></i>
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="aboutUsDropdown">
                    <li><a className="dropdown-item" href="#">Our Story</a></li>
                    <li><a className="dropdown-item" href="#">Contact</a></li>
                  </ul>
                </li>
                {isLoggedIn && (
                  <li className="nav-item">
                    <button className="nav-link text-cyan btn btn-link" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                )}
              </ul>
              <div className="d-flex align-items-center">
                <a href="tel:+800-123-456" className="text-white me-2">+800 123-456</a>
                <a href="#" className="text-white me-2"><i className="bi bi-facebook"></i></a>
                <a href="#" className="text-white me-2"><i className="bi bi-twitter"></i></a>
                <a href="#" className="text-white me-2"><i className="bi bi-behance"></i></a>
                <div className="input-group" style={{ maxWidth: '180px' }}>
                  <input
                    type="text"
                    className="form-control form-control-sm bg-transparent text-white border-white"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{ borderRadius: '20px', paddingLeft: '30px', opacity: 0.8 }}
                  />
                  <span
                    className="input-group-text bg-transparent border-0"
                    style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#fff' }}
                  >
                    <i className="bi bi-search"></i>
                  </span>
                </div>
                <span className="text-danger ms-3">${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home cart={cart} addToCart={addToCart} onLogin={handleLogin} isLoggedIn={isLoggedIn} />} />
          <Route
            path="/catalog"
            element={isLoggedIn ? <Catalog cart={cart} addToCart={addToCart} /> : <Navigate to="/" />}
          />
          <Route
            path="/catalog/:categoryName"
            element={isLoggedIn ? <Catalog cart={cart} addToCart={addToCart} /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;