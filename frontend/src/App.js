// src/App.js
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
// In index.js or App.js (inside the import section)
import '@fortawesome/fontawesome-free/css/all.min.css';

import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <h1>InternCourse</h1>
        </div>

        {/* Nav Links */}
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link className="nav-link" to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link className="nav-link" to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link className="nav-link" to="/courses" onClick={() => setMenuOpen(false)}>Courses</Link>
          <Link className="nav-link" to="/certificate-verification" onClick={() => setMenuOpen(false)}>Certificate Verification</Link>
          <Link className="nav-link" to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
    
        </div>

        {/* Hamburger Menu */}
        <button 
          className="menu-toggle" 
          onClick={toggleMenu} 
          aria-expanded={menuOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
      </nav>

      {/* Content Area */}
      <Outlet />


{/* Footer */}
<footer className="footer">
  <div className="footer-container">
    {/* Footer Left: Branding and Legal Information */}
    <div className="footer-left">
      <h2 className="footer-logo">InternCourse</h2>
      <p>&copy; 2024 InternCourse. All rights reserved.</p>
      <p className="footer-description">
        Empowering professionals with quality online courses. Learn. Grow. Succeed.
      </p>
    </div>

    {/* Footer Middle: Quick Links */}
    <div className="footer-middle">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="/about">About Us</a></li>
        <li><a href="/courses">Courses</a></li>
        <li><a href="/contact">Contact Us</a></li>
        <li><a href="/terms">Terms of Service</a></li>
        <li><a href="/privacy">Privacy Policy</a></li>
      </ul>
    </div>

    {/* Footer Right: Social Media, Contact Information */}
    <div className="footer-right">
      <h4>Contact Us</h4>
      <div className="contact-info">
        <div className="contact-item">
          <i className="fas fa-phone-alt"></i>
          <span>+91 93042 45362</span>
        </div>
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <span>support@interncourse.online</span>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="social-links">
        <a href="https://x.com/07InternCourse" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-twitter"></i> 
        </a>
        <a href="https://www.instagram.com/interncourse/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-facebook"></i> 
        </a>
        <a href="https://www.linkedin.com/in/interncourse/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-linkedin"></i> 
        </a>
        <a href="https://www.instagram.com/interncourse/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-instagram"></i>  
        </a>
      </div>
    </div>
  </div>

  {/* Footer Bottom: Small Text or Additional Links */}
  <div className="footer-bottom">
    <p>Powered by InternCourse | All rights reserved.</p>
  </div>
</footer>





      
    </div>
  );
}

export default App;
