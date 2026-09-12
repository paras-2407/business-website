import React from 'react';
import { useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import EnquiryForm from '../components/EnquiryForm';

export default function ContactPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialInterest = queryParams.get('interest') || '';
  const initialRegion = queryParams.get('region') || '';

  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <span className="eyebrow green">URBAN KEYS INFRA &bull; CONSULTANCY DESK</span>
            <h1>Connect with Urban Keys Infra</h1>
            <p className="page-hero-lead">
              With over 20+ years of real estate consultancy experience based in Jaipur, Urban Keys Infra helps investors and families choose their favorite property across prime residential and commercial land in Jaipur and Gujarat's premier growth corridors.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid-layout">
          {/* Left Column: Office info and trust signals */}
          <div className="contact-info-pane">
            <span className="eyebrow green">OUR DIRECT DESKS</span>
            <h2>We’re Here to Simplify Your Property Search</h2>
            <p>
              Looking to invest in residential townships, commercial corridors, or high-potential land in Dholera SIR and Lothal NMHC? Our advisory team offers end-to-end guidance, verified cadastral maps, and comprehensive due diligence.
            </p>

            <div className="contact-channel-list">
              <div className="channel-card">
                <Phone className="channel-icon" size={22} />
                <div>
                  <small>Direct Phone &amp; WhatsApp</small>
                  <strong>+91 98765 43210 / +91 79 2345 6789</strong>
                  <span>Mon &ndash; Sat, 9:00 AM &ndash; 7:00 PM IST</span>
                </div>
              </div>

              <div className="channel-card">
                <Mail className="channel-icon" size={22} />
                <div>
                  <small>Official Consultancy Email</small>
                  <strong>urbankeysinfra@gmail.com</strong>
                  <span>Prompt response within 4 business hours</span>
                </div>
              </div>

              <div className="channel-card">
                <MapPin className="channel-icon" size={22} />
                <div>
                  <small>Headquarters &amp; Regional Offices</small>
                  <strong>Head Office: Jaipur, Rajasthan</strong>
                  <span>Regional Advisory Desks: Dholera SIR (TP2) &amp; Ahmedabad, Gujarat</span>
                </div>
              </div>

              <div className="channel-card">
                <Award className="channel-icon" size={22} />
                <div>
                  <small>Experience &amp; Expertise</small>
                  <strong>20+ Years in Real Estate Consultancy</strong>
                  <span>Residential &amp; Commercial Land Advisory &bull; Pan-India &amp; NRI Clients</span>
                </div>
              </div>
            </div>

            <div className="contact-trust-box">
              <ShieldCheck size={24} />
              <div>
                <strong>Confidential Investor Service</strong>
                <p>All institutional and high-net-worth inquiries are handled under strict non-disclosure advisory terms.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="contact-form-pane">
            <EnquiryForm
              initialInterest={initialInterest}
              initialRegion={initialRegion}
              formTitle="Request Property Due Diligence / Site Visit"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
