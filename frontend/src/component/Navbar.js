import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          SignLearn
        </Link>
        <div className="navbar-menu">
          <Link to="/" className="navbar-item">Translate</Link>
          <Link to="/home" className="navbar-item">Home</Link>
          <Link to="/learn" className="navbar-item">Learn</Link>
        </div>
        <button className="navbar-button">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;