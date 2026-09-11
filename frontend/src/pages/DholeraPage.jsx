import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, ArrowRight, ShieldCheck, MapPin, Zap, 
  Cpu, Plane, Route, Droplets, CheckCircle2, FileCheck, Layers
} from 'lucide-react';
import { destinations } from '../data/siteData';
import EnquiryForm from '../components/EnquiryForm';

export default function DholeraPage() {
  const dholera = destinations.dholera;

  const megaProjects = [
    {
      icon: Cpu,
      title: 'Tata Electronics Semiconductor Fab',
      budget: '₹91,000 Cr ($11 Billion)',
      partner: 'In partnership with PSMC (Taiwan)',
      desc: 'India’s premier commercial semiconductor wafer manufacturing facility covering 160+ acres in Dholera SIR. Producing high-yield 28nm, 40nm, 55nm, and 90nm nodes for automotive, defense, and high-performance computing.'
    },
    {
      icon: Plane,
      title: 'Dholera Greenfield International Airport',
      budget: 'Phase 1 Outlay ₹1,305 Cr',
      partner: 'AAI (51%), Govt of Gujarat (33%), NICDIT (16%)',
      desc: 'Located at Navagam over 1,426 hectares with a 3,200m runway certified for 4E category wide-body aircraft (Boeing 777, Airbus A350), specialized cold-chain air cargo terminal, and high-frequency passenger facilities.'
    },
    {
      icon: Route,
      title: 'Ahmedabad–Dholera Expressway (NH-751)',
      budget: '₹4,000+ Cr Project',
      partner: 'National Highways Authority of India (NHAI)',
      desc: '109 km access-controlled 6-lane concrete highway linking Ahmedabad SP Ring Road to Dholera SIR in 45 minutes, integrated with automated tolling and Intelligent Traffic Management Systems (ITMS).'
    },
    {
      icon: Zap,
      title: '4,400 MW Ultra Mega Solar Park',
      budget: '₹25,000+ Cr Total Solar Ecosystem',
      partner: 'Gujarat Power Corporation Ltd (GPCL)',
      desc: 'Spanning 11,000 hectares along the Gulf of Khambhat coastline, providing 100% clean, low-carbon electricity allowing industrial units in Dholera to achieve zero-emission certifications.'
    },
    {
      icon: Droplets,
      title: 'Subterranean Smart Utilities & SCADA Network',
      budget: 'Activation Area Trunk Infrastructure',
      partner: 'L&T / Cube Construction / DSIRDA',
      desc: '100% underground trunk infrastructure with zero road digging: potable water, tertiary treated industrial water, sewage pipelines, 66kV power lines, city gas grid, and fiber optics managed via the LEED Gold ABCD command building.'
    }
  ];

  const tpSchemes = [
    { scheme: 'TP 1', area: '154 sq. km', status: 'Sanctioned & Reconstituted', focus: 'Residential Townships, High-Access Corridor, City Center, Commercial Towers' },
    { scheme: 'TP 2 (Activation)', area: '102 sq. km (22.5 km² Active)', status: 'Trunk Infrastructure Operational', focus: 'High-Tech Industrial, Semiconductors, Heavy Manufacturing, Warehousing' },
    { scheme: 'TP 3 & 4', area: '210 sq. km', status: 'Draft Finalized', focus: 'Aviation Logistics, Cargo Freight Corridors, Knowledge Parks, Educational Campuses' },
    { scheme: 'TP 5 & 6', area: '454 sq. km', status: 'Masterplan Delineated', focus: 'Solar Energy Park, Coastal Tourism, Port Connectivity, Environmental Buffers' }
  ];

  return (
    <div className="region-detail-page">
      {/* Page Hero */}
      <section className="region-hero" style={{ backgroundImage: `linear-gradient(135deg, rgba(8, 28, 47, 0.94) 0%, rgba(8, 28, 47, 0.7) 100%), url(/assets/hero-dholera.png)` }}>
        <div className="container">
          <div className="region-hero-content">
            <span className="badge-pill green">DHOLERA SPECIAL INVESTMENT REGION (SIR)</span>
            <h1>India’s Greenfield Smart Metropolis</h1>
            <p className="region-hero-desc">
              Covering 920 sq. kilometers, Dholera SIR is India’s flagship planned industrial and smart-city ecosystem under the Delhi-Mumbai Industrial Corridor (DMIC). Built with subterranean trunk utilities, 4,400 MW solar power, and India’s premier semiconductor fab.
            </p>
            <div className="region-hero-stats">
              <div className="r-stat">
                <strong>920 km²</strong>
                <span>Total Masterplan</span>
              </div>
              <div className="r-stat">
                <strong>22.5 km²</strong>
                <span>TP2 Activation Area</span>
              </div>
              <div className="r-stat">
                <strong>₹91,000 Cr</strong>
                <span>Tata Semiconductor Fab</span>
              </div>
              <div className="r-stat">
                <strong>4,400 MW</strong>
                <span>Ultra Solar Park</span>
              </div>
            </div>
            <div className="region-hero-actions">
              <Link to="/land?region=dholera" className="btn primary lg">
                View Dholera Land Catalog <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn ghost lg">
                Consult Dholera Specialist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Strategic Advantage */}
      <section className="section">
        <div className="container">
          <div className="two-col-layout">
            <div className="two-col-copy">
              <span className="eyebrow green">MASTERPLAN VISION</span>
              <h2>A Global Benchmark in Urban and Industrial Planning</h2>
              <p>
                Dholera Special Investment Region is administered by the Dholera SIR Development Authority (DSIRDA) and executed through Dholera Industrial City Development Limited (DICDL), a joint venture between the Government of India and the Government of Gujarat.
              </p>
              <p>
                Unlike conventional unorganized industrial expansions, Dholera was pre-planned by international master planners AECOM and Halcrow. The entire city is engineered on the principle of self-sustainability: 100% automated wastewater recycling, sensor-monitored smart grids, flood-resilient stormwater management bunds, and dedicated non-motorized transport lanes.
              </p>
              <div className="highlight-pill-row">
                <span className="pill-item"><ShieldCheck size={14} /> DSIRDA Single-Window Clearances</span>
                <span className="pill-item"><FileCheck size={14} /> Reconstituted Final Plots (FP)</span>
                <span className="pill-item"><Zap size={14} /> Uninterrupted Green Power Tariffs</span>
              </div>
            </div>
            <div className="two-col-img-wrap">
              <img src="/assets/dholera-industrial.jpg" alt="Dholera Smart City Infrastructure" className="rounded-img shadow" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Mega Projects */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow green">PILLARS OF TRANSFORMATION</span>
              <h2>Flagship Infrastructure &amp; Mega Investments</h2>
            </div>
            <p>
              Key catalysts driving unprecedented industrial demand and capital appreciation across Dholera SIR.
            </p>
          </div>

          <div className="mega-projects-grid">
            {megaProjects.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div className="mega-project-card" key={idx}>
                  <div className="mp-icon-wrap">
                    <Icon size={24} />
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

      {/* Town Planning (TP) Schemes Breakdown */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow green">ZONING &amp; URBAN PLANNING</span>
              <h2>Town Planning Schemes (TP 1 to TP 6) Breakdown</h2>
            </div>
            <p>
              Dholera’s 920 sq. km region is systematically developed across 6 Town Planning Schemes, ensuring orderly development, clear road rights-of-way, and legally secure reconstituted Final Plots.
            </p>
          </div>

          <div className="tp-schemes-table-wrap">
            <table className="tp-table">
              <thead>
                <tr>
                  <th>TP Scheme</th>
                  <th>Covered Area</th>
                  <th>Current Development Status</th>
                  <th>Primary Land-Use &amp; Zoning Focus</th>
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

      {/* Available Land Types in Dholera */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-head compact">
            <div>
              <span className="eyebrow green">LAND ACQUISITION</span>
              <h2>Available Land Categories in Dholera SIR</h2>
              <p>Explore pre-zoned land opportunities suited to your industrial, commercial, or investment goals.</p>
            </div>
            <Link to="/land?region=dholera" className="btn primary">
              Browse All Dholera Land <ArrowRight size={16} />
            </Link>
          </div>

          <div className="land-grid">
            {dholera.lands.map((land) => (
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
                      <span><strong>Access:</strong> {land.specs.roadWidth}</span>
                      <span><strong>FSI:</strong> {land.specs.fsi}</span>
                    </div>
                  )}
                  <Link 
                    to={`/contact?interest=${encodeURIComponent(land.title)}&region=Dholera+SIR`} 
                    className="land-enquire-link"
                  >
                    Discuss Land Parcel <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Block */}
      <section className="section">
        <div className="container enquiry-strip-container">
          <div>
            <span className="eyebrow green">CONNECT WITH DHOLERA ADVISORS</span>
            <h2>Verify Plots, TP Schemes &amp; Subterranean Utility Access</h2>
            <p>
              Speak with our regional land consultants to verify DSIRDA zoning certificates, AnyROR 7/12 extracts, and exact plot dimensions along the Central Spine and Activation Area.
            </p>
          </div>
          <EnquiryForm initialRegion="Dholera SIR" formTitle="Consult on Dholera SIR Land" />
        </div>
      </section>
    </div>
  );
}
