import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, Landmark, ArrowRight, CheckCircle2, ShieldCheck, 
  MapPin, TrendingUp, Scale, Compass, Award, ExternalLink
} from 'lucide-react';
import { destinations, transformationMilestones } from '../data/siteData';

export default function AboutPage() {
  // Fix Issue 10: Interactive toggle for Dholera and Lothal on the About page
  const [activeRegion, setActiveRegion] = useState('dholera');
  // Fix Issue 6: Replaces ugly progress bar with interactive modern milestone roadmap
  const [activeMilestone, setActiveMilestone] = useState(2);

  const region = destinations[activeRegion];
  const milestone = transformationMilestones[activeMilestone];

  const comparisonData = [
    {
      parameter: 'Primary Focus & Identity',
      dholera: 'Greenfield Industrial Smart Metropolis & Clean Energy Hub',
      lothal: 'Ancient Maritime Heritage & International Cultural Tourism'
    },
    {
      parameter: 'Total Scale / Footprint',
      dholera: '920 sq. km (Phase 1 Activation: 22.5 sq. km)',
      lothal: '400 Acres NMHC Masterplan & Surrounding Tourism Corridor'
    },
    {
      parameter: 'Governing Authorities',
      dholera: 'DSIRDA, DICDL, Gujarat SIR Board, DMICDC',
      lothal: 'Ministry of Ports, Shipping & Waterways (MoPSW), ASI'
    },
    {
      parameter: 'Flagship Anchor Project',
      dholera: 'Tata Electronics Semiconductor Wafer Fab (₹91,000 Cr)',
      lothal: 'National Maritime Heritage Complex & 77m Lighthouse Museum (₹4,500+ Cr)'
    },
    {
      parameter: 'Key Infrastructure',
      dholera: 'Subterranean utility ducts, SCADA ABCD building, 4,400 MW Solar Park',
      lothal: 'World-class 14-gallery museum, underwater gallery, tourist theme park'
    },
    {
      parameter: 'Target Investor Profile',
      dholera: 'Tech manufacturers, logistics operators, commercial developers, town planners',
      lothal: 'Hospitality chains, resort developers, retail plazas, cultural foundations'
    }
  ];

  return (
    <div className="about-page">
      {/* Page Header with Interactive Region Switcher (Fixes Issue 10) */}
      <section className="about-hero-section">
        <div className="container">
          <div className="about-hero-content">
            <span className="eyebrow green">ABOUT THE REGION &bull; STRATEGIC OVERVIEW</span>
            <h1>Two Distinct Stories. One Powerful Corridor.</h1>
            <p className="about-hero-lead">
              Separated by just 35 kilometers along Gujarat’s coastal plain, Dholera and Lothal represent complementary pillars of India’s economic growth: future-focused industrial innovation and globally significant maritime heritage.
            </p>

            {/* Region Toggle (Issue 10) */}
            <div className="about-toggle-box">
              <span className="toggle-label">Select Region to Explore Details:</span>
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
                <Link to={`/land?region=${activeRegion}`} className="btn outline">
                  View {region.label} Land Options
                </Link>
              </div>
            </div>

            <div className="about-region-media">
              <img src={region.hero} alt={region.title} className="rounded-img shadow" />
            </div>
          </div>
        </div>
      </section>

      {/* Modern Milestone Roadmap (Fixes Issue 6: Replaces the crude 4px progress bar) */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow green">EXECUTION TIMELINE</span>
              <h2>Milestone-Driven Transformation (2007 &rarr; 2030+)</h2>
            </div>
            <p>
              Track statutory planning, ground execution, and industrial activation across key developmental horizons.
            </p>
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
                <span><strong>Key Milestone Impact:</strong> {milestone.keyTakeaway}</span>
              </div>
            </div>

            <div className="m-card-media">
              <img src={milestone.image} alt={milestone.title} />
            </div>
          </div>
        </div>
      </section>

      {/* Comparative Analysis Matrix */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow green">COMPARATIVE ANALYSIS</span>
              <h2>Side-by-Side Regional Comparison</h2>
            </div>
            <p>
              Compare core economic drivers, regulatory authorities, and investment profiles between Dholera SIR and Lothal.
            </p>
          </div>

          <div className="comparison-table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Evaluation Parameter</th>
                  <th><Building2 size={16} /> Dholera SIR</th>
                  <th><Landmark size={16} /> Lothal Heritage Corridor</th>
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

      {/* Advisory & Trust Methodology */}
      <section className="section">
        <div className="container">
          <div className="advisory-trust-banner">
            <div className="trust-head">
              <ShieldCheck size={36} />
              <div>
                <h2>Our Land Due Diligence Framework</h2>
                <p>Ensuring transparency, title security, and regulatory compliance for every transaction.</p>
              </div>
            </div>
            <div className="trust-steps-grid">
              <div className="trust-step">
                <div className="step-num">01</div>
                <h4>30-Year Title Search</h4>
                <p>Comprehensive search of sub-registrar indices, mutation registers (Form 6), and 7/12 land revenue records.</p>
              </div>
              <div className="trust-step">
                <div className="step-num">02</div>
                <h4>DSIRDA &amp; TP Verification</h4>
                <p>Validating whether plots fall under OP (Original Plot) or FP (Final Reconstituted Plot) with exact road right-of-ways.</p>
              </div>
              <div className="trust-step">
                <div className="step-num">03</div>
                <h4>Utility Feasibility</h4>
                <p>Confirming direct hook-up potential to subterranean potable water, industrial recycled water, and 66kV power grids.</p>
              </div>
              <div className="trust-step">
                <div className="step-num">04</div>
                <h4>Single-Window Support</h4>
                <p>Assistance with NA permissions, GujRERA registration, and industrial allocation clearances through DICDL.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
