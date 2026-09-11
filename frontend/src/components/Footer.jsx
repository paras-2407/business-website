import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight, ShieldCheck, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand-col">
          <Link to="/" className="brand footer-brand">
            <img src="/assets/logo.png" alt="Dholera & Lothal" className="brand-logo-img" />
            <div className="brand-text">
              <span className="brand-title light">Dholera & Lothal</span>
              <span className="brand-sub light">LAND &bull; INVESTMENT &bull; FUTURE</span>
            </div>
          </Link>
          <p className="footer-desc">
            Your trusted advisory partner for strategic land investments, industrial allocations, and commercial growth across Dholera Special Investment Region (SIR) and the Lothal National Maritime Heritage Corridor.
          </p>
          <div className="footer-contact-info">
            <div className="f-contact-item">
              <Phone size={16} />
              <span>+91 98765 43210</span>
            </div>
            <div className="f-contact-item">
              <Mail size={16} />
              <span>advisory@dholera-lothal.in</span>
            </div>
            <div className="f-contact-item">
              <MapPin size={16} />
              <span>Dholera SIR Activation Zone &amp; Ahmedabad Office, Gujarat</span>
            </div>
          </div>
        </div>

        <div className="footer-links-col">
          <h4>Regions &amp; Portals</h4>
          <ul>
            <li><Link to="/dholera">Dholera SIR Smart City</Link></li>
            <li><Link to="/lothal">Lothal Maritime Corridor</Link></li>
            <li><Link to="/about">Regional Comparison &amp; About</Link></li>
            <li><Link to="/land">Land Options &amp; Zoning</Link></li>
            <li><Link to="/gallery">Media &amp; Project Gallery</Link></li>
          </ul>
        </div>

        <div className="footer-links-col">
          <h4>Land Categories</h4>
          <ul>
            <li><Link to="/land?category=Industrial">Industrial (TP2 Activation)</Link></li>
            <li><Link to="/land?category=Commercial">Commercial (Central Spine)</Link></li>
            <li><Link to="/land?category=Residential">Residential &amp; Townships</Link></li>
            <li><Link to="/land?category=Tourism & Hospitality">Heritage &amp; Resort Land</Link></li>
            <li><Link to="/land?category=Agricultural">Agricultural Buffer Lands</Link></li>
          </ul>
        </div>

        <div className="footer-links-col">
          <h4>Knowledge &amp; Trust</h4>
          <ul>
            <li><Link to="/blogs">Research Insights &amp; Blogs</Link></li>
            <li><Link to="/faqs">Frequently Asked Questions</Link></li>
            <li><Link to="/contact">Schedule Site Visit</Link></li>
            <li>
              <a href="https://dholera.gujarat.gov.in" target="_blank" rel="noopener noreferrer" className="ext-link">
                DSIRDA Official Portal <ExternalLink size={12} />
              </a>
            </li>
            <li>
              <a href="https://shipmin.gov.in" target="_blank" rel="noopener noreferrer" className="ext-link">
                MoPSW NMHC Project <ExternalLink size={12} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <div className="f-bottom-left">
          <span>&copy; {new Date().getFullYear()} Dholera &amp; Lothal Advisory Services. All rights reserved.</span>
          <p className="disclaimer-text">
            Disclaimer: Information provided is for educational and strategic investment evaluation. Prospective buyers are advised to conduct independent title searches, revenue record verifications (AnyROR 7/12), and DSIRDA zoning clearances prior to financial commitments.
          </p>
        </div>
        <div className="f-bottom-badges">
          <span className="trust-badge">
            <ShieldCheck size={14} /> Title Clear Advisory
          </span>
          <span className="trust-badge">
            <ShieldCheck size={14} /> DSIRDA Plan Aligned
          </span>
        </div>
      </div>
    </footer>
  );
}
