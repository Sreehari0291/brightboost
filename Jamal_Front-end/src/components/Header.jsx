import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      <div className="app-name">Bright Boost</div>
      <nav>
        <NavLink to="/login">Login</NavLink>
        {/* Additional Navigation Links */}
      </nav>
    </header>
  );
}

export default Header;
