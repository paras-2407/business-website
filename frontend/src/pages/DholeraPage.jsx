import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, ArrowRight, ShieldCheck, Zap, 
  Cpu, Plane, Route, Droplets, CheckCircle2, FileCheck, Layers
} from 'lucide-react';
import EnquiryForm from '../components/EnquiryForm';

export default function DholeraPage() {
  const megaProjects = [
    {
      icon: Cpu,
      title: 'Tata Electronics Semiconductor Fab',
      budget: '₹91,000 Cr ($11 Billion)',
      partner: 'Partnership with PSMC (Taiwan)',
      desc: 'India’s first commercial semiconductor wafer fab covering 160+ acres in Dholera SIR, producing 28nm to 90nm chips for automotive and computing.'
    },
    {
      icon: Plane,
      title: 'Dholera Greenfield Int\'l Airport',
      budget: 'Phase 1: ₹1,305 Cr',
      partner: 'AAI (51%), Govt of Gujarat (33%), NICDIT (16%)',
      desc: '3,200m runway certified for 4E category wide-body aircraft (Boeing 777, A350) with integrated air cargo logistics.'
    },
    {
      icon: Route,
      title: 'Ahmedabad–Dholera Expressway (NH-751)',
      budget: '109 km 6-Lane Expressway',
      partner: 'NHAI Bharatmala Project',
      desc: 'Connects Ahmedabad SP Ring Road to Dholera SIR in 45 minutes with intelligent traffic management systems.'
    },
    {
      icon: Zap,
      title: '4,400 MW Ultra Mega Solar Park',
      budget: '11,000 Hectares along Coastal Belt',
      partner: 'Gujarat Power Corporation Ltd (GPCL)',
      desc: 'Provides 100% clean renewable electricity allowing industrial units in Dholera to achieve zero-emission certifications.'
    },
    {
      icon: Droplets,
      title: 'Subterranean Smart Utilities & SCADA',
      budget: '22.5 km² Activation Area Trunk Line',
      partner: 'DSIRDA / DICDL Command Center',
      desc: '100% underground trunk infrastructure: water, recycled water, power conduits, gas grid, and fiber optics managed via the LEED Gold ABCD complex.'
    }
  ];

  const tpSchemes = [
    { scheme: 'TP 1', area: '154 sq. km', status: 'Sanctioned', focus: 'Residential Townships, City Center, Commercial Towers' },
    { scheme: 'TP 2 (Activation)', area: '102 sq. km (22.5 km² Active)', status: 'Operational', focus: 'High-Tech Industrial, Semiconductors, Heavy Manufacturing' },
    { scheme: 'TP 3 & 4', area: '210 sq. km', status: 'Draft Finalized', focus: 'Aviation Logistics, Cargo Freight Corridors, Knowledge Parks' },
    { scheme: 'TP 5 & 6', area: '454 sq. km', status: 'Masterplan Delineated', focus: 'Solar Energy Park, Coastal Tourism, Port Connectivity' }
  ];

  const clusters = [
    {
      title: 'High-Tech Electronics & Semiconductor Zone',
      zone: 'TP2 Activation Area',
      desc: 'Plug-and-play plots with underground 66kV power, industrial recycled water, and direct expressway links.',
      img: 'dholera-industrial.jpg'
    },
    {
      title: 'Central Spine Commercial District',
      zone: 'TP1 & TP2 Confluence',
      desc: 'Prime corporate frontage along the 70m central spine road adjacent to the ABCD administrative center.',
      img: 'dholera-abcd-building.jpg'
    },
    {
      title: 'Smart Residential Sectors',
      zone: 'TP1 Township Zone',
      desc: 'Planned residential neighborhoods with civic parks, 24/7 treated water, and smart civic infrastructure.',
      img: 'dholera-airport.jpg'
    },
    {
      title: 'Clean Energy & Solar Belt',
      zone: 'Coastal Buffer Belt',
      desc: 'Home to the 4,400 MW ultra-mega solar installation powering sustainable industrial manufacturing.',
      img: 'dholera-solar.jpg'
    }
  ];

  return (
    <div className="region-detail-page">
      {/* Page Hero */}
      <section className="region-hero" style={{ backgroundImage: `linear-gradient(135deg, rgba(8, 28, 47, 0.94) 0%, rgba(8, 28, 47, 0.7) 100%), url(/assets/hero-dholera.png)` }}>
        <div className="container">
          <div className="region-hero-content">
            <span className="badge-pill green">DHOLERA SPECIAL INVESTMENT REGION</span>
            <h1>India’s Greenfield Smart Metropolis</h1>
            <p className="region-hero-desc">
              920 sq. km planned industrial metropolis with plug-and-play underground utilities, a 4,400 MW solar park, and India’s premier semiconductor manufacturing cluster.
            </p>
            <div className="region-hero-stats">
              <div className="r-stat">
                <strong>920 km²</strong>
                <span>Masterplan</span>
              </div>
              <div className="r-stat">
                <strong>22.5 km²</strong>
                <span>Activation Area</span>
              </div>
              <div className="r-stat">
                <strong>₹91,000 Cr</strong>
                <span>Tata Fab Outlay</span>
              </div>
              <div className="r-stat">
                <strong>4,400 MW</strong>
                <span>Solar Capacity</span>
              </div>
            </div>
            <div className="region-hero-actions">
              <Link to="/contact" className="btn primary lg">
                Consult Dholera Specialist <ArrowRight size={16} />
              </Link>
              <Link to="/about" className="btn ghost lg">
                Compare with Lothal
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section">
        <div className="container">
          <div className="two-col-layout">
            <div className="two-col-copy">
              <span className="eyebrow green">MASTERPLAN OVERVIEW</span>
              <h2>Engineered for Self-Sustaining Growth</h2>
              <p>
                Dholera SIR is administered by DSIRDA and executed by DICDL under the Delhi-Mumbai Industrial Corridor (DMIC). Master-planned by AECOM and Halcrow, the city delivers plug-and-play trunk infrastructure with zero road digging.
              </p>
              <div className="highlight-pill-row">
                <span className="pill-item"><ShieldCheck size={14} /> DSIRDA Single-Window Clearances</span>
                <span className="pill-item"><FileCheck size={14} /> Reconstituted Final Plots (FP)</span>
                <span className="pill-item"><Zap size={14} /> 100% Dedicated Green Power</span>
              </div>
            </div>
            <div className="two-col-img-wrap">
              <img src="/assets/dholera-canal-infra.jpg" alt="Dholera Smart City Canal and Utility Infrastructure" className="rounded-img shadow" />
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Mega Projects */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-head compact">
            <div>
              <span className="eyebrow green">INFRASTRUCTURE PILLARS</span>
              <h2>Flagship Mega-Projects</h2>
            </div>
            <p>Key catalysts driving industrial demand across Dholera SIR.</p>
          </div>

          <div className="mega-projects-grid">
            {megaProjects.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div className="mega-project-card" key={idx}>
                  <div className="mp-icon-wrap">
                    <Icon size={22} />
                  </div>
                  <span className="mp-budget-tag">{p.budget}</span>
                  <h3>{p.title}</h3>
                  <span className="mp-partner">{p.partner}</span>
                  <p>{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Town Planning Schemes Breakdown */}
      <section className="section">
        <div className="container">
          <div className="section-head compact">
            <div>
              <span className="eyebrow green">URBAN PLANNING</span>
              <h2>Town Planning Schemes (TP 1 to TP 6)</h2>
            </div>
            <p>Orderly development with clear road rights-of-way and statutory zoning.</p>
          </div>

          <div className="tp-schemes-table-wrap">
            <table className="tp-table">
              <thead>
                <tr>
                  <th>TP Scheme</th>
                  <th>Covered Area</th>
                  <th>Status</th>
                  <th>Primary Focus</th>
                </tr>
              </thead>
              <tbody>
                {tpSchemes.map((row) => (
                  <tr key={row.scheme}>
                    <td><strong>{row.scheme}</strong></td>
                    <td>{row.area}</td>
                    <td><span className="status-pill active">{row.status}</span></td>
                    <td>{row.focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Strategic Development Clusters */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-head compact">
            <div>
              <span className="eyebrow green">DEVELOPMENT CLUSTERS</span>
              <h2>Strategic Urban &amp; Industrial Zones</h2>
            </div>
            <Link to="/contact" className="btn primary sm">
              Enquire on Allocations <ArrowRight size={14} />
            </Link>
          </div>

          <div className="land-grid">
            {clusters.map((c, i) => (
              <div className="land-card" key={i}>
                <div className="land-card-img-wrap">
                  <img src={`/assets/${c.img}`} alt={c.title} />
                  <span className="land-badge">{c.zone}</span>
                </div>
                <div className="land-body">
                  <h4>{c.title}</h4>
                  <p>{c.desc}</p>
                  <Link to="/contact" className="land-enquire-link">
                    Enquire on this Cluster <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="section">
        <div className="container enquiry-strip-container">
          <div>
            <span className="eyebrow green">CONNECT WITH SPECIALISTS</span>
            <h2>Verify Plots, Masterplans &amp; Utilities</h2>
            <p>
              Speak with our Gujarat land consultants to verify DSIRDA zoning certificates, AnyROR 7/12 records, and road dimensions.
            </p>
          </div>
          <EnquiryForm initialRegion="Dholera SIR" formTitle="Consult on Dholera SIR" />
        </div>
      </section>
    </div>
  );
}
