import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <a href="#" className="logo">Books_hub</a>
      <div className="menu-icon" onClick={toggleDropdown}>
        &#9776;
      </div>
      <ul className={isOpen ? 'nav-links active' : 'nav-links'}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      
      </ul>
    </nav>
  );
}

export default Navbar;
