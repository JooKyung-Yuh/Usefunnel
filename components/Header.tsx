import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="header" className={`header d-flex align-items-center fixed-top ${scrolled ? 'sticked' : ''}`}>
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <a href="/" className="logo d-flex align-items-center me-auto">
          <h1 className="sitename">usefunnel</h1>
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><Link href="#hero" className="active">Home</Link></li>
            <li><Link href="#about">About</Link></li>
            <li><Link href="#services">Services</Link></li>
            <li><Link href="#pricing">Pricing</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <a className="btn-getstarted" href="#about">Get Started</a>
      </div>
    </header>
  );
};

export default Header;
