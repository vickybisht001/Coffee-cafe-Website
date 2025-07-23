import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIcon = isOpen ? "bx bx-x" : "bx bx-menu";

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <NavLink className="navbar-brand text-white fw-bold" to="/" onClick={() => setIsOpen(false)}>
          Bisht Cafe <span className="d-block small fw-normal">RESTAURANT</span>
        </NavLink>

        <button
          className="navbar-toggler text-white"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <i className={`${toggleIcon} fs-3`}></i>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive ? "nav-link text-warning" : "nav-link text-white"
                }
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/menu" 
                className={({ isActive }) => 
                  isActive ? "nav-link text-warning" : "nav-link text-white"
                }
                onClick={() => setIsOpen(false)}
              >
                Menu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  isActive ? "nav-link text-warning" : "nav-link text-white"
                }
                onClick={() => setIsOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/blog" 
                className={({ isActive }) => 
                  isActive ? "nav-link text-warning" : "nav-link text-white"
                }
                onClick={() => setIsOpen(false)}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  isActive ? "nav-link text-warning" : "nav-link text-white"
                }
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div className='rs-number text-white ms-3'>
          <span>Reservations: +91 8287917781</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
