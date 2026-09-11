import React from 'react';
import { useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
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
            <span className="eyebrow green">GET IN TOUCH &bull; CONSULT ADVISORS</span>
            <h1>Schedule a Regional Land Consultation</h1>
            <p className="page-hero-lead">
              Whether you are an institutional developer, industrial manufacturing firm, or private investor, our Gujarat-based advisory team provides on-ground guidance and verified due diligence.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid-layout">
          {/* Left Column: Office info and trust signals */}
          <div className="contact-info-pane">
            <span className="eyebrow green">OUR DIRECT DESKS</span>
            <h2>We’re Here to Simplify Your Regional Search</h2>
            <p>
              Visiting Dholera SIR or the Lothal NMHC Corridor? We arrange authorized site visits, coordinate with DSIRDA administrative cells, and provide verified cadastral maps.
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
                  <small>Official Advisory Email</small>
                  <strong>advisory@dholera-lothal.in</strong>
                  <span>Fast response within 4 business hours</span>
                </div>
              </div>

              <div className="channel-card">
                <MapPin className="channel-icon" size={22} />
                <div>
                  <small>Regional Field &amp; Head Offices</small>
                  <strong>Dholera Activation Area (TP2) &amp; SG Highway, Ahmedabad</strong>
                  <span>On-ground presence for physical plot inspections</span>
                </div>
              </div>

              <div className="channel-card">
                <Clock className="channel-icon" size={22} />
                <div>
                  <small>Site Visit Schedule</small>
                  <strong>Guided Site Visits Every Tuesday, Thursday &amp; Saturday</strong>
                  <span>Departure from Ahmedabad via NH-751 Expressway</span>
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
