import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Landmark, ArrowRight, CheckCircle2, ShieldCheck, MapPin, Mail } from 'lucide-react';
import { destinations, transformationMilestones } from '../data/siteData';

export default function AboutPage() {
  const [activeRegion, setActiveRegion] = useState('dholera');
  const [activeMilestone, setActiveMilestone] = useState(2);

  const region = destinations[activeRegion];
  const milestone = transformationMilestones[activeMilestone];

  const comparisonData = [
    {
      parameter: 'Core Focus',
      dholera: 'Greenfield Smart Metropolis & Clean Energy Hub',
      lothal: 'Ancient Maritime Heritage & Cultural Tourism'
    },
    {
      parameter: 'Planned Scale',
      dholera: '920 sq. km (22.5 sq. km Phase 1 Active)',
      lothal: '400 Acres NMHC Masterplan + Tourism Belt'
    },
    {
      parameter: 'Governing Body',
      dholera: 'DSIRDA, DICDL, Gujarat SIR Board, DMICDC',
      lothal: 'Ministry of Ports, Shipping & Waterways, ASI'
    },
    {
      parameter: 'Flagship Anchor',
      dholera: 'Tata Electronics Semiconductor Fab (₹91,000 Cr)',
      lothal: 'National Maritime Heritage Complex (₹4,500+ Cr)'
    },
    {
      parameter: 'Key Infrastructure',
      dholera: 'Subterranean utilities, SCADA ABCD hub, Solar Park',
      lothal: '14-gallery museum, 77m lighthouse, theme park'
    },
    {
      parameter: 'Target Sectors',
      dholera: 'Semiconductors, Electronics, Heavy Engineering',
      lothal: 'Hospitality, Resorts, Cultural Plazas, Academies'
    }
  ];

  return (
    <div className="about-page">
      {/* 1. ABOUT US: URBAN KEYS INFRA COMPANY SECTION */}
      <section className="about-company-hero">
        <div className="container">
          <div className="about-company-grid">
            <div className="about-company-text">
              <span className="eyebrow green">ABOUT URBAN KEYS INFRA &bull; JAIPUR, RAJASTHAN</span>
              <h1>20+ Years of Trusted Real Estate Consultancy</h1>
              <p className="about-company-lead">
                <strong>Urban Keys Infra</strong> is a distinguished real estate consultancy based in <strong>Jaipur</strong>, operating under the established firm name <strong>Goyal Lifetime Properties</strong> at Sikar Road, Jaipur. With an illustrious track record spanning over <strong>20+ years</strong>, we specialize in empowering individuals, families, and institutional investors to choose their ideal property - whether high-appreciation residential land or strategic commercial corridors.
              </p>
              <p className="about-company-subtext">
                With deep roots in Rajasthan and strategic expansion into Gujarat’s landmark growth belts - including the futuristic <strong>Dholera SIR Smart City</strong> and the historic <strong>Lothal National Maritime Heritage Complex (NMHC)</strong> - Urban Keys Infra delivers end-to-end consulting, verified cadastral due diligence, and litigation-free property curation.
              </p>

              <div className="company-stats-strip">
                <div className="c-stat-box">
                  <strong className="c-stat-val">20+</strong>
                  <span className="c-stat-lbl">Years Consultancy Experience</span>
                </div>
                <div className="c-stat-box">
                  <strong className="c-stat-val">Jaipur</strong>
                  <span className="c-stat-lbl">Corporate Headquarters</span>
                </div>
                <div className="c-stat-box">
                  <strong className="c-stat-val">Res &amp; Com</strong>
                  <span className="c-stat-lbl">Land Specialization</span>
                </div>
                <div className="c-stat-box">
                  <strong className="c-stat-val">100%</strong>
                  <span className="c-stat-lbl">Verified Due Diligence</span>
                </div>
              </div>

              <div className="about-company-actions">
                <Link to="/contact" className="btn primary lg">
                  Consult Our Jaipur Desk <ArrowRight size={16} />
                </Link>
                <a href="#regional-overview" className="btn outline lg">
                  Explore Gujarat Corridors
                </a>
              </div>
            </div>

            <div className="about-company-card-wrap">
              <div className="company-showcase-card">
                <div className="company-logo-badge">
                  <img src="/assets/urban-keys-logo.png" alt="Urban Keys Infra Logo" className="c-logo-large" />
                </div>
                <h3>Urban Keys Infra</h3>
                <span className="company-tagline">Excellence in Real Estate Consultancy</span>
                <p className="company-bio-mini">
                  Guiding you home and growing your capital with 20+ years of steadfast integrity, market foresight, and complete transparency.
                </p>

                <div className="company-features-list">
                  <div className="c-feat-row">
                    <CheckCircle2 size={18} className="feat-check" />
                    <div>
                      <strong>Residential Land Guidance</strong>
                      <span>Villa plots, township sectors &amp; peaceful country estates.</span>
                    </div>
                  </div>
                  <div className="c-feat-row">
                    <CheckCircle2 size={18} className="feat-check" />
                    <div>
                      <strong>Commercial &amp; Industrial Land</strong>
                      <span>Expressway frontage, corporate corridors &amp; tourism plots.</span>
                    </div>
                  </div>
                  <div className="c-feat-row">
                    <CheckCircle2 size={18} className="feat-check" />
                    <div>
                      <strong>Multi-Tier Legal Title Search</strong>
                      <span>Form 7/12, Form 6 mutation records &amp; DSIRDA masterplan verification.</span>
                    </div>
                  </div>
                </div>

                <div className="company-quick-contact">
                  <div className="c-qc-item">
                    <Mail size={15} />
                    <span>urbankeysinfra@gmail.com</span>
                  </div>
                  <div className="c-qc-item">
                    <MapPin size={15} />
                    <span>Jaipur, Rajasthan &bull; Dholera SIR Desk, Gujarat</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REGIONAL INTELLIGENCE: DHOLERA & LOTHAL OVERVIEW */}
      <section className="about-hero-section" id="regional-overview">
        <div className="container">
          <div className="about-hero-content">
            <span className="eyebrow green">REGIONAL INTELLIGENCE &bull; STRATEGIC OVERVIEW</span>
            <h2>Two Distinct Stories. One Powerful Corridor.</h2>
            <p className="about-hero-lead">
              Separated by 35 kilometers along Gujarat’s coast, Dholera and Lothal represent complementary pillars: high-tech industrial innovation and 4,500-year maritime heritage. Urban Keys Infra connects investors directly to both ecosystems.
            </p>

            <div className="about-toggle-box">
              <span className="toggle-label">Select Region to View Overview:</span>
              <div className="toggle large">
                <button
                  className={activeRegion === 'dholera' ? 'active' : ''}
                  onClick={() => setActiveRegion('dholera')}
                >
                  <Building2 size={18} /> Dholera SIR (Smart City)
                </button>
                <button
                  className={activeRegion === 'lothal' ? 'active' : ''}
                  onClick={() => setActiveRegion('lothal')}
                >
                  <Landmark size={18} /> Lothal (Maritime Heritage)
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Region Showcase */}
      <section className="section bg-light">
        <div className="container">
          <div className="about-region-showcase">
            <div className="about-region-copy">
              <span className="badge-pill green">{region.eyebrow}</span>
              <h2>{region.title}</h2>
              <p className="lead-text">{region.tagline}</p>
              <p>{region.description}</p>

              <div className="region-stats-row">
                {region.stats.map((s, idx) => (
                  <div key={idx} className="r-stat-item">
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>

              <div className="about-region-cta">
                <Link to={activeRegion === 'dholera' ? '/dholera' : '/lothal'} className="btn primary">
                  Go to Dedicated {region.label} Portal <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="btn outline">
                  Schedule Guided Site Visit
                </Link>
              </div>
            </div>

            <div className="about-region-media">
              <img src={region.hero} alt={region.title} className="rounded-img shadow" />
            </div>
          </div>
        </div>
      </section>

      {/* Modern Milestone Roadmap */}
      <section className="section">
        <div className="container">
          <div className="section-head compact">
            <div>
              <span className="eyebrow green">EXECUTION TIMELINE</span>
              <h2>Transformation Milestones (2007 &rarr; 2030+)</h2>
            </div>
            <p>Disciplined milestones from blueprint to active manufacturing.</p>
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

      {/* Side-by-Side Comparison Matrix */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-head compact">
            <div>
              <span className="eyebrow green">COMPARATIVE ANALYSIS</span>
              <h2>Side-by-Side Regional Comparison</h2>
            </div>
            <p>Key drivers, administrative authorities, and economic targets.</p>
          </div>

          <div className="comparison-table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Evaluation Parameter</th>
                  <th><Building2 size={15} /> Dholera SIR</th>
                  <th><Landmark size={15} /> Lothal Heritage Corridor</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i}>
                    <td><strong>{row.parameter}</strong></td>
                    <td>{row.dholera}</td>
                    <td>{row.lothal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Advisory Due Diligence Framework */}
      <section className="section">
        <div className="container">
          <div className="advisory-trust-banner">
            <div className="trust-head">
              <ShieldCheck size={32} />
              <div>
                <h2>Our Advisory &amp; Due Diligence Framework</h2>
                <p>Ensuring transparency and regulatory compliance across Gujarat's high-growth corridor.</p>
              </div>
            </div>
            <div className="trust-steps-grid">
              <div className="trust-step">
                <div className="step-num">01</div>
                <h4>Title Search</h4>
                <p>Checking revenue indices, Form 6 mutation records, and 7/12 land revenue extracts.</p>
              </div>
              <div className="trust-step">
                <div className="step-num">02</div>
                <h4>Masterplan Check</h4>
                <p>Validating whether plots fall under OP (Original) or FP (Final Reconstituted) schemes.</p>
              </div>
              <div className="trust-step">
                <div className="step-num">03</div>
                <h4>Utility Feasibility</h4>
                <p>Verifying access to underground water, industrial power, and expressway corridors.</p>
              </div>
              <div className="trust-step">
                <div className="step-num">04</div>
                <h4>Single-Window Support</h4>
                <p>Assisting with statutory clearances, NA permissions, and DICDL industrial allocations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
