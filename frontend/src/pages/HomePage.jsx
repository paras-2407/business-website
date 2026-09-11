import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, 
  MapPin, Building2, ShieldCheck, TrendingUp, Landmark, 
  Plane, Route as RouteIcon, TrainFront, Ship, Waves, 
  Leaf, Factory, Compass, Award, FileText, Sparkles
} from 'lucide-react';
import { destinations, transformationMilestones, transport, blogs } from '../data/siteData';
import EnquiryForm from '../components/EnquiryForm';
import ArticleReaderModal from '../components/ArticleReaderModal';

export default function HomePage() {
  const navigate = useNavigate();
  const [activeRegion, setActiveRegion] = useState('dholera');
  const [activeMilestone, setActiveMilestone] = useState(2); // default to 2024-2026 phase
  const [selectedArticle, setSelectedArticle] = useState(null);

  const regionData = destinations[activeRegion];
  const milestone = transformationMilestones[activeMilestone];

  const connectivityIcons = {
    Air: Plane,
    Road: RouteIcon,
    'High-Speed Rail': TrainFront,
    'Sea & Ports': Ship,
    'Sea Link & Rail': Waves
  };

  return (
    <div className="home-page">
      {/* 1. HERO SECTION (Fixes Issue 2: properly framed, no deviation, ultra crisp) */}
      <section className="hero">
        <div className="hero-bg-overlay" />
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <Sparkles size={14} />
              <span>INVEST TODAY &bull; BUILD TOMORROW</span>
            </div>
            <h1>
              Prime Land Opportunities in <span>Dholera &amp; Lothal</span>
            </h1>
            <p className="hero-lead">
              Discover verified industrial, commercial, and tourism land in Gujarat’s high-growth corridor. From India’s premier greenfield smart city to the monumental National Maritime Heritage Complex.
            </p>
            <div className="hero-actions">
              <Link to="/land" className="btn primary lg">
                Explore Land Options <ArrowRight size={16} />
              </Link>
              <Link to="/about" className="btn ghost lg">
                Compare Both Regions
              </Link>
            </div>

            <div className="hero-stats-strip">
              <div className="hero-stat-pill">
                <strong>920 km²</strong>
                <span>Dholera Masterplan</span>
              </div>
              <div className="hero-stat-pill">
                <strong>₹91k Cr</strong>
                <span>Tata Fab Outlay</span>
              </div>
              <div className="hero-stat-pill">
                <strong>₹4,500 Cr</strong>
                <span>NMHC Lothal Project</span>
              </div>
              <div className="hero-stat-pill">
                <strong>45 Mins</strong>
                <span>Ahmedabad Expressway</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY THIS REGION */}
      <section className="section why-section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow green">STRATEGIC ADVANTAGES</span>
              <h2>Location. Infrastructure. Policy. Opportunity.</h2>
            </div>
            <p>
              We simplify land investments across the Gulf of Khambhat growth belt by delivering transparent zoning analytics, title verification, and direct authority compliance.
            </p>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon-box">
                <MapPin size={24} />
              </div>
              <h3>Multimodal Strategic Belt</h3>
              <p>Direct integration with the Delhi-Mumbai Industrial Corridor (DMIC), Western Dedicated Freight Corridor, and coastal shipping sea lanes.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box">
                <Building2 size={24} />
              </div>
              <h3>Plug-and-Play Utilities</h3>
              <p>Zero-digging underground utility tunnels housing potable water, recycled water, power conduits, gas networks, and fiber optic cabling.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box">
                <ShieldCheck size={24} />
              </div>
              <h3>Statutory Masterplan Compliance</h3>
              <p>Clear reconstituted Final Plots (FP) under DSIRDA Town Planning Schemes 1 to 6 with single-window regulatory fast-tracking.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box">
                <TrendingUp size={24} />
              </div>
              <h3>Exponential Capital Growth</h3>
              <p>Catalyzed by national mega-anchors: Tata Semiconductor Fab, Dholera Greenfield International Airport, and Lothal NMHC complex.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DESTINATION SHOWCASE WITH TOGGLE & DEDICATED BUTTONS (Fixes Issue 5) */}
      <section className="section destination-section">
        <div className="container">
          <div className="destination-top-bar">
            <div className="region-toggle-wrapper">
              <div className="toggle">
                <button 
                  className={activeRegion === 'dholera' ? 'active' : ''}
                  onClick={() => setActiveRegion('dholera')}
                >
                  <Building2 size={16} /> Dholera SIR
                </button>
                <button 
                  className={activeRegion === 'lothal' ? 'active' : ''}
                  onClick={() => setActiveRegion('lothal')}
                >
                  <Landmark size={16} /> Lothal Heritage
                </button>
              </div>
            </div>
            <span className="destination-note">
              Two distinct growth stories located 35 km apart along Gujarat’s coastal corridor.
            </span>
          </div>

          <div className="destination-showcase-card">
            <div className="dest-copy-pane">
              <span className="eyebrow green">{regionData.eyebrow}</span>
              <h2>{regionData.title}</h2>
              <p className="dest-tagline">{regionData.tagline}</p>
              <p className="dest-desc">{regionData.description}</p>

              <div className="dest-stats-grid">
                {regionData.stats.map((s, idx) => (
                  <div key={idx} className="dest-stat-item">
                    <span className="dest-stat-val">{s.value}</span>
                    <span className="dest-stat-lbl">{s.label}</span>
                  </div>
                ))}
              </div>

              {/* Fix Issue 5: Separate explore buttons taking to their specific pages */}
              <div className="dest-actions-row">
                {activeRegion === 'dholera' ? (
                  <Link to="/dholera" className="btn primary">
                    Explore Dholera SIR Portal <ArrowRight size={16} />
                  </Link>
                ) : (
                  <Link to="/lothal" className="btn primary">
                    Explore Lothal Heritage Portal <ArrowRight size={16} />
                  </Link>
                )}
                <Link to={`/land?region=${activeRegion}`} className="btn outline">
                  View {regionData.label} Land Options
                </Link>
              </div>
            </div>

            <div className="dest-image-pane">
              <img 
                src={regionData.hero} 
                alt={regionData.title} 
                className="dest-main-img" 
              />
              <div className="dest-image-overlay-badge">
                <strong>{regionData.label}</strong>
                <small>{activeRegion === 'dholera' ? 'Greenfield Smart Metropolis' : 'Harappan Port & NMHC Complex'}</small>
              </div>
            </div>
          </div>

          {/* Land grid preview for the active region */}
          <div className="land-preview-block">
            <div className="section-head compact">
              <div>
                <h3>{regionData.landTitle}</h3>
                <p>{regionData.landSubtitle}</p>
              </div>
              <Link to={`/land?region=${activeRegion}`} className="text-link">
                View All {regionData.label} Plots <ArrowRight size={16} />
              </Link>
            </div>

            <div className="land-grid">
              {regionData.lands.map((land) => (
                <div className="land-card" key={land.id || land.title}>
                  <div className="land-card-img-wrap">
                    <img src={`/assets/${land.img}`} alt={land.title} />
                    <span className="land-badge">{land.category}</span>
                  </div>
                  <div className="land-body">
                    <h4>{land.title}</h4>
                    <p>{land.desc}</p>
                    {land.specs && (
                      <div className="land-specs-mini">
                        <span>Road: {land.specs.roadWidth}</span>
                        <span>FSI: {land.specs.fsi}</span>
                      </div>
                    )}
                    <Link 
                      to={`/contact?interest=${encodeURIComponent(land.title)}&region=${encodeURIComponent(regionData.label)}`} 
                      className="land-enquire-link"
                    >
                      Enquire on this Plot <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. MODERN TRANSFORMATION MILESTONES (Fixes Issue 6: Replaces crude 4px progress bar) */}
      <section className="section roadmap-section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow green">REGIONAL TRANSFORMATION ROADMAP</span>
              <h2>From Blueprint to Industrial Reality (2007 &rarr; 2030+)</h2>
            </div>
            <p>
              Understand Dholera’s disciplined execution phases instead of viewing the region only through speculative claims.
            </p>
          </div>

          {/* Interactive Phase Selector Pills */}
          <div className="milestone-tabs">
            {transformationMilestones.map((m, idx) => (
              <button
                key={m.year}
                className={`milestone-tab-btn ${idx === activeMilestone ? 'active' : ''}`}
                onClick={() => setActiveMilestone(idx)}
              >
                <span className="m-phase-tag">{m.phase}</span>
                <strong className="m-year">{m.year}</strong>
                <span className="m-title-mini">{m.badge}</span>
              </button>
            ))}
          </div>

          {/* Modern Milestone Visual Card */}
          <div className="milestone-feature-card">
            <div className="m-card-content">
              <div className="m-card-badge-row">
                <span className="badge-pill green">{milestone.badge}</span>
                <span className="m-year-tag">{milestone.year}</span>
              </div>
              <h3>{milestone.title}</h3>
              <p className="m-card-desc">{milestone.description}</p>

              <div className="m-metrics-grid">
                {milestone.metrics.map((met, i) => (
                  <div key={i} className="m-metric-box">
                    <span className="m-metric-val">{met.value}</span>
                    <span className="m-metric-lbl">{met.label}</span>
                  </div>
                ))}
              </div>

              <div className="m-takeaway-box">
                <CheckCircle2 size={18} />
                <span><strong>Milestone Impact:</strong> {milestone.keyTakeaway}</span>
              </div>
            </div>

            <div className="m-card-media">
              <img src={milestone.image} alt={milestone.title} />
            </div>
          </div>
        </div>
      </section>

      {/* 5. 5-MODE REGIONAL CONNECTIVITY */}
      <section className="connectivity-section">
        <div className="container">
          <div className="section-head light">
            <div>
              <span className="eyebrow green-light">MULTIMODAL LOGISTICS NETWORK</span>
              <h2>5-Mode Integrated Connectivity</h2>
            </div>
            <p>
              Air &bull; Express Highway &bull; High-Speed MRTS &bull; Deep-Sea Ports &bull; Dedicated Freight Corridors
            </p>
          </div>

          <div className="transport-grid">
            {transport.map((item) => {
              const Icon = connectivityIcons[item.mode] || Compass;
              return (
                <div className="transport-card" key={item.mode}>
                  <div className="t-icon-box">
                    <Icon size={26} />
                  </div>
                  <span className="t-mode-tag">{item.mode}</span>
                  <h4>{item.title}</h4>
                  <span className="t-route">{item.route}</span>
                  <p>{item.desc}</p>
                  <div className="t-status">
                    <CheckCircle2 size={14} />
                    <span>{item.status}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. LATEST BLOGS WITH FULL ARTICLE READER (Fixes Issue 8) */}
      <section className="section blogs-preview-section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow green">RESEARCH &amp; REGIONAL INSIGHTS</span>
              <h2>Latest Articles &amp; Authority Reports</h2>
            </div>
            <Link to="/blogs" className="text-link">
              View All 6 Articles <ArrowRight size={16} />
            </Link>
          </div>

          <div className="blog-grid">
            {blogs.slice(0, 3).map((article) => (
              <div 
                className="blog-card interactive" 
                key={article.id}
                onClick={() => setSelectedArticle(article)}
              >
                <div className="blog-card-img-wrap">
                  <img src={`/assets/${article.image}`} alt={article.title} />
                  <span className="blog-cat-badge">{article.category}</span>
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span>{article.date}</span>
                    <span>&bull;</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h4>{article.title}</h4>
                  <p>{article.excerpt}</p>
                  <button className="read-article-btn">
                    Read Full Article &amp; Citations <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ENQUIRY STRIP */}
      <section className="section enquiry-strip-section">
        <div className="container enquiry-strip-container">
          <div className="enquiry-text-pane">
            <span className="eyebrow green">EXPERT LAND ADVISORY</span>
            <h2>Make Informed Land Decisions in Dholera &amp; Lothal.</h2>
            <p>
              Whether you require plug-and-play industrial plots in Dholera TP2, commercial frontage on the Central Spine, or tourism acreage near Lothal NMHC, our land advisors provide complete title verification and zoning guidance.
            </p>
            <div className="enquiry-bullet-list">
              <div className="enquiry-bullet">
                <CheckCircle2 size={18} />
                <span>100% Verified DSIRDA Town Planning Scheme Allocations</span>
              </div>
              <div className="enquiry-bullet">
                <CheckCircle2 size={18} />
                <span>Revenue Department 7/12 &amp; Non-Encumbrance Due Diligence</span>
              </div>
              <div className="enquiry-bullet">
                <CheckCircle2 size={18} />
                <span>Single-Window Clearance Assistance for Industrial Investors</span>
              </div>
            </div>
          </div>

          <div className="enquiry-form-pane">
            <EnquiryForm formTitle="Schedule an Advisory Consultation" />
          </div>
        </div>
      </section>

      {/* Full Article Reader Modal (Fixes Issue 8) */}
      <ArticleReaderModal 
        article={selectedArticle} 
        onClose={() => setSelectedArticle(null)} 
      />
    </div>
  );
}
