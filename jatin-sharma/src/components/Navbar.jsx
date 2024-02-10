import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import '../assets/styles/navbar.css';
import logoImage from '../assets/images/android-chrome-512x512.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container m-2 shadow-lg">
        <div className="brand">
          <img src={logoImage} alt='logo' className='logo-image'/>
          <Link to="about" smooth={true} duration={500}>Jatin Sharma</Link>
        </div>
        <div className="nav-links">
          <Link to="about" smooth={true} duration={500}>About</Link>
          <Link to="projects" smooth={true} duration={500}>Projects</Link>
          <Link to="contact" smooth={true} duration={500}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
