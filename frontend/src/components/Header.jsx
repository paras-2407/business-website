import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'About Us', path: '/about' },
    { label: 'Dholera SIR', path: '/dholera' },
    { label: 'Lothal Heritage', path: '/lothal' },
    { label: 'Blogs & Updates', path: '/blogs' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'FAQs', path: '/faqs' },
    { label: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="header">
      <div className="container nav">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <img src="/assets/urban-keys-logo.png" alt="Urban Keys Infra Logo" className="brand-logo-img" />
          <div className="brand-text">
            <span className="brand-title">Urban Keys Infra</span>
            <span className="brand-sub">20+ YRS REAL ESTATE CONSULTANCY &bull; JAIPUR</span>
          </div>
        </Link>

        <button 
          className="menu-btn" 
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {navLinks.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className={`nav-item ${isActive(path) ? 'active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link 
            className="nav-cta" 
            to="/contact" 
            onClick={() => setOpen(false)}
          >
            <span>Enquire Now</span>
            <ArrowRight size={15} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
