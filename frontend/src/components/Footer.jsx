import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ShieldCheck, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand-col">
          <Link to="/" className="brand footer-brand">
            <img src="/assets/urban-keys-logo.png" alt="Urban Keys Infra" className="brand-logo-img" />
            <div className="brand-text">
              <span className="brand-title light">Urban Keys Infra</span>
              <span className="brand-sub light">20+ YRS REAL ESTATE CONSULTANCY &bull; JAIPUR</span>
            </div>
          </Link>
          <p className="footer-desc">
            Urban Keys Infra is a premier Jaipur-based real estate consultancy with over 20+ years of expertise helping clients choose their favorite property, from high-growth residential plots to strategic commercial land across Dholera SIR and Lothal NMHC.
          </p>
          <div className="footer-contact-info">
            <div className="f-contact-item">
              <Phone size={16} />
              <span>+91 98281 59175 | +91 93520 94325 | +91 70149 22260</span>
            </div>
            <div className="f-contact-item">
              <Mail size={16} />
              <span>urbankeysinfra@gmail.com</span>
            </div>
            <div className="f-contact-item">
              <MapPin size={16} />
              <span>Office: Jaipur, Rajasthan &bull; Ahmedabad, Gujarat</span>
            </div>
          </div>
        </div>

        <div className="footer-links-col">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/about">About Us (Urban Keys Infra)</Link></li>
            <li><Link to="/dholera">Dholera SIR Smart City</Link></li>
            <li><Link to="/lothal">Lothal Maritime Corridor</Link></li>
            <li><Link to="/gallery">Visual Gallery</Link></li>
            <li><Link to="/blogs">Research &amp; Updates</Link></li>
          </ul>
        </div>

        <div className="footer-links-col">
          <h4>Key Projects</h4>
          <ul>
            <li><Link to="/dholera">Tata Semiconductor Fab</Link></li>
            <li><Link to="/dholera">Dholera Int'l Airport</Link></li>
            <li><Link to="/dholera">NH-751 Expressway</Link></li>
            <li><Link to="/lothal">NMHC Maritime Museum</Link></li>
            <li><Link to="/dholera">4,400 MW Solar Park</Link></li>
          </ul>
        </div>

        <div className="footer-links-col">
          <h4>Official Portals</h4>
          <ul>
            <li><Link to="/faqs">FAQs</Link></li>
            <li><Link to="/contact">Contact Advisory Desk</Link></li>
            <li>
              <a href="https://dholera.gujarat.gov.in" target="_blank" rel="noopener noreferrer" className="ext-link">
                DSIRDA Portal <ExternalLink size={12} />
              </a>
            </li>
            <li>
              <a href="https://shipmin.gov.in" target="_blank" rel="noopener noreferrer" className="ext-link">
                MoPSW NMHC <ExternalLink size={12} />
              </a>
            </li>
            <li>
              <a href="https://asi.nic.in" target="_blank" rel="noopener noreferrer" className="ext-link">
                ASI Lothal Site <ExternalLink size={12} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <div className="f-bottom-left">
          <span>&copy; {new Date().getFullYear()} Urban Keys Infra. All rights reserved.</span>
          <p className="disclaimer-text">
            Information provided is for regional awareness and investment evaluation. Verify project details and statutory notifications independently.
          </p>
        </div>
        <div className="f-bottom-badges">
          <span className="trust-badge">
            <ShieldCheck size={14} /> DSIRDA Masterplan Aligned
          </span>
          <span className="trust-badge">
            <ShieldCheck size={14} /> Official Sources Cited
          </span>
        </div>
      </div>
    </footer>
  );
}
