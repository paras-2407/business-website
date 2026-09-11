import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Landmark, ArrowRight, ShieldCheck, MapPin, Compass, 
  Anchor, Waves, Eye, Sparkles, Building2, Sun, BookOpen
} from 'lucide-react';
import { destinations } from '../data/siteData';
import EnquiryForm from '../components/EnquiryForm';

export default function LothalPage() {
  const lothal = destinations.lothal;

  const nmhcFeatures = [
    {
      icon: Anchor,
      title: 'National Maritime Museum (14 Galleries)',
      highlight: 'Central Museum Edifice',
      desc: 'Chronicles 5,000 years of Indian maritime history from Harappan seafaring, Chola naval expeditions, and Maratha naval supremacy to the contemporary Indian Navy, equipped with interactive dioramas and original marine artifacts.'
    },
    {
      icon: Eye,
      title: 'World’s Highest Lighthouse Museum (77m)',
      highlight: 'Architectural Icon',
      desc: 'A 77-meter tall observation and lighthouse museum tower providing panoramic views over the ancient Harappan archaeological excavations, the Gulf of Khambhat mudflats, and the landscaped NMHC lagoons.'
    },
    {
      icon: Waves,
      title: 'Underwater Archaeological Museum & Lagoon',
      highlight: 'First-in-India Attraction',
      desc: 'An immersive underwater gallery recreating submerged ancient shipwrecks, Harappan dock gates, and aquatic marine archaeological displays in an illuminated simulated marine environment.'
    },
    {
      icon: Building2,
      title: 'Coastal States & International Pavilions',
      highlight: 'Pan-India Cultural Showcase',
      desc: 'Individual cultural pavilions for India’s coastal states (Gujarat, Maharashtra, Goa, Karnataka, Kerala, Tamil Nadu, Andhra Pradesh, Odisha, West Bengal) displaying regional boat-building traditions and coastal handicrafts.'
    },
    {
      icon: Compass,
      title: 'Harappan Maritime Theme Park & Resort Zone',
      highlight: 'Family & Experiential Tourism',
      desc: 'A 100-acre themed edutainment park recreating the Bronze Age Harappan urban streetscapes, seal-carving workshops, ancient bead markets, and waterfront dining promenades.'
    }
  ];

  return (
    <div className="region-detail-page">
      {/* Page Hero */}
      <section className="region-hero" style={{ backgroundImage: `linear-gradient(135deg, rgba(8, 28, 47, 0.94) 0%, rgba(8, 28, 47, 0.72) 100%), url(/assets/lothal.png)` }}>
        <div className="container">
          <div className="region-hero-content">
            <span className="badge-pill gold">LOTHAL HERITAGE &amp; TOURISM CORRIDOR</span>
            <h1>Ancient Maritime Legacy. Modern Tourism Capital.</h1>
            <p className="region-hero-desc">
              From the world’s earliest known tidal dockyard in 2400 BCE to the monumental ₹4,500+ Crore National Maritime Heritage Complex (NMHC), Lothal represents India’s premier cultural and experiential hospitality destination.
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
                <span>Lighthouse Museum</span>
              </div>
            </div>
            <div className="region-hero-actions">
              <Link to="/land?region=lothal" className="btn primary lg">
                Explore Lothal Land Options <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn ghost lg">
                Consult Tourism Land Advisor
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
              <span className="eyebrow green">WORLD HERITAGE SIGNIFICANCE</span>
              <h2>The World’s Oldest Known Tidal Dockyard (2400 BCE)</h2>
              <p>
                Excavated by the Archaeological Survey of India (ASI) under Dr. S.R. Rao between 1955 and 1962, Lothal (meaning "Mound of the Dead") was the primary maritime trade emporium of the Indus Valley Civilization.
              </p>
              <p>
                Harappan engineers constructed a trapezoidal brick dockyard basin (214m &times; 36m) with sluice gates that regulated tidal waters from the Gulf of Khambhat. Merchant ships laden with carnelian gemstone beads, fine cotton textiles, ivory, and copper sailed from Lothal to the ancient ports of Ur and Susa in Mesopotamia and Dilmun in the Persian Gulf.
              </p>
              <div className="highlight-pill-row">
                <span className="pill-item"><Landmark size={14} /> UNESCO Tentative List Site</span>
                <span className="pill-item"><Compass size={14} /> Harappan Hydraulic Sluice Engineering</span>
                <span className="pill-item"><Sparkles size={14} /> 4,500 Years of Seafaring Heritage</span>
              </div>
            </div>
            <div className="two-col-img-wrap">
              <img src="/assets/lothal-ancient-dockyard.jpg" alt="Ancient Harappan Dockyard at Lothal" className="rounded-img shadow" />
            </div>
          </div>
        </div>
      </section>

      {/* The NMHC Project Deep Dive */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow green">NATIONAL MEGA-PROJECT</span>
              <h2>National Maritime Heritage Complex (NMHC) Masterplan</h2>
            </div>
            <p>
              An initiative by the Ministry of Ports, Shipping and Waterways under the Sagarmala Programme to create an international maritime destination of global stature.
            </p>
          </div>

          <div className="nmhc-cards-grid">
            {nmhcFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div className="nmhc-card" key={idx}>
                  <div className="nmhc-icon-box">
                    <Icon size={24} />
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

      {/* Tourism & Hospitality Land Opportunities */}
      <section className="section">
        <div className="container">
          <div className="section-head compact">
            <div>
              <span className="eyebrow green">TOURISM CORRIDOR</span>
              <h2>Land Opportunities in the Lothal-Saragwala Belt</h2>
              <p>
                Positioned outside the ASI protected monument buffer, these parcels are primed for experiential heritage hotels, eco-wellness resorts, and visitor commercial plazas.
              </p>
            </div>
            <Link to="/land?region=lothal" className="btn primary">
              Browse Lothal Land Catalog <ArrowRight size={16} />
            </Link>
          </div>

          <div className="land-grid">
            {lothal.lands.map((land) => (
              <div className="land-card" key={land.id}>
                <div className="land-card-img-wrap">
                  <img src={`/assets/${land.img}`} alt={land.title} />
                  <span className="land-badge">{land.category}</span>
                </div>
                <div className="land-body">
                  <h4>{land.title}</h4>
                  <p>{land.desc}</p>
                  {land.specs && (
                    <div className="land-specs-mini">
                      <span><strong>Zone:</strong> {land.specs.tpScheme}</span>
                      <span><strong>Road:</strong> {land.specs.roadWidth}</span>
                      <span><strong>FSI:</strong> {land.specs.fsi}</span>
                    </div>
                  )}
                  <Link 
                    to={`/contact?interest=${encodeURIComponent(land.title)}&region=Lothal+Heritage+Corridor`} 
                    className="land-enquire-link"
                  >
                    Enquire on this Plot <ArrowRight size={14} />
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
              <ShieldCheck size={26} />
              <div>
                <h3>ASI AMASR Act &amp; Buffer Zone Guidelines</h3>
                <p>Ensuring 100% legal compliance for heritage and tourism land acquisition around Lothal</p>
              </div>
            </div>
            <div className="asi-content-grid">
              <div className="asi-point">
                <strong>0m – 100m Prohibited Zone</strong>
                <p>Strictly non-commercial archaeological conservation zone where no modern construction is permitted under the AMASR Act.</p>
              </div>
              <div className="asi-point">
                <strong>100m – 300m Regulated Zone</strong>
                <p>Requires specific permissions from the National Monuments Authority (NMA) and Competent Authority before any structural additions.</p>
              </div>
              <div className="asi-point">
                <strong>300m+ Active Tourism Development Zone</strong>
                <p>Fully compliant zone for hospitality resorts, luxury villas, commercial tourist plazas, and institutional campuses.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Block */}
      <section className="section">
        <div className="container enquiry-strip-container">
          <div>
            <span className="eyebrow green">CONNECT WITH LOTHAL ADVISORS</span>
            <h2>Capitalize on Gujarat’s Next International Tourism Hub</h2>
            <p>
              Speak with our hospitality and heritage land specialists to verify title documents, revenue zoning, and proximity to NMHC visitor access roads.
            </p>
          </div>
          <EnquiryForm initialRegion="Lothal Heritage Corridor" formTitle="Consult on Lothal Tourism Land" />
        </div>
      </section>
    </div>
  );
}
