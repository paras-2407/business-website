import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle2, MapPin, Building2, ShieldCheck, 
  TrendingUp, Landmark, Plane, Route as RouteIcon, TrainFront, 
  Ship, Waves, Sparkles, Cpu, Compass
} from 'lucide-react';
import { destinations, transformationMilestones, transport, blogs } from '../data/siteData';
import EnquiryForm from '../components/EnquiryForm';
import ArticleReaderModal from '../components/ArticleReaderModal';

export default function HomePage() {
  const [activeRegion, setActiveRegion] = useState('dholera');
  const [activeMilestone, setActiveMilestone] = useState(2);
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
      {/* 1. HERO SECTION */}
      <section className="hero">
        <div className="hero-bg-overlay" />
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <Sparkles size={14} />
              <span>GUJARAT STRATEGIC GROWTH BELT</span>
            </div>
            <h1>
              Dholera &amp; Lothal: <span>Smart Future &bull; Ancient Legacy</span>
            </h1>
            <p className="hero-lead">
              India’s largest planned greenfield smart city meets the world’s oldest maritime trade capital. Explore transformative industrial hubs and coastal heritage.
            </p>
            <div className="hero-actions">
              <Link to="/dholera" className="btn primary lg">
                <Building2 size={18} /> Explore Dholera SIR
              </Link>
              <Link to="/lothal" className="btn ghost lg">
                <Landmark size={18} /> Explore Lothal NMHC
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
                <span>Ahmedabad Transit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY THIS REGION - CONDENSED */}
      <section className="section why-section">
        <div className="container">
          <div className="section-head compact">
            <div>
              <span className="eyebrow green">STRATEGIC ADVANTAGES</span>
              <h2>Location. Infrastructure. Growth.</h2>
            </div>
            <p>Direct connectivity, planned trunk utilities, and world-class mega-anchors.</p>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon-box">
                <MapPin size={22} />
              </div>
              <h3>Multimodal Hub</h3>
              <p>Integrated with the Delhi-Mumbai Industrial Corridor, Western DFC, and coastal ports.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box">
                <Building2 size={22} />
              </div>
              <h3>Smart Utilities</h3>
              <p>Underground utility conduits for water, power, gas, and fiber with zero road digging.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box">
                <ShieldCheck size={22} />
              </div>
              <h3>Masterplan Security</h3>
              <p>DSIRDA Town Planning schemes with clear legal demarcation and single-window clearances.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-box">
                <TrendingUp size={22} />
              </div>
              <h3>National Catalysts</h3>
              <p>Anchored by Tata Semiconductor Fab, Dholera Airport, and Lothal Maritime Complex.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DESTINATION SHOWCASE WITH TOGGLE */}
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
              Two growth hubs separated by 35 km in Gujarat’s coastal belt.
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
                <Link to="/about" className="btn outline">
                  Compare Both Regions
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
                <small>{activeRegion === 'dholera' ? 'Greenfield Smart City' : 'Harappan Port & NMHC'}</small>
              </div>
            </div>
          </div>

          {/* Key Strategic Focus Areas for Active Region */}
          <div className="strategic-highlights-block">
            <div className="section-head compact">
              <div>
                <h3>Key Strategic Focus Areas: {regionData.label}</h3>
                <p>Core development sectors driving regional transformation.</p>
              </div>
              <Link to={activeRegion === 'dholera' ? '/dholera' : '/lothal'} className="text-link">
                Full Details <ArrowRight size={16} />
              </Link>
            </div>

            <div className="strategic-grid">
              {regionData.highlights.map((h, i) => (
                <div className="strategic-card" key={i}>
                  <div className="s-card-top">
                    {i === 0 ? <Cpu size={20} /> : i === 1 ? <RouteIcon size={20} /> : i === 2 ? <Plane size={20} /> : <Compass size={20} />}
                    <h4>{h.title}</h4>
                  </div>
                  <p>{h.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. MODERN TRANSFORMATION ROADMAP */}
      <section className="section roadmap-section">
        <div className="container">
          <div className="section-head compact">
            <div>
              <span className="eyebrow green">EXECUTION TIMELINE</span>
              <h2>Transformation Roadmap (2007 &rarr; 2030+)</h2>
            </div>
            <p>Key developmental phases from planning to operational manufacturing.</p>
          </div>

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
                <span><strong>Impact:</strong> {milestone.keyTakeaway}</span>
              </div>
            </div>

            <div className="m-card-media">
              <img src={milestone.image} alt={milestone.title} />
            </div>
          </div>
        </div>
      </section>

      {/* 5. 5-MODE CONNECTIVITY */}
      <section className="connectivity-section">
        <div className="container">
          <div className="section-head light compact">
            <div>
              <span className="eyebrow green-light">MULTIMODAL LOGISTICS</span>
              <h2>5-Mode Integrated Connectivity</h2>
            </div>
            <p>Air &bull; Express Highway &bull; High-Speed MRTS &bull; Deep-Sea Ports &bull; Freight Corridor</p>
          </div>

          <div className="transport-grid">
            {transport.map((item) => {
              const Icon = connectivityIcons[item.mode] || Compass;
              return (
                <div className="transport-card" key={item.mode}>
                  <div className="t-icon-box">
                    <Icon size={24} />
                  </div>
                  <span className="t-mode-tag">{item.mode}</span>
                  <h4>{item.title}</h4>
                  <span className="t-route">{item.route}</span>
                  <p>{item.desc}</p>
                  <div className="t-status">
                    <CheckCircle2 size={13} />
                    <span>{item.status}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. LATEST BLOGS PREVIEW */}
      <section className="section blogs-preview-section">
        <div className="container">
          <div className="section-head compact">
            <div>
              <span className="eyebrow green">RESEARCH BRIEFS</span>
              <h2>Latest Research &amp; Official Updates</h2>
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
                    Read Full Article <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ABOUT URBAN KEYS INFRA SPOTLIGHT */}
      <section className="section bg-light company-spotlight-section">
        <div className="container">
          <div className="spotlight-card">
            <div className="spotlight-logo-pane">
              <img src="/assets/urban-keys-logo.png" alt="Urban Keys Infra Logo" className="spotlight-logo" />
              <span className="spotlight-badge">JAIPUR &bull; GUJARAT CORRIDORS</span>
            </div>
            <div className="spotlight-copy-pane">
              <span className="eyebrow green">ESTABLISHED CONSULTANCY &bull; JAIPUR, RAJASTHAN</span>
              <h2>Urban Keys Infra: 20+ Years of Real Estate Excellence</h2>
              <p>
                Headquartered in <strong>Jaipur</strong>, Urban Keys Infra brings over <strong>20+ years</strong> of trusted real estate consultancy experience helping clients choose their favorite property — whether it is strategic investment in residential land or high-growth commercial land.
              </p>
              <p>
                We provide complete on-ground clarity, title due diligence, and zoning insights into Gujarat’s premier mega-corridors: <strong>Dholera SIR Smart City</strong> and the <strong>Lothal National Maritime Heritage Complex (NMHC)</strong>.
              </p>

              <div className="spotlight-stats-row">
                <div className="s-stat-item">
                  <strong>20+ Years</strong>
                  <span>Consultancy Legacy</span>
                </div>
                <div className="s-stat-item">
                  <strong>Jaipur</strong>
                  <span>Headquarters</span>
                </div>
                <div className="s-stat-item">
                  <strong>Res &amp; Com</strong>
                  <span>Land Specialization</span>
                </div>
                <div className="s-stat-item">
                  <strong>100%</strong>
                  <span>Verified Titles</span>
                </div>
              </div>

              <div className="spotlight-actions">
                <Link to="/about" className="btn primary">
                  Read About Urban Keys Infra <ArrowRight size={15} />
                </Link>
                <Link to="/contact" className="btn outline">
                  Contact Our Advisory Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. ENQUIRY SECTION */}
      <section className="section enquiry-strip-section">
        <div className="container enquiry-strip-container">
          <div className="enquiry-text-pane">
            <span className="eyebrow green">URBAN KEYS INFRA ADVISORY</span>
            <h2>Get In Touch With Urban Keys Infra Specialists</h2>
            <p>
              Connect directly with our consultancy team in Jaipur and regional desks in Gujarat for personalized property selection, masterplan guidance, and verified due diligence.
            </p>
            <div className="enquiry-bullet-list">
              <div className="enquiry-bullet">
                <CheckCircle2 size={18} />
                <span>20+ Years of Proven Real Estate Consultancy Experience</span>
              </div>
              <div className="enquiry-bullet">
                <CheckCircle2 size={18} />
                <span>Prime Residential &amp; Commercial Land Selection</span>
              </div>
              <div className="enquiry-bullet">
                <CheckCircle2 size={18} />
                <span>DSIRDA Masterplan &amp; NMHC Corridor Due Diligence</span>
              </div>
            </div>
          </div>

          <div className="enquiry-form-pane">
            <EnquiryForm formTitle="Schedule an Advisory Consultation" />
          </div>
        </div>
      </section>

      {/* Full Article Reader Modal - conditionally rendered for zero scroll-lock */}
      {selectedArticle && (
        <ArticleReaderModal 
          article={selectedArticle} 
          onClose={() => setSelectedArticle(null)} 
        />
      )}
    </div>
  );
}
