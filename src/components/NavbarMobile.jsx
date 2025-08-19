import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavbarMobile.css"; // separate CSS only for mobile navbar

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar-mobile">
      <div className="navbar-logo">Workiy Academy</div>

      {/* Hamburger Icon */}
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        <div className={isOpen ? "bar open" : "bar"}></div>
        <div className={isOpen ? "bar open" : "bar"}></div>
        <div className={isOpen ? "bar open" : "bar"}></div>
      </div>

      {/* Links */}
      <ul className={`navbar-links-mobile ${isOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/courses" onClick={() => setIsOpen(false)}>Courses</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
        <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        <li><Link to="/internship" onClick={() => setIsOpen(false)}>Internship</Link></li>
        <li><Link to="/course" onClick={() => setIsOpen(false)}>Course</Link></li>
      </ul>
    </nav>
  );
};

export default NavbarMobile;
