import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          V<span>Films</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="navbar-links">
          <li>
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>About Us</Link>
          </li>
          <li>
            <Link to="/services" onClick={closeMenu}>Services</Link>
          </li>
          <li>
            <Link to="/team" onClick={closeMenu}>Team</Link>
          </li>
          <li>
            <Link to="/portfolio" onClick={closeMenu}>Portfolio</Link>
          </li>
          <li>
            <Link to="/contact" className="navbar-btn" onClick={closeMenu}>
              Let's Talk →
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="menu-icon" onClick={toggleMenu}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="mobile-menu open">
          <ul onClick={closeMenu}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact" className="navbar-btn" onClick={closeMenu}>
                Let's Talk →
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}