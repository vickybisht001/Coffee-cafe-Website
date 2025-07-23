import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleIcon = isOpen ? "bx bx-x" : "bx bx-menu";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'bg-dark shadow-sm' : 'bg-transparent'} transition-navbar`}>
      <div className="container">
        <NavLink className="navbar-brand text-white fw-bold" to="/" onClick={() => setIsOpen(false)}>
          Bisht Cafe <span className="d-block small fw-normal">RESTAURANT</span>
        </NavLink>

        <button
          className="navbar-toggler text-white border-0"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <i className={`${toggleIcon} fs-3`}></i>
        </button>

        <div className={`collapse navbar-collapse my-3 ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto text-center">
            {['/', '/menu', '/about', '/blog', '/contact'].map((path, i) => {
              const labels = ['Home', 'Menu', 'About', 'Blog', 'Contact'];
              return (
                <li className="nav-item" key={i}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive ? "nav-link text-warning" : "nav-link text-white"
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {labels[i]}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>

        <div className='d-none d-lg-block ms-3'>
          <span className="text-white small">📞 +91 8287917781</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
