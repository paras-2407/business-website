import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Landmark, ArrowRight, ShieldCheck, 
  Anchor, Waves, Eye, Sparkles, Building2, Compass
} from 'lucide-react';
import EnquiryForm from '../components/EnquiryForm';

export default function LothalPage() {
  const nmhcFeatures = [
    {
      icon: Anchor,
      title: 'National Maritime Museum (14 Galleries)',
      highlight: 'Central Museum Edifice',
      desc: 'Chronicles 5,000 years of seafaring history from Harappan trade and Chola naval expeditions to the modern Indian Navy.'
    },
    {
      icon: Eye,
      title: 'World’s Highest Lighthouse Museum (77m)',
      highlight: 'Architectural Icon',
      desc: 'A 77-meter tall observation and lighthouse museum tower providing panoramic views over Lothal and the Gulf of Khambhat.'
    },
    {
      icon: Waves,
      title: 'Underwater Archaeological Museum',
      highlight: 'First in India',
      desc: 'An immersive underwater gallery recreating ancient shipwrecks, Harappan dock gates, and aquatic marine displays.'
    },
    {
      icon: Building2,
      title: 'Coastal States Pavilions',
      highlight: 'Pan-India Culture',
      desc: 'Dedicated pavilions for India’s coastal states exhibiting regional seafaring traditions, boatcraft, and maritime arts.'
    },
    {
      icon: Compass,
      title: 'Maritime Theme Park & Resort Zone',
      highlight: 'Experiential Tourism',
      desc: 'A 100-acre themed park recreating Bronze Age Harappan streetscapes, seal-carving workshops, and waterfront dining.'
    }
  ];

  const zones = [
    {
      title: 'Heritage & Eco-Tourism Resort Zone',
      zone: 'NMHC Hospitality Belt',
      desc: 'Strategically positioned outside the ASI buffer for experiential heritage resorts, luxury tents, and wellness retreats.',
      img: 'nmhc-museum-aerial.webp'
    },
    {
      title: 'Highway Visitor Plazas & Commercial Hubs',
      zone: 'Lothal-Bhurkhi Corridor',
      desc: 'High-footfall parcels for handicraft emporiums, artisan bazaars, and tourist food courts.',
      img: 'nmhc-official-masterplan.webp'
    },
    {
      title: 'Serene Country Estates',
      zone: 'Saragwala Belt',
      desc: 'Peaceful countryside plots with lush surroundings, 35 minutes from the Dholera SIR industrial hub.',
      img: 'lothal-ancient-dockyard.jpg'
    },
    {
      title: 'Maritime Research & Institutional Campuses',
      zone: 'Knowledge Belt',
      desc: 'Acreage for marine research academies, archaeological training centers, and cultural foundations.',
      img: 'nmhc-lighthouse-concept.png'
    }
  ];

  return (
    <div className="region-detail-page">
      {/* Page Hero */}
      <section className="region-hero" style={{ backgroundImage: `linear-gradient(135deg, rgba(8, 28, 47, 0.94) 0%, rgba(8, 28, 47, 0.72) 100%), url(/assets/lothal.png)` }}>
        <div className="container">
          <div className="region-hero-content">
            <span className="badge-pill gold">LOTHAL HERITAGE &bull; NMHC PROJECT</span>
            <h1>Ancient Maritime Legacy. Modern Tourism Capital.</h1>
            <p className="region-hero-desc">
              From the world’s oldest known tidal dockyard in 2400 BCE to the monumental ₹4,500+ Cr National Maritime Heritage Complex (NMHC), Lothal represents India’s premier coastal tourism destination.
            </p>
            <div className="region-hero-stats">
              <div className="r-stat">
                <strong>2400 BCE</strong>
                <span>Ancient Dockyard</span>
              </div>
              <div className="r-stat">
                <strong>400 Acres</strong>
                <span>NMHC Masterplan</span>
              </div>
              <div className="r-stat">
                <strong>₹4,500+ Cr</strong>
                <span>Project Outlay</span>
              </div>
              <div className="r-stat">
                <strong>77 Meters</strong>
                <span>Lighthouse Tower</span>
              </div>
            </div>
            <div className="region-hero-actions">
              <Link to="/contact" className="btn primary lg">
                Consult Tourism Advisor <ArrowRight size={16} />
              </Link>
              <Link to="/about" className="btn ghost lg">
                Compare with Dholera
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ancient Harappan Legacy */}
      <section className="section">
        <div className="container">
          <div className="two-col-layout">
            <div className="two-col-copy">
              <span className="eyebrow green">ARCHAEOLOGICAL SIGNIFICANCE</span>
              <h2>The World’s Earliest Known Tidal Dockyard (2400 BCE)</h2>
              <p>
                Excavated by the Archaeological Survey of India (ASI) under Dr. S.R. Rao, Lothal was the premier seafaring port of the Indus Valley Civilization.
              </p>
              <p>
                Engineers built a 214m &times; 36m brick basin with sluice gates that regulated Gulf of Khambhat tides, allowing merchant ships to load carnelian beads and textiles bound for Mesopotamia and Egypt.
              </p>
              <div className="highlight-pill-row">
                <span className="pill-item"><Landmark size={14} /> UNESCO Tentative List Site</span>
                <span className="pill-item"><Compass size={14} /> Ancient Sluice Gate Hydraulics</span>
                <span className="pill-item"><Sparkles size={14} /> 4,500 Years of Maritime Trade</span>
              </div>
            </div>
            <div className="two-col-img-wrap">
              <img src="/assets/lothal-ancient-dockyard.jpg" alt="Ancient Harappan Dockyard at Lothal" className="rounded-img shadow" />
            </div>
          </div>
        </div>
      </section>

      {/* NMHC Masterplan */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-head compact">
            <div>
              <span className="eyebrow green">NATIONAL MEGA-PROJECT</span>
              <h2>National Maritime Heritage Complex (NMHC)</h2>
            </div>
            <p>A flagship ₹4,500+ Cr project under the Ministry of Ports, Shipping and Waterways.</p>
          </div>

          <div className="nmhc-cards-grid">
            {nmhcFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div className="nmhc-card" key={idx}>
                  <div className="nmhc-icon-box">
                    <Icon size={22} />
                  </div>
                  <span className="nmhc-highlight-tag">{feat.highlight}</span>
                  <h3>{feat.title}</h3>
                  <p>{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hospitality & Tourism Zones */}
      <section className="section">
        <div className="container">
          <div className="section-head compact">
            <div>
              <span className="eyebrow green">TOURISM CORRIDOR</span>
              <h2>Tourism &amp; Hospitality Opportunity Zones</h2>
            </div>
            <Link to="/contact" className="btn primary sm">
              Consult on Hospitality <ArrowRight size={14} />
            </Link>
          </div>

          <div className="land-grid">
            {zones.map((z, i) => (
              <div className="land-card" key={i}>
                <div className="land-card-img-wrap">
                  <img src={`/assets/${z.img}`} alt={z.title} />
                  <span className="land-badge">{z.zone}</span>
                </div>
                <div className="land-body">
                  <h4>{z.title}</h4>
                  <p>{z.desc}</p>
                  <Link to="/contact" className="land-enquire-link">
                    Enquire on this Zone <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ASI Due Diligence Notice */}
      <section className="section bg-light">
        <div className="container">
          <div className="asi-guideline-box">
            <div className="asi-head">
              <ShieldCheck size={24} />
              <div>
                <h3>ASI AMASR Act &amp; Heritage Buffer Compliance</h3>
                <p>Statutory buffer zones ensuring conservation and clear approvals.</p>
              </div>
            </div>
            <div className="asi-content-grid">
              <div className="asi-point">
                <strong>0m – 100m: Prohibited Zone</strong>
                <p>Strictly non-commercial archaeological conservation zone with no modern construction.</p>
              </div>
              <div className="asi-point">
                <strong>100m – 300m: Regulated Zone</strong>
                <p>Requires National Monuments Authority (NMA) permissions prior to additions.</p>
              </div>
              <div className="asi-point">
                <strong>300m+: Tourism Development Zone</strong>
                <p>Fully compliant zone for hospitality resorts, luxury villas, and commercial plazas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="section">
        <div className="container enquiry-strip-container">
          <div>
            <span className="eyebrow green">CONNECT WITH LOTHAL SPECIALISTS</span>
            <h2>Capitalize on Gujarat’s Tourism Capital</h2>
            <p>
              Speak with our hospitality and heritage advisors for NMHC access planning, ASI buffer verifications, and guided site visits.
            </p>
          </div>
          <EnquiryForm initialRegion="Lothal Heritage Corridor" formTitle="Consult on Lothal Tourism" />
        </div>
      </section>
    </div>
  );
}
